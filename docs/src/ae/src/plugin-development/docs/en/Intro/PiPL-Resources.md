---
title: PiPL Resources
order: 12
category:
  - AE 插件开发
---

# PiPL Resources

Originating in Adobe Photoshop over two decades ago, Plug-In Property Lists, or PiPLs, are resources which provide basic information about a plug-in’s behavior, without executing the plug-in. PiPLs have been largely supplanted within After Effects by `PF_Cmd_GLOBAL_SETUP` (see [Global Selectors](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-global-selectors)) and dynamic outflags. However, for archaeological reasons, the behaviors indicated during `PF_Cmd_GLOBAL_SETUP` must agree with those in the PiPL.

A PiPL specifies the entry point of a plug-in, the display name, as well as the plug-in’s match name. The match name is a unique, constant identifier, unlike a plug-in’s display name, which may be changed dynamically. Starting in CC, display names can be up to 47 characters long. Previously, they were limited to 31 characters.

In the interest of cross-platform compatibility, use a single .r file for both macOS and Windows versions of your plug-in, like the samples do. PiPL properties must always be in macOS-specific byte order. On Windows, PiPLs are compiled by processing a .r file through pipltool.exe, which converts the .r file into a binary .rc file. The Windows sample projects all contain custom build steps which generate a .rc file, using a cross-platform .r file and our cnvtpipl.exe command line utility. Base your development on an existing sample plug-in and the build step will be correctly implemented.

## Entry Point

Your plug-in’s entry point is exported through the PiPL on Windows and macOS. If the plug-in supports multiple platforms, then multiple entry points must be defined in the PiPL. There is no need for a Windows .def file or manual exports, unless you’re also designating some other OS-specific entry point.

The macros defined in entry.h (in the \SDKExamplesHeaders directory) take care of exporting each sample’s entry point function. All the sample project entry point functions are EffectMain() for effects, or EntryPointFunc()for AEGPs.

## PiPL Resources And Microsoft Visual Studio

To use resources from Microsoft Visual Studio .NET with pipltool-generated resources,

#include the output of the custom build steps into the Microsoft-generated .rc file.

```cpp
// in file WhizBang.rc, generated by .NET.
#include "WhizBang_PiPL_temp.rc" // pipltool.exe's output

```

If modifying a sample plug-in, change the name of the file generated by pipltool.exe to something like WhizBang_PiPL_temp.rc, or it will overwrite the Microsoft resources each time you build; not good.

## Multiple PiPLs

It is possible, but not recommended, to include multiple plug-ins (both AEGPs and effects) in the same file, using multiple PiPLs. If there are PiPLs for both AEGPs and effects in the same file, the AEGPs must come first!

No other hosts (not even Premiere Pro) support multiple PiPLs pointing to multiple effects within the same .dll or code fragment. Also, if you need to update one plug-in, do you really want to ship a new build of all your plug-ins? We recommend one PiPL, and one plug-in, per code fragment.

## Super Secret PiPL Bit

For those of you who use C++ and simply _must_ keep your plug-ins loaded all the time (to avoid having your v-tables trashed, among other hazards), set the PiPL’s AE_Reserved_Info member to 8. Over the years we’ve been quite stringent, insisting that plug-ins be good memory citizens and respond gracefully to getting unloaded. We know there are cases in which being unloaded with no warning can really ruin a plug-in’s day (and v-tables), and so have provided this work-around. Be nice, perform scrupulous memory management, and only use your powers for good.

## Why Do I Need To Know All This?

You don’t; After Effects does. If you follow our advice and base your projects on the SDK samples, you can simply change the .r file containing your PiPL definition(s), and your plug-in’s resources will be automagically updated the next time you build. Feel the love. Or, if you ever tinker with the custom build steps, feel the pain.
