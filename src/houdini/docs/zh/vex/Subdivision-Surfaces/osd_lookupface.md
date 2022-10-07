---
title: osd_lookupface
order: 6
category:
  - vex
---

`int osd\_lookupface(<geometry>geometry, int patch\_id, float patch\_u, float patch\_v, int &face\_id, float &face\_u, float &face\_v)`

If you don’t specify a texture attribute, the function uses intrinsic polygon interpolants.

`int osd\_lookupface(<geometry>geometry, int patch\_id, float patch\_u, float patch\_v, int &face\_id, float &face\_u, float &face\_v, string attribute)`

If you specify a texture attribute, the function uses the UVs in that attribute to translate the patch coordinates onto the Houdini geometry.

Each polygon in a piece of geometry will generate one or more Catmull-Clark subdivision patches. A quadrilateral will generate a single patch, while a pentagon will generate five patches. This function helps map between the subdivision patch id and the Houdini polygon (face). The reverse function to map from face to patch is [osd_lookuppatch](osd_lookuppatch.html "Outputs the OSD patch and UV coordinates corresponding to the given coordinates on a Houdini polygon face.").

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`patch_id`

The ID number of the OSD patch.

`patch_u`, `patch_v`

The coordinates in the subdivision patch to map onto a Houdini primitive. These values should be in the range 0 to 1.

`&face_id`

The function overwrites this variable with the Houdini primitive number of the corresponding face.

`&face_u`, `&face_v`

The function overwrites these variables with the corresponding U/V coordinates on the Houdini face. The output coordinates will have values in the range 0 to 1.

## Returns

`1` on success or `0` on an error.

## Examples

[¶](#examples)

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
