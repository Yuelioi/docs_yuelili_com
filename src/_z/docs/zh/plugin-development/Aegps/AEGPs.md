---
title: AEGPs
order: 2
category:
  - AE 插件开发
---
# AEGPs

After Effects General Plug-in (AEGP)的API强大而广泛，提供的功能超出了效果插件的范围。

对用户来说，AEGPs似乎是After Effects的一部分。

它们可以添加、拦截和触发菜单命令，访问关键帧数据库，并将功能注册为After Effects内部信息传递的一部分。

AEGPs可以在项目和合成中添加和删除项目，添加和删除过滤器和关键帧。

一旦其命令被触发，AEGPs就会使用众多的PICA功能套件(在本节中描述)来处理每一个After Effects项目。

AEGPs可以为插件发布功能套件，操纵所有项目元素，改变interpretations，替换文件，并确定哪些外部文件用于渲染项目。

有几种专门的AEGP类型；Keyframers、Artisans和I/O模块(AEIOs)。它们都是AEGP，但可以访问专门的信息流，为此在After Effects中单独注册。
