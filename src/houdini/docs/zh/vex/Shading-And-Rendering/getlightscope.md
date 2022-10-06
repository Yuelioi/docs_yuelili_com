---
title: getlightscope
order: 20
category:
  - houdini
---
    
## 描述

Returns a selection of lights that illuminate a given material.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
void  getlightscope(material mat, string &scope, string &categories)
```

Given a material handle, determine the lights illuminating the surface.The
light selection is given by the scope/categories returned.

给定一个材料句柄，确定照亮该表面的灯光。 灯光的选择是由返回的范围/类别给出的。
