import{_ as g}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.Bmms34HN.js";import{f as b,a as w}from"./chunks/vue-router.DXrhf3jP.js";import{B as u,M as W,V as t,u as k,L as v,O as l,R as e,Q as $,S as o}from"./framework.BdrDMkKq.js";import"./app.C3-ayAPX.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/pinia.BxypGiJI.js";import"./chunks/nprogress.BTWiEusd.js";import"./chunks/vue-i18n.Cq01ir0b.js";import"./content.BByq9LPW.js";const y=b("/posts/windows-search-optimization",async a=>JSON.parse('{"title":"优化 Windows Search 搜索，加快搜索速度！","description":"","frontmatter":{"title":"优化 Windows Search 搜索，加快搜索速度！","date":"2022-07-04 16:18:16","updated":"2022-07-04 16:18:16","tags":["Windows"],"categories":["优化"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[]},{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[{"level":3,"title":"设置索引模式","slug":"设置索引模式","link":"#设置索引模式","children":[]},{"level":3,"title":"排除不想索引的文件夹","slug":"排除不想索引的文件夹","link":"#排除不想索引的文件夹","children":[]},{"level":3,"title":"重建索引","slug":"重建索引","link":"#重建索引","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"relativePath":"pages/posts/windows-search-optimization.md","lastUpdated":1736663826000}'),{lazy:(a,r)=>a.name===r.name}),N={__name:"windows-search-optimization",setup(a,{expose:r}){var p;const{data:d}=y(),m=w(),s=Object.assign(m.meta.frontmatter||{},((p=d.value)==null?void 0:p.frontmatter)||{});return m.meta.frontmatter=s,u("pageData",d.value),u("valaxy:frontmatter",s),globalThis.$frontmatter=s,r({frontmatter:{title:"优化 Windows Search 搜索，加快搜索速度！",date:"2022-07-04 16:18:16",updated:"2022-07-04 16:18:16",tags:["Windows"],categories:["优化"]}}),(i,n)=>{const f=g;return v(),W(f,{frontmatter:k(s)},{"main-content-md":t(()=>[n[0]||(n[0]=l("h2",{id:"前言",tabindex:"-1"},[e("前言 "),l("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1)),n[1]||(n[1]=l("p",null,"Windows Search 这个东西，一言难尽…",-1)),n[2]||(n[2]=l("p",null,"你说它没用吧，它还挺有用的；你说它有用吧，它搜索速度还贼慢，还搜不到想要的东西。",-1)),n[3]||(n[3]=l("p",null,"这篇文章，我会告诉各位我的 Windows 搜索为什么那么好用，以及该怎么进行配置。",-1)),$(" more "),n[4]||(n[4]=l("h2",{id:"索引",tabindex:"-1"},[e("索引 "),l("a",{class:"header-anchor",href:"#索引","aria-label":'Permalink to "索引"'},"​")],-1)),n[5]||(n[5]=l("p",null,"等等，什么是索引？",-1)),n[6]||(n[6]=l("blockquote",null,[l("p",null,[l("a",{href:"https://support.microsoft.com/zh-cn/windows/windows-10-%E4%B8%AD%E7%9A%84%E6%90%9C%E7%B4%A2%E7%B4%A2%E5%BC%95-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94-da061c83-af6b-095c-0f7a-4dfecda4d15a",target:"_blank",rel:"noreferrer"},"Windows 10 中的搜索索引：常见问题解答")])],-1)),n[7]||(n[7]=l("p",null,"我们在这里做个比喻。电脑像一本书，而索引就像书里面的书签。",-1)),n[8]||(n[8]=l("p",null,"我想在这本书里找到一句话，如果那句话正好有一个书签，我就能很快地找到这句话。",-1)),n[9]||(n[9]=l("p",null,"反之，如果没有书签，我就可能需要几个小时来找这句话。",-1)),n[10]||(n[10]=l("p",null,"搜索索引也是一个道理。它通过为每个文件建立独一无二的标记并将其存储，从而加快搜索速度，改善搜索体验。",-1)),n[11]||(n[11]=l("h2",{id:"步骤",tabindex:"-1"},[e("步骤 "),l("a",{class:"header-anchor",href:"#步骤","aria-label":'Permalink to "步骤"'},"​")],-1)),n[12]||(n[12]=l("h3",{id:"设置索引模式",tabindex:"-1"},[e("设置索引模式 "),l("a",{class:"header-anchor",href:"#设置索引模式","aria-label":'Permalink to "设置索引模式"'},"​")],-1)),n[13]||(n[13]=l("p",null,"首先，让我们打开 Windows 的设置，导航到“隐私和安全性”->“搜索 Windows”。",-1)),n[14]||(n[14]=l("p",null,"然后我们就能够看到索引状态、索引模式、排除项等等。",-1)),n[15]||(n[15]=l("figure",null,[l("img",{src:"https://img-blog.csdnimg.cn/933c56e4432c4848ba21674bcf208ee1.webp",alt:"索引设置",loading:"lazy",decoding:"async"})],-1)),n[16]||(n[16]=l("blockquote",null,[l("p",null,"如果你用的是 Windows 10，则直接在“设置”的第一级页面中进入“搜索”分类即可。")],-1)),n[17]||(n[17]=l("p",null,"索引模式大多数人默认都是“经典”即只为桌面、音乐、图片、文档文件夹编制索引。",-1)),n[18]||(n[18]=l("p",null,"让我们把它改成“增强”吧",-1)),n[19]||(n[19]=l("h3",{id:"排除不想索引的文件夹",tabindex:"-1"},[e("排除不想索引的文件夹 "),l("a",{class:"header-anchor",href:"#排除不想索引的文件夹","aria-label":'Permalink to "排除不想索引的文件夹"'},"​")],-1)),n[20]||(n[20]=l("p",null,"Windows Search 提供了排除项功能，可以根据自己的需要对部分文件夹进行排除。",-1)),n[21]||(n[21]=l("p",null,"比如，有时候你会发现搜索结果里出现了 DLL 文件或者 QQ 等东西缓存到电脑上的图片之类的东西。",-1)),n[22]||(n[22]=l("p",null,"这时候，我们就需要设置排除的文件夹了。",-1)),n[23]||(n[23]=l("p",null,"排除项一次只能设置一个文件夹，所以你可能需要一段时间来进行排除。",-1)),n[24]||(n[24]=l("h3",{id:"重建索引",tabindex:"-1"},[e("重建索引 "),l("a",{class:"header-anchor",href:"#重建索引","aria-label":'Permalink to "重建索引"'},"​")],-1)),n[25]||(n[25]=l("p",null,"万事大吉以后，我们可以重建索引。这样将会删除之前 Windows 在你电脑上编制的索引，然后重新编制。",-1)),n[26]||(n[26]=l("p",null,"将页面滚动到最底部，选择“高级索引选项”在打开的窗口中选择“高级”；",-1)),n[27]||(n[27]=l("figure",null,[l("img",{src:"https://img-blog.csdnimg.cn/bf56da03b1e74ea1b2b0b5e380718462.webp",alt:"高级索引选项",loading:"lazy",decoding:"async"})],-1)),n[28]||(n[28]=l("p",null,"在另一个弹出的窗口中选择“删除和重建索引”；",-1)),n[29]||(n[29]=l("figure",null,[l("img",{src:"https://img-blog.csdnimg.cn/dc69e2cae4954a6f9ec635b1fb749507.webp",alt:"删除和重建索引",loading:"lazy",decoding:"async"})],-1)),n[30]||(n[30]=l("p",null,"选择后，Windows 会弹出一个提示框询问你是否继续操作，我们点击“确定”；",-1)),n[31]||(n[31]=l("figure",null,[l("img",{src:"https://img-blog.csdnimg.cn/559b51c66b254e1693835349db7c41d3.webp",alt:"重建索引",loading:"lazy",decoding:"async"})],-1)),n[32]||(n[32]=l("p",null,"等待几秒，Windows 会自动开始编制索引。",-1)),n[33]||(n[33]=l("p",null,"稍微等上几分钟，然后你应该就可以通过任务栏的搜索按钮 / 搜索框体验到完美的 Windows Search 了。",-1)),n[34]||(n[34]=l("figure",null,[l("img",{src:"https://img-blog.csdnimg.cn/3f1d78b88589481886e11dcaf1dfed0e.webp",alt:"Windows Search",loading:"lazy",decoding:"async"})],-1)),n[35]||(n[35]=l("h2",{id:"注意事项",tabindex:"-1"},[e("注意事项 "),l("a",{class:"header-anchor",href:"#注意事项","aria-label":'Permalink to "注意事项"'},"​")],-1)),n[36]||(n[36]=l("p",null,"需要注意的是，设置为“增强”模式后，Windows 将会对所有文件（除了排除文件夹）进行索引，索引量通常上万。",-1)),n[37]||(n[37]=l("p",null,"这可能导致 Windows 更新失败，提示 0x800707e7 错误。",-1)),n[38]||(n[38]=l("p",null,"因此，每次更新前为了保险起见，先重建索引，当 Windows 开始编制索引时立刻重启电脑。这样的话更新就不会出现什么大问题。",-1)),n[39]||(n[39]=l("p",null,"如果你有意见，欢迎在评论区里指正！",-1))]),"main-header":t(()=>[o(i.$slots,"main-header")]),"main-header-after":t(()=>[o(i.$slots,"main-header-after")]),"main-nav":t(()=>[o(i.$slots,"main-nav")]),"main-content-before":t(()=>[o(i.$slots,"main-content-before")]),"main-content":t(()=>[o(i.$slots,"main-content")]),"main-content-after":t(()=>[o(i.$slots,"main-content-after")]),"main-nav-before":t(()=>[o(i.$slots,"main-nav-before")]),"main-nav-after":t(()=>[o(i.$slots,"main-nav-after")]),comment:t(()=>[o(i.$slots,"comment")]),footer:t(()=>[o(i.$slots,"footer")]),aside:t(()=>[o(i.$slots,"aside")]),"aside-custom":t(()=>[o(i.$slots,"aside-custom")]),default:t(()=>[o(i.$slots,"default")]),_:3},8,["frontmatter"])}}};export{N as default,y as usePageData};
