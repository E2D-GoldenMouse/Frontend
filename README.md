# Frontend 

## 目錄架構

```
├── node_modules
├── package-lock.json
├── package.json
├── public
├── index.html
├── README.md
└── src
   ├── api/
   ├── assets/
   ├── lib/
   └── page/
```
- `public`：放不會被編譯的靜態資料
- `index.html`： user 使用網站的入口，Svelte 執行後會把畫面內容渲染進 `<div id="app">` 這個區塊
- `src`：主要開發環境的檔案
    - `apis/`：API 請求處理
    - `assets/`：靜態資源
    - `lib/`：狀態管理
    - `page/`：頁面

## 開發與運行

安裝依賴
```bash
npm install
```

啟動開發伺服器
```bash
npm run dev
```