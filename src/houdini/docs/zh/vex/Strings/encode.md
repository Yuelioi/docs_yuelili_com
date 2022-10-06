---
title: encode
order: 7
category:
  - houdini
---
    
## 描述

Encodes any string into a valid variable name.

| Since | 17.5 |
| ----- | ---- |

```c
string  encode(string str)
```

Houdini VEX variable names are only allowed to contain letters, numbers,
andunderscores, and must not begin with a number. This function takes any
string,and encodes it into a string that obeys these restrictions. The
originalstring can be recovered using the `decode` function.A string that
alreadyobeys the rules is returned unmodified.

Houdini VEX 的变量名只允许包含字母、数字和下划线。

One exception to this rule is that a string starting with `xn__` will
beencoded even if it is already a valid variable name. This is because
`xn__`is the prefix used to identify an encoded string. In this case, an
additional`xn__` prefix will be added. This means a string can be encoded any
number oftimes, then decoded the same number of times to always return to the
originalstring, regardless of its contents.

和下划线，并且不能以数字开头。这个函数接收任何字符串。
