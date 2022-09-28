---
title: smooth
order: 11
category:
  - houdini
---
    
## 描述

Computes ease in/out interpolation between values.

```c
float  smooth(float value1, float value2, float amount)
```

```c
float  smooth(float value1, float value2, float amount, float rolloff)
```

Computes a number between zero and one. Returns 0 if the amount passedin is
less than or equal to value1, 1 if the amount is greater than orequal to
value2.

Computes a number between zero and one. Returns 0 if the amount passed

If the amount is between value1 and value2, a smooth
(easin/easeout)interpolation is computed. If a rolloff is specified, the
inflectionpoint of the blend will be shifted.

in is less than or equal to value1, 1 if the amount is greater than or

If the rolloff is greater than 1, the shift will be to the right, if
therolloff is less than 1 (and greater than 0), the shift will be to theleft.

equal to value2.
