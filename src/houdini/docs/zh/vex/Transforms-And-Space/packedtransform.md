---
title: packedtransform
order: 14
category:
  - houdini
---
    
## 描述

Transforms a packed primitive.

| Since | 17.0 |
| ----- | ---- |

```c
void  packedtransform(int input, int primnum, matrix transform)
```

Transforms a packed primitive by the specified transform. This modifies the
`P`attribute of the primitive‘spoint as well as its intrinsic `transform`.

通过指定的变换对一个已打包的基元进行变换。这修改了基元的点的属性以及其内在的变换。

This is equivalent to the following code.

这等同于以下代码。

    // matrix to transform bymatrix transform = ident();rotate(transform, radians(45), {0,1,0});translate(transform, {0,1,0});// get current packed transformmatrix3 primtf = primintrinsic(0, "transform", primnum);setprimintrinsic(0, "transform", primnum, primtf * (matrix3)transform);int primpoint = primpoint(0, primnum, 0);vector pos = point(0, "P", primpoint);setpointattrib(0, "P", primpoint, pos * transform);
