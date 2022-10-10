---
title: AEIO_ModuleInfo
order: 4
category:
  - AE 插件开发
---

# AEIO_ModuleInfo

This is the structure where your AEIO will define its basic properties.

Notice that, in addition to describing the filetypes and extensions supported by your AEIO, you also describe your signature and behavior using the AEIO_ModuleFlags. We love flags.

---

## AEIO_ModuleInfo Members

| **Member** | **Purpose**                                |
| ---------- | ------------------------------------------ |
| `sig`      | A long, uniquely identifying your plug-in. |

Many developers prefer to use a decidedly Mac-ish four character code here.
Please [let us know](mailto:zlam%40adobe.com) what sig you’re using. |
| `name` | Descriptive name for your AEIO plug-in. |
| `flags` | Set of `AEIO\_ModuleFlags`. |
| `flags2` | Set of `AEIO\_ModuleFlags2`. |
| `max\_width`, `max\_height` | The maximum dimensions supported by your format. |
| `num\_filetypes` | The number of filetypes supported by your AEIO. |
| `num\_extensions` | The number of file extensions supported by your AEIO. |
| `num\_clips` | The number of clipboard formats supported by your AEIO. |
| `create\_kind` | The macOS four character code for files created by your AEIO. |
| `create\_ext` | The file extension for files created by your AEIO. |
| `read\_kinds` | This array of 16 `AEIO\_FileKinds` need not be entirely filled out, but the first `[num\_filetypes + num\_extensions + num\_clips]` ones must be populated, in that order. |
| `num\_aux\_extensions` | The number of auxiliary extensions supported by your AEIO.
Say, for example, that you’re writing an AEIO to import information from a 3D program that saves scene information into a .123 file, and camera information into a .xyz file.
The .xyz would be an auxiliary extension; it’s not necessary to get the rest of the scene information, but it’s associated with the .123 files. |
| `aux\_ext` | The file extension of the auxiliary filetype(s) supported by your AEIO. |

---

## Behavior Flags

AEIOs set these flags (like effect plug-ins use global outflags) in AEIO_ModuleInfo.flags to indicate their behavior to After Effects. Some flags are only relevant to input, and some are only relevant to output.

### AEIO_ModuleFlags

