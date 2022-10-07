---
title: encode
order: 9
category:
  - vex
---



Since 17.5

`string encode(string str)`

Houdini VEX variable names are only allowed to contain letters, numbers, and
underscores, and must not begin with a number. This function takes any string,
and encodes it into a string that obeys these restrictions. The original
string can be recovered using the `decode` function. A string that already
obeys the rules is returned unmodified.

One exception to this rule is that a string starting with `xn### ` will be
encoded even if it is already a valid variable name. This is because `xn### `
is the prefix used to identify an encoded string. In this case, an additional
`xn### ` prefix will be added. This means a string can be encoded any number of
times, then decoded the same number of times to always return to the original
string, regardless of its contents.



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
