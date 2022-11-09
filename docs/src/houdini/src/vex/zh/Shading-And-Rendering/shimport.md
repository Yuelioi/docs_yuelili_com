---
title: shimport
order: 72
category:
  - vex
---

[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

上下文 这个函数只在[illuminance](illuminance.html)（"循环浏览场景中的所有光源，为每个光源调用光照器以设置 Cl 和 L 全局变量。"）的循环中有效。

`int shimport(string variable_name, <type>&value)`

## Arguments

`variable_name`

要从阴影着色器中导入的变量。

`value`

如果该变量被成功读取，其值将被复制到该变量中。

## Returns

`1'如果该变量被定义并被导出，`0'否则。

雾

[getfogname](getfogname.html)

[isfogray](isfogray.html)

[limport](limport.html)

[shimport](shimport.html)

[simport](simport.html)

| 阴影数据

[limport](limport.html)

[shimport](shimport.html)

[simport](simport.html)

| 表面

[ambient](ambient.html)

[irradiance](irradiance.html)

[isfogray](isfogray.html)

[islpeactive](islpeactive.html)

[isshadowray](isshadowray.html)

[isuvrendering](isuvrendering.html)

[limport](limport.html)

[occlusion](occlusion.html)

[reflectlight](reflectlight.html)

[refractlight](refractlight.html)

[shadow](shadow.html)

[shimport](shimport.html)
