---
title: push
order: 10
category:
  - houdini
---

## Description

`void push(<type>&array[], <type>value)`

Appends the given value to the end of the array. Increases the size of `array`
by 1. This is the same as [append(array, value)](append.html "Adds an item to
an array or string.").

`void push(<type>&array[], <type>values[])`

Concatenates the values from the `values` array to the end of `array`.
Increases the size of `array` by `len(values)`. This is the same as
[append(array, values)](append.html "Adds an item to an array or string.").

:::tip
You can set an individual item in an array using `array[n] = x`.
:::

## See also

- [Arrays](../arrays.html)
- [len](len.html)
- [append](append.html)
- [resize](resize.html)
