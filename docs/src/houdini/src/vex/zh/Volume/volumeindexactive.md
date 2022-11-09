---
title: volumeindexactive
order: 7
category:
  - vex
---

Since 17.5

`int volumeindexactive(<geometry>geometry, int primnum, vector voxel)`

`int volumeindexactive(<geometry>geometry, string volumename, vector voxel)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

## Returns

Whether a specific voxel in a volume primitive is active.

While `volumesample` and `volumeindex` will always return values for any location in space, the actual voxel array is only defined for a subset of space. For volumes, this is a square grid. For VDBs, the shape of the active area can be arbitrary.

Returns 0 if `primnum` is out of range, the geometry is invalid, or the given primitive is not a volume primitive.

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
