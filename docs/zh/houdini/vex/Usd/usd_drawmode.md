---
title: usd_drawmode
order: 33
category:
  - houdini
---
    
## 描述

Returns the primitive‘sdraw mode.

| Since | 17.5 |
| ----- | ---- |

```c
string  usd_drawmode(<stage>stage, string primpath)
```

This function returns the given primitive‘sdraw mode, eg, “default”,
“origin”, “bounds”, etc.

此函数返回给定基元的绘制模式，例如，"默认"、"原点"、"边界 "等。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点（如 wrangle LOP）的上下文中运行时，此参数可以是一个整数，代表要从该阶段读取的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

基元的路径。

Returns

The draw mode of the given primitive.

给定基元的绘制模式。

## Examples

    // Get the cube's draw mode, eg, "default", "bounds", etc.string draw_mode = usd_drawmode(0, "/geo/cube");
