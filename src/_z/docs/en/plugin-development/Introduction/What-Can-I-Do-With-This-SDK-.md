---
title: What Can I Do With This SDK
order: 3
category:
  - AE 插件开发
---

# What Can I Do With This SDK?

This SDK describes the Application Programming Interface (API) that developers use to build plug-ins. These plug-ins can extend the capabilities of After Effects and other applications that support the After Effects API. Plug-ins may also be used to bridge the gap between After Effects and another application.

## What Plug-Ins Can I Build With This SDK?

_Effect plug-ins_ can be applied to video or audio in a composition, to process video and/or audio data. Some examples of built-in effects are Brightness and Contast, Hue/Saturation, Gaussian Blur, and Warp Stabilizer. Effect plug-ins can provide a set of parameter controls for the user to fine-tune the effect. These parameter values can vary over time, and effects may use other layers and parameters at different times to calculate the output. It’s often thought that all plug-ins are effects. But effects are just one type of plug-in used by After Effects.

See a quickstart video on building an effect (on macOS): [adobe.ly/2sjMDwM](https://adobe.ly/2sjMDwM)

_After Effects General Plug-ins (AEGPs)_ can read and modify nearly every element of After Effects projects and preferences. They can add menu items, ‘hook’ (register themselves to receive) and trigger After Effects’ internal commands, and add new panels that dock and resize within the After Effects UI. They can work with markers and keyframes, and manage the render queue. They can even run scripts. Some examples of built-in AEGPs are the AAF importer, and the SWF exporter. Automatic Duck Pro Import AE is another well-known AEGP.

_After Effects Input/Output (AEIO) plug-ins_ provide support for new media file types. Unless you need a custom setup dialog to specify interpretation settings, the [Premiere Pro Importers](other-integration-possibilities.html) (#intro-other-integration-possibilities-premiere-pro-importers) API provides similar functionality, and is preferable in many cases. AEIOs use the AEGP API along with certain APIs specific to AEIOs. While After Effects still supports Photoshop format plug-ins and filters, as well as Foreign Project Format (FPF) plug-ins, these APIs have been long deprecated in favor of the AEIO API.

_BlitHook_ plug-ins output video to external hardware for broadcast quality monitoring and playback to tape. The EMP sample project provides a starting point. In After Effects CC 2014 and later, [Mercury Transmit](other-integration-possibilities.html) (#intro-other-integration-possibilities-mercury-transmit) is the recommended API.

_Artisans_ provide rendered output of 3D layers, taking over 3D rendering from After Effects (which still handles all rendering of 2D layers). Artisans use the AEGP API along with certain APIs specific to Artisans.

Didn’t see the type of integration you need described above? After Effects is very flexible, and there are several other ways to integrate with After Effects. See: [Other Integration Possibilities](other-integration-possibilities.html) (#intro-other-integration-possibilities).

## Where Do Plug-ins Appear In After Effects?

Effects plug-ins appear in both the _Effect_ menu and the Effects & Presets panel, in the effect category specified in their PiPL. Once they’re applied, the effect’s parameter controls (sliders, pop-ups, etc.) appear in the Effect Controls panel (ECP).

After Effects General Plug-ins (AEGPs) can add items to any After Effects menu, and additional panels listed in the Window menu. These menu items are indistinguishable from After Effects’ own menu items.

[AEIOs](../aeios/aeios.html) (#aeios-aeios) and Photoshop Format plug-ins can appear in the _File > Import_ menu, or in the _Import File_ dialog in the _Files of type_ drop-down, depending on the type of importer. AEIOs and Format plug-ins can also appear as available output formats in the render queue.

BlitHook plug-ins are automatically loaded and used by AE, but do not appear in any menu or dialog. The plug-in may optionally provide a menu item that opens it’s own custom settings dialog. It would register and update the menu item using the AEGP API.

It can registered to be called by After Effects to update the menu with `AEGP_RegisterUpdateMenuHook()`, and it can dim/activate the menu item using `AEGP_EnableCommand()`/`DisableCommand()`.

Artisans appear in the _Rendering Plug-in_ drop-down in the _Advanced_ tab of the _Composition Settings_ dialog.

## How Does After Effects Interact With Plug-ins?

Plug-ins, written in C or C++, are bundle packages on macOS and DLLs on Windows. They must contain a Plug-in Property List ([PiPL Resources](pipl-resources.html) (#intro-pipl-resources)) resource on both platforms. The plug-ins must be located in one of a few specific folders in order to be loaded and used by After Effects.

For effects plug-ins, After Effects sends command selectors (and relevant information) to the plug-in [Entry Point](../effect-basics/entry-point.html) (#effect-basics-entry-point) designated in the effects’ [PiPL Resources](pipl-resources.html) (#intro-pipl-resources) resource. Selectors are sent in response to actions the user takes—applying the effect, changing parameters, scrubbing through frames in the timeline, and rendering all prompt different sequences of selectors.

After Effects creates multiple instances of effects, with settings and input data unique to each sequence. All instances share the same global data, and can share data between all frames within their sequence. After Effects doesn’t process all image data as soon as the user applies an effect; it invokes effects only when their output is required.

After Effects General Plug-ins (AEGPs) have their entry point function called during application launch, and register for whatever messaging they need at that time. Further calls to the AEGP are initiated by user actions, as part of the plug-in’s response to menu commands or UI events. Depending on their features, plug-ins may need to respond to OS-specific entry points as well, for UI work and thread management.

For BlitHook plug-ins, frames are pushed as they’re displayed in the Composition panel. Users can initiate a RAM preview on an area of the timeline so that it is rendered to RAM, and then it all gets played out at full speed.

## SDK Contents

The SDK contains headers defining the After Effects APIs, sample projects demonstrating integration features, and this SDK Guide.

They are compiled with the SDK header files, which expose various After Effects functionality to be used by the plug-in.
