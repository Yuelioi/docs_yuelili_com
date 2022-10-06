---
title: storelightexport
order: 74
category:
  - houdini
---
    
## 描述

Stores exported data for a light.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ surface](../contexts/surface.html)  
---|---

```c
void  storelightexport(string lightname, string exportname, <type>value)
```

```c
void  storelightexport(string lightname, string exportname, <type>value[])
```

Stores a per-light export to a shader export variable.This method
shouldnormally be called for each light to ensure that all light exports for
thegiven variable are created, for example by placing the call in
anilluminance() loop or a loop over the light array.

将每个光线的输出存储到着色器输出变量中。 这个方法应该

This method replaced the

```c
storelightexports()
```

method used in Houdini 12.5 and
earlier.

通常情况下，应该为每个灯光调用这个方法，以确保所有的灯光输出都是为给定的变量创建的。

## Examples

    surface test(export vector perlight = {0,0,0}){  int       lights[] = getlights();  for (int i = 0; i < len(lights); i++)  {    vector val = set(lights[i], 0, 0);    storelightexport(getlightname(lights[i]), "perlight", val);  }}
