---
title: How To Start Creating Plug-ins
order: 7
category:
  - AE 插件开发
---

# How To Start Creating Plug-ins

## Play!

在你写一行代码之前，花一些重要的时间来玩 After Effects，以及[样本项目](sample-projects.html) 。把插件建在正确的文件夹里。设置大量的断点，阅读有趣的、内容丰富的评论。

请看一个关于构建效果的快速入门视频(在 macOS 上)。[adobe.ly/2sjMDwM](https://adobe.ly/2sjMDwM)

## Plan!

要清楚你的插件将试图做什么。

## Hack!

在对样本进行实验后，找到一个与你想做的事情类似的插件。从头开始的诱惑可能很强烈；要与之抗争! 对于效果来说，使用 Skeleton 模板项目。通过将你的代码嫁接到一个现有的项目中，避免了重建项目的麻烦(包括 Windows PiPL 资源生成的麻烦的自定义构建步骤)。

## Steal!

要使 Skeleton 样本成为你自己的，复制整个\Skeleton 目录，将其重命名为(例如)\WhizBang。使用您选择的文本编辑器，搜索\WhizBang*.*(是的，这包括.NET 和 Xcode 项目文件)中出现的 Skeleton 和 SKELETON，并用 WhizBang 和 WHIZBANG 替换它们。

你现在有一个正在编译和运行的插件，它可以响应常见的命令，处理 8 和 16-bpc 的颜色，使用我们的 AEGP_SuiteHandler 实用代码，并响应 3D 灯光和摄像机信息。好了，这有那么难吗？

AEGP 开发者最好从 Projector(支持 After Effects 项目的创建)开始，Easy Cheese 是一个关键帧助手，IO 是一个媒体文件格式支持，Persisto 是一个简单的菜单命令和与偏好的工作。

## Test!

如果只是为了测试方便，你应该保存一个项目，应用你的效果，并将其所有参数的关键帧改为奇怪的值。在这些强调你的插件的项目和你的开发环境所提供的工具之间，你已经在运送一些经过测试的代码的路上了。

## Blame!

如果你遇到看起来不对的行为，看看你是否能用一个未修改的样本项目来重现这个行为。这可以为你节省很多时间，如果你能确定这个错误行为是由你的修改引入的，还是一开始就存在的。

## Developers Matter

第三方开发者推动了 API 和 SDK 的改进和扩展。你们的产品使 After Effects 可以做一些我们从未考虑过的事情。你们的努力使 After Effects 变得更好，请继续努力。

我们在 SDK 上努力工作，并欢迎你的意见和反馈。我们对 API 所做的每一个改动几乎都是由像你这样的开发者提出的。[给我们反馈](https://community.adobe.com/t5/after-effects/bd-p/after-effects?page=1&sort=latest_replies&filter=all&topics=label-sdkcom)
