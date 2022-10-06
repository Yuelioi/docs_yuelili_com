---
title: pointtransforms
order: 42
category:
  - houdini
---
    
## 描述

Returns an array of point transforms from an array of point indices.

| Since | 18.5 |
| ----- | ---- |

```c
matrix [] pointtransforms(<geometry>geometry, int pnts[])
```

```c
matrix [] pointtransforms(<geometry>geometry)
```

Returns an array of transforms associated with the point indices. This
function queries the `v@P` and the `3@transform` attributes to build
matrices.Returns all the point transforms if the point indices argument is
omitted.

返回一个与点索引相关的变换数组。这个函数查询 v@P 和 3@transformattributes 来建立矩阵。

`pnts`

The array of point indices to query.

如果省略了点指数的参数，则返回所有的点变换。
