---
title: osd_lookupface
order: 5
category:
  - houdini
---
    
## 描述

Outputs the Houdini face and UV coordinates corresponding to the given
coordinates on an OSD patch.

`int osd_lookupface(<geometry>geometry, int patch_id, float patch_u, float patch_v, int &face_id, float &face_u, float &face_v)`

If you don‘t specify a texture attribute, the function uses intrinsic
polygon interpolants.

如果您没有指定一个纹理属性，该函数将使用内在的多边形插值。

`int osd_lookupface(<geometry>geometry, int patch_id, float patch_u, float patch_v, int &face_id, float &face_u, float &face_v, string attribute)`

If you specify a texture attribute, the function uses the UVs in that
attribute to translate the patch coordinates onto the Houdini geometry.

如果您指定了一个纹理属性，该函数将使用该属性中的 UV 来将补丁坐标转换到 Houdini 几何体上。

Each polygon in a piece of geometry will generate one or more Catmull-Clark
subdivision patches.A quadrilateral will generate a single patch, while a
pentagon will generate five patches.This function helps map between the
subdivision patch id and the Houdini polygon (face). The reverse function to
map from face to patch is [osd_lookuppatch](osd_lookuppatch.html "Outputs the
OSD patch and UV coordinates corresponding to the given coordinates on a
Houdini polygon face.").

一块几何体中的每个多边形都会产生一个或多个 Catmull-Clark 细分补丁。 一个四边形将产生一个补丁，而一个五边形将产生五个补丁。
这个函数有助于在细分补丁 ID 和 Houdini 多边形（面）之间进行映射。从面到补丁的反向函数是 osd_lookuppatch。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是一个 op:/path/to/sopreference。

`patch_id`

The ID number of the OSD patch.

OSD 补丁的 ID 号。

`patch_u`, `patch_v`

The coordinates in the subdivision patch to map onto a Houdini primitive.
These values should be in the range 0 to 1.

要映射到 Houdini 基元上的细分补丁的坐标。这些值应该在 0 到 1 的范围内。

`&face_id`

The function overwrites this variable with the Houdini primitive number of the
corresponding face.

该函数用相应面的胡迪尼基元编号来覆盖这个变量。

`&face_u`, `&face_v`

The function overwrites these variables with the corresponding U/V coordinates
on the Houdini face. The output coordinates will have values in the range 0 to

1.

该函数用胡迪尼面的相应 U/V 坐标来覆盖这些变量。输出的坐标值将在 0 到 1 的范围内。

Returns

`1` on success or `0` on an error.

成功时为 1，错误时为 0。

## Examples

    voidscatterOnLimitSurface(string file, texmap; int geo_handle; int npts){  int npatches = osd_patchcount(file);  for (int i = 0; i < npts; ++i)  {    int patch_id = nrandom() * npatches;    float patch_s = nrandom();    float patch_t = nrandom();    int face_id;    float face_u, face_v;    if (osd_lookupface(file, patch_id, patch_s, patch_t, face_id, face_u, face_v, "uv"))    {      vector clr = texture(texmap, face_u, face_v);      vector P;      osd_limitsurface(file, "P", patch_id, patch_s, patch_t, P);      int ptnum = addpoint(geo_handle, P);    // add a scattered point.      if (ptnum >= 0)      {        addpointattrib(geo_handle, "Cd", clr);        addpointattrib(geo_handle, "face_id", face_id);      }    }  }}
