---
title: Data Types
order: 4
category:
  - AE 插件开发
---

# Data Types

Whenever possible, After Effects presents plug-ins with opaque data types, and provides accessor functions for manipulating them. For example, video frames are represented using the opaque AEGP_WorldH. While in some cases it might be more efficient to simply modify the underlying structure, by maintaining the opaqueness of the data types we allow for changes to our implementation without making you recompile (and redistribute) your plug-ins.

---

## AEGP API Data Types

| **Type**          | **Describes**                                                                                            | **Manage Using** |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ---------------- |
| `AEGP\_MemHandle` | This structure contains more than just the referenced memory. So it should not be dereferenced directly. |

Use `AEGP\_LockMemHandle` in the AEGP Memory Suite to get a pointer to the memory referenced by the `AEGP\_MemHandle`.
And of course, unlock it when you’re done. | [AEGP Memory Suite](aegp-suites.html) (#aegps-aegp-suites-memory-suite) |
| `AEGP\_ProjectH` | The current After Effects project. Projects are a set of elements arranged hierarchically in a tree to preserve semantic relationships.
Interior nodes of the tree are folders.
As of CS6, there will only ever be one open project. | [AEGP Project Suite](aegp-suites.html) (#aegps-aegp-suites-project-suite) |
| `AEGP\_ItemH` | An abstraction describing any element of a project, including folders. An item is anything that can be selected.
Since multiple object types can be selected, we treat them as AEGP_ItemHs until more specificity is required. | [AEGP Item Suite](aegp-suites.html) (#aegps-aegp-suites-item-suite) |
| `AEGP\_Collection2H` | A set of selected items. | [AEGP Collection Suite](aegp-suites.html) (#aegps-aegp-suites-collection-suite) |
| `AEGP\_CompH` | A composition is a sequence of renderable items that, together, produce output.
A composition exists over a time interval.
Multiple compositions can exist within one project. | [AEGP Composition Suite](aegp-suites.html) (#aegps-aegp-suites-composition-suite) |
| `AEGP\_FootageH` | An item that can be rendered. Folders and compositions are the only items that are not footage. | [AEGP Footage Suite](aegp-suites.html) (#aegps-aegp-suites-footage-suite) |
| `AEGP\_LayerH` | An element of a composition. Layers are rendered in sequence, which allows for occlusions.
Solids, text, paint, cameras, lights, images, and image sequences are all represented as layers.
Layers may be defined over sub-intervals of the composition’s time interval. | [AEGP Layer Suite](aegp-suites.html) (#aegps-aegp-suites-layer-suite) |
| `AEGP\_WorldH` | A frame of pixels. | [AEGP World Suite](aegp-suites.html) (#aegps-aegp-suites-world-suite) |
| `AEGP\_EffectRefH` | An effect applied to a layer. An effect is a function that takes as its argument a layer (and possibly other parameters)
and returns an altered version of the layer for rendering. | [AEGP Effect Suite](aegp-suites.html) (#aegps-aegp-suites-effect-suite) |
| `AEGP\_StreamRefH` | Any [parameter stream](aegp-suites.html) (#aegps-aegp-suites-diving-into-streams) attached to a layer, in a composition.
See the description of `AEGP\_GetNewLayerStream` from [AEGP_StreamSuite5](aegp-suites.html) (#aegps-aegp-suites-aegp-streamsuite) for a full list of stream types. | [AEGP Stream Suite](aegp-suites.html) (#aegps-aegp-suites-stream-suite),
[AEGP Dynamic Stream Suite](aegp-suites.html) (#aegps-aegp-suites-dynamic-stream-suite)
[AEGP Keyframe Suite](aegp-suites.html) (#aegps-aegp-suites-keyframe-suite) |
| `AEGP\_MaskRefH` | A mask applied to a layer. An AEGP_MaskRefH is used to access details about the mask stream, not the specific points which constitute the mask.
A mask is a rasterized path (sequence of vertices) that partitions a layer into two pieces, allowing each to be rendered differently. | [AEGP Mask Suite](aegp-suites.html) (#aegps-aegp-suites-mask-suite) |
| `AEGP\_MaskOutlineValH` | The specific points which constitute the mask.
The points in a mask outline are ordered, and the mask need not be closed. | [AEGP Mask Outline Suite](aegp-suites.html) (#aegps-aegp-suites-mask-outline-suite) |
| `AEGP\_TextDocumentH` | Represents the actual text associated with a text layer. | [AEGP Text Document Suite](aegp-suites.html) (#aegps-aegp-suites-text-document-suite) |
| `AEGP\_TextOutlinesH` | A reference to all the paths that make up the outlines of a given text layer. | [AEGP Text Layer Suite](aegp-suites.html) (#aegps-aegp-suites-text-layer-suite) |
| `AEGP\_MarkerVal` | The data associated with a given timeline marker. | [AEGP Marker Suite](aegp-suites.html) (#aegps-aegp-suites-marker-suite) |
| `AEGP\_PersistentBlobH` | A “blob” of data containing the current preferences. | [AEGP Persistent Data Suite](aegp-suites.html) (#aegps-aegp-suites-persistent-data-suite) |
| `AEGP\_RenderOptionsH` | The settings associated with a render request. | [AEGP Render Options Suite](aegp-suites.html) (#aegps-aegp-suites-render-options-suite) |
| `AEGP\_LayerRenderOptionsH` | The settings associated with a layer render request. | [AEGP Layer Render Options Suite](aegp-suites.html) (#aegps-aegp-suites-aegp-layerrenderoptionssuite) |
| `AEGP\_FrameReceiptH` | A reference to a rendered frame. | [AEGP Render Suite](aegp-suites.html) (#aegps-aegp-suites-render-suite) |
| `AEGP\_RQItemRefH` | An item in the render queue. | [AEGP Render Queue Suite](aegp-suites.html) (#aegps-aegp-suites-render-queue-suite)
[AEGP Render Queue Item Suite](aegp-suites.html) (#aegps-aegp-suites-render-queue-item-suite) |
| `AEGP\_OutputModuleRefH` | An output module, attached to a specific AEGP_RQItemRef in the render queue. | [AEGP Output Module Suite](aegp-suites.html) (#aegps-aegp-suites-output-module-suite) |
| `AEGP\_SoundDataH` | The [audio settings](aegp-suites.html) (#aegps-aegp-suites-sound-data-suite) used for a given layer. | [AEGP Sound Data Suite](aegp-suites.html) (#aegps-aegp-suites-sound-data-suite) |
| `AEGP\_RenderLayerContextH` | State information at the time of a render request, sent to an Artisan by After Effects. | [AEGP Canvas Suite](../artisans/artisan-data-types.html) (#artisans-artisan-data-types-aegp-canvassuite) |
| `AEGP\_RenderReceiptH` | Used by Artisans when rendering. | [AEGP Canvas Suite](../artisans/artisan-data-types.html) (#artisans-artisan-data-types-aegp-canvassuite) |

---

## Nasty, Brutish, and Short

Information about layers, streams, and many other items doesn’t survive long; it’s often invalidated by user activity.

Anything that modifies the quantity (not quality) of items will invalidate references to those items; adding a keyframe to a stream invalidates references to that stream, but forcing a layer to be rendered doesn’t invalidate references to it. Do not cache layer pixels.

Caching references between calls to a specific hook function within your plug-in is not recommended; acquire information when you need it, and forget (release) it as soon as possible.

---

## Were You Just Going To Leave That Data Lying Around?

When you ask After Effects to populate and return handles to data structures, it’s important that you clean up after yourself. For the following data types, you must call the appropriate disposal routines.

---

## Data Types Requiring Disposal

| **Data Type**                                                                                                                                                                                | **Disposal function**                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `AEGP\_Collection2H`                                                                                                                                                                         | `AEGP\_DisposeCollection`, from [AEGP_CollectionSuite2](aegp-suites.html) (#aegps-aegp-suites-aegp-collectionsuite)                         |
| `AEGP\_FootageH`                                                                                                                                                                             | `AEGP\_DisposeFootage`, from [AEGP_FootageSuite5](aegp-suites.html) (#aegps-aegp-suites-aegp-footagesuite)                                  |
| `AEGP\_WorldH`                                                                                                                                                                               | `AEGP\_Dispose`, from [AEGP_WorldSuite3](aegp-suites.html) (#aegps-aegp-suites-aegp-worldsuite)                                             |
| Or `AEGP\_DisposeTexture`, from [AEGP_CanvasSuite8](../artisans/artisan-data-types.html) (#artisans-artisan-data-types-aegp-canvassuite), if layer texture created using `AEGP\_RenderTexture`) |
| `AEGP\_EffectRefH`                                                                                                                                                                           | `AEGP\_DisposeEffect`, from [AEGP_EffectSuite4](aegp-suites.html) (#aegps-aegp-suites-aegp-effectsuite)                                     |
| `AEGP\_MaskRefH`                                                                                                                                                                             | `AEGP\_DisposeMask`, from [AEGP_MaskSuite6](aegp-suites.html) (#aegps-aegp-suites-aegp-masksuite)                                           |
| `AEGP\_RenderOptionsH`                                                                                                                                                                       | `AEGP\_Dispose`, from [AEGP_RenderQueueMonitorSuite1](aegp-suites.html) (#aegps-aegp-suites-aegp-renderqueuemonitorsuite)                   |
| `AEGP\_LayerRenderOptionsH`                                                                                                                                                                  | `AEGP\_Dispose`, from [AEGP_LayerRenderOptionsSuite1](aegp-suites.html) (#aegps-aegp-suites-aegp-layerrenderoptionssuite)                   |
| `AEGP\_RenderReceiptH`                                                                                                                                                                       | `AEGP\_DisposeRenderReceipt`, from [AEGP_CanvasSuite8](../artisans/artisan-data-types.html) (#artisans-artisan-data-types-aegp-canvassuite) |
