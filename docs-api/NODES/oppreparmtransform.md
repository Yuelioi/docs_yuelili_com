## 描述

Returns the pre and parm transform associated with an OP.

Since | 18.0  
---|---  
  

```c
matrix  oppreparmtransform(string path)
```



```c
matrix  oppreparmtransform(string path, float time)
```



```c
matrix  oppreparmtransform(int opid)
```



```c
matrix  oppreparmtransform(int opid, float time)
```


Returns the pre and parm transform associated with an OP. If the specified OP
has notransform associated with it (such as a COP), then an identity matrix is
returned. It is possible to specify the time at which to evaluate the
transform (in seconds, not frames).

返回与一个OP相关的pre和parm转换。如果指定的OP没有

Note

The op: syntax can be used to simulate this behavior using the standard
transform functions.

变换（比如一个COP），那么将返回一个相同的矩阵。可以指定评估变换的时间（单位是秒，而不是帧）。

