<div align="center">

# TheBetterM

**讓 NCKU Moodle 擁有更清爽、更現代化的介面。**

[English](./README.md) | [繁體中文](./README.zh-TW.md)

<p>
  <a href="https://chromewebstore.google.com/detail/thebetterm-%E2%80%94-moodle-refre/ilkjjkjdocgjpljdkikeobcclpegjlpf" target="_blank" rel="noopener noreferrer"><img alt="Chrome 線上應用程式商店" src="https://img.shields.io/badge/Chrome_Web_Store-4285F4?style=for-the-badge&amp;logo=googlechrome&amp;logoColor=white"></a>
  <a href="https://addons.mozilla.org/zh-TW/firefox/addon/thebetterm-moodle-refreshed/" target="_blank" rel="noopener noreferrer"><img alt="Firefox 附加元件" src="https://img.shields.io/badge/Firefox_Add--ons-FF7139?style=for-the-badge&amp;logo=firefoxbrowser&amp;logoColor=white"></a>
  <a href="https://github.com/jackaopen/TheBetterM/issues" target="_blank" rel="noopener noreferrer"><img alt="回報問題" src="https://img.shields.io/badge/Report_an_Issue-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white"></a>
</p>

</div>

---

## ✨ 關於 TheBetterM

**TheBetterM** 是一款專為 **NCKU Moodle** 設計的 Chrome 與 Firefox 擴充功能，在保留 Moodle 原有功能的同時，重新設計網站的外觀與版面配置。

主要改善視覺效果、版面整潔度與操作體驗，並加入本機驗證碼自動填入功能，不會取代 Moodle 的核心功能。

### 主要調整

- 更新 Moodle 的配色與背景。
- 提供淺色／深色模式，以及自訂背景與頁首圖片。
- 重新設計卡片、面板、導覽列及其他常用介面元件。
- 重新整理部分版面配置，讓整體介面更加整潔。
- 將左上角標題改為 **NCKU TheBetterM**。
- 可選擇點擊左上角標題時，開啟**個人化首頁**（`/my/`）或 Moodle 首頁。
- 課程大綱連結會在新分頁中開啟。
- 在本機自動辨識並填入 Moodle 的四位數圖片驗證碼。
- 僅套用於 NCKU Moodle，不會影響其他網站。

**保留 Moodle 原有的功能，只讓它擁有更好的介面。**

<p align="center">
  <img src="https://github.com/user-attachments/assets/8088706b-d40d-41aa-b48f-1d1f57706b81" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/1cfd2a21-ee9d-498e-bc27-61502be850c7" />
</p>

---

##  相容性

TheBetterM 目前主要針對以下環境設計：

- **桌面版 Google Chrome**
- **桌面版 Mozilla Firefox**
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

### Firefox 附加元件

從 [Firefox 附加元件網站](https://addons.mozilla.org/zh-TW/firefox/addon/thebetterm-moodle-refreshed/)取得 TheBetterM。

### 從原始碼安裝（Chrome）

1. 下載或 Clone 此 Repository。
2. 在 Google Chrome 開啟 `chrome://extensions`。
3. 啟用**開發人員模式**。
4. 點擊**載入未封裝項目**。
5. 選擇 [`src`](./src) 資料夾。

完成後，造訪 NCKU Moodle 時 TheBetterM 應會自動套用。

### 從原始碼安裝（Firefox）

1. 下載或 Clone 此 Repository。
2. 在 Firefox 開啟 `about:debugging`。
3. 選擇 **This Firefox（這個 Firefox）**。
4. 點擊 **Load Temporary Add-on（載入暫用附加元件）**。
5. 選擇 [`src_ff/manifest.json`](./src_ff/manifest.json)。

---

##  自訂外觀

### 模式與圖片

1. 點擊瀏覽器工具列中的 **TheBetterM** 圖示，開啟 **Appearance（外觀）** 分頁。
2. 在 **Mode（模式）** 選擇 **Light（淺色）** 或 **Dark（深色）**，也可在 **Background image（背景圖片）**、**Header image（頁首圖片）** 選擇自訂圖片。
3. 點擊 **Save & Apply（儲存並套用）**。已開啟的 Moodle 頁面會自動更新。

> [!TIP]
>
> - 只選擇一張圖片時，另一張會保持原樣。圖片儲存在此裝置。
> - **Load defaults（載入預設）** 會還原淺色模式及兩張內建圖片。
> - 建議 **Header image（頁首圖片）** 使用橫向長條圖片。

### 個人化首頁導向

**Appearance（外觀）** 中的 **Site logo opens Dashboard** 開關可設定左上角標題連結：

- **勾選（預設）：** 登入後開啟個人化首頁。
- **取消勾選：** 開啟 Moodle 首頁。

此選項會自動儲存。

### 驗證碼自動填入（CAPTCHA）

當 Moodle 頁面出現支援的四位數圖片驗證碼時，TheBetterM 會自動辨識圖片並填入驗證碼欄位。圖片載入或重新整理時會觸發辨識；點入空白的驗證碼欄位時，也會再次嘗試。

- 使用瀏覽器的 Canvas 與內建數字樣板，在裝置上完成辨識。無須 API 金鑰或外部服務。
- 此功能會自動啟用，沒有獨立設定。只會填入驗證碼欄位，不會自動送出表單或執行登入。
- 此功能僅支援 Moodle 的四位數圖片驗證碼。

### 預設圖片來源與用途

- **圖片來源：** [成大素材網](https://material.ncku.edu.tw/)

本專案所使用的圖片皆經過視覺調整，僅用於此開源、非官方、非商業擴充功能，以自訂 NCKU Moodle 的介面外觀。

---

##  專案結構

主要原始檔與各自負責的功能：

| 原始檔 | 負責內容 |
| --- | --- |
| `styles/theme.css` | 配色、背景、玻璃效果與共用主題樣式 |
| `styles/interface.css` | 導覽列、對話框、控制元件、選單、版面配置、間距與響應式設計 |
| `styles/pages.css` | 活動、統計資料、表單、訊息功能與各頁面專用樣式 |
| `styles/modes.css` | 淺色／深色模式覆寫與共用版面調整 |
| `captsolver.js` | 在本機辨識 Moodle 四位數圖片驗證碼；由 `navigation.js` 連接圖片與驗證碼欄位 |

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
