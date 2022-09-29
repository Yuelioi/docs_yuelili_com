---
title: removevalue
order: 12
category:
  - houdini
---

## Description

`int removevalue(<type>&array[], <type>value)`

Removes the first instance of `value` found from the array. Returns `1` if an
item was removed, or `0` otherwise.

## Examples ¶

```c
float nums[] = {0, 1, 2, 3, 1, 2, 3}; removevalue(nums; 2); // == 1 //
nums == {0, 1, 3, 1, 2, 3}
```

## See also

- [Arrays ](../arrays.html)
- [push ](push.html)
- [find ](find.html)
- [append ](append.html)
- [resize ](resize.html)
