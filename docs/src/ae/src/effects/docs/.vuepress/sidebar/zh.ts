import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/zh/": [
    { text: "Overview", icon: "creative", prefix: "Overview/", collapsable: true, children: "structure" },
    { text: "3D 通道", icon: "creative", prefix: "3D-Channel/", collapsable: true, children: "structure" },
    { text: "音频", icon: "creative", prefix: "Audio/", collapsable: true, children: "structure" },
    { text: "模糊与锐化", icon: "creative", prefix: "Blur-Sharpen/", collapsable: true, children: "structure" },
    { text: "通道", icon: "creative", prefix: "Channel/", collapsable: true, children: "structure" },
    { text: "颜色校正", icon: "creative", prefix: "Color-Correction/", collapsable: true, children: "structure" },
    { text: "扭曲", icon: "creative", prefix: "Distort/", collapsable: true, children: "structure" },
    { text: "表达式控制", icon: "creative", prefix: "Expression-Controls/", collapsable: true, children: "structure" },
    { text: "生成", icon: "creative", prefix: "Generate/", collapsable: true, children: "structure" },
    { text: "沉浸式视频", icon: "creative", prefix: "Immersive-Video/", collapsable: true, children: "structure" },
    { text: "抠像", icon: "creative", prefix: "Keying/", collapsable: true, children: "structure" },
    { text: "遮罩", icon: "creative", prefix: "Matte/", collapsable: true, children: "structure" },
    { text: "杂色与颗粒", icon: "creative", prefix: "Noise-Grain/", collapsable: true, children: "structure" },
    { text: "过时", icon: "creative", prefix: "Obsolete/", collapsable: true, children: "structure" },
    { text: "透视", icon: "creative", prefix: "Perspective/", collapsable: true, children: "structure" },
    { text: "模拟", icon: "creative", prefix: "Simulation/", collapsable: true, children: "structure" },
    { text: "风格化", icon: "creative", prefix: "Stylize/", collapsable: true, children: "structure" },
    { text: "文字", icon: "creative", prefix: "Text/", collapsable: true, children: "structure" },
    { text: "时间", icon: "creative", prefix: "Time/", collapsable: true, children: "structure" },
    { text: "过渡", icon: "creative", prefix: "Transition/", collapsable: true, children: "structure" },
    { text: "实用工具", icon: "creative", prefix: "Utility/", collapsable: true, children: "structure" },
  ]
  
});
