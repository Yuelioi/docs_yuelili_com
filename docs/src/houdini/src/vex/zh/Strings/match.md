---
title: match
order: 21
category:
  - vex
---

`int match(string pattern, string subject)`

如果主题与指定的模式相匹配，这个函数将返回 1，如果主题不匹配，则返回 0。使用的是标准的 Houdini 模式匹配。多个模式可以用空格或逗号分隔。用于匹配的特殊字符是。

- `? ` 匹配任何字符
- `*`匹配任何子串
- `[列表]`匹配列表中指定的任何字符。
- 如果一个模式的前缀是省略号(^)，那么与之相匹配的主题就会是
  该模式将被排除在匹配之外。

例子。

- `a*` - 匹配任何以 a 开头的字符串。
- `a*,^aardvark` - 匹配任何以 a 开头的字符串，除了
- `[abc]*z` - 匹配任何以 a、b 或 c 开头，以 a、b 或 c 结尾的字符串。
- `g*,^geo*` - 匹配任何以 g 开头的字符串，但不匹配任何字符串
  aardvark. z. 以 geo 开头。

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
