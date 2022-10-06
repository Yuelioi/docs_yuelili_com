---
title: usd_addtransform
order: 12
category:
  - houdini
---
    
## 描述

Applies a transformation to the primitive

| Since | 17.5 |
| ----- | ---- |

`int usd_addtransform(int stagehandle, string primpath, string suffix, matrix xform)`

This function applies a transformation to the primitive. It creates and sets a
value of a transform operation attribute that defines the transformation, and
appends it to the primitive‘stransform order.

此函数将一个转换应用到基元。它创建并设置了一个定义了转换的转换操作属性的值，并将其附加到基元的转换顺序。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(此参数将来可能会被用于允许向其它阶段写入。）

`primpath`

The path to the primitive.

到基元的路径。

`suffix`

The transform operation suffix.

转换操作的后缀。

USD primitives are transformed in space by a series of transform operations
whose full names are sequentially listed in the `xformOpOrder` attribute.Full
names are namespaced, encode the operation transform type (e.g., translation
or rotation), and can also contain a suffix. If primitive has a few operations
of the same type, it‘snecessary to specify the suffix to differentiate
between them. This parameter specifies such a suffix.

美元基元通过一系列转换操作在空间内进行转换，这些转换操作的全名按顺序列在 xformOpOrder 属性里。
全名是有名称的，对操作转换类型（如平移或旋转）进行编码，还可包含一个后缀。如果基元有几个相同类型的操作，就有必要指定后缀以区分它们。此参数指定了这样一个后缀。

`xform`

The the matrix that encodes the space transformation.

编码空间转换的矩阵。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时为 stagehandle 的值，失败时为 1。

## Examples

    // Transform the cube.#include <math.h>matrix xform = maketransform(XFORM_SRT, XFORM_XYZ, {1,2,3}, {3,45,60}, {0.5,0.25,2});usd_addtransform(0, "/geo/cube", "my_xform", xform);


    // Get the cube's world transform.matrix xform = usd_worldtransform(0, "/src/cube");// Match the cone's spacial location to the cube.// First need to clear current transforms on the cube,// and also need to block the transform inheritance from the parent.usd_cleartransformorder(0, "/dst/cone");usd_settransformreset(0, "/dst/cone", 1);usd_addtransform(0, "/dst/cone", "", xform);
