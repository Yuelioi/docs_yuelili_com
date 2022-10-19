---
title: phongBRDF
order: 58
category:
  - vex
---

`float phongBRDF(vector L, vector N, vector V, float rough)`

[specularBRDF](specularBRDF.html) () ("返回 VEX 着色中使用的不同照明模型的计算的 BRDF。"), `phongBRDF`, [blinnBRDF](blinnBRDF.html) (), 和 [diffuseBRDF](diffuseBRDF.html) 返回 VEX 着色中使用的不同照明模型的计算的 BRDF。你可以在自定义的[illuminance](illuminance.html)（"循环浏览场景中的所有光源，为每个光源调用光照器以设置 Cl 和 L 全局变量。"）循环中使用它们来复制相应 VEX 照明函数的照明模型。

参见[specularBRDF](specularBRDF.html) () ("返回 VEX 着色中使用的不同照明模型的计算 BRDF。") 以了解一些示例代码。

## See also

- [specularBRDF](specularBRDF.html)
- [blinnBRDF](blinnBRDF.html)
- [diffuseBRDF](diffuseBRDF.html)
- [illuminance](illuminance.html)

|
brdf

[blinnBRDF](blinnBRDF.html)

[diffuseBRDF](diffuseBRDF.html)

[phongBRDF](phongBRDF.html)

[specularBRDF](specularBRDF.html)

|
phong

[phong](phong.html)

[phongBRDF](phongBRDF.html)

[phonglobe](phonglobe.html)

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
