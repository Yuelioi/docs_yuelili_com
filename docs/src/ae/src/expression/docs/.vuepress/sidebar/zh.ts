import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    { text: "介绍", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "常规", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "对象", icon: "creative", prefix: "Objects/", collapsable: true, children: "structure" },
    { text: "图层", icon: "creative", prefix: "Layers/", collapsable: true, children: "structure" },
    { text: "文字", icon: "creative", prefix: "Text/", collapsable: true, children: "structure" },
  ],
});
