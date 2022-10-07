---
title: shadow
order: 70
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

上下文 该函数只能在[illuminance](illuminance.html)（"循环浏览场景中的所有光源，为每个光源调用光照器以设置 Cl 和 L 全局变量。"）语句中调用。

`void shadow(vector &Cl)`

`vector shadow(vector Cl)`

使用`P`和`L`全局变量。

`void shadow(vector &Cl, vector P, vector L)`

`vector shadow(vector Cl, vector P, vector L)`

表面

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
