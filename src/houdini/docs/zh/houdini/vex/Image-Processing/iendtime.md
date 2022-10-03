---
title: iendtime
order: 16
category:
  - houdini
---
    
## 描述

Returns the end time of the specified input.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
float  iendtime(int opinput)
```

Returns the end time of the specified input.

返回指定输入的结束时间。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入编号，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。