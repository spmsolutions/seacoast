"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[16323],{55342:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>m});var r=t(74848),i=t(28453);const n={id:"available-events",title:"Available events"},o=void 0,d={id:"javascript/events/available-events",title:"Available events",description:"You can listen to these events by using the on method on the Event facade.",source:"@site/forms/javascript/events/available-events.mdx",sourceDirName:"javascript/events",slug:"/javascript/events/available-events",permalink:"/seacoast/forms/javascript/events/available-events",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"available-events",title:"Available events"},sidebar:"forms",previous:{title:"Intro",permalink:"/seacoast/forms/javascript/intro"},next:{title:"How to use?",permalink:"/seacoast/forms/javascript/events/how-to-use"}},a={},m=[{value:"esFormsBeforeFormSubmit",id:"esformsbeforeformsubmit",level:3},{value:"esFormsAfterFormSubmit",id:"esformsafterformsubmit",level:3},{value:"esFormsAfterFormSubmitSuccess",id:"esformsafterformsubmitsuccess",level:3},{value:"esFormsAfterFormSubmitError",id:"esformsafterformsubmiterror",level:3},{value:"esFormsAfterFormSubmitErrorValidation",id:"esformsafterformsubmiterrorvalidation",level:3},{value:"esFormsAfterFormSubmitEnd",id:"esformsafterformsubmitend",level:3},{value:"esFormsAfterGtmDataPush",id:"esformsaftergtmdatapush",level:3},{value:"esFormsAfterFormSubmitReset",id:"esformsafterformsubmitreset",level:3},{value:"esFormsAfterFormSubmitSuccessBeforeRedirect",id:"esformsafterformsubmitsuccessbeforeredirect",level:3},{value:"esFormsJsFormLoaded",id:"esformsjsformloaded",level:3},{value:"esFormsManualInitLoaded",id:"esformsmanualinitloaded",level:3},{value:"esFormsAfterCaptchaInit",id:"esformsaftercaptchainit",level:3},{value:"esFormsGoToNextStep",id:"esformsgotonextstep",level:3},{value:"esFormsGoToPrevStep",id:"esformsgotoprevstep",level:3},{value:"esFormsEnrichmentPrefill",id:"esformsenrichmentprefill",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["You can listen to these events by using the ",(0,r.jsx)(s.code,{children:"on"})," method on the ",(0,r.jsx)(s.code,{children:"Event"})," facade."]}),"\n",(0,r.jsxs)(s.p,{children:["Every event contains the whole window object inside the details property.\nThis way you can be sure that everything is set and ready to be used. Additionally if an event is a part of the ",(0,r.jsx)(s.code,{children:"after"})," event you can use the ",(0,r.jsx)(s.code,{children:"additional"})," property to get the API response details."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["List of all events can be found ",(0,r.jsx)(s.a,{href:"https://github.com/infinum/eightshift-forms/blob/develop/src/Blocks/manifest.json",children:"here"}),"."]})}),"\n",(0,r.jsx)(s.h3,{id:"esformsbeforeformsubmit",children:"esFormsBeforeFormSubmit"}),"\n",(0,r.jsx)(s.p,{children:"Triggered before form is submitted to the API-Rest endpoint."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsafterformsubmit",children:"esFormsAfterFormSubmit"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after form is submitted to the API-Rest endpoint but before the response is processed."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsafterformsubmitsuccess",children:"esFormsAfterFormSubmitSuccess"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after form is submitted to the API-Rest endpoint and the response is processed with success."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsafterformsubmiterror",children:"esFormsAfterFormSubmitError"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after form is submitted to the API-Rest endpoint and the response is processed with general error."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsafterformsubmiterrorvalidation",children:"esFormsAfterFormSubmitErrorValidation"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after form is submitted to the API-Rest endpoint and the response is processed with validation error."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsafterformsubmitend",children:"esFormsAfterFormSubmitEnd"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after form is submitted to the API-Rest endpoint and the response is fully processed and the form is ready for another submit."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsaftergtmdatapush",children:"esFormsAfterGtmDataPush"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after GTM dataLAyer is pushed. This happens after form is submitted to the API-Rest endpoint and the response is processed with success."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsafterformsubmitreset",children:"esFormsAfterFormSubmitReset"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after form is submitted to the API-Rest endpoint and the response is processed with success after which the form is reset to its original state."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsafterformsubmitsuccessbeforeredirect",children:"esFormsAfterFormSubmitSuccessBeforeRedirect"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after form is submitted to the API-Rest endpoint and the response is processed with success right before redirect action triggers."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsjsformloaded",children:"esFormsJsFormLoaded"}),"\n",(0,r.jsx)(s.p,{children:"Triggered when all JavaScript on the form is loaded and form is ready to be used."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the window element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsmanualinitloaded",children:"esFormsManualInitLoaded"}),"\n",(0,r.jsx)(s.p,{children:"Triggered when manual initialization option is used from the forms global settings and the form is ready to be maunually initialized."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the window element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsaftercaptchainit",children:"esFormsAfterCaptchaInit"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after captcha score is calculated and returned via REST-API. Only used if captcha is used on every page load."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the window element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsgotonextstep",children:"esFormsGoToNextStep"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after multi-step/multi-flow form is used and the next step is loaded."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsgotoprevstep",children:"esFormsGoToPrevStep"}),"\n",(0,r.jsx)(s.p,{children:"Triggered after multi-step/multi-flow form is used and the previous step is loaded."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})}),"\n",(0,r.jsx)(s.h3,{id:"esformsenrichmentprefill",children:"esFormsEnrichmentPrefill"}),"\n",(0,r.jsxs)(s.p,{children:["Triggered after enrichment data is pre-filled from ",(0,r.jsx)(s.code,{children:"localStorage"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This event is set on the form element."})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var r=t(96540);const i={},n=r.createContext(i);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);