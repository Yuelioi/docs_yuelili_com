---
title: osd_patchcount
order: 8
category:
  - vex
---

`int osd_patchcount(<geometry>geometry)`

返回由几何体文件名指定的细分外壳中的基层补丁的数量。这与细分外壳中的面的数量不同。例如，在一个四面体中，每个三角形面将产生三个补丁。

`int osd_patchcount(<geometry>geometry, int face_id)`

对于粗略网格中的一个给定的面，这将返回由该面产生的补丁数量。四边形只产生一个补丁，而其他所有面都会根据其顶点数量产生多个补丁。例如，一个三角形会产生 3 个补丁，一个五边形会产生 5 个补丁。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

## See also

- [osd_facecount](osd_facecount.html)
- [osd_firstpatch](osd_firstpatch.html)
- [osd_limitsurface](osd_limitsurface.html)

|
count

[npoints](npoints.html)

[npointsgroup](npointsgroup.html)

[nprimitives](nprimitives.html)

[nprimitivesgroup](nprimitivesgroup.html)

[nvertices](nvertices.html)

[nverticesgroup](nverticesgroup.html)

[osd_facecount](osd_facecount.html)

[osd_patchcount](osd_patchcount.html)

[pcsize](pcsize.html)

[primvertexcount](primvertexcount.html)

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
