---
title: solveconstraint
order: 26
category:
  - houdini
---
    
## 描述

Applies an inverse kinematics algorithm to a skeleton.

| Since | 17.5 |
| ----- | ---- |

`vector [] solveconstraint(float lengths[], vector targetpos, float tolerance, matrix relmat, vector constraints[])`

Returns a array of local bone rotations in degrees.

返回一个局部骨骼旋转的数组，单位是度。

`lengths`

The lengths of all the bones to solve.

要解决的所有骨骼的长度。

`targetpos`

A target position in worldspace.

一个世界空间中的目标位置。

`tolerance`

Tolerance.

`relmat`

A relative matrix used to transform the target and twist positions relative to
the origin.This is normally the invert matrix of the root of the chain.

一个相对矩阵，用于转换目标位置和相对于原点的扭曲位置。

`constraints`

This is a vector array used to define the per bone restangles, dampening,
minangles, maxangles, min damp, max damp, and rolloff.If the array is empty,
same default values present in the bone objects are used.If the array size is
equal to the number of input bones, the rest angles are defined.If the array
size is equal to 2 times the number of input bones, the rest angles and the
dampening are defined.If the array size is equal to 3 times the number of
input bones, the rest angles, the dampening, the min/max angles are defined.
Min/Max angles share the same values.If the array size is equal to 4 times the
number of input bones, the rest angles, the dampening, the min/max angles are
defined. Min/Max angles have different values.If the array size is equal to 5
times the number of input bones, the rest angles, the dampening, the min/max
angles and damp angles are defined.If the array size is equal to 6 times the
number of input bones, the rest angles, the dampening, the min/max angles,
min/max damp angles are defined.If the array size is equal to 7 times the
number of input bones, the rest angles, the dampening, the min/max angles,
min/max damp angles, and rolloff are defined.

这通常是链根的反转矩阵。
