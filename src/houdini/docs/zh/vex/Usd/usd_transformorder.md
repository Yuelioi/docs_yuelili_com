---
title: usd_transformorder
order: 143
category:
  - houdini
---
    
## 描述

Obtains the primitive‘stransform order

| Since | 17.5 |
| ----- | ---- |

```c
string [] usd_transformorder(<stage>stage, string primpath)
```

This function returns primitive‘slocal transform. Transform order is a
sequence of transform operations, whose full names are stored in
`xformOpOrder` attribute as a string array.Thus, this function returns the
value of that attribute.

此函数返回 primitiveâs 的本地转换。变换顺序是变换操作的序列，其全名作为一个字符串数组存储在 xformOpOrderattribute 中。
因此，此函数返回该属性的值。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入编号（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

Returns

The primitive‘stransform order.

基元的转换顺序。

## Examples

    // Get the cube's transform order.string cube_xform_ops[] = usd_transformorder(0, "/geo/cube");
