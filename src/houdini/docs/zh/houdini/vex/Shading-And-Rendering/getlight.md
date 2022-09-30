---
title: getlight
order: 16
category:
  - houdini
---
    
## 描述

Returns a light struct for the specified light identifier.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
light  getlight(int lid)
```

Given a integer light identifier (lid), you can get a reference to a
lightobject representing the light (see details on the [mantra specific
type](../lang.html#mantratypes))

给定一个整数的灯光标识符（lid），你可以得到一个代表灯光的参考

    int[] lights = getlights();int nlights = len(lights);for (int i = 0; i < nlights; i++){light lp = getlight(i);lp->illuminate(...);}
