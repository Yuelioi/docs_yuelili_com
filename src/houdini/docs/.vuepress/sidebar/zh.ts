import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/blender/development/": [
    { text: "概述", icon: "creative", prefix: "Overview/", collapsable: true, children: "structure" },
    { text: "介绍", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "Bl-App", icon: "creative", prefix: "Bl-App/", collapsable: true, children: "structure" },
    { text: "Bpy-Ops", icon: "creative", prefix: "Bpy-Ops/", collapsable: true, children: "structure" },
    { text: "Bpy-Types-Bpy_Struct", icon: "creative", prefix: "Bpy-Types-Bpy_Struct/", collapsable: true, children: "structure" },
    { text: "Bpy-Types-Id", icon: "creative", prefix: "Bpy-Types-Id/", collapsable: true, children: "structure" },
    { text: "Bpy-Types-Nodeinternal", icon: "creative", prefix: "Bpy-Types-Nodeinternal/", collapsable: true, children: "structure" },
  ],
});
