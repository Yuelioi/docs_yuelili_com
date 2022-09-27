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
  "/zh/ae/scripting/": [
    {
      text: "学习指南",
      icon: "creative",
      prefix: "Guide/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "介绍",
      icon: "creative",
      prefix: "Intro/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "常规",
      icon: "creative",
      prefix: "General/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "项目 Item",
      icon: "creative",
      prefix: "Item/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "图层 Layer",
      icon: "creative",
      prefix: "Layer/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "属性 Property",
      icon: "creative",
      prefix: "Property/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "渲染队列 Render-Queue",
      icon: "creative",
      prefix: "Render-Queue/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "图层源 Source",
      icon: "creative",
      prefix: "Source/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "其他 Other",
      icon: "creative",
      prefix: "Other/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "匹配名称 Match-Name",
      icon: "creative",
      prefix: "Match-Name/",

      collapsable: true,
      children: "structure",
    },
    {
      text: "Javascript-工具",
      icon: "creative",
      prefix: "Javascript-Tools/",
      link: "Javascript-Tools/",
      collapsable: true,
      children: "structure",
    },
  ],
  "/zh/Speed Tree/": "structure",
});
