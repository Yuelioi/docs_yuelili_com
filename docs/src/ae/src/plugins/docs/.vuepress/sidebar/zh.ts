import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/stardust/": [
    { text: "介绍", icon: "creative", prefix: "Overview/", collapsable: true, children: "structure" },
    { text: "交互式界面", icon: "creative", prefix: "User-Interface/", collapsable: true, children: "structure" },
    { text: "发射器", icon: "creative", prefix: "Emitters/", collapsable: true, children: "structure" },
    { text: "粒子", icon: "creative", prefix: "Particle/", collapsable: true, children: "structure" },
    { text: "场", icon: "creative", prefix: "Space-Deformers/", collapsable: true, children: "structure" },
    { text: "模型与材质", icon: "creative", prefix: "Model-And-Materials/", collapsable: true, children: "structure" },
    { text: "体积", icon: "creative", prefix: "Volumes/", collapsable: true, children: "structure" },
    { text: "变形与变换", icon: "creative", prefix: "Transform/", collapsable: true, children: "structure" },
  ]
});
