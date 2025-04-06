import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-TW",
  title: "志強電器行",
  description: "ck website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/public/images/logo/logo_c.png",
    nav: [
      { text: "首頁", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    footer: {
      copyright:
        "© 2019-2025 Mars Group 版權所有 | Todos os direitos reservados",
    },

    docFooter: {
      prev: "上一頁",
      next: "下一頁",
    },

    outlineTitle: "本頁目錄",
  },
});
