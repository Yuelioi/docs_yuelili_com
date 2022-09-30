---
title: setsamplestore
order: 68
category:
  - houdini
---
    
## 描述

Stores sample data in a channel, referenced by a point.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  setsamplestore(string channel, vector P, int value)
```

```c
int  setsamplestore(string channel, vector P, float value)
```

```c
int  setsamplestore(string channel, vector P, vector value)
```

```c
int  setsamplestore(string channel, vector P, vector4 value)
```

Stores a value in a named channel at a specified point.Returns a non-zero
value on success, or returns 0 if the data could not be set.

在一个指定的点上将一个值存入一个指定的通道。

The sample store can be thought of as an in-memory point cloud, storingshading
data at points. This allows data to be accessed across shaderboundaries,
unlike the internal export/import system. For example,a lens shader could
store data to be passed to the surface shader,an operation that is not
supported using export variables due to thelayout of the shading pipeline.

成功时返回一个非零值，如果不能设置数据，则返回 0。

Please note that the stored samples can only be accessed within the same
rendertile.

样本存储可以被认为是一个内存中的点云，存储着

## Example

    cvex displacedlens(  // Inputs  float x = 0;  float y = 0;  float Time = 0;  float dofx = 0;  float dofy = 0;  float aspect = 1;  float displaceScale = 1.0;  float displaceGain = 0.1;  // Outputs  export vector P = 0;  export vector I = 0;){  P = {x, y, 0};  I = {1, 0, 0};  vector displace = noise(P * displaceScale) * displaceGain;  I += displace;  // Store the displacement at the eye point, 'P'  int status = setsamplestore("displacedlens_d", P, displace);}surface mysurface(){  // Get the displacement at the eye point, 'Eye'  vector displace = 0;  int status = getsamplestore("displacedlens_d", Eye, displace);  //...}
