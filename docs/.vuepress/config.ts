import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { docsearchPlugin } from '@vuepress/plugin-docsearch'

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
      appId:"7KVOKPRBFN",
      apiKey:"75c2a54e8609f816af252168aaf48539",
      indexName:"dev_test"
    }),
  ]
});
