"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[70073],{84038:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(74848),n=t(28453);const s={id:"tracking",title:"Tracking"},r=void 0,o={id:"features/tracking",title:"Tracking",description:"The tracking feature allows you to track form submissions by pushing the dataLayer event to Google Tag Manager. To activate this feature, you must provide the custom event name using the individual form setting page.",source:"@site/forms/features/tracking.md",sourceDirName:"features",slug:"/features/tracking",permalink:"/seacoast/forms/features/tracking",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"tracking",title:"Tracking"},sidebar:"forms",previous:{title:"Success redirects",permalink:"/seacoast/forms/features/success-redirect"},next:{title:"Security",permalink:"/seacoast/forms/features/security"}},d={},c=[{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Additional parameters",id:"additional-parameters",level:3},{value:"Additional success parameters",id:"additional-success-parameters",level:3},{value:"Additional error parameters",id:"additional-error-parameters",level:3}];function l(e){const a={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"The tracking feature allows you to track form submissions by pushing the dataLayer event to Google Tag Manager. To activate this feature, you must provide the custom event name using the individual form setting page."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Tracking screen",src:t(36384).A+"",width:"631",height:"345"})}),"\n",(0,i.jsx)(a.h2,{id:"how-to-use-it",children:"How to use it?"}),"\n",(0,i.jsx)(a.p,{children:"The dataLayer event is pushed to Google Tag Manager with custom parameters and form submission data using the event name provided."}),"\n",(0,i.jsx)(a.h3,{id:"additional-parameters",children:"Additional parameters"}),"\n",(0,i.jsx)(a.p,{children:"You can include custom parameters in the dataLayer event in addition to the default form submission data. These custom parameters will be added to every form event, whether a success or an error."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Tracking custom screen",src:t(3324).A+"",width:"649",height:"319"})}),"\n",(0,i.jsx)(a.h3,{id:"additional-success-parameters",children:"Additional success parameters"}),"\n",(0,i.jsx)(a.p,{children:"You can add custom parameters to the dataLayer on the success event, similar to additional parameters."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Tracking success screen",src:t(72374).A+"",width:"622",height:"319"})}),"\n",(0,i.jsx)(a.h3,{id:"additional-error-parameters",children:"Additional error parameters"}),"\n",(0,i.jsx)(a.p,{children:"You can add custom parameters to the dataLayer on the error event, similar to additional parameters."}),"\n",(0,i.jsx)(a.p,{children:"With this event, you have some custom magic constants that you can use to provide additional information to the dataLayer event."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"{invalidFieldsString}"})," - This will provide a string of all invalid fields separated by a comma."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"{invalidFieldsArray}"})," - This will provide you with an array of all invalid fields."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Tracking error screen",src:t(13463).A+"",width:"605",height:"424"})})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3324:(e,a,t)=>{t.d(a,{A:()=>i});const i="data:image/webp;base64,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"},13463:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/tracking-error-5b4ea1b6e6533357582d753909513d68.webp"},72374:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/tracking-success-a41486c9465915a14a090fb9c2ff2a4a.webp"},36384:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/tracking-d9b71087942d3b762d56745abb59062b.webp"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var i=t(96540);const n={},s=i.createContext(n);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);