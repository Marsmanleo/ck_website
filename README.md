# 志強電器行 Website | 志強電器行網站

## 項目簡介 | Project Description

### 中文
這是澳門志強電器行的官方網站，用於展示店鋪的產品目錄、服務、地址及聯絡方式。網站採用現代化前端框架開發，提供流暢的瀏覽體驗及多語言支持（中文、英文、葡萄牙文）。

### English
This is the official website for Chi Keong Electric Shop in Macau, showcasing the store's product catalog, services, location, and contact information. The website is developed using modern frontend frameworks to provide a smooth browsing experience with multilingual support (Chinese, English, Portuguese).

## 技術棧 | Technology Stack

- [VitePress](https://vitepress.dev/) - Static Site Generator based on Vue.js
- [Vue.js](https://vuejs.org/) - Frontend framework
- [Markdown](https://markdown-it.github.io/) - Content authoring
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Vite](https://vitejs.dev/) - Frontend tooling

## 安裝指南 | Setup Instructions

### 前提條件 | Prerequisites

- Node.js (v18+)
- npm or pnpm or yarn

### 安裝步驟 | Installation Steps

1. 複製代碼庫 | Clone the repository
   ```bash
   git clone https://github.com/Marsmanleo/ck_website.git
   cd ck_website
   ```

2. 安裝依賴 | Install dependencies
   ```bash
   # Using npm
   npm install

   # Using pnpm
   pnpm install

   # Using yarn
   yarn install
   ```

## 開發命令 | Development Commands

- 啟動開發服務器 | Start development server
  ```bash
  npm run dev
  ```

- 構建生產版本 | Build for production
  ```bash
  npm run build
  ```

- 預覽生產版本 | Preview production build
  ```bash
  npm run preview
  ```

## 項目結構 | Project Structure

```
ck_website/
├── public/             # Static assets
│   ├── doc/           # Document files
│   │   ├── phone.md   # Phone related documents
│   │   └── shop.md    # Shop related documents
│   └── images/        # Image files
│       ├── icon/      # Icons
│       └── logo/      # Logos
├── index.md           # Homepage
├── api-examples.md    # API examples
├── markdown-examples.md # Markdown examples
├── package.json       # Project dependencies
└── README.md           # This file
```

## 部署信息 | Deployment Information

網站部署使用 GitHub Pages 或其他靜態網站託管服務。

### 部署步驟 | Deployment Steps

1. 構建網站 | Build the website
   ```bash
   npm run build
   ```

2. 部署到 GitHub Pages | Deploy to GitHub Pages
   ```bash
   npm run deploy
   ```

## 貢獻指南 | Contribution Guidelines

1. Fork 存儲庫 | Fork the repository
2. 創建功能分支 | Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 提交更改 | Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 | Push to the branch (`git push origin feature/amazing-feature`)
5. 創建拉取請求 | Open a Pull Request

## 聯繫 | Contact

如有任何問題，請通過以下方式聯繫：
For any questions, please contact:

- Email: [your-email@example.com](mailto:your-email@example.com)
- Website: [www.chikeong.com](https://www.chikeong.com)

## 許可證 | License

This project is licensed under the MIT License - see the LICENSE file for details.

