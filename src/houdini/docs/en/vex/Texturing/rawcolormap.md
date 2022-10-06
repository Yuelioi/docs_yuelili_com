---
title: rawcolormap
order: 10
category:
  - houdini
---

## Description

`vector|vector4 rawcolormap(string filename, vector uvw, ...)`

`vector|vector4 rawcolormap(string filename, float u, float v, ...)`

`vector|vector4 rawcolormap(string filename, vector uv, vector du, vector dv, int samples, ...)`

`vector|vector4 rawcolormap(string filename, vector uv0, vector uv1, vector uv2, vector uv3, ...)`

`vector|vector4 rawcolormap(string filename, vector uv0, vector uv1, vector uv2, vector uv3, int samples, ...)`

`vector|vector4 rawcolormap(string filename, float u0, float v0, float u1, float v1, float u2, float v2, float u3, float v3, int samples, ...)`

This function has the same arguments as [colormap](colormap.html "Looks up a
(filtered) color from a texture file."), but does not do bilinear
interpolation of the pixel values. See [colormap](colormap.html "Looks up a
(filtered) color from a texture file.") for information on the arguments.

If you call the function with a `vector4` return type, the fourth component is
the alpha channel of the texture. If the image does not have alpha, the fourth
component is always `1`.

## See also

- [colormap](colormap.html)
- [texture](texture.html)

### color

[blackbody](blackbody.html)

[colormap](colormap.html)

[ctransform](ctransform.html)

[environment](environment.html)

[hsvtorgb](hsvtorgb.html)

[luminance](luminance.html)

[ocio_activedisplays](ocio_activedisplays.html)

[ocio_activeviews](ocio_activeviews.html)

[ocio_import](ocio_import.html)

[ocio_transform](ocio_parsecolorspace.html)

[ocio_roles](ocio_roles.html)

[ocio_spaces](ocio_spaces.html)

[ocio_transform](ocio_transform.html)

[rawcolormap](rawcolormap.html)

[rgbtohsv](rgbtohsv.html)

[rgbtoxyz](rgbtoxyz.html)

[xyztorgb](xyztorgb.html)

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

### texture

[colormap](colormap.html)

[environment](environment.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[photonmap](photonmap.html)

[rawcolormap](rawcolormap.html)

[texprintf](texprintf.html)

[uvdist](uvdist.html)
