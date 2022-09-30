---
title: hair
order: 11
category:
  - houdini
---
    
## 描述

Returns a BSDF for shading hair.

`bsdf hair(vector N, vector tip, float lobe_shift, float lobe_width_lon, ...)`

`bsdf hair(vector N, vector tip, float lobe_shift, float lobe_width_lon, float lobe_with_azi, ...)`

`bsdf hair(vector N, vector tip, float lobe_shift, float lobe_width_lon, float lobe_with_azi, float glint_shift, float glint_intensity, ...)`

Details of the hair BSDF can be found in the source file (`hair_eval.vfl`).

关于 hair BSDF 的细节可以在源文件（hair_eval.vfl）中找到。

Any variadic arguments to the functions are passed through to the CVEX
evaluation function.

函数的任何变量参数都会传递给 CVEX 的评估函数。

## Examples

These different signatures are equivalent to the following code:

这些不同的签名等同于以下代码。

    bsdf hair(vector N; vector tip; float lobe_shift; float lobe_width_lon, ...){  cvex_bsdf("hair_eval", "hair_sample",    "label", "diffuse",    "tip", tip,    "lobe_shift", lobe_shift,    "lobe_width_lon", lobe_width_lon,  ...);}bsdf hair(vector N; vector tip; float lobe_shift; float lobe_width_lon, float lobe_with_azi, ...){  cvex_bsdf("hair_eval", "hair_sample",    "label", "refract",    "tip", tip,    "lobe_shift", lobe_shift,    "lobe_width_lon", lobe_width_lon,    "lobe_width_azi", lobe_width_azi,  ...);}bsdf hair(vector N; vector tip; float lobe_shift; float lobe_width_lon, float glint_shift; float glint_intensity, ...){  cvex_bsdf("hair_eval", "hair_sample",    "label", "reflect",    "tip", tip,    "lobe_shift", lobe_shift,    "lobe_width_lon", lobe_width_lon,    "glint_shift", glint_shift,    "glint_intensity", glint_intensity,  ...);}
