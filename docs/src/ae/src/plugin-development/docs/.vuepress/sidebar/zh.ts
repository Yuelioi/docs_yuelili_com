import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    { text: "指南", icon: "creative", prefix: "Guide/", collapsable: true, children: "structure" },
    { text: "关于", icon: "creative", prefix: "About/", collapsable: true, children: "structure" },
    { text: "介绍", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "效果基础", icon: "creative", prefix: "Effect-Basics/", collapsable: true, children: "structure" },
    { text: "效果细节", icon: "creative", prefix: "Effect-Details/", collapsable: true, children: "structure" },
    { text: "SMARTFX", icon: "creative", prefix: "Smartfx/", collapsable: true, children: "structure" },
    { text: "效果 UI 与事件", icon: "creative", prefix: "Effect-Ui-Events/", collapsable: true, children: "structure" },
    { text: "音频", icon: "creative", prefix: "Audio/", collapsable: true, children: "structure" },
    { text: "AEGPS", icon: "creative", prefix: "Aegps/", collapsable: true, children: "structure" },
    { text: "ARTISANS", icon: "creative", prefix: "Artisans/", collapsable: true, children: "structure" },
    { text: "AEIOS", icon: "creative", prefix: "Aeios/", collapsable: true, children: "structure" },
    { text: "Premiere Pro", icon: "creative", prefix: "ppro/", collapsable: true, children: "structure" },
  ],
});
