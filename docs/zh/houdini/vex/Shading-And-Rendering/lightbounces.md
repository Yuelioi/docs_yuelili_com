---
title: lightbounces
order: 47
category:
  - houdini
---
    
## 描述

Returns the bounce mask for a light struct.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  lightbounces(light lp)
```

Returns the bounce mask for the light struct passed in. The bounce mask is
based on the light object‘s**Lighting contribution** parameter.

Returns the bounce mask for the light struct passed
in.返回灯光结构的反弹面具。反弹掩码是基于灯光对象的照明贡献参数。
