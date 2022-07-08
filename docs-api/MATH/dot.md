## 描述

Returns the dot product between the arguments.


```c
float  dot(vector2 a, vector2 b)
```



```c
float  dot(vector a, vector b)
```



```c
float  dot(vector4 a, vector4 b)
```



```c
float  dot(vector a, vector4 b)
```



```c
float  dot(vector4 a, vector b)
```



```c
float  dot(matrix2 a, matrix2 b)
```



```c
float  dot(matrix3 a, matrix3 b)
```



```c
float  dot(matrix a, matrix b)
```


Returns the [dot product __](http://en.wikipedia.org/wiki/Dot_product)of the
arguments.

返回参数的点积。

When dotting a `vector` with a `vector4`, only the first threecomponents are
used.

当将一个向量与一个向量4相点时，只使用前三个


```c
float  dot(<type>a[], <type>b[])
```



```c
int  dot(int a[], int b[])
```


Returns the sum of dot products i.e. `dot(a, b) = dot(a[0], b[0]) + ... +
dot(a[n-1], b[n-1])` where `n = min(len(a), len(b))`.

分量被使用。

