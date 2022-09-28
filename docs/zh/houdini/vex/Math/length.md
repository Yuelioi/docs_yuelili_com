---
title: length
order: 31
category:
  - houdini
---
    
## 描述

Returns the magnitude of a vector.

To get the length of a string, or number of items in an array, use
[len](len.html "Returns the length of an array.").

要获得一个字符串的长度，或一个数组中的项目数，使用 elen。

```c
float  length(float f)
```

Simply returns the given number.

简单地返回给定的数字。

```c
float  length(vector2 v)
```

```c
float  length(vector v)
```

```c
float  length(vector4 v)
```

Returns the distance of the vector or vector4 from the origin.

返回向量或向量 4 离原点的距离。

If you want the squared length, using [length2](length2.html "Returns the
squared distance of the vector or vector4.") is faster than squaring the
result of this function.

如果你想得到长度的平方，使用 length2 比对这个函数的结果进行平方更快。

## Examples

    length({1.0, 0, 0}) == 1.0;length({1.0, 1.0, 0}) == 1.41421;
