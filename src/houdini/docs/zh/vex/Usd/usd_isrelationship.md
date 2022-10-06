---
title: usd_isrelationship
order: 76
category:
  - houdini
---
    
## 描述

Checks if the primitive has a relationship by the given name.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_isrelationship(<stage>stage, string primpath, string name)
```

This function checks whether the primitive has a relationship of a given name.

此函数检查基元是否有一个给定名称的关系。

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

The relationship name.

关系名称。

Returns

`1` if the primitive has such a relationship, or `0` otherwise.

如果基元有这种关系，则为 1，否则为 0。

## Examples

    // Check if the cube has a relationship "some_relationship".int is_valid_relationship = usd_isrelationship(0, "/geo/cube", "some_relationship");
