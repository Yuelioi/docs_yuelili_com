---
title: metaimport
order: 2
category:
  - vex
---

`int metaimport(int handle, string attrib, vector P, <type>&value)`

`<type>[] metaimport(string file, string attribute, vector P)`

Rather than iterating over all the values, this form imports the values from all metaballs simultaneously. As with the scalar form, you can use the keywords…

- `meta:density`
- `meta:prim`
- `meta:transform`

…to import non-attribute information from the metaballs.

Once you get a handle to a metaball using [metastart](metastart.html "Open a geometry file and return a handle for the metaballs of
interest, at the position p.") and
[metanext](metanext.html) ("Iterate to the next metaball in the list of metaballs returned by the metastart() function."), you can query attributes of the metaball with
`metaimport`.

There are three “special” attributes you can query:

`float meta:density` :
The density of the current metaball

`float meta:prim` :
The primitive number of the current metaball

`matrix meta:transform` :
The transform associated with the current metaball. Applying the
inverse of this transform will transform a point into the “space” of
the metaball.

For example, the [metaweight](metaweight.html) ("Returns the metaweight of the geometry at position p.") function can be expressed in the following
way:

```c
float
metaweight(string file; vector P)
{
int handle;
float density, tmp;

density = 0;
handle = metastart(file, P);
while (metanext(handle))
{
if (metaimport(handle, "meta:density", P, tmp))
density += tmp;
}
return density;
}

```

The attributes evaluated are un-premultiplied by the weight of the
metaball at the position and must be multiplied for blending. For
example, to evaluate a vector attribute (say color) on metaballs, the
following function could be used:

```c
vector
meta_attribute(string file, attrib_name; vector P)
{
int handle;
vector result, tmp;
float density;

handle = metastart(file, P);
result = 0;
while (metanext(handle))
{
if (metaimport(handle, "meta:density", P, density))
{
if (metaimport(handle, attrib_name, P, tmp))
result += density \* tmp;
}
return result;
}

```

In the i3d context, there is a default metaball geometry (specified
by the `-g` option on the command line to the i3dgen program). If the
filename is an empty string, the default geometry will be used.

metaball

[metaimport](metaimport.html)

[metamarch](metamarch.html)

[metanext](metanext.html)

[metastart](metastart.html)

[metaweight](metaweight.html)
