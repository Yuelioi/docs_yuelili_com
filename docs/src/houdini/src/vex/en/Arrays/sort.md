---
title: sort
order: 17
category:
  - houdini
---

## Description

`int [] sort(int values[])`

`float [] sort(float values[])`

`string [] sort(string values[])`

Returns a version of the given array sorted in increasing order.

- [argsort](argsort.html) ("Returns the indices of a sorted version of an array.") and [sort](sort.html) ("Returns the array sorted in increasing order.") use a stable sort.

- Use [reverse](reverse.html) ("Returns an array or string in reverse order.") to reverse the order of the sort.

## Examples ¶

Sort an array of numbers in descending order

```c
int numbers[] = {5, 2, 90, 3, 1}; int descending_nums[] =
reverse(sort(numbers)); // {90, 5, 3, 2, 1}
```

## See also

- [Arrays](../arrays.html)
- [argsort](argsort.html)
- [reorder](reorder.html)
- [reverse](reverse.html)
