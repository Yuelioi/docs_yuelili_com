import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as o,b as n,d as i,w as r,e as a,r as c}from"./app.75ca2a8e.js";const l={},u=a(`<h2 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h2><p>\u65F6\u95F4\u8F74\u7684\u6240\u6709\u5C5E\u6027\u90FD\u5728&quot;Group&quot;\u4E2D\u7EC4\u7EC7,\u7528\u4E8E\u5171\u4EAB\u8BF8\u5982 <code>name</code> and <code>propertyIndex</code>. Groups \u53EF\u4EE5\u62E5\u6709\u56FA\u5B9A\u6570\u91CF\u5C5E\u6027(\u6BD4\u5982\u5355\u72EC\u4E00\u4E2A\u6548\u679C,\u5176\u5C5E\u6027\u4E0D\u4F1A\u53D8\u6362)\u6216\u8005\u53EF\u53D8\u6570\u91CF\u7684\u5C5E\u6027(\u6BD4\u5982\u6548\u679C\u7EC4\u672C\u8EAB,\u6548\u679C\u7EC4\u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u6570\u91CF\u7684\u6548\u679C)</p><ul><li><p><strong>\u56FE\u5C42\u4E2D\u7684\u9876\u7EA7\u7EC4:</strong></p><ul><li>Motion Trackers \u52A8\u6001\u8FFD\u8E2A</li><li>Text \u6587\u672C</li><li>Contents \u5185\u5BB9</li><li>Masks \u8499\u7248</li><li>Effects \u6548\u679C</li><li>Transform \u53D8\u6362</li><li>Layer Styles \u56FE\u5C42\u6837\u5F0F</li><li>Geometry Options \u7269\u7406\u9009\u9879</li><li>Material Options \u6750\u8D28\u9009\u9879</li><li>Audio \u97F3\u9891</li><li>Data \u6570\u636E(\u9A71\u52A8?)</li><li>Essential Properties \u52A8\u6001\u56FE\u5F62\u5C5E\u6027</li></ul></li><li><p><strong>\u5D4C\u5957\u5206\u7EC4</strong></p><ul><li>Individual effects \u72EC\u7ACB\u6548\u679C</li><li>Individual masks \u72EC\u7ACB\u8499\u7248</li><li>Shape groups \u5F62\u72B6\u7EC4</li><li>Text Animators \u6587\u5B57\u52A8\u753B</li></ul></li></ul><hr><h2 id="numproperties" tabindex="-1"><a class="header-anchor" href="#numproperties" aria-hidden="true">#</a> numProperties</h2><p>\u7528\u6CD5\uFF1A\u7EC4.numProperties</p><p>\u8BF4\u660E\uFF1A\u7EC4\u5185\u5C5E\u6027\u4E2A\u6570(\u4E0D\u5305\u542B\u5D4C\u5957\u7EC4\u5185\u7684\u5C5E\u6027)</p><p>\u53C2\u6570\uFF1A\u65E0</p><p>\u7C7B\u578B\uFF1A\u6570\u503C</p><p>\u793A\u4F8B\uFF1A\u67E5\u770B\u6587\u5B57\u7EC4\u6709\u591A\u5C11\u4E2A\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisLayer<span class="token punctuation">.</span>text<span class="token punctuation">.</span>numProperties<span class="token punctuation">;</span> <span class="token comment">// 4</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>thisLayer<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6587\u5B57\u56FE\u5C42\u4E2Dtext\u7EC4\u7684\u5B50\u5C5E\u6027:sourceText, pathOption, moreOption,Animator</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip \u6548\u679C\u4E00\u822C\u4F7F\u7528\u5339\u914D\u540D\u79F0<code>thisLayer(&quot;ADBE Effect Parade&quot;).numProperties</code>\u6765\u67E5\u770B\u6548\u679C\u7684\u6570\u91CF :::</p><h2 id="propertygroup" tabindex="-1"><a class="header-anchor" href="#propertygroup" aria-hidden="true">#</a> propertyGroup</h2><p>\u7528\u6CD5\uFF1ApropertyGroup(<code>countUp=1</code>)</p><p>\u7C7B\u578B\uFF1A\u65B9\u6CD5</p>`,15),d=a(`<p>\u53C2\u6570\uFF1AcountUp,\u7236\u7EA7\u5C42\u7EA7,\u9ED8\u8BA4\u4E3A 1(2 \u5C31\u662F\u7237\u7EA7)</p><p>\u7C7B\u578B\uFF1AGroup</p><p>\u793A\u4F8B\uFF1A\u67E5\u770B\u6587\u5B57\u7EC4\u7236\u7EA7</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisLayer<span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">propertyGroup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u5F53\u524D\u6587\u5B57\u56FE\u5C42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="propertyindex" tabindex="-1"><a class="header-anchor" href="#propertyindex" aria-hidden="true">#</a> propertyIndex</h2><p>\u7528\u6CD5\uFF1AXX.propertyIndex</p><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE\u5F53\u524D\u5C5E\u6027\u5728\u5176\u7236\u7EC4\u7684\u7D22\u5F15</p><p>\u7C7B\u578B\uFF1A\u6570\u503C</p><p>\u793A\u4F8B\uFF1A\u67E5\u770B\u6587\u5B57\u7EC4\u5728\u56FE\u5C42\u91CC\u7684\u7D22\u5F15</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>thisLayer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6587\u5B57\u56FE\u5C42\u7684\u5C5E\u6027:text,transform</span>
text<span class="token punctuation">.</span>propertyIndex<span class="token punctuation">;</span> <span class="token comment">// 2</span>
transform<span class="token punctuation">.</span>propertyIndex<span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip \u7531\u6B64\u53EF\u89C1,\u5C5E\u6027\u7D22\u5F15\u5E76\u975E\u89C6\u89C9\u4E0A\u7684 1 2,\u603B\u4F53\u7684\u7D22\u5F15\u5927\u6982\u4E5F\u5305\u542B\u4E86\u5B50\u5C5E\u6027,\u8FD8\u6709\u4E9B\u9690\u85CF\u5C5E\u6027 :::</p><h2 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h2><p>\u8BF4\u660E:\u7EC4\u7684\u540D\u79F0</p><p>\u8FD4\u56DE:\u5B57\u7B26\u4E32</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisLayer<span class="token punctuation">.</span>text<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// Text</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15);function m(h,v){const e=c("RouterLink");return t(),p("div",null,[u,o("p",null,[n("\u8BF4\u660E\uFF1A\u8FD4\u56DE\u7236\u7EA7\u5C5E\u6027\u7EC4,\u53C2\u89C1 "),i(e,{to:"/zh/ae/expression/Objects/property.html#property-propertygroup"},{default:r(()=>[n("propertyGroup(countUp=1)")]),_:1})]),d])}const y=s(l,[["render",m],["__file","Group.html.vue"]]);export{y as default};
