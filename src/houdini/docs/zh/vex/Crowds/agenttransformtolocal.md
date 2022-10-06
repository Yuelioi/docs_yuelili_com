---
title: agenttransformtolocal
order: 44
category:
  - houdini
---
    
## 描述

Converts transforms from world space to local space for an agent primitive.

`int agenttransformtolocal(<geometry>geometry, int prim, matrix &transforms[])`

Returns `-1` if

```c
len(transforms)
```

does not match the number of transforms in
the agent‘srig, `prim` is out of range, or `prim` is not an agent
primitive.

如果 len(transforms)与代理装备中的 transforms 数量不匹配，prim 超出范围，或者 prim 不是代理基元，则返回 1。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`prim`

The primitive number.

原始编号。

`transforms`

The transforms to convert from world space to local space.

要从世界空间转换到本地空间的变换。
