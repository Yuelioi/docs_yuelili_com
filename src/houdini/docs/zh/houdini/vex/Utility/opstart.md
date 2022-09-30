---
title: opstart
order: 9
category:
  - houdini
---
    
## 描述

Start a long operation.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  opstart(string message)
```

Inform mantra about the start of a long operation (operation start). The
string argument is passed to mantra and may be displayed in the IPR viewer.

通知 mantra 关于一个长操作的开始（操作开始）。 字符串参数被传递给 mantra，可以在 IPR 查看器中显示。

The function will return a non-negative integer when successfully started.

该函数在成功启动时将返回一个非负的整数。

The integer returned should be passed to `opend()` at the completion of the
long operation.

返回的整数应在长操作完成时传递给 opend()。

    int started = opstart("Performing long operation");perform_long_operation();if (started >= 0)opend(started);
