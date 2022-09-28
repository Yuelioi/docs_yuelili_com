---
title: usd_variants
order: 148
category:
  - houdini
---
    
## 描述

Returns the variants belonging to the given variant set on a primitive.

| Since | 17.5 |
| ----- | ---- |

```c
string [] usd_variants(<stage>stage, string primpath, string variantset)
```

This function returns the variants available in the given variant set.

该函数返回给定变体集中的可用变体。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`variantset`

The variant set name.

变体集名称。

Returns

The names of the variants available in a given variant set on a given
primitive.

特定基元上的特定变体集中可用的变体的名称。

## Examples

    // Get the variants in the variant set "shapes" on a "shape_shifter" primitive.string variants[] = usd_variants(0, "/geo/shape_shifter", "shapes");
