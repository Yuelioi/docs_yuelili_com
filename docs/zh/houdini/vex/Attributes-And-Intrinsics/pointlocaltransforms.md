---
title: pointlocaltransforms
order: 39
category:
  - houdini
---
    
## 描述

Returns an array of point localtransforms from an array of point indices.

| Since | 18.5 |
| ----- | ---- |

```c
matrix [] pointlocaltransforms(string geometry, int pnts[])
```

Returns an array of local transforms associated with the point indices. This
function queries the

```c
4@localtransform
```

attribute.

返回一个与点索引相关的局部变换数组。这个函数查询 4@localtransformattribute。

`pnts`

The array of point indices to query.

要查询的点索引数组。
