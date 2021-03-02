export default
`
title:纯手工制作，你的字体图标库
published:2020-10-07
lastEdited:2020-10-07
source:大祖玛
cover:covers/cover_tool.png
<!--divider-->
<section class="prologue">
    <p>
    如果阿里图标库直出，尺寸千奇百怪，与其说是图标库，不如说是SVG源码库；鄙人用 <a href="https://cdn.materialdesignicons.com/5.0.45/" target="_blank">Material Design Icons</a>
    时尝到过甜头，三千多个尺寸统一、风格一致的图标，测试效率碾压一切。
    但 mdi 都偏乖巧，用做管理系统图标不合适，于是记录下基本步骤，用以备忘。
    </p>
    <p>
    <ol>
    <strong><li>图形文件转 SVG</li></strong>
    <strong><li>统一修改图标尺寸</li></strong>
    <strong><li>将图标合并为字体库</li></strong>
    </ol>
    <p>
</p>
</section>

<section>
<h2>第一步 图形文件转 SVG</h2>
<!--<pre class="prettyprint">-->
<!--$ yarn add @mdi/font -D-->
<!--// OR-->
<!--$ npm install @mdi/font -D-->
<!--</pre>-->
<p>
CAD PS 等绘制好的图形导出为 PDF，使用 <a href="https://convertio.co/zh/">Convertio</a> 将 PDF 转 SVG。<strong>Convertio 几乎支持所有的矢量图形文件，有了它，我们不再受限于 illustrator。</strong>
<img class="fullWidth" style="margin: 1rem auto"
         src="__imageHost/images/articles/%E7%BE%8E%E6%9C%AF%2C%E5%B7%A5%E5%85%B7/%E6%89%8B%E5%B7%A5%E5%88%B6%E4%BD%9C%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87%E5%BA%93_3.jpg">
    <small class="imgDescription">Convertio 很赞，支持非常多的矢量图形文件</small>
</p>
</section>
<section>
<h2>第二步 用 Figma 编辑 SVG</h2>
<p>
第一次使用时，需要先创建项目，然后到项目里创建文档，文档里还需创建画布（无画布也可以），最后再导入你的 SVG，需要摸索一段时间，只要基本功能会用，之后每次修改就很快速了。
<strong>
Figma 拷贝出来的 SVG 有一定冗余，仍需要删减代码进一步压缩。
</strong>
</p>
<img class="halfWidth" style="margin: 1.6rem auto 1rem auto"
         src="__imageHost/images/articles/%E7%BE%8E%E6%9C%AF%2C%E5%B7%A5%E5%85%B7/%E6%89%8B%E5%B7%A5%E5%88%B6%E4%BD%9C%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87%E5%BA%93_1.jpg">
    <small class="imgDescription">Figma 不是上手就能用，当初也摸索了很久</small>
<img class="halfWidth" style="margin: 2.6rem auto 1rem auto"
         src="__imageHost/images/articles/%E7%BE%8E%E6%9C%AF%2C%E5%B7%A5%E5%85%B7/%E6%89%8B%E5%B7%A5%E5%88%B6%E4%BD%9C%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87%E5%BA%93_2.jpg">
<small class="imgDescription">选择调整好的图标，然后 Copy as SVG</small>
</section>
<section>
<h2>第三步 用 Icomoon 生成图标字体</h2>
<p>
注意！<a href="https://icomoon.io/">Icomoon</a> 是一个纯前端项目，因此用户数据都是保存在浏览器上的，所以<strong>一定要管理好本地的 SVG 图标库，需要更新时，全选上传，再重新生成字体即可</strong>。
</p>
<img class="halfWidth" style="margin: 1rem auto"
         src="__imageHost/images/articles/%E7%BE%8E%E6%9C%AF%2C%E5%B7%A5%E5%85%B7/%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87%E5%BA%93_4.jpg">
<small class="imgDescription">生成的字体后，还能看到用例代码</small>
<img class="halfWidth" style="margin: 2.6rem auto 1rem auto"
         src="__imageHost/images/articles/%E7%BE%8E%E6%9C%AF%2C%E5%B7%A5%E5%85%B7/%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87%E5%BA%93_5.jpg">
<small class="imgDescription">Icomoon 不只生成字体文件，也有配套的 CSS</small>
</section>
`