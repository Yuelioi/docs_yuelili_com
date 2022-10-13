---
title: About this Document
order: 1
category:
  - AE 插件开发
---
# About this Document

多年来，这份文件发生了很大变化。部分是百科全书，部分是操作指南，包含了 20 多年来 API 开发和完善过程中积累的多个层次信息。

诚然，确实需要有个关于 After Effects APIs 的每个棘手细节的信息来源。然而，由于没人愿意阅读这种文件，所以我们试图让它变得更加有趣。

在机会允许的情况下，我们会尝试加入更多的图表、插图和解释 API 复杂性的简洁短文。

一如既往，我们重视并感谢您的意见。

## Organization

- [简介](https://ae-plugins.docsforadobe.dev/intro/intro.html#intro-intro) 概述了与 After Effects 整合的可能性。解释了什么是插件，以及如何与 After Effects 一起工作。介绍了下示例项目，以及如何修改。解释了在哪里安装插件，以及使用什么资源。
- [Effect Basics](https://ae-plugins.docsforadobe.dev/effect-basics/effect-basics.html#effect-basics-effect-basics) 中讨论效果插件的基础知识。这个概述提供了关于传递给效果插件入口点的功能参数的信息。描述了能力标志、效果参数和图像缓冲器。
- [Effect Details](https://ae-plugins.docsforadobe.dev/effect-details/effect-details.html#effect-details-effect-details) 深入介绍了使用许多提供的回调函数开发一个完整的效果插件的细节。它还提供了许多测试思路，以确保插件的稳定性。
- [SmartFX](https://ae-plugins.docsforadobe.dev/smartfx/smartfx.html#smartfx-smartfx) 是对效果插件 API 的扩展，支持 32 位浮点图像。
- [Effect UI &amp; Events](https://ae-plugins.docsforadobe.dev/effect-ui-events/effect-ui-events.html#effect-ui-events-effect-ui-events)涵盖了发送给效果插件的事件，如何纳入自定义用户界面元素，参数监督，以及自定义数据参数类型对自定义用户界面信息传递的依赖性。
- [Audio](https://ae-plugins.docsforadobe.dev/audio/audio.html#audio-audio) 效果涵盖了...[Audio](https://ae-plugins.docsforadobe.dev/audio/audio.html#audio-audio)。
- [AEGPs](https://ae-plugins.docsforadobe.dev/aegps/aegps.html#aegps-aegps) 详细介绍了 After Effects 通用插件(AEGP)的 API。提供的回调函数、与内部消息钩子、操作打开项目的当前内容以及处理菜单命令都有详细的介绍。
- [Artisans](https://ae-plugins.docsforadobe.dev/artisans/artisans.html#artisans-artisans) 包括专门的插件式 3D 渲染器 AEGPs。
- [AEIOs](https://ae-plugins.docsforadobe.dev/aeios/aeios.html#aeios-aeios) 是处理文件输入和输出的专业 AEGPs。
- [Premiere Pro &amp; Other Hosts](https://ae-plugins.docsforadobe.dev/ppro/ppro.html#ppro-ppro) 讨论了与 Premiere Pro 和其他支持 After Effects 插件子集的应用程序的兼容性问题。

## Documentation Conventions

函数、结构名称和一般的 C/C++代码是在代码块中包裹 ；如MyStruct 和 MyFunction()。

蓝色的文字是超链接。

命令选择器则是斜体；_PF_Cmd_RENDER_ 。

## A Note About Coding Style

因为我们在自己的插件中使用了公共 API，所以编码准则在整个 SDK 中都很明显。这里有一个关于使用的伪新匈牙利符号的描述。当然，欢迎你用喜欢的方式来编码。如果强烈认为我们应该改变内部编码标准，请在 comp.sys.programmer.better.things.to do.with.your.time 发布你的请求，我们会仔细考虑。

### Coding Conventions

| Type                                             | Suffix           | Example            |
| ------------------------------------------------ | ---------------- | ------------------ |
| Handle                                           | **H**      | `fooH`           |
| pointer (to)                                     | **P**      | `fooP`           |
| Boolean                                          | **B**      | `visibleB`       |
| Float                                            | **F**      | `degreesF`       |
| Long                                             | **L**      | `offsetL`        |
| unsigned long                                    | **Lu**     | `countLu`        |
| short                                            | **S**      | `indexS`         |
| char                                             | **C**      | `digitC`         |
| unsigned char                                    | **Cu**     | `redCu`          |
| function pointer                                 | **\_func** | `sample_func`    |
| time value                                       | **T**      | `durationT`      |
| `char*` (NULL-terminated C string)             | **Z**      | `nameZ`          |
| rectangle                                        | **R**      | `boundsR`        |
| fixed rectangle                                  | **FiR**    | `boundsFiR`      |
| float rectangle                                  | **FR**     | `boundsFR`       |
| ratio                                            | **Rt**     | `scale_factorRt` |
| `void*`                                        | **PV**     | `refconPV`       |
| optional parameter (must be passed, can be NULL) | **0**      | `extra_flags0`   |
