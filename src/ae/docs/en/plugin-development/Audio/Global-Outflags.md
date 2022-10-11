---
title: Global Outflags
order: 3
category:
  - AE 插件开发
---

# Global Outflags

All audio effects must set either `PF\_OutFlag\_AUDIO\_EFFECT\_TOO` or `PF\_OutFlag\_AUDIO\_EFFECT\_ONLY`.

`PF\_OutFlag\_I\_USE\_AUDIO` is for visual effects that check out audio data, but don’t modify it.

`PF\_OutFlag\_AUDIO\_FLOAT\_ONLY`, `PF\_OutFlag\_AUDIO\_IIR` and `PF\_OutFlag\_I\_SYNTHESIZE\_AUDIO` provide greater control over audio output (see [PF_OutFlags](../effect-basics/PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags) for more details).
