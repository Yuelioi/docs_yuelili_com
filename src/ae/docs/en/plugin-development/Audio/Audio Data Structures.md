---
title: Audio Data Structures
order: 4
category:
  - AE 插件开发
---

# Audio Data Structures

The following data types are used by After Effects to describe audio data.

| **Structure**                                                                                                         | **Description**                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `PF\_SoundFormat`                                                                                                     | Indicates whether the audio is in unsigned pulse code modulation (PCM), signed PCM, or floating point format. |
| `PF\_SoundSampleSize`                                                                                                 | Samples are in 1, 2, or 4 byte format.                                                                        |
| `PF\_SoundChannels`                                                                                                   | Indicates whether the audio is mono or stereo.                                                                |
| `PF\_SoundFormatInfo`                                                                                                 | Contains the sampling rate, number of channels, sample size, and format of the audio to which it refers.      |
| `PF\_SoundWorld`                                                                                                      | Use `PF\_SoundWorlds` to represent audio.                                                                     |
| In addition to a `PF\_SoundFormatInfo`, they contain the length of the audio, and a pointer to the actual audio data. |

`PF\_SoundFormat`, `PF\_SoundSampleSize`, and `PF\_SoundChannels` are all contained within a `PF\_SoundFormatInfo`.

`PF\_SoundWorlds` contain a `PF\_SoundFormatInfo`, and further instance-specific information.
