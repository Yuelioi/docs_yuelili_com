---
title: PF_EventUnion
order: 4
category:
  - AE 插件开发
---
# PF_EventUnion

PF_EventExtra中的PF_EventUnion是以下四个结构的联合。

## Click

鼠标点击或拖动发生在自定义用户界面的区域内。

### PF_DoClickEventInfo

| **Member** | **Purpose** |
| ---| --- |
| `when` | The (OS-level) time at which the click occurred. |
| `screen_point` | Where, in screen coordinates, the click occurred. For Custom Comp UI, these coordinates can be converted to composition coordinates using the[UI Callbacks](ui-callbacks.html) . |
| See the CCU sample project for an example. | |
| `num_clicks` | The number of clicks that occurred. |
| `modifiers` | Which modifier keys (if any) were held down during click. |
| `continue_refcon[4]` | An array of 4 `A_intptr_t` the plug-in can use to store information during a click-drag-drag sequence. |
| `send_drag` | Set this flag to `TRUE` to indicate continued dragging. The next click event will then effectively be a drag event. |
| `last_time` | Set when the drag event ends (the user has released the mouse button). |

## Draw

After Effects需要你的自定义UI来刷新。

注意：在处理绘制请求时，使用[PF_InData](../effect-basics/PF_InData.html)中提供的图像尺寸（而不是你的输入层的尺寸，就像在[PF_Cmd_RENDER](../effect-basics/command-selectors.html))。

### PF_DrawEventInfo

| **Member** | **Purpose** |
| ---| ---|
| `update_rect` | The rectangle in which to draw, in the context window’s coordinate system. These coordinates can be converted to different coordinate systems using the[UI Callbacks](ui-callbacks.html) . |
| See the CCU sample project for an example. | |
| `depth` | Pixel depth of the drawing context. |

## Keydown

用户按了一个键，效果的用户界面被激活。

使用AE_EffectUI.h中的宏来访问和操作收到的按键代码。

为了在Premiere Pro中接收按键事件，插件必须在.CustomUIInfo.events中设置PF_CustomEFlag_COMP。\PF_PF_Cmd_PARAM_SETUP。
PF_KeyDownEvent

### when

点击发生的时间。

### screen_point

按键时鼠标指针的屏幕坐标。对于Custom Comp UI，这些坐标可以使用[UI Callbacks](https://ae-plugins.docsforadobe.dev/effect-ui-events/ui-callbacks.html#effect-ui-events-ui-callbacks)转换为合成坐标。请看CCU示例项目的例子。

### key_code

要么是一个字符代码（对于可打印的字符，我们使用未移位的大写版本；A不是a，7不是&），要么是一个控制代码。

> - PF_ControlCode_Unknown ` - PF_ControlCode_Unknown
> - PF_ControlCode_Space `
> - PF_ControlCode_Backspace`。
> - PF_ControlCode_Tab`(中文)
> - PF_ControlCode_Return`。
> - PF_ControlCode_Enter`。
> - PF_ControlCode_Escape`。
> - PF_ControlCode_F1`。

…

> - PF_ControlCode_F24`。
> - PF_ControlCode_PrintScreen`。
> - PF_ControlCode_ScrollLock`（滚动锁定）。
> - PF_ControlCode_Pause`。
> - PF_ControlCode_Insert`（插入）。
> - PF_ControlCode_Delete`。
> - PF_ControlCode_Home`。
> - PF_ControlCode_End`。
> - PF_ControlCode_PageUp`。
> - PF_ControlCode_PageDown`。
> - PF_ControlCode_Help`。
> - PF_ControlCode_Clear`。
> - PF_ControlCode_Left's > - PF_ControlCode_Left's
> - PF_ControlCode_Right
> - PF_ControlCode_Up`。
> - PF_ControlCode_Down`（控制代码）。
> - PF_ControlCode_NumLock's
> - PF_ControlCode_Command`(命令)
> - PF_ControlCode_Option`（选项）。
> - PF_ControlCode_Alt ` = PF_ControlCode_Option` > - PF_ControlCode_Alt
> - PF_ControlCode_Control
> - PF_ControlCode_Shift
> - PF_ControlCode_CapsLock``` - PF_ControlCode_CapsLock
> - PF_ControlCode_ContextMenu`。

### modifiers

在按键过程中，哪些（如果有的话）修改键被按下。

> - PF_Mod_NONE`。
> - PF_Mod_CMD_CTRL_KEY` (Mac的cmd，Windows的ctrl)
> - PF_Mod_SHIFT_KEY`（Mac上的cmd，Windows上的ctrl）。
> - PF_Mod_CAPS_LOCK_KEY`（Mac上的cmd，Windows上的ctrl）。
> - PF_Mod_OPT_ALT_KEY` (option on Mac, alt on Windows)
> - PF_Mod_MAC_CONTROL_KEY`（Mac上的选项，Windows上的alt）。

## AdjustCursor

光标已经移动到（但没有离开）效果的自定义用户界面上，以允许效果改变光标。

### PF_AdjustCursorEventInfo

| **Member** | **Purpose** |
| --- | ---|
| screen_point ` | Screen coordinate of the mouse pointer. For Custom Comp UI, these coordinates can be converted to composition coordinates using the[UI Callbacks](https://ae-plugins.docsforadobe.dev/effect-ui-events/ui-callbacks.html#effect-ui-events-ui-callbacks). See the CCU sample project for an example. | | modifiers` | What, if any, modifier keys were held down when the message was sent. |
| set_cursor ` | Set this to your desired cursor, or PF_Cursor_CUSTOM` if you have set the cursor yourself using OS-specific calls. See AE_EffectUI.h for a complete enumeration of built-in cursors. If you don’t want to override the cursor, set this to PF_Cursor_NONE`, or simply ignore this message. |

## Arbitrary Parameters Event

After Effects需要你的插件来管理它的任意数据参数。

虽然任意数据类型不需要自定义用户界面的支持，但是`PF_ArbParamsExtra`遵循EventInfo模型。

### PF_ArbParamsExtra

成员

#### which_function

一个PF_FunctionSelector`表示哪个函数被调用。

#### id

由After Effects使用；将与在_PF_Cmd_PARAM_SETUP_期间分配给任意数据类型的ID相匹配。

#### padding

用来进行字节对齐

#### u

(其中一个将被传递；见[任意数据参数](https://ae-plugins.docsforadobe.dev/effect-details/arbitrary-data-parameters.html#effect-details-arbitrary-data-parameters))

```
u{
new_func_params
dispose_func_params
copy_func_params
flat_size_func_params
flatten_func_params
unflatten_func_params
interp_func_params
compare_func_params
print_size_func_params
print_func_params
scan_func_params
}
```