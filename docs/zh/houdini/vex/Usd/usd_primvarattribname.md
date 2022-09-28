---
title: usd_primvarattribname
order: 103
category:
  - houdini
---
    
## 描述

Returns the namespaced attribute name for the given primvar.

| Since | 18.0 |
| ----- | ---- |

```c
string  usd_primvarattribname(<stage>stage, string name)
```

This function returns the namespaced attribute name corresponding to the given
primvar name.

此函数返回与给定的 primvar 名称相对应的命名空间属性名称。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从中读取阶段的输入编号（从 0
开始）。这个整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`name`

Primvar name (without namespace).

Primvar 名称（无命名空间）。

Returns

The namespaced name of an attribute corresponding to the given primvar name.

与给定的 primvar 名称相对应的属性的命名空间名称。

## Examples

    // Get the attribute name for the given primvar.string attrib_name = usd_primvarattribname(0, "some_primvar");int is_attrib = usd_isattrib(0, "/geo/sphere", attrib_name);
