---
title: chnumchan
order: 11
category:
  - houdini
---
    
## 描述

Returns the number of channels in the input specified.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chnumchan()
```

Uses `-1` for `opinput`

```c
int  chnumchan(int opinput)
```

Returns the number of channels in the input specified.

返回指定输入中的通道数。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入编号，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

If you specify `-1`, the function uses the current CHOP node or input `0` if
it is connected.

如果你指定-1，该函数使用当前的 CHOP 节点或输入 0（如果它被连接）。
