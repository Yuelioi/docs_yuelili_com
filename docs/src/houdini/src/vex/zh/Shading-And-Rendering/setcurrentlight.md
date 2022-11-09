---
title: setcurrentlight
order: 68
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

`int setcurrentlight(int lightid)`

Context(s) 设置当前的灯光，当灯光存在并且被成功设置时返回 true。lightid 应该在[getlights](getlights.html) ()("返回当前着色表面的灯光标识符数组")所返回的值的集合中。当前的光照会被以下遮蔽函数使用。

- [renderstate](renderstate.html) () ("查询指定属性的渲染器。")
- [getlightname](getlightname.html) () ("当在照度循环中调用时，返回当前灯光的名称，或将一个整数的灯光 ID 转换为灯光的名称。")

光

[ambient](ambient.html)

[atten](atten.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[getlight](getlight.html)

[getlightid](getlightid.html)

[getlightname](getlightname.html)

[getlights](getlights.html)

[getlightscope](getlightscope.html)

[getmaterial](getmaterial.html)

[getphotonlight](getphotonlight.html)

[getscope](getscope.html)

[haslight](haslight.html)

[interpolate](interpolate.html)

[intersect_lights](intersect_lights.html)

[irradiance](irradiance.html)

[lightbounces](lightbounces.html)

[lightid](lightid.html)

[occlusion](occlusion.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[setcurrentlight](setcurrentlight.html)

[shadow_light](shadow_light.html)

[storelightexport](storelightexport.html)
