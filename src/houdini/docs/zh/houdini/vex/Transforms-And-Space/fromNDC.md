---
title: fromNDC
order: 2
category:
  - houdini
---
    
## 描述

Transforms a position from normal device coordinates to the  
coordinates in the appropriate space.

```c
vector  fromNDC(vector v)
```

Transforms the vector from NDC space to the current space.

将矢量从 NDC 空间转换到当前空间。

```c
vector  fromNDC(string space, vector v)
```

Transforms the vector from NDC space to the named space.

将向量从 NDC 空间转换到指定空间。

`space`

The possible values for the space arguments are:

空间参数的可能值是。

An object path

一个对象路径

|

Use the object space of an object specified by a path string.

使用由路径字符串指定的对象的空间。

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

Warning

NDC space is only well-defined for the[Displacement, Surface, and Light
contexts](../contexts/shading_contexts.html).

当前光线在执行阴影或光影着色器时的法线设备坐标空间。
