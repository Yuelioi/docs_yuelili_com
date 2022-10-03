---
title: Examples
order: 4
category:
  - AE 表达式
---

:::info Note

Many of the examples in this section are based on expressions provided by Dan
Ebberts.
:::

---

## Get this project’s AEP name (AE 15.1+ only)

While there is no method to directly access your AEP’s name, you CAN get the
full path to the AEP.

With some string manipulation, you can derive the aep name from this:

```javascript
var aepName =
thisProject.fullPath.split($.os.indexOf("Windows") > -1 ? "\\\" : "/").pop();

```

If you wanted to write “Unsaved” in that case, you can use the following
expression:

```javascript
var aepName =
thisProject.fullPath.split($.os.indexOf("Windows") > -1 ? "\\\" : "/").pop();aepName = aepName === "" ? "Unsaved" : aepName;
```

---

## Make a layer revolve in a circle

You can create an expression without using properties from other layers. Forexample, you can make a layer revolve in a perfect circle.

1. Select a layer, press P to reveal its Position property in the Timeline panel, and Alt-click (Windows) or Option-click (Mac OS) the stopwatch to the left of the property name.

2. Enter the following in the expression field:

```javascript
[thisComp.width / 2, thisComp.height / 2] + [Math.sin(time) * 50, -Math.cos(time) * 50];
```

---

## Rotate the hands of a clock

You can use the pick whip to link rotation values between layers to animatethe hands on a clock—as the hour hand moves from hour to hour, the minute handrotates the full circumference of the clock face. This type of animation wouldtake a long time to create if you had to set each keyframe for both handlayers, but with the pick whip, you can do it in a matter of minutes.

1. Import or create two long, narrow solid-color layers: an hour hand and a minute hand.

2. Set the anchor points at the ends of the layers.

3. Move the layers so that the anchor points are at the center of the composition.

4. Set Rotation keyframes for the hour hand.

5. Select the Rotation property for the minute hand and choose `Animation > Add Expression.`

6. Drag the pick whip to the Rotation property for the hour hand. The following expression appears:

```javascript
thisComp.layer("hour hand").rotation;
```

7. To make the minute hand rotate 12 times as fast as the hour hand, add `* 12` at the end of the expression as follows:

```javascript
thisComp.layer("hour hand").rotation * 12;
```

---

## Position one layer between two others

This example expression positions and maintains one layer at a balanceddistance between two other layers.

1. Start with three layers.

2. Animate the positions of the first two layers in the Timeline panel.

3. Select the third layer, press P to reveal the Position property, and Alt-click (Windows) or Option-click (Mac OS) the stopwatch button to the left of the property name.

4. Enter the following in the expression field:

```javascript
(thisComp.layer(1).position + thisComp.layer(2).position) / 2;
```

---

## Create a trail of images

This example expression instructs a layer to be at the same position as thenext higher layer in the Timeline panel, but delayed by a specified amount oftime (in this case, 0.5 seconds). You can set similar expressions for theother geometric properties.

1. Start with two solid-color layers that are scaled to approximately 30% of the composition size. (See Solid-color layers and solid-color footage items.)

2. Animate the position of the first layer.

3. Select the second layer, press P to reveal the Position property, and Alt-click (Windows) or Option-click (Mac OS) the stopwatch button to the left of the property name.

4. Enter the following in the expression field:

```javascript
thisComp.layer(thisLayer, -1).position.valueAtTime(time - 0.5);
```

5. Duplicate the last layer five times by selecting it and pressing Ctrl+D (Windows) or Command+D (Mac OS) five times.

All layers follow the same path, and each is delayed 0.5 seconds from the
previous.

:::info Note

