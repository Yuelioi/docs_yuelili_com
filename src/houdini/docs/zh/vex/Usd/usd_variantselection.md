---
title: usd_variantselection
order: 149
category:
  - houdini
---
    
## 描述

Returns the currently selected variant in a given variant set.

| Since | 17.5 |
| ----- | ---- |

`string usd_variantselection(<stage>stage, string primpath, string variantset)`

This function returns the current variant in a given variant set on a given
primitive.

此函数返回给定基元上给定变体集中的当前变体。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`variantset`

The variant set name.

变体集名称。

Returns

The currently selected variant in a given variant set on a given primitive.

给定基元上的给定变体集中的当前选定变体。

## Examples

    // Get the currently selected variant in the variant set "shapes" on a "shape_shifter" primitive.string selected_variant = usd_variantselection(0, "/geo/shape_shifter", "shapes");
