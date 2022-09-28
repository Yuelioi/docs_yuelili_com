---
title: getlightid
order: 17
category:
  - houdini
---
    
## 描述

Returns the light id for a named light (or -1 for an invalid name).

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ surface](../contexts/surface.html)  
---|---

```c
int  getlightid(string lightname)
```

Returns the integer light identifier of the light referred to by the given
name.

返回给定名称所指的灯光的整数标识符。
