---
title: osd_patches
order: 9
category:
  - vex
---

`int [] osd\_patches(<geometry>geometry, int face\_id)`

Each face in a subdivision hull may create one or more patches. This function lists the patch ids for a corresponding face.

This is implemented using the following algorithm:

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
