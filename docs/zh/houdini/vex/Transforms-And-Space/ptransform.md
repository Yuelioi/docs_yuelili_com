---
title: ptransform
order: 20
category:
  - houdini
---
    
## 描述

Transforms a vector from one space to another.

```c
vector  ptransform(vector vec, matrix transform)
```

```c
vector4  ptransform(vector4 vec, matrix transform)
```

Transforms the vector using the given transform matrix.

使用给定的变换矩阵对向量进行变换。

```c
vector  ptransform(string tospace, vector vec)
```

```c
vector4  ptransform(string tospace, vector4 vec)
```

Transforms from

```c
"space:current"
```

.

从 "空间：当前 "变换。

```c
vector  ptransform(string fromspace, string tospace, vector vec)
```

```c
vector4  ptransform(string fromspace, string tospace, vector4 vec)
```

Transforms the vector from `fromspace` into `tospace`.

将向量从空间转换到空间。

`fromspace`, `tospace`

The possible values for the space arguments are:

空间参数的可能值是。

An object path

一个物体路径

|

Use the object space of an object specified by a path string.

使用由路径字符串指定的对象的对象空间。

Tip

In some cases, such as point instancing, mantra mayautomatically mangle object
paths. You can generate an `.ifd`file and look inside to try to find what
mantra is callingthe object you want.

在某些情况下，例如点的实例化，mantra 可能会

---|---

```c
"space:object"
```

|

Object space of the _current_ object.

自动修改对象路径。你可以生成一个.ifd 文件，并在里面找到 mantra 调用的

`"space:light"`

|

Object space of the _current_ light when executing a shadow or light shader.

你想要的对象。

`"space:world"`

|

Houdini world space.

当前对象的对象空间。

```c
"space:camera"
```

|

mantra camera space.

当执行阴影或灯光着色器时，当前灯光的对象空间。

`"space:ndc"`

|

Normal Device Coordinate space.

Houdini 世界空间。

```c
"space:lightndc"
```

|

Normal Device Coordinate space for the _current_ light when executing a shadow
or light shader.

mantra 相机空间。

```c
"space:current"
```

|

The current space the vector is in.

Normal Device Coordinate（正常设备坐标）空间。

- [ptransform](ptransform.html "Transforms a vector from one space to another.") interprets the vector as a position.

当前光线在执行阴影或光影着色器时的法线设备坐标空间。

- [vtransform](vtransform.html "Transforms a directional vector.") interprets the vector as a directionvector, and so doesn‘t apply the translations from the matrix.

矢量所处的当前空间。

- [ntransform](ntransform.html "Transforms a normal vector.") interprets the vector as a normal vector,and so multiplies by the inverse transpose of the matrix (ignoring thetranslations).

ptransform 将向量解释为一个位置。

## Examples

The version with only a tospace argument assumes fromspace
is

```c
"space:current"
```

. For example:

vtransform 将矢量解释为一个方向

    Pworld = ptransform("space:world", P);

â¦is equivalent to:

向量，因此不应用矩阵的平移。

    Pworld = ptransform("space:current", "space:world", P);

Transform a vector from its current space to object space:

ntransform 将向量解释为法向量。

    ospace = ptransform("space:object", P)

Transform a vector from object space to mantra‘snatural coordinatespace
(“camera” space):

将一个矢量从物体空间转换到 mantraâs 的自然坐标

    ospace = ptransform("space:object", "space:current", P)
