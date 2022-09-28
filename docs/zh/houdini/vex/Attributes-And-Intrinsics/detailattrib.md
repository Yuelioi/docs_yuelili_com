---
title: detailattrib
order: 15
category:
  - houdini
---
    
## 描述

Reads a detail attribute value from a geometry.

`<type> detailattrib(<geometry>geometry, string attribute_name, int ignored, int &success)`

`<type>[] detailattrib(<geometry>geometry, string attribute_name, int ignored, int &success)`

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

```c
`attribute_name
```

`

The name of the attribute (or intrinsic) to read.

要读取的属性（或内在属性）的名称。

`ignored`

Pass `0` for this argument.

传递 0 作为这个参数。

`success`

The function sets this variable to `1` if the attribute was successfully read,
or `0` otherwise.

如果属性被成功读取，该函数将这个变量设置为 1，否则为 0。

Returns

`0` if importing the attribute failed, the value of the attribute on success.

如果导入属性失败，则为 0，成功时为属性的值。
