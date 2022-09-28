---
title: dsmpixel
order: 9
category:
  - houdini
---
    
## 描述

Reads the z-records stored in a pixel of a deep shadow map  
or deep camera map.

```c
int  dsmpixel(string map, string channel, int x, int y, <type>&values[])
```

Each pixel of a deep shadow map channel has multiple values.This functionwill
extract the list of the values associated with the channel for the givenpixel.

深层阴影贴图通道的每个像素都有多个值。 这个函数

Returns the number of values in the deep pixel (or -1 on failure).

将提取与该通道相关的值的列表，用于给定的

A DSM will always have `Pz` and `Of` channels. The `Pz` channel stores thez-
depth associated with each record. The `Of` channel stores the opacity.

像素。
