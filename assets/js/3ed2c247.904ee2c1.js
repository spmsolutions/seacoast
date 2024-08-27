"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[55513],{58697:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(74848),r=n(28453);const s={id:"blocks-styles",title:"Styles"},i=void 0,l={id:"legacy/v8/basics/blocks-styles",title:"Styles",description:"docs-source",source:"@site/docs/legacy/v8/basics/blocks-styles.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/blocks-styles",permalink:"/seacoast/docs/legacy/v8/basics/blocks-styles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-styles",title:"Styles"},sidebar:"docs",previous:{title:"Reusable Blocks",permalink:"/seacoast/docs/legacy/v8/basics/blocks-reusable"},next:{title:"Storybook",permalink:"/seacoast/docs/legacy/v8/basics/blocks-storybook"}},o={},p=[{value:"Setup",id:"setup",level:2},{value:"Details",id:"details",level:2},{value:"Global variables",id:"global-variables",level:2},{value:"Variables",id:"variables",level:2},{value:"Default type",id:"default-type",level:2},{value:"Value type",id:"value-type",level:2},{value:"Editor variables",id:"editor-variables",level:2},{value:"Manual variables",id:"manual-variables",level:2},{value:"Manual variables inside the Block editor",id:"manual-variables-inside-the-block-editor",level:2},{value:"Additional options and examples",id:"additional-options-and-examples",level:2},{value:"Color",id:"color",level:3},{value:"Responsive",id:"responsive",level:3},{value:"Responsive Inverse",id:"responsive-inverse",level:3},{value:"Attribute value replacement",id:"attribute-value-replacement",level:3},{value:"Responsive variables",id:"responsive-variables",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/",children:(0,a.jsx)(e.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,a.jsx)(e.p,{children:"We decided to remove all support for IE 11.  That decision opened up doors that lead to new, awesome features and all the cool stuff. One of those features is CSS variables with block manifest and global settings."}),"\n",(0,a.jsx)(e.p,{children:"Let's dig into the implementation of CSS variables in your project."}),"\n",(0,a.jsx)(e.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(e.p,{children:["To be able to use CSS variables you need to implement two helpers in your blocks/components: ",(0,a.jsx)(e.code,{children:"outputCssVariables"})," and ",(0,a.jsx)(e.code,{children:"getUnique"}),". For more details on these helpers, you can read ",(0,a.jsx)(e.a,{href:"helpers-javascript",children:"here"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"There are a few differences between the JavaScript and PHP implementation due to a way React handles component re-rendering."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"JavaScript component:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import React, { useMemo } from 'react';\nimport { outputCssVariables, getUnique } from '@eightshift/frontend-libs/scripts';\nimport manifest from '../manifest.json';\nimport globalManifest from './../../../manifest.json';\n\nexport const TypographyEditor = (attributes) => {\n\n\t// We need to use memo in order to optimise component re-rendering.\n\tconst unique = useMemo(() => getUnique(), []);\n\n\treturn (\n\t\t<>\n\t\t\t{outputCssVariables(attributes, manifest, unique, globalManifest)}\n\n\t\t\t<div data-id={unique}>\n\t\t\t\t{/*Regular component implementation*/}\n\t\t\t</div>\n\t\t</>\n\t);\n};\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"PHP view:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-php",children:'use EightshiftLibs\\Helpers\\Components;\n\n$globalManifest = Components::getManifest(dirname(__DIR__, 2));\n$manifest = Components::getManifest(__DIR__);\n\n$unique = Components::getUnique();\n\n?>\n\n<div data-id="<?php echo esc_attr($unique); ?>">\n\t<?php echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest); ?>\n\t// Regular component implementation\n</div>\n'})}),"\n",(0,a.jsx)(e.p,{children:"Now that we have helpers in place, let's see how they work and what features they offer."}),"\n",(0,a.jsx)(e.h2,{id:"details",children:"Details"}),"\n",(0,a.jsxs)(e.p,{children:["CSS variables helper consists of 2 helpers. ",(0,a.jsx)(e.code,{children:"outputCssVariables"})," helper will output all CSS variables set in your blocks/component manifest and ",(0,a.jsx)(e.code,{children:"getUnique"})," helper will make sure that variables are applied only to the exact block/component."]}),"\n",(0,a.jsx)(e.p,{children:"If you check your rendered website you can see that you have something like this:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<div class="typography" data-id="210c9bbf733ef5c6aa74c49168ac29a7">\n\t<style>\n\t\t.typography[data-id=\'210c9bbf733ef5c6aa74c49168ac29a7\'] {\n\t\t\t--typography-color: var(--global-colors-black);\n\t\t\t--typography-content-align: left;\n\t\t}\n\t</style>\n\t...\n</div>\n'})}),"\n",(0,a.jsx)(e.p,{children:"This is all that's required for the magic of CSS variables to work! Now let's see it in action and check out all additional features you can use."}),"\n",(0,a.jsx)(e.h2,{id:"global-variables",children:"Global variables"}),"\n",(0,a.jsxs)(e.p,{children:["Now that we know how CSS variables are generated, we have one more helper to describe.\nThe ",(0,a.jsx)(e.code,{children:"outputCssVariablesGlobal(globalSettings);"})," helper is called in the ",(0,a.jsx)(e.code,{children:"application-blocks-editor.js"})," file. It is used to output all CSS variables from the global manifest under the ",(0,a.jsx)(e.code,{children:"globalVariables"})," key, into the ",(0,a.jsx)(e.code,{children:":root"})," selector."]}),"\n",(0,a.jsx)(e.admonition,{title:":es-hide-title:",type:"note",children:(0,a.jsx)(e.p,{children:"All of these variables are available to use inside any blocks/components."})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Global Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"namespace": "eightshift-boilerplate",\n\t"background": "#D8262C",\n\t"foreground": "#FFFFFF",\n\t"globalVariables": {\n\t\t"customBlocksName": "eightshift-block",\n\t\t"maxCols": 12,\n\t\t"breakpoints": {\n\t\t\t"mobile": 479,\n\t\t\t"tablet": 1279,\n\t\t\t"desktop": 1919,\n\t\t\t"large": 1920\n\t\t},\n\t\t"containers": {\n\t\t\t"default": "1330px"\n\t\t},\n\t\t"gutters": {\n\t\t\t"none": "0",\n\t\t\t"default": "25px",\n\t\t\t"big": "50px"\n\t\t},\n\t\t"sectionSpacing": {\n\t\t\t"min":  -300,\n\t\t\t"max":  300,\n\t\t\t"step": 10\n\t\t},\n\t\t"sectionInSpacing": {\n\t\t\t"min":  0,\n\t\t\t"max":  300,\n\t\t\t"step": 10\n\t\t},\n\t\t"colors": [\n\t\t\t{\n\t\t\t\t"name": "Black",\n\t\t\t\t"slug": "black",\n\t\t\t\t"color": "#111111"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"name": "White",\n\t\t\t\t"slug": "white",\n\t\t\t\t"color": "#FFFFFF"\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:"<style>\n\t:root {\n\t\t--global-custom-blocks-name: eightshift-block;\n\t\t--global-max-cols: 12;\n\t\t--global-breakpoints-mobile: 479;\n\t\t--global-breakpoints-tablet: 1279;\n\t\t--global-breakpoints-desktop: 1919;\n\t\t--global-breakpoints-large: 1920;\n\t\t--global-containers-default: 1330px;\n\t\t--global-gutters-none: 0;\n\t\t--global-gutters-default: 25px;\n\t\t--global-gutters-big: 50px;\n\t\t--global-section-spacing-min: -300;\n\t\t--global-section-spacing-max: 300;\n\t\t--global-section-spacing-step: 10;\n\t\t--global-section-in-spacing-min: 0;\n\t\t--global-section-in-spacing-max: 300;\n\t\t--global-section-in-spacing-step: 10;\n\t\t--global-colors-black: #111111;\n\t\t--global-colors-white: #FFFFFF;\n\t}\n</style>\n"})}),"\n",(0,a.jsx)(e.p,{children:"You can use a global variable like any other CSS variable:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:"color: var(--global-colors-white);\n"})}),"\n",(0,a.jsx)(e.h2,{id:"variables",children:"Variables"}),"\n",(0,a.jsx)(e.p,{children:"As we said in the beginning, all CSS variables are defined within the block/component manifest."}),"\n",(0,a.jsxs)(e.p,{children:["To output an attribute as a CSS variable, you need to set the ",(0,a.jsx)(e.code,{children:"variables"})," key in the block/component ",(0,a.jsx)(e.code,{children:"manifest"})," and define the variable markdown."]}),"\n",(0,a.jsx)(e.p,{children:"All css variables are prepared and ready to be used in the responsive manner."}),"\n",(0,a.jsx)(e.h2,{id:"default-type",children:"Default type"}),"\n",(0,a.jsxs)(e.p,{children:["Variable ",(0,a.jsx)(e.code,{children:"default"})," will output all variables from the list no matter what you have selected in the attribute. You can use unlimited variables."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentClass": "typography",\n\t"attributes": {\n\t\t"typographySize": {\n\t\t\t"type": "string",\n\t\t\t"default": "120-default"\n\t\t}\n\t},\n\t"variables": {\n\t\t"typographySize": [\n\t\t\t{\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "120px",\n\t\t\t\t\t"typography-line-height": "calc(var(--typography-size) * 1.2)"\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:"--typography-size: 120px;\n--typography-line-height: 144px;\n"})}),"\n",(0,a.jsx)(e.h2,{id:"value-type",children:"Value type"}),"\n",(0,a.jsxs)(e.p,{children:["Variable ",(0,a.jsx)(e.code,{children:"value"})," will output all variables depending on attributes value. Everything else is the same as in the default type."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentClass": "typography",\n\t"attributes": {\n\t\t"typographySize": {\n\t\t\t"type": "string",\n\t\t\t"default": "120-default"\n\t\t}\n\t},\n\t"variables": {\n\t\t"typographySize": {\n\t\t\t"120-default": [\n\t\t\t\t{\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"typography-size": "120px",\n\t\t\t\t\t\t"typography-line-height": "calc(var(--typography-size) * 1.2)"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:"--typography-size: 120px;\n--typography-line-height: 144px;\n"})}),"\n",(0,a.jsx)(e.h2,{id:"editor-variables",children:"Editor variables"}),"\n",(0,a.jsxs)(e.p,{children:["Editor variables behave just like regular ",(0,a.jsx)(e.code,{children:"variables"}),", except they are output only inside the Block Editor.\nThey are mostly used for overriding specific behaviour, e.g. showing a hidden element as half-transparent instead of hiding it completely."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentName": "wrapper",\n\t"title": "Wrapper",\n\t"componentClass": "wrapper",\n\t"attributes": {\n\t\t"wrapperHide": {\n\t\t\t"type": "boolean",\n\t\t\t"default": false\n\t\t}\n\t},\n\t"variables": {\n\t\t"wrapperHide": {\n\t\t\t"true": [\n\t\t\t\t{\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "none"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t],\n\t\t}\n\t},\n\t"variablesEditor": {\n\t\t"wrapperHide": {\n\t\t\t"true": [\n\t\t\t\t{\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display-opacity": "0.5",\n\t\t\t\t\t\t"wrapper-display": "var(--wrapper-display-type, grid)"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:"--wrapper-display: none;\n--wrapper-display-opacity: 0.5;\n--wrapper-display: var(--wrapper-display-type, grid);\n"})}),"\n",(0,a.jsx)(e.h2,{id:"manual-variables",children:"Manual variables"}),"\n",(0,a.jsxs)(e.p,{children:["Custom CSS variables can be generated and output independently from all the attributes through the ",(0,a.jsx)(e.code,{children:"variablesCustom"})," key. Add it inside the manifest (top level) and add each variable as an array item.\nManual variables will be added at the end of the output."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"attributes": {\n\t\t// ...\n\t},\n\t"variablesCustom": [\n\t\t"--variable1: test1",\n\t\t"--variable2: test2",\n\t\t"--variable3: test3"\n\t]\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:"--variable1: test1;\n--variable2: test2;\n--variable3: test3;\n"})}),"\n",(0,a.jsx)(e.h2,{id:"manual-variables-inside-the-block-editor",children:"Manual variables inside the Block editor"}),"\n",(0,a.jsxs)(e.p,{children:["If you want to add manual variables that only apply inside the Block editor you can use the ",(0,a.jsx)(e.code,{children:"variablesCustomEditor"})," key. Everything works the same as described in the ",(0,a.jsx)(e.strong,{children:"Manual variables"})," section.\nIf you define both ",(0,a.jsx)(e.code,{children:"variablesCustomEditor"})," and ",(0,a.jsx)(e.code,{children:"variables"}),", both will be output in the editor, but only ",(0,a.jsx)(e.code,{children:"variables"})," will be output on the frontend."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"attributes": {\n\t\t// ...\n\t},\n\t"variablesCustomEditor": [\n\t\t"--variable1: test1",\n\t\t"--variable2: test2",\n\t\t"--variable3: test3"\n\t]\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:"--variable1: test1;\n--variable2: test2;\n--variable3: test3;\n"})}),"\n",(0,a.jsx)(e.h2,{id:"additional-options-and-examples",children:"Additional options and examples"}),"\n",(0,a.jsx)(e.h3,{id:"color",children:"Color"}),"\n",(0,a.jsx)(e.p,{children:"Here is an example how to output global variable as a css variable."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentClass": "typography",\n\t"attributes": {\n\t\t"typographyColor": {\n\t\t\t"type": "string",\n\t\t\t"default": "white"\n\t\t}\n\t},\n\t"variables": {\n\t\t"typographyColor": [\n\t\t\t{\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-color": "var(--global-colors-white)"\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:"--typography-color: var(--global-colors-white);\n"})}),"\n",(0,a.jsx)(e.h3,{id:"responsive",children:"Responsive"}),"\n",(0,a.jsx)(e.p,{children:"All variables are prepared to be responsive. If you set multiple keys in the manifest list that variable will be outputted in the correct media query. Breakpoints are taken from the global manifest and the order of the output breakpoints."}),"\n",(0,a.jsx)(e.admonition,{title:"Important",type:"caution",children:(0,a.jsx)(e.p,{children:"Global breakpoints must follow the convention from the smallest size to the largest."})}),"\n",(0,a.jsx)(e.p,{children:"If you don't specify breakpoint key, that item will not be wrapped in the media query."}),"\n",(0,a.jsx)(e.p,{children:"If you write breakpoint that isn't defined in the global manifest, that condition will be ignored."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentClass": "typography",\n\t"attributes": {\n\t\t"typographySize": {\n\t\t\t"type": "string",\n\t\t\t"default": "120-default"\n\t\t}\n\t},\n\t"variables": {\n\t\t"typographySize": [\n\t\t\t{\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "30px"\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t"breakpoint": "tablet",\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "80px"\n\t\t\t\t}\n\t\t\t}\n\t\t\t{\n\t\t\t\t"breakpoint": "large",\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "120px"\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:".typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t--typography-size: 30px;\n}\n\n@media(min-width: 1279px) {\n\t.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t\t--typography-size: 80px;\n\t}\n}\n\n@media(min-width: 1920px) {\n\t.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t\t--typography-size: 120px;\n\t}\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"responsive-inverse",children:"Responsive Inverse"}),"\n",(0,a.jsxs)(e.p,{children:["By default, we use mobile first approach but if you need desktop first you can use ",(0,a.jsx)(e.code,{children:"inverse: true"})," key."]}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsx)(e.p,{children:"If you have multiple mobile/desktop-first breakpoints, output will sort them mobile first and then desktop first after that."})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentClass": "typography",\n\t"attributes": {\n\t\t"typographySize": {\n\t\t\t"type": "string",\n\t\t\t"default": "120-default"\n\t\t}\n\t},\n\t"variables": {\n\t\t"typographySize": [\n\t\t\t{\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "120px"\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t"breakpoint": "tablet",\n\t\t\t\t"inverse": true,\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "80px"\n\t\t\t\t}\n\t\t\t}\n\t\t\t{\n\t\t\t\t"breakpoint": "mobile",\n\t\t\t\t"inverse": true,\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "320px"\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:".typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t--typography-size: 120px;\n}\n\n@media(max-width: 1279px) {\n\t.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t\t--typography-size: 80px;\n\t}\n}\n\n@media(max-width: 479px) {\n\t.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t\t--typography-size: 30px;\n\t}\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"attribute-value-replacement",children:"Attribute value replacement"}),"\n",(0,a.jsxs)(e.p,{children:["Attribute value replacement variable is used to return the attribute value where you want it in the css variables. To use it just put ",(0,a.jsx)(e.code,{children:"%value%"})," in you css variables."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Manifest:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentClass": "typography",\n\t"attributes": {\n\t\t"typographySize": {\n\t\t\t"type": "string",\n\t\t\t"default": "120"\n\t\t}\n\t},\n\t"variables": {\n\t\t"typographySize": [\n\t\t\t{\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "30px"\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\t"breakpoint": "tablet",\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "80px"\n\t\t\t\t}\n\t\t\t}\n\t\t\t{\n\t\t\t\t"breakpoint": "large",\n\t\t\t\t"variable": {\n\t\t\t\t\t"typography-size": "%value%px"\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:".typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t--typography-size: 30px;\n}\n\n@media(min-width: 1279px) {\n\t.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t\t--typography-size: 80px;\n\t}\n}\n\n@media(min-width: 1920px) {\n\t.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t\t--typography-size: 120px;\n\t}\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"responsive-variables",children:"Responsive variables"}),"\n",(0,a.jsxs)(e.p,{children:["Responsive variables are used for eliminating unnecessary code duplication. For example, if you have 4 separate attributes used for setting a responsive variable where all the attributes have the same output (e.g. ",(0,a.jsx)(e.code,{children:"%value%"}),"), the variables can get cluttered rather quickly."]}),"\n",(0,a.jsxs)(e.p,{children:["In a top-level manifest key ",(0,a.jsx)(e.code,{children:"responsiveAttributes"}),", you can place a new key (e.g. ",(0,a.jsx)(e.code,{children:"wrapperHide"}),") that represents a common key for your responsive variables. Inside it, you can list your responsive variables (e.g. ",(0,a.jsx)(e.code,{children:"wrapperHideLarge"}),", ",(0,a.jsx)(e.code,{children:"wrapperHideDesktop"}),", ",(0,a.jsx)(e.code,{children:"wrapperHideTablet"}),", ",(0,a.jsx)(e.code,{children:"wrapperHideMobile"}),") as a key-value pair. The key represents a breakpoint name, and the value represents responsive variable(",(0,a.jsx)(e.code,{children:"breakpoint"}),": ",(0,a.jsx)(e.code,{children:"responsiveVariableName"}),"). Afterwards, you can add that common key inside the ",(0,a.jsx)(e.code,{children:"variables"})," (and/or ",(0,a.jsx)(e.code,{children:"variablesEditor"}),") key and configure the output template."]}),"\n",(0,a.jsxs)(e.p,{children:["Best practice is to have the attributes named consistently with your breakpoints - in the ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"variableName``breakpointName"})})," format (see example below)."]}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.p,{children:["If you need an extra variable, or are overriding some of the auto-generated variables (from the helper), the variables will be output after the responsive variables. (see ",(0,a.jsx)(e.strong,{children:"Example 2"}),")"]})}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsxs)(e.p,{children:["Order of responsive attributes is important since generating variables relies on that order. Make sure to use the ",(0,a.jsx)(e.code,{children:"inverse"})," option properly."]})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentName": "wrapper",\n\t"title": "Wrapper",\n\t"componentClass": "wrapper",\n\t"attributes": {\n\t\t"wrapperHideLarge": {\n\t\t\t"type": "boolean",\n\t\t\t"default": false\n\t\t},\n\t\t"wrapperHideDesktop": {\n\t\t\t"type": "boolean"\n\t\t},\n\t\t"wrapperHideTablet": {\n\t\t\t"type": "boolean"\n\t\t}\n\t},\n\t"responsiveAttributes": {\n\t\t"wrapperHide": {\n\t\t\t"large": "wrapperHideLarge",\n\t\t\t"desktop": "wrapperHideDesktop",\n\t\t\t"tablet": "wrapperHideTablet"\n\t\t}\n\t},\n\t"variables": {\n\t\t"wrapperHide": {\n\t\t\t"true": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "none"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t],\n\t\t\t"false": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "var(--wrapper-display-type, grid)"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Transformed:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentName": "wrapper",\n\t"title": "Wrapper",\n\t"componentClass": "wrapper",\n\t"attributes": {\n\t\t"wrapperHide": {\n\t\t\t"type": "boolean",\n\t\t\t"default": false\n\t\t}\n\t},\n\t"responsiveAttributes": {\n\t\t"wrapperHideLarge": {\n\t\t\t"type": "boolean",\n\t\t\t"default": false\n\t\t},\n\t\t"wrapperHideDesktop": {\n\t\t\t"type": "boolean"\n\t\t},\n\t\t"wrapperHideTablet": {\n\t\t\t"type": "boolean"\n\t\t}\n\t},\n\t"variables": {\n\t\t"wrapperHideLarge": {\n\t\t\t"true": [\n\t\t\t\t{\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "none"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t],\n\t\t\t"false": [\n\t\t\t\t{\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "var(--wrapper-display-type, grid)"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t"wrapperHideDesktop": {\n\t\t\t"true": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"breakpoint": "desktop",\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "none"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t],\n\t\t\t"false": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"breakpoint": "desktop",\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "var(--wrapper-display-type, grid)"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t"wrapperHideTablet": {\n\t\t\t"true": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"breakpoint": "desktop",\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "none"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t],\n\t\t\t"false": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"breakpoint": "desktop",\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "var(--wrapper-display-type, grid)"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:".wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t--wrapper-display: var(--wrapper-display-type, grid);\n}\n@media(max-width: 1920px) {\n\t.wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t\t--wrapper-display: none;\n\t}\n}\n@media(max-width: 1279px) {\n\t.wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t\t--wrapper-display: var(--wrapper-display-type, grid);\n\t}\n}\n\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n\t"componentName": "wrapper",\n\t"title": "Wrapper",\n\t"componentClass": "wrapper",\n\t"attributes": {\n\t\t"wrapperHideLarge": {\n\t\t\t"type": "boolean",\n\t\t\t"default": false\n\t\t},\n\t\t"wrapperHideDesktop": {\n\t\t\t"type": "boolean"\n\t\t},\n\t\t"wrapperHideTablet": {\n\t\t\t"type": "boolean"\n\t\t}\n\t},\n\t"responsiveAttributes": {\n\t\t"wrapperHide": {\n\t\t\t"large": "wrapperHideLarge",\n\t\t\t"desktop": "wrapperHideDesktop",\n\t\t\t"tablet": "wrapperHideTablet"\n\t\t}\n\t},\n\t"variables": {\n\t\t"wrapperHide": {\n\t\t\t"true": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "none"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t],\n\t\t\t"false": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "var(--wrapper-display-type, grid)"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t"wrapperHideLarge": {\n\t\t\t"true": [\n\t\t\t\t{\n\t\t\t\t\t"inverse": true,\n\t\t\t\t\t"variable": {\n\t\t\t\t\t\t"wrapper-display": "block",\n\t\t\t\t\t\t"wrapper-opacity": 0\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t],\n\t\t}\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Output"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:".wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {\n\t--wrapper-display: none;\n\t--wrapper-display: block;\n\t--wrapper-opacity: 0;\n}\n"})})]})}function c(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>l});var a=n(96540);const r={},s=a.createContext(r);function i(t){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),a.createElement(s.Provider,{value:e},t.children)}}}]);