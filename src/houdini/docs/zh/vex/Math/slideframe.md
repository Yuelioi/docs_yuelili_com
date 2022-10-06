---
title: slideframe
order: 58
category:
  - houdini
---
    
## 描述

Finds the normal component of frame slid along a curve.

```c
vector  slideframe(vector t0, vector t1, vector v0)
```

```c
vector  slideframe(vector x0, vector t0, vector v0, vector x1, vector t1)
```

Given an arbitrary vector, `v0`, and two normalized vectors, `t0` and `t1`,
this function applies to `v0` the minimal rotation that would take `t0` to
`t1`, and returns the result.This is equivalent to

```c
v0*dihedral(t0,t1)
```

, but
should be slightly faster.

给定一个任意矢量 v0 和两个归一化矢量 t0 和 t1，这个函数对 v0 应用最小旋转，即 t0tot1，并返回结果。
这相当于 ov0\*dihedral(t0,t1)，但应该会稍微快一点。

The second function signature requires that `x1-x0` is in the same direction
as the average of `t0` and `t1`, and is provided for compatibility, though
should produce approximately the same results.

第二个函数签名要求 x1-x0 的方向与 oft0 和 t1 的平均值相同，这是为了兼容而提供的，尽管应该产生大致相同的结果。

You can use this function to extend a curve normal at the starting point of a
curve to the entire curve in a rotation minimizing fashion.

你可以使用这个函数以旋转最小化的方式将曲线起点的法线扩展到整条曲线。
