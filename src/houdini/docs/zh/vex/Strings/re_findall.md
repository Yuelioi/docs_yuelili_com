---
title: re_findall
order: 26
category:
  - houdini
---
    
## 描述

Finds all instances of the given regular expression in the string

```c
string [] re_findall(string regex, string input)
```

```c
string [] re_findall(string regex, string input, int start)
```

```c
string [] re_findall(string regex, string input, int start, int end)
```

Returns an array of all strings that match the entire `regex` expression (no
capture groups).

返回符合 entiregexexpression 的所有字符串的数组（没有捕获组）。
