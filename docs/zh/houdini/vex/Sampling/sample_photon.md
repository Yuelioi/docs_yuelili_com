---
title: sample_photon
order: 28
category:
  - houdini
---
    
## 描述

Samples a 3D position on a light source and runs the light shader at that
point.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

`int sample_photon(light lp, vector &pos, vector &dir, float &scale, float time)`

Spawns a photon from the given light source and returns the information for
thefirst intersection in the scene.The `pos`, `dir` and `scale` are filled
outwith the information about where the photon hit in the scene.

从给定的光源中产生一个光子，并返回场景中第一个交叉点的信息。

The returned integer represents the bounce type mask (this is determined by
thetypes of illumination labels on the light source).

场景中的第一个交叉点的信息。 位置、方向和距离都是用光子在场景中的位置来填写的。

The function returns 0 if the photon didn‘t intersect any geometry.

填充了光子在场景中的位置信息。
