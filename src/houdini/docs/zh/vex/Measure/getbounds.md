---
title: getbounds
order: 9
category:
  - vex
---

`int getbounds(string filename, vector &min, vector &max)`

`int getbounds(string filename, string group, vector &min, vector &max)`

返回由文件名指定的几何体的包围盒。包围盒的最小角所对应的点将以 min 的形式返回，而最大角将以 max 的形式返回。总是返回 1。

如果指定了一个组，则仅会使用该组中的基元。组字段的行为与 SOP 中的行为相匹配。一个空字符串将包括所有基元。诸如 "0-10 "和"@Cd.x>0 "的临时模式也是有效的。

应该使用`getbbox()`函数来代替。

bbox

[getbbox](getbbox.html)

[getbbox_center](getbbox_center.html)

[getbbox_max](getbbox_max.html)

[getbbox_min](getbbox_min.html)

[getbbox_size](getbbox_size.html)

[getbounds](getbounds.html)

[getpointbbox](getpointbbox.html)

[getpointbbox_center](getpointbbox_center.html)

[getpointbbox_max](getpointbbox_max.html)

[getpointbbox_min](getpointbbox_min.html)

[getpointbbox_size](getpointbbox_size.html)

[relbbox](relbbox.html)

[relpointbbox](relpointbbox.html)

[texture3dBox](texture3dBox.html)

|措施

[curvearclen](curvearclen.html)

[distance](distance.html)

[distance2](distance2.html)

[getbbox](getbbox.html)

[getbbox_center](getbbox_center.html)

[getbbox_max](getbbox_max.html)

[getbbox_min](getbbox_min.html)

[getbbox_size](getbbox_size.html)

[getbounds](getbounds.html)

[getpointbbox](getpointbbox.html)

[getpointbbox_center](getpointbbox_center.html)

[getpointbbox_max](getpointbbox_max.html)

[getpointbbox_min](getpointbbox_min.html)

[getpointbbox_size](getpointbbox_size.html)

[length](length.html)

[length2](length2.html)

[mdensity](mdensity.html)

[pcfarthest](pcfarthest.html)

[planepointdistance](planepointdistance.html)

[predicate_orient2d](predicate_orient2d.html)

[predicate_orient3d](predicate_orient3d.html)

[primarclen](primarclen.html)

[qdistance](qdistance.html)

[relbbox](relbbox.html)

[relpointbbox](relpointbbox.html)

[surfacedist](surfacedist.html)

[uvdist](uvdist.html)

[xyzdist](xyzdist.html)
