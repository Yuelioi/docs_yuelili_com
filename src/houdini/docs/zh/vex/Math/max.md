---
title: max
order: 34
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

# max

VEX function

#

```c
int  max(int value1, int value2, ...)
```

```c
float  max(float value1, float value2, ...)
```

Returns the maximum value of the arguments.

返回参数的最大值。

```c
<vector> max(<vector>value1, <vector>value2, ...)
```

Returns a vector where each component is the maximum of the corresponding
components in the arguments.

返回一个向量，其中每个分量是参数中相应分量的最大值。

```c
<type> max(<type>values[])
```

Returns the maximum value in the array.

Returns the maximum value in the array.返回数组中的最大值。

```c
float  max(<vector>values)
```

Returns the maximum of the vector‘scomponents.

Returns the maximum of the vectorâs components.返回向量的最大分量。

```c
<type> max(<type>value)
```

Returns the argument.

返回参数。
