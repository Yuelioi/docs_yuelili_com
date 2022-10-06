---
title: replace_match
order: 33
category:
  - houdini
---

## Description

`string replace_match(string str, string pattern_from, string pattern_to)`

If the string matches `pattern_from`, it is replaced with `pattern_to` with
the matching wildcards substituted in.

The pattern can use wildcards such as `str*` or `str?`, similar to the
[match](match.html "This function returns 1 if the subject matches the pattern
specified,

or 0 if the subject doesn’t match.") function. The wildcards may also be
referred to with an index (e.g. `(2)`) to allow reordering.

## Examples ¶

```c
// Returns "carol is my name"; string s = replace_match("bob is my
name", "bob*", "carol*");  // Returns "a-b"; s = replace_match("a_to_b",
"*_to_*", "*-*");  // Swaps the matched wildcards, returning "b_to_a"; s =
replace_match("a_to_b", "*_to_*", "*(1)_to_*(0)");
```

## See also

- [match](match.html)
- [replace](replace.html)
- [re_replace](re_replace.html)

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
