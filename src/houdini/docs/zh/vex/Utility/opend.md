---
title: opend
order: 9
category:
  - vex
---



Context(s)
[shading](../contexts/shading.html)

`void opend(int handle)`

Informs mantra that a long operation begun with [opstart](opstart.html "Start a long operation.") has completed. Pass in the value returned by [opstart](opstart.html "Start a long operation.").

```c
int op\_handle = opstart("Performing long operation");
perform\_long\_operation();
if (op\_handle >= 0)
 opend(op\_handle);

```



## See also

- [opstart](opstart.html)

|
interrupt

[opend](opend.html)

[opstart](opstart.html)

|
progress

[opend](opend.html)

[opstart](opstart.html)

|
statistics

[opend](opend.html)

[opstart](opstart.html)
