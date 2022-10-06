---
title: pcwrite
order: 31
category:
  - houdini
---
    
## 描述

Writes data to a point cloud file.

```c
int  pcwrite(string filename, ...)
```

Writes data for the current shading point out to a point cloud file.

将当前遮阳点的数据写到点云文件。

`filename`

The name of the file to write to. You can read the resulting file into a
geometry network with the [![](../../icons/COMMON/file.svg)File surface
node](../../nodes/sop/file.html "Reads, writes, or caches geometry on disk.").
This file should have a `.pc` extension (Houdini will use the extension to
determine how to import the file).

要写入的文件名称。你可以通过文件表面节点将生成的文件读入几何网络。这个文件应该有一个.pce 的扩展名（Houdini 会使用扩展名来决定如何导入该文件）。

`â¦`

Subsequent arguments specify one or more pairs of a channel name (a string
naming the attribute you're saving, such as `"P"`, `"N"`, `"v"`, `"area"`,
`"u"`, etc.) and value (the value you wish to store).

随后的参数指定一对或多对通道名称（命名你要保存的属性的字符串，如 "P"、"N"、"v"、"面积"、"u "等）和值（你想存储的值）。

    pcwrite("out.pc", "P", P, "N", N)

To write a variable as a vector type instead of a triple, append `:vector` to
the channel name.

要把一个变量写成矢量类型而不是三段式，在通道名称后面加上:矢量。

    pcwrite("out.pc", "P", P, "N:vector", N)

In micropolygon rendering, points are interpolated with neighbor points so
that duplicate vertices on corners and edges are eliminated in the point
cloud.If you want to disable this behavior, use the `"interpolate"` argument
described below.

在微多边形渲染中，点会与邻近的点进行插值，这样角和边上的重复顶点会在点云中被消除。 如果你想禁止这种行为，请使用下面描述的 "插值 "参数。

"interpolate",` int``=1 `

When you pass this argument a value of `1` (the default), one interpolated
point is written representing the four corners of a micropolygon. This
prevents writing out overlapping values.

当你传递这个参数的值为 1（默认值）时，一个插值点将被写入代表一个微多边形的四个角。这可以防止写出重叠的值。

    pcwrite("out.pc", "P", P, "interpolate", 1)

Using a value of `0` will disable interpolation, which can be useful when
writing points that are not based on `P`. Interpolation will have no effect in
ray tracing mode.

使用 0 的值将禁用插值，这在写入不基于 P 的点时可能很有用。插值在光线跟踪模式下没有效果。

(Note that this means you can‘t use `interpolate` as the name of a data
channel.)

(注意，这意味着你不能使用 interpolate 作为数据通道的名称）。

"countphotons",`int`

For photon generation modes, add the number of points storedto the total
number of photons, for the purposes of progress reporting and terminationof
photon map generation.

对于光子生成模式，将存储的点的数量加上

"mkdir",` int``=0 `

When you pass an argument of `1`, the function will automatically create
missing sub-directories/paths.

储存的点的数量加到光子的总数上，以便报告进度和终止光子图的生成。

## Examples

    surfacedumpsomepoints(string fname = "points.$F4.pc"; int do_cull = 0; float keepamt = 0.05){  vector  nn = normalize(frontface(N, I));  int    rval=0;  float   A = area(P,"smooth",0); // area without smoothed derivs  if( !do_cull || do_cull & (nrandom()<keepamt) )  {    if( do_cull && keepamt > 0 )    {      A = A/keepamt;    }    rval = pcwrite(fname, "interpolate", 1,    "P", ptransform("space:camera","space:world", P),    "N", ntransform("space:camera","space:world", normalize(N)),    "area", A); // output an "area" channel in pc  }  Cf =abs(nn)*rval;}
