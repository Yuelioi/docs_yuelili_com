---
title: TextLayer object
order: 8
category:
  - AE 脚本
---

## TextLayer object

`app.project.item(index).layer(index)`

**Description**: The TextLayer object represents a text layer within a composition. Create itusing the [LayerCollection object’s addTextmethod](layercollection.html#layercollection-addtext). It can be accessed inan item’s layer collection either by index number or by a name string.

> TextLayer is a subclass of [AVLayer](avlayer.html#avlayer), which is a
> subclass of [Layer](layer.html#layer). All methods and attributes of AVLayer
> and Layer are available when working with TextLayer.

**AE Properties**

TextLayer defines no additional attributes, but has the following AEproperties and property groups, in addition to those inherited from AVLayer:

- `Text`

- `SourceText`

- `PathOptions`

- `Path`

- `ReversePath`

- `PerpendicularToPath`

- `ForceAlignment`

- `FirstMargin`

- `LastMargin`

- `MoreOptions`

- `AnchorPointGrouping`

- `GroupingAlignment`

- `Fill&Stroke`

- `InterCharacterBlending`

- `Animators`

**Unused Properties and Attributes**

The `TimeRemapandMotionTrackers` properties, inherited from AVLayer, are notapplicable to text layers, and their related AVLayer attributes are not used:

- `canSetTimeRemapEnabled`

- `timeRemapEnabled`

- `trackMatteType`

- `isTrackMatte`

- `hasTrackMatte`
