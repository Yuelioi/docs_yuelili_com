---
title: split
order: 35
category:
  - vex
---

`string [] split(string s)`

`string [] split(string s, string separators)`

`string [] split(string s, string separators, int maxsplits)`

通过从字符串中移除分隔符，并为每个由分隔符限定的子串创建一个数组条目，将字符串分割成标记。当没有提供分隔符时，字符串会在空白处（空格、制表符和回车符）进行分割。

maxsplits "选项限制了字符串被分割的次数，这对于从一个较大的字符串中一次剥离一个标记很有用。

::: info Note

这与 Python 的 split()不同，它需要一个分隔符的列表，而不是一个单独的字符串作为分隔符使用。

::: info Note

这更像是一个标记化的方法，而不是一个分割的方法。特别是，如果你有重复的分隔符，它们将被合并，只进行一次分割。

绳子

[atof](atof.html)

[atoi](atoi.html)

[concat](concat.html)

[decode](decode.html)

[decodeattrib](decodeattrib.html)

[decodeparm](decodeparm.html)

[decodeutf8](decodeutf8.html)

[encode](encode.html)

[encodeattrib](encodeattrib.html)

[encodeparm](encodeparm.html)

[encodeutf8](encodeutf8.html)

[error](error.html)

[expand_udim](expand_udim.html)

[find](find.html)

[has_udim](has_udim.html)

[insert](insert.html)

[isvalidindex](isvalidindex.html)

[itoa](itoa.html)

[join](join.html)

[lstrip](lstrip.html)

[makevalidvarname](makevalidvarname.html)

[match](match.html)

[pluralize](pluralize.html)

[print_once](print_once.html)

[printf](printf.html)

[relativepath](relativepath.html)

[replace](replace.html)

[replace_match](replace_match.html)

[rstrip](rstrip.html)

[split](split.html)

[splitpath](splitpath.html)

[sprintf](sprintf.html)

[strip](strip.html)

[strlen](strlen.html)

[texprintf](texprintf.html)

[warning](warning.html)
