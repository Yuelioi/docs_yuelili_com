---
title: re_split
order: 29
category:
  - vex
---

`string [] re_split(string regex, string input, int maxsplits=0)`

将 "输入 "字符串分割成 "regex "匹配之间的子字符串。

如果 "maxsplits "被给定而不是 0，它指定了最大的分割次数。

注意：这与 Python 和其他分割方法不匹配，因为它对尾部定界符的行为不同。`a,b,`将只分割成两个字符串。regex 字符串可以用`|($(?!\s))`来分割三个标记。在 VEX 中，你经常会需要 \s。在 wrangle 中需要另一个转义，需要\\\\s。

## See also

- [split](split.html)
- [re_match](re_match.html)
- [re_find](re_find.html)
- [re_findall](re_findall.html)
- [re_replace](re_replace.html)
