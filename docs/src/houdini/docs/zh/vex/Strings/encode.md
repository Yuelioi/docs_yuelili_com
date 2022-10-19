---
title: encode
order: 9
category:
  - vex
---

自 17.5 以来

`string encode(string str)`

Houdini VEX 变量名只允许包含字母、数字和下划线，而且不能以数字开头。这个函数接收任何字符串，并将其编码为一个遵守这些限制的字符串。原有的字符串可以通过`decode`函数恢复。一个已经遵守规则的字符串将不被修改地返回。

这个规则的一个例外是，以`xn###`开头的字符串将被编码，即使它已经是一个有效的变量名。这是因为`xn### `是用来识别编码字符串的前缀。在这种情况下，一个额外的`xn### `前缀将被添加。这意味着一个字符串可以被编码任意次数，然后被解码相同的次数，总是返回到原来的字符串，无论其内容如何。

## See also

- [decode](decode.html)

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
