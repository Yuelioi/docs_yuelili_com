---
title: ramp_pack
order: 15
category:
  - vex
---

Since 19.0

`string ramp_pack(string basis[], float pos[], float value[])`

`string ramp_pack(string basis[], float pos[], vector value[])`

`string ramp_pack(string basis[], float pos[], vector4 value[])`

Ramps are commonly packed as JSON formatted strings by Houdini operations.
This will pack them three arrays of basis, position, and value into the
corresponding string.

## See also

- [spline](spline.html)
- [ramp_lookup](ramp_lookup.html)

|
ramp

[ramp_lookup](ramp_lookup.html)

[ramp_pack](ramp_pack.html)

[ramp_unpack](ramp_unpack.html)
