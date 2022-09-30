---
title: degrees
order: 4
category:
  - houdini
---
    
## 描述

Converts the argument from radians into degrees.

```c
float  degrees(float num_in_rads)
```

Returns the given radians in degrees.

返回给定弧度的度数。

```c
vector2  degrees(vector2 nums_in_rads)
```

```c
vector  degrees(vector nums_in_rads)
```

```c
vector4  degrees(vector4 nums_in_rads)
```

Returns a new vector with the components converted to degrees.

返回一个新的矢量，并将其分量转换为度。

Most VEX trig functions work with radians, but most users are more comfortable
with degrees. You may want to convert from degrees in the UI to radians for
internal use.

大多数 VEX 三角函数使用弧度，但大多数用户更习惯于使用度。你可能想把用户界面中的度数转换为弧度供内部使用。
