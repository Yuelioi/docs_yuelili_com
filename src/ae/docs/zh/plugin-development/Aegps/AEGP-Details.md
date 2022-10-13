---
title: AEGP Details
order: 8
category:
  - AE 插件开发
---
# AEGP Details

## Have A Cookie

在After Effects必须保留关于你的AEGP调用的函数状态信息的情况下（如当一个Artisan正在渲染一个帧，或者一个keyframer正在从同一个流中添加和删除一系列关键帧），你将调用begin()和end()函数。

通常，begin函数将返回一个不透明的标识符，或 "cookie"，然后你必须将其传递给正在使用的函数。end函数将正确地处理这个cookie。参见 `AEGP_StartAddKeyframes()` [AEGP_KeyframeSuite3](aegp-suites.html)。

## Modifying Items In The Render Queue

如果你调用 `AEGP_AddCompToRenderQueue` ( 参见[AEGP_RenderQueueSuite1](aegp-suites.html) ），或者如果用户手动从渲染队列中添加或删除一个合成，所有对渲染队列项目的引用都会被废止。同样地，添加或删除输出模块也会使每个渲染队列项目的任何此类引用失效。

## Names And Solids

固态层在After Effects UI中是有名字的，但在它们的 "PF_LayerDef"[PF_EffectWorld / PF_LayerDef](.../effect-basics/PF_EffectWorld.html) 中没有。因此，它们的名字不能被 `AEGP_GetItemName `(in [AEGP_ItemSuite9](aegp-suites.html) ) 或 `AEGP_GetLayerName`(in [AEGP_LayerSuite8](aegp-suites.html)  检索出来。）

然而，你可以使用与它们相关的ItemH来 `AEGP_GetItemName` ( 参见[AEGP_ItemSuite9](aegp-suites.html) ）。

## Reporting Errors And Problems

使用 `AEGP_ItemSuite>AEGP_ReportInfo()`来向用户报告信息，并识别你的插件。AEIO插件使用他们被传递的AEIO_BasicData中包含的msg_func指针来代替（与每个函数一起）。

## Transforms: What Happens First?

After Effects根据自动定向（朝向路径或兴趣点）计算旋转，然后计算定向，再计算X、Y、Z旋转。

## Accessing Pixels From Effect Layer Parameters

使用 `AEGP_GetNewStreamValue`(in [AEGP_StreamSuite5](aegp-suites.html) )来获取图层的 `layer_id`，然后使用新的 `AEGP_GetLayerFromLayerID`(in [AEGP_LayerSuite8](aegp-suites. html）（#aegps-aegp-suites-aegp-layersuite））来获得`AEGP_LayerH'。
