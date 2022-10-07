---
title: getlocalcurvature
order: 22
category:
  - vex
---

[shading](../contexts/shading.html)

`vector getlocalcurvature(float s, float t)`

Context(s) 如果对象没有启用细分功能，或者没有分配位移着色器，则返回 0 向量。否则，测量的凸度和凹度将分别以`x`和`y`分量返回。

## Arguments

`s`

参数 S 的阴影值。这应该从`s`全局变量中传递。

`t`

参数<类型>阴影值。这应该由`t`全局变量传递。
