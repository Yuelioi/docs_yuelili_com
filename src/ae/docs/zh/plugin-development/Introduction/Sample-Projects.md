---
title: Sample Projects
order: 8
category:
  - AE 插件开发
---
# Sample Projects

目前的API所支持的每一种类型的插件都有至少一个样本，还有一些项目用来说明特定的概念。

在示例项目中，我们尽可能地保持代码的简单。一个炫耀性的实现可能会让我们在编程课上获得好成绩，但却不能帮助你理解如何使用API的功能。

休息过后，我们将解释如何构建这些示例项目，请继续阅读下文

## Sample Project Descriptions

| Project | Description |
| --- |--- |
| AEGPs | AEGPs hook directly into After Effects’ menus and other areas in the UI. See below for specifics on where the AEGP appears in the UI. |
| Artie | Artie the Artisan takes over rendering of all 3D layers in a given composition. This is the same API used by our internal 3D renderers; it is very complex, and exposes a great deal of tacit information about the After Effects rendering pipeline. Unless you have a compelling reason to replace the way After Effects handles 3D rendering, you need never work with this sample. Artisans appear in Composition > Composition Settings, in the Advanced tab, in the Rendering Plug-in drop-down. |
| Easy Cheese | A keyframer (which shows up on the Animation > Keyframe Assistant submenu), Easy Cheese shows how to manipulate various characteristics of keyframes (in a way that, uncannily, resembles our shipping plug-in, Easy Ease…) |
| FBIO | Exercises the After Effects Input/Output (AEIO) API. Similar to the IO sample, but supports the frame-based .ffk file format. Note that we now recommend developing a[Premiere Pro Importers](https://ae-plugins.docsforadobe.dev/intro/other-integration-possibilities.html#intro-other-integration-possibilities-premiere-pro-importers) instead. |
| Grabba | Gets frames (formatted as the plug-in requests) from any composition in the project. |
| IO | Exercises the After Effects Input/Output (AEIO) API. Supports the fictitious.fak file format, and handles all requests from After Effects for retrieving data from or outputting to such files. Note that we now recommend developing a[Premiere Pro Importers](https://ae-plugins.docsforadobe.dev/intro/other-integration-possibilities.html#intro-other-integration-possibilities-premiere-pro-importers) instead. |
| Mangler | Mangler is a keyframer demonstrating the use of an ADM palette, just like our own. |
| Panelator | Creates a panel that can be docked along with the rest of the standard panels. Note: It is far more work to create a panel this way than using the HTML5 Panel SDK. We recommend starting with that SDK instead. |
| Persisto | Shows how to read and write information from the After Effects preferences file. |
| ProjDumper | Creates a text file representing every element in an After Effects project. |
| Projector | Imports the (fictitious) .sdk file format, and creates a project using AEGP API calls. Whenever you’re wondering how to get or set some characteristic of a project element, look here first. Note: There are some hardcoded paths in Projector.h. If you don’t set these to refer to actual media on disk, you WILL get errors while running this plug-in. Don’t blame us; change them! |
| QueueBert | Pronounced “Cue-BARE!”, QueueBert manipulates all aspects of render queue items and the output modules associated with them. |
| Streamie | Manipulates streams, both dynamic and fixed. |
| Sweetie | Sweetie uses the PICA (or “Suite Pea”) API to provide a function Suite, for use by other plug-ins. If you’re writing multiple plug-ins that rely on the same image processing library, you could provide the library functionality using such a suite. |
| Text Twiddler | Manipulates text layers and their contents. |
| Effects | All effects appear in the Effects & Presets panel, and in the Effect menu. |
| Checkout | Checks out (of After Effects’ frame cache) a frame of input from another layer, at a specified time. This is an important concept for all effects with layer parameters. Premiere Pro compatible. |
| Convolutrix | Exercises our image convolution callbacks. Premiere Pro compatible. |
| Gamma Table | Shows how to manage sequence data, and uses our iteration callbacks. For nostalgia’s sake, we’re leaving this one sample in C; it’s also compatible with many third-party plug-in hosts, due to its reliance on version 3.x API features. |
| GLator | New for CC 2017. Demonstrates proper OpenGL context management in an effect plug-in. |
| Paramarama | Exercises wayward param types not used in other sample. Premiere Pro compatible. |
| PathMaster | Shows how to access paths from within an effect. |
| Portable | Shows how to detect and respond to several different plug-in hosts. Premiere Pro compatible. |
| Resizer | Resizer resizes (surprise!) the output buffer. This is useful for effects like glows and drop shadows, which would be truncated at the layer’s edges if they didn’t expand the output buffer. Premiere Pro compatible. |
| SDK Backwards | Reverses a layer’s audio, and mixes it with a keyframe-able sine wave. |
| SDK Noise | Premiere Pro compatible, demonstrates 32-bit and YUV rendering in Premiere Pro. |
| Shifter | Shifts an image in the output buffer, and exercises our transform_world and subpixel sampling functions. |
| SmartyPants | Demonstrates the SmartFX API, required for support of floating point pixels. |
| Transformer | Exercises our image transformation callbacks. |
| Effect Template | |
| Skeleton | Skeleton is the starting point for developing effects. Premiere Pro compatible. |
| Effects with Custom UI | |
| CCU | Implements a custom user interface in the composition and layer windows, supporting pixel aspect ratio and downsample ratios. Premiere Pro compatible. |
| ColorGrid | Shows how to use arbitrary data type parameters. Also has a nice custom UI. Premiere Pro compatible. |
| Custom ECW UI | Implements a very boring custom user interface in the effect controls window, and shows how to respond to numerous UI events. |
| Histogrid | New for CC 2015 (13.5). An example of how custom UI can access asynchronously-rendered upstream frames for lightweight processing in CC 2015 and later. This effect calculates a sampled 10x10 color grid from the upstream frame, and displays a preview of that color grid. In render, a higher-quality grid is calculated and used to modify the output image, creating a blend of a color grid with the original image. |
| Supervisor | Shows how to control parameters (both values and UI) based on the value of other parameters. Premiere Pro compatible. |
| BlitHook | |
| EMP | External Monitor Preview. Use this as a starting point for adding support to output video from the composition panel to video hardware. |

## Building The Sample Projects

我们将样本项目合并为一个主项目，存放在SDK的Examples文件夹中。对于macOS，它是Buildall.xcodeproj；对于Windows，它是BuildAll.sln。

在你的IDE中，你需要改变项目的输出文件夹，以构建到After Effects的插件文件夹。

对于开发来说，我们建议macOS使用以下路径：`/Library/Application Support/Adobe/Common/Plug-ins/[版本]/MediaCore/`。

所有CC版本的版本都锁定在7.0，早期版本锁定在CSx。

例如：`/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/`。

或。`/Library/Application Support/Adobe/Common/Plug-ins/CS6/MediaCore/`。

和Windows的以下路径：`[Program Files]\Adobe\Common\Plug-ins\[version]\MediaCore\`。

例如：`C:`Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\`。

或者。`C:\Program Files\CommonAdobe\Plug-ins\CS6\MediaCore\`。

请注意，这个Windows路径只推荐用于开发目的。Windows的安装人员应该遵循这里的指南。[Where Installers Should Put Plug-ins](Where-installers-should-put-plug-ins.html) 。

在Xcode中，你可以在Xcode首选项>位置>派生数据>高级中为所有项目设置一次这个路径。在_Build Location_下选择_Custom_，并填写路径。

在Visual Studio中，为了方便起见，我们使用环境变量AE*PLUGIN_BUILD_DIR来指定所有样本项目的输出路径。你需要把它设置为你系统的用户环境变量。在Windows 7上，右键单击_My Computer* > _Properties_。

>，在左边的侧边栏选择_高级系统设置_。在新的对话框中，点击_环境变量_按钮。在用户变量区，创建一个名为AE_PLUGIN_BUILD_DIR的新变量，其路径如上所述。退出Windows并重新登录，这样该变量就会被设置。

另外，你可以在Visual Studio中为每个项目单独设置输出路径，方法是在解决方案资源管理器中右击一个项目，选择属性，然后在配置属性>链接器>常规中，设置输出文件。

在编译插件时，如果你看到一个链接错误，如。

"无法打开文件"[MediaCore插件路径]plugin.prm"，确保以管理员模式启动Visual Studio。在Visual Studio安装中，右键单击devenv.exe，属性>兼容性>权限级别，点击 "以管理员身份运行此程序"。