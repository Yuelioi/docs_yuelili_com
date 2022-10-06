---
title: abs
order: 1
category:
  - houdini
---
    
## 描述

Returns the absolute value of the argument.

```c
int  abs(int n)
```

```c
float  abs(float n)
```

```c
<vector> abs(<vector>v)
```

Returns the absolute (positive) equivalent of the number. For vectors, this is
done per-component.

返回数字的绝对（正）等值。对于向量，这是按分量进行的。

## Examples

Scalar example

标量的例子

    if (abs(n) > 1) {// n is greater than 1 or less than -1}

Vector example

矢量例子

    vector v = {1.0, -0.5, 1.1}if (abs(v) > 1.0) {  // vector is greater than unit scale}
