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

| **Member**                                 | **Purpose**                                                                                                                                                                                                    |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `when`                                     | The (OS-level) time at which the click occurred.                                                                                                                                                               |
| `screen\_point`                            | Where, in screen coordinates, the click occurred. For Custom Comp UI, these coordinates can be converted to composition coordinates using the [UI Callbacks](ui-callbacks.html) (#effect-ui-events-ui-callbacks). |
| See the CCU sample project for an example. |
| `num\_clicks`                              | The number of clicks that occurred.                                                                                                                                                                            |
| `modifiers`                                | Which modifier keys (if any) were held down during click.                                                                                                                                                      |
| `continue\_refcon[4]`                      | An array of 4 `A\_intptr\_t` the plug-in can use to store information during a click-drag-drag sequence.                                                                                                       |
| `send\_drag`                               | Set this flag to `TRUE` to indicate continued dragging. The next click event will then effectively be a drag event.                                                                                            |
| `last\_time`                               | Set when the drag event ends (the user has released the mouse button).                                                                                                                                         |

---

## Draw

After Effects needs your custom UI to refresh.

:::tip: when handling draw requests, use the image dimensions provided in [PF_InData](../effect-basics/PF_InData.html) (#effect-basics-pf-indata) (rather that the dimensions of your input layer, as you would during [PF_Cmd_RENDER](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-frame-selectors)).

### PF_DrawEventInfo

| **Member**                                 | **Purpose**                                                                                                                                                                                                              |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `update\_rect`                             | The rectangle in which to draw, in the context window’s coordinate system. These coordinates can be converted to different coordinate systems using the [UI Callbacks](ui-callbacks.html) (#effect-ui-events-ui-callbacks). |
| See the CCU sample project for an example. |
| `depth`                                    | Pixel depth of the drawing context.                                                                                                                                                                                      |

---

## Keydown

The user pressed a key, and the effect’s UI is active.

Use the macros in AE_EffectUI.h to access and manipulate the key codes received.

In order to receive keydown events in Premiere Pro, plug-ins must set PF_CustomEFlag_COMP in PF_CustomUIInfo.events during .. \_PF_Cmd_PARAM_SETUP.
PF_KeyDownEvent
**\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\***

| **Member**      | **Purpose**                                                      |
| --------------- | ---------------------------------------------------------------- |
| `when`          | Time at which the click occurred.                                |
| `screen\_point` | Screen coordinate of the mouse pointer when the key was pressed. |

For Custom Comp UI, these coordinates can be converted to composition coordinates using the [UI Callbacks](ui-callbacks.html) (#effect-ui-events-ui-callbacks).
See the CCU sample project for an example. |
| `key\_code` | Either a character code (for printable characters, we use the unshifted upper case version; A not a, 7 not &), or a control code:

- `PF\_ControlCode\_Unknown`
- `PF\_ControlCode\_Space`
- `PF\_ControlCode\_Backspace`
- `PF\_ControlCode\_Tab`
- `PF\_ControlCode\_Return`
- `PF\_ControlCode\_Enter`
- `PF\_ControlCode\_Escape`
- `PF\_ControlCode\_F1`

…

- `PF\_ControlCode\_F24`
- `PF\_ControlCode\_PrintScreen`
- `PF\_ControlCode\_ScrollLock`
- `PF\_ControlCode\_Pause`
- `PF\_ControlCode\_Insert`
- `PF\_ControlCode\_Delete`
- `PF\_ControlCode\_Home`
- `PF\_ControlCode\_End`
- `PF\_ControlCode\_PageUp`
- `PF\_ControlCode\_PageDown`
- `PF\_ControlCode\_Help`
- `PF\_ControlCode\_Clear`
- `PF\_ControlCode\_Left`
- `PF\_ControlCode\_Right`
- `PF\_ControlCode\_Up`
- `PF\_ControlCode\_Down`
- `PF\_ControlCode\_NumLock`
- `PF\_ControlCode\_Command`
- `PF\_ControlCode\_Option`
- `PF\_ControlCode\_Alt` = `PF\_ControlCode\_Option`
- `PF\_ControlCode\_Control`
- `PF\_ControlCode\_Shift`
- `PF\_ControlCode\_CapsLock`
- `PF\_ControlCode\_ContextMenu`

|
| `modifiers` | Which (if any) modifier keys were down during the key press.

- `PF\_Mod\_NONE`
- `PF\_Mod\_CMD\_CTRL\_KEY` (cmd on Mac, ctrl on Windows)
- `PF\_Mod\_SHIFT\_KEY`
- `PF\_Mod\_CAPS\_LOCK\_KEY`
- `PF\_Mod\_OPT\_ALT\_KEY` (option on Mac, alt on Windows)
- `PF\_Mod\_MAC\_CONTROL\_KEY`

|

---

## AdjustCursor

The cursor has moved onto (but not off of) the effect’s custom UI, to allow the effect to change the cursor.

### PF_AdjustCursorEventInfo

| **Member**                                                                                               | **Purpose**                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `screen\_point`                                                                                          | Screen coordinate of the mouse pointer. For Custom Comp UI, these coordinates can be converted to composition coordinates using the [UI Callbacks](ui-callbacks.html) (#effect-ui-events-ui-callbacks). |
| See the CCU sample project for an example.                                                               |
| `modifiers`                                                                                              | What, if any, modifier keys were held down when the message was sent.                                                                                                                                |
| `set\_cursor`                                                                                            | Set this to your desired cursor, or `PF\_Cursor\_CUSTOM` if you have set the cursor yourself using OS-specific calls. See AE_EffectUI.h for a complete enumeration of built-in cursors.              |
| If you don’t want to override the cursor, set this to `PF\_Cursor\_NONE`, or simply ignore this message. |

---

## Arbitrary Parameters Event

After Effects needs your plug-in to manage it’s arbitrary data parameter(s).

Though arbitrary data types are not required for custom UI support, `PF\_ArbParamsExtra` follows the EventInfo model.

### PF_ArbParamsExtra

| **Member**        | **Purpose**                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------- |
| `which\_function` | A `PF\_FunctionSelector` indicating which function is called                                              |
| `id`              | Used by After Effects; will match the ID assigned to the arbitrary data type during _PF_Cmd_PARAM_SETUP_. |
| `padding`         | Used for byte-alignment                                                                                   |

|

```cpp
u {
 new\_func\_params
 dispose\_func\_params
 copy\_func\_params
 flat\_size\_func\_params
 flatten\_func\_params
 unflatten\_func\_params
 interp\_func\_params
 compare\_func\_params
 print\_size\_func\_params
 print\_func\_params
 scan\_func\_params
}

```

| (One of these will be passed; see [Arbitrary Data Parameters](../effect-details/arbitrary-data-parameters.html) (#effect-details-arbitrary-data-parameters)) |
