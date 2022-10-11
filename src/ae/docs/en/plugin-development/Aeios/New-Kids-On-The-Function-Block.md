---
title: New Kids On The Function Block
order: 5
category:
  - AE 插件开发
---

# New Kids On The Function Block

During its main entry point function, each AEIO plug-in must fill in an AEIO_FunctionBlock, providing pointers to the functions After Effects will call for different file-related tasks.

The table below shows which functions are needed for input, and which ones are needed for output. For a bare-bones implementation, start with the functions that are noted as “Required” in the right column. You can often invoke “best-case” behavior by having After Effects handle the call for you (by returning `AEIO\_Err\_USE\_DFLT\_CALLBACK`).

For a barebones AEIO for video input only, implement the following functions: `AEIO\_InitInSpecFromFile` or `AEIO\_InitInSpecInteractive` (depending on whether the source is a file or interactively generated), `AEIO\_DisposeInSpec`, `AEIO\_GetInSpecInfo`, `AEIO\_DrawSparseFrame`, `AEIO\_CloseSourceFiles`, and `AEIO\_InqNextFrameTime` (using `AEIO\_Err\_USE\_DFLT\_CALLBACK` is fine).

Starting from the IO sample, it is best to leave the other functions defined too, and fill them in further as needed.

---

## AEIO_FunctionBlock4

| **Function**               | **Response**                                                                               | **I or O?** | **Required?** |
| -------------------------- | ------------------------------------------------------------------------------------------ | ----------- | ------------- |
| `AEIO\_InitInSpecFromFile` | Given a file path, describe its contents to After Effects in the provided `AEIO\_InSpecH`. |

