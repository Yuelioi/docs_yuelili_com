---
title: rint
order: 51
category:
  - houdini
---
    
## 概述

Rounds the number to the closest whole number.

```c
float  rint(float n)
```

```c
<vector> rint(<vector>v)
```

## 说明

Returns the closest whole number to `n`. For vectors, this is done per-
component.

四舍五入取整。对于向量，每个分量都会如此。

## 示例

```c
int t = 1.4;
printf("%s",rint(t));  // 1


vector pos = {1.1,2.5,3.8};
printf("%s",rint(pos));  // {1,3,4}
```
