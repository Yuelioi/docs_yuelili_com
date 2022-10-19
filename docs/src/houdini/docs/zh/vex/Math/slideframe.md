---
title: slideframe
order: 64
category:
  - vex
---

`vector slideframe(vector t0, vector t1, vector v0)`

`vector slideframe(vector x0, vector t0, vector v0, vector x1, vector t1)`

给定一个任意向量`v0`和两个归一化向量`t0`和`t1`，这个函数对`v0`应用最小的旋转，将`t0`带到`t1`，并返回结果。这相当于`v0*dihedral(t0,t1)`，但应该会稍微快一点。

第二个函数签名要求`x1-x0'与`t0'和`t1'的平均值在同一方向，这是为了兼容而提供的，不过应该产生大致相同的结果。
