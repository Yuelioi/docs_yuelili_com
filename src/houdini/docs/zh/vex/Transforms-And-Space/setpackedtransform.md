---
title: setpackedtransform
order: 24
category:
  - houdini
---
    
## 描述

Sets the transform of a packed primitive.

| Since | 17.0 |
| ----- | ---- |

```c
void  setpackedtransform(int input, int primnum, matrix transform)
```

Sets the transform of a packed primitive. This modifies the `P` attribute
ofthe primitive‘spoint as well as its intrinsic `transform`.

设置一个包装好的基元的变换。这修改了基元点的 Pattribute

## Examples

    // matrix to transform bymatrix tf = ident();rotate(tf, radians(45), {0,1,0});translate(tf, {0,1,0});matrix transform = getpackedtransform(0, @primnum);setpackedtransform(0, @primnum, transform * tf);
