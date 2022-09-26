import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

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
  // theme: hopeTheme({
  //   iconAssets:"fontawesome"
  //   // iconAssets: "//at.alicdn.com/t/c/font_3673964_i7nrxfjndp.css",
  // }),
  plugins:[
    searchPlugin({
      locales: {
        '/en/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        }}
    }),
    // docsearchPlugin({
    //   appId:"55HOH8C0U6",
    //   apiKey:"6a9654f45e6c315b1297ec7d974994cc",
    //   indexName:"docs"
    // }),
    
  ]
});
