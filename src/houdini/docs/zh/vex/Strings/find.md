---
title: find
order: 11
category:
  - houdini
---
    
## 描述

Finds an item in an array or string.

```c
int  find(string haystack, string needle)
```

```c
int  find(string haystack, string needle, int start)
```

```c
int  find(string haystack, string needle, int start, int end)
```

Returns the position of the first occurrence of the `needle` string within the
`haystack` string. You can limit the result to the first substring that starts
at or after a `start` position, and at or before an `end` position.

返回 needlestring 在 haystackstring 中第一次出现的位置。你可以将结果限制在起点位置或之后，以及终点位置或之前开始的第一个子串。

You can find each occurrence in a loop by setting `start` at each iteration to
the end of the previous match.

你可以在一个循环中找到每一个出现的子串，方法是将每次迭代的 start 设置为上一次匹配的结束。

Returns a negative number if the substring is not found.

如果没有找到该子串，则返回一个负数。

```c
int [] find(string haystack, string needle)
```

```c
int [] find(string haystack, string needle, int start)
```

```c
int [] find(string haystack, string needle, int start, int end)
```

Returns a list of positions of occurrences of the `needle` string within the
`haystack` string. You can limit the results to substrings that start at or
after a `start` position, and before an `end` position.

返回一个在 haystackstring 中出现的 needlestring 的位置的列表。你可以将结果限制在从起点位置开始或之后，以及终点位置之前的子串。

Returns an empty array if the substring is not found.

如果没有找到子串，返回一个空数组。

```c
int  find(<type>array[], <type>target)
```

```c
int  find(<type>array[], <type>target, int start)
```

```c
int  find(<type>array[], <type>target, int start, int end)
```

Returns the position of the first occurrence of the `target` value within the
`array`. You can limit the result to the first occurrence at or after a
`start` position, and at or before an `end` position.

返回数组中第一次出现的目标值的位置。你可以将结果限制在 artposition 或之后，endposition 或之前的第一次出现的位置上。

You can find each occurrence in a loop by setting `start` at each iteration to
the next position after the previous match.

你可以通过将每次迭代的 start 设置为上一次匹配后的下一个位置，在一个循环中找到每个出现的目标值。

Returns a negative number if the target is not found.

如果没有找到目标，返回一个负数。

```c
int [] find(<type>array[], <type>target)
```

```c
int [] find(<type>array[], <type>target, int start)
```

```c
int [] find(<type>array[], <type>target, int start, int end)
```

Returns a list of positions of occurrences of the `target` value within the
`array`. You can limit the results to occurrences at or after a `start`
position, and before an `end` position.

返回一个目标值在数组中出现的位置的列表。你可以将结果限制在起点位置或之后，以及终点位置之前的出现。

- When you specify an `end` position, it means the matching substring must _start_ before the `end`.

当你指定一个 endposition 时，意味着匹配的子串必须在 end 之前开始。

- The scalar versions return

```c
-len(haystack)-1
```

to indicate no matches. This value is intended to cause an error if you try to use it as an index into the string/array.

标量版本返回-len(haystack)-1，表示没有匹配。如果你试图用这个值作为字符串/数组的索引，那么这个值会导致错误。

- Searching for the empty string always fails. This differs from Python.

搜索空字符串总是失败。这与 Python 不同。

- You cannot use negative indices for the `start` and `end` arguments.

你不能为 start 和 end 参数使用负数索引。
