---
title: detailintrinsic
order: 19
category:
  - houdini
---
    
## 描述

Reads the value of a detail intrinsic from a geometry.

Intrinsic values are similar to attributes, but are computed on-demand by
Houdini rather than stored.

本质值与属性类似，但它是由胡迪尼按需计算的，而不是存储。

```c
<type> detailintrinsic(<geometry>geometry, string intrinsic_name)
```

```c
<type>[] detailintrinsic(<geometry>geometry, string intrinsic_name)
```

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

```c
`intrinsic_name
```

`

The name of the intrinsic to read. For example,

```c
"pointattributes"
```

,
`"pointcount"`, or `"bounds"`.

要读取的内在属性的名称。例如，"pointattributes", "pointcount", 或者 "bounds"。

Returns

The intrinsic value, or `0` if the given intrinsic does not exist.

本征值，如果给定的本征值不存在，则为 0。
