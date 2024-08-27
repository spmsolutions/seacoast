"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[38118],{44397:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=s(74848),a=s(28453);const l={id:"blocks-reusable",title:"Reusable Blocks"},n=void 0,r={id:"legacy/v7/basics/blocks-reusable",title:"Reusable Blocks",description:"docs-source",source:"@site/docs/legacy/v7/basics/blocks-reusable.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/blocks-reusable",permalink:"/seacoast/docs/legacy/v7/basics/blocks-reusable",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-reusable",title:"Reusable Blocks"},sidebar:"docs",previous:{title:"Special Use Cases",permalink:"/seacoast/docs/legacy/v7/basics/blocks-special-use-cases"},next:{title:"Styles",permalink:"/seacoast/docs/legacy/v7/basics/blocks-styles"}},i={},c=[{value:"Register admin sidemenu",id:"register-admin-sidemenu",level:3},{value:"Use the reusable block as a partial",id:"use-the-reusable-block-as-a-partial",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/",children:(0,o.jsx)(t.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,o.jsx)(t.p,{children:"Block editor provides us with the reusable blocks out of the box. These blocks are a custom post type that holds blocks that you can call in your editor to reuse in multiple places. So if you change your reusable block that change will impact all places where this block is imported."}),"\n",(0,o.jsx)(t.h3,{id:"register-admin-sidemenu",children:"Register admin sidemenu"}),"\n",(0,o.jsx)(t.p,{children:"Reusable blocks can be accessed from the block editors options page but to help our editors, we like to add a new menu in the admin sidebar where you can easily access all your reusable blocks. If you use our custom blocks setup this sidebar menu will be added by default."}),"\n",(0,o.jsx)(t.h3,{id:"use-the-reusable-block-as-a-partial",children:"Use the reusable block as a partial"}),"\n",(0,o.jsx)(t.p,{children:"We also like to use a reusable block for website parts that were previously hardcoded in the theme and are not a part of the block editor. We like to use this footer of additional options in categories and terms."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Here are the steps:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Create a new reusable block for your partial."}),"\n",(0,o.jsx)(t.li,{children:"Create a config where you can configure what reusable block are you going to use in your theme. We like to use ACF PRO and its option to create a theme options page."}),"\n",(0,o.jsx)(t.li,{children:"Call this option in your theme and output your block."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The first two steps are easy enough, but here is an example for the third step:"}),"\n",(0,o.jsx)(t.p,{children:"footer.php"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"// Check if the footer partial is set and use the contents of it.\n$footerPartialId = '1'; // here you provide your way to get the option set in the second step.\n\nif (!empty($footerPartialId)) {\n\t$footerBlocks = parse_blocks(get_the_content(null, null, $footerPartialId));\n\n\tforeach ($footerBlocks as $block) {\n\t\techo wp_kses_post(\\apply_filters('the_content', \\render_block($block)));\n\t}\n}\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Notes about reusable blocks, they're not native WP search friendly (as in the content you only have the WP block comment markup that there's a specific reusable block there). So if you use a lot of these in the content of a page / post, it might affect your search relevancy."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>r});var o=s(96540);const a={},l=o.createContext(a);function n(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);