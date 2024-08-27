"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[76297],{23074:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var n=s(74848),i=s(28453);const o={id:"manifest",title:"Manifest",sidebar_label:"Manifest"},a=void 0,l={id:"legacy/v5/basics/manifest",title:"Manifest",description:"docs-source",source:"@site/docs/legacy/v5/basics/manifest.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/manifest",permalink:"/seacoast/docs/legacy/v5/basics/manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"manifest",title:"Manifest",sidebar_label:"Manifest"},sidebar:"docs",previous:{title:"The Structure",permalink:"/seacoast/docs/legacy/v5/basics/the-structure"},next:{title:"Rest Intro",permalink:"/seacoast/docs/legacy/v5/basics/rest"}},c={},r=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Why not just fetch the asset the old-fashioned way?",id:"why-not-just-fetch-the-asset-the-old-fashioned-way",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/infinum/eightshift-libs/tree/3.0.0/",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,n.jsxs)(t.p,{children:["In the build process, Webpack creates all the static files from your assets folder and also ",(0,n.jsx)(t.code,{children:"manifest.json"})," inside the public folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically."]}),"\n",(0,n.jsxs)(t.p,{children:["This class provides ",(0,n.jsx)(t.code,{children:"manifest.json"})," file location and helpers to return the full path for a specific asset."]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,n.jsx)(t.p,{children:"First, install the manifest class if you didn't use the default project installation using this command:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"wp boilerplate create_manifest"})}),"\n",(0,n.jsx)(t.p,{children:"You will see a custom filter you can use to fetch the item from the public folder in your class. This is the custom filter:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"/**\n * Manifest item filter name constant.\n *\n * @var string\n */\npublic const MANIFEST_ITEM = 'manifest-item';\n\n/**\n * Register all hooks. Changed filter name to manifest.\n *\n * @return void\n */\npublic function register(): void\n{\n\t\\add_filter(static::MANIFEST_ITEM, [ $this, 'getAssetsManifestItem' ]);\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"To use this filter, add the following code and provide the correct name of your asset:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"use CoolProject\\Manifest\\Manifest;\n\n$logo = \\apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg');\n"})}),"\n",(0,n.jsxs)(t.p,{children:["And that's it. This filter will check the public folder for the ",(0,n.jsx)(t.code,{children:"manifest.json"})," file, parse it, and return the value of the provided key."]}),"\n",(0,n.jsxs)(t.p,{children:["If there is no ",(0,n.jsx)(t.code,{children:"manifest.json"})," file or you provided the wrong asset name, there will be a descriptive message for you."]}),"\n",(0,n.jsx)(t.h2,{id:"why-not-just-fetch-the-asset-the-old-fashioned-way",children:"Why not just fetch the asset the old-fashioned way?"}),"\n",(0,n.jsx)(t.p,{children:"By the old-fashioned way, we mean running something like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"$logo = get_template_directory_uri() . 'public/logo.svg';\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can definitely do this. But with our filter, if you want to change the public folder location or public folder name for some reason, you can change it in one place and you're done."}),"\n",(0,n.jsx)(t.p,{children:"If you are using the old-fashioned way, you would need to search and replace the whole project and implement the change. There is always a chance you would miss something, break the project, etc."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);