Use all appropriate “set” calls from the [AEGP_IOInSuite](#aeios-new-kids-on-the-function-block-aegp-ioinsuite)) to do so;
if there is image data, set its depth, dimensions, and alpha interpretation.
If there is audio, describe its channels and sample rate.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEIO\_InitInSpecFromFile(
 AEIO\_BasicData \*basic\_dataP,
 const A\_UTF16Char \*file\_pathZ,
 AEIO\_InSpecH inH);

```

| Input | Yes, for file-based media |
| `AEIO\_InitInSpecInteractive` | Using some form of user interaction (and not a file path provided by After Effects),
describe the audio and video your generated AEIO_InSpecH contains.

```cpp
AEIO\_InitInSpecInteractive(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH);

```

| Input | Yes, for interactiv ely generated media |
| `AEIO\_DisposeInSpec` | Free an `AEIO\_InSpecH`.

```cpp
AEIO\_DisposeInSpec(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH);

```

| Input | Yes |
| `AEIO\_FlattenOptions` | For the given `AEIO\_InSpecH`, return a flattened version of the data contained in its options handle.
Obtain the unflattened options handle using `AEGP\_GetInSpecOptionsHandle`.

```cpp
AEIO\_FlattenOptions(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 AEIO\_Handle \*flat\_optionsPH);

```

| Input | No |
| `AEIO\_InflateOptions` | For the given `AEIO\_InSpecH`, create (using `AEGP\_SetInSpecOptionsHandle`)
an unflattened version of its flattened option data.

```cpp
AEIO\_InflateOptions(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 AEIO\_Handle flat\_optionsH);

```

| Input | No |
| `AEIO\_SynchInSpec` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed.
Inspect the `AEIO\_InSpecH`, update its options if necessary), and indicate whether or not you made changes.

```cpp
AEIO\_SynchInSpec(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 A\_Boolean \*changed0);

```

| Input | No |
| `AEIO\_GetActiveExtent` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed.
Populate the provided `A\_LRect` with the active extent of the file’s pixels at the given time.

```cpp
AEIO\_GetActiveExtent(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 const A\_Time \*tr,
 A\_LRect \*extent);

```

| Input | Yes |
| `AEIO\_GetInSpecInfo` | Provide a few strings in `AEIO\_Verbiage` to describe the file, which will appear in the Project panel.
This includes the strings used to describe the file type and subtype (the codec).

```cpp
AEIO\_GetInSpecInfo(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 AEIO\_Verbiage \*verbiageP);

```

This function gets called OFTEN; every time we refresh the project panel.
Keep allocations to a minimum.
In the AEIOs that ship with After Effects, we check for a valid `optionsH` (using `AEGP\_GetInSpecOptionsHandle`);
if we find one, we use the information from within it. If not, we do nothing.
This is important; if your AEIO handles still images, this function _will_ get called for the folder containing the stills.
Hopefully, there won’t be an optionsH associated with it (unless you’re writing a truly bizarre AEIO). | Input | Yes |
| `AEIO\_DrawSparseFrame` | Draw a frame from the `AEIO\_InSpecH`.
The `PF\_EffectWorld\*` contains the width and height to use, but make sure you take the required_region0 into account, if it’s not NULL.

```cpp
AEIO\_DrawSparseFrame(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 AEIO\_Quality qual,
 const AEIO\_RationalScale \*rs0,
 const A\_Time \*tr,
 const A\_Time \*duration0,
 const A\_Rect \*required\_region0,
 PF\_EffectWorld \*wP,
 A\_long\* originx,
 A\_long\* originy,
 AEIO\_DrawingFlags \*draw\_flagsP);

```

NOTE: return data as linear light (1.0), and After Effects
will perform any necessary transformations to bring the footage into the working colorspace. | Input | Yes |
| `AEIO\_GetDimensions` | AEIO_Err_USE_DFLT_CALLBACK allowed. Provide the dimensions (and, if necessary, scaling factor) of the video in the AEIO_InSpecH.

```cpp
AEIO\_GetDimensions(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 const AEIO\_RationalScale \*rs0,
 A\_long \*width0,
 A\_long \*height0);

```

| Input | No |
| `AEIO\_GetDuration` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed. Provide the duration of an `AEIO\_InSpecH`, in seconds.

```cpp
AEIO\_GetDuration(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 A\_Time \*trP);

```

| Input | No |
| `AEIO\_GetTime` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed. Provide the timebase of an `AEIO\_InSpecH`.

```cpp
AEIO\_GetTime(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 A\_Time \*tr);

```

Here are the values we use internally for common timebases:
29.97 fps: scale = 100; value= 2997;
59.94 fps: scale = 50; value = 2997;
23.976 fps: scale = 125; value = 2997;
30 fps: scale = 1; value = 30;
25 fps: scale = 1; value = 25; | Input | No |
| `AEIO\_GetSound` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed. Provide sound from an `AEIO\_InSpecH`, at the quality described.

```cpp
AEIO\_GetSound(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 AEIO\_SndQuality quality,
 const AEIO\_InterruptFuncs \*interrupt\_funcsP0,
 const A\_Time \*startPT,
 const A\_Time \*durPT,
 A\_u\_long start\_sampLu,
 A\_u\_long num\_samplesLu,
 void \*dataPV);

```

`AEIO\_SndQuality` may be:

- `AEIO\_SndQuality\_APPROX`, (this quality is used to draw the audio waveform)
- `AEIO\_SndQuality\_LO`,
- `AEIO\_SndQuality\_HI`

| Input | No |
| `AEIO\_InqNextFrameTime` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed.
Provide the time of the next frame (in the source footage’s timebase) within the `AEIO\_InSpecH`.

```cpp
AEIO\_InqNextFrameTime(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 const A\_Time \*base\_time\_tr,
 AEIO\_TimeDir time\_dir,
 A\_Boolean \*found0,
 A\_Time \*key\_time\_tr0);

```

| Input | Yes |
| `AEIO\_InitOutputSpec` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed.
Perform any initialization necessary for a new `AEIO\_OutSpecH`, and indicate whether you made changes.

```cpp
AEIO\_InitOutputSpec(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_Boolean \*user\_interacted);

```

NOTE: The first time your AEIO is used, After Effects caches the last-known-good optionsH in its preferences.
When testing this function, [delete your preferences](../intro/debugging-plug-ins.html) (#intro-debugging-plug-ins-deleting-preferences) often. | Output | Yes |
| `AEIO\_GetFlatOutputOptions` | Describe (in an `AEIO\_Handle`) the output options for an `AEIO\_OutSpecH`,
in a disk-safe flat data structure (one that does not reference external memory).
:::tip that your output options must be cross-platform, so pay attention to byte ordering issues.

```cpp
AEIO\_GetFlatOutputOptions(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 AEIO\_Handle \*optionsH);

```

| Output | Yes |
| `AEIO\_DisposeOutputOptions` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed. Free the memory for the output options passed in.

```cpp
AEIO\_DisposeOutputOptions(
 AEIO\_BasicData \*basic\_dataP,
 void \*optionsPV);

```

| Output | No |
| `AEIO\_UserOptionsDialog` | Display an output settings dialog (select TIFF output within After Effects to see when this dialog will occur).
Store this information in an options handle using `AEGP\_SetInSpecOptionsHandle`.

```cpp
AEIO\_UserOptionsDialog(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 PF\_EffectWorld \*sample0,
 A\_Boolean \*interacted0);

```

| Output | No |
| `AEIO\_GetOutputInfo` | Describe (in text) the output options in an `AEIO\_OutSpecH`.

```cpp
AEIO\_GetOutputInfo(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 AEIO\_Verbiage \*verbiage);

```

| | |
| `AEIO\_OutputInfoChanged` | Update the `AEIO\_OutSpecH` based on the current settings (using the various Get functions to obtain them).

```cpp
AEIO\_OutputInfoChanged(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH);

```

| Output | No |
| `AEIO\_SetOutputFile` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed. Set the file path for output of an `AEIO\_OutSpecH`.
Return `AEIO\_Err\_USE\_DEFAULT\_CALLBACK` unless you’ve changed the path.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEIO\_SetOutputFile(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_UTF16Char \*file\_pathZ);

```

| Output | Yes |
| `AEIO\_StartAdding` | Prepare to add frames to the output file.
This is a good time to create the ouput file(s) on disk, and to write any header information to such files.
This is also your first opportunity to allocate pixel buffers based on valid output spec values.

```cpp
AEIO\_StartAdding(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_long flags);

```

| Output | Yes, for writing formats that support multiple frames |
| `AEIO\_AddFrame` | Add frame(s) to output file. You may pass a pointer to a function you want called if the user interrupts the render.

```cpp
AEIO\_AddFrame(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_long frame\_index,
 A\_long frames,
 PF\_EffectWorld \*wP,
 const A\_LPoint \*origin0,
 A\_Boolean was\_compressedB,
 AEIO\_InterruptFuncs \*inter0);

```

| Output | Yes, for writing formats that support multiple frames |
| `AEIO\_EndAdding` | Perform any clean-up associated with adding frames.

```cpp
AEIO\_EndAdding(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_long flags);

```

| Output | Yes, for writing formats that support multiple frames |
| `AEIO\_OutputFrame` | Output a single frame.

```cpp
AEIO\_OutputFrame(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 PF\_EffectWorld \*wP);

```

| Output | Yes, for writing formats that support a single frame |
| `AEIO\_WriteLabels` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed. Set alpha interpretation and field usage information for the `AEIO\_OutSpecH`.
Indicate in `AEIO\_LabelFlags` which flags you wrote.

```cpp
AEIO\_WriteLabels(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 AEIO\_LabelFlags \*written);

```

| Output | Yes |
| `AEIO\_GetSizes` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed. Provide information about file size and remaining free space on output volume.

```cpp
AEIO\_GetSizes(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_u\_longlong \*free\_space,
 A\_u\_longlong \*file\_size);

```

| Output | Yes |
| `AEIO\_Flush` | Destroy any options or user data associated with the `OutSpecH`.

```cpp
AEIO\_Flush(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH);

```

| | |
| `AEIO\_AddSoundChunk` | Add the given sound to the output file.

```cpp
AEIO\_AddSoundChunk(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 const A\_Time \*start,
 AEIO\_SndWorldH swH);

```

| Output | Yes, for writing formats with audio |
| `AEIO\_Idle` | Optional. Do something with idle time. `AEIO\_Err\_USE\_DFLT\_CALLBACK` is not supported.

```cpp
AEIO\_Idle(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_ModuleSignature sig,
 AEIO\_IdleFlags \*idle\_flags0);

```

| Output | No |
| `AEIO\_GetDepths` | Set `AEIO\_OptionsFlags` to indicate which pixel and color depths are valid for your output format.
See the discussion on [Export Bit-Depth](implementation-details.html) (#aeios-implementation-details).

```cpp
AEIO\_GetDepths(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 AEIO\_OptionsFlags \*which);

```

| Output | Yes |
| `AEIO\_GetOutputSuffix` | `AEIO\_Err\_USE\_DFLT\_CALLBACK` allowed. Describe the three character extension for the output file.

```cpp
AEIO\_GetOutputSuffix(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_char \*suffix);

```

| Output | Yes |
| `AEIO\_SeqOptionsDlg` | Display a footage options dialog, and indicate whether the user made any changes.

```cpp
AEIO\_SeqOptionsDlg(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 A\_Boolean \*interactedPB);

```

| Input | No |
| `AEIO\_GetNumAuxChannels` | Enumerate the auxiliary (beyond red, green, blue and alpha) channels of data contained in an `AEIO\_InSpecH`.

```cpp
AEIO\_GetNumAuxChannels(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 A\_long \*num\_channelsPL);

```

| Input | No |
| `AEIO\_GetAuxChannelDesc` | Describe the data type, name, channel, and dimensionality of an auxiliary data channel.

```cpp
AEIO\_GetAuxChannelDesc(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 long chan\_indexL,
 PF\_ChannelDesc \*descP);

```

| Input | No |
| `AEIO\_DrawAuxChannel` | Draw the auxiliary channel(s) from an `AEIO\_InSpecH`.

```cpp
AEIO\_DrawAuxChannel(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 A\_long chan\_indexL,
 const AEIO\_DrawFramePB \*pbP,
 PF\_ChannelChunk \*chunkP);

```

| | |
| `AEIO\_FreeAuxChannel` | Free data associated with an auxiliary channel.

```cpp
AEIO\_FreeAuxChannel(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 PF\_ChannelChunk \*chunkP);

```

| Input | No |
| `AEIO\_Num` AuxFiles | Enumerate the files needed to render the given `AEIO\_InSpecH`.
This function and `AEIO\_GetNthAuxFileSpec` will be called when the user chooses `File > Dependencies > Collect Files…`
Here your AEIO tells AE what the associated files are.

```cpp
AEIO\_NumAuxFiles(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH seqH,
 A\_long \*files\_per\_framePL);

```

| Input | No |
| `AEIO\_GetNthAuxFileSpec` | Retrieve data from the nth auxiliary file, for the specified frame.
The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEIO\_GetNthAuxFileSpec(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH seqH,
 A\_long frame\_numL,
 A\_long n,
 AEGP\_MemHandle \*pathPH);

```

| Input | No, if no aux files |
| `AEIO\_CloseSourceFiles` | Close (or open, depending upon closeB) the source files for an `AEIO\_InSpecH`.
When the user Collects Files, the AEIO will first be asked to close its source files, then re-open them.

```cpp
AEIO\_CloseSourceFiles(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH seqH,
 A\_Boolean closeB);

```

`TRUE` for close, `FALSE` for open. | Input | Yes |
| `AEIO\_CountUserData` | Enumerate the units of user data associated with the `AEIO\_InSpecH`.

```cpp
AEIO\_CountUserData(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 A\_u\_long typeLu,
 A\_u\_long max\_sizeLu,
 A\_u\_long \*num\_of\_typePLu);

```

| | |
| `AEIO\_SetUserData` | Set user data (of the given index and type) for the given `AEIO\_OutSpecH`.

```cpp
AEIO\_SetUserData(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_u\_long typeLu,
 A\_u\_long indexLu,
 const AEIO\_Handle dataH);

```

| Output | No |
| `AEIO\_GetUserData` | Describe the user data (at the index and of the type given) associated with the `AEIO\_InSpecH`.

```cpp
AEIO\_GetUserData(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_InSpecH inH,
 A\_u\_long typeLu,
 A\_u\_long indexLu,
 A\_u\_long max\_sizeLu,
 AEIO\_Handle \*dataPH);

```

| Input | No |
| `AEIO\_AddMarker` | Associate a marker of the specified type, at the specified frame, with the `AEIO\_OutSpecH`.
You may provide an interrupt function to handle user cancellation of this action.

```cpp
AEIO\_AddMarker(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_long frame\_index,
 AEIO\_MarkerType marker\_type,
 void \*marker\_dataPV,
 AEIO\_InterruptFuncs \*inter0);

```

| Output | No |
| `AEIO\_VerifyFileImportable` | Indicate (by setting importablePB) whether or not the plug-in can import the file.
:::tip that After Effects has already done basic extension checking; you may wish to open the file and determine whether or not it’s valid.
This can be a time-consuming process; most AEIOs that ship with After Effects simply return TRUE,
and deal with bad files during `AEIO\_InitInSpecFromFile`.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEIO\_VerifyFileImportable(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_ModuleSignature sig,
 const A\_UTF16Char \*file\_pathZ,
 A\_Boolean \*importablePB);

```

| Input | No |
| `AEIO\_UserAudioOptionsDialog` | Display an audio options dialog.

```cpp
AEIO\_UserAudioOptionsDialog(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_Boolean \*interacted0);

```

| Output | No |
| `AEIO\_AddMarker3` | Add a marker, with a flag specifying whether or not this is a composition marker.

```cpp
AEIO\_AddMarker3(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_long frame\_index,
 AEGP\_ConstMarkerValP marker\_valP,
 AEIO\_RenderMarkerFlag marker\_flag,
 AEIO\_InterruptFuncs \*inter0);

```

| Output | No |
| `AEIO\_GetMimeType` | Describe the output mime type. This is used for XMP support.

```cpp
AEIO\_GetMimeType(
 AEIO\_BasicData \*basic\_dataP,
 AEIO\_OutSpecH outH,
 A\_long mime\_type\_sizeL,
 char \*mime\_typeZ);

```

| Output | No |

---

## What Goes In

These functions manage an input specification, After Effects’ internal representation of data gathered from any source.

Any image or audio data in After Effects (except solids) is obtained from an input specification handle, or `AEIO\_InSpecH`.

### AEGP_IOInSuite5

| **Function**                   | **Purpose**                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `AEGP\_GetInSpecOptionsHandle` | Retrieves the options data (created by your AEIO) for the given `AEIO\_InSpecH`. |

```cpp
AEGP\_GetInSpecOptionsHandle(
 AEIO\_InSpecH inH,
 void \*\*optionsPPV);

```

|
| `AEGP\_SetInSpecOptionsHandle` | Sets the options data for the given `AEIO\_InSpecH`.
Must be allocated using the [Memory Suite](../aegps/aegp-suites.html) (#aegps-aegp-suites-memory-suite).

```cpp
AEGP\_SetInSpecOptionsHandle(
 AEIO\_InSpecH inH,
 void \*optionsPV,
 void \*\*old\_optionsPPV);

```

|
| `AEGP\_GetInSpecFilePath` | Retrieves the file path for the `AEIO\_InSpecH`.
The file path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.

```cpp
AEGP\_GetInSpecFilePath(
 AEIO\_InSpecH inH,
 AEGP\_MemHandle \*file\_nameZ);

```

|
| `AEGP\_GetInSpecNativeFPS` | Retrieves the frame rate of the `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecNativeFPS(
 AEIO\_InSpecH inH,
 A\_Fixed \*native\_fpsP);

```

|
| `AEGP\_SetInSpecNativeFPS` | Sets the frame rate of the `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecNativeFPS(
 AEIO\_InSpecH inH,
 A\_Fixed native\_fpsP);

```

|
| `AEGP\_GetInSpecDepth` | Retrieves the bit depth of the image data in the `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecDepth(
 AEIO\_InSpecH inH,
 A\_short \*depthPS);

```

|
| `AEGP\_SetInSpecDepth` | Indicates to After Effects the bit depth of the image data in the `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecDepth(
 AEIO\_InSpecH inH,
 A\_short depthS);

```

|
| `AEGP\_GetInSpecSize` | Retrieves the size (in bytes) of the data referenced by the `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecSize(
 AEIO\_InSpecH inH,
 AEIO\_FileSize \*sizePLLu);

```

|
| `AEGP\_SetInSpecSize` | Indicates to After Effects the size (in bytes) of the data referenced by the `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecSize(
 AEIO\_InSpecH inH,
 AEIO\_FileSize sizeL);

```

|
| `AEGP\_GetInSpecInterlaceLabel` | Retrieves field information for the `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecInterlaceLabel(
 AEIO\_InSpecH inH,
 FIEL\_Label \*interlaceP);

```

|
| `AEGP\_SetInSpecInterlaceLabel` | Specifies field information for the `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecInterlaceLabel(
 AEIO\_InSpecH inH,
 const FIEL\_Label \*interlaceP);

```

|
| `AEGP\_GetInSpecAlphaLabel` | Retrieves alpha channel interpretation information for the `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecAlphaLabel(
 AEIO\_InSpecH inH,
 AEIO\_AlphaLabel \*alphaP);

```

|
| `AEGP\_SetInSpecAlphaLabel` | Sets alpha channel interpretation information for the `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecAlphaLabel(
 AEIO\_InSpecH inH,
 const AEIO\_AlphaLabel\* alphaP);

```

|
| `AEGP\_GetInSpecDuration` | Retrieves the duration of the `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecDuration(
 AEIO\_InSpecH inH,
 A\_Time \*durationP);

```

|
| `AEGP\_SetInSpecDuration` | Sets the duration of the `AEIO\_InSpecH`.
NOTE: As of 5.5, this must be called, even for frame-based file formats.
If you don’t set the `A\_Time.scale` to something other than zero, your file(s) will not import.
This will be fixed in future versions.

```cpp
AEGP\_SetInSpecDuration(
 AEIO\_InSpecH inH,
 const A\_Time \*durationP);

```

|
| `AEGP\_GetInSpecDimensions` | Retrieves the width and height of the image data in the `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecDimensions(
 AEIO\_InSpecH inH,
 A\_long \*widthPL0,
 A\_long \*heightPL0);

```

|
| `AEGP\_SetInSpecDimensions` | Indicates to After Effects the width and height of the image data in the `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecDimensions(
 AEIO\_InSpecH inH,
 A\_long widthL,
 A\_long heightL);

```

|
| `AEGP\_InSpecGetRational` Dimensions | Retrieves the width, height, bounding rect, and scaling factor applied to an `AEIO\_InSpecH`.

```cpp
AEGP\_InSpecGetRationalDimensions(
 AEIO\_InSpecH inH,
 const AEIO\_RationalScale \*rs0,
 A\_long \*width0,
 A\_long \*height0,
 A\_Rect \*r0);

```

|
| `AEGP\_GetInSpecHSF` | Retrieves the horizontal scaling factor applied to an `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecHSF(
 AEIO\_InSpecH inH,
 A\_Ratio \*hsf);

```

|
| `AEGP\_SetInSpecHSF` | Sets the horizontal scaling factor of an `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecHSF(
 AEIO\_InSpecH inH,
 const A\_Ratio \*hsf);

```

|
| `AEGP\_GetInSpecSoundRate` | Obtains the sampling rate (in samples per second) for the audio data referenced by the `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecSoundRate(
 AEIO\_InSpecH inH,
 A\_FpLong \*ratePF);

```

|
| `AEGP\_SetInSpecSoundRate` | Sets the sampling rate (in samples per second) for the audio data referenced by the `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecSoundRate(
 AEIO\_InSpecH inH,
 A\_FpLong rateF);

```

|
| `AEGP\_GetInSpecSoundEncoding` | Obtains the encoding method (signed PCM, unsigned PCM, or floating point) from an AEIO_InSpecH.

```cpp
AEGP\_GetInSpecSoundEncoding(
 AEIO\_InSpecH inH,
 AEIO\_SndEncoding \*encodingP);

```

|
| `AEGP\_SetInSpecSoundEncoding` | Sets the encoding method of an AEIO_InSpecH.

```cpp
AEGP\_SetInSpecSoundEncoding(
 AEIO\_InSpecH inH,
 AEIO\_SndEncoding encoding);

```

|
| `AEGP\_GetInSpecSoundSampleSize` | Retrieves the bytes-per-sample (1,2, or 4) from an `AEIO\_InSpecH`.

```cpp
AEGP\_GetInSpecSoundSampleSize(
 AEIO\_InSpecH inH,
 AEIO\_SndSampleSize \*bytes\_per\_smpP);

```

|
| `AEGP\_SetInSpecSoundSampleSize` | Set the bytes per sample of an `AEIO\_InSpecH`.

```cpp
AEGP\_SetInSpecSoundSampleSize(
 AEIO\_InSpecH inH,
 AEIO\_SndSampleSize bytes\_per\_sample);

```

|
| `AEGP\_GetInSpecSoundChannels` | Determines whether the audio in the `AEIO\_SndChannels` is mono or stereo.

```cpp
AEGP\_GetInSpecSoundChannels(
 AEIO\_InSpecH inH,
 AEIO\_SndChannels \*num\_channelsP);

```

|
| `AEGP\_SetInSpecSoundChannels` | Sets the audio in an `AEIO\_SndChannels` to mono or stereo.

```cpp
AEGP\_SetInSpecSoundChannels(
 AEIO\_InSpecH inH,
 AEIO\_SndChannels num\_channels);

```

|
| `AEGP\_AddAuxExtMap` | If your file format has auxiliary files which you want to prevent users from opening directly,
pass it’s extension, file type and creator to this function to keep it from appearing in input dialogs.

```cpp
AEGP\_AddAuxExtMap(
 const A\_char \*extension,
 A\_long file\_type,
 A\_long creator);

```

|
| `AEGP\_SetInSpecEmbeddedColorProfile` | In case of RGB data, if there is an embedded icc profile, build an `AEGP\_ColorProfile` out of
this icc profile using `AEGP\_GetNewColorProfileFromICCProfile` from [AEGP_ColorSettingsSuite2](../aegps/aegp-suites.html) (#aegps-aegp-suites-aegp-colorsettingssuite)
and set the profile description set to NULL.
In case of non-RGB data, if there is an embedded non-RGB icc profile or you know the color space the data is in,
set the color profile set to NULL, and provide the description as a NULL-terminated unicode string.
Doing this disables color management UI that allows user to affect profile choice in the application UI.
If you are unpacking non-RGB data directly into working space (to get working space use `AEGP\_GetNewWorkingSpaceColorProfile`), you are done.
If you are unpacking non-RGB data into specific RGB color space, you must pass the profile describing this space to `AEGP\_SetInSpecAssignedColorProfile` below.
Otherwise, your RGB data will be incorrectly interpreted as being in working space.
Either color profile or profile description should be NULL in this function. You cannot use both.

```cpp
AEGP\_SetInSpecEmbeddedColorProfile(
 AEIO\_InSpecH inH,
 AEGP\_ConstColorProfileP color\_profileP0,
 const A\_UTF16Char \*profile\_descP0);

```

|
| `AEGP\_SetInSpecAssignedColorProfile` | Assign a valid RGB color profile to the footage.

```cpp
AEGP\_SetInSpecAssignedColorProfile(
 AEIO\_InSpecH inH,
 AEGP\_ConstColorProfileP color\_profileP);

```

|
| `AEGP\_GetInSpecNativeStartTime` | New in CC. Retrieves the native start time of the footage.

```cpp
AEGP\_GetInSpecNativeStartTime(
 AEIO\_InSpecH inH,
 A\_Time \*startTimeP);

```

|
| `AEGP\_SetInSpecNativeStartTime` | New in CC. Assign a native start time to the footage.

```cpp
AEGP\_SetInSpecNativeStartTime(
 AEIO\_InSpecH inH,
 const A\_Time \*startTimeP);

```

|
| `AEGP\_ClearInSpecNativeStartTime` | New in CC. Clear the native start time of the footage.
Setting the native start time to 0 using `AEGP\_SetInSpecNativeStartTime` doesn’t do this.
It still means there is a special native start time provided.

```cpp
AEGP\_ClearInSpecNativeStartTime(
 AEIO\_InSpecH inH);

```

|
| `AEGP\_GetInSpecNativeDisplayDropFrame` | New in CC. Retrieve the drop-frame setting of the footage.

```cpp
AEGP\_GetInSpecNativeDisplayDropFrame(
 AEIO\_InSpecH inH,
 A\_Boolean \*displayDropFrameBP);

```

|
| `AEGP\_SetInSpecNativeDisplayDropFrame` | New in CC. Assign the drop-frame setting of the footage.

```cpp
AEGP\_SetInSpecNativeDisplayDropFrame(
 AEIO\_InSpecH inH,
 A\_Boolean displayDropFrameB);

```

|

---

## What Goes Out

These functions manage all interactions with an output specification in After Effects’ render queue.

### AEGPIOOutSuite4

| **Function**                    | **Purpose**                                     |
| ------------------------------- | ----------------------------------------------- |
| `AEGP\_GetOutSpecOptionsHandle` | Retrieves the Options for the `AEIO\_OutSpecH`. |

```cpp
AEGP\_GetOutSpecOptionsHandle(
 AEIO\_OutSpecH outH,
 void \*\*optionsPPV);

```

|
| `AEGP\_SetOutSpecOptionsHandle` | Sets the Options for the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecOptionsHandle(
 AEIO\_OutSpecH outH,
 void \*optionsPV,
 void \*\*old\_optionsPPV);

```

|
| `AEGP\_GetOutSpecFilePath` | Obtains the path for the `AEIO\_OutSpecH`.
The file path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP\_FreeMemHandle`.
If `file\_rsrvdPB` returns `TRUE`, the plug-in should not overwrite it
(After Effects has already created an empty file); doing so can cause network renders to fail.

```cpp
AEGP\_GetOutSpecFilePath(
 AEIO\_OutSpecH outH,
 AEGP\_MemHandle \*unicode\_pathPH,
 A\_Boolean \*file\_rsrvdPB);

```

|
| `AEGP\_GetOutSpecFPS` | Obtains the frames per second of the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecFPS(
 AEIO\_OutSpecH outH,
 A\_Fixed \*native\_fpsP);

```

|
| `AEGP\_SetOutSpecNativeFPS` | Sets the frames per second of the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecNativeFPS(
 AEIO\_OutSpecH outH,
 A\_Fixed native\_fpsP);

```

|
| `AEGP\_GetOutSpecDepth` | Obtains the pixel bit depth of the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecDepth(
 AEIO\_OutSpecH outH,
 A\_short \*depthPS);

```

|
| `AEGP\_SetOutSpecDepth` | Sets the pixel bit depth of the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecDepth(
 AEIO\_OutSpecH outH,
 A\_short depthPS);

```

|
| `AEGP\_GetOutSpecInterlaceLabel` | Obtains field information for the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecInterlaceLabel(
 AEIO\_OutSpecH outH,
 FIEL\_Label \*interlaceP);

```

|
| `AEGP\_SetOutSpecInterlaceLabel` | Set the field information for the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecInterlaceLabel(
 AEIO\_OutSpecH outH,
 const FIEL\_Label \*interlaceP);

```

|
| `AEGP\_GetOutSpecAlphaLabel` | Obtains alpha interpretation information for the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecAlphaLabel(
 AEIO\_OutSpecH outH,
 AEIO\_AlphaLabel \*alphaP);

```

|
| `AEGP\_SetOutSpecAlphaLabel` | Sets the alpha interpretation for the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecAlphaLabel(
 AEIO\_OutSpecH outH,
 const AEIO\_AlphaLabel \*alphaP);

```

|
| `AEGP\_GetOutSpecDuration` | Obtains the duration of the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecDuration(
 AEIO\_OutSpecH outH,
 A\_Time \*durationP);

```

|
| `AEGP\_SetOutSpecDuration` | Sets the duration of the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecDuration(
 AEIO\_OutSpecH outH,
 const A\_Time \*durationP);

```

|
| `AEGP\_GetOutSpecDimensions` | Obtains the dimensions of the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecDimensions(
 AEIO\_OutSpecH outH,
 A\_long \*widthPL0,
 A\_long \*heightPL0);

```

|
| `AEGP\_GetOutSpecHSF` | Obtains the horizontal scaling factor of the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecHSF(
 AEIO\_OutSpecH outH,
 A\_Ratio \*hsf);

```

|
| `AEGP\_SetOutSpecHSF` | Sets the horizontal scaling factor of the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecHSF(
 AEIO\_OutSpecH outH,
 const A\_Ratio \*hsf);

```

|
| `AEGP\_GetOutSpecSoundRate` | Obtains the sampling rate for the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecSoundRate(
 AEIO\_OutSpecH outH,
 A\_FpLong \*ratePF);

```

|
| `AEGP\_SetOutSpecSoundRate` | Sets the sampling rate for the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecSoundRate(
 AEIO\_OutSpecH outH,
 A\_FpLong rateF);

```

|
| `AEGP\_GetOutSpecSoundEncoding` | Obtains the sound encoding format of the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecSoundEncoding(
 AEIO\_OutSpecH outH,
 AEIO\_SndEncoding \*encodingP);

```

|
| `AEGP\_SetOutSpecSoundEncoding` | Sets the sound encoding format of the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecSoundEncoding(
 AEIO\_OutSpecH outH,
 AEIO\_SndEncoding encoding);

```

|
| `AEGP\_GetOutSpecSoundSampleSize` | Obtains the bytes-per-sample of the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecSoundSampleSize(
 AEIO\_OutSpecH outH,
 AEIO\_SndSampleSize \*bpsP);

```

|
| `AEGP\_SetOutSpecSoundSampleSize` | Sets the bytes-per-sample of the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecSoundSampleSize(
 AEIO\_OutSpecH outH,
 AEIO\_SndSampleSize bpsP);

```

|
| `AEGP\_GetOutSpecSoundChannels` | Obtains the number of sounds channels in the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecSoundChannels(
 AEIO\_OutSpecH outH,
 AEIO\_SndChannels \*channelsP);

```

|
| `AEGP\_SetOutSpecSoundChannels` | Sets the number of sounds channels in the `AEIO\_OutSpecH`.

```cpp
AEGP\_SetOutSpecSoundChannels(
 AEIO\_OutSpecH outH,
 AEIO\_SndChannels channels);

```

|
| `AEGP\_GetOutSpecIsStill` | Determines whether the `AEIO\_OutSpecH` is a still.

```cpp
AEGP\_GetOutSpecIsStill(
 AEIO\_OutSpecH outH,
 A\_Boolean \*is\_stillPB);

```

|
| `AEGP\_GetOutSpecPosterTime` | Obtains the time of the `AEIO\_OutSpecH's` poster frame.

```cpp
AEGP\_GetOutSpecPosterTime(
 AEIO\_OutSpecH outH,
 A\_Time \*poster\_timeP);

```

|
| `AEGP\_GetOutSpecStartFrame` | Obtains the time of the first frame in the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecStartFrame(
 AEIO\_OutSpecH outH,
 A\_long \*start\_frameP);

```

|
| `AEGP\_GetOutSpecPullDown` | Obtains the pulldown phase of the `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecPullDown(
 AEIO\_OutSpecH outH,
 AEIO\_Pulldown \*pulldownP);

```

|
| `AEGP\_GetOutSpecIsMissing` | Passes back TRUE if there is no `AEIO\_OutSpecH`.

```cpp
AEGP\_GetOutSpecIsMissing(
 AEIO\_OutSpecH outH,
 A\_Boolean \*missingPB);

```

|
| `AEGP\_GetOutSpecShouldEmbedICCProfile` | Returns TRUE if the AEIO should embed a color profile in the output.

```cpp
AEGP\_GetOutSpecShouldEmbedICCProfile(
 AEIO\_OutSpecH outH,
 A\_Boolean \*embedPB);

```

|
| `AEGP\_GetNewOutSpecColorProfile` | Returns an (opaque) ICC color profile for embedding in the AEIO’s output.
Must be disposed with `AEGP\_DisposeColorProfile`.

```cpp
AEGP\_GetNewOutSpecColorProfile(
 AEGP\_PluginID aegp\_plugin\_id,
 AEIO\_OutSpecH outH,
 AEGP\_ColorProfileP \*color\_profilePP);

```

|
| `AEGP\_GetOutSpecOutputModule` | Returns the `AEGP\_RQItemRefH` and `AEGP\_OutputModuleRefH` associated with the given `AEIO\_OutSpecH`.
Fails if the render queue item is not found, or if `AEIO\_OutSpecH` is not a confirmed outH and is a copy,
i.e. if the Output Module settings dialog is open and the user hasn’t hit OK.

```cpp
AEGP\_GetOutSpecOutputModule(
 AEIO\_OutSpecH outH,
 AEGP\_RQItemRefH \*rq\_itemP,
 AEGP\_OutputModuleRefH \*om\_refP);

```

|
