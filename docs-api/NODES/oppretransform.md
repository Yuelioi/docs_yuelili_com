## 描述

Returns the pretransform associated with an OP.


```c
matrix  oppretransform(string path)
```



```c
matrix  oppretransform(string path, float time)
```



```c
matrix  oppretransform(int opid)
```



```c
matrix  oppretransform(int opid, float time)
```


Returns the transform associated with an OP. If the OP specified has
notransform associated with it (for example a COP), then an identitymatrix is
returned. It is possible to specify the time to evaluate thetransform at (in
seconds, not frames).

返回与一个OP相关的变换。如果指定的OP没有

Note

The op: syntax can be used to simulate this behavior using the standard
transform functions.

变换（例如，一个COP），那么将返回一个相同的

