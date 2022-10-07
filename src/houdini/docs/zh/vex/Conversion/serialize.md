---
title: serialize
order: 13
category:
  - vex
---

`float [] serialize(<vector>vectors[])`

`float [] serialize(<matrix>matrices[])`

These functions will serialize the arrays of tuple values.
That is, the values of the tuples are extracted one by one into a
flat floating point array.

## Examples

[¶](#examples)

```c
vector v[] = { {1,2,3}, {7,8,9} }; // A vector[] of length 2
float f[];

f = serialize(v);
// Now f[] has a length of 6 and equals { 1,2,3,7,8,9 }

```



## See also

- [unserialize](unserialize.html)
