import{_ as u}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.Bmms34HN.js";import{f as g,a as f}from"./chunks/vue-router.DXrhf3jP.js";import{B as h,M as y,V as s,u as b,L as v,O as a,R as l,Q as B,S as i}from"./framework.BdrDMkKq.js";import"./app.C3-ayAPX.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/pinia.BxypGiJI.js";import"./chunks/nprogress.BTWiEusd.js";import"./chunks/vue-i18n.Cq01ir0b.js";import"./content.BByq9LPW.js";const C=g("/posts/valaxy",async r=>JSON.parse('{"title":"Valaxy —— 快到没边的全新静态博客框架","description":"","frontmatter":{"title":"Valaxy —— 快到没边的全新静态博客框架","date":"2022-10-17 08:35:47","updated":"2022-10-17 08:35:47","tags":["静态博客"],"categories":"大蛋糕的安利"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[{"level":3,"title":"本地初始化","slug":"本地初始化","link":"#本地初始化","children":[]},{"level":3,"title":"自动构建","slug":"自动构建","link":"#自动构建","children":[]},{"level":3,"title":"手动部署","slug":"手动部署","link":"#手动部署","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"relativePath":"pages/posts/valaxy.md","lastUpdated":1736663826000}'),{lazy:(r,o)=>r.name===o.name}),c={__name:"valaxy",setup(r,{expose:o}){var m;const{data:p}=C(),d=f(),n=Object.assign(d.meta.frontmatter||{},((m=p.value)==null?void 0:m.frontmatter)||{});return d.meta.frontmatter=n,h("pageData",p.value),h("valaxy:frontmatter",n),globalThis.$frontmatter=n,o({frontmatter:{title:"Valaxy —— 快到没边的全新静态博客框架",date:"2022-10-17 08:35:47",updated:"2022-10-17 08:35:47",tags:["静态博客"],categories:"大蛋糕的安利"}}),(e,t)=>{const k=u;return v(),y(k,{frontmatter:b(n)},{"main-content-md":s(()=>[t[0]||(t[0]=a("h2",{id:"前言",tabindex:"-1"},[l("前言 "),a("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1)),t[1]||(t[1]=a("p",null,[l("其实我已经关注云游君的 "),a("a",{href:"https://valaxy.site",target:"_blank",rel:"noreferrer"},"Valaxy"),l(" 很久了，无奈没有条件只能一直用 Hexo。")],-1)),t[2]||(t[2]=a("p",null,"最近上网课拿到电脑，便想着“不然把博客迁移到 Valaxy 吧”，便打开了 Valaxy 的文档开始一顿操作，设置好以后已经基本处于可以用在生产环境的情况了。",-1)),t[3]||(t[3]=a("p",null,"同时我也感受到了它超快的速度以及原生的页面热重载，便打算把它介绍给大家。",-1)),B(" more "),t[4]||(t[4]=a("h2",{id:"开始",tabindex:"-1"},[l("开始 "),a("a",{class:"header-anchor",href:"#开始","aria-label":'Permalink to "开始"'},"​")],-1)),t[5]||(t[5]=a("blockquote",null,[a("p",null,"⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness")],-1)),t[6]||(t[6]=a("h3",{id:"本地初始化",tabindex:"-1"},[l("本地初始化 "),a("a",{class:"header-anchor",href:"#本地初始化","aria-label":'Permalink to "本地初始化"'},"​")],-1)),t[7]||(t[7]=a("p",null,[a("a",{href:"https://github.com/YunYouJun/valaxy",target:"_blank",rel:"noreferrer"},"项目地址")],-1)),t[8]||(t[8]=a("p",null,"新建一个文件夹，然后在这个文件夹内打开终端，输入如下内容进行初始化：",-1)),t[9]||(t[9]=a("div",{class:"language-bash vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-darker vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#E2931D","--shiki-dark":"#FFCB6B"}},"npm"),a("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}}," init"),a("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}}," valaxy")]),l(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#90A4AE","--shiki-light-font-style":"italic","--shiki-dark":"#545454","--shiki-dark-font-style":"italic"}},"# `pnpm create valaxy` is recommened by author")])])]),a("button",{class:"collapse"})],-1)),t[10]||(t[10]=a("p",null,"根据命令行提示即可完成项目初始化。默认使用 Yun 主题，也可以选择文档主题（theme-press）。",-1)),t[11]||(t[11]=a("p",null,"进入到生成的项目文件夹内，输入指令安装依赖并启动本地预览",-1)),t[12]||(t[12]=a("div",{class:"language-bash vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-darker vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#E2931D","--shiki-dark":"#FFCB6B"}},"npm"),a("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}}," install"),a("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#EEFFFF"}}," ")]),l(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#90A4AE","--shiki-light-font-style":"italic","--shiki-dark":"#545454","--shiki-dark-font-style":"italic"}},"# yarn")]),l(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#E2931D","--shiki-dark":"#FFCB6B"}},"npm"),a("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}}," run"),a("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}}," dev")]),l(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#90A4AE","--shiki-light-font-style":"italic","--shiki-dark":"#545454","--shiki-dark-font-style":"italic"}},"# yarn dev")])])]),a("button",{class:"collapse"})],-1)),t[13]||(t[13]=a("p",null,[l("本地预览启动以后，可以访问 "),a("code",null,"http://localhost:4859"),l(" 查看效果。然后就可以修改 "),a("code",null,"valaxy.config.ts"),l(" 来自定义你的博客了。")],-1)),t[14]||(t[14]=a("h3",{id:"自动构建",tabindex:"-1"},[l("自动构建 "),a("a",{class:"header-anchor",href:"#自动构建","aria-label":'Permalink to "自动构建"'},"​")],-1)),t[15]||(t[15]=a("p",null,"可以使用 GitHub Pages/Netlify/Vercel/Cloudflare Pages。",-1)),t[16]||(t[16]=a("p",null,[a("code",null,".github/workflows/gh-pages.yml"),l(" 将会自动部署 GitHub Pages，其他请参考文档。")],-1)),t[17]||(t[17]=a("h3",{id:"手动部署",tabindex:"-1"},[l("手动部署 "),a("a",{class:"header-anchor",href:"#手动部署","aria-label":'Permalink to "手动部署"'},"​")],-1)),t[18]||(t[18]=a("p",null,[l("输入如下指令生成静态文件，然后就可以把 "),a("code",null,"dist"),l(" 文件夹下的内容部署到自己的服务器上了：")],-1)),t[19]||(t[19]=a("div",{class:"language-bash vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-darker vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#E2931D","--shiki-dark":"#FFCB6B"}},"npm"),a("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}}," run"),a("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}}," build")]),l(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#90A4AE","--shiki-light-font-style":"italic","--shiki-dark":"#545454","--shiki-dark-font-style":"italic"}},"# npm run build:spa for SPA")])])]),a("button",{class:"collapse"})],-1)),t[20]||(t[20]=a("h2",{id:"注意事项",tabindex:"-1"},[l("注意事项 "),a("a",{class:"header-anchor",href:"#注意事项","aria-label":'Permalink to "注意事项"'},"​")],-1)),t[21]||(t[21]=a("p",null,"Valaxy 目前还处于早期开发阶段，Yun 主题的功能仅复刻了 Hexo 版本的主要功能，你可以通过反馈 Bug/捐助云游君来支持 Valaxy 的开发。",-1)),t[22]||(t[22]=a("blockquote",null,[a("p",null,[a("s",null,"现在使用就是高贵的内测用户")])],-1))]),"main-header":s(()=>[i(e.$slots,"main-header")]),"main-header-after":s(()=>[i(e.$slots,"main-header-after")]),"main-nav":s(()=>[i(e.$slots,"main-nav")]),"main-content-before":s(()=>[i(e.$slots,"main-content-before")]),"main-content":s(()=>[i(e.$slots,"main-content")]),"main-content-after":s(()=>[i(e.$slots,"main-content-after")]),"main-nav-before":s(()=>[i(e.$slots,"main-nav-before")]),"main-nav-after":s(()=>[i(e.$slots,"main-nav-after")]),comment:s(()=>[i(e.$slots,"comment")]),footer:s(()=>[i(e.$slots,"footer")]),aside:s(()=>[i(e.$slots,"aside")]),"aside-custom":s(()=>[i(e.$slots,"aside-custom")]),default:s(()=>[i(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{c as default,C as usePageData};
