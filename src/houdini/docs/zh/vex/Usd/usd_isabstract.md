---
title: usd_isabstract
order: 58
category:
  - houdini
---
    
## 描述

Checks if the primitive is abstract.

| Since | 19.0 |
| ----- | ---- |

```c
int  usd_isabstract(<stage>stage, string primpath)
```

This function checks whether the given primitive is abstract or defined.

此函数检查给定基元是否是抽象的或定义的。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点（如 wrangle LOP）的上下文中运行时，此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

Returns

1 if the primitive is abstract, and 0 otherwise.

如果基元是抽象的，则为 1，否则为 0。

## Examples

    // Check if the sphere primitive is abstract.int is_abstract = usd_isabstract(0, "/geometry/sphere");
