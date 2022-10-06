---
title: setagentclips
order: 51
category:
  - houdini
---
    
## 描述

Sets the animation clips that an agent should use to compute its transforms.

`int setagentclips(int geohandle, int prim, string clip_names[], float clip_times[], float clip_weights[], string clip_transform_groups[], int clip_layer_ids[], int layer_blend_modes[], float layer_weights[], int layer_parent_ids[])`

This function can provide improved performance compared to using a combination
of [setagentclipnames](setagentclipnames.html "Sets the current animation
clips for an agent primitive."), [setagentcliptimes](setagentcliptimes.html "Sets the current times for an agent primitive‘sanimation clips."), and
[setagentclipweights](setagentclipweights.html "Sets the blend weights for an
agent primitive‘sanimation clips."), and also modifies the [primitive
intrinsics used for layering animation
clips](../../crowds/agents.html#currentclips).

与使用 setagentclipnames、setagentclipimes 和 setagentclipweights 的组合相比，这个函数可以提供更好的性能，而且还修改了用于分层动画片断的 primitive
intrinsics。

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可用于获取当前几何体的句柄。

`prim`

The primitive number.

基元编号。

`clip_names`

A list of animation clip names.

动画片段名称的列表。

`clip_times`

A list of times that the clips should be sampled at.

动画片段应被采样的时间列表。

`clip_weights`

A list of blend weights for the animation clips.

动画片断的混合权重列表。

```c
clip_transform_groups
```

A list of transform groups, which specify the joints that each clip should be
applied to.

变换组的列表，指定每个剪辑应适用的关节。

```c
clip_layer_ids
```

A list containing the layer that each animation clip is an input for.

一个包含每个动画片段的输入层的列表。

```c
layer_blend_modes
```

A list of blend modes for each layer. The available blend modes are defined in

```c
$HH/vex/include/crowd_cliplayers.h
```

.

每个层的混合模式的列表。可用的混合模式定义在$HH/vex/include/crowd_cliplayers.h。

`layer_weights`

A list of blend weights for each layer. The blend weight is not used for the
topmost layer.

每个层的混合权重的列表。混合权重不用于最上面的层。

```c
layer_parent_ids
```

A list containing the parent layer for each layer (or -1 for the topmost
layer). This specifies a tree of animation layers.

一个包含每个层的父层的列表（或者最上面的层为-1）。这指定了一棵动画层的树。
