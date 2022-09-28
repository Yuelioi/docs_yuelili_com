---
title: frac
order: 25
category:
  - houdini
---
    
## 描述

Returns the fractional component of the floating point number.

```c
float  frac(float n)
```

```c
<vector> frac(<vector>v)
```

Returns the fractional component of the floating point number. For example,
`frac(1.5)` would return `0.5`. For vectors, this done per-component.

返回浮点数的小数部分。例如，frac(1.5)将返回 0.5。对于向量，这是按分量进行的。
