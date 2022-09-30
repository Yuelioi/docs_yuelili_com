---
title: replace_match
order: 24
category:
  - houdini
---
    
## 描述

Replaces the matched string pattern with another pattern.

```c
string  replace_match(string str, string pattern_from, string pattern_to)
```

If the string matches `pattern_from`, it is replaced with `pattern_to` with
the matching wildcards substituted in.

如果字符串与 spattern_from 匹配，它将被替换为 pattern_tow，并将匹配的通配符替换进去。

The pattern can use wildcards such as `str*` or `str?`, similar to the
[match](match.html "This function returns 1 if the subject matches the pattern
specified,or 0 if the subject doesn‘t match.") function.The wildcards may
also be referred to with an index (e.g. `(2)`) to allow reordering.

该模式可以使用通配符，如 str\*或 str?，类似于 match 函数。

## Examples

    // Returns "carol is my name";string s = replace_match("bob is my name", "bob*", "carol*");// Returns "a-b";s = replace_match("a_to_b", "*_to_*", "*-*");// Swaps the matched wildcards, returning "b_to_a";s = replace_match("a_to_b", "*_to_*", "*(1)_to_*(0)");
