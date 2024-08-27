"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[94663],{91971:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var n=i(74848),d=i(28453);const o={id:"additional-hidden-fields",title:"Additional hidden fields"},s=void 0,r={id:"php/filters/block/form/additional-hidden-fields",title:"Additional hidden fields",description:"Allows adding custom hidden fields to the form block. These fields will not be visible in the Block Editor. Useful if external data needs to be passed through the form.",source:"@site/forms/php/filters/block/form/additional-hidden-fields.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/additional-hidden-fields",permalink:"/seacoast/forms/php/filters/block/form/additional-hidden-fields",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"additional-hidden-fields",title:"Additional hidden fields"},sidebar:"forms",previous:{title:"Pre-Response Success Redirect Data",permalink:"/seacoast/forms/php/filters/block/form/pre-response-success-redirect-data"},next:{title:"Result output items",permalink:"/seacoast/forms/php/filters/block/form/result-output-items"}},l={},a=[];function c(e){const t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Allows adding custom hidden fields to the form block. These fields will ",(0,n.jsx)(t.strong,{children:"not"})," be visible in the Block Editor. Useful if external data needs to be passed through the form."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_additional_hidden_fields', [$this, 'getBlockFormAdditionalHiddenFields'], 10, 2);\n\n/**\n * Set additional hidden fields to form block.\n *\n * @param array<mixed> $output Output data.\n * @param string $formId FormId value.\n *\n * @return array<mixed>\n */\npublic function getBlockFormAdditionalHiddenFields(array $output, string $formId): array\n{\n\t$output['additionalHiddenFields'] = [\n\t\t[\n\t\t\t'name' => 'additional-hidden-field',\n\t\t\t'value' => 'additional-hidden-field-value',\n\t\t],\n\t];\n\n\treturn $output;\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(96540);const d={},o=n.createContext(d);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);