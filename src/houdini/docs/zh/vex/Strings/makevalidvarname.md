---
title: makevalidvarname
order: 20
category:
  - vex
---



Since 19.5

`string makevalidvarname(string name)`

`string makevalidvarname(string name, string safe\_chars)`

Variable names in languages such as VEX are only allowed to contain letters, numbers, and underscores, and must not begin with a number.
Node names and attribute names in Houdini have similar requirements.
This function takes any string, and converts it into a string that obeys these restrictions by replacing invalid characters with an underscore.

## Arguments

`name`

String that should be turned into a valid variable name.

`safe_chars`

String specifying any extra characters to allow instead of replacing with underscores.

## Examples

[¶](#examples)

```c
// Returns "foo\_bar"
string s = makevalidvarname("foo:bar");

// Returns "\_123"
s = makevalidvarname("123");

// Returns "foo:\_bar"
s = makevalidvarname("foo:?bar", ":");

```



## See also

- [encode](encode.html)
- [decode](decode.html)
- [hou.text.variableName()](../../hom/hou/text.html#variableName)

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
