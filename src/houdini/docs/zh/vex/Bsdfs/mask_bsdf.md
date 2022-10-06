---
title: mask_bsdf
order: 14
category:
  - houdini
---
    
## 描述

Returns new BSDF that only includes the components specified by the mask.

```c
bsdf  mask_bsdf(bsdf b, int mask)
```

`b`

BSDF to mask.

屏蔽的 BSDF。

`mask`

A bitmask indicating which types of shading component bounces to evaluate.

一个比特掩码，表示要评估哪些类型的着色组件弹跳。

See [bouncemask](bouncemask.html) for information on component label bitmasks.

有关组件标签位掩码的信息，请参见 bouncemask。

## Examples

    // outF will have every component from inF except refractionbsdf outF = mask_bsdf(inF, PBR_ALL_MASK & ~PBR_REFRACT_MASK);
