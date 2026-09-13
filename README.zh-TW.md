<div align="center">

# TheBetterM

**讓 NCKU Moodle 擁有更清爽的視覺風格與更完善的版面配置。**

[English](./README.md) | [繁體中文](./README.zh-TW.md)

<a href="https://chromewebstore.google.com/"><img alt="Chrome 線上應用程式商店 — 即將推出" src="https://img.shields.io/badge/Chrome_Web_Store-Coming_Soon-4285F4?logo=googlechrome&amp;logoColor=white"></a> <a href="https://github.com/jackaopen/TheBetterM/issues"><img alt="回報問題" src="https://img.shields.io/badge/GitHub-Report_an_Issue-181717?logo=github"></a>

</div>

---

## ✨ TheBetterM 做了哪些調整？

TheBetterM 保留了原始 NCKU Moodle 網站的幾乎所有功能。大多數變更僅限於**視覺效果**與**部件位置**，因此你原本使用的 Moodle 功能應可照常運作。

- 更新 Moodle 的色彩、背景、面板與卡片外觀。
- 重新配置並美化部件，讓版面更整潔。
- 將左上角標題按鈕改為 **NCKU TheBetterM**。
- 讓左上角標題按鈕重新導向**個人化首頁**（`/my/`）。
- 讓課程大綱連結在新分頁中開啟。
- 僅套用於 NCKU Moodle，不影響其他網站。

## 預覽

<p align="center">
  <img width="1902" height="906" alt="TheBetterM 個人化首頁預覽" src="https://github.com/user-attachments/assets/8088706b-d40d-41aa-b48f-1d1f57706b81" />
</p>

<p align="center">
  <img width="1893" height="908" alt="TheBetterM 課程頁面預覽" src="https://github.com/user-attachments/assets/1cfd2a21-ee9d-498e-bc27-61502be850c7" />
</p>

---

## 自訂橫幅與網站背景

從原始碼安裝或開發擴充功能時，可以替換 [`src/assets`](./src/assets) 內的圖片：

<div align="center">

| 檔案 | 用途 |
| --- | --- |
| [`header.jpg`](./src/assets/header.jpg) | 頁首橫幅圖片 |
| [`site-background.png`](./src/assets/site-background.png) | 網站背景圖片 |

</div>

替換圖片後請保留相同檔名，讓現有樣式能繼續載入圖片。直接替換素材主要適用於從原始碼安裝的版本；未來 Chrome 線上應用程式商店版本能否使用相同方式自訂，將視其封裝方式而定。

### 視覺靈感與圖片說明

- **橫幅靈感：**[國立成功大學 Facebook 專頁](https://www.facebook.com/ncku.edu.tw)
- **背景靈感：**[國立成功大學圖書館 — 大考中心](https://www.ceec.edu.tw/xcepaper/cont?xsmsid=0J066588036013658199&qperoid=0J114595071212135515&sid=0J115577477273652461)
- TheBetterM 內含的所有圖片均已進行視覺調整，使其更符合擴充功能的整體主題。

---

## 📦 安裝方式

### Chrome 線上應用程式商店

Chrome 線上應用程式商店版本**即將推出**。

### 從原始碼安裝

1. 下載或複製此儲存庫。
2. 在 Chrome 開啟 `chrome://extensions`。
3. 啟用**開發人員模式**。
4. 選擇**載入未封裝項目**。
5. 選擇 [`src`](./src) 資料夾。

---

## CSS 結構

| 原始檔 | 負責內容 |
| --- | --- |
| `styles/theme.css` | 基本色彩、背景、玻璃效果、共用使用者頁面樣式 |
| `styles/interface.css` | 導覽、對話框、控制元件、選單、版面、間距和響應功能 |
| `styles/pages.css` | 活動、統計、表單、訊息與使用者頁面 |

---

## 🐛 問題回報與意見

如果遇到任何問題，歡迎[建立 Issue](https://github.com/jackaopen/TheBetterM/issues/new)。

請提供：

1. 問題現象、預期結果的簡短說明。
2. 顯示問題的螢幕截圖。
3. 發生問題的 Moodle 頁面 URL。
4. 如果可以，請提供受影響元素的巢狀小工具類別或 CSS 選擇器。
5. 可以再次觸發問題的操作步驟。

> [!TIP]
> 分享截圖或 URL 前，請移除個人資料、課程資訊及其他隱私內容。

---
