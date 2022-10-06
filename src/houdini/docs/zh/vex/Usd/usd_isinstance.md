---
title: usd_isinstance
order: 69
category:
  - houdini
---
    
## 描述

Checks if the primitive is an instance.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_isinstance(<stage>stage, string primpath)
```

This function checks whether the given primitive is an instance.

此函数检查给定基元是否是一个实例。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点（如 wrangle LOP）的上下文中运行时，此参数可以是一个整数，表示要从该阶段读取的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

Returns

1 if the primitive is an instance, and 0 otherwise.

如果基元是一个实例，则为 1，否则为 0。

## Examples

    // Check if the sphere primitive is an instance.int is_instance = usd_isinstance(0, "/geometry/sphere");
