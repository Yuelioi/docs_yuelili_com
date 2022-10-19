---
title: Data Types
order: 4
category:
  - AE 插件开发
---

# Data Types

只要有可能，After Effects 就会为插件提供不透明的数据类型，并提供操作这些数据的访问函数。例如，视频帧用不透明的 AEGP_WorldH 表示。虽然在某些情况下，简单地修改底层结构可能更有效，但通过保持数据类型的不透明性，我们允许改变我们的实现，而不会让你重新编译(和重新发布)你的插件。

## AEGP API Data Types

| **Type**                   | **Describes**                                                                                                                                                                                                                                                                                                                                                          | **Manage Using**                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AEGP_MemHandle`           | This structure contains more than just the referenced memory. So it should not be dereferenced directly. Use AEGP_LockMemHandle ` in the AEGP Memory Suite to get a pointer to the memory referenced by the AEGP_MemHandle`. And of course, unlock it when you’re done.                                                                                                | [AEGP Memory Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                    |
| `AEGP_ProjectH`            | The current After Effects project. Projects are a set of elements arranged hierarchically in a tree to preserve semantic relationships. Interior nodes of the tree are folders. As of CS6, there will only ever be one open project.                                                                                                                                   | [AEGP Project Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                  |
| `AEGP_ItemH`               | An abstraction describing any element of a project, including folders. An item is anything that can be selected. Since multiple object types can be selected, we treat them as AEGP_ItemHs until more specificity is required.                                                                                                                                         | [AEGP Item Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                        |
| `AEGP_Collection2H`        | A set of selected items.                                                                                                                                                                                                                                                                                                                                               | [AEGP Collection Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                            |
| `AEGP_CompH`               | A composition is a sequence of renderable items that, together, produce output. A composition exists over a time interval. Multiple compositions can exist within one project.                                                                                                                                                                                         | [AEGP Composition Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                          |
| `AEGP_FootageH`            | An item that can be rendered. Folders and compositions are the only items that are not footage.                                                                                                                                                                                                                                                                        | [AEGP Footage Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                  |
| `AEGP_LayerH`              | An element of a composition. Layers are rendered in sequence, which allows for occlusions. Solids, text, paint, cameras, lights, images, and image sequences are all represented as layers.Layers may be defined over sub-intervals of the composition’s time interval.                                                                                                | [AEGP Layer Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                      |
| `AEGP_WorldH`              | A frame of pixels.                                                                                                                                                                                                                                                                                                                                                     | [AEGP World Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                      |
| `AEGP_EffectRefH`          | An effect applied to a layer. An effect is a function that takes as its argument a layer (and possibly other parameters) and returns an altered version of the layer for rendering.                                                                                                                                                                                    | [AEGP Effect Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                    |
| `AEGP_StreamRefH`          | Any[parameter stream](../aegps/aegp-suites.html) attached to a layer, in a composition. See the description of AEGP_GetNewLayerStream` from [AEGP_StreamSuite5](../aegps/aegp-suites.html) for a full list of stream types. | [AEGP Stream Suite](../aegps/aegp-suites.html), [AEGP Dynamic Stream Suite](../aegps/aegp-suites.html) [AEGP Keyframe Suite](../aegps/aegp-suites.html) |
| `AEGP_MaskRefH`            | A mask applied to a layer. An AEGP_MaskRefH is used to access details about the mask stream, not the specific points which constitute the mask. A mask is a rasterized path (sequence of vertices) that partitions a layer into two pieces, allowing each to be rendered differently.                                                                                  | [AEGP Mask Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                        |
| `AEGP_MaskOutlineValH`     | The specific points which constitute the mask. The points in a mask outline are ordered, and the mask need not be closed.                                                                                                                                                                                                                                              | [AEGP Mask Outline Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                        |
| `AEGP_TextDocumentH`       | Represents the actual text associated with a text layer.                                                                                                                                                                                                                                                                                                               | [AEGP Text Document Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                      |
| `AEGP_TextOutlinesH`       | A reference to all the paths that make up the outlines of a given text layer.                                                                                                                                                                                                                                                                                          | [AEGP Text Layer Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                            |
| `AEGP_MarkerVal`           | The data associated with a given timeline marker.                                                                                                                                                                                                                                                                                                                      | [AEGP Marker Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                    |
| `AEGP_PersistentBlobH`     | A “blob” of data containing the current preferences.                                                                                                                                                                                                                                                                                                                   | [AEGP Persistent Data Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                  |
| `AEGP_RenderOptionsH`      | The settings associated with a render request.                                                                                                                                                                                                                                                                                                                         | [AEGP Render Options Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                    |
| `AEGP_LayerRenderOptionsH` | The settings associated with a layer render request.                                                                                                                                                                                                                                                                                                                   | [AEGP Layer Render Options Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                      |
| `AEGP_FrameReceiptH`       | A reference to a rendered frame.                                                                                                                                                                                                                                                                                                                                       | [AEGP Render Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                                    |
| `AEGP_RQItemRefH`          | An item in the render queue.                                                                                                                                                                                                                                                                                                                                           | [AEGP Render Queue Suite](../aegps/aegp-suites.html) [AEGP Render Queue Item Suite](../aegps/aegp-suites.html)                                                                                                   |
| `AEGP_OutputModuleRefH`    | An output module, attached to a specific AEGP_RQItemRef in the render queue.                                                                                                                                                                                                                                                                                           | [AEGP Output Module Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                      |
| `AEGP_SoundDataH`          | The[audio settings](../aegps/aegp-suites.html) used for a given layer.                                                                                                                                                                                                                             | [AEGP Sound Data Suite](../aegps/aegp-suites.html)                                                                                                                                                                                                                                            |
| `AEGP_RenderLayerContextH` | State information at the time of a render request, sent to an Artisan by After Effects.                                                                                                                                                                                                                                                                                | [AEGP Canvas Suite](../artisans/artisan-data-types.html)                                                                                                                                                                                                                            |
| `AEGP_RenderReceiptH`      | Used by Artisans when rendering.                                                                                                                                                                                                                                                                                                                                       | [AEGP Canvas Suite](../artisans/artisan-data-types.html)                                                                                                                                                                                                                            |

## Nasty, Brutish, and Short

关于层、流和许多其他项目的信息不会存活很久；它经常被用户活动所废止。

任何修改项目数量(而不是质量)的行为都会使对这些项目的引用失效；向流添加关键帧会使对该流的引用失效，但强制渲染一个图层并不会使对它的引用失效。不要缓存图层像素。

不建议在调用插件中的特定钩子函数之间缓存引用；当你需要时获取信息，并尽快忘记(释放)它。

## Were You Just Going To Leave That Data Lying Around?

当你要求 After Effects 填充和返回数据结构的句柄时，重要的是你要自己清理。对于以下数据类型，你必须调用相应的处理程序。

## Data Types Requiring Disposal

| **Data Type**              | **Disposal function**                                                                                                                                                                                                                                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AEGP_Collection2H`        | AEGP_DisposeCollection`, from[AEGP_CollectionSuite2](../aegps/aegp-suites.html)                                                                                                                                                                                                        |
| `AEGP_FootageH`            | AEGP_DisposeFootage`, from[AEGP_FootageSuite5](../aegps/aegp-suites.html)                                                                                                                                                                                                                 |
| `AEGP_WorldH`              | AEGP_Dispose `, from [AEGP_WorldSuite3](../aegps/aegp-suites.html)Or AEGP_DisposeTexture`, from [AEGP_CanvasSuite8](../artisans/artisan-data-types.html), if layer texture created using AEGP_RenderTexture`) |
| `AEGP_EffectRefH`          | AEGP_DisposeEffect`, from[AEGP_EffectSuite4](../aegps/aegp-suites.html)                                                                                                                                                                                                                    |
| `AEGP_MaskRefH`            | AEGP_DisposeMask`, from[AEGP_MaskSuite6](../aegps/aegp-suites.html)                                                                                                                                                                                                                          |
| `AEGP_RenderOptionsH`      | AEGP_Dispose`, from[AEGP_RenderQueueMonitorSuite1](../aegps/aegp-suites.html)                                                                                                                                                                                                  |
| `AEGP_LayerRenderOptionsH` | AEGP_Dispose`, from[AEGP_LayerRenderOptionsSuite1](../aegps/aegp-suites.html)                                                                                                                                                                                                  |
| `AEGP_RenderReceiptH`      | AEGP_DisposeRenderReceipt`, from[AEGP_CanvasSuite8](../artisans/artisan-data-types.html)                                                                                                                                                                                         |