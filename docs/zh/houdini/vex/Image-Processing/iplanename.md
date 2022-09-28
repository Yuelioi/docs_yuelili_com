---
title: iplanename
order: 20
category:
  - houdini
---
    
## 描述

Returns the name of the plane specified by the planeindex of the given input

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
string  iplanename(int opinput, int planeindex)
```

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入编号，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

Returns

The name of the plane specified by the planeindex of the given input (e.g.
“C”, “A”).

由给定输入的 planeindex 指定的平面名称（例如："C"，"A"）。
