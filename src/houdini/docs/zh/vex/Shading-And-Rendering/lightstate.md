---
title: lightstate
order: 50
category:
  - vex
---

在这一页

- [有用的属性](#useful-properties)
- [打包的基元](#打包的基元)
- [例子](#例子)

|

[shading](../contexts/shading.html)

`int lightstate(string query, <type>&value)`

`int lightstate(string query, <type>&value[])`

Context(s) 返回一个非零值，并在成功时设置值，如果渲染器无法评估该查询，则返回`0`。

见[IFD 属性列表]（.../.../props/mantra.html），你可以查询。使用**IFD**名称（如`image:samples`），而不是 Houdini 名称（如`vm_samples`）。

## 有用的属性

[¶](#useful-properties)

以下是常用的属性，为方便起见，在此转载，但你可以从[IFD 属性的完整列表]（.../.../props/mantra.html）查询任何属性。

`image:name`

(string) 被渲染的图像的名称。

`image:pixelaspect`

(float) 图像的像素长宽比（X/Y）。

`image:resolution`

(vector) 给出分辨率为{x_res, y_res, samples_per_pixel}。

`image:samples`

(vector) 给出样本为{x_samples, y_samples, 0}。

`image:raysamples`

(vector)给出了{x_samples, y_samples, 0}的光线追踪样本。

`light:name`

(string)当前在[illuminance](illuminance.html) ()("循环浏览场景中的所有光源，为每个光源调用光照器以设置 Cl 和 L 全局变量。")循环中处于活动状态的光对象的名称。

`light:shadowscope`

(string)从灯光下投射阴影的物体列表。

`object:name`

(string) 被遮蔽的物体的名称。这在光影着色器中是有效的，可以用来查询哪个物体被光源照亮（或被阴影）。

`object:reflectscope`

(string) 被着色对象的默认反射范围模式。

`object:refractscope`

(string)被着色对象的默认折射范围模式。

`object:reflectlimit`

(float or int) 被遮蔽物体的最大折射反弹的硬限制。

`object:shadingquality`

(float) 被遮挡物体的遮挡质量。

`object:lightmask`

(string) 对象的光罩字符串。

`object:area`

(float) 物体的表面积。

`object:materialname`

(string)分配给被遮蔽物体的材料的路径。注意

这仅仅是为了提供信息，对材料的分配或外观没有影响。

`renderer:name`

(string) 渲染器的名称。

`renderer:version`

作为一个字符串，渲染器的版本是 "major.minor.build"。 作为一个向量，渲染器的版本是{major, minor, build}。

`renderer:renderengine`

(string) 使用中的渲染方法，例如`micropoly`或`raytrace`。参见[属性列表](.../.../props/mantra.html)，以获得完整的可能值列表。

`shader:name`

(string) 当前正在运行的着色器的名称。

## 打包的基元

[¶](#packed-primitives)

当 mantra 渲染打包的基元时，几何体在渲染前会被解包。这意味着打包的基元上的基元属性对着色器来说是不可用的（因为它们不会被传递到未打包的几何体中）。

在解包之前，mantra 会自动将原始属性转换为自定义对象属性（见[IFD 文件格式](././render/ifd.html) ()()页面上的`ray_declare`）。该属性将被命名为`packed:ATTRIBNAME`（其中`ATTRIBNAME`是属性的名称）。`lightstate()`函数可以用来访问这些属性，就像其他对象的属性一样。

比如说。

```c
vector Cd;
if (!lightstate("packed:Cd", Cd))
 Cd = 1; // There was no Cd attribute on packed geometry

```

## Examples



```c
surface showversion()
{
 string rname, rversion;
 if (!lightstate("renderer:name", rname))
 rname = "Unknown renderer";
 if (!lightstate("renderer:version", rversion))
 rversion = "Unknown version";
 printf("Image rendered by %s (%s)\n", rname, rversion);
}

vector mapToScreen(vector NDC\_P)
{
 // Given a point in NDC space, find out which pixel it
 // maps to.
 vector result;
 if (!lightstate("image:resolution", result))
 result = {640, 486, 0};
 return result \* NDC\_P;
}

```

properties

[getsamplestore](getsamplestore.html)

[lightstate](lightstate.html)

[objectstate](objectstate.html)

[renderstate](renderstate.html)

[setsamplestore](setsamplestore.html)

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
