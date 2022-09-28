---
title: hasvertexattrib
order: 28
category:
  - houdini
---
    
## 描述

Returns if a geometry vertex attribute exists.

```c
int  hasvertexattrib(<geometry>geometry, string attribute_name)
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

Returns `1` if the attribute exists, or `0` otherwise.

如果该属性存在，则返回 1，否则返回 0。

## Examples

    // Determine if the P attribute exists.int exists = hasvertexattrib("defgeo.bgeo", "P");
