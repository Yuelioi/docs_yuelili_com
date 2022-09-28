---
title: setcurrentlight
order: 67
category:
  - houdini
---
    
## 描述

Sets the current light

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ surface](../contexts/surface.html)  
---|---

```c
int  setcurrentlight(int lightid)
```

Sets the current light, and returns true when the light exists and was
successfully set. The lightid should be in the set of the values returned by
[getlights](getlights.html "Returns an array of light identifiers for the
currently shaded surface."). The current light is used by the following
shading functions:

设置当前的灯光，如果该灯光存在并且被成功设置，则返回 true。lightid 应该是在 getlights 返回的值的集合中。当前的灯光被以下着色函数所使用。

- [renderstate](renderstate.html "Queries the renderer for a named property.")

- [getlightname](getlightname.html "Returns the name of the current light when called from within an illuminance loop, or converts an integer light ID into the light‘sname.")
