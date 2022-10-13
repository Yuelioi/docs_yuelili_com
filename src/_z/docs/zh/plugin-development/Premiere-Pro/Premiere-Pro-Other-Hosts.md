---
title: Premiere Pro & Other Hosts
order: 2
category:
  - AE 插件开发
---

# Premiere Pro & Other Hosts

Adobe Premiere Pro和Adobe Premiere Elements都支持第2、3、5章中描述的After Effects特效API。

它们提供了一个完整的主机实现，一些关键的遗漏是3D相关的调用(辅助通道信息、摄像机和灯光)、16位和SmartFX支持，以及After Effects的AEGP API提供的其他实用功能。

Premiere Pro和Premiere Elements都将`PF_InData>appl_id`设置为'PrMr'。

在本章中，我们将介绍Premiere Pro中的AE API支持，但一般来说，Premiere Elements的相应版本中也存在同样的支持。

如果你需要区分Premiere Pro和Premiere Elements，你可以使用Premiere特定的App Info Suite，可从[Premiere Pro SDK](http://ppro-plugin-sdk.aenhancers.com)标题中获得。

| **Application Versions**                     | **PF_InData> version.major** | **PF_InData> version.minor** |
| -------------------------------------------- | ---------------------------- | ---------------------------- |
| Premiere Pro CC through Premiere Pro CC 2019 | 13                           | 4                            |
| Premiere Pro CS6                             | 13                           | 2                            |
| Premiere Pro CS5.5                           | 13                           | 1                            |
| Premiere Pro CS5, Premiere Elements 9        | 13                           | 0                            |
| Premiere Pro CS4, Premiere Elements 8        | 12                           | 5                            |
| Premiere Pro CS3, Premiere Elements 4 and 7  | 12                           | 4                            |
| Premiere Pro 2.0, Premiere Elements 3        | 12                           | 3                            |
| Premiere Pro 1.5, Premiere Elements 2        | 12                           | 2                            |
| Premiere Pro 1.0, Premiere Elements 1        | 12                           | 1                            |

请注意，Premiere Pro和Premiere Elements使用的版本划分并不意味着它们支持After Effects在同一版本中的相同API功能。它只是为了区分不同的版本。