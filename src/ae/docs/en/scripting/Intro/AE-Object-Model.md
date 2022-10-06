---
title: The After Effects Object Model
order: 5
category:
  - AE 脚本
---

## The After Effects Object Model¶

As you look through this reference section, which is organized alphabeticallyby object, you can refer to the following diagrams for an overview of wherethe various objects fall within the hierarchy, and their correspondence to the
user interface.

![After Effects Object Model](/images/objectmodel.webp)

Hierarchy diagram of the main After Effects scripting objects

Note that the [File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html), Folder, and Socket objects are defined byExtendScript, and are documented in the [JavaScript ToolsGuide](https://extendscript.docsforadobe.dev/). ExtendScript also defines theScriptUI module, a set of window and user-interface control objects, which areavailable to After Effects scripts. These are also documented in the[JavaScript Tools Guide](https://extendscript.docsforadobe.dev/). Thehierarchy of objects in scripting corresponds to the hierarchy in the user
interface.

![After Effects User Interface](/images/application.webp)

The application contains a Project panel, which displays a project. Theproject contains compositions, which contain layers. The source for a layercan be a footage file, placeholder, or solid, also listed in the Projectpanel. Each layer contains settings known as properties, and these can containmarkers and keyframes. The renderqueue contains render-queue items as well asrender settings and output modules. All of these entities are represented by
objects in scripting.

:::info Note

To avoid ambiguity, this manual uses the term “attribute” to refer toJavaScript object properties, and the term “property” or “AE property” torefer to After Effects layer properties.
:::
**Object summary**

The following table lists all objects alphabetically, with links to thedocumentation page for each.

| Property                                                      | Type                                                                                                                                               |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Object                                                        | Description                                                                                                                                        |
| [Global functions](../general/globals.html#globals)           | Globally available functions that allow you to display text for scriptdebugging purposes, and help convert time values between seconds and frames. |
| [Application object](../general/application.html#application) | A single global object, available by its name (app), that provides access toobjects and application settings within the After Effects application. |
| [AVItem object](../items/avitem.html#avitem)                  | Represents audio/visual files imported into After Effects.                                                                                         |
| [AVLayer object](../layers/avlayer.html#avlayer)              | Represents those layers that contain AVItem objects (composition layers,footage layers, solid layers, text layers, and sound layers).              |
| [CameraLayer object](../layers/cameralayer.html#cameralayer)  | Represents a camera layer within a composition.                                                                                                    |
| [Collection object](../other/collection.html#collection)      | Associates a set of objects or values as a logical group and provides access                                                                       |

to them by index.

| Property                                           | Type                                                                          |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| [CompItem object](../items/compitem.html#compitem) | Represents a composition, and allows you to manipulate it and get information |

about it.

| Property                                                    | Type                                                                    |
| ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| [FileSource object](../sources/filesource.html#filesource)  | Describes footage that comes from a file.                               |
| [FolderItem object](../items/folderitem.html#folderitem)    | Represents a folder in the Project panel.                               |
| [FootageItem object](../items/footageitem.html#footageitem) | Represents a footage item imported into a project, which appears in the |

Project panel.

| Property                                                                 | Type                                                               |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [FootageSource object](../sources/footagesource.html#footagesource)      | Describes the file source of some footage.                         |
| [ImportOptions object](../other/importoptions.html#importoptions)        | Encapsulates options for importing files into After Effects.       |
| [Item object](../items/item.html#item)                                   | Represents an item in a project that appears in the Project panel. |
| [ItemCollection object](../items/itemcollection.html#itemcollection)     | Collects items in a project.                                       |
| [KeyframeEase object](../other/keyframeease.html#keyframeease)           | Encapsulates keyframe ease values in an After Effects property.    |
| [Layer object](../layers/layer.html#layer)                               | A base class for layer classes.                                    |
| [LayerCollection object](../layers/layercollection.html#layercollection) | Collects layers in a project.                                      |
| [LightLayer object](../layers/lightlayer.html#lightlayer)                | Represents a light layer within a composition.                     |
| [MarkerValue object](../other/markervalue.html#markervalue)              | Encapsulates marker values in an After Effects property.           |

[MaskPropertyGroup
|Property|Type|
|---|---|
|object](../properties/maskpropertygroup.html#maskpropertygroup)|Encapsulates mask attributes in a layer. |
|[OMCollection object](../renderqueue/omcollection.html#omcollection)|Collects output modules in a render queue. |
|[OutputModule object](../renderqueue/outputmodule.html#outputmodule)|Represents an output module for a render queue. |

[PlaceholderSource
|Property|Type|
|---|---|
|object](../sources/placeholdersource.html#placeholdersource)|Describes a placeholder for footage. |
|[Project object](../general/project.html#project)|Represents an After Effects project. |
|[Property object](../properties/property.html#property)|Represents an After Effects property. |
|[PropertyBase object](../properties/propertybase.html#propertybase)|A base class for After Effects property and property group classes. |
|[PropertyGroup object](../properties/propertygroup.html#propertygroup)|Represents an After Effects property group. |
|[RenderQueue object](../renderqueue/renderqueue.html#renderqueue)|Represents the After Effects render queue. |
|[RenderQueueItem object](../renderqueue/renderqueueitem.html#renderqueueitem)|Represents a renderable item in a render queue. |
|[RenderQueueItem object](../renderqueue/renderqueueitem.html#renderqueueitem)|Collects render-queue items in a render queue. |

[RQItemCollection
|Property|Type|
|---|---|
|object](../renderqueue/rqitemcollection.html#rqitemcollection)|Provides access to application settings and preferences. |
|[Shape object](../other/shape.html#shape)|Encapsulates the outline shape information for a mask. |
|[ShapeLayer object](../layers/shapelayer.html#shapelayer)|Represents a shape layer within a composition. |
|[SolidSource object](../sources/solidsource.html#solidsource)|Describes a solid color that is the source of some footage. |
|[System object](../general/system.html#system)|Provides access to the operating system from the application. |
|[TextDocument object](../other/textdocument.html#textdocument)|Encapsulates the text in a text layer. |
|[TextLayer object](../layers/textlayer.html#textlayer)|Represents a text layer within a composition. |
|[Viewer object](../other/viewer.html#viewer)|Represents a Composition, Layer, or Footage panel.|
