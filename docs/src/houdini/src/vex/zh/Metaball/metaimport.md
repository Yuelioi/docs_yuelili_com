---
title: metaimport
order: 2
category:
  - vex
---

`int metaimport(int handle, string attrib, vector P, <type>&value)`

`<type>[] metaimport(string file, string attribute, vector P)`

这种形式不是对所有的值进行迭代，而是同时从所有的 metaballs 导入值。与标量形式一样，你可以使用关键字...

- `meta:density`（密度）。
- `meta:prim'(中文)
- `meta:transform`。

...从 metaballs 导入非属性信息。

一旦你使用[metastart](metastart.html) ("打开一个几何文件，并返回一个在位置p的感兴趣的metaballs的句柄。")和[metanext](metanext.html) () ("在 metastart()函数返回的 metaballs 列表中迭代到下一个 metaballs。")得到一个 metaball 的句柄，你可以用`metaimport`查询 metaball 的属性。

有三个 "特殊 "属性可以查询。

`float meta:density` : 当前元宝的密度。

`float meta:prim` : 当前元宝的原始编号。

`matrix meta:transform`：与当前元宝相关的变换。应用这个变换的逆运算可以将一个点变换到元宝的 "空间 "里。

例如，[metaweight](metaweight.html)（"返回位置 p 处的几何体的元重量"）函数可以用以下方式表示。

```c
float
metaweight(string file; vector P)
{
int handle;
float density, tmp;

density = 0;
handle = metastart(file, P);
while (metanext(handle))
{
if (metaimport(handle, "meta:density", P, tmp))
density += tmp;
}
return density;
}

```

The attributes evaluated are un-premultiplied by the weight of the
metaball at the position and must be multiplied for blending. For
example, to evaluate a vector attribute (say color) on metaballs, the
following function could be used:

```c
vector
meta_attribute(string file, attrib_name; vector P)
{
int handle;
vector result, tmp;
float density;

handle = metastart(file, P);
result = 0;
while (metanext(handle))
{
if (metaimport(handle, "meta:density", P, density))
{
if (metaimport(handle, attrib_name, P, tmp))
result += density \* tmp;
}
return result;
}

```

In the i3d context, there is a default metaball geometry (specified
by the `-g` option on the command line to the i3dgen program). If the
filename is an empty string, the default geometry will be used.

metaball

[metaimport](metaimport.html)

[metamarch](metamarch.html)

[metanext](metanext.html)

[metastart](metastart.html)

[metaweight](metaweight.html)
