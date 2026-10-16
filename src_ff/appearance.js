(function () {
  // Firefox uses browser; Chrome uses chrome.
  let extension = globalThis.browser;
  if (!extension) extension = chrome;

  const form = document.getElementById('appearance-form');
  if (location.protocol === 'moz-extension:' && !form) {
    extension.action.onClicked.addListener(function () {
      extension.runtime.openOptionsPage();
    });
    return;
  }

  const html = document.documentElement;
  const status = document.getElementById('appearance-status');
  const dashboardRedirSwitch = document.getElementById('brandToDashboard');
  const imageSettings = { customBackground: '--site-background', customHeader: '--site-header' };
  const imageKeys = Object.keys(imageSettings);
  const settingKeys = ['customBackground', 'customHeader', 'themeSettings'];

  function applyMode(mode) {
    html.dataset.nmMode = 'light';
    if (mode === 'dark') html.dataset.nmMode = 'dark';
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

  function applyImage(key, imageData) {
    // Firefox can paint the saved data URL directly, including large images.
    // Blob URLs from content scripts fail when used by its injected stylesheet.
    if (imageData) {
      html.style.setProperty(imageSettings[key], 'url("' + imageData + '")');
    } else {
      html.style.removeProperty(imageSettings[key]);
    }
    if (key === 'customBackground') {
      if (imageData) {
        // Compose once: Firefox limits large values expanded inside a gradient.
        const shade = getComputedStyle(html).getPropertyValue('--nm-dark-photo-overlay');
        html.style.setProperty('--nm-dark-background', 'linear-gradient(' + shade + ',' + shade + '), url("' + imageData + '")');
      } else {
        html.style.removeProperty('--nm-dark-background');
      }
    }
  }

  function readImage(file) {
    // FileReader finishes later; this Promise lets Save wait for the result.
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = function () { reject(reader.error); };
      reader.readAsDataURL(file);
    });
  }

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
      form.elements.themeMode.value = mode;
      applyMode(mode);
      status.textContent = 'saved.';
    } catch (error) {
      status.textContent = 'Saving failed: error msg: ' + error.message;
    } finally {
      setBusy(false);
    }
  }

  async function resetSettings() {
    setBusy(true);
    try {
      await extension.storage.local.remove(['customBackground', 'customHeader', 'themeSettings', 'stylePreset']);
      form.reset();
      applyMode('light');
      status.textContent = 'Defaults restored.';
    } catch (error) {
      status.textContent = 'Reset failed. Please try again.';
    } finally {
      setBusy(false);
    }
  }

  function settingsChanged(changes, area) {
    if (area !== 'local') return;
    if ('themeSettings' in changes) {
      const mode = readMode(changes.themeSettings.newValue);
      applyMode(mode);
    }
    for (const key of imageKeys) {
      if (key in changes) {
        applyImage(key, changes[key].newValue);
      }
    }
  }

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
      if (form) {
        form.elements.themeMode.value = html.dataset.nmMode;
        form.elements.themeMode.addEventListener('change', function () {
          applyMode(form.elements.themeMode.value);
        });
        form.addEventListener('submit', saveSettings);

        dashboardRedirSwitch.addEventListener('change',savedashboardRedir);
        LoadDashBoardRedirSwitch();
        document.getElementById('appearance-defaults').addEventListener('click', resetSettings);
      } else {
        extension.storage.onChanged.addListener(settingsChanged);
        for (const key of imageKeys) {
          applyImage(key, data[key]);
        }
      }
    } catch (error) {
      console.warn(error);
      if (form) {
        status.textContent = 'Loading failed. Please reopen appearance settings.';
        setBusy(true);
      }
    } finally {
      html.classList.add('appearance-ready');
    }
  }
  // Start when the page's HTML is available.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
