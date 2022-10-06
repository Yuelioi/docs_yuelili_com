---
title: getpackedtransform
order: 3
category:
  - houdini
---
    
## 描述

Gets the transform of a packed primitive.

| Since | 17.0 |
| ----- | ---- |

```c
matrix  getpackedtransform(int input, int primnum)
```

Gets the transform of a packed primitive. This is constructed from the
`P`attribute of the primitive‘spoint and its intrinsic `transform`.

获取一个打包的基元的变换。这是从基元的点的属性和它的内在变换构造出来的。

## Examples

    // matrix to transform bymatrix transform = ident();rotate(transform, radians(45), {0,1,0});translate(transform, {0,1,0});matrix tf = getpackedtransform(0, @primnum);setpackedtransform(0, @primnum, transform * tf);
