(() => {
  function addThemeClass() {
    if (document.body) {
      document.body.classList.add('moodle-ncku-edu-tw');
    } else {
      document.addEventListener('DOMContentLoaded', addThemeClass, { once: true });
    }
  }

  addThemeClass();
  const imageSettings = {
    customBackground: '--site-background',
    customHeader: '--site-header'
  };

  function applyImages(data) {
    // apply by overwrite
    for (const [key, variable] of Object.entries(imageSettings)) {
      if (data[key]) {
        document.documentElement.style.setProperty(variable, `url(${JSON.stringify(data[key])})`);
      } else {
        document.documentElement.style.removeProperty(variable);
      }
    }
  }

  function readImage(file) {// return a promise  
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  async function init() {
    const data = await chrome.storage.local.get(Object.keys(imageSettings));
    const form = document.getElementById('appearance-form');
    // apply to option.html
    if (form) {
      const status = document.getElementById('appearance-status');

      form.addEventListener('submit', async (event) => {
        event.preventDefault();// dont reload
        const button = form.querySelector('[type="submit"]');
        button.disabled = true;
        try {
          const settings = {};
          for (const key of Object.keys(imageSettings)) {
            const file = form.elements[key].files[0];// sel from list
            if (!file) continue;
            if (!file.type.startsWith('image/')) throw new Error('Select an image file.');
            settings[key] = await readImage(file);
          }
          await chrome.storage.local.set(settings);//save
          form.reset();//clear
          status.textContent = 'saved.';
        } catch (error) {
          status.textContent = `Saving failed: error msg: ${error.message}`;
        } finally {
          button.disabled = false;
        }
      });

      document.getElementById('appearance-defaults').addEventListener('click', async () => {
        try {
          // rm keys of setting
          await chrome.storage.local.remove(Object.keys(imageSettings));
          form.reset();
          status.textContent = 'Defaults restored.';
        } catch {
          status.textContent = 'Reset failed. Please try again.';
        }
      });
    } else {// apply to moodle 
      applyImages(data);
      chrome.storage.onChanged.addListener((changes, area) => {
        if (area !== 'local') return;// ignore non local storage
        for (const key of Object.keys(imageSettings)) {
          //change to newval if key is valid
          if (key in changes) data[key] = changes[key].newValue;
        }
        applyImages(data);
      });
    }
  }

  init();

})();
