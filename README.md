<div align="center">

# TheBetterM

**A Chrome extension that gives NCKU Moodle a cleaner visual style and a more convenient layout.**

[English](./README.md) | [繁體中文](./README.zh-TW.md)

<a href="https://chromewebstore.google.com/"><img alt="Chrome Web Store — Coming Soon" src="https://img.shields.io/badge/Chrome_Web_Store-Coming_Soon-4285F4?logo=googlechrome&amp;logoColor=white"></a> <a href="https://github.com/jackaopen/TheBetterM/issues"><img alt="Report an Issue" src="https://img.shields.io/badge/GitHub-Report_an_Issue-181717?logo=github"></a>



</div>

---


## ✨ What TheBetterM Changes

TheBetterM preserves almost all functionality of the original NCKU Moodle website. Most changes are limited to **visual effects** and **widget placement**, so the Moodle features you already use should continue to work as expected.

- Refreshes Moodle's colors, backgrounds, panels, and cards.
- Repositions and restyles widgets for a cleaner layout.
- Changes the upper-left title button to **NCKU TheBetterM**.
- Makes the upper-left title button redirect to **個人化首頁** (`/my/`).
- Opens syllabus links in a new tab.
- Applies its changes only to NCKU Moodle and not to unrelated websites.

##  Preview

<p align="center">
  <img width="1902" height="906" alt="TheBetterM dashboard preview" src="https://github.com/user-attachments/assets/8088706b-d40d-41aa-b48f-1d1f57706b81" />
</p>

<p align="center">
  <img width="1893" height="908" alt="TheBetterM course-page preview" src="https://github.com/user-attachments/assets/1cfd2a21-ee9d-498e-bc27-61502be850c7" />
</p>

---

##  Customize the Header and Background

When installing or developing the extension from source, you can replace the images in [`src/assets`](./src/assets):
<div align="center">

| File | Used for |
| --- | --- |
| [`header.jpg`](./src/assets/header.jpg) | Header image |
| [`site-background.png`](./src/assets/site-background.png) | Site background |

</div>

Keep the same filenames after replacing the images so the existing styles continue to find them. Direct asset replacement is intended for source installations; whether the same customization remains practical with a future Chrome Web Store installation may depend on how that release is packaged.

### Visual Inspiration and Image Notes

- **Banner idea:** [National Cheng Kung University on Facebook](https://www.facebook.com/ncku.edu.tw)
- **Background idea:** [國立成功大學圖書館 — 大考中心](https://www.ceec.edu.tw/xcepaper/cont?xsmsid=0J066588036013658199&qperoid=0J114595071212135515&sid=0J115577477273652461)
- All images included with TheBetterM have been visually tuned to better match the extension's theme.

---

## 📦 Installation

### Chrome Web Store

The Chrome Web Store release is **coming soon**.

### Install from source

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose the [`src`](./src) folder.

---

##  Css Structure


| Source | Responsibility |
| --- | --- |
|`styles/theme.css`| Base colors, backgrounds, glass surfaces, and shared user-route styling |
|`styles/interface.css` | Navigation, dialogs, controls, menus, layout, spacing, and responsive behavior |
|`styles/pages.css`| Activities, statistics, forms, messaging, user pages |

---

## 🐛 Issues and Feedback

If you encounter a problem, feel free to [open an issue](https://github.com/jackaopen/TheBetterM/issues/new).

Please include:

1. A short description of what happened and what you expected.
2. A screenshot showing the problem.
3. The URL of the affected Moodle page.
4. If possible, the nested widget class or CSS selector for the affected element.
5. Steps that make the problem happen again.

> [!TIP]
> Before sharing screenshots or URLs, remove any personal information, course details, or other private data.

---