| **Flag**                                                                                                               | **Purpose**                                                                                                                                                        | **I or O?** |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `AEIO\_MFlag\_INPUT`                                                                                                   | AEIO is an input module.                                                                                                                                           | Input!      |
| `AEIO\_MFlag\_OUTPUT`                                                                                                  | AEIO is an output module (one plug-in can be both).                                                                                                                | Output!     |
| `AEIO\_MFlag\_FILE`                                                                                                    | Each clip imported directly corresponds to a file, somewhere.                                                                                                      | Both        |
| `AEIO\_MFlag\_STILL`                                                                                                   | Supports still images, not video.                                                                                                                                  | Output      |
| `AEIO\_MFlag\_VIDEO`                                                                                                   | Supports video images, not stills.                                                                                                                                 | Output      |
| `AEIO\_MFlag\_AUDIO`                                                                                                   | Supports audio.                                                                                                                                                    | Output      |
| `AEIO\_MFlag\_NO\_TIME`                                                                                                | Time information isn’t part of the file format.                                                                                                                    |
| This would be the case with numbered stills, with individual frames imported based on the composition’s time settings. | Input                                                                                                                                                              |
| `AEIO\_MFlag\_INTERACTIVE\_GET`                                                                                        | A new input sequence necessitates user interaction.                                                                                                                |
| This would be the case for a non-file-based input module.                                                              | Input                                                                                                                                                              |
| `AEIO\_MFlag\_INTERACTIVE\_PUT`                                                                                        | A new output sequence necessitates user interaction.                                                                                                               |
| This would be the case for a non-file-based output module.                                                             | Output                                                                                                                                                             |
| `AEIO\_MFlag\_CANT\_CLIP`                                                                                              | The AEIO’s drawing functions cannot accept dimensions smaller than the requested dimensions.                                                                       | Input       |
| `AEIO\_MFlag\_MUST\_INTERACT\_PUT`                                                                                     | The AEIO must display a dialog box, even if a valid options data handle is available.                                                                              | Output      |
| `AEIO\_MFlag\_CANT\_SOUND\_INTERLEAVE`                                                                                 | The AEIO requires that all video data be processed, then sound data (instead of interleaving the processing the video and audio).                                  | Output      |
| `AEIO\_MFlag\_CAN\_ADD\_FRAMES\_NON\_LINEAR`                                                                           | The AEIO supports adding non-sequential frames.                                                                                                                    | Output      |
| `AEIO\_MFlag\_HOST\_DEPTH\_DIALOG`                                                                                     | The AEIO wants After Effects to display a bit-depth selection dialog.                                                                                              | Input       |
| `AEIO\_MFlag\_HOST\_FRAME\_START\_DIALOG`                                                                              | The AEIO wants After Effects to display a dialog requesting that the user specify a starting frame.                                                                | Input       |
| `AEIO\_MFlag\_NO\_OPTIONS`                                                                                             | The AEIO does not accept output options.                                                                                                                           | Output      |
| `AEIO\_MFlag\_NO\_PIXELS`                                                                                              | The AEIO’s file format doesn’t actually store pixels. Currently unused as of CS6.                                                                                  | (unused)    |
| `AEIO\_MFlag\_SEQUENCE\_OPTIONS\_OK`                                                                                   | The AEIO will adopt the sequence options of its parent if a folder is selected.                                                                                    | Input       |
| `AEIO\_MFlag\_INPUT\_OPTIONS`                                                                                          | The AEIO has user options associated with each input sequence.                                                                                                     |
| NOTE: the options information must be flat (not referring to any data contained in external pointers or handles).      | Input                                                                                                                                                              |
| `AEIO\_MFlag\_HSF\_AWARE`                                                                                              | The AEIO will provide horizontal scaling factor (pixel aspect ratio) information for each new sequence.                                                            |
| This prevents After Effects from guessing.                                                                             | Input                                                                                                                                                              |
| `AEIO\_MFlag\_HAS\_LAYERS`                                                                                             | The AEIO supports multiple layers in a single document.                                                                                                            | Input       |
| `AEIO\_MFlag\_SCRAP`                                                                                                   | The AEIO has a clipboard parsing component.                                                                                                                        | Input       |
| `AEIO\_MFlag\_NO\_UI`                                                                                                  | After Effects should display no UI for this module (do not combine this flag with `AEIO\_MFlag\_HOST\_DEPTH\_DIALOG` or `AEIO\_MFlag\_HOST\_FRAME\_START\_DIALOG`) | Input       |
| `AEIO\_MFlag\_SEQ\_OPTIONS\_DLG`                                                                                       | The AEIO has sequence options accessible from the More Options button in the Interpret Footage dialog.                                                             | Input       |
| `AEIO\_MFlag\_HAS\_AUX\_DATA`                                                                                          | The file format supported by the AEIO has depth information, normals, or some other non-color information related to each pixel.                                   | Input       |
| `AEIO\_MFlag\_HAS\_META\_DATA`                                                                                         | The file format supported by the AEIO supports user-definable metadata.                                                                                            |
| If this flag is set, the embed pop-up in the output module dialog will be enabled.                                     | Output                                                                                                                                                             |
| `AEIO\_MFlag\_CAN\_DO\_MARKERS`                                                                                        | The file format support by the AEIO supports markers, url flips, and/or chapters.                                                                                  | Output      |
| `AEIO\_MFlag\_CAN\_DRAW\_DEEP`                                                                                         | The AEIO can draw into 16bpc (“deep”) `PF\_EffectWorlds`.                                                                                                          | Input       |
| `AEIO\_MFlag\_RESERVED4`                                                                                               | Special super-secret flag. Doesn’t do anything…or does it?                                                                                                         |
| (_No, it doesn’t._)                                                                                                    | ???                                                                                                                                                                |

### AEIO_ModuleFlags2

Gotta have dem flags…

| **Flag**                                                                                                                                                          | **Purpose**                                                                                       | **I or O?** |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------- |
| `AEIO\_MFlag2\_AUDIO\_OPTIONS`                                                                                                                                    | The AEIO has an audio options dialog.                                                             | Output      |
| `AEIO\_MFlag2\_SEND\_ADDMARKER\_BEFORE\_ADDFRAME`                                                                                                                 | The AEIO wants to receive marker data before outputting video or audio (useful for MPEG streams). | Output      |
| `AEIO\_MFlag2\_CAN\_DO\_MARKERS\_2`                                                                                                                               | The AEIO supports combined markers; URL flips, chapters, and comments.                            | Output      |
| `AEIO\_MFlag2\_CAN\_DRAW\_FLOAT`                                                                                                                                  | The AEIO can draw into float (32-bpc) worlds.                                                     | Input       |
| `AEIO\_MFlag2\_CAN\_DO\_AUDIO\_32`                                                                                                                                | Supports 32-bit audio output.                                                                     | Output      |
| `AEIO\_MFlag2\_SUPPORTS\_ICC\_PROFILES`                                                                                                                           | Supports ICC profiles.                                                                            | Both        |
| `AEIO\_MFlag2\_CAN\_DO\_MARKERS\_3`                                                                                                                               | The AEIO supports combined markers; URL flips, chapters, comments, and cue points.                | Output      |
| `AEIO\_MFlag2\_SEND\_ADDMARKER\_BEFORE\_STARTADDING`                                                                                                              | The AEIO wants to process markers before video during export.                                     | Output      |
| `AEIO\_MFlag2\_USES\_QUICKTIME`                                                                                                                                   | On MacOS, prior to the host calling `AEIO\_AddFrame` or `AEIO\_OutputFrame`                       |
| from [AEIO_FunctionBlock4](new-kids-on-the-function-block.html) (#aeios-new-kids-on-the-function-block-aeio-functionblock), it will lock the global QuickTime mutex. | Output                                                                                            |
