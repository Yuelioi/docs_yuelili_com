---
title: fit10
order: 14
category:
  - houdini
---
    
## 描述

Takes the value in the range `(1, 0)` and shifts it to the corresponding value
in a new range.

```c
float  fit10(float value, float nmin, float nmax)
```

```c
<vector> fit10(<vector>value, <vector>nmin, <vector>nmax)
```

Takes the value in the range (1, 0) and shifts it to the corresponding value
in the new range (nmin, nmax). For vectors it does this per-component.

获取范围（1, 0）中的值，并将其移到新范围（nmin,nmax）中的相应值。对于向量来说，它是按分量进行的。
