---
title: opend
order: 9
category:
  - houdini
---

## Description

Context(s) [shading](../contexts/shading.html)

`void opend(int handle)`

Informs mantra that a long operation begun with [opstart](opstart.html "Start
a long operation.") has completed. Pass in the value returned by
[opstart](opstart.html "Start a long operation.").

```c
int op_handle = opstart("Performing long operation");
perform_long_operation(); if (op_handle >= 0)  opend(op_handle);
```

## See also

- [opstart](opstart.html)

### interrupt

[opend](opend.html)

[opstart](opstart.html)

### progress

[opend](opend.html)

[opstart](opstart.html)

### statistics

[opend](opend.html)

[opstart](opstart.html)
