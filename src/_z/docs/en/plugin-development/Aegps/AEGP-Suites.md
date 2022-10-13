---
title: AEGP Suites
order: 6
category:
  - AE 插件开发
---

# AEGP Suites

As mentioned earlier, AEGPs do everything through suites. The following suites are used by all types of AEGPs, and may be called from within any hook function (except for the RegisterSuite, which must be used from within the AEGP’s entry point). Following is a description of each function in every suite, and, where appropriate details on using those functions.

| **Suite**                                                                                                                           | **Description**                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Memory Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-memory-suite)                           | Manage memory resources. Use this suite! Whenever memory-related errors are encountered, After Effects can report errors for you.                                                                                                                                                                                                                                                    |
| [Command Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-command-suite)                         | Manage your AEGP’s menu items. Used in conjunction with the Register Suite.                                                                                                                                                                                                                                                                                                          |
| [Register Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-register-suite)                       | Used in conjunction with the[Command Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-command-suite) to add functions to menu commands. AEIOs and Artisans must use this suite’s functions to indicate to After Effects that they want to receive the appropriate message streams. You can replace some After Effects’ commands using this suite. |
| [Project Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-project-suite)                         | Reads and modifies project data.                                                                                                                                                                                                                                                                                                                                                     |
| [Item Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-item-suite)                               | Manages items within a project or composition. Folders, Compositions, Solids, and Footage are all items.                                                                                                                                                                                                                                                                             |
| [Collection Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-collection-suite)                   | Query which items are currently selected, and create your own selection sets. It’s often a good UI move to select all the items your AEGP has modified, just to give the user some idea what you’ve done.                                                                                                                                                                            |
| [Composition Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-composition-suite)                 | Manages (and creates) compositions in a project, and composition-specific items like solids.                                                                                                                                                                                                                                                                                         |
| [Footage Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-footage-suite)                         | Manages footage.                                                                                                                                                                                                                                                                                                                                                                     |
| [Layer Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-layer-suite)                             | Provides information about the layers within a composition, and the relationship(s) between the source and layer times. Solids, text, paint, cameras, lights, images, and image sequences can all become layers.                                                                                                                                                                     |
| [Effect Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-effect-suite)                           | Provides access to the effects applied to a layer. Use Stream suites to obtain effect keyframe information. Use AEGP_EffectCallGeneric()` (in [AEGP_EffectSuite4](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-aegp-effectsuite)) to communicate with effects that you setup ahead of time to respond to your AEGP.                                  |     | [Stream Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-stream-suite) | Used to access the values of a layer’s keyframe properties. |     | [Dynamic Stream Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-dynamic-stream-suite) | Used to access the characteristics of dynamic streams associated with a layer. |     | [Keyframe Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-keyframe-suite) | Used to access and manipulate all keyframe data. |     | [Marker Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-marker-suite) | Used to manipulate markers. Use AEGP_GetNewCompMarkerStream()` (in [AEGP_CompSuite11](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-aegp-compsuite)) to get the composition marker stream. |
| [Mask Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-mask-suite)                               | Provides access to retrieve information about a layer’s masks.                                                                                                                                                                                                                                                                                                                       |
| [Mask Outline Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-mask-outline-suite)               | Used in conjunction with Stream Suite, this suite provides detailed information about the path rendered to make a layer’s mask.                                                                                                                                                                                                                                                      |
| [Text Document Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-text-document-suite)             | Used to access the actual text on a text layer.                                                                                                                                                                                                                                                                                                                                      |
| [Text Layer Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-text-layer-suite)                   | Used to access the paths that make up the outlines of a text layer.                                                                                                                                                                                                                                                                                                                  |
| [Utility Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-utility-suite)                         | Supplies error message handling, AEGP version checking and access to After Effects’ undo stack.                                                                                                                                                                                                                                                                                      |
| [Persistent Data Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-persistent-data-suite)         | Query and manage all persistent data (i.e., the preferences file). AEGPs can also add their own data to the prefs.                                                                                                                                                                                                                                                                   |
| [Color Settings Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-color-settings-suite)           | Obtain information on After Effects’ current color management settings.                                                                                                                                                                                                                                                                                                              |
| [Render Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-render-suite)                           | Get rendered frames (and audio samples) from within an AEGP.                                                                                                                                                                                                                                                                                                                         |
| [World Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-world-suite)                             | Allocate, dispose of, and query AEGP_Worlds. Also provides a way to convert a PF_EffectWorld ` into an AEGP_World`, for working with effect plug-ins.                                                                                                                                                                                                                                |
| [Composite Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-composite-suite)                     | Exposes After Effects’ compositing functionality, including transfer modes, track matting, and good old fashioned bit copying.                                                                                                                                                                                                                                                       |
| [Sound Data Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-sound-data-suite)                   | Functions for managing and accessing sound data.                                                                                                                                                                                                                                                                                                                                     |
| [Render Queue Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-render-queue-suite)               | Add and remove items from the render queue.                                                                                                                                                                                                                                                                                                                                          |
| [Render Queue Item Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-render-queue-item-suite)     | Query and modify items in the render queue.                                                                                                                                                                                                                                                                                                                                          |
| [Render Options Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-render-options-suite)           | Query and manage all items exposed in a render queue item’s options dialog.                                                                                                                                                                                                                                                                                                          |
| [Output Module Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-output-module-suite)             | Query and modify the output modules attached to items in the render queue.                                                                                                                                                                                                                                                                                                           |
| [PF Interface Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-pf-interface-suite)               | The functions in this suite, while technically part of the AEGP API, are for use by effects.                                                                                                                                                                                                                                                                                         |
| [AEGP Iterate Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-aegp-iterate-suite)               | Gives AEGPs a way to have a function (which has the required signature) to be run on any or all available processors.                                                                                                                                                                                                                                                                |
| [File Import Manager Suite](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-file-import-manager-suite) | Registers AEGP file and project importers as part of After Effects’ file handling.                                                                                                                                                                                                                                                                                                   |

## Fail Gracefully

If a suite isn’t present, make every attempt to fail gracefully. Show the user a message indicating the nature of the problem. Attempt to acquire and use an earlier version of the same suite.

Since AEGPs are so deeply integrated with After Effects, make sure that users know who or what is encountering a given problem.

Identify yourself! Provide support and/or help information to the user whenever possible.

## Handling Handles

Use the AEGP Memory Suite to manage memory used by the AEGP. Whenever memory related errors are encountered, After Effects can report errors for you to find early on.

`AEGP_MemHandle` is a structure that contains more than just the referenced memory. So it should not be dereferenced directly. Use `AEGP_LockMemHandle` to get a pointer to the memory referenced by the `AEGP_MemHandle`.

And of course, unlock it when you’re done.

### AEGP_MemorySuite1

#### AEGP_NewMemHandle

