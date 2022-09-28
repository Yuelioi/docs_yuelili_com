---
title: sensor_panorama_create
order: 1
category:
  - houdini
---
    
## 描述

Sensor function to render GL scene and query the result.

`int sensor_panorama_create(float time, vector pos, int size, float near, float far, string candidateobj, string includeobj, string excludeobj, int uselit)`

This function will render the surrounding environment using the GL render
andprovides a handle to use for querying the results.

这个函数将使用 GL 渲染器来渲染周围的环境，并提供一个用于查询结果的句柄。

Note

Because this needs to render the scene, it only works in interactive sessions
of Houdini.

提供一个用于查询结果的句柄。

`time`

The period in time when the render should be performed.

因为这需要渲染场景，所以它只在 Houdini 的交互式会话中工作。

`pos`

The location in world space coordinates where the render should be performed.

应该进行渲染的时间段。

`size`

The resolution of the performed render.

在世界空间坐标中应该执行渲染的位置。

`near`

The near plane restriction.

所执行的渲染的分辨率。

`far`

The far plane restriction.

近平面的限制。

`candidateobj`

A bundle, group, or expression that represents what objects will be displayed
if their display setting is enabled.

远平面的限制。

`includeobj`

A bundle, group, or expression that represents what objects will always be
displayed.

一个包、组或表达式，表示如果对象的显示设置被启用，将显示哪些对象。

`excludeobj`

A bundle, group, or expression that represents what objects will never be
displayed.

表示哪些对象将总是被显示的束、组或表达式。

`uselit`

Usually for AI purposes you want to not have any lighting as you are
usingcolor as a key to differentiate actors.However, if you want to
displaywhat a creature sees, lighting makes things more visually accurate.

代表哪些对象将永远不会被显示的束、组或表达式。
