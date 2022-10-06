---
title: solvecurve
order: 27
category:
  - houdini
---
    
## 描述

Applies a curve inverse kinematics algorithm to a skeleton.

| Since | 17.5 |
| ----- | ---- |

`vector [] solvecurve(float lengths[], int closed, int orienttonormal, vector tangent, vector points[], vector normals[])`

`matrix3 [] solvecurve(float lengths[], int closed, int orienttonormal, vector tangent, vector points[], vector normals[])`

`vector [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[])`

`matrix3 [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[])`

`vector [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[], float twists[], float initialtwists[], int fmt, int order, float lod)`

`matrix3 [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[], float twists[], float initialtwists[], int fmt, int order, float lod)`

`vector [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat)`

`matrix3 [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat)`

`vector [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat, int primnum, float lod)`

`matrix3 [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat, int primnum, float lod)`

Returns a array of vectors or matrix3 representing local bone rotations.
Angles are in degrees.

返回一个代表局部骨骼旋转的向量或矩阵 3 阵列。角度的单位是度。

`op`

The SOP path to a curve to evaluate.

要评估的曲线的 SOP 路径。

`outlength`

Return the length of the curve where the solution ends. This is different than
the sum of all lengths array.

返回解决方案结束时的曲线长度。这与所有长度数组的总和不同。

`outpos`

Return the computed position of the last joint.

返回最后一个关节的计算位置。

`lengths`

The lengths of all the bones to solve.

所有要解决的骨骼的长度。

`closed`

Close the curve.

关闭曲线。

```c
orienttonormal
```

Use the normals from the curve to orient the bones.

使用曲线上的法线来确定骨骼的方向。

`normalmode`

Define how the normals/twists are computed from the control points.

定义如何从控制点计算出法线/扭力。

Use the constants defined in

```c
$HH/vex/include/math.h
```

.

使用$HH/vex/include/math.h 中定义的常数。

`tangent`

A tangent vector to orient the end tip of the curve.

一个切线向量，用来确定曲线端部的方向。

`points`

An array of vectors to use as points to define the curve.

一个向量数组，作为定义曲线的点。

`normals`

An array of vectors to use as normals to define the curve.

一个向量数组，用作定义曲线的法线。

`twists`

An optional array of floats to use as twist angles in degree to define the
curve.

一个可选的浮动数组，用来定义曲线的扭曲角度。

`initialtwists`

An optional array of floats to use as initial twist angles in degree define
the curve.

一个可选的浮点数组，用来作为定义曲线的初始扭曲角。

```c
normalcalcmethod
```

A normal calculation method when evaluating using a SOP. (0 default, 1 none, 2
interpolate with quaternions, 3 interpolate with twist angles in 0,180 range,
4 interpolate with twist angles in any range.)

使用 SOP 进行评估时的正常计算方法。(0 默认，1 没有，2 用四元数插值，3 用 0,180 范围内的扭角插值，4 用任何范围内的扭角插值。)

`relmat`

A relative matrix used to transform the points, normals and tangent relative
to the origin.This is normally the invert matrix of the root of the chain.

一个相对矩阵，用于转换相对于原点的点、法线和切线。

`fmt`

The curve type to create. Use constants defined in

```c
$HH/vex/include/math.h
```

,
or 0 to create a polygon curve, 1 to create a bezier curve or 2 to create a
NURBS curve.

这通常是链根的反转矩阵。

`order`

The curve order for NURBS or Bezier curves. This is ignored for polygon
curves.

要建立的曲线类型。
