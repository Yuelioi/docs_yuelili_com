---
title: setpointtransforms
order: 62
category:
  - houdini
---
    
## 描述

Sets an array of point transforms at the given point indices.

| Since | 18.5 |
| ----- | ---- |

```c
int  setpointtransforms(int geometry, int pnts[], matrix transforms[])
```

`int setpointtransforms(int geometry, int pnts[], matrix transforms[], int constrain)`

Sets an array of transforms associated with the point indices. This function
set the `v@P` and the `3@transform` attributes.

设置一个与点的索引相关的变换数组。这个函数设置 v@P 和 3@transform 的属性。

`pnts`

The array of point indices to set.

要设置的点索引数组。

`transforms`

The array of transforms to set.

要设置的变换数组。

`constrain`

When True, update the children point transforms when modifying a point world
transform. When False, the children points stay in place like when using Child
Compensation on a transform handle. Defaults to True;

当 "真 "时，在修改一个点的世界时，更新子点的变换。
