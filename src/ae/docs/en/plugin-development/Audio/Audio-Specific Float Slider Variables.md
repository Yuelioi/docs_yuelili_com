---
title: Audio-Specific Float Slider Variables
order: 5
category:
  - AE 插件开发
---

# Audio-Specific Float Slider Variables

`PF\_Param\_FLOAT\_SLIDERs` contain several parameters not found in other sliders; flags, phase, and curve tolerance.

---

## Flags

The only flag available is `PF\_FSliderFlag\_WANT\_PHASE`.

This registers the effect to receive updated phase information from After Effects during audio rendering.

To understand what this flag does, turn it off and check your output.

---

## Phase

This is where the requested phase value is stored.

---

## Curve Tolerance

Curve tolerance is used by After Effects to subdivide the audio effects’ time-variant parameters. Set this to zero for default behavior (or for non-audio `FLOAT\_SLIDER` parameters).

---

## What’s Zero, Really?

When amplitude is zero, After Effects is at -192db.
