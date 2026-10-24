(() => {
  let extension = globalThis.browser;
  if (!extension) extension = chrome;

  const moodleOrigin = 'https://moodle.ncku.edu.tw';
  
  // check if the current page is in the moodle domain and not in an iframe
  if (location.origin !== moodleOrigin || top !== self) return;
  const dashboardURL = moodleOrigin + '/my/';

  
  extension.storage.onChanged.addListener(function (changes) {
    if ('dashboardRedirToDash' in changes) {
      updateBrand();
    }
  });

  // open syllabus links in a new tab
  // search for links with data-key="coursesyllabus" and add target="_blank" and rel="noopener noreferrer"
  function updateSyllabusLinks() {
    const links = document.querySelectorAll(
      'a.list-group-item.list-group-item-action[data-key="coursesyllabus"]'
    );
    for (const link of links) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  }

  async function updateBrand() {
    const brand = document.querySelector('.navbar a.navbar-brand');
    // Is link object, if not, return
    if (!(brand instanceof HTMLAnchorElement)) return;
    const RedirToDashsetting = await extension.storage.local.get({
      dashboardRedirToDash: true
    });

    if (RedirToDashsetting.dashboardRedirToDash)brand.href = dashboardURL;
    else brand.href = moodleOrigin

    brand.querySelector('span.site-name')?.replaceChildren('NCKU TheBetterM');
  }


  function initializeNavigation() {
    updateSyllabusLinks();
    updateBrand();
    setupcaptsolver();
  }

  function setupcaptsolver() {
    const image = document.getElementById("imgcode");
    const input = document.getElementById("reg_vcode");
    if (!image || !input) return;
    let latestRead = 0;

    async function fillCode() {
      const currentRead = ++latestRead;

      try {
        const answer = await readDigits(image);
        if (currentRead !== latestRead) return;

        input.value = answer;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
      } catch (error) {
        console.error("Reading verification code failed:", error);
      }
    }
    image.addEventListener("load", fillCode);
    input.addEventListener("focus", () => {
      if (!input.value) fillCode();
    });

    if (image.complete && image.naturalWidth) {
      fillCode();
    }
  }



  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavigation, { once: true });
  } else {
    initializeNavigation();
  }
})();
