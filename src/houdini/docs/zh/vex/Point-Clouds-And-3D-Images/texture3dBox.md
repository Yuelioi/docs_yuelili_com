---
title: texture3dBox
order: 36
category:
  - houdini
---
    
## 描述

This function queries the 3D texture map specified and returns the  
bounding box information of the file.

`void texture3dBox(string filename, string channel, vector &min, vector &max, ...)`

Writes the minimum and maximum coordinates of the 3D texture into the vector
variables `min` and `max`.

将 3D 纹理的最小和最大坐标写入向量变量 min 和 max 中。
