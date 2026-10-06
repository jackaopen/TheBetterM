(() => {
  const moodleOrigin = 'https://moodle.ncku.edu.tw';
  // check if the current page is in the moodle domain and not in an iframe
  if (location.origin !== moodleOrigin || top !== self) return;
  const dashboardURL = moodleOrigin + '/my/';

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

  function updateBrand() {
    const brand = document.querySelector('.navbar a.navbar-brand');
    // Is link object, if not, return
    if (!(brand instanceof HTMLAnchorElement)) return;

    brand.href = dashboardURL;
    brand.title = 'Go to Dashboard';
    brand.querySelector('span.site-name')?.replaceChildren('NCKU TheBetterM');
  }


  function initializeNavigation() {
    updateSyllabusLinks();
    updateBrand();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavigation, { once: true });
  } else {
    initializeNavigation();
  }
})();
