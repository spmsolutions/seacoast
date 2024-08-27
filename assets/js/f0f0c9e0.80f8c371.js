"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[63900],{71526:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(74848),s=n(28453);const r={id:"component-next",title:'Multi-step form "Next" button'},i=void 0,p={id:"php/filters/block/step/component-next",title:'Multi-step form "Next" button',description:'This filter allows you to provide custom markup for the multi-step form "Next" button.',source:"@site/forms/php/filters/block/step/component-next.md",sourceDirName:"php/filters/block/step",slug:"/php/filters/block/step/component-next",permalink:"/seacoast/forms/php/filters/block/step/component-next",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"component-next",title:'Multi-step form "Next" button'},sidebar:"forms",previous:{title:'Multi-step form "Previous" button',permalink:"/seacoast/forms/php/filters/block/step/component-prev"},next:{title:"Additional content",permalink:"/seacoast/forms/php/filters/block/rating/additional-content"}},c={},l=[];function a(t){const e={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'This filter allows you to provide custom markup for the multi-step form "Next" button.'}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",children:"\\add_filter('es_forms_block_step_component_next', [$this, 'getBlockStepComponentNext']);\n\n/**\n * Changing the default custom next button for the multi-step form.\n *\n * @param array<string, mixed> $data Block attributes.\n *\n * @return string\n */\npublic function getBlockStepComponentNext(array $data): string\n{\n\treturn '<button type=\"submit\" class=\"custom-button\">Next</button>';\n}\n"})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"The custom button will not show in Form settings pages."})})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(a,{...t})}):a(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>p});var o=n(96540);const s={},r=o.createContext(s);function i(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function p(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);