## 描述

Returns the transform associated with an OP.


```c
matrix  optransform(string path)
```



```c
matrix  optransform(string path, float time)
```



```c
matrix  optransform(int op_id)
```



```c
matrix  optransform(int op_id, float time)
```


Returns the transform associated with an OP. If the OP specified has
notransform associated with it (for example a COP), then an identitymatrix is
returned. It is possible to specify the time to evaluate thetransform at (in
seconds, not frames).

返回与一个OP相关的变换。如果指定的OP没有

NOTE: The op: syntax can be used to simulate this behavior using thestandard
transform functions.

变换（例如，一个COP），那么将返回一个相同的

