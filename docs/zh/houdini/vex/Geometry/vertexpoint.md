---
title: vertexpoint
order: 41
category:
  - houdini
---
    
## 描述

Returns the point number of linear vertex in a geometry.

```c
int  vertexpoint(<geometry>geometry, int linearvertex)
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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。

`linearvertex`

The linear vertex number.The `vertexindex` function can be usedto compute a
linear vertex from a primitive number and vertexnumber pair.

线性顶点编号。 顶点指数（vertexindex）函数可用于

Returns

The point number associated with the vertex, or `-1` if the vertex has no
point.

来计算一个线性顶点，该顶点来自于一个原始数和顶点数对。

## Examples

    int    pt;// Get the point of vertex 3pt = vertexpoint("defgeo.bgeo", 3);
