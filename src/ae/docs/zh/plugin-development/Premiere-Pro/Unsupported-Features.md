---
title: Unsupported Features
order: 11
category:
  - AE 插件开发
---

# Unsupported Features

目前已知Premiere Pro不支持After Effects API的以下功能。

(如果你想要一个带"-"的功能，请给[Premiere Pro API Engineering](mailto:bbb%40adobe.com)发邮件，提出功能请求。前面有 "F "的数字是功能请求编号，其他的是错误编号)

- F7233 - 支持 extent_hint
- F7835 - 一个插件中的多个PiPLs
- F7836 - 支持AEGP
- F7517 - 音频支持 - 如果一个插件在PF_Cmd_GLOBAL_SETUP中设置了PF_OutFlag_I_USE_AUDIO，它将完全不被加载
- F9355 - 支持PF_ParamFlag_COLLAPSE_TWIRLY
- PF World Transform Suite
- PF AE通道套件
- AE对高位色深支持的实现
- SmartFX
- 3D支持
- pf_subpixel_sample(), pf_get_pixel_data16()

## But… Why’d You LOAD It If You Can’t RUN It?!

Premiere Pro会尝试加载AEGP插件。为了检测并避免任何问题行为，你的命令钩函数可以访问一个只由After Effects提供的套件；AEGP_CanvasSuite是一个很好的候选。

如果该套件不存在，则返回一个错误。该插件将被放在Premiere Pro的 "不加载这些 "列表中。