Dan Ebberts provides more examples and techniques for creating trails ofimages on his [MotionScript](http://www.motionscript.com/mastering-expressions/follow-the-leader.html).
:::

---

## Create a bulge between two layers

This example expression synchronizes the Bulge Center argument of the Bulgeeffect in one layer with the position of another layer. For example, you cancreate an effect that looks like a magnifying glass moving over a layer, withthe contents under the magnifying glass bulging as the lens (that is, theoverlying layer) moves. This expression uses the fromWorld method, which makesthe expression work correctly regardless of whether you move the magnifyingglass layer or the underlying layer. You can rotate or scale the underlyinglayer, and the expression stays intact.

You can also use other effects, such as Ripple, with this expression.

1. Start with two layers. Make one layer a magnifying glass or similar object with a hole in the middle and name it Magnifier. (See Creating layers.)

2. Animate the position of the magnifying glass layer. (See Motion paths.)

3. Apply the Bulge effect to the other layer. (See Apply an effect or animation preset.)

4. Select the Bulge Center property of the Bulge effect in the Timeline panel and choose Animation > Add Expression, or Alt-click (Windows) or Option-click (Mac OS) the stopwatch button for the property.

5. Select the default expression text and type the following:

```javascript
fromWorld(thisComp.layer("Magnifier").position);
```

---

## Fade opacity of a 3D layer based on distance from camera

Apply the following expression to the Opacity property of a 3D layer:

```javascript
startFade = 500; // Start fade 500 pixels from camera. endFade
= 1500; // End fade 1500 pixels from camera. try { // Check whether there's a
camera C = thisComp.activeCamera.toWorld([0,0,0]); } catch (err) { // Nocamera, so assume 50mm w = thisComp.width * thisComp.pixelAspect; z =(w/2)/Math.tan(degreesToRadians(19.799)); C = [0,0,-z]; } P =toWorld(anchorPoint); d = length(C,P); linear(d,startFade,endFade,100,0)

```

The fade starts at a distance of `500` pixels from the camera and is completeat `1500` pixels from the camera. The linear interpolation method is used tomap distance values to opacity values.

---

## Make a 3D layer invisible if facing away from camera

Apply the following expression to the Opacity property of a 3D layer:

```javascript
if (toCompVec([0, 0, 1])[2] > 0 ) value else 0
```

:::info Note

Dan Ebberts explains this expression on his[site](http://www.adobe.com/go/learn_ae_motionscriptinvisiblelayer).
:::

---

## Flip layer horizontally if facing away from camera

Apply the following expression to the Scale property of a 3D layer:

```javascript
if (toCompVec([0, 0, 1])[2] > 0 ) value else [-value[0],
value[1], value[2]]
```

---

## Animate scale at each layer marker

Apply the following expression to a Scale property to make a layer wobble at
each marker:

```javascript
n = 0; t = 0; if (marker.numKeys > 0){ n =
marker.nearestKey(time).index; if (marker.key(n).time > time) n\--; } if (n >0) t = time - marker.key(n).time; amp = 15; freq = 5; decay = 3.0; angle =freq * 2 * Math.PI * t; scaleFact = (100 + amp * Math.sin(angle) /Math.exp(decay * t)) / 100; [value[0] * scaleFact, value[1] / scaleFact];

```

---

## Start or stop wiggle at specific time

You can use any expression in place of the wiggle expression used here, tobegin and end the influence of any expression at a specific time.

Apply the following expression to a property to wiggle it beginning at time 2
seconds:

```javascript
timeToStart = 2;
if (time > timeToStart) {
  wiggle(3, 25);
} else {
  value;
}
```

Apply the following expression to a property to stop wiggling it at time 4
seconds:

```javascript
timeToStop = 4;
if (time > timeToStop) {
  value;
} else {
  wiggle(3, 25);
}
```

Apply the following expression to a property to start wiggling it at time 2seconds and stop wiggling it at time 4 seconds:

```javascript
timeToStart = 2;
timeToStop = 4;
if (time > timeToStart && time < timeToStop) {
  wiggle(3, 25);
} else {
  value;
}
```

---

## Match camera focal plane to another layer

Apply the following expression to the Focus Distance property of a cameralayer to have its focus distance match the distance to the anchor point of a
layer named “target”:

```javascript
target = thisComp.layer("target");
V1 = target.toWorld(target.anchorPoint) - toWorld([0, 0, 0]);
V2 = toWorldVec([0, 0, 1]);
dot(V1, V2);
```

:::info Note

Dan Ebberts explains this expression example in detail on his[website](http://motionscript.com/design-guide/auto-focus.html).
:::
