---
title: albedo
order: 1
category:
  - houdini
---
    
## 描述

Returns the albedo (percentage of reflected light) for a bsdf given the
outgoing light direction.

```c
vector  albedo(bsdf b, ...)
```

```c
vector  albedo(bsdf b, int mask, ...)
```

```c
vector  albedo(bsdf b, vector viewer, ...)
```

```c
vector  albedo(bsdf b, vector viewer, int mask, ...)
```

`viewer`

Vector toward viewer.

朝向查看器的矢量。

`mask`

A bitmask composed from values representing different shading components.

一个由代表不同着色成分的数值组成的位罩。

See [bouncemask](bouncemask.html) for information on component label bitmasks.

有关组件标签位罩的信息，请参见弹出式位罩。
