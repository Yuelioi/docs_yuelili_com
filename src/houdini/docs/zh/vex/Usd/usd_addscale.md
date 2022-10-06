---
title: usd_addscale
order: 10
category:
  - houdini
---
    
## 描述

Applies a scale to the primitive

| Since | 18.0 |
| ----- | ---- |

`int usd_addscale(int stagehandle, string primpath, string suffix, vector scale)`

This function applies a scale to the primitive. It creates and sets a value of
a transform operation attribute that defines the scale, and appends it to the
primitive‘stransform order.

此函数将一个比例尺应用于基元。它创建并设置了一个定义比例的转换操作属性的值，并将其附加到基元的转换顺序上。

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

`scale`

The the scale factors along each of the principle axes.

沿着每个原则轴的比例因子。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时则为 1。

## Examples

    // Scale the cubeusd_addscale(0, "/geo/cube", "my_scale", {0.25, 0.5, 2});
