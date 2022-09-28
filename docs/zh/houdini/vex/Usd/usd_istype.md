---
title: usd_istype
order: 79
category:
  - houdini
---
    
## 描述

Checks if the primitive is of a given type.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_istype(<stage>stage, string primpath, string type)
```

This function checks whether the given primitive is of a given type or
derivesfrom a given type, e.g., an Cube, UsdGeomBoundable, etc.

此函数检查给定的基元是否属于一个给定的类型或从一个给定的类型派生出来的

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

类型，例如立方体、UsdGeomBoundable 等。

`primpath`

The path to the primitive.

在节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要从中读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`type`

The name or an alias of a type to check.

通往基元的路径。

Returns

1 if the primitive is of a given type, and 0 otherwise.

要检查的类型的名称或别名。

## Examples

    // Check if the primitive is a Cube and is boundableint is_cube_by_alias   = usd_istype(0, "/geo/cube", "Cube");int is_cube_by_name   = usd_istype(0, "/geo/cube", "UsdGeomCube");int is_boundable_by_name = usd_istype(0, "/geo/cube", "UsdGeomBoundable");
