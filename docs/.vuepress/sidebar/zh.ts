import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
  "/zh/": [
    {
      text: "AE文档",
      icon: "creative",
      prefix: "ae/",
      link: "ae/",
      children: "structure",
    },
    {
      text: "Blender文档",
      icon: "creative",
      prefix: "blender/",
      link: "blender/",
      children: "structure",
    },
  ],
  "/zh/ae/": [
    {
      text: "表达式",
      icon: "creative",
      prefix: "expression/",
      link: "expression/",
      // children: "structure",
    },
    {
      text: "文字动画",
      icon: "creative",
      prefix: "text-animation/",
      link: "text-animation/",
    },
    {
      text: "形状图层",
      icon: "creative",
      prefix: "shape/",
      link: "shape/",
    },
    {
      text: "内置效果",
      icon: "creative",
      prefix: "expression/",
      link: "expression/",
    },
  ],
  "/zh/ae/expression/": "structure",
  "/zh/ae/shape/": "structure",
  "/zh/ae/text-animation/": "structure",
  "/zh/Speed Tree/": "structure",
});
