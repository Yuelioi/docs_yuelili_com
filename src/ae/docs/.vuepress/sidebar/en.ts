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
    { text: "EFFECT BASICS", icon: "creative", prefix: "EFFECT-BASICS/", collapsable: true, children: "structure" },
    { text: "EFFECT DETAILS", icon: "creative", prefix: "EFFECT-DETAILS/", collapsable: true, children: "structure" },
    { text: "SMARTFX", icon: "creative", prefix: "SMARTFX/", collapsable: true, children: "structure" },
    { text: "EFFECT UI & EVENTS", icon: "creative", prefix: "EFFECT-UI-EVENTS/", collapsable: true, children: "structure" },
    { text: "AUDIO", icon: "creative", prefix: "AUDIO/", collapsable: true, children: "structure" },
    { text: "AEGPS", icon: "creative", prefix: "AEGPS/", collapsable: true, children: "structure" },
    { text: "ARTISANS", icon: "creative", prefix: "ARTISANS/", collapsable: true, children: "structure" },
    { text: "AEIOS", icon: "creative", prefix: "AEIOS/", collapsable: true, children: "structure" },
    { text: "PREMIERE PRO", icon: "creative", prefix: "PREMIERE-PRO/", collapsable: true, children: "structure" },
  ],
});
