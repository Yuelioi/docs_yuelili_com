---
title: isconnected
order: 21
category:
  - houdini
---
    
## 描述

Returns 1 if input_number is connected, or 0 if the input is not connected.

Context(s) | [chop](../contexts/chop.html)[ cop2](../contexts/cop2.html)[
sop](../contexts/sop.html)  
---|---

```c
int  isconnected(int opinput)
```

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

Returns

1 if input_number is connected, or 0 if the input is not connected.

如果 input_number 是连接的，则为 1；如果输入没有连接，则为 0。
