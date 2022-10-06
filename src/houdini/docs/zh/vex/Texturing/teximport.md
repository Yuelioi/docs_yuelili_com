---
title: teximport
order: 11
category:
  - houdini
---
    
## 描述

Imports attributes from texture files.

On this page |

- Queryable attributes

可查询的属性

- Examples

---|---

```c
int  teximport(string map, string attribute, <type>&value)
```

Reads a single value. Returns `1` on success or `0` on failure.

读取一个单一的值。成功时返回 1，失败时返回 0。

```c
int  teximport(string map, string token, int|string&values[])
```

Returns the number of strings in the array.

返回数组中的字符串的数量。

Note that if the values cannot be imported, `values` will not be written to
and may remain uninitialized.

注意，如果数值不能被导入，数值将不会被写入，并可能保持未初始化状态。

This function queries metadata stored in an image file, and works with most
texture formats.

这个函数查询存储在图像文件中的元数据，适用于大多数纹理格式。

You can choose what properties are stored using the

```c
vm_saveoptions
```

Houdini
property on a camera or light(

```c
image:saveoptions
```

in
[IFD](../../render/ifd.html)).However, the defaults probably contain all the
information you'd want.See [rendering properties](../../props/index.html "Properties let you set up flexible and powerful hierarchies of rendering,
shading, lighting, and camera parameters.").

你可以使用摄像机或灯光上的 vm_saveoptionsHoudini 属性来选择存储的属性。

## Queryable attributes

There are several generic attributes you can always query:

(image:saveoptionsinIFD)。

```c
int texture:xres
```

不过，默认值可能包含了你想要的所有信息。

X resolution of the texture map.

见渲染属性。

```c
int texture:yres
```

有几个通用属性你可以随时查询。

Y resolution of the texture map.

int texture:xres

```c
int texture:channels
```

纹理贴图的 X 分辨率。

Number of channels in the texture map.

int texture:yres

```c
vector texture:resolution
```

纹理贴图的 Y 分辨率。

Resolution of the texture as the vector

```c
(xres, yres, channels)
```

.

int texture:channels

```c
matrix texture:worldtoview
```

纹理地图中的通道数。

The transform matrix that will take world space points into the cameraspace
used to generate the image.

vector texture:resolution（纹理分辨率）。

```c
matrix texture:projection
```

纹理的分辨率，即向量（xres, yres, channels）。

The transform matrix representing the projection matrix of the cameraused to
generate the image.

matrix texture:worldtoview 矩阵

```c
matrix texture:worldtondc
```

将世界空间的点转化为用于生成图像的相机空间的变换矩阵。

The transform matrix that will transform world spaced points into the NDCspace
of the camera used to make the image. The points are generated inhomogeneous
coordinates.That is, to get the values in the range 0 to 1:

转换矩阵，将世界范围内的点转换到制作图像的摄像机的 NDC 空间。

    matrix ndc;if (teximport(map, "texture:worldtoNDC", ndc)){vector P_ndc = pos * ndc;// If the camera is a perspective camera,// dehomogenize the pointif (getcomp(ndc, 2, 3) != 0){P_ndc.x = P_ndc.x / P_ndc.z;P_ndc.y = P_ndc.y / P_ndc.z;}// Finally, scale and offset XY// from [-1,1] to [0,1]P_ndc *= {.5, .5, 1};P_ndc += {.5, .5, 0};}

```c
string texture:tokens
```

的空间。这些点是以

A space separated list of all attribute names you can query.

同质坐标生成。 也就是说，要在 0 到 1 的范围内获取数值。

The

```c
string &values[]
```

version can query the following

string texture:tokens

```c
texture:channelnames
```

List of all the raster plane channel names.

一个以空格分隔的所有属性名称的列表，你可以查询。

```c
texture:channelsize
```

This returns an array of the number of floats in each image channel.

string &values[]版本可以查询到

```c
texture:channelstorage
```

This returns an array with a string for the underlying storage type foreach
channel (i.e.“uint8” or “real16”).

所有栅格平面通道名称的列表。

```c
texture:tokens
```

List of all the built-in tokens understood by `teximport()`.

这将返回一个数组，其中包含每个图像通道的浮点数。

Show/hide arguments

```c
string texture:device
```

返回一个数组，其中包含每个通道的底层存储类型的字符串。

The device that‘sused to evaluate the texture.Possible values are:

每个通道的基础存储类型（即 "uint8 "或 "real16"）。

- `native` \- Evaluated using the built-in Houdini texture engine

所有被 teximport()理解的内置令牌的列表。

- `oiio` \- Evaluated using OpenImageIO

string texture:device

- `ptex` \- Evaluated using Ptex

用于评估纹理的设备。 可能的值是。

## Examples

    cvex test(string map="Mandril.rat"){  for (string token : {          "texture:xres",          "texture:yres",          "texture:channels",          "texture:resolution",          "texture:tokens",          "image:pixelaspect",          "space:world"        })  {    float fval;    vector vval;    matrix mval;    printf("----------------- %s ---------------------\n", token);    if (teximport(map, token, fval))      printf("'%s' = %g\n", token, fval);    else if (teximport(map, token, vval))      printf("'%s' = %g\n", token, vval);    else if (teximport(map, token, mval))      printf("'%s' = %g\n", token, mval);  }}
