---
title: limport
order: 50
category:
  - houdini
---
    
## 描述

Imports a variable from the light shader for the surface.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ shadow](../contexts/shadow.html)[
surface](../contexts/surface.html)  
---|---

Note

This function is only valid inside an [illuminance](illuminance.html "Loops
through all light sources in the scene, calling the light shader for each
light source to set the Cl and L global variables.") loop.

这个函数只在 illuminanceloop 内部有效。

```c
int  limport(string name, <type>&value)
```

`name`

The name of the shader variable to read.

要读取的着色器变量的名称。

`&value`

If the named variable is defined and exported, the function overwrites this
variable with the variable‘svalue.

如果命名的变量被定义并导出，该函数将用该变量的值覆盖这个变量。

Returns

Returns `1` if the shader variable is defined and exported, or `0` otherwise.

如果着色器变量被定义并导出，则返回 1，否则返回 0。
