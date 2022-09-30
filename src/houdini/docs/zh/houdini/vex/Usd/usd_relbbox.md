---
title: usd_relbbox
order: 117
category:
  - houdini
---
    
## 描述

Returns the relative position of the point given with respect to the bounding
box of the geometry.

| Since | 18.0 |
| ----- | ---- |

`vector usd_relbbox(<stage>stage, string primpath, string purpose, vector position)`

Returns the relative position of the given point with respect to the bounding
box of the primitive.

返回给定点相对于基元边界盒的相对位置。

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

`purpose`

The primitive‘spurpose for which to use the bounding box (e.g., “render”).

使用边界框的基元的目的（例如，"渲染"）。

Returns

The relative position of the given point with respect to the bounding box of
the primitive.

给定点相对于基元的边界框的相对位置。

## Examples

    // Get the points relative position.vector pt = {1, 0, 0};vector rel_pt = usd_relbbox(0, "/src/sphere", "render", pt);
