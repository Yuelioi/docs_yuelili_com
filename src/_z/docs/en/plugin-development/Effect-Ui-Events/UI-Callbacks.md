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

### layer_to_comp


Transforms layer panel coordinates to the composition panel coordinates.

```
PF_Errlayer_to_comp(
void*refcon,
PF_ContextHcontext,
A_longcurr_time,
A_longtime_scale,
PF_FixedPoint*pt);
```


### comp_to_layer


Transforms composition panel coordinates to the layer panel coordinates.

```
PF_Errcomp_to_layer(
void*refcon,
PF_ContextHcontext,
A_longcurr_time,
A_longtime_scale,
PF_FixedPoint*pt);
```

### get_comp2layer_xform


Returns the matrix used to convert from the composition panel to the layer panel. If `<span class="pre">*exists</span>` returns `<span class="pre">FALSE</span>`, the matrix cannot be computed because the layer scales to zero.

```
PF_Errget_comp2layer_xform(
void*refcon,
PF_ContextHcontext,
A_longcurr_time,
longtime_scale,
long*exists,
PF_FloatMatrix*comp2layer);
```

### get_layer2comp_xform


Returns the transformation matrix used to convert from the layer panel to the composition panel. This always exists.

```
PF_Errget_layer2comp_xform(
void*refcon,
PF_ContextHcontext,
A_longcurr_time,
A_longtime_scale,
PF_FloatMatrix*layer2comp);
```


### source_to_frame


Transforms the source coordinates in the current context to screen coordinates. Screen (frame) coordinates are affected by the current zoom level.

```
PF_Errsource_to_frame(
void*refcon,
PF_ContextHcontext,
PF_FixedPoint*pt);
```


### frame_to_source


Transforms the screen coordinates identified by `<span class="pre">*pt</span>` to the source coordinates of the current context.

```
PF_Errframe_to_source(
void*refcon,
PF_ContextHcontext,
PF_FixedPoint*pt);
```

### PF_GET_PLATFORM_DATA


Retrieves platform-specific data. For plug-ins loaded with localized resource files, `<span class="pre">PF_PlatData_RES_FILE_PATH</span>` will point to the external file, not the plug-in file. Use `<span class="pre">PF_PlatData_EXE_FILE_PATH</span>` if you want the path of your plug-in.

Starting in CS6, use `<span class="pre">PF_PlatData_EXE_FILE_PATH_W</span>` and `<span class="pre">PF_PlatData_RES_FILE_PATH_W</span>` instead of the old non-wide calls.

```
PF_ErrPF_GET_PLATFORM_DATA(
PF_PlatDataIDwhich,
void*ppData);
```

PF_PlatDataID can have the following values:

> * `<span class="pre">PF_PlatData_MAIN_WND</span>`
> * `<span class="pre">PF_PlatData_EXE_FILE_PATH_DEPRECATED</span>`
> * `<span class="pre">PF_PlatData_RES_FILE_PATH_DEPRECATED</span>`
> * `<span class="pre">PF_PlatData_RES_REFNUM</span>` // macOS
> * `<span class="pre">PF_PlatData_RES_DLLINSTANCE</span>` // Win
> * `<span class="pre">PF_PlatData_BUNDLE_REF</span>`
> * `<span class="pre">PF_PlatData_EXE_FILE_PATH_W</span>` // new CS6
> * `<span class="pre">PF_PlatData_RES_FILE_PATH_W</span>` // new CS6
>
