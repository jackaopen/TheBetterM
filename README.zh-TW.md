<div align="center">

# TheBetterM

**讓 NCKU Moodle 擁有更清爽、更現代化的介面。**

[English](./README.md) | [繁體中文](./README.zh-TW.md)

<a href="https://chromewebstore.google.com/detail/thebetterm-%E2%80%94-moodle-refre/ilkjjkjdocgjpljdkikeobcclpegjlpf" target="_blank" rel="noopener noreferrer"><img alt="Chrome 線上應用程式商店" src="https://img.shields.io/badge/Chrome_Web_Store-4285F4?logo=googlechrome&amp;logoColor=white"></a>

<a href="https://github.com/jackaopen/TheBetterM/issues"><img alt="回報問題" src="https://img.shields.io/badge/GitHub-Report_an_Issue-181717?logo=github"></a>

</div>

---

## ✨ 關於 TheBetterM

**TheBetterM** 是一款專為 **NCKU Moodle** 設計的 Chrome 擴充功能，在保留 Moodle 原有功能的同時，重新設計網站的外觀與版面配置。

主要改善視覺效果、版面整潔度與部分操作體驗，不會取代或修改 Moodle 的核心功能。

### 主要調整

- 更新 Moodle 的配色與背景。
- 重新設計卡片、面板、導覽列及其他常用介面元件。
- 重新整理部分版面配置，讓整體介面更加整潔。
- 將左上角標題改為 **NCKU TheBetterM**。
- 點擊左上角標題時返回 Moodle **個人化首頁**（`/my/`）。
- 課程大綱連結會在新分頁中開啟。
- 僅套用於 NCKU Moodle，不會影響其他網站。

**保留 Moodle 原有的功能，只讓它擁有更好的介面。**

<img width="1902" height="864" alt="螢幕擷取畫面 2026-09-16 143301" src="https://github.com/user-attachments/assets/da350eaf-779e-417c-8e5f-df98d56d0dae" />


<img width="1902" height="870" alt="螢幕擷取畫面 2026-09-16 143207" src="https://github.com/user-attachments/assets/8f29fe0d-1667-47a3-97a2-a8733b4e7314" />


---

##  相容性

TheBetterM 目前主要針對以下環境設計：

- **桌面版 Google Chrome**
- **僅支援 NCKU Moodle**

> [!NOTE]
> TheBetterM 目前**並未針對行動裝置瀏覽器設計**，包括：
>
> - Android 版 Chrome
> - iOS 版 Chrome
> - 其他行動裝置瀏覽器
>
> 其他以 Chromium 為基礎的桌面瀏覽器可能也能正常使用，但目前**尚未經過正式測試，也不在官方支援範圍內**。

---

##  安裝方式

### Chrome 線上應用程式商店

從 [Chrome 線上應用程式商店](https://chromewebstore.google.com/detail/thebetterm-%E2%80%94-moodle-refre/ilkjjkjdocgjpljdkikeobcclpegjlpf)取得 TheBetterM。

### 從原始碼安裝

1. 下載或 Clone 此 Repository。
2. 在 Google Chrome 開啟 `chrome://extensions`。
3. 啟用**開發人員模式**。
4. 點擊**載入未封裝項目**。
5. 選擇 [`src`](./src) 資料夾。

完成後，造訪 NCKU Moodle 時 TheBetterM 應會自動套用。

---

##  自訂外觀

如果是從原始碼安裝或開發 TheBetterM，並透過「載入未封裝項目」載入 [`src`](./src) 資料夾，可以直接替換 `src/assets` 內的圖片。

| 檔案 | 用途 |
| --- | --- |
| [`header.jpg`](./src/assets/header.jpg) | 頁首 / 橫幅圖片 |
| [`site-background.png`](./src/assets/site-background.png) | 網站背景圖片 |

替換圖片後請保留相同的檔名，讓現有樣式可以繼續正確載入圖片。

### 圖片來源與用途

- **圖片來源：** [成大素材網](https://material.ncku.edu.tw/)

本專案所使用的圖片皆經過視覺調整，僅用於此開源、非官方、非商業擴充功能，以自訂 NCKU Moodle 的介面外觀。

---

##  專案結構

樣式被拆分至數個 CSS 檔案中，讓不同部分的介面更容易維護。

| 原始檔 | 負責內容 |
| --- | --- |
| `styles/theme.css` | 配色、背景、玻璃效果與共用主題樣式 |
| `styles/interface.css` | 導覽列、對話框、控制元件、選單、版面配置、間距與響應式設計 |
| `styles/pages.css` | 活動、統計資料、表單、訊息功能與各頁面專用樣式 |

---

## 🐛 問題回報與意見

如果遇到介面顯示異常或功能行為不如預期，歡迎[建立 Issue](https://github.com/jackaopen/TheBetterM/issues/new)。

回報問題時，建議附上：

1. 問題發生時的簡短描述。
2. 原本預期的結果。
3. 顯示問題的螢幕截圖。
4. 發生問題的 Moodle 頁面 URL。
5. 可以再次觸發問題的操作步驟。
6. 如果可以，請提供受影響元素的 CSS Selector 或相關 Class 名稱。

> [!TIP]
> 分享螢幕截圖或 URL 前，請先移除個人資料、課程資訊、學生資訊或其他隱私內容。

---

<div align="center">

為 **NCKU Moodle** 製作

</div>
