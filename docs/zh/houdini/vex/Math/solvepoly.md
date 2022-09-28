---
title: solvepoly
order: 60
category:
  - houdini
---
    
## 描述

Finds the real roots of a polynomial.

```c
int  solvepoly(float coef[], float &roots[], int maxiter=0)
```

`coef`

An array of coefficients of the polynomial.

多项式的系数数组。

You must order the coefficients such that `coef[i]` should be `x^i`. **This is
reverse of the order you would write the polynomial out normally**.

你必须对系数进行排序，使得 coef[i]应该是 ex^i。这与你正常写出多项式的顺序相反。

`&roots`

The function overwrites this array with the real roots of the polynomial,in
ascending order.

该函数用多项式的实数根来覆盖这个数组。

Returns

The number of real roots.

以升序排列。
