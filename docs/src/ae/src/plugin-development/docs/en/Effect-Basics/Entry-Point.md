---
title: Entry Point
order: 3
category:
  - AE 插件开发
---
# Entry Point

All communication between After Effects and an effect plug-in is initiated by After Effects, and it all happens by the host (After Effects) calling a single entry point function.

For all effect plug-ins, the entry point function must have the following signature:

```cpp
PF_Err main (
 PF_Cmd cmd,
 PF_InData *in_data,
 PF_OutData *out_data,
 PF_ParamDef *params[],
 PF_LayerDef *output,
 void *extra)

```

The name of the entry point function above is “main”, but it can be whatever is specified in [PiPL Resources](../intro/pipl-resources.html) (#intro-pipl-resources).

Before each call to the entry point function, After Effects updates [PF_InData](PF_InData.html) (#effect-basics-pf-indata) and the plug- in’s parameter array PF_ParamDef[] (except as noted).

After the plug-in returns from its call, After Effects checks [PF_OutData](PF_OutData.html) (#effect-basics-pf-outdata) for changes and, when appropriate, uses the PF_LayerDef the effect has rendered.

## Entry Point Function Parameters

| [cmd](../effect-basics/command-selectors.html) | After Effects sets the[Command Selectors](../effect-basics/command-selectors.html) to tell the plug-in what to do. |
| ---| --- |
| [in_data](../effect-basics/PF_InData.html) | Information about the application’s state and the data the plug-in is being told to act upon.Pointers to numerous interface and image manipulation functions are also provided. |
| [out_data](../effect-basics/PF_OutData.html) | Pass back information to After Effects by setting fields within out_data. |
| [params](../effect-basics/parameters.html) | An array of the plug-in’s parameters at the time provided in in_data> current_time.`params[0]` is the input image (a [PF_EffectWorld / PF_LayerDef](../effect-basics/PF_EffectWorld.html)) to which the effect should be applied.These values are only valid during certain selectors (this is noted in the [selector descriptions](../effect-basics/command-selectors.html)).Parameters are discussed at length here: [PF_ParamDef](../effect-basics/PF_ParamDef.html). |
| [output](../effect-basics/PF_EffectWorld.html) | The output image, to be rendered by the effect plug-in and passed back to After Effects.Only valid during certain selectors. |
| [extra](../effect-ui-events/PF_EventExtra.html) | The extra parameter varies with the command sent or (in the case of[PF_Cmd_EVENT](../effect-basics/command-selectors.html)) the [event type](../effect-ui-events/effect-ui-events.html).Used primarily for event management and [Parameter Supervision](../effect-details/parameter-supervision.html). |
