---
title: usd_isprim
order: 74
category:
  - houdini
---
    
## 描述

Checks if the path refers to a valid primitive.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_isprim(<stage>stage, string primpath)
```

This function checks whether the path points to a valid USD primitive.

此函数检查路径是否指向一个有效的 USD 基元。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点（如 wrangle LOP）的上下文中运行时，此参数可以是一个整数，代表要从该阶段读取的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

Returns

1 if the primitive at the given path is valid, and 0 otherwise.

如果给定路径上的基元是有效的，则为 1，否则为 0。

## Examples

    // Check if the stage coming on the first input has a sphere primitive // at scene graph location "/geometry/sphere".int is_valid_primitive = usd_isprim(0, "/geometry/sphere");
