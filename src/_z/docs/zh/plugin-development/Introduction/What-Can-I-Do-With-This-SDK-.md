---
title: What Can I Do With This SDK
order: 3
category:
  - AE 插件开发
---

# What Can I Do With This SDK?

这个SDK描述了开发人员用来建立插件的应用编程接口(API)。这些插件可以扩展After Effects和其他支持After Effects API的应用程序的功能。插件也可用于在After Effects和其他应用程序之间架起桥梁。

## What Plug-Ins Can I Build With This SDK?

效果插件可以应用于合成中的视频或音频，以处理视频和/或音频数据。内置效果的一些例子有：亮度和对比度、色相/饱和度、高斯模糊和翘曲稳定器。效果插件可以为用户提供一组参数控制，以便对效果进行微调。这些参数值可以随时间变化，效果可能在不同时间使用其他层和参数来计算输出。人们常常认为所有的插件都是效果器。但效果器只是After Effects使用的一种类型的插件。

请看构建效果的快速入门视频(在macOS上)。[adobe.ly/2sjMDwM](https://adobe.ly/2sjMDwM)

AEGP(After Effects General Plug-ins)_可以读取和修改After Effects项目和偏好中的几乎所有元素。他们可以添加菜单项，"钩"(注册自己接收)和触发After Effects的内部命令，并添加新的面板，在After Effects用户界面中停靠和调整大小。他们可以使用标记和关键帧，并管理渲染队列。它们甚至可以运行脚本。内置AEGPs的一些例子是AAF导入器和SWF导出器。Automatic Duck Pro Import AE是另一个著名的AEGP。

后期效果输入/输出(AEIO)插件_为新的媒体文件类型提供支持。除非你需要一个自定义的设置对话框来指定解释设置，否则[Premiere Pro Importers](other-integration-possibilities.html)  API提供了类似的功能，在许多情况下是比较好的。AEIOs使用AEGP API以及某些专门针对AEIOs的API。虽然After Effects仍然支持Photoshop格式的插件和滤镜，以及国外项目格式(FPF)的插件，但这些API早已被弃用，转而使用AEIO API。

_BlitHook_插件将视频输出到外部硬件，用于广播质量监控和回放到磁带。EMP样本项目提供了一个起点。在After Effects CC 2014及以后的版本中，[Mercury Transmit](other-integration-possibilities.html)  是推荐的API。

Artisans_提供3D层的渲染输出，从After Effects中接管3D渲染(它仍然处理所有2D层的渲染)。Artisans使用AEGP API以及Artisans特有的某些API。

没有看到上面描述的你需要的整合类型？After Effects非常灵活，还有其他几种方式可以与After Effects集成。请看。[其他集成的可能性](other-integration-possibilities.html) 。

## Where Do Plug-ins Appear In After Effects?

效果插件出现在_Effect_菜单和Effects & Presets面板上，在其PiPL中指定的效果类别中。一旦它们被应用，效果的参数控制(滑块、弹出窗口等)就会出现在效果控制面板(ECP)中。

After Effects General Plug-ins (AEGPs)可以在任何After Effects菜单中添加项目，以及在Window菜单中列出的额外面板。这些菜单项与After Effects自己的菜单项没有区别。

[AEIOs](./aeios/aeios.html)和Photoshop格式插件可以出现在_文件>导入_菜单中，或者出现在_导入文件_对话框的_文件类型_下拉菜单中，具体取决于导入器的类型。AEIOs和格式插件也可以作为可用的输出格式出现在渲染队列中。

BlitHook插件会自动加载并被AE使用，但不会出现在任何菜单或对话框中。插件可以选择性地提供一个菜单项，打开它自己的自定义设置对话框。它将使用AEGP API注册和更新菜单项。

它可以通过`AEGP_RegisterUpdateMenuHook()`来注册被After Effects调用以更新菜单，它可以通过`AEGP_EnableCommand()`/`DisableCommand()`来调光/激活菜单项。

工匠出现在_Composition Settings_对话框的_Advanced_选项卡中的_Rendering Plug-in_下拉菜单。

## How Does After Effects Interact With Plug-ins?

用C或C++编写的插件，在MacOS上是捆绑包，在Windows上是DLLs。它们在两个平台上都必须包含一个插件属性列表([PiPL资源](pipl-resources.html) )资源。插件必须位于几个特定的文件夹中的一个，才能被After Effects加载和使用。

对于特效插件，After Effects会将命令选择器(和相关信息)发送到特效的[PiPL资源](pipl-resources.html)资源中指定的插件[入口点](.../effect-basics/entry-point.html)(#effect-basics-entry-point)。选择器是根据用户的操作来发送的--应用效果、改变参数、刷新时间轴上的帧，以及渲染都会提示不同的选择器序列。

After Effects创建了多个效果实例，每个序列都有独特的设置和输入数据。所有实例共享相同的全局数据，并可以在其序列内的所有帧之间共享数据。After Effects不会在用户应用效果时立即处理所有图像数据；它只在需要输出时才调用效果。

After Effects General Plug-ins (AEGPs)在应用程序启动时调用其入口点函数，并注册当时需要的任何信息传递。对AEGP的进一步调用是由用户操作发起的，作为插件对菜单命令或UI事件的反应的一部分。根据它们的功能，插件可能也需要响应操作系统特定的入口点，用于UI工作和线程管理。

对于BlitHook插件来说，帧在组成面板中显示时被推送。用户可以在时间线的某个区域启动RAM预览，这样它就会被渲染到RAM中，然后就会全速播放。

## SDK Contents

SDK包含定义After Effects APIs的头文件、演示集成功能的示例项目和本SDK指南。

它们与SDK头文件一起编译，暴露了插件所要使用的各种After Effects功能。