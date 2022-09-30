---
title: haslight
order: 36
category:
  - houdini
---
    
## 描述

Returns whether a light illuminates the given material.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
int  haslight(material mat, vector P, int light, ...)
```

Returns 1 if the given light is used to illuminate the material at the
pointspecified.

如果给定的光被用来照亮材料的指定点，则返回 1。

This function accepts PBR keyword arguments to specify sampling
types.Theseoptions may exclude lights which don‘t match the desired sampling
paths.

指定。

The PBR sampling keywords include:

这个函数接受 PBR 关键字参数来指定采样类型。 这些

`label`

A string specifying a specific label.This keyword argument may be specified
multiple times.

选项可以排除不符合所需采样路径的灯光。

`direct`

Expects an 0 or 1 integer value which will limit lights based on indirect or
direct contribution categories.

PBR 取样关键字包括。

## Examples

    haslight(material(), P, light_num, "direct", 0);
