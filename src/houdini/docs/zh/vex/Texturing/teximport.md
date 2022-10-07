---
title: teximport
order: 12
category:
  - vex
---

在这一页

- [可查询属性](#queryable-attributes)
- [例子](#例子)

`int teximport(string map, string attribute, <type>&value)`

读取一个单一的值。成功时返回`1`，失败时返回`0`。

`int teximport(string map, string token, int|string&values[])`

返回数组中字符串的数量。

::: info Note that if the values cannot be imported, `values` will not be written to and may remain uninitialized.

这个函数查询存储在图像文件中的元数据，并适用于大多数纹理格式。

你可以使用摄像机或灯光上的`vm_saveoptions`胡迪尼属性来选择存储哪些属性（`image:saveoptions` in [IFD](.../../render/ifd.html) () ()）。然而，默认值可能包含你想要的所有信息。请看 [rendering properties](.../.../props/index.html) () ("Properties let you set up flexible and powerful hierarchies of rendering, shading, lighting, and camera parameters.")。

## 可查询的属性

[¶](#queryable-attributes)

有几个通用属性，你可以随时查询。

## Arguments

`int texture:xres`

纹理图的 X 分辨率。

`int texture:yres`

纹理图的 Y 分辨率。

`int texture:channels`

纹理贴图中的通道数。

`vector texture:resolution`

纹理的分辨率为向量`（xres, yres, channels）`。

`matrix texture:worldtoview`

变换矩阵，将世界空间的点带入用于生成图像的摄像机空间。

`matrix texture:projection`

代表用于生成图像的相机投影矩阵的变换矩阵。

`matrix texture:worldtondc`

变换矩阵，将世界范围内的点转换为用于制作图像的摄像机的 NDC 空间。这些点是以同质坐标生成的。也就是说，要在 0 到 1 的范围内获得数值。

```c
matrix ndc;
if (teximport(map, "texture:worldtoNDC", ndc))
{
 vector P\_ndc = pos \* ndc;
 // If the camera is a perspective camera,
 // dehomogenize the point
 if (getcomp(ndc, 2, 3) != 0)
 {
 P\_ndc.x = P\_ndc.x / P\_ndc.z;
 P\_ndc.y = P\_ndc.y / P\_ndc.z;
 }
 // Finally, scale and offset XY
 // from [-1,1] to [0,1]
 P\_ndc \*= {.5, .5, 1};
 P\_ndc += {.5, .5, 0};
}

```

`string texture:tokens`

A space separated list of all attribute names you can query.

The `string &values[]` version can query the following

`texture:channelnames`

List of all the raster plane channel names.

`texture:channelsize`

This returns an array of the number of floats in each image channel.

`texture:channelstorage`

This returns an array with a string for the underlying storage type for
each channel (i.e. “uint8” or “real16”).

`texture:tokens`

List of all the built-in tokens understood by `teximport()`.

## Arguments

`string texture:device`

The device that’s used to evaluate the texture. Possible values are:

- `native` - Evaluated using the built-in Houdini texture engine
- `oiio` - Evaluated using OpenImageIO
- `ptex` - Evaluated using Ptex

## Examples



```c
cvex
 test(string map="Mandril.rat")
{
 for (string token : {
 "texture:xres",
 "texture:yres",
 "texture:channels",
 "texture:resolution",
 "texture:tokens",
 "image:pixelaspect",
 "space:world"
 })
 {
 float fval;
 vector vval;
 matrix mval;

 printf("----------------- %s ---------------------\n", token);
 if (teximport(map, token, fval))
 printf("'%s' = %g\n", token, fval);
 else if (teximport(map, token, vval))
 printf("'%s' = %g\n", token, vval);
 else if (teximport(map, token, mval))
 printf("'%s' = %g\n", token, mval);
 }
}

```

## See also

- [dsmpixel](dsmpixel.html)

|
file

[colormap](colormap.html)

[depthmap](depthmap.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[filter_remap](filter_remap.html)

[importance_remap](importance_remap.html)

[pcclose](pcclose.html)

[pcexport](pcexport.html)

[pcopen](pcopen.html)

[pcopenlod](pcopenlod.html)

[pcsampleleaf](pcsampleleaf.html)

[pcwrite](pcwrite.html)

[ptexture](ptexture.html)

[rawcolormap](rawcolormap.html)

[sensor_panorama_create](sensor_panorama_create.html)

[shadowmap](shadowmap.html)

[teximport](teximport.html)

[texture](texture.html)

[texture3d](texture3d.html)

[writepixel](writepixel.html)

|
map

[colormap](colormap.html)

[depthmap](depthmap.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[filter_remap](filter_remap.html)

[importance_remap](importance_remap.html)

[ptexture](ptexture.html)

[rawcolormap](rawcolormap.html)

[sensor_panorama_create](sensor_panorama_create.html)

[shadowmap](shadowmap.html)

[teximport](teximport.html)

[texture](texture.html)

[tw_nspace](tw_nspace.html)

[tw_space](tw_space.html)

[tw_vspace](tw_vspace.html)

[wt_nspace](wt_nspace.html)

[wt_space](wt_space.html)

[wt_vspace](wt_vspace.html)

|
shading

[Du](Du.html)

[Dv](Dv.html)

[Dw](Dw.html)

[area](area.html)

[ashikhmin](ashikhmin.html)

[atten](atten.html)

[blinn](blinn.html)

[blinnBRDF](blinnBRDF.html)

[chiang](chiang.html)

[computenormal](computenormal.html)

[cone](cone.html)

[cvex_bsdf](cvex_bsdf.html)

[diffuse](diffuse.html)

[diffuseBRDF](diffuseBRDF.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[filterstep](filterstep.html)

[fresnel](fresnel.html)

[frontface](frontface.html)

[getderiv](getderiv.html)

[getfogname](getfogname.html)

[getglobalraylevel](getglobalraylevel.html)

[getgroupid](getgroupid.html)

[getlocalcurvature](getlocalcurvature.html)

[getmaterialid](getmaterialid.html)

[getobjectid](getobjectid.html)

[getobjectname](getobjectname.html)

[getprimid](getprimid.html)

[getptextureid](getptextureid.html)

[getraylevel](getraylevel.html)

[getrayweight](getrayweight.html)

[getsamplestore](getsamplestore.html)

[getsmoothP](getsmoothP.html)

[getuvtangents](getuvtangents.html)

[ggx](ggx.html)

[gradient](gradient.html)

[hair](hair.html)

[henyeygreenstein](henyeygreenstein.html)

[isotropic](isotropic.html)

[israytracing](israytracing.html)

[isshadingRHS](isshadingRHS.html)

[lightstate](lightstate.html)

[matchvex_blinn](matchvex_blinn.html)

[matchvex_specular](matchvex_specular.html)

[objectstate](objectstate.html)

[phong](phong.html)

[phongBRDF](phongBRDF.html)

[phonglobe](phonglobe.html)

[ptexture](ptexture.html)

[rayhittest](rayhittest.html)

[rayimport](rayimport.html)

[reflect](reflect.html)

[refract](refract.html)

[renderstate](renderstate.html)

[resolvemissedray](resolvemissedray.html)

[sample_geometry](sample_geometry.html)

[scatter](scatter.html)

[setsamplestore](setsamplestore.html)

[specular](specular.html)

[specularBRDF](specularBRDF.html)

[sssapprox](sssapprox.html)

[teximport](teximport.html)

[texture](texture.html)

[trace](trace.html)

[translucent](translucent.html)

[uvunwrap](uvunwrap.html)

[volume](volume.html)

[wireblinn](wireblinn.html)

[wirediffuse](wirediffuse.html)
