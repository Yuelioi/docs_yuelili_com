---
title: isshadingRHS
order: 44
category:
  - houdini
---
    
## 描述

Detects the orientation of default shading space.

Context(s) | [fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)[
displace](../contexts/displace.html)  
---|---

```c
int  isshadingRHS()
```

Shading can occur in either a left or right handed vector space.This
functioncan be used to check the native orientation in shading space.By
default,Mantra is left-handed space while Karma is in right-handed space.

阴影可以发生在左手或右手的矢量空间。 这个函数
