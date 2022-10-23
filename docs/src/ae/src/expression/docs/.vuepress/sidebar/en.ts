import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    { text: "Intro", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "General", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "Objects", icon: "creative", prefix: "Objects/", collapsable: true, children: "structure" },
    { text: "Layers", icon: "creative", prefix: "Layers/", collapsable: true, children: "structure" },
    { text: "Text", icon: "creative", prefix: "Text/", collapsable: true, children: "structure" },
  ],
});
