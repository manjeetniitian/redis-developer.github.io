"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),i=n(52263);const a="authorByline_VoxI",l="authorLabel_a70t",o="authorProfileImage_URwT";const s=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,i.Z)(),s=n.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:a},r.createElement("img",{className:o,src:`/img/${s[e].image?s[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${s[e].name}`}),r.createElement("div",null,r.createElement("div",{className:l},"Author:"),r.createElement("div",null,r.createElement("a",{href:s[e].link,target:"_blank"},s[e].name),", ",s[e].title))))),r.createElement("hr",null)))}},6926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(50358);const l={id:"index-php",title:"PHPRedis - Redis client library for PHP",sidebar_label:"PHP",slug:"/develop/php/",authors:["ajeet"]},o=void 0,s={unversionedId:"develop/php/index-php",id:"develop/php/index-php",title:"PHPRedis - Redis client library for PHP",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and PHP.",source:"@site/docs/develop/php/index-php.mdx",sourceDirName:"develop/php",slug:"/develop/php/",permalink:"/develop/php/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/php/index-php.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-php",title:"PHPRedis - Redis client library for PHP",sidebar_label:"PHP",slug:"/develop/php/",authors:["ajeet"]},sidebar:"docs",previous:{title:"Ruby",permalink:"/develop/ruby/"},next:{title:"Deno",permalink:"/develop/deno/"}},p={},d=[{value:"Getting Started",id:"getting-started",level:3},{value:"Step 1. Run a Redis server",id:"step-1-run-a-redis-server",level:4},{value:"Step 2. Get pecl",id:"step-2-get-pecl",level:3},{value:"Step 3. Install PhpRedis",id:"step-3-install-phpredis",level:3},{value:"Step 4. Opening a Connection to Redis Using PhpRedis",id:"step-4-opening-a-connection-to-redis-using-phpredis",level:3},{value:"Step 5. Executing the script",id:"step-5-executing-the-script",level:3},{value:"Further Reference:",id:"further-reference",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{frontMatter:l,mdxType:"Authors"}),(0,i.kt)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and PHP."),(0,i.kt)("h3",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"In order to use Redis with PHP you will need a PHP Redis client. In the following sections, we will demonstrate the use of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/phpredis/phpredis"},"PhpRedis"),", a flexible and feature-complete Redis client library for PHP. Additional ",(0,i.kt)("a",{parentName:"p",href:"http://redis.io/clients#PHP"},"PHP clients")," for Redis can be found under the PHP section of the Redis Clients page."),(0,i.kt)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT."),(0,i.kt)("h4",{id:"step-1-run-a-redis-server"},"Step 1. Run a Redis server"),(0,i.kt)("p",null,"You can either run Redis server in a Docker container or directly on your machine. Follow the below command to setup a Redis server locally on Mac OS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),(0,i.kt)("admonition",{title:"INFO",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Redis Stack unifies and simplifies the developer experience of the leading Redis modules and the capabilities they provide. Redis Stack bundles five Redis modules: RedisJSON, RedisSearch, RedisGraph, RedisTimeSeries, and RedisBloom.\n",(0,i.kt)("a",{parentName:"p",href:"/create/redis-stack"},"Learn more"))),(0,i.kt)("p",null,"Ensure that you are able to use the following Redis command to connect to the Redis instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli -h localhost -p 6379\n localhost>\n")),(0,i.kt)("p",null,"Now you should be able to perform CRUD operations with Redis keys. The above Redis client command might require password if you have setup authentication in your Redis configuration file. If a Redis password is not set, then it will perform the default connection to Redis server. You can play around inserting data to Redis using ",(0,i.kt)("inlineCode",{parentName:"p"},"SET")," and then fetching it back with the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," command."),(0,i.kt)("h3",{id:"step-2-get-pecl"},"Step 2. Get pecl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apt install pkg-php-tools\n")),(0,i.kt)("h3",{id:"step-3-install-phpredis"},"Step 3. Install PhpRedis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pecl install redis\n")),(0,i.kt)("h3",{id:"step-4-opening-a-connection-to-redis-using-phpredis"},"Step 4. Opening a Connection to Redis Using PhpRedis"),(0,i.kt)("p",null,"The following code creates a connection to Redis using PhpRedis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$redis = new Redis();\n//Connecting to Redis\n$redis->connect('hostname', port);\n$redis->auth('password');\n\nif ($redis->ping()) {\n echo \"PONG\";\n}\n\n?>\n")),(0,i.kt)("p",null,"Replace the following values with those of your database and save this file as ",(0,i.kt)("inlineCode",{parentName:"p"},"connect.php"),"."),(0,i.kt)("h3",{id:"step-5-executing-the-script"},"Step 5. Executing the script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php connect.php\n")),(0,i.kt)("p",null,'It should display "PONG" as output. You can verify this by running the monitor command'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'127.0.0.1:6379> monitor\nOK\n1614778301.165001 [0 [::1]:57666] "PING"\n')),(0,i.kt)("h3",{id:"further-reference"},"Further Reference:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redis-php-getting-started/"},"Getting Started with Redis & PHP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nrk/phpiredis"},"PHP extension for Redis based on Hiredis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ronnylt/redlock-php"},"Redis distributed locks in PHP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/phpredis/phpredis/blob/develop/cluster.markdown#redis-cluster"},"Support for Redis Cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/phpredis/phpredis/blob/develop/sentinel.markdown#readme"},"Support for Redis Sentinel"))),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,i.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}u.isMDXComponent=!0}}]);