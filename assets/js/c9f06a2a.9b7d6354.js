"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[96541],{64844:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(74848),o=t(28453);const r={id:"global-msg-headings",title:"Global msg headings"},i=void 0,l={id:"php/filters/block/form/global-msg-headings",title:"Global msg headings",description:"By default there are no headings on error or success messages but with this filter you will be able to set them. This filter is applied to all forms.",source:"@site/forms/php/filters/block/form/global-msg-headings.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/global-msg-headings",permalink:"/seacoast/forms/php/filters/block/form/global-msg-headings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"global-msg-headings",title:"Global msg headings"},sidebar:"forms",previous:{title:"Phone sync",permalink:"/seacoast/forms/php/filters/block/form/phone-sync"},next:{title:"Additional content",permalink:"/seacoast/forms/php/filters/block/form/additional-content"}},a={},c=[];function g(e){const s={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"By default there are no headings on error or success messages but with this filter you will be able to set them. This filter is applied to all forms."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_global_msg_headings', [$this, 'getGlobalMsgHeadings']);\n\n/**\n * Set global msg headings.\n *\n * This filter will set global message headings for success and error.\n *\n * @return array<string, string>\n */\npublic function getGlobalMsgHeadings(): array\n{\n\treturn [\n\t\t'success' => \\__('Good news!', 'eightshift-form'),\n\t\t'error' => \\__('Something went wrong.', 'eightshift-form'),\n\t];\n}\n"})})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var n=t(96540);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);