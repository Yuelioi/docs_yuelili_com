---
title: reverse
order: 15
category:
  - houdini
---

## Description

`string reverse(string str)`

Returns a UTF-8 encoded string with the reversed _characters_ (not bytes) from
`str`. This is different from what `str[::-1]` returns.

`<type>[] reverse(<type>values[])`

Returns a reversed copy of the given array.

## Examples ¶

```c
reverse("hello") == "olleh"; reverse({1,2,3,4}) == {4, 3, 2, 1};

```

## See also

- [Arrays ](../arrays.html)
- [reorder ](reorder.html)
- [sort ](sort.html)
