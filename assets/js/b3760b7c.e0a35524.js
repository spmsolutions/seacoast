"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[43761],{36214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(74848),n=r(28453);const a={id:"data-type-selector",title:"Data type selector"},s=void 0,i={id:"php/filters/block/form/data-type-selector",title:"Data type selector",description:"This filter will add a new data attribute to the form element. It is used to identify the form type in the frontend.",source:"@site/forms/php/filters/block/form/data-type-selector.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/data-type-selector",permalink:"/seacoast/forms/php/filters/block/form/data-type-selector",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"data-type-selector",title:"Data type selector"},sidebar:"forms",previous:{title:"Tracking additional data",permalink:"/seacoast/forms/php/filters/block/form/tracking-additional-data"},next:{title:"Phone sync",permalink:"/seacoast/forms/php/filters/block/form/phone-sync"}},c={},l=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This filter will add a new data attribute to the form element. It is used to identify the form type in the frontend."}),"\n",(0,o.jsxs)(t.p,{children:["In other words, you can use this filter to change the value of the ",(0,o.jsx)(t.code,{children:"formDataTypeSelector"})," attribute during a form render.\nThe attribute is used to output a ",(0,o.jsx)(t.code,{children:"data-type-selector"})," HTML attribute of the form element."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_data_type_selector', [$this 'getFormDataTypeSelector'], 10, 2);\n\n/**\n * Changing the form type selector on render\n * This filter will override the attribute-provided type selector for a Form component.\n * Passes form component attributes to the callback function as well, so you can check all sorts of conditions when filtering.\n *\n * In other words, you can use this filter to change the value of the `formDataTypeSelector` attribute during a form render.\n * The attribute is used to output a `data-type-selector` HTML attribute of the form element.\n *\n * @param string $selector The data type selector to filter.\n * @param array<mixed> $attr Form component attributes.\n *\n * @return string Filtered value.\n */\npublic function getFormDataTypeSelector(string $selector, array $attr): string\n{\n\tif (($attr['formType'] ?? '') === 'mailchimp') {\n\t\treturn '';\n\t}\n\n\treturn 'my-new-selector';\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var o=r(96540);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);