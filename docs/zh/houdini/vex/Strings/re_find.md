---
title: re_find
order: 25
category:
  - houdini
---
    
## 描述

Matches a regular expression in a string

```c
int  re_find(string regex, string input)
```

```c
int  re_find(string regex, string input, int start)
```

```c
int  re_find(string regex, string input, int start, int end)
```

Returns `1` if `regex` matches in `input`, or `0` otherwise.

如果 regex 在 input 中匹配，则返回 1，否则返回 0。

```c
string  re_find(string regex, string input)
```

```c
string  re_find(string regex, string input, int start)
```

```c
string  re_find(string regex, string input, int start, int end)
```

Returns the first substring that matches `regex` in `input`.

返回在输入中与 regex 匹配的第一个子串。

```c
int  re_find(int &start_pos[], int &end_pos[], string regex, string input)
```

`int re_find(int &start_pos[], int &end_pos[], string regex, string input, int start)`

`int re_find(int &start_pos[], int &end_pos[], string regex, string input, int start, int end)`

Returns `1` if `regex` matches in input, or `0` otherwise. Fills the
`start_pos` and `end_pos` array variables with the start and end positions of
each match.

如果 regex 在输入中匹配，则返回 1，否则返回 0。在 start_pos 和 end_posarray 变量中填入每个匹配的开始和结束位置。

```c
string [] re_find(string regex, string input)
```

```c
string [] re_find(string regex, string input, int start)
```

```c
string [] re_find(string regex, string input, int start, int end)
```

Returns an array of substrings that match `regex` in `input`.

返回一个与输入的 regexin 匹配的子串数组。
