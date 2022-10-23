---
title: Effect UI & Events
order: 2
category:
  - AE 插件开发
---

# Effect UI & Events

效果可以在两个方面提供自定义的用户界面：(1)效果控制窗口(自定义 ECW 用户界面)，和(2)合成或层窗口(自定义 Comp 用户界面)。

使用自定义用户界面的效果应该在 "PF_OutFlag_CUSTOM_UI" ( 参见[PF_OutFlags](../effect-basics/PF_OutData.html)期间设置`PF_Cmd_GLOBAL_SETUP`(来自[Global Selectors](. ./effect-basics/command-selectors.html)(#effect-basics-command-selectors-global-selectors))，并处理 PF_Cmd_EVENT 选择器。

自定义 ECW 用户界面允许一个效果提供一个带有自定义控件的参数，它可以用于标准参数类型或[任意数据参数](../effect-details/arbitrary-data-parameters.html) 。

拥有自定义用户界面的参数应该在[添加参数](../effect-details/interaction-callback-functions.html)时设置`PF_PUI_CONTROL' ( 参见[参数用户界面标志](../effect-basics/PF_ParamDef.html) 。)

自定义 Comp UI 允许一个效果在合成或层窗口中提供对视频的直接操作。

当效果被选中时，窗口可以直接在视频上叠加自定义控件，并可以处理用户与这些控件的交互，以便更快速、自然地调整参数。

效果应该通过调用 PF_REGISTER_UI 来注册自己接收事件。

After Effects 可以向特效发送事件，用于用户界面处理和参数管理，将特效集成到其中央消息队列中。

虽然许多事件是为了响应用户的输入而发送的，但 After Effects 也向管理任意数据参数的效果发送事件。

事件的类型在[PF_EventExtra-&gt;e_type](PF_EventExtra.html)中指定，各种事件的描述见下文。

## Events

| **Event**               | **Indicates**                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PF_Event_NEW_CONTEXT ` | The user created a new context (probably by opening a window) for events.<br />The plug-in is allowed to store state information inside the context using the context handle.<br />[PF_EventUnion](../effect-ui-events/PF_EventUnion.html) contains valid context and type, but everything else should be ignored.                  |
| `PF_Event_DO_CLICK `    | The user clicked within the effect’s UI.[PF_EventUnion](../effect-ui-events/PF_EventUnion.html) contains a PF*DoClickEventInfo `.`<br />`Handle the mouse click and respond, passing along drag info; see sample code), within a context.`<br />`NOTE: As of 7.0, do not* block until mouse-up; instead, rely on PF_Event_DRAG `. |
| `PF_Event_KEYDOWN `     | Keystroke.[PF_EventUnion](../effect-ui-events/PF_EventUnion.html) contains a PF_KeyDownEvent`.                                                                                                                                                                                                                                      |
| `PF_Event_MOUSE_EXITED` | New in CS6. Notification that the mouse is no longer over a specific view (layer or comp only).                                                                                                                                                                                                                                                                                                     |
