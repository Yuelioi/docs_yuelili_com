---
title: min
order: 35
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

# min

VEX function

#

```c
int  min(int value1, int value2, ...)
```

```c
float  min(float value1, float value2, ...)
```

Returns the minimum of the arguments.

返回参数的最小值。

```c
<vector> min(<vector>value1, <vector>value2, ...)
```

Returns a vector where each component is the minimum of the corresponding
components in the arguments.

返回一个向量，其中每个分量是参数中相应分量的最小值。

```c
<type> min(<type>values[])
```

Returns the minimum value in the array.

返回数组中的最小值。

```c
float  min(<vector>v)
```

Returns the minimum of the vector‘scomponents.

Returns the minimum of the vectorâs components.返回向量的最小值。

```c
<type> min(<type>value)
```

Returns the argument.

返回参数。
