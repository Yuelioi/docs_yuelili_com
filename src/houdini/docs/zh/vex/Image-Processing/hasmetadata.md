---
title: hasmetadata
order: 11
category:
  - houdini
---
    
## 描述

Queries if metadata exists on a composite operator.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
int  hasmetadata(int opinput, string name)
```

This function checks if metadata named `name` exists on the COP attached tothe
VEX COP‘sinput `opinput`. If it exists then 1 is returned, otherwise 0.

这个函数检查是否有元数据 namednameexists 在 COP 上连接到

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

VEX COPâs inputopinput。如果它存在，则返回 1，否则返回 0。

`name`

The name of the metadata to check.

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。
