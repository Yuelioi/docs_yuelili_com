---
title: match
order: 21
category:
  - houdini
---

## Description

`int match(string pattern, string subject)`

This function returns 1 if the subject matches the pattern specified, or 0 if
the subject doesn’t match. The standard Houdini pattern matching is used.
Multiple patterns may be separated by spaces or commas. The special characters
for matching are:

- `?` Match any character

- `*` Match any substring

- `[list]` Match any of the characters specified in the list.

- If a pattern is prefixed by a caret (^), then subjects which match this pattern will be excluded from the match.

Examples:

- `a*` \- Match any string beginning with a.

- `a*,^aardvark` \- Match any string beginning with a except for aardvark.

- `[abc]*z` \- Match any string beginning with a, b or c and ending with z.

- `g*,^geo*` \- Match any string beginning with g, but not any string beginning with geo.

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
