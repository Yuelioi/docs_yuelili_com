---
title: iend
order: 15
category:
  - houdini
---
    
## 描述

Returns the last frame of the specified input.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
int  iend(int opinput)
```

Returns the last frame of the specified input.

返回指定输入的最后一帧。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入编号，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。
