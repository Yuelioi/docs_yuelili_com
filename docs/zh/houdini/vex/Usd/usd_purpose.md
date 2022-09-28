---
title: usd_purpose
order: 113
category:
  - houdini
---
    
## 描述

Returns the primitive‘spurpose.

| Since | 17.5 |
| ----- | ---- |

```c
string  usd_purpose(<stage>stage, string primpath)
```

This function returns the given primitive‘spurpose, e.g., “default”,
“render”, “proxy”, “guide”, etc.

此函数返回给定基元的目的，例如，"默认"、"渲染"、"代理"、"引导 "等。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要从中读取阶段的输入编号（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

Returns

The purpose of the given primitive.

给定基元的目的。

## Examples

    // Get the sphere primitive's purpose.string purpose = usd_purpose(0, "/geo/sphere");
