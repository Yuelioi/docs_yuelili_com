---
title: chsetattr
order: 23
category:
  - vex
---

Context(s)
[chop](../contexts/chop.html)

`int chsetattr(string attrclass, string attrname, int channel, int sample, <type>value)`

Sets the attribute to the given value in the current CHOP.

`int chsetattr(string attrname, int channel, int sample, <type>value)`

This version assumes the attribute class argument to be `""` (guess the class from the other arguments).

CHOP attributes store metadata on clips, channels, samples, or channel/sample pairs.

This function sets the value of a CHOP attribute. Use [chattr](chattr.html) ("Reads from a CHOP attribute.") to read CHOP attributes.

## Arguments

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

Signatures that don’t have this parameter act the same as if you passed the empty string.

`attrname`

The name of the attribute to write.

`channel`

When reading a `channel` or `channelsample` attribute, this is the index of the channel.
If you are reading a `clip` or `sample` attribute, use `-1` here.

`sample`

When reading a `sample` or `channelsample` attribute, this is the sample number.
If you are reading a `clip` or `channel` attribute, use `-1` here.

`value`

The new attribute value. The type of the argment determines the type of the attribute.

## Returns

Returns `1` if the write succeeded, or `0` otherwise.

## See also

- [chattr](chattr.html)
- [chattrnames](chattrnames.html)

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
