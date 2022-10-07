---
title: re_find
order: 25
category:
  - vex
---

`int re\_find(string regex, string input)`

`int re\_find(string regex, string input, int start)`

`int re\_find(string regex, string input, int start, int end)`

Returns `1` if `regex` matches in `input`, or `0` otherwise.

`string re\_find(string regex, string input)`

`string re\_find(string regex, string input, int start)`

`string re\_find(string regex, string input, int start, int end)`

Returns the first substring that matches `regex` in `input`.

`int re\_find(int &start\_pos[], int &end\_pos[], string regex, string input)`

`int re\_find(int &start\_pos[], int &end\_pos[], string regex, string input, int start)`

`int re\_find(int &start\_pos[], int &end\_pos[], string regex, string input, int start, int end)`

Returns `1` if `regex` matches in input, or `0` otherwise. Fills the `start_pos` and `end_pos` array variables with the start and end positions of each match.

`string [] re\_find(string regex, string input)`

`string [] re\_find(string regex, string input, int start)`

`string [] re\_find(string regex, string input, int start, int end)`

Returns an array of substrings that match `regex` in `input`.



## See also

- [re_match](re_match.html)
- [re_findall](re_findall.html)
- [re_replace](re_replace.html)
- [re_split](re_split.html)
