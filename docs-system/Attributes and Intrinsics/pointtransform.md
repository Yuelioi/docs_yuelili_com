## 描述

Returns a point transform from a point index.

Since | 18.5  
---|---  
  

```c
matrix  pointtransform(<geometry>geometry, int pnt)
```


Returns a transform associated with the point index. This function queries the
`v@P` and the `3@transform` attributes to build the matrix.

返回一个与点索引相关的变换。这个函数查询v@P和3@transform属性来建立矩阵。

`pnt`

The point index to query.

要查询的点的索引。

