---
title: usd_typename
order: 146
category:
  - houdini
---
    
## 描述

Returns the name of the primitive‘stype.

| Since | 17.5 |
| ----- | ---- |

```c
string  usd_typename(<stage>stage, string primpath)
```

This function returns the type name of the given primitive.

此函数返回给定基元的类型名称。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

基元的路径。

Returns

The name of the primitive‘stype.

基元的类型名称。

## Examples

    // Get the primitive's type name, eg "Cube".string type_name = usd_typename(0, "/geo/cube");
