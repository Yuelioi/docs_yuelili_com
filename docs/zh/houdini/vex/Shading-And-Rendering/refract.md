---
title: refract
order: 62
category:
  - houdini
---
    
## 描述

Returns the refraction ray given an incoming direction, the  
normalized normal and an index of refraction.

```c
vector  refract(vector direction, vector normal, float index)
```

Returns the refraction ray given an incoming direction, thenormalized normal
and an index of refraction.

返回折射光线，给定一个入射方向、法线和折射率。

The index is a relative index of refraction, the ratio betweenthe interior and
exterior index of refraction, where the exterioris defined by the direction of
the normals (normals point away fromthe interior).

归一化正常值和折射率。

In the case of total internal reflection, this function returns thereflection
vector.

折射率是一个相对的折射率，是内部和外部折射率之间的比率。

For example:

内部折射率和外部折射率之间的比率，其中外部折射率

    refract(normalize(I), normalize(N), outside_to_inside_ior)
