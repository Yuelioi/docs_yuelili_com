---
title: usd_iskind
order: 71
category:
  - houdini
---
    
## 描述

Checks if the primitive is of a given kind.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_iskind(<stage>stage, string primpath, string kind)
```

This function checks whether the given primitive is of a given kind, e.g.,
anassembly, component, etc.

此函数检查给定的基元是否属于给定的类型，例如，一个

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

组装、组件等。

`primpath`

The path to the primitive.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`kind`

The name of a kind to check.

通往基元的路径。

Returns

1 if the primitive is of a given kind, and 0 otherwise.

要检查的种类的名称。

## Examples

    // Check if the sphere primitive is of an assembly kind.int is_assembly = usd_iskind(0, "/geometry/sphere", "assembly");
