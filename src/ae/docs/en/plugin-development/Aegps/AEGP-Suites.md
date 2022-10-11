---
title: AEGP Suites
order: 6
category:
  - AE 插件开发
---

# AEGP Suites

As mentioned earlier, AEGPs do everything through suites. The following suites are used by all types of AEGPs, and may be called from within any hook function (except for the RegisterSuite, which must be used from within the AEGP’s entry point). Following is a description of each function in every suite, and, where appropriate details on using those functions.

| **Suite**                                           | **Description**                                                                                                                   |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [Memory Suite](#aegps-aegp-suites-memory-suite)     | Manage memory resources. Use this suite! Whenever memory-related errors are encountered, After Effects can report errors for you. |
| [Command Suite](#aegps-aegp-suites-command-suite)   | Manage your AEGP’s menu items. Used in conjunction with the Register Suite.                                                       |
| [Register Suite](#aegps-aegp-suites-register-suite) | Used in conjunction with the [Command Suite](#aegps-aegp-suites-command-suite) to add functions to menu commands.                 |

AEIOs and Artisans must use this suite’s functions to indicate to After Effects that they want to receive the appropriate message streams.
You can replace some After Effects’ commands using this suite. |
| [Project Suite](#aegps-aegp-suites-project-suite) | Reads and modifies project data. |
| [Item Suite](#aegps-aegp-suites-item-suite) | Manages items within a project or composition.
Folders, Compositions, Solids, and Footage are all items. |
| [Collection Suite](#aegps-aegp-suites-collection-suite) | Query which items are currently selected, and create your own selection sets.
It’s often a good UI move to select all the items your AEGP has modified, just to give the user some idea what you’ve done. |
| [Composition Suite](#aegps-aegp-suites-composition-suite) | Manages (and creates) compositions in a project, and composition-specific items like solids. |
| [Footage Suite](#aegps-aegp-suites-footage-suite) | Manages footage. |
| [Layer Suite](#aegps-aegp-suites-layer-suite) | Provides information about the layers within a composition, and the relationship(s) between the source and layer times.
Solids, text, paint, cameras, lights, images, and image sequences can all become layers. |
| [Effect Suite](#aegps-aegp-suites-effect-suite) | Provides access to the effects applied to a layer.
Use Stream suites to obtain effect keyframe information.
Use `AEGP\_EffectCallGeneric()` (in [AEGP_EffectSuite4](#aegps-aegp-suites-aegp-effectsuite)) to communicate with effects that you setup ahead of time to respond to your AEGP. |
| [Stream Suite](#aegps-aegp-suites-stream-suite) | Used to access the values of a layer’s keyframe properties. |
| [Dynamic Stream Suite](#aegps-aegp-suites-dynamic-stream-suite) | Used to access the characteristics of dynamic streams associated with a layer. |
| [Keyframe Suite](#aegps-aegp-suites-keyframe-suite) | Used to access and manipulate all keyframe data. |
| [Marker Suite](#aegps-aegp-suites-marker-suite) | Used to manipulate markers. Use `AEGP\_GetNewCompMarkerStream()` (in [AEGP_CompSuite11](#aegps-aegp-suites-aegp-compsuite)) to get the composition marker stream. |
| [Mask Suite](#aegps-aegp-suites-mask-suite) | Provides access to retrieve information about a layer’s masks. |
| [Mask Outline Suite](#aegps-aegp-suites-mask-outline-suite) | Used in conjunction with Stream Suite, this suite provides detailed information about the path rendered to make a layer’s mask. |
| [Text Document Suite](#aegps-aegp-suites-text-document-suite) | Used to access the actual text on a text layer. |
| [Text Layer Suite](#aegps-aegp-suites-text-layer-suite) | Used to access the paths that make up the outlines of a text layer. |
| [Utility Suite](#aegps-aegp-suites-utility-suite) | Supplies error message handling, AEGP version checking and access to After Effects’ undo stack. |
| [Persistent Data Suite](#aegps-aegp-suites-persistent-data-suite) | Query and manage all persistent data (i.e., the preferences file).
AEGPs can also add their own data to the prefs. |
| [Color Settings Suite](#aegps-aegp-suites-color-settings-suite) | Obtain information on After Effects’ current color management settings. |
| [Render Suite](#aegps-aegp-suites-render-suite) | Get rendered frames (and audio samples) from within an AEGP. |
| [World Suite](#aegps-aegp-suites-world-suite) | Allocate, dispose of, and query AEGP_Worlds.
Also provides a way to convert a `PF\_EffectWorld` into an `AEGP\_World`, for working with effect plug-ins. |
| [Composite Suite](#aegps-aegp-suites-composite-suite) | Exposes After Effects’ compositing functionality, including transfer modes, track matting, and good old fashioned bit copying. |
| [Sound Data Suite](#aegps-aegp-suites-sound-data-suite) | Functions for managing and accessing sound data. |
| [Render Queue Suite](#aegps-aegp-suites-render-queue-suite) | Add and remove items from the render queue. |
| [Render Queue Item Suite](#aegps-aegp-suites-render-queue-item-suite) | Query and modify items in the render queue. |
| [Render Options Suite](#aegps-aegp-suites-render-options-suite) | Query and manage all items exposed in a render queue item’s options dialog. |
| [Output Module Suite](#aegps-aegp-suites-output-module-suite) | Query and modify the output modules attached to items in the render queue. |
| [PF Interface Suite](#aegps-aegp-suites-pf-interface-suite) | The functions in this suite, while technically part of the AEGP API, are for use by effects. |
| [AEGP Iterate Suite](#aegps-aegp-suites-aegp-iterate-suite) | Gives AEGPs a way to have a function (which has the required signature) to be run on any or all available processors. |
| [File Import Manager Suite](#aegps-aegp-suites-file-import-manager-suite) | Registers AEGP file and project importers as part of After Effects’ file handling. |

---

## Fail Gracefully

If a suite isn’t present, make every attempt to fail gracefully. Show the user a message indicating the nature of the problem. Attempt to acquire and use an earlier version of the same suite.

Since AEGPs are so deeply integrated with After Effects, make sure that users know who or what is encountering a given problem.

Identify yourself! Provide support and/or help information to the user whenever possible.

---

## Handling Handles

Use the AEGP Memory Suite to manage memory used by the AEGP. Whenever memory related errors are encountered, After Effects can report errors for you to find early on.

`AEGP\_MemHandle` is a structure that contains more than just the referenced memory. So it should not be dereferenced directly. Use `AEGP\_LockMemHandle` to get a pointer to the memory referenced by the `AEGP\_MemHandle`.

And of course, unlock it when you’re done.

### AEGP_MemorySuite1

| **Function**         | **Purpose**                 |
| -------------------- | --------------------------- |
| `AEGP\_NewMemHandle` | Create a new memory handle. |

This memory is guaranteed to be 16-byte aligned.
`plugin\_id` is the ID passed in through the main [Entry Point](implementation.html) (#aegps-implementation-entry-point),
or alternatively what you obtained from `AEGP\_RegisterWithAEGP()`
(from [AEGP_UtilitySuite6](#aegps-aegp-suites-aegp-utilitysuite)).
Use `whatZ` to identify the memory you are asking for.
After Effects uses the string to display any related error messages.

```cpp
AEGP\_NewMemHandle(
 AEGP\_PluginID \*plugin\_id,
 const A\_char \*whatZ,
 AEGP\_MemSize size,
 AEGP\_MemFlag flags,
 AEGP\_MemHandle \*memPH);

```

|
| `AEGP\_FreeMemHandle` | Release a handle you allocated using AEGP_NewMemHandle().

```cpp
AEGP\_FreeMemHandle(
 AEGP\_MemHandle memH);

```

|
| `AEGP\_LockMemHandle` | Locks the handle into memory (cannot be moved by OS).
Use this function prior to using memory allocated by `AEGP\_NewMemHandle`. Can be nested.

```cpp
AEGP\_LockMemHandle(
 AEGP\_MemHandle memH,
 void \*\*ptr\_to\_ptr);

```

|
| `AEGP\_UnlockMemHandle` | Allows OS to move the referenced memory. Always balance lock calls with unlocks.

```cpp
AEGP\_UnlockMemHandle(
 AEGP\_MemHandle memH);

```

|
| `AEGP\_GetMemHandleSize` | Returns the allocated size of the handle.

```cpp
AEGP\_GetMemHandleSize AEGP\_MemHandle memH,
 AEGP\_MemSize \*sizeP);

```

|
| `AEGP\_ResizeMemHandle` | Changes the allocated size of the handle.

```cpp
AEGP\_ResizeMemHandle(
 const char \*whatZ,
 AEGP\_MemSize new\_size,
 AEGP\_MemHandle memH);

```

|
| `AEGP\_SetMemReportingOn` | If After Effects runs into problems with the memory handling, the error should be reported to the user.
Make use of this during development!
Only memory allocated and then leaked using this suite is reported using this call,
so for example memory allocated using [PF_HandleSuite1](../effect-details/memory-allocation.html) (#effect-details-memory-allocation-pf-handlesuite)
will not be reported.

```cpp
AEGP\_SetMemReportingOn(
 A\_Boolean turn\_OnB);

```

|
| `AEGP\_GetMemStats` | Obtain information about the number of currently allocated handles and their total size.
Only memory allocated using this suite is tracked and reported using this call,
so for example memory allocated using [PF_HandleSuite1](../effect-details/memory-allocation.html) (#effect-details-memory-allocation-pf-handlesuite)
will not be reported here.

```cpp
AEGP\_GetMemStats(
 AEGP\_MemID mem\_id,
 A\_long \*countPL,
 A\_long \*sizePL);

```

|

---

## Managing Menu Items

Command Suites allow you to create and handle any menu events.

To add your own menu commands, you must also use [Register Suite](#aegps-aegp-suites-register-suite) to assign handlers to menu events.

### AEGP_CommandSuite1

| **Function**             | **Purpose**                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------- |
| `AEGP\_GetUniqueCommand` | Obtain a unique command identifier. Use the _Register Suite_ to register a handler for the command. |

```cpp
AEGP\_GetUniqueCommand(
 AEGP\_Command \*unique\_commandP);

```

:::tip: On occasion After Effects will send command 0 (zero),
so don’t use that as part of your command handling logic. |
| `AEGP\_InsertMenuCommand` | Add a new menu command. Using nameZ = “-” will insert a separator. menu_ID can be:

- `AEGP\_Menu\_NONE`
- `AEGP\_Menu\_APPLE`
- `AEGP\_Menu\_FILE`
- `AEGP\_Menu\_EDIT`
- `AEGP\_Menu\_COMPOSITION`
- `AEGP\_Menu\_LAYER`
- `AEGP\_Menu\_EFFECT`
- `AEGP\_Menu\_WINDOW`
- `AEGP\_Menu\_FLOATERS`
- `AEGP\_Menu\_KF\_ASSIST`
- `AEGP\_Menu\_IMPORT`
- `AEGP\_Menu\_SAVE\_FRAME\_AS`
- `AEGP\_Menu\_PREFS`
- `AEGP\_Menu\_EXPORT`
- `AEGP\_Menu\_ANIMATION`
- `AEGP\_Menu\_PURGE`
- `AEGP\_Menu\_NEW` - Supported in CC and later

Locations can be set to a specific location in the menu or can be one assigned by After Effects:

- `AEGP\_MENU\_INSERT\_SORTED`
- `AEGP\_MENU\_INSERT\_AT\_BOTTOM`
- `AEGP\_MENU\_INSERT\_AT\_TOP`

For `AEGP\_Menu\_WINDOW`, the BOTTOM and TOP options haven’t been supported since CS4 and will return an error.
We recommend `SORTED`.

```cpp
AEGP\_InsertMenuCommand(
 AEGP\_Command command,
 const A\_char \*nameZ,
 AEGP\_MenuID menu\_id,
 A\_long after\_itemL);

```

|
| `AEGP\_RemoveMenuCommand` | Remove a menu command. If you were so motivated, you could remove ALL of the After Effects menu items.

```cpp
AEGP\_RemoveMenuCommand(
 AEGP\_Command command);

```

|
| `AEGP\_SetCommandName` | Set menu name of a command.

```cpp
AEGP\_SetCommandName(
 AEGP\_Command command,
 const A\_char \*nameZ);

```

|
| `AEGP\_EnableCommand` | Enable a menu command.

```cpp
AEGP\_EnableCommand(
 AEGP\_Command command);

```

|
| `AEGP\_DisableCommand` | Disable a menu command.

```cpp
AEGP\_DisableCommand(
 AEGP\_Command command);

```

|
| `AEGP\_CheckMarkMenuCommand` | After Effects will draw a check mark next to the menu command.

```cpp
AEGP\_CheckMarkMenuCommand(
 AEGP\_Command command,
 A\_Boolean checkB);

```

|
| `AEGP\_DoCommand` | Call the handler for a specified menu command. Every After Effects menu item has an associated command.
:::tip that we make no guarantees that command IDs will be consistent from version to version.

```cpp
AEGP\_DoCommand(
 AEGP\_Command command);

```

Having given the disclaimer above, here are a few command numbers that have been supplied to other developers, and may be of interest:

- 3061 - Open selection, ignoring any modifier keys.
- 10314 - Play/Stop (valid in 13.5 and later)
- 2285 - RAM Preview (valid prior to 13.5)
- 2415 - Play (spacebar) (valid prior to 13.5)
- 2997 - Crop composition to region of interest.
- 2372 - Edit > Purge > Image Caches

If your AEGP needs to call some other After Effects menu item,
there’s a fairly easy way to find out most commands you want, using scripting:

```cpp
cmd = app.findMenuCommandId(text); // e.g. text = "Open Project…"
alert(cmd);

```

With AE running, just open up Adobe ExtendScript Toolkit CC, copy the above script in,
and in the app drop-down choose the version of After Effects you have running.
Then hit the Play button to run the script in AE.
Otherwise, contact <[mailto:zlam@adobe.com](mailto:zlam%40adobe.com)> _API Engineering_ for the command number. |

---

## Registering with After Effects

Register functions for After Effects’ use.

### AEGP_RegisterSuites5

| **Function**                | **Purpose**                                                    |
| --------------------------- | -------------------------------------------------------------- |
| `AEGP\_RegisterCommandHook` | Register a hook (command handler) function with After Effects. |

If you are replacing a function which After Effects also handles, `AEGP\_HookPriority` determines whether your plug-in gets it first.\* `AEGP\_HP\_BeforeAE`

- `AEGP\_HP\_AfterAE`

For each menu item you add, obtain your own `AEGP\_Command` using `AEGP\_GetUniqueCommand()`
(from [AEGP_CommandSuite1](#aegps-aegp-suites-aegp-commandsuite)) prior registering a single `command\_hook\_func`.
Determine which command was sent within this hook function, and act accordingly.
Currently, `AEGP\_HookPriority` is ignored.

```cpp
AEGP\_RegisterCommandHook(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_HookPriority hook\_priority,
 AEGP\_Command command,
 AEGP\_CommandHook command\_hook\_func
 void \*refconPV);

```

|
| `AEGP\_RegisterUpdateMenuHook` | Register your menu update function (which determines whether or not items are active),
called every time any menu is to be drawn.
This hook function handles updates for all menus.

```cpp
AEGP\_RegisterUpdateMenuHook(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_UpdateMenuHook update\_menu\_hook\_func,
 void \*refconPV);

```

|
| `AEGP\_RegisterDeathHook` | Register your termination function. Called when the application quits.

```cpp
AEGP\_RegisterDeathHook(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_DeathHook death\_hook\_func,
 void \*refconPV);

```

|
| `AEGP\_RegisterVersionHook` | Currently not called. |
| `AEGP\_RegisterAboutStringHook` | Currently not called. |
| `AEGP\_RegisterAboutHook` | Currently not called. |
| `AEGP\_RegisterArtisan` | Register your Artisan. See [Artisans](../artisans/artisans.html) (#artisans-artisans) for more details.

```cpp
AEGP\_RegisterArtisan(
 A\_Version api\_version,
 A\_Version Artisan\_version,
 long aegp\_plugin\_id,
 void \*aegp\_refconPV,
 const A\_char \*match\_nameZ,
 const A\_char \*Artisan\_nameZ,
 PR\_ArtisanEntryPoints \*entry\_funcsP);

```

|
| `AEGP\_RegisterIO` | Register your AEIO plug-in. See [AEIOs](../aeios/aeios.html) (#aeios-aeios) for more details.

```cpp
AEGP\_RegisterIO (
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_IORefcon aegp\_refconP,
 const AEIO\_ModuleInfo \*io\_infoP,
 const AEIO\_FunctionBlock4 \*aeio\_fcn\_blockP);

```

|
| `AEGP\_RegisterIdleHook` | Register your IdleHook function. After Effects will call the function sporadically,
while the user makes difficult artistic decisions (or while they’re getting more coffee).

```cpp
AEGP\_RegisterIdleHook(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_IdleHook idle\_hook\_func,
 AEGP\_IdleRefcon refconP);

```

|
| `AEGP\_RegisterInteractiveArtisan` | Registers your AEGP as an interactive artisan, for use in previewing and rendering all layers in a given composition.

```cpp
AEGP\_RegisterInteractiveArtisan (
 A\_Version api\_version,
 A\_Version artisan\_version,
 AEGP\_PluginID aegp\_plugin\_id,
 void \*aegp\_refconPV,
 const A\_char \*match\_nameZ,
 const A\_char \*artisan\_nameZ,
 PR\_ArtisanEntryPoints \*entry\_funcsP);

```

|
| `AEGP\_RegisterPresetLocalizationString` | Call this to register as many strings as you like for name-replacement when presets are loaded.
Any time a Property name is found, or referred to in an expression,
and it starts with an ASCII tab character (’t’), followed by one of the English names, it will be replaced with the localized name.
(In English the tab character will simply be removed).

```cpp
AEGP\_RegisterPresetLocalizationString(
 const A\_char \*english\_nameZ,
 const A\_char \*localized\_nameZ);

```

|

---

## Manage Projects

These functions access and modify project data. Support for multiple projects is included to prepare for future expansion;
After Effects currently adheres to the single project model.

To save project-specific data in After Effects’ preferences (and thus, outside the projects themselves), use the [Persistent Data Suite](#aegps-aegp-suites-persistent-data-suite).

Use caution: the functions for opening and creating projects do not save changes to the project currently open when they are called!

### AEGP_ProjSuite6

| **Function**        | **Purpose**                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| `AEGP\_NumProjects` | Currently will never return more than 1. After Effects can have only one project open at a time. |

```cpp
AEGP\_GetNumProjects(
 A\_long \*num\_projPL)

```

|
| `AEGP\_GetIndProject` | Retrieves a specific project by index.

```cpp
AEGP\_GetProjectProjectByIndex(
 A\_long proj\_indexL,
 AEGP\_ProjectH \*projPH);

```

|
| `AEGP\_GetProjectName` | Get the project name (up to `AEGP\_MAX\_PROJ\_NAME\_LEN + 1`) in length.

```cpp
AEGP\_GetProjectName(
 AEGP\_ProjectH projH,
 A\_char \*nameZ);

```

|
| `AEGP\_GetProjectPath` | Get the path of the project (empty string the project hasn’t been saved yet).
The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetProjectPath(
 AEGP\_ProjectH projH,
 AEGP\_MemHandle \*unicode\_pathPH)

```

|
| `AEGP\_GetProjectRootFolder` | Get the root of the project, which After Effects also treats as a folder.

```cpp
AEGP\_GetProjectRootFolder(
 AEGP\_ProjectH projH,
 AEGP\_ItemH \*root\_folderPH)

```

|
| `AEGP\_SaveProjectToPath` | Saves the entire project to the specified full path.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEGP\_SaveProjectToPath(
 AEGP\_ProjectH projH,
 const A\_UTF16Char \*pathZ);

```

|
| `AEGP\_GetProjectTimeDisplay` | Retrieves the current time display settings.

```cpp
AEGP\_GetProjectTimeDisplay(
 AEGP\_ProjectH projH,
 AEGP\_TimeDisplay3 \*time\_displayP);

typedef struct {
 AEGP\_TimeDisplayMode display\_mode;
 AEGP\_SourceTimecodeDisplayMode footage\_display\_mode;
 A\_Boolean display\_dropframeB;
 A\_Boolean use\_feet\_framesB;
 A\_char timebaseC;
 A\_char frames\_per\_footC;
 AEGP\_FramesDisplayMode frames\_display\_mode;
} AEGP\_TimeDisplay3;

enum {
 AEGP\_TimeDisplay\_TIMECODE = 0,
 AEGP\_TimeDisplay\_FRAMES
};

typedef char AEGP\_TimeDisplayMode;

enum {
 AEGP\_SourceTimecode\_ZERO= 0,
 AEGP\_SourceTimecode\_SOURCE\_TIMECODE
};

typedef char AEGP\_SourceTimecodeDisplayMode;

enum {
 AEGP\_Frames\_ZERO\_BASED= 0,
 AEGP\_Frames\_ONE\_BASED,
 AEGP\_Frames\_TIMECODE\_CONVERSION
};

typedef char AEGP\_FramesDisplayMode;

```

|
| `AEGP\_SetProjectTimeDisplay` | Specified the settings to be used for displaying time.

```cpp
AEGP\_SetProjectTimeDisplay(
 AEGP\_ProjectH projH,
 const AEGP\_TimeDisplay3 \*time\_displayP);

```

|
| `AEGP\_ProjectIsDirty` | Returns TRUE if the project has been modified since it was opened.

```cpp
AEGP\_ProjectIsDirty(
 AEGP\_ProjectH projH,
 A\_Boolean \*is\_dirtyPB);

```

|
| `AEGP\_SaveProjectAs` | Saves the project to the specified path.
The file path is a NULL-terminated UTF-16 string with platform separators.
NOTE: This will overwrite an existing file.

```cpp
AEGP\_SaveProjectAs(
 AEGP\_ProjectH projH,
 const A\_UTF16Char \*pathZ);

```

|
| `AEGP\_NewProject` | Creates a new project. NOTE: Will close the current project without saving it first!

```cpp
AEGP\_NewProject(
 AEGP\_ProjectH \*new\_projectPH);

```

|
| `AEGP\_OpenProjectFromPath` | Opens a project from the supplied path, and returns its `AEGP\_ProjectH`.
The file path is a NULL-terminated UTF-16 string with platform separators.
NOTE: Will close the current project without saving it first!

```cpp
AEGP\_OpenProjectFromPath(
 const A\_UTF16Char \*pathZ,
 AEGP\_ProjectH \*projectPH);

```

|
| `AEGP\_GetProjectBitDepth` | Retrieves the project bit depth.

```cpp
AEGP\_GetProjectBitDepth(
 AEGP\_Projec tH projectH,
 AEGP\_ProjBitDepth \*bit\_depthP);

```

AEGP_ProjBitDepth will be one of the following:

- `AEGP\_ProjBitDepth\_8`
- `AEGP\_ProjBitDepth\_16`
- `AEGP\_ProjBitDepth\_32`

|
| `AEGP\_SetProjectBitDepth` | Sets the project bit depth. Undoable.

```cpp
AEGP\_SetProjectBitDepth(
 AEGP\_ProjectH projectH,
 AEGP\_ProjBitDepth bit\_depth);

```

|

### AEGP_TimeDisplay2

:::tip

Values in unused fields persist when After Effects is using a different display type.

| **Member**                    | **Description**       |
| ----------------------------- | --------------------- |
| `AEGP\_TimeDisplayType type;` | One of the following: |

- `AEGP\_TimeDisplayType\_TIMECODE`
- `AEGP\_TimeDisplayType\_FRAMES`
- `AEGP\_TimeDisplayType\_FEET\_AND\_FRAMES`

|
| `A\_char timebaseC;` | 0 - 100. Only used for `AEGP\_TimeDisplayType\_TIMECODE`. |
| `A\_Boolean non\_drop\_30B;` | When the timebase is 30 and the item’s framerate is 29.97, determines whether to display as non-drop frame. |
| `A\_char frames\_per\_footC;` | Only used for `AEGP\_TimeDisplayType\_FEET\_AND\_FRAMES`. |
| `A\_long starting\_frameL;` | Usually 0 or 1. Not used when type is usually 0 or 1, not used for `AEGP\_TimeDisplayType\_TIMECODE`. |
| `A\_Boolean auto\_timecode\_baseB;` | If `TRUE`, the project timecode display setting is set to auto. |

---

## Control Items Within Projects

Accesses and modifies items within a project or composition.

Anything in the project bin is an `AEGP\_Item`. :::tip that cameras have no source, and thus have no `AEGP\_ItemH`.

Unless more specificity is required for the function(s) you’re using, remain as abstract as possible; AEGP_Comps are passed into and returned from most functions as AEGP_Items.

### AEGP_ItemSuite9

| **Function**             | **Purpose**                                  |
| ------------------------ | -------------------------------------------- |
| `AEGP\_GetFirstProjItem` | Retrieves the first item in a given project. |

```cpp
AEGP\_GetFirstProjItem(
 AEGP\_ProjectH projectH,
 AEGP\_ItemH \*itemPH);

```

|
| `AEGP\_GetNextProjItem` | Retrieves the next project item; `\*next\_itemPH` will be `NULL` after the last item.

```cpp
AEGP\_GetNextProjItem(
 AEGP\_ProjectH projectH,
 AEGP\_ItemH itemH,
 AEGP\_ItemH \*next\_itemPH);

```

|
| `AEGP\_GetActiveItem` | If the Project window is active, the active item is the selected item (if only one item is selected).
If a Composition, Timeline, or Footage window is active,
returns the parent of the layer associated with the front-most tab in the window.
Returns NULL if no item is active.

```cpp
AEGP\_GetActiveItem(
 AEGP\_ItemH \*itemPH,

```

|
| `AEGP\_IsItemSelected` | Returns true if the Project window is active and the item is selected.

```cpp
AEGP\_IsItemSelected(
 AEGP\_ItemH itemH,
 A\_Boolean \*selectedPB)

```

|
| `AEGP\_SelectItem` | Toggles the selection state of the item, and (depending on `deselect\_othersB`) can deselect other items.
This call selects items in the Project panel.
To make selections in the Composition panel, use `AEGP\_SetSelection` from [AEGP_CompSuite11](#aegps-aegp-suites-aegp-compsuite).

```cpp
AEGP\_SelectItem(
 AEGP\_ItemH itemH,
 A\_Boolean selectB,
 A\_Boolean deselect\_othersB);

```

|
| `AEGP\_GetItemType` | Gets type of an item. :::tip: solids don’t appear in the project, but can be the source to a layer.

```cpp
AEGP\_GetItemType(
 AEGP\_ItemH itemH,
 AEGP\_ItemType \*item\_typeP);

```

Items are one of the following types:

- `AEGP\_ItemType\_NONE`
- `AEGP\_ItemType\_FOLDER`
- `AEGP\_ItemType\_COMP`
- `AEGP\_ItemType\_SOLID`
- `AEGP\_ItemType\_FOOTAGE`

|
| `AEGP\_GetTypeName` | Get name of type. (name length up to `AEGP\_MAX\_TYPE\_NAME\_LEN + 1`).

```cpp
AEGP\_GetTypeName(
 AEGP\_ItemType item\_type,
 A\_char \*nameZ);

```

|
| `AEGP\_GetItemName` | Get item name. (name length has no limit).
`unicode\_namePH` points to `A\_UTF16Char` (contains null terminated UTF16 string).
It must be disposed with `AEGP\_FreeMemHandle` .

```cpp
AEGP\_GetItemName(
 AEGP\_PluginID pluginID,
 AEGP\_ItemH itemH,
 AEGP\_MemHandle \*unicode\_namePH);

```

|
| `AEGP\_SetItemName` | Specifies the name of the AEGP_ItemH. (name length has no limit). Undoable.

```cpp
AEGP\_SetItemName(
 AEGP\_ItemH itemH,
 const A\_UTF16Char \*nameZ);

```

|
| `AEGP\_GetItemID` | Returns the item’s unique ID, which persists across saves and loads of the project.

```cpp
AEGP\_GetItemID(
 AEGP\_ItemH itemH,
 A\_long \*item\_idPL);

```

|
| `AEGP\_GetItemFlags` | Get properties of an item.

```cpp
AEGP\_GetItemFlags(
 AEGP\_ItemH itemH,
 AEGP\_ItemFlags \*item\_flagsP);

```

Flag values (may be OR’d together):

- `AEGP\_ItemFlag\_MISSING`
- `AEGP\_ItemFlag\_HAS\_PROXY`
- `AEGP\_ItemFlag\_USING\_PROXY`
- `AEGP\_ItemFlag\_MISSING\_PROXY`
- `AEGP\_ItemFlag\_HAS\_VIDEO`
- `AEGP\_ItemFlag\_HAS\_AUDIO`
- `AEGP\_ItemFlag\_STILL`
- `AEGP\_ItemFlag\_HAS\_ACTIVE\_AUDIO`

Unlike the `HAS\_AUDIO` flag, this bit flag will set only if the comp has at least one layer where audio is actually on. |
| `AEGP\_SetItemUseProxy` | Toggle item’s proxy usage. Undoable.

```cpp
AEGP\_SetItemUseProxy(
 AEGP\_ItemH itemH,
 A\_Boolean use\_proxyB);

```

|
| `AEGP\_GetItemParentFolder` | Get folder containing item.

```cpp
AEGP\_GetItemParentFolder(
 AEGP\_ItemH itemH,
 AEGP\_ItemH \*parent\_itemPH);

```

|
| `AEGP\_SetItemParentFolder` | Sets an item’s parent folder. Undoable.

```cpp
AEGP\_SetItemParentFolder(
 AEGP\_ItemH itemH,
 AEGP\_ItemH parent\_folderH);

```

|
| `AEGP\_GetItemDuration` | Get duration of item, in seconds.

```cpp
AEGP\_GetItemDuration(
 AEGP\_ItemH itemH,
 A\_Time \*durationPT);

```

|
| `AEGP\_GetItemCurrentTime` | Get current time within item. Not updated while rendering.

```cpp
AEGP\_GetItemCurrentTime(
 AEGP\_ItemH itemH,
 A\_long \*curr\_timePT);

```

|
| `AEGP\_GetItemDimensions` | Get width and height of item.

```cpp
AEGP\_GetItemDimensions(
 AEGP\_ItemH itemH,
 A\_long \*widthPL)
 A\_long \*heightPL);

```

|
| `AEGP\_GetItemPixelAspectRatio` | Get the width of a pixel, assuming its height is 1.0, as numerator over denominator.

```cpp
AEGP\_GetItemPixelAspectRatio(
 AEGP\_ItemH itemH,
 A\_Ratio \*ratioPRt);

```

|
| `AEGP\_DeleteItem` | Removes item from all compositions. Undo-able.
Do not use the `AEGP\_ItemH` after calling this function.

```cpp
AEGP\_DeleteItem(
 AEGP\_ItemH itemH);

```

|
| `AEGP\_GetItemSolidColor` | Removed in `AEGP\_ItemSuite4`. See `AEGP\_GetSolidFootageColor` from [AEGP_FootageSuite5](#aegps-aegp-suites-aegp-footagesuite)
Given a solid item, return its color.

```cpp
AEGP\_GetItemSolidColor(
 AEGP\_ItemH itemH,
 PF\_Pixel \*PF\_Pixel);

```

|
| `AEGP\_SetSolidColor` | Removed in `AEGP\_ItemSuite4`. See `AEGP\_SetSolidFootageColor` from [AEGP_FootageSuite5](#aegps-aegp-suites-aegp-footagesuite).
Sets the color of an existing solid (error if `itemH` is not a solid).

```cpp
AEGP\_SetSolidColor(
 AEGP\_ItemH itemH,
 AEGP\_ColorVal color);

```

|
| `AEGP\_SetSolidDimensions` | Removed in `AEGP\_ItemSuite4`. See `AEGP\_SetSolidFootageDimensions` from [AEGP_FootageSuite5](#aegps-aegp-suites-aegp-footagesuite).
Sets the dimensions of an existing solid (error if `itemH` is not a solid).

```cpp
AEGP\_SetSolidDimensions(
 AEGP\_ItemH itemH,
 A\_short widthS,
 A\_short heightS);

```

|
| `AEGP\_CreateNewFolder` | Creates a new folder in the project. The newly created folder is allocated and owned by After Effects.
Passing `NULL` for `parent\_folderH0` creates the folder at the project’s root.

```cpp
AEGP\_CreateNewFolder(
 const A\_UTF16Char \*nameZ,
 AEGP\_ProjectH projH),
 AEGP\_ItemH parentH0),
 AEGP\_ItemH \*new\_folderPH);

```

|
| `AEGP\_SetItemCurrentTime` | Sets the current time within a given `itemH`.

```cpp
AEGP\_SetItemCurrentTime(
 AEGP\_ItemH itemH,
 const A\_Time \*new\_timePT);

```

|
| `AEGP\_GetItemCommentLength` | Removed in `ItemSuite9`. Retrieves the length (in characters) of the `itemH's` comment.

```cpp
AEGP\_GetItemCommentLength(
 AEGP\_ItemH itemH,
 A\_u\_long \*buf\_sizePLu);

```

|
| `AEGP\_GetItemComment` | Updated to support Unicode in `ItemSuite9`, available in 14.1. Retrieves the `itemH's` comment.

```cpp
AEGP\_GetItemComment(
 AEGP\_ItemH itemH,
 AEGP\_MemHandle \*unicode\_namePH);

```

|
| `AEGP\_SetItemComment` | Updated to support Unicode in `ItemSuite9`, available in 14.1. Sets the `itemH's` comment.

```cpp
AEGP\_SetItemComment(
 AEGP\_ItemH itemH,
 const A\_UTF16Char \*commentZ);

```

|
| `AEGP\_GetItemLabel` | Retrieves an item’s label.

```cpp
AEGP\_GetItemLabel(
 AEGP\_ItemH itemH,
 AEGP\_LabelID \*labelP);

```

|
| `AEGP\_SetItemLabel` | Sets an item’s label.

```cpp
AEGP\_SetItemLabel(
 AEGP\_ItemH itemH,
 AEGP\_LabelID label);

```

|
| `AEGP\_GetItemMRUView` | Gets an item’s most recently used view.
The view can be used with two calls in the `AEGP\_ColorSettingsSuite`,
to perform a color transform on a pixel buffer from working to view color space.

```cpp
AEGP\_GetItemMRUView(
 AEGP\_ItemH itemH,
 AEGP\_ItemViewP \*mru\_viewP);

```

|

:::tip

`AEGP\_RenderNewItemSoundData()` used to be here, but is now part of [AEGP_RenderSuite4](#aegps-aegp-suites-aegp-rendersuite).

---

## Managing Selections

This suite manages selection states, mirroring the functionality supplied by vectors in the C++ Standard Template Library.

Many types of items may be simultaneously selected in After Effects; `AEGP\_CollectionItems` are unions of layer, mask, effect, stream, mask vertex, and keyframe items.

First acquire the current collection, then iterate across its members to ensure that whatever your AEGP does is applicable to each.

We’ve added `AEGP\_Collection2H` and `AEGP\_CollectionItemV2` so that selected dynamic streams can be handled with the `AEGP\_CollectionSuite`.

### AEGP_CollectionSuite2

| **Function**          | **Purpose**                                  |
| --------------------- | -------------------------------------------- |
| `AEGP\_NewCollection` | Creates and returns a new, empty collection. |

To obtain the current composition’s selection as a collection, use `AEGP\_GetNewCollectionFromCompSelection`.

```cpp
AEGP\_NewCollection(
 AEGP\_PluginID plugin\_id,
 AEGP\_Collection2H \*collectionPH);

```

|
| `AEGP\_DisposeCollection` | Disposes of a collection.

```cpp
AEGP\_DisposeCollection(
 AEGP\_Collection2H collectionH);

```

|
| `AEGP\_GetCollectionNumItems` | Returns the number of items contained in the given collection.

```cpp
AEGP\_GetCollectionNumItems(
 AEGP\_Collection2H collectionH,
 A\_u\_long \*num\_itemsPL);

```

|
| `AEGP\_GetCollectionItemByIndex` | Retrieves (creates and populates) the index’d collection item.

```cpp
AEGP\_GetCollectionItemByIndex(
 AEGP\_Collection2H collectionH,
 A\_u\_long indexL,
 AEGP\_CollectionItemV2 \*itemP);

```

|
| `AEGP\_CollectionPushBack` | Adds an item to the given collection.

```cpp
AEGP\_CollectionPushBack(
 AEGP\_Collection2H collectionH,
 const AEGP\_CollectionItemV2 \*itemP);

```

|
| `AEGP\_CollectionErase` | Removes an index’d item (or items) from a given collection. NOTE: this range is exclusive,
like STL iterators. To erase the first item, you would pass 0 and 1, respectively.

```cpp
AEGP\_CollectionErase(
 AEGP\_Collection2H collectionH,
 A\_u\_long index\_firstL,
 A\_u\_long index\_lastL);

```

|

### Ownership Of Collection Items

When `AEGP\_StreamRefHs` are inserted into a collection, they are adopted by the collection; do not free them.

`AEGP\_EffectRefHs`, on the other hand, are not adopted, and must be freed by the calling AEGP.

---

## Manipulate Compositions

Provide information about the compositions in a project, and create cameras, lights, and solids.

### AEGP_CompSuite11

| **Function**            | **Purpose**                                                    |
| ----------------------- | -------------------------------------------------------------- |
| `AEGP\_GetCompFromItem` | Retrieves the handle to the composition, given an item handle. |

Returns `NULL` if `itemH` is not an `AEGP\_CompH`.

```cpp
AEGP\_GetCompFromItem(
 AEGP\_ItemH itemH,
 AEGP\_CompH \*compPH);

```

|
| `AEGP\_GetItemFromComp` | Used to get the item handle, given a composition handle.

```cpp
AEGP\_GetItemFromComp(
 AEGP\_CompH compH,
 AEGP\_ItemH \*itemPH);

```

|
| `AEGP\_GetCompDownsampleFactor` | Returns current downsample factor. Measured in pixels X by Y.
Users can choose a custom downsample factor with independent X and Y.

```cpp
AEGP\_GetCompDownsampleFactor(
 AEGP\_CompH compH,
 AEGP\_DownsampleFactor \*dsfP);

```

|
| `AEGP\_SetCompDownsampleFactor` | Sets the composition’s downsample factor.

```cpp
AEGP\_SetCompDownsampleFactor(
 AEGP\_CompH compH,
 AEGP\_DownsampleFactor \*dsfP);

```

|
| `AEGP\_GetCompBGColor` | Returns the composition background color.

```cpp
AEGP\_GetCompBGColor(
 AEGP\_CompH compH,
 AEGP\_ColorVal \*bg\_colorP);

```

|
| `AEGP\_SetCompBGColor` | Sets a composition’s background color.

```cpp
AEGP\_SetCompBGColor(
 AEGP\_CompH compH,
 const AEGP\_ColorVal \*bg\_colorP);

```

|
| `AEGP\_GetCompFlags` | Returns composition flags, or’d together.

```cpp
AEGP\_GetCompFlags(
 AEGP\_CompH compH,
 AEGP\_CompFlags \*AEGP\_CompFlags);

```

- `AEGP\_CompFlag\_SHOW\_ALL\_SHY`
- `AEGP\_CompFlag\_ENABLE\_MOTION\_BLUR`
- `AEGP\_CompFlag\_ENABLE\_TIME\_FILTER`
- `AEGP\_CompFlag\_GRID\_TO\_FRAME`
- `AEGP\_CompFlag\_GRID\_TO\_FIELDS`
- `AEGP\_CompFlag\_USE\_LOCAL\_DSF`
- `AEGP\_CompFlag\_DRAFT\_3D`
- `AEGP\_CompFlag\_SHOW\_GRAPH`
  |
  | `AEGP\_GetShowLayerNameOrSourceName` | New in CC. Passes back true if the Comp’s timeline shows layer names, false if source names.
  This will open the comp as a side effect.

```cpp
AEGP\_GetShowLayerNameOrSourceName(
 AEGP\_CompH compH,
 A\_Boolean \*layer\_names\_shownPB);

```

|
| `AEGP\_SetShowLayerNameOrSourceName` | New in CC. Pass in true to have the Comp’s timeline show layer names, false for source names.
This will open the comp as a side effect.

```cpp
AEGP\_SetShowLayerNameOrSourceName(
 AEGP\_CompH compH,
 A\_Boolean \*layer\_names\_shownPB);

```

|
| `AEGP\_GetShowBlendModes` | New in CC. Passes back true if the Comp’s timeline shows blend modes column, false if hidden.
This will open the comp as a side effect.

```cpp
AEGP\_GetShowBlendModes(
 AEGP\_CompH compH,
 A\_Boolean \*blend\_modes\_shownPB);

```

|
| `AEGP\_SetShowBlendModes` | New in CC. Pass in true to have the Comp’s timeline show the blend modes column, false to hide it.
This will open the comp as a side effect.

```cpp
AEGP\_GetCompFlags(
 AEGP\_CompH compH,
 A\_Boolean show\_blend\_modesB);

```

|
| `AEGP\_GetCompFramerate` | Returns the composition’s frames per second.

```cpp
AEGP\_GetCompFramerate(
 AEGP\_CompH compH,
 A\_FpLong \*fpsPF);

```

|
| `AEGP\_SetCompFramerate` | Sets the composition’s frames per second.

```cpp
AEGP\_SetCompFramerate(
 AEGP\_CompH compH,
 A\_FpLong \*fpsPF);

```

|
| `AEGP\_GetCompShutterAnglePhase` | The composition shutter angle and phase.

```cpp
AEGP\_GetCompShutterAnglePhase(
 AEGP\_CompH compH,
 A\_Ratio \*angle,
 A\_Ratio \*phase);

```

|
| `AEGP\_GetCompShutterFrameRange` | The duration of the shutter frame, in seconds.

```cpp
AEGP\_GetCompShutterFrameRange(
 AEGP\_CompH compH,
 const A\_Time \*comp\_timeP);

```

|
| `AEGP\_GetCompSuggestedMotionBlurSamples` | Retrieves the number of motion blur samples After Effects will perform in the given composition.

```cpp
AEGP\_GetCompSuggestedMotionBlurSamples(
 AEGP\_CompH compH,
 A\_long \*samplesPL)

```

|
| `AEGP\_SetCompSuggestedMotionBlurSamples` | Specifies the number of motion blur samples After Effects will perform in the given composition. Undoable.

```cpp
AEGP\_SetCompSuggestedMotionBlurSamples(
 AEGP\_CompH compH,
 A\_long samplesL);

```

|
| `AEGP\_GetCompMotionBlurAdaptiveSampleLimit` | New in CC. Retrieves the motion blur adaptive sample limit for the given composition.
As of CC, a new comp defaults to 128.

```cpp
AEGP\_GetCompMotionBlurAdaptiveSampleLimit(
 AEGP\_CompH compH,
 A\_long \*samplesPL)

```

|
| `AEGP\_SetCompMotionBlurAdaptiveSampleLimit` | New in CC. Specifies the motion blur adaptive sample limit for the given composition.
As of CC, both the limit and the suggested values are clamped to [2,256] range
and the limit value will not be allowed less than the suggested value.
Undoable.

```cpp
AEGP\_SetCompMotionBlurAdaptiveSampleLimit(
 AEGP\_CompH compH,
 A\_long samplesL);

```

|
| `AEGP\_GetCompWorkAreaStart` | Get the time where the current work area starts.

```cpp
AEGP\_GetCompWorkAreaStart(
 AEGP\_CompH compH,
 A\_Time \*startPT);

```

|
| `AEGP\_GetCompWorkAreaDuration` | Get the duration of a composition’s current work area, in seconds.

```cpp
AEGP\_GetCompWorkAreaDuration(
 AEGP\_CompH compH,
 A\_Time \*durationPT);

```

|
| `AEGP\_SetCompWorkAreaStartAndDuration` | Set the work area start and duration, in seconds. Undo-able.
One call to this function is sufficient to set the layer’s in point and duration;
it’s not necessary to call it twice, once for each timespace.

```cpp
AEGP\_SetCompWorkAreaStartAndDuration(
 AEGP\_CompH compH,
 const A\_Time \*startPT)
 const A\_Time \*durationPT);

```

|
| `AEGP\_CreateSolidInComp` | Creates a new solid with a specified width, height, color, and duration in the composition. Undo-able.
If you pass `NULL` for the duration, After Effects uses its preference for the duration of a new still.
If you pass NULL, or an invalid time scale, duration is set to the length of the composition.

```cpp
AEGP\_CreateSolidInComp(
 const A\_UTF16Char \*utf\_nameZ,
 A\_Long widthL,
 A\_Long heightL,
 const PF\_Pixel \*color,
 AEGP\_CompH parent\_compH,
 const A\_Time \*durationPT0,
 AEGP\_LayerH \*new\_solidPH);

```

|
| `AEGP\_CreateCameraInComp` | Creates and adds a camera to the specified composition.
Once created, you can manipulate the camera’s parameter streams using the AEGP [Stream Suite](#aegps-aegp-suites-stream-suite).
To specify a two-node camera, use `AEGP\_SetLayerFlag`
from [AEGP_LayerSuite8](#aegps-aegp-suites-aegp-layersuite) to set `AEGP\_LayerFlag\_LOOK\_AT\_POI`.

```cpp
AEGP\_CreateCameraInComp(
 const A\_UTF16Char \*utf\_nameZ,
 A\_FloatPoint center\_point,
 AEGP\_CompH parent\_compH,
 AEGP\_LayerH \*new\_cameraPH);

```

|
| `AEGP\_CreateLightInComp` | Creates and adds a light to the specified composition.
Once created, you can manipulate the light’s parameter streams using the AEGP [Stream Suite](#aegps-aegp-suites-stream-suite).

```cpp
AEGP\_CreateLightInComp(
 const A\_UTF16Char \*utf\_nameZ,
 A\_FloatPoint center\_point,
 AEGP\_CompH parent\_compH,
 AEGP\_LayerH \*new\_lightPH);

```

|
| `AEGP\_CreateComp` | Creates a new composition for the project.
If you don’t provide a parent folder, the composition will be at the root level of the project. Undo-able.

```cpp
AEGP\_CreateComp(
 AEGP\_ItemH parent\_folderHO,
 const A\_UTF16Char \*utf\_nameZ,
 A\_Long widthL,
 A\_Long heightL,
 const A\_Ratio \*pixel\_aspect\_ratioPRt,
 const A\_Time \*durationPT,
 const A\_Ratio \*frameratePRt,
 AEGP\_CompH \*new\_compPH);

```

|
| `AEGP\_GetNewCollectionFromCompSelection` | Creates a new AEGP_Collection2H from the items selected in the given composition.
The plug-in is responsible for disposing of the `AEGP\_Collection2H`.

```cpp
AEGP\_GetNewCollectionFromCompSelection(
 AEGP\_PluginID plugin\_id,
 AEGP\_CompH compH,
 AEGP\_Collection2H \*collectionPH);

```

|
| `AEGP\_SetSelection` | Sets the selection within the given composition to the given `AEGP\_Collection2H`.
Will return an error if members of the `AEGP\_Collection2H` are not available.
Don’t assume that a composition hasn’t changed between operations; always use a fresh `AEGP\_Collection2H`.

```cpp
AEGP\_SetSelection(
 AEGP\_CompH compH,
 AEGP\_Collection2H collectionH);

```

|
| `AEGP\_GetCompDisplayStartTime` | Gets the displayed start time of a composition.

```cpp
AEGP\_GetCompDisplayStartTime(
 AEGP\_CompH compH,
 const A\_Time \*start\_timePT);

```

|
| `AEGP\_SetCompDisplayStartTime` | Not undo-able. Sets the displayed start time of a composition (has no effect on the duration of the composition).

```cpp
AEGP\_SetCompDisplayStartTime(
 AEGP\_CompH compH,
 const A\_Time \*start\_timePT);

```

|
| `AEGP\_SetCompDuration` | Undoable. Sets the duration of the given composition.

```cpp
AEGP\_SetCompDuration(
 AEGP\_CompH compH,
 const A\_Time \*durationPT);

```

|
| `AEGP\_CreateNullInComp` | Creates a “null object” in the composition (useful for translating projects from 3D applications into After Effects).
If you pass `NULL` for the duration, After Effects uses its preference for the duration of a new still.
If you pass 0, or an invalid time scale, duration is set to the length of the composition.

```cpp
AEGP\_CreateNullInComp(
 const A\_UTF16Char \*utf\_nameZ,
 AEGP\_CompH parent\_compH,
 const A\_Time \*durationPT0,
 AEGP\_LayerH \*new\_null\_solidPH);

```

|
| `AEGP\_SetCompPixelAspectRatio` | Sets the pixel aspect ratio of a composition.

```cpp
AEGP\_SetCompPixelAspectRatio(
 AEGP\_CompH compH,
 const A\_Ratio \*parPRt);

```

|
| `AEGP\_CreateTextLayerInComp` | Updated in CS6. Creates a text layer in the composition, and returns its `AEGP\_LayerH`.

```cpp
AEGP\_CreateTextLayerInComp(
 AEGP\_CompH parent\_compH,
 A\_Boolean select\_new\_layerB,
 AEGP\_LayerH \*new\_text\_lyrPH);

```

|
| `AEGP\_CreateBoxTextLayerInComp` | Updated in CS6. Creates a new box text layer, and returns its `AEGP\_LayerH`.

```cpp
AEGP\_CreateBoxTextLayerInComp(
 AEGP\_CompH parent\_compH,
 A\_Boolean select\_new\_layerB,
 A\_FloatPoint box\_dimensions,
 AEGP\_LayerH \*new\_text\_layerPH);

```

|
| `AEGP\_SetCompDimensions` | Sets the dimensions of the composition. Undoable.

```cpp
AEGP\_SetCompDimensions(
 AEGP\_CompH compH,
 A\_long widthL,
 A\_long heightL);

```

|
| `AEGP\_DuplicateComp` | Duplicates the composition. Undoable.

```cpp
AEGP\_DuplicateComp(
 AEGP\_CompH compH,
 AEGP\_CompH \*new\_compPH);

```

|
| `AEGP\_GetCompFrameDuration` | Retrieves the duration of a frame in a composition.

```cpp
AEGP\_GetCompFrameDuration(
 AEGP\_CompH compH,
 A\_Time \*timeP);

```

|
| `AEGP\_GetMostRecentlyUsedComp` | Returns the most-recently-used composition.

```cpp
AEGP\_GetMostRecentlyUsedComp(
 AEGP\_CompH \*compPH);

```

|
| `AEGP\_CreateVectorLayerInComp` | Creates and returns a handle to a new vector layer.

```cpp
AEGP\_CreateVectorLayerInComp(
 AEGP\_CompH parent\_compH,
 AEGP\_LayerH \*new\_vec\_layerPH);

```

|
| `AEGP\_GetNewCompMarkerStream` | Returns an AEGP_StreamRefH to the composition’s marker stream.
Must be disposed by caller.

```cpp
AEGP\_GetNewCompMarkerStream(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_CompH parent\_compH,
 AEGP\_StreamRefH \*streamPH);

```

|
| `AEGP\_GetCompDisplayDropFrame` | Passes back a boolean that indicates whether the specified comp uses drop-frame timecode or not.

```cpp
AEGP\_GetCompDisplayDropFrame(
 AEGP\_CompH compH,
 A\_Boolean \*dropFramePB);

```

|
| `AEGP\_SetCompDisplayDropFrame` | Sets the dropness of the timecode in the specified composition.

```cpp
AEGP\_SetCompDisplayDropFrame(
 AEGP\_CompH compH,
 A\_Boolean dropFrameB);

```

|
| `AEGP\_ReorderCompSelection` | Move the selection to a certain layer index. Use along with `AEGP\_SetSelection().`

```cpp
AEGP\_SetCompDisplayDropFrame(
 AEGP\_CompH compH,
 A\_long index);

```

|

---

## Work with Footage

Provides information about footage, or items in a project or composition. When getting and setting footage’s interpretation, it is possible to specify incompatible options.

If you encounter warnings and errors during development, be sure to make all related changes atomically, and reassess the logic of the operation you’re performing.

For example, changing the pull-down interpretation of footage won’t work unless there’s a difference between it’s native and conformed frame rate.

Depending on what you’re trying to accomplish, it may make sense to abort all of your operations at that point, inform the user of the problem encountered.

### AEGP_FootageSuite5

| **Function**                   | **Purpose**                                    |
| ------------------------------ | ---------------------------------------------- |
| `AEGP\_GetMainFootageFromItem` | Returns an error if item isn’t a footage item. |

Used to convert an item handle to a footage handle.

```cpp
AEGP\_GetMainFootageFromItem(
 AEGP\_ItemH itemH,
 AEGP\_FootageH \*footagePH);

```

|
| `AEGP\_GetProxyFootageFromItem` | Returns an error if item has no proxy. Returns the proxy footage handle.
:::tip: a composition can have a proxy.

```cpp
AEGP\_GetProxyFootageFromItem(
 AEGP\_ItemH itemH,
 AEGP\_FootageH \*proxy\_ftgPH);

```

|
| `AEGP\_GetFootageNumFiles` | Returns the number of data (RGBA or audio) files, and the number of files per frame (may be greater than one if the footage has auxiliary channels).

```cpp
AEGP\_GetFootageNumFiles(
 AEGP\_FootageH footageH,
 A\_long \*num\_filesPL0,
 A\_long \*files\_per\_frmPL0);

```

|
| `AEGP\_GetFootagePath` | Get fully realized path to footage source file.
Retrieves the footage path for a piece of footage (or for the specified frame of a footage sequence).
`frame\_numL` ranges from `0 to num\_main\_files`, as obtained using `AEGP\_GetFootageNumFiles` from [AEGP_FootageSuite5](#aegps-aegp-suites-aegp-footagesuite).
`AEGP\_FOOTAGE\_MAIN\_FILE\_INDEX` is the main file.
The path is a handle to a NULL-terminated `A\_UTF16Char` string, and must be disposed with AEGP_FreeMemHandle.

```cpp
AEGP\_GetFootagePath(
 AEGP\_FootageH footageH,
 A\_long frame\_numL,
 A\_long file\_indexL,
 AEGP\_MemHandle \*unicode\_pathPH);

```

|
| `AEGP\_GetFootageSignature` | Retrieves the footage signature of specified footage.

```cpp
AEGP\_GetFootageSignature(
 AEGP\_FootageH footageH,
 AEGP\_FootageSignature \*sigP);

```

The signature will be one of the following:

- `AEGP\_FootageSignature\_NONE`
- `AEGP\_FootageSignature\_MISSING`
- `AEGP\_FootageSignature\_SOLID`

|
| `AEGP\_NewFootage` | Creates a new footage item. The file path is a NULL-terminated UTF-16 string with platform separators.
:::tip that footage filenames with colons are not allowed, since colons are used as path separators in the HFS+ file system.

```cpp
AEGP\_NewFootage(
 AEGP\_PluginID aegp\_plugin\_id,
 const A\_UTF16Char \*pathZ,
 const AEGP\_FootageLayerKey \*layer\_infoP0,
 const AEGP\_FileSequenceImportOptions \*sequence\_optionsP0,
 AEGP\_InterpretationStyle interp\_style,
 void \*reserved,
 AEGP\_FootageH \*footagePH);

```

:::tip the optional params. If `allow\_interpretation\_dialogB` is FALSE, After Effects will guess the alpha interpretation.

```cpp
typedef struct {
 A\_long layer\_idL;
 A\_long layer\_indexL
 char \*nameAC;
 AEGP\_LayerDrawStyle draw\_style;
} AEGP\_FootageLayerKey;

```

`AEGP\_LayerDrawStyle` can be:

- `AEGP\_LayerDrawStyle\_LAYER\_BOUNDS`
- `AEGP\_LayerDrawStyle\_DOCUMENT\_BOUNDS`

`AEGP\_InterpretationStyle` can be:

- `AEGP\_InterpretationStyle\_NO\_DIALOG\_GUESS` Will guess alpha interpretation even if file contains unknown alpha interpretation and user pref says to ask user.
- `AEGP\_InterpretationStyle\_DIALOG\_OK` Optionally can show a dialog.
- `AEGP\_InterpretationStyle\_NO\_DIALOG\_NO\_GUESS` Used for replace footage implementation.

|
| `AEGP\_AddFootageToProject` | Adds a footage item to a project. Footage will be adopted by the project, and may be added only once.
This is Undo-able; do not dispose of the returned added item if it’s undone.

```cpp
AEGP\_AddFootageToProject(
 AEGP\_FootageH footageH,
 AEGP\_ItemH folderH,
 AEGP\_ItemH \*add\_itemPH0);

```

|
| `AEGP\_SetItemProxyFootage` | Sets footage as the proxy for an item. Will be adopted by the project.
This is Undo-able; do not dispose of the returned added item if it’s undone.

```cpp
AEGP\_SetItemProxyFootage(
 AEGP\_FootageH footageH,
 AEGP\_ItemH itemH);

```

|
| `AEGP\_ReplaceItemMainFootage` | Replaces footage for an item. The item will replace the main footage for this item.
This is Undo-able; do not dispose of the returned added item if it’s undone.

```cpp
AEGP\_ReplaceItemMainFootage(
 AEGP\_FootageH footageH,
 AEGP\_ItemH itemH);

```

|
| `AEGP\_DisposeFootage` | Deletes a footage item. Do not dispose of footage you did not create, or that has been added to the project.

```cpp
AEGP\_DisposeFootage(
 AEGP\_FootageH footageH);

```

|
| `AEGP\_GetFootageInterpretation` | Populates an AEGP_FootageInterp describing the settings of the `AEGP\_FootageH`.
There is no way to create a valid `AEGP\_FootageInterp` other than by using this function.

```cpp
AEGP\_GetFootageInterpretation(
 const AEGP\_ItemH itemH,
 A\_Boolean proxyB,
 AEGP\_FootageInterp \*interpP);

```

If proxyB is `TRUE`, the proxy footage’s settings are retrieved. |
| `AEGP\_SetFootageInterpretation` | Apply the settings in the `AEGP\_FootageInterp` to the `AEGP\_FootageH`. Undo-able.

```cpp
AEGP\_SetFootageInterpreta tion(
 const AEGP\_ItemH itemH,
 A\_Boolean proxyB,
 const AEGP\_FootageInterp \*interpP);

```

If `proxyB` is `TRUE`, the proxy footage’s settings are modified. |
| `AEGP\_GetFootageLayerKey` | Populates an `AEGP\_FootageLayerKey` describing the footage.

```cpp
AEGP\_GetFootageLayerKey(
 AEGP\_FootageH footageH,
 AEGP\_FootageLayerKey\* layerKeyP);

```

|
| `AEGP\_NewPlaceholderFootage` | Deprecated. Adds a new placeholder footage item to the project.
Using this function for missing footage will cause the user to search for each individual missing file, regardless of whether or not they’re all in the same directory.
Undo-able.

```cpp
AEGP\_NewPlaceholderFootage(
 AEGP\_PluginID plugin\_id,
 const A\_char \*nameZ,
 A\_long width,
 A\_long height,
 const A\_Time \*durationPT,
 AEGP\_FootageH \*footagePH);

```

|
| `AEGP\_NewPlaceholderFootageWithPath` | This is the hip new way to add references to footage that can’t be found right this moment.
The file path is a NULL-terminated UTF-16 string with platform separators.
In CS6 and earlier, file_type was ignored and we previously recommendedsetting it to `AEIO\_FileType\_NONE`.
Starting in CC, `AEIO\_FileType\_NONE` is now a warning condition.
If you pass `AEIO\_FileType\_ANY`, then path MUST exist.
If the path may not exist, pass `AEIO\_FileType\_DIR` for folder, or `AEIO\_FileType\_GENERIC` for a file.

```cpp
AEGP\_NewPlaceholderFootageWithPath(
 AEGP\_PluginID plugin\_id,
 const A\_UTF16Char \*pathZ,
 AEGP\_Platform path\_platform,
 AEIO\_FileType file\_type,
 A\_long widthL,
 A\_long heightL,
 const A\_Time \*durationPT,
 AEGP\_FootageH \*footagePH);

```

|
| `AEGP\_NewSolidFootage` | This is the way to add a solid.
Until the footage is added to the project, the caller owns the `AEGP\_FootageH`
(and must dispose of it if, and only if, it isn’t added to the project).

```cpp
AEGP\_NewSolidFootage(
 const A\_char \*nameZ,
 A\_long width,
 A\_long height,
 const AEGP\_ColorVal \*colorP,
 AEGP\_FootageH \*footagePH);

```

|
| `AEGP\_GetSolidFootageColor` | Returns the color of a given solid. Returns an error if the `AEGP\_ItemH` is not a solid.

```cpp
AEGP\_GetSolidFootageColor(
 AEGP\_ItemH itemH,
 A\_Boolean proxyB,
 AEGP\_ColorVal \*colorP);

```

If `proxyB` is `TRUE`, the proxy solid’s color is retrieved. |
| `AEGP\_SetSolidFootageColor` | Sets the color of a solid. Undo-able.

```cpp
AEGP\_SetSolidFootageColor(
 AEGP\_ItemH itemH,
 A\_Boolean proxyB,
 AEGP\_ColorVal \*colorP);

```

If `proxyB` is `TRUE`, the proxy solid’s color is set. |
| `AEGP\_SetSolidFootageDimensions` | Sets the dimensions of a solid. Undo-able.

```cpp
AEGP\_SetSolidFootageDimensions(
 AEGP\_ItemH itemH,
 A\_Boolean proxyB,
 A\_long widthL,
 A\_long heightL);

```

If `proxyB` is `TRUE`, the proxy solid’s dimensions are modified. Returns an error if the item isn’t a solid. |
| `AEGP\_GetFootageSoundDataFormat` | Retrieves information about the audio data in the footage item (by populating the `AEGP\_SoundDataFormat` you passed in).

```cpp
AEGP\_GetFootageSoundDataFormat(
 AEGP\_FootageH footageH,
 AEGP\_SoundDataFormat \*formatP);

```

|
| `AEGP\_GetFootageSequenceImportOptions` | Populates and returns a `AEGP\_FileSequenceImportOptions` describing the given `AEGP\_FootageH`.

```cpp
AEGP\_GetFootageSequenceImportOptions(
 AEGP\_FootageH footageH,
 AEGP\_FileSequenceImportOptions \*optionsP);

```

|

### AEGP_FootageInterp Structure

| **Member**                 | **Purpose**                                  |
| -------------------------- | -------------------------------------------- |
| `AEGP\_InterlaceLabel il;` | The interlace settings for the footage item. |

```cpp
A\_u\_long signature; // 'FIEL'
A\_short version;
FIEL\_Type type;
FIEL\_Order order;
A\_u\_long reserved;

```

FIEL_Type is one of the following:

- `FIEL\_Type\_FRAME\_RENDERED`
- `FIEL\_Type\_INTERLACED`
- `FIEL\_Type\_HALF\_HEIGHT`
- `FIEL\_Type\_FIELD\_DOUBLED`

`FIEL\_Type\_FIELD\_DOUBLED` means 60 full-sized field doubled frames per second.
`FIEL\_Order` is either `FIEL\_Order\_UPPER\_FIRST` or `FIEL\_Order\_LOWER\_FIRST`. |
| `AEGP\_AlphaLabel al;` |

```cpp
AEGP\_AlphaFlag flags;
A\_u\_char redCu;
A\_u\_char greenCu;
A\_u\_char blueCu;

```

`AEGP\_AlphaFlags` is one or more of the following, OR’d together:

- `AEGP\_AlphaPremul`
- `AEGP\_AlphaInverted`
- `AEGP\_AlphaIgnore`

If `AEGP\_AlphaPremul` is not set, straight alpha is assumed.
`AEGP\_AlphaInverted` indicates that higher values are transparent, instead of lower. |
| `AEGP\_PulldownPhase pd;` | Indicates the phase for use in 3:2 pulldown. One of the following:

- `AEGP\_PulldownPhase\_NO\_PULLDOWN`,
- `AEGP\_PulldownPhase\_WSSWW`,
- `AEGP\_PulldownPhase\_SSWWW`,
- `AEGP\_PulldownPhase\_SWWWS`,
- `AEGP\_PulldownPhase\_WWWSS`,
- `AEGP\_PulldownPhase\_WWSSW`,
- `AEGP\_PulldownPhase\_WWWSW`,
- `AEGP\_PulldownPhase\_WWSWW`,
- `AEGP\_PulldownPhase\_WSWWW`,
- `AEGP\_PulldownPhase\_SWWWW`,
- `AEGP\_PulldownPhase\_WWWWS`

|
| `AEGP\_LoopBehavior loop;` | Indicates the number of times the footage should loop.

```cpp
A\_long loops;
A\_long reserved;

```

|
| `A\_Ratio pix\_aspect\_ratio;` | Expresses the pixel aspect ratio of the footage (x over y). |
| `A\_FpLong native\_fpsF;` | The original framerate (in frames per second) of the footage item. |
| `A\_FpLong conform\_fpsF;` | The framerate being used for the footage item. |
| `A\_long depthL;` | The pixel depth of the footage. One of the following:

- `AEGP\_Footage\_Depth\_1`
- `AEGP\_Footage\_Depth\_2`
- `AEGP\_Footage\_Depth\_4`
- `AEGP\_Footage\_Depth\_8`
- `AEGP\_Footage\_Depth\_16`
- `AEGP\_Footage\_Depth\_24`
- `AEGP\_Footage\_Depth\_30`
- `AEGP\_Footage\_Depth\_32`
- `AEGP\_Footage\_Depth\_GRAY\_2`
- `AEGP\_Footage\_Depth\_GRAY\_4`
- `AEGP\_Footage\_Depth\_GRAY\_8`
- `AEGP\_Footage\_Depth\_48`
- `AEGP\_Footage\_Depth\_64`
- `AEGP\_Footage\_Depth\_GRAY\_16`

|
| `A\_Boolean motion\_dB;` | Indicates whether motion de-interlacing is being applied to the footage item. |

---

## Manage Layers

`AEGP\_LayerSuite` provides information about layers within a composition, and the relationship(s) between the source and layer times.

As most After Effects usage boils down to layer manipulation, this is among the largest function suites in our API.

### AEGP_LayerSuite8

| **Function**             | **Purpose**                                    |
| ------------------------ | ---------------------------------------------- |
| `AEGP\_GetCompNumLayers` | Obtains the number of layers in a composition. |

```cpp
AEGP\_GetCompNumLayers(
 AEGP\_CompH compH,
 A\_long \*num\_layersPL);

```

|
| `AEGP\_GetCompLayerByIndex` | Get a `AEGP\_LayerH` from a composition. Zero is the foremost layer.

```cpp
AEGP\_GetCompLayerByIndex(
 AEGP\_CompH compH,
 A\_long layer\_indexL,
 AEGP\_LayerH \*layerPH);

```

|
| `AEGP\_GetActiveLayer` | Get the active layer. If a Layer or effect controls palette is active, the active layer is that associated with the front-most tab in the window.
If a composition or timeline window is active, the active layer is the selected layer (if only one is selected; otherwise `NULL` is returned).

```cpp
AEGP\_GetActiveLayer(
 AEGP\_LayerH \*layerPH);

```

|
| `AEGP\_GetLayerIndex` | Get the index of the layer (0 is the topmost layer in the composition).

```cpp
AEGP\_GetLayerIndex(
 AEGP\_LayerH layerH,
 A\_long \*layer\_indexPL);

```

|
| `AEGP\_GetLayerSourceItem` | Get the AEGP_ItemH of the layer’s source item.

```cpp
AEGP\_GetLayerSourceItem(
 AEGP\_LayerH layerH,
 AEGP\_ItemH \*source\_itemPH);

```

|
| `AEGP\_GetLayerSourceItemID` | Retrieves the ID of the given `AEGP\_LayerH`.
This is useful when hunting for a specific layer’s ID in an `AEGP\_StreamVal`.

```cpp
AEGP\_GetLayerSourceItemID(
 AEGP\_LayerH layerH,
 A\_long \*source\_idPL);

```

|
| `AEGP\_GetLayerParentComp` | Get the AEGP_CompH of the composition containing the layer.

```cpp
AEGP\_GetLayerParentComp(
 AEGP\_LayerH layerH,
 AEGP\_CompH \*compPH);

```

|
| `AEGP\_GetLayerName` | Get the name of a layer.
Both `utf\_layer\_namePH0` and `utf\_source\_namePH0` point to null terminated UTF-16 strings.
They must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetLayerName(
 AEGP\_PluginID pluginID,
 AEGP\_LayerH layerH,
 AEGP\_MemHandle \*utf\_layer\_namePH0,
 AEGP\_MemHandle \*utf\_source\_namePH0);

```

|
| `AEGP\_GetLayerQuality` | Get the quality of a layer.

```cpp
AEGP\_GetLayerQuality(
 AEGP\_LayerH layerH,
 AEGP\_LayerQuality \*qualityP);

```

Layer quality is one of the following flags:

- `AEGP\_LayerQual\_NONE`
- `AEGP\_LayerQual\_WIREFRAME`
- `AEGP\_LayerQual\_DRAFT`
- `AEGP\_LayerQual\_BEST`

|
| `AEGP\_SetLayerQuality` | Sets the quality of a layer (see flag values above). Undoable.

```cpp
AEGP\_SetLayerQuality(
 AEGP\_LayerH layerH,
 AEGP\_LayerQuality quality);

```

|
| `AEGP\_GetLayerFlags` | Get flags for a layer.

```cpp
AEGP\_GetLayerFlags(
 AEGP\_LayerH layerH,
 AEGP\_LayerFlags \*layer\_flagsP);

```

- `AEGP\_LayerFlag\_NONE`
- `AEGP\_LayerFlag\_VIDEO\_ACTIVE`,
- `AEGP\_LayerFlag\_AUDIO\_ACTIVE`,
- `AEGP\_LayerFlag\_EFFECTS\_ACTIVE`,
- `AEGP\_LayerFlag\_MOTION\_BLUR`,
- `AEGP\_LayerFlag\_FRAME\_BLENDING`,
- `AEGP\_LayerFlag\_LOCKED`,
- `AEGP\_LayerFlag\_SHY`,
- `AEGP\_LayerFlag\_COLLAPSE`,
- `AEGP\_LayerFlag\_AUTO\_ORIENT\_ROTATION`,
- `AEGP\_LayerFlag\_ADJUSTMENT\_LAYER`,
- `AEGP\_LayerFlag\_TIME\_REMAPPING`,
- `AEGP\_LayerFlag\_LAYER\_IS\_3D`,
- `AEGP\_LayerFlag\_LOOK\_AT\_CAMERA`,
- `AEGP\_LayerFlag\_LOOK\_AT\_POI`,
- `AEGP\_LayerFlag\_SOLO`,
- `AEGP\_LayerFlag\_MARKERS\_LOCKED`,
- `AEGP\_LayerFlag\_NULL\_LAYER`,
- `AEGP\_LayerFlag\_HIDE\_LOCKED\_MASKS`,
- `AEGP\_LayerFlag\_GUIDE\_LAYER`,
- `AEGP\_LayerFlag\_ENVIRONMENT\_LAYER`,
- `AEGP\_LayerFlag\_ADVANCED\_FRAME\_BLENDING`, `True` only if pixel motion frame blending is on for the layer.
- `AEGP\_LayerFlag\_SUBLAYERS\_RENDER\_SEPARATELY`, Used to get/set the state of per-character 3D enablement on a text layer.
- `AEGP\_LayerFlag\_ENVIRONMENT\_LAYER`, New in CS6.
  |
  | `AEGP\_SetLayerFlag` | Sets one layer flag at a time. Undoable.

```cpp
AEGP\_SetLayerFlag(
 AEGP\_LayerH layerH,
 AEGP\_LayerFlags single\_flag,
 A\_Boolean valueB);

```

|
| `AEGP\_IsLayerVideoReallyOn` | Determines whether the layer’s video is visible.
This is necessary to account for ‘solo’ status of other layers in the composition; non-solo’d layers are still on.

```cpp
AEGP\_IsLayerVideoReallyOn(
 AEGP\_LayerH layerH,
 A\_Boolean \*onPB);

```

|
| `AEGP\_IsLayerAudioReallyOn` | Accounts for solo status of other layers in the composition.

```cpp
AEGP\_IsLayerAudioReallyOn(
 AEGP\_LayerH layerH,
 A\_Boolean \*onPB);

```

|
| `AEGP\_GetLayerCurrentTime` | Get current time, in layer or composition timespace. This value is not updated during rendering.
NOTE: If a layer starts at other than time 0 or is time-stretched other than 100%, layer time and composition time are distinct.

```cpp
AEGP\_GetLayerCurrentTime(
 AEGP\_LayerH layerH,
 AEGP\_LTimeMode time\_mode,
 A\_Time \*curr\_timePT);

```

|
| `AEGP\_GetLayerInPoint` | Get time of first visible frame in composition or layer time.
In layer time, the `in\_pointPT` is always 0.

```cpp
AEGP\_GetLayerInPoint(
 AEGP\_LayerH layerH,
 AEGP\_LTimeMode time\_mode,
 A\_Time \*in\_pointPT);

```

|
| `AEGP\_GetLayerDuration` | Get duration of layer, in composition or layer time, in seconds.

```cpp
AEGP\_GetLayerDuration(
 AEGP\_LayerH layerH,
 AEGP\_LTimeMode time\_mode,
 A\_Time \*durationPT);

```

|
| `AEGP\_SetLayerInPointAndDuration` | Set duration and in point of layer in composition or layer time. Undo-able.

```cpp
AEGP\_SetLayerInPointAndDuration(
 AEGP\_LayerH layerH,
 AEGP\_LTimeMode time\_mode,
 const A\_Time \*in\_pointPT,
 const A\_Time \*durationPT);

```

|
| `AEGP\_GetLayerOffset` | Get the offset from the start of the composition to layer time 0, in composition time.

```cpp
AEGP\_GetLayerOffset(
 AEGP\_LayerH layerH,
 A\_Time \*offsetPT);

```

|
| `AEGP\_SetLayerOffset` | Set the offset from the start of the composition to the first frame of the layer, in composition time. Undoable.

```cpp
AEGP\_SetLayerOffset(
 AEGP\_LayerH layerH,
 A\_Time \*offsetPT);

```

|
| `AEGP\_GetLayerStretch` | Get stretch factor of a layer.

```cpp
AEGP\_GetLayerStretch(
 AEGP\_LayerH layerH,
 A\_Ratio \*stretchPRt);

```

|
| `AEGP\_SetLayerStretch` | Set stretch factor of a layer.

```cpp
AEGP\_SetLayerStretch(
 AEGP\_LayerH layerH,
 A\_Ratio \*stretchPRt);

```

|
| `AEGP\_GetLayerTransferMode` | Get transfer mode of a layer.

```cpp
AEGP\_GetLayerTransferMode(
 AEGP\_LayerH layerH,
 AEGP\_LayerTransferMode \*modeP);

```

|
| `AEGP\_SetLayerTransferMode` | Set transfer mode of a layer. Undoable.

```cpp
AEGPSetLayerTransferMode(
 AEGP\_LayerH layerH,
 AEGP\_LayerTransferMode \*modeP);

```

As of 6.5, when you make a layer a track matte, the layer in front of it will be disabled,
as when you do this via the interface. |
| `AEGP\_IsAddLayerValid` | Tests whether it’s currently valid to add a given item to a composition.
A composition cannot be added to itself, or to any compositions which it contains; other conditions can preclude successful adding too.
Adding a layer without first using this function will produce undefined results.

```cpp
AEGP\_IsAddLayerValid(
 AEGP\_ItemH item\_to\_addH,
 AEGP\_CompH into\_compH,
 A\_Boolean \*validPB);

```

|
| `AEGP\_AddLayer` | Add an item to the composition, above all other layers. Undo-able.
Use `AEGP\_IsAddLayerValid()` first, to confirm that it’s possible.

```cpp
AEGP\_AddLayer(
 AEGP\_ItemH item\_to\_addH,
 AEGP\_CompH into\_compH,
 A\_Boolean \*added\_layerPH0);

```

|
| `AEGP\_ReorderLayer` | Change the order of layers. Undoable.

```cpp
AEGP\_ReorderLayer(
 AEGP\_LayerH layerH,
 A\_long layer\_indexL);

```

To add a layer to the end of the composition, to use `layer\_indexL = AEGP\_REORDER\_LAYER\_TO\_END` |
| `AEGP\_GetLayerMaskedBounds` | Given a layer’s handle and a time, returns the bounds of area visible with masks applied.

```cpp
AEGP\_GetLayerMaskedBounds(
 AEGP\_LayerH layerH,
 const A\_Time \*comp\_timePT,
 A\_FloatRect \*boundsPR);

```

|
| `AEGP\_GetLayerObjectType` | Returns a layer’s object type.

```cpp
AEGP\_GetLayerObjectType(
 AEGP\_LayerH layerH,
 AEGP\_ObjectType \*object\_type);

```

- `AEGP\_ObjectType\_AV`
- `AEGP\_ObjectType\_LIGHT`,
- `AEGP\_ObjectType\_CAMERA`,
- `AEGP\_ObjectType\_TEXT`
  |
  | `AEGP\_IsLayer3D` | Is the footage item a 3D layer. All AV layers are either 2D or 3D.

```cpp
AEGP\_IsLayer3D(
 AEGP\_LayerH layerH,
 A\_Boolean \*is\_3DPB);

```

|
| `AEGP\_IsLayer2D` | Is the footage item a 2D layer. All AV layers are either 2D or 3D.

```cpp
AEGP\_IsLayer2D(
 AEGP\_LayerH layerH,
 A\_Boolean \*is\_2DPB);

```

|
| `AEGP\_IsVideoActive` | Given composition time and a layer, see if the layer will render.
Time mode is either `AEGP\_LTimeMode\_LayerTime` or `AEGP\_LTimeMode\_CompTime`.

```cpp
AEGP\_IsVideoActive(
 AEGP\_LayerH layerH,
 AEGP\_LTimeMode time\_mode,
 A\_Time \*comp\_timePT,
 A\_Boolean \*is\_activePB);

```

|
| `AEGP\_IsLayerUsedAsTrackMatte` | Is the layer used as a track matte?

```cpp
AEGP\_IsLayerUsedAsTrackMatte(
 AEGP\_LayerH layerH,
 A\_Boolean fill\_must\_be\_activeB,
 A\_Boolean \*is\_track\_mattePB);

```

|
| `AEGP\_DoesLayerHaveTrackMatte` | Does this layer have a Track Matte?

```cpp
AEGP\_DoesLayerHaveTrackMatte(
 AEGP\_LayerH layerH,
 A\_Boolean \*has\_track\_mattePB);

```

|
| `AEGP\_ConvertCompToLayerTime` | Given a time in composition space, returns the time relative to the layer source footage.

```cpp
AEGP\_ConvertCompToLayerTime(
 AEGP\_LayerH layerH,
 const A\_Time \*comp\_timeP,
 A\_Time \*layer\_timeP);

```

|
| `AEGP\_ConvertLayerToCompTime` | Given a time in layer space, find the corresponding time in composition space.

```cpp
AEGP\_ConvertLayerToCompTime(
 AEGP\_LayerH layerH,
 const A\_Time \*layer\_timePT,
 A\_Time \*comp\_timePT);

```

|
| `AEGP\_GetLayerDancingRandValue` | Used by the dancing dissolve transfer function.

```cpp
AEGP\_GetLayerDancingRandValue(
 AEGP\_LayerH layerH,
 const A\_Time \*comp\_timePT,
 A\_long \*rand\_valuePL);

```

|
| `AEGP\_GetLayerID` | Supplies the layer’s unique ID. This ID never changes during the lifetime of the project.

```cpp
AEGP\_GetLayerID(
 AEGP\_LayerH layerH,
 AEGP\_LayerIDVal \*id\_valP);

```

|
| `AEGP\_GetLayerToWorldXform` | Given a layer handle and time, returns the layer-to-world transformation matrix.

```cpp
AEGP\_GetLayerToWorldXform(
 AEGP\_LayerH aegp\_layerH,
 const A\_Time \*comp\_timeP,
 A\_Matrix4 \*transform);

```

|
| `AEGP\_GetLayerToWorldXformFromView` | Given a layer handle, the current (composition) time, and the requested view time,
returns the translation between the user’s view and the layer, corrected for the composition’s current aspect ratio.

```cpp
AEGP\_GetLayerToWorldXformFromView(
 AEGP\_LayerH aegp\_layerH,
 const A\_Time \*view\_timeP,
 const A\_Time \*comp\_timeP,
 A\_Matrix4 \*transform);

```

|
| `AEGP\_SetLayerName` | Sets the name of a layer. Undo-able. new_nameZ points to a null terminated UTF-16 string.

```cpp
AEGP\_SetLayerName(
 AEGP\_LayerH aegp\_layerH,
 const A\_UTF16Char \*new\_nameZ);

```

|
| `AEGP\_GetLayerParent` | Retrieves the handle to a layer’s parent (none if not parented).

```cpp
AEGP\_GetLayerParent(
 AEGP\_LayerH layerH,
 AEGP\_LayerH \*parent\_layerPH);

```

|
| `AEGP\_SetLayerParent` | Sets a layer’s parent layer.

```cpp
AEGP\_SetLayerParent(
 AEGP\_LayerH layerH,
 const AEGP\_LayerH parent\_layerH);

```

|
| `AEGP\_DeleteLayer` | Deletes a layer. Can you believe it took us three suite versions to add a delete function? Neither can we.

```cpp
AEGP\_DeleteLayer(
 AEGP\_LayerH layerH);

```

|
| `AEGP\_DuplicateLayer` | Duplicates the layer. Undoable.

```cpp
AEGP\_DuplicateLayer(
 AEGP\_LayerH orig\_layerH,
 AEGP\_LayerH \*dupe\_layerPH);

```

|
| `AEGP\_GetLayerFromLayerID` | Retrieves the `AEGP\_LayerH` associated with a given `AEGP\_LayerIDVal` (which is what you get when accessing an effect’s layer parameter stream).

```cpp
AEGP\_GetLayerFromLayerID(
 AEGP\_CompH parent\_compH,
 AEGP\_LayerIDVal id,
 AEGP\_LayerH \*layerPH);

```

|
| `AEGP\_GetLayerLabel` | Gets a layer’s `AEGP\_LabelID`.

```cpp
AEGP\_GetLayerLabel(
 AEGP\_LayerH layerH,
 AEGP\_LabelID \*labelP);

```

|
| `AEGP\_SetLayerLabel` | Sets a layer’s `AEGP\_LabelID`. Undoable.

```cpp
AEGP\_SetLayerLabel(
 AEGP\_LayerH layerH,
 AEGP\_LabelID label);

```

|
| `AEGP\_GetLayerSamplingQuality` | New in CC. Get the sampling quality of a layer.

```cpp
AEGP\_GetLayerSamplingQuality(
 AEGP\_LayerH layerH,
 AEGP\_LayerSamplingQuality \*label);

```

Layer sampling quality is one of the following flags:

- `AEGP\_LayerSamplingQual\_BILINEAR`
- `AEGP\_LayerSamplingQual\_BICUBIC`

|
| `AEGP\_SetLayerSamplingQuality` | New in CC. Sets the sampling quality of a layer (see flag values above).
Option is explicitly set on the layer independent of layer quality.
If you want to force it on you must also set the layer quality to `AEGP\_LayerQual\_BEST` with `AEGP\_SetLayerQuality`.
Otherwise it will only be using the specified layer sampling quality whenever the layer quality is set to `AEGP\_LayerQual\_BEST`.
Undoable.

```cpp
AEGP\_SetLayerSamplingQuality(
 AEGP\_LayerH layerH,
 AEGP\_LayerSamplingQuality label);

```

|

---

## Layer Creation :::tips

All layers created using AEGP calls will start at composition time 0, and have the duration of the composition.

Use `AEGP\_SetLayerOffset()` and `AEGP\_SetLayerInPointAndDuration()` from [AEGP_LayerSuite8](#aegps-aegp-suites-aegp-layersuite) to properly set the layer’s time information.

When the layer stretch factor (obtained using `AEGP\_GetLayerStretch` in [AEGP_LayerSuite8](#aegps-aegp-suites-aegp-layersuite), naturally) is not 100%, the following computation will be needed to yield the correct layer offset:

```cpp
offset = compIn - stretch \* layerIn;

```

---

## Communication With A Layer’s Effects

Access the effects applied to a layer. This suite provides access to all parameter data streams.

Use the [Stream Suite](#aegps-aegp-suites-stream-suite) to work with those streams.

An `AEGP\_Effect\_RefH` is a reference to an applied effect. An `AEGP\_InstalledEffectKey` is a reference to an installed effect, which may or may not be currently applied to anything.

If Foobarocity is applied to a layer twice, there will be two distinct `AEGP\_Effect\_RefHs`, but they’ll both return the same `AEGP\_InstalledEffectKey`.

### AEGP_EffectSuite4

| **Function**               | **Purpose**                               |
| -------------------------- | ----------------------------------------- |
| `AEGP\_GetLayerNumEffects` | Get number of effects applied to a layer. |

```cpp
AEGP\_GetLayerNumEffects(
 AEGP\_LayerH layerH,
 A\_long \*num\_effectsPL);

```

|
| `AEGP\_GetLayerEffectByIndex` | Retrieves (by index) a reference to an effect applied to the layer.

```cpp
AEGP\_GetLayerEffectByIndex(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_LayerH layerH,
 AEGP\_EffectIndex effect\_indexL,
 AEGP\_EffectRefH \*effectPH);

```

|
| `AEGP\_GetInstalledKeyFromLayerEffect` | Given an `AEGP\_EffectRefH`, retrieves its associated `AEGP\_InstalledEffectKey`.

```cpp
AEGP\_GetInstalledKeyFromLayerEffect(
 AEGP\_EffectRefH effect\_refH,
 AEGP\_InstalledEffectKey \*installed\_keyP);

```

|
| `AEGP\_GetEffectParamUnionByIndex` | Returns description of effect parameter.
Do not use the value(s) in the ParamDef returned by this function (Use `AEGP\_GetNewStreamValue()` instead);
it’s provided so AEGPs can access parameter defaults, checkbox names, and pop-up strings.
Use `AEGP\_GetEffectNumParamStreams()` from [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite) to get the stream count,
useful for determining the maximum `param\_index`.
The last parameter is optional;

```cpp
AEGP\_GetEffectParamUnionByIndex(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_EffectRefH effectH,
 PF\_ParamIndex param\_index,
 PF\_ParamType \*param\_typeP
 PF\_ParamDefUnion \*uP0);

```

|
| `AEGP\_GetEffectFlags` | Obtains the flags for the given `AEGP\_EffectRefH`.

```cpp
AEGP\_GetEffectFlags(
 AEGP\_EffectRefH effect\_refH,
 AEGP\_EffectFlags \*effect\_flagsP);

```

Flags will be a combination of the following:

- `AEGP\_EffectFlags\_NONE`
- `AEGP\_EffectFlags\_ACTIVE`
- `AEGP\_EffectFlags\_AUDIO\_ONLY`
- `AEGP\_EffectFlags\_AUDIO\_TOO`
- `AEGP\_EffectFlags\_MISSING`

|
| `AEGP\_SetEffectFlags` | Sets the flags (enumerated above) for the given `AEGP\_EffectRefH`, masked by a different set of effect flags.

```cpp
AEGP\_SetEffectFlags(
 AEGP\_EffectRefH effect\_refH,
 AEGP\_EffectFlags mask,
 AEGP\_EffectFlags effect\_flags);

```

|
| `AEGP\_ReorderEffect` | Change the order of applied effects (pass the requested index).

```cpp
AEGP\_ReorderEffect(
 AEGP\_EffectRefH effect\_refH,
 A\_long effect\_indexL);

```

|
| `AEGP\_EffectCallGeneric` | Call an effect plug-in, and pass it a pointer to any data you like; the effect can modify it.
This is how AEGPs communicate with effects.
Pass `PF\_Cmd\_COMPLETELY\_GENERAL` for `effect\_cmd`.

```cpp
AEGP\_EffectCallGeneric(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_EffectRefH effectH,
 const A\_Time \*timePT,
 PF\_Cmd effect\_cmd,
 void \*extraPV);

```

|
| `AEGP\_DisposeEffect` | Disposes of an AEGP_EffectRefH. Use this to dispose of any AEGP_EffectRefH returned by After Effects.

```cpp
AEGP\_DisposeEffect(
 AEGP\_EffectRefH effectH);

```

|
| `AEGP\_ApplyEffect` | Apply an effect to a given layer. Returns the newly-created `AEGP\_EffectRefH`.

```cpp
AEGP\_ApplyEffect(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_LayerH layerH,
 AEGP\_InstalledEffectKey installed\_key,
 AEGP\_EffectRefH \*effect\_refPH);

```

|
| `AEGP\_DeleteLayerEffect` | Remove an applied effect.

```cpp
AEGP\_DeleteLayerEffect(
 AEGP\_EffectRefH effect\_refH);

```

|
| `AEGP\_GetNumInstalledEffects` | Returns the count of effects installed in After Effects.

```cpp
AEGP\_GetNumInstalledEffects(
 A\_long \*num\_installed\_effectsPL);

```

|
| `AEGP\_GetNextInstalledEffect` | Returns the `AEGP\_InstalledEffectKey` of the next installed effect.
Pass `AEGP\_InstalledEffectKey\_NONE` as the first parameter to obtain the first `AEGP\_InstalledEffectKey`.

```cpp
AEGP\_GetNextInstalledEffect(
 AEGP\_InstalledEffectKey key,
 AEGP\_InstalledEffectKey \*next\_keyPH);

```

|
| `AEGP\_GetEffectName` | Get name of the effect. `nameZ` can be up to `AEGP\_MAX\_EFFECT\_NAME\_SIZE + 1` long.

```cpp
AEGP\_GetEffectName(
 AEGP\_InstalledEffectKey installed\_key,
 A\_char \*nameZ);

```

:::tip: use `AEGP\_SetStreamName` to change the display name of an effect. |
| `AEGP\_GetEffectMatchName` | Get match name of an effect (defined in PiPL). `match\_nameZ` up to `AEGP\_MAX\_EFFECT\_MATCH\_NAME\_SIZE + 1` long.

```cpp
AEGP\_GetEffectMatchName(
 AEGP\_InstalledEffectKey installed\_key,
 A\_char \*match\_nameZ);

```

Match names are in 7-bit ASCII. UI names are in the current application runtime encoding;
for example, ISO 8859-1 for most languages on Windows. |
| `AEGP\_GetEffectCategory` | Menu category of effect. `categoryZ` can be up to `AEGP\_MAX\_EFFECT\_CATEGORY\_NAME\_SIZE + 1` long.

```cpp
AEGP\_GetEffectCategory(
 AEGP\_InstalledEffectKey installed\_key,
 A\_char \*categoryZ);

```

|
| `AEGP\_DuplicateEffect` | Duplicates a given `AEGP\_EffectRefH`. Caller must dispose of duplicate when finished.

```cpp
AEGP\_DuplicateEffect(
 AEGP\_EffectRefH orig\_effect\_refH,
 AEGP\_EffectRefH \*dupe\_refPH);

```

|
| `AEGP\_NumEffectMask` | New in CC 2014. How many masks are on this effect?

```cpp
AEGP\_NumEffectMask(
 AEGP\_EffectRefH effect\_refH,
 A\_u\_long \*num\_masksPL);

```

|
| `AEGP\_GetEffectMaskID` | New in CC 2014. For a given mask_indexL, returns the corresponding `AEGP\_MaskIDVal` for use in uniquely identifying the mask.

```cpp
AEGP\_GetEffectMaskID(
 AEGP\_EffectRefH effect\_refH,
 A\_u\_long mask\_indexL,
 AEGP\_MaskIDVal \*id\_valP);

```

|
| `AEGP\_AddEffectMask` | New in CC 2014. Add an effect mask, which may be created using the [Mask Management](#aegps-aegp-suites-mask-suite).
Returns the local stream of the effect ref - useful if you want to add keyframes.
Caller must dispose of `AEGP\_StreamRefH` when finished.
Undoable.

```cpp
AEGP\_AddEffectMask(
 AEGP\_EffectRefH effect\_refH,
 AEGP\_MaskIDVal id\_val,
 AEGP\_StreamRefH streamPH0);

```

|
| `AEGP\_RemoveEffectMask` | New in CC 2014. Remove an effect mask.
Undoable.

```cpp
AEGP\_RemoveEffectMask(
 AEGP\_EffectRefH effect\_refH,
 AEGP\_MaskIDVal id\_val);

```

|
| `AEGP\_SetEffectMask` | New in CC 2014. Set an effect mask on an existing index.
Returns the local stream of the effect ref - useful if you want to add keyframes.
Caller must dispose of `AEGP\_StreamRefH` when finished.
Undoable.

```cpp
AEGP\_SetEffectMask(
 AEGP\_EffectRefH effect\_refH,
 A\_u\_long mask\_indexL,
 AEGP\_MaskIDVal id\_val,
 AEGP\_StreamRefH \*streamPH0);

```

|

---

## Exploiting Effect UI Behavior To Look Cool

Even if you manipulate a layer’s effects, its effect controls won’t necessarily become visible.

However, if you apply then immediately remove an effect, the layer’s effect controls will be made visible.

Tricky, eh?

---

## StreamRefs And EffectRefs

How do you get an AEGP_StreamRef for an effect? Start by getting the effect’s `AEGP\_EffectRef`, by calling `AEGP\_GetNewEffectForEffect()`.

Then call `AEGP\_GetNewEffectStreamByIndex()`, say for param index 1, which passes back a parameter stream.

Then call `AEGP\_GetNewParentStreamRef()` - voila, your `AEGP\_StreamRef` sir!

If you acquire references to an effect’s streams, do not dispose of the `AEGP\_EffectRefH` until you’re done with the streams, or you’ll unbalance After Effects’ checkout mechanism. Also remember that AEGP_StreamRefHs are opaque; `AEGP\_StreamValue2s` are not (entirely).

To get an effect’s instance name (as renamed by the user), get the AEGP_StreamRef for the effect itself and call `AEGP\_GetStreamName`.

---

## Diving Into Streams!

Just about everything in After Effects is a stream. Effect parameters, layers, masks, and shapes are all internally represented by streams. The AEGP API can access nearly every aspect of every stream.

The After Effects timeline can contain numerous object types; each object supports a set of parameters called streams. All streams, regardless of which type of object to which they’re attached, are conceptually similar (and handled similarly by After Effects. But the way you access each type of stream varies because of their containment.

A stream, once acquired, represents a value which may change over time. Not all streams _can_ vary over time, and a particular stream may not be time-variant at the time of access.

There are two ways to access the value of a stream. If the stream has keyframes, you can use the [Working With Keyframes](#aegps-aegp-suites-keyframe-suite). The values provided won’t reflect the influence of expressions. :::tip: In any expression, the current keyframed value is always available as the variable value.

You can also use `AEGP\_GetNewStreamValue` from [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite), which samples the value of the stream at a particular time. For streams without expressions or keyframes, the time parameter is meaningless, and the function returns what essentially is the constant value of the stream. Use `AEGP\_SetStreamValue` (which doesn’t take a time as a parameter) to set these streams.

Many StreamSuite functions populate a StreamH, which your AEGP must dispose. when done. After Effects allocates and passes you a copy of the values, not a direct handle to the original value. `AEGP\_GetNewLayerStream()` is restricted to streams for which no memory allocation is required to access their values.

---

## Okay, What Did I Just Get?

A stream value is a large union, only one structure of which (depending on the stream type) is populated. :::tip the similarity to the [PF_ParamDef](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef).

```cpp
typedef union {
 AEGP\_FourDVal four\_d;
 AEGP\_ThreeDVal three\_d;
 AEGP\_TwoDVal two\_d;
 AEGP\_OneDVal one\_d;
 AEGP\_ColorVal color;
 AEGP\_ArbBlockVal arbH;
 AEGP\_MarkerValP markerP;
 AEGP\_LayerIDVal layer\_id;
 AEGP\_MaskIDVal mask\_id;
 AEGP\_MaskOutlineValH mask;
 AEGP\_TextDocumentH text\_documentH;
} AEGP\_StreamVal2;

```

---

## Layers

`AEGP\_GetLayerStreamValue` is used to access the parameters like anchor point and position, native to almost all layers in AE.

Use `IsStreamLegal` to allow you to determine if that stream type is offered on that layer.

---

## Masks

Since a layer can have multiple masks, access the masks using `AEGP\_GetLayerMaskByIndex` from [AEGP_MaskSuite6](#aegps-aegp-suites-aegp-masksuite).

Masks don’t have streams like layers do; they get their own enumeration. Access their streams using `AEGP\_GetNewMaskStream` from [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite).

---

## Effects

They can have a variable number of streams/parameters, and the order and definition of them is not known when the AEGP is written.

Therefore we cannot offer an enum for selecting them, and instead you must get them by index, hence `GetNewEffectStreamByIndex` from [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite).

---

## Stream Suite

Access and manipulate the values of a layer’s streams. For paint and text streams, use [Dynamic Streams](#aegps-aegp-suites-dynamic-stream-suite) instead.

### AEGP_StreamSuite5

| **Function**          | **Purpose**                                                        |
| --------------------- | ------------------------------------------------------------------ |
| `AEGP\_IsStreamLegal` | Determines if the given stream is appropriate for the given layer. |

```cpp
AEGP\_IsStreamLegal(
 AEGP\_LayerH layerH,
 AEGP\_LayerStream which\_stream,
 A\_Boolean\* is\_legalP);

```

|
| `AEGP\_CanVaryOverTime` | Given a stream, returns whether or not a stream is time-variant (and can be keyframed).

```cpp
AEGP\_CanVaryOverTime(
 AEGP\_StreamRefH streamH,
 A\_Boolean \*can\_varyPB);

```

|
| `AEGP\_GetValidInterpolations` | Retrieves an `AEGP\_KeyInterpolationMask` indicating which interpolation types are valid for the `AEGP\_StreamRefH`.

```cpp
AEGP\_GetValidInterpolations(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyInterpolationMask \*valid\_interpP);

```

`AEGP\_KeyInterpolationMask` will be a combination of the following:

- `AEGP\_KeyInterpMask\_NONE`
- `AEGP\_KeyInterpMask\_LINEAR`
- `AEGP\_KeyInterpMask\_BEZIER`
- `AEGP\_KeyInterpMask\_HOLD`
- `AEGP\_KeyInterpMask\_CUSTOM`
- `AEGP\_KeyInterpMask\_ANY`

|
| `AEGP\_GetNewLayerStream` | Get a layer’s data stream. Plug-in must dispose of `streamPH`. :::tip that this will not provide keyframe access;
Use the [AEGP_KeyframeSuite](#aegps-aegp-suites-keyframe-suite) instead.

```cpp
AEGP\_GetNewLayerStream(
 AEGP\_PluginID id,
 AEGP\_LayerH layerH,
 AEGP\_LayerStream which\_stream,
 AEGP\_StreamRefH \*streamPH);

```

- `AEGP\_LayerStream\_ANCHORPOINT`,
- `AEGP\_LayerStream\_POSITION`,
- `AEGP\_LayerStream\_SCALE`,
- `AEGP\_LayerStream\_ROTATION`,
- `AEGP\_LayerStream\_ROTATE\_Z`,
- `AEGP\_LayerStream\_OPACITY`,
- `AEGP\_LayerStream\_AUDIO`,
- `AEGP\_LayerStream\_MARKER`,
- `AEGP\_LayerStream\_TIME\_REMAP`,
- `AEGP\_LayerStream\_ROTATE\_X`,
- `AEGP\_LayerStream\_ROTATE\_Y`,
- `AEGP\_LayerStream\_ORIENTATION`

Only valid for `AEGP\_ObjectType\_CAMERA`:

- `AEGP\_ObjectType\_CAMERA`
- `AEGP\_LayerStream\_ZOOM`,
- `AEGP\_LayerStream\_DEPTH\_OF\_FIELD`,
- `AEGP\_LayerStream\_FOCUS\_DISTANCE`,
- `AEGP\_LayerStream\_APERTURE`,
- `AEGP\_LayerStream\_BLUR\_LEVEL`,
- `AEGP\_LayerStream\_IRIS\_SHAPE`,
- `AEGP\_LayerStream\_IRIS\_ROTATION`,
- `AEGP\_LayerStream\_IRIS\_ROUNDNESS`,
- `AEGP\_LayerStream\_IRIS\_ASPECT\_RATIO`,
- `AEGP\_LayerStream\_IRIS\_DIFFRACTION\_FRINGE`,
- `AEGP\_LayerStream\_IRIS\_HIGHLIGHT\_GAIN`,
- `AEGP\_LayerStream\_IRIS\_HIGHLIGHT\_THRESHOLD`,
- `AEGP\_LayerStream\_IRIS\_HIGHLIGHT\_SATURATION`,

Only valid for `AEGP\_ObjectType\_LIGHT`:

- `AEGP\_LayerStream\_INTENSITY`,
- `AEGP\_LayerStream\_COLOR`,
- `AEGP\_LayerStream\_CONE\_ANGLE`,
- `AEGP\_LayerStream\_CONE\_FEATHER`,
- `AEGP\_LayerStream\_SHADOW\_DARKNESS`,
- `AEGP\_LayerStream\_SHADOW\_DIFFUSION`,
- `AEGP\_LayerStream\_LIGHT\_FALLOFF\_TYPE`,
- `AEGP\_LayerStream\_LIGHT\_FALLOFF\_START`,
- `AEGP\_LayerStream\_LIGHT\_FALLOFF\_DISTANCE`,

Only valid for `AEGP\_ObjectType\_AV`:

- `AEGP\_LayerStream\_ACCEPTS\_SHADOWS`,
- `AEGP\_LayerStream\_ACCEPTS\_LIGHTS`,
- `AEGP\_LayerStream\_AMBIENT\_COEFF`,
- `AEGP\_LayerStream\_DIFFUSE\_COEFF`,
- `AEGP\_LayerStream\_SPECULAR\_INTENSITY`,
- `AEGP\_LayerStream\_SPECULAR\_SHININESS`,
- `AEGP\_LayerStream\_METAL`,
- `AEGP\_LayerStream\_LIGHT\_TRANSMISSION`,

Only valid for `AEGP\_ObjectType\_AV`, new in CS6:\* `AEGP\_LayerStream\_REFLECTION\_INTENSITY`,

- `AEGP\_LayerStream\_REFLECTION\_SHARPNESS`,
- `AEGP\_LayerStream\_REFLECTION\_ROLLOFF`,
- `AEGP\_LayerStream\_TRANSPARENCY\_COEFF`,
- `AEGP\_LayerStream\_TRANSPARENCY\_ROLLOFF`,
- `AEGP\_LayerStream\_INDEX\_OF\_REFRACTION`,
- `AEGP\_LayerStream\_EXTRUSION\_BEVEL\_STYLE`,
- `AEGP\_LayerStream\_EXTRUSION\_BEVEL\_DIRECTION`,
- `AEGP\_LayerStream\_EXTRUSION\_BEVEL\_DEPTH`,
- `AEGP\_LayerStream\_EXTRUSION\_HOLE\_BEVEL\_DEPTH`,
- `AEGP\_LayerStream\_EXTRUSION\_DEPTH`,
- `AEGP\_LayerStream\_PLANE\_CURVATURE`,
- `AEGP\_LayerStream\_PLANE\_SUBDIVISION`,

Only valid for `LIGHT` and `AV` only:

- `AEGP\_LayerStream\_CASTS\_SHADOWS`,
- `AEGP\_LayerStream\_SOURCE\_TEXT`
- `AEGP\_LayerStream\_BEGIN` = `AEGP\_LayerStream\_ANCHORPOINT`,
- `AEGP\_LayerStream\_END` = `AEGP\_LayerStream\_LIGHT\_FALLOFF\_DISTANCE + 1`

```cpp
enum {
 AEGP\_LightFalloff\_NONE = 0,
 AEGP\_LightFalloff\_SMOOTH,
 AEGP\_LightFalloff\_INVERSE\_SQUARE\_CLAMPED
};

typedef A\_u\_long AEGP\_LightFalloffType;

```

|
| `AEGP\_GetEffectNumParamStreams` | Get number of parameter streams associated with an effect.

```cpp
AEGP\_GetEffectNumParamStreams(
 AEGP\_EffectRefH effect\_refH,
 A\_long \*num\_parmsPL);

```

|
| `AEGP\_GetNewEffectStreamByIndex` | Get an effect’s parameter stream. Plug-in must dispose of `streamPH`.

```cpp
AEGP\_GetNewEffectStreamByIndex(
 AEGP\_PluginID id,
 AEGP\_EffectRefH effect\_refH,
 PF\_ParamIndex param\_index,
 AEGP\_StreamRefH \*streamPH);

```

|
| `AEGP\_GetNewMaskStream` | Get a mask’s stream. The stream must be disposed.
Also see the [AEGP_MaskSuite](#aegps-aegp-suites-mask-suite)
and [AEGP_MaskOutlineSuite](#aegps-aegp-suites-mask-outline-suite) for additional Mask functions.\* `AEGP\_MaskStream\_OUTLINE`,

- `AEGP\_MaskStream\_OPACITY`,
- `AEGP\_MaskStream\_FEATHER`,
- `AEGP\_MaskStream\_EXPANSION`,

Useful for iteration:

- `AEGP\_MaskStream\_BEGIN` = `AEGP\_MaskStream\_OUTLINE`,
- `AEGP\_MaskStream\_END` = `AEGP\_MaskStream\_EXPANSION + 1`

```cpp
AEGP\_GetNewMaskStream(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_MaskRefH mask\_refH,
 AEGP\_MaskStream which\_stream,
 AEGP\_StreamRefH \*mask\_strmPH);

```

|
| `AEGP\_DisposeStream` | Dispose of a stream (do this with all streams passed to the plug-in by these functions).

```cpp
AEGP\_DisposeStream(
 AEGP\_StreamRefH streamH);

```

|
| `AEGP\_GetNewMaskOpacity` | Get the mask’s opacity stream. The stream must be disposed.

```cpp
AEGP\_GetNewMaskOpacity(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_MaskH maskH,
 PF\_ParamIndex param\_index,
 AEGP\_StreamRefH \*mask\_opacity\_streamPH);

```

|
| `AEGP\_GetStreamName` | Get name of the stream (localized or forced English). is handle of `A\_UTF16Char` (contains null terminated UTF16 string);
must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetStreamName(
 AEGP\_PluginID pluginID,
 AEGP\_StreamRefH streamH,
 A\_Boolean force\_englishB,
 AEGP\_MemHandle \*utf\_stream\_namePH);

```

NOTE: if `force\_englishB` is TRUE, the default name will override any stream renaming which has been done (either programatically, or by the user). |
| `AEGP\_GetStreamUnitsText` | Get stream units, formatted as text (localized or forced English); `unitsZ` up to `AEGP\_MAX\_STREAM\_NAME\_LEN + 1` long.

```cpp
AEGP\_GetStreamUnitsText(
 AEGP\_StreamRefH streamH,
 A\_Boolean force\_englishB,
 A\_char \*unitsZ);

```

|
| `AEGP\_GetStreamProperties` | Get stream’s flags, as well as minimum and maximum values (as floats), if the stream _has_ mins and maxes.
StreamFlags values:

- `AEGP\_StreamFlag\_NONE`
- `AEGP\_StreamFlag\_HAS\_MIN`
- `AEGP\_StreamFlag\_HAS\_MAX`

```cpp
AEGP\_GetStreamProperties(
 AEGP\_StreamRefH streamH,
 AEGP\_StreamFlags \*flagsP,
 A\_FpLong \*minP0,
 A\_FpLong \*maxP0);

```

|
| `AEGP\_IsStreamTimevarying` | Returns whether or not the stream is affected by expressions.

```cpp
AEGP\_IsStreamTimevarying(
 AEGP\_StreamRefH streamH,
 A\_Boolean \*is\_timevaryPB);

```

|
| `AEGP\_GetStreamType` | Get type (dimension) of a stream.

```cpp
AEGP\_GetStreamType(
 AEGP\_StreamRefH streamH,
 AEGP\_StreamType \*stream\_typeP);

```

- `AEGP\_StreamType\_NO\_DATA`,
- `AEGP\_StreamType\_TwoD\_SPATIAL`,
- `AEGP\_StreamType\_TwoD`,
- `AEGP\_StreamType\_ThreeD`,
- `AEGP\_StreamType\_ThreeD\_SPATIAL`,
- `AEGP\_StreamType\_OneD`,
- `AEGP\_StreamType\_COLOR`,
- `AEGP\_StreamType\_ARB`,
- `AEGP\_StreamType\_MARKER`,
- `AEGP\_StreamType\_LAYER\_ID`,
- `AEGP\_StreamType\_MASK\_ID`,
- `AEGP\_StreamType\_MASK`,
- `AEGP\_StreamType\_TEXT\_DOCUMENT`

NOTE: always returns `ThreeD\_Spatial` for position, regardless of whether or not the layer is 3D. |
| `AEGP\_GetNewStreamValue` | Get value, at a time you specify, of stream. `valueP` must be disposed by the plug-in.
The `AEGP\_LTimeMode` indicates whether the time is in compositions or layer time.

```cpp
AEGP\_GetNewStreamValue(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH streamH,
 AEGP\_LTimeMode time\_mode,
 const A\_Time \*timePT,
 A\_Boolean pre\_exprB,
 AEGP\_StreamValue2 \*valueP);

```

|
| `AEGP\_DisposeStreamValue` | Dispose of stream value. Always deallocate values passed to the plug-in.

```cpp
AEGP\_DisposeStreamValue(
 AEGP\_StreamValue2 \*valueP);

```

|
| `AEGP\_SetStreamValue` | Only legal when stream is not time-variant.

```cpp
AEGP\_SetStreamValue(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH streamH,
 AEGP\_StreamValue2 \*valueP);

```

|
| `AEGP\_GetLayerStreamValue` | NOTE: This convenience function is only valid for streams with primitive data types,
and not for `AEGP\_ArbBlockVal`, `AEGP\_MarkerValH` or `AEGP\_MaskOutlineValH`.
For these and other complex types, use `AEGP\_GetNewStreamValue`, described above.

```cpp
AEGP\_GetLayerStreamValue(
 AEGP\_LayerH layerH,
 AEGP\_LayerStream which\_stream,
 AEGP\_LTimeMode time\_mode,
 const A\_Time \*timePT,
 A\_Boolean pre\_expB,
 AEGP\_StreamVal \*stream\_valP,
 AEGP\_StreamType \*strm\_typeP0);

```

|
| `AEGP\_GetExpressionState` | Determines whether expressions are enabled on the given `AEGP\_StreamRefH`.

```cpp
AEGP\_GetExpressionState(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH streamH,
 A\_Boolean \*enabledPB);

```

|
| `AEGP\_SetExpressionState` | Enables and disables expressions on the given `AEGP\_StreamRefH`.

```cpp
AEGP\_SetExpressionState(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH streamH,
 A\_Boolean enabledB);

```

|
| `AEGP\_GetExpression` | Obtains the expression’s text. Starting in suite version 5 (available in 15.0 and later), this now supports Unicode.

```cpp
AEGP\_GetExpression(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH streamH,
 AEGP\_MemHandle \*unicodeHZ);

```

|
| `AEGP\_SetExpression` | Sets the expression’s text. Starting in suite version 5 (available in 15.0 and later), this now supports Unicode.

```cpp
AEGP\_SetExpression(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH streamH,
 const A\_UTF16Char\* expressionP);

```

|
| `AEGP\_DuplicateStreamRef` | Duplicates a given `AEGP\_StreamRefH`. Dispose of the duplicate.

```cpp
AEGP\_DuplicateStreamRef(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH streamH,
 AEGP\_StreamRefH \*dup\_streamPH);

```

|

---

## Dynamic Streams

`AEGP\_DynamicStreamSuite` accesses and manipulates paint and text streams.

Use `AEGP\_GetStreamGroupingType` and `AEGP\_GetDynamicStreamFlags` to identify the stream before attempting to use functions which only work on certain stream types.

Also note that, often, you can simply use [Stream Suite](#aegps-aegp-suites-stream-suite) calls to work with dynamic streams. On the other hand, only those functions specific to dynamic streams are in this suite.

### AEGP_DynamicStreamSuite4

| **Function**                    | **Purpose**                                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `AEGP\_GetNewStreamRefForLayer` | Retrieves the AEGP_StreamRefH corresponding to the layer. This function is used to initiate a recursive walk of the layer’s streams. |

```cpp
AEGP\_GetNewStreamRefForLayer(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_LayerH layerH,
 AEGP\_StreamRefH \*streamPH);

```

|
| `AEGP\_GetNewStreamRefForMask` | Retrieves the AEGP_StreamRefH corresponding to the mask.

```cpp
AEGP\_GetNewStreamRefForMask(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_MaskRefH maskH,
 AEGP\_StreamRefH \*streamPH);

```

|
| `AEGP\_GetStreamDepth` | Retrieves the number of sub-streams associated with the given `AEGP\_StreamRefH`.
The initial layer has a depth of 0.

```cpp
AEGP\_GetStreamDepth(
 AEGP\_StreamRefH streamH,
 A\_long \*depthPL);

```

|
| `AEGP\_GetStreamGroupingType` | Retrieves the grouping type for the given `AEGP\_StreamRefH`.

```cpp
AEGP\_GetStreamGroupingType(
 AEGP\_StreamRefH streamH,
 AEGP\_StreamGroupingType \*group\_typeP);

```

AEGP_StreamGroupingType will be one of the following:

- `AEGP\_StreamGroupingType\_NONE`
- `AEGP\_StreamGroupingType\_LEAF`
- `AEGP\_StreamGroupingType\_NAMED\_GROUP`
- `AEGP\_StreamGroupingType\_INDEXED\_GROUP`

|
| `AEGP\_GetNumStreamsInGroup` | Retrieves the number of streams associated with the given `AEGP\_StreamRefH`.
This function will return an error if called with an `AEGP\_StreamRefH` with type `AEGP\_StreamGroupingType\_LEAF`.

```cpp
AEGP\_GetNumStreamsInGroup(
 AEGP\_StreamRefH streamH,
 A\_long \*num\_streamsPL);

```

|
| `AEGP\_GetDynamicStreamFlags` | Retrieves the flags for a given AEGP_StreamRefH.

```cpp
AEGP\_GetDynamicStreamFlags(
 AEGP\_StreamRefH streamH,
 AEGP\_DynStreamFlags \*flagsP);

```

`AEGP\_DynStreamFlags` will be one of the following:\* `AEGP\_DynStreamFlag\_ACTIVE\_EYEBALL` means that the stream is available for reading and writing.

- `AEGP\_DynStreamFlag\_HIDDEN` means that, while the stream is still readable/writable, it may not currently be visible in the UI.
- `AEGP\_DynStreamFlag\_DISABLED` A read-only flag. Indicates whether the `AEGP\_StreamRefH` is grayed out in the UI.
  :::tip that as of CS5, this flag will not be returned if a parameter is disabled.
  Instead, check `PF\_PUI\_DISABLED` in [Parameter UI Flags](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef-parameter-ui-flags).
- `AEGP\_DynStreamFlag\_ELIDED` A read-only flag. Indicates that the `AEGP\_StreamRefH` is read-only, the user never sees it.
  However, the children are still seen and not indented in the Timeline panel.
- `AEGP\_DynStreamFlag\_SHOWN\_WHEN\_EMPTY` New in CS6. A read-only flag. Indicates that this stream group should be shown when empty.
- `AEGP\_DynStreamFlag\_SKIP\_REVEAL\_WHEN\_UNHIDDEN` New in CS6. A read-only flag. Indicates that this stream property will not be automatically revealed when un-hidden.
  |
  | `AEGP\_SetDynamicStreamFlag` | Sets the specified flag for the `AEGP\_StreamRefH`.
  :::tip: flags must be set individually. Undoable if `undoableB` is `TRUE`.

```cpp
AEGP\_SetDynamicStreamFlag(
 AEGP\_StreamRefH streamH,
 AEGP\_DynStreamFlags one\_flag,
 A\_Boolean undoableB,
 A\_Boolean setB);

```

This call may be used to dynamically show or hide parameters, by setting and clearing `AEGP\_DynStreamFlag\_HIDDEN`.
However, `AEGP\_DynStreamFlag\_DISABLED` may not be set. |
| `AEGP\_GetNewStreamRefByIndex` | Retrieves a sub-stream by index from a given `AEGP\_StreamRefH`. Cannot be used on streams of type `AEGP\_StreamGroupingType\_LEAF`.

```cpp
AEGP\_GetNewStreamRefByIndex(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH parent\_groupH,
 A\_long indexL,
 AEGP\_StreamRefH \*streamPH);

```

|
| `AEGP\_GetNewStreamRefByMatchname` | Retrieves a sub-stream by match name from a given `AEGP\_StreamRefH`. Only legal for `AEGP\_StreamGroupingType\_NAMED\_GROUP`.

```cpp
AEGP\_GetNewStreamRefByMatchname(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH parent\_groupH,
 const A\_char \*match\_nameZ,
 AEGP\_StreamRefH \*streamPH);

```

Here are some handy stream names, for which references may be retrieved:

- `AEGP\_StreamGroupName\_MASK\_PARADE`
- `AEGP\_StreamGroupName\_MASK\_ATOM`
- `AEGP\_StreamName\_MASK\_FEATHER`
- `AEGP\_StreamName\_MASK\_OPACITY`
- `AEGP\_StreamName\_MASK\_OFFSET`
- `AEGP\_StreamGroupName\_EFFECT\_PARADE`
- `AEGP\_StreamGroupName\_LAYER`
- `AEGP\_StreamGroupName\_AV\_LAYER`
- `AEGP\_StreamGroupName\_TEXT\_LAYER`
- `AEGP\_StreamGroupName\_CAMERA\_LAYER`
- `AEGP\_StreamGroupName\_LIGHT\_LAYER`
- `AEGP\_StreamGroupName\_AUDIO`
- `AEGP\_StreamGroupName\_MATERIAL\_OPTIONS`
- `AEGP\_StreamGroupName\_TRANSFORM`
- `AEGP\_StreamGroupName\_LIGHT\_OPTIONS`
- `AEGP\_StreamGroupName\_CAMERA\_OPTIONS`

|
| `AEGP\_DeleteStream` | Deletes the specified stream from a stream grouping.
:::tip that the caller must still dispose of any `AEGP\_StreamRefH` it’s already acquired (allocated) via the API. Undoable.
Only valid for children of type `AEGP\_StreamGroupingType\_INDEXED\_GROUP`.

```cpp
AEGP\_DeleteStream(
 AEGP\_StreamRefH streamH);

```

:::tip: as of 6.5, if a stream is deleted while it or any child stream is selected, the current composition selection will become `NULL`. |
| `AEGP\_ReorderStream` | Sets the new index of the specified `AEGP\_StreamRefH`. Undoable.
Only valid for children of `AEGP\_StreamGroupingType\_INDEXED\_GROUP`.
The `AEGP\_StreamRefH` is updated to refer to the newly-ordered stream.

```cpp
AEGP\_ReorderStream(
 AEGP\_StreamRefH streamH
 A\_long new\_indexL);

```

|
| `AEGP\_DuplicateStream` | Duplicates the specified stream and appends it to the stream group.
Undoable.
Only valid for children of `AEGP\_StreamGroupingType\_INDEXED\_GROUP`.

```cpp
AEGP\_DuplicateStream(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH streamH,
 A\_long \*new\_indexPL0);

```

|
| `AEGP\_SetStreamName` | Sets the name of the given `AEGP\_StreamRefH`. Undoable. nameZ points to a null terminated UTF-16 string.
Only valid for children of `AEGP\_StreamGroupingType\_INDEXED\_GROUP`.
NOTE: If you retrieve the name with force_englishB set to `TRUE`, you will get the canonical, UNchanged name of the stream.

```cpp
AEGP\_SetStreamName(
 AEGP\_StreamRefH streamH,
 const A\_UTF16Char \*nameZ);

```

:::tip: Use this on an effect stream’s group to change the display name of an effect. |
| `AEGP\_CanAddStream` | Returns whether or not it is currently possible to add a stream through the API.

```cpp
AEGP\_CanAddStream(
 AEGP\_StreamRefH group\_streamH,
 const A\_char \*match\_nameZ,
 A\_Boolean \*can\_addPB);

```

|
| `AEGP\_AddStream` | Adds a stream to the specified stream group. Undoable. Only valid for `AEGP\_StreamGroupingType\_INDEXED\_GROUP`.

```cpp
AEGP\_AddStream(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_StreamRefH indxd\_grp\_streamH,
 const A\_char \*match\_nameZ,
 AEGP\_StreamRefH \*streamPH0);

```

|
| `AEGP\_GetMatchName` | Retrieves the match name for the specified `AEGP\_StreamRefH`.
:::tip that this may differ from the display name, which can be retrieves using `AEGP\_GetStreamName`, in [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite).
`nameZ` can be up to `AEGP\_MAX\_STREAM\_MATCH\_NAME\_SIZE` in length.

```cpp
AEGP\_GetMatchName(
 AEGP\_StreamRefH streamH,
 A\_char \*nameZ);

```

|
| `AEGP\_GetNewParentStreamRef` | Retrieves an `AEGP\_StreamRefH` for the parent of the specified `AEGP\_StreamRefH`.

```cpp
AEGP\_GetNewParentStreamRef(
 AEGP\_PluginID plugin\_id,
 AEGP\_StreamRefH streamH,
 AEGP\_StreamRefH \*parentPH);

```

|
| `AEGP\_GetStreamIsModified` | Returns whether or not the specified `AEGP\_StreamRefH` has been modified.
:::tip: the same result is available throught the After Effect user interface by typing “UU” with the composition selected.

```cpp
AEGP\_GetStreamIsModified(
 AEGP\_StreamRefH streamH,
 A\_Boolean \*modifiedPB);

```

|
| `AEGP\_GetStreamIndexInParent` | Retrieves the index of a given stream, relative to its parent stream.
Only valid for children of `AEGP\_StreamGroupingType\_INDEXED\_GROUP`

```cpp
AEGP\_GetStreamIndexInParent(
 AEGP\_StreamRefH streamH,
 A\_long \*indexPL);

```

NOTE: As mentioned _elsewhere_, `AEGP\_StreamRefHs` don’t persist across function calls.
If streams are re-ordered, added or removed, all `AEGP\_StreamRefHs` previously retrieved may be invalidated. |
| `AEGP\_IsSeparationLeader` | Valid on leaf streams only. Returns true if this stream is a multidimensional stream that can have its dimensions separated,
though they may not be currently separated.
Terminology: A Leader is the stream that can be separated,
a Follower is one of N automatic streams that correspond to the N dimensions of the Leader.
A Leader isn’t always separated, call `AEGP\_AreDimensionsSeparated` to find out if it is.
As of CS4, the only stream that is ever separarated is the layer’s Position property.
Please _do not_ write code assuming that, we anticipate allowing separation of more streams in the future.

```cpp
AEGP\_IsSeparationLeader(
 AEGP\_StreamRefH streamH,
 A\_Boolean \*leaderPB);

```

|
| `AEGP\_AreDimensionsSeparated` | Methods such as `AEGP\_GetNewKeyframeValue` that work on keyframe indices will
most definitely _not_ work on the Leader property, you will need to retrieve and operate on the Followers explicitly.

```cpp
AEGP\_AreDimensionsSeparated(
 AEGP\_StreamRefH streamH,
 A\_Boolean \*separatedPB);

```

|
| `AEGP\_SetDimensionsSeparated` | Valid only if `AEGP\_IsSeparationLeader()` is `true`.

```cpp
AEGP\_AreDimensionsSeparated(
 AEGP\_StreamRefH streamH,
 A\_Boolean \*separatedPB);

```

|
| `AEGP\_GetSeparationFollower` | Retrieve the Follower stream corresponding to a given dimension of the Leader stream.
`dimS` can range from `0` to `AEGP\_GetStreamValueDimensionality(lea der\_streamH) - 1`.

```cpp
AEGP\_GetSeparationFollower(
 AEGP\_StreamRefH leader\_streamH
 A\_short dimS,
 AEGP\_StreamRefH \*follower\_streamPH);

```

|
| `AEGP\_IsSeparationFollower` | Valid on leaf streams only.
Returns `true` if this stream is a one dimensional property that represents one of the dimensions of a Leader.
You can retrieve stream from the Leader using `AEGP\_GetSeparationFollower()`.

```cpp
AEGP\_IsSeparationFollower(
 AEGP\_StreamRefH streamH
 A\_Boolean \*followerPB);

```

|
| `AEGP\_GetSeparationLeader` | Valid on separation Followers only, returns the Leader it is part of.

```cpp
AEGP\_GetSeparationLeader(
 AEGP\_StreamRefH follower\_streamH,
 AEGP\_StreamRefH \*leader\_streamPH);

```

|
| `AEGP\_GetSeparationDimension` | Valid on separation Followers only, returns which dimension of the Leader it corresponds to.

```cpp
AEGP\_GetSeparationDimension(
 AEGP\_StreamRefH follower\_streamH,
 A\_short \*dimPS);

```

|

---

## Working With Keyframes

Keyframes make After Effects what it is. AEGPs (and…ssshh, don’t tell anyone…effects) can use this suite to add, manipulate and remove keyframes from any keyframe-able stream.

### AEGP_KeyframeSuite3

| **Function**            | **Purpose**                                            |
| ----------------------- | ------------------------------------------------------ |
| `AEGP\_GetStreamNumKFs` | Retrieves the number of keyframes on the given stream. |

Returns `AEGP\_NumKF\_NO\_DATA` if the stream is not keyframe-able.
Also, note that a stream without keyframes isn’t necessarily constant; it can be altered by expressions.

```cpp
AEGP\_GetStreamNumKFs(
 AEGP\_StreamRefH streamH,
 A\_long \*num\_kfsPL);

```

|
| `AEGP\_GetKeyframeTime` | Retrieves the time of the specified keyframe.

```cpp
AEGP\_GetKeyframeTime(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex index,
 AEGP\_LTimeMode time\_mode,
 A\_Time \*timePT);

```

|
| `AEGP\_InsertKeyframe` | Adds a keyframe to the specified stream (at the specified composition or layer time).
Returns the new keyframe’s index.
All indexes greater than the new index are now invalid (but you knew that).
If there is already a keyframe at that time, the values will be updated.

```cpp
AEGP\_InsertKeyframe(
 AEGP\_StreamRefH streamH,
 AEGP\_LTimeMode time\_mode,
 const A\_Time \*timePT,
 AEGP\_KeyframeIndex \*key\_indexP);

```

|
| `AEGP\_DeleteKeyframe` | Deletes the specified keyframe.

```cpp
AEGP\_DeleteKeyframe(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index);

```

|
| `AEGP\_GetNewKeyframeValue` | Creates and populates an `AEGP\_StreamValue2` for the stream’s value at the time of the keyframe.
The returned `AEGP\_StreamValue2` must be disposed of using `AEGP\_DisposeStreamValue`.

```cpp
AEGP\_GetNewKeyframeValue(
 AEGP\_PluginID plugin\_id,
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 AEGP\_StreamValue2 \*valueP);

```

|
| `AEGP\_SetKeyframeValue` | Sets the stream’s value at the time of the keyframe.

```cpp
AEGP\_SetKeyframeValue(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex index,
 const AEGP\_StreamValue2 \*valP);

```

|
| `AEGP\_GetStreamValueDimensionality` | Retrieves the dimensionality of the stream’s value.

```cpp
AEGP\_GetStreamValueDimensionality(
 AEGP\_StreamRefH streamH,
 A\_short \*value\_dimPS);

```

|
| `AEGP\_GetStreamTemporalDimensionality` | Retrieves the temporal dimensionality of the stream.

```cpp
AEGP\_GetStreamTemporalDimensionality(
 AEGP\_StreamRefH streamH,
 A\_short \*t\_dimPS);

```

|
| `AEGP\_GetNewKeyframeSpatialTangents` | Returns the `AEGP\_StreamValue2s` representing the stream’s tangential values at the time of the keyframe.
The returned `AEGP\_StreamValue2s` must be disposed of using `AEGP\_DisposeStreamValue`.

```cpp
AEGP\_GetNewKeyframeSpatialTangents(
 AEGP\_PluginID plugin\_id,
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 AEGP\_StreamValue2 \*in\_tanP0,
 AEGP\_StreamValue2 \*out\_tanP0);

```

|
| `AEGP\_SetKeyframeSpatialTangents` | Specifies the tangential `AEGP\_StreamValue2s` to be used for the stream’s value at the time of the keyframe.
The `AEGP\_StreamValue2s` passed for in and out tangents are not adopted by After Effects, and must be disposed of using `AEGP\_DisposeStreamValue`.

```cpp
AEGP\_SetKeyframeSpatialTangents(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 const AEGP\_StreamValue2 \*in\_tP0,
 const AEGP\_StreamValue2 \*out\_tP0);

```

NOTE: In `AEGP\_KeyframeSuite2` and prior versions, the values returned from this function
were wrong when called on an effect point control stream or anchor point.
They were not multiplied by the layer size. Now they are. |
| `AEGP\_GetKeyframeTemporalEase` | Retrieves the `AEGP\_KeyframeEases` associated with the specified dimension of the stream’s value at the time of the keyframe.
`dimensionL` ranges from `0` to `(temporal\_dimensionality -1)`.

```cpp
AEGP\_GetKeyframeTemporalEase(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 A\_long dimensionL,
 AEGP\_KeyframeEase \*in\_easeP0,
 AEGP\_KeyframeEase \*out\_easeP0);

```

NOTE: the returned ease values must be multiplied by layer height to match the values displayed in the After Effects UI. |
| `AEGP\_SetKeyframeTemporalEase` | Specifies the `AEGP\_KeyframeEases` to be used for the stream’s value at the time of the keyframe.
`dimensionL` ranges from `0` to `(temporal\_dimensionality -1)`.
The `AEGP\_KeyframeEases` passed are not adopted by After Effects.

```cpp
AEGP\_SetKeyframeTemporalEase(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 A\_long dimL,
 const AEGP\_KeyframeEase \*in\_P0,
 const AEGP\_KeyframeEase \*outP0);

```

|
| `AEGP\_GetKeyframeFlags` | Retrieves the flags currently set for the keyframe.

```cpp
AEGP\_GetKeyframeFlags(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 AEGP\_KeyframeFlags \*flagsP);

```

`\*flagsP` will be a combination of the following:

- `AEGP\_KeyframeFlag\_NONE`
- `AEGP\_KeyframeFlag\_TEMPORAL\_CONTINUOUS`
- `AEGP\_KeyframeFlag\_TEMPORAL\_AUTOBEZIER`
- `AEGP\_KeyframeFlag\_SPATIAL\_CONTINUOUS`
- `AEGP\_KeyframeFlag\_SPATIAL\_AUTOBEZIER`
- `AEGP\_KeyframeFlag\_ROVING`

|
| `AEGP\_SetKeyframeFlag` | Sets the specified flag for the keyframe. Flags must be set individually.

```cpp
AEGP\_SetKeyframeFlag(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 AEGP\_KeyframeFlags flag,
 A\_Boolean valueB);

```

|
| `AEGP\_GetKeyframeInterpolation` | Retrieves the in and out `AEGP\_KeyframeInterpolationTypes` for the specified keyframe.

```cpp
AEGP\_GetKeyframeInterpolation(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 AEGP\_KeyframeInterpolationType \*inP0,
 AEGP\_KeyframeInterpolationType \*outP0);

```

`AEGP\_KeyframeInterpolationType` is one of the following:

- `AEGP\_KeyInterp\_NONE`
- `AEGP\_KeyInterp\_LINEAR`
- `AEGP\_KeyInterp\_BEZIER`
- `AEGP\_KeyInterp\_HOLD`

|
| `AEGP\_SetKeyframeInterpolation` | Specifies the in and out `AEGP\_KeyframeInterpolationTypes` to be used for the given keyframe.

```cpp
AEGP\_SetKeyframeInterpolation(
 AEGP\_StreamRefH streamH,
 AEGP\_KeyframeIndex key\_index,
 AEGP\_KeyframeInterpolationType in\_interp,
 AEGP\_KeyframeInterpolationType out\_interp);

```

|
| `AEGP\_StartAddKeyframes` | Informs After Effects that you’re going to be adding several keyframes to the specified stream.
After Effects will return an allocated opaque `AEGP\_AddKeyframesInfoH`, for use with the calls below.

```cpp
AEGP\_StartAddKeyframes(
 AEGP\_StreamRefH streamH,
 AEGP\_AddKeyframesInfoH \*akPH);

```

|
| `AEGP\_AddKeyframes` | Adds a keyframe to the specified stream at the specified (layer or composition) time.
:::tip: this doesn’t actually do anything to the stream’s value.

```cpp
AEGP\_AddKeyframes(
 AEGP\_AddKeyframesInfoH akH,
 AEGP\_LTimeMode time\_mode,
 const A\_Time \*timePT,
 A\_long \*indexPL);

```

|
| `AEGP\_SetAddKeyframe` | Sets the value of the specified keyframe.

```cpp
AEGP\_SetAddKeyframe(
 AEGP\_AddKeyframesInfoH akH,
 A\_long indexL,
 const AEGP\_StreamValue2 \*valueP);

```

|
| `AEGP\_EndAddKeyframes` | Tells After Effects you’re done adding keyframes.

```cpp
AEGP\_EndAddKeyframes(
 A\_Boolean addB,
 AEGP\_AddKeyframesInfoH akH);

```

|

---

## Adding Multiple Keyframes

Each time you call `AEGP\_InsertKeyframe()`, the entire stream is added to the undo stack.

If you’re adding one or two keyframes, this isn’t a problem. However, if you’re writing a keyframer, you’ll want to do things the _right_ way.

Before you begin adding keyframes, call the (very-appropriately-named) `AEGP\_StartAddKeyframes`, passing it an opaque `AEGP\_AddKeyframesInfoH`.

For each keyframe to add, call `AEGP\_AddKeyframes` to set the time to be used (and get the newly-added keyframe’s index), then `AEGP\_SetAddKeyframe` to specify the value to be used.

Once you’re finished, call `AEGP\_EndAddKeyframes` to let know After Effects know it’s time to add the changed parameter stream to the undo stack.

---

## Marker Streams

`AEGP\_MarkerSuite` allows for direct manipulation of marker data.

### AEGP_MarkerSuite2

| **Function**      | **Purpose**           |
| ----------------- | --------------------- |
| `AEGP\_NewMarker` | Creates a new marker. |

```cpp
AEGP\_NewMarker(
 AEGP\_MarkerValP \*markerPP);

```

|
| `AEGP\_DisposeMarker` | Disposes of a marker.

```cpp
AEGP\_DisposeMarker(
 AEGP\_MarkerValP markerP);

```

|
| `AEGP\_DuplicateMarker` | Duplicates a marker (didn’t see _that_ one coming, eh?).

```cpp
AEGP\_DuplicateMarker(
 AEGP\_MarkerValP markerP,
 AEGP\_MarkerValP \*new\_markerP);

```

|
| `AEGP\_SetMarkerFlag` | Sets a marker flag’s value.

```cpp
AEGP\_SetMarkerFlag(
 AEGP\_MarkerValP markerP,
 AEGP\_MarkerFlagType flagType,
 A\_Boolean valueB);

```

Currently, AEGP_MarkerFlagType is one of the following:

- `AEGP\_MarkerFlag\_NONE`
- `AEGP\_MarkerFlag\_NAVIGATION`

|
| `AEGP\_GetMarkerFlag` | Gets the value (see above) of a given `AEGP\_MarkerFlagType`.

```cpp
AEGP\_GetMarkerFlag(
 AEGP\_ConstMarkerValP markerP,
 AEGP\_MarkerFlagType flagType
 A\_Boolean \*valueBP);

```

|
| `AEGP\_GetMarkerString` | Retrieves the UTF-16, NULL-terminated string located in the specified marker field.
Must be disposed of by caller using `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetMarkerString(
 AEGP\_PluginID id,
 AEGP\_ConstMarkerValP markerP,
 AEGP\_MarkerStringType strType,
 AEGP\_MemHandle \*unicodePH);

```

|
| `AEGP\_SetMarkerString` | Sets the specified field of a marker to the provided text.

```cpp
AEGP\_SetMarkerString(
 AEGP\_MarkerValP markerP,
 AEGP\_MarkerStringType strType,
 const A\_u\_short \*unicodeP,
 A\_long lengthL);

```

|
| `AEGP\_CountCuePointParams` | Returns the number of cue point parameters.

```cpp
AEGP\_CountCuePointParams(
 AEGP\_ConstMarkerValP markerP,
 A\_long \*paramsLP);

```

|
| `AEGP\_GetIndCuePointParam` | Returns the cue point param at the specified index (which must be between `0` and `(cue point params -1)`.
Returned handles are UTF-16, NULL-terminated strings, and must be disposed of by caller using `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetIndCuePointParam(
 AEGP\_PluginID id,
 AEGP\_ConstMarkerValP markerP,
 A\_long param\_indexL,
 AEGP\_MemHandle \*unicodeKeyPH,
 AEGP\_MemHandle \*uni\_ValuePH);

```

|
| `AEGP\_SetIndCuePointParam` | Set the value of an indexed cue point parameter to the specified value.
`key\_lengthL` is “number of unicode characters”, and `value\_lenL` is the length of the provided value.
`unicode\_KeyP` and `unicode\_ValueP` point to UTF-16 data.

```cpp
AEGP\_SetIndCuePointParam(
 AEGP\_MarkerValP markerP,
 A\_long param\_idxL,
 const A\_u\_short \*unicode\_KeyP,
 A\_long key\_lengthL,
 const A\_u\_short \*unicode\_ValueP,
 A\_long value\_lengthL);

```

|
| `AEGP\_InsertCuePointParam` | Inserts a cue point parameter.
This call is following by `AEGP\_SetIndCuePointParam` to actually set the data.

```cpp
AEGP\_InsertCuePointParam(
 AEGP\_MarkerValP markerP,
 A\_long param\_idxL);

```

|
| `AEGP\_DeleteInd` CuePointParam | Deletes the cue point param at the specified index.

```cpp
AEGP\_DeleteIndCuePointParam(
 AEGP\_MarkerValP markerP,
 A\_long param\_idxL);

```

|
| `AEGP\_SetMarkerDuration` |

```cpp
AEGP\_SetMarkerDuration(
 AEGP\_MarkerValP markerP,
 const A\_Time \*durationPT);

```

|
| `AEGP\_GetMarkerDuration` |

```cpp
AEGP\_GetMarkerDuration(
 AEGP\_ConstMarkerValP markerP,
 A\_Time \*durationPT);

```

|

---

## Mask Management

Access, manipulate, and delete a layer’s masks.

### AEGP_MaskSuite6

| **Function**             | **Purpose**                          |
| ------------------------ | ------------------------------------ |
| `AEGP\_GetLayerNumMasks` | Counts the masks applied to a layer, |

```cpp
AEGP\_GetLayerNumMasks(
 AEGP\_LayerH aegp\_layerH,
 A\_long \*num\_masksPL);

```

|
| `AEGP\_GetLayerMaskByIndex` | Given a layer handle and mask index, returns a pointer to the mask handle.
You must destroy the mask handle by using `AEGP\_DisposeMask()`.

```cpp
AEGP\_GetLayerMaskByIndex(
 AEGP\_LayerH aegp\_layerH,
 A\_long mask\_indexL,
 AEGP\_MaskRefH \*maskPH);

```

|
| `AEGP\_DisposeMask` | Dispose of a mask handle.

```cpp
AEGP\_DisposeMask(
 AEGP\_MaskRefH maskH);

```

|
| `AEGP\_GetMaskInvert` | Given a mask handle, determines if the mask is inverted or not.

```cpp
AEGP\_GetMaskInvert(
 AEGP\_MaskRefH maskH,
 A\_Boolean \*invertPB);

```

|
| `AEGP\_SetMaskInvert` | Sets the inversion state of a mask.

```cpp
AEGP\_SetMaskInvert(
 AEGP\_MaskRefH mask\_refH,
 A\_Boolean invertB);

```

|
| `AEGP\_GetMaskMode` | Given a mask handle, returns the current mode of the mask.
`PF\_MaskMode\_NONE` does nothing,
`PF\_MaskMode\_ADD` is the default behavior.\* `PF\_MaskMode\_NONE`

- `PF\_MaskMode\_ADD`,
- `PF\_MaskMode\_SUBTRACT`,
- `PF\_MaskMode\_INTERSECT`,
- `PF\_MaskMode\_LIGHTEN`,
- `PF\_MaskMode\_DARKEN`,
- `PF\_MaskMode\_DIFFERENCE`,

```cpp
AEGP\_GetMaskMode(
 AEGP\_MaskRefH maskH,
 PF\_MaskMode \*modeP);

```

|
| `AEGP\_SetMaskMode` | Sets the mode of the given mask.

```cpp
AEGP\_SetMaskMode(
 AEGP\_MaskRefH maskH,
 PF\_MaskMode mode);

```

|
| `AEGP\_GetMaskMotionBlurState` | Retrieves the motion blur setting for the given mask.

```cpp
AEGP\_GetMaskMotionBlurState(
 AEGP\_MaskRefH mask\_refH,
 AEGP\_MaskMBlur \*blur\_stateP);

```

`AEGP\_MaskMBlur` will be one of the following:

- `AEGP\_MaskMBlur\_SAME\_AS\_LAYER`
- `AEGP\_MaskMBlur\_OFF`
- `AEGP\_MaskMBlur\_ON`

|
| `AEGP\_SetMaskMotionBlurState` | New in CS6. Sets the motion blur setting for the given mask.

```cpp
AEGP\_SetMaskMotionBlurState(
 AEGP\_MaskRefH mask\_refH,
 AEGP\_MaskMBlur blur\_state);

```

|
| `AEGP\_GetMaskFeatherFalloff` | New in CS6. Gets the type of feather falloff for the given mask, either
`AEGP\_MaskFeatherFalloff\_SMOOTH` or `AEGP\_MaskFeatherFalloff\_LINEAR`.

```cpp
AEGP\_SetMaskMotionBlurState(
 AEGP\_MaskRefH mask\_refH,
 AEGP\_MaskFeatherFalloff \*feather\_falloffP);

```

|
| `AEGP\_SetMaskFeatherFalloff` | Sets the type of feather falloff for the given mask.

```cpp
AEGP\_SetMaskMotionBlurState(
 AEGP\_MaskRefH mask\_refH,
 AEGP\_MaskFeatherFalloff feather\_falloff);

```

|
| `AEGP\_GetMaskName` | Removed in CS4. Use `AEGP\_GetNewStreamRefForMask` and the name functions in the Dynamic Stream Suite instead. |
| `AEGP\_SetMaskName` | |
| `AEGP\_GetMaskID` | Retrieves the `AEGP\_MaskIDVal` for the given `AEGP\_MaskRefH`, for use in uniquely identifying the mask.

```cpp
AEGP\_GetMaskID(
 AEGP\_MaskRefH mask\_refH,
 AEGP\_MaskIDVal \*id\_valP);

```

|
| `AEGP\_CreateNewMask` | Creates a new mask on the referenced `AEGP\_LayerH`, with zero nodes. The new mask’s index is returned.

```cpp
AEGP\_CreateNewMask(
 AEGP\_LayerH layerH,
 AEGP\_MaskRefH \*mask\_refPH,
 A\_long \*mask\_indexPL0);

```

|
| `AEGP\_DeleteMaskFromLayer` |

```cpp
AEGP\_DeleteMaskFromLayer(
 AEGP\_MaskRefH mask\_refH);

```

NOTE: As of 6.5, if you delete a mask and it or a child stream is selected, the current selection within the composition will become NULL. |
| `AEGP\_GetMaskColor` | Retrieves the color of the specified mask.

```cpp
AEGP\_GetMaskColor(
 AEGP\_MaskRefH mask\_refH,
 AEGP\_ColorVal \*colorP);

```

|
| `AEGP\_SetMaskColor` | Sets the color of the specified mask.

```cpp
AEGP\_SetMaskColor(
 AEGP\_MaskRefH mask\_refH,
 const AEGP\_ColorVal \*colorP);

```

|
| `AEGP\_GetMaskLockState` | Retrieves the lock state of the specified mask.

```cpp
AEGP\_GetMaskLockState(
 AEGP\_MaskRefH mask\_refH,
 A\_Boolean \*is\_lockedPB);

```

|
| `AEGP\_SetMaskLockState` | Sets the lock state of the specified mask.

```cpp
AEGP\_SetMaskLockState(
 AEGP\_MaskRefH mask\_refH,
 A\_Boolean lockB);

```

|
| `AEGP\_GetMaskIsRotoBezier` | Returns whether or not the given mask is used as a rotobezier.

```cpp
AEGP\_GetMaskIsRotoBezier(
 AEGP\_MaskRefH mask\_refH,
 A\_Boolean \*is\_roto\_bezierPB);

```

|
| `AEGP\_SetMaskIsRotoBezier` | Sets whether a given mask is to be used as a rotobezier.

```cpp
AEGP\_SetMaskIsRotoBezier(
 AEGP\_MaskRefH mask\_refH,
 A\_Boolean \*is\_roto\_bezierPB);

```

|
| `AEGP\_DuplicateMask` | Duplicates a given `AEGP\_MaskRefH`. Caller must dispose of duplicate.

```cpp
AEGP\_DuplicateMask(
 AEGP\_MaskRefH orig\_mask\_refH,
 AEGP\_MaskRefH \*dupe\_mask\_refPH);

```

|

---

## Mask Outlines

The Mask Suite above tells plug-ins about the masks on a layer, but not about the details of those masks.

This is because processing is required on After Effects’ part to access the information; the information isn’t just lying around.

Plug-ins access that information using this Mask Outline Suite.

### AEGP_MaskOutlineSuite3

| **Function**              | **Purpose**                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `AEGP\_IsMaskOutlineOpen` | Given an mask outline pointer (obtainable through the [Stream Suite](#aegps-aegp-suites-stream-suite)), |

determines if the mask path is open or closed.

```cpp
AEGP\_IsMaskOutlineOpen(
 AEGP\_MaskOutlineVal \*mask\_outlineP,
 A\_Boolean \*openPB);

```

|
| `AEGP\_SetMaskOutlineOpen` | Sets the open state of the given mask outline.

```cpp
AEGP\_SetMaskOutlineOpen(
 AEGP\_MaskOutlineValH mask\_outlineH,
 A\_Boolean openB);

```

|
| `AEGP\_GetMaskOutlineNumSegments` | Given a mask outline pointer, returns the number of segments in the path.
`num\_segmentsPL` is the total number of segments `[0...N-1]`.

```cpp
AEGP\_GetMaskOutlineNumSegments(
 AEGP\_MaskOutlineVal \*mask\_outlineP,
 A\_long \*num\_segmentsPL);

```

|
| `AEGP\_GetMaskOutlineVertexInfo` | Given a mask outline pointer and a point between 0 and the total number of segments.
For closed mask paths, `vertex[0]` is the same as `vertex[num\_segments]`.

```cpp
AEGP\_GetMaskOutlineVertexInfo(
 AEGP\_MaskOutlineVal \*mask\_outlineP,
 A\_long which\_pointL,
 AEGP\_MaskVertex \*vertexP);

```

|
| `AEGP\_SetMaskOutlineVertexInfo` | Sets the vertex information for a given index.
Setting vertex 0 is special; its in tangent will actually set the out tangent of the last vertex in the outline.
Of course, `which\_pointL` must be valid for the mask outline, or the function will return an error.

```cpp
AEGP\_SetMaskOutlineVertexInfo(
 AEGP\_MaskOutlineValH mask\_outlineH,
 AEGP\_VertexIndex which\_pointL,
 AEGP\_MaskVertex \*vertexP);

```

|
| `AEGP\_CreateVertex` | Creates a vertex at index position.
All vertices which formerly had an `AEGP\_VertexIndex` of position or greater will have their indices incremented by one.

```cpp
AEGP\_CreateVertex(
 AEGP\_MaskOutlineValH mask\_outlineH,
 AEGP\_VertexIndex position);.

```

NOTE: All masks must have at least one vertex. |
| `AEGP\_DeleteVertex` | Removes a vertex from a mask.

```cpp
AEGP\_DeleteVertex(
 AEGP\_MaskOutlineValH mask\_outlineH,
 AEGP\_VertexIndex index);

```

|
| `AEGP\_GetMaskOutlineNumFeathers` | New in CS6.

```cpp
AEGP\_DeleteVertex(
 AEGP\_MaskOutlineValH mask\_outlineH,
 A\_long \*num\_feathersPL);

```

|
| `AEGP\_GetMaskOutlineFeatherInfo` | New in CS6.

```cpp
AEGP\_GetMaskOutlineFeatherInfo(
 AEGP\_MaskOutlineValH mask\_outlineH,
 AEGP\_FeatherIndex which\_featherL,
 AEGP\_MaskFeather \*featherP);

```

|
| `AEGP\_SetMaskOutlineFeatherInfo` | New in CS6. Feather must already exist; use `AEGP\_CreateMaskOutlineFeather` first, if needed.

```cpp
AEGP\_SetMaskOutlineFeatherInfo(
 AEGP\_MaskOutlineValH mask\_outlineH,
 AEGP\_VertexIndex which\_featherL,
 const AEGP\_MaskFeather \*featherP);

```

|
| `AEGP\_CreateMaskOutlineFeather` | New in CS6. Index of new feather is passed back in `insert\_positionP`.

```cpp
AEGP\_CreateMaskOutlineFeather(
 AEGP\_MaskOutlineValH mask\_outlineH,
 const AEGP\_MaskFeather \*featherP0,
 AEGP\_FeatherIndex \*insert\_positionP);

```

|
| `AEGP\_DeleteMaskOutlineFeather` | New in CS6.

```cpp
AEGP\_DeleteMaskOutlineFeather(
 AEGP\_MaskOutlineValH mask\_outlineH,
 AEGP\_FeatherIndex index);

```

|

---

## Mask Feathering

New for CS6, masks can be feathered.

`AEGP\_MaskFeather` is defined as follows:

```cpp
typedef struct {
 A\_long segment; // mask segment where feather is
 PF\_FpLong segment\_sF; // 0-1: feather location on segment
 PF\_FpLong radiusF; // negative value allowed if type == AEGP\_MaskFeatherType\_INNER
 PF\_FpShort ui\_corner\_angleF; // 0-1: angle of UI handle on corners
 PF\_FpShort tensionF; // 0-1: tension of boundary at feather pt
 AEGP\_MaskFeatherInterp interp;
 AEGP\_MaskFeatherType type;
} AEGP\_MaskFeather;

```

`AEGP\_MaskFeatherInterp` is either `AEGP\_MaskFeatherInterp\_NORMAL` or `AEGP\_MaskFeatherInterp\_HOLD\_CW`.

`AEGP\_MaskFeatherType` is either `AEGP\_MaskFeatherType\_OUTER` or `AEGP\_MaskFeatherType\_INNER`.

This suite enables AEGPs to get and set the text associated with text layers.

:::tip: to get started, retrieve an `AEGP\_TextDocumentH` by calling `AEGP\_GetLayerStreamValue`, above, and passing `AEGP\_StreamType\_TEXT\_DOCUMENT` as the `AEGP\_StreamType`.

---

## Working With Text Layers

This suite enables AEGPs to get and set the text associated with text layers.

### AEGP_TextDocumentSuite1

| **Function**       | **Purpose**                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| `AEGP\_GetNewText` | Retrieves the UTF-16, NULL-terminated string used in the `AEGP\_TextDocumentH`. |

:::tip: After Effects will allocate the `AEGP\_MemHandle`;
your plug-in must dispose of it when done using `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetNewText(
 AEGP\_PluginID id,
 AEGP\_TextDocumentH text\_docH,
 AEGP\_MemHandle \*unicodePH);

```

|
| `AEGP\_SetText` | Specifies the text to be used by the `AEGP\_TextDocumentH`.

```cpp
AEGP\_SetText(
 AEGP\_TextDocumentH text\_docH,
 const A\_u\_short \*unicodePS,
 long lengthL);

```

|

---

## Working With Text Outlines

The `AEGP\_TextLayerSuite` provides access to the actual outlines of the text used by text layers.

Once you have a path, you can manipulate it with [PF_PathQuerySuite1](../effect-details/working-with-paths.html) (#effect-details-working-with-paths-pf-pathquerysuite) and [PF_PathDataSuite](../effect-details/working-with-paths.html) (#effect-details-working-with-paths-pf-pathdatasuite).

### AEGP_TextLayerSuite1

| **Function**               | **Purpose**                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------- |
| `AEGP\_GetNewTextOutlines` | Allocates and returns a handle to the `AEGP\_TextOutlinesHs` associated with the specified layer. |

`outlinesPH` will be NULL if there are no `AEGP\_TextOutlinesHs` associated with `layerH` (in other words, if it’s not a text layer).

```cpp
AEGP\_GetNewTextOutlines(
 AEGP\_LayerH layerH,
 const A\_Time \*layer\_timePT,
 AEGP\_TextOutlinesH \*outlinesPH);

```

|
| `AEGP\_DisposeTextOutlines` | Dispose of those outlines we allocated on your behalf!

```cpp
AEGP\_DisposeTextOutlines(
 AEGP\_TextOutlinesH outlinesH);

```

|
| `AEGP\_GetNumTextOutlines` | Retrieves the number of text outlines for the layer.

```cpp
AEGP\_GetNumTextOutlines(
 AEGP\_TextOutlinesH outlinesH,
 A\_long \*num\_otlnsPL);

```

|
| `AEGP\_GetIndexedTextOutline` | Returns a PF_PathOutlinePtr for the specifed text outline.

```cpp
AEGP\_GetIndexedTextOutline(
 AEGP\_TextOutlinesH outlinesH,
 A\_long path\_indexL,
 PF\_PathOutlinePtr \*pathPP);

```

|

---

## Utility Functions

The Utility suite supplies error message handling, AEGP version checking and access to the undo stack.

Everything you need to keep After Effects and your plug-in tidy.

---

### AEGP_UtilitySuite6

| **Function**       | **Purpose**                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `AEGP\_ReportInfo` | Displays dialog with name of the AEGP followed by the string passed. |

```cpp
AEGP\_ReportInfo(
 AEGP\_PluginID aegp\_plugin\_id,
 const A\_char \*info\_stringZ);

```

|
| `AEGP\_ReportInfoUnicode` | New in CC. Displays dialog with name of the AEGP followed by the unicode string passed.

```cpp
AEGP\_ReportInfoUnicode(
 AEGP\_PluginID aegp\_plugin\_id,
 const A\_UTF16Char \*info\_stringP);

```

|
| `AEGP\_GetDriverSpecVersion` | Returns version of `AEGPDriver` plug-in (use to determine supported features).

```cpp
AEGP\_GetDriverSpecVersion(
 A\_short \*major\_versionPS,
 A\_short \*minor\_versionPS);

```

|
| `AEGP\_StartQuietErrors` | Silences errors. Must be balanced with `AEGP\_EndQuietErrors`.
The `AEGP\_ErrReportState` is an opaque structure private to After Effects.

```cpp
AEGP\_StartQuietErrors(
 AEGP\_ErrReportState \*err\_stateP);

```

|
| `AEGP\_EndQuietErrors` | Re-enables errors.

```cpp
AEGP\_EndQuietErrors(
 AEGP\_ErrReportState \*err\_stateP)

```

|
| `AEGP\_StartUndoGroup` | Add action(s) to the undo queue. The user may undo any actions between this and `AEGP\_EndUndoGroup()`.
The `undo\_nameZ` will appear in the edit menu.

```cpp
AEGP\_StartUndoGroup(
 const A\_char \*undo\_nameZ);

```

|
| `AEGP\_EndUndoGroup` | Ends the undo list.

```cpp
AEGP\_EndUndoGroup();

```

|
| `AEGP\_RegisterWithAEGP` | Returns an AEGP_PluginID, which effect plug-ins can then use in calls to many functions throughout the AEGP API.
Effects should only call this function once, during `PF\_Cmd\_GLOBAL\_SETUP`, and save the `AEGP\_PluginID` for later use.
The first parameter can be any value, and the second parameter should be the plug-in’s match name.

```cpp
AEGP\_RegisterWithAEGP(
 AEGP\_GlobalRefcon global\_refcon,
 const A\_char \*plugin\_nameZ,
 AEGP\_PluginID \*plugin\_id);

```

|
| `AEGP\_GetMainHWND` | Retrieves After Effects’ HWND; useful when displaying your own dialog on Windows.
If you don’t use After Effects’ HWND, your modal dialog will not prevent interaction with the windows behind, and pain will ensue.

```cpp
AEGP\_GetMainHWND(
 void \*main\_hwnd);

```

|
| `AEGP\_ShowHideAllFloaters` | Toggles whether or not floating palettes are displayed.
Use this with care; users get twitchy when you unexpectedly change the UI on them.

```cpp
AEGP\_ShowHideAllFloaters(
 A\_Boolean include\_tool\_palB);

```

|
| `AEGP\_PaintPalGetForeColor` | Retrieves the foreground color from the paint palette.

```cpp
AEGP\_PaintPalGetForeColor(
 AEGP\_ColorVal \*fore\_colorP);

```

|
| `AEGP\_PaintPalGetBackColor` | Retrieves the background color from the paint palette.

```cpp
AEGP\_PaintPalGetBackColor(
 AEGP\_ColorVal \*back\_colorP);

```

|
| `AEGP\_PaintPalSetForeColor` | Sets the foreground color in the paint palette.

```cpp
AEGP\_PaintPalSetForeColor(
 const AEGP\_ColorVal \*fore\_colorP);

```

|
| `AEGP\_PaintPalSetBackColor` | Sets the background color in the paint palette.

```cpp
AEGP\_PaintPalSetBackColor(
 const AEGP\_ColorVal \*back\_colorP);

```

|
| `AEGP\_CharPalGetFillColor` | Retrieves the fill color from the character palette.

```cpp
AEGP\_CharPalGetFillColor(
 A\_Boolean \*is\_fcolor\_definedPB,
 AEGP\_ColorVal \*fill\_colorP);

```

|
| `AEGP\_CharPalGetStrokeColor` | Retrieves the stroke color from the character palette.

```cpp
AEGP\_CharPalGetStrokeColor(
 A\_Boolean \*is\_scolor\_definedPB,
 AEGP\_ColorVal \*stroke\_colorP);

```

|
| `AEGP\_CharPalSetFillColor` | Sets the fill color in the character palette.

```cpp
AEGP\_CharPalSetFillColor(
 const AEGP\_ColorVal \*fill\_colorP);

```

|
| `AEGP\_CharPalSetStrokeColor` | Sets the stroke color in the character palette.

```cpp
AEGP\_CharPalSetStrokeColor(
 const AEGP\_ColorVal \*stroke\_colorP);

```

|
| `AEGP\_CharPalIsFillColorUIFrontmost` | Returns whether or not the fill color is frontmost. If it isn’t, the stroke color is frontmost.

```cpp
AEGP\_CharPalIsFillColorUIFrontmost(
 A\_Boolean \*is\_fcolor\_selectedPB);

```

|
| `AEGP\_ConvertFpLongToHSFRatio` | Returns an `A\_Ratio` interpretation of the given `A\_FpLong`. Useful for horizontal scale factor interpretation.

```cpp
AEGP\_ConvertFpLongToHSFRatio(
 A\_FpLong numberF,
 A\_Ratio \*ratioPR);

```

|
| `AEGP\_ConvertHSFRatioToFpLong` | Returns an `A\_FpLong` interpretation of the given `A\_Ratio`. Useful for horizontal scale factor interpretation.

```cpp
AEGP\_ConvertHSFRatioToFpLong(
 A\_Ratio ratioR,
 A\_FpLong \*numberPF);

```

|
| `AEGP\_CauseIdleRoutinesToBeCalled` | This routine is safe to call from threads other than the main thread.
It is asynchronous and will return before the idle handler is called.
The suite functions to get this function pointer are not thread safe; save it off in the main thread for use by the child thread.

```cpp
AEGP\_CauseIdleRoutinesToBeCalled(void);

```

|
| `AEGP\_GetSuppressInteractiveUI` | Returns whether After Effects is running without a user interface.

```cpp
AEGP\_GetSuppressInteractiveUI(
 A\_Boolean \*ui\_is\_suppressedPB);

```

|
| `AEGP\_WriteToOSConsole` | Sends a string to the OS console.

```cpp
AEGP\_WriteToOSConsole(
 const A\_char \*textZ);

```

|
| `AEGP\_WriteToDebugLog` | Writes a message to the debug log, or to the OS command line if After Effects was launched with the “-debug” option.

```cpp
AEGP\_WriteToDebugLog(
 const A\_char \*subsystemZ,
 const A\_char \*event\_typeZ,
 const A\_char \*infoZ);

```

|
| `AEGP\_GetLastErrorMessage` | Retrieves the last error message displayed to the user, and its associated error number.
Pass in the size of the character buffer to be returned.

```cpp
AEGP\_GetLastErrorMessage(
 A\_long buffer\_size,
 A\_char \*error\_string,
 A\_Err \*error\_num);

```

|
| `AEGP\_IsScriptingAvailable` | Returns `TRUE` if scripting is available to the plug-in.

```cpp
AEGP\_IsScriptingAvailable(
 A\_Boolean \*outAvailablePB);

```

|
| `AEGP\_ExecuteScript` | Have After Effects execute a script.
The script passed in can be in either UTF-8 or the current application encoding (if platform_encodingB is passed in as TRUE).
The two out arguments are optional. The value of the last line of the script is what is passed back in outResultPH0.

```cpp
AEGP\_ExecuteScript(
 AEGP\_PluginID inPlugin\_id,
 const A\_char \*inScriptZ,
 const A\_Boolean platform\_encodingB,
 AEGP\_MemHandle \*outResultPH0,
 AEGP\_MemHandle \*outErrStringPH0);

```

|
| `AEGP\_HostIsActivated` | Returns TRUE if the user has successfully activated After Effects.

```cpp
AEGP\_HostIsActivated(
 A\_Boolean \*is\_activatedPB);

```

|
| `AEGP\_GetPluginPlatformRef` | On macOS, returns a `CFBundleRef` to your Mach-O plug-in, or NULL for a CFM plug-in.
Always returns `NULL` on Windows (you can use an OS-specific entry point to capture your DLLInstance).

```cpp
AEGP\_GetPluginPlatformRef(
 AEGP\_PluginID plug\_id,
 void \*\*plat\_refPPV);

```

|
| `AEGP\_UpdateFontList` | Rescans the system font list.

```cpp
AEGP\_UpdateFontList();

```

|
| `AEGP\_GetPluginPaths` | New in CC. Returns a particular path associated with the plug-in:

- `AEGP\_GetPathTypes\_PLUGIN` - (Not Implemented) The path to the location of the plug-in itself.
- `AEGP\_GetPathTypes\_USER\_PLUGIN` -The suite specific location of user specific plug-ins.
- `AEGP\_GetPathTypes\_ALLUSER\_PLUGIN` - The suite specific location of plug-ins shared by all users.
- `AEGP\_GetPathTypes\_APP` - The After Effects .exe or .app location. Not plug-in specific.

```cpp
AEGP\_GetPluginPaths(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_GetPathTypes path\_type
 AEGP\_MemHandle \*unicode\_pathPH);

```

|

---

## Persistent Data Suite

Plug-ins have read and write access to persistent data in After Effects’ preferences. AEGPs may add and manage their own persistent data using the following suite. The data entries are accessed by (section key, value key) pairs. It is recommended that plug-ins use their matchname as their section key, or as a prefix if using multiple section keys.

The available data types are `A\_long`, `A\_FpLong`, strings, and `void\*`. `A\_FpLongs` are stored with 6 decimal places of precision. There is no provision for specifying a different precision. String data supports the full 8-bit space. Only 0x00 is reserved for string ending. This makes them ideal for storing UTF-8 encoded strings, ISO 8859-1, and plain ASCII. Both section keys and value keys are of this type. For data types not represented by the simple data types provided, use data handles containing your custom data. void\* unstructured data allows you to store any kind of data. You must pass in a size in bytes along with the data.

When calling any of the functions to retrieve the value of a key, if a given key is not found, the default value is both written to the blob and returned as the value; if no default is provided, a blank value will be written and returned.

:::tip that this data is stored in the application’s preferences, not in the project. As of 6.5, there is no way to store opaque AEGP-generated data in an After Effects project.

After Effects can handle plug-ins which change the preferences during their application; it checks the in-RAM copy of the prefs before acting upon pref-able settings, rather than relying on the saved prefs. It’s like we _planned_ this, or something!

### AEGP_PersistentDateSuite4

| **Function**               | **Purpose**                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| `AEGP\_GetApplicationBlob` | Obtains the handle to all persistent application data. Modifying this will modify the application. |

The `AEGP\_PersistentType` parameter is new in CC, and should be set to one of the following:

- `AEGP\_PersistentType\_MACHINE\_SPECIFIC`,
- `AEGP\_PersistentType\_MACHINE\_INDEPENDENT`,
- `AEGP\_PersistentType\_MACHINE\_INDEPENDENT\_RENDER`,
- `AEGP\_PersistentType\_MACHINE\_INDEPENDENT\_OUTPUT`,
- `AEGP\_PersistentType\_MACHINE\_INDEPENDENT\_COMPOSITION`
- `AEGP\_PersistentType\_MACHINE\_SPECIFIC\_TEXT`,
- `AEGP\_PersistentType\_MACHINE\_SPECIFIC\_PAINT`

```cpp
AEGP\_GetApplicationBlob(
 AEGP\_PersistentType blob\_type,
 AEGP\_PersistentBlobH \*blobPH);

```

|
| `AEGP\_GetNumSections` | Obtains the number of sections in the application blob.

```cpp
AEGP\_GetNumSections(
 AEGP\_PersistentBlobH blobH,
 A\_long \*num\_sectionPL);

```

|
| `AEGP\_GetSectionKeyByIndex` | Obtains the key at the given index.

```cpp
AEGP\_GetSectionKeyByIndex(
 AEGP\_PersistentBlobH blobH,
 A\_long section\_index,
 A\_long max\_section\_size,
 A\_char \*section\_keyZ);

```

|
| `AEGP\_DoesKeyExist` | Returns whether or not a given key/value pair exists with the blob.

```cpp
AEGP\_DoesKeyExist(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 A\_Boolean \*existsPB);

```

|
| `AEGP\_GetNumKeys` | Retrieves the number of value keys in the section.

```cpp
AEGP\_GetNumKeys(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 A\_long \*num\_keysPL);

```

|
| `AEGP\_GetValueKeyByIndex` | Retrieves the value of the indexed key.

```cpp
AEGP\_GetValueKeyByIndex(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 A\_long key\_index,
 A\_long max\_key\_size,
 A\_char \*value\_keyZ);

```

|

:::tip

For the functions below, if a given key is not found, the default value is both written to the blob and returned as the value;
if no default is provided, a blank value will be written and returned.

| **Function**          | **Purpose**                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `AEGP\_GetDataHandle` | Obtains the value associated with the given section’s key. If using in-memory data structures, watch for endian issues. |

```cpp
AEGP\_GetDataHandle(
 AEGP\_PluginID plugin\_id,
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 AEGP\_MemHandle defaultH0,
 AEGP\_MemHandle \*valuePH);

```

|
| `AEGP\_GetData` | Obtains the data located at a given section’s value.

```cpp
AEGP\_GetData(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 A\_u\_long data\_sizeLu,
 const void \*defaultPV0,
 void \*bufPV);

```

|
| `AEGP\_GetString` | Obtains the string for a given section key’s value (and indicates its length in `actual\_szLu0`).

```cpp
AEGP\_GetString(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 const A\_char \*defaultZ0,
 A\_u\_long buf\_sizeLu,
 char \*bufZ,
 A\_u\_long \*actual\_szLu0);

```

|
| `AEGP\_GetLong` | Obtains the `A\_long` associated with a given section key’s value.

```cpp
AEGP\_GetLong(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 A\_long defaultL,
 A\_long \*valuePL);

```

|
| `AEGP\_GetFpLong` | Obtains the `A\_FpLong` associated with a given section key’s value.

```cpp
AEGP\_GetFpLong(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 A\_FpLong defaultF,
 A\_FpLong \*valuePF);

```

|
| `AEGP\_GetTime` | New in CC. Obtains the `A\_Time` associated with a given section key’s value.

```cpp
AEGP\_GetTime(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 const A\_Time \*defaultPT0,
 A\_Time \*valuePT);

```

|
| `AEGP\_GetARGB` | New in CC. Obtains the `PF\_PixelFloat` associated with a given section key’s value.

```cpp
AEGP\_GetARGB(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 const PF\_PixelFloat \*defaultP0,
 PF\_PixelFloat \*valueP);

```

|
| `AEGP\_SetDataHandle` | Sets the given section key’s value to the handle passed in.

```cpp
AEGP\_SetDataHandle(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 const AEGP\_MemHandle valueH);

```

|
| `AEGP\_SetData` | Sets the given section key’s value to the data contained in `dataPV`.

```cpp
AEGP\_SetData(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 A\_u\_long data\_sizeLu,
 const void \*dataPV);

```

|
| `AEGP\_SetString` | Sets the given section key’s string to `strZ`.

```cpp
AEGP\_SetString(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 const A\_char \*strZ);

```

|
| `AEGP\_SetLong` | Sets the given section key’s value to `valueL`.

```cpp
AEGP\_SetLong(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 A\_long valueL);

```

|
| `AEGP\_SetFpLong` | Sets the given section key’s value to `valueF`.

```cpp
AEGP\_SetFpLong(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 A\_FpLong valueF);

```

|
| `AEGP\_SetTime` | New in CC. Sets the given section key’s value to `valuePT`.

```cpp
AEGP\_SetTime(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 A\_Time \*valuePT);

```

|
| `AEGP\_SetARGB` | New in CC. Sets the given section key’s value to `valueP`.

```cpp
AEGP\_SetARGB(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ,
 PF\_PixelFloat \*valueP);

```

|
| `AEGP\_DeleteEntry` | Removes the given section’s value from the blob.

```cpp
AEGP\_DeleteEntry(
 AEGP\_PersistentBlobH blobH,
 const A\_char \*section\_keyZ,
 const A\_char \*value\_keyZ);

```

|
| `AEGP\_GetPrefsDirectory` | Get the path to the folder containing After Effects’ preference file.
The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetPrefsDirectory(
 AEGP\_MemHandle \*unicode\_pathPH);

```

|

---

## Color Management

We’ve provided a function so AEGPs can obtain information on After Effects’ current color management settings.

### AEGP_ColorSettingsSuite2

| **Function**              | **Purpose**                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| `AEGP\_GetBlendingTables` | Retrieves the current opaque `PF\_EffectBlendingTables`, for use with `AEGP\_TransferRect`. |

```cpp
AEGP\_GetBlendingTables(
 PR\_RenderContextH render\_contextH,
 PF\_EffectBlendingTables \*blending\_tables);

```

|
| `AEGP\_DoesViewHaveColorSpaceXform` | Returns whether there is a colorspace transform applied to the current item view.

```cpp
AEGP\_DoesViewHaveColorSpaceXform(
 AEGP\_ItemViewP viewP,
 A\_Boolean \*has\_xformPB);

```

|
| `AEGP\_XformWorkingToViewColorSpace` | Changes the view colorspace of the source to be the working colorspace of the destination.
Source and destination can be the same.

```cpp
AEGP\_XformWorkingToViewColorSpace(
 AEGP\_ItemViewP viewP,
 AEGP\_WorldH srcH,
 AEGP\_WorldH dstH);

```

|
| `AEGP\_GetNewWorkingSpaceColorProfile` | Retrieves the opaque current working space ICC profile. Must be disposed.
The “New” in the name does not indicate that you’re making up a new profile; rather, it’s part of our function naming standard;
nything with “New” in the name allocates something which the caller must dispose.

```cpp
AEGP\_GetNewWorkingSpaceColorProfile(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_MemHandle \*icc\_profPH);

```

|
| `AEGP\_GetNewColorProfileFromICCProfile` | Retrieves a new `AEGP\_ColorProfileP` from After Effects, representing the specified ICC profile.
The caller must dispose of the returned `AEGP\_ColorProfileP` using `AEGP\_DisposeColorProfile()`.

```cpp
AEGP\_GetNewColorProfile FromICCProfile(
 AEGP\_PluginID aegp\_plugin\_id,
 A\_long icc\_sizeL,
 const void \*icc\_dataPV,
 AEGP\_ColorProfileP \*profilePP);

```

|
| `AEGP\_GetNewICCProfileFromColorProfile` | Retrieves a new ICC profile (stored in an `AEGP\_MemHandle`) representing the specified color profile.
Returned `AEGP\_MemHandle` must be disposed by the caller.

```cpp
AEGP\_GetNewICCProfile FromColorProfile(
 AEGP\_PluginID plugin\_id,
 AEGP\_ConstColorProfileP profileP,
 AEGP\_MemHandle \*profilePH);

```

|
| `AEGP\_GetNewColorProfileDescription` | Returns a textual description of the specified color profile.
Text will be a null-terminated UTF16 string, which must be disposed by the caller.

```cpp
AEGP\_GetNewColorProfileDescription(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_ConstColorProfileP profileP,
 AEGP\_MemHandle \*unicode\_descPH);

```

|
| `AEGP\_DisposeColorProfile` | Disposes of a color profile, obtained using other functions in this suite.

```cpp
AEGP\_DisposeColorProfile(
 AEGP\_ColorProfileP profileP);

```

|
| `AEGP\_GetColorProfileApproximateGamma` | Returns a floating point number approximating the gamma setting used by the specified color profile.

```cpp
AEGP\_GetColorProfileApproximateGamma(
 AEGP\_ConstColorProfileP profileP,
 A\_FpShort \*approx\_gammaP);

```

|
| `AEGP\_IsRGBColorProfile` | Returns whether the specified color profile is RGB.

```cpp
AEGP\_IsRGBColorProfile(
 AEGP\_ConstColorProfileP profileP,
 A\_Boolean \*is\_rgbPB);

```

|

---

## Render Suites

Since we introduced the AEGP API, we’ve been asked to provide functions for retrieving rendered frames.

These function suites allows you to do just that.

First, specify what you want rendered in the [AEGP_RenderOptionsSuite4](#aegps-aegp-suites-render-options-suite) or [AEGP_LayerRenderOptionsSuite1](#aegps-aegp-suites-aegp-layerrenderoptionssuite).

Then do the rendering with [AEGP_RenderSuite4](#aegps-aegp-suites-aegp-rendersuite).

### AEGP_RenderOptionsSuite4

| **Function**        | **Purpose**                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| `AEGP\_NewFromItem` | Returns the `AEGP\_RenderOptionsH` associated with a given `AEGP\_ItemH`. |

If there are no options yet specified, After Effects passes back an `AEGP\_RenderOptionsH` with render time set to 0,
time step set to the current frame duration, field render set to `PF\_Field\_FRAME`, and the depth set to the highest resolution specified within the item.

```cpp
AEGP\_NewFromItem(
 AEGP\_PluginID plugin\_id,
 AEGP\_ItemH itemH,
 AEGP\_RenderOptionsH \*optionsPH);

```

|
| `AEGP\_Duplicate` | Duplicates an `AEGP\_RenderOptionsH` into `copyPH`.

```cpp
AEGP\_Duplicate(
 AEGP\_PluginID plugin\_id,
 AEGP\_RenderOptionsH optionsH,
 AEGP\_RenderOptionsH \*copyPH);

```

|
| `AEGP\_Dispose` | Deletes an `AEGP\_RenderOptionsH`.

```cpp
AEGP\_Dispose(
 AEGP\_RenderOptionsH optionsH);

```

|
| `AEGP\_SetTime` | Sets the render time of an `AEGP\_RenderOptionsH`.

```cpp
AEGP\_SetTime(
 AEGP\_RenderOptionsH optionsH,
 A\_Time time);

```

|
| `AEGP\_GetTime` | Retrieves the render time of the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_GetTime(
 AEGP\_RenderOptionsH optionsH,
 A\_Time \*timeP);

```

|
| `AEGP\_SetTimeStep` | Specifies the time step (duration of a frame) for the referenced `AEGP\_RenderOptionsH`.

```cpp
AEGP\_SetTimeStep(
 AEGP\_RenderOptionsH optionsH,
 A\_Time time\_step);

```

|
| `AEGP\_GetTimeStep` | Retrieves the time step (duration of a frame) for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_GetTimeStep(
 AEGP\_RenderOptionsH optionsH,
 A\_Time \*timePT);

```

|
| `AEGP\_SetFieldRender` | Specifies the field settings for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_SetFieldRender(
 AEGP\_RenderOptionsH optionsH,
 PF\_Field field\_render);

```

|
| `AEGP\_GetFieldRender` | Retrieves the field settings for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_GetFieldRender(
 AEGP\_RenderOptionsH optionsH,
 PF\_Field \*field\_renderP);

```

|
| `AEGP\_SetWorldType` | Specifies the AEGP_WorldType of the output of a given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_SetWorldType(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_WorldType type);

```

`AEGP\_WorldType` will be either `AEGP\_WorldType\_8` or `AEGP\_WorldType\_16` |
| `AEGP\_GetWorldType` | Retrieves the `AEGP\_WorldType` of the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_GetWorldType(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_WorldType \*typeP);

```

|
| `AEGP\_SetDownsampleFactor` | Specifies the downsample factor (with independent horizontal and vertical settings) for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_SetDownsampleFactor(
 AEGP\_RenderOptionsH optionsH,
 A\_short x,
 A\_short y);

```

|
| `AEGP\_GetDownsampleFactor` | Retrieves the downsample factor for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_GetDownsampleFactor(
 AEGP\_RenderOptionsH optionsH,
 A\_short \*xP,
 A\_short \*yP);

```

|
| `AEGP\_SetRegionOfInterest` | Specifies the region of interest sub-rectangle for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_SetRegionOfInterest(
 AEGP\_RenderOptionsH optionsH,
 const A\_LRect \*roiP)

```

|
| `AEGP\_GetRegionOfInterest` | Retrieves the region of interest sub-rectangle for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_GetRegionOfInterest(
 AEGP\_RenderOptionsH optionsH,
 A\_LRect \*roiP);

```

|
| `AEGP\_SetMatteMode` | Specifies the `AEGP\_MatteMode` for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_SetMatteMode(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_MatteMode mode);

```

`AEGP\_MatteMode` will be one of the following:

- `AEGP\_MatteMode\_STRAIGHT`
- `AEGP\_MatteMode\_PREMUL\_BLACK`
- `AEGP\_MatteMode\_PREMUL\_BG\_COLOR`

|
| `AEGP\_GetMatteMode` | Retrieves the `AEGP\_MatteMode` for the given `AEGP\_RenderOptionsH`.

```cpp
AEGP\_GetMatteMode(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_MatteMode \*modeP);

```

|
| `AEGP\_GetChannelOrder` | Gets the `AEGP\_ChannelOrder` for the given `AEGP\_RenderOptionsH`.
`AEGP\_ChannelOrder` will be either `AEGP\_ChannelOrder\_ARGB` or `AEGP\_ChannelOrder\_BGRA`.

```cpp
AEGP\_GetChannelOrder(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_ChannelOrder \*orderP);

```

Factoid: this was added to facilitate live linking with Premiere Pro. |
| `AEGP\_SetChannelOrder` | Sets the `AEGP\_ChannelOrder` of the `AEGP\_RenderOptionsH`.

```cpp
AEGP\_SetChannelOrder(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_ChannelOrder order);

```

|
| `AEGP\_GetRenderGuideLayers` | Passes back a boolean that is true if the render guide layers setting is on.

```cpp
AEGP\_GetRenderGuideLayers)(
 AEGP\_RenderOptionsH optionsH,
 A\_Boolean \*will\_renderPB);

```

|
| `AEGP\_SetRenderGuideLayers` | Specify whether or not to render guide layers.

```cpp
AEGP\_SetRenderGuideLayers)(
 AEGP\_RenderOptionsH optionsH,
 A\_Boolean render\_themB);

```

|
| `AEGP\_GetRenderQuality` | Get the render quality of the render queue item.
Quality can be either `AEGP\_ItemQuality\_DRAFT` or `AEGP\_ItemQuality\_BEST`.

```cpp
AEGP\_GetRenderQuality)(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_ItemQuality \*qualityP);

```

|
| `AEGP\_SetRenderQuality` | Set the render quality of the render queue item.

```cpp
AEGP\_GetRenderQuality)(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_ItemQuality quality);

```

|

### AEGP_LayerRenderOptionsSuite1

:::tip

New in 13.0

| **Function**         | **Purpose**                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `AEGP\_NewFromLayer` | Returns the `AEGP\_LayerRenderOptionsH` associated with a given `AEGP\_LayerH`. |

Render time is set to the layer’s current time, time step is set to layer’s frame duration,
ROI to the layer’s nominal bounds, and EffectsToRender to “all”.
`optionsPH` must be disposed by calling code.

```cpp
AEGP\_NewFromLayer(
 AEGP\_PluginID plugin\_id,
 AEGP\_LayerH layerH,
 AEGP\_LayerRenderOptionsH \*optionsPH);

```

|
| `AEGP\_NewFromUpstreamOfEffect` | Returns the `AEGP\_LayerRenderOptionsH` from the layer associated with a given `AEGP\_EffectRefH`.
Render time is set to the layer’s current time, time step is set to layer’s frame duration,
ROI to the layer’s nominal bounds, and EffectsToRender to the index of `effectH`.
`optionsPH` must be disposed by calling code.

```cpp
AEGP\_NewFromUpstreamOfEffect(
 AEGP\_PluginID plugin\_id,
 AEGP\_EffectRefH effectH,
 AEGP\_LayerRenderOptionsH \*optionsPH);

```

|
| `AEGP\_Duplicate` | Duplicates an `AEGP\_LayerRenderOptionsH` into `copyPH`.

```cpp
AEGP\_Duplicate(
 AEGP\_PluginID plugin\_id,
 AEGP\_LayerRenderOptionsH optionsH,
 AEGP\_LayerRenderOptionsH \*copyPH);

```

|
| `AEGP\_Dispose` | Deletes an `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_Dispose(
 AEGP\_LayerRenderOptionsH optionsH);

```

|
| `AEGP\_SetTime` | Sets the render time of an `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_SetTime(
 AEGP\_LayerRenderOptionsH optionsH,
 A\_Time time);

```

|
| `AEGP\_GetTime` | Retrieves the render time of the given `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_GetTime(
 AEGP\_LayerRenderOptionsH optionsH,
 A\_Time \*timeP);

```

|
| `AEGP\_SetTimeStep` | Specifies the time step (duration of a frame) for the referenced `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_SetTimeStep(
 AEGP\_LayerRenderOptionsH optionsH,
 A\_Time time\_step);

```

|
| `AEGP\_GetTimeStep` | Retrieves the time step (duration of a frame) for the given `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_GetTimeStep(
 AEGP\_LayerRenderOptionsH optionsH,
 A\_Time \*timePT);

```

|
| `AEGP\_SetWorldType` | Specifies the AEGP_WorldType of the output of a given `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_SetWorldType(
 AEGP\_LayerRenderOptionsH optionsH,
 AEGP\_WorldType type);

```

`AEGP\_WorldType` will be either `AEGP\_WorldType\_8` or `AEGP\_WorldType\_16` |
| `AEGP\_GetWorldType` | Retrieves the AEGP_WorldType of the given `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_GetWorldType(
 AEGP\_LayerRenderOptionsH optionsH,
 AEGP\_WorldType \*typeP);

```

|
| `AEGP\_SetDownsampleFactor` | Specifies the downsample factor (with independent horizontal and vertical settings) for the given `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_SetDownsampleFactor(
 AEGP\_LayerRenderOptionsH optionsH,
 A\_short x,
 A\_short y);

```

|
| `AEGP\_GetDownsampleFactor` | Retrieves the downsample factor for the given `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_GetDownsampleFactor(
 AEGP\_LayerRenderOptionsH optionsH,
 A\_short \*xP,
 A\_short \*yP);

```

|
| `AEGP\_SetMatteMode` | Specifies the AEGP_MatteMode for the given `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_SetMatteMode(
 AEGP\_LayerRenderOptionsH optionsH,
 AEGP\_MatteMode mode);

```

AEGP_MatteMode will be one of the following:

- `AEGP\_MatteMode\_STRAIGHT`
- `AEGP\_MatteMode\_PREMUL\_BLACK`
- `AEGP\_MatteMode\_PREMUL\_BG\_COLOR`

|
| `AEGP\_GetMatteMode` | Retrieves the AEGP_MatteMode for the given `AEGP\_LayerRenderOptionsH`.

```cpp
AEGP\_GetMatteMode(
 AEGP\_LayerRenderOptionsH optionsH,
 AEGP\_MatteMode \*modeP);

```

|

### AEGP_RenderSuite4

| **Function**                   | **Purpose**                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `AEGP\_RenderAndCheckoutFrame` | Retrieves an `AEGP\_FrameReceiptH` (not the actual pixels) for the frame requested. |

Check in this receipt using `AEGP\_CheckinFrame` to release memory.
Create the `AEGP\_RenderOptionsH` using the [AEGP_RenderOptionsSuite4](#aegps-aegp-suites-render-options-suite).
Optionally, the AEGP can pass a function to be called by After Effects if the user cancels the current render,
as well as a refcon (constant reference to opaque data) for use during that function.

```cpp
AEGP\_RenderAndCheckoutFrame(
 AEGP\_RenderOptionsH optionsH,
 AEGP\_RenderSuiteCheckForCancel cancel\_functionP0,
 AEGP\_CancelRefcon cancel\_function\_refconP0,
 AEGP\_FrameReceiptH \*receiptPH);

```

|
| `AEGP\_RenderAndCheckoutLayerFrame` | New in CC 2014. This allows frame checkout of a layer with effects applied at non-render time.
This is useful for an operation that requires the frame, for example, when a button is clicked and it is acceptable to wait for a moment while it is rendering.
:::tip: Since it is not asynchronous, it will not solve the general problem where custom UI needs to draw based on the frame.
Retrieves an `AEGP\_FrameReceiptH` (not the actual pixels) for the layer frame requested.
Check in this receipt using `AEGP\_CheckinFrame` to release memory.
Create the `AEGP\_LayerRenderOptionsH` using `AEGP\_NewFromUpstreamOfEffect()`, in [AEGP_LayerRenderOptionsSuite1](#aegps-aegp-suites-aegp-layerrenderoptionssuite).
You can actually use `AEGP\_NewFromLayer()` to get other layer param’s layers with their effects applied.
However, be careful. If you do it in your effect A, and there’s an effect B on the other layer that does the same thing during rendering, you’d create an infinite loop.
If you’re not doing it for render purposes then it could be okay.
Optionally, the AEGP can pass a function to be called by After Effects if the user cancels the current render,
as well as a refcon (constant reference to opaque data) for use during that function.

```cpp
AEGP\_RenderAndCheckoutLayerFrame(
 AEGP\_LayerRenderOptionsH optionsH,
 A\_Boolean render\_plain\_layer\_frameB,
 AEGP\_RenderSuiteCheckForCancel cancel\_functionP0,
 AEGP\_CancelRefcon cancel\_function\_refconP0,
 AEGP\_FrameReceiptH \*receiptPH);

```

|
| `AEGP\_CheckinFrame` | Call this function as soon as your AEGP is done accessing the frame.
After Effects makes caching decisions based on which frames are checked out, so don’t hog them!

```cpp
AEGP\_CheckinFrame(
 AEGP\_FrameReceiptH receiptH);

```

|
| `AEGP\_GetReceiptWorld` | Retrieves the pixels (`AEGP\_WorldH`) associated with the referenced `AEGP\_FrameReceiptH`.

```cpp
AEGP\_GetReceiptWorld(
 AEGP\_FrameReceiptH receiptH,
 AEGP\_WorldH \*worldPH);

```

|
| `AEGP\_GetRenderedRegion` | Retrieves an `A\_LRect` containing the region of the `AEGP\_FrameReceiptH's` `AEGP\_WorldH` that has already been rendered.
Remember that it’s possible for only those portions of an image that have been changed to be rendered,
so it’s important to be able to check whether or not that includes the portion you need.

```cpp
AEGP\_GetRenderedRegion(
 AEGP\_FrameReceiptH receiptH,
 A\_LRect \*regionP);

```

|
| `AEGP\_IsRenderedFrameSufficient` | Given two sets of `AEGP\_RenderOptionsH`, After Effects will return `TRUE` if the already-rendered pixels are still valid for the proposed `AEGP\_RenderOptionsH`.

```cpp
AEGP\_IsRenderedFrameSufficient(
 AEGP\_RenderOptionsH rendered\_optionsH,
 AEGP\_RenderOptionsH proposed\_optionsH,
 A\_Boolean \*is\_sufficientPB);

```

|
| `AEGP\_RenderNewItemSoundData` | Obtains an `AEGP\_ItemH's` audio at the given time, of the given duration, in the given format.
The plug-in must dispose of the returned `AEGP\_SoundDataH` (which may be NULL if no audio is available).

```cpp
AEGP\_RenderNewItemSoundData(
 AEGP\_ItemH itemH,
 const A\_Time \*start\_timePT,
 const A\_Time \*durationPT,
 const AEGP\_SoundDataFormat \*formatP,
 AEGP\_SoundDataH \*new\_dataPH);

```

NOTE: This function, if called as part of `AEGP\_ItemSuite2`, provides a render interruptible using mouse clicks,
unlike the version published here in `AEGP\_RenderSuite`. |
| `AEGP\_GetCurrentTimestamp` | Retrieves the current `AEGP\_TimeStamp` of the project.
The `AEGP\_TimeStamp` is updated whenever an item is touched in a way that affects rendering.

```cpp
AEGP\_GetCurrentTimestamp(
 AEGP\_TimeStamp \*time\_stampP);

```

|
| `AEGP\_HasItemChangedSinceTimestamp` | Returns whether the video of an AEGP_ItemH has changed since the given `AEGP\_TimeStamp`.
:::tip: this does not track changes in audio.

```cpp
AEGP\_HasItemChangedSinceTimestamp(
 AEGP\_ItemH itemH,
 const A\_Time \*start\_timeP,
 const A\_Time \*durationP,
 const AEGP\_TimeStamp \*time\_stampP,
 A\_Boolean \*changedPB);

```

|
| `AEGP\_IsItemWorthwhileToRender` | Returns whether this frame would be worth rendering externally and checking in to the cache.
A speculative renderer should check this twice: before sending the frame out to render and when it is complete,
before calling `AEGP\_NewPlatformWorld()` and checking in.
This function is to be used with `AEGP\_HasItemChangedSinceTimestamp()`, not alone.

```cpp
AEGP\_IsItemWorthwhileToRender(
 AEGP\_RenderOptionsH roH,
 const AEGP\_TimeStamp \*time\_stampP,
 A\_Boolean \*worthwhilePB);

```

|
| `AEGP\_CheckinRenderedFrame` | Provide a rendered frame (`AEGP\_PlatformWorldH`) to After Effects, which adopts it.
`ticksL` is the approximate time required to render the frame.

```cpp
AEGP\_CheckinRenderedFrame(
 AEGP\_RenderOptionsH roH,
 const AEGP\_TimeStamp\* time\_stampP,
 A\_u\_long ticksL,
 AEGP\_PlatformWorldH imageH);

```

|
| `AEGP\_GetReceiptGuid` | New in CS6. Retrieve a GUID for a rendered frame. The memory handle passed back must be disposed.

```cpp
AEGP\_GetReceiptGuid(
 AEGP\_FrameReceiptH receiptH,
 AEGP\_MemHandle \*guidMH)

```

|

---

## The AEGP_World As We Know It

`AEGP\_Worlds` are the common format used throughout the AEGP APIs to describe frames of pixels.

### AEGP_WorldSuite3

| **Function** | **Purpose**                                       |
| ------------ | ------------------------------------------------- |
| `AEGP\_New`  | Returns an allocated, initialized `AEGP\_WorldH`. |

```cpp
AEGP\_New(
 AEGP\_PluginID plugin\_id,
 AEGP\_WorldType type,
 A\_long widthL,
 A\_long heightL,
 AEGP\_WorldH \*worldPH);

```

|
| `AEGP\_Dispose` | Disposes of an `AEGP\_WorldH`. Use this on every world you allocate.

```cpp
AEGP\_Dispose(
 AEGP\_WorldH worldH);

```

|
| `AEGP\_GetType` | Returns the type of a given `AEGP\_WorldH`.

```cpp
AEGP\_GetType(
 AEGP\_WorldH worldH,
 AEGP\_WorldType \*\*typeP);

```

AEGP_WorldType will be one of the following:

- `AEGP\_WorldType\_8`,
- `AEGP\_WorldType\_16`,
- `AEGP\_WorldType\_32`

|
| `AEGP\_GetSize` | Returns the width and height of the given `AEGP\_WorldH`.

```cpp
AEGP\_GetSize(
 AEGP\_WorldH worldH,
 A\_long \*widthPL,
 A\_long \*heightPL);

```

|
| `AEGP\_GetRowBytes` | Returns the rowbytes for the given `AEGP\_WorldH`.

```cpp
AEGP\_GetRowBytes(
 AEGP\_WorldH worldH,
 A\_u\_long \*row\_bytesPL);

```

|
| `AEGP\_GetBaseAddr8` | Returns the base address of the `AEGP\_WorldH` for use in pixel iteration functions.
Will return an error if used on a non-8bpc world.

```cpp
AEGP\_GetBaseAddr8(
 AEGP\_WorldH worldH,
 PF\_Pixel8 \*\*base\_addrP);

```

|
| `AEGP\_GetBaseAddr16` | Returns the base address of the `AEGP\_WorldH` for use in pixel iteration functions.
Will return an error if used on a non-16bpc world.

```cpp
AEGP\_GetBaseAddr16(
 AEGP\_WorldH worldH,
 PF\_Pixel16 \*\*base\_addrP);

```

|
| `AEGP\_GetBaseAddr32` | Returns the base address of the `AEGP\_WorldH` for use in pixel iteration functions.
Will return an error if used on a non-32bpc world.

```cpp
AEGP\_GetBaseAddr32(
 AEGP\_WorldH worldH,
 PF\_PixelFloat \*\*base\_addrP);

```

|
| `AEGP\_FillOutPFEffectWorld` | Populates and returns a PF_EffectWorld representing the given `AEGP\_WorldH`, for use with numerous pixel processing callbacks.
NOTE: This does not give your plug-in ownership of the world referenced; destroy the source `AEGP\_WorldH` only if you allocated it.
It just fills out the provided `PF\_EffectWorld` to point to the same pixel buffer.

```cpp
AEGP\_FillOutPFEffectWorld(
 AEGP\_WorldH worldH,
 PF\_EffectWorld \*pf\_worldP);

```

|
| `AEGP\_FastBlur` | Performs a fast blur on a given `AEGP\_WorldH`.

```cpp
AEGP\_FastBlur(
 A\_FpLong radiusF,
 PF\_ModeFlags mode,
 PF\_Quality quality,
 AEGP\_WorldH worldH);

```

|
| `AEGP\_NewPlatformWorld` | Creates a new `AEGP\_PlatformWorldH` (a pixel world native to the execution platform).

```cpp
AEGP\_NewPlatformWorld(
 AEGP\_PluginID plugin\_id,
 AEGP\_WorldType type,
 A\_long widthL,
 A\_long heightL,
 AEGP\_PlatformWorldH \*worldPH);

```

|
| `AEGP\_DisposePlatformWorld` | Disposes of an `AEGP\_PlatformWorldH`.

```cpp
AEGP\_DisposePlatformWorld(
 AEGP\_PlatformWorldH worldH);

```

|
| `AEGP\_NewReferenceFromPlatformWorld` | Retrieves an AEGP_WorldH referring to the given `AEGP\_PlatformWorldH`.
NOTE: This doesn’t allocate a new world, it simply provides a reference to an existing one.

```cpp
AEGP\_NewReferenceFromPlatformWorld(
 AEGP\_PluginID plugin\_id,
 AEGP\_PlatformWorldH plat\_worldH,
 AEGP\_WorldH \*worldPH);

```

|

---

## Track Mattes and Transform Functions

Use the `AEGP\_CompositeSuite` to copy pixel worlds, operate on track mattes, and apply transfer functions.

### AEGP_CompositeSuite2

| **Function**                 | **Purpose**                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| `AEGP\_ClearAlphaExceptRect` | For the given `PF\_EffectWorld`, sets the alpha to fully transparent except for the specified rectangle. |

```cpp
AEGP\_ClearAlphaExceptRect(
 A\_Rect \*clipped\_dst\_rectPR,
 PF\_EffectWorld \*dstP);

```

|
| `AEGP\_PrepTrackMatte` | Mattes the pixels in a `PF\_EffectWorld` with the `PF\_Pixel` described in src_masks, putting the output into an array of pixels dst_mask.
NOTE: Unlike most of the other pixel mangling functions provided by After Effects, this one doesn’t take `PF\_EffectWorld` arguments;
rather, you can simply pass the data pointer from within the `PF\_EffectWorld`.
This can be confusing, but as a bonus, the function pads output appropriately so that `num\_pix` pixels are always output.

```cpp
AEGP\_PrepTrackMatte(
 A\_long num\_pix,
 A\_Boolean deepB,
 const PF\_Pixel \*src\_mask,
 PF\_MaskFlags mask\_flags,
 PF\_Pixel \*dst\_mask);

```

|
| `AEGP\_TransferRect` | Blends two `PF\_EffectWorlds` using a transfer mode, with an optional mask.
Pass NULL for the `blend\_tablesP0` parameter to perform blending in the current working color space.

```cpp
AEGP\_TransferRect(
 PF\_Quality quality,
 PF\_ModeFlags m\_flags,
 PF\_Field field,
 const A\_Rect \*src\_rec,
 const PF\_EffectWorld \*src\_world,
 const PF\_CompositeMode \*comp\_mode,
 PF\_EffectBlendingTables blend\_tablesP0,
 const PF\_MaskWorld \*mask\_world0,
 A\_long dest\_x,
 A\_long dest\_y,
 PF\_EffectWorld \*dst\_world);

```

|
| `AEGP\_CopyBits\_LQ` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF\_EffectWorld` to another, at low quality.

```cpp
AEGP\_CopyBits\_LQ(
 PF\_EffectWorld \*src\_worldP,
 A\_Rect \*src\_r,
 A\_Rect \*dst\_r,
 PF\_EffectWorld \*dst\_worldP);

```

|
| `AEGP\_CopyBits\_HQ\_Straight` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF\_EffectWorld` to another, at high quality,
with a straight alpha channel.

```cpp
AEGP\_CopyBits\_HQ\_Straight(
 PF\_EffectWorld \*src,
 A\_Rect \*src\_r,
 A\_Rect \*dst\_r,
 PF\_EffectWorld \*dst);

```

|
| `AEGP\_CopyBits\_HQ\_Premul` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF\_EffectWorld` to another, at high quality,
premultiplying the alpha channel.

```cpp
AEGP\_CopyBits\_HQ\_Premul(
 PF\_EffectWorld \*src,
 A\_Rect \*src\_r,
 A\_Rect \*dst\_r,
 PF\_EffectWorld \*dst);

```

|

---

## Work With Audio

`AEGP\_SoundDataSuite` allows AEGPs to obtain and manipulate the audio associated with compositions and footage items.

Audio-only items may be added to the render queue using `AEGP\_RenderNewItemSoundData()`.

### AEGP_SoundDateSuite1

| **Function**         | **Purpose**                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `AEGP\_NewSoundData` | Creates a new `AEGP\_SoundDataH`, of which the plug-in must dispose. |

```cpp
AEGP\_NewSoundData(
 const AEGP\_SoundDataFormat \*formatP,
 AEGP\_SoundDataH \*new\_dataPH);

```

|
| `AEGP\_DisposeSoundData` | Frees an `AEGP\_SoundDataH`.

```cpp
AEGP\_DisposeSoundData(
 AEGP\_SoundDataH sound\_dataH);

```

|
| `AEGP\_GetSoundDataFormat` | Obtains information about the format of a given `AEGP\_SoundDataH`.

```cpp
AEGP\_GetSoundDataFormat(
 AEGP\_SoundDataH soundH,
 AEGP\_SoundDataFormat \*formatP);

```

|
| `AEGP\_LockSoundDataSamples` | Locks the `AEGP\_SoundDataH` in memory.

```cpp
AEGP\_LockSoundDataSamples(
 AEGP\_SoundDataH soundH,
 void \*\*samples);

```

|
| `AEGP\_UnlockSoundDataSamples` | Unlocks an `AEGP\_SoundDataH`.

```cpp
AEGP\_UnlockSoundDataSamples(
 AEGP\_SoundDataH soundH);

```

|
| `AEGP\_GetNumSamples` | Obtains the number of samples in the given `AEGP\_SoundDataH`.

```cpp
AEGP\_GetNumSamples(
 AEGP\_SoundDataH soundH,
 A\_long \*numsamplesPL);

```

|

---

## Audio Settings

Audio render settings are represented using the `AEGP\_SoundDataFormat`.

```cpp
struct AEGP\_SoundDataFormat {
 A\_FpLong sample\_rateF;
 AEGP\_SoundEncoding encoding;
 A\_long bytes\_per\_sampleL;
 A\_long num\_channelsL; // 1 for mono, 2 for stereo
} AEGP\_SoundDataFormat;

```

`bytes\_per\_sampleL` is always either `1`, `2`, or `4`, and is ignored if float encoding is specified.

`AEGP\_SoundEncoding` is one of the following:

> - `AEGP\_SoundEncoding\_UNSIGNED\_PCM`
> - `AEGP\_SoundEncoding\_SIGNED\_PCM`
> - `AEGP\_SoundEncoding\_FLOAT`

---

## Render Queue Suite

This suite allows AEGPs to add items the to render queue (using default options), and control the basic state of the render queue.

### AEGP_RenderQueueSuite1

| **Function**                 | **Purpose**                                                    |
| ---------------------------- | -------------------------------------------------------------- |
| `AEGP\_AddCompToRenderQueue` | Adds a composition to the render queue, using default options. |

```cpp
AEGP\_AddCompToRenderQueue(
 AEGP\_CompH compH,
 const A\_char\* pathZ);

```

|
| `AEGP\_SetRenderQueueState` | Sets the render queue to one of three valid states.
It is not possible to go from stopped to paused.

```cpp
AEGP\_SetRenderQueueState(
 AEGP\_RenderQueueState state);

```

- `AEGP\_RenderQueueState\_STOPPED`
- `AEGP\_RenderQueueState\_PAUSED`
- `AEGP\_RenderQueueState\_RENDERING`
  |
  | `AEGP\_GetRenderQueueState` | Obtains the current render queue state.

```cpp
AEGP\_GetRenderQueueState(
 AEGP\_RenderQueueState \*stateP);

```

|

---

## Render Queue Item Suite

Manipulate all aspects of render queue items using this suite.

### AEGP_RQItemSuite4

| **Function**          | **Purpose**                                                |
| --------------------- | ---------------------------------------------------------- |
| `AEGP\_GetNumRQItems` | Returns the number of items currently in the render queue. |

```cpp
AEGP\_GetNumRQItems(
 A\_long \*num\_itemsPL);

```

|
| `AEGP\_GetRQItemByIndex` | Returns an `AEGP\_RQItemRefH` referencing the index’d item.

```cpp
AEGP\_GetRQItemByIndex(
 A\_long rq\_item\_index,
 AEGP\_RQItemRefH \*rq\_item\_refPH);

```

|
| `AEGP\_GetNextRQItem` | Returns the next `AEGP\_RQItemRefH`, for iteration purposes.
To get the first `AEGP\_RQItemRefH`, pass `RQ\_ITEM\_INDEX\_NONE` for the `current\_rq\_itemH`.

```cpp
AEGP\_GetNextRQItem(
 AEGP\_RQItemRefH current\_rq\_itemH,
 AEGP\_RQItemRefH \*next\_rq\_itemPH);

```

|
| `AEGP\_GetNumOutputModulesForRQItem` | Returns the number of output modules applied to the given `AEGP\_RQItemRefH`.

```cpp
AEGP\_GetNumOutputModulesForRQItem(
 AEGP\_RQItemRefH rq\_itemH,
 A\_long \*num\_outmodsPL);

```

|
| `AEGP\_GetRenderState` | Returns TRUE if the `AEGP\_RQItemRefH` is set to render (once the user clicks the Render button).

```cpp
AEGP\_GetRenderState(
 AEGP\_RQItemRefH rq\_itemH,
 A\_Boolean \*will\_renderPB);

```

|
| `AEGP\_SetRenderState` | Controls whether or not the `AEGP\_RQItemRefH` will render when the user next clicks the Render button.
Returns an error if called during rendering.
This function will return:\* `Err\_PARAMETER` if you try to call while `AEGP\_RenderQueueState` isn’t `AEGP\_RenderQueueState\_STOPPED`,

- `Err\_RANGE` if you pass a status that is illegal in any case, and
- `Err\_PARAMETER` if you try to pass a status that doesn’t make sense (like trying to queue something for which there’s no output path)

```cpp
AEGP\_SetRenderState(
 AEGP\_RQItemRefH rq\_itemH,
 A\_Boolean renderB);

```

|
| `AEGP\_GetStartedTime` | Returns the time (in seconds, since 1904) that rendering began.

```cpp
AEGP\_GetStartedTime(
 AEGP\_RQItemRefH rq\_itemH,
 A\_Time \*started\_timePT);

```

|
| `AEGP\_GetElapsedTime` | Returns the time elapsed since rendering began.

```cpp
AEGP\_GetElapsedTime(
 AEGP\_RQItemRefH rq\_itemH,
 A\_Time \*render\_timePT);

```

|
| `AEGP\_GetLogType` | Returns the log type for the referenced `AEGP\_RQItemRefH`.

```cpp
AEGP\_GetLogType(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_LogType \*logtypeP);

```

`AEGP\_LogtType` will have one of the following values:

- `AEGP\_LogType\_NONE`
- `AEGP\_LogType\_ERRORS\_ONLY`
- `AEGP\_LogType\_PLUS\_SETTINGS`
- `AEGP\_LogType\_PER\_FRAME\_INFO`

|
| `AEGP\_SetLogType` | Specifies the log type to be used with the referenced `AEGP\_RQItemRefH`.

```cpp
AEGP\_SetLogType(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_LogType logtype);

```

|
| `AEGP\_RemoveOutputModule` | Removes the specified output module from the referenced `AEGP\_RQItemRefH`.

```cpp
AEGP\_RemoveOutputModule(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH);

```

|
| `AEGP\_GetComment` | Updated to support Unicode in `RQItemSuite4`, available in 14.1.
Retrieves the comment associated with the referenced `AEGP\_RQItemRefH`.

```cpp
AEGP\_GetComment(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_MemHandle \*unicodeH);

```

|
| `AEGP\_SetComment` | Updated to support Unicode in `RQItemSuite4`, available in 14.1.
Specifies the comment associated with the referenced `AEGP\_RQItemRefH`.

```cpp
AEGP\_SetComment(
 AEGP\_RQItemRefH rq\_itemH,
 const A\_UTF16Char \*commentZ);

```

|
| `AEGP\_GetCompFromRQItem` | Retrieves the `AEGP\_CompH` associated with the `AEGP\_RQItemRefH`.

```cpp
AEGP\_GetCompFromRQItem(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_CompH \*compPH);

```

|
| `AEGP\_DeleteRQItem` | Deletes the render queue item. Undoable.

```cpp
AEGP\_DeleteRQItem(
 AEGP\_RQItemRefH rq\_itemH);

```

|

---

## Render Queue Monitor Suite

New in CS6. This suite provides all the info a render queue manager needs to figure out what is happening at any point in a render.

### AEGP_RenderQueueMonitorSuite1

| **Function**             | **Purpose**                                                                   |
| ------------------------ | ----------------------------------------------------------------------------- |
| `AEGP\_RegisterListener` | Register a set of plug-in-defined functions to be called by the render queue. |

Use the refcon to pass in data that you want to use later on when your plug-in-defined functions in `AEGP\_RQM\_FunctionBlock1` are called later.
It may be set it to NULL if you don’t need it.

```cpp
AEGP\_RegisterListener(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_RQM\_Refcon aegp\_refconP,
 const AEGP\_RQM\_FunctionBlock1 \*fcn\_blockP);

```

The `AEGP\_RQM\_FunctionBlock1` is defined as follows:

```cpp
struct \_AEGP\_RQM\_FunctionBlock1 {
 A\_Err (\*AEGP\_RQM\_RenderJobStarted)(
 AEGP\_RQM\_BasicData \*basic\_dataP,
 AEGP\_RQM\_SessionId jobid);

 A\_Err (\*AEGP\_RQM\_RenderJobEnded)(
 AEGP\_RQM\_BasicData \*basic\_dataP,
 AEGP\_RQM\_SessionId jobid);

 A\_Err (\*AEGP\_RQM\_RenderJobItemStarted)(
 AEGP\_RQM\_BasicData \*basic\_dataP,
 AEGP\_RQM\_SessionId jobid,
 AEGP\_RQM\_ItemId itemid);

 A\_Err (\*AEGP\_RQM\_RenderJobItemUpdated)(
 AEGP\_RQM\_BasicData \*basic\_dataP,
 AEGP\_RQM\_SessionId jobid,
 AEGP\_RQM\_ItemId itemid,
 AEGP\_RQM\_FrameId frameid);

 A\_Err (\*AEGP\_RQM\_RenderJobItemEnded)(
 AEGP\_RQM\_BasicData \*basic\_dataP,
 AEGP\_RQM\_SessionId jobid,
 AEGP\_RQM\_ItemId itemid,
 AEGP\_RQM\_FinishedStatus fstatus);

 A\_Err (\*AEGP\_RQM\_RenderJobItemReportLog)(
 AEGP\_RQM\_BasicData \*basic\_dataP,
 AEGP\_RQM\_SessionId jobid,
 AEGP\_RQM\_ItemId itemid,
 A\_Boolean isError,
 AEGP\_MemHandle logbuf);
} AEGP\_RQM\_FunctionBlock1;

```

`AEGP\_RQM\_FinishedStatus` will be one of the following:

- `AEGP\_RQM\_FinishedStatus\_UNKNOWN`,
- `AEGP\_RQM\_FinishedStatus\_SUCCEEDED`,
- `AEGP\_RQM\_FinishedStatus\_ABORTED`,
- `AEGP\_RQM\_FinishedStatus\_ERRED`

The AEGP_RQM_BasicData is defined below.

```cpp
struct \_AEGP\_RQM\_BasicData {
 const struct SPBasicSuite \*pica\_basicP;
 A\_long aegp\_plug\_id;
 AEGP\_RQM\_Refcon aegp\_refconPV;
} AEGP\_RQM\_BasicData;

```

|
| `AEGP\_DeregisterListener` | Deregister from the render queue.

```cpp
AEGP\_DeregisterListener(
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_RQM\_Refcon aegp\_refconP);

```

|
| `AEGP\_GetProjectName` | Obtain the current project name.
The project name is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetProjectName(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_MemHandle \*utf\_project\_namePH0);

```

|
| `AEGP\_GetAppVersion` | Obtain the app version.
The app version is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetAppVersion(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_MemHandle \*utf\_app\_versionPH0);

```

|
| `AEGP\_GetNumJobItems` | Obtain the number of job items.

```cpp
AEGP\_GetNumJobItems(
 AEGP\_RQM\_SessionId sessid,
 A\_long \*num\_jobitemsPL);

```

|
| `AEGP\_GetJobItemID` | Get the job with the index specified.

```cpp
AEGP\_GetJobItemID(
 AEGP\_RQM\_SessionId sessid,
 A\_long jobItemIndex,
 AEGP\_RQM\_ItemId \*jobItemID);

```

|
| `AEGP\_GetNumJobItemRenderSettings` | Get the number of render settings for the job with the index specified.

```cpp
AEGP\_GetNumJobItemRenderSettings(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long \*num\_settingsPL);

```

|
| `AEGP\_GetJobItemRenderSetting` | Get a specific render setting of a specific job.
The setting name and value are handles to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetJobItemRenderSetting(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long settingIndex,
 AEGP\_MemHandle \*utf\_setting\_namePH0,
 AEGP\_MemHandle \*utf\_setting\_valuePH0);

```

|
| `AEGP\_GetNumJobItemOutputModules` | Get the number of output modules for the job with the index specified.

```cpp
AEGP\_GetNumJobItemOutputModules(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long \*num\_outputmodulesPL);

```

|
| `AEGP\_GetNumJobItemOutputModuleSettings` | Get the number of settings for the output module with the index specified.

```cpp
AEGP\_GetNumJobItemOutputModuleSettings(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long outputModuleIndex,
 A\_long \*num\_settingsPL);

```

|
| `AEGP\_GetJobItemOutputModuleSetting` | Get a specific setting of a job item output module.
The setting name and value are handles to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetJobItemOutputModuleSetting(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long outputModuleIndex,
 A\_long settingIndex,
 AEGP\_MemHandle \*utf\_setting\_namePH0,
 AEGP\_MemHandle \*utf\_setting\_valuePH0);

```

|
| `AEGP\_GetNumJobItemOutputModuleWarnings` | Get the number of output module warnings for a job item.

```cpp
AEGP\_GetNumJobItemOutputModuleWarnings(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long outputModuleIndex,
 A\_long \*num\_warningsPL);

```

|
| `AEGP\_GetJobItemOutputModuleWarning` | Get a specific warning of a specific output module for a specific job item.
The warning value is a handle to NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetJobItemOutputModuleWarning(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long outputModuleIndex,
 A\_long warningIndex,
 AEGP\_MemHandle \*utf\_warning\_valuePH0);

```

|
| `AEGP\_GetNumJobItemFrameProperties` | Get the number of properties for a job item frame.

```cpp
AEGP\_GetNumJobItemFrameProperties(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 AEGP\_RQM\_FrameId frameid,
 A\_long \*num\_propertiesPL);

```

|
| `AEGP\_GetJobItemFrameProperty` | Get a specific property on a job item frame.
The property name and values are handle to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetJobItemFrameProperty(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 AEGP\_RQM\_FrameId frameid,
 A\_long propertyIndex,
 AEGP\_MemHandle \*utf\_property\_namePH0,
 AEGP\_MemHandle \*utf\_property\_valuePH0);

```

|
| `AEGP\_GetNumJobItemOutputModuleProperties` | Get the number of properties for a job item output module.

```cpp
AEGP\_GetNumJobItemOutputModuleProperties(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long outputModuleIndex,
 A\_long \*num\_propertiesPL);

```

|
| `AEGP\_GetJobItemOutputModuleProperty` | Get a specific property off a job item output module.
The property name and values are handle to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetJobItemOutputModuleProperty(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 A\_long outputModuleIndex,
 A\_long propertyIndex,
 AEGP\_MemHandle \*utf\_property\_namePH0,
 AEGP\_MemHandle \*utf\_property\_valuePH0);

```

|
| `AEGP\_GetJobItemFrameThumbnail` | Get a buffer with a JPEG-encoded thumbnail of the job item frame.
Pass in the maximum width and height, and the actual dimensions will be passed back.

```cpp
AEGP\_GetJobItemFrameThumbnail(
 AEGP\_RQM\_SessionId sessid,
 AEGP\_RQM\_ItemId itemid,
 AEGP\_RQM\_FrameId frameid,
 A\_long \*widthPL,
 A\_long \*heightPL,
 AEGP\_MemHandle \*thumbnailPH0);

```

|

---

## Output Module Suite

Every item in the render queue has at least one output module specified.

Use this suite to query and control all aspects of the output modules attached to a given render item.

You may also add and remove output modules.

Factoid: For each frame rendered for a given render item, the list of output modules is traversed. So, for frame 0, output module 0, then 1, then 2 are called.

### AEGP_OutputModuleSuite4

| **Function**                   | **Purpose**                          |
| ------------------------------ | ------------------------------------ |
| `AEGP\_GetOutputModuleByIndex` | Retrieves the indexed output module. |

NOTE: `AEGP\_OutputModuleRefH` is an opaque data type, and can’t be manipulated directly; you must use our accessor functions to modify it.

```cpp
AEGP\_GetOutputModuleByIndex(
 AEGP\_RQItemRefH rq\_itemH,
 A\_long outmod\_indexL,
 AEGP\_OutputModuleRefH \*outmodPH);

```

|
| `AEGP\_GetEmbedOptions` | Retrieves the embedding setting specified for the referenced `AEGP\_OutputModuleRefH`.

```cpp
AEGP\_GetEmbedOptions(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_EmbeddingType \*embed\_optionsP);

```

`AEGP\_EmbeddingType` will be one of the following:

- `AEGP\_Embedding\_NOTHING`
- `AEGP\_Embedding\_LINK`
- `AEGP\_Embedding\_LINK\_AND\_COPY`

|
| `AEGP\_SetEmbedOptions` | Specifies the embedding setting for the referenced `AEGP\_OutputModuleRefH`.

```cpp
AEGP\_SetEmbedOptions(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_EmbeddingType embed\_options);

```

|
| `AEGP\_GetPostRenderAction` | Retrieves the post-render action setting for the referenced `AEGP\_OutputModuleRefH`.

```cpp
AEGP\_GetPostRenderAction(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_PostRenderAction \*actionP);

```

`AEGP\_PostRenderAction` will be one of the following:

- `AEGP\_PostRenderOptions\_IMPORT`
- `AEGP\_PostRenderOptions\_IMPORT\_AND\_REPLACE\_USAGE`
- `AEGP\_PostRenderOptions\_SET\_PROXY`

|
| `AEGP\_SetPostRenderAction` | Specifies the post-render action setting for the referenced `AEGP\_OutputModuleRefH`.

```cpp
AEGP\_SetPostRenderAction(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_PostRenderAction action);

```

|
| `AEGP\_GetEnabledOutputs` | Retrieves which output types are enabled for the referenced `AEGP\_OutputModuleRefH`.

```cpp
AEGP\_GetEnabledOutputs(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_OutputTypes \*typesP);

```

`AEGP\_OutputTypes` will contain one or both of the following values:

- `AEGP\_OutputType\_VIDEO`
- `AEGP\_OutputType\_AUDIO`

NOTE: These are flags, not an enumeration. |
| `AEGP\_SetEnabledOutputs` | Specifies which output types are enabled for the referenced `AEGP\_OutputModuleRefH`.

```cpp
AEGP\_SetEnabledOutputs(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_OutputTypes enabled\_types);

```

|
| `AEGP\_GetOutputChannels` | Retrieves which video channels are enabled for output in the referenced AEGP_OutputModuleRefH.

```cpp
AEGP\_GetOutputChannels(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_VideoChannels \*outchannelsP);

```

`AEGP\_VideoChannels` will be one of the following:

- `AEGP\_VideoChannels\_RGB`
- `AEGP\_VideoChannels\_RGBA`
- `AEGP\_VideoChannels\_ALPHA`

|
| `AEGP\_SetOutputChannels` | Specifies which video channels are enabled for output in the referenced `AEGP\_OutputModuleRefH`.

```cpp
AEGP\_SetOutputChannels(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_VideoChannels outchannels);

```

|
| `AEGP\_GetStretchInfo` | Retrieves the stretch information enabled for the referenced `AEGP\_OutputModuleRefH`;
whether or not stretching is enabled, whether or not the frame aspect ratio is locked to the composition’s, and what quality setting is specified.

```cpp
AEGP\_GetStretchInfo(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 A\_Boolean \*enabledPB,
 AEGP\_StretchQuality \*qualP,
 A\_Boolean \*lockedPB);

```

`AEGP\_StretchQuality` will be one of the following:

- `AEGP\_StretchQual\_LOW`
- `AEGP\_StretchQual\_HIGH`

|
| `AEGP\_SetStretchInfo` | Retrieves the stretch information enabled for the referenced `AEGP\_OutputModuleRefH`.

```cpp
AEGP\_SetStretchInfo(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 A\_Boolean is\_enabledB,
 AEGP\_StretchQuality quality);

```

|
| `AEGP\_GetCropInfo` | Retrieves whether or not the cropping is enabled for the referenced `AEGP\_OutputModuleRefH`, and the rectangle to be used.

```cpp
AEGP\_GetCropInfo(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 A\_Boolean \*is\_enabledBP,
 A\_Rect \*crop\_rectP);

```

|
| `AEGP\_SetCropInfo` | Specifies whether cropping is enabled for the referenced `AEGP\_OutputModuleRefH`, and the rectangle to be used.

```cpp
AEGP\_SetCropInfo(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 A\_Boolean enableB,
 A\_Rect crop\_rect);

```

|
| `AEGP\_GetSoundFormatInfo` | Retrieves whether or not audio output is enabled for the referenced `AEGP\_OutputModuleRefH`, and the settings to be used.

```cpp
AEGP\_GetSoundFormatInfo(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_SoundDataFormat \*formatP,
 A\_Boolean \*enabledPB);

```

|
| `AEGP\_SetSoundFormatInfo` | Specifies whether or not audio output is enabled for the referenced `AEGP\_OutputModuleRefH`, and the settings to be used.

```cpp
AEGP\_SetSoundFormatInfo(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_SoundDataFormat format\_info,
 A\_Boolean enabledB);

```

|
| `AEGP\_GetOutputFilePath` | Retrieves the path to which `AEGP\_OutputModuleRefH's` output file will be written.
The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetOutputFilePath(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_MemHandle \*unicode\_pathPH);

```

|
| `AEGP\_SetOutputFilePath` | Specifies the path to which `AEGP\_OutputModuleRefH's` output file will be written.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEGP\_SetOutputFilePath(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 const A\_UTF16Char \*pathZ);

```

|
| `AEGP\_AddDefaultOutputModule` | Adds the default output module to the specified `AEGP\_RQItemRefH`,
and returns the added output module’s `AEGP\_OutputModuleRefH` (you wouldn’t add it if you didn’t plan to mess around with it, would you?).

```cpp
AEGP\_AddDefaultOutputModule(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH \*outmodPH);

```

|
| `AEGP\_GetExtraOutputModuleInfo` | Retrieves information about the output module.
`format\_uniPH` and `info\_uniPH` provide the textual description of, and information about, the output module, formatted as the user would see it.
`format\_uniPH` and `info\_uniPH` will contain NULL-terminated UTF16 strings, of which the caller must dispose.

```cpp
AEGP\_GetExtraOutputModuleInfo(
 AEGP\_RQItemRefH rq\_itemH,
 AEGP\_OutputModuleRefH outmodH,
 AEGP\_MemHandle \*format\_uniPH,
 AEGP\_MemHandle \*info\_uniPH,
 A\_Boolean \*is\_sequenceBP,
 A\_Boolean \*multi\_frameBP);

```

|

---

## Working With Effects

These functions provide a way for effects (and AEGPs) to obtain information about the context of an applied effect.

:::tip

Any time you modify or rely on data from outside the normal render pipeline, you run the risk of dependency problems.

There is no way for After Effects to know that you depend on this external information; consequently, you will not be notified if it changes out from under you.

### AEGP_PFInterfaceSuite1

| **Function**           | **Purpose**                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `AEGP\_GetEffectLayer` | Obtain the layer handle of the layer to which the effect is applied. |

```cpp
AEGP\_GetEffectLayer(
 PF\_ProgPtr effect\_ref,
 AEGP\_LayerH \*layerPH);

```

|
| `AEGP\_GetNewEffectForEffect` | Obtain the `AEGP\_EffectRefH` corresponding to the effect.

```cpp
AEGP\_GetNewEffectForEffect(
 AEGP\_PluginID aegp\_plugin\_id,
 PF\_ProgPtr effect\_ref,
 AEGP\_EffectRefH \*effectPH);

```

|
| `AEGP\_ConvertEffectToCompTime` | Retreive the composition time corresponding to the effect’s layer time.

```cpp
AEGP\_ConvertEffectToCompTime(
 PF\_ProgPtr effect\_ref,
 long what\_timeL,
 unsigned long time\_scaleLu,
 A\_Time \*comp\_timePT);

```

|
| `AEGP\_GetEffectCamera` | Obtain the camera (if any) being used by After Effects to view the effect’s layer.

```cpp
AEGP\_GetEffectCamera(
 PF\_ProgPtr effect\_ref,
 const A\_Time \*comp\_timePT,
 AEGP\_LayerH camera\_layerPH);

```

|
| `AEGP\_GetEffectCameraMatrix` | Obtain the transform used to move between the layer’s coordinate space and that of the containing composition.

```cpp
AEGP\_GetEffectCameraMatrix(
 PF\_ProgPtr effect\_ref,
 const A\_Time \*comp\_timePT,
 A\_Matrix4 \*camera\_matrixP,
 A\_FpLong \*dst\_to\_planePF,
 A\_short \*plane\_widthPL,
 A\_short \*plane\_heightPL);

```

NOTE: In cases where the effect’s input layer has square pixels, but is in a non-square pixel composition,
you must correct for the pixel aspect ratio by premultiplying the matrix by `(1/parF, 1, 1)`. |

### AEGP_GetEffectCameraMatrix :::tips

The model view for the camera matrix is inverse of the matrix obtained from `AEGP\_GetEffectCameraMatrix()`.

Also note that our matrix is row-based; OpenGL’s is column-based.

---

## Do This Many Times

Utilizes multiple processors (if available) for your computations.

### AEGP_IterateSuite1

| **Function**          | **Purpose**                                                 |
| --------------------- | ----------------------------------------------------------- |
| `AEGP\_GetNumThreads` | Ask After Effects how many threads are currently available. |

```cpp
AEGP\_GetNumThreads(
 A\_long \*num\_threadsPL);

```

|
| `AEGP\_IterateGeneric` | Specify a function for After Effects to manage on multiple processors.
Can be any function pointer specified by `fn\_func`, taking the arguments listed below.
See [Private Data](implementation.html) (#aegps-implementation-private-data) for a description of how refconPV is used.

```cpp
AEGP\_IterateGeneric(
 A\_long iterationsL,
 void \*refconPV,
 A\_Err (\*fn\_func)
 (void \*refconPV,
 A\_long thread\_indexL,
 A\_long i,
 A\_long iterationsL));

```

|

---

## File Import Manager Suite

The FIMSuite allows file types handled by AEGPs to appear as part of the After Effects import dialog, and drag-and-drop messaging.

These are not for use by AEIOs! Rather, they are for importing projects which are best represented as After Effects compositions.

### AEGP_FIMSuite3

| **Function**                 | **Purpose**                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `AEGP\_RegisterImportFlavor` | Registers the name of the file type(s) supported by the plug-in. |

Upon return, `imp\_refP` will be a valid opaque reference, or `AE\_FIM\_ImportFlavorRef\_NONE`.

```cpp
AEGP\_RegisterImportFlavor(
 const char \*nameZ,
 AE\_FIM\_ImportFlavorRef \*imp\_refP);

```

|
| `AEGP\_RegisterImportFlavorFileTypes` | Registers an array of file types and file extensions (the two arrays need not be of equal length) supported by the AEGP.

```cpp
AEGP\_RegisterImportFlavorFileTypes(
 AE\_FIM\_ImportFlavorRef imp\_ref,
 long num\_filekindsL,
 const AEIO\_FileKind \*kindsAP,
 long num\_fileextsL,
 const AEIO\_FileKind \*extsAP);

```

|
| `AEGP\_RegisterImportFlavorImportCallbacks` | Register the AEGP functions which will respond to import of different filetypes.

```cpp
AEGP\_RegisterImportFlavorImportCallbacks(
 AE\_FIM\_ImportFlavorRef ref,
 AE\_FIM\_ImportFlags single\_flag,
 const AE\_FIM\_ImportCallbacks \*imp\_cbsP);

```

|
| `AEGP\_SetImportedItem` | Designates an item as having been imported (possibly replacing an existing item), and sets associated import options.

```cpp
AEGP\_SetImportedItem(
 AE\_FIM\_ImportOptions imp\_options,
 AEGP\_ItemH imported\_itemH);

```

|
