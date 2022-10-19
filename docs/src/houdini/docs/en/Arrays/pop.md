---
title: pop
order: 9
category:
  - houdini
---

## Description

`<type> pop(<type>&array[])`

Removes the last item from the array and returns it.

`<type> pop(<type>&array[], int index)`

Removes the item at `index` from the array and returns its value.

A negative index counts from the end of the list, so `pop(array, -2)` would
remove the second-to-last value.

## See also

- [Arrays](../arrays.html)
- [len](len.html)
- [append](append.html)
- [push](push.html)
- [resize](resize.html)
