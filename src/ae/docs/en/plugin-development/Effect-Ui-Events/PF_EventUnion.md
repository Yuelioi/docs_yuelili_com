---
title: PF_EventUnion
order: 4
category:
  - AE 插件开发
---
# PF_EventUnion

The PF_EventUnion in PF_EventExtra is a union of the four following structures.

---

## Click

A mouse click or drag occurred within the custom UI’s area.

### PF_DoClickEventInfo

| **Member**                           | **Purpose**                                                                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `when`                                   | The (OS-level) time at which the click occurred.                                                                                                                                                              |
| `screen\_point`                          | Where, in screen coordinates, the click occurred. For Custom Comp UI, these coordinates can be converted to composition coordinates using the[UI Callbacks](ui-callbacks.html) (#effect-ui-events-ui-callbacks). |
| See the CCU sample project for an example. |                                                                                                                                                                                                               |
| `num\_clicks`                            | The number of clicks that occurred.                                                                                                                                                                           |
| `modifiers`                              | Which modifier keys (if any) were held down during click.                                                                                                                                                     |
| `continue\_refcon[4]`                    | An array of 4 `A\_intptr\_t` the plug-in can use to store information during a click-drag-drag sequence.                                                                                                    |
| `send\_drag`                             | Set this flag to `TRUE` to indicate continued dragging. The next click event will then effectively be a drag event.                                                                                         |
| `last\_time`                             | Set when the drag event ends (the user has released the mouse button).                                                                                                                                        |

---

## Draw

After Effects needs your custom UI to refresh.

:::tip: when handling draw requests, use the image dimensions provided in [PF_InData](../effect-basics/PF_InData.html) (#effect-basics-pf-indata) (rather that the dimensions of your input layer, as you would during [PF_Cmd_RENDER](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-frame-selectors)).

### PF_DrawEventInfo

| **Member**                           | **Purpose**                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `update\_rect`                           | The rectangle in which to draw, in the context window’s coordinate system. These coordinates can be converted to different coordinate systems using the[UI Callbacks](ui-callbacks.html) (#effect-ui-events-ui-callbacks). |
| See the CCU sample project for an example. |                                                                                                                                                                                                                          |
| `depth`                                  | Pixel depth of the drawing context.                                                                                                                                                                                      |

---

## Keydown

The user pressed a key, and the effect’s UI is active.

Use the macros in AE_EffectUI.h to access and manipulate the key codes received.

In order to receive keydown events in Premiere Pro, plug-ins must set PF_CustomEFlag_COMP in PF_CustomUIInfo.events during .. \_PF_Cmd_PARAM_SETUP.
PF_KeyDownEvent


### when

Time at which the click occurred.

### screen_point

Screen coordinate of the mouse pointer when the key was pressed. For Custom Comp UI, these coordinates can be converted to composition coordinates using the [UI Callbacks](https://ae-plugins.docsforadobe.dev/effect-ui-events/ui-callbacks.html#effect-ui-events-ui-callbacks). See the CCU sample project for an example.

### key_code


Either a character code (for printable characters, we use the unshifted upper case version; A not a, 7 not &), or a control code:

> * `<span class="pre">PF_ControlCode_Unknown</span>`
> * `<span class="pre">PF_ControlCode_Space</span>`
> * `<span class="pre">PF_ControlCode_Backspace</span>`
> * `<span class="pre">PF_ControlCode_Tab</span>`
> * `<span class="pre">PF_ControlCode_Return</span>`
> * `<span class="pre">PF_ControlCode_Enter</span>`
> * `<span class="pre">PF_ControlCode_Escape</span>`
> * `<span class="pre">PF_ControlCode_F1</span>`

…

> * `<span class="pre">PF_ControlCode_F24</span>`
> * `<span class="pre">PF_ControlCode_PrintScreen</span>`
> * `<span class="pre">PF_ControlCode_ScrollLock</span>`
> * `<span class="pre">PF_ControlCode_Pause</span>`
> * `<span class="pre">PF_ControlCode_Insert</span>`
> * `<span class="pre">PF_ControlCode_Delete</span>`
> * `<span class="pre">PF_ControlCode_Home</span>`
> * `<span class="pre">PF_ControlCode_End</span>`
> * `<span class="pre">PF_ControlCode_PageUp</span>`
> * `<span class="pre">PF_ControlCode_PageDown</span>`
> * `<span class="pre">PF_ControlCode_Help</span>`
> * `<span class="pre">PF_ControlCode_Clear</span>`
> * `<span class="pre">PF_ControlCode_Left</span>`
> * `<span class="pre">PF_ControlCode_Right</span>`
> * `<span class="pre">PF_ControlCode_Up</span>`
> * `<span class="pre">PF_ControlCode_Down</span>`
> * `<span class="pre">PF_ControlCode_NumLock</span>`
> * `<span class="pre">PF_ControlCode_Command</span>`
> * `<span class="pre">PF_ControlCode_Option</span>`
> * `<span class="pre">PF_ControlCode_Alt</span>` = `<span class="pre">PF_ControlCode_Option</span>`
> * `<span class="pre">PF_ControlCode_Control</span>`
> * `<span class="pre">PF_ControlCode_Shift</span>`
> * `<span class="pre">PF_ControlCode_CapsLock</span>`
> * `<span class="pre">PF_ControlCode_ContextMenu</span>`

### modifiers


Which (if any) modifier keys were down during the key press.

> * `<span class="pre">PF_Mod_NONE</span>`
> * `<span class="pre">PF_Mod_CMD_CTRL_KEY</span>` (cmd on Mac, ctrl on Windows)
> * `<span class="pre">PF_Mod_SHIFT_KEY</span>`
> * `<span class="pre">PF_Mod_CAPS_LOCK_KEY</span>`
> * `<span class="pre">PF_Mod_OPT_ALT_KEY</span>` (option on Mac, alt on Windows)
> * `<span class="pre">PF_Mod_MAC_CONTROL_KEY</span>`






---

## AdjustCursor

The cursor has moved onto (but not off of) the effect’s custom UI, to allow the effect to change the cursor.

### PF_AdjustCursorEventInfo


| **Member**                          | **Purpose**                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<span class="pre">screen_point</span>` | Screen coordinate of the mouse pointer. For Custom Comp UI, these coordinates can be converted to composition coordinates using the[UI Callbacks](https://ae-plugins.docsforadobe.dev/effect-ui-events/ui-callbacks.html#effect-ui-events-ui-callbacks). See the CCU sample project for an example.                                                    |
| `<span class="pre">modifiers</span>`    | What, if any, modifier keys were held down when the message was sent.                                                                                                                                                                                                                                                                               |
| `<span class="pre">set_cursor</span>`   | Set this to your desired cursor, or `<span class="pre">PF_Cursor_CUSTOM</span>` if you have set the cursor yourself using OS-specific calls. See AE_EffectUI.h for a complete enumeration of built-in cursors. If you don’t want to override the cursor, set this to `<span class="pre">PF_Cursor_NONE</span>`, or simply ignore this message. |



## Arbitrary Parameters Event

After Effects needs your plug-in to manage it’s arbitrary data parameter(s).

Though arbitrary data types are not required for custom UI support, `PF\_ArbParamsExtra` follows the EventInfo model.

### PF_ArbParamsExtra

Members

#### which_function

A `<span class="pre">PF_FunctionSelector</span>` indicating which function is called

#### id

Used by After Effects; will match the ID assigned to the arbitrary data type during  *PF_Cmd_PARAM_SETUP* .

#### padding

Used for byte-alignment

#### u

(One of these will be passed; see [Arbitrary Data Parameters](https://ae-plugins.docsforadobe.dev/effect-details/arbitrary-data-parameters.html#effect-details-arbitrary-data-parameters))

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
