---
title: slerp
order: 10
category:
  - houdini
---
    
## 描述

Quaternion blend between q1 and q2 based on the bias.

```c
vector4  slerp(vector4 q1, vector4 q2, float bias)
```

Blends between quaternions q1 and q2 based on the bias.

基于 bias 的四元数 q1 和 q2 之间的混合。

```c
vector4  slerp(vector4 qs[], float weights[])
```

Blends between any number of quaternions with the specified corresponding
weights.

```c
slerp(q1,q2,bias)
```

should be approximately equivalent to

```c
slerp(array(q1,q2), array(1.0-bias,bias))
```

.

slerp(q1,q2,bias)应该与 oslerp(array(q1,q2), array(1.0-bias,bias))大致相等。

```c
matrix3  slerp(matrix3 m1, matrix3 m2, float bias)
```

```c
matrix  slerp(matrix m1, matrix m2, float bias)
```

Blends between matrix m1 and m2 based on the bias.

基于 bias 的矩阵 m1 和 2 之间的混合。

```c
matrix3  slerp(matrix3 ms[], float weights[])
```

```c
matrix  slerp(matrix ms[], float weights[])
```

Blends between any number of matrices with the specified corresponding weights
via blending of their components via polar decomposition.

通过极地分解的组件混合，在任意数量的矩阵之间进行指定的相应权重的混合。
