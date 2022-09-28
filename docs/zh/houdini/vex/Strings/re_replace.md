---
title: re_replace
order: 28
category:
  - houdini
---
    
## 描述

Replaces instances of regex_find with regex_replace

`string re_replace(string regex, string replacement, string input, int maxreplace=0)`

Returns a string where each non-overlapping match of `regex` is replaced with
`replacement`. The `replacement` string can reference captured groups from the
regex using `$1` syntax.

返回一个字符串，其中 regex 的每个非重叠匹配都被替换成 replacement。替换字符串可以使用$1 语法引用从 regex 中捕获的组。

If `maxreplace` is given and not 0, it specifies the maximum number of
replacements to do.

如果给出 maxreplace 而不是 0，它指定了要做的最大替换数量。
