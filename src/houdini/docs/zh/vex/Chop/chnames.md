---
title: chnames
order: 10
category:
  - houdini
---
    
## 描述

Returns all the CHOP channel names of a given CHOP input.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
string [] chnames()
```

Uses `-1` as the `opinput`.

使用-1 作为 opinput。

```c
string [] chnames(int opinput)
```

Returns an array of channel names in the given input.

返回给定输入中的通道名称数组。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

从 0 开始读取的输入编号。例如，第一个输入是 0，第二个输入是 1，以此类推。

If you specify `-1`, the function uses the current CHOP node or input `0` if
it is connected.

如果你指定了 1，该函数使用当前的 CHOP 节点或输入 0（如果它被连接）。
