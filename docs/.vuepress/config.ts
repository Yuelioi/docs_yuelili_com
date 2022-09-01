import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "YueLi Document",
      description: "OpenSource Documentation",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "月离文档站",
      description: "开源文档项目",
    },
  },

  theme,
  plugins:[
    docsearchPlugin({
      appId:"55HOH8C0U6",
      apiKey:"6a9654f45e6c315b1297ec7d974994cc",
      indexName:"docs"
    }),
  ]
});
