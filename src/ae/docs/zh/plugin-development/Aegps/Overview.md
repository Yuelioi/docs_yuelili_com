---
title: Overview
order: 3
category:
  - AE 插件开发
---

# Overview

AEGPs使用插件组件架构（PICA）功能套件来访问所有功能。

他们也可以发布自己的功能套件，供特效插件使用（由于插件的加载顺序不同，AEGPs不能依赖After Effects没有提供的套件）。

AEGPs也可以请求一个套件，如果它不存在，就自己提供替代功能。

## AEGP Communication With After Effects

对于效果插件来说，所有与After Effects的通信都是通过一个入口点函数进行的。而AEGP则不是这样的。

虽然After Effects会调用AEGP的PiPL中指定的入口点函数（这仍然是必需的），但After Effects和AEGP之间的所有后续通信都由AEGP注册的钩子函数处理。

这种注册必须在插件的入口函数中进行，使用[注册套件](aegp-suites.html) (#aegps-aegp-suites-register-suite)。

## Different Tasks, Same API

AEGP的工作方式是一样的，不分专业。

它们可以很简单，只是[添加一个菜单项](implementation.html) (#aegps-implementation-adding-a-menu-item)来触发一个外部应用程序，也可以像Artisans那样复杂。

虽然任何插件都可以访问任何函数套件，但只有适当类型的插件才可以访问所有需要的参数。

只有Artisans会有渲染上下文，只有AEIO插件会收到输入和输出规范；消息传递取决于哪些钩子函数被注册。