---
title: solid_angle
order: 19
category:
  - houdini
---
    
## 描述

Computes the solid angle (in steradians) a BSDF function subtends.

```c
float  solid_angle(bsdf b, int mask)
```

`b`

BSDF to sample.

要取样的 BSDF。

`mask`

A bitmask indicating which types of bounces to evaluate.

一个比特掩码，表示要评估哪些类型的弹跳。

See [bouncemask](bouncemask.html) for information on component label bitmasks.

关于组件标签位掩码的信息，请参见 bouncemask。

## Examples

    // Split BSDF into component lobesbsdf lobes[] = split_bsdf(hitF);// Get solid angle of lobesfloat angles[];resize(angles, len(lobes));for (int i = 0; i < len(lobes); i++){  angles[i] = solid_angle(lobes[i], PBR_ALL_MASK);}// Compute PDF from anglesfloat pdf[] = compute_pdf(angles);// Compute CDF from PDFfloat cdf[] = compute_cdf(pdf);// Randomly select a BSDF based on albedo distributionint id = sample_cdf(cdf, sx);// Do something with the selected BSDF// lobes[id] ...
