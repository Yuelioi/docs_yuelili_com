---
title: re_find
order: 25
category:
  - vex
---

`int re_find(string regex, string input)`

`int re_find(string regex, string input, int start)`

`int re_find(string regex, string input, int start, int end)`

如果`regex`在`input`中匹配，则返回`1`，否则返回`0`。

`string re_find(string regex, string input)`

`string re_find(string regex, string input, int start)`

`string re_find(string regex, string input, int start, int end)`

返回在`input`中与`regex`匹配的第一个子串。

`int re_find(int &start_pos[], int &end_pos[], string regex, string input)`

`int re_find(int &start_pos[], int &end_pos[], string regex, string input, int start)`

`int re_find(int &start_pos[], int &end_pos[], string regex, string input, int start, int end)`

如果 "regex "在输入中匹配，返回 "1"，否则返回 "0"。在`start_pos'和`end_pos'数组中填入每个匹配的开始和结束位置。

`string [] re_find(string regex, string input)`

`string [] re_find(string regex, string input, int start)`

`string [] re_find(string regex, string input, int start, int end)`

返回与`input`中的`regex`相匹配的子串数组。

## See also

- [re_match](re_match.html)
- [re_findall](re_findall.html)
- [re_replace](re_replace.html)
- [re_split](re_split.html)
