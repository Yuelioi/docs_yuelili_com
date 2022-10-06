---
title: isuvrendering
order: 46
category:
  - houdini
---
    
## 描述

Indicates whether the shader is being evaluated while doing UV rendering (e.g.
texture unwrapping)

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
int  isuvrendering()
```

Returns 1 if the shader is being called while evaluating uv rendering (texture
unwrapping), and 0 for normal rendering.

如果在评估 uv 渲染（纹理解包）时调用着色器，则返回 1，而在评估正常渲染时返回 0。

Use this function to evaluate shaders differently when baking illumination.

使用这个函数可以在烘焙光照时以不同方式评估着色器。
