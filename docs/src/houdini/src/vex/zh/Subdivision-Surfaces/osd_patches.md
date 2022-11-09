---
title: osd_patches
order: 9
category:
  - vex
---

`int [] osd_patches(<geometry>geometry, int face_id)`

在一个细分船体中的每个面都可以创建一个或多个补丁。这个函数列出了一个相应面的补丁 ID。

这是用以下算法实现的。

```c
int []
osd_patches(const string file; const face_id)
{
 int patches[] = {};
 int first = osd_firstpatch(file, face_id);
 if (first >= 0)
 {
 int npatches = osd_patchcount(file, face_id);
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
