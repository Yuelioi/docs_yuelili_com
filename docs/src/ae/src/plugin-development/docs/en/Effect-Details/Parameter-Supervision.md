---
title: Parameter Supervision
order: 12
category:
  - AE 插件开发
---
# Parameter Supervision

Supervision means dynamically changing the values of some parameters based on the values of others. To supervise a parameter, set [PF_ParamFlag_SUPERVISE](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef-parameter-flags) before adding it during _PF_Cmd_PARAM_SETUP_. Whenever it is changed, you will receive [PF_Cmd_USER_CHANGED_PARAM](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-messaging). The index (into the plug-in’s parameter array) of the changed parameter is sent in the PF*UserChangedParamExtra (extra) param. During \_PF_Cmd_USER_CHANGED_PARAM*, you may change the values _and_ appearance of any of your parameters.

## Updating Parameter UI

If you set `PF_ParamFlag_SUPERVISE` on any parameter, After Effects will send you _PF_Cmd_UPDATE_PARAMS_UI_, just as if you had set PF_OutFlag_SEND_UPDATE_PARAMS_UI.

During _PF_Cmd_UPDATE_PARAMS_UI_, you may only change the appearance and enable state of parameters. Use `PF_UpdateParamUI()` from [PF_ParamUtilSuite3](#effect-detals-parameter-supervision-pf-paramutilsuite) to update the UI, passing it a _copy_ of the parameter you wish to modify. Do _not_ attempt to modify the original. It is not necessary to set `PF_OutFlag_REFRESH_UI`; `PF_UpdateParamUI()` handles that for you.

::: tip

This is the only way to update the UI of `PF_PUI_STD_CONTROL_ONLY` parameters.

:::

## Updating Parameter Values

A parameter’s value (not just UI) can be modified during [PF_Cmd_USER_CHANGED_PARAM](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-messaging) and during [PF_Cmd_EVENT](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-messaging) (_PF_Event_DO_CLICK_, _PF_Event_DRAG_, & _PF_Event_KEYDOWN_). After Effects will not honor changes made at other times.

When changing parameter _values_ (and not just the UI), modify the original parameter, and set `PF_Paramdef.uu.change_flags` to `PF_ChangeFlag_CHANGED_VALUE`.

This change will be also update the UI, and will be undoable by the user. Note that `PF_ChangeFlag_CHANGED_VALUE` isn’t supported for layer parameters.

This suite is provided to give effect plug-ins some access to their parameter streams, without requiring AEGP suite usage. At least some of these functions are provided by several third-party hosts. These functions are especially handy for effects with supervised parameters.

## PF_ParamUtilSuite3

### PF_UpdateParamUI

```cpp
PF_UpdateParamUI(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
constPF_ParamDef*defP);
```

Force After Effects to refresh the parameter’s UI, in the effect controls palette.

Starting in CC 2014, After Effects will now honor a change to a custom UI height. Simply change the ui_height of your custom UI PF_ParamDef and then call PF_UpdateParamUI. The effect’s custom UI height will be updated in the Effect Control Window.

Starting in CS6, when a plug-in disables a parameter, we now save that state in the UI flags so that the plug-in can check that flag in the future to see if it is disabled.

NOTE: Never pass param[0] to this function.

### PF_GetCurrentState

```cpp
PF_GetCurrentState(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
constA_Time*startPT0,
constA_Time*durationPT0,
PF_State*stateP);
```

This API, combined with PF_AreStatesIdentical below, lets you determine if a set of inputs (either layers, other properties, or both) are different between when you first called PF_GetCurrentState and a current call, so it can be used for caching. You can specify a range of time to consider or all of time.

Updated in CS6 to add param_index, startPT0, and durationPT0. Pre-defined constants for param_index are as follows:

> - PF_ParamIndex_CHECK_ALL` - check every parameter, including every layer referred to by a layer parameter.
> - PF_ParamIndex_CHECK_ALL_EXCEPT_LAYER_PARAMS` - omit all layers. Pass a specific layer parameter index to include that as the only layer parameter tested.
> - PF_ParamIndex_CHECK_ALL_HONOR_EXCLUDE` - Similar to CHECK_ALL, but honor PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED.

Passing in NULL for both start and duration indicates all time. For effects that do simulation across time and therefore set PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT, when you ask about a time range, it will be expanded to include any times needed to produce that range.

Populates a PF_State, an opaque data type used as a receipt for the current state of the effect’s parameters (the PF_State is used in our internal frame caching database).

### PF_AreStatesIdentical

```cpp
PF_AreStatesIdentical(
PF_ProgPtreffect_ref,
constPF_State*state1P,
constPF_State*state2P,
A_Boolean*samePB);
```

New in CS6. Compare two different states, retrieved using PF_GetCurrentState`, above.

### PF_HasParamChanged

No longer supported in PFParamUtilsSuite3`.

```cpp
PF_HasParamChanged(
PF_ProgPtreffect_ref,
constPF_State*stateP,
PF_ParamIndexparam_index,
PF_Boolean*changedPB);
```

Given a PF_State, passes back true if any of the tested parameters differ from the saved state. Contrary to the name, the call does not provide a way to test a single parameter. At a minimum, all non-layer parameters will be tested. For finer granularity to test a specific set of parameters, use PF_HaveInputsChangedOverTimeSpan below instead.

Pre-defined constants for param_index are as follows:

> - PF_ParamIndex_CHECK_ALL` - check every parameter, including every layer referred to by a layer parameter.
> - PF_ParamIndex_CHECK_ALL_EXCEPT_LAYER_PARAMS` - omit all layers. Pass a specific layer parameter index to include that as the only layer parameter tested.

### PF_HaveInputsChangedOverTimeSpan

No longer supported in PFParamUtilsSuite3 `. Use PF_AreStatesIdentical()` instead.

### PF_IsIdenticalCheckout

```cpp
PF_IsIdenticalCheckout(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
A_longwhat_time1,
A_longtime_step1,
A_u_longtime_scale1,
A_longwhat_time2,
A_longtime_step2,
A_u_longtime_scale2,
PF_Boolean*identicalPB);
```

Returns TRUE` if a parameter’s value is the same at the two passed times. Note: the times need not be contiguous; there could be different intervening values.

### PF_FindKeyframeTime

```cpp
PF_FindKeyframeTime(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
A_longwhat_time,
A_u_longtime_scale,
PF_TimeDirtime_dir,
PF_Boolean*foundPB,
PF_KeyIndex*key_indexP0,
A_long*key_timeP0,
A_u_long*key_timescaleP0);
```

Searches (in the specified direction) for the next keyframe in the parameter’s stream. The last three parameters are optional.

### PF_GetKeyframeCount

```cpp
PF_GetKeyframeCount(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
PF_KeyIndex*key_countP);
```

Returns the number of keyframes in the parameter’s stream.

### PF_CheckoutKeyframe

```cpp
PF_CheckoutKeyframe(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
PF_KeyIndexkey_index,
A_long*key_timeP0,
A_u_long*key_timescaleP0,
PF_ParamDef*paramP0);
```

Checks a keyframe for the specified parameter out of our keyframe database. param_index is zero-based. You can request time, timescale, or neither; useful if you’re performing your own motion blur.

### PF_CheckinKeyframe

```cpp
PF_CheckinKeyframe(
PF_ProgPtreffect_ref,
PF_ParamDef*paramP);
```

All calls to PF_CheckoutKeyframe must be balanced with this check-in, or pain will ensue.

### PF_KeyIndexToTime

```cpp
PF_KeyIndexToTime(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
PF_KeyIndexkey_indexP,
A_long*key_timeP,
A_u_long*key_timescaleP);
```

Returns the time (and timescale) of the specified keyframe.
