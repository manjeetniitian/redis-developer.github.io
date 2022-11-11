"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5745],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return t?r.createElement(h,o(o({ref:a},d),{},{components:t})):r.createElement(h,o({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},50358:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(67294),n=t(52263);const l="authorByline_VoxI",o="authorLabel_a70t",i="authorProfileImage_URwT";const s=function(e){let{frontMatter:a}=e;const{siteConfig:t}=(0,n.Z)(),s=t.customFields.authors;return r.createElement(r.Fragment,null,a.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),a.authors.map((e=>r.createElement("div",{key:e,className:l},r.createElement("img",{className:i,src:`/img/${s[e].image?s[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${s[e].name}`}),r.createElement("div",null,r.createElement("div",{className:o},"Author:"),r.createElement("div",null,r.createElement("a",{href:s[e].link,target:"_blank"},s[e].name),", ",s[e].title))))),r.createElement("hr",null)))}},81789:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(87462),n=(t(67294),t(3905)),l=t(50358);const o={id:"index-analytics-using-aws",title:"How to Build and Deploy Your Own Analytics Dashboard using NodeJS and Redis on the AWS Platform",sidebar_label:"Building an Analytics Dashboard using NodeJS, Redis and AWS",slug:"/create/aws/analytics-using-aws",authors:["ajeet"]},i=void 0,s={unversionedId:"create/aws/analytics-using-aws/index-analytics-using-aws",id:"create/aws/analytics-using-aws/index-analytics-using-aws",title:"How to Build and Deploy Your Own Analytics Dashboard using NodeJS and Redis on the AWS Platform",description:"An interactive analytics dashboard serves several purposes. They allow you to share data and provide you with all those vital information to make game-changing decisions at a faster pace. Building a real-time dynamic dashboard using a traditional relational database might require a complex set of queries. By using a NoSQL database like Redis, you can build a powerful interactive and dynamic dashboard with a small number of Redis commands.",source:"@site/docs/create/aws/analytics-using-aws/index-analytics-using-aws.mdx",sourceDirName:"create/aws/analytics-using-aws",slug:"/create/aws/analytics-using-aws",permalink:"/create/aws/analytics-using-aws",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/aws/analytics-using-aws/index-analytics-using-aws.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-analytics-using-aws",title:"How to Build and Deploy Your Own Analytics Dashboard using NodeJS and Redis on the AWS Platform",sidebar_label:"Building an Analytics Dashboard using NodeJS, Redis and AWS",slug:"/create/aws/analytics-using-aws",authors:["ajeet"]},sidebar:"docs",previous:{title:"Building a Real-Time Chat application on AWS using Python and Redis",permalink:"/create/aws/chatapp"},next:{title:"Overview",permalink:"/create/docker/"}},p={},d=[{value:"What will you build?",id:"what-will-you-build",level:3},{value:"What will you need?",id:"what-will-you-need",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Prepare the environment",id:"prepare-the-environment",level:3},{value:"Step 1. Sign up for a Free Redis Enterprise Cloud Account",id:"step-1-sign-up-for-a-free-redis-enterprise-cloud-account",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3. Set up a backend environment",id:"step-3-set-up-a-backend-environment",level:3},{value:"Step 4. Install dependencies",id:"step-4-install-dependencies",level:3},{value:"Step 5. Run the backend",id:"step-5-run-the-backend",level:3},{value:"Step 6. Set up the frontend environment",id:"step-6-set-up-the-frontend-environment",level:3},{value:"Step 7. Install dependencies",id:"step-7-install-dependencies",level:3},{value:"Step 8. Run the frontend",id:"step-8-run-the-frontend",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"How the data is stored:",id:"how-the-data-is-stored",level:4},{value:"For each of time spans:",id:"for-each-of-time-spans",level:5},{value:"For each of scopes:",id:"for-each-of-scopes",level:5},{value:"For each of data types/types:",id:"for-each-of-data-typestypes",level:5},{value:"Example:",id:"example",level:5},{value:"Example:",id:"example-1",level:5},{value:"Example:",id:"example-2",level:5},{value:"Cohort data",id:"cohort-data",level:3},{value:"Example",id:"example-3",level:5},{value:"Retention data",id:"retention-data",level:4},{value:"How the data is accessed:",id:"how-the-data-is-accessed",level:3},{value:"Total Traffic:",id:"total-traffic",level:4},{value:"December:",id:"december",level:5},{value:"X week of December:",id:"x-week-of-december",level:5},{value:"Example:",id:"example-4",level:5},{value:"Traffic per Page ({page} is one of: homepage, product1, product2, product3):",id:"traffic-per-page-page-is-one-of-homepage-product1-product2-product3",level:4},{value:"December:",id:"december-1",level:5},{value:"Example:",id:"example-5",level:5},{value:"X week of December:",id:"x-week-of-december-1",level:5},{value:"Example:",id:"example-6",level:5},{value:"Traffic per Source ({source} is one of: Google, Facebook, email, direct, referral, none):",id:"traffic-per-source-source-is-one-of-google-facebook-email-direct-referral-none",level:4},{value:"December:",id:"december-2",level:5},{value:"Example:",id:"example-7",level:5},{value:"X week of December:",id:"x-week-of-december-2",level:5},{value:"Example:",id:"example-8",level:5},{value:"Trend traffic ({page} is one of: homepage, product1, product2, product3):",id:"trend-traffic-page-is-one-of-homepage-product1-product2-product3",level:5},{value:"December:",id:"december-3",level:5},{value:"Example:",id:"example-9",level:5},{value:"Total products bought:",id:"total-products-bought",level:4},{value:"December:",id:"december-4",level:5},{value:"X week of December:",id:"x-week-of-december-3",level:5},{value:"Example:",id:"example-10",level:5},{value:"Total products added to cart:",id:"total-products-added-to-cart",level:4},{value:"December:",id:"december-5",level:5},{value:"X week of December:",id:"x-week-of-december-4",level:5},{value:"Example:",id:"example-11",level:5},{value:"Shares of products bought ({productPage} for product1, product2, product3):",id:"shares-of-products-bought-productpage-for-product1-product2-product3",level:5},{value:"December:",id:"december-6",level:4},{value:"Example:",id:"example-12",level:5},{value:"X week of December:",id:"x-week-of-december-5",level:5},{value:"Example:",id:"example-13",level:5},{value:"Customer and Cohort Analysis",id:"customer-and-cohort-analysis",level:4},{value:"Example:",id:"example-14",level:5},{value:"Customers who bought Product1 and Product2:",id:"customers-who-bought-product1-and-product2",level:4},{value:"Customer Retention (customers who bought on the different dates):",id:"customer-retention-customers-who-bought-on-the-different-dates",level:4},{value:"References",id:"references",level:3}],u={toc:d};function c(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{frontMatter:o,mdxType:"Authors"}),(0,n.kt)("p",null,"An interactive analytics dashboard serves several purposes. They allow you to share data and provide you with all those vital information to make game-changing decisions at a faster pace. Building a real-time dynamic dashboard using a traditional relational database might require a complex set of queries. By using a NoSQL database like Redis, you can build a powerful interactive and dynamic dashboard with a small number of Redis commands."),(0,n.kt)("p",null,"Let\u2019s take a look at how this was achieved."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What will you build?"),(0,n.kt)("li",{parentName:"ul"},"What will you need?"),(0,n.kt)("li",{parentName:"ul"},"Getting started"),(0,n.kt)("li",{parentName:"ul"},"How does it work?"),(0,n.kt)("li",{parentName:"ul"},"How data is stored"),(0,n.kt)("li",{parentName:"ul"},"Navigating the application")),(0,n.kt)("h3",{id:"what-will-you-build"},"What will you build?"),(0,n.kt)("p",null,"You\u2019ll build an analytics dashboard app that uses Redis Bitmap written in NodeJS (JavaScript) and then deploy it to AWS."),(0,n.kt)("p",null,"Ready to get started? Ok, let\u2019s dive straight in."),(0,n.kt)("h3",{id:"what-will-you-need"},"What will you need?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.redis.com/develop/node"},"NodeJS"),": used as an open-source, cross-platform, backend JavaScript runtime environment that executes Javascript code outside a web browser."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.redis.com/create/rediscloud"},"Redis Enterprise Cloud"),": used as a real-time database, cache, and message broker."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"NPM"),": used as a package manager. It allows you to build node apps.")),(0,n.kt)("h3",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"prepare-the-environment"},"Prepare the environment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install Node - v12.19.0"),(0,n.kt)("li",{parentName:"ul"},"Install NPM - v6.14.8")),(0,n.kt)("h3",{id:"step-1-sign-up-for-a-free-redis-enterprise-cloud-account"},"Step 1. Sign up for a Free Redis Enterprise Cloud Account"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.redis.com/create/aws/redis-on-aws"},"Follow this tutorial")," to sign up for a free Redis Enterprise Cloud account."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:t(84476).Z,width:"1284",height:"970"})),(0,n.kt)("p",null,"Choose AWS as a Cloud vendor while creating your new subscription. At the end of the database creation process, you will get a Redis Enterprise CLoud database endpoint and password. You can save it for later use."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:t(34738).Z,width:"1242",height:"952"})),(0,n.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-analytics-dashboard-redis-bitmaps-nodejs\n")),(0,n.kt)("h3",{id:"step-3-set-up-a-backend-environment"},"Step 3. Set up a backend environment"),(0,n.kt)("p",null,"First we will be setting up environment variables"),(0,n.kt)("p",null,"Go to /server folder (cd ./server) and then execute the below command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," cp .env.example .env\n")),(0,n.kt)("p",null,"Open .env file and add Redis Enterprise Cloud Database Endpoint URL, port and password as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nPORT=3000\n\n# Host and a port. Can be with `redis://` or without.\n# Host and a port encoded in redis uri take precedence over other environment variable.\n# preferable\nREDIS_ENDPOINT_URI=redis://redis-XXXX.c212.ap-south-1-1.ec2.cloud.redislabs.com:15564\n\n# Or you can set it here (ie. for docker development)\nREDIS_HOST=redis-XXXX.c212.ap-south-1-1.ec2.cloud.redislabs.com\nREDIS_PORT=XXXX\n\n# You can set password here\nREDIS_PASSWORD=reXXX\n\nCOMPOSE_PROJECT_NAME=redis-analytics-bitmaps\n")),(0,n.kt)("h3",{id:"step-4-install-dependencies"},"Step 4. Install dependencies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," npm install\n")),(0,n.kt)("h3",{id:"step-5-run-the-backend"},"Step 5. Run the backend"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," npm run dev\n")),(0,n.kt)("h3",{id:"step-6-set-up-the-frontend-environment"},"Step 6. Set up the frontend environment"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"client")," folder (",(0,n.kt)("inlineCode",{parentName:"p"},"cd ./client"),") and then:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," cp .env.example .env\n")),(0,n.kt)("p",null,"Add the exact URL path and port number of your choice for VUE_APP_API_URL parameter as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"VUE_APP_API_URL=http://localhost:3000\n")),(0,n.kt)("h3",{id:"step-7-install-dependencies"},"Step 7. Install dependencies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," npm install\n")),(0,n.kt)("h3",{id:"step-8-run-the-frontend"},"Step 8. Run the frontend"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," npm run serve\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"analytics",src:t(88582).Z,width:"2336",height:"864"})),(0,n.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("h4",{id:"how-the-data-is-stored"},"How the data is stored:"),(0,n.kt)("p",null,"The event data is stored in various keys and data types which is discussed below:"),(0,n.kt)("h5",{id:"for-each-of-time-spans"},"For each of time spans:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"year: like 2021"),(0,n.kt)("li",{parentName:"ul"},"month: like 2021-03 (means March of 2021)"),(0,n.kt)("li",{parentName:"ul"},"day: like 2021-03-03 (means 3rd March of 2021)"),(0,n.kt)("li",{parentName:"ul"},"weekOfMonth: like 2021-03/4 (means 4th week of March 2021)"),(0,n.kt)("li",{parentName:"ul"},"anytime")),(0,n.kt)("h5",{id:"for-each-of-scopes"},"For each of scopes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"source"),(0,n.kt)("li",{parentName:"ul"},"action"),(0,n.kt)("li",{parentName:"ul"},"source + action"),(0,n.kt)("li",{parentName:"ul"},"action + page"),(0,n.kt)("li",{parentName:"ul"},"userId + action"),(0,n.kt)("li",{parentName:"ul"},"global")),(0,n.kt)("h5",{id:"for-each-of-data-typestypes"},"For each of data types/types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"count (Integer stored as String)"),(0,n.kt)("li",{parentName:"ul"},"bitmap"),(0,n.kt)("li",{parentName:"ul"},"set")),(0,n.kt)("p",null,"It generates keys with the following naming convention:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," rab:{type}[:custom:{customName}][:user:{userId}][:source:{source}][:action:{action}][:page:{page}]:timeSpan:{timeSpan}\n")),(0,n.kt)("p",null,"where values in [] are optional."),(0,n.kt)("p",null,"For each generated key like ",(0,n.kt)("inlineCode",{parentName:"p"},"rab:count:*"),", data is stored like: ",(0,n.kt)("inlineCode",{parentName:"p"},"INCR {key}")),(0,n.kt)("h5",{id:"example"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," INCR rab:count:action:addToCart:timeSpan:2015-12/3\n")),(0,n.kt)("p",null,"For each generated key like: ",(0,n.kt)("inlineCode",{parentName:"p"},"rab:set:*"),", data is stored like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD {key} {userId}\n")),(0,n.kt)("h5",{id:"example-1"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD rab:set:action:addToCart:timeSpan:2015-12/3 8\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For each generated key like ",(0,n.kt)("inlineCode",{parentName:"p"},"rab:bitmap:*"),", data is stored like:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SETBIT {key} {userId} 1\n")))),(0,n.kt)("h5",{id:"example-2"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SETBIT rab:bitmap:action:addToCart:timeSpan:2015-12/3 8 1\n")),(0,n.kt)("h3",{id:"cohort-data"},"Cohort data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We store users who register and then bought some products (action order matters)."),(0,n.kt)("li",{parentName:"ul"},"For each buy action in December we first check if the user performed register action (register counter must be greater than zero)."),(0,n.kt)("li",{parentName:"ul"},"If so, we set user bit to 1")),(0,n.kt)("h5",{id:"example-3"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  SETBIT rab:bitmap:custom:cohort-buy:timeSpan:{timeSpan} {userId} 1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Example - User Id 2 bought 2 products on 2015-12-17. It won't be stored."),(0,n.kt)("li",{parentName:"ul"},"Example - User Id 10 bought 1 product on 2015-12-17 and registered on 2015-12-16.\nSo, it will be stored like:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SETBIT rab:bitmap:custom:cohort-buy:timeSpan:2015-12 10 1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We assume that user cannot buy without registering first.")),(0,n.kt)("h4",{id:"retention-data"},"Retention data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Retention means users who bought on two different dates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For each buy action we check if user bought more products anytime than bought on particular day (current purchase not included).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If so, we add user id to set like:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD rab:set:custom:retention-buy:timeSpan:{timeSpan} {userId}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example - User Id 5 bought 3 products on 2015-12-15. His retention won't be stored (products bought on particular day: 2, products bought anytime: 0).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example - User Id 3 bought 1 product on 2015-12-15 and before - 1 product on 2015-12-13. His retention will be stored (products bought on particular day: 0, products bought anytime: 1) like:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD rab:set:custom:retention-buy:timeSpan:2015-12\n")),(0,n.kt)("h3",{id:"how-the-data-is-accessed"},"How the data is accessed:"),(0,n.kt)("h4",{id:"total-traffic"},"Total Traffic:"),(0,n.kt)("h5",{id:"december"},"December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  BITCOUNT rab:bitmap:custom:global:timeSpan:2015-12```\n")),(0,n.kt)("h5",{id:"x-week-of-december"},"X week of December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  BITCOUNT rab:bitmap:custom:global:timeSpan:2015-12/{X}\n")),(0,n.kt)("h5",{id:"example-4"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:custom:global:timeSpan:2015-12/3\n")),(0,n.kt)("h4",{id:"traffic-per-page-page-is-one-of-homepage-product1-product2-product3"},"Traffic per Page ({page} is one of: homepage, product1, product2, product3):"),(0,n.kt)("h5",{id:"december-1"},"December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:action:visit:page:{page}:timeSpan:2015-12\n")),(0,n.kt)("h5",{id:"example-5"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:action:visit:page:homepage:timeSpan:2015-12\n")),(0,n.kt)("h5",{id:"x-week-of-december-1"},"X week of December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:action:visit:page:{page}:timeSpan:2015-12/{X}\n")),(0,n.kt)("h5",{id:"example-6"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:action:visit:page:product1:timeSpan:2015-12/2\n")),(0,n.kt)("h4",{id:"traffic-per-source-source-is-one-of-google-facebook-email-direct-referral-none"},"Traffic per Source ({source} is one of: Google, Facebook, email, direct, referral, none):"),(0,n.kt)("h5",{id:"december-2"},"December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:source:{source}:timeSpan:2015-12\n")),(0,n.kt)("h5",{id:"example-7"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:source:referral:timeSpan:2015-12\n")),(0,n.kt)("h5",{id:"x-week-of-december-2"},"X week of December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:source:{source}:timeSpan:2015-12/{X}\n")),(0,n.kt)("h5",{id:"example-8"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:source:google:timeSpan:2015-12/1\n")),(0,n.kt)("h5",{id:"trend-traffic-page-is-one-of-homepage-product1-product2-product3"},"Trend traffic ({page} is one of: homepage, product1, product2, product3):"),(0,n.kt)("h5",{id:"december-3"},"December:"),(0,n.kt)("p",null,"From"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:action:visit:{page}:timeSpan:2015-12-01\n")),(0,n.kt)("p",null,"to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:action:visit:{page}:timeSpan:2015-12-31\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1st Week of December: Similar as above, but from 2015-12-01 to 2015-12-07"),(0,n.kt)("li",{parentName:"ul"},"2nd Week of December: Similar as above, but from 2015-12-08 to 2015-12-14"),(0,n.kt)("li",{parentName:"ul"},"3rd Week of December: Similar as above, but from 2015-12-15 to 2015-12-21"),(0,n.kt)("li",{parentName:"ul"},"4th Week of December: Similar as above, but from 2015-12-22 to 2015-12-28"),(0,n.kt)("li",{parentName:"ul"},"5th Week of December: Similar as above, but from 2015-12-29 to 2015-12-31")),(0,n.kt)("h5",{id:"example-9"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," BITCOUNT rab:bitmap:action:visit:homepage:timeSpan:2015-12-29 => BITCOUNT rab:bitmap:action:visit:homepage:timeSpan:2015-12-30 => BITCOUNT rab:bitmap:action:visit:homepage:timeSpan:2015-12-31\n")),(0,n.kt)("h4",{id:"total-products-bought"},"Total products bought:"),(0,n.kt)("h5",{id:"december-4"},"December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:buy:timeSpan:2015-12\n")),(0,n.kt)("h5",{id:"x-week-of-december-3"},"X week of December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:buy:timeSpan:2015-12/{X}\n")),(0,n.kt)("h5",{id:"example-10"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:buy:timeSpan:2015-12/1\n")),(0,n.kt)("h4",{id:"total-products-added-to-cart"},"Total products added to cart:"),(0,n.kt)("h5",{id:"december-5"},"December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:addToCart:timeSpan:2015-12\n")),(0,n.kt)("h5",{id:"x-week-of-december-4"},"X week of December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:addToCart:timeSpan:2015-12/{X}\n")),(0,n.kt)("h5",{id:"example-11"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:addToCart:timeSpan:2015-12/1\n")),(0,n.kt)("h5",{id:"shares-of-products-bought-productpage-for-product1-product2-product3"},"Shares of products bought ({productPage} for product1, product2, product3):"),(0,n.kt)("h4",{id:"december-6"},"December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:buy:page:{productPage}:timeSpan:2015-12\n")),(0,n.kt)("h5",{id:"example-12"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:buy:page:product3:timeSpan:2015-12\n")),(0,n.kt)("h5",{id:"x-week-of-december-5"},"X week of December:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:buy:page:{productPage}:timeSpan:2015-12/{X}\n")),(0,n.kt)("h5",{id:"example-13"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," GET rab:count:action:buy:page:product1:timeSpan:2015-12/2\n")),(0,n.kt)("h4",{id:"customer-and-cohort-analysis"},"Customer and Cohort Analysis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"People who registered: BITCOUNT rab:bitmap:action:register:timeSpan:2015-12")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"People who register then bought (order matters): BITCOUNT rab:bitmap:custom:cohort-buy:timeSpan:2015-12")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dropoff: (People who register then bought / People who register) ","*"," 100 ","[%]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Customers who bought only specified product ({productPage} is one of: product1, product2, product3):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SMEMBERS rab:set:action:buy:page:{productPage}:timeSpan:2015-12\n")))),(0,n.kt)("h5",{id:"example-14"},"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SMEMBERS rab:set:action:buy:page:product2:timeSpan:2015-12\n")),(0,n.kt)("h4",{id:"customers-who-bought-product1-and-product2"},"Customers who bought Product1 and Product2:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," SINTER rab:set:action:buy:page:product1:timeSpan:anytime rab:set:action:buy:page:product2:timeSpan:anytime\n")),(0,n.kt)("h4",{id:"customer-retention-customers-who-bought-on-the-different-dates"},"Customer Retention (customers who bought on the different dates):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SMEMBERS rab:set:custom:retention-buy:timeSpan:anytime\n")),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-analytics-dashboard-redis-bitmaps-nodejs"},"Project Source Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.io/topics/data-types-intro"},"Use cases of Bitmaps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create/aws/slackbot"},"How to Build a Slack Bot to Retrieve Lost Files Using AWS S3 and RediSearch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create/aws/terraform"},"How to Deploy and Manage Redis Database on AWS Using Terraform"))))}c.isMDXComponent=!0},84476:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/analytics3-9a428204431aac509f3184c2657ac28d.png"},34738:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/analytics4-d785c79e98ea87d71658c1a79c554d90.png"},88582:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/analytics_traffic-bd7f720aed16bcacb4d712ce0f2e4a87.png"}}]);