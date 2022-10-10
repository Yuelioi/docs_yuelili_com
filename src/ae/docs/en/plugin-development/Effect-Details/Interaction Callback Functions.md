---
title: Interaction Callback Functions
order: 9
category:
  - AE 插件开发
---

# Interaction Callback Functions

While the un-macro’d function pointers are provided in [PF_InData](../effect-basics/PF_InData.html) (#effect-basics-pf-indata), use the provided macros to access them. See how stringent we are about deprecating macro usage? Let’s let this be our little secret.

---

## Interaction Callbacks

| **Function**     | **Purpose**                                                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `PF\_ADD\_PARAM` | Enumerate your plug-in’s parameters to After Effects during [PF_Cmd_PARAM_SETUP](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-global-selectors), using multiple calls to this function. |

:::tip: Failing to completely clear out a PF_ParamDef prior to PF_ADD_PARAM() can cause many problems.
Always use `AEFX\_CLR\_STRUCT` before adding parameters.

```cpp
PF\_Err PF\_ADD\_PARAM (
 PF\_InData \*in\_data,
 PF\_ParamIndex index,
 PF\_ParamDefPtr def);

```

We provide convenience macros for specific parameter types, in Utils/ Param_Utils.h:

- `PF\_ADD\_COLOR`,
- `PF\_ADD\_ARBITRARY`,
- `PF\_ADD\_SLIDER`,
- `PF\_ADD\_FIXED`,
- `PF\_ADD\_FLOAT\_SLIDERX`,
- `PF\_ADD\_CHECKBOXX`,
- `PF\_ADD\_BUTTON`,
- `PF\_ADD\_ANGLE`,
- `PF\_ADD\_NULL`,
- `PF\_ADD\_LAYER`,
- `PF\_ADD\_255\_SLIDER`,
- `PF\_ADD\_PERCENT`,
- `PF\_ADD\_POINT`,
- `PF\_ADD\_POINT\_3D`,
- `PF\_ADD\_TOPICX`,
- `PF\_END\_TOPIC`,
- `PF\_ADD\_POPUPX`,
- `PF\_ADD\_FLOAT\_SLIDERX\_DISABLED`

|
| `PF\_ABORT` | Returns non-zero if the user has cancelled; return that value to After Effects.
Wrap your render routine in a “while abort has not been requested” while loop.

```cpp
PF\_Err PF\_ABORT (PF\_InData \*in\_data);

```

|
| `PF\_PROGRESS` | Displays a progress bar during processing; current and total describe the percentage complete.
Returns non-zero if you should suspend or abort your current processing; return that value to After Effects.
Call once per scanline, unless your effect is very slow.
If total is 0, PF_ABORT is used instead (presenting the user with different choices).

```cpp
PF\_Err PF\_PROGRESS (
 PF\_InData \*in\_data,
 A\_long current,
 A\_long total );

```

|
| `PF\_CHECKOUT\_PARAM` | Obtains parameter values, or the source video layer, at a specified time. After Effects makes caching decisions based on the checkout state of parameters.
Allocate a new [PF_ParamDef](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef) to hold the result; those passed to the plug-in are read-only.
If you check out a layer parameter that’s set to <none>, the layer returned will be filled with zeros.
Masks are not included with checked-out layers.
Do not check out layer parameters during UI event handling.

```cpp
PF\_Err PF\_CHECKOUT\_PARAM (
 PF\_InData \*in\_data,
 PF\_ParamIndex index,
 A\_long what\_time,
 A\_long step,
 A\_long time\_scale,
 PF\_ParamDef \*param);

```

If checking out the source layer, a deinterlaced frame will be returned. If you ask for the time that references the upper field, you will receive back the upper field with a filter used to generate the extra scanlines.
For example, assuming line 0 and 2 are upper fields, and line 1 is a lower field, if you check out the upper fields, line 0 and 2 will be passed back directly from the source footage, and line 1 will be calculated by averaging lines 0 and 2.
If you want to reassemble a full resolution source frame with both fields present, you can call PF_CHECKOUT_PARAM twice to get both fields, and reinterlace the footage.
What happens when checking out a layer at a time that is not frame-aligned? All items have essentially infinite time resolution, so when asking for a time at any value, AE renders the item at that time.
For a composition, that involves interpolating all of the keyframes values to the subframe time.
For footage, AE returns a full image that corresponds to the time asked, which is the nearest-to-left frame.
If the user has frame-blending on that layer, an interpolated frame is generated. |
| `PF\_CHECKIN\_PARAM` | Balance every `PF\_CHECKOUT\_PARAM`, with a `PF\_CHECKIN\_PARAM`.
Not doing so causes dismal performance and leaks memory. Once checked in, the fields in the [PF_ParamDef](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef) will no longer be valid.

```cpp
PF\_Err PF\_CHECKIN\_PARAM (
 PF\_InData \*in\_data,
 PF\_ParamDef \*param );

```

|
| `PF\_REGISTER\_UI` | Register a custom user interface element. See [Effect UI & Events](../effect-ui-events/effect-ui-events.html) (#effect-ui-events-effect-ui-events). :::tip: The PF_UIAlignment flags are not honored.

```cpp
PF\_Err PF\_REGISTER\_UI (
 PF\_InData \*in\_data,
 PF\_CustomUIInfo \*cust\_info );

```

|
| `PF\_CHECKOUT\_LAYER\_AUDIO` | Given an index, start_time, duration, time_scale, rate, bytes_per_sample, num_channels, and fmt_signed, After Effects will return a corresponding PF_LayerAudio.
After Effects will perform any necessary resampling.

```cpp
PF\_Err PF\_CHECKOUT\_LAYER\_AUDIO (
 PF\_InData \*in\_data,
 PF\_ParamIndex index,
 A\_long start\_time,
 A\_long duration,
 A\_u\_long time\_scale,
 PF\_UFixed rate,
 A\_long bytes\_per\_sample,
 A\_long num\_channels,
 A\_long fmt\_signed,
 PF\_LayerAudio \*audio);

```

|
| `PF\_CHECKIN\_LAYER\_AUDIO` | Balance all calls to PF_CHECKOUT_LAYER_AUDIO, regardless of error conditions, with matching calls to PF_CHECKIN_LAYER_AUDIO.

```cpp
PF\_Err PF\_CHECKIN\_LAYER\_AUDIO (
 PF\_InData \*in\_data,
 PF\_LayerAudio audio );

```

|
| `PF\_GET\_AUDIO\_DATA` | Returns information about the PF_LayerAudio.
All the parameters after audio are optional; pass 0 for any value in which you aren’t interested. rate0 is unsigned, and fmt_signed0 should be non-zero for signed, zero for unsigned.
This callback is for visual effects that read audio information. To _alter_ audio, write an audio filter.

```cpp
PF\_Err PF\_GET\_AUDIO\_DATA (
 PF\_InData \*in\_data,
 PF\_LayerAudio audio,
 PF\_SndSamplePtr \*data0,
 A\_long \*num\_samples0,
 PF\_UFixed \*rate0,
 A\_long \*bytes\_per\_sample0,
 A\_long \*num\_channels0,
 A\_long \*fmt\_signed0);

```

|

---

## Parameter Checkout vs. Param Zero

Effects are applied to an image in order from 0 to n within the Effect Control (and Composition) panel.

The output from effect[n-1] is the input ([param[0]](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef-param-zero)) of effect[n].

On the other hand, when a normal effect checks out a layer using `PF\_CHECKOUT\_PARAM`, it receives the raw (un-effected) source layer, regardless of its order.

However, when a [SmartFX](../smartfx/smartfx.html) (#smartfx-smartfx) effect checks out its input parameter (params[0]), previous effects _are_ applied.

---

## Parameter Checkout Behavior

Regardless of whether the layer in and out point have been trimmed, you will get valid frames from the start of the source footage to the end, and then transparent before and after that.

Layer params with a lower frame rate than the composition in which they’re checked out are only refreshed as often as necessitated by the lower frame rate.

A 10fps layer checked out in a 30fps composition will only need to be refreshed every third frame. if your effect wants to change it’s output every frame despite the static input layer, you’d need to set [PF_Outflag_NON_PARAM_VARY](../effect-basics/PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags).

When an effect checks out a continuously-rasterized Adobe Illustrator layer, After Effects renders the Illustrator layer with geometrics applied, in a composition-sized buffer.

---

## Parameter Checkout And Re-Entrancy

Plug-ins that check out layers at different times can generate re-entrant behavior. Consider an instance where the Checkout sample plug-in is applied to a layer in composition B, and B is pre-composed into composition A where Checkout is applied to it as well.

When composition A is rendered, Checkout[A] will be sent _PF_Cmd_RENDER_, during which it checks out a layer (composition B) from a time other than the current time.

In order to provide that checked-out layer, After Effects sends _PF_Cmd_RENDER_ to `Checkout[B]`.

Presto, recursion!

If you’re going to check out parameters, your effects must handle re-entrant render requests appropriately.

Don’t use globals, or read or write static variables…but you weren’t going to anyway, right?

---

## Progress During Iteration

After Effects strives to be as responsive as possible to user interaction, even while rendering. Do the same through appropriate use of PF_ITERATE(). For example, perhaps you’re using a PF_ITERATE’d function three times during your response to `PF\_Cmd\_RENDER`.

In this case, you’d start off with:

```cpp
lines\_per\_iterateL = in\_data>extent\_hint.top - in\_data>extent\_hint.bottom;
total\_linesL = 3 \* lines\_per\_iterateL;
lines\_so\_farL = 0;

```

After each iteration, you’d add the already-completed lines to the current position:

```cpp
suites.iterate8suite()>iterate( lines\_so\_farL,
 total\_linesL,
 input\_worldP,
 &output>extent\_hint,
 refcon,
 WhizBangPreProcessFun,
 output\_worldP);

lines\_so\_farL += lines\_per\_iterateL;

ERR(PF\_PROGRESS(lines\_so\_farL, total\_linesL));

suites.iterate8suite()>iterate( lines\_so\_farL,
 total\_linesL,
 input\_worldP,
 &output>extent\_hint,
 refcon,
 WhizBangRenderFunc,
 output\_worldP);

lines\_so\_far += lines\_per\_iterateL;

ERR(PF\_PROGRESS(lines\_so\_farL, total\_linesL));

suites.iterate8suite()>iterate( lines\_so\_farL,
 total\_linesL,
 input\_worldP,
 &output>extent\_hint,
 refcon,
 WhizBangPostProcessFunc,
 output\_worldP);

ERR(PF\_PROGRESS(lines\_so\_farL, total\_linesL));

```
