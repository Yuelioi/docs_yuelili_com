---
title: setpointlocaltransforms
order: 60
category:
  - houdini
---
    
## 描述

Sets an array of point local transforms at the given point indices.

| Since | 18.5 |
| ----- | ---- |

```c
int  setpointlocaltransforms(int geometry, int pnts[], matrix transforms[])
```

Sets an array of local transforms associated with the point indices. This
function set the

```c
4@localtransform
```

attribute.

设置一个与点索引相关的局部变换数组。这个函数设置 4@localtransformattribute。

`pnts`

The array of point indices to set.

要设置的点索引数组。

`transforms`

The array of transforms to set.

要设置的变换数组。
