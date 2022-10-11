---
title: SmartFX
order: 2
category:
  - AE 插件开发
---
# SmartFX

The SmartFX API provides bidirectional communication between effects and After Effects, enabling many performance optimizations and providing previously unavailable dependency information. This extension of the effect API is the way to implement 32-bit per channel support in After Effects.

Normal effect plug-ins are given a full-sized input buffer, and asked to render a full-sized output buffer. While output [extent_hint](../effect-basics/PF_InData.html) (#effect-basics-pf-indata-pf-indata-members) specifies the portion of the output buffer that must actually be filled, this scheme is still very inefficient if the effect does not need its entire input. Also, many effects don’t use extent hints.

---

## The Way Things Were

Consider a blur effect applied to a huge layer which is mostly off-screen, or viewed through a small region of interest, or masked down to a small size. Only a small section of the output needs to be rendered, indicated to the effect using the output extent_hint. Only a small section of the input to be blurred is needed as well - the output extent_hint expanded by the blur radius. However, using the legacy effects API, there is no way for After Effects to know this, so the entire layer is passed to the plug-in. These extra pixels can be extremely expensive and wasteful to compute, especially in the case of prior effects or nested comps.

---

## The Way Things Are Now

SmartFX solves this problem by reversing the calling sequence. The effect is told how much of its output is required, and must explicitly _ask_ the host for the inputs it needs. The render process is split into two parts: pre-render and render.

During pre-render, the effect describes the input pixel data it needs; this necessary input can vary based on anything you like (non-input layer parameters, non-layer parameters, information from in_data, settings in sequence data…). The effect must also return the extent of the resulting output, which may be smaller than the requested size if there are empty pixels in the requested portion of the layer.

During the render stage, the effect can _only_ retrieve pixels that it has previously requested. This two-pass approach facilitates many important optimizations. For example, an effect which multiplies or mattes one input against another might discover that its first input is not

needed at all, if the mask does not intersect it. There are also important optimizations that are performed internally by After Effects to ensure that image buffers are copied as little as possible, and these optimizations are only possible after the host knows the buffer sizes and for all inputs and outputs.

Like AEGPs, SmartFX plug-ins are never unloaded by After Effects.

---

## Content Bounds

The content bounds of a node are the largest possible result rectangle that can be returned from a call to PreRender. It absolutely cannot vary depending on current render request or anything else. It should be calculated carefully, not loosely.

This calculation is very important. It is an intrinsic property of the node (and its inputs) and is fixed once the graph is built. Violation of it can and probably will cause all sorts of problems in various pieces of code.

---

## How To Smartify

Effects which set `PF\_OutFlag2\_SUPPORTS\_SMART\_RENDER` (from [PF_OutFlags](../effect-basics/PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags)) will receive the SmartFX calls `PF\_Cmd\_SMART\_PRE\_RENDER` and `PF\_Cmd\_SMART\_RENDER` (from [Frame Selectors](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-frame-selectors)), instead of the older `PF\_Cmd\_FRAME\_SETUP` / `PF\_Cmd\_RENDER` / `PF\_Cmd\_FRAME\_SETDOWN` sequence. To preserve compatibility with non-smartified hosts, you may want to continue supporting the older commands too.

---

## PF_Cmd_SMART_PRE_RENDER

After Effects requests output from the effect. The effect tells After Effects what input it needs to generate that output, through the use of callback functions, and by manipulating the structures in the extra parameter. An effect cannot access the pixels of any layer inputs it has not checked out during _PF_Cmd_SMART_PRE_RENDER_. So all layer inputs that an effect might possibly need must be checked out in advance using checkout_layer. If an effect might need certain layer inputs, they must be checked out now, even if later during rendering the effect may decide that the layer isn’t needed. Also, since no parameter array is passed to SmartFX during _PF_Cmd_SMART_PRE_RENDER_ or `PF\_Cmd\_SMART\_RENDER`, any non-layer parameters needed must be retrieved using `PF\_CHECKOUT\_PARAM` (from [Interaction Callbacks](../effect-details/interaction-callback-functions.html) (#effect-details-interaction-callback-functions-interaction-callbacks))

---

## PF_PreRenderExtra

### PF_PreRenderInput


Describes what After Effects needs rendered (in the `<span class="pre">PF_RenderRequest</span>`), and the bit depth requested (in the aptly-named bitdepth member).

```
typedefstruct{
PF_LRectrect;
PF_Fieldfield;
PF_ChannelMaskchannel_mask;
PF_Booleanpreserve_rgb_of_zero_alpha;
charunused[3];
longreserved[4];
}PF_RenderRequest;
```

`<span class="pre">rect</span>` is in layer coordinates. field is also relative to the layer origin; whether the active field falls on even or odd scanlines of the output buffer depends on the origin of the output buffer.

`<span class="pre">channel_mask</span>` specifies for which channels the effect should provide output.

Data written to other channels will not be honored.

It will be one or more of the following, or’d together:

> * `<span class="pre">PF_ChannelMask_ALPHA</span>`
> * `<span class="pre">PF_ChannelMask_RED</span>`
> * `<span class="pre">PF_ChannelMask_GREEN</span>`
> * `<span class="pre">PF_ChannelMask_BLUE</span>`
> * `<span class="pre">PF_ChannelMask_ARGB</span>`

If `<span class="pre">preserve_rgb_of_zero_alpha</span>` pixels is `<span class="pre">TRUE</span>`, the effect must propagate the color content of transparent pixels through to the output.

This is related to, but distinct from, [PF_OutFlag2_REVEALS_ZERO_ALPHA](https://ae-plugins.docsforadobe.dev/effect-basics/PF_OutData.html#effect-basics-pf-outdata-pf-outflags), which tells After Effects that the effect may set alpha to non-zero values for such pixels, restoring them to visibility.

### PF_PreRenderOutput


Filled in by the effect to tell After Effects what output it plans to generate, based on the input.

```
typedefstruct{
PF_LRectresult_rect;
PF_LRectmax_result_rect;
PF_Booleansolid;
PF_Booleanreserved;
PF_RenderOutputFlagsflags;
void*pre_render_data;
PF_DeletePreRenderDataFuncfunc;
}PF_PreRenderOutput;
```

`<span class="pre">pre_render_data</span>` will be passed back to the effect during [PF_Cmd_SMART_RENDER](https://ae-plugins.docsforadobe.dev/effect-basics/command-selectors.html#effect-basics-command-selectors-frame-selectors).

Currently, the only `<span class="pre">PF_RenderOutputFlags</span>` is `<span class="pre">PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS</span>`.

### PF_PreRenderCallbacks


Currently, there is only one callback - `<span class="pre">checkout_layer</span>`. checkout_idL is chosen by the effect.

It must be positive and unique. After Effects populates the `<span class="pre">PF_CheckoutResult</span>`.

```
PF_Errcheckout_layer(
PF_ProgPtreffect_ref,
PF_ParamIndexindex,
A_longcheckout_idL,
constPF_RenderRequest*req,
A_longwhat_time,
A_longtime_step,
A_u_longtime_scale,
PF_CheckoutResult*result);

typedefstruct{
PF_LRectresult_rect;
PF_LRectmax_result_rect;
PF_RationalScalepar;
longsolid;
PF_BooleanreservedB[3];
A_longref_width;
A_longref_height;
}PF_CheckoutResult;
```

`<span class="pre">result_rect</span>` can be empty. `<span class="pre">max_result_rect</span>` is the largest the output could possibly be, if the host asked for all of it. If solid is TRUE, the entire result_rect has opaque alpha.

`<span class="pre">ref_width</span>` and `<span class="pre">ref_height</span>` are the original dimensions of the layer, before any effects are applied, disregarding any downsample factors. This will be the size of the composition for collapsed layers.

There is a bug in 11.0 with the Global Performance Cache, when a SmartFX effect uses both [PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT](https://ae-plugins.docsforadobe.dev/effect-basics/PF_OutData.html#effect-basics-pf-outdata-pf-outflags) & [PF_OutFlag_NON_PARAM_VARY](https://ae-plugins.docsforadobe.dev/effect-basics/PF_OutData.html#effect-basics-pf-outdata-pf-outflags).

Calling checkout_layer during `<span class="pre">PF_Cmd_SMART_PRE_RENDER</span>` returns empty rects in `<span class="pre">PF_CheckoutResult</span>`.

The workaround is to simply make the call again. This workaround is no longer needed in 11.0.1.

### result_rect


The output (in layer coordinates) resulting from the render request (can be empty).

This cannot be bigger than the input request rectangle (unless `<span class="pre">PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS</span>` is set), but can be smaller.

### max_result_rect


The maximum size the output could possibly be, if After Effects requested all of it.

This must not vary depending on requested output size.

### solid

Set this TRUE if every pixel in the output will be fully opaque. Set if possible; it enables certain optimizations.

### reserved

Ignore.

### flags

Currently, the only flag is `<span class="pre">PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS</span>`, which tells After Effects that the smart effect will return more pixels than After Effects requested.

### pre_render_data


Point this at any data that the effect would like to access during rendering.

Effects can also allocate handles and store them in `<span class="pre">out_data>frame_data</span>`, as with regular (non-smart) effects.

Since [PF_Cmd_SMART_PRE_RENDER](https://ae-plugins.docsforadobe.dev/effect-basics/command-selectors.html#effect-basics-command-selectors-frame-selectors) can be called with no corresponding [PF_Cmd_SMART_RENDER](https://ae-plugins.docsforadobe.dev/effect-basics/command-selectors.html#effect-basics-command-selectors-frame-selectors), effects must never delete this data themselves;

once the effect returns from [PF_Cmd_SMART_PRE_RENDER](https://ae-plugins.docsforadobe.dev/effect-basics/command-selectors.html#effect-basics-command-selectors-frame-selectors), After Effects owns this data and will dispose of it (using either the following function or a standard free call).

### delete_pre_render_data_func

Point this to a function that will eventually be called to delete the pre_render_data.


---

## preserve_rgb_of_zero_alpha

`preserve\_rgb\_of\_zero\_alpha` is used both as input to the effect, to tell it what to render, and as output from the effect, to describe the input it needs (as passed to the checkout call). When preserve_rgb_of_zero_alpha is set in an input request, the effect must pass it recursively when making checkouts, otherwise prior effects and masking will eliminate those pixels that the effect would reveal. Use of this is discouraged, though still supported in CS3 (8.0).

---

## Rectangles

Effects must set both result rectangles accurately. After Effects’ caching system relies upon them, incorrect values can cause many problems. If the plug-in returns a `result\_rect` smaller than the request_rect, that tells After Effects the pixels inside the request_rect but outside the `result\_rect` are empty.

Similarly, `max\_result\_rect` must encompass all non-zero pixels; the effect will never be asked to render anything outside this region. If there are pixels outside this rectangle, they will never be displayed.

Mis-sized output rectangles can cause problems as well. If these rectangles are too big, a loss of performance results.

Not only will many empty pixels be cached (robbing the application of valuable memory), the effect may be unnecessarily asked to render large regions of nothing. For this reason, the `max\_result\_rect` must be computed correctly, rather than set to some arbitrarily large size.

Both `result\_rect` and `max\_result\_rect` may vary depending on the effect’s parameters, the current time, et cetera; they are valid only for the given invocation of the effect. However, `max\_result\_rect` _cannot_ depend on the specific render request. It must be the same no matter what portion of the output is requested by After Effects.

It is legal to return an empty `result\_rect` if the request_rect doesn’t intersect the effect’s output pixels; no rendering need be done.

After Effects may also call the effect with an empty request_rect, meaning the effect is only being asked to compute the `max\_result\_rect`.

`preserve\_rgb\_of\_zero\_alpha` can influence the bounds computation process (both result_rect and `max\_result\_rect`) and must be respected if the effect behaves differently depending on this setting.

---

## The “Size” Of A Layer

As with non-smart effects, each smart effect can arbitrarily shrink or expand its requested input. They cannot depend on a fixed frame size, and the size of the input may change over time.

For example, the user could apply an animated drop shadow to a layer, which would add pixels to different edges of the layer at different times, depending on the direction in which the shadow is cast.

Some effects (for example, those which need to align one layer against another) need some notion of “size.” This could be defined two ways, each with advantages and disadvantages.

The size of the original layer, before any effects and downsampling are applied, is given `in\_data>width/height`. As this value is unaffected by subsequent effects, it can act an absolute reference for things like center points.

However, this is not fool-proof, as the user could have applied a distortion or translation effect. Also, this value is available only for the layer to which the effect is applied, not other layer parameters.

…or…

Every layer input has a `max\_result\_rect` which encompasses all pixel data, in some sense the master “size” of a layer.

It is available for all layers, but changes over time according to previously applied effects, possibly in ways the user might not expect (as in the drop shadow example above).

:::tip that the ref_width/height and `max\_result\_rect` for an input may be obtained without rendering, by calling `checkout\_layer` with an empty `request\_rect`.

This is fairly efficient, and can be useful if the layer “size” is needed first to determine exactly which pixels are required for rendering.

This is an example of requesting a layer in pre-render and then never calling `checkout\_layer` (in this case, there are none).

---

## Flag On The Play

Normally, the `max\_result\_rect` of a given `PF\_RenderRequest` will be cropped to the bounds of any applied mask.

However, if [PF_OutFlag2_REVEALS_ZERO_ALPHA](../effect-basics/PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags2) is set, the `max\_result\_rect` will be the size of the layer.

---

## PF_Cmd_SMART_RENDER

The effect will receive at most one _PF_Cmd_SMART_RENDER_ call for each pre-render.

:::tip that render may never be called at all. After Effects may have only wanted to to perform some bounds computations, or it may have subsequently discovered that an effect’s output is not needed at all (which can happen, for example, if the pre-render phase for a track matte returns a rectangle that does not intersect the effect’s output.)

All effects must be able to handle Pre-Render without Render without leaking resources or otherwise entering an unstable state.

During _PF_Cmd_SMART_RENDER_, the extra parameter points to a PF_SmartRenderExtra.

---

## PF_SmartRenderExtra

### PF_SmartRenderInput


Consists of a [PF_RenderRequest](https://ae-plugins.docsforadobe.dev/smartfx/smartfx.html#smartfx-smartfx-pf-prerenderextra), the bitdepth, and a pointer to `<span class="pre">pre_render_data</span>` (allocated during [PF_Cmd_SMART_PRE_RENDER](https://ae-plugins.docsforadobe.dev/effect-basics/command-selectors.html#effect-basics-command-selectors-frame-selectors)).

This `<span class="pre">PF_SmartRenderInput</span>` is identical to that passed in the corresponding  *PF_Cmd_SMART_PRE_RENDER* .

### PF_SmartRenderCallbacks


```
PF_Errcheckout_layer_pixels(
PF_ProgPtreffect_ref,
A_longcheckout_idL,
PF_EffectWorld**pixels);
```

This is used to actually access the pixels in layers checked out during  *PF_Cmd_SMART_PRE_RENDER* .

The returned `<span class="pre">PF_EffectWorld</span>` is valid for duration of current command or until checked in.

You are only allowed to call `<span class="pre">checkout_layer_pixels</span>` only once with the checkout_idL used earlier in  *PF_Cmd_SMART_PRERENDER* . There must be a one-to-one mapping between the number of checkouts made in *PF_Cmd_SMART_PRERENDER* and  *PF_Cmd_SMART_RENDER* .

To call `<span class="pre">checkout_layer_pixels</span>` more than once on a layer, you should call [checkout_layer](https://ae-plugins.docsforadobe.dev/smartfx/smartfx.html#smartfx-smartfx-pf-prerenderextra) on the same layer again with a different unique `<span class="pre">checkout_idL</span>` in *PF_Cmd_SMART_PRERENDER* and then use that `<span class="pre">checkout_idL</span>` to do another `<span class="pre">checkout_layer_pixels</span>` in  *PF_Cmd_SMART_RENDER* .

```
PF_Errcheckin_layer_pixels(
PF_ProgPtreffect_ref,
A_longcheckout_idL);
```

It isn’t necessary to call (After Effects cleans up all such checkouts when the effect returns from  *PF_Cmd_SMART_RENDER* ), but useful to free up memory.

```
PF_Errcheckout_output(
PF_ProgPtreffect_ref,
PF_EffectWorld**output);
```

Retrieves the output buffer. Note that effects are not allowed to check out output until at least one input has been checked out (unless the effect has no inputs at all).

NOTE: For optimal memory usage, request the output as late as possible, and request inputs as few at a time as possible.


## When To Access Layer Parameters

Parameters other than layer inputs may be freely checked out at any point. Layer inputs must be accessed during:ref:PF_Cmd_SMART_PRE_RENDER <effect-basics/command-selectors.frame-selectors>.

However, you aren’t required to actually _use_ every input.

If you check out a frame (or portion thereof) in [PF_Cmd_SMART_PRE_RENDER](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-frame-selectors) and do not subsequently check it out in `PF\_Cmd\_SMART\_RENDER`, it need never be rendered, greatly improving performance.

---

## Wait, Gimme That Layer Back!

`checkout\_layer\_pixels` can only be called once with the checkout_id used earlier in PreRender. There has to be a one-to-one mapping on the number of checkouts made in PreRender and SmartRender. If you need to check out the pixels of a layer more than once, perhaps because of the structure of your code, just use more than one checkout_id. In PreRender, call checkout_layer on the same layer with different unique checkout_ids. Then in SmartRender, use a different one of those checkout_ids each time checkout_layer_pixels is called in SmartRender.
