---
title: volumeindexorigin
order: 8
category:
  - vex
---

`vector volumeindexorigin(<geometry>geometry, int primnum)`

`vector volumeindexorigin(<geometry>geometry, string volumename)`

## Arguments

## Returns

The index of the bottom left of a volume primitive.
For Volume primitives, this is always zero. However, for VDB primitives,
this represents the bottom left of their active bounding box of voxels.

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
