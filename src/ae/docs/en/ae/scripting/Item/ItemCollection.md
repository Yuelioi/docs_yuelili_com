---
title: ItemCollection object
order: 3
category:
  - AE 脚本
---

## Description

# ItemCollection object¶

`app.project.items`

**Description**

The ItemCollection object represents a collection of items. The ItemCollectionbelonging to a Project object contains all the Item objects for items in theproject. The ItemCollection belonging to a FolderItem object contains all theItem objects for items in that folder.

> ItemCollection is a subclass of [Collection
> object](../other/collection.html#collection). All methods and attributes of
> Collection, in addition to those listed below, are available when working
> with ItemCollection.

---

## Methods¶

### ItemCollection.addComp()¶

`app.project.items.addComp(name, width, height, pixelAspect, duration, frameRate)`

**Description**

Creates a new composition. Creates and returns a new CompItem object and addsit to this collection. If the ItemCollection belongs to the project or theroot folder, then the new item’s `parentFolder` is the root folder. If theItemCollection belongs to any other folder, the new item’s `parentFolder` is
that `FolderItem`.

**Parameters**

| Property      | Type                                                                           |
| ------------- | ------------------------------------------------------------------------------ |
| `name`        | A string containing the name of the composition.                               |
| `width`       | The width of the composition in pixels, an integer in the range `[4..30000]`.  |
| `height`      | The height of the composition in pixels, an integer in the range `[4..30000]`. |
| `pixelAspect` | The pixel aspect ratio of the composition, a floating-point value in the range |

`[0.01..100.0]`.

| Property    | Type                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------ |
| `duration`  | The duration of the composition in seconds, a floating-point value in therange `[0.0..10800.0]`. |
| `frameRate` | The frame rate of the composition, a floating-point value in the range                           |

`[1.0..99.0]`

**Returns**

CompItem object.

---

### ItemCollection.addFolder()¶

`app.project.items.addFolder(name)`

**Description**

Creates a new folder. Creates and returns a new FolderItem object and adds itto this collection. If the ItemCollection belongs to the project or the rootfolder, then the new folder’s `parentFolder` is the root folder. If theItemCollection belongs to any other folder, the new folder’s `parentFolder` isthat `FolderItem`. To put items in the folder, set the[Item.parentFolder](item.html#item-parentfolder) attribute

**Parameters**

| Property | Type                                        |
| -------- | ------------------------------------------- |
| `name`   | A string containing the name of the folder. |

**Returns**

FolderItem object.

**Example**

This script creates a new FolderItem in the Project panel and moves
compositions into it.

```javascript
//create a new FolderItem in project, with name "comps" var
compFolder = app.project.items.addFolder("comps"); //move all compositionsinto new folder by setting //comp Item's parentFolder to "comps" folder for(var i = 1; i <= app.project.numItems; i++) { if (app.project.item(i)instanceof CompItem) { app.project.item(i).parentFolder = compFolder; } }
```
