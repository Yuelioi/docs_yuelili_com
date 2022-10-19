import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";


// 需要修改docsDir

export default hopeTheme({
  hostname: "https://docs.yuelili.com",
  author: {
    name: "月离",
    url: "https://yuelili.com",
  },
  iconAssets: "//at.alicdn.com/t/c/font_3673964_1b9daq7fye6h.css",
  logo: "/logo.svg",
  repo: "Yuelioi/docs_yuelili_com",
  docsDir: "docs/src/ae/src/docs/effects/docs/",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    orange: "#fb9b5f",
  },
  fullscreen: true,
  locales: {
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      displayFooter: true,
      copyright: "@2022 | 月离的万事屋",

    },
    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      displayFooter: true,
      copyright: "@2022 | 月离的万事屋",
    },
  },
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "Yuelioi/docs_comments",
      repoId: "R_kgDOIGO7mg",
      category: "General",
      categoryId: "DIC_kwDOIGO7ms4CRti3",
    },
    mdEnhance: {
      tasklist: true,
      imageMark: true,
      imageSize: true,
      mark: true,
      container: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
