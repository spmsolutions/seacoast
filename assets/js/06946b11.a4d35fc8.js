"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[62676],{80779:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>c});var o=t(74848),a=t(28453);const l={id:"blocks-reusable",title:"Reusable Blocks",sidebar_label:"Reusable Blocks"},r=void 0,n={id:"legacy/v5/basics/blocks-reusable",title:"Reusable Blocks",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-reusable.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-reusable",permalink:"/seacoast/docs/legacy/v5/basics/blocks-reusable",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-reusable",title:"Reusable Blocks",sidebar_label:"Reusable Blocks"},sidebar:"docs",previous:{title:"Special Use Cases",permalink:"/seacoast/docs/legacy/v5/basics/blocks-special-use-cases"},next:{title:"Styles",permalink:"/seacoast/docs/legacy/v5/basics/blocks-styles"}},i={},c=[{value:"Register admin sidemenu",id:"register-admin-sidemenu",level:3},{value:"Use the reusable block as a partial",id:"use-the-reusable-block-as-a-partial",level:3}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/",children:(0,o.jsx)(s.img,{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,o.jsx)(s.p,{children:"Block editor provides us with the reusable blocks out of the box. These blocks are a custom post type that holds blocks that you can call in your editor to reuse in multiple places. So if you change your reusable block that change will impact all places where this block is imported."}),"\n",(0,o.jsx)(s.h3,{id:"register-admin-sidemenu",children:"Register admin sidemenu"}),"\n",(0,o.jsx)(s.p,{children:"Reusable blocks can be accessed from the block editors options page but to help our editors, we like to add a new menu in the admin sidebar where you can easily access all your reusable blocks. If you use our custom blocks setup this sidebar menu will be added by default."}),"\n",(0,o.jsx)(s.h3,{id:"use-the-reusable-block-as-a-partial",children:"Use the reusable block as a partial"}),"\n",(0,o.jsx)(s.p,{children:"We also like to use a reusable block for website parts that were previously hardcoded in the theme and are not a part of the block editor. We like to use this footer of additional options in categories and terms."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Here are the steps:"})}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"Create a new reusable block for your partial."}),"\n",(0,o.jsx)(s.li,{children:"Create a config where you can configure what reusable block are you going to use in your theme. We like to use ACF PRO and its option to create a theme options page."}),"\n",(0,o.jsx)(s.li,{children:"Call this option in your theme and output your block."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"The first two steps are easy enough, but here is an example for the third step:"}),"\n",(0,o.jsx)(s.p,{children:"footer.php"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-php",children:"// Check if the footer partial is set and use the contents of it.\n$footerPartialId = '1'; // here you provide your way to get the option set in the second step.\n\nif (!empty($footerPartialId)) {\n\t$footerBlocks = parse_blocks(get_the_content(null, null, $footerPartialId));\n\n\tforeach ($footerBlocks as $block) {\n\t\techo wp_kses_post(\\apply_filters('the_content', \\render_block($block)));\n\t}\n}\n"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Notes about reusable blocks, they're not native WP search friendly (as in the content you only have the WP block comment markup that there's a specific reusable block there). So if you use a lot of these in the content of a page / post, it might affect your search relevancy."}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>n});var o=t(96540);const a={},l=o.createContext(a);function r(e){const s=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(l.Provider,{value:s},e.children)}}}]);