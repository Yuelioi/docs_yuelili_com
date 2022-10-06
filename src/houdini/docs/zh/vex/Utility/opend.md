---
title: opend
order: 8
category:
  - houdini
---
    
## 描述

Ends a long operation.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
void  opend(int handle)
```

Informs mantra that a long operation begun with [opstart](opstart.html "Start
a long operation.") has completed. Pass in the value returned by
[opstart](opstart.html "Start a long operation.").

通知 mantra，由 opstar 开始的长操作已经完成。传入 opstart 返回的值。

    int op_handle = opstart("Performing long operation");perform_long_operation();if (op_handle >= 0)  opend(op_handle);
