---
title: sensor_panorama_getcone
order: 4
category:
  - vex
---

`void sensor_panorama_getcone(int handle, vector lookodir, float angle, vector colormin, vector colormax, float depthmin, float depthmax, float &strength, vector &dir, vector &color, float &depth)`

This function will render the surrounding environment using the GL render and
provides a handle to use for querying the results.

It averages out all rendered pixels in a cone shaped area. The `colormin` and
`colormax` can be used to mask out only pixels that lie in this range, useful
for color-coding different regions of interest. The resulting dir and strength
inform the weighted center of all matching pixels, and the relative amount that
passed the color and depth filters. The color and depth are the average of all
matched pixels.
