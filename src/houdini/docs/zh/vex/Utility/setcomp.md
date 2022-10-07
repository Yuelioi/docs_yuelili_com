---
title: setcomp
order: 19
category:
  - vex
---

`float|void setcomp(<vector>&target, float value, int index)`

Modifies the `target` vector in-place by changing the component at `index` to `value`.

Returns `value` if called with a `float` return type.

`float|void setcomp(<matrix>&target, float value, int row, int column)`

Modifies the `target` matrix in-place by changing the component specified by `row` and `column` to `value`.

Returns `value` if called with a `float` return type.

`<type> setcomp(<type>&array[], <type>value, int index)`

Sets the item at `index` in `array` to `value`, and returns `value`.

This is the same as `array[index] = value`.

`float setcomp(<vector>&array[], float value, int i, int j)`

Modifies the `array[i]` vector in-place by changing the component at `j` to `value`, and returns `value`.

This is the same as `setcomp(array[i], value, j)`.

`float setcomp(<matrix>&array[], float value, int i, int j, int k)`

Modifies the `array[i]` matrix in-place by changing the component specified by `j` and `k` to `value`, and returns `value`.

This is the same as `setcomp(array[i], value, j, k)`.

`<type> setcomp(dict &d, <type>value, string index)`

`<type>[] setcomp(dict &d, <type>value[], string index)`

Sets the item at `index` in `d` to `value`, and returns `value`.

This is the same as `d[index] = value`.

::: info Note that because the type to set isn’t determined by the left
hand side, you may have to fully specify the type of value to
avoid ambiguity.



## See also

- [Arrays](../arrays.html)
- [getcomp](getcomp.html)

|
data

[assign](assign.html)

[getcomp](getcomp.html)

[set](set.html)

[setcomp](setcomp.html)
