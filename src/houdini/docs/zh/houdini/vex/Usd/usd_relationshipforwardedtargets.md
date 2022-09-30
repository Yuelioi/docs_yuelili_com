---
title: usd_relationshipforwardedtargets
order: 114
category:
  - houdini
---
    
## 描述

Obtains the relationship forwarded targets.

| Since | 18.0 |
| ----- | ---- |

`string [] usd_relationshipforwardedtargets(<stage>stage, string primpath, string name)`

This function returns the list of forwarded targets of a given
relationship.This is a convenience function to expand all the nested
relationships, since a target in a relationship can be another relationship.

这个函数返回一个给定关系的转发目标列表。 这是一个方便的函数，用于展开所有的嵌套关系，因为一个关系中的目标可以是另一个关系。

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

The relationship name.

关系名称。

Returns

List of forwarded targets in a relationship.

关系中的转发目标的列表。

## Examples

    // Get the list of forwarded targets in cube's "some_relationship" relationship.string targets[] = usd_relationshipforwardedtargets(0, "/geo/cube", "some_relationship");