Create a new memory handle.This memory is guaranteed to be 16-byte aligned.`plugin_id` is the ID passed in through the main [Entry Point](implementation.html#aegps-implementation-entry-point),or alternatively what you obtained from `AEGP_RegisterWithAEGP()`
(from [AEGP_UtilitySuite6](#aegps-aegp-suites-aegp-utilitysuite)).
Use `whatZ` to identify the memory you are asking for.After Effects uses the string to display any related error messages.

```cpp
AEGP_NewMemHandle(
 AEGP_PluginID *plugin_id,
 const A_char *whatZ,
 AEGP_MemSize size,
 AEGP_MemFlag flags,
 AEGP_MemHandle *memPH);

```

#### AEGP_FreeMemHandle

Release a handle you allocated using AEGP_NewMemHandle().

```cpp
AEGP_FreeMemHandle(
 AEGP_MemHandle memH);

```

#### AEGP_LockMemHandle

Locks the handle into memory (cannot be moved by OS).Use this function prior to using memory allocated by `AEGP_NewMemHandle`. Can be nested.

```cpp
AEGP_LockMemHandle(
 AEGP_MemHandle memH,
 void **ptr_to_ptr);

```

#### AEGP_UnlockMemHandle

Allows OS to move the referenced memory. Always balance lock calls with unlocks.

```cpp
AEGP_UnlockMemHandle(
 AEGP_MemHandle memH);

```

#### AEGP_GetMemHandleSize

Returns the allocated size of the handle.

```cpp
AEGP_GetMemHandleSize AEGP_MemHandle memH,
 AEGP_MemSize *sizeP);

```

#### AEGP_ResizeMemHandle

Changes the allocated size of the handle.

```cpp
AEGP_ResizeMemHandle(
 const char *whatZ,
 AEGP_MemSize new_size,
 AEGP_MemHandle memH);

```

#### AEGP_SetMemReportingOn

If After Effects runs into problems with the memory handling, the error should be reported to the user.Make use of this during development!
Only memory allocated and then leaked using this suite is reported using this call,so for example memory allocated using [PF_HandleSuite1](../effect-details/memory-allocation.html#effect-details-memory-allocation-pf-handlesuite)
will not be reported.

```cpp
AEGP_SetMemReportingOn(
 A_Boolean turn_OnB);

```

#### AEGP_GetMemStats

Obtain information about the number of currently allocated handles and their total size.
Only memory allocated using this suite is tracked and reported using this call,so for example memory allocated using [PF_HandleSuite1](../effect-details/memory-allocation.html#effect-details-memory-allocation-pf-handlesuite) will not be reported here.

```cpp
AEGP_GetMemStats(
 AEGP_MemID mem_id,
 A_long *countPL,
 A_long *sizePL);

```

## Managing Menu Items

Command Suites allow you to create and handle any menu events.

To add your own menu commands, you must also use [Register Suite](#aegps-aegp-suites-register-suite) to assign handlers to menu events.

### AEGP_CommandSuite1

#### AEGP_GetUniqueCommand

Obtain a unique command identifier. Use the _Register Suite_ to register a handler for the command.

```cpp
AEGP_GetUniqueCommand(
 AEGP_Command *unique_commandP);

```

Note: On occasion After Effects will send command 0 (zero),
so don’t use that as part of your command handling logic.

#### AEGP_InsertMenuCommand

Add a new menu command. Using nameZ = “-” will insert a separator. menu_ID can be:

- `AEGP_Menu_NONE`
- `AEGP_Menu_APPLE`
- `AEGP_Menu_FILE`
- `AEGP_Menu_EDIT`
- `AEGP_Menu_COMPOSITION`
- `AEGP_Menu_LAYER`
- `AEGP_Menu_EFFECT`
- `AEGP_Menu_WINDOW`
- `AEGP_Menu_FLOATERS`
- `AEGP_Menu_KF_ASSIST`
- `AEGP_Menu_IMPORT`
- `AEGP_Menu_SAVE_FRAME_AS`
- `AEGP_Menu_PREFS`
- `AEGP_Menu_EXPORT`
- `AEGP_Menu_ANIMATION`
- `AEGP_Menu_PURGE`
- `AEGP_Menu_NEW` - Supported in CC and later

Locations can be set to a specific location in the menu or can be one assigned by After Effects:

- `AEGP_MENU_INSERT_SORTED`
- `AEGP_MENU_INSERT_AT_BOTTOM`
- `AEGP_MENU_INSERT_AT_TOP`

For `AEGP_Menu_WINDOW`, the BOTTOM and TOP options haven’t been supported since CS4 and will return an error.
We recommend `SORTED`.

```cpp
AEGP_InsertMenuCommand(
 AEGP_Command command,
 const A_char *nameZ,
 AEGP_MenuID menu_id,
 A_long after_itemL);

```

#### AEGP_RemoveMenuCommand

Remove a menu command. If you were so motivated, you could remove ALL of the After Effects menu items.

```cpp
AEGP_RemoveMenuCommand(
 AEGP_Command command);

```

#### AEGP_SetCommandName

Set menu name of a command.

```cpp
AEGP_SetCommandName(
 AEGP_Command command,
 const A_char *nameZ);

```

#### AEGP_EnableCommand

Enable a menu command.

```cpp
AEGP_EnableCommand(
 AEGP_Command command);

```

#### AEGP_DisableCommand

Disable a menu command.

```cpp
AEGP_DisableCommand(
 AEGP_Command command);

```

#### AEGP_CheckMarkMenuCommand

After Effects will draw a check mark next to the menu command.

```cpp
AEGP_CheckMarkMenuCommand(
 AEGP_Command command,
 A_Boolean checkB);

```

#### AEGP_DoCommand

Call the handler for a specified menu command. Every After Effects menu item has an associated command.
Note that we make no guarantees that command IDs will be consistent from version to version.

```cpp
AEGP_DoCommand(
 AEGP_Command command);

```

Having given the disclaimer above, here are a few command numbers that have been supplied to other developers, and may be of interest:

- 3061 - Open selection, ignoring any modifier keys.
- 10314 - Play/Stop (valid in 13.5 and later)
- 2285 - RAM Preview (valid prior to 13.5)
- 2415 - Play (spacebar) (valid prior to 13.5)
- 2997 - Crop composition to region of interest.
- 2372 - Edit > Purge > Image Caches

If your AEGP needs to call some other After Effects menu item, there’s a fairly easy way to find out most commands you want, using scripting:

```cpp
cmd = app.findMenuCommandId(text); // e.g. text = "Open Project…"
alert(cmd);

```

With AE running, just open up Adobe ExtendScript Toolkit CC, copy the above script in,and in the app drop-down choose the version of After Effects you have running.Then hit the Play button to run the script in AE.
Otherwise, contact [[mailto:zlam@adobe.com](mailto:zlam%40adobe.com)](<[[%5Bmailto:zlam@adobe.com%5D(mailto:zlam%40adobe.com)](%5Bmailto:zlam@adobe.com%5D(mailto:zlam%40adobe.com))](%5B%5Bmailto:zlam@adobe.com%5D(mailto:zlam%40adobe.com)%5D(%5Bmailto:zlam@adobe.com%5D(mailto:zlam%40adobe.com)))>) _API Engineering_ for the command number.

## Registering with After Effects

Register functions for After Effects’ use.

### AEGP_RegisterSuites5

#### AEGP_RegisterCommandHook

Register a hook (command handler) function with After Effects.
If you are replacing a function which After Effects also handles, `AEGP_HookPriority` determines whether your plug-in gets it first.* `AEGP_HP_BeforeAE`

- `AEGP_HP_AfterAE`

For each menu item you add, obtain your own `AEGP_Command` using `AEGP_GetUniqueCommand()`
(from [AEGP_CommandSuite1](#aegps-aegp-suites-aegp-commandsuite)) prior registering a single `command_hook_func`.
Determine which command was sent within this hook function, and act accordingly.
Currently, `AEGP_HookPriority` is ignored.

```cpp
AEGP_RegisterCommandHook(
 AEGP_PluginID aegp_plugin_id,
 AEGP_HookPriority hook_priority,
 AEGP_Command command,
 AEGP_CommandHook command_hook_func
 void *refconPV);

```

#### AEGP_RegisterUpdateMenuHook

Register your menu update function (which determines whether or not items are active),called every time any menu is to be drawn.
This hook function handles updates for all menus.

```cpp
AEGP_RegisterUpdateMenuHook(
 AEGP_PluginID aegp_plugin_id,
 AEGP_UpdateMenuHook update_menu_hook_func,
 void *refconPV);

```

#### AEGP_RegisterDeathHook

Register your termination function. Called when the application quits.

```cpp
AEGP_RegisterDeathHook(
 AEGP_PluginID aegp_plugin_id,
 AEGP_DeathHook death_hook_func,
 void *refconPV);

```

#### AEGP_RegisterVersionHook

Currently not called.

#### AEGP_RegisterAboutStringHook

Currently not called.

#### AEGP_RegisterAboutHook

Currently not called.

#### AEGP_RegisterArtisan

Register your Artisan. See [Artisans](../artisans/artisans.html#artisans-artisans) for more details.

```cpp
AEGP_RegisterArtisan(
 A_Version api_version,
 A_Version Artisan_version,
 long aegp_plugin_id,
 void *aegp_refconPV,
 const A_char *match_nameZ,
 const A_char *Artisan_nameZ,
 PR_ArtisanEntryPoints *entry_funcsP);

```

#### AEGP_RegisterIO

Register your AEIO plug-in. See [AEIOs](../aeios/aeios.html#aeios-aeios) for more details.

```cpp
AEGP_RegisterIO (
 AEGP_PluginID aegp_plugin_id,
 AEGP_IORefcon aegp_refconP,
 const AEIO_ModuleInfo *io_infoP,
 const AEIO_FunctionBlock4 *aeio_fcn_blockP);

```

#### AEGP_RegisterIdleHook

Register your IdleHook function. After Effects will call the function sporadically, while the user makes difficult artistic decisions (or while they’re getting more coffee).

```cpp
AEGP_RegisterIdleHook(
 AEGP_PluginID aegp_plugin_id,
 AEGP_IdleHook idle_hook_func,
 AEGP_IdleRefcon refconP);

```

#### AEGP_RegisterInteractiveArtisan

Registers your AEGP as an interactive artisan, for use in previewing and rendering all layers in a given composition.

```cpp
AEGP_RegisterInteractiveArtisan (
 A_Version api_version,
 A_Version artisan_version,
 AEGP_PluginID aegp_plugin_id,
 void *aegp_refconPV,
 const A_char *match_nameZ,
 const A_char *artisan_nameZ,
 PR_ArtisanEntryPoints *entry_funcsP);

```

#### AEGP_RegisterPresetLocalizationString

Call this to register as many strings as you like for name-replacement when presets are loaded.
Any time a Property name is found, or referred to in an expression,and it starts with an ASCII tab character (’t’), followed by one of the English names, it will be replaced with the localized name.
(In English the tab character will simply be removed).

```cpp
AEGP_RegisterPresetLocalizationString(
 const A_char *english_nameZ,
 const A_char *localized_nameZ);

```

## Manage Projects

These functions access and modify project data. Support for multiple projects is included to prepare for future expansion;
After Effects currently adheres to the single project model.

To save project-specific data in After Effects’ preferences (and thus, outside the projects themselves), use the [Persistent Data Suite](#aegps-aegp-suites-persistent-data-suite).

Use caution: the functions for opening and creating projects do not save changes to the project currently open when they are called!

### AEGP_ProjSuite6

#### AEGP_NumProjects

Currently will never return more than 1. After Effects can have only one project open at a time.

```cpp
AEGP_GetNumProjects(
 A_long *num_projPL)

```

#### AEGP_GetIndProject

Retrieves a specific project by index.

```cpp
AEGP_GetProjectProjectByIndex(
 A_long proj_indexL,
 AEGP_ProjectH *projPH);

```

#### AEGP_GetProjectName

Get the project name (up to `AEGP_MAX_PROJ_NAME_LEN + 1`) in length.

```cpp
AEGP_GetProjectName(
 AEGP_ProjectH projH,
 A_char *nameZ);

```

#### AEGP_GetProjectPath

Get the path of the project (empty string the project hasn’t been saved yet).
The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetProjectPath(
 AEGP_ProjectH projH,
 AEGP_MemHandle *unicode_pathPH)

```

#### AEGP_GetProjectRootFolder

Get the root of the project, which After Effects also treats as a folder.

```cpp
AEGP_GetProjectRootFolder(
 AEGP_ProjectH projH,
 AEGP_ItemH *root_folderPH)

```

#### AEGP_SaveProjectToPath

Saves the entire project to the specified full path.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEGP_SaveProjectToPath(
 AEGP_ProjectH projH,
 const A_UTF16Char *pathZ);

```

#### AEGP_GetProjectTimeDisplay

Retrieves the current time display settings.

```cpp
AEGP_GetProjectTimeDisplay(
 AEGP_ProjectH projH,
 AEGP_TimeDisplay3 *time_displayP);

typedef struct {
 AEGP_TimeDisplayMode display_mode;
 AEGP_SourceTimecodeDisplayMode footage_display_mode;
 A_Boolean display_dropframeB;
 A_Boolean use_feet_framesB;
 A_char timebaseC;
 A_char frames_per_footC;
 AEGP_FramesDisplayMode frames_display_mode;
} AEGP_TimeDisplay3;

enum {
 AEGP_TimeDisplay_TIMECODE = 0,
 AEGP_TimeDisplay_FRAMES
};

typedef char AEGP_TimeDisplayMode;

enum {
 AEGP_SourceTimecode_ZERO= 0,
 AEGP_SourceTimecode_SOURCE_TIMECODE
};

typedef char AEGP_SourceTimecodeDisplayMode;

enum {
 AEGP_Frames_ZERO_BASED= 0,
 AEGP_Frames_ONE_BASED,
 AEGP_Frames_TIMECODE_CONVERSION
};

typedef char AEGP_FramesDisplayMode;

```

#### AEGP_SetProjectTimeDisplay

Specified the settings to be used for displaying time.

```cpp
AEGP_SetProjectTimeDisplay(
 AEGP_ProjectH projH,
 const AEGP_TimeDisplay3 *time_displayP);

```

#### AEGP_ProjectIsDirty

Returns TRUE if the project has been modified since it was opened.

```cpp
AEGP_ProjectIsDirty(
 AEGP_ProjectH projH,
 A_Boolean *is_dirtyPB);

```

#### AEGP_SaveProjectAs

Saves the project to the specified path.
The file path is a NULL-terminated UTF-16 string with platform separators.
NOTE: This will overwrite an existing file.

```cpp
AEGP_SaveProjectAs(
 AEGP_ProjectH projH,
 const A_UTF16Char *pathZ);

```

#### AEGP_NewProject

Creates a new project. NOTE: Will close the current project without saving it first!

```cpp
AEGP_NewProject(
 AEGP_ProjectH *new_projectPH);

```

#### AEGP_OpenProjectFromPath

Opens a project from the supplied path, and returns its `AEGP_ProjectH`.
The file path is a NULL-terminated UTF-16 string with platform separators.
NOTE: Will close the current project without saving it first!

```cpp
AEGP_OpenProjectFromPath(
 const A_UTF16Char *pathZ,
 AEGP_ProjectH *projectPH);

```

#### AEGP_GetProjectBitDepth

Retrieves the project bit depth.

```cpp
AEGP_GetProjectBitDepth(
 AEGP_Projec tH projectH,
 AEGP_ProjBitDepth *bit_depthP);

```

AEGP_ProjBitDepth will be one of the following:

- `AEGP_ProjBitDepth_8`
- `AEGP_ProjBitDepth_16`
- `AEGP_ProjBitDepth_32`

#### AEGP_SetProjectBitDepth

Sets the project bit depth. Undoable.

```cpp
AEGP_SetProjectBitDepth(
 AEGP_ProjectH projectH,
 AEGP_ProjBitDepth bit_depth);

```

### AEGP_TimeDisplay2

::: tip

Values in unused fields persist when After Effects is using a different display type.
:::

#### AEGP_TimeDisplayType type

One of the following:

- `AEGP_TimeDisplayType_TIMECODE`
- `AEGP_TimeDisplayType_FRAMES`
- `AEGP_TimeDisplayType_FEET_AND_FRAMES`

#### A_char timebaseC

0 - 100. Only used for `AEGP_TimeDisplayType_TIMECODE`.

#### A_Boolean non_drop_30B

When the timebase is 30 and the item’s framerate is 29.97, determines whether to display as non-drop frame.

#### A_char frames_per_footC

Only used for `AEGP_TimeDisplayType_FEET_AND_FRAMES`.

#### A_long starting_frameL

Usually 0 or 1. Not used when type is usually 0 or 1, not used for `AEGP_TimeDisplayType_TIMECODE`.

#### A_Boolean auto_timecode_baseB

If `TRUE`, the project timecode display setting is set to auto.

## Control Items Within Projects

Accesses and modifies items within a project or composition.

Anything in the project bin is an `AEGP_Item`. Note that cameras have no source, and thus have no `AEGP_ItemH`.

Unless more specificity is required for the function(s) you’re using, remain as abstract as possible; AEGP_Comps are passed into and returned from most functions as AEGP_Items.

### AEGP_ItemSuite9

#### AEGP_GetFirstProjItem

Retrieves the first item in a given project.

```cpp
AEGP_GetFirstProjItem(
 AEGP_ProjectH projectH,
 AEGP_ItemH *itemPH);

```

#### AEGP_GetNextProjItem

Retrieves the next project item; `*next_itemPH` will be `NULL` after the last item.

```cpp
AEGP_GetNextProjItem(
 AEGP_ProjectH projectH,
 AEGP_ItemH itemH,
 AEGP_ItemH *next_itemPH);

```

#### AEGP_GetActiveItem

If the Project window is active, the active item is the selected item (if only one item is selected).If a Composition, Timeline, or Footage window is active,returns the parent of the layer associated with the front-most tab in the window.
Returns NULL if no item is active.

```cpp
AEGP_GetActiveItem(
 AEGP_ItemH *itemPH,

```

#### AEGP_IsItemSelected

Returns true if the Project window is active and the item is selected.

```cpp
AEGP_IsItemSelected(
 AEGP_ItemH itemH,
 A_Boolean *selectedPB)

```

#### AEGP_SelectItem

Toggles the selection state of the item, and (depending on `deselect_othersB`) can deselect other items.This call selects items in the Project panel.
To make selections in the Composition panel, use `AEGP_SetSelection` from [AEGP_CompSuite11](#aegps-aegp-suites-aegp-compsuite).

```cpp
AEGP_SelectItem(
 AEGP_ItemH itemH,
 A_Boolean selectB,
 A_Boolean deselect_othersB);

```

#### AEGP_GetItemType

Gets type of an item. Note: solids don’t appear in the project, but can be the source to a layer.

```cpp
AEGP_GetItemType(
 AEGP_ItemH itemH,
 AEGP_ItemType *item_typeP);

```

Items are one of the following types:

- `AEGP_ItemType_NONE`
- `AEGP_ItemType_FOLDER`
- `AEGP_ItemType_COMP`
- `AEGP_ItemType_SOLID`
- `AEGP_ItemType_FOOTAGE`

#### AEGP_GetTypeName

Get name of type. (name length up to `AEGP_MAX_TYPE_NAME_LEN + 1`).

```cpp
AEGP_GetTypeName(
 AEGP_ItemType item_type,
 A_char *nameZ);

```

#### AEGP_GetItemName

Get item name. (name length has no limit).`unicode_namePH` points to `A_UTF16Char` (contains null terminated UTF16 string).
It must be disposed with `AEGP_FreeMemHandle` .

```cpp
AEGP_GetItemName(
 AEGP_PluginID pluginID,
 AEGP_ItemH itemH,
 AEGP_MemHandle *unicode_namePH);

```

#### AEGP_SetItemName

Specifies the name of the AEGP_ItemH. (name length has no limit). Undoable.

```cpp
AEGP_SetItemName(
 AEGP_ItemH itemH,
 const A_UTF16Char *nameZ);

```

#### AEGP_GetItemID

Returns the item’s unique ID, which persists across saves and loads of the project.

```cpp
AEGP_GetItemID(
 AEGP_ItemH itemH,
 A_long *item_idPL);

```

#### AEGP_GetItemFlags

Get properties of an item.

```cpp
AEGP_GetItemFlags(
 AEGP_ItemH itemH,
 AEGP_ItemFlags *item_flagsP);

```

Flag values (may be OR’d together):

- `AEGP_ItemFlag_MISSING`
- `AEGP_ItemFlag_HAS_PROXY`
- `AEGP_ItemFlag_USING_PROXY`
- `AEGP_ItemFlag_MISSING_PROXY`
- `AEGP_ItemFlag_HAS_VIDEO`
- `AEGP_ItemFlag_HAS_AUDIO`
- `AEGP_ItemFlag_STILL`
- `AEGP_ItemFlag_HAS_ACTIVE_AUDIO`

Unlike the `HAS_AUDIO` flag, this bit flag will set only if the comp has at least one layer where audio is actually on.

#### AEGP_SetItemUseProxy

Toggle item’s proxy usage. Undoable.

```cpp
AEGP_SetItemUseProxy(
 AEGP_ItemH itemH,
 A_Boolean use_proxyB);

```

#### AEGP_GetItemParentFolder

Get folder containing item.

```cpp
AEGP_GetItemParentFolder(
 AEGP_ItemH itemH,
 AEGP_ItemH *parent_itemPH);

```

#### AEGP_SetItemParentFolder

Sets an item’s parent folder. Undoable.

```cpp
AEGP_SetItemParentFolder(
 AEGP_ItemH itemH,
 AEGP_ItemH parent_folderH);

```

#### AEGP_GetItemDuration

Get duration of item, in seconds.

```cpp
AEGP_GetItemDuration(
 AEGP_ItemH itemH,
 A_Time *durationPT);

```

#### AEGP_GetItemCurrentTime

Get current time within item. Not updated while rendering.

```cpp
AEGP_GetItemCurrentTime(
 AEGP_ItemH itemH,
 A_long *curr_timePT);

```

#### AEGP_GetItemDimensions

Get width and height of item.

```cpp
AEGP_GetItemDimensions(
 AEGP_ItemH itemH,
 A_long *widthPL)
 A_long *heightPL);

```

#### AEGP_GetItemPixelAspectRatio

Get the width of a pixel, assuming its height is 1.0, as numerator over denominator.

```cpp
AEGP_GetItemPixelAspectRatio(
 AEGP_ItemH itemH,
 A_Ratio *ratioPRt);

```

#### AEGP_DeleteItem

Removes item from all compositions. Undo-able.
Do not use the `AEGP_ItemH` after calling this function.

```cpp
AEGP_DeleteItem(
 AEGP_ItemH itemH);

```

#### AEGP_GetItemSolidColor

Removed in `AEGP_ItemSuite4`. See `AEGP_GetSolidFootageColor` from [AEGP_FootageSuite5](#aegps-aegp-suites-aegp-footagesuite)
Given a solid item, return its color.

```cpp
AEGP_GetItemSolidColor(
 AEGP_ItemH itemH,
 PF_Pixel *PF_Pixel);

```

#### AEGP_SetSolidColor

Removed in `AEGP_ItemSuite4`. See `AEGP_SetSolidFootageColor` from [AEGP_FootageSuite5](#aegps-aegp-suites-aegp-footagesuite).
Sets the color of an existing solid (error if `itemH` is not a solid).

```cpp
AEGP_SetSolidColor(
 AEGP_ItemH itemH,
 AEGP_ColorVal color);

```

#### AEGP_SetSolidDimensions

Removed in `AEGP_ItemSuite4`. See `AEGP_SetSolidFootageDimensions` from [AEGP_FootageSuite5](#aegps-aegp-suites-aegp-footagesuite).
Sets the dimensions of an existing solid (error if `itemH` is not a solid).

```cpp
AEGP_SetSolidDimensions(
 AEGP_ItemH itemH,
 A_short widthS,
 A_short heightS);

```

#### AEGP_CreateNewFolder

Creates a new folder in the project. The newly created folder is allocated and owned by After Effects.
Passing `NULL` for `parent_folderH0` creates the folder at the project’s root.

```cpp
AEGP_CreateNewFolder(
 const A_UTF16Char *nameZ,
 AEGP_ProjectH projH),
 AEGP_ItemH parentH0),
 AEGP_ItemH *new_folderPH);

```

#### AEGP_SetItemCurrentTime

Sets the current time within a given `itemH`.

```cpp
AEGP_SetItemCurrentTime(
 AEGP_ItemH itemH,
 const A_Time *new_timePT);

```

#### AEGP_GetItemCommentLength

Removed in `ItemSuite9`. Retrieves the length (in characters) of the `itemH's` comment.

```cpp
AEGP_GetItemCommentLength(
 AEGP_ItemH itemH,
 A_u_long *buf_sizePLu);

```

#### AEGP_GetItemComment

Updated to support Unicode in `ItemSuite9`, available in 14.1. Retrieves the `itemH's` comment.

```cpp
AEGP_GetItemComment(
 AEGP_ItemH itemH,
 AEGP_MemHandle *unicode_namePH);

```

#### AEGP_SetItemComment

Updated to support Unicode in `ItemSuite9`, available in 14.1. Sets the `itemH's` comment.

```cpp
AEGP_SetItemComment(
 AEGP_ItemH itemH,
 const A_UTF16Char *commentZ);

```

#### AEGP_GetItemLabel

Retrieves an item’s label.

```cpp
AEGP_GetItemLabel(
 AEGP_ItemH itemH,
 AEGP_LabelID *labelP);

```

#### AEGP_SetItemLabel

Sets an item’s label.

```cpp
AEGP_SetItemLabel(
 AEGP_ItemH itemH,
 AEGP_LabelID label);

```

#### AEGP_GetItemMRUView

Gets an item’s most recently used view.The view can be used with two calls in the `AEGP_ColorSettingsSuite`,to perform a color transform on a pixel buffer from working to view color space.

```cpp
AEGP_GetItemMRUView(
 AEGP_ItemH itemH,
 AEGP_ItemViewP *mru_viewP);

```

::: tip

`AEGP_RenderNewItemSoundData()` used to be here, but is now part of [AEGP_RenderSuite4](#aegps-aegp-suites-aegp-rendersuite).

:::

## Managing Selections

This suite manages selection states, mirroring the functionality supplied by vectors in the C++ Standard Template Library.

Many types of items may be simultaneously selected in After Effects; `AEGP_CollectionItems` are unions of layer, mask, effect, stream, mask vertex, and keyframe items.

First acquire the current collection, then iterate across its members to ensure that whatever your AEGP does is applicable to each.

We’ve added `AEGP_Collection2H` and `AEGP_CollectionItemV2` so that selected dynamic streams can be handled with the `AEGP_CollectionSuite`.

### AEGP_CollectionSuite2

#### AEGP_NewCollection

Creates and returns a new, empty collection.To obtain the current composition’s selection as a collection, use `AEGP_GetNewCollectionFromCompSelection`.

```cpp
AEGP_NewCollection(
 AEGP_PluginID plugin_id,
 AEGP_Collection2H *collectionPH);

```

#### AEGP_DisposeCollection

Disposes of a collection.

```cpp
AEGP_DisposeCollection(
 AEGP_Collection2H collectionH);

```

#### AEGP_GetCollectionNumItems

Returns the number of items contained in the given collection.

```cpp
AEGP_GetCollectionNumItems(
 AEGP_Collection2H collectionH,
 A_u_long *num_itemsPL);

```

#### AEGP_GetCollectionItemByIndex

Retrieves (creates and populates) the index’d collection item.

```cpp
AEGP_GetCollectionItemByIndex(
 AEGP_Collection2H collectionH,
 A_u_long indexL,
 AEGP_CollectionItemV2 *itemP);

```

#### AEGP_CollectionPushBack

Adds an item to the given collection.

```cpp
AEGP_CollectionPushBack(
 AEGP_Collection2H collectionH,
 const AEGP_CollectionItemV2 *itemP);

```

#### AEGP_CollectionErase

Removes an index’d item (or items) from a given collection. NOTE: this range is exclusive,like STL iterators. To erase the first item, you would pass 0 and 1, respectively.

```cpp
AEGP_CollectionErase(
 AEGP_Collection2H collectionH,
 A_u_long index_firstL,
 A_u_long index_lastL);

```

### Ownership Of Collection Items

When `AEGP_StreamRefHs` are inserted into a collection, they are adopted by the collection; do not free them.

`AEGP_EffectRefHs`, on the other hand, are not adopted, and must be freed by the calling AEGP.

## Manipulate Compositions

Provide information about the compositions in a project, and create cameras, lights, and solids.

### AEGP_CompSuite11

#### AEGP_GetCompFromItem

Retrieves the handle to the composition, given an item handle.
Returns `NULL` if `itemH` is not an `AEGP_CompH`.

```cpp
AEGP_GetCompFromItem(
 AEGP_ItemH itemH,
 AEGP_CompH *compPH);

```

#### AEGP_GetItemFromComp

Used to get the item handle, given a composition handle.

```cpp
AEGP_GetItemFromComp(
 AEGP_CompH compH,
 AEGP_ItemH *itemPH);

```

#### AEGP_GetCompDownsampleFactor

Returns current downsample factor. Measured in pixels X by Y.Users can choose a custom downsample factor with independent X and Y.

```cpp
AEGP_GetCompDownsampleFactor(
 AEGP_CompH compH,
 AEGP_DownsampleFactor *dsfP);

```

#### AEGP_SetCompDownsampleFactor

Sets the composition’s downsample factor.

```cpp
AEGP_SetCompDownsampleFactor(
 AEGP_CompH compH,
 AEGP_DownsampleFactor *dsfP);

```

#### AEGP_GetCompBGColor

Returns the composition background color.

```cpp
AEGP_GetCompBGColor(
 AEGP_CompH compH,
 AEGP_ColorVal *bg_colorP);

```

#### AEGP_SetCompBGColor

Sets a composition’s background color.

```cpp
AEGP_SetCompBGColor(
 AEGP_CompH compH,
 const AEGP_ColorVal *bg_colorP);

```

#### AEGP_GetCompFlags

Returns composition flags, or’d together.

```cpp
AEGP_GetCompFlags(
 AEGP_CompH compH,
 AEGP_CompFlags *AEGP_CompFlags);

```

- `AEGP_CompFlag_SHOW_ALL_SHY`
- `AEGP_CompFlag_ENABLE_MOTION_BLUR`
- `AEGP_CompFlag_ENABLE_TIME_FILTER`
- `AEGP_CompFlag_GRID_TO_FRAME`
- `AEGP_CompFlag_GRID_TO_FIELDS`
- `AEGP_CompFlag_USE_LOCAL_DSF`
- `AEGP_CompFlag_DRAFT_3D`
- `AEGP_CompFlag_SHOW_GRAPH`

#### AEGP_GetShowLayerNameOrSourceName

New in CC. Passes back true if the Comp’s timeline shows layer names, false if source names.This will open the comp as a side effect.

```cpp
AEGP_GetShowLayerNameOrSourceName(
 AEGP_CompH compH,
 A_Boolean *layer_names_shownPB);

```

#### AEGP_SetShowLayerNameOrSourceName

New in CC. Pass in true to have the Comp’s timeline show layer names, false for source names.This will open the comp as a side effect.

```cpp
AEGP_SetShowLayerNameOrSourceName(
 AEGP_CompH compH,
 A_Boolean *layer_names_shownPB);

```

#### AEGP_GetShowBlendModes

New in CC. Passes back true if the Comp’s timeline shows blend modes column, false if hidden.
This will open the comp as a side effect.

```cpp
AEGP_GetShowBlendModes(
 AEGP_CompH compH,
 A_Boolean *blend_modes_shownPB);

```

#### AEGP_SetShowBlendModes

New in CC. Pass in true to have the Comp’s timeline show the blend modes column, false to hide it.
This will open the comp as a side effect.

```cpp
AEGP_GetCompFlags(
 AEGP_CompH compH,
 A_Boolean show_blend_modesB);

```

#### AEGP_GetCompFramerate

Returns the composition’s frames per second.

```cpp
AEGP_GetCompFramerate(
 AEGP_CompH compH,
 A_FpLong *fpsPF);

```

#### AEGP_SetCompFramerate

Sets the composition’s frames per second.

```cpp
AEGP_SetCompFramerate(
 AEGP_CompH compH,
 A_FpLong *fpsPF);

```

#### AEGP_GetCompShutterAnglePhase

The composition shutter angle and phase.

```cpp
AEGP_GetCompShutterAnglePhase(
 AEGP_CompH compH,
 A_Ratio *angle,
 A_Ratio *phase);

```

#### AEGP_GetCompShutterFrameRange

The duration of the shutter frame, in seconds.

```cpp
AEGP_GetCompShutterFrameRange(
 AEGP_CompH compH,
 const A_Time *comp_timeP);

```

#### AEGP_GetCompSuggestedMotionBlurSamples

Retrieves the number of motion blur samples After Effects will perform in the given composition.

```cpp
AEGP_GetCompSuggestedMotionBlurSamples(
 AEGP_CompH compH,
 A_long *samplesPL)

```

#### AEGP_SetCompSuggestedMotionBlurSamples

Specifies the number of motion blur samples After Effects will perform in the given composition. Undoable.

```cpp
AEGP_SetCompSuggestedMotionBlurSamples(
 AEGP_CompH compH,
 A_long samplesL);

```

#### AEGP_GetCompMotionBlurAdaptiveSampleLimit

New in CC. Retrieves the motion blur adaptive sample limit for the given composition. As of CC, a new comp defaults to 128.

```cpp
AEGP_GetCompMotionBlurAdaptiveSampleLimit(
 AEGP_CompH compH,
 A_long *samplesPL)

```

#### AEGP_SetCompMotionBlurAdaptiveSampleLimit

New in CC. Specifies the motion blur adaptive sample limit for the given composition.As of CC, both the limit and the suggested values are clamped to [2,256] range and the limit value will not be allowed less than the suggested value.
Undoable.

```cpp
AEGP_SetCompMotionBlurAdaptiveSampleLimit(
 AEGP_CompH compH,
 A_long samplesL);

```

#### AEGP_GetCompWorkAreaStart

Get the time where the current work area starts.

```cpp
AEGP_GetCompWorkAreaStart(
 AEGP_CompH compH,
 A_Time *startPT);

```

#### AEGP_GetCompWorkAreaDuration

Get the duration of a composition’s current work area, in seconds.

```cpp
AEGP_GetCompWorkAreaDuration(
 AEGP_CompH compH,
 A_Time *durationPT);

```

#### AEGP_SetCompWorkAreaStartAndDuration

Set the work area start and duration, in seconds. Undo-able. One call to this function is sufficient to set the layer’s in point and duration; it’s not necessary to call it twice, once for each timespace.

```cpp
AEGP_SetCompWorkAreaStartAndDuration(
 AEGP_CompH compH,
 const A_Time *startPT)
 const A_Time *durationPT);

```

#### AEGP_CreateSolidInComp

Creates a new solid with a specified width, height, color, and duration in the composition. Undo-able. If you pass `NULL` for the duration, After Effects uses its preference for the duration of a new still.
If you pass NULL, or an invalid time scale, duration is set to the length of the composition.

```cpp
AEGP_CreateSolidInComp(
 const A_UTF16Char *utf_nameZ,
 A_Long widthL,
 A_Long heightL,
 const PF_Pixel *color,
 AEGP_CompH parent_compH,
 const A_Time *durationPT0,
 AEGP_LayerH *new_solidPH);

```

#### AEGP_CreateCameraInComp

Creates and adds a camera to the specified composition. Once created, you can manipulate the camera’s parameter streams using the AEGP [Stream Suite](#aegps-aegp-suites-stream-suite).
To specify a two-node camera, use `AEGP_SetLayerFlag`
from [AEGP_LayerSuite8](#aegps-aegp-suites-aegp-layersuite) to set `AEGP_LayerFlag_LOOK_AT_POI`.

```cpp
AEGP_CreateCameraInComp(
 const A_UTF16Char *utf_nameZ,
 A_FloatPoint center_point,
 AEGP_CompH parent_compH,
 AEGP_LayerH *new_cameraPH);

```

#### AEGP_CreateLightInComp

Creates and adds a light to the specified composition. Once created, you can manipulate the light’s parameter streams using the AEGP [Stream Suite](#aegps-aegp-suites-stream-suite).

```cpp
AEGP_CreateLightInComp(
 const A_UTF16Char *utf_nameZ,
 A_FloatPoint center_point,
 AEGP_CompH parent_compH,
 AEGP_LayerH *new_lightPH);

```

#### AEGP_CreateComp

Creates a new composition for the project.
If you don’t provide a parent folder, the composition will be at the root level of the project. Undo-able.

```cpp
AEGP_CreateComp(
 AEGP_ItemH parent_folderHO,
 const A_UTF16Char *utf_nameZ,
 A_Long widthL,
 A_Long heightL,
 const A_Ratio *pixel_aspect_ratioPRt,
 const A_Time *durationPT,
 const A_Ratio *frameratePRt,
 AEGP_CompH *new_compPH);

```

#### AEGP_GetNewCollectionFromCompSelection

Creates a new AEGP_Collection2H from the items selected in the given composition.
The plug-in is responsible for disposing of the `AEGP_Collection2H`.

```cpp
AEGP_GetNewCollectionFromCompSelection(
 AEGP_PluginID plugin_id,
 AEGP_CompH compH,
 AEGP_Collection2H *collectionPH);

```

#### AEGP_SetSelection

Sets the selection within the given composition to the given `AEGP_Collection2H`.
Will return an error if members of the `AEGP_Collection2H` are not available.
Don’t assume that a composition hasn’t changed between operations; always use a fresh `AEGP_Collection2H`.

```cpp
AEGP_SetSelection(
 AEGP_CompH compH,
 AEGP_Collection2H collectionH);

```

#### AEGP_GetCompDisplayStartTime

Gets the displayed start time of a composition.

```cpp
AEGP_GetCompDisplayStartTime(
 AEGP_CompH compH,
 const A_Time *start_timePT);

```

#### AEGP_SetCompDisplayStartTime

Not undo-able. Sets the displayed start time of a composition (has no effect on the duration of the composition).

```cpp
AEGP_SetCompDisplayStartTime(
 AEGP_CompH compH,
 const A_Time *start_timePT);

```

#### AEGP_SetCompDuration

Undoable. Sets the duration of the given composition.

```cpp
AEGP_SetCompDuration(
 AEGP_CompH compH,
 const A_Time *durationPT);

```

#### AEGP_CreateNullInComp

Creates a “null object” in the composition (useful for translating projects from 3D applications into After Effects). If you pass `NULL` for the duration, After Effects uses its preference for the duration of a new still.
If you pass 0, or an invalid time scale, duration is set to the length of the composition.

```cpp
AEGP_CreateNullInComp(
 const A_UTF16Char *utf_nameZ,
 AEGP_CompH parent_compH,
 const A_Time *durationPT0,
 AEGP_LayerH *new_null_solidPH);

```

#### AEGP_SetCompPixelAspectRatio

Sets the pixel aspect ratio of a composition.

```cpp
AEGP_SetCompPixelAspectRatio(
 AEGP_CompH compH,
 const A_Ratio *parPRt);

```

#### AEGP_CreateTextLayerInComp

Updated in CS6. Creates a text layer in the composition, and returns its `AEGP_LayerH`.

```cpp
AEGP_CreateTextLayerInComp(
 AEGP_CompH parent_compH,
 A_Boolean select_new_layerB,
 AEGP_LayerH *new_text_lyrPH);

```

#### AEGP_CreateBoxTextLayerInComp

Updated in CS6. Creates a new box text layer, and returns its `AEGP_LayerH`.

```cpp
AEGP_CreateBoxTextLayerInComp(
 AEGP_CompH parent_compH,
 A_Boolean select_new_layerB,
 A_FloatPoint box_dimensions,
 AEGP_LayerH *new_text_layerPH);

```

#### AEGP_SetCompDimensions

Sets the dimensions of the composition. Undoable.

```cpp
AEGP_SetCompDimensions(
 AEGP_CompH compH,
 A_long widthL,
 A_long heightL);

```

#### AEGP_DuplicateComp

Duplicates the composition. Undoable.

```cpp
AEGP_DuplicateComp(
 AEGP_CompH compH,
 AEGP_CompH *new_compPH);

```

#### AEGP_GetCompFrameDuration

Retrieves the duration of a frame in a composition.

```cpp
AEGP_GetCompFrameDuration(
 AEGP_CompH compH,
 A_Time *timeP);

```

#### AEGP_GetMostRecentlyUsedComp

Returns the most-recently-used composition.

```cpp
AEGP_GetMostRecentlyUsedComp(
 AEGP_CompH *compPH);

```

#### AEGP_CreateVectorLayerInComp

Creates and returns a handle to a new vector layer.

```cpp
AEGP_CreateVectorLayerInComp(
 AEGP_CompH parent_compH,
 AEGP_LayerH *new_vec_layerPH);

```

#### AEGP_GetNewCompMarkerStream

Returns an AEGP_StreamRefH to the composition’s marker stream. Must be disposed by caller.

```cpp
AEGP_GetNewCompMarkerStream(
 AEGP_PluginID aegp_plugin_id,
 AEGP_CompH parent_compH,
 AEGP_StreamRefH *streamPH);

```

#### AEGP_GetCompDisplayDropFrame

Passes back a boolean that indicates whether the specified comp uses drop-frame timecode or not.

```cpp
AEGP_GetCompDisplayDropFrame(
 AEGP_CompH compH,
 A_Boolean *dropFramePB);

```

#### AEGP_SetCompDisplayDropFrame

Sets the dropness of the timecode in the specified composition.

```cpp
AEGP_SetCompDisplayDropFrame(
 AEGP_CompH compH,
 A_Boolean dropFrameB);

```

#### AEGP_ReorderCompSelection

Move the selection to a certain layer index. Use along with `AEGP_SetSelection().`

```cpp
AEGP_SetCompDisplayDropFrame(
 AEGP_CompH compH,
 A_long index);

```

## Work with Footage

Provides information about footage, or items in a project or composition. When getting and setting footage’s interpretation, it is possible to specify incompatible options.

If you encounter warnings and errors during development, be sure to make all related changes atomically, and reassess the logic of the operation you’re performing.

For example, changing the pull-down interpretation of footage won’t work unless there’s a difference between it’s native and conformed frame rate.

Depending on what you’re trying to accomplish, it may make sense to abort all of your operations at that point, inform the user of the problem encountered.

### AEGP_FootageSuite5

#### AEGP_GetMainFootageFromItem

Returns an error if item isn’t a footage item. Used to convert an item handle to a footage handle.

```cpp
AEGP_GetMainFootageFromItem(
 AEGP_ItemH itemH,
 AEGP_FootageH *footagePH);

```

#### AEGP_GetProxyFootageFromItem

Returns an error if item has no proxy. Returns the proxy footage handle. Note:  a composition can have a proxy.

```cpp
AEGP_GetProxyFootageFromItem(
 AEGP_ItemH itemH,
 AEGP_FootageH *proxy_ftgPH);

```

#### AEGP_GetFootageNumFiles

Returns the number of data (RGBA or audio) files, and the number of files per frame (may be greater than one if the footage has auxiliary channels).

```cpp
AEGP_GetFootageNumFiles(
 AEGP_FootageH footageH,
 A_long *num_filesPL0,
 A_long *files_per_frmPL0);

```

#### AEGP_GetFootagePath

Get fully realized path to footage source file.
Retrieves the footage path for a piece of footage (or for the specified frame of a footage sequence).
`frame_numL` ranges from `0 to num_main_files`, as obtained using `AEGP_GetFootageNumFiles` from [AEGP_FootageSuite5](#aegps-aegp-suites-aegp-footagesuite).
`AEGP_FOOTAGE_MAIN_FILE_INDEX` is the main file. The path is a handle to a NULL-terminated `A_UTF16Char` string, and must be disposed with AEGP_FreeMemHandle.

```cpp
AEGP_GetFootagePath(
 AEGP_FootageH footageH,
 A_long frame_numL,
 A_long file_indexL,
 AEGP_MemHandle *unicode_pathPH);

```

#### AEGP_GetFootageSignature

Retrieves the footage signature of specified footage.

```cpp
AEGP_GetFootageSignature(
 AEGP_FootageH footageH,
 AEGP_FootageSignature *sigP);

```

The signature will be one of the following:

- `AEGP_FootageSignature_NONE`
- `AEGP_FootageSignature_MISSING`
- `AEGP_FootageSignature_SOLID`

#### AEGP_NewFootage

Creates a new footage item. The file path is a NULL-terminated UTF-16 string with platform separators.
Note that footage filenames with colons are not allowed, since colons are used as path separators in the HFS+ file system.

```cpp
AEGP_NewFootage(
 AEGP_PluginID aegp_plugin_id,
 const A_UTF16Char *pathZ,
 const AEGP_FootageLayerKey *layer_infoP0,
 const AEGP_FileSequenceImportOptions *sequence_optionsP0,
 AEGP_InterpretationStyle interp_style,
 void *reserved,
 AEGP_FootageH *footagePH);

```

Note the optional params. If `allow_interpretation_dialogB` is FALSE, After Effects will guess the alpha interpretation.

```cpp
typedef struct {
 A_long layer_idL;
 A_long layer_indexL
 char *nameAC;
 AEGP_LayerDrawStyle draw_style;
} AEGP_FootageLayerKey;

```

`AEGP_LayerDrawStyle` can be:

- `AEGP_LayerDrawStyle_LAYER_BOUNDS`
- `AEGP_LayerDrawStyle_DOCUMENT_BOUNDS`

`AEGP_InterpretationStyle` can be:

- `AEGP_InterpretationStyle_NO_DIALOG_GUESS` Will guess alpha interpretation even if file contains unknown alpha interpretation and user pref says to ask user.
- `AEGP_InterpretationStyle_DIALOG_OK` Optionally can show a dialog.
- `AEGP_InterpretationStyle_NO_DIALOG_NO_GUESS` Used for replace footage implementation.

#### AEGP_AddFootageToProject

Adds a footage item to a project. Footage will be adopted by the project, and may be added only once. This is Undo-able; do not dispose of the returned added item if it’s undone.

```cpp
AEGP_AddFootageToProject(
 AEGP_FootageH footageH,
 AEGP_ItemH folderH,
 AEGP_ItemH *add_itemPH0);

```

#### AEGP_SetItemProxyFootage

Sets footage as the proxy for an item. Will be adopted by the project. This is Undo-able; do not dispose of the returned added item if it’s undone.

```cpp
AEGP_SetItemProxyFootage(
 AEGP_FootageH footageH,
 AEGP_ItemH itemH);

```

#### AEGP_ReplaceItemMainFootage

Replaces footage for an item. The item will replace the main footage for this item. This is Undo-able; do not dispose of the returned added item if it’s undone.

```cpp
AEGP_ReplaceItemMainFootage(
 AEGP_FootageH footageH,
 AEGP_ItemH itemH);

```

#### AEGP_DisposeFootage

Deletes a footage item. Do not dispose of footage you did not create, or that has been added to the project.

```cpp
AEGP_DisposeFootage(
 AEGP_FootageH footageH);

```

#### AEGP_GetFootageInterpretation

Populates an AEGP_FootageInterp describing the settings of the `AEGP_FootageH`. There is no way to create a valid `AEGP_FootageInterp` other than by using this function.

```cpp
AEGP_GetFootageInterpretation(
 const AEGP_ItemH itemH,
 A_Boolean proxyB,
 AEGP_FootageInterp *interpP);

```

If proxyB is `TRUE`, the proxy footage’s settings are retrieved.

#### AEGP_SetFootageInterpretation

Apply the settings in the `AEGP_FootageInterp` to the `AEGP_FootageH`. Undo-able.

```cpp
AEGP_SetFootageInterpreta tion(
 const AEGP_ItemH itemH,
 A_Boolean proxyB,
 const AEGP_FootageInterp *interpP);

```

If `proxyB` is `TRUE`, the proxy footage’s settings are modified.

#### AEGP_GetFootageLayerKey

Populates an `AEGP_FootageLayerKey` describing the footage.

```cpp
AEGP_GetFootageLayerKey(
 AEGP_FootageH footageH,
 AEGP_FootageLayerKey* layerKeyP);

```

#### AEGP_NewPlaceholderFootage

Deprecated. Adds a new placeholder footage item to the project. Using this function for missing footage will cause the user to search for each individual missing file, regardless of whether or not they’re all in the same directory.
Undo-able.

```cpp
AEGP_NewPlaceholderFootage(
 AEGP_PluginID plugin_id,
 const A_char *nameZ,
 A_long width,
 A_long height,
 const A_Time *durationPT,
 AEGP_FootageH *footagePH);

```

#### AEGP_NewPlaceholderFootageWithPath

This is the hip new way to add references to footage that can’t be found right this moment. The file path is a NULL-terminated UTF-16 string with platform separators.
In CS6 and earlier, file_type was ignored and we previously recommendedsetting it to `AEIO_FileType_NONE`. Starting in CC, `AEIO_FileType_NONE` is now a warning condition. If you pass `AEIO_FileType_ANY`, then path MUST exist.
If the path may not exist, pass `AEIO_FileType_DIR` for folder, or `AEIO_FileType_GENERIC` for a file.

```cpp
AEGP_NewPlaceholderFootageWithPath(
 AEGP_PluginID plugin_id,
 const A_UTF16Char *pathZ,
 AEGP_Platform path_platform,
 AEIO_FileType file_type,
 A_long widthL,
 A_long heightL,
 const A_Time *durationPT,
 AEGP_FootageH *footagePH);

```

#### AEGP_NewSolidFootage

This is the way to add a solid. Until the footage is added to the project, the caller owns the `AEGP_FootageH`
(and must dispose of it if, and only if, it isn’t added to the project).

```cpp
AEGP_NewSolidFootage(
 const A_char *nameZ,
 A_long width,
 A_long height,
 const AEGP_ColorVal *colorP,
 AEGP_FootageH *footagePH);

```

#### AEGP_GetSolidFootageColor

Returns the color of a given solid. Returns an error if the `AEGP_ItemH` is not a solid.

```cpp
AEGP_GetSolidFootageColor(
 AEGP_ItemH itemH,
 A_Boolean proxyB,
 AEGP_ColorVal *colorP);

```

If `proxyB` is `TRUE`, the proxy solid’s color is retrieved.

#### AEGP_SetSolidFootageColor

Sets the color of a solid. Undo-able.

```cpp
AEGP_SetSolidFootageColor(
 AEGP_ItemH itemH,
 A_Boolean proxyB,
 AEGP_ColorVal *colorP);

```

If `proxyB` is `TRUE`, the proxy solid’s color is set.

#### AEGP_SetSolidFootageDimensions

Sets the dimensions of a solid. Undo-able.

```cpp
AEGP_SetSolidFootageDimensions(
 AEGP_ItemH itemH,
 A_Boolean proxyB,
 A_long widthL,
 A_long heightL);

```

If `proxyB` is `TRUE`, the proxy solid’s dimensions are modified. Returns an error if the item isn’t a solid.

#### AEGP_GetFootageSoundDataFormat

Retrieves information about the audio data in the footage item (by populating the `AEGP_SoundDataFormat` you passed in).

```cpp
AEGP_GetFootageSoundDataFormat(
 AEGP_FootageH footageH,
 AEGP_SoundDataFormat *formatP);

```

#### AEGP_GetFootageSequenceImportOptions

Populates and returns a `AEGP_FileSequenceImportOptions` describing the given `AEGP_FootageH`.

```cpp
AEGP_GetFootageSequenceImportOptions(
 AEGP_FootageH footageH,
 AEGP_FileSequenceImportOptions *optionsP);

```

### AEGP_FootageInterp Structure

#### AEGP_InterlaceLabel il

The interlace settings for the footage item.

```cpp
A_u_long signature; // 'FIEL'
A_short version;
FIEL_Type type;
FIEL_Order order;
A_u_long reserved;

```

FIEL_Type is one of the following:

- `FIEL_Type_FRAME_RENDERED`
- `FIEL_Type_INTERLACED`
- `FIEL_Type_HALF_HEIGHT`
- `FIEL_Type_FIELD_DOUBLED`

`FIEL_Type_FIELD_DOUBLED` means 60 full-sized field doubled frames per second.
`FIEL_Order` is either `FIEL_Order_UPPER_FIRST` or `FIEL_Order_LOWER_FIRST`.

#### AEGP_AlphaLabel al

```cpp
AEGP_AlphaFlag flags;
A_u_char redCu;
A_u_char greenCu;
A_u_char blueCu;

```

`AEGP_AlphaFlags` is one or more of the following, OR’d together:

- `AEGP_AlphaPremul`
- `AEGP_AlphaInverted`
- `AEGP_AlphaIgnore`

If `AEGP_AlphaPremul` is not set, straight alpha is assumed. `AEGP_AlphaInverted` indicates that higher values are transparent, instead of lower.

#### AEGP_PulldownPhase pd

Indicates the phase for use in 3:2 pulldown. One of the following:

- `AEGP_PulldownPhase_NO_PULLDOWN`,
- `AEGP_PulldownPhase_WSSWW`,
- `AEGP_PulldownPhase_SSWWW`,
- `AEGP_PulldownPhase_SWWWS`,
- `AEGP_PulldownPhase_WWWSS`,
- `AEGP_PulldownPhase_WWSSW`,
- `AEGP_PulldownPhase_WWWSW`,
- `AEGP_PulldownPhase_WWSWW`,
- `AEGP_PulldownPhase_WSWWW`,
- `AEGP_PulldownPhase_SWWWW`,
- `AEGP_PulldownPhase_WWWWS`

#### AEGP_LoopBehavior loop

Indicates the number of times the footage should loop.

```cpp
A_long loops;
A_long reserved;

```

#### A_Ratio pix_aspect_ratio

Expresses the pixel aspect ratio of the footage (x over y).

#### A_FpLong native_fpsF

The original framerate (in frames per second) of the footage item.

#### A_FpLong conform_fpsF

The framerate being used for the footage item.

#### A_long depthL

The pixel depth of the footage. One of the following:

- `AEGP_Footage_Depth_1`
- `AEGP_Footage_Depth_2`
- `AEGP_Footage_Depth_4`
- `AEGP_Footage_Depth_8`
- `AEGP_Footage_Depth_16`
- `AEGP_Footage_Depth_24`
- `AEGP_Footage_Depth_30`
- `AEGP_Footage_Depth_32`
- `AEGP_Footage_Depth_GRAY_2`
- `AEGP_Footage_Depth_GRAY_4`
- `AEGP_Footage_Depth_GRAY_8`
- `AEGP_Footage_Depth_48`
- `AEGP_Footage_Depth_64`
- `AEGP_Footage_Depth_GRAY_16`

#### A_Boolean motion_dB

Indicates whether motion de-interlacing is being applied to the footage item.

## Manage Layers

`AEGP_LayerSuite` provides information about layers within a composition, and the relationship(s) between the source and layer times.

As most After Effects usage boils down to layer manipulation, this is among the largest function suites in our API.

### AEGP_LayerSuite8

#### AEGP_GetCompNumLayers

Obtains the number of layers in a composition.

```cpp
AEGP_GetCompNumLayers(
 AEGP_CompH compH,
 A_long *num_layersPL);

```

#### AEGP_GetCompLayerByIndex

Get a `AEGP_LayerH` from a composition. Zero is the foremost layer.

```cpp
AEGP_GetCompLayerByIndex(
 AEGP_CompH compH,
 A_long layer_indexL,
 AEGP_LayerH *layerPH);

```

#### AEGP_GetActiveLayer

Get the active layer. If a Layer or effect controls palette is active, the active layer is that associated with the front-most tab in the window. If a composition or timeline window is active, the active layer is the selected layer (if only one is selected; otherwise `NULL` is returned).

```cpp
AEGP_GetActiveLayer(
 AEGP_LayerH *layerPH);

```

#### AEGP_GetLayerIndex

Get the index of the layer (0 is the topmost layer in the composition).

```cpp
AEGP_GetLayerIndex(
 AEGP_LayerH layerH,
 A_long *layer_indexPL);

```

#### AEGP_GetLayerSourceItem

Get the AEGP_ItemH of the layer’s source item.

```cpp
AEGP_GetLayerSourceItem(
 AEGP_LayerH layerH,
 AEGP_ItemH *source_itemPH);

```

#### AEGP_GetLayerSourceItemID

Retrieves the ID of the given `AEGP_LayerH`. This is useful when hunting for a specific layer’s ID in an `AEGP_StreamVal`.

```cpp
AEGP_GetLayerSourceItemID(
 AEGP_LayerH layerH,
 A_long *source_idPL);

```

#### AEGP_GetLayerParentComp

Get the AEGP_CompH of the composition containing the layer.

```cpp
AEGP_GetLayerParentComp(
 AEGP_LayerH layerH,
 AEGP_CompH *compPH);

```

#### AEGP_GetLayerName

Get the name of a layer. Both `utf_layer_namePH0` and `utf_source_namePH0` point to null terminated UTF-16 strings. They must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetLayerName(
 AEGP_PluginID pluginID,
 AEGP_LayerH layerH,
 AEGP_MemHandle *utf_layer_namePH0,
 AEGP_MemHandle *utf_source_namePH0);

```

#### AEGP_GetLayerQuality

Get the quality of a layer.

```cpp
AEGP_GetLayerQuality(
 AEGP_LayerH layerH,
 AEGP_LayerQuality *qualityP);

```

Layer quality is one of the following flags:

- `AEGP_LayerQual_NONE`
- `AEGP_LayerQual_WIREFRAME`
- `AEGP_LayerQual_DRAFT`
- `AEGP_LayerQual_BEST`

#### AEGP_SetLayerQuality

Sets the quality of a layer (see flag values above). Undoable.

```cpp
AEGP_SetLayerQuality(
 AEGP_LayerH layerH,
 AEGP_LayerQuality quality);

```

#### AEGP_GetLayerFlags

Get flags for a layer.

```cpp
AEGP_GetLayerFlags(
 AEGP_LayerH layerH,
 AEGP_LayerFlags *layer_flagsP);

```

- `AEGP_LayerFlag_NONE`
- `AEGP_LayerFlag_VIDEO_ACTIVE`,
- `AEGP_LayerFlag_AUDIO_ACTIVE`,
- `AEGP_LayerFlag_EFFECTS_ACTIVE`,
- `AEGP_LayerFlag_MOTION_BLUR`,
- `AEGP_LayerFlag_FRAME_BLENDING`,
- `AEGP_LayerFlag_LOCKED`,
- `AEGP_LayerFlag_SHY`,
- `AEGP_LayerFlag_COLLAPSE`,
- `AEGP_LayerFlag_AUTO_ORIENT_ROTATION`,
- `AEGP_LayerFlag_ADJUSTMENT_LAYER`,
- `AEGP_LayerFlag_TIME_REMAPPING`,
- `AEGP_LayerFlag_LAYER_IS_3D`,
- `AEGP_LayerFlag_LOOK_AT_CAMERA`,
- `AEGP_LayerFlag_LOOK_AT_POI`,
- `AEGP_LayerFlag_SOLO`,
- `AEGP_LayerFlag_MARKERS_LOCKED`,
- `AEGP_LayerFlag_NULL_LAYER`,
- `AEGP_LayerFlag_HIDE_LOCKED_MASKS`,
- `AEGP_LayerFlag_GUIDE_LAYER`,
- `AEGP_LayerFlag_ENVIRONMENT_LAYER`,
- `AEGP_LayerFlag_ADVANCED_FRAME_BLENDING`, `True` only if pixel motion frame blending is on for the layer.
- `AEGP_LayerFlag_SUBLAYERS_RENDER_SEPARATELY`, Used to get/set the state of per-character 3D enablement on a text layer.
- `AEGP_LayerFlag_ENVIRONMENT_LAYER`, New in CS6.

#### AEGP_SetLayerFlag

Sets one layer flag at a time. Undoable.

```cpp
AEGP_SetLayerFlag(
 AEGP_LayerH layerH,
 AEGP_LayerFlags single_flag,
 A_Boolean valueB);

```

#### AEGP_IsLayerVideoReallyOn

Determines whether the layer’s video is visible. This is necessary to account for ‘solo’ status of other layers in the composition; non-solo’d layers are still on.

```cpp
AEGP_IsLayerVideoReallyOn(
 AEGP_LayerH layerH,
 A_Boolean *onPB);

```

#### AEGP_IsLayerAudioReallyOn

Accounts for solo status of other layers in the composition.

```cpp
AEGP_IsLayerAudioReallyOn(
 AEGP_LayerH layerH,
 A_Boolean *onPB);

```

#### AEGP_GetLayerCurrentTime

Get current time, in layer or composition timespace. This value is not updated during rendering.
NOTE: If a layer starts at other than time 0 or is time-stretched other than 100%, layer time and composition time are distinct.

```cpp
AEGP_GetLayerCurrentTime(
 AEGP_LayerH layerH,
 AEGP_LTimeMode time_mode,
 A_Time *curr_timePT);

```

#### AEGP_GetLayerInPoint

Get time of first visible frame in composition or layer time.
In layer time, the `in_pointPT` is always 0.

```cpp
AEGP_GetLayerInPoint(
 AEGP_LayerH layerH,
 AEGP_LTimeMode time_mode,
 A_Time *in_pointPT);

```

#### AEGP_GetLayerDuration

Get duration of layer, in composition or layer time, in seconds.

```cpp
AEGP_GetLayerDuration(
 AEGP_LayerH layerH,
 AEGP_LTimeMode time_mode,
 A_Time *durationPT);

```

#### AEGP_SetLayerInPointAndDuration

Set duration and in point of layer in composition or layer time. Undo-able.

```cpp
AEGP_SetLayerInPointAndDuration(
 AEGP_LayerH layerH,
 AEGP_LTimeMode time_mode,
 const A_Time *in_pointPT,
 const A_Time *durationPT);

```

#### AEGP_GetLayerOffset

Get the offset from the start of the composition to layer time 0, in composition time.

```cpp
AEGP_GetLayerOffset(
 AEGP_LayerH layerH,
 A_Time *offsetPT);

```

#### AEGP_SetLayerOffset

Set the offset from the start of the composition to the first frame of the layer, in composition time. Undoable.

```cpp
AEGP_SetLayerOffset(
 AEGP_LayerH layerH,
 A_Time *offsetPT);

```

#### AEGP_GetLayerStretch

Get stretch factor of a layer.

```cpp
AEGP_GetLayerStretch(
 AEGP_LayerH layerH,
 A_Ratio *stretchPRt);

```

#### AEGP_SetLayerStretch

Set stretch factor of a layer.

```cpp
AEGP_SetLayerStretch(
 AEGP_LayerH layerH,
 A_Ratio *stretchPRt);

```

#### AEGP_GetLayerTransferMode

Get transfer mode of a layer.

```cpp
AEGP_GetLayerTransferMode(
 AEGP_LayerH layerH,
 AEGP_LayerTransferMode *modeP);

```

#### AEGP_SetLayerTransferMode

Set transfer mode of a layer. Undoable.

```cpp
AEGPSetLayerTransferMode(
 AEGP_LayerH layerH,
 AEGP_LayerTransferMode *modeP);

```

As of 6.5, when you make a layer a track matte, the layer in front of it will be disabled,
as when you do this via the interface.

#### AEGP_IsAddLayerValid

Tests whether it’s currently valid to add a given item to a composition. A composition cannot be added to itself, or to any compositions which it contains; other conditions can preclude successful adding too. Adding a layer without first using this function will produce undefined results.

```cpp
AEGP_IsAddLayerValid(
 AEGP_ItemH item_to_addH,
 AEGP_CompH into_compH,
 A_Boolean *validPB);

```

#### AEGP_AddLayer

Add an item to the composition, above all other layers. Undo-able. Use `AEGP_IsAddLayerValid()` first, to confirm that it’s possible.

```cpp
AEGP_AddLayer(
 AEGP_ItemH item_to_addH,
 AEGP_CompH into_compH,
 A_Boolean *added_layerPH0);

```

#### AEGP_ReorderLayer

Change the order of layers. Undoable.

```cpp
AEGP_ReorderLayer(
 AEGP_LayerH layerH,
 A_long layer_indexL);

```

To add a layer to the end of the composition, to use `layer_indexL = AEGP_REORDER_LAYER_TO_END`

#### AEGP_GetLayerMaskedBounds

Given a layer’s handle and a time, returns the bounds of area visible with masks applied.

```cpp
AEGP_GetLayerMaskedBounds(
 AEGP_LayerH layerH,
 const A_Time *comp_timePT,
 A_FloatRect *boundsPR);

```

#### AEGP_GetLayerObjectType

Returns a layer’s object type.

```cpp
AEGP_GetLayerObjectType(
 AEGP_LayerH layerH,
 AEGP_ObjectType *object_type);

```

- `AEGP_ObjectType_AV`
- `AEGP_ObjectType_LIGHT`,
- `AEGP_ObjectType_CAMERA`,
- `AEGP_ObjectType_TEXT`

#### AEGP_IsLayer3D

Is the footage item a 3D layer. All AV layers are either 2D or 3D.

```cpp
AEGP_IsLayer3D(
 AEGP_LayerH layerH,
 A_Boolean *is_3DPB);

```

#### AEGP_IsLayer2D

Is the footage item a 2D layer. All AV layers are either 2D or 3D.

```cpp
AEGP_IsLayer2D(
 AEGP_LayerH layerH,
 A_Boolean *is_2DPB);

```

#### AEGP_IsVideoActive

Given composition time and a layer, see if the layer will render. Time mode is either `AEGP_LTimeMode_LayerTime` or `AEGP_LTimeMode_CompTime`.

```cpp
AEGP_IsVideoActive(
 AEGP_LayerH layerH,
 AEGP_LTimeMode time_mode,
 A_Time *comp_timePT,
 A_Boolean *is_activePB);

```

#### AEGP_IsLayerUsedAsTrackMatte

Is the layer used as a track matte?

```cpp
AEGP_IsLayerUsedAsTrackMatte(
 AEGP_LayerH layerH,
 A_Boolean fill_must_be_activeB,
 A_Boolean *is_track_mattePB);

```

#### AEGP_DoesLayerHaveTrackMatte

Does this layer have a Track Matte?

```cpp
AEGP_DoesLayerHaveTrackMatte(
 AEGP_LayerH layerH,
 A_Boolean *has_track_mattePB);

```

#### AEGP_ConvertCompToLayerTime

Given a time in composition space, returns the time relative to the layer source footage.

```cpp
AEGP_ConvertCompToLayerTime(
 AEGP_LayerH layerH,
 const A_Time *comp_timeP,
 A_Time *layer_timeP);

```

#### AEGP_ConvertLayerToCompTime

Given a time in layer space, find the corresponding time in composition space.

```cpp
AEGP_ConvertLayerToCompTime(
 AEGP_LayerH layerH,
 const A_Time *layer_timePT,
 A_Time *comp_timePT);

```

#### AEGP_GetLayerDancingRandValue

Used by the dancing dissolve transfer function.

```cpp
AEGP_GetLayerDancingRandValue(
 AEGP_LayerH layerH,
 const A_Time *comp_timePT,
 A_long *rand_valuePL);

```

#### AEGP_GetLayerID

Supplies the layer’s unique ID. This ID never changes during the lifetime of the project.

```cpp
AEGP_GetLayerID(
 AEGP_LayerH layerH,
 AEGP_LayerIDVal *id_valP);

```

#### AEGP_GetLayerToWorldXform

Given a layer handle and time, returns the layer-to-world transformation matrix.

```cpp
AEGP_GetLayerToWorldXform(
 AEGP_LayerH aegp_layerH,
 const A_Time *comp_timeP,
 A_Matrix4 *transform);

```

#### AEGP_GetLayerToWorldXformFromView

Given a layer handle, the current (composition) time, and the requested view time,
returns the translation between the user’s view and the layer, corrected for the composition’s current aspect ratio.

```cpp
AEGP_GetLayerToWorldXformFromView(
 AEGP_LayerH aegp_layerH,
 const A_Time *view_timeP,
 const A_Time *comp_timeP,
 A_Matrix4 *transform);

```

#### AEGP_SetLayerName

Sets the name of a layer. Undo-able. new_nameZ points to a null terminated UTF-16 string.

```cpp
AEGP_SetLayerName(
 AEGP_LayerH aegp_layerH,
 const A_UTF16Char *new_nameZ);

```

#### AEGP_GetLayerParent

Retrieves the handle to a layer’s parent (none if not parented).

```cpp
AEGP_GetLayerParent(
 AEGP_LayerH layerH,
 AEGP_LayerH *parent_layerPH);

```

#### AEGP_SetLayerParent

Sets a layer’s parent layer.

```cpp
AEGP_SetLayerParent(
 AEGP_LayerH layerH,
 const AEGP_LayerH parent_layerH);

```

#### AEGP_DeleteLayer

Deletes a layer. Can you believe it took us three suite versions to add a delete function? Neither can we.

```cpp
AEGP_DeleteLayer(
 AEGP_LayerH layerH);

```

#### AEGP_DuplicateLayer

Duplicates the layer. Undoable.

```cpp
AEGP_DuplicateLayer(
 AEGP_LayerH orig_layerH,
 AEGP_LayerH *dupe_layerPH);

```

#### AEGP_GetLayerFromLayerID

Retrieves the `AEGP_LayerH` associated with a given `AEGP_LayerIDVal` (which is what you get when accessing an effect’s layer parameter stream).

```cpp
AEGP_GetLayerFromLayerID(
 AEGP_CompH parent_compH,
 AEGP_LayerIDVal id,
 AEGP_LayerH *layerPH);

```

#### AEGP_GetLayerLabel

Gets a layer’s `AEGP_LabelID`.

```cpp
AEGP_GetLayerLabel(
 AEGP_LayerH layerH,
 AEGP_LabelID *labelP);

```

#### AEGP_SetLayerLabel

Sets a layer’s `AEGP_LabelID`. Undoable.

```cpp
AEGP_SetLayerLabel(
 AEGP_LayerH layerH,
 AEGP_LabelID label);

```

#### AEGP_GetLayerSamplingQuality

New in CC. Get the sampling quality of a layer.

```cpp
AEGP_GetLayerSamplingQuality(
 AEGP_LayerH layerH,
 AEGP_LayerSamplingQuality *label);

```

Layer sampling quality is one of the following flags:

- `AEGP_LayerSamplingQual_BILINEAR`
- `AEGP_LayerSamplingQual_BICUBIC`

#### AEGP_SetLayerSamplingQuality

New in CC. Sets the sampling quality of a layer (see flag values above).
Option is explicitly set on the layer independent of layer quality.
If you want to force it on you must also set the layer quality to `AEGP_LayerQual_BEST` with `AEGP_SetLayerQuality`.
Otherwise it will only be using the specified layer sampling quality whenever the layer quality is set to `AEGP_LayerQual_BEST`.
Undoable.

```cpp
AEGP_SetLayerSamplingQuality(
 AEGP_LayerH layerH,
 AEGP_LayerSamplingQuality label);

```

## Layer Creation Notes

All layers created using AEGP calls will start at composition time 0, and have the duration of the composition.

Use `AEGP_SetLayerOffset()` and `AEGP_SetLayerInPointAndDuration()` from [AEGP_LayerSuite8](#aegps-aegp-suites-aegp-layersuite) to properly set the layer’s time information.

When the layer stretch factor (obtained using `AEGP_GetLayerStretch` in [AEGP_LayerSuite8](#aegps-aegp-suites-aegp-layersuite), naturally) is not 100%, the following computation will be needed to yield the correct layer offset:

```cpp
offset = compIn - stretch * layerIn;

```

## Communication With A Layer’s Effects

Access the effects applied to a layer. This suite provides access to all parameter data streams.

Use the [Stream Suite](#aegps-aegp-suites-stream-suite) to work with those streams.

An `AEGP_Effect_RefH` is a reference to an applied effect. An `AEGP_InstalledEffectKey` is a reference to an installed effect, which may or may not be currently applied to anything.

If Foobarocity is applied to a layer twice, there will be two distinct `AEGP_Effect_RefHs`, but they’ll both return the same `AEGP_InstalledEffectKey`.

### AEGP_EffectSuite4

#### AEGP_GetLayerNumEffects

Get number of effects applied to a layer.

```cpp
AEGP_GetLayerNumEffects(
 AEGP_LayerH layerH,
 A_long *num_effectsPL);

```

#### AEGP_GetLayerEffectByIndex

Retrieves (by index) a reference to an effect applied to the layer.

```cpp
AEGP_GetLayerEffectByIndex(
 AEGP_PluginID aegp_plugin_id,
 AEGP_LayerH layerH,
 AEGP_EffectIndex effect_indexL,
 AEGP_EffectRefH *effectPH);

```

#### AEGP_GetInstalledKeyFromLayerEffect

Given an `AEGP_EffectRefH`, retrieves its associated `AEGP_InstalledEffectKey`.

```cpp
AEGP_GetInstalledKeyFromLayerEffect(
 AEGP_EffectRefH effect_refH,
 AEGP_InstalledEffectKey *installed_keyP);

```

#### AEGP_GetEffectParamUnionByIndex

Returns description of effect parameter. Do not use the value(s) in the ParamDef returned by this function (Use `AEGP_GetNewStreamValue()` instead);
it’s provided so AEGPs can access parameter defaults, checkbox names, and pop-up strings.
Use `AEGP_GetEffectNumParamStreams()` from [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite) to get the stream count,
useful for determining the maximum `param_index`. The last parameter is optional;

```cpp
AEGP_GetEffectParamUnionByIndex(
 AEGP_PluginID aegp_plugin_id,
 AEGP_EffectRefH effectH,
 PF_ParamIndex param_index,
 PF_ParamType *param_typeP
 PF_ParamDefUnion *uP0);

```

#### AEGP_GetEffectFlags

Obtains the flags for the given `AEGP_EffectRefH`.

```cpp
AEGP_GetEffectFlags(
 AEGP_EffectRefH effect_refH,
 AEGP_EffectFlags *effect_flagsP);

```

Flags will be a combination of the following:

- `AEGP_EffectFlags_NONE`
- `AEGP_EffectFlags_ACTIVE`
- `AEGP_EffectFlags_AUDIO_ONLY`
- `AEGP_EffectFlags_AUDIO_TOO`
- `AEGP_EffectFlags_MISSING`

#### AEGP_SetEffectFlags

Sets the flags (enumerated above) for the given `AEGP_EffectRefH`, masked by a different set of effect flags.

```cpp
AEGP_SetEffectFlags(
 AEGP_EffectRefH effect_refH,
 AEGP_EffectFlags mask,
 AEGP_EffectFlags effect_flags);

```

#### AEGP_ReorderEffect

Change the order of applied effects (pass the requested index).

```cpp
AEGP_ReorderEffect(
 AEGP_EffectRefH effect_refH,
 A_long effect_indexL);

```

#### AEGP_EffectCallGeneric

Call an effect plug-in, and pass it a pointer to any data you like; the effect can modify it. This is how AEGPs communicate with effects.
Pass `PF_Cmd_COMPLETELY_GENERAL` for `effect_cmd`.

```cpp
AEGP_EffectCallGeneric(
 AEGP_PluginID aegp_plugin_id,
 AEGP_EffectRefH effectH,
 const A_Time *timePT,
 PF_Cmd effect_cmd,
 void *extraPV);

```

#### AEGP_DisposeEffect

Disposes of an AEGP_EffectRefH. Use this to dispose of any AEGP_EffectRefH returned by After Effects.

```cpp
AEGP_DisposeEffect(
 AEGP_EffectRefH effectH);

```

#### AEGP_ApplyEffect

Apply an effect to a given layer. Returns the newly-created `AEGP_EffectRefH`.

```cpp
AEGP_ApplyEffect(
 AEGP_PluginID aegp_plugin_id,
 AEGP_LayerH layerH,
 AEGP_InstalledEffectKey installed_key,
 AEGP_EffectRefH *effect_refPH);

```

#### AEGP_DeleteLayerEffect

Remove an applied effect.

```cpp
AEGP_DeleteLayerEffect(
 AEGP_EffectRefH effect_refH);

```

#### AEGP_GetNumInstalledEffects

Returns the count of effects installed in After Effects.

```cpp
AEGP_GetNumInstalledEffects(
 A_long *num_installed_effectsPL);

```

#### AEGP_GetNextInstalledEffect

Returns the `AEGP_InstalledEffectKey` of the next installed effect. Pass `AEGP_InstalledEffectKey_NONE` as the first parameter to obtain the first `AEGP_InstalledEffectKey`.

```cpp
AEGP_GetNextInstalledEffect(
 AEGP_InstalledEffectKey key,
 AEGP_InstalledEffectKey *next_keyPH);

```

#### AEGP_GetEffectName

Get name of the effect. `nameZ` can be up to `AEGP_MAX_EFFECT_NAME_SIZE + 1` long.

```cpp
AEGP_GetEffectName(
 AEGP_InstalledEffectKey installed_key,
 A_char *nameZ);

```

Note: use `AEGP_SetStreamName` to change the display name of an effect.

#### AEGP_GetEffectMatchName

Get match name of an effect (defined in PiPL). `match_nameZ` up to `AEGP_MAX_EFFECT_MATCH_NAME_SIZE + 1` long.

```cpp
AEGP_GetEffectMatchName(
 AEGP_InstalledEffectKey installed_key,
 A_char *match_nameZ);

```

Match names are in 7-bit ASCII. UI names are in the current application runtime encoding; for example, ISO 8859-1 for most languages on Windows.

#### AEGP_GetEffectCategory

Menu category of effect. `categoryZ` can be up to `AEGP_MAX_EFFECT_CATEGORY_NAME_SIZE + 1` long.

```cpp
AEGP_GetEffectCategory(
 AEGP_InstalledEffectKey installed_key,
 A_char *categoryZ);

```

#### AEGP_DuplicateEffect

Duplicates a given `AEGP_EffectRefH`. Caller must dispose of duplicate when finished.

```cpp
AEGP_DuplicateEffect(
 AEGP_EffectRefH orig_effect_refH,
 AEGP_EffectRefH *dupe_refPH);

```

#### AEGP_NumEffectMask

New in CC 2014. How many masks are on this effect?

```cpp
AEGP_NumEffectMask(
 AEGP_EffectRefH effect_refH,
 A_u_long *num_masksPL);

```

#### AEGP_GetEffectMaskID

New in CC 2014. For a given mask_indexL, returns the corresponding `AEGP_MaskIDVal` for use in uniquely identifying the mask.

```cpp
AEGP_GetEffectMaskID(
 AEGP_EffectRefH effect_refH,
 A_u_long mask_indexL,
 AEGP_MaskIDVal *id_valP);

```

#### AEGP_AddEffectMask

New in CC 2014. Add an effect mask, which may be created using the [Mask Management](#aegps-aegp-suites-mask-suite).
Returns the local stream of the effect ref - useful if you want to add keyframes. Caller must dispose of `AEGP_StreamRefH` when finished.
Undoable.

```cpp
AEGP_AddEffectMask(
 AEGP_EffectRefH effect_refH,
 AEGP_MaskIDVal id_val,
 AEGP_StreamRefH streamPH0);

```

#### AEGP_RemoveEffectMask

New in CC 2014. Remove an effect mask.
Undoable.

```cpp
AEGP_RemoveEffectMask(
 AEGP_EffectRefH effect_refH,
 AEGP_MaskIDVal id_val);

```

#### AEGP_SetEffectMask

New in CC 2014. Set an effect mask on an existing index.
Returns the local stream of the effect ref - useful if you want to add keyframes.
Caller must dispose of `AEGP_StreamRefH` when finished.
Undoable.

```cpp
AEGP_SetEffectMask(
 AEGP_EffectRefH effect_refH,
 A_u_long mask_indexL,
 AEGP_MaskIDVal id_val,
 AEGP_StreamRefH *streamPH0);

```

## Exploiting Effect UI Behavior To Look Cool

Even if you manipulate a layer’s effects, its effect controls won’t necessarily become visible.

However, if you apply then immediately remove an effect, the layer’s effect controls will be made visible.

Tricky, eh?

## StreamRefs And EffectRefs

How do you get an AEGP_StreamRef for an effect? Start by getting the effect’s `AEGP_EffectRef`, by calling `AEGP_GetNewEffectForEffect()`.

Then call `AEGP_GetNewEffectStreamByIndex()`, say for param index 1, which passes back a parameter stream.

Then call `AEGP_GetNewParentStreamRef()` - voila, your `AEGP_StreamRef` sir!

If you acquire references to an effect’s streams, do not dispose of the `AEGP_EffectRefH` until you’re done with the streams, or you’ll unbalance After Effects’ checkout mechanism. Also remember that AEGP_StreamRefHs are opaque; `AEGP_StreamValue2s` are not (entirely).

To get an effect’s instance name (as renamed by the user), get the AEGP_StreamRef for the effect itself and call `AEGP_GetStreamName`.

## Diving Into Streams

Just about everything in After Effects is a stream. Effect parameters, layers, masks, and shapes are all internally represented by streams. The AEGP API can access nearly every aspect of every stream.

The After Effects timeline can contain numerous object types; each object supports a set of parameters called streams. All streams, regardless of which type of object to which they’re attached, are conceptually similar (and handled similarly by After Effects. But the way you access each type of stream varies because of their containment.

A stream, once acquired, represents a value which may change over time. Not all streams _can_ vary over time, and a particular stream may not be time-variant at the time of access.

There are two ways to access the value of a stream. If the stream has keyframes, you can use the [Working With Keyframes](#aegps-aegp-suites-keyframe-suite). The values provided won’t reflect the influence of expressions. Note: In any expression, the current keyframed value is always available as the variable value.

You can also use `AEGP_GetNewStreamValue` from [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite), which samples the value of the stream at a particular time. For streams without expressions or keyframes, the time parameter is meaningless, and the function returns what essentially is the constant value of the stream. Use `AEGP_SetStreamValue` (which doesn’t take a time as a parameter) to set these streams.

Many StreamSuite functions populate a StreamH, which your AEGP must dispose. when done. After Effects allocates and passes you a copy of the values, not a direct handle to the original value. `AEGP_GetNewLayerStream()` is restricted to streams for which no memory allocation is required to access their values.

## Okay, What Did I Just Get?

A stream value is a large union, only one structure of which (depending on the stream type) is populated. Note the similarity to the [PF_ParamDef](../effect-basics/PF_ParamDef.html#effect-basics-pf-paramdef).

```cpp
typedef union {
 AEGP_FourDVal four_d;
 AEGP_ThreeDVal three_d;
 AEGP_TwoDVal two_d;
 AEGP_OneDVal one_d;
 AEGP_ColorVal color;
 AEGP_ArbBlockVal arbH;
 AEGP_MarkerValP markerP;
 AEGP_LayerIDVal layer_id;
 AEGP_MaskIDVal mask_id;
 AEGP_MaskOutlineValH mask;
 AEGP_TextDocumentH text_documentH;
} AEGP_StreamVal2;

```

## Layers

`AEGP_GetLayerStreamValue` is used to access the parameters like anchor point and position, native to almost all layers in AE.

Use `IsStreamLegal` to allow you to determine if that stream type is offered on that layer.

## Masks

Since a layer can have multiple masks, access the masks using `AEGP_GetLayerMaskByIndex` from [AEGP_MaskSuite6](#aegps-aegp-suites-aegp-masksuite).

Masks don’t have streams like layers do; they get their own enumeration. Access their streams using `AEGP_GetNewMaskStream` from [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite).

## Effects

They can have a variable number of streams/parameters, and the order and definition of them is not known when the AEGP is written.

Therefore we cannot offer an enum for selecting them, and instead you must get them by index, hence `GetNewEffectStreamByIndex` from [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite).

## Stream Suite

Access and manipulate the values of a layer’s streams. For paint and text streams, use [Dynamic Streams](#aegps-aegp-suites-dynamic-stream-suite) instead.

### AEGP_StreamSuite5

#### AEGP_IsStreamLegal

Determines if the given stream is appropriate for the given layer.

```cpp
AEGP_IsStreamLegal(
 AEGP_LayerH layerH,
 AEGP_LayerStream which_stream,
 A_Boolean* is_legalP);

```

#### AEGP_CanVaryOverTime

Given a stream, returns whether or not a stream is time-variant (and can be keyframed).

```cpp
AEGP_CanVaryOverTime(
 AEGP_StreamRefH streamH,
 A_Boolean *can_varyPB);

```

#### AEGP_GetValidInterpolations

Retrieves an `AEGP_KeyInterpolationMask` indicating which interpolation types are valid for the `AEGP_StreamRefH`.

```cpp
AEGP_GetValidInterpolations(
 AEGP_StreamRefH streamH,
 AEGP_KeyInterpolationMask *valid_interpP);

```

`AEGP_KeyInterpolationMask` will be a combination of the following:

- `AEGP_KeyInterpMask_NONE`
- `AEGP_KeyInterpMask_LINEAR`
- `AEGP_KeyInterpMask_BEZIER`
- `AEGP_KeyInterpMask_HOLD`
- `AEGP_KeyInterpMask_CUSTOM`
- `AEGP_KeyInterpMask_ANY`

#### AEGP_GetNewLayerStream

Get a layer’s data stream. Plug-in must dispose of `streamPH`. Note that this will not provide keyframe access;
Use the [AEGP_KeyframeSuite](#aegps-aegp-suites-keyframe-suite) instead.

```cpp
AEGP_GetNewLayerStream(
 AEGP_PluginID id,
 AEGP_LayerH layerH,
 AEGP_LayerStream which_stream,
 AEGP_StreamRefH *streamPH);

```

- `AEGP_LayerStream_ANCHORPOINT`,
- `AEGP_LayerStream_POSITION`,
- `AEGP_LayerStream_SCALE`,
- `AEGP_LayerStream_ROTATION`,
- `AEGP_LayerStream_ROTATE_Z`,
- `AEGP_LayerStream_OPACITY`,
- `AEGP_LayerStream_AUDIO`,
- `AEGP_LayerStream_MARKER`,
- `AEGP_LayerStream_TIME_REMAP`,
- `AEGP_LayerStream_ROTATE_X`,
- `AEGP_LayerStream_ROTATE_Y`,
- `AEGP_LayerStream_ORIENTATION`

Only valid for `AEGP_ObjectType_CAMERA`:

- `AEGP_ObjectType_CAMERA`
- `AEGP_LayerStream_ZOOM`,
- `AEGP_LayerStream_DEPTH_OF_FIELD`,
- `AEGP_LayerStream_FOCUS_DISTANCE`,
- `AEGP_LayerStream_APERTURE`,
- `AEGP_LayerStream_BLUR_LEVEL`,
- `AEGP_LayerStream_IRIS_SHAPE`,
- `AEGP_LayerStream_IRIS_ROTATION`,
- `AEGP_LayerStream_IRIS_ROUNDNESS`,
- `AEGP_LayerStream_IRIS_ASPECT_RATIO`,
- `AEGP_LayerStream_IRIS_DIFFRACTION_FRINGE`,
- `AEGP_LayerStream_IRIS_HIGHLIGHT_GAIN`,
- `AEGP_LayerStream_IRIS_HIGHLIGHT_THRESHOLD`,
- `AEGP_LayerStream_IRIS_HIGHLIGHT_SATURATION`,

Only valid for `AEGP_ObjectType_LIGHT`:

- `AEGP_LayerStream_INTENSITY`,
- `AEGP_LayerStream_COLOR`,
- `AEGP_LayerStream_CONE_ANGLE`,
- `AEGP_LayerStream_CONE_FEATHER`,
- `AEGP_LayerStream_SHADOW_DARKNESS`,
- `AEGP_LayerStream_SHADOW_DIFFUSION`,
- `AEGP_LayerStream_LIGHT_FALLOFF_TYPE`,
- `AEGP_LayerStream_LIGHT_FALLOFF_START`,
- `AEGP_LayerStream_LIGHT_FALLOFF_DISTANCE`,

Only valid for `AEGP_ObjectType_AV`:

- `AEGP_LayerStream_ACCEPTS_SHADOWS`,
- `AEGP_LayerStream_ACCEPTS_LIGHTS`,
- `AEGP_LayerStream_AMBIENT_COEFF`,
- `AEGP_LayerStream_DIFFUSE_COEFF`,
- `AEGP_LayerStream_SPECULAR_INTENSITY`,
- `AEGP_LayerStream_SPECULAR_SHININESS`,
- `AEGP_LayerStream_METAL`,
- `AEGP_LayerStream_LIGHT_TRANSMISSION`,

Only valid for `AEGP_ObjectType_AV`, new in CS6:* `AEGP_LayerStream_REFLECTION_INTENSITY`,

- `AEGP_LayerStream_REFLECTION_SHARPNESS`,
- `AEGP_LayerStream_REFLECTION_ROLLOFF`,
- `AEGP_LayerStream_TRANSPARENCY_COEFF`,
- `AEGP_LayerStream_TRANSPARENCY_ROLLOFF`,
- `AEGP_LayerStream_INDEX_OF_REFRACTION`,
- `AEGP_LayerStream_EXTRUSION_BEVEL_STYLE`,
- `AEGP_LayerStream_EXTRUSION_BEVEL_DIRECTION`,
- `AEGP_LayerStream_EXTRUSION_BEVEL_DEPTH`,
- `AEGP_LayerStream_EXTRUSION_HOLE_BEVEL_DEPTH`,
- `AEGP_LayerStream_EXTRUSION_DEPTH`,
- `AEGP_LayerStream_PLANE_CURVATURE`,
- `AEGP_LayerStream_PLANE_SUBDIVISION`,

Only valid for `LIGHT` and `AV` only:

- `AEGP_LayerStream_CASTS_SHADOWS`,
- `AEGP_LayerStream_SOURCE_TEXT`
- `AEGP_LayerStream_BEGIN` = `AEGP_LayerStream_ANCHORPOINT`,
- `AEGP_LayerStream_END` = `AEGP_LayerStream_LIGHT_FALLOFF_DISTANCE + 1`

```cpp
enum {
 AEGP_LightFalloff_NONE = 0,
 AEGP_LightFalloff_SMOOTH,
 AEGP_LightFalloff_INVERSE_SQUARE_CLAMPED
};

typedef A_u_long AEGP_LightFalloffType;

```

#### AEGP_GetEffectNumParamStreams

Get number of parameter streams associated with an effect.

```cpp
AEGP_GetEffectNumParamStreams(
 AEGP_EffectRefH effect_refH,
 A_long *num_parmsPL);

```

#### AEGP_GetNewEffectStreamByIndex

Get an effect’s parameter stream. Plug-in must dispose of `streamPH`.

```cpp
AEGP_GetNewEffectStreamByIndex(
 AEGP_PluginID id,
 AEGP_EffectRefH effect_refH,
 PF_ParamIndex param_index,
 AEGP_StreamRefH *streamPH);

```

#### AEGP_GetNewMaskStream

Get a mask’s stream. The stream must be disposed.
Also see the [AEGP_MaskSuite](#aegps-aegp-suites-mask-suite) and [AEGP_MaskOutlineSuite](#aegps-aegp-suites-mask-outline-suite) for additional Mask functions.* `AEGP_MaskStream_OUTLINE`,

- `AEGP_MaskStream_OPACITY`,
- `AEGP_MaskStream_FEATHER`,
- `AEGP_MaskStream_EXPANSION`,

Useful for iteration:

- `AEGP_MaskStream_BEGIN` = `AEGP_MaskStream_OUTLINE`,
- `AEGP_MaskStream_END` = `AEGP_MaskStream_EXPANSION + 1`

```cpp
AEGP_GetNewMaskStream(
 AEGP_PluginID aegp_plugin_id,
 AEGP_MaskRefH mask_refH,
 AEGP_MaskStream which_stream,
 AEGP_StreamRefH *mask_strmPH);

```

#### AEGP_DisposeStream

Dispose of a stream (do this with all streams passed to the plug-in by these functions).

```cpp
AEGP_DisposeStream(
 AEGP_StreamRefH streamH);

```

#### AEGP_GetNewMaskOpacity

Get the mask’s opacity stream. The stream must be disposed.

```cpp
AEGP_GetNewMaskOpacity(
 AEGP_PluginID aegp_plugin_id,
 AEGP_MaskH maskH,
 PF_ParamIndex param_index,
 AEGP_StreamRefH *mask_opacity_streamPH);

```

#### AEGP_GetStreamName

Get name of the stream (localized or forced English). is handle of `A_UTF16Char` (contains null terminated UTF16 string);
must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetStreamName(
 AEGP_PluginID pluginID,
 AEGP_StreamRefH streamH,
 A_Boolean force_englishB,
 AEGP_MemHandle *utf_stream_namePH);

```

NOTE: if `force_englishB` is TRUE, the default name will override any stream renaming which has been done (either programatically, or by the user).

#### AEGP_GetStreamUnitsText

Get stream units, formatted as text (localized or forced English); `unitsZ` up to `AEGP_MAX_STREAM_NAME_LEN + 1` long.

```cpp
AEGP_GetStreamUnitsText(
 AEGP_StreamRefH streamH,
 A_Boolean force_englishB,
 A_char *unitsZ);

```

#### AEGP_GetStreamProperties

Get stream’s flags, as well as minimum and maximum values (as floats), if the stream _has_ mins and maxes.
StreamFlags values:

- `AEGP_StreamFlag_NONE`
- `AEGP_StreamFlag_HAS_MIN`
- `AEGP_StreamFlag_HAS_MAX`

```cpp
AEGP_GetStreamProperties(
 AEGP_StreamRefH streamH,
 AEGP_StreamFlags *flagsP,
 A_FpLong *minP0,
 A_FpLong *maxP0);

```

#### AEGP_IsStreamTimevarying

Returns whether or not the stream is affected by expressions.

```cpp
AEGP_IsStreamTimevarying(
 AEGP_StreamRefH streamH,
 A_Boolean *is_timevaryPB);

```

#### AEGP_GetStreamType

Get type (dimension) of a stream.

```cpp
AEGP_GetStreamType(
 AEGP_StreamRefH streamH,
 AEGP_StreamType *stream_typeP);

```

- `AEGP_StreamType_NO_DATA`,
- `AEGP_StreamType_TwoD_SPATIAL`,
- `AEGP_StreamType_TwoD`,
- `AEGP_StreamType_ThreeD`,
- `AEGP_StreamType_ThreeD_SPATIAL`,
- `AEGP_StreamType_OneD`,
- `AEGP_StreamType_COLOR`,
- `AEGP_StreamType_ARB`,
- `AEGP_StreamType_MARKER`,
- `AEGP_StreamType_LAYER_ID`,
- `AEGP_StreamType_MASK_ID`,
- `AEGP_StreamType_MASK`,
- `AEGP_StreamType_TEXT_DOCUMENT`

NOTE: always returns `ThreeD_Spatial` for position, regardless of whether or not the layer is 3D.

#### AEGP_GetNewStreamValue

Get value, at a time you specify, of stream. `valueP` must be disposed by the plug-in.
The `AEGP_LTimeMode` indicates whether the time is in compositions or layer time.

```cpp
AEGP_GetNewStreamValue(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH streamH,
 AEGP_LTimeMode time_mode,
 const A_Time *timePT,
 A_Boolean pre_exprB,
 AEGP_StreamValue2 *valueP);

```

#### AEGP_DisposeStreamValue

Dispose of stream value. Always deallocate values passed to the plug-in.

```cpp
AEGP_DisposeStreamValue(
 AEGP_StreamValue2 *valueP);

```

#### AEGP_SetStreamValue

Only legal when stream is not time-variant.

```cpp
AEGP_SetStreamValue(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH streamH,
 AEGP_StreamValue2 *valueP);

```

#### AEGP_GetLayerStreamValue

NOTE: This convenience function is only valid for streams with primitive data types, and not for `AEGP_ArbBlockVal`, `AEGP_MarkerValH` or `AEGP_MaskOutlineValH`.
For these and other complex types, use `AEGP_GetNewStreamValue`, described above.

```cpp
AEGP_GetLayerStreamValue(
 AEGP_LayerH layerH,
 AEGP_LayerStream which_stream,
 AEGP_LTimeMode time_mode,
 const A_Time *timePT,
 A_Boolean pre_expB,
 AEGP_StreamVal *stream_valP,
 AEGP_StreamType *strm_typeP0);

```

#### AEGP_GetExpressionState

Determines whether expressions are enabled on the given `AEGP_StreamRefH`.

```cpp
AEGP_GetExpressionState(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH streamH,
 A_Boolean *enabledPB);

```

#### AEGP_SetExpressionState

Enables and disables expressions on the given `AEGP_StreamRefH`.

```cpp
AEGP_SetExpressionState(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH streamH,
 A_Boolean enabledB);

```

#### AEGP_GetExpression

Obtains the expression’s text. Starting in suite version 5 (available in 15.0 and later), this now supports Unicode.

```cpp
AEGP_GetExpression(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH streamH,
 AEGP_MemHandle *unicodeHZ);

```

#### AEGP_SetExpression

Sets the expression’s text. Starting in suite version 5 (available in 15.0 and later), this now supports Unicode.

```cpp
AEGP_SetExpression(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH streamH,
 const A_UTF16Char* expressionP);

```

#### AEGP_DuplicateStreamRef

Duplicates a given `AEGP_StreamRefH`. Dispose of the duplicate.

```cpp
AEGP_DuplicateStreamRef(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH streamH,
 AEGP_StreamRefH *dup_streamPH);

```

## Dynamic Streams

`AEGP_DynamicStreamSuite` accesses and manipulates paint and text streams.

Use `AEGP_GetStreamGroupingType` and `AEGP_GetDynamicStreamFlags` to identify the stream before attempting to use functions which only work on certain stream types.

Also note that, often, you can simply use [Stream Suite](#aegps-aegp-suites-stream-suite) calls to work with dynamic streams. On the other hand, only those functions specific to dynamic streams are in this suite.

### AEGP_DynamicStreamSuite4

#### AEGP_GetNewStreamRefForLayer

Retrieves the AEGP_StreamRefH corresponding to the layer. This function is used to initiate a recursive walk of the layer’s streams.

```cpp
AEGP_GetNewStreamRefForLayer(
 AEGP_PluginID aegp_plugin_id,
 AEGP_LayerH layerH,
 AEGP_StreamRefH *streamPH);

```

#### AEGP_GetNewStreamRefForMask

Retrieves the AEGP_StreamRefH corresponding to the mask.

```cpp
AEGP_GetNewStreamRefForMask(
 AEGP_PluginID aegp_plugin_id,
 AEGP_MaskRefH maskH,
 AEGP_StreamRefH *streamPH);

```

#### AEGP_GetStreamDepth

Retrieves the number of sub-streams associated with the given `AEGP_StreamRefH`.
The initial layer has a depth of 0.

```cpp
AEGP_GetStreamDepth(
 AEGP_StreamRefH streamH,
 A_long *depthPL);

```

#### AEGP_GetStreamGroupingType

Retrieves the grouping type for the given `AEGP_StreamRefH`.

```cpp
AEGP_GetStreamGroupingType(
 AEGP_StreamRefH streamH,
 AEGP_StreamGroupingType *group_typeP);

```

AEGP_StreamGroupingType will be one of the following:

- `AEGP_StreamGroupingType_NONE`
- `AEGP_StreamGroupingType_LEAF`
- `AEGP_StreamGroupingType_NAMED_GROUP`
- `AEGP_StreamGroupingType_INDEXED_GROUP`

#### AEGP_GetNumStreamsInGroup

Retrieves the number of streams associated with the given `AEGP_StreamRefH`.
This function will return an error if called with an `AEGP_StreamRefH` with type `AEGP_StreamGroupingType_LEAF`.

```cpp
AEGP_GetNumStreamsInGroup(
 AEGP_StreamRefH streamH,
 A_long *num_streamsPL);

```

#### AEGP_GetDynamicStreamFlags

Retrieves the flags for a given AEGP_StreamRefH.

```cpp
AEGP_GetDynamicStreamFlags(
 AEGP_StreamRefH streamH,
 AEGP_DynStreamFlags *flagsP);

```

`AEGP_DynStreamFlags` will be one of the following:* `AEGP_DynStreamFlag_ACTIVE_EYEBALL` means that the stream is available for reading and writing.

- `AEGP_DynStreamFlag_HIDDEN` means that, while the stream is still readable/writable, it may not currently be visible in the UI.
- `AEGP_DynStreamFlag_DISABLED` A read-only flag. Indicates whether the `AEGP_StreamRefH` is grayed out in the UI.
  Note that as of CS5, this flag will not be returned if a parameter is disabled.
  Instead, check `PF_PUI_DISABLED` in [Parameter UI Flags](../effect-basics/PF_ParamDef.html#effect-basics-pf-paramdef-parameter-ui-flags).
- `AEGP_DynStreamFlag_ELIDED` A read-only flag. Indicates that the `AEGP_StreamRefH` is read-only, the user never sees it.
  However, the children are still seen and not indented in the Timeline panel.
- `AEGP_DynStreamFlag_SHOWN_WHEN_EMPTY` New in CS6. A read-only flag. Indicates that this stream group should be shown when empty.
- `AEGP_DynStreamFlag_SKIP_REVEAL_WHEN_UNHIDDEN` New in CS6. A read-only flag. Indicates that this stream property will not be automatically revealed when un-hidden.

#### AEGP_SetDynamicStreamFlag

Sets the specified flag for the `AEGP_StreamRefH`.
Note: flags must be set individually. Undoable if `undoableB` is `TRUE`.

```cpp
AEGP_SetDynamicStreamFlag(
 AEGP_StreamRefH streamH,
 AEGP_DynStreamFlags one_flag,
 A_Boolean undoableB,
 A_Boolean setB);

```

This call may be used to dynamically show or hide parameters, by setting and clearing `AEGP_DynStreamFlag_HIDDEN`.
However, `AEGP_DynStreamFlag_DISABLED` may not be set.

#### AEGP_GetNewStreamRefByIndex

Retrieves a sub-stream by index from a given `AEGP_StreamRefH`. Cannot be used on streams of type `AEGP_StreamGroupingType_LEAF`.

```cpp
AEGP_GetNewStreamRefByIndex(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH parent_groupH,
 A_long indexL,
 AEGP_StreamRefH *streamPH);

```

#### AEGP_GetNewStreamRefByMatchname

Retrieves a sub-stream by match name from a given `AEGP_StreamRefH`. Only legal for `AEGP_StreamGroupingType_NAMED_GROUP`.

```cpp
AEGP_GetNewStreamRefByMatchname(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH parent_groupH,
 const A_char *match_nameZ,
 AEGP_StreamRefH *streamPH);

```

Here are some handy stream names, for which references may be retrieved:

- `AEGP_StreamGroupName_MASK_PARADE`
- `AEGP_StreamGroupName_MASK_ATOM`
- `AEGP_StreamName_MASK_FEATHER`
- `AEGP_StreamName_MASK_OPACITY`
- `AEGP_StreamName_MASK_OFFSET`
- `AEGP_StreamGroupName_EFFECT_PARADE`
- `AEGP_StreamGroupName_LAYER`
- `AEGP_StreamGroupName_AV_LAYER`
- `AEGP_StreamGroupName_TEXT_LAYER`
- `AEGP_StreamGroupName_CAMERA_LAYER`
- `AEGP_StreamGroupName_LIGHT_LAYER`
- `AEGP_StreamGroupName_AUDIO`
- `AEGP_StreamGroupName_MATERIAL_OPTIONS`
- `AEGP_StreamGroupName_TRANSFORM`
- `AEGP_StreamGroupName_LIGHT_OPTIONS`
- `AEGP_StreamGroupName_CAMERA_OPTIONS`

#### AEGP_DeleteStream

Deletes the specified stream from a stream grouping.
Note that the caller must still dispose of any `AEGP_StreamRefH` it’s already acquired (allocated) via the API. Undoable.
Only valid for children of type `AEGP_StreamGroupingType_INDEXED_GROUP`.

```cpp
AEGP_DeleteStream(
 AEGP_StreamRefH streamH);

```

Note: as of 6.5, if a stream is deleted while it or any child stream is selected, the current composition selection will become `NULL`.

#### AEGP_ReorderStream

Sets the new index of the specified `AEGP_StreamRefH`. Undoable.
Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`.
The `AEGP_StreamRefH` is updated to refer to the newly-ordered stream.

```cpp
AEGP_ReorderStream(
 AEGP_StreamRefH streamH
 A_long new_indexL);

```

#### AEGP_DuplicateStream

Duplicates the specified stream and appends it to the stream group.
Undoable.
Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`.

```cpp
AEGP_DuplicateStream(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH streamH,
 A_long *new_indexPL0);

```

#### AEGP_SetStreamName

Sets the name of the given `AEGP_StreamRefH`. Undoable. nameZ points to a null terminated UTF-16 string.
Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`.
NOTE: If you retrieve the name with force_englishB set to `TRUE`, you will get the canonical, UNchanged name of the stream.

```cpp
AEGP_SetStreamName(
 AEGP_StreamRefH streamH,
 const A_UTF16Char *nameZ);

```

Note: Use this on an effect stream’s group to change the display name of an effect.

#### AEGP_CanAddStream

Returns whether or not it is currently possible to add a stream through the API.

```cpp
AEGP_CanAddStream(
 AEGP_StreamRefH group_streamH,
 const A_char *match_nameZ,
 A_Boolean *can_addPB);

```

#### AEGP_AddStream

Adds a stream to the specified stream group. Undoable. Only valid for `AEGP_StreamGroupingType_INDEXED_GROUP`.

```cpp
AEGP_AddStream(
 AEGP_PluginID aegp_plugin_id,
 AEGP_StreamRefH indxd_grp_streamH,
 const A_char *match_nameZ,
 AEGP_StreamRefH *streamPH0);

```

#### AEGP_GetMatchName

Retrieves the match name for the specified `AEGP_StreamRefH`.
Note that this may differ from the display name, which can be retrieves using `AEGP_GetStreamName`, in [AEGP_StreamSuite5](#aegps-aegp-suites-aegp-streamsuite).
`nameZ` can be up to `AEGP_MAX_STREAM_MATCH_NAME_SIZE` in length.

```cpp
AEGP_GetMatchName(
 AEGP_StreamRefH streamH,
 A_char *nameZ);

```

#### AEGP_GetNewParentStreamRef

Retrieves an `AEGP_StreamRefH` for the parent of the specified `AEGP_StreamRefH`.

```cpp
AEGP_GetNewParentStreamRef(
 AEGP_PluginID plugin_id,
 AEGP_StreamRefH streamH,
 AEGP_StreamRefH *parentPH);

```

#### AEGP_GetStreamIsModified

Returns whether or not the specified `AEGP_StreamRefH` has been modified.
Note: the same result is available throught the After Effect user interface by typing “UU” with the composition selected.

```cpp
AEGP_GetStreamIsModified(
 AEGP_StreamRefH streamH,
 A_Boolean *modifiedPB);

```

#### AEGP_GetStreamIndexInParent

Retrieves the index of a given stream, relative to its parent stream.
Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`

```cpp
AEGP_GetStreamIndexInParent(
 AEGP_StreamRefH streamH,
 A_long *indexPL);

```

NOTE: As mentioned _elsewhere_, `AEGP_StreamRefHs` don’t persist across function calls.
If streams are re-ordered, added or removed, all `AEGP_StreamRefHs` previously retrieved may be invalidated.

#### AEGP_IsSeparationLeader

Valid on leaf streams only. Returns true if this stream is a multidimensional stream that can have its dimensions separated, though they may not be currently separated.
Terminology: A Leader is the stream that can be separated, a Follower is one of N automatic streams that correspond to the N dimensions of the Leader.
A Leader isn’t always separated, call `AEGP_AreDimensionsSeparated` to find out if it is.
As of CS4, the only stream that is ever separarated is the layer’s Position property.
Please _do not_ write code assuming that, we anticipate allowing separation of more streams in the future.

```cpp
AEGP_IsSeparationLeader(
 AEGP_StreamRefH streamH,
 A_Boolean *leaderPB);

```

#### AEGP_AreDimensionsSeparated

Methods such as `AEGP_GetNewKeyframeValue` that work on keyframe indices will most definitely _not_ work on the Leader property, you will need to retrieve and operate on the Followers explicitly.

```cpp
AEGP_AreDimensionsSeparated(
 AEGP_StreamRefH streamH,
 A_Boolean *separatedPB);

```

#### AEGP_SetDimensionsSeparated

Valid only if `AEGP_IsSeparationLeader()` is `true`.

```cpp
AEGP_AreDimensionsSeparated(
 AEGP_StreamRefH streamH,
 A_Boolean *separatedPB);

```

#### AEGP_GetSeparationFollower

Retrieve the Follower stream corresponding to a given dimension of the Leader stream. `dimS` can range from `0` to `AEGP_GetStreamValueDimensionality(lea der_streamH) - 1`.

```cpp
AEGP_GetSeparationFollower(
 AEGP_StreamRefH leader_streamH
 A_short dimS,
 AEGP_StreamRefH *follower_streamPH);

```

#### AEGP_IsSeparationFollower

Valid on leaf streams only.
Returns `true` if this stream is a one dimensional property that represents one of the dimensions of a Leader.
You can retrieve stream from the Leader using `AEGP_GetSeparationFollower()`.

```cpp
AEGP_IsSeparationFollower(
 AEGP_StreamRefH streamH
 A_Boolean *followerPB);

```

#### AEGP_GetSeparationLeader

Valid on separation Followers only, returns the Leader it is part of.

```cpp
AEGP_GetSeparationLeader(
 AEGP_StreamRefH follower_streamH,
 AEGP_StreamRefH *leader_streamPH);

```

#### AEGP_GetSeparationDimension

Valid on separation Followers only, returns which dimension of the Leader it corresponds to.

```cpp
AEGP_GetSeparationDimension(
 AEGP_StreamRefH follower_streamH,
 A_short *dimPS);

```

## Working With Keyframes

Keyframes make After Effects what it is. AEGPs (and…ssshh, don’t tell anyone…effects) can use this suite to add, manipulate and remove keyframes from any keyframe-able stream.

### AEGP_KeyframeSuite3

#### AEGP_GetStreamNumKFs

Retrieves the number of keyframes on the given stream.
Returns `AEGP_NumKF_NO_DATA` if the stream is not keyframe-able.
Also, note that a stream without keyframes isn’t necessarily constant; it can be altered by expressions.

```cpp
AEGP_GetStreamNumKFs(
 AEGP_StreamRefH streamH,
 A_long *num_kfsPL);

```

#### AEGP_GetKeyframeTime

Retrieves the time of the specified keyframe.

```cpp
AEGP_GetKeyframeTime(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex index,
 AEGP_LTimeMode time_mode,
 A_Time *timePT);

```

#### AEGP_InsertKeyframe

Adds a keyframe to the specified stream (at the specified composition or layer time).
Returns the new keyframe’s index.
All indexes greater than the new index are now invalid (but you knew that). If there is already a keyframe at that time, the values will be updated.

```cpp
AEGP_InsertKeyframe(
 AEGP_StreamRefH streamH,
 AEGP_LTimeMode time_mode,
 const A_Time *timePT,
 AEGP_KeyframeIndex *key_indexP);

```

#### AEGP_DeleteKeyframe

Deletes the specified keyframe.

```cpp
AEGP_DeleteKeyframe(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index);

```

#### AEGP_GetNewKeyframeValue

Creates and populates an `AEGP_StreamValue2` for the stream’s value at the time of the keyframe.
The returned `AEGP_StreamValue2` must be disposed of using `AEGP_DisposeStreamValue`.

```cpp
AEGP_GetNewKeyframeValue(
 AEGP_PluginID plugin_id,
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 AEGP_StreamValue2 *valueP);

```

#### AEGP_SetKeyframeValue

Sets the stream’s value at the time of the keyframe.

```cpp
AEGP_SetKeyframeValue(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex index,
 const AEGP_StreamValue2 *valP);

```

#### AEGP_GetStreamValueDimensionality

Retrieves the dimensionality of the stream’s value.

```cpp
AEGP_GetStreamValueDimensionality(
 AEGP_StreamRefH streamH,
 A_short *value_dimPS);

```

#### AEGP_GetStreamTemporalDimensionality

Retrieves the temporal dimensionality of the stream.

```cpp
AEGP_GetStreamTemporalDimensionality(
 AEGP_StreamRefH streamH,
 A_short *t_dimPS);

```

#### AEGP_GetNewKeyframeSpatialTangents

Returns the `AEGP_StreamValue2s` representing the stream’s tangential values at the time of the keyframe.
The returned `AEGP_StreamValue2s` must be disposed of using `AEGP_DisposeStreamValue`.

```cpp
AEGP_GetNewKeyframeSpatialTangents(
 AEGP_PluginID plugin_id,
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 AEGP_StreamValue2 *in_tanP0,
 AEGP_StreamValue2 *out_tanP0);

```

#### AEGP_SetKeyframeSpatialTangents

Specifies the tangential `AEGP_StreamValue2s` to be used for the stream’s value at the time of the keyframe.
The `AEGP_StreamValue2s` passed for in and out tangents are not adopted by After Effects, and must be disposed of using `AEGP_DisposeStreamValue`.

```cpp
AEGP_SetKeyframeSpatialTangents(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 const AEGP_StreamValue2 *in_tP0,
 const AEGP_StreamValue2 *out_tP0);

```

NOTE: In `AEGP_KeyframeSuite2` and prior versions, the values returned from this function were wrong when called on an effect point control stream or anchor point.
They were not multiplied by the layer size. Now they are.

#### AEGP_GetKeyframeTemporalEase

Retrieves the `AEGP_KeyframeEases` associated with the specified dimension of the stream’s value at the time of the keyframe.
`dimensionL` ranges from `0` to `(temporal_dimensionality -1)`.

```cpp
AEGP_GetKeyframeTemporalEase(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 A_long dimensionL,
 AEGP_KeyframeEase *in_easeP0,
 AEGP_KeyframeEase *out_easeP0);

```

NOTE: the returned ease values must be multiplied by layer height to match the values displayed in the After Effects UI.

#### AEGP_SetKeyframeTemporalEase

Specifies the `AEGP_KeyframeEases` to be used for the stream’s value at the time of the keyframe. `dimensionL` ranges from `0` to `(temporal_dimensionality -1)`.
The `AEGP_KeyframeEases` passed are not adopted by After Effects.

```cpp
AEGP_SetKeyframeTemporalEase(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 A_long dimL,
 const AEGP_KeyframeEase *in_P0,
 const AEGP_KeyframeEase *outP0);

```

#### AEGP_GetKeyframeFlags

Retrieves the flags currently set for the keyframe.

```cpp
AEGP_GetKeyframeFlags(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 AEGP_KeyframeFlags *flagsP);

```

`*flagsP` will be a combination of the following:

- `AEGP_KeyframeFlag_NONE`
- `AEGP_KeyframeFlag_TEMPORAL_CONTINUOUS`
- `AEGP_KeyframeFlag_TEMPORAL_AUTOBEZIER`
- `AEGP_KeyframeFlag_SPATIAL_CONTINUOUS`
- `AEGP_KeyframeFlag_SPATIAL_AUTOBEZIER`
- `AEGP_KeyframeFlag_ROVING`

#### AEGP_SetKeyframeFlag

Sets the specified flag for the keyframe. Flags must be set individually.

```cpp
AEGP_SetKeyframeFlag(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 AEGP_KeyframeFlags flag,
 A_Boolean valueB);

```

#### AEGP_GetKeyframeInterpolation

Retrieves the in and out `AEGP_KeyframeInterpolationTypes` for the specified keyframe.

```cpp
AEGP_GetKeyframeInterpolation(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 AEGP_KeyframeInterpolationType *inP0,
 AEGP_KeyframeInterpolationType *outP0);

```

`AEGP_KeyframeInterpolationType` is one of the following:

- `AEGP_KeyInterp_NONE`
- `AEGP_KeyInterp_LINEAR`
- `AEGP_KeyInterp_BEZIER`
- `AEGP_KeyInterp_HOLD`

#### AEGP_SetKeyframeInterpolation

Specifies the in and out `AEGP_KeyframeInterpolationTypes` to be used for the given keyframe.

```cpp
AEGP_SetKeyframeInterpolation(
 AEGP_StreamRefH streamH,
 AEGP_KeyframeIndex key_index,
 AEGP_KeyframeInterpolationType in_interp,
 AEGP_KeyframeInterpolationType out_interp);

```

#### AEGP_StartAddKeyframes

Informs After Effects that you’re going to be adding several keyframes to the specified stream.
After Effects will return an allocated opaque `AEGP_AddKeyframesInfoH`, for use with the calls below.

```cpp
AEGP_StartAddKeyframes(
 AEGP_StreamRefH streamH,
 AEGP_AddKeyframesInfoH *akPH);

```

#### AEGP_AddKeyframes

Adds a keyframe to the specified stream at the specified (layer or composition) time.
Note: this doesn’t actually do anything to the stream’s value.

```cpp
AEGP_AddKeyframes(
 AEGP_AddKeyframesInfoH akH,
 AEGP_LTimeMode time_mode,
 const A_Time *timePT,
 A_long *indexPL);

```

#### AEGP_SetAddKeyframe

Sets the value of the specified keyframe.

```cpp
AEGP_SetAddKeyframe(
 AEGP_AddKeyframesInfoH akH,
 A_long indexL,
 const AEGP_StreamValue2 *valueP);

```

#### AEGP_EndAddKeyframes

Tells After Effects you’re done adding keyframes.

```cpp
AEGP_EndAddKeyframes(
 A_Boolean addB,
 AEGP_AddKeyframesInfoH akH);

```

## Adding Multiple Keyframes

Each time you call `AEGP_InsertKeyframe()`, the entire stream is added to the undo stack.

If you’re adding one or two keyframes, this isn’t a problem. However, if you’re writing a keyframer, you’ll want to do things the _right_ way.

Before you begin adding keyframes, call the (very-appropriately-named) `AEGP_StartAddKeyframes`, passing it an opaque `AEGP_AddKeyframesInfoH`.

For each keyframe to add, call `AEGP_AddKeyframes` to set the time to be used (and get the newly-added keyframe’s index), then `AEGP_SetAddKeyframe` to specify the value to be used.

Once you’re finished, call `AEGP_EndAddKeyframes` to let know After Effects know it’s time to add the changed parameter stream to the undo stack.

## Marker Streams

`AEGP_MarkerSuite` allows for direct manipulation of marker data.

### AEGP_MarkerSuite2

#### AEGP_NewMarker

Creates a new marker.

```cpp
AEGP_NewMarker(
 AEGP_MarkerValP *markerPP);

```

#### AEGP_DisposeMarker

Disposes of a marker.

```cpp
AEGP_DisposeMarker(
 AEGP_MarkerValP markerP);

```

#### AEGP_DuplicateMarker

Duplicates a marker (didn’t see _that_ one coming, eh?).

```cpp
AEGP_DuplicateMarker(
 AEGP_MarkerValP markerP,
 AEGP_MarkerValP *new_markerP);

```

#### AEGP_SetMarkerFlag

Sets a marker flag’s value.

```cpp
AEGP_SetMarkerFlag(
 AEGP_MarkerValP markerP,
 AEGP_MarkerFlagType flagType,
 A_Boolean valueB);

```

Currently, AEGP_MarkerFlagType is one of the following:

- `AEGP_MarkerFlag_NONE`
- `AEGP_MarkerFlag_NAVIGATION`

#### AEGP_GetMarkerFlag

Gets the value (see above) of a given `AEGP_MarkerFlagType`.

```cpp
AEGP_GetMarkerFlag(
 AEGP_ConstMarkerValP markerP,
 AEGP_MarkerFlagType flagType
 A_Boolean *valueBP);

```

#### AEGP_GetMarkerString

Retrieves the UTF-16, NULL-terminated string located in the specified marker field.
Must be disposed of by caller using `AEGP_FreeMemHandle`.

```cpp
AEGP_GetMarkerString(
 AEGP_PluginID id,
 AEGP_ConstMarkerValP markerP,
 AEGP_MarkerStringType strType,
 AEGP_MemHandle *unicodePH);

```

#### AEGP_SetMarkerString

Sets the specified field of a marker to the provided text.

```cpp
AEGP_SetMarkerString(
 AEGP_MarkerValP markerP,
 AEGP_MarkerStringType strType,
 const A_u_short *unicodeP,
 A_long lengthL);

```

#### AEGP_CountCuePointParams

Returns the number of cue point parameters.

```cpp
AEGP_CountCuePointParams(
 AEGP_ConstMarkerValP markerP,
 A_long *paramsLP);

```

#### AEGP_GetIndCuePointParam

Returns the cue point param at the specified index (which must be between `0` and `(cue point params -1)`.
Returned handles are UTF-16, NULL-terminated strings, and must be disposed of by caller using `AEGP_FreeMemHandle`.

```cpp
AEGP_GetIndCuePointParam(
 AEGP_PluginID id,
 AEGP_ConstMarkerValP markerP,
 A_long param_indexL,
 AEGP_MemHandle *unicodeKeyPH,
 AEGP_MemHandle *uni_ValuePH);

```

#### AEGP_SetIndCuePointParam

Set the value of an indexed cue point parameter to the specified value.
`key_lengthL` is “number of unicode characters”, and `value_lenL` is the length of the provided value.
`unicode_KeyP` and `unicode_ValueP` point to UTF-16 data.

```cpp
AEGP_SetIndCuePointParam(
 AEGP_MarkerValP markerP,
 A_long param_idxL,
 const A_u_short *unicode_KeyP,
 A_long key_lengthL,
 const A_u_short *unicode_ValueP,
 A_long value_lengthL);

```

#### AEGP_InsertCuePointParam

Inserts a cue point parameter.
This call is following by `AEGP_SetIndCuePointParam` to actually set the data.

```cpp
AEGP_InsertCuePointParam(
 AEGP_MarkerValP markerP,
 A_long param_idxL);

```

| `AEGP_DeleteInd` CuePointParam | Deletes the cue point param at the specified index.

```cpp
AEGP_DeleteIndCuePointParam(
 AEGP_MarkerValP markerP,
 A_long param_idxL);

```

#### AEGP_SetMarkerDuration

```cpp
AEGP_SetMarkerDuration(
 AEGP_MarkerValP markerP,
 const A_Time *durationPT);

```

#### AEGP_GetMarkerDuration

```cpp
AEGP_GetMarkerDuration(
 AEGP_ConstMarkerValP markerP,
 A_Time *durationPT);

```

## Mask Management

Access, manipulate, and delete a layer’s masks.

### AEGP_MaskSuite6

#### AEGP_GetLayerNumMasks

Counts the masks applied to a layer,

```cpp
AEGP_GetLayerNumMasks(
 AEGP_LayerH aegp_layerH,
 A_long *num_masksPL);

```

#### AEGP_GetLayerMaskByIndex

Given a layer handle and mask index, returns a pointer to the mask handle.
You must destroy the mask handle by using `AEGP_DisposeMask()`.

```cpp
AEGP_GetLayerMaskByIndex(
 AEGP_LayerH aegp_layerH,
 A_long mask_indexL,
 AEGP_MaskRefH *maskPH);

```

#### AEGP_DisposeMask

Dispose of a mask handle.

```cpp
AEGP_DisposeMask(
 AEGP_MaskRefH maskH);

```

#### AEGP_GetMaskInvert

Given a mask handle, determines if the mask is inverted or not.

```cpp
AEGP_GetMaskInvert(
 AEGP_MaskRefH maskH,
 A_Boolean *invertPB);

```

#### AEGP_SetMaskInvert

Sets the inversion state of a mask.

```cpp
AEGP_SetMaskInvert(
 AEGP_MaskRefH mask_refH,
 A_Boolean invertB);

```

#### AEGP_GetMaskMode

Given a mask handle, returns the current mode of the mask.
`PF_MaskMode_NONE` does nothing, `PF_MaskMode_ADD` is the default behavior.* `PF_MaskMode_NONE`

- `PF_MaskMode_ADD`,
- `PF_MaskMode_SUBTRACT`,
- `PF_MaskMode_INTERSECT`,
- `PF_MaskMode_LIGHTEN`,
- `PF_MaskMode_DARKEN`,
- `PF_MaskMode_DIFFERENCE`,

```cpp
AEGP_GetMaskMode(
 AEGP_MaskRefH maskH,
 PF_MaskMode *modeP);

```

#### AEGP_SetMaskMode

Sets the mode of the given mask.

```cpp
AEGP_SetMaskMode(
 AEGP_MaskRefH maskH,
 PF_MaskMode mode);

```

#### AEGP_GetMaskMotionBlurState

Retrieves the motion blur setting for the given mask.

```cpp
AEGP_GetMaskMotionBlurState(
 AEGP_MaskRefH mask_refH,
 AEGP_MaskMBlur *blur_stateP);

```

`AEGP_MaskMBlur` will be one of the following:

- `AEGP_MaskMBlur_SAME_AS_LAYER`
- `AEGP_MaskMBlur_OFF`
- `AEGP_MaskMBlur_ON`

#### AEGP_SetMaskMotionBlurState

New in CS6. Sets the motion blur setting for the given mask.

```cpp
AEGP_SetMaskMotionBlurState(
 AEGP_MaskRefH mask_refH,
 AEGP_MaskMBlur blur_state);

```

#### AEGP_GetMaskFeatherFalloff

New in CS6. Gets the type of feather falloff for the given mask, either
`AEGP_MaskFeatherFalloff_SMOOTH` or `AEGP_MaskFeatherFalloff_LINEAR`.

```cpp
AEGP_SetMaskMotionBlurState(
 AEGP_MaskRefH mask_refH,
 AEGP_MaskFeatherFalloff *feather_falloffP);

```

#### AEGP_SetMaskFeatherFalloff

Sets the type of feather falloff for the given mask.

```cpp
AEGP_SetMaskMotionBlurState(
 AEGP_MaskRefH mask_refH,
 AEGP_MaskFeatherFalloff feather_falloff);

```

#### AEGP_GetMaskName

Removed in CS4. Use `AEGP_GetNewStreamRefForMask` and the name functions in the Dynamic Stream Suite instead.

#### AEGP_SetMaskName

#### AEGP_GetMaskID

Retrieves the `AEGP_MaskIDVal` for the given `AEGP_MaskRefH`, for use in uniquely identifying the mask.

```cpp
AEGP_GetMaskID(
 AEGP_MaskRefH mask_refH,
 AEGP_MaskIDVal *id_valP);

```

#### AEGP_CreateNewMask

Creates a new mask on the referenced `AEGP_LayerH`, with zero nodes. The new mask’s index is returned.

```cpp
AEGP_CreateNewMask(
 AEGP_LayerH layerH,
 AEGP_MaskRefH *mask_refPH,
 A_long *mask_indexPL0);

```

#### AEGP_DeleteMaskFromLayer

```cpp
AEGP_DeleteMaskFromLayer(
 AEGP_MaskRefH mask_refH);

```

NOTE: As of 6.5, if you delete a mask and it or a child stream is selected, the current selection within the composition will become NULL.

#### AEGP_GetMaskColor

Retrieves the color of the specified mask.

```cpp
AEGP_GetMaskColor(
 AEGP_MaskRefH mask_refH,
 AEGP_ColorVal *colorP);

```

#### AEGP_SetMaskColor

Sets the color of the specified mask.

```cpp
AEGP_SetMaskColor(
 AEGP_MaskRefH mask_refH,
 const AEGP_ColorVal *colorP);

```

#### AEGP_GetMaskLockState

Retrieves the lock state of the specified mask.

```cpp
AEGP_GetMaskLockState(
 AEGP_MaskRefH mask_refH,
 A_Boolean *is_lockedPB);

```

#### AEGP_SetMaskLockState

Sets the lock state of the specified mask.

```cpp
AEGP_SetMaskLockState(
 AEGP_MaskRefH mask_refH,
 A_Boolean lockB);

```

#### AEGP_GetMaskIsRotoBezier

Returns whether or not the given mask is used as a rotobezier.

```cpp
AEGP_GetMaskIsRotoBezier(
 AEGP_MaskRefH mask_refH,
 A_Boolean *is_roto_bezierPB);

```

#### AEGP_SetMaskIsRotoBezier

Sets whether a given mask is to be used as a rotobezier.

```cpp
AEGP_SetMaskIsRotoBezier(
 AEGP_MaskRefH mask_refH,
 A_Boolean *is_roto_bezierPB);

```

#### AEGP_DuplicateMask

Duplicates a given `AEGP_MaskRefH`. Caller must dispose of duplicate.

```cpp
AEGP_DuplicateMask(
 AEGP_MaskRefH orig_mask_refH,
 AEGP_MaskRefH *dupe_mask_refPH);

```

## Mask Outlines

The Mask Suite above tells plug-ins about the masks on a layer, but not about the details of those masks.

This is because processing is required on After Effects’ part to access the information; the information isn’t just lying around.

Plug-ins access that information using this Mask Outline Suite.

### AEGP_MaskOutlineSuite3

#### AEGP_IsMaskOutlineOpen

Given an mask outline pointer (obtainable through the [Stream Suite](#aegps-aegp-suites-stream-suite)), determines if the mask path is open or closed.

```cpp
AEGP_IsMaskOutlineOpen(
 AEGP_MaskOutlineVal *mask_outlineP,
 A_Boolean *openPB);

```

#### AEGP_SetMaskOutlineOpen

Sets the open state of the given mask outline.

```cpp
AEGP_SetMaskOutlineOpen(
 AEGP_MaskOutlineValH mask_outlineH,
 A_Boolean openB);

```

#### AEGP_GetMaskOutlineNumSegments

Given a mask outline pointer, returns the number of segments in the path.
`num_segmentsPL` is the total number of segments `[0...N-1]`.

```cpp
AEGP_GetMaskOutlineNumSegments(
 AEGP_MaskOutlineVal *mask_outlineP,
 A_long *num_segmentsPL);

```

#### AEGP_GetMaskOutlineVertexInfo

Given a mask outline pointer and a point between 0 and the total number of segments.
For closed mask paths, `vertex[0]` is the same as `vertex[num_segments]`.

```cpp
AEGP_GetMaskOutlineVertexInfo(
 AEGP_MaskOutlineVal *mask_outlineP,
 A_long which_pointL,
 AEGP_MaskVertex *vertexP);

```

#### AEGP_SetMaskOutlineVertexInfo

Sets the vertex information for a given index.
Setting vertex 0 is special; its in tangent will actually set the out tangent of the last vertex in the outline.
Of course, `which_pointL` must be valid for the mask outline, or the function will return an error.

```cpp
AEGP_SetMaskOutlineVertexInfo(
 AEGP_MaskOutlineValH mask_outlineH,
 AEGP_VertexIndex which_pointL,
 AEGP_MaskVertex *vertexP);

```

#### AEGP_CreateVertex

Creates a vertex at index position.
All vertices which formerly had an `AEGP_VertexIndex` of position or greater will have their indices incremented by one.

```cpp
AEGP_CreateVertex(
 AEGP_MaskOutlineValH mask_outlineH,
 AEGP_VertexIndex position);.

```

NOTE: All masks must have at least one vertex.

#### AEGP_DeleteVertex

Removes a vertex from a mask.

```cpp
AEGP_DeleteVertex(
 AEGP_MaskOutlineValH mask_outlineH,
 AEGP_VertexIndex index);

```

#### AEGP_GetMaskOutlineNumFeathers

New in CS6.

```cpp
AEGP_DeleteVertex(
 AEGP_MaskOutlineValH mask_outlineH,
 A_long *num_feathersPL);

```

#### AEGP_GetMaskOutlineFeatherInfo

New in CS6.

```cpp
AEGP_GetMaskOutlineFeatherInfo(
 AEGP_MaskOutlineValH mask_outlineH,
 AEGP_FeatherIndex which_featherL,
 AEGP_MaskFeather *featherP);

```

#### AEGP_SetMaskOutlineFeatherInfo

New in CS6.
Feather must already exist; use `AEGP_CreateMaskOutlineFeather` first, if needed.

```cpp
AEGP_SetMaskOutlineFeatherInfo(
 AEGP_MaskOutlineValH mask_outlineH,
 AEGP_VertexIndex which_featherL,
 const AEGP_MaskFeather *featherP);

```

#### AEGP_CreateMaskOutlineFeather

New in CS6. Index of new feather is passed back in `insert_positionP`.

```cpp
AEGP_CreateMaskOutlineFeather(
 AEGP_MaskOutlineValH mask_outlineH,
 const AEGP_MaskFeather *featherP0,
 AEGP_FeatherIndex *insert_positionP);

```

#### AEGP_DeleteMaskOutlineFeather

New in CS6.

```cpp
AEGP_DeleteMaskOutlineFeather(
 AEGP_MaskOutlineValH mask_outlineH,
 AEGP_FeatherIndex index);

```

## Mask Feathering

New for CS6, masks can be feathered.

`AEGP_MaskFeather` is defined as follows:

```cpp
typedef struct {
 A_long segment; // mask segment where feather is
 PF_FpLong segment_sF; // 0-1: feather location on segment
 PF_FpLong radiusF; // negative value allowed if type == AEGP_MaskFeatherType_INNER
 PF_FpShort ui_corner_angleF; // 0-1: angle of UI handle on corners
 PF_FpShort tensionF; // 0-1: tension of boundary at feather pt
 AEGP_MaskFeatherInterp interp;
 AEGP_MaskFeatherType type;
} AEGP_MaskFeather;

```

`AEGP_MaskFeatherInterp` is either `AEGP_MaskFeatherInterp_NORMAL` or `AEGP_MaskFeatherInterp_HOLD_CW`.

`AEGP_MaskFeatherType` is either `AEGP_MaskFeatherType_OUTER` or `AEGP_MaskFeatherType_INNER`.

This suite enables AEGPs to get and set the text associated with text layers.

Note: to get started, retrieve an `AEGP_TextDocumentH` by calling `AEGP_GetLayerStreamValue`, above, and passing `AEGP_StreamType_TEXT_DOCUMENT` as the `AEGP_StreamType`.

## Working With Text Layers

This suite enables AEGPs to get and set the text associated with text layers.

### AEGP_TextDocumentSuite1

#### AEGP_GetNewText

Retrieves the UTF-16, NULL-terminated string used in the `AEGP_TextDocumentH`.
Note: After Effects will allocate the `AEGP_MemHandle`;
your plug-in must dispose of it when done using `AEGP_FreeMemHandle`.

```cpp
AEGP_GetNewText(
 AEGP_PluginID id,
 AEGP_TextDocumentH text_docH,
 AEGP_MemHandle *unicodePH);

```

#### AEGP_SetText

Specifies the text to be used by the `AEGP_TextDocumentH`.

```cpp
AEGP_SetText(
 AEGP_TextDocumentH text_docH,
 const A_u_short *unicodePS,
 long lengthL);

```

## Working With Text Outlines

The `AEGP_TextLayerSuite` provides access to the actual outlines of the text used by text layers.

Once you have a path, you can manipulate it with [PF_PathQuerySuite1](../effect-details/working-with-paths.html#effect-details-working-with-paths-pf-pathquerysuite) and [PF_PathDataSuite](../effect-details/working-with-paths.html#effect-details-working-with-paths-pf-pathdatasuite).

### AEGP_TextLayerSuite1

#### AEGP_GetNewTextOutlines

Allocates and returns a handle to the `AEGP_TextOutlinesHs` associated with the specified layer.
`outlinesPH` will be NULL if there are no `AEGP_TextOutlinesHs` associated with `layerH` (in other words, if it’s not a text layer).

```cpp
AEGP_GetNewTextOutlines(
 AEGP_LayerH layerH,
 const A_Time *layer_timePT,
 AEGP_TextOutlinesH *outlinesPH);

```

#### AEGP_DisposeTextOutlines

Dispose of those outlines we allocated on your behalf!

```cpp
AEGP_DisposeTextOutlines(
 AEGP_TextOutlinesH outlinesH);

```

#### AEGP_GetNumTextOutlines

Retrieves the number of text outlines for the layer.

```cpp
AEGP_GetNumTextOutlines(
 AEGP_TextOutlinesH outlinesH,
 A_long *num_otlnsPL);

```

#### AEGP_GetIndexedTextOutline

Returns a PF_PathOutlinePtr for the specifed text outline.

```cpp
AEGP_GetIndexedTextOutline(
 AEGP_TextOutlinesH outlinesH,
 A_long path_indexL,
 PF_PathOutlinePtr *pathPP);

```

## Utility Functions

The Utility suite supplies error message handling, AEGP version checking and access to the undo stack.

Everything you need to keep After Effects and your plug-in tidy.

### AEGP_UtilitySuite6

#### AEGP_ReportInfo

Displays dialog with name of the AEGP followed by the string passed.

```cpp
AEGP_ReportInfo(
 AEGP_PluginID aegp_plugin_id,
 const A_char *info_stringZ);

```

#### AEGP_ReportInfoUnicode

New in CC. Displays dialog with name of the AEGP followed by the unicode string passed.

```cpp
AEGP_ReportInfoUnicode(
 AEGP_PluginID aegp_plugin_id,
 const A_UTF16Char *info_stringP);

```

#### AEGP_GetDriverSpecVersion

Returns version of `AEGPDriver` plug-in (use to determine supported features).

```cpp
AEGP_GetDriverSpecVersion(
 A_short *major_versionPS,
 A_short *minor_versionPS);

```

#### AEGP_StartQuietErrors

Silences errors. Must be balanced with `AEGP_EndQuietErrors`.
The `AEGP_ErrReportState` is an opaque structure private to After Effects.

```cpp
AEGP_StartQuietErrors(
 AEGP_ErrReportState *err_stateP);

```

#### AEGP_EndQuietErrors

Re-enables errors.

```cpp
AEGP_EndQuietErrors(
 AEGP_ErrReportState *err_stateP)

```

#### AEGP_StartUndoGroup

Add action(s) to the undo queue. The user may undo any actions between this and `AEGP_EndUndoGroup()`.
The `undo_nameZ` will appear in the edit menu.

```cpp
AEGP_StartUndoGroup(
 const A_char *undo_nameZ);

```

#### AEGP_EndUndoGroup

Ends the undo list.

```cpp
AEGP_EndUndoGroup();

```

#### AEGP_RegisterWithAEGP

Returns an AEGP_PluginID, which effect plug-ins can then use in calls to many functions throughout the AEGP API.
Effects should only call this function once, during `PF_Cmd_GLOBAL_SETUP`, and save the `AEGP_PluginID` for later use.
The first parameter can be any value, and the second parameter should be the plug-in’s match name.

```cpp
AEGP_RegisterWithAEGP(
 AEGP_GlobalRefcon global_refcon,
 const A_char *plugin_nameZ,
 AEGP_PluginID *plugin_id);

```

#### AEGP_GetMainHWND

Retrieves After Effects’ HWND; useful when displaying your own dialog on Windows.
If you don’t use After Effects’ HWND, your modal dialog will not prevent interaction with the windows behind, and pain will ensue.

```cpp
AEGP_GetMainHWND(
 void *main_hwnd);

```

#### AEGP_ShowHideAllFloaters

Toggles whether or not floating palettes are displayed.
Use this with care; users get twitchy when you unexpectedly change the UI on them.

```cpp
AEGP_ShowHideAllFloaters(
 A_Boolean include_tool_palB);

```

#### AEGP_PaintPalGetForeColor

Retrieves the foreground color from the paint palette.

```cpp
AEGP_PaintPalGetForeColor(
 AEGP_ColorVal *fore_colorP);

```

#### AEGP_PaintPalGetBackColor

Retrieves the background color from the paint palette.

```cpp
AEGP_PaintPalGetBackColor(
 AEGP_ColorVal *back_colorP);

```

#### AEGP_PaintPalSetForeColor

Sets the foreground color in the paint palette.

```cpp
AEGP_PaintPalSetForeColor(
 const AEGP_ColorVal *fore_colorP);

```

#### AEGP_PaintPalSetBackColor

Sets the background color in the paint palette.

```cpp
AEGP_PaintPalSetBackColor(
 const AEGP_ColorVal *back_colorP);

```

#### AEGP_CharPalGetFillColor

Retrieves the fill color from the character palette.

```cpp
AEGP_CharPalGetFillColor(
 A_Boolean *is_fcolor_definedPB,
 AEGP_ColorVal *fill_colorP);

```

#### AEGP_CharPalGetStrokeColor

Retrieves the stroke color from the character palette.

```cpp
AEGP_CharPalGetStrokeColor(
 A_Boolean *is_scolor_definedPB,
 AEGP_ColorVal *stroke_colorP);

```

#### AEGP_CharPalSetFillColor

Sets the fill color in the character palette.

```cpp
AEGP_CharPalSetFillColor(
 const AEGP_ColorVal *fill_colorP);

```

#### AEGP_CharPalSetStrokeColor

Sets the stroke color in the character palette.

```cpp
AEGP_CharPalSetStrokeColor(
 const AEGP_ColorVal *stroke_colorP);

```

#### AEGP_CharPalIsFillColorUIFrontmost

Returns whether or not the fill color is frontmost. If it isn’t, the stroke color is frontmost.

```cpp
AEGP_CharPalIsFillColorUIFrontmost(
 A_Boolean *is_fcolor_selectedPB);

```

#### AEGP_ConvertFpLongToHSFRatio

Returns an `A_Ratio` interpretation of the given `A_FpLong`. Useful for horizontal scale factor interpretation.

```cpp
AEGP_ConvertFpLongToHSFRatio(
 A_FpLong numberF,
 A_Ratio *ratioPR);

```

#### AEGP_ConvertHSFRatioToFpLong

Returns an `A_FpLong` interpretation of the given `A_Ratio`. Useful for horizontal scale factor interpretation.

```cpp
AEGP_ConvertHSFRatioToFpLong(
 A_Ratio ratioR,
 A_FpLong *numberPF);

```

#### AEGP_CauseIdleRoutinesToBeCalled

This routine is safe to call from threads other than the main thread.
It is asynchronous and will return before the idle handler is called.
The suite functions to get this function pointer are not thread safe; save it off in the main thread for use by the child thread.

```cpp
AEGP_CauseIdleRoutinesToBeCalled(void);

```

#### AEGP_GetSuppressInteractiveUI

Returns whether After Effects is running without a user interface.

```cpp
AEGP_GetSuppressInteractiveUI(
 A_Boolean *ui_is_suppressedPB);

```

#### AEGP_WriteToOSConsole

Sends a string to the OS console.

```cpp
AEGP_WriteToOSConsole(
 const A_char *textZ);

```

#### AEGP_WriteToDebugLog

Writes a message to the debug log, or to the OS command line if After Effects was launched with the “-debug” option.

```cpp
AEGP_WriteToDebugLog(
 const A_char *subsystemZ,
 const A_char *event_typeZ,
 const A_char *infoZ);

```

#### AEGP_GetLastErrorMessage

Retrieves the last error message displayed to the user, and its associated error number.
Pass in the size of the character buffer to be returned.

```cpp
AEGP_GetLastErrorMessage(
 A_long buffer_size,
 A_char *error_string,
 A_Err *error_num);

```

#### AEGP_IsScriptingAvailable

Returns `TRUE` if scripting is available to the plug-in.

```cpp
AEGP_IsScriptingAvailable(
 A_Boolean *outAvailablePB);

```

#### AEGP_ExecuteScript

Have After Effects execute a script.
The script passed in can be in either UTF-8 or the current application encoding (if platform_encodingB is passed in as TRUE).
The two out arguments are optional. The value of the last line of the script is what is passed back in outResultPH0.

```cpp
AEGP_ExecuteScript(
 AEGP_PluginID inPlugin_id,
 const A_char *inScriptZ,
 const A_Boolean platform_encodingB,
 AEGP_MemHandle *outResultPH0,
 AEGP_MemHandle *outErrStringPH0);

```

#### AEGP_HostIsActivated

Returns TRUE if the user has successfully activated After Effects.

```cpp
AEGP_HostIsActivated(
 A_Boolean *is_activatedPB);

```

#### AEGP_GetPluginPlatformRef

On macOS, returns a `CFBundleRef` to your Mach-O plug-in, or NULL for a CFM plug-in.
Always returns `NULL` on Windows (you can use an OS-specific entry point to capture your DLLInstance).

```cpp
AEGP_GetPluginPlatformRef(
 AEGP_PluginID plug_id,
 void **plat_refPPV);

```

#### AEGP_UpdateFontList

Rescans the system font list.

```cpp
AEGP_UpdateFontList();

```

#### AEGP_GetPluginPaths

New in CC. Returns a particular path associated with the plug-in:

- `AEGP_GetPathTypes_PLUGIN` - (Not Implemented) The path to the location of the plug-in itself.
- `AEGP_GetPathTypes_USER_PLUGIN` -The suite specific location of user specific plug-ins.
- `AEGP_GetPathTypes_ALLUSER_PLUGIN` - The suite specific location of plug-ins shared by all users.
- `AEGP_GetPathTypes_APP` - The After Effects .exe or .app location. Not plug-in specific.

```cpp
AEGP_GetPluginPaths(
 AEGP_PluginID aegp_plugin_id,
 AEGP_GetPathTypes path_type
 AEGP_MemHandle *unicode_pathPH);

```

## Persistent Data Suite

Plug-ins have read and write access to persistent data in After Effects’ preferences. AEGPs may add and manage their own persistent data using the following suite. The data entries are accessed by (section key, value key) pairs. It is recommended that plug-ins use their matchname as their section key, or as a prefix if using multiple section keys.

The available data types are `A_long`, `A_FpLong`, strings, and `void*`. `A_FpLongs` are stored with 6 decimal places of precision. There is no provision for specifying a different precision. String data supports the full 8-bit space. Only 0x00 is reserved for string ending. This makes them ideal for storing UTF-8 encoded strings, ISO 8859-1, and plain ASCII. Both section keys and value keys are of this type. For data types not represented by the simple data types provided, use data handles containing your custom data. void* unstructured data allows you to store any kind of data. You must pass in a size in bytes along with the data.

When calling any of the functions to retrieve the value of a key, if a given key is not found, the default value is both written to the blob and returned as the value; if no default is provided, a blank value will be written and returned.

Note that this data is stored in the application’s preferences, not in the project. As of 6.5, there is no way to store opaque AEGP-generated data in an After Effects project.

After Effects can handle plug-ins which change the preferences during their application; it checks the in-RAM copy of the prefs before acting upon pref-able settings, rather than relying on the saved prefs. It’s like we _planned_ this, or something!

### AEGP_PersistentDateSuite4

#### AEGP_GetApplicationBlob

Obtains the handle to all persistent application data. Modifying this will modify the application.
The `AEGP_PersistentType` parameter is new in CC, and should be set to one of the following:

- `AEGP_PersistentType_MACHINE_SPECIFIC`,
- `AEGP_PersistentType_MACHINE_INDEPENDENT`,
- `AEGP_PersistentType_MACHINE_INDEPENDENT_RENDER`,
- `AEGP_PersistentType_MACHINE_INDEPENDENT_OUTPUT`,
- `AEGP_PersistentType_MACHINE_INDEPENDENT_COMPOSITION`
- `AEGP_PersistentType_MACHINE_SPECIFIC_TEXT`,
- `AEGP_PersistentType_MACHINE_SPECIFIC_PAINT`

```cpp
AEGP_GetApplicationBlob(
 AEGP_PersistentType blob_type,
 AEGP_PersistentBlobH *blobPH);

```

#### AEGP_GetNumSections

Obtains the number of sections in the application blob.

```cpp
AEGP_GetNumSections(
 AEGP_PersistentBlobH blobH,
 A_long *num_sectionPL);

```

#### AEGP_GetSectionKeyByIndex

Obtains the key at the given index.

```cpp
AEGP_GetSectionKeyByIndex(
 AEGP_PersistentBlobH blobH,
 A_long section_index,
 A_long max_section_size,
 A_char *section_keyZ);

```

#### AEGP_DoesKeyExist

Returns whether or not a given key/value pair exists with the blob.

```cpp
AEGP_DoesKeyExist(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 A_Boolean *existsPB);

```

#### AEGP_GetNumKeys

Retrieves the number of value keys in the section.

```cpp
AEGP_GetNumKeys(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 A_long *num_keysPL);

```

#### AEGP_GetValueKeyByIndex

Retrieves the value of the indexed key.

```cpp
AEGP_GetValueKeyByIndex(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 A_long key_index,
 A_long max_key_size,
 A_char *value_keyZ);

```

::: tip

For the functions below, if a given key is not found, the default value is both written to the blob and returned as the value;
if no default is provided, a blank value will be written and returned.
:::

#### AEGP_GetDataHandle

Obtains the value associated with the given section’s key. If using in-memory data structures, watch for endian issues.

```cpp
AEGP_GetDataHandle(
 AEGP_PluginID plugin_id,
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 AEGP_MemHandle defaultH0,
 AEGP_MemHandle *valuePH);

```

#### AEGP_GetData

Obtains the data located at a given section’s value.

```cpp
AEGP_GetData(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 A_u_long data_sizeLu,
 const void *defaultPV0,
 void *bufPV);

```

#### AEGP_GetString

Obtains the string for a given section key’s value (and indicates its length in `actual_szLu0`).

```cpp
AEGP_GetString(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 const A_char *defaultZ0,
 A_u_long buf_sizeLu,
 char *bufZ,
 A_u_long *actual_szLu0);

```

#### AEGP_GetLong

Obtains the `A_long` associated with a given section key’s value.

```cpp
AEGP_GetLong(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 A_long defaultL,
 A_long *valuePL);

```

#### AEGP_GetFpLong

Obtains the `A_FpLong` associated with a given section key’s value.

```cpp
AEGP_GetFpLong(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 A_FpLong defaultF,
 A_FpLong *valuePF);

```

#### AEGP_GetTime

New in CC. Obtains the `A_Time` associated with a given section key’s value.

```cpp
AEGP_GetTime(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 const A_Time *defaultPT0,
 A_Time *valuePT);

```

#### AEGP_GetARGB

New in CC. Obtains the `PF_PixelFloat` associated with a given section key’s value.

```cpp
AEGP_GetARGB(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 const PF_PixelFloat *defaultP0,
 PF_PixelFloat *valueP);

```

#### AEGP_SetDataHandle

Sets the given section key’s value to the handle passed in.

```cpp
AEGP_SetDataHandle(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 const AEGP_MemHandle valueH);

```

#### AEGP_SetData

Sets the given section key’s value to the data contained in `dataPV`.

```cpp
AEGP_SetData(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 A_u_long data_sizeLu,
 const void *dataPV);

```

#### AEGP_SetString

Sets the given section key’s string to `strZ`.

```cpp
AEGP_SetString(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 const A_char *strZ);

```

#### AEGP_SetLong

Sets the given section key’s value to `valueL`.

```cpp
AEGP_SetLong(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 A_long valueL);

```

#### AEGP_SetFpLong

Sets the given section key’s value to `valueF`.

```cpp
AEGP_SetFpLong(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 A_FpLong valueF);

```

#### AEGP_SetTime

New in CC. Sets the given section key’s value to `valuePT`.

```cpp
AEGP_SetTime(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 A_Time *valuePT);

```

#### AEGP_SetARGB

New in CC. Sets the given section key’s value to `valueP`.

```cpp
AEGP_SetARGB(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ,
 PF_PixelFloat *valueP);

```

#### AEGP_DeleteEntry

Removes the given section’s value from the blob.

```cpp
AEGP_DeleteEntry(
 AEGP_PersistentBlobH blobH,
 const A_char *section_keyZ,
 const A_char *value_keyZ);

```

#### AEGP_GetPrefsDirectory

Get the path to the folder containing After Effects’ preference file.
The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetPrefsDirectory(
 AEGP_MemHandle *unicode_pathPH);

```

## Color Management

We’ve provided a function so AEGPs can obtain information on After Effects’ current color management settings.

### AEGP_ColorSettingsSuite2

#### AEGP_GetBlendingTables

Retrieves the current opaque `PF_EffectBlendingTables`, for use with `AEGP_TransferRect`.

```cpp
AEGP_GetBlendingTables(
 PR_RenderContextH render_contextH,
 PF_EffectBlendingTables *blending_tables);

```

#### AEGP_DoesViewHaveColorSpaceXform

Returns whether there is a colorspace transform applied to the current item view.

```cpp
AEGP_DoesViewHaveColorSpaceXform(
 AEGP_ItemViewP viewP,
 A_Boolean *has_xformPB);

```

#### AEGP_XformWorkingToViewColorSpace

Changes the view colorspace of the source to be the working colorspace of the destination.
Source and destination can be the same.

```cpp
AEGP_XformWorkingToViewColorSpace(
 AEGP_ItemViewP viewP,
 AEGP_WorldH srcH,
 AEGP_WorldH dstH);

```

#### AEGP_GetNewWorkingSpaceColorProfile

Retrieves the opaque current working space ICC profile. Must be disposed.
The “New” in the name does not indicate that you’re making up a new profile; rather, it’s part of our function naming standard;
nything with “New” in the name allocates something which the caller must dispose.

```cpp
AEGP_GetNewWorkingSpaceColorProfile(
 AEGP_PluginID aegp_plugin_id,
 AEGP_MemHandle *icc_profPH);

```

#### AEGP_GetNewColorProfileFromICCProfile

Retrieves a new `AEGP_ColorProfileP` from After Effects, representing the specified ICC profile.
The caller must dispose of the returned `AEGP_ColorProfileP` using `AEGP_DisposeColorProfile()`.

```cpp
AEGP_GetNewColorProfile FromICCProfile(
 AEGP_PluginID aegp_plugin_id,
 A_long icc_sizeL,
 const void *icc_dataPV,
 AEGP_ColorProfileP *profilePP);

```

#### AEGP_GetNewICCProfileFromColorProfile

Retrieves a new ICC profile (stored in an `AEGP_MemHandle`) representing the specified color profile.
Returned `AEGP_MemHandle` must be disposed by the caller.

```cpp
AEGP_GetNewICCProfile FromColorProfile(
 AEGP_PluginID plugin_id,
 AEGP_ConstColorProfileP profileP,
 AEGP_MemHandle *profilePH);

```

#### AEGP_GetNewColorProfileDescription

Returns a textual description of the specified color profile.
Text will be a null-terminated UTF16 string, which must be disposed by the caller.

```cpp
AEGP_GetNewColorProfileDescription(
 AEGP_PluginID aegp_plugin_id,
 AEGP_ConstColorProfileP profileP,
 AEGP_MemHandle *unicode_descPH);

```

#### AEGP_DisposeColorProfile

Disposes of a color profile, obtained using other functions in this suite.

```cpp
AEGP_DisposeColorProfile(
 AEGP_ColorProfileP profileP);

```

#### AEGP_GetColorProfileApproximateGamma

Returns a floating point number approximating the gamma setting used by the specified color profile.

```cpp
AEGP_GetColorProfileApproximateGamma(
 AEGP_ConstColorProfileP profileP,
 A_FpShort *approx_gammaP);

```

#### AEGP_IsRGBColorProfile

Returns whether the specified color profile is RGB.

```cpp
AEGP_IsRGBColorProfile(
 AEGP_ConstColorProfileP profileP,
 A_Boolean *is_rgbPB);

```

## Render Suites

Since we introduced the AEGP API, we’ve been asked to provide functions for retrieving rendered frames.

These function suites allows you to do just that.

First, specify what you want rendered in the [AEGP_RenderOptionsSuite4](#aegps-aegp-suites-render-options-suite) or [AEGP_LayerRenderOptionsSuite1](#aegps-aegp-suites-aegp-layerrenderoptionssuite).

Then do the rendering with [AEGP_RenderSuite4](#aegps-aegp-suites-aegp-rendersuite).

### AEGP_RenderOptionsSuite4

#### AEGP_NewFromItem

Returns the `AEGP_RenderOptionsH` associated with a given `AEGP_ItemH`.
If there are no options yet specified, After Effects passes back an `AEGP_RenderOptionsH` with render time set to 0, time step set to the current frame duration, field render set to `PF_Field_FRAME`, and the depth set to the highest resolution specified within the item.

```cpp
AEGP_NewFromItem(
 AEGP_PluginID plugin_id,
 AEGP_ItemH itemH,
 AEGP_RenderOptionsH *optionsPH);

```

#### AEGP_Duplicate

Duplicates an `AEGP_RenderOptionsH` into `copyPH`.

```cpp
AEGP_Duplicate(
 AEGP_PluginID plugin_id,
 AEGP_RenderOptionsH optionsH,
 AEGP_RenderOptionsH *copyPH);

```

#### AEGP_Dispose

Deletes an `AEGP_RenderOptionsH`.

```cpp
AEGP_Dispose(
 AEGP_RenderOptionsH optionsH);

```

#### AEGP_SetTime

Sets the render time of an `AEGP_RenderOptionsH`.

```cpp
AEGP_SetTime(
 AEGP_RenderOptionsH optionsH,
 A_Time time);

```

#### AEGP_GetTime

Retrieves the render time of the given `AEGP_RenderOptionsH`.

```cpp
AEGP_GetTime(
 AEGP_RenderOptionsH optionsH,
 A_Time *timeP);

```

#### AEGP_SetTimeStep

Specifies the time step (duration of a frame) for the referenced `AEGP_RenderOptionsH`.

```cpp
AEGP_SetTimeStep(
 AEGP_RenderOptionsH optionsH,
 A_Time time_step);

```

#### AEGP_GetTimeStep

Retrieves the time step (duration of a frame) for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_GetTimeStep(
 AEGP_RenderOptionsH optionsH,
 A_Time *timePT);

```

#### AEGP_SetFieldRender

Specifies the field settings for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_SetFieldRender(
 AEGP_RenderOptionsH optionsH,
 PF_Field field_render);

```

#### AEGP_GetFieldRender

Retrieves the field settings for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_GetFieldRender(
 AEGP_RenderOptionsH optionsH,
 PF_Field *field_renderP);

```

#### AEGP_SetWorldType

Specifies the AEGP_WorldType of the output of a given `AEGP_RenderOptionsH`.

```cpp
AEGP_SetWorldType(
 AEGP_RenderOptionsH optionsH,
 AEGP_WorldType type);

```

`AEGP_WorldType` will be either `AEGP_WorldType_8` or `AEGP_WorldType_16`

#### AEGP_GetWorldType

Retrieves the `AEGP_WorldType` of the given `AEGP_RenderOptionsH`.

```cpp
AEGP_GetWorldType(
 AEGP_RenderOptionsH optionsH,
 AEGP_WorldType *typeP);

```

#### AEGP_SetDownsampleFactor

Specifies the downsample factor (with independent horizontal and vertical settings) for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_SetDownsampleFactor(
 AEGP_RenderOptionsH optionsH,
 A_short x,
 A_short y);

```

#### AEGP_GetDownsampleFactor

Retrieves the downsample factor for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_GetDownsampleFactor(
 AEGP_RenderOptionsH optionsH,
 A_short *xP,
 A_short *yP);

```

#### AEGP_SetRegionOfInterest

Specifies the region of interest sub-rectangle for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_SetRegionOfInterest(
 AEGP_RenderOptionsH optionsH,
 const A_LRect *roiP)

```

#### AEGP_GetRegionOfInterest

Retrieves the region of interest sub-rectangle for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_GetRegionOfInterest(
 AEGP_RenderOptionsH optionsH,
 A_LRect *roiP);

```

#### AEGP_SetMatteMode

Specifies the `AEGP_MatteMode` for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_SetMatteMode(
 AEGP_RenderOptionsH optionsH,
 AEGP_MatteMode mode);

```

`AEGP_MatteMode` will be one of the following:

- `AEGP_MatteMode_STRAIGHT`
- `AEGP_MatteMode_PREMUL_BLACK`
- `AEGP_MatteMode_PREMUL_BG_COLOR`

#### AEGP_GetMatteMode

Retrieves the `AEGP_MatteMode` for the given `AEGP_RenderOptionsH`.

```cpp
AEGP_GetMatteMode(
 AEGP_RenderOptionsH optionsH,
 AEGP_MatteMode *modeP);

```

#### AEGP_GetChannelOrder

Gets the `AEGP_ChannelOrder` for the given `AEGP_RenderOptionsH`.
`AEGP_ChannelOrder` will be either `AEGP_ChannelOrder_ARGB` or `AEGP_ChannelOrder_BGRA`.

```cpp
AEGP_GetChannelOrder(
 AEGP_RenderOptionsH optionsH,
 AEGP_ChannelOrder *orderP);

```

Factoid: this was added to facilitate live linking with Premiere Pro.

#### AEGP_SetChannelOrder

Sets the `AEGP_ChannelOrder` of the `AEGP_RenderOptionsH`.

```cpp
AEGP_SetChannelOrder(
 AEGP_RenderOptionsH optionsH,
 AEGP_ChannelOrder order);

```

#### AEGP_GetRenderGuideLayers

Passes back a boolean that is true if the render guide layers setting is on.

```cpp
AEGP_GetRenderGuideLayers)(
 AEGP_RenderOptionsH optionsH,
 A_Boolean *will_renderPB);

```

#### AEGP_SetRenderGuideLayers

Specify whether or not to render guide layers.

```cpp
AEGP_SetRenderGuideLayers)(
 AEGP_RenderOptionsH optionsH,
 A_Boolean render_themB);

```

#### AEGP_GetRenderQuality

Get the render quality of the render queue item.
Quality can be either `AEGP_ItemQuality_DRAFT` or `AEGP_ItemQuality_BEST`.

```cpp
AEGP_GetRenderQuality)(
 AEGP_RenderOptionsH optionsH,
 AEGP_ItemQuality *qualityP);

```

#### AEGP_SetRenderQuality

Set the render quality of the render queue item.

```cpp
AEGP_GetRenderQuality)(
 AEGP_RenderOptionsH optionsH,
 AEGP_ItemQuality quality);

```

### AEGP_LayerRenderOptionsSuite1

::: tip

New in 13.0
:::

#### AEGP_NewFromLayer

Returns the `AEGP_LayerRenderOptionsH` associated with a given `AEGP_LayerH`.
Render time is set to the layer’s current time, time step is set to layer’s frame duration,
ROI to the layer’s nominal bounds, and EffectsToRender to “all”.
`optionsPH` must be disposed by calling code.

```cpp
AEGP_NewFromLayer(
 AEGP_PluginID plugin_id,
 AEGP_LayerH layerH,
 AEGP_LayerRenderOptionsH *optionsPH);

```

#### AEGP_NewFromUpstreamOfEffect

Returns the `AEGP_LayerRenderOptionsH` from the layer associated with a given `AEGP_EffectRefH`.
Render time is set to the layer’s current time, time step is set to layer’s frame duration,
ROI to the layer’s nominal bounds, and EffectsToRender to the index of `effectH`.
`optionsPH` must be disposed by calling code.

```cpp
AEGP_NewFromUpstreamOfEffect(
 AEGP_PluginID plugin_id,
 AEGP_EffectRefH effectH,
 AEGP_LayerRenderOptionsH *optionsPH);

```

#### AEGP_Duplicate

Duplicates an `AEGP_LayerRenderOptionsH` into `copyPH`.

```cpp
AEGP_Duplicate(
 AEGP_PluginID plugin_id,
 AEGP_LayerRenderOptionsH optionsH,
 AEGP_LayerRenderOptionsH *copyPH);

```

#### AEGP_Dispose

Deletes an `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_Dispose(
 AEGP_LayerRenderOptionsH optionsH);

```

#### AEGP_SetTime

Sets the render time of an `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_SetTime(
 AEGP_LayerRenderOptionsH optionsH,
 A_Time time);

```

#### AEGP_GetTime

Retrieves the render time of the given `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_GetTime(
 AEGP_LayerRenderOptionsH optionsH,
 A_Time *timeP);

```

#### AEGP_SetTimeStep

Specifies the time step (duration of a frame) for the referenced `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_SetTimeStep(
 AEGP_LayerRenderOptionsH optionsH,
 A_Time time_step);

```

#### AEGP_GetTimeStep

Retrieves the time step (duration of a frame) for the given `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_GetTimeStep(
 AEGP_LayerRenderOptionsH optionsH,
 A_Time *timePT);

```

#### AEGP_SetWorldType

Specifies the AEGP_WorldType of the output of a given `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_SetWorldType(
 AEGP_LayerRenderOptionsH optionsH,
 AEGP_WorldType type);

```

`AEGP_WorldType` will be either `AEGP_WorldType_8` or `AEGP_WorldType_16`

#### AEGP_GetWorldType

Retrieves the AEGP_WorldType of the given `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_GetWorldType(
 AEGP_LayerRenderOptionsH optionsH,
 AEGP_WorldType *typeP);

```

#### AEGP_SetDownsampleFactor

Specifies the downsample factor (with independent horizontal and vertical settings) for the given `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_SetDownsampleFactor(
 AEGP_LayerRenderOptionsH optionsH,
 A_short x,
 A_short y);

```

#### AEGP_GetDownsampleFactor

Retrieves the downsample factor for the given `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_GetDownsampleFactor(
 AEGP_LayerRenderOptionsH optionsH,
 A_short *xP,
 A_short *yP);

```

#### AEGP_SetMatteMode

Specifies the AEGP_MatteMode for the given `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_SetMatteMode(
 AEGP_LayerRenderOptionsH optionsH,
 AEGP_MatteMode mode);

```

AEGP_MatteMode will be one of the following:

- `AEGP_MatteMode_STRAIGHT`
- `AEGP_MatteMode_PREMUL_BLACK`
- `AEGP_MatteMode_PREMUL_BG_COLOR`

#### AEGP_GetMatteMode

Retrieves the AEGP_MatteMode for the given `AEGP_LayerRenderOptionsH`.

```cpp
AEGP_GetMatteMode(
 AEGP_LayerRenderOptionsH optionsH,
 AEGP_MatteMode *modeP);

```

### AEGP_RenderSuite4

#### AEGP_RenderAndCheckoutFrame

Retrieves an `AEGP_FrameReceiptH` (not the actual pixels) for the frame requested.
Check in this receipt using `AEGP_CheckinFrame` to release memory.
Create the `AEGP_RenderOptionsH` using the [AEGP_RenderOptionsSuite4](#aegps-aegp-suites-render-options-suite).
Optionally, the AEGP can pass a function to be called by After Effects if the user cancels the current render, as well as a refcon (constant reference to opaque data) for use during that function.

```cpp
AEGP_RenderAndCheckoutFrame(
 AEGP_RenderOptionsH optionsH,
 AEGP_RenderSuiteCheckForCancel cancel_functionP0,
 AEGP_CancelRefcon cancel_function_refconP0,
 AEGP_FrameReceiptH *receiptPH);

```

#### AEGP_RenderAndCheckoutLayerFrame

New in CC 2014. This allows frame checkout of a layer with effects applied at non-render time.
This is useful for an operation that requires the frame, for example, when a button is clicked and it is acceptable to wait for a moment while it is rendering.
Note: Since it is not asynchronous, it will not solve the general problem where custom UI needs to draw based on the frame.
Retrieves an `AEGP_FrameReceiptH` (not the actual pixels) for the layer frame requested. Check in this receipt using `AEGP_CheckinFrame` to release memory.
Create the `AEGP_LayerRenderOptionsH` using `AEGP_NewFromUpstreamOfEffect()`, in [AEGP_LayerRenderOptionsSuite1](#aegps-aegp-suites-aegp-layerrenderoptionssuite).
You can actually use `AEGP_NewFromLayer()` to get other layer param’s layers with their effects applied.
However, be careful. If you do it in your effect A, and there’s an effect B on the other layer that does the same thing during rendering, you’d create an infinite loop.
If you’re not doing it for render purposes then it could be okay.
Optionally, the AEGP can pass a function to be called by After Effects if the user cancels the current render, as well as a refcon (constant reference to opaque data) for use during that function.

```cpp
AEGP_RenderAndCheckoutLayerFrame(
 AEGP_LayerRenderOptionsH optionsH,
 A_Boolean render_plain_layer_frameB,
 AEGP_RenderSuiteCheckForCancel cancel_functionP0,
 AEGP_CancelRefcon cancel_function_refconP0,
 AEGP_FrameReceiptH *receiptPH);

```

#### AEGP_CheckinFrame

Call this function as soon as your AEGP is done accessing the frame.
After Effects makes caching decisions based on which frames are checked out, so don’t hog them!

```cpp
AEGP_CheckinFrame(
 AEGP_FrameReceiptH receiptH);

```

#### AEGP_GetReceiptWorld

Retrieves the pixels (`AEGP_WorldH`) associated with the referenced `AEGP_FrameReceiptH`.

```cpp
AEGP_GetReceiptWorld(
 AEGP_FrameReceiptH receiptH,
 AEGP_WorldH *worldPH);

```

#### AEGP_GetRenderedRegion

Retrieves an `A_LRect` containing the region of the `AEGP_FrameReceiptH's` `AEGP_WorldH` that has already been rendered.
Remember that it’s possible for only those portions of an image that have been changed to be rendered, so it’s important to be able to check whether or not that includes the portion you need.

```cpp
AEGP_GetRenderedRegion(
 AEGP_FrameReceiptH receiptH,
 A_LRect *regionP);

```

#### AEGP_IsRenderedFrameSufficient

Given two sets of `AEGP_RenderOptionsH`, After Effects will return `TRUE` if the already-rendered pixels are still valid for the proposed `AEGP_RenderOptionsH`.

```cpp
AEGP_IsRenderedFrameSufficient(
 AEGP_RenderOptionsH rendered_optionsH,
 AEGP_RenderOptionsH proposed_optionsH,
 A_Boolean *is_sufficientPB);

```

#### AEGP_RenderNewItemSoundData

Obtains an `AEGP_ItemH's` audio at the given time, of the given duration, in the given format.
The plug-in must dispose of the returned `AEGP_SoundDataH` (which may be NULL if no audio is available).

```cpp
AEGP_RenderNewItemSoundData(
 AEGP_ItemH itemH,
 const A_Time *start_timePT,
 const A_Time *durationPT,
 const AEGP_SoundDataFormat *formatP,
 AEGP_SoundDataH *new_dataPH);

```

NOTE: This function, if called as part of `AEGP_ItemSuite2`, provides a render interruptible using mouse clicks, unlike the version published here in `AEGP_RenderSuite`.

#### AEGP_GetCurrentTimestamp

Retrieves the current `AEGP_TimeStamp` of the project.
The `AEGP_TimeStamp` is updated whenever an item is touched in a way that affects rendering.

```cpp
AEGP_GetCurrentTimestamp(
 AEGP_TimeStamp *time_stampP);

```

#### AEGP_HasItemChangedSinceTimestamp

Returns whether the video of an AEGP_ItemH has changed since the given `AEGP_TimeStamp`.
Note: this does not track changes in audio.

```cpp
AEGP_HasItemChangedSinceTimestamp(
 AEGP_ItemH itemH,
 const A_Time *start_timeP,
 const A_Time *durationP,
 const AEGP_TimeStamp *time_stampP,
 A_Boolean *changedPB);

```

#### AEGP_IsItemWorthwhileToRender

Returns whether this frame would be worth rendering externally and checking in to the cache.
A speculative renderer should check this twice: before sending the frame out to render and when it is complete, before calling `AEGP_NewPlatformWorld()` and checking in.
This function is to be used with `AEGP_HasItemChangedSinceTimestamp()`, not alone.

```cpp
AEGP_IsItemWorthwhileToRender(
 AEGP_RenderOptionsH roH,
 const AEGP_TimeStamp *time_stampP,
 A_Boolean *worthwhilePB);

```

#### AEGP_CheckinRenderedFrame

Provide a rendered frame (`AEGP_PlatformWorldH`) to After Effects, which adopts it.
`ticksL` is the approximate time required to render the frame.

```cpp
AEGP_CheckinRenderedFrame(
 AEGP_RenderOptionsH roH,
 const AEGP_TimeStamp* time_stampP,
 A_u_long ticksL,
 AEGP_PlatformWorldH imageH);

```

#### AEGP_GetReceiptGuid

New in CS6. Retrieve a GUID for a rendered frame. The memory handle passed back must be disposed.

```cpp
AEGP_GetReceiptGuid(
 AEGP_FrameReceiptH receiptH,
 AEGP_MemHandle *guidMH)

```

## The AEGP_World As We Know It

`AEGP_Worlds` are the common format used throughout the AEGP APIs to describe frames of pixels.

### AEGP_WorldSuite3

#### AEGP_New

Returns an allocated, initialized `AEGP_WorldH`.

```cpp
AEGP_New(
 AEGP_PluginID plugin_id,
 AEGP_WorldType type,
 A_long widthL,
 A_long heightL,
 AEGP_WorldH *worldPH);

```

#### AEGP_Dispose

Disposes of an `AEGP_WorldH`. Use this on every world you allocate.

```cpp
AEGP_Dispose(
 AEGP_WorldH worldH);

```

#### AEGP_GetType

Returns the type of a given `AEGP_WorldH`.

```cpp
AEGP_GetType(
 AEGP_WorldH worldH,
 AEGP_WorldType **typeP);

```

AEGP_WorldType will be one of the following:

- `AEGP_WorldType_8`,
- `AEGP_WorldType_16`,
- `AEGP_WorldType_32`

#### AEGP_GetSize

Returns the width and height of the given `AEGP_WorldH`.

```cpp
AEGP_GetSize(
 AEGP_WorldH worldH,
 A_long *widthPL,
 A_long *heightPL);

```

#### AEGP_GetRowBytes

Returns the rowbytes for the given `AEGP_WorldH`.

```cpp
AEGP_GetRowBytes(
 AEGP_WorldH worldH,
 A_u_long *row_bytesPL);

```

#### AEGP_GetBaseAddr8

Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions.
Will return an error if used on a non-8bpc world.

```cpp
AEGP_GetBaseAddr8(
 AEGP_WorldH worldH,
 PF_Pixel8 **base_addrP);

```

#### AEGP_GetBaseAddr16

Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions.
Will return an error if used on a non-16bpc world.

```cpp
AEGP_GetBaseAddr16(
 AEGP_WorldH worldH,
 PF_Pixel16 **base_addrP);

```

#### AEGP_GetBaseAddr32

Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions.
Will return an error if used on a non-32bpc world.

```cpp
AEGP_GetBaseAddr32(
 AEGP_WorldH worldH,
 PF_PixelFloat **base_addrP);

```

#### AEGP_FillOutPFEffectWorld

Populates and returns a PF_EffectWorld representing the given `AEGP_WorldH`, for use with numerous pixel processing callbacks.
NOTE: This does not give your plug-in ownership of the world referenced; destroy the source `AEGP_WorldH` only if you allocated it.
It just fills out the provided `PF_EffectWorld` to point to the same pixel buffer.

```cpp
AEGP_FillOutPFEffectWorld(
 AEGP_WorldH worldH,
 PF_EffectWorld *pf_worldP);

```

#### AEGP_FastBlur

Performs a fast blur on a given `AEGP_WorldH`.

```cpp
AEGP_FastBlur(
 A_FpLong radiusF,
 PF_ModeFlags mode,
 PF_Quality quality,
 AEGP_WorldH worldH);

```

#### AEGP_NewPlatformWorld

Creates a new `AEGP_PlatformWorldH` (a pixel world native to the execution platform).

```cpp
AEGP_NewPlatformWorld(
 AEGP_PluginID plugin_id,
 AEGP_WorldType type,
 A_long widthL,
 A_long heightL,
 AEGP_PlatformWorldH *worldPH);

```

#### AEGP_DisposePlatformWorld

Disposes of an `AEGP_PlatformWorldH`.

```cpp
AEGP_DisposePlatformWorld(
 AEGP_PlatformWorldH worldH);

```

#### AEGP_NewReferenceFromPlatformWorld

Retrieves an AEGP_WorldH referring to the given `AEGP_PlatformWorldH`.
NOTE: This doesn’t allocate a new world, it simply provides a reference to an existing one.

```cpp
AEGP_NewReferenceFromPlatformWorld(
 AEGP_PluginID plugin_id,
 AEGP_PlatformWorldH plat_worldH,
 AEGP_WorldH *worldPH);

```

## Track Mattes and Transform Functions

Use the `AEGP_CompositeSuite` to copy pixel worlds, operate on track mattes, and apply transfer functions.

### AEGP_CompositeSuite2

#### AEGP_ClearAlphaExceptRect

For the given `PF_EffectWorld`, sets the alpha to fully transparent except for the specified rectangle.

```cpp
AEGP_ClearAlphaExceptRect(
 A_Rect *clipped_dst_rectPR,
 PF_EffectWorld *dstP);

```

#### AEGP_PrepTrackMatte

Mattes the pixels in a `PF_EffectWorld` with the `PF_Pixel` described in src_masks, putting the output into an array of pixels dst_mask.
NOTE: Unlike most of the other pixel mangling functions provided by After Effects, this one doesn’t take `PF_EffectWorld` arguments; rather, you can simply pass the data pointer from within the `PF_EffectWorld`.
This can be confusing, but as a bonus, the function pads output appropriately so that `num_pix` pixels are always output.

```cpp
AEGP_PrepTrackMatte(
 A_long num_pix,
 A_Boolean deepB,
 const PF_Pixel *src_mask,
 PF_MaskFlags mask_flags,
 PF_Pixel *dst_mask);

```

#### AEGP_TransferRect

Blends two `PF_EffectWorlds` using a transfer mode, with an optional mask.
Pass NULL for the `blend_tablesP0` parameter to perform blending in the current working color space.

```cpp
AEGP_TransferRect(
 PF_Quality quality,
 PF_ModeFlags m_flags,
 PF_Field field,
 const A_Rect *src_rec,
 const PF_EffectWorld *src_world,
 const PF_CompositeMode *comp_mode,
 PF_EffectBlendingTables blend_tablesP0,
 const PF_MaskWorld *mask_world0,
 A_long dest_x,
 A_long dest_y,
 PF_EffectWorld *dst_world);

```

#### AEGP_CopyBits_LQ

Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at low quality.

```cpp
AEGP_CopyBits_LQ(
 PF_EffectWorld *src_worldP,
 A_Rect *src_r,
 A_Rect *dst_r,
 PF_EffectWorld *dst_worldP);

```

#### AEGP_CopyBits_HQ_Straight

Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at high quality, with a straight alpha channel.

```cpp
AEGP_CopyBits_HQ_Straight(
 PF_EffectWorld *src,
 A_Rect *src_r,
 A_Rect *dst_r,
 PF_EffectWorld *dst);

```

#### AEGP_CopyBits_HQ_Premul

Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at high quality, premultiplying the alpha channel.

```cpp
AEGP_CopyBits_HQ_Premul(
 PF_EffectWorld *src,
 A_Rect *src_r,
 A_Rect *dst_r,
 PF_EffectWorld *dst);

```

## Work With Audio

`AEGP_SoundDataSuite` allows AEGPs to obtain and manipulate the audio associated with compositions and footage items.

Audio-only items may be added to the render queue using `AEGP_RenderNewItemSoundData()`.

### AEGP_SoundDateSuite1

#### AEGP_NewSoundData

Creates a new `AEGP_SoundDataH`, of which the plug-in must dispose.

```cpp
AEGP_NewSoundData(
 const AEGP_SoundDataFormat *formatP,
 AEGP_SoundDataH *new_dataPH);

```

#### AEGP_DisposeSoundData

Frees an `AEGP_SoundDataH`.

```cpp
AEGP_DisposeSoundData(
 AEGP_SoundDataH sound_dataH);

```

#### AEGP_GetSoundDataFormat

Obtains information about the format of a given `AEGP_SoundDataH`.

```cpp
AEGP_GetSoundDataFormat(
 AEGP_SoundDataH soundH,
 AEGP_SoundDataFormat *formatP);

```

#### AEGP_LockSoundDataSamples

Locks the `AEGP_SoundDataH` in memory.

```cpp
AEGP_LockSoundDataSamples(
 AEGP_SoundDataH soundH,
 void **samples);

```

#### AEGP_UnlockSoundDataSamples

Unlocks an `AEGP_SoundDataH`.

```cpp
AEGP_UnlockSoundDataSamples(
 AEGP_SoundDataH soundH);

```

#### AEGP_GetNumSamples

Obtains the number of samples in the given `AEGP_SoundDataH`.

```cpp
AEGP_GetNumSamples(
 AEGP_SoundDataH soundH,
 A_long *numsamplesPL);

```

## Audio Settings

Audio render settings are represented using the `AEGP_SoundDataFormat`.

```cpp
struct AEGP_SoundDataFormat {
 A_FpLong sample_rateF;
 AEGP_SoundEncoding encoding;
 A_long bytes_per_sampleL;
 A_long num_channelsL; // 1 for mono, 2 for stereo
} AEGP_SoundDataFormat;

```

`bytes_per_sampleL` is always either `1`, `2`, or `4`, and is ignored if float encoding is specified.

`AEGP_SoundEncoding` is one of the following:

> - `AEGP_SoundEncoding_UNSIGNED_PCM`
> - `AEGP_SoundEncoding_SIGNED_PCM`
> - `AEGP_SoundEncoding_FLOAT`

## Render Queue Suite

This suite allows AEGPs to add items the to render queue (using default options), and control the basic state of the render queue.

### AEGP_RenderQueueSuite1

#### AEGP_AddCompToRenderQueue

Adds a composition to the render queue, using default options.

```cpp
AEGP_AddCompToRenderQueue(
 AEGP_CompH compH,
 const A_char* pathZ);

```

#### AEGP_SetRenderQueueState

Sets the render queue to one of three valid states. It is not possible to go from stopped to paused.

```cpp
AEGP_SetRenderQueueState(
 AEGP_RenderQueueState state);

```

- `AEGP_RenderQueueState_STOPPED`
- `AEGP_RenderQueueState_PAUSED`
- `AEGP_RenderQueueState_RENDERING`

#### AEGP_GetRenderQueueState

Obtains the current render queue state.

```cpp
AEGP_GetRenderQueueState(
 AEGP_RenderQueueState *stateP);

```

## Render Queue Item Suite

Manipulate all aspects of render queue items using this suite.

### AEGP_RQItemSuite4

#### AEGP_GetNumRQItems

Returns the number of items currently in the render queue.

```cpp
AEGP_GetNumRQItems(
 A_long *num_itemsPL);

```

#### AEGP_GetRQItemByIndex

Returns an `AEGP_RQItemRefH` referencing the index’d item.

```cpp
AEGP_GetRQItemByIndex(
 A_long rq_item_index,
 AEGP_RQItemRefH *rq_item_refPH);

```

#### AEGP_GetNextRQItem

Returns the next `AEGP_RQItemRefH`, for iteration purposes.
To get the first `AEGP_RQItemRefH`, pass `RQ_ITEM_INDEX_NONE` for the `current_rq_itemH`.

```cpp
AEGP_GetNextRQItem(
 AEGP_RQItemRefH current_rq_itemH,
 AEGP_RQItemRefH *next_rq_itemPH);

```

#### AEGP_GetNumOutputModulesForRQItem

Returns the number of output modules applied to the given `AEGP_RQItemRefH`.

```cpp
AEGP_GetNumOutputModulesForRQItem(
 AEGP_RQItemRefH rq_itemH,
 A_long *num_outmodsPL);

```

#### AEGP_GetRenderState

Returns TRUE if the `AEGP_RQItemRefH` is set to render (once the user clicks the Render button).

```cpp
AEGP_GetRenderState(
 AEGP_RQItemRefH rq_itemH,
 A_Boolean *will_renderPB);

```

#### AEGP_SetRenderState

Controls whether or not the `AEGP_RQItemRefH` will render when the user next clicks the Render button.
Returns an error if called during rendering.
This function will return:* `Err_PARAMETER` if you try to call while `AEGP_RenderQueueState` isn’t `AEGP_RenderQueueState_STOPPED`,

- `Err_RANGE` if you pass a status that is illegal in any case, and
- `Err_PARAMETER` if you try to pass a status that doesn’t make sense (like trying to queue something for which there’s no output path)

```cpp
AEGP_SetRenderState(
 AEGP_RQItemRefH rq_itemH,
 A_Boolean renderB);

```

#### AEGP_GetStartedTime

Returns the time (in seconds, since 1904) that rendering began.

```cpp
AEGP_GetStartedTime(
 AEGP_RQItemRefH rq_itemH,
 A_Time *started_timePT);

```

#### AEGP_GetElapsedTime

Returns the time elapsed since rendering began.

```cpp
AEGP_GetElapsedTime(
 AEGP_RQItemRefH rq_itemH,
 A_Time *render_timePT);

```

#### AEGP_GetLogType

Returns the log type for the referenced `AEGP_RQItemRefH`.

```cpp
AEGP_GetLogType(
 AEGP_RQItemRefH rq_itemH,
 AEGP_LogType *logtypeP);

```

`AEGP_LogtType` will have one of the following values:

- `AEGP_LogType_NONE`
- `AEGP_LogType_ERRORS_ONLY`
- `AEGP_LogType_PLUS_SETTINGS`
- `AEGP_LogType_PER_FRAME_INFO`

#### AEGP_SetLogType

Specifies the log type to be used with the referenced `AEGP_RQItemRefH`.

```cpp
AEGP_SetLogType(
 AEGP_RQItemRefH rq_itemH,
 AEGP_LogType logtype);

```

#### AEGP_RemoveOutputModule

Removes the specified output module from the referenced `AEGP_RQItemRefH`.

```cpp
AEGP_RemoveOutputModule(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH);

```

#### AEGP_GetComment

Updated to support Unicode in `RQItemSuite4`, available in 14.1.
Retrieves the comment associated with the referenced `AEGP_RQItemRefH`.

```cpp
AEGP_GetComment(
 AEGP_RQItemRefH rq_itemH,
 AEGP_MemHandle *unicodeH);

```

#### AEGP_SetComment

Updated to support Unicode in `RQItemSuite4`, available in 14.1.
Specifies the comment associated with the referenced `AEGP_RQItemRefH`.

```cpp
AEGP_SetComment(
 AEGP_RQItemRefH rq_itemH,
 const A_UTF16Char *commentZ);

```

#### AEGP_GetCompFromRQItem

Retrieves the `AEGP_CompH` associated with the `AEGP_RQItemRefH`.

```cpp
AEGP_GetCompFromRQItem(
 AEGP_RQItemRefH rq_itemH,
 AEGP_CompH *compPH);

```

#### AEGP_DeleteRQItem

Deletes the render queue item. Undoable.

```cpp
AEGP_DeleteRQItem(
 AEGP_RQItemRefH rq_itemH);

```

## Render Queue Monitor Suite

New in CS6. This suite provides all the info a render queue manager needs to figure out what is happening at any point in a render.

### AEGP_RenderQueueMonitorSuite1

#### AEGP_RegisterListener

Register a set of plug-in-defined functions to be called by the render queue.
Use the refcon to pass in data that you want to use later on when your plug-in-defined functions in `AEGP_RQM_FunctionBlock1` are called later.
It may be set it to NULL if you don’t need it.

```cpp
AEGP_RegisterListener(
 AEGP_PluginID aegp_plugin_id,
 AEGP_RQM_Refcon aegp_refconP,
 const AEGP_RQM_FunctionBlock1 *fcn_blockP);

```

The `AEGP_RQM_FunctionBlock1` is defined as follows:

```cpp
struct _AEGP_RQM_FunctionBlock1 {
 A_Err (*AEGP_RQM_RenderJobStarted)(
 AEGP_RQM_BasicData *basic_dataP,
 AEGP_RQM_SessionId jobid);

 A_Err (*AEGP_RQM_RenderJobEnded)(
 AEGP_RQM_BasicData *basic_dataP,
 AEGP_RQM_SessionId jobid);

 A_Err (*AEGP_RQM_RenderJobItemStarted)(
 AEGP_RQM_BasicData *basic_dataP,
 AEGP_RQM_SessionId jobid,
 AEGP_RQM_ItemId itemid);

 A_Err (*AEGP_RQM_RenderJobItemUpdated)(
 AEGP_RQM_BasicData *basic_dataP,
 AEGP_RQM_SessionId jobid,
 AEGP_RQM_ItemId itemid,
 AEGP_RQM_FrameId frameid);

 A_Err (*AEGP_RQM_RenderJobItemEnded)(
 AEGP_RQM_BasicData *basic_dataP,
 AEGP_RQM_SessionId jobid,
 AEGP_RQM_ItemId itemid,
 AEGP_RQM_FinishedStatus fstatus);

 A_Err (*AEGP_RQM_RenderJobItemReportLog)(
 AEGP_RQM_BasicData *basic_dataP,
 AEGP_RQM_SessionId jobid,
 AEGP_RQM_ItemId itemid,
 A_Boolean isError,
 AEGP_MemHandle logbuf);
} AEGP_RQM_FunctionBlock1;

```

`AEGP_RQM_FinishedStatus` will be one of the following:

- `AEGP_RQM_FinishedStatus_UNKNOWN`,
- `AEGP_RQM_FinishedStatus_SUCCEEDED`,
- `AEGP_RQM_FinishedStatus_ABORTED`,
- `AEGP_RQM_FinishedStatus_ERRED`

The AEGP_RQM_BasicData is defined below.

```cpp
struct _AEGP_RQM_BasicData {
 const struct SPBasicSuite *pica_basicP;
 A_long aegp_plug_id;
 AEGP_RQM_Refcon aegp_refconPV;
} AEGP_RQM_BasicData;

```

#### AEGP_DeregisterListener

Deregister from the render queue.

```cpp
AEGP_DeregisterListener(
 AEGP_PluginID aegp_plugin_id,
 AEGP_RQM_Refcon aegp_refconP);

```

#### AEGP_GetProjectName

Obtain the current project name.
The project name is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetProjectName(
 AEGP_RQM_SessionId sessid,
 AEGP_MemHandle *utf_project_namePH0);

```

#### AEGP_GetAppVersion

Obtain the app version.
The app version is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetAppVersion(
 AEGP_RQM_SessionId sessid,
 AEGP_MemHandle *utf_app_versionPH0);

```

#### AEGP_GetNumJobItems

Obtain the number of job items.

```cpp
AEGP_GetNumJobItems(
 AEGP_RQM_SessionId sessid,
 A_long *num_jobitemsPL);

```

#### AEGP_GetJobItemID

Get the job with the index specified.

```cpp
AEGP_GetJobItemID(
 AEGP_RQM_SessionId sessid,
 A_long jobItemIndex,
 AEGP_RQM_ItemId *jobItemID);

```

#### AEGP_GetNumJobItemRenderSettings

Get the number of render settings for the job with the index specified.

```cpp
AEGP_GetNumJobItemRenderSettings(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long *num_settingsPL);

```

#### AEGP_GetJobItemRenderSetting

Get a specific render setting of a specific job.
The setting name and value are handles to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetJobItemRenderSetting(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long settingIndex,
 AEGP_MemHandle *utf_setting_namePH0,
 AEGP_MemHandle *utf_setting_valuePH0);

```

#### AEGP_GetNumJobItemOutputModules

Get the number of output modules for the job with the index specified.

```cpp
AEGP_GetNumJobItemOutputModules(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long *num_outputmodulesPL);

```

#### AEGP_GetNumJobItemOutputModuleSettings

Get the number of settings for the output module with the index specified.

```cpp
AEGP_GetNumJobItemOutputModuleSettings(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long outputModuleIndex,
 A_long *num_settingsPL);

```

#### AEGP_GetJobItemOutputModuleSetting

Get a specific setting of a job item output module.
The setting name and value are handles to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetJobItemOutputModuleSetting(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long outputModuleIndex,
 A_long settingIndex,
 AEGP_MemHandle *utf_setting_namePH0,
 AEGP_MemHandle *utf_setting_valuePH0);

```

#### AEGP_GetNumJobItemOutputModuleWarnings

Get the number of output module warnings for a job item.

```cpp
AEGP_GetNumJobItemOutputModuleWarnings(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long outputModuleIndex,
 A_long *num_warningsPL);

```

#### AEGP_GetJobItemOutputModuleWarning

Get a specific warning of a specific output module for a specific job item.
The warning value is a handle to NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetJobItemOutputModuleWarning(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long outputModuleIndex,
 A_long warningIndex,
 AEGP_MemHandle *utf_warning_valuePH0);

```

#### AEGP_GetNumJobItemFrameProperties

Get the number of properties for a job item frame.

```cpp
AEGP_GetNumJobItemFrameProperties(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 AEGP_RQM_FrameId frameid,
 A_long *num_propertiesPL);

```

#### AEGP_GetJobItemFrameProperty

Get a specific property on a job item frame.
The property name and values are handle to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetJobItemFrameProperty(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 AEGP_RQM_FrameId frameid,
 A_long propertyIndex,
 AEGP_MemHandle *utf_property_namePH0,
 AEGP_MemHandle *utf_property_valuePH0);

```

#### AEGP_GetNumJobItemOutputModuleProperties

Get the number of properties for a job item output module.

```cpp
AEGP_GetNumJobItemOutputModuleProperties(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long outputModuleIndex,
 A_long *num_propertiesPL);

```

#### AEGP_GetJobItemOutputModuleProperty

Get a specific property off a job item output module.
The property name and values are handle to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetJobItemOutputModuleProperty(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 A_long outputModuleIndex,
 A_long propertyIndex,
 AEGP_MemHandle *utf_property_namePH0,
 AEGP_MemHandle *utf_property_valuePH0);

```

#### AEGP_GetJobItemFrameThumbnail

Get a buffer with a JPEG-encoded thumbnail of the job item frame.
Pass in the maximum width and height, and the actual dimensions will be passed back.

```cpp
AEGP_GetJobItemFrameThumbnail(
 AEGP_RQM_SessionId sessid,
 AEGP_RQM_ItemId itemid,
 AEGP_RQM_FrameId frameid,
 A_long *widthPL,
 A_long *heightPL,
 AEGP_MemHandle *thumbnailPH0);

```

## Output Module Suite

Every item in the render queue has at least one output module specified.

Use this suite to query and control all aspects of the output modules attached to a given render item.

You may also add and remove output modules.

Factoid: For each frame rendered for a given render item, the list of output modules is traversed. So, for frame 0, output module 0, then 1, then 2 are called.

### AEGP_OutputModuleSuite4

#### AEGP_GetOutputModuleByIndex

Retrieves the indexed output module.
NOTE: `AEGP_OutputModuleRefH` is an opaque data type, and can’t be manipulated directly; you must use our accessor functions to modify it.

```cpp
AEGP_GetOutputModuleByIndex(
 AEGP_RQItemRefH rq_itemH,
 A_long outmod_indexL,
 AEGP_OutputModuleRefH *outmodPH);

```

#### AEGP_GetEmbedOptions

Retrieves the embedding setting specified for the referenced `AEGP_OutputModuleRefH`.

```cpp
AEGP_GetEmbedOptions(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_EmbeddingType *embed_optionsP);

```

`AEGP_EmbeddingType` will be one of the following:

- `AEGP_Embedding_NOTHING`
- `AEGP_Embedding_LINK`
- `AEGP_Embedding_LINK_AND_COPY`

#### AEGP_SetEmbedOptions

Specifies the embedding setting for the referenced `AEGP_OutputModuleRefH`.

```cpp
AEGP_SetEmbedOptions(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_EmbeddingType embed_options);

```

#### AEGP_GetPostRenderAction

Retrieves the post-render action setting for the referenced `AEGP_OutputModuleRefH`.

```cpp
AEGP_GetPostRenderAction(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_PostRenderAction *actionP);

```

`AEGP_PostRenderAction` will be one of the following:

- `AEGP_PostRenderOptions_IMPORT`
- `AEGP_PostRenderOptions_IMPORT_AND_REPLACE_USAGE`
- `AEGP_PostRenderOptions_SET_PROXY`

#### AEGP_SetPostRenderAction

Specifies the post-render action setting for the referenced `AEGP_OutputModuleRefH`.

```cpp
AEGP_SetPostRenderAction(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_PostRenderAction action);

```

#### AEGP_GetEnabledOutputs

Retrieves which output types are enabled for the referenced `AEGP_OutputModuleRefH`.

```cpp
AEGP_GetEnabledOutputs(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_OutputTypes *typesP);

```

`AEGP_OutputTypes` will contain one or both of the following values:

- `AEGP_OutputType_VIDEO`
- `AEGP_OutputType_AUDIO`

NOTE: These are flags, not an enumeration.

#### AEGP_SetEnabledOutputs

Specifies which output types are enabled for the referenced `AEGP_OutputModuleRefH`.

```cpp
AEGP_SetEnabledOutputs(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_OutputTypes enabled_types);

```

#### AEGP_GetOutputChannels

Retrieves which video channels are enabled for output in the referenced AEGP_OutputModuleRefH.

```cpp
AEGP_GetOutputChannels(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_VideoChannels *outchannelsP);

```

`AEGP_VideoChannels` will be one of the following:

- `AEGP_VideoChannels_RGB`
- `AEGP_VideoChannels_RGBA`
- `AEGP_VideoChannels_ALPHA`

#### AEGP_SetOutputChannels

Specifies which video channels are enabled for output in the referenced `AEGP_OutputModuleRefH`.

```cpp
AEGP_SetOutputChannels(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_VideoChannels outchannels);

```

#### AEGP_GetStretchInfo

Retrieves the stretch information enabled for the referenced `AEGP_OutputModuleRefH`; whether or not stretching is enabled, whether or not the frame aspect ratio is locked to the composition’s, and what quality setting is specified.

```cpp
AEGP_GetStretchInfo(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 A_Boolean *enabledPB,
 AEGP_StretchQuality *qualP,
 A_Boolean *lockedPB);

```

`AEGP_StretchQuality` will be one of the following:

- `AEGP_StretchQual_LOW`
- `AEGP_StretchQual_HIGH`

#### AEGP_SetStretchInfo

Retrieves the stretch information enabled for the referenced `AEGP_OutputModuleRefH`.

```cpp
AEGP_SetStretchInfo(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 A_Boolean is_enabledB,
 AEGP_StretchQuality quality);

```

#### AEGP_GetCropInfo

Retrieves whether or not the cropping is enabled for the referenced `AEGP_OutputModuleRefH`, and the rectangle to be used.

```cpp
AEGP_GetCropInfo(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 A_Boolean *is_enabledBP,
 A_Rect *crop_rectP);

```

#### AEGP_SetCropInfo

Specifies whether cropping is enabled for the referenced `AEGP_OutputModuleRefH`, and the rectangle to be used.

```cpp
AEGP_SetCropInfo(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 A_Boolean enableB,
 A_Rect crop_rect);

```

#### AEGP_GetSoundFormatInfo

Retrieves whether or not audio output is enabled for the referenced `AEGP_OutputModuleRefH`, and the settings to be used.

```cpp
AEGP_GetSoundFormatInfo(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_SoundDataFormat *formatP,
 A_Boolean *enabledPB);

```

#### AEGP_SetSoundFormatInfo

Specifies whether or not audio output is enabled for the referenced `AEGP_OutputModuleRefH`, and the settings to be used.

```cpp
AEGP_SetSoundFormatInfo(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_SoundDataFormat format_info,
 A_Boolean enabledB);

```

#### AEGP_GetOutputFilePath

Retrieves the path to which `AEGP_OutputModuleRefH's` output file will be written.
The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetOutputFilePath(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_MemHandle *unicode_pathPH);

```

#### AEGP_SetOutputFilePath

Specifies the path to which `AEGP_OutputModuleRefH's` output file will be written.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEGP_SetOutputFilePath(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 const A_UTF16Char *pathZ);

```

#### AEGP_AddDefaultOutputModule

Adds the default output module to the specified `AEGP_RQItemRefH`, and returns the added output module’s `AEGP_OutputModuleRefH` (you wouldn’t add it if you didn’t plan to mess around with it, would you?).

```cpp
AEGP_AddDefaultOutputModule(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH *outmodPH);

```

#### AEGP_GetExtraOutputModuleInfo

Retrieves information about the output module.
`format_uniPH` and `info_uniPH` provide the textual description of, and information about, the output module, formatted as the user would see it.
`format_uniPH` and `info_uniPH` will contain NULL-terminated UTF16 strings, of which the caller must dispose.

```cpp
AEGP_GetExtraOutputModuleInfo(
 AEGP_RQItemRefH rq_itemH,
 AEGP_OutputModuleRefH outmodH,
 AEGP_MemHandle *format_uniPH,
 AEGP_MemHandle *info_uniPH,
 A_Boolean *is_sequenceBP,
 A_Boolean *multi_frameBP);

```

## Working With Effects

These functions provide a way for effects (and AEGPs) to obtain information about the context of an applied effect.

::: tip

Any time you modify or rely on data from outside the normal render pipeline, you run the risk of dependency problems.
:::
There is no way for After Effects to know that you depend on this external information; consequently, you will not be notified if it changes out from under you.

### AEGP_PFInterfaceSuite1

#### AEGP_GetEffectLayer

Obtain the layer handle of the layer to which the effect is applied.

```cpp
AEGP_GetEffectLayer(
 PF_ProgPtr effect_ref,
 AEGP_LayerH *layerPH);

```

#### AEGP_GetNewEffectForEffect

Obtain the `AEGP_EffectRefH` corresponding to the effect.

```cpp
AEGP_GetNewEffectForEffect(
 AEGP_PluginID aegp_plugin_id,
 PF_ProgPtr effect_ref,
 AEGP_EffectRefH *effectPH);

```

#### AEGP_ConvertEffectToCompTime

Retreive the composition time corresponding to the effect’s layer time.

```cpp
AEGP_ConvertEffectToCompTime(
 PF_ProgPtr effect_ref,
 long what_timeL,
 unsigned long time_scaleLu,
 A_Time *comp_timePT);

```

#### AEGP_GetEffectCamera

Obtain the camera (if any) being used by After Effects to view the effect’s layer.

```cpp
AEGP_GetEffectCamera(
 PF_ProgPtr effect_ref,
 const A_Time *comp_timePT,
 AEGP_LayerH camera_layerPH);

```

#### AEGP_GetEffectCameraMatrix

Obtain the transform used to move between the layer’s coordinate space and that of the containing composition.

```cpp
AEGP_GetEffectCameraMatrix(
 PF_ProgPtr effect_ref,
 const A_Time *comp_timePT,
 A_Matrix4 *camera_matrixP,
 A_FpLong *dst_to_planePF,
 A_short *plane_widthPL,
 A_short *plane_heightPL);

```

NOTE: In cases where the effect’s input layer has square pixels, but is in a non-square pixel composition,
you must correct for the pixel aspect ratio by premultiplying the matrix by `(1/parF, 1, 1)`.

### AEGP_GetEffectCameraMatrix Notes

The model view for the camera matrix is inverse of the matrix obtained from `AEGP_GetEffectCameraMatrix()`.

Also note that our matrix is row-based; OpenGL’s is column-based.

## Do This Many Times

Utilizes multiple processors (if available) for your computations.

### AEGP_IterateSuite1

#### AEGP_GetNumThreads

Ask After Effects how many threads are currently available.

```cpp
AEGP_GetNumThreads(
 A_long *num_threadsPL);

```

#### AEGP_IterateGeneric

Specify a function for After Effects to manage on multiple processors.
Can be any function pointer specified by `fn_func`, taking the arguments listed below.
See [Private Data](implementation.html#aegps-implementation-private-data) for a description of how refconPV is used.

```cpp
AEGP_IterateGeneric(
 A_long iterationsL,
 void *refconPV,
 A_Err (*fn_func)
 (void *refconPV,
 A_long thread_indexL,
 A_long i,
 A_long iterationsL));

```

## File Import Manager Suite

The FIMSuite allows file types handled by AEGPs to appear as part of the After Effects import dialog, and drag-and-drop messaging.

These are not for use by AEIOs! Rather, they are for importing projects which are best represented as After Effects compositions.
These are not for use by AEIOs! Rather, they are for importing projects which are best represented as After Effects compositions.

### AEGP_FIMSuite3

#### AEGP_RegisterImportFlavor

Registers the name of the file type(s) supported by the plug-in.
Upon return, `imp_refP` will be a valid opaque reference, or `AE_FIM_ImportFlavorRef_NONE`.

```cpp
AEGP_RegisterImportFlavor(
 const char *nameZ,
 AE_FIM_ImportFlavorRef *imp_refP);

```

#### AEGP_RegisterImportFlavorFileTypes

Registers an array of file types and file extensions (the two arrays need not be of equal length) supported by the AEGP.

```cpp
AEGP_RegisterImportFlavorFileTypes(
 AE_FIM_ImportFlavorRef imp_ref,
 long num_filekindsL,
 const AEIO_FileKind *kindsAP,
 long num_fileextsL,
 const AEIO_FileKind *extsAP);

```

#### AEGP_RegisterImportFlavorImportCallbacks

Register the AEGP functions which will respond to import of different filetypes.

```cpp
AEGP_RegisterImportFlavorImportCallbacks(
 AE_FIM_ImportFlavorRef ref,
 AE_FIM_ImportFlags single_flag,
 const AE_FIM_ImportCallbacks *imp_cbsP);

```

#### AEGP_SetImportedItem

Designates an item as having been imported (possibly replacing an existing item), and sets associated import options.

```cpp
AEGP_SetImportedItem(
 AE_FIM_ImportOptions imp_options,
 AEGP_ItemH imported_itemH);

```
