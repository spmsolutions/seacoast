"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[9085],{72859:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var r=s(74848),o=s(28453);const n={id:"routes-private",title:"Routes private"},i=void 0,a={id:"php/filters/scripts/routes-private",title:"Routes private",description:"Allows adding custom routes to the private routes list, available from the Forms global window object.",source:"@site/forms/php/filters/scripts/routes-private.md",sourceDirName:"php/filters/scripts",slug:"/php/filters/scripts/routes-private",permalink:"/seacoast/forms/php/filters/scripts/routes-private",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"routes-private",title:"Routes private"},sidebar:"forms",previous:{title:"Routes public",permalink:"/seacoast/forms/php/filters/scripts/routes-public"},next:{title:"DB location",permalink:"/seacoast/forms/php/filters/geolocation/db-location"}},c={},p=[];function l(t){const e={code:"code",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Allows adding custom routes to the private routes list, available from the Forms global window object."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"\\add_filter('es_forms_scripts_routes_private', [$this, 'getPrivateRoutes']);\n\n/**\n * Adds custom routes to the private routes list, available from the Forms global window object.\n *\n * @return array<string>\n */\npublic function getPrivateRoutes(): array\n{\n\treturn [\n\t\t'<route-name>' => '<route-slug>',\n\t];\n}\n"})})]})}function u(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>a});var r=s(96540);const o={},n=r.createContext(o);function i(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);