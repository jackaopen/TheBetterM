(() => {
  function addThemeClass() {
    if (document.body) {
      document.body.classList.add('moodle-ncku-edu-tw');
    } else {
      document.addEventListener('DOMContentLoaded', addThemeClass, { once: true });
    }
  }

  addThemeClass();
})();
