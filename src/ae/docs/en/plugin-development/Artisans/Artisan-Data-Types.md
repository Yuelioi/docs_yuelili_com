---
title: Artisan Data Types
order: 3
category:
  - AE 插件开发
---
# Artisan Data Types

Below are the data types most commonly used in the Artisan API.

---

## Data Types Used In The Artisan API

| **Type**                                                                                   | **Describes**                                                                     |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `<span class="pre">AEGP_RenderLayerContextH</span>`                                            | State information at the time of a render request, sent to an Artisan by After Effects. |
| `<span class="pre">PR_RenderContextH</span>`                                                   | A collection of settings defining what is to be rendered, and how.                      |
| `<span class="pre">AEGP_SoundDataH</span>`                                                     | The audio settings used for a given layer.                                              |
| `<span class="pre">AEGP_RenderReceiptH</span>` `<span class="pre">AEGP_FrameReceiptH</span>` | Used by Artisans when rendering.                                                        |
| `<span class="pre">AEGP_WorldH</span>`                                                         | A frame of pixels.                                                                      |
| `<span class="pre">AEGP_RenderOptionsH</span>`                                                 | The settings associated with a render queue item.                                       |

---

#### AEGP_RenderLayerContextH

State information at the time of a render request, sent to an Artisan by After Effects.

#### PR_RenderContextH

A collection of settings defining what is to be rendered, and how.

#### AEGP_SoundDataH

The audio settings used for a given layer.

`AEGP\_RenderReceiptH`

`AEGP\_FrameReceiptH` Used by Artisans when rendering.

#### AEGP_WorldH

A frame of pixels.

#### AEGP_RenderOptionsH

The settings associated with a render queue item.

---

## Horz? Vert?[¶](#horz-vert "Permalink to this headline")

After Effects’ matrix is row based; OpenGL’s is column based. This means more work for you. Yay, billable hours!

---

## Implementation And Design[¶](#implementation-and-design "Permalink to this headline")

An Artisan is nearly an application unto itself. Because we realized early in the After Effects 5.0 that there are many ways to approach the problems inherent in 3D rendering; intersections and shading, for example.

We provided an API with which we and third parties (yes, we really do use our own APIs) could implement any 3D rendering scheme desired.

---

## 3D Compositing, Not Modeling[¶](#d-compositing-not-modeling "Permalink to this headline")

After Effects is _not_ a 3D modeling application. Users work in a responsive mode, switching to higher quality only at for proofing or final output. Consider providing at least two quality modes, one for layout and another for final output. Be conscious of render time in low quality mode.

---

## Registering An Artisan[¶](#registering-an-artisan "Permalink to this headline")

