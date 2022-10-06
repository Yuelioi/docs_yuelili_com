---
title: usd_addrotate
order: 9
category:
  - houdini
---
    
## 描述

Applies a rotation to the primitive

| Since | 18.0 |
| ----- | ---- |

`int usd_addrotate(int stagehandle, string primpath, string suffix, int axis, float angle)`

`int usd_addrotate(int stagehandle, string primpath, string suffix, int xyz, vector angles)`

This function applies a rotation to the primitive. It creates and sets a value
of a transform operation attribute that defines the rotation, and appends it
to the primitive‘stransform order.

此函数向基元应用了一个旋转。它创建并设置了定义旋转的转换操作属性的值，并将其附加到基元的转换顺序。

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
全名是有名称的，对操作的转换类型（如平移或旋转）进行了编码，还可
以包含一个后缀。如果基元有几个相同类型的操作，就有必要指定后缀以区分它们。此参数指定了这样一个后缀。

`axis`

The numeric code for the rotation axis. See the usd.h VEX header for
definitions of the axis.

旋转轴的数字代码。轴的定义见 usd.h VEX 头文件。

`angle`

Angle of rotation in degrees, when rotating around a single principle axis.

围绕单一原理轴旋转时的旋转角度，单位为度。

`axis`

The numeric code for the axis rotation order. See the usd.h VEX header for
definitions of the order.

轴的旋转顺序的数字代码。参见 usd.h VEX 头文件中关于顺序的定义。

`angles`

Three angles of rotation in degrees, when rotating sequentially around each of
the principle axes.

三个旋转角度，以度为单位，当围绕每个主轴依次旋转时。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Include "usd.h" that defines axis and order constants.#include <usd.h>// Rotate the cube 30 degrees around the z-axis.usd_addrotate(0, "/geo/cube", "", USD_AXIS_Z, 30);// Rotate the mesh 45 degrees counter-clock wise around the y-axis.usd_addrotate(0, "/geo/mesh", "geo_rotation", USD_AXIS_Y, -45);// Rotate the cone about Euler angles.usd_addrotate(0, "/geo/cone", "cone_rotation", USD_ROTATE_XYZ, {0, 30, 45});
