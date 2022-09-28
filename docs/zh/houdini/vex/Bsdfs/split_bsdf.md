---
title: split_bsdf
order: 20
category:
  - houdini
---
    
## 描述

Splits a bsdf into its component lobes.

```c
void  split_bsdf(bsdf &lobes[], bsdf source, float &weights[])
```

```c
void  split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask)
```

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type)`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type, float u)`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type, float u, float cdf[])`

`&lobes`

The function overwrites this array with the BSDFs for the component lobes.

该函数用各裂片的 BSDFs 覆盖这个数组。

`source`

The BSDF to split.

要分割的 BSDF。

`weights`

The function fills this array with the weights for the split lobes (same
length as the returned `bsdf` array). When you sample Illumination using the
returned lobes you must scale it by these weights.

该函数用分割后的裂片的权重填充该数组（与返回的 bsdfarray 长度相同）。当你使用返回的裂片进行照明采样时，你必须用这些权重进行缩放。

`mask`

A bitmask indicating which types of bounces to evaluate.

一个比特掩码，表示要评估哪些类型的反弹。

See [bouncemask](bouncemask.html) for information on component label bitmasks.

关于组件标签位掩码的信息，请参见 ebouncemask。

`type`

How to split the lobes. You can

```c
#import "pbr.h"
```

to get constant values
representing the different split types:

如何分割裂片。你可以#import "pbr.h "来获得代表不同分割类型的常量值。

-

```c
PBR_SPLIT_FULL = 0
```

pbr_split_full = 0

-

```c
PBR_SPLIT_RANDOM = 1
```

pbr_split_random = 1

-

```c
PBR_SPLIT_ALBEDO = 2
```

pbr_split_albedo = 2

-

```c
PBR_SPLIT_COMPONENT = 3
```

pbr_split_component = 3

-

```c
PBR_SPLIT_DEFAULT = PBR_SPLIT_ALBEDO
```

pbr_split_default = pbr_split_albedo

`u`

Random value to sample the CDF at.

对 CDF 进行采样的随机值。

`cdf`

CDF used to control sampling among components of the BSDF.

用于控制 BSDF 各组成部分之间的采样的 CDF。

Returns

An array of `bsdf` objects representing the lobes.

一个代表裂片的 bsdfobjects 数组。

## Examples

    // Split BSDF into component lobesfloat weights[];bsdf lobes[];split_bsdf(lobes, hitF, weights);// Get albedos of lobesfloat albedos[];resize(albedos, len(lobes));for (int i = 0; i < len(lobes); i++){  albedos[i] = luminance(albedo(lobes[i], -hitnI)) * weights[i];}// Compute CDFfloat cdf[] = compute_cdf(albedos);// Randomly select a BSDF based on albedo distributionint index = 0;sample_cdf(cdf, s.x, index);// Do something with the selected BSDF// lobes[index] ...
