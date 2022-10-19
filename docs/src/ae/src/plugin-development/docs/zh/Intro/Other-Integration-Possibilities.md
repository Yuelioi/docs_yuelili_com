---
title: Other Integration Possibilities
order: 4
category:
  - AE 插件开发
---

# Other Integration Possibilities

虽然这个 SDK 描述了大部分与 After Effects 整合的可能性，但还有其他的可能性也是不容忽视的。

## Scripting

脚本是一种相对灵活和轻量级的手段，可以用 After Effects 执行自动任务。ScriptUI 是一种可以提供与自定义对话框和面板的 UI 集成的方式(参见[HTML5 面板] (5))。脚本可以和插件开发一起使用，在这种情况下，某个功能可以通过脚本而不是本文描述的 C 语言 API 来实现。

After Effects 中的脚本是通过基于 JavaScript 的 ExtendScript 完成的。After Effects 包括 ExtendScript ToolKit，这是一个创建和测试自己脚本的方便接口。脚本可以被编译成.jsxbin 二进制文件，以保护知识产权。

你可以访问 After Effects 脚本指南，并在 Adobe I/O 网站上找到脚本论坛的链接。<https://www.adobe.io/apis/creativecloud/aftereffects.html>

可以通过执行命令行中的脚本来驱动 After Effects。在你的脚本中，你可以打开项目并对其运行脚本动作。因此，举例来说，你可以执行以下语句，直接从命令行运行脚本。

AfterFX -s "app.quit()"

或者你可以执行这个语句来运行一个.jsx 脚本，该脚本在结尾处包含一个退出。

AfterFX -r path_to_jsx_script

在 Windows 上，AfterFX.com 是获得控制台反馈的方式，因为 AfterFX.com 是一个命令行应用程序。

## HTML5 Panels

在 CC 2014 及以后的版本中，After Effects 支持 HTML5 面板。它们可以在 After Effects 中从 Window > Extensions >(你的面板名称)进入。面板可以像 After Effects 中的其他面板一样调整大小和停靠。面板是用 HTML5、After Effects Scripting 和 JavaScript 构建的。你可以从 Adobe I/O 网站上下载 After Effects Panel SDK。<https://www.adobe.io/apis/creativecloud/aftereffects.html>

## AERender

与脚本密切相关的是 aerender 提供的命令行界面。aerender 主要适用于自动渲染，但也可用于从命令行执行任何序列的脚本命令。在 After Effects 的帮助文档中可以看到一个概述。[https://helpx.adobe.com/after-effects/using/automated-rendering-](https://helpx.adobe.com/after-effects/using/automated-rendering-network-rendering.html) () [network-rendering.html](https://helpx.adobe.com/after-effects/using/automated-rendering-network-rendering.html)

## Premiere Pro Importers

Premiere Pro 导入器支持将媒体导入到 Adobe Creative Cloud 的大多数应用程序中，包括 Premiere Pro、Media Encoder、Prelude 和 Audition。由于这种更广泛的兼容性，除非你需要与 After Effects 非常具体的整合，只能通过本 SDK 中的 AEIO API 来实现，否则我们建议开发一个 Premiere Pro 导入器。Premiere Pro 的 SDK 可以在以下网站找到。[https://www.adobe.io/apis/](https://www.adobe.io/apis/creativecloud/premierepro.html) () [creativecloud/premierepro.html](https://www.adobe.io/apis/creativecloud/premierepro.html)

与 AEIOs 相比，MediaCore 导入器插件的一个优势是它的优先级系统。最高优先级的进口商可以首先导入一个文件，如果特定的进口文件不被支持，那么下一个最高优先级的进口商将有机会尝试导入该文件，以此类推。

## Mercury Transmit

Mercury 传输插件用于发送视频到输出硬件，以实现广播质量的监控。传输器在 Adobe Creative Cloud 的大多数应用程序中都得到支持，包括 Premiere Pro、After Effects、Prelude 和 Character Animator。Mercury 传输 API 记录在 Premiere Pro SDK 中，可在以下网站找到。[https://](https://www.adobe.io/apis/creativecloud/premierepro.html) () [www.adobe.io/apis/creativecloud/premierepro.html](https://www.adobe.io/apis/creativecloud/premierepro.html)
