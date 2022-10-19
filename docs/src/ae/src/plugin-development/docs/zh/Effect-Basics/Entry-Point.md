---
title: Entry Point
order: 3
category:
  - AE 插件开发
---

# Entry Point

After Effects 和效果插件之间的所有通信都是由 After Effects 发起的，而且都是由主机(After Effects)调用一个入口点函数来完成的。

对于所有的效果插件来说，入口点函数必须有以下签名。

```cpp
PF_Err main (
 PF_Cmd cmd,
 PF_InData *in_data,
 PF_OutData *out_data,
 PF_ParamDef *params[],
 PF_LayerDef *output,
 void *extra)

```

上述入口点函数的名称是 "main"，但它可以是[PiPL Resources](../intro/pipl-resources.html)中指定的任何内容。

在每次调用入口函数之前，After Effects 都会更新[PF_InData](PF_InData.html) 和插件的参数数组 PF_ParamDef[](除非有说明)。

在插件从调用中返回后，After Effects 会检查[PF_OutData](PF_OutData.html) 是否有变化，并在适当的时候使用效果所渲染的 PF_LayerDef。

## Entry Point Function Parameters

| [cmd](../effect-basics/command-selectors.html) | After Effects sets the[Command Selectors](../effect-basics/command-selectors.html) to tell the plug-in what to do.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [in_data](../effect-basics/PF_InData.html)             | Information about the application’s state and the data the plug-in is being told to act upon.Pointers to numerous interface and image manipulation functions are also provided.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [out_data](../effect-basics/PF_OutData.html)          | Pass back information to After Effects by setting fields within out_data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [params](../effect-basics/parameters.html)            | An array of the plug-in’s parameters at the time provided in in_data> current_time.`params[0]` is the input image (a [PF_EffectWorld / PF_LayerDef](../effect-basics/PF_EffectWorld.html)) to which the effect should be applied.These values are only valid during certain selectors (this is noted in the [selector descriptions](../effect-basics/command-selectors.html)).Parameters are discussed at length here: [PF_ParamDef](../effect-basics/PF_ParamDef.html). |
| [output](../effect-basics/PF_EffectWorld.html)    | The output image, to be rendered by the effect plug-in and passed back to After Effects.Only valid during certain selectors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [extra](../effect-ui-events/PF_EventExtra.html) | The extra parameter varies with the command sent or (in the case of[PF_Cmd_EVENT](../effect-basics/command-selectors.html)) the [event type](../effect-ui-events/effect-ui-events.html).Used primarily for event management and [Parameter Supervision](../effect-details/parameter-supervision.html).                                                                                                                                         |
