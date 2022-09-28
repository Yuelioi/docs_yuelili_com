---
title: encodeparm
order: 9
category:
  - houdini
---
    
## 描述

Encodes any string into a valid node parameter name.

| Since | 18.0 |
| ----- | ---- |

```c
string  encodeparm(string str)
```

Houdini parameter names are only allowed to contain letters, numbers,
hashcharacters (for multiparms), and underscores, and must not begin with
anumber. This function takes any string, and encodes it into a string
thatobeys these restrictions. The original string can be recovered using
the`decodeparm` function.A string that already obeys the rules is
returnedunmodified.

胡迪尼参数名称只允许包含字母、数字、哈希字符（对于多参数），并且不能以下划线开头。

One exception to this rule is that a string starting with `xn__` will
beencoded even if it is already a valid parameter name. This is because
`xn__`is the prefix used to identify an encoded string. In this case, an
additional`xn__` prefix will be added. This means a string can be encoded any
number oftimes, then decoded the same number of times to always return to the
originalstring, regardless of its contents.

字符（用于多参数）和下划线，并且不得以数字开头。
