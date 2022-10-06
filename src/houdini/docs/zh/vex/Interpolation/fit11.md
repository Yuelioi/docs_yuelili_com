---
title: fit11
order: 15
category:
  - houdini
---
    
## 描述

Takes the value in the range `(-1, 1)` and shifts it to the corresponding
value in a new range.

```c
float  fit11(float value, float nmin, float nmax)
```

```c
<vector> fit11(<vector>value, <vector>nmin, <vector>nmax)
```

Takes the value in the range (-1, 1) and shifts it to the corresponding value
in the new range (nmin, nmax). For vectors it does this per-component.

在(-1, 1)范围内取值，并将其移到新范围(nmin,nmax)内的相应值。对于向量来说，它是按分量进行的。
