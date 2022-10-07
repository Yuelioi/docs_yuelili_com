---
title: replace_match
order: 33
category:
  - vex
---

`string replace\_match(string str, string pattern\_from, string pattern\_to)`

如果字符串与 "pattern_from "匹配，则用 "pattern_to "替换，并将匹配的通配符替换进去。

模式可以使用通配符，如`str*`或`str?`，类似于[match](match.html) ("如果主题与指定的模式匹配，该函数返回1，如果主题不匹配，则返回0。")函数。通配符也可以用一个索引（如`(2)`）来指代，以允许重新排序。

## Examples



```c
// Returns "carol is my name";
string s = replace\_match("bob is my name", "bob\*", "carol\*");

// Returns "a-b";
s = replace\_match("a\_to\_b", "\*\_to\_\*", "\*-\*");

// Swaps the matched wildcards, returning "b\_to\_a";
s = replace\_match("a\_to\_b", "\*\_to\_\*", "\*(1)\_to\_\*(0)");

```

## See also

- [match](match.html)
- [replace](replace.html)
- [re_replace](re_replace.html)

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
