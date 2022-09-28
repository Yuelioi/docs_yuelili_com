---
title: filamentsample
order: 1
category:
  - houdini
---
    
## 描述

Samples the velocity field defined by a set of [vortex
filaments](../../dopparticles/filaments.html "Swirls particles based on the
simulated drift of filaments represented by polylines.").

```c
vector  filamentsample(<geometry>geometry, vector position)
```

Samples the velocity field defined by a set of vortex filaments at
thespecified `position`. The `inputnum` or `filename` parameter specifies
thegeometry to fetch the filament curves from. The `strength` and
`thickness`primitive attributes can be used on the geometry to customize the
strength andthickness of each filament. Returns the zero vector if `inputnum`
is out ofrange or the `filename` is invalid.

对一组涡流丝在指定位置定义的速度场进行采样。
