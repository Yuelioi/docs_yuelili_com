---
title: usd_isstage
order: 77
category:
  - houdini
---
    
## 描述

Checks if the stage is valid.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_isstage(<stage>stage)
```

This function verifies whether a given input contains a valid USD stage. If
so, all other USD functions will be able to access it to perform queries and
actions. Otherwise, they will fail.

这个函数验证一个给定的输入是否包含一个有效的 USD 阶段。如果是，所有其他的 USD 函数将能够访问它来执行查询和操作。否则，它们将失败。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入编号（从 0 开始）。这个整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

Returns

1 if the stage is valid, and 0 otherwise.

如果该阶段是有效的，则为 1，否则为 0。

## Examples

    // Check if the first input has a valid stage.int is_valid_stage_on_first_input = usd_isstage(0);
