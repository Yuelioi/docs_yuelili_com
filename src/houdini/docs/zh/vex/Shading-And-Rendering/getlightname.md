---
title: getlightname
order: 19
category:
  - vex
---

[shading](../contexts/shading.html)

`string getlightname()`

当在[illuminance](illuminance.html) ()("循环浏览场景中的所有光源，为每个光源调用光照器以设置 Cl 和 L 全局变量。")循环中调用时，或者当使用[setcurrentlight](setcurrentlight.html) ()("设置当前光线")设置了当前光线时，返回当前光线的名字。

`string getlightname(int lightid)`

返回由给定的整数灯光 ID 所指的灯光名称。为了提高效率，一些低级别的 VEX 函数使用整数的灯光 ID，而不是字符串。

## See also

- [illuminance](illuminance.html)
- [getlights](getlights.html)
- [getphotonlight](getphotonlight.html)
- [intersect_lights](intersect_lights.html)

|
light

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
