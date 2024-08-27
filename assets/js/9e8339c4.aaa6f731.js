"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[99903],{70049:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(74848),i=s(28453);const a={id:"success-redirect",title:"Success redirects"},r=void 0,o={id:"features/success-redirect",title:"Success redirects",description:"By default, when you submit a form, a success message is displayed on the same page. If you want to redirect the user to a different page, you can enable the Success redirects feature. This option can be found in each integration's Form settings, or in Global settings.",source:"@site/forms/features/success-redirect.md",sourceDirName:"features",slug:"/features/success-redirect",permalink:"/seacoast/forms/features/success-redirect",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"success-redirect",title:"Success redirects"},sidebar:"forms",previous:{title:"Spam prevention",permalink:"/seacoast/forms/features/spam-prevention"},next:{title:"Tracking",permalink:"/seacoast/forms/features/tracking"}},c={},d=[{value:"Template tags",id:"template-tags",level:2},{value:"Variations",id:"variations",level:2},{value:"How to use a variation",id:"how-to-use-a-variation",level:3},{value:"Block editor options",id:"block-editor-options",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["By default, when you submit a form, a success message is displayed on the same page. If you want to redirect the user to a different page, you can enable the ",(0,n.jsx)(t.em,{children:"Success redirects"})," feature. This option can be found in each integration's Form settings, or in Global settings."]}),"\n",(0,n.jsx)(t.p,{children:'Variation and template tags can enrich the "thank you" pages, and make them more personal.'}),"\n",(0,n.jsx)(t.h2,{id:"template-tags",children:"Template tags"}),"\n",(0,n.jsxs)(t.p,{children:['The data entered by the user is sent to the "Thank you" page in the form of ',(0,n.jsx)(t.code,{children:"GET"})," parameters. By default, no parameters are sent, to prevent sending any data that is not meant to be forwarded. In the Form settings the parameters that are passed through can be selected."]}),"\n",(0,n.jsxs)(t.p,{children:["Chosen parameters can be used as ",(0,n.jsx)(t.em,{children:"magic variables"})," on the destination side. They are wrapped inside curly brackets, with the field name inside, e.g. ",(0,n.jsx)(t.code,{children:"{name}"}),", ",(0,n.jsx)(t.code,{children:"{email}"}),", ...\n",(0,n.jsx)(t.img,{alt:"Success redirects settings screen",src:s(87174).A+"",width:"652",height:"649"})]}),"\n",(0,n.jsx)(t.h2,{id:"variations",children:"Variations"}),"\n",(0,n.jsxs)(t.p,{children:['Just like Template tags, variations are also passed to the "Thank you" page as a ',(0,n.jsx)(t.code,{children:"GET"}),' parameter. However, instead of using the entered data, they are pre-defined in the form settings, and can be used to add more granular control to the design and/or content of the "Thank you" page.\nTemplate tags and variations are features that allow passing data to the success page. However, variations are predetermined in the form settings and are used to differentiate between various versions of the success page.']}),"\n",(0,n.jsxs)(t.p,{children:["When enabled, a ",(0,n.jsx)(t.code,{children:"es-variation"}),' GET parameter is added to the "Thank you" page URL, with the value being the ID of the chosen variation.']}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The value must be encoded, which can be done with the ",(0,n.jsx)(t.code,{children:"esFormsDecryptor"})," ",(0,n.jsx)(t.a,{href:"/forms/php/helpers#esformsdecryptor",children:"helper"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use-a-variation",children:"How to use a variation"}),"\n",(0,n.jsx)(t.p,{children:"To use variations, a list of variations needs to be added in the Global settings. Then, the variations can be chosen both in Form settings and through the Block editor."}),"\n",(0,n.jsx)(t.h3,{id:"block-editor-options",children:"Block editor options"}),"\n",(0,n.jsx)(t.p,{children:"When selecting a form in the Block Editor, you will find multiple additional options to enrich your user experience."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Options available in the Block Editor:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Variant"})," - this option will override the variant set in the form settings. This way, you can use one form in multiple places with different variants."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enrichment"})," - this option will add additional data to your success URL."]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Url"})," - this option will set a simple URL to pass."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Url title"})," - this option will set a title for the URL if you want to populate a button."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Media"})," - this option will allow you to add unlimited media files to the success page. For example if you want a user to download a file after submitting a form."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Media item conditional field"}),"s - just like template tags, you can use simple conditional tags here to show or hide media items based on the user input. E.g., ",(0,n.jsx)(t.code,{children:"field_name=filed_value"}),". If you want to show a media item in any case, you can use the ",(0,n.jsx)(t.code,{children:"all"})," value."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Media item title"})," - just like the url title, this option will set a title for the media item."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Success redirects screen",src:s(47136).A+"",width:"309",height:"820"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"At this point, you must manually create a success page block that can use variations options. We are working on a solution to automate this process."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},87174:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/success-redirects-settings-db726059c2dbfbe5abb2f88270ef760e.webp"},47136:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/success-redirects-67a268f0bc1cf0434cdebf976ceac82a.webp"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);