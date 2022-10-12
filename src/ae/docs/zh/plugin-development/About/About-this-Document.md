---
title: About this Document
order: 1
category:
  - AE 插件开发
---

# About this Document

多年来，这份文件发生了很大变化。部分是百科全书，部分是操作指南，包含了20多年来API开发和完善过程中积累的多个沉积层的信息。

是的，确实需要有一个关于After Effects APIs的每一个棘手细节的信息来源。然而，由于没有人愿意阅读这样一份文件，所以我们试图让它变得更加有趣。

在机会允许的情况下，我们会尝试加入更多的图表、插图和解释API复杂性的漂亮的短文。

一如既往，我们重视并感谢您的意见。

## Organization

[简介](https://ae-plugins.docsforadobe.dev/intro/intro.html#intro-intro)概述了与After Effects整合的可能性。它解释了什么是插件，以及它们如何与After Effects一起工作。它描述了示例项目，以及如何修改它们。它解释了在哪里安装插件，以及它们使用什么资源。

效果插件的基础知识在[Effect Basics]（https://ae-plugins.docsforadobe.dev/effect-basics/effect-basics.html#effect-basics-effect-basics）中讨论。这个概述提供了关于传递给效果插件入口点的功能参数的信息。它描述了能力标志、效果参数和图像缓冲器。

[Effect Details](https://ae-plugins.docsforadobe.dev/effect-details/effect-details.html#effect-details-effect-details)深入介绍了使用许多提供的回调函数开发一个完整的效果插件的细节。它还提供了许多测试思路，以确保插件的稳定性。

[SmartFX](https://ae-plugins.docsforadobe.dev/smartfx/smartfx.html#smartfx-smartfx)是对效果插件API的扩展，支持32位浮点图像。

[Effect UI &amp; Events](https://ae-plugins.docsforadobe.dev/effect-ui-events/effect-ui-events.html#effect-ui-events-effect-ui-events)涵盖了发送给效果插件的事件，如何纳入自定义用户界面元素，参数监督，以及自定义数据参数类型对自定义用户界面信息传递的依赖性。

[Audio](https://ae-plugins.docsforadobe.dev/audio/audio.html#audio-audio)效果涵盖了...[Audio](https://ae-plugins.docsforadobe.dev/audio/audio.html#audio-audio)。

[AEGPs](https://ae-plugins.docsforadobe.dev/aegps/aegps.html#aegps-aegps)详细介绍了After Effects通用插件（AEGP）的API。提供的回调函数、与内部消息的挂钩、操作打开的项目的当前内容和处理菜单命令都有详细的介绍。

[Artisans](https://ae-plugins.docsforadobe.dev/artisans/artisans.html#artisans-artisans)包括专门的插件式3D渲染器AEGPs。

[AEIOs](https://ae-plugins.docsforadobe.dev/aeios/aeios.html#aeios-aeios)，处理文件输入和输出的专业AEGPs。

[Premiere Pro &amp; Other Hosts](https://ae-plugins.docsforadobe.dev/ppro/ppro.html#ppro-ppro)讨论了与Premiere Pro和其他支持After Effects插件子集的应用程序的兼容性问题。

## Documentation Conventions

函数、结构名称和一般的C/C++代码是用Courier语；MyStruct和MyFunction（）。

蓝色的文字是超链接的。

命令选择器是斜体的；_PF_Cmd_RENDER_ 。

## A Note About Coding Style

因为我们在自己的插件中使用了公共API，所以我们的编码准则在整个SDK中都很明显。这里有一个关于我们使用的伪新匈牙利符号的描述。当然，我们欢迎你用你喜欢的方式来编码。如果你强烈认为我们应该改变我们的内部编码标准，请在comp.sys.programmer.better.things.to do.with.your.time发布你的请求，我们会在不做任何改变之前仔细考虑。

### Coding Conventions

| Type                                             | Suffix     | Example          |
| ------------------------------------------------ | ---------- | ---------------- |
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
| `char*` (NULL-terminated C string)               | **Z**      | `nameZ`          |
| rectangle                                        | **R**      | `boundsR`        |
| fixed rectangle                                  | **FiR**    | `boundsFiR`      |
| float rectangle                                  | **FR**     | `boundsFR`       |
| ratio                                            | **Rt**     | `scale_factorRt` |
| `void*`                                          | **PV**     | `refconPV`       |
| optional parameter (must be passed, can be NULL) | **0**      | `extra_flags0`   |