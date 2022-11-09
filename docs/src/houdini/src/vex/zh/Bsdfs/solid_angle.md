---
title: solid_angle
order: 20
category:
  - vex
---

`float solid_angle(bsdf b, int mask)`

## Arguments

`b`

BSDF 取样。

`mask`

一个比特掩码，表示要评估哪些类型的弹跳。

参见[bouncemask](bouncemask.html)以了解关于组件标签位掩码的信息。

## Examples



```c
// Split BSDF into component lobes
bsdf lobes[] = split_bsdf(hitF);

// Get solid angle of lobes
float angles[];
resize(angles, len(lobes));
for (int i = 0; i < len(lobes); i++)
{
 angles[i] = solid_angle(lobes[i], PBR_ALL_MASK);
}

// Compute PDF from angles
float pdf[] = compute_pdf(angles);

// Compute CDF from PDF
float cdf[] = compute_cdf(pdf);

// Randomly select a BSDF based on albedo distribution
int id = sample_cdf(cdf, sx);

// Do something with the selected BSDF
// lobes[id] ...

```

## See also

- [split_bsdf](split_bsdf.html)
- [sample_bsdf](sample_bsdf.html)
- [eval_bsdf](eval_bsdf.html)
- [albedo](albedo.html)

### bsdf

[albedo](albedo.html)

[ashikhmin](ashikhmin.html)

[blinn](blinn.html)

[bouncelabel](bouncelabel.html)

[bouncemask](bouncemask.html)

[chiang](chiang.html)

[cone](cone.html)

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[cvex_bsdf](cvex_bsdf.html)

[diffuse](diffuse.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[ggx](ggx.html)

[hair](hair.html)

[henyeygreenstein](henyeygreenstein.html)

[isotropic](isotropic.html)

[mask_bsdf](mask_bsdf.html)

[nbouncetypes](nbouncetypes.html)

[normal_bsdf](normal_bsdf.html)

[phong](phong.html)

[phonglobe](phonglobe.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[solid_angle](solid_angle.html)

[specular](specular.html)

[split_bsdf](split_bsdf.html)

[sssapprox](sssapprox.html)

[translucent](translucent.html)

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
