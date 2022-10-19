---
title: getsamplestore
order: 32
category:
  - vex
---

[shading](../contexts/shading.html)

`int getsamplestore(string channel, vector P, int &value)`

`int getsamplestore(string channel, vector P, float &value)`

`int getsamplestore(string channel, vector P, vector &value)`

`int getsamplestore(string channel, vector P, vector4 &value)`

Context(s) 在一个指定的点上查找一个指定通道的值。返回一个非零值，成功时设置值，如果不能设置数据，则返回 0。

样本存储可以被认为是一个内存中的点云，在点上存储着色数据。这使得数据可以跨着色器边界进行访问，与内部的导出/导入系统不同。例如，镜头着色器可以存储数据并传递给表面着色器，由于着色管道的布局，这种操作不支持使用导出变量。

请注意，存储的样本只能在同一渲染瓦片内访问。

## 例子

[¶](#example)

```c
cvex displacedlens(
 // Inputs
 float x = 0;
 float y = 0;
 float Time = 0;
 float dofx = 0;
 float dofy = 0;
 float aspect = 1;

 float displaceScale = 1.0;
 float displaceGain = 0.1;

 // Outputs
 export vector P = 0;
 export vector I = 0;
)
{
 P = {x, y, 0};
 I = {1, 0, 0};

 vector displace = noise(P \* displaceScale) \* displaceGain;
 I += displace;

 // Store the displacement at the eye point, 'P'
 int status = setsamplestore("displacedlens\_d", P, displace);
}

surface mysurface()
{
 // Get the displacement at the eye point, 'Eye'
 vector displace = 0;
 int status = getsamplestore("displacedlens\_d", Eye, displace);

 //...
}

```

## See also

- [setsamplestore](setsamplestore.html)

|
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
