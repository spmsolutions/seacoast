"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[33839],{24638:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(74848),o=s(28453);const i={id:"block-manifest",title:"Block Manifest",sidebar_label:"Block Manifest"},r=void 0,c={id:"legacy/v5/basics/block-manifest",title:"Block Manifest",description:"docs-source",source:"@site/docs/legacy/v5/basics/block-manifest.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/block-manifest",permalink:"/seacoast/docs/legacy/v5/basics/block-manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"block-manifest",title:"Block Manifest",sidebar_label:"Block Manifest"},sidebar:"docs",previous:{title:"Component Structure",permalink:"/seacoast/docs/legacy/v5/basics/blocks-component-structure"},next:{title:"Component Manifest",permalink:"/seacoast/docs/legacy/v5/basics/blocks-component-manifest"}},a={},l=[{value:"Example",id:"example",level:3},{value:"namespace",id:"namespace",level:3},{value:"icon.background &amp; icon.foreground",id:"iconbackground--iconforeground",level:3},{value:"example",id:"example-1",level:3},{value:"attributes",id:"attributes",level:3},{value:"hasInnerBlocks",id:"hasinnerblocks",level:3},{value:"components",id:"components",level:3},{value:"The power of manifest.json",id:"the-power-of-manifestjson",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,t.jsxs)(n.p,{children:["This file contains all the configuration required for a block to work. It's used in WordPress ",(0,t.jsx)(n.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/",children:(0,t.jsx)(n.code,{children:"registerBlockType"})})," method to register a block. Using ",(0,t.jsx)(n.code,{children:"manifest.json"}),", we can provide a configuration in JavaScript and PHP part of the block in one file."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "namespace": "custom-namespace",\n  "blockName": "heading",\n  "title": "Heading",\n  "description": "Heading block with custom settings.",\n  "category": "common",\n  "icon": {\n    "background": "#900",\n    "foreground": "#500",\n    "src": "heading"\n  },\n  "keywords": [\n    "Header",\n    "Title"\n  ],\n  "example": {\n    "attributes": {\n      "content": "New content",\n      "level": 2\n    }\n  },\n  "attributes": {\n    "content": {\n      "type": "string"\n    },\n    "level": {\n      "type": "number",\n      "default": 2\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Most of the keys are the same as the ",(0,t.jsx)(n.code,{children:"registerBlockType"})," method. If you can't find the description here, please check the ",(0,t.jsx)(n.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/",children:"official documentation"}),", but we also have some custom features here:"]}),"\n",(0,t.jsx)(n.h3,{id:"namespace",children:"namespace"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"native feature"})}),"\n",(0,t.jsx)(n.p,{children:"The block's namespace is set globally in the global manifest for all your custom blocks, but you can override them on each block if you need to."}),"\n",(0,t.jsx)(n.h3,{id:"iconbackground--iconforeground",children:"icon.background & icon.foreground"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"native feature"})}),"\n",(0,t.jsx)(n.p,{children:"The icon background and foreground is set globally in the global manifest for all your custom blocks, but you can override them on each block if you need to."}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"native feature"})}),"\n",(0,t.jsxs)(n.p,{children:["This key provides you the ability to give an example mockup of your attributes. When you try to add a block to the editor using the button in the main toolbar, you will have a preview image on the right. The image generated here will actually be a rendered block with the attributes from the example key. We also use it in the storybook to mock attributes. More on this in the ",(0,t.jsx)(n.a,{href:"blocks-storybook",children:"storybook chapter"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"attributes",children:"attributes"}),"\n",(0,t.jsxs)(n.p,{children:["Attributes key is an object of attributes where you define and set up default values for a block. These attributes are then passed in the editor as props, and the PHP view part in the ",(0,t.jsx)(n.code,{children:"$attributes"})," variable.\nWe are using the same structure as described in the ",(0,t.jsx)(n.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/",children:"block editor documentation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"hasinnerblocks",children:"hasInnerBlocks"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"default: false"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"custom feature"})}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"hasInnerBlocks"})," key is set to true, the block's ",(0,t.jsx)(n.code,{children:"save"})," method for inner blocks will be used. This method is used when the block has ",(0,t.jsx)(n.a,{href:"https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/inner-blocks",children:(0,t.jsx)(n.code,{children:"InnerBlocks"})}),". In the PHP view file, you will have the ",(0,t.jsx)(n.code,{children:"$innerBlockContent"})," variable available. Here is an example of what happens in the back:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"  save = () => createElement(InnerBlocks.Content);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"components",children:"components"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"custom feature"})}),"\n",(0,t.jsxs)(n.p,{children:["This key gives you the ability to use component attributes in your block without mapping all the component's attributes every time. Please check ",(0,t.jsx)(n.a,{href:"blocks-component-in-block",children:"this chapter"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"the-power-of-manifestjson",children:"The power of manifest.json"}),"\n",(0,t.jsxs)(n.p,{children:["As described before we use ",(0,t.jsx)(n.code,{children:"manifest.json"})," to share stuff across PHP / JS / SCSS so you can easily see its power."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, you can use ",(0,t.jsx)(n.code,{children:"manifest.json"})," to store SVG files that you will use on the front-end (PHP) and in the editor / backend (JS) files. Or you can store block options so it is easier to find and add items."]}),"\n",(0,t.jsx)(n.p,{children:"Let's see how you would share SVG icon across multiple languages:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"manifest.json"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: because this is a ",(0,t.jsx)(n.code,{children:"JSON"})," file you must convert all double quotes to single because otherwise, you will get a fatal error."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{\n  ...\n  \"icon\": \"<svg xmlns='http://www.w3.org/2000/svg' width='7' height='12' viewBox='0 0 320 512'><path fill='currentColor' d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path></svg>\",\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"block-name.php"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$manifest = Components::getManifest(__DIR__);\n\necho wp_kses_post($manifest['icon']);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"block-name-editor.js"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import manifest from 'manifest.json';\n\n<span dangerouslySetInnerHTML={{ __html: manifest.icon }}></span>\n"})}),"\n",(0,t.jsx)(n.p,{children:"As you can see, you can share anything this way. Here are some additional examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/Blocks/components/social-links/manifest.json",children:"Social Links"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/Blocks/components/button/manifest.json",children:"Button"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);