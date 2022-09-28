---
title: metaimport
order: 1
category:
  - houdini
---
    
## 描述

Once you get a handle to a metaball using metastart and metanext, you  
can query attributes of the metaball with metaimport.

```c
int  metaimport(int handle, string attrib, vector P, <type>&value)
```

```c
<type>[] metaimport(string file, string attribute, vector P)
```

Rather than iterating over all the values, this form imports the values from
all metaballs simultaneously. As with the scalar form, you can use the
keywordsâ¦

这种形式不是对所有的值进行迭代，而是同时从所有的 metaballs 导入值。与标量形式一样，你可以使用关键字 â¦

- `meta:density`

- `meta:prim`

-

```c
meta:transform
```

â¦to import non-attribute information from the metaballs.

来导入 metaballs 中的非属性信息。

Once you get a handle to a metaball using [metastart](metastart.html "Open a
geometry file and return a handle for the metaballs ofinterest, at the
position p.") and[metanext](metanext.html "Iterate to the next metaball in the
list of metaballs returned by the metastart() function."), you can query
attributes of the metaball with`metaimport`.

一旦你使用 metastartandmetanext 获得了一个元组的句柄，你就可以用 metaimport 查询元组的属性。

There are three “special” attributes you can query:

有三个 "特殊 "的属性你可以查询。

```c
float meta:density
```

:The density of the current metaball

float meta:密度。

```c
float meta:prim
```

:The primitive number of the current metaball

当前元宝的密度

```c
matrix meta:transform
```

:The transform associated with the current metaball.
Applying theinverse of this transform will transform a point into the “space”
ofthe metaball.

float meta:prim:

For example, the [metaweight](metaweight.html "Returns the metaweight of the
geometry at position p.") function can be expressed in the followingway:

当前元宝的基元编号

    floatmetaweight(string file; vector P){inthandle;floatdensity, tmp;density = 0;handle = metastart(file, P);while (metanext(handle)){if (metaimport(handle, "meta:density", P, tmp))density += tmp;}return density;}

The attributes evaluated are un-premultiplied by the weight of themetaball at
the position and must be multiplied for blending. Forexample, to evaluate a
vector attribute (say color) on metaballs, thefollowing function could be
used:

matrix meta:transform:

    vectormeta_attribute(string file, attrib_name; vector P){inthandle;vectorresult, tmp;floatdensity;handle = metastart(file, P);result = 0;while (metanext(handle)){if (metaimport(handle, "meta:density", P, density)){if (metaimport(handle, attrib_name, P, tmp))result += density * tmp;}return result;}

In the i3d context, there is a default metaball geometry (specifiedby the `-g`
option on the command line to the i3dgen program). If thefilename is an empty
string, the default geometry will be used.

与当前元宝相关的变换。应用此变换的
