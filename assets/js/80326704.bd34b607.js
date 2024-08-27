/*! For license information please see 80326704.bd34b607.js.LICENSE.txt */
"use strict";(self.webpackChunk_seacoast_website=self.webpackChunk_seacoast_website||[]).push([[40337],{89508:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>v});var a=t(74848),n=t(28453),s=t(34842),l=t(12746),r=t(13731);const d={},o="Checkbox",c={id:"es-ui-components/checkbox",title:"Checkbox",description:"{(data, setData) => {",source:"@site/ui-components/es-ui-components/checkbox.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/checkbox",permalink:"/seacoast/components/es-ui-components/checkbox",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Toggle / Switch",permalink:"/seacoast/components/es-ui-components/toggle-switch"},next:{title:"Radio button",permalink:"/seacoast/components/es-ui-components/radio-button"}},u={},v=[{value:"Highlighted props",id:"highlighted-props",level:2},{value:"Align checkbox to the end",id:"align-checkbox-to-the-end",level:3},{value:"Indeterminate state",id:"indeterminate-state",level:3}];function h(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"checkbox",children:"Checkbox"})}),"\n","\n",(0,a.jsx)(s.d,{defaultValue:!1,children:(e,i)=>(0,a.jsx)(l.S,{checked:e,onChange:i,label:"Demo"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:"<Checkbox\n\tlabel='Demo'\n\tchecked={data}\n\tonChange={(value) => setData(value)}\n/>\n"})}),"\n",(0,a.jsx)(i.h2,{id:"highlighted-props",children:"Highlighted props"}),"\n",(0,a.jsx)(i.p,{children:"For the complete list of props, use your IDE's autocomplete functionality."}),"\n",(0,a.jsx)(i.h3,{id:"align-checkbox-to-the-end",children:"Align checkbox to the end"}),"\n",(0,a.jsx)(s.d,{children:(e,i)=>(0,a.jsx)(l.S,{icon:r.Pt.emptyRect,label:"Demo",checked:e,onChange:i,alignEnd:!0})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:"<Checkbox\n\ticon={icons.emptyRect}\n\tlabel='Demo'\n\tchecked={data}\n\tonChange={setData}\n\t// highlight-next-line\n\talignEnd\n/>\n"})}),"\n",(0,a.jsx)(i.h3,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,a.jsx)(s.d,{defaultValue:null,resettable:!0,children:(e,i)=>(0,a.jsx)(l.S,{label:"Demo",checked:e,onChange:i,indeterminate:null===e})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-jsx",children:"<Checkbox\n\tlabel='Demo'\n\tchecked={data}\n\tonChange={(value) => setData(value)}\n\t// highlight-next-line\n\tindeterminate={data === null}\n/>\n"})})]})}function m(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},34842:(e,i,t)=>{t.d(i,{d:()=>d});var a=t(96540),n=t(82972),s=t(34164),l=t(78478),r=t(74848);const d=e=>{let{children:i,defaultValue:t,className:d,fitWidth:o=!1,resettable:c=!1,preContent:u}=e;const[v,h]=(0,a.useState)(t),m=(0,a.useRef)();return(0,r.jsx)(l.A,{children:()=>(0,r.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,r.jsxs)("div",{className:(0,s.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",o?"es-uic-w-fit":"es-uic-w-96",d),children:["function"==typeof i&&i(v,h),"function"!=typeof i&&i]}),(0,r.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[u&&u(v,h,m),c&&(0,r.jsx)(n.$,{size:"small",onPress:()=>h(t),disabled:v===t,children:"Reset"})]})]})})}},17220:(e,i,t)=>{t.d(i,{$:()=>a});const a=(0,t(96540).createContext)(null)},98599:(e,i,t)=>{t.d(i,{$:()=>n,a:()=>d,b:()=>s,c:()=>l,d:()=>r});var a=t(96540);const n=(0,a.createContext)(null),s=(0,a.createContext)(null),l=(0,a.createContext)(null),r=(0,a.createContext)(null);(0,a.createContext)(null);const d=(0,a.createContext)({})},35952:(e,i,t)=>{t.d(i,{$:()=>d,a:()=>r});var a=t(67680),n=t(96540),s=t(1234);const l={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function r(e={}){let{style:i,isFocusable:t}=e,[a,r]=(0,n.useState)(!1),{focusWithinProps:d}=(0,s.d)({isDisabled:!t,onFocusWithinChange:e=>r(e)});return{visuallyHiddenProps:{...d,style:(0,n.useMemo)((()=>a?i:i?{...l,...i}:l),[a])}}}function d(e){let{children:i,elementType:t="div",isFocusable:s,style:l,...d}=e,{visuallyHiddenProps:o}=r(e);return n.createElement(t,(0,a.c)(d,o),i)}},12746:(e,i,t)=>{t.d(i,{S:()=>k});var a=t(74848),n=t(98599),s=t(67680),l=t(17220),r=t(35971),d=t(96540),o=t(5233),c=t(98994),u=t(12688),v=t(74702),h=t(1234),m=t(35952),p=t(49189),f=t(61426),b=t(13731),x=t(54754);function g(e,i,t){let a=(0,o.$)({...e,value:i.isSelected}),{isInvalid:n,validationErrors:s,validationDetails:l}=a.displayValidation,{labelProps:r,inputProps:u,isSelected:v,isPressed:h,isDisabled:m,isReadOnly:p}=(0,c.$)({...e,isInvalid:n},i,t);(0,o.a)(e,a,t);let{isIndeterminate:f,isRequired:b,validationBehavior:x="aria"}=e;return(0,d.useEffect)((()=>{t.current&&(t.current.indeterminate=!!f)})),{labelProps:r,inputProps:{...u,checked:v,"aria-required":b&&"aria"===x||void 0,required:b&&"native"===x},isSelected:v,isPressed:h,isDisabled:m,isReadOnly:p,isInvalid:n,validationErrors:s,validationDetails:l}}const y=new WeakMap;const j=(0,d.createContext)(null);function V(e,i){let{inputRef:t=null,...a}=e;[e,i]=(0,s.a)(a,i,n.$);let{validationBehavior:c}=(0,s.$)(l.$)||{};var p,f;let b=null!==(f=null!==(p=e.validationBehavior)&&void 0!==p?p:c)&&void 0!==f?f:"native",x=(0,d.useContext)(j),V=(0,s.l)((0,s.m)(t,void 0!==e.inputRef?e.inputRef:null)),{labelProps:C,inputProps:k,isSelected:D,isDisabled:I,isReadOnly:R,isPressed:S,isInvalid:E}=x?function(e,i,t){const a=(0,u.$)({isReadOnly:e.isReadOnly||i.isReadOnly,isSelected:i.isSelected(e.value),onChange(t){t?i.addValue(e.value):i.removeValue(e.value),e.onChange&&e.onChange(t)}});let{name:n,descriptionId:s,errorMessageId:l,validationBehavior:r}=y.get(i);var c;r=null!==(c=e.validationBehavior)&&void 0!==c?c:r;let{realtimeValidation:v}=(0,o.$)({...e,value:a.isSelected,name:void 0,validationBehavior:"aria"}),h=(0,d.useRef)(o.b),m=()=>{i.setInvalid(e.value,v.isInvalid?v:h.current)};(0,d.useEffect)(m);let p=i.realtimeValidation.isInvalid?i.realtimeValidation:v,f="native"===r?i.displayValidation:p;var b;let x=g({...e,isReadOnly:e.isReadOnly||i.isReadOnly,isDisabled:e.isDisabled||i.isDisabled,name:e.name||n,isRequired:null!==(b=e.isRequired)&&void 0!==b?b:i.isRequired,validationBehavior:r,[o.c]:{realtimeValidation:p,displayValidation:f,resetValidation:i.resetValidation,commitValidation:i.commitValidation,updateValidation(e){h.current=e,m()}}},a,t);return{...x,inputProps:{...x.inputProps,"aria-describedby":[e["aria-describedby"],i.isInvalid?l:null,s].filter(Boolean).join(" ")||void 0}}}({...e,value:e.value,children:"function"==typeof e.children||e.children},x,V):g({...e,children:"function"==typeof e.children||e.children,validationBehavior:b},(0,u.$)(e),V),{isFocused:P,isFocusVisible:w,focusProps:$}=(0,v.$)(),N=I||R,{hoverProps:M,isHovered:O}=(0,h.$)({...e,isDisabled:N}),F=(0,s.b)({...e,defaultClassName:"react-aria-Checkbox",values:{isSelected:D,isIndeterminate:e.isIndeterminate||!1,isPressed:S,isHovered:O,isFocused:P,isFocusVisible:w,isDisabled:I,isReadOnly:R,isInvalid:E,isRequired:e.isRequired||!1}}),B=(0,r.$)(e);return delete B.id,d.createElement("label",{...(0,s.c)(B,C,M,F),ref:i,slot:e.slot||void 0,"data-selected":D||void 0,"data-indeterminate":e.isIndeterminate||void 0,"data-pressed":S||void 0,"data-hovered":O||void 0,"data-focused":P||void 0,"data-focus-visible":w||void 0,"data-disabled":I||void 0,"data-readonly":R||void 0,"data-invalid":E||void 0,"data-required":e.isRequired||void 0},d.createElement(m.$,{elementType:"span"},d.createElement("input",{...(0,s.c)(k,$),ref:V})),F.children)}const C=(0,d.forwardRef)(V),k=e=>{const{icon:i,label:t,subtitle:n,checked:s,disabled:l,readOnly:r,indeterminate:d,onChange:o,className:c,labelClassName:u,alignEnd:v,children:h,hidden:m,...g}=e;return m?null:(0,a.jsx)(C,{isDisabled:l,isIndeterminate:d,isReadOnly:r,isSelected:s??!1,onChange:o,className:(0,p.c)("es-uic-flex es-uic-w-full es-uic-items-center es-uic-gap-1.5 es-uic-text-sm",c),...g,children:({isIndeterminate:e,isSelected:s})=>(0,a.jsxs)(a.Fragment,{children:[(i||v)&&(t||n)&&(0,a.jsx)(x.b,{icon:i,label:t,subtitle:n,className:u,fullWidth:!0}),(0,a.jsxs)("div",{className:(0,p.c)("es-uic-flex es-uic-size-5 es-uic-items-center es-uic-justify-center es-uic-rounded-md es-uic-border es-uic-text-gray-600 es-uic-shadow-sm es-uic-transition",s||d?"es-uic-border-teal-600 es-uic-bg-teal-600 es-uic-text-white":"es-uic-border-gray-300"),children:[(0,a.jsx)(f.c,{transition:"scaleFade",visible:e,children:(0,a.jsx)("div",{className:"es-uic-h-[1.5px] es-uic-w-3 es-uic-rounded es-uic-bg-white"})}),(0,a.jsx)(f.c,{transition:"scaleRotateFade",visible:!e&&s,className:"[&>svg]:es-uic-size-3 [&>svg]:es-uic-stroke-2",noInitial:!0,children:b.Pt.check})]}),!i&&!v&&(t||n)&&(0,a.jsx)(x.b,{label:t,subtitle:n,className:u}),!(i||t||n)&&h]})})}},54754:(e,i,t)=>{t.d(i,{b:()=>s});var a=t(74848),n=t(49189);const s=e=>{const{icon:i,label:t,subtitle:s,as:l,className:r,fullWidth:d=!1,contentsOnly:o,hidden:c,noColor:u}=e;if(c)return null;const v=l??"div";return o?(0,a.jsxs)(a.Fragment,{children:[i&&(0,a.jsx)("span",{className:(0,n.c)("[&>svg]:es-uic-size-5.5",!u&&"es-uic-text-slate-500"),children:i}),t&&(0,a.jsx)("span",{className:(0,n.c)("es-uic-text-balance",!u&&"es-uic-text-gray-800"),children:t}),s&&(0,a.jsx)("span",{className:(0,n.c)("es-uic-text-balance es-uic-text-xs es-uic-opacity-65",!u&&"es-uic-text-gray-800"),children:s})]}):(0,a.jsxs)(v,{className:(0,n.c)("es-uic-flex es-uic-items-center es-uic-gap-1.5 es-uic-text-sm",!u&&"es-uic-text-gray-800 [&>span>svg]:es-uic-text-slate-500",u&&"[&>span>svg]:es-uic-opacity-80",d&&"es-uic-grow",r),children:[i&&(0,a.jsx)("span",{className:"[&>svg]:es-uic-size-5.5",children:i}),(t||s)&&(0,a.jsxs)("div",{className:"es-uic-flex es-uic-flex-col es-uic-items-start es-uic-text-balance es-uic-text-start",children:[t&&(0,a.jsx)("span",{children:t}),s&&(0,a.jsx)("span",{className:"es-uic-text-xs es-uic-opacity-65",children:s})]})]})}},945:(e,i,t)=>{t.d(i,{$:()=>s});var a=t(67680),n=t(96540);function s(e,i,t){let s=(0,n.useRef)(i),l=(0,a.f)((()=>{t&&t(s.current)}));(0,n.useEffect)((()=>{var i;let t=null==e||null===(i=e.current)||void 0===i?void 0:i.form;return null==t||t.addEventListener("reset",l),()=>{null==t||t.removeEventListener("reset",l)}}),[e,l])}},5233:(e,i,t)=>{t.d(i,{$:()=>h,a:()=>l,b:()=>c,c:()=>v});var a=t(1234),n=t(96540),s=t(67680);function l(e,i,t){let{validationBehavior:l,focus:d}=e;(0,s.g)((()=>{if("native"===l&&(null==t?void 0:t.current)){let a=i.realtimeValidation.isInvalid?i.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";t.current.setCustomValidity(a),t.current.hasAttribute("title")||(t.current.title=""),i.realtimeValidation.isInvalid||i.updateValidation({isInvalid:!(e=t.current).validity.valid,validationDetails:r(e),validationErrors:e.validationMessage?[e.validationMessage]:[]})}var e}));let o=(0,s.f)((()=>{i.resetValidation()})),c=(0,s.f)((e=>{var n;i.displayValidation.isInvalid||i.commitValidation();let s=null==t||null===(n=t.current)||void 0===n?void 0:n.form;var l;!e.defaultPrevented&&t&&s&&function(e){for(let i=0;i<e.elements.length;i++){let t=e.elements[i];if(!t.validity.valid)return t}return null}(s)===t.current&&(d?d():null===(l=t.current)||void 0===l||l.focus(),(0,a.i)("keyboard"));e.preventDefault()})),u=(0,s.f)((()=>{i.commitValidation()}));(0,n.useEffect)((()=>{let e=null==t?void 0:t.current;if(!e)return;let i=e.form;return e.addEventListener("invalid",c),e.addEventListener("change",u),null==i||i.addEventListener("reset",o),()=>{e.removeEventListener("invalid",c),e.removeEventListener("change",u),null==i||i.removeEventListener("reset",o)}}),[t,c,u,o,l])}function r(e){let i=e.validity;return{badInput:i.badInput,customError:i.customError,patternMismatch:i.patternMismatch,rangeOverflow:i.rangeOverflow,rangeUnderflow:i.rangeUnderflow,stepMismatch:i.stepMismatch,tooLong:i.tooLong,tooShort:i.tooShort,typeMismatch:i.typeMismatch,valueMissing:i.valueMissing,valid:i.valid}}const d={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},o={...d,customError:!0,valid:!1},c={isInvalid:!1,validationDetails:d,validationErrors:[]},u=(0,n.createContext)({}),v="__formValidationState"+Date.now();function h(e){if(e[v]){let{realtimeValidation:i,displayValidation:t,updateValidation:a,resetValidation:n,commitValidation:s}=e[v];return{realtimeValidation:i,displayValidation:t,updateValidation:a,resetValidation:n,commitValidation:s}}return function(e){let{isInvalid:i,validationState:t,name:a,value:s,builtinValidation:l,validate:r,validationBehavior:d="aria"}=e;t&&(i||(i="invalid"===t));let v=void 0!==i?{isInvalid:i,validationErrors:[],validationDetails:o}:null,h=(0,n.useMemo)((()=>p(function(e,i){if("function"==typeof e){let t=e(i);if(t&&"boolean"!=typeof t)return m(t)}return[]}(r,s))),[r,s]);(null==l?void 0:l.validationDetails.valid)&&(l=null);let b=(0,n.useContext)(u),x=(0,n.useMemo)((()=>a?Array.isArray(a)?a.flatMap((e=>m(b[e]))):m(b[a]):[]),[b,a]),[g,y]=(0,n.useState)(b),[j,V]=(0,n.useState)(!1);b!==g&&(y(b),V(!1));let C=(0,n.useMemo)((()=>p(j?[]:x)),[j,x]),k=(0,n.useRef)(c),[D,I]=(0,n.useState)(c),R=(0,n.useRef)(c),S=()=>{if(!E)return;P(!1);let e=h||l||k.current;f(e,R.current)||(R.current=e,I(e))},[E,P]=(0,n.useState)(!1);return(0,n.useEffect)(S),{realtimeValidation:v||C||h||l||c,displayValidation:"native"===d?v||C||D:v||C||h||l||D,updateValidation(e){"aria"!==d||f(D,e)?k.current=e:I(e)},resetValidation(){let e=c;f(e,R.current)||(R.current=e,I(e)),"native"===d&&P(!1),V(!0)},commitValidation(){"native"===d&&P(!0),V(!0)}}}(e)}function m(e){return e?Array.isArray(e)?e:[e]:[]}function p(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:o}:null}function f(e,i){return e===i||e&&i&&e.isInvalid===i.isInvalid&&e.validationErrors.length===i.validationErrors.length&&e.validationErrors.every(((e,t)=>e===i.validationErrors[t]))&&Object.entries(e.validationDetails).every((([e,t])=>i.validationDetails[e]===t))}},98994:(e,i,t)=>{t.d(i,{$:()=>d});var a=t(67680),n=t(35971),s=t(945),l=t(52973),r=t(12732);function d(e,i,t){let{isDisabled:d=!1,isReadOnly:o=!1,value:c,name:u,children:v,"aria-label":h,"aria-labelledby":m,validationState:p="valid",isInvalid:f}=e;null!=v||(null!=h||null!=m)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:b,isPressed:x}=(0,r.$)({isDisabled:d}),{pressProps:g,isPressed:y}=(0,r.$)({isDisabled:d||o,onPress(){i.toggle()}}),{focusableProps:j}=(0,l.$)(e,t),V=(0,a.c)(b,j),C=(0,n.$)(e,{labelable:!0});return(0,s.$)(t,i.isSelected,i.setSelected),{labelProps:(0,a.c)(g,{onClick:e=>e.preventDefault()}),inputProps:(0,a.c)(C,{"aria-invalid":f||"invalid"===p||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":o||void 0,onChange:e=>{e.stopPropagation(),i.setSelected(e.target.checked)},disabled:d,...null==c?{}:{value:c},name:u,type:"checkbox",...V}),isSelected:i.isSelected,isPressed:x||y,isDisabled:d,isReadOnly:o,isInvalid:f||"invalid"===p}}},12688:(e,i,t)=>{t.d(i,{$:()=>n});var a=t(1234);function n(e={}){let{isReadOnly:i}=e,[t,n]=(0,a.e)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:t,setSelected:function(e){i||n(e)},toggle:function(){i||n(!t)}}}}}]);