---
title: usd_kind
order: 81
category:
  - houdini
---
    
## 描述

Returns the primitive‘skind.

| Since | 17.5 |
| ----- | ---- |

```c
string  usd_kind(<stage>stage, string primpath)
```

This function returns the given primitive‘skind, e.g., an assembly,
component, etc.

此函数返回给定的基元种类，例如，一个装配体、组件等。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

Returns

The kind of the given primitive.

给定基元的种类。

## Examples

    // Get the sphere primitive's kind.string kind = usd_kind(0, "/geo/sphere");
