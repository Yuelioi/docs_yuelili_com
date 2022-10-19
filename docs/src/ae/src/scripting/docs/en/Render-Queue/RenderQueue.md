---
title: RenderQueue object
order: 2
category:
  - AE 脚本
---

## RenderQueue object

`app.project.renderQueue`

**Description**: The RenderQueue object represents the render automation process, the data andfunctionality that is available through the Render Queue panel of a particularAfter Effects project. Attributes provide access to items in the render queueand their render status. Methods can start, pause, and stop the renderingprocess. The [RenderQueueItem object](renderqueueitem.html#renderqueueitem)provides access to the specific settings for an item to be rendered.

---

## Attributes

### RenderQueue.canQueueInAME

`app.project.renderQueue.canQueueInAME`

::: info Note

This functionality was added in After Effects 14.0 (CC 2017)
:::
**Description**: indicates whether or not there are queued render items in the After Effectsrender queue. Only queued items can be added to the AME queue.

RenderQueue.queueInAME()

**Type**: Boolean; read-only.

---

### RenderQueue.queueNotify

`app.project.renderQueue.queueNotify`

::: info Note

This functionality was added in After Effects 22.0 (2022)
:::
**Description**: Read or write the **Notify** property for the entire Render Queue. This isexposed in the UI as a checkbox in the lower right corner of the Render Queue
panel.

**Type**: Boolean; read/write.

---

### RenderQueue.items

`app.project.renderQueue.items`

**Description**: A collection of all items in the render queue. See [RenderQueueItemobject](renderqueueitem.html#renderqueueitem).

**Type**: [RQItemCollection object](rqitemcollection.html#rqitemcollection); read-only.

---

### RenderQueue.numItems

`app.project.renderQueue.numItems`

**Description**: The total number of items in the render queue.

**Type**: Integer; read-only.

---

### RenderQueue.rendering

`app.project.renderQueue.rendering`

**Description**: When true, the rendering process is in progress or paused. When false, it is
stopped.

**Type**: Boolean; read-only.

---

## Methods

### RenderQueue.item()

`app.project.renderQueue.item(index)`

**Description**: Gets a specified item from the ite ms collection.

**Parameters**: `index` The position index of the item. An integer in the range
`[0..numItems]`.

**Returns**: [RenderQueueItem object](renderqueueitem.html#renderqueueitem).

---

### RenderQueue.pauseRendering()

`app.project.renderQueue.pauseRendering(pause)`

**Description**: Pauses the current rendering process, or continues a paused rendering process.This is the same as clicking Pause in the Render Queue panel during a render.You can call this method from an[RenderQueueItem.onstatus](renderqueueitem.html#renderqueueitem-onstatus) or[app.onError](../general/application.html#app-onerror) callback.

**Parameters**:
|Para | Description|
| -------- | -------------------------------------------------------------------------- |
| `pause` | True to pause a current render process, false to continue a paused render. |

**Returns**: Nothing.

---

### RenderQueue.render()

`app.project.renderQueue.render()`

**Description**: Starts the rendering process. This is the same as clicking Render in theRender Queue panel. The method does not return until the render process iscomplete. To pause or stop the rendering process, callRenderQueue.pauseRendering() or RenderQueue.stopRendering() from an `onError`
or `onstatus` callback.

- To respond to errors during the rendering process, define a callback function in [app.onError](../general/application.html#app-onerror).

- To respond to changes in the status of a particular item while the render is progressing, define a callback function in [RenderQueueItem.onstatus](renderqueueitem.html#renderqueueitem-onstatus) in the associated RenderQueueItem object.

**Parameters**: None.

**Returns**: Nothing.

---

### RenderQueue.showWindow()

`app.project.renderQueue.showWindow(doShow)`

**Description**: Shows or hides the Render Queue panel.

**Parameters**:
|Para | Description|
| -------- | ------------------------------------------------------------ |
| `doShow` | When true, show the Render Queue panel. When false, hide it. |

**Returns**: Nothing.

---

### RenderQueue.stopRendering()

`app.project.renderQueue.stopRendering()`

**Description**: Stops the rendering process. This is the same as clicking Stop in the RenderQueue panel during a render. You can call this method from an[RenderQueueItem.onstatus](renderqueueitem.html#renderqueueitem-onstatus) or[app.onError](../general/application.html#app-onerror) callback.

**Parameters**: None.

**Returns**: Nothing.

---

### RenderQueue.queueInAME()

`app.project.renderQueue.queueInAME(render_immediately_in_AME)`

::: info Note

This functionality was added in After Effects 14.0 (CC 2017)
:::
**Description**: Calls the Queue In AME command. This method requires passing a boolean value,telling AME whether to only queue the render items (false) or if AME shouldalso start processing its queue (true).

::: info Note

This requires Adobe Media Encoder CC 2017 (11.0) or later.
:::

::: info Note

When AME receives the queued items, it applies the most recently used encodingpreset. If `render_immediately_in_AME` is set to true, you will not have anopportunity to change the encoding settings.
:::
**Parameters**:
|Para | Description|
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `render_immediately_in_AME` | Telling AME whether to only queue the render items (`false`) or if AME shouldalso start processing its queue (`true`). |

**Returns**: Nothing.

**Example**:

The following sample code checks to see if there are queued items in therender queue, and if so queues them in AME but does not immediately start
rendering:

```javascript
// Scripting support for Queue in AME.
// Requires Adobe Media Encoder 11.0.
if (app.project.renderQueue.canQueueInAME === true) {
  // Sendqueued items to AME, but do not start rendering.
  app.project.renderQueue.queueInAME(false);
} else {
  alert("There are no queueditem in the Render Queue.");
}
```
