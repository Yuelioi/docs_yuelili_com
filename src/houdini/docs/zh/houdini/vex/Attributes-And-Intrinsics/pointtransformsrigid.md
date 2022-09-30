---
title: pointtransformsrigid
order: 43
category:
  - houdini
---
    
## 描述

Returns an array of rigid point transforms from an array of point indices.

| Since | 18.5 |
| ----- | ---- |

```c
matrix [] pointtransformsrigid(<geometry>geometry, int pnts[])
```

```c
matrix [] pointtransformsrigid(<geometry>geometry)
```

Returns an array of rigid transforms associated with the point indices. This
function queries the `v@P` and the `3@transform` attributes to build matrices.
Polar decomposition is performed on `3@transform` to make it rigid.Returns all
the point transforms if the point indices argument is omitted.

返回一个与点索引相关的刚性变换数组。这个函数查询 v@P 和 3@transform 的属性来建立矩阵。对 3@transform 进行极性分解以使其成为刚性变换。

`pnts`

The array of point indices to query.

如果省略了点指数参数，则返回所有的点变换。
