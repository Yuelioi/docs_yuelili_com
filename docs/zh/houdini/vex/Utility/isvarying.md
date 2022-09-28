---
title: isvarying
order: 7
category:
  - houdini
---
    
## 描述

Check whether a VEX variable is varying or uniform.

```c
int  isvarying(<type>x)
```

```c
int  isvarying(<type>x[])
```

Returns 1 when the given variable is varying, or 0 when it is uniform.
Avariable is varying when it may have a different value for each processorin
the VEX SIMD array. If a value is varying, shader execution willgenerally be
slower - so this function can be useful when debugging shaderperformance. Any
variable type can be passed to the `isvarying()` function.

如果给定的变量是变化的，则返回 1，如果是统一的，则返回 0。A
