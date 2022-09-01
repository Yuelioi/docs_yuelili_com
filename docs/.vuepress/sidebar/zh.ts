import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({

  "/zh/": [

    {
      text: "如何使用",
      icon: "creative",
      prefix: "exp/",
      link: "exp/",
      children: "structure",
    },{
      text: "如何使用3",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    }],
  "/zh/ae/":[
    {
      text: "表达式",
      icon: "creative",
      prefix: "expression/",
      link: "expression/",
      // children: "structure",
    }
  ],
  "/zh/ae/expression/":"structure",
  

  
  
});
