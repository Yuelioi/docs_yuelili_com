---
title: UI Callbacks
order: 6
category:
  - AE 插件开发
---

# UI Callbacks

After Effects provides callbacks for transposing between coordinate systems, and obtaining OS-specific information about drawing contexts, without guesswork or asking the OS directly. Use these callbacks! Pointers to these callbacks are provided in PF_EventCallbacks. Use the macros in AE_EffectUI.h and AE_EffectCB.h to access these routines.

It is possible to build a functioning plug-in which utilizes a custom UI without implementing the coordinate system transposition callbacks. However, the moment a user zooms into the layer panel or rotates a layer, your plug-in will behave badly. We added these macros and callbacks so that custom user interfaces could be easily integrated into the After Effects UI, without inflicting user interface overhead on developers. Again, please use them!

These macros default the refcon and context handle for simplicity. The refcon assumes you have a local variable named “extra”. The default context is the current context. These default parameters are defined in the PF_EventCallbacks structure (in AE_EffectUI.h). You can override the defaults by accessing the callbacks through the PF_EventExtra structure. We don’t recommend (or support) modification of the macros in the header file. Don’t do it!

| **Function**      | **Purpose**                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| `layer\_to\_comp` | Transforms layer panel coordinates to the composition panel coordinates. |

```cpp
PF\_Err layer\_to\_comp (
 void \*refcon,
 PF\_ContextH context,
 A\_long curr\_time,
 A\_long time\_scale,
 PF\_FixedPoint \*pt);

```

|
| `comp\_to\_layer` | Transforms composition panel coordinates to the layer panel coordinates.

```cpp
PF\_Err comp\_to\_layer (
 void \*refcon,
 PF\_ContextH context,
 A\_long curr\_time,
 A\_long time\_scale,
 PF\_FixedPoint \*pt);

```

|
| `get\_comp2layer\_xform` | Returns the matrix used to convert from the composition panel to the layer panel.
If `\*exists` returns `FALSE`, the matrix cannot be computed because the layer scales to zero.

```cpp
PF\_Err get\_comp2layer\_xform (
 void \*refcon,
 PF\_ContextH context,
 A\_long curr\_time,
 long time\_scale,
 long \*exists,
 PF\_FloatMatrix \*comp2layer);

```

|
| `get\_layer2comp\_xform` | Returns the transformation matrix used to convert from the layer panel to the composition panel.
This always exists.

```cpp
PF\_Err get\_layer2comp\_xform (
 void \*refcon,
 PF\_ContextH context,
 A\_long curr\_time,
 A\_long time\_scale,
 PF\_FloatMatrix \*layer2comp);

```

|
| `source\_to\_frame` | Transforms the source coordinates in the current context to screen coordinates.
Screen (frame) coordinates are affected by the current zoom level.

```cpp
PF\_Err source\_to\_frame(
 void \*refcon,
 PF\_ContextH context,
 PF\_FixedPoint \*pt);

```

|
| `frame\_to\_source` | Transforms the screen coordinates identified by `\*pt` to the source coordinates of the current context.

```cpp
PF\_Err frame\_to\_source(
 void \*refcon,
 PF\_ContextH context,
 PF\_FixedPoint \*pt);

```

|
| `PF\_GET\_PLATFORM\_DATA` | Retrieves platform-specific data. For plug-ins loaded with localized resource files,
`PF\_PlatData\_RES\_FILE\_PATH` will point to the external file, not the plug-in file.
Use `PF\_PlatData\_EXE\_FILE\_PATH` if you want the path of your plug-in.
Starting in CS6, use `PF\_PlatData\_EXE\_FILE\_PATH\_W` and `PF\_PlatData\_RES\_FILE\_PATH\_W`
instead of the old non-wide calls.

```cpp
PF\_Err PF\_GET\_PLATFORM\_DATA (
 PF\_PlatDataID which,
 void \*ppData);

```

PF_PlatDataID can have the following values:

- `PF\_PlatData\_MAIN\_WND`
- `PF\_PlatData\_EXE\_FILE\_PATH\_DEPRECATED`
- `PF\_PlatData\_RES\_FILE\_PATH\_DEPRECATED`
- `PF\_PlatData\_RES\_REFNUM` // macOS
- `PF\_PlatData\_RES\_DLLINSTANCE` // Win
- `PF\_PlatData\_BUNDLE\_REF`
- `PF\_PlatData\_EXE\_FILE\_PATH\_W` // new CS6
- `PF\_PlatData\_RES\_FILE\_PATH\_W` // new CS6

|
