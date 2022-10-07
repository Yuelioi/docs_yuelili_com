---
title: dot
order: 16
category:
  - vex
---

`float dot(vector2 a, vector2 b)`

`float dot(vector a, vector b)`

`float dot(vector4 a, vector4 b)`

`float dot(vector a, vector4 b)`

`float dot(vector4 a, vector b)`

`float dot(matrix2 a, matrix2 b)`

`float dot(matrix3 a, matrix3 b)`

`float dot(matrix a, matrix b)`

Returns the [dot product](http://en.wikipedia.org/wiki/Dot_product) of the arguments.

When dotting a `vector` with a `vector4`, only the first three
components are used.

`float dot(<type>a[], <type>b[])`

`int dot(int a[], int b[])`

Returns the sum of dot products i.e. `dot(a, b) = dot(a[0], b[0]) + ... + dot(a[n-1], b[n-1])` where `n = min(len(a), len(b))`.



## See also

- [cross](cross.html)

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
vector

[Du](Du.html)

[Dw](Dw.html)

[avg](avg.html)

[cross](cross.html)

[distance2](distance2.html)

[dot](dot.html)

[length](length.html)

[length2](length2.html)

[normalize](normalize.html)

[outerproduct](outerproduct.html)

[pretranslate](pretranslate.html)

[rotate_x_to](rotate_x_to.html)

[smoothrotation](smoothrotation.html)

[swizzle](swizzle.html)

[translate](translate.html)
