---
title: replace
order: 23
category:
  - houdini
---
    
## 描述

Replaces occurrences of a substring.

```c
string  replace(string str, string old, string new)
```

```c
string  replace(string str, string old, string new, int count)
```

Returns a copy of the string with all occurrences of the string `old` replaced
with the string `new`.

返回一个字符串的副本，所有出现的字符串 old 都被替换成了字符串 new。

` count`

If specified, only the first `count` occurrences are replaced.

如果指定，只替换第一个 countoccurrences。

## Examples

    string str = "abcdef abcdef abcdef";// Returns "abcghi abcghi abcghi"string new_str = replace(str, "def", "ghi");// Replaces up to 2 occurrences of the string "def".// Returns "abcghi abcghi abcdef"new_str = replace(str, "def", "ghi", 2);
