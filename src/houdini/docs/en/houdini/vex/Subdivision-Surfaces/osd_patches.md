---
title: osd_patches
order: 9
category:
  - houdini
---

## Description

`int [] osd_patches(<geometry>geometry, int face_id)`

Each face in a subdivision hull may create one or more patches. This function
lists the patch ids for a corresponding face.

This is implemented using the following algorithm:

```c
int [] osd_patches(const string file; const face_id) { int patches[] =
{};  int first = osd_firstpatch(file, face_id);  if (first >= 0)  { int
npatches = osd_patchcount(file, face_id);  for (int i = 0; i < npatches; i++)
append(patches, first+i);  } return patches; }
```

## See also

- [osd_facecount](osd_facecount.html)
- [osd_firstpatch](osd_firstpatch.html)
- [osd_limitsurface](osd_limitsurface.html)
- [osd_limitsurfacevertex](osd_limitsurfacevertex.html)
- [osd_patchcount](osd_patchcount.html)

### subd

[osd_facecount](osd_facecount.html)

[osd_firstpatch](osd_firstpatch.html)

[osd_limitsurface](osd_limitsurface.html)

[osd_limitsurfacevertex](osd_limitsurfacevertex.html)

[osd_lookupface](osd_lookupface.html)

[osd_lookuppatch](osd_lookuppatch.html)

[osd_patchcount](osd_patchcount.html)

[osd_patches](osd_patches.html)
