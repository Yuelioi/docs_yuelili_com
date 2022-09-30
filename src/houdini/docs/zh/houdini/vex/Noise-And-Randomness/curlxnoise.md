---
title: curlxnoise
order: 3
category:
  - houdini
---
    
## 描述

Computes divergence free noise based on Simplex noise.

```c
vector  curlxnoise(vector xyz)
```

```c
vector  curlxnoise(vector4 xyzt)
```

Computes a divergence free vector field based on the cross product of the
derivatives of two simplex noise functions.

基于两个单纯噪声函数的导数的交叉积，计算一个无发散矢量场。

See [noise and randomness](../random.html)in the VEX languageguide for more
information.

更多信息请参见 VEX 语言中的 "噪声和随机性"。
