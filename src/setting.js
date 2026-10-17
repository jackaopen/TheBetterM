(function () {
  // Firefox uses browser; Chrome uses chrome.
  let extension = globalThis.browser;
  if (!extension) extension = chrome;

  const form = document.getElementById('appearance-form');
  const html = document.documentElement;
  const status = document.getElementById('appearance-status');
  const dashboardRedirSwitch = document.getElementById('brandToDashboard');
  // used to map the img setting 
  const imageSettings = { customBackground: '--site-background', customHeader: '--site-header' };
  const imageKeys = Object.keys(imageSettings);
  const settingKeys = ['customBackground', 'customHeader', 'themeSettings'];
  // store the img url to avoid storing deprecated objectURL in local storage
  const imageUrls = {};
  // avoid loading prev img 
  const imageVersions = { customBackground: 0, customHeader: 0 };

  function applyMode(mode) {
    html.dataset.bgtheme = 'light';
    if (mode === 'dark') html.dataset.bgtheme = 'dark';
  }

  function readMode(settings) {
    if (settings) return settings.mode;
    return 'light';
  }

  function setBusy(busy) {
    for (const control of form.querySelectorAll('input, select, button')) {
      control.disabled = busy;
    }
  }

  /**save the img to local storage and apply it to the page*/
  async function applyImage(key, imageData) {
    
    imageVersions[key] += 1;
    const requestNumber = imageVersions[key];
    let newUrl = null;
    
    if (imageData) {
      // data URL -> Blob -> ObjectURL.
      const response = await fetch(imageData);
      const imageBlob = await response.blob();
      if (requestNumber !== imageVersions[key]) return;
      
      // create reference to the img bolb to save css
      newUrl = URL.createObjectURL(imageBlob);
    }
    if (newUrl) html.style.setProperty(imageSettings[key], 'url("' + newUrl + '")');
    else html.style.removeProperty(imageSettings[key]);
    
    // Release the previous image so it no longer occupies memory.
    if (imageUrls[key]) URL.revokeObjectURL(imageUrls[key]);
    imageUrls[key] = newUrl;
  }

  /**Selected file → readImage → data URL → storage*/
  function readImage(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = function () { reject(reader.error); };
      reader.readAsDataURL(file);
    });
  }

  /**save to local storage */
  async function saveSettings(event) {
    event.preventDefault();
    setBusy(true);
    try {
      const mode = form.elements.themeMode.value;
      const settings = { themeSettings: { mode: mode } };
      for (const key of imageKeys) {
        const file = form.elements[key].files[0];
        if (!file) continue;
        if (!file.type.startsWith('image/')) throw new Error('Select an image file.');
        settings[key] = await readImage(file);
      }
      await extension.storage.local.set(settings);
      form.reset();
      form.elements.themeMode.value = mode;// set the select to the saved value
      applyMode(mode);
      status.textContent = 'saved.';
    } 
    catch (error) {
      status.textContent = 'Saving failed: error msg: ' + error.message;
    } 
    finally {
      setBusy(false);
    }
  }

  async function resetSettings() {
    setBusy(true);
    try {
      await extension.storage.local.remove(['customBackground', 
                                            'customHeader', 
                                            'themeSettings']);

      form.reset();
      applyMode('light');
      status.textContent = 'Defaults restored.';
    } 
    catch (error) {
      status.textContent = 'Reset failed. Please try again.';
    } 
    finally {
      setBusy(false);
    }
  }

  /** Handle changes to the local storage.*/
  function settingsChanged(changes, area) {
    if (area !== 'local') return;
    if ('themeSettings' in changes) {
      const mode = readMode(changes.themeSettings.newValue);
      applyMode(mode);
    }
    for (const key of imageKeys) {
      if (key in changes) {
        applyImage(key, changes[key].newValue).catch(console.warn);
      }
    }
  }

  /** Save the dashboard redirect setting to local storage*/
  async function savedashboardRedir(){
    const dashboardRedirToDash = dashboardRedirSwitch.checked;
    await extension.storage.local.set({
      dashboardRedirToDash:dashboardRedirToDash
    });

  }

  async function  LoadDashBoardRedirSwitch() {
    const redirtodash = await extension.storage.local.get({
      dashboardRedirToDash: true
    });
    dashboardRedirSwitch.checked = redirtodash.dashboardRedirToDash;
  }

  async function start() {
    document.body.classList.add('moodle-ncku-edu-tw');
    
    try {
      const data = await extension.storage.local.get(settingKeys);
      const mode = readMode(data.themeSettings);
      applyMode(mode);
      
      // on options page, set up the form to save changes. 
      if (form) {
        form.elements.themeMode.value = mode;// load the dropdown to the saved value
        form.addEventListener('submit', saveSettings);

        dashboardRedirSwitch.addEventListener('change',savedashboardRedir);
        LoadDashBoardRedirSwitch();
        
        document.getElementById('appearance-defaults').addEventListener('click', resetSettings);
      } 
      
      //On the moodle, just apply the settings.
      else {
        extension.storage.onChanged.addListener(settingsChanged);
        // Start both image loads, then wait for both before showing the page.
        const imageLoads = [];
        for (const key of imageKeys) {
          imageLoads.push(applyImage(key, data[key]));// push promise 
        }
        await Promise.all(imageLoads);
      }
    } 

    catch (error) {
      console.warn(error);
      if (form) {
        status.textContent = 'Loading failed. Please reopen appearance settings.';
        setBusy(true);
      }
    } 

    finally {
      // show the page 
      html.classList.add('appearance-ready');
    }
  }

  // start when avail
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();