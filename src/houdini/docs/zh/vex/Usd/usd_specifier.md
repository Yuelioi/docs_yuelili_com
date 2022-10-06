---
title: usd_specifier
order: 141
category:
  - houdini
---
    
## 描述

Returns the primitive‘sspecifier.

| Since | 19.0 |
| ----- | ---- |

```c
string  usd_specifier(<stage>stage, string primpath)
```

This function returns the given primitive‘sspecifier, e.g., “def”, “class”,
etc.

此函数返回给定的基元指定器，例如，"def"、"class "等。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

Returns

The specifier of the given primitive.

给定基元的指定器。

## Examples

    // Get the sphere primitive's specifier.string specifier = usd_specifier(0, "/geo/sphere");
