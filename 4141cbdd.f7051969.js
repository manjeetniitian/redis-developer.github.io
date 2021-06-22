(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(203)),s=(n(204),{id:"index-redisearch",title:"Indexing and Querying with RediSearch",sidebar_label:"RediSearch",slug:"/develop/node/nodecrashcourse/redisearch"}),o={unversionedId:"develop/node/node-crash-course/redisearch/index-redisearch",id:"develop/node/node-crash-course/redisearch/index-redisearch",isDocsHomePage:!1,title:"Indexing and Querying with RediSearch",description:"We chose to store our user and location data in Redis Hashes.  Hashes are a great fit for storing domain objects.  Recall that we've chosen to store each user in a Hash whose key contains the user ID.  For example, here's user 852 as seen in RedisInsight:",source:"@site/docs/develop/node/node-crash-course/redisearch/index-redisearch.mdx",slug:"/develop/node/nodecrashcourse/redisearch",permalink:"/develop/node/nodecrashcourse/redisearch",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/redisearch/index-redisearch.mdx",version:"current",sidebar_label:"RediSearch",sidebar:"docs",previous:{title:"Managing Document Data with RedisJSON",permalink:"/develop/node/nodecrashcourse/redisjson"},next:{title:"Processing Checkins with Redis Streams",permalink:"/develop/node/nodecrashcourse/checkinswithstreams"}},c=[{value:"Coding Exercise",id:"coding-exercise",children:[]},{value:"External Resources",id:"external-resources",children:[]}],l={toc:c};function d(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/HPvP_OJ7h2Q",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"We chose to store our user and location data in Redis Hashes.  Hashes are a great fit for storing domain objects.  Recall that we've chosen to store each user in a Hash whose key contains the user ID.  For example, here's user 852 as seen in RedisInsight:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"User 852 viewed with RedisInsight",src:n(423).default})),Object(i.b)("p",null,"If you're using redis-cli, you can look at user 852 with the ",Object(i.b)("inlineCode",{parentName:"p"},"HGETALL")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> hgetall ncc:users:852\n 1) "id"\n 2) "852"\n 3) "firstName"\n 4) "Dominik"\n 5) "lastName"\n 6) "Schiffmann"\n 7) "email"\n 8) "dominik.schiffmann@example.com"\n 9) "password"\n10) "$2b$05$xbkSwODz1tWqdE7xWb393eiYIQcdiEdbbvhK88.Xr9sW7WxdI26qi"\n11) "numCheckins"\n12) "9353"\n13) "lastCheckin"\n14) "1488517098363"\n15) "lastSeenAt"\n16) "124"\n')),Object(i.b)("p",null,"Storing data in Hashes means that we can easily and efficiently retrieve the contents of the Hash, provided that we know the key.  So it's trivial to look up user 852, but how can we perform any of the following operations?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get the user whose email address is ",Object(i.b)("inlineCode",{parentName:"li"},"dominik.schiffmann@example.com"),"."),Object(i.b)("li",{parentName:"ul"},"Find all users that were last seen at location 124."),Object(i.b)("li",{parentName:"ul"},"Find all the users who have between 1000 and 3000 checkins."),Object(i.b)("li",{parentName:"ul"},"Find all locations within a 10 mile radius of a given latitude / longitude coordinate and which have at least a 3 star rating.")),Object(i.b)("p",null,"Redis is a key/value database.  This means that its data model is optimized for retrieval by key.  The queries above can't be resolved by knowing just the Hash key - we need some other mechanism to index our data.  "),Object(i.b)("p",null,'Traditionally in a key/value database, this has meant adding code to create and manually update indexes.  For example to resolve the query "which user has the email address ',Object(i.b)("inlineCode",{parentName:"p"},"dominik.schiffmann@example.com"),"\", we might create a new String key containing that email address, with the value being the user's ID:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> set ncc:users:byemail:dominik.schiffmann@example.com 852\nOK\n")),Object(i.b)("p",null,"Now, if we want to get Dominik's user details given only his email address, we have a two step process to follow:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Look up the user ID for the user associated with the email address we have."),Object(i.b)("li",{parentName:"ol"},"Use that user ID to retrieve the values from the user's Hash.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> get ncc:users:byemail:dominik.schiffmann@example.com\n"852"\n127.0.0.1:6379> hgetall ncc:users:852\n 1) "id"\n 2) "852"\n 3) "firstName"\n 4) "Dominik"\n 5) "lastName"\n 6) "Schiffmann"\n 7) "email"\n 8) "dominik.schiffmann@example.com"\n 9) "password"\n10) "$2b$05$xbkSwODz1tWqdE7xWb393eiYIQcdiEdbbvhK88.Xr9sW7WxdI26qi"\n11) "numCheckins"\n12) "9353"\n13) "lastCheckin"\n14) "1488517098363"\n15) "lastSeenAt"\n16) "124"\n')),Object(i.b)("p",null,"We'd also need to keep this information up to date and in sync with changes to the Hash at ",Object(i.b)("inlineCode",{parentName:"p"},"ncc:users:852")," ourselves in our application code. "),Object(i.b)("p",null,"Other sorts of secondary indexes can be created using other Redis data types.  For example, we might ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/topics/indexes"}),"use a Redis Sorted Set as a secondary index"),', allowing us to perform range queries such as "Find all the users who have between 1000 and 3000 checkins".  Again, we\'d have to populate and maintain this extra data structure ourselves in the application code.'),Object(i.b)("p",null,'The RediSearch module solves all of these problems for us and more.  It is an indexing, querying and full-text search engine for Redis that automatically keeps track of changes to data in indexed Hashes.  RediSearch provides a flexible query language to answer questions such as "Find me all the gyms with at least a 3 star rating and more than 200 checkins within 10 miles of Oakland, California" without adding code to build or maintain secondary data structures in our application.'),Object(i.b)("p",null,"Watch the video to see how RediSearch is used in our example Node.js application."),Object(i.b)("h2",{id:"coding-exercise"},"Coding Exercise"),Object(i.b)("p",null,"In this exercise, you'll finish implementing a route that uses RediSearch to return all users whose last checkin was at a given location."),Object(i.b)("p",null,"Open the ",Object(i.b)("inlineCode",{parentName:"p"},"node-js-crash-course")," folder with your IDE, and find the file ",Object(i.b)("inlineCode",{parentName:"p"},"src/routes/user_routes.js"),"."),Object(i.b)("p",null,"In this file, you'll see a partly implemented route ",Object(i.b)("inlineCode",{parentName:"p"},"/users/at/:locationId"),".  To complete this exercise, you'll need to replace this line:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const searchResults = await redis.performSearch(\n  redis.getKeyName('usersidx'),\n  'TODO... YOUR QUERY HERE',\n);\n")),Object(i.b)("p",null,'with one containing the correct RediSearch query to return users whose "lastSeenAt" field is set to the value of locationId.  You\'ll need to use the "numeric range" syntax for this, as the "lastSeenAt" field was indexed as a number.  Be sure to check out the ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redislabs.com/redisearch/Query_Syntax/"}),"Query Syntax documentation")," for RediSearch to get help with this."),Object(i.b)("p",null,"To try your code, ensure that the API Server component is running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"$ npm run dev\n")),Object(i.b)("p",null,"(remember, this will use nodemon to restart the server any time you save a code change)."),Object(i.b)("p",null,"Then, point your browser at ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:8081/api/users/at/33"),".  If your query is correct, you should see output similar to the following (actual users may differ, just ensure that the value of ",Object(i.b)("inlineCode",{parentName:"p"},"lastSeenAt")," for each matches the location ID you provided - 33 in this case):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": "238",\n    "firstName": "Jonas",\n    "lastName": "Nielsen",\n    "numCheckins": "7149",\n    "lastCheckin": "1515248028256",\n    "lastSeenAt": "33"\n  },\n  {\n    "id": "324",\n    "firstName": "Frans",\n    "lastName": "Potze",\n    "numCheckins": "8623",\n    "lastCheckin": "1515976232073",\n    "lastSeenAt": "33"\n  },\n  ...\n]\n')),Object(i.b)("p",null,"To help you develop your query, use the RediSearch view in RedisInsight, or the FT.SEARCH command in redis-cli.  Here's an example of how to enter a query with RedisInsight (I'm looking for users with the first name \"Laura\"):"),Object(i.b)("p",null,Object(i.b)("img",{alt:"RediSearch Query Example",src:n(424).default})),Object(i.b)("p",null,"Remember to select the ",Object(i.b)("inlineCode",{parentName:"p"},"ncc:usersidx")," index, as you're working with users data here."),Object(i.b)("h2",{id:"external-resources"},"External Resources"),Object(i.b)("p",null,"Querying, Index, and Full-Text Search in Redis:"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/B10nHEdW3NA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"Finding Bigfoot RESTfuly with Express + RediSearch:"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/eJFwsNfi_MI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"Other resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://university.redislabs.com/courses/ru203/"}),"RU203, Querying, Indexing, and Full-Text Search")," at Redis University "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://redisearch.io/"}),"RediSearch"),", official home page"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/RediSearch/redisearch-getting-started"}),"RediSearch Getting Started Tutorial"))))}d.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,p=u["".concat(s,".").concat(b)]||u[b]||h[b]||i;return n?r.a.createElement(p,o(o({ref:t},l),{},{components:n})):r.a.createElement(p,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(21),r=n(212);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,s=i.forcePrependBaseUrl,o=void 0!==s&&s,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(i,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},212:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},423:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/insight_user_852-a8c42050d96696573fac10e960edb705.png"},424:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/redisearch_redis_insight-3d7b8c7eb4f04839f36ddfced33c908c.png"}}]);