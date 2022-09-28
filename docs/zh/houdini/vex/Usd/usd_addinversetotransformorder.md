---
title: usd_addinversetotransformorder
order: 4
category:
  - houdini
---
    
## 描述

Appends an inversed transform operation to the primitive‘stransform order

| Since | 18.0 |
| ----- | ---- |

`int usd_addinversetotransformorder(int stagehandle, string primpath, string name)`

This function appends an inversed transformation to the primitive‘s
transform order.Transform order is a sequence of transform operations, whose
full names are stored in `xformOpOrder` attribute as a string array.Thus, this
function appends a new operation name to that attribute.

此函数将一个反转转换附加到基元的转换顺序中。 变换顺序是变换操作的序列，其全名作为一个字符串数组存储在 xformOpOrderattribute 中。
因此，此函数将一个新的操作名称追加到该属性。

Inverse transforms are used primary for rotating (or scaling) around a pivot
that does not coincide with the origin. The usual practice is to apply a
translation to the pivot point, then perform rotation, and finally apply an
inverse of the original translation. This function is used for applying the
inverse of the original translation.

逆向变换主要用于围绕一个不与原点重合的支点进行旋转（或缩放）。通常的做法是对支点应用一个平移，然后执行旋转，最后应用原始平移的逆向。这个函数用于应用原始平移的逆向。

## 描述

an operation suffix as a parameter, this function takes the full operation
name.Use [usd_transformname](usd_transformname.html "Constructs a full name of
a transform operation") to obtain the full name if you know the suffix.

注意：与大多数处理原始变换的 VEX 函数不同的是，这个函数以操作后缀作为参数，它需要完整的操作名称。
如果你知道后缀，可以使用 usd_transformnam 来获取全名。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

要写到的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

The full name of the transform operation. Use
[usd_transformname](usd_transformname.html "Constructs a full name of a
transform operation") to obtain the full name from the operation suffix.

转换操作的全名。使用 usd_transformnam 从操作后缀获取全名。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Note, the USD_XFORM_TRANSLATE and USD_AXIS_Z constants used below // are defined in "usd.h" VEX header, so include it.#include <usd.h>// Construct the pivot translation operation suffix and name. string pivot_xform_suffix = "some_pivot";string pivot_xform_name  = usd_transformname(USD_XFORM_TRANSLATE, pivot_xform_suffix);// Rotate about z-axis that goes thru pivot (1,0,0).usd_addtranslate(0, "/geo/cone", pivot_xform_suffix, {1, 0, 0});usd_addrotate(0, "/geo/cone", "some_rotation", USD_AXIS_Z, -90);usd_addinversetotransformorder(0, "/geo/cone", pivot_xform_name);
