---
title: chattrnames
order: 4
category:
  - vex
---

Context(s)
[chop](../contexts/chop.html)

`string [] chattrnames(int opinput, string attribclass)`

`string [] chattrnames(string attrclass)`

Returns all the CHOP attribute names of a given attribute class from a CHOP input.

CHOP attributes store metadata on clips, channels, samples, or channel/sample pairs.

## Arguments

`opinput`

The input number to read from, starting from 0. For example, the first input is 0, the second input is 1, and so on.

`attribclass`

The “level” of the attribute:

`"clip"`

An attribute on a whole clip.

`"channel"`

An attribute on a whole channel.

`"sample"`

An attribute on a sample (across all channels).

`"channelsample"`

An attribute on a specific channel/sample pair.

`""`

Pass an empty string to have the function figure out the class based on the other arguments.

## Returns

The attribute names as a string array.

## See also

- [chattr](chattr.html)
- [chsetattr](chsetattr.html)

|
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
