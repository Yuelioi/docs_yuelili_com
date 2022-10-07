---
title: limport
order: 51
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

::: info Note

上下文 这个函数只在[illuminance](illuminance.html) ()("循环浏览场景中的所有光源，为每个光源调用光照器以设置 Cl 和 L 全局变量。")循环中有效。

`int limport(string name, <type>&value)`

## Arguments

`name`

要读取的着色器变量的名称。

`&value`

如果命名的变量被定义并导出，该函数将用该变量的值覆盖该变量。

## Returns

如果着色器变量被定义并导出，则返回`1'，否则返回`0'。

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

| 影子

[dsmpixel](dsmpixel.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[islpeactive](islpeactive.html)

[isshadowray](isshadowray.html)

[limport](limport.html)

[shadowmap](shadowmap.html)

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
