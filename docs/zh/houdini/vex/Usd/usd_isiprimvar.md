---
title: usd_isiprimvar
order: 70
category:
  - houdini
---
    
## 描述

Checks if the primitive or its ancestor has a primvar of the given name.

| Since | 19.0 |
| ----- | ---- |

```c
int  usd_isiprimvar(<stage>stage, string primpath, string name)
```

This function checks whether the primitive or its ancestor has a primvar of
thegiven name.

此函数检查基元或其祖先是否有一个给定名称的 primvar。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

给定名称的 primvar。

`primpath`

The path to the primitive.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`name`

Primvar name (without namespace).

通向基元的路径。

Returns

`1` if the primvar exists directly on the given primitive or on its ancestor,
or `0` otherwise.

Primvar 名称（不含名称空间）。

## Examples

    // Check if the sphere primitive or its ancestor has a primvar "some_primvar".int is_primvar = usd_isiprimvar(0, "/geometry/sphere", "some_primvar");
