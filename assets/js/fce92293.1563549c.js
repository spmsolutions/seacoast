"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[67812],{59983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(74848),s=t(28453);const i={id:"blocks-component-in-block",title:"Component in a Block",sidebar_label:"Component in a Block"},a=void 0,r={id:"legacy/v5/basics/blocks-component-in-block",title:"Component in a Block",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-component-in-block.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-component-in-block",permalink:"/seacoast/docs/legacy/v5/basics/blocks-component-in-block",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-component-in-block",title:"Component in a Block",sidebar_label:"Component in a Block"},sidebar:"docs",previous:{title:"Attributes",permalink:"/seacoast/docs/legacy/v5/basics/blocks-attributes"},next:{title:"Wrapper",permalink:"/seacoast/docs/legacy/v5/basics/blocks-wrapper"}},l={},c=[{value:"I want to use one heading component in my block.",id:"i-want-to-use-one-heading-component-in-my-block",level:3},{value:"I want to use one heading and paragraph component in my block.",id:"i-want-to-use-one-heading-and-paragraph-component-in-my-block",level:3},{value:"I want two heading components in my block.",id:"i-want-two-heading-components-in-my-block",level:3},{value:"I want to override a default attribute of a component in a block.",id:"i-want-to-override-a-default-attribute-of-a-component-in-a-block",level:3},{value:"I want to use a component that uses more components (componentCeption).",id:"i-want-to-use-a-component-that-uses-more-components-componentception",level:3},{value:"I don&#39;t need all the component options in my block.",id:"i-dont-need-all-the-component-options-in-my-block",level:3},{value:"I don&#39;t want my editor to be able to change component options in my block.",id:"i-dont-want-my-editor-to-be-able-to-change-component-options-in-my-block",level:3},{value:"How do my example attributes behave when I use components in blocks?",id:"how-do-my-example-attributes-behave-when-i-use-components-in-blocks",level:3},{value:"I have a component name that has multiple strings in a name, will this work?",id:"i-have-a-component-name-that-has-multiple-strings-in-a-name-will-this-work",level:3},{value:"I have a component that I want to use manually",id:"i-have-a-component-that-i-want-to-use-manually",level:3},{value:"I want to limit which options are shown for components inside a block/component",id:"i-want-to-limit-which-options-are-shown-for-components-inside-a-blockcomponent",level:3},{value:"I want to only pass attributes to the component that I&#39;m going to use",id:"i-want-to-only-pass-attributes-to-the-component-that-im-going-to-use",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,o.jsx)(n.p,{children:"Blocks and components work perfectly together because they are made that way. We simplified this as much as possible but there always a few things you need to do manually."}),"\n",(0,o.jsx)(n.p,{children:"Try to think of your development process in this way:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Each component must be standalone and ideally not depend on any other components (sometimes this is not possible but keep this to a minimum)."}),"\n",(0,o.jsx)(n.li,{children:"Components must not be aware of the layout they are used in."}),"\n",(0,o.jsxs)(n.li,{children:["No global styles. Instead, all styles should be contained to the block/component. For more details, check ",(0,o.jsx)(n.a,{href:"writing-styles",children:"this link"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["You should define all heading variations in a ",(0,o.jsx)(n.code,{children:"heading"})," component. You can then use this component everywhere you have a heading instead of writing a new implementation. In practice: don't do ",(0,o.jsx)(n.code,{children:"<h2>$heading</h2>"})," but render the ",(0,o.jsx)(n.code,{children:"heading"})," component instead using the helpers defined in the ",(0,o.jsx)(n.a,{href:"helpers",children:"helpers section"}),". The heading is just an example, but this applies to every component."]}),"\n",(0,o.jsx)(n.li,{children:"You can have multiple heading components in one block."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"i-want-to-use-one-heading-component-in-my-block",children:"I want to use one heading component in my block."}),"\n",(0,o.jsx)(n.p,{children:"If you have a heading component with these attributes:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/components/heading/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"headingContent": {\n\t\t"type": "string"\n\t},\n\t"headingLevel": {\n\t\t"type": "integer",\n\t\t"default": 2\n\t},\n\t"headingSize": {\n\t\t"type": "string",\n\t\t"default": "default"\n\t},\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"and you want to use the heading component in the Jumbotron block, you can use it by adding a component's key in the Jumbotron block manifest like this:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/custom/jumbotron/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"content": {\n\t\t"type": "string"\n\t\t"default": "test",\n\t}\n},\n"components": {\n\t"heading": "heading"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In your block attributes object, you will now have these keys:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'\n// Attributes from the component.\n"headingContent": "",\n"headingLevel": 2,\n"headingSize": "default",\n\n// Attributes from the block.\n"content": "test",\n'})}),"\n",(0,o.jsx)(n.p,{children:"As you can see in the example, you can merge component attributes in your block attributes. Keep in mind that, in the provided example, the components' attributes will be injected in the block attributes with the same name as defined in the components manifest."}),"\n",(0,o.jsx)(n.h3,{id:"i-want-to-use-one-heading-and-paragraph-component-in-my-block",children:"I want to use one heading and paragraph component in my block."}),"\n",(0,o.jsx)(n.p,{children:"You can do this by following the same principle as before. Here is an example:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/custom/jumbotron/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"content": {\n\t\t"type": "string"\n\t\t"default": "test",\n\t}\n},\n"components": {\n\t"heading": "heading"\n\t"paragraph": "paragraph"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"i-want-two-heading-components-in-my-block",children:"I want two heading components in my block."}),"\n",(0,o.jsxs)(n.p,{children:["As you already saw in the previous examples, the heading key and value are the same in the components object. The key represents the ",(0,o.jsx)(n.code,{children:"components attributes prefix"}),", and the value represents the ",(0,o.jsx)(n.code,{children:"actual component name"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If you want to use the heading component in your block, follow this example:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/custom/jumbotron/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"content": {\n\t\t"type": "string"\n\t\t"default": "test",\n\t}\n},\n"components": {\n\t"heading": "heading"\n\t"intro": "heading"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In your block attributes object, you will now have these keys:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'\n// Attributes from the first component.\n"headingContent": "",\n"headingLevel": 2,\n"headingSize": "default",\n\n// Attributes from the second component.\n"introContent": "",\n"introLevel": 2,\n"introSize": "default",\n\n// Attributes from the block.\n"content": "test",\n'})}),"\n",(0,o.jsx)(n.h3,{id:"i-want-to-override-a-default-attribute-of-a-component-in-a-block",children:"I want to override a default attribute of a component in a block."}),"\n",(0,o.jsx)(n.p,{children:"We build all our attributes by merging attributes objects in this order:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"global attributes (global settings);"}),"\n",(0,o.jsx)(n.li,{children:"wrapper attributes;"}),"\n",(0,o.jsx)(n.li,{children:"component attributes; and"}),"\n",(0,o.jsx)(n.li,{children:"block attributes."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"By following the basic principle of merging objects, if you have two keys with the same name, the last one will always override the previous. Now that you know how attributes are built, you can follow this example for your answer."}),"\n",(0,o.jsx)(n.p,{children:"If you have a heading component with these attributes:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/components/heading/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"headingContent": {\n\t\t"type": "string"\n\t},\n\t"headingLevel": {\n\t\t"type": "integer",\n\t\t"default": 2\n\t},\n\t"headingSize": {\n\t\t"type": "string",\n\t\t"default": "default"\n\t},\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"and you want to override one or multiple default attributes from the heading component."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/custom/jumbotron/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"content": {\n\t\t"type": "string"\n\t\t"default": "test",\n\t},\n\t"headingSize": {\n\t\t"type": "string",\n\t\t"default": "small"\n\t}\n},\n"components": {\n\t"heading": "heading"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In your block attributes object, you will now have these keys:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'\n// Attributes from the component.\n"headingContent": "",\n"headingLevel": 2,\n"headingSize": "small", // changed in the block attributes.\n\n// Attributes from the block.\n"content": "test",\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Keep in mind that we handle the attributes data necessary to have multiple components in one block but you must provide the correct props inside your files to mock the custom attribute names. The best way to see how this is done is to check the ",(0,o.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/Blocks/custom/card",children:"card block"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"i-want-to-use-a-component-that-uses-more-components-componentception",children:"I want to use a component that uses more components (componentCeption)."}),"\n",(0,o.jsx)(n.p,{children:"For example, if you have a block called cards grid that uses a card component, that card component uses a heading component."}),"\n",(0,o.jsx)(n.p,{children:"If you have a heading component with these attributes:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/components/heading/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"headingContent": {\n\t\t"type": "string"\n\t},\n\t"headingLevel": {\n\t\t"type": "integer",\n\t\t"default": 2\n\t},\n\t"headingSize": {\n\t\t"type": "string",\n\t\t"default": "default"\n\t},\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"and you have a card component:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/components/card/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"superCard": {\n\t\t"type": "boolean"\n\t\t"default": true,\n\t},\n},\n"components": {\n\t"heading": "heading"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"and you have a cards grid block:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Blocks/custom/cards-grid/manifest.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"attributes": {\n\t"content": {\n\t\t"type": "string"\n\t\t"default": "test",\n\t},\n},\n"components": {\n\t"card": "card"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"in your block attributes object, you will now have these keys:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'\n// Attributes from the heading component.\n"headingContent": "",\n"headingLevel": 2,\n"headingSize": "default",\n\n// Attributes from the card component.\n"superCard": true,\n\n// Attributes from the block.\n"content": "test",\n'})}),"\n",(0,o.jsx)(n.p,{children:"As you can see in the example, you have all the attributes from the card and heading component inside your card's grid block."}),"\n",(0,o.jsx)(n.h3,{id:"i-dont-need-all-the-component-options-in-my-block",children:"I don't need all the component options in my block."}),"\n",(0,o.jsxs)(n.p,{children:["All our components come with a few common attributes that we recommend you also implement in your components. One of those attributes is ",(0,o.jsx)(n.code,{children:"buttonUse"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"buttonUse": true,\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This attribute is available in all three components (editor, toolbar, options). If set to ",(0,o.jsx)(n.strong,{children:"false"}),", it will remove this component from the DOM. This is useful if you want to hide all markup from the DOM."]}),"\n",(0,o.jsx)(n.p,{children:"For example, you have a Jumbotron block and a heading that you want to populate if necessary. If you add content to the heading, everything looks good. But if you don't add it, you'll still see a placeholder for that heading in the block editor. That affects how you perceive it, and a user may think this block will look like that on the front end (with the placeholder text). So if you have a component that you will not populate on some block, switch the toggle to false, and you will hide it from the DOM. This is useful for content editors."}),"\n",(0,o.jsx)(n.h3,{id:"i-dont-want-my-editor-to-be-able-to-change-component-options-in-my-block",children:"I don't want my editor to be able to change component options in my block."}),"\n",(0,o.jsxs)(n.p,{children:["Another attribute that you can use is ",(0,o.jsx)(n.code,{children:"buttonShowControls"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"buttonShowControls": true,\n'})}),"\n",(0,o.jsx)(n.p,{children:"This attribute is available in the options component only. You can't set it up via block editor, only from code. You would use it if you wanted to use a heading component and set all the defaults, without your content editor changing how the heading looks. It can add the heading content from the editor section without changing any of the options. You can set this option in the manifest or pass it manually via props."}),"\n",(0,o.jsx)(n.h3,{id:"how-do-my-example-attributes-behave-when-i-use-components-in-blocks",children:"How do my example attributes behave when I use components in blocks?"}),"\n",(0,o.jsx)(n.p,{children:"Exactly the same way as attributes."}),"\n",(0,o.jsx)(n.h3,{id:"i-have-a-component-name-that-has-multiple-strings-in-a-name-will-this-work",children:"I have a component name that has multiple strings in a name, will this work?"}),"\n",(0,o.jsxs)(n.p,{children:["By multiple strings in a name we mean that component name has multiple words, for example, ",(0,o.jsx)(n.code,{children:"jumbotron-cta"}),". The problem here is that we define components with dash and attributes with camelcase. That's why you have to fix this. We have provided you with a helper. The helper makes camelcase on all your component-name strings."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example:"})}),"\n",(0,o.jsxs)(n.p,{children:["You have a component named ",(0,o.jsx)(n.code,{children:"jumbotron-cta"})," and you want to use it in your block. As described on this page, you will create a ",(0,o.jsx)(n.code,{children:"components"})," key in your ",(0,o.jsx)(n.code,{children:"manifest.json"})," and use ",(0,o.jsx)(n.code,{children:"jumbotron-cta"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\t"components": {\n\t\t"jumbotron-cta": "jumbotron-cta"\n\t}\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["But in all places in your component where you use ",(0,o.jsx)(n.code,{children:"setAttributes"})," you must use ",(0,o.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/scripts/helpers/camelize.js",children:"camelize helper"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"\nimport { camelize } from '@eightshift/frontend-libs/scripts/helpers';\n\n<ToggleControl\n\t label={'Custom Label'}\n\t onChange={(value) => setAttributes({ [`${camelize(componentName)}Use`]: value })}\n/>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"i-have-a-component-that-i-want-to-use-manually",children:"I have a component that I want to use manually"}),"\n",(0,o.jsx)(n.p,{children:"We created this cool way of importing attributes and loading components in your blocks or other components. However, that doesn't mean that you can't have instances where you have to load components manually. In that case, you have to provide all the attributes that you want to use manually. The attributes that you didn't provide will not be magically set from the manifest, but you can make your life easier and map it like this."}),"\n",(0,o.jsxs)(n.p,{children:["For example, you have a ",(0,o.jsx)(n.code,{children:"card"})," component that you will use in the ",(0,o.jsx)(n.code,{children:"featured-posts"})," block."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"featured-posts.php"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"// Fetch and parse manifest using custom helper.\n$cardManifest = Components::getManifest(dirname(__DIR__, 2) . '/components/card');\n\necho wp_kses_post(\n\tComponents::render(\n\t\t'card',\n\t\t[\n\t\t\t'headingColor' => $cardManifest['attributes']['headingColor']['default'],\n\t\t\t'headingSize' => $cardManifest['attributes']['headingSize']['default'],\n\t\t\t'headingWeight' => $cardManifest['attributes']['headingWeight']['default'],\n\t\t\t'headingContent' => __('Custom content for heading', 'textdomain'),\n\n\t\t\t'paragraphContent' => __('Custom content for paragraph', 'textdomain'),\n\t\t\t'paragraphSize' => $cardManifest['attributes']['paragraphSize']['default'],\n\t\t]\n\t)\n);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"i-want-to-limit-which-options-are-shown-for-components-inside-a-blockcomponent",children:"I want to limit which options are shown for components inside a block/component"}),"\n",(0,o.jsxs)(n.p,{children:["Let's say you have a block that has a ",(0,o.jsx)(n.code,{children:"Heading"})," component inside it."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Heading"})," has 10 text sizes and 5 colors, but for that block, only 2 colors and 3 text sizes are allowed.\nTo achieve this you must prepare your component to be able to use this feature:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Your component options must be named the same name as their attribute value. In the example, you can see that the options key for ",(0,o.jsx)(n.code,{children:"typographySize"})," is the same name as in the attributes."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "typographySize": {\n      "type": "string",\n      "default": "16-text-roman"\n    },\n    "typographyColor": {\n      "type": "string",\n      "default": "black",\n      "variable": true,\n      "color": true\n    },\n  },\n  "options": {\n    "typographySize": [\n      {\n        "label": "180 Display",\n        "value": "180-default"\n      },\n      {\n        "label": "120 Display",\n        "value": "120-default"\n      },\n      {\n        "label": "80 Display",\n        "value": "80-default"\n      },\n      {\n        "label": "52 Display",\n        "value": "52-default"\n      },\n      {\n        "label": "36 Text",\n        "value": "36-text"\n      }\n    ],\n    "typographyColor": [\n      "black",\n      "white",\n      "grey100",\n      "grey200"\n    ]\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Every option in your component must use ",(0,o.jsx)(n.code,{children:"getOptions"})," helper for the prop that is used to provide options. Details about the helper can be found ",(0,o.jsx)(n.a,{href:"helpers-javascript#getoptions",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"SelectControl Example:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"<SelectControl\n  label={\n    <>\n      <Icon icon={icons.textSize} />\n      {__('Text size', 'eightshift-boilerplate')}\n    </>\n  }\n  value={typographySize}\n  options={getOptions(manifest, componentName, 'size', options)}\n  onChange={(value) => setAttributes({ [`${componentName}Size`]: value })}\n/>\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"ColorPaletteCustom Example:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"<ColorPaletteCustom\n  label={\n    <>\n      <Icon icon={icons.color} />\n      {__('Color', 'eightshift-boilerplate')}\n    </>\n  }\n  colors={getOptionColors(getOptions(manifest, componentName, 'color', options))}\n  value={typographyColor}\n  onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}\n/>\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"In the component/blocks for which you are going to override the options, you must provide an options prop that is going to override the default one."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"heading-options.js"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"<HeadingOptions\n  options={options}\n  // ...\n/>\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["In the component/blocks for which you are going to override options, you must provide the override in the ",(0,o.jsx)(n.code,{children:"manifest.json"})," by following the same naming as in the component."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "options": {\n    "headingSize": [\n      "80-default",\n      "52-default"\n    ],\n    "headingColor": [\n      "black",\n      "white"\n    ]\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"And this is it. You are now able to override the options from the parent block/component."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Keep in mind that you can only override SelectControl, ColorPaletteCustom, and AlignmentToolbar."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"i-want-to-only-pass-attributes-to-the-component-that-im-going-to-use",children:"I want to only pass attributes to the component that I'm going to use"}),"\n",(0,o.jsx)(n.p,{children:"At one point in time, we agreed on naming standards for all component attributes. That way we made sure that you wouldn't get any collisions when using multiple components. So we said it is ok to spread all attributes to the component and let the component handle what it needs. Well, that approach is ok but it can bite you in the a.. at the point that you least expect."}),"\n",(0,o.jsxs)(n.p,{children:["That is why we created this ",(0,o.jsx)(n.a,{href:"helpers-javascript#props",children:"props helper"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["As described in ",(0,o.jsx)(n.a,{href:"blocks-component-in-block#i-want-to-limit-which-options-are-shown-for-components-inside-a-blockcomponent",children:"this chapter"})," you must follow the attributes naming convention and use ",(0,o.jsx)(n.code,{children:"components"})," key in the block/component manifest."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Let's set a layout for this example:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["components","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"heading"}),"\n",(0,o.jsx)(n.li,{children:"typography"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["custom","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"heading"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You have block ",(0,o.jsx)(n.code,{children:"heading"})," that uses component ",(0,o.jsx)(n.code,{children:"heading"})," and that component uses another component called ",(0,o.jsx)(n.code,{children:"typography"}),".\nWe are putting only relevant code in the example:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Block Heading manifest.json:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "blockName": "heading",\n  "components": {\n    "heading": "heading"\n  },\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"components"})," key, you must provide components that you are going to be using in this block. There are more options in the example at the beginning of this chapter."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Block heading-editor.js:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport { props } from '@eightshift/frontend-libs/scripts/editor';\nimport { HeadingEditor as HeadingEditorComponent } from '../../../components/heading/components/heading-editor';\nimport manifest from './../manifest.json';\n\nexport const HeadingEditor = ({attributes, setAttributes}) => {\n  const {\n    blockName,\n  } = manifest;\n\n  const {\n    blockClass,\n  } = attributes;\n\n  return (\n    <div className={blockClass}>\n      <HeadingEditorComponent\n        setAttributes={setAttributes}\n        {...props(attributes, blockName, '', true)}\n      />\n    </div>\n  );\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"In JavaScript, you spread the results of the props helper."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Block heading.php:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\n\n/**\n * Template for the Heading Block view.\n *\n * @package Redesign\n */\n\nuse Redesign\\Blocks\\Blocks;\nuse RedesignVendor\\EightshiftLibs\\Helpers\\Components;\n\n$manifest = Components::getManifest(__DIR__);\n$blockName = $attributes['blockName'] ?? $manifest['blockName'];\n\n$blockClass =  Components::checkAttr('blockClass', $attributes, $manifest);\n\n?>\n\n<div class=\"<?php echo esc_attr($blockClass); ?>\">\n  <?php\n  echo Components::render( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped\n    'heading',\n    Blocks::props($attributes, $blockName, '', true)\n  );\n  ?>\n</div>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In PHP you just provide the results of the props helper. As you can see in the ",(0,o.jsx)(n.a,{href:"helpers-javascript#props",children:"props helper docs"})," you must provide the fourth parameter to be ",(0,o.jsx)(n.code,{children:"true"})," to distinguish if this is a block or a component."]}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's see how the ",(0,o.jsx)(n.code,{children:"Component heading"})," looks like."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Heading component manifest.json:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "componentName": "heading",\n  "components": {\n    "heading": "typography"\n  },\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"heading"})," component we are using the ",(0,o.jsx)(n.code,{children:"typography"})," component but we are not using the default component name. Instead, we are changing the attribute name from ",(0,o.jsx)(n.code,{children:"typography"})," to ",(0,o.jsx)(n.code,{children:"heading"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Component heading-editor.js:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"The same is for options or toolbar components!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport { props } from '@eightshift/frontend-libs/scripts/editor';\nimport { TypographyEditor } from './../../typography/components/typography-editor';\nimport manifest from './../manifest.json';\n \nexport const HeadingEditor = (attributes) => {\n  const {\n    setAttributes,\n    componentName = manifest.componentName,\n    blockClass,\n  } = attributes;\n\n  return (\n    <>\n      <TypographyEditor\n        selectorClass={componentName}\n        blockClass={blockClass}\n        setAttributes={setAttributes}\n        {...props(attributes, 'typography', componentName)}\n      />\n    </>\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The difference here is that you don't need to provide the fourth parameter because this is a component. In this example, you are swapping attribute names so we must provide the target component name as a ",(0,o.jsx)(n.code,{children:"second"})," parameter and the current component name as a ",(0,o.jsx)(n.code,{children:"third"})," parameter."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"heading.php part"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\n\nuse Redesign\\Blocks\\Blocks;\nuse RedesignVendor\\EightshiftLibs\\Helpers\\Components;\n\n$manifest = Components::getManifest(__DIR__);\n$componentName = $attributes['componentName'] ?? $manifest['componentName'];\n\n$blockClass = $attributes['blockClass'] ?? '';\n\necho Components::render( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped\n  'typography',\n  array_merge(\n    [\n      'selectorClass' => 'heading',\n      'blockClass' => $blockClass,\n    ],\n    Blocks::props($attributes, 'typography', $componentName)\n  )\n);\n"})}),"\n",(0,o.jsx)(n.p,{children:"The PHP part looks similar to the JS block part."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Typography"})}),"\n",(0,o.jsx)(n.p,{children:"There is nothing special that you need to do in the last component in the tree other than following the attributes naming convention."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Summing it all up"})}),"\n",(0,o.jsx)(n.p,{children:"Block:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Components"})," key in the ",(0,o.jsx)(n.code,{children:"manifest.json"})," is used to provide/change the attribute names on the block registration process."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Props helper"})," will provide all the attributes used in the block and it will follow the dependency tree to the end so that all the attributes from the children components will also be provided as a result."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Components:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Components"})," key in the ",(0,o.jsx)(n.code,{children:"manifest.json"})," is used to determine the dependency tree when passing the attributes from parent to children."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Props helper"})," will provide only those attributes that are used in the children's components recursively. The same as props helper in the block."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more details please read the ",(0,o.jsx)(n.a,{href:"helpers-javascript#props",children:"props helper docs"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"You should avoid spreading attributes as props but rather use this helper because it provides only what is used in the component."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);