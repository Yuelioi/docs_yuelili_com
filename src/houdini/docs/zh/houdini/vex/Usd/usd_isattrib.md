---
title: usd_isattrib
order: 64
category:
  - houdini
---
    
## 描述

Checks if the primitive has an attribute by the given name.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_isattrib(<stage>stage, string primpath, string name)
```

This function checks whether the given primitive has an attribute of a given
name.

此函数检查给定基元是否有一个给定名称的属性。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

Attribute name.

属性名称。

Returns

`1` if the primitive has the given attribute, or `0` otherwise.

如果基元具有给定的属性，则为 1，否则为 0。

## Examples

    // Check if the sphere has an attribute "some_attribute".int is_valid_attrib = usd_isattrib(0, "/geometry/sphere", "some_attribute");
