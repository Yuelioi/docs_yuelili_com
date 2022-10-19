import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/scripting/": [
    { text: "介绍", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "常规", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "项目 Item", icon: "creative", prefix: "Item/", collapsable: true, children: "structure" },
    { text: "序列 Sequence", icon: "creative", prefix: "Sequence/", collapsable: true, children: "structure" },
    { text: "其他 Other", icon: "creative", prefix: "Other/", collapsable: true, children: "structure" },
    { text: "集合 Collection", icon: "creative", prefix: "Collection/", collapsable: true, children: "structure" },
  ],
});
