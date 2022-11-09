---
title: chattr
order: 3
category:
  - vex
---

Context(s)
[chop](../contexts/chop.html)

`<type> chattr(string attrname, int &success)`

`<type> chattr(int opinput, string attrname, int &success)`

Get the value of a clip-level attribute.
The version without `opinput` assumes the first input (0).

`<type> chattr(string attrname, int channel, int &success)`

`<type> chattr(int opinput, string attrname, int channel, int &success)`

Get the value of a channel-level attribute.
The version without `opinput` assumes the first input (0).

`<type> chattr(string attrname, int channel, int sample, int &success)`

`<type> chattr(int opinput, string attrname, int channel, int sample, int &success)`

Get the value of an attribute.
The function guesses the attribute class from the other arguments.
The version without `opinput` assumes the first input (0).

`<type> chattr(string attrclass, string attrname, int channel, int sample, int &success)`

`<type> chattr(int opinput, string attribclass, string attrname, int channel, int sample, int &success)`

Get the value of an attribute of a specific class.
The version without `opinput` assumes the first input (0).

CHOP attributes store metadata on clips, channels, samples, or channel/sample pairs.

This function reads the value of a CHOP attribute. Use [chsetattr](chsetattr.html) ("Sets the value of a CHOP attribute.") to set CHOP attributes.

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

Signatures that don’t have this parameter act the same as if you passed the empty string.

`attrname`

The name of the attribute to read.

`channel`

When reading a `channel` or `channelsample` attribute, this is the index of the channel.
If you are reading a `clip` or `sample` attribute, use `-1` here.

`sample`

When reading a `sample` or `channelsample` attribute, this is the sample number.
If you are reading a `clip` or `channel` attribute, use `-1` here.

`success`

If the given attribute exists and can be read, the function sets this variable to `1`. Otherwise, it sets this variable to `0`.

## Returns

The value of the attribute.

##

Examples

[¶](#examples)

Read the “export” attribute on a channel

```c
int success = 0
int input = 0;
string attrname = "export";
string attrclass = "channel";
int channel = 0; // Or use C global variable for current channel index.
int sample = -1; // Or use I global variable for current sample index.
string s = chattr(input, attrname, attrclass, channel, sample, success )
if (success) {
 // Do something with s
 printf("s=%s\n", s);
} else {
 // Couldn't read attribute, usually because an attribute with that
 // name doesn't exist
}

```

## See also

- [chsetattr](chsetattr.html)
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
