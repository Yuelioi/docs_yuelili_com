---
title: sensor_panorama_getcone
order: 3
category:
  - houdini
---
    
## 描述

Sensor function to query average values from rendered GL scene.

`void sensor_panorama_getcone(int handle, vector lookodir, float angle, vector colormin, vector colormax, float depthmin, float depthmax, float &strength, vector &dir, vector &color, float &depth)`

This function will render the surrounding environment using the GL render
andprovides a handle to use for querying the results.

这个函数将使用 GL 渲染器来渲染周围的环境，并提供一个用于查询结果的句柄。

It averages out all rendered pixels in a cone shaped area.The `colormin`
and`colormax` can be used to mask out only pixels that lie in this range,
usefulfor color-coding different regions of interest.The resulting dir and
strengthinform the weighted center of all matching pixels, and the relative
amount thatpassed the color and depth filters.The color and depth are the
average of allmatched pixels.

提供一个用于查询结果的句柄。
