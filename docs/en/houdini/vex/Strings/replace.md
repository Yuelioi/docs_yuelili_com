---
title: replace
order: 32
category:
  - houdini
---

## Description

`string replace(string str, string old, string new)`

`string replace(string str, string old, string new, int count)`

Returns a copy of the string with all occurrences of the string `old` replaced
with the string `new`.

## Arguments

` count`

If specified, only the first `count` occurrences are replaced.

## Examples ¶

```c
string str = "abcdef abcdef abcdef";  // Returns "abcghi abcghi abcghi"
string new_str = replace(str, "def", "ghi");  // Replaces up to 2 occurrences
of the string "def". // Returns "abcghi abcghi abcdef" new_str = replace(str,
"def", "ghi", 2);
```

## See also

- [re_replace](re_replace.html)
- [replace_match](replace_match.html)

### string

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
