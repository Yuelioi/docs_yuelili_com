---
title: nextsample
order: 6
category:
  - vex
---



Context(s)
[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

`void nextsample(int &sid, float &sx, float &sy, ...)`

`void nextsample(int &sid, vector &svec, ...)`

[newsampler](newsampler.html "Initializes a sampling sequence for the nextsample function.") and this function expose the high-quality deterministic sampling patterns used by mantra for pixel anti-aliasing. When rendering in raytracing mode, it’s possible to generate deterministic 2D samples with `nextsample` routine by initializing the sampling sequence with the `SID` global variable.

This method can generate either 2D or 3D sampling patterns. To generate 2D samples, use the signature with 2 float write-only arguments. To generate 3D samples, use the signature with a vector write-only argument.

You can add an extra argument, `"mode"`, followed by one of the following:

## Arguments

`“qstrat”`

Advances to the next sample in the pattern. You should use this mode when using [newsampler](newsampler.html "Initializes a sampling sequence for the nextsample function.").

`“nextpixel”`

Advances to a new pixel sampling pattern. You should use this mode when using SID with raytracing to generate good-quality sampling patterns within a pixel. This mode takes into account other samples within the current pixel and will appropriately stratify itself. If rendering with micropolygon rendering, “nextpixel” will behave the same as “qstrat”.

`“decorrelate”`

Advances to a new decorrelated sample. You should use this mode to deterministically generate a new sampling sequence that is unrelated to an existing sequence. Similarly to “nextpixel”, this mode preserves high-quality pixel sampling when used with SID and raytracing.

```c
int nsamples = 10;
int sid = israytrace ? SID : newsampler();

for (i = 0; i < nsamples; i++)
{
if (israytrace)
nextsample(sid, sx, sy, "mode", "nextpixel");
else
nextsample(sid, sx, sy, "mode", "qstrat");
// Sample something using sx/sy...
}

```



## See also

- [newsampler](newsampler.html)

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

|
sampling

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[newsampler](newsampler.html)

[nextsample](nextsample.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[solid_angle](solid_angle.html)

[spline_cdf](spline_cdf.html)

[split_bsdf](split_bsdf.html)
