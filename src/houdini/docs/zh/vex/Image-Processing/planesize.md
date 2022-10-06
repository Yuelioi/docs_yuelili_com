---
title: planesize
order: 34
category:
  - houdini
---
    
## 描述

Returns the number of components in the plane (1 for scalar planes  
and up to 4 for vector planes).

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
int  planesize(int planeindex)
```

Returns the number of components in the plane (1 for scalar planes andup to 4
for vector planes). Returns 0 if the index is out of range.

返回平面内的分量数（标量平面为 1，矢量平面为 4）。
