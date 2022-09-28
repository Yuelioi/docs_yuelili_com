---
title: translucent
order: 77
category:
  - houdini
---
    
## 描述

Returns a Lambertian translucence BSDF.

```c
bsdf  translucent(vector nml, vector ng, ...)
```

Returns a diffuse BSDF for the transmission direction. This canbe used as a
cheap alternative to subsurface scattering for thin surfaces,to allow
illumination to pass from one side of the object to the otherwhile also
broadly diffusing the illumination like diffuse.

返回传输方向的漫反射 BSDF。这可以
