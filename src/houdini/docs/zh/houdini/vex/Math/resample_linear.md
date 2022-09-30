---
title: resample_linear
order: 50
category:
  - houdini
---
    
    [  
Houdini 19.0  
](../../index.html)  
**  
[  
VEX  
](../index.html)  
**  
[  
VEX Functions  
](index.html)  
\_\_

# resample_linear

VEX function

#

```c
float [] resample_linear(float input[], int new_length)
```

```c
vector [] resample_linear(vector input[], int new_length)
```

```c
vector2 [] resample_linear(vector2 input[], int new_length)
```

```c
vector4 [] resample_linear(vector4 input[], int new_length)
```

Returns a new array of size new_length, uniformly sampled from the input
array. Array elements are linearly interpolated from the input array.

返回一个大小为 new_length 的新数组，从输入数组中均匀取样。数组元素是从输入数组中线性插值出来的。
