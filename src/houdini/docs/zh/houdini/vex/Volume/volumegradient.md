---
title: volumegradient
order: 4
category:
  - houdini
---
    
## 描述

Calculates the volume primitive‘sgradient.

```c
vector  volumegradient(<geometry>geometry, int primnum, vector pos)
```

```c
vector  volumegradient(<geometry>geometry, string volumename, vector pos)
```

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是一个 op:/path/to/sopreference。

Returns

The volume primitive‘sgradient. The gradient is a vector pointing in the
direction of increasing value.

体积基元的梯度。梯度是一个指向数值增加方向的向量。

Returns 0 if `primnum` is out of range, the geometry is invalid, or the given
primitive is not a volume primitive.

如果 primnum 超出范围，几何图形无效，或者给定的基元不是一个体积基元，则返回 0。
