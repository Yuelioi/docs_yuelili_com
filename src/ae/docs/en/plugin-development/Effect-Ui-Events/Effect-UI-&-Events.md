---
title: Effect UI & Events
order: 2
category:
  - AE 插件开发
---
# Effect UI & Events

Effects can provide custom UI in two areas: (1) the Effect Controls Window (custom ECW UI), and (2) the Composition or Layer Windows (Custom Comp UI).

Effects that use custom UI should set `PF\_OutFlag\_CUSTOM\_UI` (from [PF_OutFlags](../effect-basics/PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags) during `PF\_Cmd\_GLOBAL\_SETUP` (from [Global Selectors](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-global-selectors)), and handle the PF_Cmd_EVENT selector.

Custom ECW UI allows an effect to provide a parameter with a customized control, which can be used either with standard parameter types or [Arbitrary Data Parameters](../effect-details/arbitrary-data-parameters.html) (#effect-details-arbitrary-data-parameters).

Parameters that have a custom UI should set `PF\_PUI\_CONTROL` (from [Parameter UI Flags](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef-parameter-ui-flags)) when [adding the parameter](../effect-details/interaction-callback-functions.html) (#effect-details-interaction-callback-functions-interaction-callbacks).

Custom Comp UI allows an effect to provide direct manipulation of the video in the Composition or Layer Windows.

When the effect is selected, the Window can overlay custom controls directly on the video, and can handle user interaction with those controls, to adjust parameters more quickly and naturally.

Effects should register themselves to receive events by calling PF_REGISTER_UI.

After Effects can send events to effects for user interface handling and parameter management, integrating effects into its central message queue.

While many events are sent in response to user input, After Effects also sends events to effects which manage arbitrary data parameters.

The type of event is specified in [PF_EventExtra-&gt;e_type](PF_EventExtra.html) (#effect-ui-events-pf-eventextra) and the various events are described below.

---

## Events


| **Event**                                     | **Indicates**                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<span class="pre">PF_Event_NEW_CONTEXT</span>`   | The user created a new context (probably by opening a window) for events.<br />The plug-in is allowed to store state information inside the context using the context handle.<br />[PF_EventUnion](https://ae-plugins.docsforadobe.dev/effect-ui-events/PF_EventUnion.html#effect-ui-events-pf-eventunion) contains valid context and type, but everything else should be ignored.                                                                                                                |
| `<span class="pre">PF_Event_ACTIVATE</span>`      | The user activated a new context (probably by bringing a window into the foreground).[PF_EventUnion](https://ae-plugins.docsforadobe.dev/effect-ui-events/PF_EventUnion.html#effect-ui-events-pf-eventunion) is empty.                                                                                                                                                                                                                                                                            |
| `<span class="pre">PF_Event_DO_CLICK</span>`      | The user clicked within the effect’s UI.[PF_EventUnion](https://ae-plugins.docsforadobe.dev/effect-ui-events/PF_EventUnion.html#effect-ui-events-pf-eventunion) contains a `<span class="pre">PF_DoClickEventInfo</span>`.<br />Handle the mouse click and respond, passing along drag info; see sample code), within a context.<br />NOTE: As of 7.0, do *not* block until mouse-up; instead, rely on `<span class="pre">PF_Event_DRAG</span>`.                                           |
| `<span class="pre">PF_Event_DRAG</span>`          | Also a Click Event,[PF_EventUnion](https://ae-plugins.docsforadobe.dev/effect-ui-events/PF_EventUnion.html#effect-ui-events-pf-eventunion) contains a `<span class="pre">PF_DoClickEventInfo</span>`.<br />Request this by returning `<span class="pre">send_drag</span><span> </span><span class="pre">==</span><span> </span><span class="pre">TRUE</span>` from `<span class="pre">PF_Event_DO_CLICK</span>`.<br />Do this so After Effects can see new data from the user’s changes. |
| `<span class="pre">PF_Event_DRAW</span>`          | Draw![PF_EventUnion](https://ae-plugins.docsforadobe.dev/effect-ui-events/PF_EventUnion.html#effect-ui-events-pf-eventunion) contains a `<span class="pre">PF_DrawEventInfo</span>`.                                                                                                                                                                                                                                                                                                            |
| `<span class="pre">PF_Event_DEACTIVATE</span>`    | The user has deactivated a context (probably by bringing another window into the foreground).`<span class="pre">PF_EventUnion</span>` is empty.                                                                                                                                                                                                                                                                                                                                              |
| `<span class="pre">PF_Event_CLOSE_CONTEXT</span>` | A context has been closed by the user.`<span class="pre">PF_EventUnion</span>` will be empty.                                                                                                                                                                                                                                                                                                                                                                                                |
| `<span class="pre">PF_Event_IDLE</span>`          | A context is open but nothing is happening.`<span class="pre">PF_EventUnion</span>` is empty.                                                                                                                                                                                                                                                                                                                                                                                                |
| `<span class="pre">PF_Event_ADJUST_CURSOR</span>` | The mouse is over the plug-in’s UI. Set the cursor by changing the `<span class="pre">PF_CursorType</span>` in the `<span class="pre">PF_AdjustCursorEventInfo</span>`.<br />Use OS-specific calls to implement a custom cursor; tell After Effects you’ve done so by setting `<span class="pre">PF_CursorType</span>` to `<span class="pre">PF_Cursor_CUSTOM</span>`.<br />Use an After Effects cursor whenever possible to preserve interface continuity.                          |
| `<span class="pre">PF_Event_KEYDOWN</span>`       | Keystroke.[PF_EventUnion](https://ae-plugins.docsforadobe.dev/effect-ui-events/PF_EventUnion.html#effect-ui-events-pf-eventunion) contains a `<span class="pre">PF_KeyDownEvent</span>`.                                                                                                                                                                                                                                                                                                        |
| `<span class="pre">PF_Event_MOUSE_EXITED</span>`  | New in CS6. Notification that the mouse is no longer over a specific view (layer or comp only).                                                                                                                                                                                                                                                                                                                                                                                                |
