---
title: rstrip
order: 30
category:
  - houdini
---
    
## 描述

Strips trailing whitespace from a string.

```c
string  rstrip(string value)
```

```c
string  rstrip(string value, string whitespace)
```

Returns a string with the trailing whitespace removed.Ifwhitespace is
provided, it is a string of characters that will be stripped.

返回一个去除尾部空白的字符串。 如果
