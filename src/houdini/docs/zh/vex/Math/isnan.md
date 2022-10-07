---
title: isnan
order: 31
category:
  - vex
---

`int isnan(float x)`

如果给定的值不是一个数字，则返回 1。

如果是一个正常的数字或无限大，则返回 0。

NAN，即 Not A Number，是一个特殊的数值，浮点数可以被设置为信号，表明在计算中出了问题。它们会被所有进一步的操作带入（与它们相加或相乘会产生更多的 NAN），并且容易导致下游操作的问题。

在传统的编程中，这些都是由 0/0 或`sqrt(-1)`产生的，但在 VEX 中，大多数这样的操作都是受保护的，所以通常 VEX 不会产生 NANs。

浮动

[isfinite](isfinite.html)

[isnan](isnan.html)

| 数学

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
