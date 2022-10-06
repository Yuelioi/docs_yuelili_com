---
title: re_split
order: 29
category:
  - houdini
---
    
## 描述

Splits the given string based on regex match.

```c
string [] re_split(string regex, string input, int maxsplits=0)
```

Splits the `input` string into substrings between matches of `regex`.

将输入的字符串分割成 regex 匹配之间的子字符串。

If `maxsplits` is given and not 0, it specifies the maximum number of splits
to do.

如果给出 maxsplits 而不是 0，它就指定了要做的最大分割数。

NOTE: This does not match Python and other split methods as it
behavesdifferently with trailing delimiters.`a,b,` will only split into
twostrings.The regex string can be augmented with `|($(?!\s))` to splitthree
tokens.In VEX you frequently will need \\\s.In a wrangle anotherescape is
needed and \\\\\\\s is required.

注意：这与 Python 和其他分割方法不一致，因为它对尾部分隔符的处理方式不同。
