"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[12086],{48706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var o=t(74848),s=t(28453);const i={id:"blocks-component-manifest",title:"Component Manifest"},a=void 0,c={id:"legacy/v6/basics/blocks-component-manifest",title:"Component Manifest",description:"docs-source",source:"@site/docs/legacy/v6/basics/blocks-component-manifest.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/blocks-component-manifest",permalink:"/seacoast/docs/legacy/v6/basics/blocks-component-manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-component-manifest",title:"Component Manifest"},sidebar:"docs",previous:{title:"Block Manifest",permalink:"/seacoast/docs/legacy/v6/basics/block-manifest"},next:{title:"Attributes",permalink:"/seacoast/docs/legacy/v6/basics/blocks-attributes"}},l={},r=[{value:"Example",id:"example",level:3},{value:"componentName",id:"componentname",level:3},{value:"title",id:"title",level:3},{value:"componentClass",id:"componentclass",level:3},{value:"example",id:"example-1",level:3},{value:"attributes",id:"attributes",level:3},{value:"options",id:"options",level:3},{value:"components",id:"components",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,o.jsx)(n.p,{children:"A component manifest is a bit different than the block manifest. The main difference is that the component manifest is a fully custom feature, and it is only here to provide a way to store configuration data and share it with multiple files in your project."}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "componentName": "heading",\n  "title": "Heading",\n  "componentClass": "heading",\n  "example": {\n    "attributes": {\n      "headingContent": "This is heading",\n      "headingLevel": 2,\n      "headingSize": "default",\n      "headingUse": true\n    }\n  },\n  "attributes": {\n    "headingContent": {\n      "type": "string"\n    },\n    "headingLevel": {\n      "type": "integer",\n      "default": 2\n    },\n    "headingSize": {\n      "type": "string",\n      "default": "default"\n    },\n    "headingUse": {\n      "type": "boolean",\n      "default": true\n    }\n  },\n  "options": {\n    "sizes": [\n      {\n        "label": "Default (30px)",\n        "value": "default"\n      },\n      {\n        "label": "Big (50px)",\n        "value": "big"\n      }\n    ],\n    "aligns": [\n      "left",\n      "center",\n      "right"\n    ],\n    "colors": [\n      "primary",\n      "black"\n    ]\n  },\n  "components": {}\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"componentname",children:"componentName"}),"\n",(0,o.jsx)(n.p,{children:"This key is the most important one. We use this key to specify the component attributes prefix. When it's used correctly, we are able to change the attributes prefix depending on the component name passed from the parent component or block."}),"\n",(0,o.jsx)(n.h3,{id:"title",children:"title"}),"\n",(0,o.jsx)(n.p,{children:"This key is used to provide the label for all your component options and provide the storybook's automatic story title."}),"\n",(0,o.jsx)(n.h3,{id:"componentclass",children:"componentClass"}),"\n",(0,o.jsx)(n.p,{children:"These keys are used to provide a single point of reference for a component name. You'll use this key to provide a prefix for all the CSS selectors in your component."}),"\n",(0,o.jsx)(n.h3,{id:"example-1",children:"example"}),"\n",(0,o.jsxs)(n.p,{children:["The same as in the blocks manifest. Please check ",(0,o.jsx)(n.a,{href:"block-manifest",children:"this chapter"})," for more details."]}),"\n",(0,o.jsx)(n.h3,{id:"attributes",children:"attributes"}),"\n",(0,o.jsxs)(n.p,{children:["For more details please check ",(0,o.jsx)(n.a,{href:"blocks-attributes",children:"this chapter"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,o.jsxs)(n.p,{children:["These keys are used to provide a single point of reference for component options used in the options part. If you have a ",(0,o.jsx)(n.code,{children:"SelectControl"})," or a ",(0,o.jsx)(n.code,{children:"ColorSelector"})," component, you can set all your options here and use those options in the options section and story for mocking components. Please check ",(0,o.jsx)(n.a,{href:"blocks-component-in-block",children:"this chapter"})," for more details."]}),"\n",(0,o.jsx)(n.h3,{id:"components",children:"components"}),"\n",(0,o.jsxs)(n.p,{children:["The same as in the blocks manifest. Please check ",(0,o.jsx)(n.a,{href:"block-manifest",children:"this chapter"})," for more details."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(96540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);