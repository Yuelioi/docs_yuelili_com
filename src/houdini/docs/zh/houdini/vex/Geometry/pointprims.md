---
title: pointprims
order: 22
category:
  - houdini
---
    
## 描述

Returns the list of primitives containing a point.

```c
int [] pointprims(<geometry>geometry, int ptnum)
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

`ptnum`

The point number to get a primitive from.

要从中获取一个基元的点编号。

Returns

An array of primitive numbers.These will be in ascending orderand not contain
duplicates.

一个基元数组。 这些数字将按升序排列

If no primitives own the given point the array will be empty.

并且不包含重复的。
