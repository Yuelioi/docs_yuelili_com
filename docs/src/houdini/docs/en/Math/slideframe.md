---
title: slideframe
order: 64
category:
  - vex
---

`vector slideframe(vector t0, vector t1, vector v0)`

`vector slideframe(vector x0, vector t0, vector v0, vector x1, vector t1)`

Given an arbitrary vector, `v0`, and two normalized vectors, `t0` and `t1`, this function applies to `v0` the minimal rotation that would take `t0` to `t1`, and returns the result. This is equivalent to `v0*dihedral(t0,t1)`, but should be slightly faster.

The second function signature requires that `x1-x0` is in the same direction as the average of `t0` and `t1`, and is provided for compatibility, though should produce approximately the same results.

You can use this function to extend a curve normal at the starting point of a curve to the entire curve in a rotation minimizing fashion.
