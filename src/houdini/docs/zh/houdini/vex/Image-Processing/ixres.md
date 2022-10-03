---
title: ixres
order: 25
category:
  - houdini
---
    
## 描述

Returns the X resolution of the specified input.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
int  ixres(int opinput)
```

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

Returns

The X resolution of the specified input.

指定输入的 X 分辨率。