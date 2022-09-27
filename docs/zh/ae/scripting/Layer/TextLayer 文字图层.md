---
title: TextLayer 文字图层
order: 8
category:
  - AE
---
    # TextLayer object #

app.project.item(index).layer(index)

描述：TextLayer对象表示合成中的文字图层。使用LayerCollection.addText()方法创建。可以通过索引或名称在项目的图层集中对其进行访问。

父级关系：TextLayer是AVLayer的子类，AVLayer是Layer的子类。使用TextLayer时，AVLayer和Layer的所有方法和属性均可用。

## AE属性 #

TextLayer没有定义其他属性，除了从AVLayer继承的属性外，还具有以下AE属性和属性组：

|脚本名 | 中文介绍 |  ||
|---|---|---|---|
|Text | 文字 |  ||
|SourceText | 源文本 |  ||
|PathOptions | 路径选项 |  ||
|Path | 路径 |  ||
|ReversePath | 反转路径 |  ||
|PerpendicularToPath | 垂直于路径 |  ||
|ForceAlignment | 强制对齐 |  ||
|FirstMargin | 首字边距 |  ||
|LastMargin | 末字边距 |  ||
|MoreOptions | 更多选项 |  ||
||  | AnchorPointGrouping | 锚点分组|
||  | GroupingAlignment | 分组对齐|
||  | Fill&Stroke | 填充描边|
||  | InterCharacterBlending | 字符间混合|
|Animators | 动画制作工具 |  ||
  
## 未使用的属性 #

TimeRemapandMotionTrackers从AVLayer继承的属性不适用于文本层，并且不使用其相关的AVLayer属性：

时间重映射、轨道遮罩

  * canSetTimeRemapEnabled
  * timeRemapEnabled
  * trackMatteType
  * isTrackMatte
  * hasTrackMatte

