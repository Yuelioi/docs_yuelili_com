---
title: Where Installers Should Put Plug-ins
order: 14
category:
  - AE 插件开发
---

# Where Installers Should Put Plug-ins

将你的插件安装在公共位置，可以让它们被Premiere Pro加载，如果安装了的话。

在Windows中，可以在以下注册表项中找到公共插件文件夹（作为一个明确的路径）。`HKLM\SOFTWARE\After Effects\[version]\CommonPluginInstallPath`。

在Mac上，常用插件文件夹在 `/Library/Application Support/Adobe/Common/Plug-ins/[版本]/MediaCore`。

所有CC版本的版本被锁定在7.0，或早期版本的CSx。例如：`/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/`。

不要使用macOS的别名或Windows的快捷方式，因为Premiere Pro不会穿越这些地方。

## Do I Have To Install The Plug-ins To The Common Folder?

你可能有充分的理由只为After Effects安装你的插件，例如，如果你的插件依赖于Premiere Pro中没有的套件和功能。我们强烈建议你尽可能地使用通用文件夹，但对于某些情况，AE专用的插件文件夹仍然可用。

在Windows上，可以在以下注册表项中找到应用程序特定的插件文件夹（作为明确的路径）。`\HKEY_LOCAL_MACHINE\SOFTWARE\AdobeAfter Effects\(version)\PluginInstallPath`。

在macOS上，应用程序特定的插件文件夹在。`/Applications/Adobe After Effects [版本]/Plug-ins/`。

当启动时，After Effects会递归到其路径的子目录的10层深处。以括号结束的目录或前面有符号¬（macOS）或~（Windows）的目录不会被扫描。

尽管你想在AE和Premiere Pro之间建立一道篱笆，但用户仍然会找到使用我们可爱的整合功能的方法--你的效果仍然可以被Premiere Pro用户使用，他们用你的效果创建一个动态链接的AE组合，并将其放入Premiere Pro序列。