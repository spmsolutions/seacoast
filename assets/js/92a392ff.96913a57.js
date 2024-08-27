"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[85575],{36881:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(74848),n=t(28453);const o={id:"helpers",title:"Helpers"},i=void 0,a={id:"php/helpers",title:"Helpers",description:"Eightshift Forms offers static helpers that can be implemented in your project. The key difference between these helpers and filters is that you can use the former in your theme or plugin code regardless of the load cycle.",source:"@site/forms/php/helpers.md",sourceDirName:"php",slug:"/php/helpers",permalink:"/seacoast/forms/php/helpers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"helpers",title:"Helpers"},sidebar:"forms",previous:{title:"Pipedrive",permalink:"/seacoast/forms/php/global-variables/integrations/pipedrive"},next:{title:"How to use?",permalink:"/seacoast/forms/php/filters/how-to-use"}},l={},c=[{value:"esFormsGetFormIdByName",id:"esformsgetformidbyname",level:3},{value:"esFormsDecryptor",id:"esformsdecryptor",level:3},{value:"esFormsGeolocationCountriesList",id:"esformsgeolocationcountrieslist",level:3},{value:"esFormsGetSelectOptionsArrayFromString",id:"esformsgetselectoptionsarrayfromstring",level:3},{value:"esFormsGetComponentsRender",id:"esformsgetcomponentsrender",level:3},{value:"esFormRenderForm",id:"esformrenderform",level:3},{value:"esFormGetEntry",id:"esformgetentry",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Eightshift Forms offers static helpers that can be implemented in your project. The key difference between these helpers and filters is that you can use the former in your theme or plugin code regardless of the load cycle."}),"\n",(0,r.jsxs)(s.p,{children:["All helpers can be found ",(0,r.jsx)(s.a,{href:"https://github.com/infinum/eightshift-forms/blob/develop/src/Helpers/esForms.php",children:"here"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"esformsgetformidbyname",children:"esFormsGetFormIdByName"}),"\n",(0,r.jsx)(s.p,{children:"This function retrieves the custom, unique name of a form, as set in the Form settings, from the provided form ID. It's useful when applying specific settings to one or more forms using filters in your project."}),"\n",(0,r.jsx)(s.p,{children:'Form identification by name (instead of the default "by ID"), can be useful if switching environments when the form ID could change.'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"if (\\function_exists('esFormsGetFormIdByName')) {\n  echo esFormsGetFormIdByName('<form-id>');\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"esformsdecryptor",children:"esFormsDecryptor"}),"\n",(0,r.jsx)(s.p,{children:'This helper provides decrypt and encrypt methods for variations set in the Form settings, passed to the "Thank you" page after form submission.'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"if (\\function_exists('esFormsDecryptor')) {\n  $variation = isset($_GET['es-variation']) ? \\esFormsDecryptor(\\sanitize_text_field(\\wp_unslash($_GET['es-variation']))) : '';\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"esformsgeolocationcountrieslist",children:"esFormsGeolocationCountriesList"}),"\n",(0,r.jsx)(s.p,{children:"This method generates a list of countries available in the geolocation API and country fields."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"if (\\function_exists('esFormsGeolocationCountriesList')) {\n  $countriesList = esFormsGeolocationCountriesList();\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"esformsgetselectoptionsarrayfromstring",children:"esFormsGetSelectOptionsArrayFromString"}),"\n",(0,r.jsx)(s.p,{children:"This helper parses the block grammar output (that the Gutenberg editor generates) for block options, making it easy to use them in your projects."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"if (\\function_exists('esFormsGetSelectOptionsArrayFromString')) {\n  $select = esFormsGetSelectOptionsArrayFromString('<options>');\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"esformsgetcomponentsrender",children:"esFormsGetComponentsRender"}),"\n",(0,r.jsxs)(s.p,{children:["This helper allows you to access the Eightshift Forms component ",(0,r.jsx)(s.code,{children:"render"})," method, enabling you to utilize all Forms  components in your projects. If you already have a style set for the selected component, you can use this helper to render it with all the necessary data and styling applied."]}),"\n",(0,r.jsxs)(s.p,{children:["A list of all components can be found ",(0,r.jsx)(s.a,{href:"https://github.com/infinum/eightshift-forms/tree/develop/src/Blocks/components",children:"here"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"if (\\function_exists('esFormsGetComponentsRender')) {\n  $render = esFormsGetComponentsRender('<component>', '[<attributes>]');\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"esformrenderform",children:"esFormRenderForm"}),"\n",(0,r.jsx)(s.p,{children:"If you want to output a form in a custom template or block, you can use this helper to do so."}),"\n",(0,r.jsx)(s.p,{children:"Please note that not all functionalities are available, and certain options might not be available."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"if (\\function_exists('esFormRenderForm')) {\n  echo esFormRenderForm('<formId>', '[<attributes>]');\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"esformgetentry",children:"esFormGetEntry"}),"\n",(0,r.jsx)(s.p,{children:"If you need to retrieve form entry data, you can use this helper by providing entry unique ID."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"if (\\function_exists('esFormGetEntry')) {\n  $entry = esFormGetEntry('<entryId>');\n}\n"})})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var r=t(96540);const n={},o=r.createContext(n);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);