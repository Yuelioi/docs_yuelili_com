---
title: usd_relationshipnames
order: 115
category:
  - houdini
---
    
## 描述

Returns the names of the relationships available on the primitive.

| Since | 18.0 |
| ----- | ---- |

```c
string [] usd_relationshipnames(<stage>stage, string primpath)
```

This function returns the relationship names that are available on the given
primitive.

此函数返回给定基元上可用的关系名称。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

基元的路径。

Returns

String array containing the names of the primitive‘srelationships.

包含基元关系名称的字符串数组。

## Examples

    // Get the relationship names from the primitive.string relationship_names[] = usd_relationshipnames(0, "/geo/cube");
