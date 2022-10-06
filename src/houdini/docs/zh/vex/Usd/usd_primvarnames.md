---
title: usd_primvarnames
order: 109
category:
  - houdini
---
    
## 描述

Returns the names of the primvars available on the given USD primitive.

| Since | 18.0 |
| ----- | ---- |

```c
string [] usd_primvarnames(<stage>stage, string primpath)
```

This function returns the primvar names that are available on the given
primitive.

此函数返回给定基元上可用的 primvar 名称。

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

String array containing the names of the primitive‘sprimvars.

包含基元名称的字符串数组。

## Examples

    // Get the primvar names from the primitive.string primvar_names[] = usd_primvarnames(0, "/geo/src_sphere");
