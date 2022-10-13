---
title: Localization
order: 15
category:
  - AE 插件开发
---

# Localization

从CC开始，PF应用套件([有用的实用功能](.../effect-details/useful-utility-functions.html) )增加了`PF_AppGetLanguage()`来查询当前语言，以便插件可以使用正确的语言字符串。

当向AE传递字符串时，API的某些部分接受Unicode。在其他地方，例如在`PF_Cmd_PARAM_SETUP`期间指定效果参数名称时，你需要用char字符串传递名称。对于这些非Unicode字符串，AE将字符串解释为使用应用程序的当前区域码进行多字节编码。要建立这些字符串，在Windows上你可以使用`WideCharToMultiByte()`函数，指定`CP_OEMCP`作为第一个参数。在macOS上，使用由`GetApplicationTextEncoding()`返回的编码。

在AE中用不同的语言测试不需要重新安装操作系统，但需要重新安装AE。

对于Win系统，将系统区域设置改为目标语言(控制面板>区域和语言>管理标签>改变系统区域设置)，重新启动机器，然后用相应的语言安装AE。

对于Mac，将目标语言设置为首选语言列表中的主要语言，然后用相应的语言安装AE。