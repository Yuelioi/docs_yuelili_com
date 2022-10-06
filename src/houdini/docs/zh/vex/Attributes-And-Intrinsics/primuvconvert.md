---
title: primuvconvert
order: 53
category:
  - houdini
---
    
## 描述

Convert parametric UV locations on curve primitives between different spaces.

`vector2 primuvconvert(<geometry>geometry, vector2 uv, int prim_num, int mode)`

`vector2 primuvconvert(<geometry>geometry, vector2 uv, int prim_num, int mode, float tolerance)`

```c
float  primuvconvert(<geometry>geometry, float uv, int prim_num, int mode)
```

`float primuvconvert(<geometry>geometry, float uv, int prim_num, int mode, float tolerance)`

`geometry`

A string specifying a geometry file (for example, a `.bgeo`) to read from.
When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

一个字符串，指定一个要读取的几何文件（例如，a.bgeo）。当在 Houdini 中运行时，这可以是 anop:/path/to/sopreference。

`uv`

Curve coordinates to convert. Can be a float or a vector2. The function
returns the converted coordinates.

要转换的曲线坐标。可以是一个浮点数或一个向量 2。该函数返回转换后的坐标。

`prim_num`

The primitive number of the curve on which to convert the coordinates.

用于转换坐标的曲线的原始编号。

`mode`

One of the

```c
PRIMUV_space_TO_space
```

constants listed below. You can import the
constants from

```c
$HFS/houdini/vex/include/math.h
```

.

下面列出的 PRIMUV_space_TO_space 常量之一。你可以从$HFS/houdini/vex/include/math.h 导入这些常数。

REAL domain is based on the number of curve segments (0 to `nSegments`). A
segment can hold multiple control points based on the curve degree. `UNIT`
domain is the REAL domain normalized to fit in 0 to 1. `UNITLEN` domain maps
the curve based on its length but normalized (0..1). `LEN` domain maps the
curve based on its length (0..`CurveLength`).

REAL 域是基于曲线段的数量（0 吨 Segments）。UNITdomain 是归一化的 REAL 域，适合于 0 到 1.UNITLENdomain 根据曲线的长度来映射曲线，但要归一化（0...1）.LENdomain 根据曲线的长度来映射（0...CurveLength）。

Constant name

常数名称

|

Int value

Int 值

---|---

PRIMUV_REAL_TO_UNIT

|

0

PRIMUV_REAL_TO_UNITLEN

|

1

PRIMUV_REAL_TO_LEN

|

2

PRIMUV_UNIT_TO_REAL

|

3

PRIMUV_UNIT_TO_UNITLEN

|

4

PRIMUV_UNIT_TO_LEN

|

5

PRIMUV_UNITLEN_TO_REAL

|

6

PRIMUV_UNITLEN_TO_UNIT

|

7

PRIMUV_UNITLEN_TO_LEN

|

8

PRIMUV_LEN_TO_REAL

|

9

PRIMUV_LEN_TO_UNIT

|

10

PRIMUV_LEN_TO_UNITLEN

|

11
