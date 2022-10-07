---
title: osd_lookupface
order: 6
category:
  - vex
---

`int osd\_lookupface(<geometry>geometry, int patch\_id, float patch\_u, float patch\_v, int &face\_id, float &face\_u, float &face\_v)`

如果你不指定纹理属性，该函数使用内在的多边形插值。

`int osd\_lookupface(<geometry>geometry, int patch\_id, float patch\_u, float patch\_v, int &face\_id, float &face\_u, float &face\_v, string attribute)`

如果您指定了一个纹理属性，该函数会使用该属性中的 UV 来将补丁坐标转换到 Houdini 几何体上。

一块几何体中的每个多边形都会产生一个或多个 Catmull-Clark 细分补丁。一个四边形将产生一个补丁，而一个五边形将产生五个补丁。这个函数有助于在细分补丁 ID 和 Houdini 多边形（面）之间进行映射。从面到补丁的反向函数是[osd_lookuppatch](osd_lookuppatch.html)（"输出对应于胡迪尼多边形面上给定坐标的 OSD 补丁和 UV 坐标。"）。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`patch_id`

OSD 补丁的 ID 号。

`patch_u`, `patch_v`

要映射到 Houdini 基元上的细分补丁中的坐标。这些值应该在 0 到 1 的范围内。

`&face_id`

该函数用相应面孔的胡迪尼原始编号来覆盖这个变量。

`&face_u`, `&face_v`

该函数用 Houdini 面上相应的 U/V 坐标来覆盖这些变量。输出的坐标值将在 0 到 1 的范围内。

## Returns

`1`表示成功，`0`表示错误。

## Examples



```c
void
scatterOnLimitSurface(string file, texmap; int geo\_handle; int npts)
{
 int npatches = osd\_patchcount(file);
 for (int i = 0; i < npts; ++i)
 {
 int patch\_id = nrandom() \* npatches;
 float patch\_s = nrandom();
 float patch\_t = nrandom();
 int face\_id;
 float face\_u, face\_v;
 if (osd\_lookupface(file, patch\_id, patch\_s, patch\_t, face\_id, face\_u, face\_v, "uv"))
 {
 vector clr = texture(texmap, face\_u, face\_v);
 vector P;
 osd\_limitsurface(file, "P", patch\_id, patch\_s, patch\_t, P);
 int ptnum = addpoint(geo\_handle, P); // add a scattered point.
 if (ptnum >= 0)
 {
 addpointattrib(geo\_handle, "Cd", clr);
 addpointattrib(geo\_handle, "face\_id", face\_id);
 }
 }
 }
}

```

## See also

- [osd_lookuppatch](osd_lookuppatch.html)
- [osd_patchcount](osd_patchcount.html)
- [osd_facecount](osd_facecount.html)
- [osd_firstpatch](osd_firstpatch.html)
- [osd_limitsurface](osd_limitsurface.html)

|
subd

[osd_facecount](osd_facecount.html)

[osd_firstpatch](osd_firstpatch.html)

[osd_limitsurface](osd_limitsurface.html)

[osd_limitsurfacevertex](osd_limitsurfacevertex.html)

[osd_lookupface](osd_lookupface.html)

[osd_lookuppatch](osd_lookuppatch.html)

[osd_patchcount](osd_patchcount.html)

[osd_patches](osd_patches.html)
