---
title: pointattrib
order: 35
category:
  - houdini
---
    
## 描述

Reads a point attribute value from a geometry and outputs a success/fail flag.

`<type> pointattrib(<geometry>geometry, string attribute_name, int pointnumber, int &success)`

`<type>[] pointattrib(<geometry>geometry, string attribute_name, int pointnumber, int &success)`

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

`&success`

The function overwrites this variable with `1` if the attribute exists and was
read successfully, or `0` otherwise.

如果该属性存在并被成功读取，该函数就会用 1 覆盖该变量，否则就用 0 覆盖。

Returns

The value of the given attribute on the given point number, or `0` if the
attribute or point do not exist.

如果该属性或点不存在，则用 1 来覆盖该变量。
