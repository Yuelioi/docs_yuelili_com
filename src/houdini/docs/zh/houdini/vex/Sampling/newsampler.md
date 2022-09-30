---
title: newsampler
order: 4
category:
  - houdini
---
    
## 描述

Initializes a sampling sequence for the nextsample function.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
int  newsampler(...)
```

```c
int  newsampler(int seed, ...)
```

Returns an initialized sampler sequence for use as the first argumentto the
[nextsample](nextsample.html) function.

返回一个初始化的采样器序列，作为 nextsample 函数的第一个参数使用。

`seed`

You can specify a seed value for the sequence.Using the same seed will
generate the same sequence.This can be useful when random sampling into a
point cloud, for consistent results.

的第一个参数。
