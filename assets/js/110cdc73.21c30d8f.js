"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[65223],{24842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var s=n(74848),r=n(28453);const c={id:"dependency-theme",title:"Dependency theme"},i=void 0,o={id:"php/filters/scripts/dependency-theme",title:"Dependency theme",description:"Allows changing the order in which the theme area scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners).",source:"@site/forms/php/filters/scripts/dependency-theme.md",sourceDirName:"php/filters/scripts",slug:"/php/filters/scripts/dependency-theme",permalink:"/seacoast/forms/php/filters/scripts/dependency-theme",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dependency-theme",title:"Dependency theme"},sidebar:"forms",previous:{title:"Dependency admin",permalink:"/seacoast/forms/php/filters/scripts/dependency-admin"},next:{title:"Dependency blocks editor",permalink:"/seacoast/forms/php/filters/scripts/dependency-blocks-editor"}},d={},p=[];function a(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Allows changing the order in which the theme area scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners)."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_scripts_dependency_theme', [$this, 'getScriptsDependency']);\n\n/**\n * Load add-on scripts before Forms scripts.\n *\n * @return array<int, string>\n */\npublic function getScriptsDependency(): array\n{\n\treturn [\n\t\t'<script-handle-name>',\n\t];\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},c=s.createContext(r);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);