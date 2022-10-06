---
title: getcomp
order: 5
category:
  - houdini
---
    
## 描述

Extracts a single component of a vector type, matrix type, or array.

```c
float  getcomp(<vector>v, int index)
```

Returns the vector component at the given index.This is the same as
`v[index]`.

返回指定索引处的向量分量。

```c
float  getcomp(<matrix>m, int row, int column)
```

Returns the matrix component at the given location.

这与 v[index]相同。

```c
<type> getcomp(<type>array[], int index)
```

Returns the array item at the given index.This is the same as `array[index]`.

返回在给定位置的矩阵分量。

```c
<type> getcomp(<vector>array[], int i, int j)
```

Returns the vector component at the given location and array index. This is
the same as

```c
getcomp(array[i], j)
```

.

返回在给定索引处的数组项。

```c
<type> getcomp(<matrix>array[], int i, int j, int k)
```

Returns the matrix component at the given location and array index. This is
the same as

```c
getcomp(array[i], j, k)
```

.

这与 array[index]相同。

```c
<type> getcomp(dict d, string index)
```

```c
<type>[] getcomp(dict d, string index)
```

Returns the dictionary item at the given index.This is the same as `d[index]`.

返回在给定位置和数组索引处的向量分量。这与 getcomp(array[i], j)相同。

```c
<type> getcomp(dict d, string index, <type>defvalue)
```

```c
<type>[] getcomp(dict d, string index, <type>defvalue[])
```

Returns the dictionary item at the given index. If it doesn‘t exist,return
`defvalue`.This is the same as

```c
isvalidindex(d, index) ? d[index] : defvalue
```

.

返回在给定位置和数组索引的矩阵分量。这与 getcomp(array[i], j, k)相同。

```c
string  getcomp(string value, int index)
```

Returns the _character_ at the given index.This is the same as `value[index]`.

返回指定索引处的字典项。

Characters in VEX are strings as well.UTF-8 encoding is used,so if the index
is part way through a UTF-8 encoding, the resultis an empty string.Otherwise
it is the entire valid UTF-8 character.

这与 asd[index] 相同。
