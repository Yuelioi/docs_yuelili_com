---
title: find
order: 14
category:
  - vex
---

`int find(string haystack, string needle)`

`int find(string haystack, string needle, int start)`

`int find(string haystack, string needle, int start, int end)`

返回`needle`字符串在`haystack`字符串中第一次出现的位置。你可以将结果限制在从`start'位置开始或之后，以及从`end'位置开始或之前的第一个子串。

你可以通过在每次迭代时将 "start "设置为上一次匹配的终点来找到循环中的每一次出现。

如果没有找到子串，则返回一个负数。

`int [] find(string haystack, string needle)`

`int [] find(string haystack, string needle, int start)`

`int [] find(string haystack, string needle, int start, int end)`

返回在`haystack`字符串中出现的`needle`字符串的位置列表。你可以将结果限制在从`start`位置开始或之后，以及`end`位置之前的子字符串。

如果没有找到子串，则返回一个空数组。

`int find(<type>array[], <type>target)`

`int find(<type>array[], <type>target, int start)`

`int find(<type>array[], <type>target, int start, int end)`

返回 "目标 "值在 "数组 "中第一次出现的位置。你可以将结果限制在 "开始 "位置或之后，以及 "结束 "位置或之前的第一次出现。

你可以通过在每次迭代时将 "start "设置为上一次匹配后的下一个位置来找到循环中的每个出现。

如果没有找到目标，返回一个负数。

`int [] find(<type>array[], <type>target)`

`int [] find(<type>array[], <type>target, int start)`

`int [] find(<type>array[], <type>target, int start, int end)`

返回`目标'值在`数组'中出现的位置列表。你可以将结果限制在 "开始 "位置或之后，以及 "结束 "位置之前的出现。

- 当你指定一个 "结束 "位置时，这意味着匹配的子串必须在 "结束 "之前开始。
- 标量版本返回`-len(haystack)-1`，表示没有匹配。如果你试图用它作为字符串/数组的索引，这个值会导致错误。
- 搜索空字符串总是失败。这一点与 Python 不同。
- 你不能对 "开始 "和 "结束 "参数使用负数指数。

## See also

- [len](len.html)
- [push](push.html)
- [append](append.html)
- [resize](resize.html)
- [Arrays](../arrays.html)

|
array

[find](find.html)

[insert](insert.html)

[isvalidindex](isvalidindex.html)

|
string

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
