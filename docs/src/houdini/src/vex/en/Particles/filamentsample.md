---
title: filamentsample
order: 2
category:
  - vex
---

`vector filamentsample(<geometry>geometry, vector position)`

Samples the velocity field defined by a set of vortex filaments at the
specified `position`. The `inputnum` or `filename` parameter specifies the
geometry to fetch the filament curves from. The `strength` and `thickness`
primitive attributes can be used on the geometry to customize the strength and
thickness of each filament. Returns the zero vector if `inputnum` is out of
range or the `filename` is invalid.

particles

[filamentsample](filamentsample.html)
