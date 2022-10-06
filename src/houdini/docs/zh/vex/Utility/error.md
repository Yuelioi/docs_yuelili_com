---
title: error
order: 3
category:
  - houdini
---
    
## 描述

Reports a custom runtime VEX error.

```c
void  error(string format, ...)
```

Reports a custom runtime VEX error.This uses the same format string syntax as
[printf](printf.html "Prints values to the console which started the VEX
program.").

报告一个自定义的运行时 VEX 错误。 这使用了相同的格式字符串语法 asrintf。

If something can still be done as an acceptable fallback, instead of outright
failing,it may be worth reporting a [warning](warning.html "Reports a custom
runtime VEX warning."), instead of an error.

如果有些事情仍然可以作为一个可接受的后退，而不是直接失败。

## Examples

    if (!pointattribtype(0,chs("nameattrib")) != 2) {  error("Name attribute %s must be a string attribute!", chs("nameattrib"));  return;}if (chf("distance") < 0) {  error("")}float minimumValue = chf("min");float maximumValue = chf("max");if (minimumValue >= maximumValue) {  error("Minimum (%f) must be strictly less than maximum (%f)! It's unclear what should be done.", minimumValue, maximumValue);  return;}
