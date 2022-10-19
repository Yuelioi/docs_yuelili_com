import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    { text: "About", icon: "creative", prefix: "About/", collapsable: true, children: "structure" },
    { text: "Introduction", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "Effect Basics", icon: "creative", prefix: "Effect-Basics/", collapsable: true, children: "structure" },
    { text: "Effect Details", icon: "creative", prefix: "Effect-Details/", collapsable: true, children: "structure" },
    { text: "Smartfx", icon: "creative", prefix: "Smartfx/", collapsable: true, children: "structure" },
    { text: "Effect Ui & Events", icon: "creative", prefix: "Effect-Ui-Events/", collapsable: true, children: "structure" },
    { text: "Audio", icon: "creative", prefix: "Audio/", collapsable: true, children: "structure" },
    { text: "AEGPS", icon: "creative", prefix: "Aegps/", collapsable: true, children: "structure" },
    { text: "Artisans", icon: "creative", prefix: "Artisans/", collapsable: true, children: "structure" },
    { text: "AEIOS", icon: "creative", prefix: "Aeios/", collapsable: true, children: "structure" },
    { text: "PREMIERE PRO", icon: "creative", prefix: "ppro/", collapsable: true, children: "structure" },
  ],
});
