import { defineUserConfig } from "vuepress";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";
// import { redirectPlugin } from "vuepress-plugin-redirect";
import { blogPlugin } from "vuepress-plugin-blog2";


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
  plugins:[
    blogPlugin({}),
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