An Artisan is an AEGP, and has a single entry point. Artisans must also register their own function entry points and have a special callback for this purpose. See `AEGP\_RegisterArtisan()` from [AEGP_RegisterSuites5](../aegps/aegp-suites.html#aegps-aegp-suites-aegp-registersuites).

This tables shows the functions that Artisans can support as defined by `PR\_ArtisanEntryPoints`: only `render\_func` is required.

### Artisan Entry Points[¶](#artisan-entry-points "Permalink to this headline")

**PR_ArtisanEntryPoints**

---

#### global_setup_func0

Called only once, right after `GP\_Main`. The global data is common across all instances of the plug-in. If you allocate memory during Global Setup, you must free it during your `global\_setdown\_func`.

```cpp

PR\_GlobalSetupFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_GlobalDataH \*global\_dataPH);


```

#### global_setdown_func0

Dispose of any global data you allocated.

```cpp

PR\_GlobalSetdownFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_GlobalDataH global\_dataH);


```

#### global_do_about_func0

Tell the world about yourself! Use `in\_dataP>msg\_func` to display your dialog.

```cpp

PR\_GlobalDoAboutFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_GlobalDataH global\_dataH);


```

#### setup_instance_func0

Allocate and instantiate any data specific to this instance of your Artisan.

```cpp

PR\_InstanceSetupFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_InstanceContextH instance\_contextH,

 PR\_GlobalDataH global\_dataH,

 PR\_InstanceFlags flags,

 PR\_FlatHandle flat\_dataH0,

 PR\_InstanceDataH \*instance\_dataPH);


```

#### setdown_instance_func0

Deallocate and free any data specific to this instance of your Artisan.

```cpp

PR\_InstanceSetdownFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_InstanceContextH instance\_contextH,

 PR\_GlobalDataH global\_dataH,

 PR\_InstanceDataH instance\_dataH);


```

#### flatten_instance_func0

Flatten your data in preparation to being written to disk. (making sure it’s OS independent, if your Artisan is).

```cpp

PR\_FlattenInstanceFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_InstanceContextH instance\_contextH,

 PR\_GlobalDataH global\_dataH,

 PR\_InstanceDataH instance\_dataH,

 PR\_FlatHandle \*flatH);


```

#### do_instance_dialog_func0

If your Artisan has a additional parameters (accessed through its Options dialog), this function will be called to get and set them.

```cpp

PR\_DoInstanceDialogFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_InstanceContextH instance\_contextH,

 PR\_GlobalDataH global\_dataH,

 PR\_InstanceDataH instance\_dataH,

 PR\_DialogResult \*resultP);


```

`PR\_DialogResultis` is either `PR\_DialogResult\_NO\_CHANGE` or `PR\_DialogResult\_CHANGE\_MADE`.

#### frame_setup_func0

Perform any setup necessary to render a frame (called immediately before rendering).

```cpp

PR\_FrameSetupFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_InstanceContextH instance\_contextH

 PR\_RenderContextH render\_contextH,

 PR\_GlobalDataH global\_dataH,

 PR\_InstanceDataH instance\_dataH,

 PR\_RenderDataH \*render\_dataPH);


```

#### frame_setdown_func0

Dispose of any setup data allocated during `frame\_setup` (sent immediately after rendering).

```cpp

PR\_FrameSetdownFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_InstanceContextH instance\_contextH

 PR\_RenderContextH render\_contextH,

 PR\_GlobalDataH global\_dataH,

 PR\_InstanceDataH instance\_dataH,

 PR\_RenderDataH render\_dataH);


```

#### render_func

Render the scene.

```cpp

PR\_FrameRenderFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_InstanceContextH instance\_contextH

 PR\_RenderContextH render\_contextH,

 PR\_GlobalDataH global\_dataH,

 PR\_InstanceDataH instance\_dataH,

 PR\_RenderDataH render\_dataH);


```

#### query_func0

Artisans can draw their own projection axes, should the need arise.

After Effects will call this function to obtain the transform between the composition world and those axes, as well as for a number of other functions related to on- and off-screen preview drawing (the former is relevant only to interactive artisans).

```cpp

PR\_QueryFunc(

 const PR\_InData \*in\_dataP,

 PR\_GlobalContextH global\_contextH,

 PR\_InstanceContextH instance\_contextH

 PR\_QueryContextH query\_contextH,

 PR\_QueryType query\_type,

 PR\_GlobalDataH global\_dataH,

 PR\_InstanceDataH instance\_dataH);


```

`PR\_QueryType` can be one of the following:

- `PR\_QueryType\_NONE = 0`,
- `PR\_QueryType\_TRANSFORM`,
- `PR\_QueryType\_INTERACTIVE\_WINDOW\_DISPOSE`,
- `PR\_QueryType\_INTERACTIVE\_WINDOW\_CLEAR`,
- `PR\_QueryType\_INTERACTIVE\_WINDOW\_FROZEN\_PROXY`,
- `PR\_QueryType\_INTERACTIVE\_SWAP\_BUFFER`,
- `PR\_QueryType\_INTERACTIVE\_DRAW\_PROCS`,
- `PR\_QueryType\_PREPARE\_FOR\_LINE\_DRAWING`,
- `PR\_QueryType\_UNPREPARE\_FOR\_LINE\_DRAWING`,
- `PR\_QueryType\_GET\_CURRENT\_CONTEXT\_SAFE\_FOR\_LINE\_DRAWING`,
- `PR\_QueryType\_GET\_ARTISAN\_QUALITY`

New in CS6.

---

## The World Is Your Canvas[¶](#the-world-is-your-canvas "Permalink to this headline")

`AEGP\_RenderTexture()` supplies the raw pixels of a layer, untransformed, into an arbitrarily-sized buffer.

`AEGP\_RenderLayer()` invokes the entire After Effects render pipeline, including transforms, masking, et cetera, providing the layer as it appears in its composition, in a composition-sized buffer.

If the layer being rendered is 3D, the default (Standard 3D) Artisan is invoked to perform any 3D geometrics.

Your Artisan can use this to render track matte layers, and apply them only in a strictly 2D sense, to the transformed 3D layer.

Before rendering, the Artisans that ship with After Effects apply an inverse transform to get square pixels, then re-apply the transform before display.

For example, if the pixel aspect ratio is 10/11 (DV NTSC), we multiply by 11/10 to get square pixels. We process and composite 3D layers, then re-divide to get back to the original pixel aspect ratio.

The following suite supplies the layers, compositions, texture and destination buffers. This is a vital suite for all artisans.

### AEGP_CanvasSuite8[¶](#aegp-canvassuite8 "Permalink to this headline")

---

#### AEGP_GetCompToRender

Given the render context provided to the Artisan at render time, returns a handle to the composition.

```cpp

AEGP\_GetCompToRender(

 PR\_RenderContextH render\_contextH,

 AEGP\_CompH \*compPH)


```

#### AEGP_GetNumLayersToRender

Given the render context, returns the number of layers the Artisan needs to render.

```cpp

AEGP\_GetNumLayersToRender(

 PR\_RenderContextH render\_contextH,

 A\_long \*num\_to\_renderPL)


```

#### AEGP_GetNthLayerContextToRender

Used to build a list of layers to render after determining the total number of layers that need rendering by the Artisan.

```cpp

AEGP\_GetNthLayerContextToRender(

 PR\_RenderContextH render\_contextH,

 A\_long n,

 AEGP\_RenderLayerContextH \*layer\_indexPH)


```

#### AEGP_GetLayerFromLayerContext

Given a `AEGP\_RenderLayerContextH`,retrieves the associated `AEGP\_LayerH` (required by many suite functions).

```cpp

AEGP\_GetLayerFromLayerContext(

 const PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 AEGP\_LayerH \*layerPH);


```

#### AEGP_GetLayerAndSubLayerFromLayerContext

Allows for rendering of sub-layers (as within a Photoshop file).

```cpp

AEGP\_GetLayerAndSubLayerFromLayerContext(

 const PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 AEGP\_LayerH \*layerPH,

 AEGP\_SubLayerIndex \*sublayerP);


```

#### AEGP_GetTopLayerFromLayerContext

With collapsed geometrics “on” this gives the layer in the root composition containing the layer context.

With collapsed geometrics off this is the same as `AEGP\_GetLayerFromLayerContext`.

```cpp

AEGP\_GetTopLayerFromLayerContext(

 const PR\_RenderContextH r\_contextH,

 AEGP\_RenderLayerContextH l\_contextH,

 AEGP\_LayerH \*layerPH);


```

#### AEGP_GetCompRenderTime

Given the render context, returns the current point in (composition) time to render.

```cpp

AEGP\_GetNthLayerIndexToRender(

 PR\_RenderContextH render\_contextH,

 A\_long \*time,

 A\_long \*time\_step)


```

#### AEGP_GetCompDestinationBuffer

Given the render context, returns a buffer in which to place the final rendered output.

```cpp

AEGP\_GetCompToRender(

 PR\_RenderContextH render\_contextH,

 AEGP\_CompH compH,

 PF\_EffectWorld \*dst);


```

#### AEGP_GetROI

Given the render context provided to the Artisan at render time, returns a handle to the composition.

```cpp

AEGP\_GetROI(

 PR\_RenderContextH render\_contextH,

 A\_LegacyRect \*roiPR);


```

#### AEGP_RenderTexture

Given the render context and layer, returns the layer texture.

All parameters with a trailing ‘0’ are optional; the returned `PF\_EffectWorld` can be NULL.

```cpp

AEGP\_RenderTexture(

 PR\_RenderContextH render\_contextH,

 AEGP\_LayerH layerH,

 AEGP\_RenderHints render\_hints,

 A\_FloatPoint \*suggested\_scaleP0,

 A\_FloatRect \*suggsted\_src\_rectP0,

 A\_Matrix3 \*src\_matrixP0,

 PF\_EffectWorld \*render\_bufferP);


```

`AEGP\_RenderHints` contains one or more of the following:

- `AEGP\_RenderHints\_NONE`
- `AEGP\_RenderHints\_IGNORE\_EXTENTS`
- `AEGP\_RenderHints\_NO\_TRANSFER\_MODE`

`AEGP\_RenderHints\_NO\_TRANSFER\_MODE` prevents application of opacity & transfer mode; for use with `RenderLayer` calls.

#### AEGP_DisposeTexture

Disposes of an acquired layer texture.

```cpp

AEGP\_DisposeTexture(

 PR\_RenderContextH render\_contextH,

 AEGP\_LayerH layerH,

 AEGP\_WorldH \*dst0);


```

#### AEGP_GetFieldRender

Returns the field settings of the given `PR\_RenderContextH`.

```cpp

AEGP\_GetFieldRender(

 PR\_RenderContextH render\_contextH,

 PF\_Field \*field);


```

#### AEGP_ReportArtisanProgress

Given the render context provided to the Artisan at render time, returns a handle to the composition.

:::tip: this is NOT thread-safe on macOS; only use this function when the current thread ID is 0.

```cpp

AEGP\_ReportArtisanProgress(

 PR\_RenderContextH render\_contextH,

 A\_long countL,

 A\_long totalL);


```

#### AEGP_GetRenderDownsampleFactor

Returns the downsample factor of the `PR\_RenderContextH`.

```cpp

AEGP\_GetRenderDownsampleFactor(

 PR\_RenderContextH render\_contextH,

 AEGP\_DownsampleFactor \*dsfP);


```

#### AEGP_IsBlankCanvas

Determines whether the `PR\_RenderContextH` is blank (empty).

```cpp

AEGP\_IsBlankCanvas(

 PR\_RenderContextH render\_contextH,

 A\_Boolean \*is\_blankPB);


```

#### AEGP_GetRenderLayerToWorldXform

Given a render context and a layer (at a given time), retrieves the 4 by 4 transform to move between their coordinate spaces.

```cpp

AEGP\_GetRenderLayerToWorldXform(

 PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 const A\_Time \*comp\_timeP,

 A\_Matrix4 \*transform);


```

#### AEGP_GetRenderLayerBounds

Retrieves the bounding rectangle of the layer_contextH (at a given time) within the render_contextH.

```cpp

AEGP\_GetRenderLayerBounds(

 PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 const A\_Time \*comp\_timeP,

 A\_LegacyRect \*boundsP);


```

#### AEGP_GetRenderOpacity

Returns the opacity of the given layer context at the given time, within the render context.

```cpp

AEGP\_GetRenderOpacity(

 PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 const A\_Time \*comp\_timePT,

 A\_FpLong \*opacityPF);


```

#### AEGP_IsRenderLayerActive

Returns whether or not a given layer context is active within the render context, at the given time.

```cpp

AEGP\_IsRenderLayerActive(

 PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 const A\_Time \*comp\_timePT,

 A\_Boolean \*activePB);


```

#### AEGP_SetArtisanLayerProgress

Sets the progress information for a rendering Artisan. countL is the number of layers completed,

`num\_layersL` is the total number of layers the Artisan is rendering.

```cpp

AEGP\_SetArtisanLayerProgress(

 PR\_RenderContextH render\_contextH,

 A\_long countL,

 A\_long num\_layersL);


```

#### AEGP_RenderLayerPlus

Similar to `AEGP\_RenderLayer`, but takes into account the `AEGP\_RenderLayerContextH`.

```cpp

AEGP\_RenderLayerPlus(

 PR\_RenderContextH r\_contextH,

 AEGP\_LayerH layerH,

 AEGP\_RenderLayerContextH l\_contextH,

 AEGP\_RenderHints render\_hints,

 AEGP\_WorldH \*bufferP);


```

#### AEGP_GetTrackMatteContext

Retrieves the `AEGP\_RenderLayerContextH` for the specified render and fill contexts.

```cpp

AEGP\_GetTrackMatteContext(

 PR\_RenderContextH rnder\_contextH,

 AEGP\_RenderLayerContextH fill\_contextH,

 AEGP\_RenderLayerContextH \*mattePH);


```

#### AEGP_RenderTextureWithReceipt

Renders a texture into an `AEGP\_WorldH`, and provides an `AEGP\_RenderReceiptH` for the operation.

The returned `receiptPH` must be disposed of with `AEGP\_DisposeRenderReceipt`.

```cpp

AEGP\_RenderTextureWithReceipt(

 PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 AEGP\_RenderHints render\_hints,

 A\_FloatPoint \*suggested\_scaleP0,

 A\_FloatRect \*suggest\_src\_rectP0,

 A\_Matrix3 \*src\_matrixP0,

 AEGP\_RenderReceiptH \*receiptPH,

 AEGP\_WorldH \*dstPH);


```

#### AEGP_GetNumberOfSoftwareEffects

Returns the number of software effects applied in the given `AEGP\_RenderLayerContextH`.

```cpp

AEGP\_GetNumberOfSoftwareEffects(

 PR\_RenderContextH ren\_contextH,

 AEGP\_RenderLayerContextH lyr\_contextH,

 A\_short \*num\_sft\_FXPS);


```

#### AEGP_RenderLayerPlusWithReceipt

An improvement over `AEGP\_RenderLayerPlus`, this function also provides an `AEGP\_RenderReceiptH` for caching purposes.

```cpp

AEGP\_RenderLayerPlusWithReceipt(

 PR\_RenderContextH render\_contextH,

 AEGP\_LayerH layerH,

 AEGP\_RenderLayerContextH layer\_contextH,

 AEGP\_RenderHints render\_hints,

 AEGP\_NumEffectsToRenderType num\_effectsS,

 AEGP\_RenderReceiptH \*receiptPH,

 AEGP\_WorldH \*bufferPH);


```

#### AEGP_DisposeRenderReceipt

Frees an `AEGP\_RenderReceiptH`.

```cpp

AEGP\_DisposeRenderReceipt(

 AEGP\_RenderReceiptH receiptH);


```

#### AEGP_CheckRenderReceipt

Checks with After Effects’ internal caching to determine whether a given `AEGP\_RenderReceiptH` is still valid.

```cpp

AEGP\_CheckRenderReceipt(

 PR\_RenderContextH current\_contextH,

 AEGP\_RenderLayerContextH current\_lyr\_ctxtH,

 AEGP\_RenderReceiptH old\_receiptH,

 A\_Boolean check\_aceB,

 AEGP\_NumEffectsToRenderType num\_effectsS,

 AEGP\_RenderReceiptStatus \*receipt\_statusP);


```

#### AEGP_GenerateRenderReceipt

Generates a `AEGP\_RenderReceiptH` for a layer as if the first `num\_effectsS` have been rendered.

```cpp

AEGP\_GenerateRenderReceipt(

 PR\_RenderContextH current\_contextH,

 AEGP\_RenderLayerContextH current\_lyr\_contextH,

 AEGP\_NumEffectsToRenderType num\_effectsS,

 AEGP\_RenderReceiptH \*render\_receiptPH);


```

#### AEGP_GetNumBinsToRender

Returns the number of bins After Effects wants the artisan to render.

```cpp

AEGP\_GetNumBinsToRender(

 const PR\_RenderContextH contextH,

 A\_long \*num\_binsPL);


```

#### AEGP_SetNthBin

Sets the given render context to be the n-th bin to be rendered by After Effects.

```cpp

AEGP\_SetNthBin(

 const PR\_RenderContextH contextH,

 A\_long n);


```

#### AEGP_GetBinType

Retrieves the type of the given bin.

```cpp

AEGP\_GetBinType(

 const PR\_RenderContextH contextH,

 AEGP\_BinType \*bin\_typeP);


```

`AEGP\_BinType` will be one of the following:

- `AEGP\_BinType\_NONE`
- `AEGP\_BinType\_2D`
- `AEGP\_BinType\_3D`

#### AEGP_GetRenderLayerToWorldXform2D3D

Retrieves the transform to correctly orient the layer being rendered with the output world.

Pass `TRUE` for `only\_2dB` to constrain the transform to two dimensions.

```cpp

AEGP\_GetRenderLayerToWorldXform2D3D(

 PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 const A\_Time \*comp\_timeP,

 A\_Boolean only\_2dB,

 A\_Matrix4 \*transformP);


```

:::tip

Functions below are for interactive artisans only.

---

#### AEGP_GetPlatformWindowRef

Retrieves the platform-specific window context into which to draw the given `PR\_RenderContextH`.

```cpp

AEGP\_GetPlatformWindowRef(

 const PR\_RenderContextH contextH,

 AEGP\_PlatformWindowRef \*window\_refP);


```

#### AEGP_GetViewportScale

Retrieves the source-to-frame downsample factor for the given `PR\_RenderContextH`.

```cpp

AEGP\_GetViewportScale(

 const PR\_RenderContextH contextH,

 A\_FpLong \*scale\_xPF,

 A\_FpLong \*scale\_yPF);


```

#### AEGP_GetViewportOrigin

Retrieves to origin of the source, within the frame (necessary to translate between the two), for the given `PR\_RenderContextH`.

```cpp

AEGP\_GetViewportOrigin(

 const PR\_RenderContextH contextH,

 A\_long \*origin\_xPL,

 A\_long \*origin\_yPL);


```

#### AEGP_GetViewportRect

Retrieves the bounding rectangle for the area to be drawn, for the given `PR\_RenderContextH`.

```cpp

AEGP\_GetViewportRect(

 const PR\_RenderContextH contextH,

 A\_LegacyRect \*v\_rectPR);


```

#### AEGP_GetFallowColor

Retrieves the color used for the fallow regions in the given `PR\_RenderContextH`.

```cpp

AEGP\_GetFallowColor(

 const PR\_RenderContextH contextH,

 PF\_Pixel8 \*fallow\_colorP);


```

#### AEGP_GetInteractiveCheckerboard

Retrieves whether or not the checkerboard is currently active for the given `PR\_RenderContextH`.

```cpp

AEGP\_GetInteractiveCheckerboard(

 const PR\_RenderContextH contextH,

 A\_Boolean \*cboard\_onPB);


```

#### AEGP_GetInteractiveCheckerboardColors

Retrieves the colors used in the checkerboard.

```cpp

AEGP\_GetInteractiveCheckerboardColors(

 const PR\_RenderContextH contextH,

 PF\_Pixel \*color1P,

 PF\_Pixel \*color2P);


```

#### AEGP_GetInteractiveCheckerboardSize

Retrieves the width and height of one checkerboard square.

```cpp

AEGP\_GetInteractiveCheckerboardSize(

 const PR\_RenderContextH contextH,

 A\_u\_long \*cbd\_widthPLu,

 A\_u\_long \*cbd\_heightPLu);


```

#### AEGP_GetInteractiveCachedBuffer

Retrieves the cached AEGP_WorldH last used for the `PR\_RenderContextH`.

```cpp

AEGP\_GetInteractiveCachedBuffer(

 const PR\_RenderContextH contextH,

 AEGP\_WorldH \*buffer);


```

#### AEGP_ArtisanMustRenderAsLayer

Determines whether or not the artisan must render the current `AEGP\_RenderLayerContextH` as a layer.

```cpp

AEGP\_ArtisanMustRenderAsLayer(

 const PR\_RenderContextH contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 A\_Boolean \*use\_txturePB);


```

#### AEGP_GetInteractiveDisplayChannel

Returns which channels should be displayed by the interactive artisan.

```cpp

AEGP\_GetInteractiveDisplayChannel(

 const PR\_RenderContextH contextH,

 AEGP\_DisplayChannelType \*channelP);


```

`AEGP\_DisplayChannelType` will be one of the following:

- `AEGP\_DisplayChannel\_NONE`
- `AEGP\_DisplayChannel\_RED`
- `AEGP\_DisplayChannel\_GREEN`
- `AEGP\_DisplayChannel\_BLUE`
- `AEGP\_DisplayChannel\_ALPHA`
- `AEGP\_DisplayChannel\_RED\_ALT`
- `AEGP\_DisplayChannel\_GREEN\_ALT`
- `AEGP\_DisplayChannel\_BLUE\_ALT`
- `AEGP\_DisplayChannel\_ALPHA\_ALT`

#### AEGP_GetInteractiveExposure

Returns the exposure for the given `PR\_RenderContextH`, expressed as a floating point number.

```cpp

AEGP\_GetInteractiveExposure(

 const PR\_RenderContextH rcH,

 A\_FpLong \*exposurePF);


```

#### AEGP_GetColorTransform

Returns the color transform for the given `PR\_RenderContextH`.

```cpp

AEGP\_GetColorTransform)(

 const PR\_RenderContextH render\_contextH,

 A\_Boolean \*cms\_onB,

 A\_u\_long \*xform\_keyLu,

 void \*xformP);


```

#### AEGP_GetCompShutterTime

Returns the shutter angle for the given `PR\_RenderContextH`.

```cpp

AEGP\_GetCompShutterTime)(

 PR\_RenderContextH render\_contextH,

 A\_Time \*shutter\_time,

 A\_Time \*shutter\_dur);


```

#### AEGP_MapCompToLayerTime

New in CC. Unlike [AEGP_ConvertCompToLayerTime](../aegps/aegp-suites.html#aegps-aegp-suites-aegp-layersuite), this handles time remapping with collapsed or nested comps.

```cpp

AEGP\_MapCompToLayerTime(

 PR\_RenderContextH render\_contextH,

 AEGP\_RenderLayerContextH layer\_contextH,

 const A\_Time \*comp\_timePT,

 A\_Time \*layer\_timePT);


```

---

## Convert Between Different Contexts[¶](#convert-between-different-contexts "Permalink to this headline")

Convert between render and instance contexts, and manage global data specific to the artisan.

### AEGP_ArtisanUtilSuite1[¶](#aegp-artisanutilsuite1 "Permalink to this headline")

---

#### AEGP_GetGlobalContextFromInstanceContext

Given an instance context, returns a handle to the global context.

```cpp

AEGP\_GetGlobalContextFromInstanceContext(

 const PR\_InstanceContextH instance\_contextH,

 PR\_GlobalContextH \*global\_contextPH);


```

#### AEGP_GetInstanceContextFromRenderContext

Given the render context, returns a handle to the instance context.

```cpp

AEGP\_GetInstanceContextFromRenderContext(

 const PR\_RenderContextH render\_contextH,

 PR\_InstanceContextH \*instnc\_ctextPH);


```

#### AEGP_GetInstanceContextFromQueryContext

Given a query context, returns a handle to the instance context.

```cpp

AEGP\_GetInstanceContextFromQueryContext(

 const PR\_QueryContextH query\_contextH,

 PR\_InstanceContextH \*instnce\_contextPH);


```

#### AEGP_GetGlobalData

Given the global context, returns a handle to global data.

```cpp

AEGP\_GetGlobalData(

 const PR\_GlobalContextH global\_contextH,

 PR\_GlobalDataH \*global\_dataPH);


```

#### AEGP_GetInstanceData

Given an instance context, return the associated instance data.

```cpp

AEGP\_GetInstanceData(

 const PR\_InstanceContextH instance\_contextH,

 PR\_InstanceDataH \*instance\_dataPH);


```

#### AEGP_GetRenderData

Given a render context, returns the associated render data.

```cpp

AEGP\_GetRenderData(

 const PR\_RenderContextH render\_contextH,

 PR\_RenderDataH \*render\_dataPH);


```

---

## Smile! Cameras[¶](#smile-cameras "Permalink to this headline")

Obtains the camera geometry, including camera properties (type, lens, depth of field, focal distance, aperture, et cetera).

### AEGP_CameraSuite2[¶](#aegp-camerasuite2 "Permalink to this headline")

---

#### AEGP_GetCamera

Given a layer handle and time, returns the current camera layer handle.

```cpp

AEGP\_GetCamera(

 PR\_RenderContextH render\_contextH,

 const A\_Time \*comp\_timeP,

 AEGP\_LayerH \*camera\_layerPH);


```

#### AEGP_GetCameraType

Given a layer, returns the camera type of the layer.

```cpp

AEGP\_GetCameraType(

 AEGP\_LayerH aegp\_layerH,

 AEGP\_CameraType \*camera\_typeP;


```

The camera type can be the following:

- `AEGP\_CameraType\_NONE = -1`
- `AEGP\_CameraType\_PERSPECTIVE`
- `AEGP\_CameraType\_ORTHOGRAPHIC`

#### AEGP_GetDefaultCameraDistanceToImagePlane

Given a composition handle, returns the camera distance to the image plane.

```cpp

AEGP\_GetDefaultCamera DistanceToImagePlane(

 AEGP\_CompH compH,

 A\_FpLong \*dist\_to\_planePF)


```

#### AEGP_GetCameraFilmSize

Retrieves the size (and units used to measure that size) of the film used by the designated camera.

```cpp

AEGP\_GetCameraFilmSize(

 AEGP\_LayerH camera\_layerH,

 AEGP\_FilmSizeUnits \*film\_size\_unitsP,

 A\_FpLong \*film\_sizePF0);


```

#### AEGP_SetCameraFilmSize

Sets the size (and unites used to measure that size) of the film used by the designated camera.

```cpp

AEGP\_SetCameraFilmSize)(

 AEGP\_LayerH camera\_layerH,

 AEGP\_FilmSizeUnits film\_size\_units,

 A\_FpLong \*film\_sizePF0);


```

---

## :::tips Regarding Camera Behavior[¶](#notes-regarding-camera-behavior "Permalink to this headline")

Camera orientation is in composition coordinates, and the rotations are in layer (the camera’s layer) coordinates.

If the camera layer has a parent, the position is in a coordinate space relative to the parent.

---

## Orthographic Camera Matrix[¶](#orthographic-camera-matrix "Permalink to this headline")

Internally, we use composition width and height to set the matrix described by the OpenGL specification as

```cpp

glOrtho(-width/2, width/2, -height/2, height/2, -1, 100);


```

The orthographic matrix describes the projection. The position of the camera is described by another, scaled matrix. The inverse of the camera position matrix provides the “eye” coordinates.

---

## Focus On Focal[¶](#focus-on-focal "Permalink to this headline")

Remember, focal length affects field of view; focal distance only affects depth of field.

---

## Film Size[¶](#film-size "Permalink to this headline")

In the real world, film size is measured in millimeters. In After Effects, it’s measured in pixels. Multiply by 72 and divide by 25.4 to move from millimeters to pixels.

Field of view is more complex;

ϴ = 1/2 field of view

tan(ϴ) = 1/2 composition height / focal length

focal length = 2 tan(ϴ) / composition height

---

## Hit The Lights![¶](#hit-the-lights "Permalink to this headline")

Get and set the type of lights in a composition.

### AEGP_LightSuite2[¶](#aegp-lightsuite2 "Permalink to this headline")

---

#### AEGP_GetLightType

Retrieves the `AEGP\_LightType` of the specified camera layer.

```cpp

AEGP\_GetLightType(

 AEGP\_LayerH light\_layerH,

 AEGP\_LightType \*light\_typeP);


```

`AEGP\_LightType` will be one of the following:

- `AEGP\_LightType\_PARALLEL`
- `AEGP\_LightType\_SPOT`
- `AEGP\_LightType\_POINT`
- `AEGP\_LightType\_AMBIENT`

#### AEGP_SetLightType

Sets the `AEGP\_LightType` for the specified camera layer.

```cpp

AEGP\_SetLightType(

 AEGP\_LayerH light\_layerH,

 AEGP\_LightType light\_type);


```

### :::tips On Light Behavior[¶](#notes-on-light-behavior "Permalink to this headline")

The formula for parallel lights is found in Foley and Van Dam’s “Introduction to Computer Graphics” (ISBN 0-201-60921-5) as is the formula for point lights.

We use the half angle variant proposed by Jim Blinn instead.

Suppose we have a point on a layer and want to shade it with the light.

Let V be the unit vector from the layer point to the eye point.

Let L be the unit vector to the light (in the parallel light case this is constant). Let H be (V+L)/2 (normalized).

Let N be the unit normal vector to the layer.

The amount of specular reflected light is S \* power(H Dot N, shine), where S is the specular coefficient.

---

## How Should I Draw That?[¶](#how-should-i-draw-that "Permalink to this headline")

After Effects relies upon Artisans to draw 3D layer handles. If your Artisan chooses not to respond to this call, the default Artisan will draw 3D layer handles for you. Querying transforms is important for optimization of After Effects’ caching.

The coordinate system is positive x to right, positive y down, positive z into the screen. The origin is the upper left corner. Rotations are x then y then z. For matrices the translate is the bottom row, orientations are quaternions (which are applied first), then any x-y-z rotation after that. As a general rule, use orientation or rotation but not both. Also use rotations if you need control over angular velocity.

---

## Query Transform Functions[¶](#query-transform-functions "Permalink to this headline")

These functions give artisans information about the transforms they’ll need in order to correctly place layers within a composition and respond appropriately to the various queries After Effects will send to their `PR\_QueryFunc` entry point function.

As that entry point is optional, so is your artisan’s response to the queries; however, if you don’t, your users may be disappointed that (while doing interactive preview drawing) all the camera and light indicators vanish, until they stop moving! Artisans are complex beasts; contact us if you have any questions.

### AEGP_QueryXFormSuite2[¶](#aegp-queryxformsuite2 "Permalink to this headline")

---

#### AEGP_QueryXformGetSrcType

Given a query context, returns trasnsform source currently being modified.

```cpp

AEGP\_QueryXformGetSrcType(

 PR\_QueryContextH query\_contextH,

 AEGP\_QueryXformType \*src\_type);


```

The query context will be one of the following:

- `AEGP\_Query\_Xform\_LAYER`,
- `AEGP\_Query\_Xform\_WORLD`,
- `AEGP\_Query\_Xform\_VIEW`,
- `AEGP\_Query\_Xform\_SCREEN`

#### AEGP_QueryXformGetDstType

Given a query context, returns the currently requested transform destination.

```cpp

AEGP\_QueryXformGetDstType(

 PR\_QueryContextH query\_contextH,

 AEGP\_QueryXformType \*dst\_type);


```

#### AEGP_QueryXformGetLayer

Used if the source or destination type is a layer. Given a query context, returns the layer handle.

```cpp

AEGP\_QueryXformGetLayer(

 PR\_QueryContextH query\_contextH,

 AEGP\_LayerH \*layerPH);


```

#### AEGP_QueryXformGetComp

Given a query context, returns the current composition handle.

```cpp

AEGP\_QueryXformGetComp(

 PR\_QueryContextH query\_contextH,

 AEGP\_CompH \*compPH);


```

#### AEGP_QueryXformGetTransformTime

Given a query context, returns the time of the transformation.

```cpp

AEGP\_QueryXformGetTransformTime(

 PR\_QueryContextH query\_contextH,

 A\_Time \*time);


```

#### AEGP_QueryXformGetViewTime

Given a query context, returns the time of the associated view.

```cpp

AEGP\_QueryXformGetViewTime(

 PR\_QueryContextH query\_contextH,

 A\_Time \*time);


```

#### AEGP_QueryXformGetCamera

Given a query context, returns the current camera layer handle.

```cpp

AEGP\_QueryXformGetCamera(

 PR\_QueryContextH query\_contextH,

 AEGP\_LayerH \*camera\_layerPH);


```

#### AEGP_QueryXformGetXform

Given a query context, returns the current matrix transform.

```cpp

AEGP\_QueryXformGetXform(

 PR\_QueryContextH query\_contextH,

 A\_Matrix4 \*xform);


```

#### AEGP_QueryXformSetXform

Given a query context, return the matrix transform you compute in `xform`.

```cpp

AEGP\_QueryXformSetXform(

 PR\_QueryContextH query\_contextH,

 A\_Matrix4 \*xform);


```

#### AEGP_QueryWindowRef

Sets the window reference to be used (by After Effects) for the given `PR\_QueryContextH`.

```cpp

AEGP\_QueryWindowRef(

 PR\_QueryContextH q\_contextH,

 AEGP\_PlatformWindowRef \*window\_refP);


```

#### AEGP_QueryWindowClear

Returns which `AEGP\_PlatformWindowRef` (and `A\_Rect`) to clear, for the given `PR\_QueryContextH`.

```cpp

AEGP\_QueryWindowClear(

 PR\_QueryContextH q\_contextH,

 AEGP\_PlatformWindowRef \*window\_refP,

 A\_LegacyRect \*boundsPR);


```

#### AEGP_QueryFrozenProxy

Returns whether or not the textures used in the given `PR\_QueryContextH` should be frozen.

```cpp

AEGP\_QueryFrozenProxy(

 PR\_QueryContextH q\_contextH,

 A\_Boolean \*onPB);


```

#### AEGP_QuerySwapBuffer

Sent after rendering and camera/light handle drawing is complete; After Effects returns the buffer into which the artisan should draw its output.

```cpp

AEGP\_QuerySwapBuffer(

 PR\_QueryContextH q\_contextH,

 AEGP\_PlatformWindowRef \*window\_refP,

 AEGP\_WorldH \*dest\_bufferp);


```

#### AEGP_QueryDrawProcs

Sets the interactive drawing functions After Effects will call while drawing camera and lighting handles into the artisan’s provided context.

```cpp

AEGP\_QueryDrawProcs(

 PR\_QueryContextH query\_contextH,

 PR\_InteractiveDrawProcs \*window\_refP);


```

#### AEGP_QueryPrepareForLineDrawing

Informs After Effects about the context into which it will be drawing.

```cpp

AEGP\_QueryPrepareForLineDrawing(

 PR\_QueryContextH query\_contextH,

 AEGP\_PlatformWindowRef \*window\_refP,

 A\_LegacyRect \*viewportP,

 A\_LPoint \*originP,

 A\_FloatPoint \*scaleP);


```

#### AEGP_QueryUnprepareForLineDrawing

As far as After Effects is concerned, the artisan is done drawing lines.

```cpp

AEGP\_QueryUnprepareForLineDrawing(

 PR\_QueryContextH query\_contextH,

 AEGP\_PlatformWindowRef \*window\_refP);


```

---

## Interactive Drawing Functions[¶](#interactive-drawing-functions "Permalink to this headline")

We’ve added the ability for artisans to provide functions After Effects can use to do basic drawing functions for updating the comp window display during preview, including camera, light, and wireframe preview modeling.

### PR_InteractiveDrawProcs[¶](#pr-interactivedrawprocs "Permalink to this headline")

---

#### PR_Draw_MoveToFunc

```cpp

PR\_Draw\_MoveToFunc(

 short x,

 short y);


```

#### PR_Draw_LineToFunc

```cpp

PR\_Draw\_LineToFunc(

 short x,

 short y);


```

#### PR_Draw_ForeColorFunc

```cpp

PR\_Draw\_ForeColorFunc(

 const A\_Color \*fore\_colo


```

#### PR_Draw_FrameRectFunc

```cpp

PR\_Draw\_FrameRectFunc(

 const A\_Rect \*rectPR );


```

#### PR_Draw_PaintRectFunc

```cpp

PR\_Draw\_PaintRectFunc(

 const A\_Rect \*rectPR );


```

---

## Notes On Query Time Functions[¶](#notes-on-query-time-functions "Permalink to this headline")

`AEGP\_QueryXformGetTransformTime()` and `AEGP\_QueryXformGetViewTime()` are both necessary for an artisan to build a representation of the scene to render.

`AEGP\_QueryXformGetTransformTime()` gets the time of the transform, which is then passed to `AEGP\_GetCompShutterFrameRange()` from [AEGP_CompSuite11](../aegps/aegp-suites.html#aegps-aegp-suites-aegp-compsuite).

`AEGP\_QueryXformGetViewTime()` gets the time of the view, which is used in calling `AEGP\_GetLayerToWorldXformFromView()` from [AEGP_LayerSuite8](../aegps/aegp-suites.html#aegps-aegp-suites-aegp-layersuite).
