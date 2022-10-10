---
title: Parameter Supervision
order: 12
category:
  - AE 插件开发
---

# Parameter Supervision

Supervision means dynamically changing the values of some parameters based on the values of others. To supervise a parameter, set [PF_ParamFlag_SUPERVISE](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef-parameter-flags) before adding it during _PF_Cmd_PARAM_SETUP_. Whenever it is changed, you will receive [PF_Cmd_USER_CHANGED_PARAM](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-messaging). The index (into the plug-in’s parameter array) of the changed parameter is sent in the PF_UserChangedParamExtra (extra) param. During _PF_Cmd_USER_CHANGED_PARAM_, you may change the values _and_ appearance of any of your parameters.

---

## Updating Parameter UI

If you set `PF\_ParamFlag\_SUPERVISE` on any parameter, After Effects will send you _PF_Cmd_UPDATE_PARAMS_UI_, just as if you had set PF_OutFlag_SEND_UPDATE_PARAMS_UI.

During _PF_Cmd_UPDATE_PARAMS_UI_, you may only change the appearance and enable state of parameters. Use `PF\_UpdateParamUI()` from [PF_ParamUtilSuite3](#effect-detals-parameter-supervision-pf-paramutilsuite) to update the UI, passing it a _copy_ of the parameter you wish to modify. Do _not_ attempt to modify the original. It is not necessary to set `PF\_OutFlag\_REFRESH\_UI`; `PF\_UpdateParamUI()` handles that for you.

:::tip

This is the only way to update the UI of `PF\_PUI\_STD\_CONTROL\_ONLY` parameters.

---

## Updating Parameter Values

A parameter’s value (not just UI) can be modified during [PF_Cmd_USER_CHANGED_PARAM](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-messaging) and during [PF_Cmd_EVENT](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-messaging) (_PF_Event_DO_CLICK_, _PF_Event_DRAG_, & _PF_Event_KEYDOWN_). After Effects will not honor changes made at other times.

When changing parameter _values_ (and not just the UI), modify the original parameter, and set `PF\_Paramdef.uu.change\_flags` to `PF\_ChangeFlag\_CHANGED\_VALUE`.

This change will be also update the UI, and will be undoable by the user. :::tip that `PF\_ChangeFlag\_CHANGED\_VALUE` isn’t supported for layer parameters.

This suite is provided to give effect plug-ins some access to their parameter streams, without requiring AEGP suite usage. At least some of these functions are provided by several third-party hosts. These functions are especially handy for effects with supervised parameters.

---

## PF_ParamUtilSuite3

| **Function**        | **Purpose** |
| ------------------- | ----------- |
| `PF\_UpdateParamUI` |

```cpp
PF\_UpdateParamUI(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 const PF\_ParamDef \*defP);

```

Force After Effects to refresh the parameter’s UI, in the effect controls palette.
Starting in CC 2014, After Effects will now honor a change to a custom UI height. Simply change the ui_height of your custom UI PF_ParamDef and then call PF_UpdateParamUI.
The effect’s custom UI height will be updated in the Effect Control Window.
Starting in CS6, when a plug-in disables a parameter, we now save that state in the UI flags so that the plug-in can check that flag in the future to see if it is disabled.
NOTE: Never pass param[0] to this function. |
| `PF\_GetCurrentState` |

```cpp
PF\_GetCurrentState(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 const A\_Time \*startPT0,
 const A\_Time \*durationPT0,
 PF\_State \*stateP);

```

This API, combined with PF_AreStatesIdentical below, lets you determine if a set of inputs (either layers, other properties, or both) are different between when you first called PF_GetCurrentState and a current call,
so it can be used for caching. You can specify a range of time to consider or all of time.
Updated in CS6 to add param_index, startPT0, and durationPT0. Pre-defined constants for param_index are as follows:

- `PF\_ParamIndex\_CHECK\_ALL` - check every parameter, including every layer referred to by a layer parameter.
- `PF\_ParamIndex\_CHECK\_ALL\_EXCEPT\_LAYER\_PARAMS` - omit all layers. Pass a specific layer parameter index to include that as the only layer parameter tested.
- `PF\_ParamIndex\_CHECK\_ALL\_HONOR\_EXCLUDE` - Similar to CHECK_ALL, but honor PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED.

Passing in NULL for both start and duration indicates all time.
For effects that do simulation across time and therefore set PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT, when you ask about a time range, it will be expanded to include any times needed to produce that range.
Populates a PF_State, an opaque data type used as a receipt for the current state of the effect’s parameters (the PF_State is used in our internal frame caching database). |
| `PF\_AreStatesIdentical` |

```cpp
PF\_AreStatesIdentical(
 PF\_ProgPtr effect\_ref,
 const PF\_State \*state1P,
 const PF\_State \*state2P,
 A\_Boolean \*samePB);

```

New in CS6. Compare two different states, retrieved using `PF\_GetCurrentState`, above. |
| `PF\_HasParamChanged` | No longer supported in `PFParamUtilsSuite3`.

```cpp
PF\_HasParamChanged(
 PF\_ProgPtr effect\_ref,
 const PF\_State \*stateP,
 PF\_ParamIndex param\_index,
 PF\_Boolean \*changedPB);

```

Given a PF_State, passes back true if any of the tested parameters differ from the saved state. Contrary to the name, the call does not provide a way to test a single parameter.
At a minimum, all non-layer parameters will be tested. For finer granularity to test a specific set of parameters, use PF_HaveInputsChangedOverTimeSpan below instead.
Pre-defined constants for param_index are as follows:

- `PF\_ParamIndex\_CHECK\_ALL` - check every parameter, including every layer referred to by a layer parameter.
- `PF\_ParamIndex\_CHECK\_ALL\_EXCEPT\_LAYER\_PARAMS` - omit all layers. Pass a specific layer parameter index to include that as the only layer parameter tested.

|
| `PF\_HaveInputsChangedOverTimeSpan` | No longer supported in `PFParamUtilsSuite3`. Use `PF\_AreStatesIdentical()` instead. |
| `PF\_IsIdenticalCheckout` |

```cpp
PF\_IsIdenticalCheckout(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 A\_long what\_time1,
 A\_long time\_step1,
 A\_u\_long time\_scale1,
 A\_long what\_time2,
 A\_long time\_step2,
 A\_u\_long time\_scale2,
 PF\_Boolean \*identicalPB);

```

Returns `TRUE` if a parameter’s value is the same at the two passed times. :::tip: the times need not be contiguous; there could be different intervening values. |
| `PF\_FindKeyframeTime` |

```cpp
PF\_FindKeyframeTime(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 A\_long what\_time,
 A\_u\_long time\_scale,
 PF\_TimeDir time\_dir,
 PF\_Boolean \*foundPB,
 PF\_KeyIndex \*key\_indexP0,
 A\_long \*key\_timeP0,
 A\_u\_long \*key\_timescaleP0);

```

Searches (in the specified direction) for the next keyframe in the parameter’s stream. The last three parameters are optional. |
| `PF\_GetKeyframeCount` |

```cpp
PF\_GetKeyframeCount(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 PF\_KeyIndex \*key\_countP);

```

Returns the number of keyframes in the parameter’s stream. |
| `PF\_CheckoutKeyframe` |

```cpp
PF\_CheckoutKeyframe(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 PF\_KeyIndex key\_index,
 A\_long \*key\_timeP0,
 A\_u\_long \*key\_timescaleP0,
 PF\_ParamDef \*paramP0);

```

Checks a keyframe for the specified parameter out of our keyframe database. param_index is zero-based. You can request time, timescale, or neither; useful if you’re performing your own motion blur. |
| `PF\_CheckinKeyframe` |

```cpp
PF\_CheckinKeyframe(
 PF\_ProgPtr effect\_ref,
 PF\_ParamDef \*paramP);

```

All calls to PF_CheckoutKeyframe must be balanced with this check-in, or pain will ensue. |
| `PF\_KeyIndexToTime` |

```cpp
PF\_KeyIndexToTime(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 PF\_KeyIndex key\_indexP,
 A\_long \*key\_timeP,
 A\_u\_long \*key\_timescaleP);

```

Returns the time (and timescale) of the specified keyframe. |
