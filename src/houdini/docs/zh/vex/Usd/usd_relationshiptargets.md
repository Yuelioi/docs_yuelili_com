---
title: usd_relationshiptargets
order: 116
category:
  - houdini
---
    
## 描述

Obtains the relationship targets.

| Since | 18.0 |
| ----- | ---- |

`string [] usd_relationshiptargets(<stage>stage, string primpath, string name)`

This function returns the list of targets of a given relationship.

这个函数返回一个给定关系的目标列表。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

The relationship name.

关系名称。

Returns

List of targets in a relationship.

关系中的目标列表。

## Examples

    // Get the list of targets in cube's "some_relationship" relationship.string targets[] = usd_relationshiptargets(0, "/geo/cube", "some_relationship");
