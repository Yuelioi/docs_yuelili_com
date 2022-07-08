## 描述

Determines whether a half-edge number corresponds to a primary half-edge.


```c
int  hedge_isprimary(string geometry, int hedge)
```



```c
int  hedge_isprimary(int opinput, int hendge)
```


`geometry`

The name of the geometry file to reference.Inside Houdini, this may be

```c
op:full_path_to_sop
```
 to reference a SOP.

要参考的几何文件的名称。 在Houdini中，这可能是op:full_path_to_sop来引用一个SOP。

`hedge`

The integer representing a half-edge.

代表一个半边的整数。

Returns

`1` if `hedge` represents a primary half-edge in the referenced geometry, or
`0` otherwise.

如果hedger代表被引用的几何体中的主要半边，则为1，否则为0。

##  Examples  #

    
    
    int numedges;// Count the number of edgesif (hedge_isprimary("defgeo.bgeo", 3))numedges++;

