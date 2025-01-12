import{_ as b}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.Bmms34HN.js";import{f,a as k}from"./chunks/vue-router.DXrhf3jP.js";import{B as d,M as y,V as t,u as h,L as v,O as l,R as n,Q as A,S as a}from"./framework.BdrDMkKq.js";import"./app.C3-ayAPX.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/pinia.BxypGiJI.js";import"./chunks/nprogress.BTWiEusd.js";import"./chunks/vue-i18n.Cq01ir0b.js";import"./content.BByq9LPW.js";const S=f("/posts/force-enable-apple-intelligence-on-china-iphone-12",async s=>JSON.parse('{"title":"国行 iPhone 12 强开 Apple 智能","description":"","frontmatter":{"layout":"post","title":"国行 iPhone 12 强开 Apple 智能","date":"2024-11-10T13:00:00.000Z","updated":"2024-11-10T13:00:00.000Z","categories":"教程","tags":["Apple 智能","iOS"]},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"开整","slug":"开整","link":"#开整","children":[{"level":3,"title":"更改设备设置","slug":"更改设备设置","link":"#更改设备设置","children":[]},{"level":3,"title":"下载 Nugget","slug":"下载-nugget","link":"#下载-nugget","children":[]},{"level":3,"title":"获取设备的 MobileGestalt","slug":"获取设备的-mobilegestalt","link":"#获取设备的-mobilegestalt","children":[]},{"level":3,"title":"强开 Apple 智能","slug":"强开-apple-智能","link":"#强开-apple-智能","children":[]},{"level":3,"title":"恢复面容 ID","slug":"恢复面容-id","link":"#恢复面容-id","children":[]}]},{"level":2,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[]}],"relativePath":"pages/posts/force-enable-apple-intelligence-on-china-iphone-12.md","lastUpdated":1736663826000}'),{lazy:(s,r)=>s.name===r.name}),G={__name:"force-enable-apple-intelligence-on-china-iphone-12",setup(s,{expose:r}){var u;const{data:p}=S(),g=k(),o=Object.assign(g.meta.frontmatter||{},((u=p.value)==null?void 0:u.frontmatter)||{});return g.meta.frontmatter=o,d("pageData",p.value),d("valaxy:frontmatter",o),globalThis.$frontmatter=o,r({frontmatter:{layout:"post",title:"国行 iPhone 12 强开 Apple 智能",date:"2024-11-10T13:00:00.000Z",updated:"2024-11-10T13:00:00.000Z",categories:"教程",tags:["Apple 智能","iOS"]}}),(i,e)=>{const m=b;return v(),y(m,{frontmatter:h(o)},{"main-content-md":t(()=>[e[0]||(e[0]=l("p",null,[n("就，最近不是 Apple 智能很热门嘛，B 站到处都是强开教程，自己早就想看看效果了。但在当时我的设备已经升级到了新的 iOS 18.1 Beta 5，这个版本修复了 "),l("code",null,"sparserestore"),n(" 漏洞导致我无法使用 misakaX 了。")],-1)),e[1]||(e[1]=l("p",null,"好在现在 misakaX 与 Nugget 都对新的 iOS 版本提供了有限支持，所以咱也可以在 iPhone 12 上强开 Apple 智能了！",-1)),A(" more "),e[2]||(e[2]=l("div",{class:"danger custom-block"},[l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"风险警告"),l("span",{lang:"zh-CN"},"风险警告")]),l("p",null,"不建议在主力机上操作，如果 MobileGestalt 配置不当或者操作出现意外，设备可能会 Bootloop 无限重启或者导致数据丢失！"),l("p",null,"在恢复原样之前不要使用爱思助手等第三方工具，否则会导致验机报告变红影响二手销售。")],-1)),e[3]||(e[3]=l("h2",{id:"准备",tabindex:"-1"},[n("准备 "),l("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1)),e[4]||(e[4]=l("p",null,"首先你需要准备这些东西：",-1)),e[5]||(e[5]=l("ul",null,[l("li",null,[l("p",null,"一台电脑，Windows 或者 macOS 都可以，我用的是 Windows 11；"),l("ul",null,[l("li",null,"Windows 设备需要在 Microsoft Store 安装“Apple 设备”应用或者下载 Apple 官网版本的 iTunes。")])]),l("li",null,[l("p",null,"Python 运行环境（版本需要 >= 3.8）")]),l("li",null,[l("p",null,"Nugget；"),l("ul",null,[l("li",null,"之所以不用 misakaX 是因为支持新版本 iOS 的构建只有 macOS 版本，而 Nugget 率先提供了新版本 iOS 支持，并且完全开源、同时支持 Windows、macOS 和 Linux。")])]),l("li",null,[l("p",null,"一根 USB 数据线，用来连接电脑（我不推荐 WiFi 连接，可能会出现一些问题）；")]),l("li",null,[l("p",null,"一台 iPhone，比如我这里是 iPhone 12；")]),l("li",null,[l("p",null,"一个非国区、欧盟区的 Apple 账户。")])],-1)),e[6]||(e[6]=l("h2",{id:"开整",tabindex:"-1"},[n("开整 "),l("a",{class:"header-anchor",href:"#开整","aria-label":'Permalink to "开整"'},"​")],-1)),e[7]||(e[7]=l("h3",{id:"更改设备设置",tabindex:"-1"},[n("更改设备设置 "),l("a",{class:"header-anchor",href:"#更改设备设置","aria-label":'Permalink to "更改设备设置"'},"​")],-1)),e[8]||(e[8]=l("p",null,"目前 Apple 智能的中文支持要等到 2025 年 4 月，因此我们需要将设备显示语言与 Siri 语言均改为 English (United States)。",-1)),e[9]||(e[9]=l("p",null,"使用准备好的外区 Apple 账户登录并关闭“查找”，否则 Nugget 无法工作。",-1)),e[10]||(e[10]=l("h3",{id:"下载-nugget",tabindex:"-1"},[n("下载 Nugget "),l("a",{class:"header-anchor",href:"#下载-nugget","aria-label":'Permalink to "下载 Nugget"'},"​")],-1)),e[11]||(e[11]=l("p",null,[n("我们需要打开 Nugget 的 "),l("a",{href:"https://github.com/leminlimez/Nugget",target:"_blank",rel:"noreferrer"},"GitHub 仓库"),n("，在 Releases 中找到最新的构建版本下载下来。")],-1)),e[12]||(e[12]=l("figure",null,[l("img",{src:"https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/67303f536dc65.webp",alt:"1731215183141.webp",loading:"lazy",decoding:"async"})],-1)),e[13]||(e[13]=l("p",null,"下载到的是已经预先编译好的程序本体，解压到一个地方就可以了。",-1)),e[14]||(e[14]=l("h3",{id:"获取设备的-mobilegestalt",tabindex:"-1"},[n("获取设备的 MobileGestalt "),l("a",{class:"header-anchor",href:"#获取设备的-mobilegestalt","aria-label":'Permalink to "获取设备的 MobileGestalt"'},"​")],-1)),e[15]||(e[15]=l("p",null,[n("在设备上安装“快捷指令”，然后在浏览器里打开"),l("a",{href:"https://www.icloud.com/shortcuts/d6f0a136ddda4714a80750512911c53b",target:"_blank",rel:"noreferrer"},"这个链接"),n("，这会添加一个快捷指令到快捷指令中心。运行快捷指令，然后在设备上找个地方保存 MobileGestalt 文件，使用你喜欢的方式将它传输到电脑上。")],-1)),e[16]||(e[16]=l("p",null,"传输到电脑上以后，复制一份到 Nugget 的目录下用来编辑，原来的文件保持原样不动以免出现问题。",-1)),e[17]||(e[17]=l("h3",{id:"强开-apple-智能",tabindex:"-1"},[n("强开 Apple 智能 "),l("a",{class:"header-anchor",href:"#强开-apple-智能","aria-label":'Permalink to "强开 Apple 智能"'},"​")],-1)),e[18]||(e[18]=l("p",null,"将设备使用数据线与电脑连接，然后打开 Nugget。左上角会有一个设备列表可以选择，在里面找到你的设备后转到“Mobile Gestalt”，勾选“Disable Region Restrictions (ie. Shutter Sound)”。",-1)),e[19]||(e[19]=l("figure",null,[l("img",{src:"https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/6730427694cbf.webp",alt:"1731215987273.webp",loading:"lazy",decoding:"async"})],-1)),e[20]||(e[20]=l("p",null,"然后转到“Eligibility”，勾选“Enable Apple Intelligence (for Unsupported Devices)”与“Enable Eligibility File (test)”，并且把“Spoofed Device Model”更改为“iPhone17,2 (iPhone 16 Pro Max)”。",-1)),e[21]||(e[21]=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"TIP"),l("span",{lang:"zh-CN"},"提示")]),l("p",null,"下载 Apple 智能的模型需要设置“Spoofed Device Model”，这会导致面容 ID 暂时无法使用，我们需要之后把它改回来")],-1)),e[22]||(e[22]=l("figure",null,[l("img",{src:"https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/673043eb8d957.webp",alt:"1731216361750.webp",loading:"lazy",decoding:"async"})],-1)),e[23]||(e[23]=l("p",null,"选完以后，到”Apply“页面，选择你刚才复制的 MobileGestalt 文件，然后点击“Apply Changes”。不出意外的话，你的设备会自动重启。如果报了错，可以检查一下设备连接、看看 iOS 版本是否被 Nugget 支持。",-1)),e[24]||(e[24]=l("p",null,"重启后走一下网络设置，然后应该会进主屏幕。打开设置，不出意外的话应该能看到 Apple 智能的入口。按照正常流程加入等待队列等一段时间让它下模型就可以了。你可以考虑盯着点 iOS 的存储占用，等 Apple 智能的占用大小达到至少 3GB 就可以用一些基本的东西了。",-1)),e[25]||(e[25]=l("figure",null,[l("img",{src:"https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/673045a967b74.webp",alt:"1731216807041.webp",loading:"lazy",decoding:"async"})],-1)),e[26]||(e[26]=l("h3",{id:"恢复面容-id",tabindex:"-1"},[n("恢复面容 ID "),l("a",{class:"header-anchor",href:"#恢复面容-id","aria-label":'Permalink to "恢复面容 ID"'},"​")],-1)),e[27]||(e[27]=l("p",null,"确保能正常使用 AI 以后，关掉 Apple 智能的开关，确保“Spoofed Device Model”为“None”以后点击“Apply Changes”应用更改。",-1)),e[28]||(e[28]=l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"未测试"),l("span",{lang:"zh-CN"},"未测试")]),l("p",null,"我在执行这一步的时候遇到了点问题，无法测试这样是否能够恢复面容 ID。"),l("p",null,"鉴于这是 Nugget 在程序里写明的提示，我把它放在这里了。")],-1)),e[29]||(e[29]=l("h2",{id:"效果展示",tabindex:"-1"},[n("效果展示 "),l("a",{class:"header-anchor",href:"#效果展示","aria-label":'Permalink to "效果展示"'},"​")],-1)),e[30]||(e[30]=l("div",{grid:"~ cols-2",pb:"4"},[l("figure",null,[l("img",{src:"https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/67304c227da7c.webp",alt:"1731218464269.webp",loading:"lazy",decoding:"async"})]),l("figure",null,[l("img",{src:"https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/67304c39e12cb.webp",alt:"1731218474534.webp",loading:"lazy",decoding:"async"})])],-1))]),"main-header":t(()=>[a(i.$slots,"main-header")]),"main-header-after":t(()=>[a(i.$slots,"main-header-after")]),"main-nav":t(()=>[a(i.$slots,"main-nav")]),"main-content-before":t(()=>[a(i.$slots,"main-content-before")]),"main-content":t(()=>[a(i.$slots,"main-content")]),"main-content-after":t(()=>[a(i.$slots,"main-content-after")]),"main-nav-before":t(()=>[a(i.$slots,"main-nav-before")]),"main-nav-after":t(()=>[a(i.$slots,"main-nav-after")]),comment:t(()=>[a(i.$slots,"comment")]),footer:t(()=>[a(i.$slots,"footer")]),aside:t(()=>[a(i.$slots,"aside")]),"aside-custom":t(()=>[a(i.$slots,"aside-custom")]),default:t(()=>[a(i.$slots,"default")]),_:3},8,["frontmatter"])}}};export{G as default,S as usePageData};
