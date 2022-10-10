---
title: PF_ParamDef
order: 8
category:
  - AE 插件开发
---

# PF_ParamDef

After Effects passes effects an array of PF_ParamDefs with each selector, describing the plug-in’s parameters at the current time. The values in the params array are only valid during some selectors (this is noted in the [selector descriptions](command-selectors.html) (#effect-basics-calling-sequence)).

---

## Param Zero

The first parameter, params[0], is the input image (a [PF_EffectWorld / PF_LayerDef](PF_EffectWorld.html) (#effect-basics-pf-effectworld)) to which the effect should be applied.

---

## The Rest Of The Parameters

All parameter types are represented by a PF_ParamDef. Unions are used, so that only the pertinent parts of the PF_ParamDef need be (or should be) populated.

## PF_ParamDef Members

| **Data Type**                                                                                                                                                                                 | **Name**        | **Description**                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `A\_long`                                                                                                                                                                                     | `id`            | The ID of this parameter. You can re-order parameters in future versions of your plug-in and not cause users to re-apply your effect, |
| if you maintain the parameter’s ID across versions.                                                                                                                                           |
| `PF\_ChangeFlags`                                                                                                                                                                             | `change\_flags` | Set if you’ve changed a parameter value. Only valid during drag (not click!) events,                                                  |
| [PF_Cmd_USER_CHANGED_PARAM](command-selectors.html) (#effect-basics-command-selectors-messaging) or [PF_Cmd_UPDATE_PARAMS_UI](command-selectors.html) (#effect-basics-command-selectors-messaging). |
| [PF_ParamUIFlags](#effect-basics-pf-paramdef-parameter-ui-flags)                                                                                                                              | `ui\_flags`     | Specify a parameter’s UI behavior before adding; only                                                                                 |
| `PF\_PUI\_DISABLED` may be set during event handling.                                                                                                                                         |
| `A\_short`                                                                                                                                                                                    | `ui\_width`     | Width of the parameter’s user interface (for non-standard parameters only).                                                           |
| `A\_short`                                                                                                                                                                                    | `ui\_height`    | Height of the parameter’s user interface (for non-standard parameters only).                                                          |
| [PF_ParamType](parameters.html) (#effect-basics-parameters-parameter-types)                                                                                                                      | `param\_type`   | Type of parameter.                                                                                                                    |
| `A_char[32]```                                                                                                                                                                                | `name`          | Name of parameter. Can be changed during event handling.                                                                              |

Yes, longer parameter names have been requested since After Effects 1.0.
Think of adequately describing your world-altering effect in 31 mere characters as a language challenge, like haiku. |
| [PF_ParamFlags](#effect-basics-pf-paramdef-parameter-flags) | `flags` | Specify a parameter’s UI behavior before adding; only `PF\_ParamFlag\_COLLAPSE\_TWIRLY` may be set during event handling. |
| `PF\_ParamDefUnion` | `u` | A union of all possible [Parameter Types](parameters.html) (#effect-basics-parameters-parameter-types).
Only the type specified by `param\_type` contains meaningful data. |

---

## Parameter UI Flags

Control a parameter’s user interface with these flags.

Don’t confuse UI flags with behavior flags; they reside in different fields within your parameter’s definition, and will cause unpredictable behavior if misapplied.

| **Flag**         | **Description**                                                                 |
| ---------------- | ------------------------------------------------------------------------------- |
| `PF\_PUI\_TOPIC` | Set this flag if you handle `PF\_Cmd\_EVENTs` for the “topic” of the parameter. |

The “topic” is the portion of the param UI in the Effect Controls Window (ECW) that is still visible when the twirly-arrow is twirled up for that param.
If you set this flag, you must also set `PF\_OutFlag\_CUSTOM\_UI` at PF_Cmd_GLOBAL_SETUP time. |
| `PF\_PUI\_CONTROL` | Set this flag if you handle `PF\_Cmd\_EVENTs` for the control area (area that becomes invisible when you twirl up a parameter’s spinner) in the ECP.
If you set this flag, you must also set `PF\_OutFlag\_CUSTOM\_UI` at `PF\_Cmd\_GLOBAL\_SETUP` time.
See [Effect UI & Events](../effect-ui-events/effect-ui-events.html) (#effect-ui-events-effect-ui-events) for more details. |
| `PF\_PUI\_STD\_CONTROL\_ONLY` | Set this flag if you want the standard control only – No data stream will be associated with this parameter, and thus no keyframes will be available in the Timeline panel.
You might want to do this to control something in your sequence data with a standard control.
Or in your arb data, or custom UI in the comp window, or to group-set multiple other controls.
This flag cannot be used with:

- `PF\_Param\_CUSTOM`,
- `PF\_Param\_NO\_DATA`,
- `PF\_Param\_LAYER`,
- `PF\_Param\_ARBITRARY\_DATA`,
- `PF\_Param\_PATH`.

If you set this flag, you must also set `PF\_ParamFlag\_SUPERVISE`
(otherwise you would never find out about value changes, and the setting would never be used for anything).
This flag does not require that the [PF_OutFlag_CUSTOM_UI](PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags) flag be set.
If you want a standard control for `PF\_Param\_ARBITRARY\_DATA`, just add one (or more) using `PF\_PUI\_STD\_CONTROL\_ONLY` with the supported param types,
and then when handling [PF_Cmd_USER_CHANGED_PARAM](command-selectors.html) (#effect-basics-command-selectors-messaging) you can modify your arb data. |
| `PF\_PUI\_NO\_ECW\_UI` | Set this flag if you want no UI to appear in the Effect Controls Window.
Presumably, you are setting the value of the parameter through some other method
(e.g. custom UI in the comp window, or while handling `PF\_Cmd\_USER\_CHANGED\_PARAM` for a different param with `PF\_ParamFlag\_SUPERVISE` set).
In AE, this doesn’t affect keyframe visibility in the timeline. In PPro it does remove the entire row, so you won’t see keyframes. |
| `PF\_PUI\_ECW\_SEPARATOR` | Not used in After Effects, but used in Premiere. Set this flag if you’d like a thick line above this parameter in the effect control window.
This is provided so that parameters can be grouped visually, if needed (without adding groups). This flag can be changed at runtime through the `PF\_UpdateParamUI()` method. |
| `PF\_PUI\_DISABLED` | Disables (grays out) the parameter, usually in response to [PF_Cmd_USER_CHANGED_PARAM](command-selectors.html) (#effect-basics-command-selectors-messaging). |
| `PF\_PUI\_DONT\_ERASE\_TOPIC` | After Effects won’t erase parameter’s topic. |
| `PF\_PUI\_DONT\_ERASE\_CONTROL` | After Effects won’t erase parameter’s control. |
| `PF\_PUI\_RADIO\_BUTTON` | Not used in After Effects, but used in Premiere. Display parameter as a radio-button group. Only valid for `PF\_Param\_POPUP`. |
| `PF\_PUI\_INVISIBLE` | First supported in Premiere, and now supported in After Effects CS6 and later. This hides the parameter UI in both the Effect Controls and Timeline.
Premiere only: The flag is dynamic and parameter visibility can be toggled during the [PF_UpdateParamUI](../effect-details/parameter-supervision.html) (#effect-detals-parameter-supervision-pf-paramutilsuite) callback. |

In addition to these flags, an effect parameter may be hidden or shown by using [AEGP_GetDynamicStreamFlags](../aegps/aegp-suites.html) (#aegps-aegp-suites-dynamic-stream-suite).

---

## Parameter Flags

Behavior flags and UI flags describe different qualities of a parameter. Set them _before_ adding the parameter during [PF_Cmd_PARAM_SETUP](command-selectors.html) (#effect-basics-command-selectors-global-selectors). Flags which may be set during events are noted.

| **Flag**                                                                                                                                                                                                                                                                                                               | **Meaning**                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `PF\_ParamFlag\_CANNOT\_TIME\_VARY`                                                                                                                                                                                                                                                                                    | Parameter does not vary with time; no keyframe control will be provided in the Timeline panel.                                            |
| `PF\_ParamFlag\_CANNOT\_INTERP`                                                                                                                                                                                                                                                                                        | Values are not algebraically interpolated.                                                                                                |
| You can still use discontinuous (hold) interpolation. Useful for parameters which are either on or off. Accelerates rendering.                                                                                                                                                                                         |
| `PF\_ParamFlag\_COLLAPSE\_TWIRLY`                                                                                                                                                                                                                                                                                      | Set this flag during [PF_Cmd_USER_CHANGED_PARAM](command-selectors.html) (#effect-basics-command-selectors-messaging).                       |
| This bit can now be set & cleared when handling [PF_Cmd_UPDATE_PARAMS_UI](command-selectors.html) (#effect-basics-command-selectors-messaging) and [PF_Cmd_USER_CHANGED_PARAM](command-selectors.html) (#effect-basics-command-selectors-messaging) messages, so as to twirl your parameters and groups up and down at will. |
| `PF\_ParamFlag\_SUPERVISE`                                                                                                                                                                                                                                                                                             | Set to receive [PF_Cmd_USER_CHANGED_PARAM](command-selectors.html) (#effect-basics-command-selectors-messaging) messages for this parameter. |
| See [Parameter Supervision](../effect-details/parameter-supervision.html) (#effect-detals-parameter-supervision) for more information.                                                                                                                                                                                    |
| `PF\_ParamFlag\_START\_COLLAPSED`                                                                                                                                                                                                                                                                                      | Controls the twirl-state of a topic spinner.                                                                                              |

Can be changed during parameter supervision, not just during [PF_Cmd_PARAM_SETUP](command-selectors.html) (#effect-basics-command-selectors-global-selectors).
This flag will not be honored unless [PF_OutFlag2_PARAM_GROUP_START_COLLAPSED](PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags) is set. |
| `PF\_ParamFlag\_USE\_VALUE\_FOR\_OLD\_PROJECTS` | This only affects the loading of projects saved with an older version of the effect which lacks parameters added later.
When set, the `PF\_ParamDef.value` field set in `PF\_ADD\_PARAM()` will be used to initialize the missing parameter, but the dephault field will still be used for initial value of the parameter when the effect is newly applied or reset.
This is useful for when you want a parameter to default to one value but need it set to something else to preserve rendering behavior for older projects. |
| `PF\_ParamFlag\_LAYER\_PARAM\_IS\_TRACKMATTE` | Premiere Pro only: Only valid for layer parameters. Indicates that a layer param is used as a track-matte with applied filters.
Ignored in After Effects. |
| `PF\_ParamFlag\_EXCLUDE\_FROM\_HAVE\_INPUTS\_CHANGED` | Only relevant if the effect sets [PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT](PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags) and will call
[PF_AreStatesIdentical](../effect-details/parameter-supervision.html) (#effect-detals-parameter-supervision-pf-paramutilsuite) or [PF_HaveInputsChangedOverTimeSpan](../effect-details/parameter-supervision.html) (#effect-detals-parameter-supervision-pf-paramutilsuite) |
| `PF\_ParamFlag\_SKIP\_REVEAL\_WHEN\_UNHIDDEN` | New in CS6. If this parameter is unhidden, then this flag tells After Effects to not twirl open any parents and to not scroll the parameter into view in the Effect Controls panel and the Timeline panel.
After Effects uses this behavior internally when paint strokes are made, so as not to distract the user by revealing the parameter.
However, in another case, when turning on Time Remapping, that parameter is revealed.
So we provide you the same control over parameters in your own effects. |

---

## PF_ValueDisplayFlags

Within PF_ParamDefUnion, PF_FloatSliderDef and PF_FixedSliderDef both have a member variable, PF_ValueDisplayFlags, which allows them to respond to the user’s pixel value display preference (which they set in the info palette). If this is set, the parameter’s value will be displayed as 0-1, 0-255, 0-32768, or 0.0 to 1.0, depending on the preference. You can also set the first bit (PF_ValueDisplayFlag_PERCENT) to append a percent sign to the parameter’s displayed value.

We know you’d never do anything like this, but if you create a parameter which displays as a percentage, don’t confuse the user by allowing any range other than 0 to 100. Please. Percent means ‘out of one hundred’.
