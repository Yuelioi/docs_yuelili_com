---
title: 插件UI与事件
order: 2
category:
  - AE 插件开发
---

效果可以在两个方面提供自定义的用户界面：(1)效果控制窗口(自定义 ECW 用户界面)，(2)合成或图层窗口(自定义合成用户界面)。

使用自定义用户界面的效果应该在 `PF_OutFlag_CUSTOM_UI` (参见[PF_OutFlags](../effect-basics/PF_OutData.html)) 期间设置`PF_Cmd_GLOBAL_SETUP`(参见[全局入口指令](../effect-basics/command-selectors.html))，并处理 PF_Cmd_EVENT 入口指令。

自定义 ECW 用户界面允许一个效果提供一个带有自定义控件的参数，可以用于标准参数类型或[任意数据参数](../effect-details/arbitrary-data-parameters.html)

拥有自定义用户界面的参数应该在[添加参数](../effect-details/interaction-callback-functions.html)时设置`PF_PUI_CONTROL` ( 参见[参数用户界面标志](../effect-basics/PF_ParamDef.html))

自定义合成UI允许一个效果在合成或图层窗口中提供对视频的直接操作。

当效果被选中时，窗口可以直接在视频上叠加自定义控件，并可以处理用户与这些控件的交互，以便更快速、自然地调整参数。

效果应该通过调用 PF_REGISTER_UI 来注册自己接收事件。

After Effects 可以向插件发送事件，用于用户界面处理和参数管理，将插件集成到其中央消息队列中。

虽然许多事件是为了响应用户的输入而发送的，但 After Effects 也向管理任意数据参数的效果发送事件。

事件的类型在[PF_EventExtra-&gt;e_type](PF_EventExtra.html)中指定，各种事件的描述见下文。

## Events

| **Event**| **Indicates**|
| ----------------------- | -------------------------------------------------------------- |
| `PF_Event_NEW_CONTEXT` | 用户为事件创建了一个新的上下文（可能是通过打开一个窗口）。<br/>允许插件使用上下文句柄在上下文中存储状态信息。<br />[PF_EventUnion](../effect-ui-events/PF_EventUnion.html)包含有效的上下文和类型，但应忽略其他所有内容。|
|`PF_Event_ACTIVATE`|用户激活了一个新的上下文（可能是通过将窗口带入前台）。`PF_EventUnion`为空|
| `PF_Event_DO_CLICK` | 用户在效果的UI中单击。[PF_EventUnion](../effect-ui-events/PF_EventUnion.html)包含 `PF_DoClickEventInfo`<br />处理鼠标单击并响应，在上下文中传递拖动信息；请参阅示例代码）。<br />注意：从7.0开始，在鼠标向上之前不要阻塞；相反，依靠`PF_Event_DRAG`。 |
|`PF_Event_DRAG`|也是一个点击事件，PF_EventUnion包含一个`PF_DoClickEventInfo`。<br />通过从`PF_Event_DO_CLICK`返回`send_drag==TRUE`来请求。<br />这样AE就可以从用户的更改中看到新数据。|
|`PF_Event_DRAW`|绘制！`PF_EventUnion`包含`PF_DrawEventInfo`。|
|`PF_Event_DEACTIVATE`|用户停用了一个上下文（可能是打开了另一个窗口）。`PF_EventUnion`为空|
|`PF_Event_CLOSE_CONTEXT`|用户已关闭上下文。`PF_EventUnion`为空|
|`PF_Event_IDLE`|上下文已打开，但什么也没发生。`PF_EventUnion`为空|
|`PF_Event_ADJUST_CURSOR`|鼠标在插件的用户界面上。通过更改`PF_AdjustCursorEventInfo`中的`PF_CursorType`来设置光标。使用特定于操作系统的调用来实现自定义游标；通过将`PF_CursorType`设置为`PF_Cursor_CUSTOM`来告诉AE, 您已经这样做了。<br />尽可能使用AE光标来保持界面的连续性。
|
| `PF_Event_KEYDOWN`  | 按键.[PF_EventUnion](../effect-ui-events/PF_EventUnion.html) 包含一个`PF_KeyDownEvent`|
| `PF_Event_MOUSE_EXITED` | CS6中的新功能。通知鼠标不再位于特定视图上（仅限图层或合成视图）。|
