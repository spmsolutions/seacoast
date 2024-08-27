"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[33373],{40033:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(74848),s=i(28453);const o={id:"10-11",title:"Version 10 to 11"},r=void 0,l={id:"migrations/10-11",title:"Version 10 to 11",description:"This migration guide contains migration instructions for:",source:"@site/docs/migrations/10-11.md",sourceDirName:"migrations",slug:"/migrations/10-11",permalink:"/seacoast/docs/migrations/10-11",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"10-11",title:"Version 10 to 11"},sidebar:"docs",previous:{title:"Version 11 to 12",permalink:"/seacoast/docs/migrations/11-12"},next:{title:"Version 9 to 10",permalink:"/seacoast/docs/migrations/9-10"}},h={},c=[{value:"PHP support",id:"php-support",level:2},{value:"PHP 8+",id:"php-8",level:3},{value:"PHP 7.4+",id:"php-74",level:3},{value:"Required changes",id:"required-changes",level:2},{value:"Remove deprecated functions from blocks",id:"remove-deprecated-functions-from-blocks",level:4},{value:"Enqueue the <code>lodash</code> library",id:"enqueue-the-lodash-library",level:4},{value:"Optional changes",id:"optional-changes",level:2},{value:"Update your Config.php file",id:"update-your-configphp-file",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This migration guide contains migration instructions for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-boilerplate/releases/tag/11.0.0",children:"eightshift/boilerplate"})," - ",(0,t.jsx)(n.strong,{children:"10+ --\x3e 11.0.0"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/releases/tag/9.0.0",children:"eightshift/frontend-libs"})," - ",(0,t.jsx)(n.strong,{children:"8+ --\x3e 9.0.0"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/releases/tag/7.0.0",children:"eightshift/libs"})," - ",(0,t.jsx)(n.strong,{children:"6+ --\x3e 7.0.0"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"This release contains a couple of breaking changes!"}),"\nCheck the list below for details about changes that will have to be made."]}),"\n",(0,t.jsx)(n.p,{children:"Also, a couple of changes are optional, but recommended."}),"\n",(0,t.jsx)(n.p,{children:"The major update on this release is the support for PHP 8+."}),"\n",(0,t.jsx)(n.h2,{id:"php-support",children:"PHP support"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Migration time: ~5min."})}),"\n",(0,t.jsx)(n.h3,{id:"php-8",children:"PHP 8+"}),"\n",(0,t.jsxs)(n.p,{children:["To allow support for PHP 8+ you need to update ",(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-boilerplate/tree/develop",children:"Eightshift Libs"})," to the latest version and update your project's ",(0,t.jsx)(n.code,{children:"composer.json"})," to all the latest ",(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/composer.json",children:"package"})," versions."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Don't forget to update the required PHP version in ",(0,t.jsx)(n.code,{children:"composer.json"})," and run ",(0,t.jsx)(n.code,{children:"composer update"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"php-74",children:"PHP 7.4+"}),"\n",(0,t.jsxs)(n.p,{children:["The latest version of the ",(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-boilerplate/tree/develop",children:"Eightshift Libs"})," still supports PHP 7.4+. If you cannot update to PHP 8+, update ",(0,t.jsx)(n.code,{children:"composer.json"})," packages to all the latest versions, except these packages, which should stay on the previous versions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"dealerdirect/phpcodesniffer-composer-installer": "v0.7.2",\n"infinum/eightshift-coding-standards": "1.6.0",\n'})}),"\n",(0,t.jsx)(n.h2,{id:"required-changes",children:"Required changes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Migration time: ~5min."})}),"\n",(0,t.jsx)(n.h4,{id:"remove-deprecated-functions-from-blocks",children:"Remove deprecated functions from blocks"}),"\n",(0,t.jsxs)(n.p,{children:["If you used the ",(0,t.jsx)(n.code,{children:"getAllBlocksListOld"})," or ",(0,t.jsx)(n.code,{children:"getCustomCategoryOld"})," functions in your blocks, remove them and the respective action hooks, as these functions are no longer available."]}),"\n",(0,t.jsxs)(n.h4,{id:"enqueue-the-lodash-library",children:["Enqueue the ",(0,t.jsx)(n.code,{children:"lodash"})," library"]}),"\n",(0,t.jsxs)(n.p,{children:["From WordPress version 6.4+, the core ",(0,t.jsx)(n.code,{children:"lodash"})," library is no longer enqueued by default. We have an internal dependency to this library, so you should enqueue it in your project if you made any changes to the ",(0,t.jsx)(n.code,{children:"getAdminScriptDependencies"})," function in the ",(0,t.jsx)(n.code,{children:"EnqueueBlocks.php"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"You can skip this step if you didn't change anything in that function."}),"\n",(0,t.jsx)(n.h2,{id:"optional-changes",children:"Optional changes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Migration time: ~5min."})}),"\n",(0,t.jsx)(n.p,{children:"The following changes are not required, but you might consider adding them to have all the latest modifications."}),"\n",(0,t.jsx)(n.h4,{id:"update-your-configphp-file",children:"Update your Config.php file"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["We changed the ",(0,t.jsx)(n.code,{children:"Config.php"})," file to use the project name using ",(0,t.jsx)(n.code,{children:"TextDomain"})," and the version using ",(0,t.jsx)(n.code,{children:"Version"})," defined in your ",(0,t.jsx)(n.code,{children:"style.css"})," file."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);