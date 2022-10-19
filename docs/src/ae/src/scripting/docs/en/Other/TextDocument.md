---
title: TextDocument object
order: 9
category:
  - AE 脚本
---

## TextDocument object

`new TextDocument(docText)`

`app.project.item(index).layer(index).property("Source Text").value`

**Description**: The TextDocument object stores a value for a TextLayer’s Source Text property.Create it with the constructor, passing the string to be encapsulated.

**Examples**

This sets a value of some source text and displays an alert showing the new
value

```javascript
var myTextDocument = new TextDocument("HappyCake");
myTextLayer.property("Source Text").setValue(myTextDocument);
alert(myTextLayer.property("Source Text").value);
```

This sets keyframe values for text that show different words over time

```javascript
var textProp = myTextLayer.property("Source Text");
textProp.setValueAtTime(0, newTextDocument("Happy"));
textProp.setValueAtTime(0.33, newTextDocument("cake"));
textProp.setValueAtTime(0.66, newTextDocument("is"));
textProp.setValueAtTime(1, newTextDocument("yummy!"));
```

This sets various character and paragraph settings for some text

```javascript
var textProp = myTextLayer.property("Source Text");
var textDocument = textProp.value;
myString = "Happy holidays!";
textDocument.resetCharStyle();
textDocument.fontSize = 60;
textDocument.fillColor = [1, 0, 0];
textDocument.strokeColor = [0, 1, 0];
textDocument.strokeWidth = 2;
textDocument.font = "Times New Roman PSMT";
textDocument.strokeOverFill = true;
textDocument.applyStroke = true;
textDocument.applyFill = true;
textDocument.text = myString;
textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
textDocument.tracking = 50;
textProp.setValue(textDocument);
```

---

## Attributes

### TextDocument.allCaps

`textDocument.allCaps`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: True if a text layer has allcaps enabled; otherwise false.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Boolean; read-only.

---

### TextDocument.applyFill

`textDocument.applyFill`

**Description**: When true, the text layer shows a fill. Access the `fillColor` attribute forthe actual color. When false, only a stroke is shown.

**Type**: Boolean; read/write.

---

### TextDocument.applyStroke

`textDocument.applyStroke`

**Description**: When true, the text layer shows a stroke. Access the `strokeColor` attributefor the actual color and `strokeWidth` for its thickness. When false, only a
fill is shown.

**Type**: Boolean; read/write.

---

### TextDocument.baselineLocs

`textDocument.baselineLocs`

::: info Note

This functionality was added in After Effects 13.6 (CC 2015)
:::
**Description**: The baseline (x,y) locations for a text layer. Line wraps in a paragraph textbox are treated as multiple lines.

::: info Note

If a line has no characters, the x and y values for start and end will be themaximum float value (3.402823466e+38F).
:::
**Type**: Array of floating-point values in the form of

```javascript
[ line0.start_x, line0.start_y, line0.end_x, line0.end_y,
line1.start_x, line1.start_y, line1.end_x, line1.end_y, ... lineN-1.start_x,lineN-1.start_y, lineN-1.end_x, lineN-1.end_y ]
```

---

### TextDocument.baselineShift

`textDocument.baselineShift`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: This text layer’s baseline shift in pixels.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Floating-point value; read-only.

---

### TextDocument.boxText

`textDocument.boxText`

**Description**: True if a text layer is a layer of paragraph (bounded) text; otherwise false.

**Type**: Boolean; read-only.

---

### TextDocument.boxTextPos

`textDocument.boxTextPos`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2) As of AfterEffects 14 (CC2017), it seems this is also writeable.
:::
**Description**: The layer coordinates from a paragraph (box) text layer’s anchor point as a[width, height] array of pixel dimensions.

Warning

This attribute only works on paragraph text layers. This value only reflectsthe first character in the text layer at the current time.

**Type**: Array of ([X,Y]) position coordinates; read-only.

**Example**:

```javascript
// For a paragraph text layer returns [x, y] position from layer anchor point in layer coordinates.
// e.g. approximately [0, -25] withdefault character panel settings.
var boxTextLayerPos = myTextLayer.sourceText.value.boxTextPos;
```

---

### TextDocument.boxTextSize

`textDocument.boxTextSize`

**Description**: The size of a paragraph (box) text layer as a [width, height] array of pixel
dimensions.

**Type**: Array of two integers (minimum value of 1); read/write.

---

### TextDocument.fauxBold

`textDocument.fauxBold`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: True if a text layer has faux bold enabled; otherwise false.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Boolean; read-only.

**Example**:

```javascript
var isFauxBold = myTextLayer.sourceText.value.fauxBold;
```

---

### TextDocument.fauxItalic

`textDocument.fauxItalic`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: True if a text layer has faux italic enabled; otherwise false.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Boolean; read-only.

---

### TextDocument.fillColor

`textDocument.fillColor`

**Description**: The text layer’s fill color, as an array of `[r, g, b]` floating-point values.For example, in an 8-bpc project, a red value of 255 would be 1.0, and in a32-bpc project, an overbright blue value can be something like 3.2.

Warning

This value only reflects the first character in the text layer at the currenttime. If you change this value, it resets all characters in the text layer to
the specified setting.

**Type**: Array `[r, g, b]` of floating-point values; read/write.

---

### TextDocument.font

`textDocument.font`

**Description**: The text layer’s font specified by its PostScript name.

Warning

This value only reflects the first character in the text layer at the currenttime. If you change this value, it resets all characters in the text layer to
the specified setting.

**Type**: String; read/write.

---

### TextDocument.fontFamily

`textDocument.fontFamily`

