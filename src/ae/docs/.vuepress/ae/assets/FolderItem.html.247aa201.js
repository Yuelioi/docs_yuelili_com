import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as t,e as s}from"./app.75ca2a8e.js";const a={},o=s(`<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><h1 id="folderitem-object\xB6" tabindex="-1"><a class="header-anchor" href="#folderitem-object\xB6" aria-hidden="true">#</a> FolderItem object\xB6</h1><p><code>app.project.FolderItem</code></p><p><strong>Description</strong></p><p>The FolderItem object corresponds to a folder in your Project panel. It cancontain various types of items (footage, compositions, solids) as well as other folders.</p><p><strong>Example</strong></p><p>Given that the second item in the project is a FolderItem, the following codeputs up an alert for each top-level item in the folder, showing that item\u2019s name.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> secondItem <span class="token operator">=</span> app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>secondItem <span class="token keyword">instanceof</span> <span class="token class-name">FolderItem</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;problem: second item is not a folder&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> secondItem<span class="token punctuation">.</span>numItems<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;item number &quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot; within the folder is named &quot;</span> <span class="token operator">+</span> secondItem<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="attributes\xB6" tabindex="-1"><a class="header-anchor" href="#attributes\xB6" aria-hidden="true">#</a> Attributes\xB6</h2><h3 id="folderitem-items\xB6" tabindex="-1"><a class="header-anchor" href="#folderitem-items\xB6" aria-hidden="true">#</a> FolderItem.items\xB6</h3><p><code>app.project.item(index).items</code></p><p><strong>Description</strong></p><p>An ItemCollection object containing Item object that represents the top-level contents of this folder.</p><p>Unlike the ItemCollection in the Project object, this collection contains onlythe top-level items in the folder. The top-level within the folder is not thesame as top-level within the project. Only those items that are top-level inthe root folder are also top-level in the Project.</p><p><strong>Type</strong></p><p>ItemCollection object; read-only.</p><hr><h3 id="folderitem-numitems\xB6" tabindex="-1"><a class="header-anchor" href="#folderitem-numitems\xB6" aria-hidden="true">#</a> FolderItem.numItems\xB6</h3><p><code>app.project.item(index).numItems</code></p><p><strong>Description</strong></p><p>The number of items contained in the items collection(<code>folderItem.items.length</code>).</p><p>If the folder contains another folder, only the FolderItem for that folder iscounted, not any subitems contained in it.</p><p><strong>Type</strong></p><p>Integer; read-only.</p><hr><h2 id="methods\xB6" tabindex="-1"><a class="header-anchor" href="#methods\xB6" aria-hidden="true">#</a> Methods\xB6</h2><h3 id="folderitem-item-\xB6" tabindex="-1"><a class="header-anchor" href="#folderitem-item-\xB6" aria-hidden="true">#</a> FolderItem.item()\xB6</h3><p><code>app.project.item(index).item(subIndex)</code></p><p><strong>Description</strong></p><p>Returns the top-level item in this folder at the specified index position.</p><p>Note that \u201Ctop-level\u201D here means top-level within the folder, not necessarily within the project.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>subIndex</code></td><td>An integer, the position index of the item to retrieve. The first item is at</td></tr></tbody></table><p>index 1.<br><strong>Returns</strong> Item object.</p>`,35),p=[o];function i(r,c){return n(),t("div",null,p)}const u=e(a,[["render",i],["__file","FolderItem.html.vue"]]);export{u as default};
