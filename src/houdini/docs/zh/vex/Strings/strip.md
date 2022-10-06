---
title: strip
order: 35
category:
  - houdini
---
    
## 描述

Strips leading and trailing whitespace from a string.

```c
string  strip(string value)
```

```c
string  strip(string value, string whitespace)
```

Returns a string with the leading and trailing whitespace removed.Ifwhitespace
is provided, it is a string of characters that will be stripped.

返回一个去除前导和尾部空白的字符串。 如果

This is also equivalent of doing both [rstrip](rstrip.html "Strips trailing
whitespace from a string.") and [lstrip](lstrip.html "Strips leading
whitespace from a string.") on a string.

提供了空白，它是一个将被剥离的字符的字符串。
