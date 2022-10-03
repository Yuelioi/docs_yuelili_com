import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  "/en/home",
  {
    text: "Adobe",
    icon: "edit",
    prefix: "/en/",
    children: [
      {
        text: "AE",
        icon: "edit",
        prefix: "ae/",
        children: [
          { text: "Expression", icon: "edit", link: "expression/" },
          { text: "Scripting", icon: "edit", link: "scripting/" },
        ],
      },
      {
        text: "Plugins",
        icon: "edit",
        prefix: "ae/",
        children: [
          { text: "*Particular", icon: "edit", link: "plugins/particular/" },
          { text: "*Stardust", icon: "edit", link: "plugins/stardust/" },
        ],
      },
      { text: "PR", icon: "edit", prefix: "pr/", children: [{ text: "Scripting", icon: "edit", link: "scripting/" }] },
    ],
  },

  { text: "Blender", icon: "edit", prefix: "/en/blender/", children: [{ text: "*Scripting", icon: "edit", link: "development/" }] },
  { text: "Houdini", icon: "edit", prefix: "/en/houdini/", children: [{ text: "*VEX", icon: "edit", link: "vex/" }] },
  { text: "Yuelili.com", icon: "note", link: "https://www.yuelili.com" },
]);
