---
title: usd_pointinstance_getbbox
order: 96
category:
  - houdini
---
    
## 描述

Sets two vectors to the minimum and maximum corners of the bounding box for
the given instance inside point instancer.

| Since | 18.0 |
| ----- | ---- |

`int usd_pointinstance_getbbox(<stage>stage, string primpath, int instance_index, string purpose, vector &min, vector &max)`

This function returns an axis-aligned bounding box for the given instance. The
point corresponding to the minimum corner of the bounding box will be returned
in min, while the maximum will be in max. Always returns 1.

这个函数为给定的实例返回一个轴对齐的包围盒。包围盒的最小角所对应的点将以 min 的形式返回，而最大角将以 max 的形式返回。总是返回 1。

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

```c
instance_index
```

The index of the instance whose bounding box to return.

要返回其边界盒的实例的索引。

`purpose`

The primitive‘spurpose for which to return the bounding box (e.g.,
“render”).

要返回边界框的基元的目的（例如，"渲染"）。

Returns

Always 1.

总是 1。

## Examples

    // Get the bounding box of the first instanced sphere.vector min, max;usd_pointinstance_getbbox(0, "/src/instanced_spheres", 0, "render", min, max);
