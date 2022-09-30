---
title: getmaterial
order: 22
category:
  - houdini
---
    
## 描述

Returns a material struct for the current surface.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
material  getmaterial()
```

The material handle returned is opaque, but can be used by other functions to
query information about the material (see details on the [mantra specific
type](../lang.html#mantratypes)).

返回的材料句柄是不透明的，但可以被其他函数用来查询有关材料的信息（详见 themantra 具体类型）。
