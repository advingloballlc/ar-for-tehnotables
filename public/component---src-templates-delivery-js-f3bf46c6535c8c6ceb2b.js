"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[721],{9688:function(e,t,a){var l=a(7294),n=a(1082),r=a(8120),c=a(6851);t.Z=e=>{let{className:t,list:a}=e,i=(0,l.useContext)(r.T),s=(0,l.useContext)(c.y);if("sinle-post-breadcrumbs"===t&&!a.some((e=>"/blog/"===e.url))){const e={text:"uk"===s||"ru"===s?"Блог":"Blog",url:"/blog/"};a.splice(1,0,e)}return l.createElement("nav",{className:"breadcrumbs "+t},l.createElement("div",{className:"container"},l.createElement("ul",{className:"breadcrumbs__list breadcrumbs-list",typeof:"BreadcrumbList",vocab:"https://schema.org/"},a.map(((e,t)=>{let r=i+e.url.replace(/(\/ru)|(\/en)|(\/product-category\/)|(\/catalog\/)|(\/category\/)/gm,"");return r=r.replace(/(\/\/)/gm,"/"),r.length>1&&(r=r.replace(/\/$/,"")),l.createElement(l.Fragment,null,l.createElement("li",{className:"breadcrumbs-list__item",key:t,property:"itemListElement",typeof:"ListItem"},t+1!==a.length?l.createElement(l.Fragment,null,l.createElement(n.Link,{className:"breadcrumbs-list__link",to:""+r,property:"item",typeof:"WebPage"},l.createElement("span",{property:"name"},e.text)),l.createElement("meta",{property:"position",content:t+1})):l.createElement(l.Fragment,null,l.createElement("span",{className:"breadcrumbs-list__current",property:"name"},e.text),l.createElement("meta",{property:"url",content:r}),l.createElement("meta",{property:"position",content:t+1}))),t+1!==a.length&&l.createElement("li",{className:"breadcrumbs-list__item"},l.createElement("span",{className:"breadcrumbs-list__separator"})))})))))}},3463:function(e,t,a){var l=a(7294),n=a(2884);t.Z=e=>{let{title:t,content:a}=e;return(0,l.useEffect)((()=>{let e=n.ZP.timeline();return e.from(".text-page-intro__title",.5,{delay:.2,y:"100%",onComplete(){e.set(this.targets(),{clearProps:"all"})}}).from(".text-page-intro__article",.6,{y:100,opacity:0,onComplete(){e.set(this.targets(),{clearProps:"all"})}},"-=.1"),()=>{e.kill()}}),[]),l.createElement("section",{className:"intro text-page-intro text-page"},l.createElement("div",{className:"container"},l.createElement("div",{className:"text-page-intro__title-wrapper title-wrapper"},l.createElement("h1",{className:"text-page-intro__title title title--big"},t)),l.createElement("article",{className:"text-page-intro__article article",dangerouslySetInnerHTML:{__html:a}})))}},814:function(e,t,a){a.r(t);var l=a(7294),n=a(5414),r=a(3462),c=a(9357),i=a(9688),s=a(3463),o=a(5434),m=a(3885),p=a(8120),u=a(6851),g=a(7990);t.default=e=>{let{pageContext:t,data:a}=e;const{title:b,metaDesc:d,breadcrumbs:h}=a.wpPage.seo,E=a.wpTehnotableThemeSetting.mainMenuFields,f=a.wpTehnotableThemeSetting.siteHeaderFields,y=a.wpTehnotableThemeSetting.siteFooterFields,_=a.wpTehnotableThemeSetting.cartModalFields,k=(0,g.t)(t.categories,t.wpmlLang),{coockieMain:x,coockieSettings:L}=a.wpTehnotableThemeSetting.thanksModalFields,{contactsPhones:T,contactsEmail:w,contactsScheduleTime:N,youtubeLink:v,facebookLink:F,instagramLink:S,footerLabels:Z}=a.wpTehnotableThemeSetting.siteFooterFields,P=a.wpPage.title,{textContent:z}=a.wpPage.simpleTextContentPageFields;return l.createElement(p.Z,{prefix:t.prefix},l.createElement(u.Z,{code:t.wpmlLang},l.createElement(r.Z,{menu:E,header:f,footer:y,cart:_,contactsPhones:T,contactsEmail:w,contactsScheduleTime:N,youtubeLink:v,facebookLink:F,instagramLink:S,categoryList:k,footerLabels:Z},l.createElement(c.Z,{title:b,description:d,lang:t.lang}),l.createElement(n.q,null,l.createElement("link",{rel:"canonical",href:"https://tehnotable.com"+t.prefix+"usloviya-zakaza"}),t.langList.map((e=>l.createElement("link",{rel:"alternate",hreflang:e.wpmlLang,href:"https://tehnotable.com"+e.path+"usloviya-zakaza"}))),l.createElement("link",{rel:"alternate",hreflang:"x-default",href:"https://tehnotable.com/usloviya-zakaza"})),l.createElement(i.Z,{className:"delivery-breadcrumbs",list:h}),l.createElement(s.Z,{title:P,content:z}),l.createElement(o.Z,{title:x.title,desc:x.desc,btnSettings:x.btnSettings,btnAccept:x.btnAccept}),l.createElement(m.Z,{title:L.title,subtitle:L.subtitle,required:L.required,analitics:L.analithics,personalization:L.personalization,advertisment:L.advertisment,btnAccept:L.acceptBtn,btnAcceptAll:L.acceptAllBtn}))))}},7990:function(e,t,a){a.d(t,{t:function(){return l}});const l=(e,t)=>e.filter((e=>"uncategorized"!==e.slug&&e.lang===t))}}]);
//# sourceMappingURL=component---src-templates-delivery-js-f3bf46c6535c8c6ceb2b.js.map