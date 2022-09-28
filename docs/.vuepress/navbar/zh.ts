import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/zh/",
  "/zh/home",
  {
    text: "ADobe",
    icon: "edit",
    prefix: "/zh/",
    children: [
      {
        text: "AE文档",
        icon: "edit",
        prefix: "ae/",
        children: [
          { text: "表达式", icon: "edit", link: "expression/" },
          { text: "文字动画", icon: "edit", link: "text-animation/" },
          { text: "形状图层", icon: "edit", link: "shape/" },
          { text: "*内置效果", icon: "edit", link: "effects/" },
          { text: "脚本开发", icon: "edit", link: "scripting/" },
        ],
      },
      {
        text: "AE插件",
        icon: "edit",
        prefix: "ae/",
        children: [
          { text: "*P粒子", icon: "edit", link: "particular/" },
          { text: "*Stardust", icon: "edit", link: "plugins/stardust/" },
        ],
      },
      {
        text: "PR文档",
        icon: "edit",
        prefix: "pr/",
        children: [{ text: "脚本开发", icon: "edit", link: "scripting/" }],
      },
    ],
  },

  {
    text: "*Blender文档",
    icon: "edit",
    prefix: "/zh/",
    children: [{ text: "*脚本开发", icon: "edit", link: "expression/" }],
  },
  {
    text: "*Houdini文档",
    icon: "edit",
    prefix: "/zh/",
    children: [{ text: "*VEX", icon: "edit", link: "expression/" }],
  },

  {
    text: "月离的万事屋",
    icon: "note",
    link: "https://www.yuelili.com",
  },
]);
