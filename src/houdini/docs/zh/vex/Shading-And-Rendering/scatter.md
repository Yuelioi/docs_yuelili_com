---
title: scatter
order: 67
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

`int scatter(vector ipoint, vector inormal, vector idirection, vector idistribution, float time, float maxdist, vector &opoint, vector &onormal, vector &odirection)`

Context(s) 评估一个通过几何体的单一散射事件。返回值为 1 意味着散射是成功的。

## Arguments

`ipoint`

散射的进入点。

`inormal`

入口处的表面法线（仅表面）。需要用来确定散射面的方向。

`idirection`

进入点的主要散射方向。要求确定散射面的方向。

`idistribution`

进入点的初始散点分布。如果传递了一个零值向量，将使用随机散点分布。

`maxdist`

最大距离的散射。

`opoint`

散射的出口点。

`onormal`

散射出口点的法线（仅表面）。

`odirection`

散射出口点的出射方向（仅表面）。

```c
// Trace for intersection with scene
vector hitP = 0;
vector hitN = 0;
int hit = trace(P, I, Time, "P", hitP, "N", hitN);

// Scatter a random distance from the intersection
vector idistribution = 0;
int sid = israytrace ? SID : newsampler();
vector s;
nextsample(sid, s.x, s.y, "mode", "nextpixel");
float maxdist = 2.0 \* s.x;
vector opoint = 0;
vector onormal = 0;
vector odirection = 0;
hit = scatter(hitP, hitN, I, idistribution, Time, maxdist, opoint, onormal, odirection);

// Trace again from the exit point of the scattering
hit = trace(opoint, odirection, Time, "P", hitP, "N", hitN);

```

## See also

- [sample_geometry](sample_geometry.html)
- [trace](trace.html)
- [gather](gather.html)

|
shading raytracing
