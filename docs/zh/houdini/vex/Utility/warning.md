---
title: warning
order: 22
category:
  - houdini
---
    
## 描述

Reports a custom runtime VEX warning.

```c
void  warning(string format, ...)
```

Reports a custom runtime VEX warning. This uses the same format string syntax
as [printf](printf.html "Prints values to the console which started the VEX
program.").

报告一个自定义的运行时 VEX 警告。 它使用与 rintf 相同的格式字符串语法。

If something is so problematic that there is no acceptable fallback behavior,
it may be worth reporting an [error](error.html "Reports a custom runtime VEX
error."), instead of a warning.

如果某件事情很有问题，以至于没有可接受的后退行为，可能值得报告一个错误，而不是一个警告。

Note

It‘squite easy to accidentally report thousands of different warnings.

很容易不小心报告成千上万个不同的警告。

## Examples

    if (primintrinsic(0,"typeid",@primnum) != 1) {  warning("Primitives that aren't polygons are being ignored.");  return;}if (primintrinsic(0,"closed",@primnum) == 0 || @numvtx < 3) {  warning("Open or degenerate polygons are being ignored.");  return;}float minimumValue = chf("min");float maximumValue = chf("max");if (minimumValue > maximumValue) {  warning("Minimum (%f) can't be greater than maximum (%f); replacing minimum with maximum.", minimumValue, maximumValue);  minimumValue = maximumValue;}
