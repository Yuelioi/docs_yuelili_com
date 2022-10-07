---
title: re_replace
order: 28
category:
  - vex
---

`string re\_replace(string regex, string replacement, string input, int maxreplace=0)`

返回一个字符串，其中每个非重叠匹配的`regex`被替换成`replacement`。替换 "字符串可以使用"$1 "语法引用从 regex 中捕获的组。

如果 "maxreplace "被给定而不是 0，它指定了要做的最大替换次数。

## See also

- [re_match](re_match.html)
- [re_find](re_find.html)
- [re_findall](re_findall.html)
- [re_split](re_split.html)
