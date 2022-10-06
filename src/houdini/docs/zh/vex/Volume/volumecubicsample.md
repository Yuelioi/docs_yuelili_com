---
title: volumecubicsample
order: 2
category:
  - houdini
---
    
## 描述

Samples the volume primitive‘svalue.

```c
float  volumecubicsample(<geometry>geometry, int primnum, vector pos)
```

```c
float  volumecubicsample(<geometry>geometry, string volumename, vector pos)
```

`float volumecubicsample(<geometry>geometry, int primnum, vector pos, vector &grad)`

`float volumecubicsample(<geometry>geometry, string volumename, vector pos, vector &grad)`

`float volumecubicsample(<geometry>geometry, int primnum, vector pos, vector &grad, matrix3 &hess)`

`float volumecubicsample(<geometry>geometry, string volumename, vector pos, vector &grad, matrix3 &hess)`

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
voxels are evaluated with tri-cubic interpolation.

体积基元在给定位置的采样值。体素之间的值是用三立方插值法评估的。

The `grad` and `hess` arguments return the gradient or the hessian of this
sampling function which can be computed at the same time as the value.

grad 和 hess 参数返回该取样函数的梯度或 hessian，可以与值同时计算。

Returns 0 if `primnum` or `inputnum` is out of range, the geometry is invalid,
or the given primitive is not a volume or vdb primitive.

如果 primnum 或 inputnum 超出范围，几何图形无效，或者给定的基元不是体积或 vdb 基元，则返回 0。

![](../../images/vex/volumecubicsample.png)

Example of interpolation of one and two dimensional data using

```c
volumecubicsample
```

. The visualized normal is computed using the `grad`
parameter.

使用 volumecubicsample 对一维和二维数据进行插值的例子。使用 gradparameter 来计算可视化的法线。

## Examples

Approximating a volume value at the point `P + u` using volume values at the
point `P`.

使用点 P 的体积值来逼近点 P + u 的体积值。

    vector P = {1.0, 2.0, 3.0};vector grad;matrix3 hess;float val1 = volumecubicsample(0, "density", P, grad, hess);vector u = {0.1, 0.01, 0.001};float val2 = volumecubicsample(0, "density", P + u);// By Taylor expansion we have://

```c
val1 + dot(u, grad)
```

is approximately equal to `val2`// And the second order approximation://

```c
val1 + (u, grad) + 0.5 * dot(u, u*hess)
```

// is appriximately equal to `val2`
