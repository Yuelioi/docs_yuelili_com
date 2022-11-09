---
title: isvalidindex
order: 7
category:
  - houdini
---

## Description

`int isvalidindex(<type>&array[], int index)`

`int isvalidindex(string str, int index)`

Returns `1` if `index` is within range for the given string/array, or `0`
otherwise.

This is equivalent to `index < len(array) && index >= -len(array)`.

`int isvalidindex(dict d, string key)`

Returns `1` if the key is in the dictionary, or `0` otherwise.

## See also

- [Arrays](../arrays.html)
- [len](len.html)

### array

[find](find.html)

[insert](insert.html)

[isvalidindex](isvalidindex.html)

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