::: info Note

This functionality was added in After Effects 13.1 (CC 2014.1)
:::
**Description**: String with with the name of the font family.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: String; read-only.

---

### TextDocument.fontLocation

`textDocument.fontLocation`

::: info Note

This functionality was added in After Effects 13.1 (CC 2014.1)
:::
**Description**: Path of font file, providing its location on disk.

Warning

Not guaranteed to be returned for all font types; return value may be emptystring for some kinds of fonts.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: String; read-only.

---

### TextDocument.fontSize

`textDocument.fontSize`

**Description**: The text layer’s font size in pixels.

Warning

This value only reflects the first character in the text layer at the currenttime. If you change this value, it resets all characters in the text layer to
the specified setting.

**Type**: Floating-point value (0.1 to 1296, inclusive); read/write.

---

### TextDocument.fontStyle

`textDocument.fontStyle`

::: info Note

This functionality was added in After Effects 13.1 (CC 2014.1)
:::
**Description**: String with style information, e.g., “bold”, “italic”

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: String; read-only.

---

### TextDocument.horizontalScale

`textDocument.horizontalScale`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: This text layer’s horizontal scale in pixels.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Floating-point value; read-only.

**Example**:

```javascript
var valOfHScale = myTextLayer.sourceText.value.horizontalScale;
```

---

### TextDocument.justification

`textDocument.justification`

**Description**: The paragraph justification for the text layer.

**Type**: A `ParagraphJustification` enumerated value; read-only. One of:

- `ParagraphJustification.LEFT_JUSTIFY`

- `ParagraphJustification.RIGHT_JUSTIFY`

- `ParagraphJustification.CENTER_JUSTIFY`

- `ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT`

- `ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT`

- `ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER`

- `ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL`

---

### TextDocument.leading

`textDocument.leading`

::: info Note

This functionality was added in After Effects 14.2 (CC 2017.1)
:::
**Description**: The text layer’s spacing between lines.

Warning

If the text layer has different leading settings for each line, this attributereturns the setting for the first line. Also, if you change the value, itresets all lines in the text layer to the specified setting..

**Type**: Floating-point value; read/write.

**Example**:

```javascript
// This creates a text layer and sets the leading to 100 var
composition = app.project.activeItem;
var myTextLayer = comp.layers.addText("Spring\nSummer\nAutumn\nWinter");
var myTextSource = myTextLayer.sourceText;
var myTextDocument = myTextSource.value;
myTextDocument.leading = 100;
myTextSource.setValue(myTextDocument);
```

---

### TextDocument.pointText

`textDocument.pointText`

**Description**: True if a text layer is a layer of point (unbounded) text; otherwise false.

**Type**: Boolean; read-only.

---

### TextDocument.smallCaps

`textDocument.smallCaps`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: True if a text layer has small caps enabled; otherwise false.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Boolean; read-only.

---

### TextDocument.strokeColor

`textDocument.strokeColor`

**Description**: The text layer’s stroke color, as an array of [r, g, b] floating-point values.For example, in an 8-bpc project, a red value of 255 would be 1.0, and in a32-bpc project, an overbright blue value can be something like 3.2.

Warning

This value only reflects the first character in the text layer at the currenttime. If you change this value, it resets all characters in the text layer to
the specified setting.

**Type**: Array [r, g, b] of floating-point values; read/write.

---

### TextDocument.strokeOverFill

`textDocument.strokeOverFill`

**Description**: Indicates the rendering order for the fill and stroke of a text layer. Whentrue, the stroke appears over the fill.

Warning

This value only reflects the first character in the text layer at the currenttime. If you change this value, it resets all characters in the text layer to
the specified setting.

**Type**: Boolean; read/write.

---

### TextDocument.strokeWidth

`textDocument.strokeWidth`

**Description**: The text layer’s stroke thickness in pixels.

Warning

This value only reflects the first character in the text layer at the currenttime. If you change this value, it resets all characters in the text layer to
the specified setting.

**Type**: Floating-point value (0 to 1000, inclusive); read/write.

---

### TextDocument.subscript

`textDocument.subscript`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: True if a text layer has subscript enabled; otherwise false.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Boolean; read-only.

---

### TextDocument.superscript

`textDocument.superscript`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: True if a text layer has superscript enabled; otherwise false.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Boolean; read-only.

---

### TextDocument.text

`textDocument.text`

**Description**: The text value for the text layer’s Source Text property.

**Type**: String; read/write.

---

### TextDocument.tracking

`textDocument.tracking`

**Description**: The text layer’s spacing between characters.

Warning

This value only reflects the first character in the text layer at the currenttime. If you change this value, it resets all characters in the text layer to
the specified setting.

**Type**: Floating-point value; read/write.

---

### TextDocument.tsume

`textDocument.tsume`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: This text layer’s tsume value.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Floating-point value; read-only.

---

### TextDocument.verticalScale

`textDocument.verticalScale`

::: info Note

This functionality was added in After Effects 13.2 (CC 2014.2)
:::
**Description**: This text layer’s vertical scale in pixels.

Warning

This value only reflects the first character in the text layer at the current
time.

**Type**: Floating-point value; read-only.

---

## Methods

### TextDocument.resetCharStyle()

`textDocument.resetCharStyle()`

**Description**: Restores the default text character characteristics in the Character panel.

**Parameters**: None.

**Returns**: Nothing.

---

### TextDocument.resetParagraphStyle()

`textDocument.resetParagraphStyle()`

**Description**: Restores the default text paragraph characteristics in the Paragraph panel.

**Parameters**: None.

**Returns**: Nothing.
