---
title: fit01
order: 13
category:
  - houdini
---
    
## 描述

Takes the value in the range `(0, 1)` and shifts it to the corresponding value
in a new range.

```c
float  fit01(float value, float nmin, float nmax)
```

```c
<vector> fit01(<vector>value, <vector>nmin, <vector>nmax)
```

Takes the value in the range (0, 1) and shifts it to the corresponding value
in the new range (nmin, nmax). For vectors it does this per-component.

获取范围（0, 1）中的值，并将其移到新范围（nmin,nmax）中的相应值。对于向量来说，它是按分量进行的。
