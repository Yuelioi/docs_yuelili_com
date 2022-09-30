---
title: usd_iprimvartypename
order: 57
category:
  - houdini
---
    
## 描述

Returns the name of the primvar type found on the given primitive or its
ancestor.

| Since | 19.0 |
| ----- | ---- |

```c
string  usd_iprimvartypename(<stage>stage, string primpath, string name)
```

This function returns the type name of a primvar found directly on the given
primitive or inherited from primitive‘sancestor. The type name is taken
from the USD value type registry, e.g., “float”, “vector3d”, “double3[]()”,
etc.

此函数返回直接在给定基元上找到的或从基元的祖先继承的 primvar 的类型名称。类型名称取自 USD
值类型注册表，例如，"float"、"vector3d"、"double3 "等。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如一个 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`name`

Primvar name (without namespace).

Primvar 名称（不含命名空间）。

Returns

The primvar type name used in the value type registry.E.g., “float”,
“vector3d”, “double3[]()”, etc.

在值类型注册表中使用的 primvar 类型名称。 例如，"float"、"vector3d"、"double3"，等等。

## Examples

    // Get the type name of the primvar on cube or its ancestor..string type_name = usd_iprimvartypename(0, "/geo/cube", "primvar_name");
