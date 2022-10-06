---
title: find
order: 14
category:
  - houdini
---

## Description

`int find(string haystack, string needle)`

`int find(string haystack, string needle, int start)`

`int find(string haystack, string needle, int start, int end)`

Returns the position of the first occurrence of the `needle` string within the
`haystack` string. You can limit the result to the first substring that starts
at or after a `start` position, and at or before an `end` position.

You can find each occurrence in a loop by setting `start` at each iteration to
the end of the previous match.

Returns a negative number if the substring is not found.

`int [] find(string haystack, string needle)`

`int [] find(string haystack, string needle, int start)`

`int [] find(string haystack, string needle, int start, int end)`

Returns a list of positions of occurrences of the `needle` string within the
`haystack` string. You can limit the results to substrings that start at or
after a `start` position, and before an `end` position.

Returns an empty array if the substring is not found.

`int find(<type>array[], <type>target)`

`int find(<type>array[], <type>target, int start)`

`int find(<type>array[], <type>target, int start, int end)`

Returns the position of the first occurrence of the `target` value within the
`array`. You can limit the result to the first occurrence at or after a
`start` position, and at or before an `end` position.

You can find each occurrence in a loop by setting `start` at each iteration to
the next position after the previous match.

Returns a negative number if the target is not found.

`int [] find(<type>array[], <type>target)`

`int [] find(<type>array[], <type>target, int start)`

`int [] find(<type>array[], <type>target, int start, int end)`

Returns a list of positions of occurrences of the `target` value within the
`array`. You can limit the results to occurrences at or after a `start`
position, and before an `end` position.

- When you specify an `end` position, it means the matching substring must _start_ before the `end`.

- The scalar versions return `-len(haystack)-1` to indicate no matches. This value is intended to cause an error if you try to use it as an index into the string/array.

- Searching for the empty string always fails. This differs from Python.

- You cannot use negative indices for the `start` and `end` arguments.

## See also

- [len](len.html)
- [push](push.html)
- [append](append.html)
- [resize](resize.html)
- [Arrays](../arrays.html)

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
