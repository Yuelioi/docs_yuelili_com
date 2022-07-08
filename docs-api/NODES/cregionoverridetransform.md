## 描述

Returns the capture or deform transform associated with a Capture Region SOP
based on the global capture override flag.

Since | 18.0  
---|---  
  

```c
matrix  cregionoverridetransform(string path)
```



```c
matrix  cregionoverridetransform(string path, float time)
```



```c
matrix  cregionoverridetransform(int op_id)
```



```c
matrix  cregionoverridetransform(int op_id, float time)
```


Returns the capture or deform transform associated with a Capture Region SOP
based on the global capture override flag.The transform is built from the
parameters of the SOP without cooking the SOP.It is possible to specify the
time to evaluate the transform at (in seconds, not frames).

返回与基于全局捕获覆盖标志的捕获区域SOP相关的捕获或变形变换。

Note

The op: syntax can be used to simulate this behavior using the standard
transform functions.

变形是根据SOP的参数建立的，不需要对SOP进行烹饪。

