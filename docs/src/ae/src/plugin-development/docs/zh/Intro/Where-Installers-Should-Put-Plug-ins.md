---
title: Where Installers Should Put Plug-ins
order: 14
category:
  - AE 插件开发
---

# Where Installers Should Put Plug-ins

将你的插件安装在公共位置，可以让它们被 Premiere Pro 加载，如果安装了的话。

在 Windows 中，可以在以下注册表项中找到公共插件文件夹(作为一个明确的路径)。`HKLM\SOFTWARE\After Effects\[version]\CommonPluginInstallPath`。

在 Mac 上，常用插件文件夹在 `/Library/Application Support/Adobe/Common/Plug-ins/[版本]/MediaCore`。

所有 CC 版本的版本被锁定在 7.0，或早期版本的 CSx。例如：`/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/`。

不要使用 macOS 的别名或 Windows 的快捷方式，因为 Premiere Pro 不会穿越这些地方。

## Do I Have To Install The Plug-ins To The Common Folder?

你可能有充分的理由只为 After Effects 安装你的插件，例如，如果你的插件依赖于 Premiere Pro 中没有的套件和功能。我们强烈建议你尽可能地使用通用文件夹，但对于某些情况，AE 专用的插件文件夹仍然可用。

在 Windows 上，可以在以下注册表项中找到应用程序特定的插件文件夹(作为明确的路径)。`\HKEY_LOCAL_MACHINE\SOFTWARE\AdobeAfter Effects\(version)\PluginInstallPath`。

在 macOS 上，应用程序特定的插件文件夹在。`/Applications/Adobe After Effects [版本]/Plug-ins/`。

当启动时，After Effects 会递归到其路径的子目录的 10 层深处。以括号结束的目录或前面有符号 ¬(macOS)或~(Windows)的目录不会被扫描。

尽管你想在 AE 和 Premiere Pro 之间建立一道篱笆，但用户仍然会找到使用我们可爱的整合功能的方法--你的效果仍然可以被 Premiere Pro 用户使用，他们用你的效果创建一个动态链接的 AE 合成，并将其放入 Premiere Pro 序列。
