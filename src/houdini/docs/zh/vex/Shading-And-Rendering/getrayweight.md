---
title: getrayweight
order: 30
category:
  - houdini
---
    
## 描述

Returns an approximation to the contribution of the ray to the final  
pixel color.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
float  getrayweight()
```

Returns an approximation to the contribution of the ray to the finalpixel
color. Often, this is a better metric for judging contribution tothe final
pixel color than [getraylevel](getraylevel.html) "Returns the depth of the ray
tree for the current shading."). However, thisrelies on prior shaders giving
good estimates on the contribution totheir shading (see
[reflectlight](reflectlight.html "Computes the amount of reflected light which
hits the surface.")).

返回射线对最终像素颜色的贡献的近似值。
