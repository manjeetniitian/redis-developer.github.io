"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4974],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return a?i.createElement(h,s(s({ref:t},u),{},{components:a})):i.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<n;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),r=a(52263);const n="authorByline_VoxI",s="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,r.Z)(),l=a.customFields.authors;return i.createElement(i.Fragment,null,t.authors&&i.createElement("div",{className:"docAuthors"},i.createElement("hr",null),t.authors.map((e=>i.createElement("div",{key:e,className:n},i.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),i.createElement("div",null,i.createElement("div",{className:s},"Author:"),i.createElement("div",null,i.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),i.createElement("hr",null)))}},52574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>h});var i=a(87462),r=(a(67294),a(3905));const n=a.p+"assets/images/insider_jyotsna_gupta-61c1ce75a1262a09c8ba80a3797c885c.jpg",s=a.p+"assets/images/insider_moiz_kapasi-e0abc13fbe53efc0f33c12567d0326f9.jpg",o=a.p+"assets/images/insider_michael_owolabi-4d78641398ba8530245a6ed9db5d1fb3.png",l=a.p+"assets/images/insider_stevan_thomas-1ac3ec7b9c8f3f4360f3a52857cbf64e.png";var d=a(50358);const u={id:"index-redis-insiders",title:"Redis Insiders, our ambassador program",sidebar_label:"Redis Insiders",slug:"/redis-insiders/",authors:["suze"],custom_edit_url:null,pagination_prev:null},c=void 0,p={unversionedId:"get-involved/redis-insiders/index-redis-insiders",id:"get-involved/redis-insiders/index-redis-insiders",title:"Redis Insiders, our ambassador program",description:"Redis Insiders is our first community ambassador program, launched in May 2022.",source:"@site/docs/get-involved/redis-insiders/index-redis-insiders.mdx",sourceDirName:"get-involved/redis-insiders",slug:"/redis-insiders/",permalink:"/redis-insiders/",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-redis-insiders",title:"Redis Insiders, our ambassador program",sidebar_label:"Redis Insiders",slug:"/redis-insiders/",authors:["suze"],custom_edit_url:null,pagination_prev:null},sidebar:"docs",next:{title:"Jyotsna Gupta",permalink:"/redis-insiders/jyotsna-gupta/"}},m={},h=[{value:"Meet our Redis Insiders",id:"meet-our-redis-insiders",level:2},{value:"Jyotsna Gupta",id:"jyotsna-gupta",level:3},{value:"Moiz Kapasi",id:"moiz-kapasi",level:3},{value:"Michael Owolabi",id:"michael-owolabi",level:3},{value:"Stevan Thomas",id:"stevan-thomas",level:3}],g={toc:h};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d.Z,{frontMatter:u,mdxType:"Authors"}),(0,r.kt)("p",null,"Redis Insiders is our first community ambassador program, launched in May 2022."),(0,r.kt)("p",null,"Our Redis Insiders are enthusiastic community members who love using Redis, and helping others to use it.  They spread the word through technical talks, blog posts, live streams and more!"),(0,r.kt)("h2",{id:"meet-our-redis-insiders"},"Meet our Redis Insiders"),(0,r.kt)("p",null,"Our current Insiders are..."),(0,r.kt)("h3",{id:"jyotsna-gupta"},"Jyotsna Gupta"),(0,r.kt)("img",{alt:"Jyotsna Gupta headshot",src:n,style:{float:"left","margin-right":"50px"}}),(0,r.kt)("p",null,"Jyotsna is based in Bangalore, India and works as a Senior Software Engineer at Gojek (GoPay).  She is an open source enthusiast and has been using Redis for the past three years, with Golang and Java.  She applied to become a Redis Insider because she is passionate about communities and loves to share and learn together.  When she\u2019s not working or volunteering, she energises herself by playing badminton, table tennis, basketball, Carrom and chess."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./jyotsna-gupta/"},"Find out more about Jyotsna.")),(0,r.kt)("div",{style:{clear:"left"}}),(0,r.kt)("h3",{id:"moiz-kapasi"},"Moiz Kapasi"),(0,r.kt)("img",{alt:"Moiz Kapasi headshot",src:s,style:{float:"left","margin-right":"50px"}}),(0,r.kt)("p",null,"Moiz Kapasi is a Paris, France-based Solution Architect at Capgemini who builds apps in the enterprise landscape of a major European car manufacturer, using Java / J2EE.  Moiz was drawn to the Redis Insiders program because, since he started using Redis 1.5 years ago, the simplicity and power of Redis has fascinated him.  His hobbies include cycling along the River Seine, camping, reading classic literature and philately."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./moiz-kapasi/"},"Find out more about Moiz.")),(0,r.kt)("div",{style:{clear:"left"}}),(0,r.kt)("h3",{id:"michael-owolabi"},"Michael Owolabi"),(0,r.kt)("img",{alt:"Michael Owolabi headshot",src:o,style:{float:"left","margin-right":"50px"}}),(0,r.kt)("p",null,"Michael is a Senior Software Engineer at Spleet, from Lagos, Nigeria.  He is a JavaScript programmer and has been using Redis for more than two years.  In his spare time, Michael enjoys travelling, adventure, writing, and volunteering.  Michael applied to become a Redis Insider because as a lover of Redis himself, he wanted an opportunity to meet with and learn from other Redis professionals around the globe and also share his knowledge of Redis through speaking and writing."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./michael-owolabi/"},"Find out more about Michael.")),(0,r.kt)("div",{style:{clear:"left"}}),(0,r.kt)("h3",{id:"stevan-thomas"},"Stevan Thomas"),(0,r.kt)("img",{alt:"Stevan Thomas headshot",src:l,style:{float:"left","margin-right":"50px"}}),(0,r.kt)("p",null,"Stevan is a Senior Software Engineer at Vela, with five years of Redis experience.  He builds web, mobile and desktop apps for a variety of industries including shipping / logistics, finance, retail and health using JavaScript, Swift, Java, C# and Python.  Stevan lives in Port of Spain, Trinidad and Tobago and, in his spare time, enjoys hiking, fitness / CrossFit, watching movies and learning new technologies.  He is excited to join the Redis Insiders program because he wants to be a positive influence in the adoption of Redis as a primary database for developers."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./stevan-thomas/"},"Find out more about Stevan.")),(0,r.kt)("div",{style:{clear:"left"}}))}f.isMDXComponent=!0}}]);