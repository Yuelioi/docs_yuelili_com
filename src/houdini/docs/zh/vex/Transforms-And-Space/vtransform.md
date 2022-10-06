---
title: vtransform
order: 36
category:
  - houdini
---
    
## 描述

Transforms a directional vector.

```c
vector  vtransform(vector v, matrix transform)
```

```c
vector  vtransform(string tospace, vector v)
```

```c
vector  vtransform(string fromspace, string tospace, vector v)
```

Transforms a vector representing a direction. See [ptransform](ptransform.html "Transforms a vector from one space to another.") for more information.

对代表一个方向的向量进行变换。更多信息请见 Transform。
