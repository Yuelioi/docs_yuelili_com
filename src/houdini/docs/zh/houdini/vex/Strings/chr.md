---
title: chr
order: 2
category:
  - houdini
---
    
## 描述

Converts an unicode codepoint to a UTF8 string.

```c
string  chr(int value)
```

Returns a string encoding the giving unicode codepoint as a UTF8
value.Forvalues less than 128, this is a one-byte string of that value.Higher
valueswill produce multiple byte strings.

返回一个编码为 UTF8 值的字符串，给定的 unicode 编码点。 对于

If the given code point isn‘t a valid codepoint, an empty string is
returned.

小于 128 的值，这是该值的一个字节的字符串。 更高的值
