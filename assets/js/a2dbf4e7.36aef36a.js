"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[73114],{50222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),s=t(28453);const r={id:"blocks-block-from-components",title:"Creating Block from Components"},i=void 0,a={id:"legacy/v4/guides/blocks-block-from-components",title:"Creating Block from Components",description:"docs-source",source:"@site/docs/legacy/v4/guides/blocks-block-from-components.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-block-from-components",permalink:"/seacoast/docs/legacy/v4/guides/blocks-block-from-components",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-block-from-components",title:"Creating Block from Components"},sidebar:"docs",previous:{title:"Manifest Structure",permalink:"/seacoast/docs/legacy/v4/guides/blocks-structure-manifest"},next:{title:"Render Block View Helper",permalink:"/seacoast/docs/legacy/v4/guides/blocks-render-block-view-helper"}},c={},l=[{value:"Folder structure",id:"folder-structure",level:3},{value:"Manifest",id:"manifest",level:3},{value:"Components",id:"components",level:3},{value:"Editor render",id:"editor-render",level:3},{value:"PHP view",id:"php-view",level:3},{value:"Styling",id:"styling",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/custom/button",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,o.jsx)(n.p,{children:"You may wonder: what is the difference between components and blocks? Aren't they the same thing?"}),"\n",(0,o.jsxs)(n.p,{children:["They are similar, but not the same. Components are, for lack of a better word, ",(0,o.jsx)(n.em,{children:"dumb"}),". They aren't bothered with the context and they are ",(0,o.jsx)(n.strong,{children:"reusable"}),".\nThis is the keyword in this whole ordeal. One component may be reused in different blocks. Also, the main difference is that the component is not registered in WordPress; its sole purpose is to provide reusable parts for your blocks."]}),"\n",(0,o.jsx)(n.p,{children:"Let's look at an example.\nFor instance, we want to create a card block. This block consists of an image, a title, and a text."}),"\n",(0,o.jsx)(n.h3,{id:"folder-structure",children:"Folder structure"}),"\n",(0,o.jsxs)(n.p,{children:["First, we'll create a block in the ",(0,o.jsx)(n.code,{children:"src/blocks/custom/card"})," folder. The folder structure will look like this"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"|card\n| |components\n| | |card-editor.js\n| | |card-options.js\n| |card-block.js\n| |card.php\n| |card-style.scss\n| |manifest.json\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"manifest.json"})," will hold all the default attributes and data about the new block"]}),"\n",(0,o.jsx)(n.h3,{id:"manifest",children:"Manifest"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "blockName": "card",\n  "title": "Card",\n  "description" : "Card with custom settings.",\n  "category": "eightshift",\n  "icon": {\n    "src": "buddicons-buddypress-logo"\n  },\n  "keywords": [\n    "Service",\n    "Box",\n    "Card"\n  ],\n  "hasWrapper": false,\n  "parent": [\n    "eightshift-boilerplate/cards-grid"\n  ],\n  "attributes": {\n    "media": {\n      "type": "object",\n      "default": {\n        "id": 0,\n        "url": "",\n        "title": ""\n      },\n      "items": {\n        "type": "object"\n      },\n      "mediaAction": true\n    },\n    "heading": {\n      "type": "string"\n    },\n    "paragraph": {\n      "type": "string"\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,o.jsxs)(n.p,{children:["Next, we want to set up the editor and options component for this block. So in the ",(0,o.jsx)(n.code,{children:"components"})," folder, we'll add ",(0,o.jsx)(n.code,{children:"card-editor.js"})," and ",(0,o.jsx)(n.code,{children:"card-options.js"})," files."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"card-editor.js"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React from 'react'; // eslint-disable-line no-unused-vars\nimport { RichText } from '@wordpress/editor';\nimport { __ } from '@wordpress/i18n';\nimport { ImageEditor } from '../../../components/image/components/image-editor';\n\nexport const CardEditor = (props) => {\n  const {\n    attributes: {\n      blockClass,\n      heading,\n      paragraph,\n      media,\n    },\n    actions: {\n      onChangeHeading,\n      onChangeParagraph,\n    },\n  } = props;\n\n  return (\n    <div className={blockClass}>\n      <div className={`${blockClass}__media`}>\n        <ImageEditor\n          blockClass={blockClass}\n          media={media}\n        />\n      </div>\n      <div className={`${blockClass}__content`}>\n        <div className={`${blockClass}__heading`}>\n          <RichText\n            placeholder={__('Add Heading', 'eightshift-boilerplate')}\n            onChange={onChangeHeading}\n            value={heading}\n          />\n        </div>\n        <div className={`${blockClass}__paragraph`}>\n          <RichText\n            placeholder={__('Add Paragraph', 'eightshift-boilerplate')}\n            onChange={onChangeParagraph}\n            value={paragraph}\n          />\n        </div>\n      </div>\n    </div>\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Notice how we've imported the ",(0,o.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/components/image/components/image-editor.js",children:(0,o.jsx)(n.code,{children:"image-editor"})})," component from the project's component folder. Note that in your project you'd just copy this component from the frontend-libs blocks (that is you'd copy the entire folder in your project as previously described)."]}),"\n",(0,o.jsxs)(n.p,{children:["Our card editor component will have an ",(0,o.jsx)(n.code,{children:"<ImageEditor />"})," component and two ",(0,o.jsx)(n.code,{children:"<RichText />"})," components (which come from the core editor)."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"card-options.js"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React from 'react'; // eslint-disable-line no-unused-vars\nimport { __ } from '@wordpress/i18n';\nimport { PanelBody } from '@wordpress/components';\nimport { ImageOptions } from '../../../components/image/components/image-options';\n\nexport const CardOptions = (props) => {\n  const {\n    attributes: {\n      media,\n    },\n    actions: {\n      onChangeMedia,\n    },\n  } = props;\n\n  return (\n    <PanelBody title={__('Card Details', 'eightshift-boilerplate')}>\n      <ImageOptions\n        media={media}\n        onChangeMedia={onChangeMedia}\n      />\n    </PanelBody>\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The options component (the one shown on the right side in the editor screen), will only contain the ",(0,o.jsx)(n.code,{children:"<ImageOptions />"})," so that we can upload image in our block."]}),"\n",(0,o.jsx)(n.h3,{id:"editor-render",children:"Editor render"}),"\n",(0,o.jsxs)(n.p,{children:["Back to the block, we need to create the ",(0,o.jsx)(n.code,{children:"edit"})," method functionality and the view that we'll render on the front."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"card-block.js"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React from 'react'; // eslint-disable-line no-unused-vars\nimport { Fragment } from '@wordpress/element';\nimport { InspectorControls } from '@wordpress/editor';\nimport { getActions } from 'EighshiftBlocksGetActions';\nimport manifest from './manifest.json';\nimport { CardEditor } from './components/card-editor';\nimport { CardOptions } from './components/card-options';\nimport './hooks';\n\nexport const Card = (props) => {\n\n  const {\n    attributes,\n  } = props;\n\n  const actions = getActions(props, manifest);\n\n  return (\n    <Fragment>\n      <InspectorControls>\n        <CardOptions\n          attributes={attributes}\n          actions={actions}\n        />\n      </InspectorControls>\n      <CardEditor\n        attributes={attributes}\n        actions={actions}\n      />\n    </Fragment>\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here we'll use our ready-made component (built out of other components - reusability), and wrap it in ",(0,o.jsx)(n.a,{href:"https://reactjs.org/docs/fragments.html",children:"React Fragment"}),". It is a pattern used to return multiple elements."]}),"\n",(0,o.jsxs)(n.p,{children:["Another thing you'll note is the usage of ",(0,o.jsx)(n.code,{children:"<InspectorControls />"})," ",(0,o.jsx)(n.a,{href:"https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inspector-controls",children:"component"}),". It is used to display settings of the block in the sidebar (in our case our options that contain the image upload component).\nLastly, both our ",(0,o.jsx)(n.code,{children:"<CardEditor />"})," and ",(0,o.jsx)(n.code,{children:"<InspectorControls />"})," are wrapped in the ",(0,o.jsx)(n.code,{children:"<Fragment />"})," wrapper due to Reacts one top-level element rule. If your block doesn't have options, you can only have ",(0,o.jsx)(n.code,{children:"<CardEditor />"})," component in here."]}),"\n",(0,o.jsx)(n.h3,{id:"php-view",children:"PHP view"}),"\n",(0,o.jsx)(n.p,{children:"So all we need now is the PHP view."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"card.php"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"<?php\n/**\n * Template for the Card Block.\n *\n * @since 1.0.0\n * @package Eightshift_Boilerplate\\Blocks.\n */\n\nnamespace Eightshift_Boilerplate\\Blocks;\n\n$heading   = $attributes['heading'] ?? '';\n$paragraph = $attributes['paragraph'] ?? '';\n$media     = $attributes['media'] ?? [];\n\n$block_class = $attributes['blockClass'] ?? '';\n\n?>\n\n<div class=\"<?php echo esc_attr( $block_class ); ?>\">\n\n  <?php if ( ! empty( $media ) ) { ?>\n    <div class=\"<?php echo esc_attr( \"{$block_class}__media\" ); ?>\">\n      <?php $this->render_block_view(\n        '/components/image/image.php',\n        [\n          'blockClass' => $attributes['blockClass'] ?? '',\n          'media'      => $media,\n        ]\n      );\n      ?>\n    </div>\n  <?php } ?>\n\n  <div class=\"<?php echo esc_attr( \"{$block_class}__content\" ); ?>\">\n    <?php if ( ! empty( $heading ) ) { ?>\n      <div class=\"<?php echo esc_attr( \"{$block_class}__heading\" ); ?>\">\n        <?php echo wp_kses_post( $heading ); ?>\n      </div>\n    <?php } ?>\n\n    <?php if ( ! empty( $paragraph ) ) { ?>\n      <div class=\"<?php echo esc_attr( \"{$block_class}__paragraph\" ); ?>\">\n        <?php echo wp_kses_post( $paragraph ); ?>\n      </div>\n    <?php } ?>\n  </div>\n\n</div>\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Notice how we used"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"<?php $this->render_block_view(\n  '/components/image/image.php',\n  [\n    'blockClass' => $attributes['blockClass'] ?? '',\n    'media'      => $media,\n  ]\n);\n?>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To render out our ",(0,o.jsx)(n.code,{children:"image"})," component. Again, we're showing the power of reusability here."]}),"\n",(0,o.jsx)(n.h3,{id:"styling",children:"Styling"}),"\n",(0,o.jsx)(n.p,{children:"You can style them how you want, but we added some default styles"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"card-style.scss"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scss",children:"$block-card: (\n  heading: (\n    mobile: (\n      font-size: 24px,\n      line-height: 1.33,\n    ),\n  ),\n  paragraph: (\n    mobile: (\n      font-size: 18px,\n      line-height: 1.5,\n    ),\n  ),\n);\n\n.block-card {\n  $this: &;\n\n  &__media {\n    margin-bottom: 25px;\n  }\n\n  &__img {\n    margin: 0 auto;\n  }\n\n  &__content {\n    text-align: center;\n  }\n\n  &__heading {\n    @include responsive($block-card, heading);\n    font-weight: bold;\n  }\n\n  &__paragraph {\n    @include responsive($block-card, paragraph);\n    margin-top: 15px;\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);