<div align="center">

# TheBetterM

**A cleaner, more modern interface for NCKU Moodle.**

[English](./README.md) | [繁體中文](./README.zh-TW.md)

<p>
  <a href="https://chromewebstore.google.com/detail/thebetterm-%E2%80%94-moodle-refre/ilkjjkjdocgjpljdkikeobcclpegjlpf" target="_blank" rel="noopener noreferrer"><img alt="Chrome Web Store" src="https://img.shields.io/badge/Chrome_Web_Store-4285F4?style=for-the-badge&amp;logo=googlechrome&amp;logoColor=white"></a>
  <a href="https://addons.mozilla.org/zh-TW/firefox/addon/thebetterm-moodle-refreshed/" target="_blank" rel="noopener noreferrer"><img alt="Firefox Add-ons" src="https://img.shields.io/badge/Firefox_Add--ons-FF7139?style=for-the-badge&amp;logo=firefoxbrowser&amp;logoColor=white"></a>
  <a href="https://github.com/jackaopen/TheBetterM/issues" target="_blank" rel="noopener noreferrer"><img alt="Report an Issue" src="https://img.shields.io/badge/Report_an_Issue-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white"></a>
</p>

</div>

---

## ✨ About

**TheBetterM** is a Chrome and Firefox extension that redesigns the appearance and layout of **NCKU Moodle** while keeping the original Moodle functionality intact.

It focuses on visual improvements, cleaner layouts, and small usability changes, including local verification-code autofill, without replacing Moodle's core functionality.

### What it changes

- Refreshes Moodle's colors and backgrounds.
- Offers light/dark modes and custom background and header images.
- Restyles cards, panels, navigation, and other common UI elements.
- Reorganizes parts of the layout for a cleaner interface.
- Changes the upper-left title to **NCKU TheBetterM**.
- Lets you choose whether the title button opens the **Dashboard** (`/my/`) or Moodle home page.
- Opens syllabus links in a new tab.
- Automatically reads and fills Moodle's four-digit image verification code locally.
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
- **Desktop Mozilla Firefox**
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

### Firefox Add-ons

Get TheBetterM from [Firefox Add-ons](https://addons.mozilla.org/zh-TW/firefox/addon/thebetterm-moodle-refreshed/).

### Install from source (Chrome)

1. Download or clone this repository.
2. Open `chrome://extensions` in Google Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the [`src`](./src) folder.

TheBetterM should now be active when you visit NCKU Moodle.

### Install from source (Firefox)

1. Download or clone this repository.
2. Open `about:debugging` in Firefox.
3. Select **This Firefox**.
4. Click **Load Temporary Add-on**.
5. Select [`src_ff/manifest.json`](./src_ff/manifest.json).

---

##  Customization

### Mode and images

1. Click the **TheBetterM** icon in your browser's toolbar and open the **Appearance** tab.
2. Choose **Light** or **Dark** under **Mode**. Optionally select files for **Background image**, **Header image**, or both.
3. Click **Save & Apply**. Open Moodle pages update automatically.

>[!Tip]
> - If you choose only one image, the other stays unchanged. Images are stored on this device.
> - **Load defaults** restores Light mode and both bundled images.
> - Use a wide image for the **Header image**.

### Dashboard redirect

The **Site logo opens Dashboard** switch in **Appearance** controls the upper-left title link:

- **Checked (default):** opens the Dashboard when logged in.
- **Unchecked:** opens the Moodle home page.

This option saves automatically.

### Verification-code autofill (CAPTCHA)

When a Moodle page contains the supported four-digit image CAPTCHA, TheBetterM reads the image and fills the verification-code field automatically. It runs when the image loads or refreshes, and retries when you focus an empty code field.

- Recognition uses the browser's canvas and bundled digit templates, entirely on your device. No API key or external solver service is needed.
- Autofill is enabled automatically; there is no separate setting. It fills only the code field and does not submit the form or log in for you.
- This supports Moodle's four-digit image CAPTCHA only.

### Default Image sources and use

- **Photo source:** [NCKU material](https://material.ncku.edu.tw/)

The included images have been visually modified and are used solely to customize the appearance of NCKU Moodle in this open-source, unofficial, non-commercial extension.

---

##  Project Structure

Main source files and their responsibilities:

| Source | Responsibility |
| --- | --- |
| `styles/theme.css` | Colors, backgrounds, glass surfaces, and shared theme styling |
| `styles/interface.css` | Navigation, dialogs, controls, menus, layout, spacing, and responsive behavior |
| `styles/pages.css` | Activities, statistics, forms, messaging, and page-specific styling |
| `styles/modes.css` | Light/dark mode overrides and shared layout adjustments |
| `captsolver.js` | Local recognition of Moodle's four-digit image CAPTCHA; `navigation.js` connects it to the image and code field |

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
