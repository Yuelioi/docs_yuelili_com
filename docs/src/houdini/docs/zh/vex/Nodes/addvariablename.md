---
title: addvariablename
order: 2
category:
  - vex
---

`void addvariablename(string aname, string vname)`

在有当前几何体的背景下，这将为几何体添加一个映射。

`int addvariablename(int geohandle, string aname, string vname)`

将映射添加到给定的几何体上。成功时返回`geohandle'。

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

添加属性`aname`到本地变量`vname`的映射。在支持此功能的 SOP 中，你将有局部变量`$vname`引用属性 aname。这模拟了(AttribCreate SOP](././nodes/sop/attribcreate.html)的行为（"添加或编辑用户定义的属性。"）。

结点

[addvariablename](addvariablename.html)
