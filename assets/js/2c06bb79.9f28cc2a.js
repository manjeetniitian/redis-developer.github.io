"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,f=u["".concat(o,".").concat(g)]||u[g]||d[g]||s;return a?i.createElement(f,n(n({ref:t},p),{},{components:a})):i.createElement(f,n({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var c=2;c<s;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const s={id:"index-gcp",title:"Create Database using Google Cloud",sidebar_label:"Google Cloud",slug:"/create/cloud/gcp"},n=void 0,l={unversionedId:"create/cloud/gcp/index-gcp",id:"create/cloud/gcp/index-gcp",title:"Create Database using Google Cloud",description:"Redis Enterprise Cloud delivers fully managed Redis Enterprise as a Service. It offers all the capabilities of Redis Enterprise while taking care of all the operational aspects associated with operating Redis in the most efficient manner on Google Cloud Platform. Redis Enterprise Cloud is built on a complete serverless concept, so users don\u2019t need to deal with nodes and clusters",source:"@site/docs/create/cloud/gcp/index-gcp.mdx",sourceDirName:"create/cloud/gcp",slug:"/create/cloud/gcp",permalink:"/create/cloud/gcp",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/cloud/gcp/index-gcp.mdx",tags:[],version:"current",lastUpdatedAt:1655485828,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-gcp",title:"Create Database using Google Cloud",sidebar_label:"Google Cloud",slug:"/create/cloud/gcp"}},o={},c=[{value:"Step 1. Getting Started",id:"step-1-getting-started",level:3},{value:"Step 2. Click &quot;Manage via Redis Labs&quot;",id:"step-2-click-manage-via-redis-labs",level:3},{value:"Step 3. Create Subscription",id:"step-3-create-subscription",level:3},{value:"Step 4. Specify the database name",id:"step-4-specify-the-database-name",level:3},{value:"Step 5. Enter sizing details",id:"step-5-enter-sizing-details",level:3},{value:"Step 6: Review &amp; Create",id:"step-6-review--create",level:3},{value:"Step 7. Verify the details",id:"step-7-verify-the-details",level:3},{value:"Step 8. Finalising the setup",id:"step-8-finalising-the-setup",level:3},{value:"Next Steps",id:"next-steps",level:3}],p={toc:c};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Redis Enterprise Cloud delivers fully managed Redis Enterprise as a Service. It offers all the capabilities of Redis Enterprise while taking care of all the operational aspects associated with operating Redis in the most efficient manner on Google Cloud Platform. Redis Enterprise Cloud is built on a complete serverless concept, so users don\u2019t need to deal with nodes and clusters"),(0,r.kt)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),(0,r.kt)("p",null,"Launch ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/library/gcp.redisenterprise.com?pli=1"},"Redis Enterprise Cloud page")," on Google Cloud Platform"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(70552).Z,width:"1248",height:"1004"})),(0,r.kt)("h3",{id:"step-2-click-manage-via-redis-labs"},'Step 2. Click "Manage via Redis Labs"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(78508).Z,width:"1244",height:"646"})),(0,r.kt)("h3",{id:"step-3-create-subscription"},"Step 3. Create Subscription"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(13364).Z,width:"1240",height:"798"})),(0,r.kt)("h3",{id:"step-4-specify-the-database-name"},"Step 4. Specify the database name"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(8830).Z,width:"1242",height:"670"})),(0,r.kt)("h3",{id:"step-5-enter-sizing-details"},"Step 5. Enter sizing details"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(68522).Z,width:"1240",height:"548"})),(0,r.kt)("h3",{id:"step-6-review--create"},"Step 6: Review & Create"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(33466).Z,width:"1244",height:"1118"})),(0,r.kt)("h3",{id:"step-7-verify-the-details"},"Step 7. Verify the details"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(77086).Z,width:"1242",height:"500"})),(0,r.kt)("h3",{id:"step-8-finalising-the-setup"},"Step 8. Finalising the setup"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Cloud",src:a(81995).Z,width:"1236",height:"1156"})),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/explore/redisinsight/"},"Connecting to the database using RedisInsight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/shoppingcart/"},"How to list & search Movies database using Redisearch"))))}d.isMDXComponent=!0},81995:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp10-7708650913ffbcd891ccb49ab16273ce.png"},70552:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp2-406d9551019fb2cde74f91fd1bee9212.png"},78508:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp3-5603750853bcb609058bad29e73347bd.png"},13364:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp4-6134bc1c7b62c115a4cd6341293431e3.png"},8830:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp5-80dacc480a4d6922426fefb90b0c1fbf.png"},68522:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp6-157afc8541f4ccb4c1b34e5279a2aa12.png"},33466:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp7-62912fb7ada1011b62760be8cbff61e1.png"},77086:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gcp8-7a4a74c952e99f64dfdf03072e4067c4.png"}}]);