---
title: Implementation
order: 5
category:
  - AE 插件开发
---

# Implementation

Because the functionality available through the AEGP API is so vast, and the integration with After Effects so complete, a good deal of design work is necessary to ensure that your plug-in behaves appropriately in all situations.

AEGPs interact with After Effects through PICA function suites.

AEGPs are not loaded in a specific order.

Check the version of the AEGP API (from within your AEGP’s entry point function) to confirm whether a given suite will be available.

AEGPs may also use any effect API suite function which doesn’t require a PF_ProgPtr (obtained by effects from PF_InData).

---

## Entry Point

```cpp
A\_Err AEGP\_PluginInitFuncPrototype(
 struct SPBasicSuite \*pica\_basicP,
 A\_long major\_versionL,
 A\_long minor\_versionL,
 AEGP\_PluginID aegp\_plugin\_id,
 AEGP\_GlobalRefcon \*global\_refconP)

```

The plug-in’s entry point, exported in the [PiPL Resources](../intro/pipl-resources.html) (#intro-pipl-resources), is called just once during launch; all other calls to the AEGP go to the functions it’s registered.

This is very different from the effect plug-in model, where all communication comes through the same entry point.

Because plug-in load order may vary, it’s never a good idea to acquire suites not provided by After Effects during your entry point function. Rather, wait until the appropriate hook function(s).

The AEGP [API Versions](../intro/compatibility-across-multiple-versions.html) (#intro-compatibility-across-multiple-versions-api-versions) can help distinguish between different versions of After Effects, in case the AEGP needs to behave differently or handle different behavior.

Those other functions are registered as callback hooks. An AEGP that adds menu items must register an UpdateMenuHook function (with a function signature as described in AE_GeneralPlug.h) which After Effects can call to determine whether or not to enable those items. Similarly, plug-ins which process commands register a CommandHook (one for all commands).

---

## Specialization

AEIOs and Artisans must register with After Effects in order to receive the messaging streams on which they depend.

Like everything else in the AEGP API, this is done through a function suite; in this case, the aptly-named AEGP_RegisterSuite.

---

## Example: Adding A Menu Item

During your entry point function, use `AEGP\_GetUniqueCommand()` from [Command Suite](aegp-suites.html) (#aegps-aegp-suites-command-suite) to obtain a command ID from After Effects, for use with `AEGP\_InsertMenuCommand`. Use a different ID for each menu item you add.

Using AEGP_RegisterSuite’s `AEGP\_RegisterCommandHook()`, tell After Effects which function to call when your menu item(s) are selected. The function you register using `AEGP\_RegisterUpdateMenuHook()` enables and disabling your menu item(s). Your menu item(s) will be permanently disabled unless you register a menu updating function.

No matter how many menu items you add, you register only one CommandHook. When called, determine which menu item was chosen (based on the command ID), use AEGP PICA suite functions to determine the current state of the project, and act accordingly. For example, keyframing plug-ins may want to disable their menu items unless a (keyframe-able) parameter stream is part of the current selection.

---

## Private Data

Unlike effects, AEGPs are never unloaded during an After Effects session. Still, that doesn’t mean that relying on static and global variables is a good idea.

All hook functions are passed a plugin_refconPV for storage information specific to that function. Many AEGP Suite functions take the `aegp\_plugin\_id` as a parameter; store it in the `global\_refconPV` you are passed, either in a structure you allocate or just the ID itself.

Where possible, use these refcons to store information, not statics and global variables. This becomes especially important when dealing with multi-threading issues.

Use `global\_refconPV` for your globals (like your `aegp\_plugin\_id`) and refcon for hook-function-specific storage.

A potential “multiple instances of After Effects” gotcha; when a second, command-line instance of After Effects is launched, all of an AEGP’s handles are duplicated. If this causes problems (and it may), provide code that attaches saved handles to specific instantiations of your plug-in.

---

## Threading

AEGP supports no threading at all. Everything must be done from the main thread, either in response to a callback, or from the idle hook.

There is one call that is thread safe: `AEGP\_CauseIdleRoutinesToBeCalled()`.

But since `SPBasicSuite` itself is not thread safe, you’ll need to stash off the function pointer in the main thread.
