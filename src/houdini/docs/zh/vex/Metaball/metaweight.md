---
title: metaweight
order: 5
category:
  - houdini
---
    
## 描述

Returns the metaweight of the geometry at position p.

```c
float  metaweight(<geometry>geometry, vector p)
```

Returns the metaweight of the geometry at position p.This is the result of
evaluating all the metaballs in thegeometry at that position.Usually this is
the sum of theirvalues, but meta expressions can change that.

返回位置 p 处的几何体的元重量。
