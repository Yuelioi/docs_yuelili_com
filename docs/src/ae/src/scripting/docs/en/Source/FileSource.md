---
title: FileSource object
order: 2
category:
  - AE 脚本
---

## FileSource object

`app.project.item(index).mainSource`

`app.project.item(index).proxySource`

**Description**: The FileSource object describes footage that comes from a file.

FileSource is a subclass of [FootageSource object](footagesource.html#footagesource).

All methods and attributes of FootageSource, in addition to those listed below, are available when working with FileSource.

---

## Attributes

### FileSource.file

`app.project.item(index).mainSource.file`

`app.project.item(index).proxySource.file`

**Description**: The [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object for the file that defines this asset. To
change the value:

- If this FileSource is a [proxySource](../items/avitem.html#avitem-proxysource) of an [AVItem](../items/avitem.html#avitem), call [setProxy()](../items/avitem.html#avitem-setproxy) or [setProxyWithSequence()](../items/avitem.html#avitem-setproxywithsequence).

- If this FileSource is a [mainSource](../items/footageitem.html#footageitem-mainsource) of a [FootageItem](../items/footageitem.html#footageitem), call [replace()](../items/footageitem.html#footageitem-replace) or [replaceWithSequence()](../items/footageitem.html#footageitem-replacewithsequence).

**Type**: [File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object; read-only.

### FileSource.missingFootagePath

`app.project.item(index).mainSource.file.missingFootagePath`

`app.project.item(index).proxySource.file.missingFootagePath`

**Description**: The path and filename of footage that is missing from this asset. See also[AVItem.footageMissing](../items/avitem.html#avitem-footagemissing).

**Type**: String; read-only.

## Methods

### FileSource.reload()

`app.project.item(index).mainSource.file.mainSource.reload()`

**Description**: Reloads the asset from the file. This method can be called only on a`mainSource`, not a `proxySource`.

**Parameters**: None.

**Returns**: Nothing.
