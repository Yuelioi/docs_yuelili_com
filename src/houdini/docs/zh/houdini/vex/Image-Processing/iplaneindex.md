---
title: iplaneindex
order: 19
category:
  - houdini
---
    
## 描述

Returns the index of the plane named 'planename' in the specified input.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
int  iplaneindex(int opinput, string planename)
```

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入编号，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

Returns

The index of the plane named 'planename' in the specified input.

指定输入中名为'planename'的平面的索引。
