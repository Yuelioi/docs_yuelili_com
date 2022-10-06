---
title: usd_attribnames
order: 17
category:
  - houdini
---
    
## 描述

Returns the names of the attributes available on the primitive.

| Since | 17.5 |
| ----- | ---- |

```c
string [] usd_attribnames(<stage>stage, string primpath)
```

This function returns the attribute names that are available on the given
primitive.

此函数返回给定基元上可用的属性名称。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

基元的路径。

Returns

String array containing the names of the primitive‘sattributes.

包含基元的属性名称的字符串数组。

## Examples

    // Get the attribute names from the primitive.string attrib_names[] = usd_attribnames(0, "/geo/sphere");
