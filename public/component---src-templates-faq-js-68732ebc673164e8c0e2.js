"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[231],{6317:function(e,t,a){a.d(t,{qm:function(){return n},rY:function(){return l},yU:function(){return o}});var r=a(6633);const n=(e,t,a,n)=>r({method:"post",url:"https://api.tehnotable.com/wp-json/tehnotable/v1/contact",data:{name:e,email:t,phone:a,message:n}}),l=e=>r({method:"post",url:"https://api.tehnotable.com/wp-json/tehnotable/v1/subscription",data:{email:e}}),o=e=>r({method:"delete",url:"https://api.tehnotable.com/wp-json/tehnotable/v1/subscription",data:{email:e}})},9688:function(e,t,a){var r=a(7294),n=a(1082),l=a(8120),o=a(6851);t.Z=e=>{let{className:t,list:a}=e,i=(0,r.useContext)(l.T),s=(0,r.useContext)(o.y);if("sinle-post-breadcrumbs"===t&&!a.some((e=>"/blog/"===e.url))){const e={text:"uk"===s||"ru"===s?"Блог":"Blog",url:"/blog/"};a.splice(1,0,e)}return r.createElement("nav",{className:"breadcrumbs "+t},r.createElement("div",{className:"container"},r.createElement("ul",{className:"breadcrumbs__list breadcrumbs-list",typeof:"BreadcrumbList",vocab:"https://schema.org/"},a.map(((e,t)=>{let l=i+e.url.replace(/(\/ru)|(\/en)|(\/product-category\/)|(\/catalog\/)|(\/category\/)/gm,"");return l=l.replace(/(\/\/)/gm,"/"),l.length>1&&(l=l.replace(/\/$/,"")),r.createElement(r.Fragment,null,r.createElement("li",{className:"breadcrumbs-list__item",key:t,property:"itemListElement",typeof:"ListItem"},t+1!==a.length?r.createElement(r.Fragment,null,r.createElement(n.Link,{className:"breadcrumbs-list__link",to:""+l,property:"item",typeof:"WebPage"},r.createElement("span",{property:"name"},e.text)),r.createElement("meta",{property:"position",content:t+1})):r.createElement(r.Fragment,null,r.createElement("span",{className:"breadcrumbs-list__current",property:"name"},e.text),r.createElement("meta",{property:"url",content:l}),r.createElement("meta",{property:"position",content:t+1}))),t+1!==a.length&&r.createElement("li",{className:"breadcrumbs-list__item"},r.createElement("span",{className:"breadcrumbs-list__separator"})))})))))}},8995:function(e,t,a){var r=a(7294),n=a(1705);t.Z=e=>{let{desc:t,btn:a}=e;return r.createElement("div",{className:"modal-err modal",id:"error-modal",style:{display:"none"}},r.createElement("div",{className:"modal-err__icon check-icon"},r.createElement("svg",{viewBox:"0 0 133 133",version:"1.1"},r.createElement("g",{id:"check-group-2",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.createElement("circle",{id:"filled-circle-2",fill:"#e80606",cx:"66.5",cy:"66.5",r:"54.5"}),r.createElement("circle",{id:"white-circle-2",fill:"#000",cx:"66.5",cy:"66.5",r:"55.5"}),r.createElement("circle",{id:"outline-2",stroke:"#e80606",strokeWidth:"4",cx:"66.5",cy:"66.5",r:"54.5"}))),r.createElement("span",null),r.createElement("span",null)),r.createElement("div",{className:"modal-err__title title title--small"},t),r.createElement("div",{className:"modal-thanks__btn-wrapper"},r.createElement("button",{className:"modal-err__btn form-btn",onClick:()=>n.KR.close()},r.createElement("span",null,a),r.createElement("span",null,a))))}},1317:function(e,t,a){var r=a(7294),n=a(1705);t.Z=e=>{let{desc:t,btn:a,text:l}=e;return r.createElement("div",{className:"modal-thanks modal",id:"thanks-modal",style:{display:"none"}},r.createElement("div",{className:"modal-thanks__icon check-icon"},r.createElement("svg",{viewBox:"0 0 133 133",version:"1.1"},r.createElement("g",{id:"check-group",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.createElement("circle",{id:"filled-circle",fill:"#133BFE",cx:"66.5",cy:"66.5",r:"54.5"}),r.createElement("circle",{id:"white-circle",fill:"#000",cx:"66.5",cy:"66.5",r:"55.5"}),r.createElement("circle",{id:"outline",stroke:"#133BFE",strokeWidth:"4",cx:"66.5",cy:"66.5",r:"54.5"}),r.createElement("polyline",{id:"check",stroke:"#fff",strokeWidth:"4",points:"41 70 56 85 92 49"})))),r.createElement("div",{className:"modal-thanks__title title title--small"},t),l&&r.createElement("p",{className:"modal-thanks__desc"},l),r.createElement("div",{className:"modal-thanks__btn-wrapper"},r.createElement("button",{className:"modal-thanks__btn form-btn",onClick:()=>n.KR.close()},r.createElement("span",null,a),r.createElement("span",null,a))))}},173:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var r=a(7294),n=a(5414),l=a(3462),o=a(9357),i=a(9688),s=a(2884),c=a(818),m=a(4823);var d=e=>{let{id:t,question:a,answer:n,isOpen:l,toggleOpen:o}=e;return r.createElement("div",{className:"faq-intro-accordion__item "+(l?"open":""),itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"},r.createElement("div",{className:"faq-intro-accordion__head",onClick:()=>o(t)},r.createElement("div",{className:"faq-intro-accordion__head-text",itemprop:"name"},a),r.createElement("div",{className:"faq-intro-accordion__head-icon accordion-icon"},r.createElement("svg",null,r.createElement("use",{href:m.Z+"#accordion-arrow"})))),r.createElement("div",{className:"faq-intro-accordion__body",itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"},r.createElement(c.Collapse,{isOpened:l},r.createElement("div",{className:"faq-intro-accordion__body-text article",dangerouslySetInnerHTML:{__html:n},itemprop:"text"}))))};var u=e=>{let{list:t,toggleOpen:a}=e;return r.createElement("div",{className:"faq-intro__accordion faq-intro-accordion"},r.createElement("div",{className:"faq-intro-accordion__inner",itemscope:"",itemtype:"https://schema.org/FAQPage"},t.map((e=>r.createElement(d,{id:e.id,question:e.question,answer:e.answer,isOpen:e.isOpen,toggleOpen:a,key:e.id})))))},p=a(8177),f=a(5666),_=a.n(f),h=a(5745),b=a(8547),g=a(5070),E=a(6317);var y=e=>{var t,a,n;let{questionFormFields:l,validateErrors:o}=e;const i=(0,r.useRef)(null),{0:s,1:c}=(0,r.useState)(!1),{register:m,formState:{errors:d,isSubmitSuccessful:u},handleSubmit:f,reset:y,getValues:q}=(0,p.cI)({mode:"onBlur"});return(0,r.useEffect)((()=>(0,g._)(i))),r.createElement("form",{className:"faq-intro__form faq-intro-form",onSubmit:f(((e,t)=>{_().start(),(0,E.qm)(q("name"),q("email")," ",q("question")).then((()=>c(!0))).then((()=>{_().done(),(0,h.Y)(),y()})).catch((()=>{(0,b.K)(),_().done(),y()}))}),((e,t)=>{console.error(e)}))},r.createElement("div",{className:"faq-intro-form__inner",ref:i},r.createElement("div",{className:"faq-intro-form__title title title--small"},l.questionForm.title),r.createElement("div",{className:"faq-intro-form__inps"},r.createElement("div",{className:"faq-intro-form__inp-wrapper"},r.createElement("label",{className:"faq-intro-form__label local-title local-title--black",htmlFor:"faq-name"},l.questionForm.inputUsernameLabel),r.createElement("div",{className:"faq-intro-form__inp-inner"},r.createElement("input",Object.assign({className:"faq-intro-form__inp",id:"faq-name",type:"text",autoComplete:"off"},m("name",{required:o.errEmptyName,minLength:{value:3,message:o.errShortName},pattern:{value:/^[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ'][a-zA-Z-а-яА-ЯёЁэЭіІїЇєЄ' ]+[a-zA-Zа-яА-ЯёЁэЭіІїЇєЄ']?$/u,message:o.errInvalidName}}))),(null==d?void 0:d.name)&&r.createElement("span",{className:"faq-intro-form__error form-error"},(null==d||null===(t=d.name)||void 0===t?void 0:t.message)||"Error"))),r.createElement("div",{className:"faq-intro-form__inp-wrapper"},r.createElement("label",{className:"faq-intro-form__label local-title local-title--black",htmlFor:"faq-email"},l.questionForm.inputEmailLabel),r.createElement("div",{className:"faq-intro-form__inp-inner"},r.createElement("input",Object.assign({className:"faq-intro-form__inp",id:"faq-email",type:"text",autoComplete:"off"},m("email",{required:o.errEmptyEmail,pattern:{value:/\S+@\S+\.\S+/,message:o.errInvalidEmail}}))),(null==d?void 0:d.email)&&r.createElement("span",{className:"faq-intro-form__error form-error"},(null==d||null===(a=d.email)||void 0===a?void 0:a.message)||"Error"))),r.createElement("div",{className:"faq-intro-form__textarea-wrapper"},r.createElement("label",{className:"faq-intro-form__label local-title local-title--black",htmlFor:"faq-question"},l.questionForm.inputMessageLabel),r.createElement("div",{className:"faq-intro-form__textarea-inner"},r.createElement("textarea",Object.assign({className:"faq-intro-form__textarea",id:"faq-question",autoComplete:"off"},m("question",{required:o.errEmptyMessage,minLength:{value:5,message:o.errShortMessage}}))),(null==d?void 0:d.question)&&r.createElement("span",{className:"callback-form__error form-error"},(null==d||null===(n=d.question)||void 0===n?void 0:n.message)||"Error"))),r.createElement("div",{className:"faq-intro-form__btn-wrapper"},r.createElement("button",{className:"faq-intro-form__btn form-btn "+(u||s?"disabled":""),type:"submit",disabled:u||s},r.createElement("span",null,l.questionForm.sendButton),r.createElement("span",null,l.questionForm.sendButton))))))},q=a(9745),v=a(1918);var k=e=>{let{title:t,faqPageFields:a,questionFormFields:n,validateErrors:l}=e;const o=(0,r.useRef)(null),{0:i,1:c}=(0,r.useState)(a.faqRepeater),m=(0,r.useCallback)((e=>{c(i.map((t=>({...t,isOpen:t.id===e?!t.isOpen:t.isOpen}))))}),[i]);return(0,r.useEffect)((()=>{(0,q.U)(o);let e=s.ZP.timeline();return new Promise(((e,t)=>{e(c(i.map(((e,t)=>({...e,id:t,isOpen:0===t})))))})).then((()=>{if(!(0,v.k)())return null;e.from(".faq-intro__title",.5,{delay:.2,y:"100%",onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".faq-intro-accordion__item",.6,{y:20,opacity:0,stagger:.1,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.2").from(".faq-intro-form",.6,{opacity:0,x:50,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.5")})),()=>{e.kill()}}),[]),r.createElement("section",{className:"intro faq-intro",ref:o},r.createElement("div",{className:"container"},r.createElement("div",{className:"faq-intro__title-wrapper title-wrapper"},r.createElement("h1",{className:"faq-intro__title title title--big"},t)),r.createElement("div",{className:"faq-intro__inner"},r.createElement(u,{list:i,toggleOpen:m}),r.createElement(y,{questionFormFields:n,validateErrors:l}))))},N=a(1317),w=a(8995),S=a(5434),F=a(3885),x=a(8120),C=a(6851),L=a(7990);var T=e=>{let{pageContext:t,data:a}=e;const{title:s,metaDesc:c,breadcrumbs:m}=a.wpPage.seo,d=a.wpTehnotableThemeSetting.mainMenuFields,u=a.wpTehnotableThemeSetting.siteHeaderFields,p=a.wpTehnotableThemeSetting.siteFooterFields,f=a.wpTehnotableThemeSetting.cartModalFields,_=a.wpTehnotableThemeSetting.validationErrorsFields,h=(0,L.t)(t.categories,t.wpmlLang),{faqFormSuccess:b,errFormSuccess:g,coockieMain:E,coockieSettings:y}=a.wpTehnotableThemeSetting.thanksModalFields,{contactsPhones:q,contactsEmail:v,contactsScheduleTime:T,youtubeLink:P,facebookLink:Z,instagramLink:O,footerLabels:R}=a.wpTehnotableThemeSetting.siteFooterFields,A=a.wpPage.title,{faqPageFields:j,questionFormFields:B}=a.wpPage;return r.createElement(x.Z,{prefix:t.prefix},r.createElement(C.Z,{code:t.wpmlLang},r.createElement(l.Z,{menu:d,header:u,footer:p,cart:f,contactsPhones:q,contactsEmail:v,contactsScheduleTime:T,youtubeLink:P,facebookLink:Z,instagramLink:O,categoryList:h,footerLabels:R},r.createElement(o.Z,{title:s,description:c,lang:t.lang}),r.createElement(n.q,null,r.createElement("link",{rel:"canonical",href:"https://tehnotable.com"+t.prefix+"faq"}),t.langList.map((e=>r.createElement("link",{rel:"alternate",hreflang:e.wpmlLang,href:"https://tehnotable.com"+e.path+"faq"}))),r.createElement("link",{rel:"alternate",hreflang:"x-default",href:"https://tehnotable.com/faq"})),r.createElement(i.Z,{className:"faq-breadcrumbs",list:m}),r.createElement(k,{title:A,faqPageFields:j,questionFormFields:B,validateErrors:_}),r.createElement(N.Z,{desc:b.mainText,btn:b.btnText}),r.createElement(w.Z,{desc:g.mainText,btn:g.btnText}),r.createElement(S.Z,{title:E.title,desc:E.desc,btnSettings:E.btnSettings,btnAccept:E.btnAccept}),r.createElement(F.Z,{title:y.title,subtitle:y.subtitle,required:y.required,analitics:y.analithics,personalization:y.personalization,advertisment:y.advertisment,btnAccept:y.acceptBtn,btnAcceptAll:y.acceptAllBtn}))))}},5070:function(e,t,a){a.d(t,{_:function(){return n}});var r=a(9029);const n=e=>{if(!(0,r.j)())return;let t=window.innerHeight;e.current.offsetHeight>t?e.current.classList.add("static"):e.current.classList.remove("static")}},1918:function(e,t,a){a.d(t,{k:function(){return n}});var r=a(9029);const n=()=>(0,r.j)()&&-1===window.navigator.userAgent.indexOf("Chrome-Lighthouse")},9745:function(e,t,a){a.d(t,{U:function(){return n}});var r=a(9029);const n=e=>{if(!(0,r.j)())return null;document.body.classList.add("disable-overflow"),document.querySelector(".wrapper").classList.add("disable-overflow")}},7990:function(e,t,a){a.d(t,{t:function(){return r}});const r=(e,t)=>e.filter((e=>"uncategorized"!==e.slug&&e.lang===t))},8547:function(e,t,a){a.d(t,{K:function(){return i}});var r=a(2884),n=a(1705),l=a(9029),o=a(6776);const i=()=>{if((0,l.j)()){let e=null;n.KR.show([{src:"#error-modal",type:"inline"}],{showClass:"fancybox-fadeIn",hideClass:"fancybox-fadeOut",dragToClose:!1,parentEl:document.querySelector("#___gatsby"),on:{init:()=>{document.querySelector(".header__top")&&(document.querySelector(".header__top").style.paddingRight=(0,o.n)()),document.querySelector(".header__bot")&&(document.querySelector(".header__bot").style.paddingRight=(0,o.n)())},ready:()=>{e=r.ZP.timeline(),e.from(".modal-thanks__title",.5,{delay:.8,y:20,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".modal-thanks__btn-wrapper",.5,{y:20,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.2")},destroy:()=>{e.kill(),document.querySelector(".header__top")&&(document.querySelector(".header__top").style.paddingRight="0"),document.querySelector(".header__bot")&&(document.querySelector(".header__bot").style.paddingRight="0")}}})}}},5745:function(e,t,a){a.d(t,{Y:function(){return i}});var r=a(2884),n=a(1705),l=a(9029),o=a(6776);const i=()=>{if((0,l.j)()){let e=null;n.KR.show([{src:"#thanks-modal",type:"inline"}],{showClass:"fancybox-fadeIn",hideClass:"fancybox-fadeOut",dragToClose:!1,parentEl:document.querySelector("#___gatsby"),on:{init:()=>{document.querySelector(".header__top")&&(document.querySelector(".header__top").style.paddingRight=(0,o.n)()),document.querySelector(".header__bot").style.paddingRight=(0,o.n)()},ready:()=>{e=r.ZP.timeline(),e.from(".modal-thanks__title",.5,{delay:.8,y:20,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".modal-thanks__btn-wrapper",.5,{y:20,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.2").from(".modal-thanks__desc",.5,{delay:.8,y:20,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=1.4")},destroy:()=>{e.kill(),document.querySelector(".header__top")&&(document.querySelector(".header__top").style.paddingRight="0"),document.querySelector(".header__bot").style.paddingRight="0"}}})}}}}]);
//# sourceMappingURL=component---src-templates-faq-js-68732ebc673164e8c0e2.js.map