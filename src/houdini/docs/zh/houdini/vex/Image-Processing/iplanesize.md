---
title: iplanesize
order: 21
category:
  - houdini
---
    
## 描述

Returns the number of components in the plane named `planename` in  
the specified input.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
int  iplanesize(int opinput, int planeindex)
```

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入编号，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

Returns

The number of components in the plane named `planename` in the specified
input.

在指定的输入中，名为 planename 的平面中的组件数量。
