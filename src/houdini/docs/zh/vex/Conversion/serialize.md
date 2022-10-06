---
title: serialize
order: 12
category:
  - houdini
---
    
## 描述

Flattens an array of vector or matrix types into an array of floats.

```c
float [] serialize(<vector>vectors[])
```

```c
float [] serialize(<matrix>matrices[])
```

These functions will serialize the arrays of tuple values.That is, the values
of the tuples are extracted one by one into aflat floating point array.

这些函数将对元组值的数组进行序列化。

## Examples

    vector v[] = { {1,2,3}, {7,8,9} }; // A vector[] of length 2float f[];f = serialize(v);// Now f[] has a length of 6 and equals { 1,2,3,7,8,9 }
