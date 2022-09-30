---
title: encodeattrib
order: 8
category:
  - houdini
---
    
## 描述

Encodes any string into a valid geometry attribute name.

| Since | 18.0 |
| ----- | ---- |

```c
string  encodeattrib(string str)
```

Houdini geometry attributes and group names are only allowed to
containletters, numbers, and underscores, and must not begin with a number.
Thisfunction takes any string, and encodes it into a string that obeys
theserestrictions. The original string can be recovered using the
`decodeattrib`function.A string that already obeys the rules is returned
unmodified.

Houdini 几何属性和组的名称只允许包含

One exception to this rule is that a string starting with `xn__` will
beencoded even if it is already a valid attribute name. This is because
`xn__`is the prefix used to identify an encoded string. In this case, an
additional`xn__` prefix will be added. This means a string can be encoded any
number oftimes, then decoded the same number of times to always return to the
originalstring, regardless of its contents.

字母、数字和下划线，并且不能以数字开头。这个
