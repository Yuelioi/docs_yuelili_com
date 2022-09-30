---
title: split
order: 35
category:
  - houdini
---

## Description

`string [] split(string s)`

`string [] split(string s, string separators)`

`string [] split(string s, string separators, int maxsplits)`

Splits a string into tokens by removing separator characters from the string
and creating an array entry for each substring bounded by separators. When no
separator string is provided, the string is split on whitespace (spaces, tab,
and return).

The `maxsplits` option limits the number of times the string is split, this is
useful to peel off one token at a time from a larger string.

::: info Note
This differs from Python’s split() in that it takes a list of separators, not
a single string to use as a separator.
:::

::: info Note
This operates more as a tokenize method than as a split method. In particular,
if you have repeated separators they will be merged and only a single split
performed.
:::

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
