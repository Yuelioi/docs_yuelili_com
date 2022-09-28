---
title: sprintf
order: 33
category:
  - houdini
---
    
## 描述

Formats a string like printf but returns the result as a string  
instead of printing it.

```c
string  sprintf(string format, ...)
```

Formats a string like [printf](printf.html "Prints values to the console which
started the VEX program.") but returns the result as astring instead of
printing it.

形成一个类似于 rintf 的字符串，但将结果作为一个

Tip

You can use this function pad a number (such as the frame number in a
filename) with zeros (similarly to the
[padzero](../../expressions/padzero.html "Returns a string padding a number to
a given length with zeros.") expression function) using a format such as

```c
sprintf("texture%04d.exr", @Frame)
```

.

字符串，而不是打印它。
