---
title: getphotonlight
order: 26
category:
  - houdini
---
    
## 描述

Returns the integer ID of the light being used for photon shading.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
int  getphotonlight()
```

Returns `-1` if the shader is not generating photons from a light.

如果着色器没有产生光子，则返回 1。

The return value is an integer identifying a light. You can get convert
thisinteger ID to the light name with [getlightname](getlightname.html "Returns the name of the current light when called from within an illuminance
loop, or converts an integer light ID into the light‘sname.")

返回值是一个识别光的整数。你可以将这个
