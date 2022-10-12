---
title: About this Document
order: 1
category:
  - AE 插件开发
---

# About this Document

This document has changed much over the years. Part encyclopedia, part how-to guide, with multiple sedimentary layers of accreted information from more than two decades of API development and refinement.

Yes, there does need to be one source of information about every last niggling detail of the After Effects APIs. However, since no human in their right mind would ever want to _read_ such a document, we’ve tried to keep it involving and interesting.

As opportunity allows, we’ll try to include more diagrams, illustrations, and purdy pickshurs explaining API intricacies.

As always, your input is valued and appreciated.

## Organization

The [Introduction](https://ae-plugins.docsforadobe.dev/intro/intro.html#intro-intro) provides an overview of the integration possibilities with After Effects. It explains what plug-ins are, and how they work with After Effects. It describes the sample projects, and how to modify them. It explains where to install plug-ins, and what resources they use.

The basics of effect plug-ins are discussed in [Effect Basics](https://ae-plugins.docsforadobe.dev/effect-basics/effect-basics.html#effect-basics-effect-basics). This overview provides information on the function parameters passed to and from an effect plug-in’s entry point. It describes capability flags, effect parameters, and image buffers.

[Effect Details](https://ae-plugins.docsforadobe.dev/effect-details/effect-details.html#effect-details-effect-details) dives into the details of developing a complete effect plug-in using the many provided callback functions. It also provides many testing ideas to ensure the plug-in is stabile.

[SmartFX](https://ae-plugins.docsforadobe.dev/smartfx/smartfx.html#smartfx-smartfx) is the extension to the effect plug-in API to support 32-bit floating point images.

[Effect UI &amp; Events](https://ae-plugins.docsforadobe.dev/effect-ui-events/effect-ui-events.html#effect-ui-events-effect-ui-events) covers events sent to effect plug-ins, how to incorporate custom user interface elements, parameter supervision, and the reliance of custom data parameter types on Custom UI messaging.

[Audio](https://ae-plugins.docsforadobe.dev/audio/audio.html#audio-audio) effects are covered in… [Audio](https://ae-plugins.docsforadobe.dev/audio/audio.html#audio-audio).

[AEGPs](https://ae-plugins.docsforadobe.dev/aegps/aegps.html#aegps-aegps) details the After Effects General Plug-in (AEGP) API. Provided callback functions, hooking into internal messaging, manipulating the current contents of open projects and handling menu commands are all covered at length.

[Artisans](https://ae-plugins.docsforadobe.dev/artisans/artisans.html#artisans-artisans) covers specialized plug-in 3D renderer AEGPs.

[AEIOs](https://ae-plugins.docsforadobe.dev/aeios/aeios.html#aeios-aeios), specialized AEGPs which handle file input and output.

[Premiere Pro &amp; Other Hosts](https://ae-plugins.docsforadobe.dev/ppro/ppro.html#ppro-ppro) discusses issues related to compatibility with Premiere Pro and other applications that support a subset of After Effects plug-ins.

## Documentation Conventions

Functions, structure names and general C/C++ code are in Courier; MyStruct and MyFunction();

Text in blue is hyperlinked.

Command selectors are italicized; _PF_Cmd_RENDER_ .

## A Note About Coding Style

Because we use the public APIs for our own plug-ins, our coding guidelines are apparent throughout the SDK. Here’s a description of the pseudo-neo-post-Hungarian notation we use. Of course, you’re welcome to code however you like. If you feel strongly that we should change our internal coding standards, please post your requests at comp.sys.programmer.better.things.to.do.with.your.time, and we’ll carefully consider them before not making any changes.

### Coding Conventions

| Type                                             | Suffix     | Example          |
| ------------------------------------------------ | ---------- | ---------------- |
| Handle                                           | **H**      | `fooH`           |
| pointer (to)                                     | **P**      | `fooP`           |
| Boolean                                          | **B**      | `visibleB`       |
| Float                                            | **F**      | `degreesF`       |
| Long                                             | **L**      | `offsetL`        |
| unsigned long                                    | **Lu**     | `countLu`        |
| short                                            | **S**      | `indexS`         |
| char                                             | **C**      | `digitC`         |
| unsigned char                                    | **Cu**     | `redCu`          |
| function pointer                                 | **\_func** | `sample_func`    |
| time value                                       | **T**      | `durationT`      |
| `char*` (NULL-terminated C string)               | **Z**      | `nameZ`          |
| rectangle                                        | **R**      | `boundsR`        |
| fixed rectangle                                  | **FiR**    | `boundsFiR`      |
| float rectangle                                  | **FR**     | `boundsFR`       |
| ratio                                            | **Rt**     | `scale_factorRt` |
| `void*`                                          | **PV**     | `refconPV`       |
| optional parameter (must be passed, can be NULL) | **0**      | `extra_flags0`   |
