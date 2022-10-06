---
title: usd_haspayload
order: 47
category:
  - houdini
---
    
## 描述

Checks if the primitive adheres to the given API.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_haspayload(<stage>stage, string primpath)
```

Returns true if the primitive has payload.

如果基元有有效载荷，则返回 true。

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

1 if the primitive has payload, or 0 otherwise.

如果基元有有效载荷，则为 1，否则为 0。

## Examples

    int has_payload = usd_haspayload(0, "/geo/sphere" );
