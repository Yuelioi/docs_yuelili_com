---
title: solveik
order: 29
category:
  - houdini
---
    
## 描述

Applies an inverse kinematics algorithm to a skeleton.

| Since | 17.5 |
| ----- | ---- |

`vector [] solveik(float lengths[], vector targetpos, vector twistpos, float twist, int twistflag, float dampen, int resiststraight, float trackingthres, matrix relmat, vector constraints[])`

`matrix3 [] solveik(float lengths[], vector targetpos, vector twistpos, float twist, int twistflag, float dampen, int resiststraight, float trackingthres, matrix relmat, vector constraints[])`

Returns a array of local bone rotations in degrees.

返回一个局部骨骼旋转的数组，单位是度。

`lengths`

The lengths of all the bones to solve.

要解决的所有骨骼的长度。

`targetpos`

A target position in worldspace.

世界空间中的目标位置。

`twistpos`

A twist affect position in worldspace.

世界空间中的扭曲影响位置。

`twist`

A twist angle in degrees.

扭转角度（度）。

`twistflag`

Apply twist using the twist affector or not.

是否使用扭曲影响器应用扭曲。

`dampen`

Dampening factor for the whole chain.

整个链条的阻尼系数。

```c
resiststraight
```

Resist straightening.

抵抗矫直。

`trackingthres`

Tracking threshold.

跟踪阈值。

`relmat`

A relative matrix used to transform the target and twist positions relative to
the origin.This is normally the invert matrix of the root of the chain.

一个相对矩阵，用于转换目标和扭曲的位置，相对于原点。

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
