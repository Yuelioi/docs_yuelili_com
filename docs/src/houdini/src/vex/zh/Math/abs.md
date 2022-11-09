---
title: abs
order: 2
category:
  - vex
---

`int abs(int n)`

`float abs(float n)`

`<vector> abs(<vector>v)`

返回数字的绝对（正）等值。对于向量，这是按分量进行的。

## Examples



标量的例子

```c
if (abs(n) > 1) {
 // n is greater than 1 or less than -1
}

```

Vector example

```c
vector v = {1.0, -0.5, 1.1}
if (abs(v) > 1.0) {
 // vector is greater than unit scale
}

```

## See also

- [sign](sign.html)

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
number

[abs](abs.html)

[ceil](ceil.html)

[exp](exp.html)

[floor](floor.html)

[frac](frac.html)

[log](log.html)

[log10](log10.html)

[pow](pow.html)

[rint](rint.html)

[sqrt](sqrt.html)
