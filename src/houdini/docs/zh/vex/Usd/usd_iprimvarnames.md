---
title: usd_iprimvarnames
order: 54
category:
  - houdini
---
    
## 描述

Returns the names of the primvars available directly on the given USD
primitive or on USD primitive‘sancestor.

| Since | 19.0 |
| ----- | ---- |

```c
string [] usd_iprimvarnames(<stage>stage, string primpath)
```

This function returns the primvar names that are available directly on the
givenprimitive or are inherited from primitive‘sancestors.

此函数返回直接在给定基元上可用的或从基元的祖先继承的 primvar 名称。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

基元上直接可用的或从基元的祖先那里继承的。

`primpath`

The path to the primitive.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

Returns

String array containing the names of the primvars of the primitive and its
ancestors.

基元的路径。

## Examples

    // Get the primvar names from the primitive and its ancestors.string primvar_names[] = usd_iprimvarnames(0, "/geo/src_sphere");
