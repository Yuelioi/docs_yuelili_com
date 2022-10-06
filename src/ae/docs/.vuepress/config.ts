import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import mdEnhancePlugin from "vuepress-plugin-md-enhance";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";

// 需要修改 base

export default defineUserConfig({
  base: "/ae/",
  locales: {
    "/en/": {
      lang: "en-US",
      title: "YueLi Document",
      description: "Open Source Documentation",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "月离文档站",
      description: "开源文档项目",
    },
  },
  theme,

  plugins: [
    mdEnhancePlugin({
      // 添加 `@src` 别名支持
      include: true,
    }),

    searchPlugin({
      locales: {
        "/en/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),

    // docsearchPlugin({
    //   appId:"55HOH8C0U6",
    //   apiKey:"6a9654f45e6c315b1297ec7d974994cc",
    //   indexName:"docs"
    // }),
  ],
});
