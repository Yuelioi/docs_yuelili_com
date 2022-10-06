---
title: solvecubic
order: 65
category:
  - houdini
---

## Description

`int solvecubic(float a, float b, float c, float d, float &t1, float &t2, float &t3)`

`int solvecubic(float a, float b, float c, float d, vector2 &t1, vector2 &t2, vector2 &t3)`

Solves the given cubic function where a , b, c, and d are the coefficients as
so: `ax^3 + bx^2 + cx + d = 0`

Returns the number of real roots.

In the real case the returned roots will be in ascending order. In case of
only one root that root is filled into t1, t2, and t3.

In the complex case t1, t2, and t3 are the complex roots.

## See also

- [solvequadratic](solvequadratic.html)
- [solvepoly](solvepoly.html)

### math

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

### solve

[agentsolvefbik](agentsolvefbik.html)

[solveconstraint](solveconstraint.html)

[solvecubic](solvecubic.html)

[solvecurve](solvecurve.html)

[solvefbik](solvefbik.html)

[solveik](solveik.html)

[solvephysfbik](solvephysfbik.html)

[solvepoly](solvepoly.html)

[solvequadratic](solvequadratic.html)

[solvetriangleSSS](solvetriangleSSS.html)
