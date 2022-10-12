---
title: Compatibility Across Multiple Versions
order: 10
category:
  - AE 插件开发
---
# Compatibility Across Multiple Versions?

一般来说，你应该用最新的After Effects SDK头文件来编译你的插件。这使得你的插件可以使用最新的套件和API功能。当After Effects的新版本发布时，你一般不需要提供新的版本，除非你想利用通过新的SDK暴露的新功能。然而，在声称与新版本兼容之前，你应该在新版本的After Effects中测试你的插件。

你应该在你的插件所支持的每个版本的After Effects中彻底测试你的插件。如果你需要添加一个有条件的代码块，只在特定版本的After Effects中运行，你可以随时在[PF_InData](.../effect-basics/PF_InData.html)(#effect-basics-pf-indata).版本中检查特效的API版本，或者在[Entry Point](.../aegps/implementation.html)(#aegps-implementation-entry-point)的AEGP中传入主要和次要版本L。

对于更精确的版本检查，插件可以使用`AEGP_ExecuteScript`（[AEGP_UtilitySuite6](./aegps/aegp-suites.html) (#aegps-aegp-suites-aegp-utilitysuite)）运行一个脚本，查询下列属性之一。

```cpp
app.version - e.g. 11.0.1x12
app.buildNumber - e.g. 12.

```

## API Versions

| **Release** | **Effect API Version** | **AEGP API Version** |
| --- | ---| --- |
| 22.0 | 13.27 | |
| 18.2 | 13.25 | |
| 18.0 | 13.24 | |
| 17.7 | 13.23 | |
| 17.6 | 13.22 | |
| 17.5 | 13.21 | |
| 17.3 | 13.20 | |
| 17.1 | 13.19 | |
| 17.0 | 13.18 | |
| 16.1 | 13.17 | |
| 16.0 | 13.16 | |
| 15.0 | 13.15 | |
| CC 2017.1 (14.2) | 13.14 | |
| CC 2017 (14.0) | 13.13 | 114.0 |
| CC 2015.3 (13.8) | 13.11 | 113.8 |
| CC 2015 (13.7) | 13.10 | 113.7 |
| CC 2015 (13.6) | 13.10 | |
| CC 2015 (13.5, 13.5.1) | 13.9 | 113.5 |
| CC 2014 (13.0-13.2) | 13.7 | 113 |
| CC (12.2) | 13.6 | 112.2 |
| CC (12.1) | 13.5 | 112.1 |
| CC (12.0) | 13.4 | 112.0 |
| CS6.0.1 (11.0.1) | 13.3 | 111.0 |
| CS6 (11.0) | 13.2 | 111.0 |
| CS5.5 (10.5) | 13.1 | 17.0 |
| CS5 (10.0) | 13.0 | 17.0 |
| CS4 (9.0) | 12.14 | 16.24 |
| CS3 (8.0) | 12.13 | 16.24 |
| 7.0 | 12.12 | |
| 6.5, 6.0 | 12.10 (Check for the presence of updated AEGP suites, should you need to differentiate between 6.0 and 6.5.) | |
| 5.0 | 12.5 | |
| 4.1 | 12.2 | |
| 3.1 | 11.6 | |