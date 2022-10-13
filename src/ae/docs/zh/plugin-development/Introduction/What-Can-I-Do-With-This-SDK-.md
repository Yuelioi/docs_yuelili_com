---
title: What Can I Do With This SDK
order: 3
category:
  - AE 插件开发
---

# What Can I Do With This SDK?

这个 SDK 描述了开发人员用来建立插件的应用编程接口(API)。这些插件可以扩展 After Effects 和其他支持 After Effects API 的应用程序的功能。插件也可用于在 After Effects 和其他应用程序之间架起桥梁。

## What Plug-Ins Can I Build With This SDK?

效果插件可以应用于合成中的视频或音频，以处理视频和/或音频数据。内置效果的一些例子有：亮度和对比度、色相/饱和度、高斯模糊和翘曲稳定器。效果插件可以为用户提供一组参数控制，以便对效果进行微调。这些参数值可以随时间变化，效果可能在不同时间使用其他层和参数来计算输出。人们常常认为所有的插件都是效果器。但效果器只是 After Effects 使用的一种类型的插件。

请看构建效果的快速入门视频(在 macOS 上)。[adobe.ly/2sjMDwM](https://adobe.ly/2sjMDwM)

AEGP(After Effects General Plug-ins)\_可以读取和修改 After Effects 项目和偏好中的几乎所有元素。他们可以添加菜单项，"钩"(注册自己接收)和触发 After Effects 的内部命令，并添加新的面板，在 After Effects 用户界面中停靠和调整大小。他们可以使用标记和关键帧，并管理渲染队列。它们甚至可以运行脚本。内置 AEGPs 的一些例子是 AAF 导入器和 SWF 导出器。Automatic Duck Pro Import AE 是另一个著名的 AEGP。

后期效果输入/输出(AEIO)插件\_为新的媒体文件类型提供支持。除非你需要一个自定义的设置对话框来指定解释设置，否则[Premiere Pro Importers](other-integration-possibilities.html) API 提供了类似的功能，在许多情况下是比较好的。AEIOs 使用 AEGP API 以及某些专门针对 AEIOs 的 API。虽然 After Effects 仍然支持 Photoshop 格式的插件和滤镜，以及国外项目格式(FPF)的插件，但这些 API 早已被弃用，转而使用 AEIO API。

*BlitHook*插件将视频输出到外部硬件，用于广播质量监控和回放到磁带。EMP 样本项目提供了一个起点。在 After Effects CC 2014 及以后的版本中，[Mercury Transmit](other-integration-possibilities.html) 是推荐的 API。

Artisans\_提供 3D 层的渲染输出，从 After Effects 中接管 3D 渲染(它仍然处理所有 2D 层的渲染)。Artisans 使用 AEGP API 以及 Artisans 特有的某些 API。

没有看到上面描述的你需要的整合类型？After Effects 非常灵活，还有其他几种方式可以与 After Effects 集成。请看。[其他集成的可能性](other-integration-possibilities.html) 。

## Where Do Plug-ins Appear In After Effects?

效果插件出现在*Effect*菜单和 Effects & Presets 面板上，在其 PiPL 中指定的效果类别中。一旦它们被应用，效果的参数控制(滑块、弹出窗口等)就会出现在效果控制面板(ECP)中。

After Effects General Plug-ins (AEGPs)可以在任何 After Effects 菜单中添加项目，以及在 Window 菜单中列出的额外面板。这些菜单项与 After Effects 自己的菜单项没有区别。

[AEIOs](./aeios/aeios.html)和 Photoshop 格式插件可以出现在*文件>导入*菜单中，或者出现在*导入文件*对话框的*文件类型*下拉菜单中，具体取决于导入器的类型。AEIOs 和格式插件也可以作为可用的输出格式出现在渲染队列中。

BlitHook 插件会自动加载并被 AE 使用，但不会出现在任何菜单或对话框中。插件可以选择性地提供一个菜单项，打开它自己的自定义设置对话框。它将使用 AEGP API 注册和更新菜单项。

它可以通过`AEGP_RegisterUpdateMenuHook()`来注册被 After Effects 调用以更新菜单，它可以通过`AEGP_EnableCommand()`/`DisableCommand()`来调光/激活菜单项。

工匠出现在*Composition Settings*对话框的*Advanced*选项卡中的*Rendering Plug-in*下拉菜单。

## How Does After Effects Interact With Plug-ins?

用 C 或 C++编写的插件，在 MacOS 上是捆绑包，在 Windows 上是 DLLs。它们在两个平台上都必须包含一个插件属性列表([PiPL 资源](pipl-resources.html) )资源。插件必须位于几个特定的文件夹中的一个，才能被 After Effects 加载和使用。

对于特效插件，After Effects 会将命令选择器(和相关信息)发送到特效的[PiPL 资源](pipl-resources.html)资源中指定的插件[入口点](.../effect-basics/entry-point.html)(#effect-basics-entry-point)。选择器是根据用户的操作来发送的--应用效果、改变参数、刷新时间轴上的帧，以及渲染都会提示不同的选择器序列。

After Effects 创建了多个效果实例，每个序列都有独特的设置和输入数据。所有实例共享相同的全局数据，并可以在其序列内的所有帧之间共享数据。After Effects 不会在用户应用效果时立即处理所有图像数据；它只在需要输出时才调用效果。

After Effects General Plug-ins (AEGPs)在应用程序启动时调用其入口点函数，并注册当时需要的任何信息传递。对 AEGP 的进一步调用是由用户操作发起的，作为插件对菜单命令或 UI 事件的反应的一部分。根据它们的功能，插件可能也需要响应操作系统特定的入口点，用于 UI 工作和线程管理。

对于 BlitHook 插件来说，帧在组成面板中显示时被推送。用户可以在时间线的某个区域启动 RAM 预览，这样它就会被渲染到 RAM 中，然后就会全速播放。

## SDK Contents

SDK 包含定义 After Effects APIs 的头文件、演示集成功能的示例项目和本 SDK 指南。

它们与 SDK 头文件一起编译，暴露了插件所要使用的各种 After Effects 功能。
