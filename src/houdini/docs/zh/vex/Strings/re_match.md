---
title: re_match
order: 27
category:
  - houdini
---
    
## 描述

Returns 1 if the entire input string matches the expression

```c
int  re_match(string regex, string input)
```

Returns `1` if the entire `input` string matches the `regex`, or `0` if it
doesn‘t match.

如果整个输入字符串与之匹配，则返回 1，如果不匹配，则返回 0。
