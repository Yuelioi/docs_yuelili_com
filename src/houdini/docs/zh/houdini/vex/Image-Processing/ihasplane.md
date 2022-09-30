---
title: ihasplane
order: 17
category:
  - houdini
---
    
## 描述

Returns 1 if the specified input has a plane named `planename`.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
int  ihasplane(int opinput, string planename)
```

Returns 1 if the specified input has a plane named `planename`. Inputnumbers
start at 0.

如果指定的输入有一个名为 planename 的平面，返回 1。输入

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

数字从 0 开始。
