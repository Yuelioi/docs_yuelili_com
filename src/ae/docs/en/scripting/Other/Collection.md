---
title: Collection object
order: 2
category:
  - AE 脚本
---

## Description

# Collection object¶

Like an array, a collection associates a set of objects or values as a logicalgroup and provides access to them by index. However, most collection objectsare read-only. You do not assign objects to them yourself—their contentsupdate automatically as objects are created or deleted.

:::info Note

The index numbering of a collection starts with 1, not 0.

:::

## Objects¶

- [ItemCollection object](../items/itemcollection.html#itemcollection) All of the items (imported files, folders, solids, and so on) found in the Project panel.

- [LayerCollection object](../layers/layercollection.html#layercollection) All of the layers in a composition.

- [OMCollection object](../renderqueue/omcollection.html#omcollection) All of the Output Module items in the project.

- [RQItemCollection object](../renderqueue/rqitemcollection.html#rqitemcollection) All of the render-queue items in the project.

---

## Attributes¶

| Property | Type                                     |
| -------- | ---------------------------------------- |
| `length` | The number of objects in the collection. |

---

## Methods¶

| Property | Type                                                                           |
| -------- | ------------------------------------------------------------------------------ |
| `[]`     | Retrieves an object in the collection by its index number. The first object is |

at index 1.

---|---
