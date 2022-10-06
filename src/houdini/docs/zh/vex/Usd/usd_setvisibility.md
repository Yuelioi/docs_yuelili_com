---
title: usd_setvisibility
order: 139
category:
  - houdini
---
    
## 描述

Configures the primitive to be visible, invisible, or to inherit visibility  
from the parent.

| Since | 19.0 |
| ----- | ---- |

```c
int  usd_setvisibility(int stagehandle, string primpath, int code)
```

This function makes the primitive visible or invisible, or configures it to
inherit the visibility from the parent.

此函数使基元可见或不可见，或将其配置为从父级继承可见性。

Making a primitive visible may require changing the visibility state of its
ancestors, while making it invisible or configuring it to inherit the
visibility from the parent only requires setting its attribute.

使基元可见可能需要更改其祖先的可见性状态，而使其不可见或将其配置为从父级继承可见性仅需要设置其属性。

NOTE: This function is similar to

```c
usd_setvisible()
```

which, is equivalent to
calling this function with either visibility or invisibility code.

注意：此函数类似于 tousd_setvisible()，相当于用可见或不可见代码调用此函数。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个要写到的舞台的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`code`

A numeric code for visibility

用于显示的数字代码

- 0 - make the primitive invisible

0 - 使基元不可见

- 1 - configure the primitive to be visible

1 - 将基元配置为可见

- 2 - mark the primitive to inherit visibility from the parent

2 - 将基元标记为从父基元继承可见性

Note, these numeric codes are reflected as defines in the “usd.h” header file,
as USD_VISIBILITY_INVISIBLE, USD_VISIBILITY_VISIBLE, and
USD_VISIBILITY_INHERIT.

请注意，这些数字代码反映为 "usd.h "头文件中的定义，即
USD_VISIBILITY_INVISIBLE、USD_VISIBILITY_VISIBLE 和 USD_VISIBILITY_INHERIT。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    #include <usd.h>// Make the sphere primitive visible.usd_setvisibility(0, "/geo/sphere", USD_VISIBILITY_VISIBLE);// Configure the cube primitive to inherit visibility from parent.usd_setvisibility(0, "/geo/cube", USD_VISIBILITY_INHERIT);
