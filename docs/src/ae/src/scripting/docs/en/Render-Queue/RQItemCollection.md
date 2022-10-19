---
title: RQItemCollection object
order: 3
category:
  - AE 脚本
---

## RQItemCollection object

`app.project.renderQueue.items`

**Description**: The RQItemCollection contains all of the render-queue items in a project, asshown in the Render Queue panel of the project. The collection provides accessto the [RenderQueueItem objects](renderqueueitem.html#renderqueueitem), andallows you to create them from compositions. The first RenderQueueItem objectin the collection is at index position 1.

> RQItemCollection is a subclass of [Collection
> object](../other/collection.html#collection). All methods and attributes of
> Collection are available when working with RQItemCollection.

---

## Methods

### RQItemCollection.add()

`app.project.renderQueue.items.add(comp)`

**Description**: Adds a composition to the Render Queue, creating a RenderQueueItem.

**Parameters**:
|Para | Description|
| -------- | ---------------------------------------------------- |
| `comp` | The CompItem object for the composition to be added. |

**Returns**: [RenderQueueItem object](renderqueueitem.html#renderqueueitem).
