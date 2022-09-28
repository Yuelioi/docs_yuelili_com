---
title: shimport
order: 71
category:
  - houdini
---
    
## 描述

Imports a variable from the shadow shader for the surface.

| Context(s) | [fog](../contexts/fog.html)[ surface](../contexts/surface.html) |
| ---------- | --------------------------------------------------------------- |

This function is only valid inside an [illuminance](illuminance.html "Loops
through all light sources in the scene, calling the light shader for each
light source to set the Cl and L global variables.") loop.

这个函数只在 illuminanceloop 内有效。

```c
int  shimport(string variable_name, <type>&value)
```

`variable_name`

The variable to import from the shadow shader.

要从阴影着色器中导入的变量。

`value`

If the variable is successfully read, the value is copied into this variable.

如果该变量被成功读取，其值将被复制到该变量中。

Returns

`1` if the variable is defined and exported, `0` otherwise.

如果该变量被定义并被导出，则为 1，否则为 0。
