"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[4215],{5420:(t,o,n)=>{n.r(o),n.d(o,{assets:()=>m,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var e=n(74848),s=n(28453);const i={id:"component",title:"Custom form submit button"},r=void 0,c={id:"php/filters/block/submit/component",title:"Custom form submit button",description:"This filter allows you to provide custom markup for the form submit button.",source:"@site/forms/php/filters/block/submit/component.md",sourceDirName:"php/filters/block/submit",slug:"/php/filters/block/submit/component",permalink:"/seacoast/forms/php/filters/block/submit/component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"component",title:"Custom form submit button"},sidebar:"forms",previous:{title:"Additional content",permalink:"/seacoast/forms/php/filters/block/date/additional-content"},next:{title:"Additional content",permalink:"/seacoast/forms/php/filters/block/submit/additional-content"}},m={},u=[];function a(t){const o={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.p,{children:"This filter allows you to provide custom markup for the form submit button."}),"\n",(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{className:"language-php",children:"\\add_filter('es_forms_block_submit_component', [$this, 'getBlockSubmitComponent']);\n\n/**\n * Override default submit button with your own component\n *\n * This filter will remove the default forms submit button component and use your callback. This will not apply to form settings pages.\n *\n * @param array<string, mixed> $data Data provided from the forms.\n *\n * @return string\n */\npublic function getBlockSubmitComponent(array $data): string\n{\n\treturn '<button type=\"submit\" class=\"custom-button\">Submit</button>';\n}\n"})}),"\n",(0,e.jsx)(o.admonition,{type:"note",children:(0,e.jsx)(o.p,{children:"The custom button will not show in Form settings pages."})})]})}function l(t={}){const{wrapper:o}={...(0,s.R)(),...t.components};return o?(0,e.jsx)(o,{...t,children:(0,e.jsx)(a,{...t})}):a(t)}},28453:(t,o,n)=>{n.d(o,{R:()=>r,x:()=>c});var e=n(96540);const s={},i=e.createContext(s);function r(t){const o=e.useContext(i);return e.useMemo((function(){return"function"==typeof t?t(o):{...o,...t}}),[o,t])}function c(t){let o;return o=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),e.createElement(i.Provider,{value:o},t.children)}}}]);