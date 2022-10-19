---
title: slice
order: 16
category:
  - houdini
---

## Description

`string slice(string s, int start, int end)`

`string slice(string s, int start, int end, int step)`

Extracts a string from a larger string.

`<type>[] slice(<type>s[], int start, int end)`

`<type>[] slice(<type>s[], int start, int end, int step)`

Extracts a sub-array from a larger array.

`string slice(string s, int hasstart, int start, int hasend, int end, int hasstep, int step)`

`<type>[] slice(<type>array[], int hasstart, int start, int hasend, int end, int hasstep, int step)`

A general-purpose signature to support the slicing syntax. If `hasstart` is
`0`, it ignores `start` and uses `0`. If `hasend` is `0` it ignores `end` and
uses the length of the array. If `hasstep` is `0` it ignores `step` and uses
`1`.

- This is the function equivalent of using `value[start:end:step]` slicing syntax.

- If `start` or `end` are negative, they count from the end of the string/array.

- The computed range is clamped to the bounds of the original string/array.

- If step is zero, the function returns an empty string/array.

- If step is negative, the items are returned in reverse, and `end` should be less than `start`.

## Examples ¶

```c
int[] nums = {10, 20, 30, 40, 50, 60}; slice(nums, 1, 3) == {20, 30};
// nums[1:3] slice(nums, 1, -1) == {20, 30, 30, 40, 50}; // nums[1:-1]
slice(nums, 0, len(nums), 2) == {20, 40, 60}; // nums[0:len(nums):2]
slice(nums, 0, 0, 0, 0, 1, 2) == {20, 40, 60}; // nums[::2]
```

## See also

- [Arrays](../arrays.html)
- [len](len.html)
- [push](push.html)
- [append](append.html)
- [resize](resize.html)
