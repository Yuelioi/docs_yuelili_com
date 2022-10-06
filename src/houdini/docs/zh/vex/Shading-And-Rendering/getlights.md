---
title: getlights
order: 19
category:
  - houdini
---
    
## 描述

Returns an array of light identifiers for the currently shaded surface.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
int [] getlights(...)
```

```c
int [] getlights(vector P, ...)
```

```c
int [] getlights(material mat, vector P, ...)
```

With this signature, the light mask is determined solely by the material
(the`lightmask` and `categories` keyword parameters are ignored).

有了这个签名，光罩完全由材料决定（光罩和类别关键字参数被忽略）。

This versionalso accepts PBR keyword arguments to limit lights based on their
LightContribution parameter.

这个版本

"label",`string`

A specific label.This keyword argument may be specified multiple times.

也接受 PBR 关键字参数，以根据其光贡献参数来限制灯光。

"direct",`int`

0 = limit lights to indirect contributions, 1 = limit lights to direct
contributions.

贡献参数。

## Examples

    getlights("lightmask", "light*,^light2");getlights("categories", "shadow|occlusion");getlights(material(), P, "direct", 0);
