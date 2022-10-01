---
title: Text
order: 1
category:
  - AE 表达式
---

## Description

# Text

This category holds generic text-related entries for text layers.

---

## Text.sourceText

**Description**

Returns the text content of a text layer.

As of After Effects 17.0, this property returns the [Source Text](text-sourcetext.html#sourcetext) object to access text style properties. If nostyle properties are specified, this returns the text content as expected.

**Type**

String of text content, or [Source Text](text-sourcetext.html#sourcetext) (AE
17.0+)

---

## Text.Font…

**Description**

Launches a dialog window for the user to specify a font name and weight.

Upon selection, the internal font name is injected into the expression editor
as a string.

**Type**

String
