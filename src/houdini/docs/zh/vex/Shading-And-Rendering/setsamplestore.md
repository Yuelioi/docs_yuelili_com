---
title: setsamplestore
order: 69
category:
  - vex
---



Context(s)
[shading](../contexts/shading.html)

`int setsamplestore(string channel, vector P, int value)`

`int setsamplestore(string channel, vector P, float value)`

`int setsamplestore(string channel, vector P, vector value)`

`int setsamplestore(string channel, vector P, vector4 value)`

Stores a value in a named channel at a specified point.
Returns a non-zero value on success, or returns 0 if the data could not be set.

The sample store can be thought of as an in-memory point cloud, storing
shading data at points. This allows data to be accessed across shader
boundaries, unlike the internal export/import system. For example,
a lens shader could store data to be passed to the surface shader,
an operation that is not supported using export variables due to the
layout of the shading pipeline.

Please note that the stored samples can only be accessed within the same render
tile.

##

Example

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

- [getsamplestore](getsamplestore.html)

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
