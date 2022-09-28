---
title: primattrib
order: 46
category:
  - houdini
---
    
## 描述

Reads a primitive attribute value from a geometry, outputting a success flag.

`<type> primattrib(<geometry>geometry, string attribute_name, int prim, int &success)`

`<type>[] primattrib(<geometry>geometry, string attribute_name, int prim, int &success)`

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

`prim`

The primitive number.

原始编号。

`&success`

Set to `1` if the import was successful,`0` on error (for example, the
attribute or primitive number don‘t exist).

如果导入成功，则设置为 1，如果出错，则设置为 0（例如，该属性或原始编号不存在）。
