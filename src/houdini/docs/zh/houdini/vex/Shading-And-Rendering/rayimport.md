---
title: rayimport
order: 59
category:
  - houdini
---
    
## 描述

Imports a value sent by a shader in a gather loop.

Context(s) | [fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
int  rayimport(string name, <type>&value)
```

```c
int  rayimport(string name, <type>&value[])
```

Extracts information any passed when the surface is hit by a ray fired by the
[gather](gather.html "Sends rays into the scene and returns information from
the shaders ofsurfaces hit by the rays.").

当曲面被采集器发射的射线击中时，提取任何传递的信息。

`name`

The variable name, as passed using a

```c
"send:name", value
```

argument pair in
[gather](gather.html "Sends rays into the scene and returns information from
the shaders ofsurfaces hit by the rays.") (without the `send:` prefix).

变量的名称，如使用 "send:name", valueargument pair ingather（没有 send:前缀）传递的。

`value`

If the function can import the named variable, it overwrites this variable
with the value.

如果函数可以导入命名的变量，它将用该值覆盖这个变量。

Returns

`1` if a value by the given name was successfully imported, or `0` otherwise.

如果成功地导入了一个给定名称的值，则用该值覆盖该变量。

## Built-in queryable names v3

You can pass the following values to `name` to query built-in ray information
(not sent from `gather()`).

你可以将下列值传递给 ameto，以查询内置射线信息（不是从 gather()发送的）。

`ray:P` (`vector`)

The origin of the ray.

射线的原点。

`ray:D` (`vector`)

The direction vector of the ray.

射线的方向向量。

`ray:time` (`float`)

The shutter time associated with the ray.

与射线相关的快门时间。

`ray:hitstack` (`int[]`)

The hit-stack provided by the intersector.

扇区间提供的命中堆栈。

`ray:element` (`int`)

The element provided by the intersector.

扇区提供的元素。

`ray:hituv` (`vector`)

The parametric coordinates provided by the intersector.

扇区提供的参数化坐标。

`ray:Ng` (`vector`)

The geometric normal from the intersector.

扇区的几何法线。

Note

Data provided by the Mantra 3 intersector is raw data and may not be
meaningful, or may be different across platforms or versions.

Mantra 3 互斥器提供的数据是原始数据，可能没有意义，或者在不同的平台或版本中可能有所不同。
