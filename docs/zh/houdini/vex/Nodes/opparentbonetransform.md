---
title: opparentbonetransform
order: 24
category:
  - houdini
---
    
## 描述

Returns the parent bone transform associated with an OP.

```c
matrix  opparentbonetransform(string path)
```

```c
matrix  opparentbonetransform(string path, float time)
```

```c
matrix  opparentbonetransform(int opid)
```

```c
matrix  opparentbonetransform(int opid, float time)
```

Returns the parent bone transform associated with an OP. If the specified OP
has notransform associated with it (such as a COP), then an identity matrix is
returned. It is possible to specify the time at which to evaluate the
transform (in seconds, not frames). Returns the transform at the root of the
parent bone or the parent transform otherwise.

返回与一个 OP 相关的父骨转换。如果指定的 OP 没有

Note

The op: syntax can be used to simulate this behavior using the standard
transform functions.

变换（例如 COP），那么将返回一个相同的矩阵。可以指定评估变换的时间（单位是秒，而不是帧）。返回父骨根部的变换，否则返回父变换。
