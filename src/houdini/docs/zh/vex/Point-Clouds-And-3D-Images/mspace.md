---
title: mspace
order: 3
category:
  - houdini
---
    
## 描述

Transforms the position specified into the “local” space of the  
metaball.

| Context(s) | [image3d](../contexts/image3d.html) |
| ---------- | ----------------------------------- |

```c
vector  mspace(vector P)
```

Transforms the position specified into the “local” space of themetaball. This
function is only valid inside the [forpoints](forpoints.html) loopconstruct.

将指定的位置转换为元宝的 "本地 "空间。

An example use of this function would be to compute noise based on a“rest”
positionâ¦ For example:

metaball 的 "本地 "空间。这个函数只在 forpointsloop 结构中有效。

    forpoints(P) {vector npos = mspace(P) - mattrib("rest", P);nval += noise(npos);}
