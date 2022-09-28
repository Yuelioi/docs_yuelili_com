---
title: usd_pointinstance_relbbox
order: 101
category:
  - houdini
---
    
## 描述

Returns the relative position of the point given with respect to the bounding
box of the geometry.

| Since | 18.0 |
| ----- | ---- |

`vector usd_pointinstance_relbbox(<stage>stage, string primpath, int instance_index, string purpose, vector position)`

Returns the relative position of the given point with respect to the bounding
box of the instance in a point instancer.

返回给定的点相对于点实例的边界框的相对位置，在点实例器中。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

```c
instance_index
```

The index of the instance whose bounding box to use.

要使用其边界盒的实例的索引。

`purpose`

The primitive‘spurpose for which to use the bounding box (e.g., “render”).

要使用边界框的基元的目的（例如，"渲染"）。

Returns

The relative position of the given point with respect to the bounding box of
the primitive.

给定的点相对于基元的边界框的相对位置。

## Examples

    // Get the point's position relative to the bounding box of the first instance.vector pt = {1, 0, 0};vector rel_pt = usd_pointinstance_relbbox(0, "/src/instanced_spheres", 0, "render", pt);
