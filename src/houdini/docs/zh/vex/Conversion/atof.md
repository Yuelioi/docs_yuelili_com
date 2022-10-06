---
title: atof
order: 1
category:
  - houdini
---
    
## 描述

Converts a string to a float.

```c
float  atof(string str)
```

Converts a string to a floating point value.

将一个字符串转换为一个浮点值。

- This function ignores whitespace around the number.

该函数忽略了数字周围的空白。

- Returns `0.0` if the string does not contain a number.

如果字符串不包含数字，则返回 0.0。

- The string can contain exponential notation (for example `"1.25e+5"`).

字符串可以包含指数符号（例如 "1.25e+5"）。
