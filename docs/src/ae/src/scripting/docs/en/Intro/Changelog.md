---
title: Changelog
order: 3
category:
  - AE 脚本
---

## Changelog

What’s new and changed for scripting?

---

## [After Effects 22.6](https://helpx.adobe.com/after-effects/using/whats-new/2022-2.html) (August 2022)

- Scripting methods added

  - Added: [Property.keyLabel()](../properties/property.html#property-keylabel)

  - Added: [Property.setLabelAtKey()](../properties/property.html#property-setlabelatkey)

## [After Effects 22.3](https://helpx.adobe.com/after-effects/using/whats-new/2022-2.html) (April 2022)

- Scripting methods added

  - Added: [Layer.doSceneEditDetection()](../layers/layer.html#layer-dosceneeditdetection)

---

## [After Effects 22.0](https://helpx.adobe.com/after-effects/using/whats-new/2022.html) (October 2021)

- Scripting methods added

  - Added: [Layer.id](../layers/layer.html#layer-id)

  - Added: [Project.layerByID()](../general/project.html#project-layerbyid)

  - Added: [Property.essentialPropertySource](../properties/property.html#property-essentialpropertysource)

- Scripting Access to Render Queue Notifications

  - Added: [RenderQueue.queueNotify](../renderqueue/renderqueue.html#renderqueue-queuenotify)

  - Added: [RenderQueueItem.queueItemNotify](../renderqueue/renderqueueitem.html#renderqueueitem-queueitemnotify)

- Scripting Access to Multi-Frame Rendering, Maximum CPU Percentage Overrides

  - Added: [app.setMultiFrameRenderingConfig()](../general/application.html#app-setmultiframerenderingconfig)

---

## [After Effects 18.0](https://helpx.adobe.com/after-effects/using/whats-new/2021-2.html) (March 2021)

- Scripting methods and attributes to support Media Replacement

  - Added: [AVItem.isMediaReplacementCompatible](../items/avitem.html#avitem-ismediareplacementcompatible)

  - Added: [AVLayer.addToMotionGraphicsTemplate()](../layers/avlayer.html#avlayer-addtomotiongraphicstemplate)

  - Added: [AVLayer.addToMotionGraphicsTemplateAs()](../layers/avlayer.html#avlayer-addtomotiongraphicstemplateas)

  - Added: [AVLayer.canAddToMotionGraphicsTemplate()](../layers/avlayer.html#avlayer-canaddtomotiongraphicstemplate)

  - Added: [Property.alternateSource](../properties/property.html#property-alternatesource)

  - Added: [Property.canSetAlternateSource](../properties/property.html#property-cansetalternatesource)

  - Added: [Property.setAlternateSource()](../properties/property.html#property-setalternatesource)

  - Added relevant [match names](../matchnames/layer/avlayer.html#matchnames-layer-avlayer)

- Added [match name for Essential Properties](../matchnames/layer/avlayer.html#matchnames-layer-avlayer) property group.

---

## [After Effects 17.1.1](https://helpx.adobe.com/after-effects/using/whats-new/2020-1.html) (May 2020)

- Scripting access to Shape Layer Stroke Taper, Stroke Waves, Offset Paths Copies, Offset Path Copy Offset

  - Added relevant [match names](../matchnames/layer/shapelayer.html#matchnames-layer-shapelayer)

- Fixed an issue to allow negative values for [CompItem.displayStartTime](../items/compitem.html#compitem-displaystarttime):

  - Added [CompItem.displayStartFrame](../items/compitem.html#compitem-displaystartframe)

  - Now matches the valid range allowed when setting the Start Timecode in the Composition Settings Dialog (-3:00:00:00 to 23:59:00:00).

---

## [After Effects 17.0.1](https://helpx.adobe.com/after-effects/using/whats-new/2020.html) (November 2019)

- Scripted creation and modification of Dropdown Menu Control items:

  - Added: [Property.isDropdownEffect](../properties/property.html#property-isdropdowneffect)

  - Added: [Property.setPropertyParameters()](../properties/property.html#property-setpropertyparameters)

---

## After Effects 16.1

- Scripting access to Viewer guide and ruler booleans:

  - Added: [Viewer.guidesLocked](../other/viewer.html#viewer-guideslocked)

  - Added: [Viewer.guidesSnap](../other/viewer.html#viewer-guidessnap)

  - Added: [Viewer.guidesVisibility](../other/viewer.html#viewer-guidesvisibility)

  - Added: [Viewer.rulers](../other/viewer.html#viewer-rulers)

- Scripting access to add, remove, and set existing guides:

  - Added: [Item.addGuide()](../items/item.html#item-addguide)

  - Added: [Item.removeGuide()](../items/item.html#item-removeguide)

  - Added: [Item.setGuide()](../items/item.html#item-setguide)

- Scripting access to additional EGP property attributes:

  - Added: [CompItem.motionGraphicsTemplateControllerCount](../items/compitem.html#compitem-motiongraphicstemplatecontrollercount)

  - Added: [CompItem.getMotionGraphicsTemplateControllerName()](../items/compitem.html#compitem-getmotiongraphicstemplatecontrollername)

  - Added: [CompItem.setMotionGraphicsControllerName()](../items/compitem.html#compitem-setmotiongraphicscontrollername)

  - Added: [Property.addToMotionGraphicsTemplateAs()](../properties/property.html#property-addtomotiongraphicstemplateas)

---

## [After Effects 16.0](https://helpx.adobe.com/after-effects/using/whats-new/2019.html) (October 2018)

- Scripting access to marker label and protectedRegion attributes:

  - Added: [MarkerValue.label](../other/markervalue.html#markervalue-label)

  - Added: [MarkerValue.protectedRegion](../other/markervalue.html#markervalue-protectedregion)

- Scripting access to additional project color management settings:

  - Added: [Project.workingSpace](../general/project.html#project-workingspace)

  - Added: [Project.workingGamma](../general/project.html#project-workinggamma)

  - Added: [Project.listColorProfiles()](../general/project.html#project-listcolorprofiles)

  - Added: [Project.linearizeWorkingSpace](../general/project.html#project-linearizeworkingspace)

  - Added: [Project.compensateForSceneReferredProfiles](../general/project.html#project-compensateforscenereferredprofiles)

- Scripting access to the expression engine attribute:

  - Added: [Project.expressionEngine](../general/project.html#project-expressionengine)

- Added project method [Project.setDefaultImportFolder](../general/project.html#project-setdefaultimportfolder), which sets the folder that will be shown in the file import dialog.

- Added app property [app.disableRendering](../general/application.html#app-disablerendering), which disables rendering via the same mechanism as the Caps Lock key.

---

## [After Effects 15.1](https://helpx.adobe.com/after-effects/using/whats-new/2018.html) (April 2018)

- [Project.autoFixExpressions()](../general/project.html#project-autofixexpressions) will now fix expression name references in single quotes (ex., (‘Effect Name’)), as well as double quotes.

- Fixes [CompItem.exportAsMotionGraphicsTemplate()](../items/compitem.html#compitem-exportasmotiongraphicstemplate) not returning a boolean as expected

---

## [After Effects 15.0](https://forums.adobe.com/docs/DOC-8872) (October

2017.

- Scripting Access to motion graphics templates

  - Added: [CompItem.motionGraphicsTemplateName](../items/compitem.html#compitem-motiongraphicstemplatename)

  - Added: [CompItem.exportAsMotionGraphicsTemplate()](../items/compitem.html#compitem-exportasmotiongraphicstemplate)

  - Added: [CompItem.openInEssentialGraphics()](../items/compitem.html#compitem-openinessentialgraphics)

  - Added: [Property.addToMotionGraphicsTemplate()](../properties/property.html#property-addtomotiongraphicstemplate)

  - Added: [Property.canAddToMotionGraphicsTemplate()](../properties/property.html#property-canaddtomotiongraphicstemplate)

---

## [After Effects 14.2.1 (CC

2017.2)](https://blogs.adobe.com/creativecloud/a-june-2017-update-to-after-effects-cc-is-now-available/) (June 2017)

- Buttons in ScriptUI panels have been reverted to the rectangular appearance seen in After Effects 14.1 and previous releases.

- The [AVItem.setProxyToNone()](../items/avitem.html#avitem-setproxytonone) scripting method no longer fails with an error message, “After Effects error: AEGP trying to add invalid footage”.

- The [System.callSystem()](../general/system.html#system-callsystem) scripting method now waits for all tasks called by the command to complete, instead of failing when the command takes a long time to complete.

---

## [After Effects 14.2 (CC

2017.1)](https://blogs.adobe.com/creativecloud/after-effects-cc-april-2017-in-depth-scripting-improvements/) (April 2017)

- Scripting Access to text leading

  - Added: [TextDocument.leading](../other/textdocument.html#textdocument-leading)

- Scripting Access to Team Projects (Beta)

  - Added: [Project.newTeamProject()](../general/project.html#project-newteamproject)

  - Added: [Project.openTeamProject()](../general/project.html#project-openteamproject)

  - Added: [Project.shareTeamProject()](../general/project.html#project-shareteamproject)

  - Added: [Project.syncTeamProject()](../general/project.html#project-syncteamproject)

  - Added: [Project.closeTeamProject()](../general/project.html#project-closeteamproject)

  - Added: [Project.convertTeamProjectToProject()](../general/project.html#project-convertteamprojecttoproject)

  - Added: [Project.listTeamProjects()](../general/project.html#project-listteamprojects)

  - Added: [Project.isTeamProjectOpen()](../general/project.html#project-isteamprojectopen)

  - Added: [Project.isAnyTeamProjectOpen()](../general/project.html#project-isanyteamprojectopen)

  - Added: [Project.isTeamProjectEnabled()](../general/project.html#project-isteamprojectenabled)

  - Added: [Project.isLoggedInToTeamProject()](../general/project.html#project-isloggedintoteamproject)

  - Added: [Project.isSyncCommandEnabled()](../general/project.html#project-issynccommandenabled)

  - Added: [Project.isShareCommandEnabled()](../general/project.html#project-issharecommandenabled)

  - Added: [Project.isResolveCommandEnabled()](../general/project.html#project-isresolvecommandenabled)

  - Added: [Project.resolveConflict()](../general/project.html#project-resolveconflict)

- Drop-down menus in ScriptUI panels are no longer clipped on HiDPI displays on Windows.

- The appearance of buttons, sliders, disclosure triangles (“twirly arrow”), scroll bar, progress bar, radio buttons, and checkboxes in ScriptUI embedded panels have been updated to match the appearance of After Effects native controls.

- After Effects no longer crashes when the [AVLayer.compPointToSource()](../layers/avlayer.html#avlayer-comppointtosource) scripting method is used with a 3D text layer.

- The match name of the Fast Box Blur effect is “ADBE Box Blur2”. The older match name “ADBE Box Blur” will continue to work: when used to add the effect, “ADBE Box Blur” will apply the Fast Box Blur effect, but with the older name “Box Blur”; the Iterations parameter will be set to the new default of 3.

---

## [After Effects 14.0 (CC 2017)](https://forums.adobe.com/message/9108589)

(November 2016)

- Scripting Access to Tools

  - Added: [Project.toolType](../general/project.html#project-tooltype)

- Scripting Access to Composition Markers

  - Added: [CompItem.markerProperty](../items/compitem.html#compitem-markerproperty)

- Scripting Access to Queue in AME

  - Added: [RenderQueue.queueInAME()](../renderqueue/renderqueue.html#renderqueue-queueiname)

- Scripting Access to Available GPU Acceleration Options

  - Added: [app.availableGPUAccelTypes](../general/application.html#app-availablegpuacceltypes)

---

## [After Effects 13.8 (CC

2015.3)](https://blogs.adobe.com/creativecloud/after-effects-cc-2015-3-in-depth-gpu-accelerated-effects/) (June 2016)

- Enable GPU effect rendering via scripting

  - Added: [Project.gpuAccelType](../general/project.html#project-gpuacceltype)

- New Gaussian Blur effect added w/ matchname `ADBE Gaussian Blur 2`

---

## [After Effects 13.6 (CC 2015)](https://blogs.adobe.com/creativecloud/whats-new-and-changed-in-the-upcoming-update-to-after-effects-cc-2015/) (November

2015.

- Scripting access to text baselines

  - Added: [baselineLocs](../other/textdocument.html#textdocument-baselinelocs)

- New scripting method to generate random numbers

  - Added: [generateRandomNumber()](../general/globals.html#generaterandomnumber)

- Using the [copyToComp()](../layers/layer.html#layer-copytocomp) scripting method no longer causes After Effects to crash when the layer has a parent.

- The [valueAtTime()](../properties/property.html#property-valueattime) scripting method now waits for time-intensive expressions, like `sampleImage`, to finish evaluating before it returns the result.

- ScriptUI panels now display and resize correctly on high-DPI displays on Windows.

- After Effects no longer crashes when you click OK or Cancel buttons in a scriptUI dialog with tabbed panels.

---

## [After Effects 13.2 (CC

2014.2)](https://blogs.adobe.com/creativecloud/after-effects-cc-2014-2-13-2/)
(December 2014)

- Scripting improvements for text layers (read-only)

  - Returns boolean value:

    - Added: [fauxBold](../other/textdocument.html#textdocument-fauxbold)

    - Added: [fauxItalic](../other/textdocument.html#textdocument-fauxitalic)

    - Added: [allCaps](../other/textdocument.html#textdocument-allcaps)

    - Added: [smallCaps](../other/textdocument.html#textdocument-smallcaps)

    - Added: [superscript](../other/textdocument.html#textdocument-superscript)

    - Added: [subscript](../other/textdocument.html#textdocument-subscript)

  - Returns float:

    - Added: [verticalScale](../other/textdocument.html#textdocument-verticalscale)

    - Added: [horizontalScale](../other/textdocument.html#textdocument-horizontalscale)

    - Added: [baselineShift](../other/textdocument.html#textdocument-baselineshift)

    - Added: [tsume](../other/textdocument.html#textdocument-tsume)

  - Returns array of ([X,Y]) position coordinates (paragraph text layers only):

    - Added: [boxTextPos](../other/textdocument.html#textdocument-boxtextpos)

- Layer space / comp space conversion:

  - Added: [sourcePointToComp()](../layers/avlayer.html#avlayer-sourcepointtocomp)

  - Added: [compPointToSource()](../layers/avlayer.html#avlayer-comppointtosource)

---

## [After Effects 13.1 (CC

2014.1)](https://blogs.adobe.com/creativecloud/after-effects-cc-2014-1-13-1/)
(September 2014)

- Scripting improvements for text layers (read-only)

  - returns string:

    - Added: [fontLocation](../other/textdocument.html#textdocument-fontlocation)

    - Added: [fontStyle](../other/textdocument.html#textdocument-fontstyle)

    - Added: [fontFamily](../other/textdocument.html#textdocument-fontfamily)

- “Use Legacy UI” toggle implemented

---

## [After Effects 13.0 (CC 2014)](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/) (June 2014)

- Scripting access to render settings and output module settings

  - Added: RenderQueueItem object [getSetting](../renderqueue/renderqueueitem.html#renderqueueitem-getsetting), [setSetting](../renderqueue/renderqueueitem.html#renderqueueitem-setsetting) methods

  - Added: RenderQueueItem object [getSettings](../renderqueue/renderqueueitem.html#renderqueueitem-getsettings), [setSettings](../renderqueue/renderqueueitem.html#renderqueueitem-setsettings) methods

  - Added: OutputModule object [getSetting](../renderqueue/outputmodule.html#outputmodule-getsetting), [setSetting](../renderqueue/outputmodule.html#outputmodule-setsetting) methods

  - Added: OutputModule object [getSettings](../renderqueue/outputmodule.html#outputmodule-getsettings), [setSettings](../renderqueue/outputmodule.html#outputmodule-setsettings) methods

- Fetch project item by id: [Project.itemByID()](../general/project.html#project-itembyid)

- CEP panels implemented

---

## [After Effects 12.0 (CC)](https://blogs.adobe.com/creativecloud/scripting-changes-in-after-effects-cc-12-0-12-2/) (June 2013)

- Access to effect’s internal version string

  - Added: Application effects object’s version attribute, see [app.effects](../general/application.html#app-effects)

- Ability to get and set preview mode

  - Added: [Viewer.fastPreview](../other/viewer.html#viewer-fastpreview)

- Access to layer sampling method (see [samplingQuality](../layers/avlayer.html#avlayer-samplingquality))

- Changed preference and settings methods (see [Settings object](../other/settings.html#settings))

- ScriptUI is now based on the same controls as the main application.

---

## [After Effects 11.0

(CS6)](https://web.archive.org/web/20120623073355/https://blogs.adobe.com/toddkopriva/2012/06/scripting-changes-in-after-effects-cs6-plus-new-scripting-guide.html/) (April 2012)

- Added: Access to [Viewer object](../other/viewer.html#viewer) object and controls

  - Added: [app.activeViewer](../general/application.html#app-activeviewer)

  - Added: [AVLayer.openInViewer()](../layers/avlayer.html#avlayer-openinviewer) to open a layer in the layer viewer

  - Added: [CompItem.openInViewer()](../items/compitem.html#compitem-openinviewer) to open a composition in the composition viewer

  - Added: [FootageItem.openInViewer()](../items/footageitem.html#footageitem-openinviewer) to open a footage item in the footage viewer

- Added: [Property.canSetExpression](../properties/property.html#property-cansetexpression)

- Added: [AVLayer.environmentLayer](../layers/avlayer.html#avlayer-environmentlayer)

- Added: [MaskPropertyGroup.maskFeatherFalloff](../properties/maskpropertygroup.html#maskpropertygroup-maskfeatherfalloff)

- Access to Shape Feather properties via scripting

  - Added: [Shape.featherSegLocs](../other/shape.html#shape-featherseglocs)

  - Added: [Shape.featherRelSegLocs](../other/shape.html#shape-featherrelseglocs)

  - Added: [Shape.featherRadii](../other/shape.html#shape-featherradii)

  - Added: [Shape.featherInterps](../other/shape.html#shape-featherinterps)

  - Added: [Shape.featherTensions](../other/shape.html#shape-feathertensions)

  - Added: [Shape.featherTypes](../other/shape.html#shape-feathertypes)

  - Added: [Shape.featherRelCornerAngles](../other/shape.html#shape-featherrelcornerangles)

---

## [After Effects 10.5

(CS5.5)](https://web.archive.org/web/20121022055915/http://blogs.adobe.com/toddkopriva/2008/12/after-effects-cs4-scripting-ch.html/) (April 2011)

- Added to the [Project object](../general/project.html#project) object:

  - [Project.framesCountType](../general/project.html#project-framescounttype)

  - [Project.feetFramesFilmType](../general/project.html#project-feetframesfilmtype)

  - [Project.framesUseFeetFrames](../general/project.html#project-framesusefeetframes)

  - [Project.footageTimecodeDisplayStartType](../general/project.html#project-footagetimecodedisplaystarttype)

  - [Project.timeDisplayType](../general/project.html#project-timedisplaytype)

- Removed from the [Project object](../general/project.html#project) object:

  - `timecodeDisplayType` attribute

  - `timecodeBaseType` attribute

  - `timecodeNTSCDropFrame` attribute

  - `timecodeFilmType` attribute

  - `TimecodeDisplayType` enum

  - `TimecodeFilmType` enum

  - `TimecodeBaseType` enum

- Added: [CompItem.dropFrame](../items/compitem.html#compitem-dropframe)

- Added support for Paragraph Box Text:

  - Added [LayerCollection.addBoxText()](../layers/layercollection.html#layercollection-addboxtext)

  - Added [TextDocument.boxText](../other/textdocument.html#textdocument-boxtext)

  - Added [TextDocument.pointText](../other/textdocument.html#textdocument-pointtext)

  - Added [TextDocument.boxTextSize](../other/textdocument.html#textdocument-boxtextsize)

- Added [LightLayer.lightType](../layers/lightlayer.html#lightlayer-lighttype)

---

## [After Effects 9.0

(CS4)](https://web.archive.org/web/20121022055915/http://blogs.adobe.com/toddkopriva/2008/12/after-effects-cs4-scripting-ch.html/) (September 2008)

- Added: [app.isoLanguage](../general/application.html#app-isolanguage)

- Added: [MarkerValue.duration](../other/markervalue.html#markervalue-duration)

- Added: [OutputModule.includeSourceXMP](../renderqueue/outputmodule.html#outputmodule-includesourcexmp)

- Added: [Project.xmpPacket](../general/project.html#project-xmppacket)

- Added the following Property methods and attributes related to the Separate Dimensions feature:

  - [Property.dimensionsSeparated](../properties/property.html#property-dimensionsseparated)

  - [Property.getSeparationFollower()](../properties/property.html#property-getseparationfollower)

  - [Property.isSeparationFollower](../properties/property.html#property-isseparationfollower)

  - [Property.isSeparationLeader](../properties/property.html#property-isseparationleader)

  - [Property.separationDimension](../properties/property.html#property-separationdimension)

  - [Property.separationLeader](../properties/property.html#property-separationleader)

- Added [TextDocument object](../other/textdocument.html#textdocument) access, including:

  - Added: [TextDocument.applyFill](../other/textdocument.html#textdocument-applyfill)

  - Added: [TextDocument.applyStroke](../other/textdocument.html#textdocument-applystroke)

  - Added: [TextDocument.fillColor](../other/textdocument.html#textdocument-fillcolor)

  - Added: [TextDocument.font](../other/textdocument.html#textdocument-font)

  - Added: [TextDocument.fontSize](../other/textdocument.html#textdocument-fontsize)

  - Added: [TextDocument.justification](../other/textdocument.html#textdocument-justification)

  - Added: [TextDocument.resetCharStyle()](../other/textdocument.html#textdocument-resetcharstyle)

  - Added: [TextDocument.resetParagraphStyle()](../other/textdocument.html#textdocument-resetparagraphstyle)

  - Added: [TextDocument.strokeColor](../other/textdocument.html#textdocument-strokecolor)

  - Added: [TextDocument.strokeOverFill](../other/textdocument.html#textdocument-strokeoverfill)

  - Added: [TextDocument.strokeWidth](../other/textdocument.html#textdocument-strokewidth)
