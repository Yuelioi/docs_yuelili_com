---
title: chinput
order: 9
category:
  - vex
---

Context(s)
[chop](../contexts/chop.html)

`<type> chinput(int channel_index, float|intsample)`

`<type> chinput(int opinput, int channel_index, float|intsample)`

Read a sample from the channel at the given index.
The version without `opinput` assumes the first input (0).

`<type> chinput(string channel_name, float|intsample)`

`<type> chinput(int opinput, string channel_name, float|intsample)`

Read a sample from the channel with the given name.
The version without `opinput` assumes the first input (0).

`int chinput(int channel_index, float|intsample, vector &t, vector &r, vector &s)`

`int chinput(int opinput, int channel_index, float|intsample, vector &t, vector &r, vector &s)`

Read samples from the 9 channels starting at the given index.
The samples are returned in the 3 vector output arguments.
Returns 1 on success or 0 on failure.
The version without `opinput` assumes the first input (0).

`int chinput(string channel_name, float|intsample, vector &t, vector &r, vector &s)`

`int chinput(int opinput, string channel_name, float|intsample, vector &t, vector &r, vector &s)`

Read samples from the 9 channels starting at the given channel name.
The samples are returned in the 3 vector output arguments.
Returns 1 on success or 0 on failure.
The version without `opinput` assumes the first input (0).

## Arguments

`opinput`

The input number to read from, starting from 0. For example, the first input is 0, the second input is 1, and so on.

`sample`

If this is fractional, the value is linearly interpolated from the
two nearest points.

## Returns

The value of a channel at the specified sample in an input.

chop

[chadd](chadd.html)

[chattr](chattr.html)

[chattrnames](chattrnames.html)

[chend](chend.html)

[chendf](chendf.html)

[chendt](chendt.html)

[chindex](chindex.html)

[chinput](chinput.html)

[chinputlimits](chinputlimits.html)

[chname](chname.html)

[chnames](chnames.html)

[chnumchan](chnumchan.html)

[chop](chop.html)

[choplocal](choplocal.html)

[choplocalt](choplocalt.html)

[chopt](chopt.html)

[chrate](chrate.html)

[chreadbuf](chreadbuf.html)

[chremove](chremove.html)

[chremoveattr](chremoveattr.html)

[chrename](chrename.html)

[chresizebuf](chresizebuf.html)

[chsetattr](chsetattr.html)

[chsetlength](chsetlength.html)

[chsetrate](chsetrate.html)

[chsetstart](chsetstart.html)

[chstart](chstart.html)

[chstartf](chstartf.html)

[chstartt](chstartt.html)

[chwritebuf](chwritebuf.html)

[isframes](isframes.html)

[issamples](issamples.html)

[isseconds](isseconds.html)
