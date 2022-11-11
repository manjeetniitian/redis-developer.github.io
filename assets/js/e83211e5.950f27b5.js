"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6584],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,h=c["".concat(o,".").concat(m)]||c[m]||p[m]||s;return t?n.createElement(h,l(l({ref:a},u),{},{components:t})):n.createElement(h,l({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=c;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<s;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},50358:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),r=t(52263);const s="authorByline_VoxI",l="authorLabel_a70t",i="authorProfileImage_URwT";const o=function(e){let{frontMatter:a}=e;const{siteConfig:t}=(0,r.Z)(),o=t.customFields.authors;return n.createElement(n.Fragment,null,a.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),a.authors.map((e=>n.createElement("div",{key:e,className:s},n.createElement("img",{className:i,src:`/img/${o[e].image?o[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${o[e].name}`}),n.createElement("div",null,n.createElement("div",{className:l},"Author:"),n.createElement("div",null,n.createElement("a",{href:o[e].link,target:"_blank"},o[e].name),", ",o[e].title))))),n.createElement("hr",null)))}},56591:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(87462),r=(t(67294),t(3905)),s=t(50358);const l={id:"index-hackernews",title:"How to build a HackerNews Clone using Redis",sidebar_label:"How to build a HackerNews Clone using Redis",slug:"/howtos/hackernews",authors:["ajeet"]},i=void 0,o={unversionedId:"howtos/hackernews/index-hackernews",id:"howtos/hackernews/index-hackernews",title:"How to build a HackerNews Clone using Redis",description:"Hacker News (sometimes abbreviated as HN) is a social news website focusing on computer science and entrepreneurship.",source:"@site/docs/howtos/hackernews/index-hackernews.mdx",sourceDirName:"howtos/hackernews",slug:"/howtos/hackernews",permalink:"/howtos/hackernews",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/hackernews/index-hackernews.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-hackernews",title:"How to build a HackerNews Clone using Redis",sidebar_label:"How to build a HackerNews Clone using Redis",slug:"/howtos/hackernews",authors:["ajeet"]},sidebar:"docs",previous:{title:"Benchmarks for BERT Large Question Answering inference for RedisAI and RedisGears",permalink:"/howtos/redisai/bert-qa-benchmarking-with-redisai-and-redisgears"},next:{title:"Redis Anti-Patterns Every Developer Should Avoid",permalink:"/howtos/antipatterns/"}},d={},u=[{value:"Step 1. Install the prerequisites",id:"step-1-install-the-prerequisites",level:3},{value:"Install the below packages",id:"install-the-below-packages",level:4},{value:"Step 2. Create Redis Enterprise Cloud database",id:"step-2-create-redis-enterprise-cloud-database",level:3},{value:"Step 3. Clone the repository",id:"step-3-clone-the-repository",level:3},{value:"Step 4. Setting up environment variables",id:"step-4-setting-up-environment-variables",level:3},{value:"Step 5. Run the developer environment",id:"step-5-run-the-developer-environment",level:3},{value:"Step 6. Pull Hacker News API to seed database",id:"step-6-pull-hacker-news-api-to-seed-database",level:3},{value:"Step 7. Access the HackerNews URL",id:"step-7-access-the-hackernews-url",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"By Screens",id:"by-screens",level:4},{value:"Signup",id:"signup",level:4},{value:"Login",id:"login",level:4},{value:"Item list page",id:"item-list-page",level:4},{value:"Item Detail",id:"item-detail",level:4},{value:"Submit",id:"submit",level:4},{value:"Update Profile",id:"update-profile",level:4},{value:"Moderation Logs screen",id:"moderation-logs-screen",level:4},{value:"Search",id:"search",level:4},{value:"Example commands",id:"example-commands",level:2},{value:"There are 2 type of fields, indexed and non-indexed.",id:"there-are-2-type-of-fields-indexed-and-non-indexed",level:4},{value:"References",id:"references",level:3}],p={toc:u};function c(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{frontMatter:l,mdxType:"Authors"}),(0,r.kt)("p",null,"Hacker News (sometimes abbreviated as HN) is a social news website focusing on computer science and entrepreneurship.\nIt developed as a project of Graham's company Y Combinator, functioning as a real-world application of the Arc . programming language which Graham co-developed."),(0,r.kt)("p",null,"This is a HackerNews clone built upon React, NextJS as a frontend and NodeJS, ExpressJS & Redis as a backend.\nThis application uses RedisJSON module for storing the data and RediSearch module for searching."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hackernews",src:t(86246).Z,width:"2268",height:"1188"})),(0,r.kt)("h3",{id:"step-1-install-the-prerequisites"},"Step 1. Install the prerequisites"),(0,r.kt)("h4",{id:"install-the-below-packages"},"Install the below packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NPM v7.8.0"),(0,r.kt)("li",{parentName:"ul"},"NODE v15.10.0")),(0,r.kt)("h3",{id:"step-2-create-redis-enterprise-cloud-database"},"Step 2. Create Redis Enterprise Cloud database"),(0,r.kt)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis is popular among the developers as it delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT."),(0,r.kt)("p",null,"Redis Cloud is a fully-managed cloud service for hosting and running your Redis dataset in a highly-available and scalable manner, with predictable and stable top performance. Redis Enterprise cloud allows you to run Redis server over the Cloud and access instance via multiple ways like RedisInsight, Redis command line as well as client tools. You can quickly and easily get your apps up and running with Redis Cloud through its Redis Heroku addons , just tell us how much memory you need and get started instantly with your first Redis database. You can then add more Redis databases (each running in a dedicated process, in a non-blocking manner) and increase or decrease the memory size of your plan without affecting your existing data."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../create/rediscloud"},"Follow this link")," to create a Redis Enterprise Cloud account with 2 databases - one with the RedisJSON module and other with RediSearch (full-text search and secondary indexing) module enabled."),(0,r.kt)("p",null,"Save the database endpoint URL and password for our future reference"),(0,r.kt)("h3",{id:"step-3-clone-the-repository"},"Step 3. Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/redis-hacker-news-demo\n cd redis-hacker-news-demo\n")),(0,r.kt)("h3",{id:"step-4-setting-up-environment-variables"},"Step 4. Setting up environment variables"),(0,r.kt)("p",null,"Copy .env.sample to .env and provide the values as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," MAILGUN_API_KEY=YOUR_VALUE_HERE\n SEARCH_REDIS_SERVER_URL=redis://redis-XXXXX.c10.us-east-1-2.ec2.cloud.redislabs.com:10292\n SEARCH_REDIS_PASSWORD=ABCDXYZbPXHWsC\n JSON_REDIS_SERVER_URL=redis://redis-XXXXX.c14.us-east-1-2.ec2.cloud.redislabs.com:14054\n JSON_REDIS_PASSWORD=ABCDXYZA3tzw2XYMPi2P8UPm19D\n LOG_LEVEL=1\n USE_REDIS=1\n REDIS_REINDEX=\n PRODUCTION_WEBSITE_URL=i\n")),(0,r.kt)("h3",{id:"step-5-run-the-developer-environment"},"Step 5. Run the developer environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," npm install\n npm run dev\n")),(0,r.kt)("h3",{id:"step-6-pull-hacker-news-api-to-seed-database"},"Step 6. Pull Hacker News API to seed database"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/HackerNews/API"},"API"),", it pulls the latest hackernews data.\nNext, you need to seed top stories from hacker news. First create a moderator with moderator:password123"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," node ./backend/scripts/seed.js\n")),(0,r.kt)("h3",{id:"step-7-access-the-hackernews-url"},"Step 7. Access the HackerNews URL"),(0,r.kt)("p",null,"Open https://localhost:3001 and you should be able to access the HackerNews login screen as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hackernews",src:t(52792).Z,width:"1439",height:"786"})),(0,r.kt)("h3",{id:"how-it-works"},"How it works"),(0,r.kt)("h4",{id:"by-screens"},"By Screens"),(0,r.kt)("h4",{id:"signup"},"Signup"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Signup Screen",src:t(52792).Z,width:"1439",height:"786"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure user(where username is andy1) does not exist.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:user @username:"andy1" NOCONTENT LIMIT 0 1 SORTBY _id DESC\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get and increase the next id in users collection.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," GET user:id-indicator // 63\n INCR user:id-indicator  // 64 will be next user id, 63 is current user id\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create user:63 hash and json.(json also collects authToken and password hash etc)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  HSET user:63 username andy1 email  created 1615569194 karma 0 about  showDead false isModerator false shadowBanned false banned false _id 63\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  JSON.SET user:63 .\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' \'{"username":"andy1","password":"$2a$10$zy8tsCske8MfmDX5CcWMce5S1U7PJbPI7CfaqQ7Bo1PORDeqJxqhe","authToken":"AAV07FIwTiEkNrPj0x1yj6BPJQSGIPzV0sICw2u0","  authTokenExpiration":1647105194,"email":"","created":1615569194,"karma":0,"showDead":false,"isModerator":false,"shadowBanned":false,"banned":false,"_id":63}\'\n')),(0,r.kt)("h4",{id:"login"},"Login"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Login Screen",src:t(33369).Z,width:"1438",height:"791"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:user  @username:"andy1" NOCONTENT LIMIT 0 1 SORTBY _id DESC\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure password is correct")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," JSON.MGET user:63 .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compare password and new password hash and create cookie if it's successful")),(0,r.kt)("h4",{id:"item-list-page"},"Item list page"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Newest Screen",src:t(72513).Z,width:"1244",height:"226"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check if user has toggled hidden attribute on a specific item.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:user-hidden  @username:"andy1" NOCONTENT LIMIT 0 10000 SORTBY _id DESC\n // Result - [0, "item:4"]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If that is not null")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:item  (-(@id:"item:4")) (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY _id ASC\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If it's empty array")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:item (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY _id ASC\n // Result - [3,"item:1","item:2","item:3"]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get all items from RedisJSON")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' JSON.MGET item:1 item:2 item:3 .\n // Result - [{"id":"bkWCjcyJu5WT","by":"todsacerdoti","title":"Total Cookie\n Protection","type":"news","url":"https://blog.mozilla.org/security/2021/02/23/total-cookie-\n protection/","domain":"mozilla.org","points":1,"score":1514,"commentCount":0,"created":1614089461,"dead":false,"_id":3}]]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get items posted within last 1 week")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:item  (@created:[(1615652598 +inf]) (@dead:"false") NOCONTENT LIMIT 0 0 SORTBY _id DESC\n // Result - [13,"item:19","item:17","item:16","item:15","item:14","item:13","item:12","item:11","item:8","item:5","item:4","item:3","item:1"]\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this case, 1615652598 is a timestamp of 1 week ealier than current timestamp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," JSON.MGET item:19 item:17 item:16 item:15 item:14 item:13 item:12 item:11 item:8 item:5 item:4 item:3 item:1 .\n // Result - the JSON of selected items\n")),(0,r.kt)("h4",{id:"item-detail"},"Item Detail"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Item Detail Screen",src:t(4200).Z,width:"1223",height:"800"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the item object first")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," JSON.MGET item:1 .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find item:1 's root comments")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:comment  (@parentItemId:"kDiN0RhTivmJ") (@isParent:"true") (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY points ASC\n // Result - [3,"comment:1","comment:2","comment:12"]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get those comments")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' JSON.MGET comment:1 comment:2 comment:12 .\n // one comment example result - {"id":"jnGWS8TTOecC","by":"ploxiln","parentItemId":"kDiN0RhTivmJ","parentItemTitle":"The Framework\n Laptop","isParent":true,"parentCommentId":"","children":[13,17,20],"text":"I don&#x27;t see any mention of the firmware and drivers efforts for this.\n Firmware and drivers always end up more difficult to deal with than expected.<p>The Fairphone company was surprised by difficulties upgrading and\n patching android without support from their BSP vendor, causing many months delays of updates _and_ years shorter support life than they were\n planning for their earlier models.<p>I purchased the Purism Librem 13 laptop from their kickstarter, and they had great plans for firmware and\n drivers, but also great difficulty following through. The trackpad chosen for the first models took much longer than expected to get upstream linux\n support, and it was never great (it turned out to be impossible to reliably detect their variant automatically). They finally hired someone with\n sufficient skill to do the coreboot port _months_ after initial units were delivered, and delivered polished coreboot firmware for their initial\n laptops _years_ after they started the kickstarter.<p>So, why should we have confidence in the firmware and drivers that Framework will deliver\n :)","points":1,"created":1614274058,"dead":false,"_id":12}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using children of each comment, fetch children comments")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:comment  (@dead:"false") (@_id:("3"|"7"|"11")) NOCONTENT LIMIT 0 10000 SORTBY _id DESC\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Iterate this over until all comments are resolved")),(0,r.kt)("h4",{id:"submit"},"Submit"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Submit Screen",src:t(43048).Z,width:"1238",height:"282"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get next item's id and increase it")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," GET item:id-indicator\n // Result - 4\n SET item:id-indicator 5\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create hash and RedisJSON index")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," HSET item:4 id iBi8sU4HRcZ2 by andy1 title Firebase trends type ask url  domain  text Firebase Performance Monitoring is a service that helps you to\n gain insight into the performance characteristics of your iOS, Android, and web apps. points 1 score 0 created 1615571392 dead false _id 4\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' JSON.SET item:4 . \'{"id":"iBi8sU4HRcZ2","by":"andy1","title":"Firebase trends","type":"ask","url":"","domain":"","text":"Firebase Performance\n Monitoring is a service that helps you to gain insight into the performance characteristics of your iOS, Android, and web\n apps.","points":1,"score":0,"commentCount":0,"created":1615571392,"dead":false,"_id":4}\'\n')),(0,r.kt)("h4",{id:"update-profile"},"Update Profile"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Update Profile Screen",src:t(14530).Z,width:"1247",height:"581"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:user  (@username:"andy1") NOCONTENT LIMIT 0 1 SORTBY _id DESC\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," JSON.MGET user:63 .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update new user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," HSET user:63 username andy1 email  created 1615569194 karma 1 about I am a software engineer. showDead false isModerator false shadowBanned false\n banned false _id 63\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' JSON.SET user:63 .\n\'{"username":"andy1","password":"$2a$10$zy8tsCske8MfmDX5CcWMce5S1U7PJbPI7CfaqQ7Bo1PORDeqJxqhe","authToken":"KJwPLN1idyQrMp5qEY5hR3VhoPFTKRcC8Npxxoju","   authTokenExpiration":1647106257,"email":"","created":1615569194,"karma":1,"about":"I am a software\n engineer.","showDead":false,"isModerator":false,"shadowBanned":false,"banned":false,"_id":63}\'\n')),(0,r.kt)("h4",{id:"moderation-logs-screen"},"Moderation Logs screen"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Moderation Logs",src:t(34419).Z,width:"1259",height:"184"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find all moderation logs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:moderation-log * NOCONTENT LIMIT 0 0 SORTBY _id DESC\n  // Result - [1,"moderation-log:1"]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get that moderation logs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," JSON.MGET moderation-log:1 .\n")),(0,r.kt)("h4",{id:"search"},"Search"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search Screen",src:t(10646).Z,width:"1258",height:"341"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Get items that contains "fa"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:item  (@title:fa*) (-(@id:"aaaaaaaaa")) (@dead:"false") NOCONTENT LIMIT 0 30 SORTBY score ASC\n  // Result - [2,"item:18","item:16"]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get those items via json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," JSON.MGET item:18 item:16 .\n")),(0,r.kt)("h2",{id:"example-commands"},"Example commands"),(0,r.kt)("h4",{id:"there-are-2-type-of-fields-indexed-and-non-indexed"},"There are 2 type of fields, indexed and non-indexed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Indexed fields will be stored in hash using HSET/HGET."),(0,r.kt)("li",{parentName:"ol"},"Non-indexed fields will be stored in RedisJSON.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create RediSearch Index")),(0,r.kt)("p",null,"When schema is created, it should created index."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.CREATE idx:user ON hash PREFIX 1 "user:" SCHEMA username TEXT SORTABLE email TEXT SORTABLE karma NUMERIC SORTABLE\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drop RediSearch Index")),(0,r.kt)("p",null,"Should drop/update index if the schema has changed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," FT.DROPINDEX idx:user\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get RediSearch Info")),(0,r.kt)("p",null,"Validate if the fields are indexed properly. If not, it will update the index fields or drop/recreate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," FT.INFO idx:user\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new user")),(0,r.kt)("p",null,"It will require new hash and new JSON record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' HSET user:andy username "andy" email "andy@gmail.com" karma 0\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' JSON.SET user:andy \'{"passoword": "hashed_password", "settings": "{ \\"showDead\\": true }" }\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update a user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' HSET user:1 username "newusername"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' JSON.SET user:andy username "newusername"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find user with username 'andy'")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the user's hash first")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," FT.SEARCH idx:user '@username:{andy}'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Fetch the JSON object to get the related JSON object")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," JSON.GET user:andy\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find user whose id is andy1 or andy2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:user \'@id:("andy1"|"andy2")\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find user whose id is not andy1 or andy2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:user \'(-(@id:("andy1"|"andy2")))\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find user whose id is andy1 or username is andy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:user \'(@id:"andy1") | (@username:"andy")\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find user whose id is andy1 and username is andy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' FT.SEARCH idx:user \'(@id:"andy1") (@username:"andy")\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find first 10 users order by username")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," FT.SEARCH idx:user '*' LIMIT 0 10 SORTBY username ASC\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find next 10 users")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," FT.SEARCH idx:user '*' LIMIT 10 20 SORTBY username ASC\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get from RedisJson from multiple keys")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' JSON.MGET idx:user "andy1" "andy2" "andy3"\n')),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/redisjson/using-python"},"RedisJSON and Python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/redisjson/storing-complex-json-document"},"How to store and retrieve nested JSON document")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/redisjson/using-nodejs"},"Importing JSON data into Redis using NodeJS")),(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisjson/"},"RedisJSON")," in the Quickstart tutorial."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/shoppingcart"},"How to build shopping cart app using NodeJS and RedisJSON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/blog/index-and-query-json-docs-with-redis/"},"Indexing, Querying, and Full-Text Search of JSON Documents with Redis"))))}c.isMDXComponent=!0},86246:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/hackernews-974e3026a35651a1790714fa7f947184.png"},34419:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/moderation-logs-0c7f3ba0bdde08ee517b934ba044a8d9.png"},4200:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/screenshot-item-detail-a9ebbf8ae72d8af6b48c45163f524ce8.png"},33369:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/screenshot-login-2b5a07f61355ab0dfc9a8d3f1dcec528.png"},72513:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/screenshot-newest-776786b42d1ae7703a3fde07205bb331.png"},10646:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/screenshot-search-e782083909b3aa74751ef1e8976e20ce.png"},52792:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/screenshot-signup-8caa71d43eb218ac98130e6e5114b1bd.png"},43048:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/screenshot-submit-12e6b9a754af39610ac2d543d20eb095.png"},14530:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/screenshot-update-profile-1e16d2b9d87668fac47f2bf8f621fba0.png"}}]);