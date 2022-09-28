---
title: getlightname
order: 18
category:
  - houdini
---
    
## 描述

Returns the name of the current light when called from within an illuminance
loop, or converts an integer light ID into the light‘sname.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
string  getlightname()
```

Returns the name of the current light when called from within
an[illuminance](illuminance.html "Loops through all light sources in the
scene, calling the light shader for each light source to set the Cl and L
global variables.") loop or when a current light has been set
using[setcurrentlight](setcurrentlight.html "Sets the current light").

返回当前灯光的名称，当从 illuminanceloop 中调用或使用 ingsetcurrentlight 设置当前灯光时。

```c
string  getlightname(int lightid)
```

Returns the name of the light referred to by the given integerlight ID.

## 描述

for efficiency.

返回由给定的整数 "灯光 ID "所指的灯光名称。
