"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[44546],{82222:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var n=t(74848),s=t(28453);const l={id:"blocks-special-use-cases",title:"Special Use Cases"},i=void 0,r={id:"legacy/v8/basics/blocks-special-use-cases",title:"Special Use Cases",description:"docs-source",source:"@site/docs/legacy/v8/basics/blocks-special-use-cases.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/blocks-special-use-cases",permalink:"/seacoast/docs/legacy/v8/basics/blocks-special-use-cases",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-special-use-cases",title:"Special Use Cases"},sidebar:"docs",previous:{title:"Hooks",permalink:"/seacoast/docs/legacy/v8/basics/blocks-hooks"},next:{title:"Reusable Blocks",permalink:"/seacoast/docs/legacy/v8/basics/blocks-reusable"}},c={},a=[{value:"Change innerBlock attributes",id:"change-innerblock-attributes",level:2},{value:"Provide simple wrapper to all innerBlock",id:"provide-simple-wrapper-to-all-innerblock",level:2},{value:"Override innerBlock attributes only on the front end",id:"override-innerblock-attributes-only-on-the-front-end",level:2},{value:"Add CSS selectors on the parent component inside the block editor",id:"add-css-selectors-on-the-parent-component-inside-the-block-editor",level:2},{value:"How to only use my custom blocks",id:"how-to-only-use-my-custom-blocks",level:2},{value:"I want to use my custom blocks but add some core or third party plugins blocks",id:"i-want-to-use-my-custom-blocks-but-add-some-core-or-third-party-plugins-blocks",level:2},{value:"I want to enable blocks only on specific custom post type",id:"i-want-to-enable-blocks-only-on-specific-custom-post-type",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/",children:(0,n.jsx)(o.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,n.jsx)(o.p,{children:"In our clients' projects, we noticed that sometimes you need to provide something special to your blocks, like changing the block editor block DOM structure or the attributes added inside the inner blocks."}),"\n",(0,n.jsx)(o.p,{children:"These are some of the examples we would like to share with you. We will list all of them and gradually add more."}),"\n",(0,n.jsx)(o.h2,{id:"change-innerblock-attributes",children:"Change innerBlock attributes"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Usage:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Change attributes in the block editor and on the front-end."}),"\n",(0,n.jsx)(o.li,{children:"Set attributes in the database."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Use Case:"})}),"\n",(0,n.jsxs)(o.p,{children:["Let's say you have a carousel block, and you have a generic image block that you can use as a standalone block. You create a carousel block and set in its manifest limitation to show only the image block to be inserted as an inner block. This is easy to do: you just add your image block to an ",(0,n.jsx)(o.code,{children:"allowedBlocks"})," array inside the carousel block and everything will work."]}),"\n",(0,n.jsxs)(o.p,{children:["But now you have some default attributes set in that image block that you don't want to be set if the block is added using the innerBlock in the carousel. You can change that using our ",(0,n.jsx)(o.a,{href:"helpers-javascript",children:"overrideInnerBlockAttributes"})," helper. Just add this helper to your block entry point, add the attributes you want to change, and you are all set."]}),"\n",(0,n.jsx)(o.p,{children:"Keep in mind that this will be applied to all innerBlocks inside your carousel block. If you want to limit this to a specific block only, you will need to fiddle around with that block's conditions (you can get that specific block name from the props)."}),"\n",(0,n.jsx)(o.p,{children:"The next time you add your image to the carousel, it will automatically change those attributes."}),"\n",(0,n.jsx)(o.admonition,{title:"Important",type:"caution",children:(0,n.jsx)(o.p,{children:"If for some reason, you copy the inner block from the carousel to the top-level editor, this helper will not fire and not change back to original attributes. You have to manually remove those attributes from the Code editor in the admin."})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Implementation"})}),"\n",(0,n.jsxs)(o.p,{children:["Here you can see our example of this helper used in the ",(0,n.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/carousel/carousel-block.js",children:"carousel block"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"provide-simple-wrapper-to-all-innerblock",children:"Provide simple wrapper to all innerBlock"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Usage:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Change attributes in the block editor and on the front end."}),"\n",(0,n.jsx)(o.li,{children:"Set attributes in the database."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Use Case:"})}),"\n",(0,n.jsx)(o.p,{children:"All of our blocks come with the wrapper implemented, which is awesome. But sometimes you just don't want to use the wrapper, and you want only to use the simple version of the wrapper. You can provide the attribute overrides in your block, and you are good to go."}),"\n",(0,n.jsxs)(o.p,{children:["But if you need to change attributes in the block added as an innerBlock, you'll have a little problem. You can use the same helper as we did in the previous chapter, or you can use our abstraction of that helper called ",(0,n.jsx)(o.a,{href:"helpers-javascript",children:"overrideInnerBlockSimpleWrapperAttributes"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"This helper will set the wrapper to a simple variant in all your innerBlocks."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Implementation"})}),"\n",(0,n.jsxs)(o.p,{children:["Here you can see our example of this helper used in the ",(0,n.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/column/column-block.js",children:"column block"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"override-innerblock-attributes-only-on-the-front-end",children:"Override innerBlock attributes only on the front end"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Usage:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Change attributes on the front end only."}),"\n",(0,n.jsx)(o.li,{children:"Don't set attributes in the database."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Use Case:"})}),"\n",(0,n.jsx)(o.p,{children:"If you have a block containing inner blocks and only want to change the attributes on the front end of the implementation and not in the block editor. The standard way is really hard because all the inner blocks are rendered on the front end as an HTML string, and you don't have access to any of the attributes before it is rendered."}),"\n",(0,n.jsx)(o.p,{children:"Luckily, WordPress core has provided us with the filter that can change any block before it is rendered. This filter will provide you an array of blocks and inner blocks, along with the innerBlock and all attributes if you use it correctly."}),"\n",(0,n.jsxs)(o.p,{children:["The filter is called: ",(0,n.jsx)(o.code,{children:"render_block_data"}),", and you can put your implementation in the ",(0,n.jsx)(o.code,{children:"class-blocks.php"})," file. You can find the documentation on this ",(0,n.jsx)(o.a,{href:"https://developer.wordpress.org/reference/hooks/render_block_data/",children:"link"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Implementation"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"Implementation coming soon."})}),"\n",(0,n.jsx)(o.h2,{id:"add-css-selectors-on-the-parent-component-inside-the-block-editor",children:"Add CSS selectors on the parent component inside the block editor"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Usage:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Change attributes on the front end only."}),"\n",(0,n.jsx)(o.li,{children:"Don't set attributes in the database."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Use Case:"})}),"\n",(0,n.jsx)(o.p,{children:"If you tried to create any grid in your block on the front end, you know it is easy, but it is not so with the block editor. The problem is that in the block editor DOM, there are additional divs added over your block that break your HTML structure, and all your styles from flex or grid will not work correctly. If your block depends on some special selector placed in a specific place, you can run into some problems in the block editor."}),"\n",(0,n.jsx)(o.p,{children:"With WordPress block editor hooks, we can fix this by not adding the selector to its original location as we do on the front end but adding them to the Block Editor's parent component."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Implementation"})}),"\n",(0,n.jsxs)(o.p,{children:["Here you can see our example of this hook used in the ",(0,n.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/column/column-hooks.js",children:"column block"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"how-to-only-use-my-custom-blocks",children:"How to only use my custom blocks"}),"\n",(0,n.jsxs)(o.p,{children:["You can remove all core blocks and any other blocks provided by third-party plugins by adding this filter to your ",(0,n.jsx)(o.code,{children:"src/Blocks/Blocks.php"})," class."]}),"\n",(0,n.jsx)(o.p,{children:"Filter goes in the register method:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"// Limits the usage of only custom project blocks.\nadd_filter('allowed_block_types_all', [$this, 'getAllBlocksList'], 10, 2);\n"})}),"\n",(0,n.jsx)(o.admonition,{title:"Important",type:"caution",children:(0,n.jsx)(o.p,{children:"For WordPress versions > 5 and < 5.8 you would need to use the example below."})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"  // Limits the usage of only custom project blocks - legacy.\n  add_filter('allowed_block_types', [$this, 'getAllBlocksListOld'], 10, 2);\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The callback method is set in the parent ",(0,n.jsx)(o.code,{children:"AbstractBlocks"})," class."]}),"\n",(0,n.jsx)(o.h2,{id:"i-want-to-use-my-custom-blocks-but-add-some-core-or-third-party-plugins-blocks",children:"I want to use my custom blocks but add some core or third party plugins blocks"}),"\n",(0,n.jsxs)(o.p,{children:["You create a new callback method for the ",(0,n.jsx)(o.code,{children:"allowed_block_types_all"})," filter. There you can allow all your custom blocks + any other 3rd party / core block you want."]}),"\n",(0,n.jsx)(o.p,{children:"Filter goes in the register method:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"// Limits the usage of only custom project blocks.\nadd_filter('allowed_block_types_all', [$this, 'allowedBlocks'], 10, 2);\n"})}),"\n",(0,n.jsx)(o.p,{children:"Custom callback method:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"/**\n  * Filter which blocks are displayed in the block editor.\n  *\n  * @param array|bool $allowedBlockTypes Array of block type slugs, or boolean to enable/disable all.\n  * @param WP_Block_Editor_Context $blockEditorContext The current block editor context.\n  *\n  * @return array\n  */\npublic function allowedBlocks($allowedBlockTypes, WP_Block_Editor_Context $blockEditorContext): array\n{\n  return $this->getAllBlocksList(['core/paragraph'], $blockEditorContext);\n}\n"})}),"\n",(0,n.jsx)(o.admonition,{title:"Important",type:"caution",children:(0,n.jsxs)(o.p,{children:["For WordPress versions > 5 and < 5.8 you would need to use the filter example bellow. Also change the first argument of array_merge in ",(0,n.jsx)(o.code,{children:"allowedBlocks"})," function to ",(0,n.jsx)(o.code,{children:"$this->getAllBlocksListOld($allowedBlockTypes, $post)"})]})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"  // Limits the usage of only custom project blocks - legacy.\n  add_filter('allowed_block_types', [$this, 'allowedBlocks'], 10, 2);\n"})}),"\n",(0,n.jsx)(o.h2,{id:"i-want-to-enable-blocks-only-on-specific-custom-post-type",children:"I want to enable blocks only on specific custom post type"}),"\n",(0,n.jsxs)(o.p,{children:["You create a new callback method for the ",(0,n.jsx)(o.code,{children:"allowed_block_types_all"})," filter."]}),"\n",(0,n.jsx)(o.p,{children:"Filter goes in the register method:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"// Limits the usage of only custom project blocks.\nadd_filter('allowed_block_types_all', [$this, 'allowedBlockTypes'], 10, 2);\n"})}),"\n",(0,n.jsx)(o.p,{children:"Custom callback method:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"/**\n  * Filter which blocks are allowed in what post type.\n  *\n  * @param array|bool $allowedBlockTypes Array of block type slugs, or boolean to enable/disable all.\n  * @param WP_Block_Editor_Context $blockEditorContext The current block editor context.\n  *\n  * @return array\n  */\npublic function allowedBlockTypes($allowedBlockTypes, WP_Block_Editor_Context $blockEditorContext): array\n{\n  $output = [];\n  $settings = $this->getSettings();\n  $namespace = $settings['namespace'];\n\n  switch ($blockEditorContext->post->post_type) {\n    case 'faq':\n      $output = [\n        \"{$namespace}/paragraph\",\n      ];\n      break;\n    default:\n      $output = $this->getAllBlocksList($allowedBlockTypes, $blockEditorContext);\n      break;\n  }\n\n  return $output;\n}\n"})}),"\n",(0,n.jsx)(o.admonition,{title:"Important",type:"caution",children:(0,n.jsxs)(o.p,{children:["For WordPress versions > 5 and < 5.8 you would need to use the filter example bellow. And also change the default switch case in the ",(0,n.jsx)(o.code,{children:"allowedBlockTypes"})," function to ",(0,n.jsx)(o.code,{children:"$output = $this->getAllBlocksListOld($allowedBlockTypes, $post);"})]})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"  // Limits the usage of only custom project blocks - legacy.\n  add_filter('allowed_block_types', [$this, 'allowedBlocks'], 10, 2);\n"})})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>r});var n=t(96540);const s={},l=n.createContext(s);function i(e){const o=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:o},e.children)}}}]);