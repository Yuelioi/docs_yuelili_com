---
title: setcomp
order: 18
category:
  - houdini
---
    
## 描述

Sets a single component of a vector or matrix type, or an item in an array.

```c
float|void setcomp(<vector>&target, float value, int index)
```

Modifies the `target` vector in-place by changing the component at `index` to
`value`.

通过改变外侧的分量来就地修改目标向量。

Returns `value` if called with a `float` return type.

如果调用的是浮动返回类型，则返回 value。

```c
float|void setcomp(<matrix>&target, float value, int row, int column)
```

Modifies the `target` matrix in-place by changing the component specified by
`row` and `column` to `value`.

通过改变 row 和 columntovalue 指定的分量来就地修改 targetmatrix。

Returns `value` if called with a `float` return type.

如果调用的是 loat 返回类型，则返回 value。

```c
<type> setcomp(<type>&array[], <type>value, int index)
```

Sets the item at `index` in `array` to `value`, and returns `value`.

设置 raytovalue 中 index 的项目，并返回 value。

This is the same as

```c
array[index] = value
```

.

这与 array[index] = value 相同。

```c
float  setcomp(<vector>&array[], float value, int i, int j)
```

Modifies the `array[i]` vector in-place by changing the component at `j` to
`value`, and returns `value`.

修改 array[i]向量，在原地改变 j 处的分量，并返回 value。

This is the same as

```c
setcomp(array[i], value, j)
```

.

这与 assetcomp(array[i], value, j)相同。

```c
float  setcomp(<matrix>&array[], float value, int i, int j, int k)
```

Modifies the `array[i]` matrix in-place by changing the component specified by
`j` and `k` to `value`, and returns `value`.

通过改变 j 和 ktovalue 指定的分量，就地修改 array[i]矩阵，并返回 value。

This is the same as

```c
setcomp(array[i], value, j, k)
```

.

这与 assetcomp(array[i], value, j, k)相同。

```c
<type> setcomp(dict &d, <type>value, string index)
```

```c
<type>[] setcomp(dict &d, <type>value[], string index)
```

Sets the item at `index` in `d` to `value`, and returns `value`.

设置 indexintovalue 处的项目，并返回 value。

This is the same as

```c
d[index] = value
```

.

这与 asd[index] = value 相同。

Note that because the type to set isn‘t determined by the lefthand side, you
may have to fully specify the type of value toavoid ambiguity.

注意，因为要设置的类型不是由左边的
