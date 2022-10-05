import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,e as s}from"./app.75ca2a8e.js";const t={},p=s(`<h2 id="comp-name" tabindex="-1"><a class="header-anchor" href="#comp-name" aria-hidden="true">#</a> comp(<code>name</code>)</h2><p><strong>Description</strong></p><p>Retrieves another composition by name.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>String</td></tr></tbody></table><p><strong>Type</strong></p><p>Comp</p><hr><h2 id="footage-name" tabindex="-1"><a class="header-anchor" href="#footage-name" aria-hidden="true">#</a> footage(<code>name</code>)</h2><p><strong>Description</strong></p><p>Retrieves a footage item by name.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>String</td></tr></tbody></table><p><strong>Type</strong></p><p>Footage</p><hr><h2 id="thisproject" tabindex="-1"><a class="header-anchor" href="#thisproject" aria-hidden="true">#</a> thisProject</h2><p><strong>Description</strong></p><p>Represents the project which contains the expression.</p><p><strong>Type</strong></p><p>Project</p><hr><h2 id="thiscomp" tabindex="-1"><a class="header-anchor" href="#thiscomp" aria-hidden="true">#</a> thisComp</h2><p><strong>Description</strong></p><p>Represents the composition containing the expression.</p><p><strong>Type</strong></p><p>Comp</p><hr><h2 id="thislayer" tabindex="-1"><a class="header-anchor" href="#thislayer" aria-hidden="true">#</a> thisLayer</h2><p><strong>Description</strong></p><p>Represents the layer containing the expression. Because thisLayer is thedefault object, its use is optional. For example, you can start an expressionwith thisLayer.width or width and get the same result.</p><p><strong>Type</strong></p><p>Layer, Light, or Camera</p><hr><h2 id="thisproperty" tabindex="-1"><a class="header-anchor" href="#thisproperty" aria-hidden="true">#</a> thisProperty</h2><p><strong>Description</strong></p><p>Represents the property containing the expression. For example, if you writean expression on the Rotation property, you can start an expression withthisProperty to refer to the Rotation property.</p><p><strong>Type</strong></p><p>Property</p><hr><h2 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h2><p><strong>Description</strong></p><p>Represents the composition time, in seconds, at which the expression is being evaluated.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="colordepth" tabindex="-1"><a class="header-anchor" href="#colordepth" aria-hidden="true">#</a> colorDepth</h2><p><strong>Description</strong></p><p>Type the project color depth value. For example, colorDepth returns <code>16</code> whenthe project color depth is 16 bits per channel.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="posterizetime-updatespersecond" tabindex="-1"><a class="header-anchor" href="#posterizetime-updatespersecond" aria-hidden="true">#</a> posterizeTime(<code>updatesPerSecond</code>)</h2><p><strong>Description</strong></p><p>This expression allows you to set the frame rate for a property to be lowerthan the frame rate of the composition.</p><p>The <code>updatesPerSecond</code> value passed in is <em>the number of times per second</em> theexpression should evaluate.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>updatesPerSecond</code></td><td>Number</td></tr></tbody></table><p><strong>Type</strong></p><p>Number</p><p><strong>Examples</strong></p><p>To change a property to a random value 1 time per second:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">posterizeTime</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To change a 2d property (such as Position or Scale) to a random value 3 times per second:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">posterizeTime</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newValue <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>newValue<span class="token punctuation">,</span> newValue<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To change a property to a random value within a specified range, every 12 frames:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> holdFrames <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> minValue <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> maxValue <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token function">posterizeTime</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token function">framesToTime</span><span class="token punctuation">(</span>holdFrames<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newValue <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>minValue<span class="token punctuation">,</span> maxValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
newValue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h2><p><strong>Description</strong></p><p>Represents the value at the current time for the property containing the expression.</p><p><strong>Type</strong></p><p>Number, Array, or String</p>`,73),o=[p];function r(i,c){return n(),a("div",null,o)}const h=e(t,[["render",r],["__file","Global.html.vue"]]);export{h as default};
