---
title: getglobalraylevel
order: 14
category:
  - houdini
---
    
## 描述

Returns the depth of the ray tree for computing global  
illumination.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
int  getglobalraylevel()
```

Returns the depth of the ray tree for computing global illumination. Ifthis
function returns a non-zero value, the shader is being called forthe purpose
of evaluating global illumination.

返回用于计算全局光照的射线树的深度。如果
