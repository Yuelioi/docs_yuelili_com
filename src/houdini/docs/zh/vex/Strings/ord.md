---
title: ord
order: 19
category:
  - houdini
---
    
## 描述

Converts an UTF8 string into a codepoint.

```c
int  ord(string value)
```

Returns the code point of the first UTF8 character in the given string.

返回给定字符串中第一个 UTF8 字符的码位。

If the prefix of the string isn‘t a valid UTF8 encoding, or is empty, -1 is
returned.

如果字符串的前缀不是一个有效的 UTF8 编码，或为空，则返回-1。

Overlong UTF8 encodings will return -1.

过长的 UTF8 编码将返回-1。
