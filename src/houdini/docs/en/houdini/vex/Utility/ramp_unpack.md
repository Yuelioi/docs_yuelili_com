---
title: ramp_unpack
order: 16
category:
  - houdini
---

## Description

Since 18.5

`void ramp_unpack(string ramp, string &basis[], float &pos[], float &value[])`

`void ramp_unpack(string ramp, string &basis[], float &pos[], vector &value[])`

`void ramp_unpack(string ramp, string &basis[], float &pos[], vector4 &value[])`

Ramps are commonly packed as JSON formatted strings by Houdini operations.
This will unpack them into three arrays of basis, position, and value, which
can then be used by the spline or ramp_lookup functions.

## See also

- [spline](spline.html)
- [ramp_lookup](ramp_lookup.html)
- [ramp_pack](ramp_pack.html)

### ramp

[ramp_lookup](ramp_lookup.html)

[ramp_pack](ramp_pack.html)

[ramp_unpack](ramp_unpack.html)
