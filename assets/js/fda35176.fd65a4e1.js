"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[20140],{39250:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(74848),n=t(28453);const a={id:"pre-response-success-redirect-data",title:"Pre-Response Success Redirect Data"},o=void 0,c={id:"php/filters/block/form/pre-response-success-redirect-data",title:"Pre-Response Success Redirect Data",description:"Allows adding data to the API response key, which is used when passing data to the success redirect URL.",source:"@site/forms/php/filters/block/form/pre-response-success-redirect-data.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/pre-response-success-redirect-data",permalink:"/seacoast/forms/php/filters/block/form/pre-response-success-redirect-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pre-response-success-redirect-data",title:"Pre-Response Success Redirect Data"},sidebar:"forms",previous:{title:"Pre-Response add-on Data",permalink:"/seacoast/forms/php/filters/block/form/pre-response-addon-data"},next:{title:"Additional hidden fields",permalink:"/seacoast/forms/php/filters/block/form/additional-hidden-fields"}},i={},d=[];function p(e){const s={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Allows adding data to the API response key, which is used when passing data to the success redirect URL."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_pre_response_success_redirect_data', [$this, 'getPreResponseSuccessRedirectData'], 10, 2);\n\n/**\n * Set additional data to API response for success redirect.\n *\n * @param array<mixed> $output Output data.\n * @param array<string, mixed> $formDetails Data passed from the `getFormDetailsApi` function.\n *\n * @return array<mixed>\n */\npublic function getPreResponseSuccessRedirectData(array $output, string $formDetails): array\n{\n\t$output['successData'] = [\n\t\t'key' => 'value',\n\t];\n\n\treturn $output;\n}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var r=t(96540);const n={},a=r.createContext(n);function o(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);