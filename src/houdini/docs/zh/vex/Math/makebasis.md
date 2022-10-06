---
title: makebasis
order: 33
category:
  - houdini
---
    
## 描述

Creates an orthonormal basis given a z-axis vector.

```c
void  makebasis(vector &xaxis, vector &yaxis, vector zaxis)
```

```c
void  makebasis(vector &xaxis, vector &yaxis, vector zaxis, vector u)
```

Completes an orthonormal basis for the given `zaxis` vector consisting ofthe
`xaxis` and `yaxis` basis vectors. When only the `zaxis` vector isgiven, the
basis will have an arbitrary orientation. When a second vector`u` is provided,
the `yaxis` vector will be constrained so that it is alignedwith that vector.

为给定的 Z 轴向量完成一个正态基，由
