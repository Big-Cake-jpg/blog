import{_ as g}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.Bmms34HN.js";import{f as b,a as y}from"./chunks/vue-router.DXrhf3jP.js";import{B as m,M as v,V as e,u as x,L as C,O as l,Q as V,R as s,S as o}from"./framework.BdrDMkKq.js";import"./app.C3-ayAPX.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/pinia.BxypGiJI.js";import"./chunks/nprogress.BTWiEusd.js";import"./chunks/vue-i18n.Cq01ir0b.js";import"./content.BByq9LPW.js";const P=b("/posts/deploy-valaxy-blog-to-cloudflare-pages",async r=>JSON.parse('{"title":"Valaxy 与 Cloudflare 的邂逅——将 Valaxy 博客部署到 Cloudflare Pages","description":"","frontmatter":{"layout":"post","title":"Valaxy 与 Cloudflare 的邂逅——将 Valaxy 博客部署到 Cloudflare Pages","date":"2023-02-23 21:17:05","updated":"2023-02-23 21:17:05","tags":["Cloudflare","Valaxy"],"categories":["一些小技巧"],"cover":"https://blog-api.lihaoyu.cn/images/posts/deploy-valaxy-blog-to-cloudflare-pages/cover.webp","excerpt_type":"text"},"headers":[{"level":2,"title":"先决条件","slug":"先决条件","link":"#先决条件","children":[]},{"level":2,"title":"新建 Pages 项目","slug":"新建-pages-项目","link":"#新建-pages-项目","children":[]},{"level":2,"title":"添加自定义域名","slug":"添加自定义域名","link":"#添加自定义域名","children":[]}],"relativePath":"pages/posts/deploy-valaxy-blog-to-cloudflare-pages.md","lastUpdated":1736663826000}'),{lazy:(r,i)=>r.name===i.name}),S={__name:"deploy-valaxy-blog-to-cloudflare-pages",setup(r,{expose:i}){var p;const{data:d}=P(),u=y(),n=Object.assign(u.meta.frontmatter||{},((p=d.value)==null?void 0:p.frontmatter)||{});return u.meta.frontmatter=n,m("pageData",d.value),m("valaxy:frontmatter",n),globalThis.$frontmatter=n,i({frontmatter:{layout:"post",title:"Valaxy 与 Cloudflare 的邂逅——将 Valaxy 博客部署到 Cloudflare Pages",date:"2023-02-23 21:17:05",updated:"2023-02-23 21:17:05",tags:["Cloudflare","Valaxy"],categories:["一些小技巧"],cover:"https://blog-api.lihaoyu.cn/images/posts/deploy-valaxy-blog-to-cloudflare-pages/cover.webp",excerpt_type:"text"}}),(t,a)=>{const f=g;return C(),v(f,{frontmatter:x(n)},{"main-content-md":e(()=>[a[0]||(a[0]=l("p",null,"最近将博客从 Vercel 搬迁到了 Cloudflare Pages，页面加载速度感觉提升了一点。正好 Valaxy 对于使用 Cloudflare Pages 部署的文档还在编写，故以此为题作文一篇。",-1)),V(" more "),a[1]||(a[1]=l("h2",{id:"先决条件",tabindex:"-1"},[s("先决条件 "),l("a",{class:"header-anchor",href:"#先决条件","aria-label":'Permalink to "先决条件"'},"​")],-1)),a[2]||(a[2]=l("p",null,"首先，你需要准备这些东西：",-1)),a[3]||(a[3]=l("ul",null,[l("li",null,"一个 Cloudflare 账号；"),l("li",null,"一个 GitHub 账号；"),l("li",null,[s("一个使用 "),l("a",{href:"https://valaxy.site",target:"_blank",rel:"noreferrer"},"Valaxy 框架"),s("搭建的博客；")]),l("li",null,"一个托管于 Cloudflare 的域名。")],-1)),a[4]||(a[4]=l("h2",{id:"新建-pages-项目",tabindex:"-1"},[s("新建 Pages 项目 "),l("a",{class:"header-anchor",href:"#新建-pages-项目","aria-label":'Permalink to "新建 Pages 项目"'},"​")],-1)),a[5]||(a[5]=l("p",null,"登录 Cloudflare 仪表盘，在左侧的侧边栏中找到“Pages”，点击进入。",-1)),a[6]||(a[6]=l("figure",null,[l("img",{src:"https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/df1b1199dad6c4824665b80a625cf7c3_7170784572772355617.webp",alt:"",loading:"lazy",decoding:"async"})],-1)),a[7]||(a[7]=l("p",null,"点击“创建项目”，然后选择“连接到 Git”，按照 Cloudflare 的引导进行 GitHub 账户的添加与 GitHub App 的安装。安装完成后即可返回该页面选择仓库。",-1)),a[8]||(a[8]=l("p",null,[s("此处仓库使用我早期 Valaxy 功能性测试时创建的独立仓库演示，版本为"),l("s",null,"极其远古的"),s(" Valaxy 0.12.3。")],-1)),a[9]||(a[9]=l("figure",null,[l("img",{src:"https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/ff6d211fb63a32a4727c31e06a10cc01_2384595745881146569.webp",alt:"",loading:"lazy",decoding:"async"})],-1)),a[10]||(a[10]=l("p",null,"点击“开始配置”按钮，然后设置一个自己喜欢的项目名称、要部署的分支，“构建设置”请根据下图配置：",-1)),a[11]||(a[11]=l("figure",null,[l("img",{src:"https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/b697f0501bd85a7ef265e4909f463eb0_3886882695087885493.webp",alt:"",loading:"lazy",decoding:"async"})],-1)),a[12]||(a[12]=l("div",{class:"danger custom-block"},[l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"注意"),l("span",{lang:"zh-CN"},"注意")]),l("p",null,"下方的环境变量也需要配置，否则 Valaxy 的构建将会因为 Node.js 版本低于 v14 而失败！")],-1)),a[13]||(a[13]=l("p",null,"配置完成后，点击“保存并部署”按钮，然后等待 Cloudflare Pages 的部署完成。",-1)),a[14]||(a[14]=l("p",null,[l("img",{src:"https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/4b75318929031fac45c8bf34a437265b_1362124432555332309.webp",alt:""}),l("em",null,"部署成功后的提示")],-1)),a[15]||(a[15]=l("h2",{id:"添加自定义域名",tabindex:"-1"},[s("添加自定义域名 "),l("a",{class:"header-anchor",href:"#添加自定义域名","aria-label":'Permalink to "添加自定义域名"'},"​")],-1)),a[16]||(a[16]=l("p",null,[s("然而 Cloudflare Pages 提供的 "),l("code",null,"pages.dev"),s(" 似乎已被屏蔽，因此我们需要绑定一个自定义域名。")],-1)),a[17]||(a[17]=l("p",null,"点击“继续处理项目”，然后点击页面上的“设置自定义域”添加一个自定义域名。",-1)),a[18]||(a[18]=l("figure",null,[l("img",{src:"https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/3314e0fc5554338f9c8cbbf97180cb0c_4128336076909169027.webp",alt:"",loading:"lazy",decoding:"async"})],-1)),a[19]||(a[19]=l("figure",null,[l("img",{src:"https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/dfb1e82ff59e417cbe0363122c4a5019_5669599825006859987.webp",alt:"",loading:"lazy",decoding:"async"})],-1)),a[20]||(a[20]=l("p",null,"等待一段时间之后，就可以通过这个域名访问你的博客了。",-1)),a[21]||(a[21]=l("p",null,"大功告成！",-1))]),"main-header":e(()=>[o(t.$slots,"main-header")]),"main-header-after":e(()=>[o(t.$slots,"main-header-after")]),"main-nav":e(()=>[o(t.$slots,"main-nav")]),"main-content-before":e(()=>[o(t.$slots,"main-content-before")]),"main-content":e(()=>[o(t.$slots,"main-content")]),"main-content-after":e(()=>[o(t.$slots,"main-content-after")]),"main-nav-before":e(()=>[o(t.$slots,"main-nav-before")]),"main-nav-after":e(()=>[o(t.$slots,"main-nav-after")]),comment:e(()=>[o(t.$slots,"comment")]),footer:e(()=>[o(t.$slots,"footer")]),aside:e(()=>[o(t.$slots,"aside")]),"aside-custom":e(()=>[o(t.$slots,"aside-custom")]),default:e(()=>[o(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{S as default,P as usePageData};
