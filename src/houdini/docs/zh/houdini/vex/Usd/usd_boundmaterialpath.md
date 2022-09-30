---
title: usd_boundmaterialpath
order: 25
category:
  - houdini
---
    
## 描述

Returns the material path bound to a given primitive.

| Since | 18.0 |
| ----- | ---- |

```c
string  usd_boundmaterialpath(<stage>stage, string primpath)
```

This function returns the material path for the given primitive. May return
anempty string if no material is bound.

此函数返回给定基元的材料路径。如果没有绑定材料，可能会返回一个

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

如果没有绑定材料，则可能返回一个空字符串。

`primpath`

The path to the primitive.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

Returns

The material bound to the given primitive.

通向基元的路径。

## Examples

    // Get the sphere primitive's material.string matpath = usd_boundmaterialpath(0, "/geo/sphere");
