---
title: dimport
order: 1
category:
  - houdini
---
    
## 描述

Reads a variable from the displacement shader for the surface.

Context(s) | [fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
int  dimport(string name, <type>&out)
```

Reads a variable from the displacement shader for the surface.

从曲面的位移着色器中读取一个变量。

Mantra runs the shaders for a surface in a fixed order:

Mantra 以固定的顺序为一个曲面运行着色器。

1. Displacement

2. Surface (possibly calling light shaders in `illuminance` loops)

表面（可能在 illuminanceloops 中调用灯光着色器）

3. Fog (possibly calling light shaders in `illuminance` loops)

雾（可能在 illuminanceloops 中调用灯光着色器）。

Once the displacement shader has run, you can use `dimport`to retrieve
exported variables from it. Once the surface shaderhas run, you can use
[simport](simport.html "Imports a variable sent by a surface shader in an
illuminance loop.") to retrieve exported variablesfrom it.

一旦位移着色器运行完毕，你就可以用 import 来检索其中的导出变量。一旦表面着色器

If the shader variable named by the first argument is defined andexported, the
function returns 1 and puts the value in the secondargument. Otherwise, it
returns 0.

运行后，你可以用 import 来检索导出的变量
