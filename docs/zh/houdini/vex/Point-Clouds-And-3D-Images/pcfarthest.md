---
title: pcfarthest
order: 9
category:
  - houdini
---
    
## 描述

Returns the distance to the farthest point found in the search  
performed by pcopen.

```c
float  pcfarthest(int handle)
```

Returns the distance to the farthest point found in the search performedby
pcopen. If no points were found, the function will return a verylarge value
(1.0Ã10^37)

返回在 pcopen 搜索过程中发现的最远点的距离。
