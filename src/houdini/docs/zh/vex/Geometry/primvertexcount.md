---
title: primvertexcount
order: 30
category:
  - houdini
---
    
## 描述

Returns number of vertices in a primitive in a geometry.

```c
int  primvertexcount(<geometry>geometry, int prim_num)
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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。在胡迪尼内部运行时，这可以是 anop:/path/to/sopreference。

`prim_num`

The primitive number of the primitive to count vertices on.

要计算顶点的基元编号。

Returns

The number of vertices in the given primitive, or `-1` if the primitive does
not exist.

给定基元中的顶点数量，如果基元不存在，则为 1。

## Examples

    int    nvtx;// Get the number of vertices of primitive 3nvtx = primvertexcount("defgeo.bgeo", 3);
