---
title: osd_facecount
order: 2
category:
  - vex
---

`int osd\_facecount(<geometry>geometry)`

返回细分曲面中粗面的数量。这与细分曲面中的斑点数量不同。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

## See also

- [osd_facecount](osd_facecount.html)
- [osd_firstpatch](osd_firstpatch.html)
- [osd_limitsurface](osd_limitsurface.html)
- [osd_patchcount](osd_patchcount.html)

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
