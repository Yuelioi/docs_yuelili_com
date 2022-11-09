---
title: storelightexport
order: 75
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

`void storelightexport(string lightname, string exportname, <type>value)`

`void storelightexport(string lightname, string exportname, <type>value[])`

Context(s) 将每个灯光的输出存储到着色器输出变量中。通常情况下，应该为每个灯光调用此方法，以确保为给定的变量创建所有的灯光输出，例如，将此调用放在 illuminance()循环或灯光阵列的循环中。

这个方法取代了 Houdini 12.5 及以前版本中使用的`storelightexports()`方法。

## Examples



```c
surface test(export vector perlight = {0,0,0})
{
 int lights[] = getlights();
 for (int i = 0; i < len(lights); i++)
 {
 vector val = set(lights[i], 0, 0);
 storelightexport(getlightname(lights[i]), "perlight", val);
 }
}

```

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

|
pbr

[albedo](albedo.html)

[ashikhmin](ashikhmin.html)

[blinn](blinn.html)

[bouncelabel](bouncelabel.html)

[bouncemask](bouncemask.html)

[chiang](chiang.html)

[cone](cone.html)

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[diffuse](diffuse.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[getlight](getlight.html)

[getlights](getlights.html)

[getlightscope](getlightscope.html)

[getmaterial](getmaterial.html)

[getphotonlight](getphotonlight.html)

[getscope](getscope.html)

[ggx](ggx.html)

[hair](hair.html)

[haslight](haslight.html)

[interpolate](interpolate.html)

[intersect_lights](intersect_lights.html)

[mask_bsdf](mask_bsdf.html)

[matchvex_blinn](matchvex_blinn.html)

[matchvex_specular](matchvex_specular.html)

[nbouncetypes](nbouncetypes.html)

[newsampler](newsampler.html)

[nextsample](nextsample.html)

[normal_bsdf](normal_bsdf.html)

[phong](phong.html)

[phonglobe](phonglobe.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[shadow_light](shadow_light.html)

[solid_angle](solid_angle.html)

[specular](specular.html)

[split_bsdf](split_bsdf.html)

[sssapprox](sssapprox.html)

[storelightexport](storelightexport.html)

[translucent](translucent.html)

[wireblinn](wireblinn.html)

[wirediffuse](wirediffuse.html)
