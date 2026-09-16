<div align="center">

# TheBetterM

**A cleaner, more modern interface for NCKU Moodle.**

[English](./README.md) | [繁體中文](./README.zh-TW.md)

<a href="https://chromewebstore.google.com/detail/thebetterm-%E2%80%94-moodle-refre/ilkjjkjdocgjpljdkikeobcclpegjlpf" target="_blank" rel="noopener noreferrer"><img alt="Chrome Web Store" src="https://img.shields.io/badge/Chrome_Web_Store-4285F4?logo=googlechrome&amp;logoColor=white"></a>

<a href="https://github.com/jackaopen/TheBetterM/issues"><img alt="Report an Issue" src="https://img.shields.io/badge/GitHub-Report_an_Issue-181717?logo=github"></a>

</div>

---

## ✨ About

**TheBetterM** is a Chrome extension that redesigns the appearance and layout of **NCKU Moodle** while keeping the original Moodle functionality intact.

It focuses on visual improvements, cleaner layouts, and a few small usability changes without replacing or modifying Moodle's core functionality.

### What it changes

- Refreshes Moodle's colors and backgrounds.
- Restyles cards, panels, navigation, and other common UI elements.
- Reorganizes parts of the layout for a cleaner interface.
- Changes the upper-left title to **NCKU TheBetterM**.
- Makes the title button return to the Moodle **Dashboard** (`/my/`).
- Opens syllabus links in a new tab.
- Applies only to NCKU Moodle and does not affect unrelated websites.

 **Keep Moodle's original functionality, but give it a better interface.**


<p align="center">
  <img src="https://github.com/user-attachments/assets/8088706b-d40d-41aa-b48f-1d1f57706b81" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/1cfd2a21-ee9d-498e-bc27-61502be850c7" />
</p>

---

##  Compatibility

TheBetterM is currently designed for:

- **Desktop Google Chrome**
- **NCKU Moodle only**


>[!Note]
> TheBetterM is currently **not designed for mobile browsers**, including:
>- Chrome on Android
>- Chrome on iOS
>- Other mobile browsers
> 
> Other Chromium-based desktop browsers may work, but they are **not officially tested or supported** at the moment.

---

##  Installation

### Chrome Web Store

Get TheBetterM from the [Chrome Web Store](https://chromewebstore.google.com/detail/thebetterm-%E2%80%94-moodle-refre/ilkjjkjdocgjpljdkikeobcclpegjlpf).

### Install from source

1. Download or clone this repository.
2. Open `chrome://extensions` in Google Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the [`src`](./src) folder.

TheBetterM should now be active when you visit NCKU Moodle.

---

##  Customization

When running TheBetterM from source using **Load unpacked**, you can replace the images inside `src/assets`.

| File | Used for |
| --- | --- |
| [`header.jpg`](./src/assets/header.jpg) | Header / banner image |
| [`site-background.png`](./src/assets/site-background.png) | Site background |

Keep the same filenames after replacing the files so the existing styles can continue to locate them.


### Image sources and use

- **Photo source:** [NCKU material](https://material.ncku.edu.tw/)

The included images have been visually modified and are used solely to customize the appearance of NCKU Moodle in this open-source, unofficial, non-commercial extension.

---

##  Project Structure

The styling is separated into several CSS files to make different parts of the interface easier to maintain.

| Source | Responsibility |
| --- | --- |
| `styles/theme.css` | Colors, backgrounds, glass surfaces, and shared theme styling |
| `styles/interface.css` | Navigation, dialogs, controls, menus, layout, spacing, and responsive behavior |
| `styles/pages.css` | Activities, statistics, forms, messaging, and page-specific styling |

---

## 🐛 Issues and Feedback

If something looks broken or behaves unexpectedly, feel free to [open an issue](https://github.com/jackaopen/TheBetterM/issues/new).

When reporting a problem, please include:

1. A short description of what happened.
2. What you expected to happen.
3. A screenshot showing the problem.
4. The URL of the affected Moodle page.
5. Steps to reproduce the issue.
6. If possible, the affected element's CSS selector or relevant class names.

> [!TIP]
> Before sharing screenshots or URLs, remove personal information, course details, student information, or other private data.

---

<div align="center">

Made for **NCKU Moodle**

</div>
