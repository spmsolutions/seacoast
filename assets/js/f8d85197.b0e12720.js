"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[64955],{85398:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=o(74848),s=o(28453);const i={id:"fonts-icon",title:"Icon font"},a=void 0,c={id:"legacy/v4/guides/fonts-icon",title:"Icon font",description:"Icons can be added as icon font and will be added in a similar way that the custom fonts are added. The process of file preparation is a bit different.",source:"@site/docs/legacy/v4/guides/fonts-icon.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/fonts-icon",permalink:"/seacoast/docs/legacy/v4/guides/fonts-icon",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"fonts-icon",title:"Icon font"},sidebar:"docs",previous:{title:"Custom fonts",permalink:"/seacoast/docs/legacy/v4/guides/fonts-custom"},next:{title:"Sass",permalink:"/seacoast/docs/legacy/v4/advanced/docs-sass"}},r={},l=[{value:"Icon font files setup",id:"icon-font-files-setup",level:2},{value:"Font Magician configuration for icon font",id:"font-magician-configuration-for-icon-font",level:2},{value:"Using the icon font",id:"using-the-icon-font",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Icons can be added as icon font and will be added in a similar way that the ",(0,t.jsx)(n.a,{href:"fonts-custom",children:"custom fonts"})," are added. The process of file preparation is a bit different."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"While icon font is the easiest method of managing and using a large library of icons, there are a number of reasons why it should not be used. Poor accessiblity, really noticable FOUT and styling inconsistencies are major downsides to icon fonts. There are a lot more benefits that come with using SVG components like: more styling options, usage flexibility and no impact to accessiblity of the website."})}),"\n",(0,t.jsx)(n.h2,{id:"icon-font-files-setup",children:"Icon font files setup"}),"\n",(0,t.jsxs)(n.p,{children:["For generating icon font files we recommend using ",(0,t.jsx)(n.a,{href:"https://icomoon.io/app/",children:"Icomoon"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Icons, exported as ",(0,t.jsx)(n.code,{children:".svg"}),", will need to be imported in a new set. Once all SVG icons are present in a set and named properly, the icon font can be generated. It is also recommended that before downloading an icon font the option for generating preprocessor variables is selected."]}),"\n",(0,t.jsx)(n.p,{children:"Downloaded package will contain a few important files:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"selection.json"})," - contains a snapshot of the whole icon font set and can be imported to update the whole icon set"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"variables.scss"})," - contains SCSS variables that map the name of the icon to it's character code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"style.scss"})," - contains helper classes to access specific icons."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fonts/icon-set-name.*"})," - Actual font files with multiple formats."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Place font files in ",(0,t.jsx)(n.code,{children:"theme-name/assets/fonts"})," directory and import them the same way as other fonts. Recommended formats for icon fonts are ",(0,t.jsx)(n.code,{children:".svg"})," and ",(0,t.jsx)(n.code,{children:".woff"}),". Place the ",(0,t.jsx)(n.code,{children:"selection.json"})," file in the same directory just as a reference for updating icon font set (no need to import it)."]}),"\n",(0,t.jsxs)(n.p,{children:["Variables and class names need to be included in some form of global SCSS file e.g. ",(0,t.jsx)(n.code,{children:"theme-name/assets/styles/parts/shared"})," and you can change or rename them to fit your needs. The definition of the ",(0,t.jsx)(n.code,{children:"@font-face"})," can be removed because we will be generating it using the ",(0,t.jsx)(n.a,{href:"https://github.com/jonathantneal/postcss-font-magician",children:"Font Magician"}),", so we will get back to that later."]}),"\n",(0,t.jsx)(n.h2,{id:"font-magician-configuration-for-icon-font",children:"Font Magician configuration for icon font"}),"\n",(0,t.jsxs)(n.p,{children:["Icon font will be just another font family in Font Magician configuration. So give it a specific name that will be referenced in ",(0,t.jsx)(n.code,{children:"font-family"})," rule and add the names of the font files."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"...\nconst postcssFontMagician = require('postcss-font-magician');\n\nmodule.exports = {\n  plugins: [\n    ... // other postCss configs\n    postcssFontMagician({\n      custom: {\n        ... // other font-family declarations and config\n        'IconFontName': { // font-family declaration\n          variants: {\n            normal: {\n              400: {\n                url: {\n                  woff: 'icon-font-name.woff',\n                  svg: 'icon-font-name.svg',\n                },\n              },\n            },\n          },\n        },\n        ... // other font-family declarations\n      },\n   }),\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Restart the build process to generate new ",(0,t.jsx)(n.code,{children:"@font-face"})," rules."]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-icon-font",children:"Using the icon font"}),"\n",(0,t.jsxs)(n.p,{children:["Once Font Magician configuration is done new ",(0,t.jsx)(n.code,{children:"font-family"})," definition will need to be added."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:"// Variable declared in a global variables .scss file.\n$base-icon-family: `IconFontName`,\n\n// Using the variable in .scss partial\n.icon {\n  font-family: $base-font-family;\n  ...\n}\n"})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var t=o(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);