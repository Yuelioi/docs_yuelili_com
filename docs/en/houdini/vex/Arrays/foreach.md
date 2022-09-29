---
title: foreach
order: 5
category:
  - houdini
---

## Description

On this page

- Simple form

- Enumerated form

The length of the array is determined before the first iteration, so if the
array is changed during the foreach this will not be reflected in the number
of iterations.

### Simple form ¶

```c
foreach ([element_type] value; array) { }
```

This loops over the members of array. For each iteration, it **copies** the
current member to value and then executes statement. For example:

```c
int an_array[] = {1, 2} foreach (int num; an_array) { printf("%d",
num); }
```

### Enumerated form ¶

The second form lets you specify an enumeration variable:

```c
foreach (index, value; array) statement; foreach (int index;
element_type value; array) statement;
```

For each iteration, this form assigns the current _position_ in the array to
index, **copies** the current member to value, and executes statement. For
example:

```c
string days[] = { "Mon", "Tue", "Wed", "Thu", "Fri" } foreach (int i;
string name; days) { printf("Day number %d is %s", i, name); }
```

This is similar to the common Python idiom `for i, x in enumerate(xs):`.

## See also

- [Arrays ](../arrays.html)
