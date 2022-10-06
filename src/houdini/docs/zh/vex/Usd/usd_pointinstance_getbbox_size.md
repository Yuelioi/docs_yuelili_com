---
title: usd_pointinstance_getbbox_size
order: 100
category:
  - houdini
---
    
## 描述

Returns the size of the bounding box for the instance inside a point instancer
primitive.

| Since | 18.0 |
| ----- | ---- |

`vector usd_pointinstance_getbbox_size(<stage>stage, string primpath, int instance_index, string purpose)`

Computes the largest position of the bounding box for the instance geometry.

计算实例几何的边界框的最大位置。

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

The index of the instance whose bounding box to return.

要返回其边界盒的实例的索引。

`purpose`

The primitive‘spurpose for which to return the bounding box size (e.g.,
“render”).

要返回边界框尺寸的基元的目的（例如，"渲染"）。

Returns

The size of the instance‘sbounding box.

实例的边界框的大小。

## Examples

    // Get the size of the first instance's boundsng box.vector size = usd_pointinstance_getbbox_size(0, "/src/instanced_spheres", 0, "render");
