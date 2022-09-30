---
title: teximport
order: 12
category:
  - houdini
---

## Description

On this page

- Queryable attributes

- Examples

`int teximport(string map, string attribute, <type>&value)`

Reads a single value. Returns `1` on success or `0` on failure.

`int teximport(string map, string token, int|string&values[])`

Returns the number of strings in the array.

::: info Note
that if the values cannot be imported, `values` will not be written to
and may remain uninitialized.

This function queries metadata stored in an image file, and works with most
texture formats.
:::

You can choose what properties are stored using the `vm_saveoptions` Houdini
property on a camera or light (`image:saveoptions` in
[IFD](../../render/ifd.html)). However, the defaults probably contain all the
information you'd want. See [rendering properties](../../props/index.html "Properties let you set up flexible and powerful hierarchies of rendering,
shading, lighting, and camera parameters.").

### Queryable attributes ¶

There are several generic attributes you can always query:

## Arguments

`int texture:xres`

X resolution of the texture map.

`int texture:yres`

Y resolution of the texture map.

`int texture:channels`

Number of channels in the texture map.

`vector texture:resolution`

Resolution of the texture as the vector `(xres, yres, channels)`.

`matrix texture:worldtoview`

The transform matrix that will take world space points into the camera space
used to generate the image.

`matrix texture:projection`

The transform matrix representing the projection matrix of the camera used to
generate the image.

`matrix texture:worldtondc`

The transform matrix that will transform world spaced points into the NDC
space of the camera used to make the image. The points are generated in
homogeneous coordinates. That is, to get the values in the range 0 to 1:

```c
matrix ndc; if (teximport(map, "texture:worldtoNDC", ndc)) { vector
P_ndc = pos * ndc;  // If the camera is a perspective camera, // dehomogenize
the point if (getcomp(ndc, 2, 3) != 0)  { P_ndc.x = P_ndc.x / P_ndc.z;
P_ndc.y = P_ndc.y / P_ndc.z;  } // Finally, scale and offset XY // from [-1,1]
to [0,1] P_ndc *= {.5, .5, 1};  P_ndc += {.5, .5, 0}; }
```

`string texture:tokens`

A space separated list of all attribute names you can query.

The `string &values[]` version can query the following

`texture:channelnames`

List of all the raster plane channel names.

`texture:channelsize`

This returns an array of the number of floats in each image channel.

`texture:channelstorage`

This returns an array with a string for the underlying storage type for each
channel (i.e. “uint8” or “real16”).

`texture:tokens`

List of all the built-in tokens understood by `teximport()`.

## Arguments

`string texture:device`

The device that’s used to evaluate the texture. Possible values are:

- `native` \- Evaluated using the built-in Houdini texture engine

- `oiio` \- Evaluated using OpenImageIO

- `ptex` \- Evaluated using Ptex

## Examples ¶

```c
cvex test(string map="Mandril.rat") { for (string token : {
"texture:xres",  "texture:yres",  "texture:channels",  "texture:resolution",
"texture:tokens",  "image:pixelaspect",  "space:world" })  { float fval;
vector vval;  matrix mval;  printf("----------------- %s
---------------------\n", token);  if (teximport(map, token, fval))
printf("'%s' = %g\n", token, fval);  else if (teximport(map, token, vval))
printf("'%s' = %g\n", token, vval);  else if (teximport(map, token, mval))
printf("'%s' = %g\n", token, mval);  } }
```

## See also

- [dsmpixel](dsmpixel.html)

### file

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

### map

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

### shading

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
