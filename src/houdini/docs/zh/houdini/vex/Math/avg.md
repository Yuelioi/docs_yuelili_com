---
title: avg
order: 5
category:
  - houdini
---
    
## 描述

Returns the average value of the input(s)

```c
int  avg(int a)
```

```c
float  avg(float a)
```

Returns `a`.

```c
float  avg(float a, float b, ...)
```

Returns the average of the arguments.

返回参数的平均值。

```c
float  avg(vector2 v)
```

```c
float  avg(vector v)
```

```c
float  avg(vector4 v)
```

Returns the average of the values in the components of `v`.

返回 v 的分量的平均值。

```c
vector2  avg(vector2 a, vector2 b, ...)
```

```c
vector  avg(vector a, vector b, ...)
```

```c
vector4  avg(vector4 a, vector4 b, ...)
```

Returns a new vector where each component is the average of the corresponding
components in the arguments.

返回一个新的向量，其中每个分量是参数中相应分量的平均值。

```c
<type> avg(<type>arr[])
```

Returns the average of the values in the array.

返回数组中数值的平均数。
