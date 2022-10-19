---
title: osd_patches
order: 9
category:
  - vex
---

`int [] osd\_patches(<geometry>geometry, int face\_id)`

在一个细分船体中的每个面都可以创建一个或多个补丁。这个函数列出了一个相应面的补丁 ID。

这是用以下算法实现的。

```c
int []
osd\_patches(const string file; const face\_id)
{
 int patches[] = {};
 int first = osd\_firstpatch(file, face\_id);
 if (first >= 0)
 {
 int npatches = osd\_patchcount(file, face\_id);
 for (int i = 0; i < npatches; i++)
 append(patches, first+i);
 }
 return patches;
}

```

## See also

- [osd_facecount](osd_facecount.html)
- [osd_firstpatch](osd_firstpatch.html)
- [osd_limitsurface](osd_limitsurface.html)
- [osd_limitsurfacevertex](osd_limitsurfacevertex.html)
- [osd_patchcount](osd_patchcount.html)

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
