---
title: LayerCollection object
order: 3
category:
  - AE 脚本
---

## Description

# LayerCollection object¶

`app.project.item(index).layers`

**Description**

The LayerCollection object represents a set of layers. The LayerCollectionbelonging to a [CompItem object](../items/compitem.html#compitem) contains allthe layer objects for layers in the composition. The methods of the collectionobject allow you to manipulate the layer list.

> LayerCollection is a subclass of [Collection
> object](../other/collection.html#collection). All methods and attributes of
> Collection, in addition to those listed below, are available when working
> with LayerCollection.

**Example**

Given that the first item in the project is a CompItem and the second item isan AVItem, this example shows the number of layers in the CompItem’s layercollection, adds a new layer based on an AVItem in the project, then displaysthe new number of layers.

```javascript
var firstComp = app.project.item(1);
var layerCollection = firstComp.layers;
alert("number of layers before is " + layerCollection.length);
var anAVItem = app.project.item(2);
layerCollection.add(anAVItem);
alert("number of layers after is " + layerCollection.length);
```

---

## Methods¶

### LayerCollection.add()¶

`app.project.item(index).layers.add(item[, duration])`

**Description**

Creates a new [AVLayer object](avlayer.html#avlayer) containing the specifieditem, and adds it to this collection. The new layer honors the “Create Layersat Composition Start Time” preference. This method generates an exception ifthe item cannot be added as a layer to this CompItem.

**Parameters**

| Property   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `item`     | The AVItem object for the item to be added.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `duration` | Optional, the length of a still layer in seconds, a floating-point value. Usedonly if the item contains a piece of still footage. Has no effect on movies,sequences or audio. If supplied, sets the du r at i on value of the new layer.Otherwise, the duration value is set according to user preferences. Bydefault, this is the same as the duration of the containing CompItem. To setanother preferred value, choose Edit > Preferences > Import (Windows) or AfterEffects > Preferences > Import (Mac OS), and specify options under Still |

Footage.

**Returns**

[AVLayer object](avlayer.html#avlayer);

---

### LayerCollection.addBoxText()¶

`app.project.item(index).layers.addBoxText([width, height])`

**Description**

Creates a new paragraph (box) text layer and adds the new [TextLayerobject](textlayer.html#textlayer) to this collection. To create a point textlayer, use the LayerCollection.addText() method.

**Parameters**

| Property          | Type                                                    |
| ----------------- | ------------------------------------------------------- |
| `[width, height]` | An Array containing the dimensions of the new text box. |

**Returns**

TextLayer object.

---

### LayerCollection.addCamera()¶

`app.project.item(index).layers.addCamera(name, centerPoint)`

**Description**

Creates a new camera layer and adds the [CameraLayerobject](cameralayer.html#cameralayer) to this collection. The new layer honorsthe “Create Layers at Composition Start Time” preference.

**Parameters**

| Property      | Type                                                                                                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`        | A string containing the name of the new layer.                                                                                                                                     |
| `centerPoint` | The center of the new camera, a floating-point array [x, y]. This is used toset the initial x and y values of the new camera’s Point of Interest property.The z value is set to 0. |

**Returns**

[CameraLayer object](cameralayer.html#cameralayer).

---

### LayerCollection.addLight()¶

`app.project.item(index).layers.addLight(name, centerPoint)`

**Description**

Creates a new light layer and adds the [LightLayerobject](lightlayer.html#lightlayer) to this collection. The new layer honorsthe “Create Layers at Composition Start Time” preference.

**Parameters**

| Property      | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| `name`        | A string containing the name of the new layer.              |
| `centerPoint` | The center of the new light, a floating-point array [x, y]. |

**Returns**

[LightLayer object](lightlayer.html#lightlayer).

---

### LayerCollection.addNull()¶

`app.project.item(index).layers.addNull([duration])`

**Description**

Creates a new null layer and adds the [AVLayer object](avlayer.html#avlayer)to this collection. This is the same as choosing Layer > New > Null Object.

**Parameters**

| Property   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `duration` | Optional, the length of a still layer in seconds, a floating-point value. Ifsupplied, sets the `duration` value of the new layer. Otherwise, the`duration` value is set according to user preferences. By default, this is thesame as the duration of the containing CompItem. To set another preferredvalue, choose Edit > Preferences > Import (Windows) or After Effects >Preferences > Import (Mac OS), and specify options under Still Footage. |

**Returns**

[AVLayer object](avlayer.html#avlayer).

---

### LayerCollection.addShape()¶

`app.project.item(index).layers.addShape()`

**Description**

Creates a new [ShapeLayer object](shapelayer.html#shapelayer) for a new, emptyShape layer. Use the ShapeLayer object to add properties, such as shape, fill,stroke, and path filters. This is the same as using a shape tool in “ToolCreates Shape” mode. Tools automatically add a vector group that includes Filland Stroke as specified in the tool options.

**Parameters**

None.

**Returns**

ShapeLayer object.

---

### LayerCollection.addSolid()¶

`app.project.item(index).layers.addSolid(color, name, width, height, pixelAspect[, duration])`

**Description**

Creates a new [SolidSource object](../sources/solidsource.html#solidsource),with values set as specified; sets the new SolidSource as the `mainSource`value of a new [FootageItem object](../items/footageitem.html#footageitem),and adds the FootageItem to the project. Creates a new [AVLayerobject](avlayer.html#avlayer), sets the new Footage Item as its `source`, andadds the layer to this collection.

**Parameters**

| Property      | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| `color`       | The color of the solid, an array of three floating-point values, `[R, G, B]`,in the range `[0.0..1.0]`. |
| `name`        | A string containing the name of the solid.                                                              |
| `width`       | The width of the solid in pixels, an integer in the range `[4..30000]`.                                 |
| `height`      | The height of the solid in pixels, an integer in the range `[4..30000]`.                                |
| `pixelAspect` | The pixel aspect ratio of the solid, a floating-point value in the range                                |

`[0.01..100.0]`.

| Property   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `duration` | Optional, the length of a still layer in seconds, a floating-point value. Ifsupplied, sets the `duration` value of the new layer. Otherwise, the`duration` value is set according to user preferences. By default, this is thesame as the duration of the containing CompItem. To set another preferredvalue, choose Edit > Preferences > Import (Windows) or After Effects >Preferences > Import (MacOS), and specify options under Still Footage. |

**Returns**

[AVLayer object](avlayer.html#avlayer).

---

### LayerCollection.addText()¶

`app.project.item(index).layers.addText([sourceText])`

**Description**

Creates a new point text layer and adds the new [TextLayerobject](textlayer.html#textlayer) to this collection. To create a paragraph(box) text layer, use LayerCollection.addBoxText().

**Parameters**

| Property     | Type                                                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sourceText` | Optional; a string containing the source text of the new layer, or a[TextDocument object](../other/textdocument.html#textdocument) containing thesource text of the new layer. |

**Returns**

[TextLayer object](textlayer.html#textlayer).

---

### LayerCollection.byName()¶

`app.project.item(index).layers.byName(name)`

**Description**

Returns the first (topmost) layer found in this collection with the specifiedname, or null if no layer with the given name is found.

**Parameters**

| Property | Type                          |
| -------- | ----------------------------- |
| `name`   | A string containing the name. |

**Returns**

[Layer object](layer.html#layer) or null.

---

### LayerCollection.precompose()¶

`app.project.item(index).layers.precompose(layerIndicies, name[, moveAllAttributes])`

**Description**

Creates a new [CompItem object](../items/compitem.html#compitem) and moves thespecified layers into its layer collection. It removes the individual layersfrom this collection, and adds the new CompItem to this collection.

**Parameters**

| Property            | Type                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `layerIndices`      | The position indexes of the layers to be collected. An array of integers.                                                                                                                                                                                                                                                                                                         |
| `name`              | The name of the new CompItem object.                                                                                                                                                                                                                                                                                                                                              |
| `moveAllAttributes` | Optional. When true (the default), retains all attributes in the newcomposition. This is the same as selecting the “Move all attributes into thenew composition” option in the Pre-compose dialog box. You can only set thisto false if there is just one index in the `layerIndices` array. This is thesame as selecting the “Leave all attributes in” option in the Pre-compose |

dialog box.

**Returns**

[CompItem object](../items/compitem.html#compitem).
