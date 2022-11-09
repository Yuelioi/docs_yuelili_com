---
title: cracktransform
order: 4
category:
  - vex
---

`vector cracktransform(int trs, int xyz, int c, vector pivot, vector pivot_rotate, matrix xform)`

`vector cracktransform(int trs, int xyz, int c, vector pivot, matrix xform)`

Depending on the value of c, returns the translate (`c=0`), rotate
(`c=1` or `c=4`), scale (`c=2`) or shears (`c=3`) component of the transform (xform). The
function uses the given transform and rotation orders (trs and
xyz) , the given pivot point (pivot) and optional pivot rotation (pr) to calculate the return
value. The specifications for the trs and xyz parameters can be
found in `$HFS/houdini/vex/include/math.h`.

::: info Note

Rotation angles (when `c=1`) are returned in degrees, whereas many other VEX functions use radians.
You can use the [radians](radians.html) ("Converts the argument from degrees into radians.") VEX function to convert the vector of angles in degrees to a vector of angles in radians.
For example: `vector angles = radians(cracktransform(XFORM_TRS, XFORM_XYZ, 1, {0,0,0}, M));`

::: info Note

Rotation angles (when `c=4`) are returned in radians.

`void cracktransform(int trs, int xyz, vector pivot, vector pivot_rotate, matrix xform, vector &t, vector &r, vector &s, vector &shears)`

Returns the translate, rotate, scale, and shear components of xform in t, r, s, and shears, respectively.
If more than one component is needed, using this overload is more efficient than making multiple calls to the other function signature.

`void cracktransform(int trs, int xyz, vector pivot, matrix xform, vector &t, vector &r, vector &s)`

Returns the translate, rotate, and scale of xform in t, r, s respectively.
This overload doesn’t support pivot_rotate or shears.
If more than one component is needed, using this overload is more efficient than making multiple calls to the other function signature.

## See also

- [quaternion](quaternion.html)
- [polardecomp](polardecomp.html)
- [eulertoquaternion](eulertoquaternion.html)
- [qconvert](qconvert.html)

|
math

[Du](Du.html)

[Dv](Dv.html)

[Dw](Dw.html)

[abs](abs.html)

[acos](acos.html)

[asin](asin.html)

[atan](atan.html)

[atten](atten.html)

[avg](avg.html)

[cbrt](cbrt.html)

[ceil](ceil.html)

[cos](cos.html)

[cosh](cosh.html)

[cracktransform](cracktransform.html)

[cross](cross.html)

[degrees](degrees.html)

[dot](dot.html)

[erf](erf.html)

[erf_inv](erf_inv.html)

[erfc](erfc.html)

[exp](exp.html)

[floor](floor.html)

[frac](frac.html)

[fuzzify](fuzzify.html)

[getderiv](getderiv.html)

[isfinite](isfinite.html)

[isnan](isnan.html)

[log](log.html)

[log10](log10.html)

[max](max.html)

[min](min.html)

[pow](pow.html)

[product](product.html)

[radians](radians.html)

[resample_linear](resample_linear.html)

[rint](rint.html)

[shl](shl.html)

[shr](shr.html)

[shrz](shrz.html)

[sign](sign.html)

[sin](sin.html)

[sinh](sinh.html)

[solvecubic](solvecubic.html)

[solvepoly](solvepoly.html)

[solvequadratic](solvequadratic.html)

[solvetriangleSSS](solvetriangleSSS.html)

[sqrt](sqrt.html)

[sum](sum.html)

[tan](tan.html)

[tanh](tanh.html)

[trunc](trunc.html)

[variance](variance.html)

|
matrix

[__uniform_mul](### uniform_mul.html)

[__uniform_premul](### uniform_premul.html)

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
