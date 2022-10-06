---
title: usd_isarrayiprimvar
order: 61
category:
  - houdini
---
    
## 描述

Checks if there is an array primvar directly on the USD primitive or on USD
primitive‘sancestor.

| Since | 19.0 |
| ----- | ---- |

```c
int  usd_isarrayiprimvar(<stage>stage, string primpath, string name)
```

This function checks whether the primvar is an array, if it‘sfound directly
on the given primitive or is inherited from primitive‘sancestor.

此函数检查 primvar 是否是一个数组，如果它直接在给定的基元上找到，或者是从基元的祖先继承的。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`name`

Primvar name (without namespace).

Primvar 名称（不含名称空间）。

Returns

`1` if the primvar exists and is an array, or `0` otherwise.

如果 primvar 存在并且是一个数组，则为 1，否则为 0。

## Examples

    // Check if primvar "some_primvar" is an array.int is_array = usd_isarrayiprimvar(0, "/geometry/sphere", "some_primvar");
