---
title: instance
order: 6
category:
  - vex
---

`matrix instance(vector P, vector N)`

`matrix instance(vector P, vector N, vector scale)`

`matrix instance(vector P, vector N, vector scale, vector pivot)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector up)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector up, vector pivot)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector4 orient)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector4 orient, vector pivot)`

Creates a transform matrix from the given arguments, using the same
method that the [Copy SOP](../../nodes/sop/copy.html) uses to transform its
output instances. The instance is placed at point `P`, oriented
along the normal direction `N`, and, optionally, scaled by `scale`. An
optional `pivot` parameter can be supplied as the local transformation point
for the instance.

The function supports two methods for setting rotation. The first method
requires an explicit `up` vector, which should be tangent to `N`. This
`up` vector, along with `N`, is used to construct an orthonormal frame
in which the rotation takes place.
The second method uses an explicit orientation relative to the XYZ axis
to construct the frame.



## See also

- [scale](scale.html)
- [rotate](rotate.html)
- [translate](translate.html)

|
matrix

[\_\_uniform\_mul](### uniform_mul.html)

[\_\_uniform\_premul](### uniform_premul.html)

[combinelocaltransform](combinelocaltransform.html)

[cracktransform](cracktransform.html)

[determinant](determinant.html)

[diagonalizesymmetric](diagonalizesymmetric.html)

[dihedral](dihedral.html)

[eigenvalues](eigenvalues.html)

[extractlocaltransform](extractlocaltransform.html)

[ident](ident.html)

[instance](instance.html)

[invert](invert.html)

[lookat](lookat.html)

[maketransform](maketransform.html)

[outerproduct](outerproduct.html)

[premul](premul.html)

[prerotate](prerotate.html)

[prescale](prescale.html)

[pretranslate](pretranslate.html)

[rotate](rotate.html)

[scale](scale.html)

[smoothrotation](smoothrotation.html)

[svddecomp](svddecomp.html)

[translate](translate.html)

[transpose](transpose.html)
