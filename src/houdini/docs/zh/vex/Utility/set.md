---
title: set
order: 17
category:
  - houdini
---
    
## 描述

Creates a new value based on its arguments, such as creating a vector from its
components.

The `set()` function has a **wide variety** of forms allowing you to perform
many different types of conversions.

set()函数有多种形式，允许你执行许多不同类型的转换。

Tip

When filling a matrix in Houdini, the numbers go across the first row, then
across the second row, and so on (“row-major”).

在 Houdini 中填充矩阵时，数字会穿过第一行，然后穿过第二行，以此类推（"行-主"）。

```c
vector2  set(float v1, float v2)
```

```c
vector  set(float v1, float v2, float v3)
```

```c
vector4  set(float v1, float v2, float v3, float v4)
```

```c
matrix2  set(float v1, float v2, float v3, float v4)
```

`matrix3 set(float v1, float v2, float v4, float v4, float v5, float v6, float v7, float v8, float v9)`

`matrix set(float v1, float v2, float v3, float v4, float v5, float v6, float v7, float v8, float v9, float v10, float v11, float v12, float v13, float v14, float v15, float v16)`

Create a vector or matrix type from the values in the arguments.

从参数中的值创建一个向量或矩阵类型。

    vector4 v = set(1.0, 2.0, 3.0, 4.0);matrix3 m = set(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);

The [assign](assign.html "An efficient way of extracting the components of a
vector or matrix into float variables.") function performs the opposite of
this operation (pulling components out into variables).

assignfunction 执行的是这个操作的反面（将组件拉出到变量中）。

```c
<vector> set(float nums[])
```

```c
<matrix> set(float nums[])
```

Creates a vector/matrix from an array of floats.

从一个浮动数组中创建一个向量/矩阵。

    float[] nums = {1.0, 2.0, 3.0, 4.0};vector4 v = set(nums);

```c
<vector> set(float|intv)
```

```c
<matrix> set(float|intv)
```

If you set a vector or matrix type from a single value, the vector/matrix is
filled in with that value for all components.

如果你从一个单一的值中设置一个向量或矩阵类型，那么向量/矩阵的所有组件都会被填入这个值。

    vector4 v = set(2.0); // -> {2.0, 2.0, 2.0, 2.0}

```c
matrix2  set(vector2 row1, vector2 row2)
```

```c
matrix3  set(vector row1, vector row2, vector row3)
```

```c
matrix  set(vector4 row1, vector4 row2, vector4 row3, vector4 row4)
```

Creates a matrix type from a series of vector arguments of the same size
representing the rows.

从一系列代表行的相同大小的向量参数中创建一个矩阵类型。

    matrix3 m = set({0.0, 1.0, 0.0}, {1.0, 0.0, 1.0}, {0.0, 1.0, 0.0});

```c
matrix3  set(vector rows[])
```

```c
matrix  set(vector4 rows[])
```

You can also set a matrix type from an array of vectors representing rows. If
there are not enough vectors in the array to fill the matrix, the extra rows
will contain zeros.

你也可以从一个代表行的向量数组中设置一个矩阵类型。如果数组中没有足够的向量来填充矩阵，多余的行将包含零。

```c
vector [] set(matrix3 m)
```

```c
vector4 [] set(matrix m)
```

Creates an array of vectors from the rows of a matrix of the same size.

从一个相同大小的矩阵的行中创建一个向量数组。

    matrix3 m3 = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0};vector[] vs = set(m3);// -> array [ {1.0, 2.0, 3.0}, {4.0, 5.0, 6.0}, {7.0, 8.0, 9.0} ]

```c
vector  set(vector2 v)
```

```c
vector4  set(vector2 v)
```

```c
vector4  set(vector v)
```

```c
matrix3  set(matrix2 m)
```

```c
matrix  set(matrix2 m)
```

```c
matrix  set(matrix3 m)
```

If you set a larger vector or matrix type from a smaller type, the extra
components will be zero.

如果你从一个较小的类型设置一个较大的向量或矩阵类型，多余的分量将是 0。

    vector2 v2 = {1.0, 2.0};vector4 v4 = set(v2); // -> {1.0, 2.0, 0.0, 0.0}

```c
float  set(vector v)
```

```c
float  set(vector4 v)
```

```c
vector2  set(vector4 v)
```

```c
vector2  set(vector v)
```

```c
vector  set(vector4 v)
```

If you set a smaller vector with a larger vector, the smaller type will take
components from the left.

如果你用一个较大的向量设置一个较小的向量，较小的类型将从左边取分量。

    vector4 v4 = {1.0, 2.0, 3.0, 4.0};vector2 v2 = set(v4) // -> {1.0, 2.0}

```c
matrix2  set(matrix3 m)
```

```c
matrix2  set(matrix m)
```

```c
matrix3  set(matrix m)
```

If you set a smaller matrix with a larger matrix, the smaller type will take
the top-left corner.

如果你用一个较大的矩阵来设置一个较小的矩阵，较小的类型将从左上角取值。

    matrix3 m3 = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0};matrix2 m2 = set(m3); // -> {1.0, 2.0, 4.0, 5.0}

```c
float [] set(<vector>v)
```

```c
float [] set(<matrix>m)
```

Creates an array of floats from the components of a vector or matrix type.

从矢量或矩阵类型的组件中创建一个浮动数组。

    matrix3 m3 = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0};float[] nums = set(m3); // -> array [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ]

```c
<vector>[] set(float nums[])
```

```c
<matrix>[] set(float nums[])
```

Creates an array of vector/matrix types by taking one component at a time from
an array of floats. This is the same as using the
[unserialize](unserialize.html "Turns a flat array of floats into an array of
vectors or matrices.") function.

通过从一个浮动数组中每次取一个分量来创建一个矢量/矩阵类型的数组。这与使用 unserializefunction 相同。

    float[] nums = {1.0, 2.0, 3.0, 4.0};vector2[] vs = set(nums); // -> [ {1.0, 2.0}, {3.0, 4.0} ]

```c
int  set(float v)
```

```c
float  set(int v)
```

```c
float [] set(int vs[])
```

```c
int [] set(float vs[])
```

You can set a float from an int, or an int from a float, or an array of floats
from an array of ints, or an array of ints from an array of floats.

你可以从一个 int 中设置一个 float，或者从一个 float 中设置一个 int，或者从一个 ints 数组中设置一个 float 数组，或者从一个 float 数组中设置一个 ints 数组。

    float[] fracs = { 1.1, 2.2, 3.3, 4.4, 5.5, 6.6 };int[] floored = set(fracs); // -> array [ 1, 2, 3, 4, 5, 6 ]

```c
float [] set(float num)
```

Sets all the items in an array of float to the same value.

将一个浮点数数组中的所有项目设置为相同的值。

```c
float  set(float nums[])
```

Returns the first item in the array.

返回数组中的第一个项目。

```c
dict  set(string key, ...)
```

Initializes a dictionary with a series of key/value pairs.Every other
parameter shouldbe a string for the key and be followed by the value for that
key.

用一系列的键/值对初始化一个 dictionary。 每一个其他的参数应该

```c
<type> set(<type>v)
```

```c
<type>[] set(<type>v[])
```

If you call `set()` with the same argument type and return type, it simply
returns the argument value.

是一个字符串，后面是该键的值。

    string s = set("Hello"); // -> "Hello"
