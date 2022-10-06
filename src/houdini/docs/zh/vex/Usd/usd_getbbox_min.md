---
title: usd_getbbox_min
order: 42
category:
  - houdini
---
    
## 描述

Returns the minimum of the bounding box for the primitive.

| Since | 18.0 |
| ----- | ---- |

```c
vector  usd_getbbox_min(<stage>stage, string primpath, string purpose)
```

Computes the minimum of the bounding box for the geometry.

计算几何体的包围盒的最小值。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`purpose`

The primitive‘spurpose for which to return the bounding box (e.g.,
“render”).

基元的目的，用于返回边界框（例如，"渲染"）。

Returns

The minimum point of the primitive‘sbounding box.

基元边界框的最小点。

## Examples

    // Get the sphere's bounding box.vector min = usd_getbbox_min(0, "/src/sphere", "render");
