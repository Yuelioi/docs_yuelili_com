## 描述

Iterate to the next metaball in the list of metaballs returned by the
`metastart()` function.


```c
int  metanext(int handle)
```


This iterates through the list of metaballs returned by `metastart()`.The
function returns `0` if there are no further metaballs in selected by
`metastart()`.

这个函数遍历由ymetastart()返回的metaballs的列表。 如果在ymetastart()中没有更多的metaballs，该函数返回0。

