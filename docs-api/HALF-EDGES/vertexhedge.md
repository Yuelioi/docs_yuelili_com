## 描述

Returns the half-edge which has a vertex as source.


```c
int  vertexhedge(<geometry>geometry, int vertex)
```


`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从0开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```
 reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在Houdini内部运行时，这可以是anop:/path/to/sopreference。

`vertex`

The linear vertex number in the geometry.`0` is the first vertex.

geometry中的线性顶点编号。0是第一个顶点。

Returns

The number for the half-edge that has `vertex` as source and the vertex
following `vertex` in the primitive of `vertex` as destination.Returns `-1` if
failed to find the corresponding vertex.

半边的编号，该半边以vertex为源，在vertex的基元中紧随vertex的顶点为目的。

##  Examples  #

    
    
    int vtxhedge;// Get the hedge out of vertex vertex number 2.vtxhedge = vertexhedge("defgeo.bgeo", 2);

