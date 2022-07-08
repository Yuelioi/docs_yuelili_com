## 描述

Creates a euler angle representing a quaternion.

Since | 17.0  
---|---  
  

```c
vector  quaterniontoeuler(vector4 orient, int order)
```


Creates a vector representing euler angles from a vector4 representing a
quaternion.

从一个代表四元数的向量4创建一个代表欧拉角的向量。

The angles are in radians.Use the `degrees()` function to convert radians into
degrees.

角度的单位是弧度。 使用degrees()函数将弧度转换为度。

Specify the rotation order with the order integer. Use the constants defined
in 
```c
$HH/vex/include/math.h
```
 (for example, `XFORM_XYZ`).

用orderinteger指定旋转顺序。使用$HH/vex/include/math.h中定义的常数（例如，XFORM_XYZ）。

For more information, see [Data types](../lang.html#data-types) and [Dot
operator](../lang.html#dot-operator).

更多信息，请参阅数据类型和点运算符。

