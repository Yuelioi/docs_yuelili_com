---
title: volumesmoothsamplev
order: 15
category:
  - houdini
---
    
## 描述

Samples the volume primitive‘svalue.

```c
vector  volumesmoothsamplev(<geometry>geometry, int primnum, vector pos)
```

`vector volumesmoothsamplev(<geometry>geometry, string volumename, vector pos)`

`vector volumesmoothsamplev(<geometry>geometry, int primnum, vector pos, matrix3 &grad)`

`vector volumesmoothsamplev(<geometry>geometry, string volumename, vector pos, matrix3 &grad)`

`vector volumesmoothsamplev(<geometry>geometry, int primnum, vector pos, matrix3 &grad, matrix3 &hessX, matrix3 &hessY, matrix3 &hessZ)`

`vector volumesmoothsamplev(<geometry>geometry, string volumename, vector pos, matrix3 &grad, matrix3 &hessX, matrix3 &hessY, matrix3 &hessZ)`

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

Returns

The volume primitive‘ssampled value at the given position. Values between
voxels are evaluated with smooth interpolation.

体积基元在给定位置的采样值。体素之间的值是通过平滑插值来评估的。

The `grad` is a matrix whose i-th column is the gradient of the i-th component
of the volume.

GRAD 是一个矩阵，其第 i 列是体积的第 i 个分量的梯度。

Matrices `hessX`, `hessY`, `hessZ` are second derivatives of x, y and z
component respectively.

矩阵 hessX、hessY、hessZ 分别是 x、y 和 z 分量的二阶导数。

Returns 0 if `primnum` or `inputnum` is out of range, the geometry is invalid,
or the given primitive is not a volume or vdb primitive.

如果 primnum 或 inputnum 超出范围，几何图形无效，或者给定的基元不是一个体积或 vdb 基元，则返回 0。

## Examples

Approximating a volume value at the point `P + u` using volume values at the
point `P`.

使用点 P 的体积值来逼近点 P + u 的体积值。

    vector P = {1.0, 2.0, 3.0};matrix3 grad, hessX, hessY, hessZ;vector val1 = volumesmoothsamplev(0, "vel", P, grad, hessX, hessY, hessZ);vector u = {0.1, 0.01, 0.001};vector val2 = volumesmoothsamplev(0, "vel", P + u);// By Taylor expansion we have://

```c
val1 + u * grad
```

is approximately equal to `val2`// And the second order approximation://

```c
val1 + u * grad + 0.5 * set(dot(u, u*hessX), dot(u, u*hessY), dot(u, u*hessZ))
```

// is appriximately equal to `val2`
