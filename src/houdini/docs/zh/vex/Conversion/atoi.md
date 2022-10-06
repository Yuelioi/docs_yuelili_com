---
title: atoi
order: 2
category:
  - houdini
---
    
## 描述

Converts a string to an integer.

```c
int  atoi(string str)
```

```c
int  atoi(string str, int base)
```

Converts the string argument to an integer value. If a base between 2 and 36
inclusive is supplied, the string is converted in base `base`.

将字符串参数转换为一个整数值。如果提供了 2 到 36 之间的基数，那么字符串将以基数转换。

- This function ignores whitespace around the number.

这个函数忽略了数字周围的空白。

- Returns `0` if the string does not contain a number, or if an invalid base is specified.

如果字符串不包含数字，或者指定了一个无效的基数，则返回 0。

- The string can contain exponential notation (for example `"1.25e+5"`).

字符串可以包含指数符号（例如 "1.25e+5"）。
