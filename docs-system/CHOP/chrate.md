## 描述

Returns the sample rate of the input specified.

Context(s) | [chop](../contexts/chop.html)  
---|---  
  

```c
float  chrate()
```


Uses `-1` as the `opinput`.

使用-1作为输入。


```c
float  chrate(int opinput)
```


Returns the sample rate of the given input.

返回给定输入的采样率。

``opinput``

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

要读取的输入编号，从0开始。例如，第一个输入是0，第二个输入是1，以此类推。

If you specify `-1`, the function uses the current CHOP node or input `0` if
it is connected.

如果你指定了1，该函数使用当前的CHOP节点或输入0（如果它被连接）。

