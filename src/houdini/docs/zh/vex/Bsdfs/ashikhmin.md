---
title: ashikhmin
order: 2
category:
  - houdini
---
    
## 描述

Returns a specular BSDF using the Ashikhmin shading model.

`bsdf ashikhmin(float exponentx, float exponenty, vector framex, vector framey, ...)`

`bsdf ashikhmin(vector nml, float exponentx, float exponenty, vector framex, vector framey, ...)`

![](../../images/rendering/ashikhmin1.png)![](../../images/rendering/ashikhmin2.png)

An anisotropic `bsdf` similar to `phong()` but with independent controls for
the highlight size along 2 tangent vectors.

An anisotropicbsdfsimilar tophong()but with independent controls for the
highlight size along 2 tangent vectors.

`exponentx`

Phong exponent along the `framex` vector.

Phong exponent along theframexvector.

`exponenty`

Phong exponent along the `framey` vector.

Phong exponent along theframeyvector.

`framex`

Highlight X direction.

Highlight X direction.

`framey`

Highlight Y direction.

Highlight Y direction.
