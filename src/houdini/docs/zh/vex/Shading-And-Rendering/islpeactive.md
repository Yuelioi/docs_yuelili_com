---
title: islpeactive
order: 43
category:
  - vex
---

[surface](../contexts/surface.html)

`int islpeactive()`

Context(s) 如果有任何图像平面的 vex 变量以`"lpe: "开头，表明光路表达（LPE）被启用，则返回 1。如果不存在这样的图像平面，则返回 0。

如果当前的渲染没有任何使用 LPE 的 AOV，这个函数用于优化任何 LPE 相关的函数调用。

阴影

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
