import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/home",
  {
    text: "Adobe",
    icon: "edit",
    prefix: "/zh/",
    children: [
      {
        text: "AE文档",
        icon: "edit",
        prefix: "https://docs.yuelili.com/ae/zh/",
        children: [
          { text: "表达式", icon: "edit", link: "https://docs.yuelili.com/ae/zh/expression/" },
          { text: "文字动画", icon: "edit", link: "https://docs.yuelili.com/ae/zh/text-animation/" },
          { text: "形状图层", icon: "edit", link: "https://docs.yuelili.com/ae/zh/shape/" },
          { text: "内置效果", icon: "edit", link: "https://docs.yuelili.com/ae/zh/effects/" },
          { text: "脚本开发", icon: "edit", link: "https://docs.yuelili.com/ae/zh/scripting/" },
        ],
      },
      {
        text: "AE插件",
        icon: "edit",
        prefix: "https://docs.yuelili.com/ae/zh/plugins/",
        children: [
          { text: "*P粒子", icon: "edit", link: "https://docs.yuelili.com/ae/zh/plugins/particular/" },
          { text: "*Stardust", icon: "edit", link: "https://docs.yuelili.com/ae/zh/plugins/stardust/" },
        ],
      },
      {
        text: "PR文档",
        icon: "edit",
        prefix: "pr/",
        children: [{ text: "脚本开发", icon: "edit", link: "https://docs.yuelili.com/pr/zh/scripting/" }],
      },
    ],
  },

  {
    text: "Blender文档",
    icon: "edit",
    prefix: "https://docs.yuelili.com/blender/zh/",
    children: [{ text: "*脚本开发", icon: "edit", link: "https://docs.yuelili.com/blender/zh/development/" }],
  },
  {
    text: "Speed Tree",
    icon: "edit",
    prefix: "https://docs.yuelili.com/speedtree/zh/",
    link: "https://docs.yuelili.com/speedtree/zh/",
  },
  {
    text: "Houdini文档",
    icon: "edit",
    prefix: "https://docs.yuelili.com/houdini/zh/",
    children: [{ text: "*VEX", icon: "edit", link: "https://docs.yuelili.com/houdini/zh/vex/" }],
  },
  { text: "月离的万事屋", icon: "note", link: "https://www.yuelili.com" },
]);
