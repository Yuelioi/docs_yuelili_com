---
title: getraylevel
order: 29
category:
  - houdini
---
    
## 描述

Returns the depth of the ray tree for the current shading.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  getraylevel()
```

Returns the depth of the ray tree for the current shading. If thereturned
value is 0, this represents a ray from the camera to the scene.If the ray
level is 1, the ray represents either a reflection/refractionray. If the level
is 2, then this represents a reflection/refractionwhich appears in a previous
reflection/refraction etc.

返回当前着色的射线树的深度。如果
