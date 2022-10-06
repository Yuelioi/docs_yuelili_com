---
title: usd_parentpath
order: 94
category:
  - houdini
---
    
## 描述

Returns the path of the primitive‘sparent.

| Since | 17.5 |
| ----- | ---- |

```c
string  usd_parentpath(<stage>stage, string primpath)
```

This function returns the path of the given primitive‘sparent.

此函数返回给定基元的父路径。

Note, while this function takes the stage as an argument for consistency, it
does not access the stage, but rather it extracts the parent from the path.

请注意，虽然此函数将阶段作为一致性的参数，但它并不访问阶段，而是从路径中提取父级。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入数字（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

基元的路径。

Returns

The path of the primitive‘sparent.

基元的父路径。

## Examples

    // Get the path of the primitive's parent, ie "/geo".string path = usd_parentpath(0, "/geo/cube");
