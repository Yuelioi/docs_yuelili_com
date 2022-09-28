---
title: pointtransformrigid
order: 41
category:
  - houdini
---
    
## 描述

Returns a rigid point transform from a point index.

| Since | 18.5 |
| ----- | ---- |

```c
matrix  pointtransformrigid(<geometry>geometry, int pnt)
```

Returns a rigid transform associated with the point index. This function
queries the `v@P` and the `3@transform` attributes to build the matrix. Polar
decomposition is performed on `3@transform` to make it rigid.

返回一个与点索引相关的刚性变换。这个函数查询 v@P 和 3@transform 的属性来建立矩阵。对 3@transform 进行极性分解以使其具有刚性。

`pnt`

The point index to query.

要查询的点索引。
