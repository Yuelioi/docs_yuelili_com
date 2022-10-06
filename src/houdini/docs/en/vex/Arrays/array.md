---
title: array
order: 4
category:
  - houdini
---

## Description

`<type>[] array(...)`

Returns an array of items of the given type.

You should use function-style casting to ensure the array members have the
correct type:

```c
vector v[] = vector[](array( 1, {1,2,3}, 3, s, t, Cl, P, N)); float f[]
= float[](array(1, 2, s, t, length(P-L), length(N)));
```

## See also

- [Arrays ](../arrays.html)
- [len ](len.html)
- [resize ](resize.html)
