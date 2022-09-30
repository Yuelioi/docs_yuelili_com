---
title: hsvtorgb
order: 6
category:
  - houdini
---
    
## 描述

Convert HSV color space into RGB color space.

```c
vector  hsvtorgb(vector hsv)
```

```c
vector  hsvtorgb(float hue, float sat, float val)
```

Convert HSV color space into RGB color space. A vector representing theRGB
triple is returned. The hue should be in the range 0 to 1.

将 HSV 颜色空间转换成 RGB 颜色空间。一个代表
