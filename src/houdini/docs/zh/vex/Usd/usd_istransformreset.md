---
title: usd_istransformreset
order: 78
category:
  - houdini
---
    
## 描述

Checks if the primitive transform is reset

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_istransformreset(<stage>stage, string primpath)
```

This function checks if the primitive transform is reset, i.e., whether it
uses the world co-ordinate system as the initial space, or whether it inherits
the space transformation from the parent (default).

此函数检查原始变换是否被重置，即是否使用世界坐标系作为初始空间，或是否从父级继承空间变换（默认）。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要从中读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

Returns

`1` if the primitive transform is reset (i.e., the primitive uses the world
space), or `0` if it inherits the space from the parent (the default
behavior).

如果基元转换被重置（即基元使用世界空间），则为 1；如果从父代继承空间，则为 0（默认行为）。

## Examples

    // Check if the cube's transform is reset.int is_xform_reset = usd_istransformreset(1, "/geo/cube");
