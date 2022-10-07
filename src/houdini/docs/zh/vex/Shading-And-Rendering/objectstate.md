---
title: objectstate
order: 55
category:
  - vex
---



On this page

- [Useful properties](#useful-properties)
- [Packed Primitives](#packed-primitives)
- [Examples](#examples)

|

Context(s)
[shading](../contexts/shading.html)

`int objectstate(string query, <type>&value)`

`int objectstate(string query, <type>&value[])`

Returns a non-zero value and sets value on success, or returns `0`
if the renderer cannot evaluate the query.

See the [list of IFD properties](../../props/mantra.html) you can query. Use
the **IFD** name (e.g. `image:samples`),
not the Houdini name (e.g. `vm_samples`).

##

Useful properties

[¶](#useful-properties)

The following properties are commonly useful and are reproduced here
for convenience, but you can query any property from the
[the full list of IFD properties](../../props/mantra.html).

`image:name`

(string) The name of the image being rendered.

`image:pixelaspect`

(float) The pixel aspect ratio (X/Y) of the image.

`image:resolution`

(vector) Gives the resolution as {x_res, y_res, samples_per_pixel}.

`image:samples`

(vector) Gives samples as {x_samples, y_samples, 0}.

`image:raysamples`

(vector) Gives the raytracing samples as {x_samples, y_samples, 0}.

`light:name`

(string) The name of the light object which is currently active in the [illuminance](illuminance.html "Loops through all light sources in the scene, calling the light shader for each light source to set the Cl and L global variables.") loop.

`light:shadowscope`

(string) The list of objects casting shadows from a light.

`object:name`

(string) The name of the object being shaded. This is valid within light and shadow shaders and can be used to query which object is being lit (or shadowed) by the light source.

`object:reflectscope`

(string) The default reflection scope pattern for the object being shaded.

`object:refractscope`

(string) The default refraction scope pattern for the object being shaded.

`object:reflectlimit`

(float or int) The hard limit for maximum refraction bounces for the object being shaded.

`object:shadingquality`

(float) The shading quality for the object being shaded.

`object:lightmask`

(string) The object’s light mask string.

`object:area`

(float) The object’s surface area.

`object:materialname`

(string) Path to the material that’s assigned to the object being shaded.
NOTE

This is for informational purpose only and has no effect on material assignment or appearance.

`renderer:name`

(string) The name of the renderer.

`renderer:version`

As a string, gives the renderer version as “major.minor.build”
As a vector, gives the renderer version as {major, minor, build}.

`renderer:renderengine`

(string) The render method in use, such as `micropoly` or `raytrace`.
See the [properties list](../../props/mantra.html) for the full list of possible values.

`shader:name`

(string) The name of the current shader being run.

##

Packed Primitives

[¶](#packed-primitives)

When mantra renders packed primitives, the geometry gets unpacked before rendering. This means primitive attributes on the packed primitive aren’t available to shaders (since they aren’t passed down to the unpacked geometry).

Before unpacking, mantra will automatically convert the primitive attributes to custom object properties (see `ray_declare` on the [IFD file format](../../render/ifd.html) page). The property will be named `packed:ATTRIBNAME` (where `ATTRIBNAME` is the name of the attribute). The `objectstate()` function can be used to access these properties, just like any other object property.

For example:

```c
vector Cd;
if (!objectstate("packed:Cd", Cd))
 Cd = 1; // There was no Cd attribute on packed geometry

```

## Examples

[¶](#examples)

```c
surface showversion()
{
 string rname, rversion;
 if (!objectstate("renderer:name", rname))
 rname = "Unknown renderer";
 if (!objectstate("renderer:version", rversion))
 rversion = "Unknown version";
 printf("Image rendered by %s (%s)\n", rname, rversion);
}

vector mapToScreen(vector NDC\_P)
{
 // Given a point in NDC space, find out which pixel it
 // maps to.
 vector result;
 if (!objectstate("image:resolution", result))
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
