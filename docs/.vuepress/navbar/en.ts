import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Home",
    icon:"home",
    link: "/en/",
  },
  {
    text: "home",
    icon:"",
    link: "/en/home",
  },
  {
    text: "Adobe",
    icon: "edit",
    prefix: "https://docs.yuelili.com/en/",
    children: [
      {
        text: "AE",
        icon: "edit",
        prefix: "https://docs.yuelili.com/ae/",
        children: [
          { text: "Expression", icon: "edit", link: "https://docs.yuelili.com/ae/en/expression/" },
          { text: "Scripting", icon: "edit", link: "https://docs.yuelili.com/ae/en/scripting/" },
        ],
      },
      {
        text: "Plugins",
        icon: "edit",
        prefix: "https://docs.yuelili.com/ae/plugins/",
        children: [
          { text: "*Particular", icon: "edit", link: "https://docs.yuelili.com/ae/en/plugins/particular/" },
          { text: "*Stardust", icon: "edit", link: "https://docs.yuelili.com/ae/en/plugins/stardust/" },
        ],
      },
      {
        text: "PR",
        icon: "edit",
        prefix: "https://docs.yuelili.com/pr/en/",
        children: [{ text: "Scripting", icon: "edit", link: "https://docs.yuelili.com/pr/en/scripting/" }],
      },
    ],
  },

  {
    text: "Blender",
    icon: "edit",
    prefix: "https://docs.yuelili.com/blender/en/",
    children: [{ text: "Scripting", icon: "edit", link: "https://docs.yuelili.com/blender/en/development/" }],
  },
  {
    text: "Speed Tree",
    icon: "edit",
    prefix: "https://docs.yuelili.com/speedtree/en/",
    link: "https://docs.yuelili.com/speedtree/en/",
  },
  {
    text: "Houdini",
    icon: "edit",
    prefix: "https://docs.yuelili.com/houdini/en/",
    children: [{ text: "VEX", icon: "edit", link: "https://docs.yuelili.com/houdini/en/vex/" }],
  },
  { text: "Yuelili.com", icon: "note", link: "https://www.yuelili.com" },
]);
