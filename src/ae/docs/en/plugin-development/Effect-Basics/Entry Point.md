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
PF\_Err main (
 PF\_Cmd cmd,
 PF\_InData \*in\_data,
 PF\_OutData \*out\_data,
 PF\_ParamDef \*params[],
 PF\_LayerDef \*output,
 void \*extra)

```

The name of the entry point function above is “main”, but it can be whatever is specified in [PiPL Resources](../intro/pipl-resources.html) (#intro-pipl-resources).

Before each call to the entry point function, After Effects updates [PF_InData](PF_InData.html) (#effect-basics-pf-indata) and the plug- in’s parameter array PF_ParamDef[] (except as noted).

After the plug-in returns from its call, After Effects checks [PF_OutData](PF_OutData.html) (#effect-basics-pf-outdata) for changes and, when appropriate, uses the PF_LayerDef the effect has rendered.

---

## Entry Point Function Parameters

| **Argument**                                                                       | **Purpose**                                                                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [cmd](command-selectors.html) (#effect-basics-command-selectors)                      | After Effects sets the [Command Selectors](command-selectors.html) (#effect-basics-command-selectors) to tell the plug-in what to do. |
| [in_data](PF_InData.html) (#effect-basics-pf-indata)                                  | Information about the application’s state and the data the plug-in is being told to act upon.                                      |
| Pointers to numerous interface and image manipulation functions are also provided. |
| [out_data](PF_OutData.html) (#effect-basics-pf-outdata)                               | Pass back information to After Effects by setting fields within out_data.                                                          |
| [params](parameters.html) (#effect-basics-parameters)                                 | An array of the plug-in’s parameters at the time provided in in_data> current_time.                                                |

`params[0]` is the input image (a [PF_EffectWorld / PF_LayerDef](PF_EffectWorld.html) (#effect-basics-pf-effectworld)) to which the effect should be applied.
These values are only valid during certain selectors (this is noted in the [selector descriptions](command-selectors.html) (#effect-basics-calling-sequence)).
Parameters are discussed at length here: [PF_ParamDef](PF_ParamDef.html) (#effect-basics-pf-paramdef). |
| [output](PF_EffectWorld.html) (#effect-basics-pf-effectworld) | The output image, to be rendered by the effect plug-in and passed back to After Effects.
Only valid during certain selectors. |
| [extra](../effect-ui-events/PF_EventExtra.html) (#effect-ui-events-pf-eventextra) | The extra parameter varies with the command sent or (in the case of [PF_Cmd_EVENT](command-selectors.html) (#effect-basics-command-selectors-messaging))
the [event type](../effect-ui-events/effect-ui-events.html) (#effect-ui-events-effect-ui-events).
Used primarily for event management and [Parameter Supervision](../effect-details/parameter-supervision.html) (#effect-detals-parameter-supervision). |
