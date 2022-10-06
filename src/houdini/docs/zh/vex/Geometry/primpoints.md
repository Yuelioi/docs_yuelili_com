---
title: primpoints
order: 28
category:
  - houdini
---
    
## 描述

Returns the list of points on a primitive.

```c
int [] primpoints(<geometry>geometry, int primnum)
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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`primnum`

The primitive number to get the points of.

要获取点的原始编号。

Returns

An array of points, in the same order as stored on the primitive itself.If the
primitive number is not valid, the array will be empty.

一个点的数组，其顺序与存储在基元本身上的顺序相同。
