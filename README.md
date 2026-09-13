# TheBetterM

A Chrome extension that refreshes the appearance and navigation of NCKU Moodle.


## JavaScript responsibilities

### `appearance.js`

Adds the `moodle-ncku-edu-tw` class to `<body>`. The styles use this class to
scope the theme to Moodle and avoid changing unrelated pages. If `<body>` does
not exist yet, the script waits for `DOMContentLoaded`.

### `navigation.js`

Applies the small navigation behavior changes:

- Makes syllabus links open in a new tab with `noopener noreferrer`.
- Makes the navbar brand link return to the Moodle dashboard.
- Changes the displayed site name to `NCKU TheBetterM`.
- Exits on a different origin or inside an iframe.

## Stylesheet responsibilities

The CSS is consolidated into three files. The named sections inside each file
show which part of the interface they control.

### `styles/theme.css`

Controls the overall visual theme:

- **moodle** — base Moodle colors, typography, reading pages, login pages,
  dashboards, grade reports, forums, and common content surfaces.
- **surfaces** — page backgrounds, banners, translucent/glass panels, cards,
  borders, and shadows.
- **user-route-base** — shared styling for user routes such as profiles,
  preferences, reports, and the full messaging page.

### `styles/interface.css`

Controls shared interface structure and reusable components:

- **shared-chrome** — navigation, dialogs, course lists, grade tables, file
  managers, and other common Moodle chrome.
- **controls** — buttons, tabs, pagination, dropdowns, menus, and interactive
  control states.
- **layout** — page widths, spacing, alignment, containers, and responsive
  layout adjustments.

### `styles/pages.css`

Controls route- and feature-specific presentation:

- **activities** — quizzes, assignments, resources, activity indexes, review
  pages, feedback, and activity navigation.
- **statistics** — NCKU statistics pages, filters, panels, and tables.
- **forms** — inputs, selects, labels, field groups, buttons, and validation
  presentation.
- **messaging** — messaging panels, notification preferences, and popups.
- **user-pages** — profiles, preferences, portfolios, and course reports.
- **plugins** — custom enrolment and NCKU application-plugin pages.
