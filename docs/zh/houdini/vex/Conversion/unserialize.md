---
title: unserialize
order: 13
category:
  - houdini
---
    
## 描述

Turns a flat array of floats into an array of vectors or matrices.

```c
<vector>[] unserialize(float values[])
```

```c
<matrix>[] unserialize(float values[])
```

The inverse operation to [serialize](serialize.html "Flattens an array of
vector or matrix types into an array of floats."). This operation takes an
array of float valuesand creates a new array of vectors or floats by taking
each float and assigning it to thenext component of the vector or matrix in
the output array. For example:

与序列化操作相反的操作。该操作接收一个浮点数数组

## Examples

    vector v[]float f[] = { 1, 2, 3, 7, 8, 9 };v = vector(unserialize(f));// Now v has a length of 2 and contains { {1,2,3}, {7,8,9} }
