---
title: ramp_unpack
order: 15
category:
  - houdini
---
    
## 描述

Unpacks a string-encoded ramp into a set of arrays.

| Since | 18.5 |
| ----- | ---- |

`void ramp_unpack(string ramp, string &basis[], float &pos[], float &value[])`

`void ramp_unpack(string ramp, string &basis[], float &pos[], vector &value[])`

`void ramp_unpack(string ramp, string &basis[], float &pos[], vector4 &value[])`

Ramps are commonly packed as JSON formatted strings by Houdini operations.This
will unpack them into three arrays of basis, position, and value, whichcan
then be used by the spline or ramp_lookup functions.

匝道通常被胡迪尼操作打包成 JSON 格式的字符串。
