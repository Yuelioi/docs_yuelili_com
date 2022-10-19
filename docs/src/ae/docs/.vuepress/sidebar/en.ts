import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/expression/": [
    { text: "Intro", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "General", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "Objects", icon: "creative", prefix: "Objects/", collapsable: true, children: "structure" },
    { text: "Layers", icon: "creative", prefix: "Layers/", collapsable: true, children: "structure" },
    { text: "Text", icon: "creative", prefix: "Text/", collapsable: true, children: "structure" },
  ],
  "/en/scripting/": [
    { text: "Intro", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "General", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "Item", icon: "creative", prefix: "Item/", collapsable: true, children: "structure" },
    { text: "Layer", icon: "creative", prefix: "Layer/", collapsable: true, children: "structure" },
    { text: "Property", icon: "creative", prefix: "Property/", collapsable: true, children: "structure" },
    { text: "Render-Queue", icon: "creative", prefix: "Render-Queue/", collapsable: true, children: "structure" },
    { text: "Source", icon: "creative", prefix: "Source/", collapsable: true, children: "structure" },
    { text: "Other", icon: "creative", prefix: "Other/", collapsable: true, children: "structure" },
    { text: "Match-Name", icon: "creative", prefix: "Match-Name/", collapsable: true, children: "structure" },
  ],
  "/en/plugin-development/": [
    { text: "About", icon: "creative", prefix: "About/", collapsable: true, children: "structure" },
    { text: "Introduction", icon: "creative", prefix: "Introduction/", collapsable: true, children: "structure" },
    { text: "Effect Basics", icon: "creative", prefix: "Effect-Basics/", collapsable: true, children: "structure" },
    { text: "Effect Details", icon: "creative", prefix: "Effect-Details/", collapsable: true, children: "structure" },
    { text: "Smartfx", icon: "creative", prefix: "Smartfx/", collapsable: true, children: "structure" },
    { text: "Effect Ui & Events", icon: "creative", prefix: "Effect-Ui-Events/", collapsable: true, children: "structure" },
    { text: "Audio", icon: "creative", prefix: "Audio/", collapsable: true, children: "structure" },
    { text: "AEGPS", icon: "creative", prefix: "Aegps/", collapsable: true, children: "structure" },
    { text: "Artisans", icon: "creative", prefix: "Artisans/", collapsable: true, children: "structure" },
    { text: "AEIOS", icon: "creative", prefix: "Aeios/", collapsable: true, children: "structure" },
    { text: "PREMIERE PRO", icon: "creative", prefix: "Premiere-Pro/", collapsable: true, children: "structure" },
  ],
});
