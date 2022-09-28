---
title: scatter
order: 66
category:
  - houdini
---
    
## 描述

Evaluates a scattering event through the domain of a geometric object.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

`int scatter(vector ipoint, vector inormal, vector idirection, vector idistribution, float time, float maxdist, vector &opoint, vector &onormal, vector &odirection)`

Evaluates a single scattering event through geometry. A return value of 1
means the scattering was successful.

评估一个通过几何体的单一散射事件。返回值为 1 意味着散射是成功的。

`ipoint`

Entry point of scattering.

散射的入口点。

`inormal`

Surface normal at the entry point (surfaces only). Required to orient the
scattering plane.

入口处的表面法线（仅表面）。用于确定散射面的方向。

`idirection`

Primary scattering direction at the entry point. Required to orient the
scattering plane.

进入点的主要散射方向。用于确定散射面的方向。

`idistribution`

Initial scatter distribution at the entry point. If a zero-valued vector is
passed a random scatter distribution will be used.

入口处的初始散射分布。如果传递的是零值矢量，将使用随机散射分布。

`maxdist`

Maximum distance to scatter.

散射的最大距离。

`opoint`

Exit point of scattering.

散射的出口点。

`onormal`

Normal at the scattering exit point (surfaces only).

散射出口点的正态（仅表面）。

`odirection`

Outgoing direction at the scattering exit point (surfaces only).

散射出口点的出射方向（仅表面）。

    // Trace for intersection with scenevector hitP = 0;vector hitN = 0;int hit = trace(P, I, Time, "P", hitP, "N", hitN);// Scatter a random distance from the intersectionvector idistribution = 0;int sid = israytrace ? SID : newsampler();vector s;nextsample(sid, s.x, s.y, "mode", "nextpixel");float maxdist = 2.0 * s.x;vector opoint = 0;vector onormal = 0;vector odirection = 0;hit = scatter(hitP, hitN, I, idistribution, Time, maxdist, opoint, onormal, odirection);// Trace again from the exit point of the scatteringhit = trace(opoint, odirection, Time, "P", hitP, "N", hitN);
