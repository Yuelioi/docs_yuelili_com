---
title: isshadowray
order: 45
category:
  - houdini
---
    
## 描述

Returns 1 if the shader is being called to evaluate opacity for  
shadow rays, or 0 if the shader is being called to evaluate for surface  
color.

| Context(s) | [surface](../contexts/surface.html) |
| ---------- | ----------------------------------- |

```c
int  isshadowray()
```

Returns 1 if the shader is being called to evaluate opacity for shadowrays, or
0 if the shader is being called to evaluate for surface color.

如果该着色器被调用来评估阴影的不透明度，则返回 1。

Use this function to compute different opacity if the surface isshadowing
another surface.

射线，或者如果着色器被调用来评估表面颜色，则返回 0。
