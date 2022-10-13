---
title: Source-Text
order: 2
category:
  - AE 表达式
---

## Description

These functions are accessible from [Text.sourceText](text.html#text-sourcetext) after AE 17.0.

---

## SourceText.style

**Description**

Returns the text style object for a given `sourceText` property.

**Type**

[Text Style](text-style.html#textstyle) object

---

## SourceText.getStyleAt(`charIndex`, `t = time`)

**Description**

This function returns the style value of a particular character at a specific
time.

In case the style is keyframed and changes over time, use the second `time`parameter to specify the target time to get the style at.

:::info Note

Using SourceText.style is the same as using `text.sourceText.getStyleAt(0,0)`
:::

For example, to get the style of the first character at the beginning of the
timeline:

```javascript
text.sourceText.getStyleAt(0, 0);
```

**Parameters**

| Property | Type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| `index`  | Number. The index of the letter or character whose style is needed       |
| `time`   | Number, optional. The time within the composition to get the style from. |

Defaults to `time`.

**Type**

[Text Style](text-style.html#textstyle) object

---

## SourceText.createStyle()

**Description**

Used to initialize an empty [Text Style](text-style.html#textstyle) object inwhich you’d manually bake in specific values.

For example, to create a new style with font size 300 and the font Impact:

```javascript
text.sourceText.createStyle().setFontSize(300).setFont("Impact");
```

**Parameters**

None.

**Type**

Empty [Text Style](text-style.html#textstyle) object
