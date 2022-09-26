import { hopeTheme } from "vuepress-theme-hope";
import {
  enNavbarConfig,
  zhNavbarConfig,
} from "./navbar/index.js";
import {
  enSidebarConfig,
  zhSidebarConfig,
} from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://docs.yuelili.com",

  author: {
    name: "月离",
    url: "https://yuelili.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "Yuelioi/docs_yuelili_com",

  docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],



  locales: {
    "/en/": {
      // navbar
      navbar: enNavbarConfig,

      // sidebar
      sidebar: enSidebarConfig,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },
    },


    "/zh/": {
      // navbar
      navbar: zhNavbarConfig,

      // sidebar
      sidebar: zhSidebarConfig,

      footer: "默认页脚",

      displayFooter: true,

    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      tasklist: true,

        // 启用图片标记
        imageMark: true,
        // 启用图片大小
        imageSize: true,
        mark: true,
        container: true,

      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
