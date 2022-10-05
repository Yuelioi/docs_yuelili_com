import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,e as o}from"./app.75ca2a8e.js";const t={},n=o('<p>:::info Note</p><p>The wiggle method\u2014which is used to randomly vary a property value\u2014is in theProperty attributes and methods category. See Property attributes and methods. :::</p><hr><h2 id="seedrandom-offset-timeless-false" tabindex="-1"><a class="header-anchor" href="#seedrandom-offset-timeless-false" aria-hidden="true">#</a> seedRandom(<code>offset</code>, <code>timeless=false</code>)</h2><p><strong>Description</strong></p><p>The random and gaussRandom methods use a seed value that controls the sequenceof numbers. By default, the seed is computed as a function of a unique layeridentifier, the property within the layer, the current time, and an offsetvalue of <code>0</code>. Call seedRandom to set the offset to something other than 0 tocreate a different random sequence. Use true for the timeless argument to notuse the current time as input to the random seed. Using true for the timelessargument allows you to generate a random number that doesn\u2019t vary depending onthe time of evaluation. The offset value, but not the timeless value, is alsoused to control the initial value of the wiggle function.</p><p>For example, this expression on the Opacity property sets the Opacity value toa random value that does not vary with time:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">seedRandom</span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The multiplication by <code>100</code> in this example converts the value in the range<code>0\u20131</code> returned by the random method into a <code>number</code> in the range <code>0\u2013100</code>; thisrange is more typically useful for the Opacity property, which has values from <code>0%</code> to <code>100%</code>.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>offset</code></td><td>Number</td></tr><tr><td><code>timeless</code></td><td>Boolean</td></tr></tbody></table><p><strong>Type</strong></p><p>None</p><hr><h2 id="random" tabindex="-1"><a class="header-anchor" href="#random" aria-hidden="true">#</a> random()</h2><p><strong>Description</strong></p><p>Returns a random number in the range <code>0\u20131</code>.</p><p>:::info Note</p><p>In After Effects CC and CS6, the behavior of random() is changed to be morerandom when layer IDs are close together. The wiggle() expression is not affected. ::: <strong>Type</strong></p><p>Number</p><hr><h2 id="random-maxvalorarray" tabindex="-1"><a class="header-anchor" href="#random-maxvalorarray" aria-hidden="true">#</a> random(<code>maxValOrArray</code>)</h2><p><strong>Description</strong></p><p>If <code>maxValOrArray</code> is a <code>Number</code>, this method returns a number in the rangefrom <code>0</code> to <code>maxValOrArray</code>. If <code>maxValOrArray</code> is an <code>Array</code>, this methodreturns an Array with the same dimension as <code>maxValOrArray</code>, with eachcomponent ranging from <code>0</code> to the corresponding component of <code>maxValOrArray</code>.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>maxValOrArray</code></td><td>Number or Array</td></tr></tbody></table><p><strong>Type</strong></p><p>Number or Array</p><hr><h2 id="random-minvalorarray-maxvalorarray" tabindex="-1"><a class="header-anchor" href="#random-minvalorarray-maxvalorarray" aria-hidden="true">#</a> random(<code>minValOrArray</code>, <code>maxValOrArray</code>)</h2><p><strong>Description</strong></p><p>If <code>minValOrArray</code> and <code>maxValOrArray</code> are <code>Numbers</code>, this method returns anumber in the range from <code>minValOrArray</code> to <code>maxValOrArray</code>.</p><p>If the arguments are <code>Arrays</code>, this method returns an <code>Array</code> with the samedimension as the argument with the greater dimension, with each component inthe range from the corresponding component of <code>minValOrArray</code> to thecorresponding component of <code>maxValOrArray</code>.</p><p>For example, the expression <code>random([100, 200], [300, 400])</code> returns an<code>Array</code> whose first value is in the range <code>100\u2013300</code> and whose second value isin the range <code>200\u2013400</code>. If the dimensions of the two input Arrays don\u2019t match,higher-dimension values of the shorter Array are filled out with zeros.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>minValOrArray</code></td><td>Number or Array</td></tr><tr><td><code>maxValOrArray</code></td><td>Number or Array</td></tr></tbody></table><p><strong>Type</strong></p><p>Number or Array</p><hr><h2 id="gaussrandom" tabindex="-1"><a class="header-anchor" href="#gaussrandom" aria-hidden="true">#</a> gaussRandom()</h2><p><strong>Description</strong></p><p>The results have a Gaussian (bell-shaped) distribution. Approximately <code>90%</code> ofthe results are in the range <code>0\u20131</code>, and the remaining <code>10%</code> are outside this range.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="gaussrandom-maxvalorarray" tabindex="-1"><a class="header-anchor" href="#gaussrandom-maxvalorarray" aria-hidden="true">#</a> gaussRandom(<code>maxValOrArray</code>)</h2><p><strong>Description</strong></p><p>When <code>maxValOrArray</code> is a <code>Number</code>, this method returns a random number.Approximately <code>90%</code> of the results are in the <code>0</code> to <code>maxValOrArray</code> range,and the remaining <code>10%</code> are outside this range.</p><p>When <code>maxValOrArray</code> is an <code>Array</code>, this method returns an Array of randomvalues, with the same dimension as <code>maxValOrArray</code>. <code>90%</code> of the values are inthe range from <code>0</code> to <code>maxValOrArray</code>, and the remaining <code>10%</code> are outside this range.</p><p>The results have a Gaussian (bell-shaped) distribution.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>maxValOrArray</code></td><td>Number or Array</td></tr></tbody></table><p><strong>Type</strong></p><p>Number or Array</p><hr><h2 id="gaussrandom-minvalorarray-maxvalorarray" tabindex="-1"><a class="header-anchor" href="#gaussrandom-minvalorarray-maxvalorarray" aria-hidden="true">#</a> gaussRandom(<code>minValOrArray</code>, <code>maxValOrArray</code>)</h2><p><strong>Description</strong></p><p>If <code>minValOrArray</code> and <code>maxValOrArray</code> are <code>Numbers</code>, this method returns arandom number. Approximately <code>90%</code> of the results are in the range from<code>minValOrArray</code> to <code>maxValOrArray</code>, and the remaining <code>10%</code> are outside this range.</p><p>If the arguments are <code>Arrays</code>, this method returns an <code>Array</code> of randomnumbers with the same dimension as the argument with the greater dimension.For each component, approximately <code>90%``of the results are in the range fromthe corresponding component of ``minValOrArray</code> to the corresponding componentof <code>maxValOrArray</code>, and the remaining <code>10%</code> are outside this range.</p><p>The results have a Gaussian (bell-shaped) distribution.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>minValOrArray</code></td><td>Number or Array</td></tr><tr><td><code>maxValOrArray</code></td><td>Number or Array</td></tr></tbody></table><p><strong>Type</strong></p><p>Number or Array</p><hr><h2 id="noise-valorarray" tabindex="-1"><a class="header-anchor" href="#noise-valorarray" aria-hidden="true">#</a> noise(<code>valOrArray</code>)</h2><p><strong>Description</strong></p><p>Returns a number in the range from <code>-1</code> to <code>1</code>. The noise is not actuallyrandom; it is based on Perlin noise, which means that the return values fortwo input values that are near one another tend to be near one another. Thistype of noise is useful when you want a sequence of seemingly random numbersthat don\u2019t vary wildly from one to the other\u2014as is usually the case whenanimating any apparently random natural motion.</p><p>Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>rotation <span class="token operator">+</span> <span class="token number">360</span> <span class="token operator">*</span> <span class="token function">noise</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>valOrArray</code></td><td>Number or an Array (2- or 3-dimensional)</td></tr></tbody></table><p><strong>Type</strong></p><p>Number</p>',74),s=[n];function d(i,c){return r(),a("div",null,s)}const m=e(t,[["render",d],["__file","Random.html.vue"]]);export{m as default};
