import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a,b as e,d as r,w as i,e as n,r as c}from"./app.75ca2a8e.js";const l={},u=n('<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h1 id="shape-object\xB6" tabindex="-1"><a class="header-anchor" href="#shape-object\xB6" aria-hidden="true">#</a> Shape object\xB6</h1><p><code>app.project.item(index).layer(index).property(index).property(&quot;maskShape&quot;).value</code></p><p><strong>Description</strong></p><p>The Shape object encapsulates information describing a shape in a shape layer,or the outline shape of a Mask. It is the value of the \u201CMask Path\u201D AEproperties, and of the \u201CPath\u201D AE property of a shape layer. Use theconstructor, <code>new Shape()</code>, to create a new, empty Shape object, then set theattributes individually to define the shape.</p><p>A shape has a set of anchor points, or vertices, and a pair of directionhandles, or tangent vectors, for each anchor point. A tangent vector (in anon-RotoBezier mask) determines the direction of the line that is drawn to orfrom an anchor point. There is one incoming tangent vector and one outgoingtangent vector associated with each vertex in the shape.</p><p>A tangent value is a pair of x,y coordinates specified relative to theassociated vertex. For example, a tangent of [-1,-1] is located above and tothe left of the vertex and has a 45 degree slope, regardless of the actuallocation of the vertex. The longer a handle is, the greater its influence; forexample, an incoming shape segment stays closer to the vector for an<code>inTangent</code> of [-2,-2] than it does for an <code>inTangent</code> of [-1,-1], even thoughboth of these come toward the vertex from the same direction.</p><p>If a shape is not closed, the <code>inTangent</code> for the first vertex and the<code>outTangent</code> for the final vertex are ignored. If the shape is closed, thesetwo vectors specify the direction handles of the final connecting segment outof the final vertex and back into the first vertex.</p>',8),h=a("code",null,"vertices",-1),d=a("code",null,"inTangents",-1),m=a("code",null,"outTangents",-1),v=n(`<p>For closed mask shapes, variable-width mask feather points can exist anywherealong the mask path. Feather points are part of the Mask Path property.Reference a specific feather point by the number of the mask path segment(portion of the path between adjacent vertices) where it appears.</p><p>:::info Note</p><p>The feather points on a mask are listed in an array in the order that they were created. ::: <strong>Examples</strong></p><ul><li>Create a square mask. A square is a closed shape with 4 vertices. The <code>inTangents</code> and <code>outTangents</code> for connected straight-line segments are 0, the default, and do not need to be explicitly set.</li></ul><blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myShape <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myShape<span class="token punctuation">.</span>vertices <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
myShape<span class="token punctuation">.</span>closed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
  * Create a \u201CU\u201D shaped mask. A \u201CU\u201D is an open shape with the same 4 vertices used in the square.

&gt; \`\`\`javascript
var myShape = new Shape(); myShape.vertices = [[0,0],
&gt; [0,100], [100,100], [100,0]]; myShape.closed = false;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create an oval. An oval is a closed shape with 4 vertices and with inTangent and outTangent values.</li></ul><blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myShape <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myShape<span class="token punctuation">.</span>vertices <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
myShape<span class="token punctuation">.</span>inTangents <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">55.23</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">55.23</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">55.23</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">55.23</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
myShape<span class="token punctuation">.</span>outTangents <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">55.23</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">55.23</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">55.23</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">55.23</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
myShape<span class="token punctuation">.</span>closed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
  * Create a square mask with two feather points. A large square mask with two feather points, one closer to the left end the second mask segment (off the bottom edge) with a radius of 30 pixels and the other one centered the third mask segment (off the right edge) with a larger radius of 100 pixels.

&gt; \`\`\`javascript
var myShape = new Shape(); myShape.vertices = [[100,100],
&gt; [100,400], [400,400], [400,100]]; // segments drawn counter clockwise
&gt; myShape.closed = true; myShape.featherSegLocs = [1, 2]; // segments are
&gt; numbered starting at 0, so second segment is 1 myShape.featherRelSegLocs =
&gt; [0.15, 0.5]; // 0.15 is closer to the lower-left corner of the square
&gt; myShape.featherRadii = [30, 100]; // second feather point (onright-
&gt; sidesegment) has a larger radius
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="attributes\xB6" tabindex="-1"><a class="header-anchor" href="#attributes\xB6" aria-hidden="true">#</a> Attributes\xB6</h2><h3 id="shape-closed\xB6" tabindex="-1"><a class="header-anchor" href="#shape-closed\xB6" aria-hidden="true">#</a> Shape.closed\xB6</h3><p><code>shapeObject.value.closed</code></p><p><strong>Description</strong></p><p>When true, the first and last vertices are connected to form a closed curve.When false, the closing segment is not drawn.</p><p><strong>Type</strong></p><p>Boolean; read/write.</p><hr><h3 id="shape-featherinterps\xB6" tabindex="-1"><a class="header-anchor" href="#shape-featherinterps\xB6" aria-hidden="true">#</a> Shape.featherInterps\xB6</h3><p><code>shapeObject.value.featherInterps</code></p><p><strong>Description</strong></p><p>An array containing each feather point\u2019s radius interpolation type (0 for non-Hold feather points, 1 for Hold feather points).</p><p>:::info Note</p><p>Values are stored in the array in the order that feather points are created. ::: <strong>Type</strong></p><p>Array of integers (0 or 1); read/write.</p><hr><h3 id="shape-featherradii\xB6" tabindex="-1"><a class="header-anchor" href="#shape-featherradii\xB6" aria-hidden="true">#</a> Shape.featherRadii\xB6</h3><p><code>shapeObject.value.featherRadii</code></p><p><strong>Description</strong></p><p>An array containing each feather point\u2019s radius (feather amount); innerfeather points have negative values.</p><p>:::info Note</p><p>Values are stored in the array in the order that feather points are created. ::: <strong>Type</strong></p><p>Array of floating-point values; read/write.</p><hr><h3 id="shape-featherrelcornerangles\xB6" tabindex="-1"><a class="header-anchor" href="#shape-featherrelcornerangles\xB6" aria-hidden="true">#</a> Shape.featherRelCornerAngles\xB6</h3><p><code>shapeObject.value.featherRelCornerAngles</code></p><p><strong>Description</strong></p><p>An array containing each feather point\u2019s relative angle percentage between thetwo normals on either side of a curved outer feather boundary at a corner on amask path. The angle value is 0% for feather points not at corners.</p><p>:::info Note</p><p>Values are stored in the array in the order that feather points are created. ::: <strong>Type</strong></p><p>Array of floating-point percentage values (0 to 100); read/write.</p><hr><h3 id="shape-featherrelseglocs\xB6" tabindex="-1"><a class="header-anchor" href="#shape-featherrelseglocs\xB6" aria-hidden="true">#</a> Shape.featherRelSegLocs\xB6</h3><p><code>shapeObject.value.featherRelSegLocs</code></p><p><strong>Description</strong></p><p>An array containing each feather point\u2019s relative position, from 0 to 1, onits mask path segment (section of the mask path between vertices, numbered starting at 0).</p><p>:::info Note</p><p>Values are stored in the array in the order that feather points are created.To move a feather point to a different mask path segment, first change thefeatherSegLocs attribute value, then this attribute. ::: <strong>Type</strong></p><p>Array of floating-point values (0 to 1); read/write.</p><hr><h3 id="shape-featherseglocs\xB6" tabindex="-1"><a class="header-anchor" href="#shape-featherseglocs\xB6" aria-hidden="true">#</a> Shape.featherSegLocs\xB6</h3><p><code>shapeObject.value.featherSegLocs</code></p><p><strong>Description</strong></p><p>An array containing each feather point\u2019s mask path segment number (section ofthe mask path between vertices, numbered starting at 0).</p><p>:::info Note</p><p>Values are stored in the array in the order that feather points are created.Move a feather point to a different segment by changing both its segmentnumber (this attribute) and, optionally, its featherRelSegLocs attribute value. ::: <strong>Type</strong></p><p>Array of integers; read/write.</p><p><strong>Example</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Assuming a rectangle closed mask (segments numbered 0-3)</span>
has <span class="token number">3</span> mask feather points<span class="token punctuation">,</span> <span class="token comment">// move all 3 feather points to the first masksegment. // Get the Shape object for the mask, assumed here to be the firstmask on the layer. var my_maskShape = layer.mask(1).property(&quot;ADBE MaskShape&quot;).value; // Check where mask feather points are located. // Note: Theyare stored in the order that they are added. var where_are_myMaskFeatherPoints= my_maskShape.featherSegLocs; // Move all 3 feather points to the first masksegment (numbered 0). my_maskShape.featherSegLocs = [0, 0, 0]; // Update themask path. layer.mask(1).property(&quot;ADBE Mask Shape&quot;).setValue(my_maskShape);</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="shape-feathertensions\xB6" tabindex="-1"><a class="header-anchor" href="#shape-feathertensions\xB6" aria-hidden="true">#</a> Shape.featherTensions\xB6</h3><p><code>shapeObject.value.featherTensions</code></p><p><strong>Description</strong></p><p>An array containing each feather point\u2019s tension amount, from 0 (0% tension) to 1 (100% tension).</p><p>:::info Note</p><p>Values are stored in the array in the order that feather points are created. ::: <strong>Type</strong></p><p>Array of floating-point values (0 to 1); read/write.</p><hr><h3 id="shape-feathertypes\xB6" tabindex="-1"><a class="header-anchor" href="#shape-feathertypes\xB6" aria-hidden="true">#</a> Shape.featherTypes\xB6</h3><p><code>shapeObject.value.featherTypes</code></p><p><strong>Description</strong></p><p>An array containing each feather point\u2019s direction, either 0 (outer featherpoint) or 1 (inner feather point).</p><p>:::info Note</p><p>You cannot change the direction of a feather point after it has been created.</p><p>Values are stored in the array in the order that feather points are created. ::: <strong>Type</strong></p><p>Array of integers (0 or 1); read/write.</p><hr><h3 id="shape-intangents\xB6" tabindex="-1"><a class="header-anchor" href="#shape-intangents\xB6" aria-hidden="true">#</a> Shape.inTangents\xB6</h3><p><code>shapeObject.value.inTangents</code></p><p><strong>Description</strong></p><p>The incoming tangent vectors, or direction handles, associated with thevertices of the shape. Specify each vector as an array of two floating-pointvalues, and collect the vectors into an array the same length as the <code>vertices</code> array.</p><p>Each tangent value defaults to [0,0]. When the mask shape is not RotoBezier,this results in a straight line segment.</p><p>If the shape is in a RotoBezier mask, all tangent values are ignored and thetangents are automatically calculated.</p><p><strong>Type</strong></p><p>Array of floating-point pair arrays; read/write.</p><hr><h3 id="shape-outtangents\xB6" tabindex="-1"><a class="header-anchor" href="#shape-outtangents\xB6" aria-hidden="true">#</a> Shape.outTangents\xB6</h3><p><code>shapeObject.value.outTangents</code></p><p><strong>Description</strong></p><p>The outgoing tangent vectors, or direction handles, associated with thevertices of the shape. Specify each vector as an array of two floating-pointvalues, and collect the vectors into an array the same length as the <code>vertices</code> array.</p><p>Each tangent value defaults to [0,0]. When the mask shape is not RotoBezier,this results in a straight line segment.</p><p>If the shape is in a RotoBezier mask, all tangent values are ignored and thetangents are automatically calculated.</p><p><strong>Type</strong></p><p>Array of floating-point pair arrays; read/write.</p><hr><h3 id="shape-vertices\xB6" tabindex="-1"><a class="header-anchor" href="#shape-vertices\xB6" aria-hidden="true">#</a> Shape.vertices\xB6</h3><p><code>shapeObject.value.vertices</code></p><p><strong>Description</strong></p><p>The anchor points of the shape. Specify each point as an array of twofloating-point values, and collect the point pairs into an array for the complete set of points.</p><p><strong>Example</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myShape<span class="token punctuation">.</span>vertices <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Type</strong></p><p>Array of floating-point pair arrays; read/write.</p>`,103);function k(g,f){const s=c("RouterLink");return o(),p("div",null,[u,a("p",null,[e("RotoBezier masks calculate their tangents automatically. (See"),r(s,{to:"/en/ae/scripting/properties/maskpropertygroup.html#maskpropertygroup-rotobezier"},{default:i(()=>[e("MaskPropertyGroup.rotoBezier")]),_:1}),e(") If a shape is used in a RotoBezier mask, the tangent values areignored. This means that, for RotoBezier masks, you can construct a shape bysetting only the "),h,e(" attribute and setting both "),d,e(" and"),m,e(" to null. When you access the new shape, its tangent values arefilled with the automatically calculated tangent values.")]),v])}const S=t(l,[["render",k],["__file","Shape.html.vue"]]);export{S as default};
