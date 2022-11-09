"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4821],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),l=a(72389),s=a(67392),o=a(7094),p=a(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:m,groupId:h,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[N,R]=(0,r.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&R(e)}const E=e=>{const t=e.currentTarget,a=S.indexOf(t),n=v[a].value;n!==N&&(_(t),R(n),null!=h&&w(h,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},k)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:I,onClick:E},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},50358:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(52263);const i="authorByline_VoxI",l="authorLabel_a70t",s="authorProfileImage_URwT";const o=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,r.Z)(),o=a.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:i},n.createElement("img",{className:s,src:`/img/${o[e].image?o[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${o[e].name}`}),n.createElement("div",null,n.createElement("div",{className:l},"Author:"),n.createElement("div",null,n.createElement("a",{href:o[e].link,target:"_blank"},o[e].name),", ",o[e].title))))),n.createElement("hr",null)))}},56439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(65488),l=a(85162),s=a(50358);const o={id:"index-ratelimiting",title:"How to build a Rate Limiter using Redis",sidebar_label:"How to build a Rate Limiter using Redis",slug:"/howtos/ratelimiting",authors:["ajeet"]},p=void 0,d={unversionedId:"howtos/ratelimiting/index-ratelimiting",id:"howtos/ratelimiting/index-ratelimiting",title:"How to build a Rate Limiter using Redis",description:"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code.",source:"@site/docs/howtos/ratelimiting/index-ratelimiting.mdx",sourceDirName:"howtos/ratelimiting",slug:"/howtos/ratelimiting",permalink:"/howtos/ratelimiting",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/ratelimiting/index-ratelimiting.mdx",tags:[],version:"current",lastUpdatedAt:1667845417,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"index-ratelimiting",title:"How to build a Rate Limiter using Redis",sidebar_label:"How to build a Rate Limiter using Redis",slug:"/howtos/ratelimiting",authors:["ajeet"]},sidebar:"docs",previous:{title:"How to build a Real-Time Leaderboard app Using Redis",permalink:"/howtos/leaderboard"},next:{title:"How to cache REST API responses Using Redis & NodeJS",permalink:"/howtos/caching"}},u={},c=[{value:"Using Python",id:"using-python",level:2},{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3. Run docker compose or install redis manually",id:"step-3-run-docker-compose-or-install-redis-manually",level:3},{value:"Step 4. Setup and run",id:"step-4-setup-and-run",level:3},{value:"How it works?",id:"how-it-works",level:4},{value:"How the data is stored:",id:"how-the-data-is-stored",level:4},{value:"How the data is accessed:",id:"how-the-data-is-accessed",level:4},{value:"Using NodeJS",id:"using-nodejs",level:2},{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite-1",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository-1",level:3},{value:"Step 3. Copy file and set proper data inside",id:"step-3-copy-file-and-set-proper-data-inside",level:3},{value:"Step 4. Install dependencies",id:"step-4-install-dependencies",level:3},{value:"Step 5. Run docker compose or install redis manually",id:"step-5-run-docker-compose-or-install-redis-manually",level:3},{value:"Step 6. Running the frontend",id:"step-6-running-the-frontend",level:3},{value:"Step 7. Running the backend",id:"step-7-running-the-backend",level:3},{value:"Step 8. Accessing the rate limiting app",id:"step-8-accessing-the-rate-limiting-app",level:3},{value:"Using Java",id:"using-java",level:2},{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite-2",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository-2",level:3},{value:"Step 3. Run docker compose or install redis manually",id:"step-3-run-docker-compose-or-install-redis-manually-1",level:3},{value:"Step 4. Setting up environment variables",id:"step-4-setting-up-environment-variables",level:3},{value:"Step 5. Setup and run",id:"step-5-setup-and-run",level:3},{value:"Step 6. Accessing the rate limiting app",id:"step-6-accessing-the-rate-limiting-app",level:3},{value:"Using Ruby",id:"using-ruby",level:2},{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite-3",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository-3",level:3},{value:"Step 3. Copy files and set proper data inside",id:"step-3-copy-files-and-set-proper-data-inside",level:3},{value:"Step 4. Install dependencies",id:"step-4-install-dependencies-1",level:3},{value:"Step 5. Run Redis Docker container",id:"step-5-run-redis-docker-container",level:3},{value:"Step 6. Running the app",id:"step-6-running-the-app",level:3},{value:"Step 7. Accessing the app",id:"step-7-accessing-the-app",level:3},{value:"How it works?",id:"how-it-works-1",level:3},{value:"Code to configure rack-defence",id:"code-to-configure-rack-defence",level:4},{value:"How the data is stored:",id:"how-the-data-is-stored-1",level:4},{value:"How the data is accessed:",id:"how-the-data-is-accessed-1",level:4},{value:"References",id:"references",level:3}],m={toc:c};function h(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{frontMatter:o,mdxType:"Authors"}),(0,r.kt)("p",null,"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/_mFWjk7ONa8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("p",null,"In this tutorial, we will see how to implement Rate Limiting using various programming languages:"),(0,r.kt)(i.Z,{defaultValue:"Python",values:[{label:"Python",value:"Python"},{label:"NodeJS",value:"NodeJS"},{label:"Java",value:"Java"},{label:"Ruby",value:"Ruby"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("h2",{id:"using-python"},"Using Python"),(0,r.kt)("h3",{id:"step-1-pre-requisite"},"Step 1. Pre-requisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python"),(0,r.kt)("li",{parentName:"ul"},"Docker"),(0,r.kt)("li",{parentName:"ul"},"Docker Compose")),(0,r.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/basic-rate-limiting-demo-python\n")),(0,r.kt)("h3",{id:"step-3-run-docker-compose-or-install-redis-manually"},"Step 3. Run docker compose or install redis manually"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker network create global\ndocker-compose up -d --build\n")),(0,r.kt)("p",null,"If you install redis manually open django-backend/configuration folder and copy ",(0,r.kt)("inlineCode",{parentName:"p"},".env.example")," to create ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),". And provide the values for environment variables - REDIS_HOST: Redis server host - REDIS_PORT: Redis server port - REDIS_DB: Redis server db index - REDIS_PASSWORD: Redis server password"),(0,r.kt)("h3",{id:"step-4-setup-and-run"},"Step 4. Setup and run"),(0,r.kt)("p",null,"Install python, pip and venv (on mac: ",(0,r.kt)("a",{parentName:"p",href:"https://installpython3.com/mac/"},"https://installpython3.com/mac/"),")"),(0,r.kt)("p",null,"Use python version: 3.8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 -m venv venv\nsource ./venv/bin/activate\npip3 install -r requirements.txt\npython3 manage.py collectstatic\npython3 manage.py runserver\n")),(0,r.kt)("p",null,"Step 5. Accessing the rate limiting app"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limiting",src:a(21262).Z,width:"1518",height:"1016"})),(0,r.kt)("h4",{id:"how-it-works"},"How it works?"),(0,r.kt)("h4",{id:"how-the-data-is-stored"},"How the data is stored:"),(0,r.kt)("p",null,"This app will block connections from a client after surpassing certain amount of requests (default: 10) per time (default: 10 sec)\nThe application will return after each request the following headers. That will let the user know how many requests they have remaining before the run over the limit.\nOn the 10th run server should return an HTTP status code of 429 Too Many Requests"),(0,r.kt)("p",null,'SETNX is short for "SET if Not eXists". It basically sets key to hold string value if key does not exist. In that case, it is equal to SET.\nWhen key already holds a value, no operation is performed. New responses are added key-ip as shown below:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," SETNX your_ip:PING limit_amount\n Example: SETNX 127.0.0.1:PING 10\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/setnx"},"More information")),(0,r.kt)("p",null,"Set a timeout on key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," EXPIRE your_ip:PING timeout\n Example: EXPIRE 127.0.0.1:PING 1000\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/expire"},"More information")),(0,r.kt)("h4",{id:"how-the-data-is-accessed"},"How the data is accessed:"),(0,r.kt)("p",null,"Next responses are get bucket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," GET your_ip:PING\n Example: GET 127.0.0.1:PING\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/get"},"More information")),(0,r.kt)("p",null,"Next responses are changed bucket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," DECRBY your_ip:PING amount\n Example: DECRBY 127.0.0.1:PING 1\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/decrby"},"More information"))),(0,r.kt)(l.Z,{value:"NodeJS",mdxType:"TabItem"},(0,r.kt)("h2",{id:"using-nodejs"},"Using NodeJS"),(0,r.kt)("h3",{id:"step-1-pre-requisite-1"},"Step 1. Pre-requisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node - v12.19.0"),(0,r.kt)("li",{parentName:"ul"},"NPM - v6.14.8"),(0,r.kt)("li",{parentName:"ul"},"Docker - v19.03.13 (optional)")),(0,r.kt)("h3",{id:"step-2-clone-the-repository-1"},"Step 2. Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs/\n")),(0,r.kt)("h3",{id:"step-3-copy-file-and-set-proper-data-inside"},"Step 3. Copy file and set proper data inside"),(0,r.kt)("p",null,"Copy .env.example to .env and make the changes as per your environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"REDIS_ENDPOINT_URI: Redis server URI"),(0,r.kt)("li",{parentName:"ul"},"REDIS_PASSWORD: Password to the server")),(0,r.kt)("h3",{id:"step-4-install-dependencies"},"Step 4. Install dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," npm cache clean && npm install\n")),(0,r.kt)("h3",{id:"step-5-run-docker-compose-or-install-redis-manually"},"Step 5. Run docker compose or install redis manually"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker network create global\n docker-compose up -d --build\n")),(0,r.kt)("h3",{id:"step-6-running-the-frontend"},"Step 6. Running the frontend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," cd client\n yarn\n yarn serve\n")),(0,r.kt)("h3",{id:"step-7-running-the-backend"},"Step 7. Running the backend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," npm run dev\n")),(0,r.kt)("h3",{id:"step-8-accessing-the-rate-limiting-app"},"Step 8. Accessing the rate limiting app"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limiting",src:a(21262).Z,width:"1518",height:"1016"}))),(0,r.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("h2",{id:"using-java"},"Using Java"),(0,r.kt)("h3",{id:"step-1-pre-requisite-2"},"Step 1. Pre-requisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java"),(0,r.kt)("li",{parentName:"ul"},"Docker"),(0,r.kt)("li",{parentName:"ul"},"Docker Compose")),(0,r.kt)("h3",{id:"step-2-clone-the-repository-2"},"Step 2. Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://github.com/redis-developer/basic-rate-limiting-demo-java\n")),(0,r.kt)("h3",{id:"step-3-run-docker-compose-or-install-redis-manually-1"},"Step 3. Run docker compose or install redis manually"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker network create global\ndocker-compose up -d --build\n")),(0,r.kt)("h3",{id:"step-4-setting-up-environment-variables"},"Step 4. Setting up environment variables"),(0,r.kt)("p",null,"Open directory server (",(0,r.kt)("inlineCode",{parentName:"p"},"cd server``): copy "),".env.example",(0,r.kt)("inlineCode",{parentName:"p"},"to create"),".env` and provide the values for environment variables (if needed)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- REDIS_URL: Redis server url\n- REDIS_HOST: Redis server host\n- REDIS_PORT: Redis server port\n- REDIS_DB: Redis server db index\n- REDIS_PASSWORD: Redis server password\n")),(0,r.kt)("h3",{id:"step-5-setup-and-run"},"Step 5. Setup and run"),(0,r.kt)("p",null,"Install gradle (on mac: ",(0,r.kt)("a",{parentName:"p",href:"https://gradle.org/install/"},"https://gradle.org/install/"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install gradle\n")),(0,r.kt)("p",null,"Install JDK (on mac: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"},"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd server\nexport $(cat .env | xargs)\n./gradlew build\n./gradlew run\n")),(0,r.kt)("h3",{id:"step-6-accessing-the-rate-limiting-app"},"Step 6. Accessing the rate limiting app"),(0,r.kt)("p",null,"Point your browser to http://IP:5000 and you will be able to select various requests per second option on the screen. As shown in the above example, the server will allow sending max 10 API requests within a 10 second window.If you send more than that, all additional requests will be blocked"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limiting",src:a(21262).Z,width:"1518",height:"1016"}))),(0,r.kt)(l.Z,{value:"Ruby",mdxType:"TabItem"},(0,r.kt)("h2",{id:"using-ruby"},"Using Ruby"),(0,r.kt)("p",null,"The server will allow sending particular number of requests (permitted_requests_count stored in Redis) within a 10 second window. If you send more than that, all additional requests will be blocked."),(0,r.kt)("h3",{id:"step-1-pre-requisite-3"},"Step 1. Pre-requisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ruby - v2.7.0"),(0,r.kt)("li",{parentName:"ul"},"Rails - v5.2.4.5"),(0,r.kt)("li",{parentName:"ul"},"NPM - v7.6.0")),(0,r.kt)("h3",{id:"step-2-clone-the-repository-3"},"Step 2. Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-ruby/\n")),(0,r.kt)("h3",{id:"step-3-copy-files-and-set-proper-data-inside"},"Step 3. Copy files and set proper data inside"),(0,r.kt)("p",null,"Copy config/application.yml.example to config/application.yml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," cp config/application.yml.example config/application.yml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," - REDIS_URL: Redis server URI\n")),(0,r.kt)("h3",{id:"step-4-install-dependencies-1"},"Step 4. Install dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," bundle install\n")),(0,r.kt)("h3",{id:"step-5-run-redis-docker-container"},"Step 5. Run Redis Docker container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -p 6379:6379 redis/redis-stack:latest\n")),(0,r.kt)("h3",{id:"step-6-running-the-app"},"Step 6. Running the app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," rails s\n")),(0,r.kt)("h3",{id:"step-7-accessing-the-app"},"Step 7. Accessing the app"),(0,r.kt)("p",null,"Go to the browser and type https://localhost:3000 to access the app"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rate-limiting",src:a(22079).Z,width:"1680",height:"886"})),(0,r.kt)("h3",{id:"how-it-works-1"},"How it works?"),(0,r.kt)("p",null,"This app was built using rack-defense gem which will block connections from a client after surpassing certain amount of requests (permitted_requests_count, default: 10) per time (10 seconds)."),(0,r.kt)("h4",{id:"code-to-configure-rack-defence"},"Code to configure rack-defence"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"}," Rack::Defense.setup do |config|\n config.store = ENV['REDIS_URL']\n\n permitted_requests_count = config.store.get('permitted_requests_count')\n\n if permitted_requests_count.present?\n   permitted_requests_count = permitted_requests_count.to_i\n else\n   config.store.set('permitted_requests_count', 10)\n end\n\n # 10000 - time, ms\n # || 10 - to avoid ArgumentError on first run\n config.throttle('ping', permitted_requests_count || 10, 10000) do |req|\n   req.ip if req.path == '/ping' && req.get?\n  end\n end\n")),(0,r.kt)("p",null,"The application will return response headers after each successful request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"}," # example\n X-RateLimit-Limit: 10\n X-RateLimit-Remaining: 9\n")),(0,r.kt)("p",null,"The application will also return request header after each request (including blocking requests) with count of remaining requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"}," # example\n RateLimit-Remaining: 1\n")),(0,r.kt)("h4",{id:"how-the-data-is-stored-1"},"How the data is stored:"),(0,r.kt)("p",null,"The permitted_requests_count is stored in Redis store in string format. By default, it's 10. You can set new VALUE with these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"}," SET permitted_requests_count VALUE\n INCR permitted_requests_count\n DECR permitted_requests_count\n")),(0,r.kt)("p",null,"IMPORTANT! For the new permitted_requests_count value to take effect you need to restart an app (rails) server after these commands."),(0,r.kt)("h4",{id:"how-the-data-is-accessed-1"},"How the data is accessed:"),(0,r.kt)("p",null,"You can get permitted_requests_count with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"}," GET permitted_requests_count\n")))),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/redis-best-practices/basic-rate-limiting/"},"Basic Rate Limiting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/webinars-on-demand/rate-limiting-with-redis/"},"Rate Limiting with Redis Webinar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.infoworld.com/article/3230455/how-to-use-redis-for-real-time-metering-applications.html"},"How to use Redis for real-time metering applications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/blog/redis-cell-rate-limiting-redis-module/"},"redis-cell: a Rate Limiting Redis Module"))),(0,r.kt)("h2",{id:""}),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,r.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}h.isMDXComponent=!0},21262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ratelimiting-0a76b60e4b3861e1190062d5029b86d9.png"},22079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ratelimitingruby-b070cac0e44ad0b8d7e38ca2b3aad174.png"}}]);