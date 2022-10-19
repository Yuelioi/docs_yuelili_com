import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    { text: "学习指南", icon: "creative", prefix: "Guide/", collapsable: true, children: "structure" },
    { text: "介绍", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "常规", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "项目 Item", icon: "creative", prefix: "Item/", collapsable: true, children: "structure" },
    { text: "图层 Layer", icon: "creative", prefix: "Layer/", collapsable: true, children: "structure" },
    { text: "属性 Property", icon: "creative", prefix: "Property/", collapsable: true, children: "structure" },
    { text: "渲染队列 Render-Queue", icon: "creative", prefix: "Render-Queue/", collapsable: true, children: "structure" },
    { text: "图层源 Source", icon: "creative", prefix: "Source/", collapsable: true, children: "structure" },
    { text: "其他 Other", icon: "creative", prefix: "Other/", collapsable: true, children: "structure" },
    { text: "匹配名称 Match-Name", icon: "creative", prefix: "Match-Name/", collapsable: true, children: "structure" },
    { text: "Javascript-工具", icon: "creative", prefix: "Javascript-Tools/", collapsable: true, children: "structure" },
    { text: "第三方工具", icon: "creative", prefix: "Third-Part/", collapsable: true, children: "structure" },
  ],
});
