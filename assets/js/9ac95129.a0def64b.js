"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[28860],{18961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(74848),s=t(28453);const i={id:"tips-tricks",title:"Tips & Tricks"},a=void 0,r={id:"legacy/v6/basics/tips-tricks",title:"Tips & Tricks",description:"Since we are creating our projects using this setup, we are going to share our tips and tricks for faster development, easier debugging and some cool ideas we had along the way.",source:"@site/docs/legacy/v6/basics/tips-tricks.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/tips-tricks",permalink:"/seacoast/docs/legacy/v6/basics/tips-tricks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"tips-tricks",title:"Tips & Tricks"},sidebar:"docs",previous:{title:"PHP",permalink:"/seacoast/docs/legacy/v6/basics/helpers-php"},next:{title:"Versions",permalink:"/seacoast/docs/legacy/v5/versions"}},l={},c=[{value:"Always disable cache when you are writing block editor components",id:"always-disable-cache-when-you-are-writing-block-editor-components",level:3},{value:"When to restart your Webpack watch?",id:"when-to-restart-your-webpack-watch",level:3},{value:"Using boilerplate and boilerplate-plugin in the same project",id:"using-boilerplate-and-boilerplate-plugin-in-the-same-project",level:3},{value:"Internationalization (I18n) and localization (L10n)",id:"internationalization-i18n-and-localization-l10n",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Since we are creating our projects using this setup, we are going to share our tips and tricks for faster development, easier debugging and some cool ideas we had along the way."}),"\n",(0,o.jsx)(n.h3,{id:"always-disable-cache-when-you-are-writing-block-editor-components",children:"Always disable cache when you are writing block editor components"}),"\n",(0,o.jsx)(n.p,{children:"When you are writing a JavaScript part of the block you should always have your browser inspector open and checkbox checked for disabling browser cache in the network tab. WordPress core is caching JS files and you may not always get the latest changes of your code in the editor. This way you can be sure that everything is up to date."}),"\n",(0,o.jsx)(n.h3,{id:"when-to-restart-your-webpack-watch",children:"When to restart your Webpack watch?"}),"\n",(0,o.jsx)(n.p,{children:"As we described in the previous chapters Webpack watch is used to monitor all your code changes and update the compiled files with your latest changes. We have set our folder structure in a way so we can have files automatically included in the build. However, there are some times you must restart your Webpack watch:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Adding a new block/component."}),"\n",(0,o.jsx)(n.li,{children:"Changing the block/component folder name."}),"\n",(0,o.jsx)(n.li,{children:"Changing any of the file names in the block/component folder."}),"\n",(0,o.jsx)(n.li,{children:"Adding/removing a JS package to the project."}),"\n",(0,o.jsx)(n.li,{children:"Changing the webpack, babel, eslint, stylelint configuration."}),"\n",(0,o.jsx)(n.li,{children:"Changing the project domain name for Browser sync."}),"\n",(0,o.jsx)(n.li,{children:"Adding/removing a new JS or SCSS file in the global assets folder."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"using-boilerplate-and-boilerplate-plugin-in-the-same-project",children:"Using boilerplate and boilerplate-plugin in the same project"}),"\n",(0,o.jsx)(n.p,{children:"When you are using one boilerplate for a theme and another for a plugin keep in mind that you will have to do some changes. We would recommend leaving the theme as is and making changes to the plugin. Here are some of the changes you should make:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If using manifest, you should update the ",(0,o.jsx)(n.code,{children:"MANIFEST_ITEM"})," filter name to something else."]}),"\n",(0,o.jsx)(n.li,{children:"If using blocks, change the default category of all your plugin blocks."}),"\n",(0,o.jsxs)(n.li,{children:["If using blocks, update all blocks to a new category in each block ",(0,o.jsx)(n.code,{children:"manifest.json"})," file."]}),"\n",(0,o.jsxs)(n.li,{children:["If using blocks, update the block namespace in the global block ",(0,o.jsx)(n.code,{children:"manifest.json"})," file."]}),"\n",(0,o.jsx)(n.li,{children:"If using blocks, change the blocks' background and foreground color (Not necessary but it would be a good UX)."}),"\n",(0,o.jsx)(n.li,{children:"If using blocks, make your own implementation of the Components::render method so you don't need to pass project location on every usage (example below)."}),"\n",(0,o.jsxs)(n.li,{children:["Update the default project imposter namespace in the ",(0,o.jsx)(n.code,{children:"composer.json"})," file and run ",(0,o.jsx)(n.code,{children:"composer install"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Update all files with the new vendor namespace prefix."}),"\n",(0,o.jsx)(n.li,{children:"Update the default WP-CLI command prefix for your plugin located in the root of your plugin."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"src/Helpers/Components.php"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"/**\n * Helpers for components\n *\n * @package PluginNamespace\\Helpers\n */\n\ndeclare(strict_types=1);\n\nnamespace PluginNamespace\\Helpers;\n\nuse PluginNamespace\\Config\\Config;\nuse EightshiftLibs\\Helpers\\Components as LibsComponents;\n\n/**\n * Helpers for components\n */\nclass Components extends LibsComponents\n{\n\t/**\n\t * Local render method.\n\t */\n\tpublic static function render(string $component, array $attributes = [], string $parentPath = '', bool $useComponentDefaults = false): string\n\t{\n\t\t$parentPath = Config::getProjectPath();\n\n\t\treturn parent::render($component, $attributes, $parentPath, $useComponentDefaults);\n\t}\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"internationalization-i18n-and-localization-l10n",children:"Internationalization (I18n) and localization (L10n)"}),"\n",(0,o.jsxs)(n.p,{children:["To make sure your project is translatable into other languages, you should use ",(0,o.jsx)(n.a,{href:"https://codex.wordpress.org/I18n_for_WordPress_Developers",children:"WordPress's i18n functions"})," every time you output text. This process, called internationalization, is quite simple to implement by using the ",(0,o.jsx)(n.code,{children:"__"})," WordPress function, which is available in both PHP and Gutenberg (in the ",(0,o.jsx)(n.code,{children:"@wordpress/i18n"})," package) and is standard practice in Eightshift Frontend Libs for all text output."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"__"})," function accepts a string to translate and a text-domain, which is used to tell WordPress which translation set to use, and returns the translated string (or original string, in case a translation doesn't exist). Note that you can provide a ",(0,o.jsx)(n.code,{children:"sprintf"}),"-parametrized string to ",(0,o.jsx)(n.code,{children:"__"})," and use ",(0,o.jsx)(n.code,{children:"sprintf"})," on its return value to populate the string with certain values. You should also load the text-domain using ",(0,o.jsx)(n.code,{children:"load_theme_textdomain"}),". Using the Eightshift Libs ",(0,o.jsx)(n.code,{children:"I18n"})," class will do this for you by instructing WordPress to look for translations in ",(0,o.jsx)(n.code,{children:"src/I18n/languages"})," with the text-domain defined as your project name."]}),"\n",(0,o.jsxs)(n.p,{children:["However, there will come a time when ",(0,o.jsx)(n.em,{children:"being able"})," to translate won't be enough. You'll actually need to ",(0,o.jsx)(n.em,{children:"do"})," that. This happens in a process called localization and is a bit less trivial to do."]}),"\n",(0,o.jsxs)(n.p,{children:["First, you'll need to prepare the strings for translators. As WordPress i18n is based upon the ",(0,o.jsx)(n.code,{children:"gettext"}),' system, you should generate a POT ("portable object template") file which you can do by running WP-CLI command ',(0,o.jsx)(n.code,{children:"wp i18n make-pot"})," (",(0,o.jsx)(n.a,{href:"https://developer.wordpress.org/cli/commands/i18n/make-pot/",children:"https://developer.wordpress.org/cli/commands/i18n/make-pot/"}),") in your project root. Note that you may need to exclude vendor folders."]}),"\n",(0,o.jsxs)(n.p,{children:["You can provide this POT file to translators directly, and they can use tools for PO editing such as Poedit to translate the strings. After that, they can export an MO file which you can import into your project. Alternatively, you can set up a translation environment like Glotpress for translations, import your POT file there, and export translations as PO and MO files. You should locate these files into the path defined in your ",(0,o.jsx)(n.code,{children:"load_theme_textdomain"})," call, and they should have the name ",(0,o.jsx)(n.code,{children:"{textdomain}-{locale}.mo"})," (e.g. ",(0,o.jsx)(n.code,{children:"eightshift-boilerplate-hr_HR.mo"}),"), that is, ",(0,o.jsx)(n.code,{children:"{textdomain}-{locale}.po"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["MO translations are only loaded by PHP code and aren't understood by Gutenberg. To do so, you'll need to generate a JED file from the PO file. You can probably use the WP CLI ",(0,o.jsx)(n.code,{children:"wp i18n make-json"})," file for that (",(0,o.jsx)(n.a,{href:"https://developer.wordpress.org/cli/commands/i18n/make-json/",children:"https://developer.wordpress.org/cli/commands/i18n/make-json/"}),"). If you're using Glotpress, you can simply export the locale as a JED file."]}),"\n",(0,o.jsxs)(n.p,{children:["To instruct Gutenberg on how to load your JED translations, you'll need to call ",(0,o.jsx)(n.code,{children:"wp_set_script_translations"})," providing a text-domain, handle (script identifier), and locale path. If you're using the Eightshift Libs ",(0,o.jsx)(n.code,{children:"I18n"})," class, this is done for you with the same assumptions as for PHP translations. Furthermore, as we're assuming you're setting translations for block editor scripts, we set the handle to ",(0,o.jsx)(n.code,{children:"{$assetsPrefix}-block-editor-scripts"}),". If you haven't changed how scripts are enqueued, this should be the correct handle and your assets prefix should be your project name."]}),"\n",(0,o.jsxs)(n.p,{children:["Finally, to make sure WordPress loads the JED translations, you should place them into the path defined by your ",(0,o.jsx)(n.code,{children:"wp_set_script_translations"})," call (",(0,o.jsx)(n.code,{children:"src/I18n/languages"})," by default in the ",(0,o.jsx)(n.code,{children:"I18n"})," class) and make sure they have the name structure ",(0,o.jsx)(n.code,{children:"{textdomain}-{locale}-{handle}.json"}),". (e.g. ",(0,o.jsx)(n.code,{children:"eightshift-boilerplate-hr_HR-eightshift-boilerplate-block-editor-scripts.json"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"After all of this work, you should be able to change the locale on the site, network or user level in the WordPress admin."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);