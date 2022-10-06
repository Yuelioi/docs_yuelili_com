---
title: usd_attribtypename
order: 20
category:
  - houdini
---
    
## 描述

Returns the name of the attribute type.

| Since | 17.5 |
| ----- | ---- |

```c
string  usd_attribtypename(<stage>stage, string primpath, string name)
```

This function returns the attribute type name, as it is known to the USD value
type registry. E.g., “float”, “vector3d”, “double3[]()”, etc.

该函数返回属性类型名称，因为它是 USD 值类型注册表所知道的。例如，"float"、"vector3d"、"double3"，等等。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

Attribute name.

属性名称。

Returns

The attribute type name used in the value type registry.E.g., “float”,
“vector3d”, “double3[]()”, etc.

在值类型注册表中使用的属性类型名称。 例如，"float"、"vector3d"、"double3"，等等。

## Examples

    // Get the type name of the attribute.string type_name = usd_attribtypename(0, "/geo/cube", "attribute_name");
