---
title: split
order: 31
category:
  - houdini
---
    
## 描述

Splits a string into tokens.

```c
string [] split(string s)
```

```c
string [] split(string s, string separators)
```

```c
string [] split(string s, string separators, int maxsplits)
```

Splits a string into tokens by removing separator characters from the
stringand creating an array entry for each substring bounded by separators.
When noseparator string is provided, the string is split on whitespace
(spaces, tab,and return).

通过从字符串中删除分隔符，将字符串分割成若干个标记。

The `maxsplits` option limits the number of times the string is split,this is
useful to peel off one token at a time from a larger string.

并为每个由分隔符限定的子串创建一个数组条目。当没有提供

Note

This differs from Python‘ssplit() in that it takes a list of separators,
not a single string to use as a separator.

分隔符时，字符串会在空白处（空格、tab,

Note

This operates more as a tokenize method than as a split method.In particular,
if you have repeated separators they will be mergedand only a single split
performed.

和回车）。
