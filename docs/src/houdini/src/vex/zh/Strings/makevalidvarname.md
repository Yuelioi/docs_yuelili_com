---
title: makevalidvarname
order: 20
category:
  - vex
---

自 19.5 以来

`string makevalidvarname(string name)`

`string makevalidvarname(string name, string safe_chars)`

VEX 等语言中的变量名称只允许包含字母、数字和下划线，而且不能以数字开头。Houdini 中的节点名和属性名也有类似的要求。这个函数接收任何字符串，并将其转换为遵守这些限制的字符串，用下划线替换无效的字符。

## Arguments

`name`

应该变成一个有效的变量名的字符串。

`safe_chars`

指定允许任何额外字符的字符串，而不是用下划线替换。

## Examples



```c
// Returns "foo_bar"
string s = makevalidvarname("foo:bar");

// Returns "_123"
s = makevalidvarname("123");

// Returns "foo:_bar"
s = makevalidvarname("foo:?bar", ":");

```

## See also

- [encode](encode.html)
- [decode](decode.html)
- [hou.text.variableName()](../../hom/hou/text.html) () (#variableName)

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
