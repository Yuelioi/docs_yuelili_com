---
title: volumesmoothsamplev
order: 16
category:
  - vex
---

`vector volumesmoothsamplev(<geometry>geometry, int primnum, vector pos)`

`vector volumesmoothsamplev(<geometry>geometry, string volumename, vector pos)`

`vector volumesmoothsamplev(<geometry>geometry, int primnum, vector pos, matrix3 &grad)`

`vector volumesmoothsamplev(<geometry>geometry, string volumename, vector pos, matrix3 &grad)`

`vector volumesmoothsamplev(<geometry>geometry, int primnum, vector pos, matrix3 &grad, matrix3 &hessX, matrix3 &hessY, matrix3 &hessZ)`

`vector volumesmoothsamplev(<geometry>geometry, string volumename, vector pos, matrix3 &grad, matrix3 &hessX, matrix3 &hessY, matrix3 &hessZ)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

## Returns

The volume primitive’s sampled value at the given position. Values between voxels are evaluated with smooth interpolation.

The `grad` is a matrix whose i-th column is the gradient of the i-th component of the volume.

Matrices `hessX`, `hessY`, `hessZ` are second derivatives of x, y and z component respectively.

Returns 0 if `primnum` or `inputnum` is out of range, the geometry is invalid, or the given primitive is not a volume or vdb primitive.

## Examples



Approximating a volume value at the point `P + u` using volume values at the point `P`.

```c
vector P = {1.0, 2.0, 3.0};
matrix3 grad, hessX, hessY, hessZ;
vector val1 = volumesmoothsamplev(0, "vel", P, grad, hessX, hessY, hessZ);

vector u = {0.1, 0.01, 0.001};
vector val2 = volumesmoothsamplev(0, "vel", P + u);

// By Taylor expansion we have:
// `val1 + u \* grad` is approximately equal to `val2`

// And the second order approximation:
// `val1 + u \* grad + 0.5 \* set(dot(u, u\*hessX), dot(u, u\*hessY), dot(u, u\*hessZ))`
// is appriximately equal to `val2`

```

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
