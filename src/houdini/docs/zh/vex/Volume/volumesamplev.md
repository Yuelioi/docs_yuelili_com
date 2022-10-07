---
title: volumesamplev
order: 14
category:
  - vex
---

`vector volumesamplev(<geometry>geometry, int primnum, vector pos)`

`vector volumesamplev(<geometry>geometry, string volumename, vector pos)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

## Returns

The volume primitive’s sampled value at the given position. Values between voxels will be trilinearly interpolated.

VDBs can have vector data which will be reported by this. Volumes are always scalar, but if `Cd` is the volumename, the function will try to evaluate `Cd.x`, `Cd.y`, and `Cd.z` and report the joined values. (rgb can also be used as extensions)

Returns 0 if `primnum` or `inputnum` is out of range, the geometry is invalid, or the given primitive is not a vector volume primitive.

volume

[gradient](gradient.html)

[volume](volume.html)

[volumecubicsample](volumecubicsample.html)

[volumecubicsamplev](volumecubicsamplev.html)

[volumegradient](volumegradient.html)

[volumeindex](volumeindex.html)

[volumeindexactive](volumeindexactive.html)

[volumeindexorigin](volumeindexorigin.html)

[volumeindextopos](volumeindextopos.html)

[volumeindexv](volumeindexv.html)

[volumepostoindex](volumepostoindex.html)

[volumeres](volumeres.html)

[volumesample](volumesample.html)

[volumesamplev](volumesamplev.html)

[volumesmoothsample](volumesmoothsample.html)

[volumesmoothsamplev](volumesmoothsamplev.html)

[volumevoxeldiameter](volumevoxeldiameter.html)
