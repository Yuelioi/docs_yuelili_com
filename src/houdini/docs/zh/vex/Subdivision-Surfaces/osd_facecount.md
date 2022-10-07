---
title: osd_facecount
order: 2
category:
  - vex
---

`int osd\_facecount(<geometry>geometry)`

Returns the number of coarse faces in the subdivision hull. This is different that the number of patches in the subdivision surface.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.



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
