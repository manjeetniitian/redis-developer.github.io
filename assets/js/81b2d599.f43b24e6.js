"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3892],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,g=h["".concat(l,".").concat(c)]||h[c]||u[c]||i;return r?a.createElement(g,s(s({ref:t},d),{},{components:r})):a.createElement(g,s({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50358:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(52263);const i="authorByline_VoxI",s="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:r}=(0,n.Z)(),l=r.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:i},a.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:s},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},74789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),i=r(50358);const s={id:"index-usinggo",title:"How to query Graph data in Redis using Go",sidebar_label:"RedisGraph and Go",slug:"/howtos/redisgraph/using-go",authors:["ajeet"]},o=void 0,l={unversionedId:"howtos/redisgraph/using-go/index-usinggo",id:"howtos/redisgraph/using-go/index-usinggo",title:"How to query Graph data in Redis using Go",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-go/index-usinggo.mdx",sourceDirName:"howtos/redisgraph/using-go",slug:"/howtos/redisgraph/using-go",permalink:"/howtos/redisgraph/using-go",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-go/index-usinggo.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-usinggo",title:"How to query Graph data in Redis using Go",sidebar_label:"RedisGraph and Go",slug:"/howtos/redisgraph/using-go",authors:["ajeet"]},sidebar:"docs",previous:{title:"RedisGraph and JavaScript",permalink:"/howtos/redisgraph/using-javascript"},next:{title:"RedisGraph and Rust",permalink:"/howtos/redisgraph/using-rust"}},p={},d=[{value:"RedisGraph Go Client",id:"redisgraph-go-client",level:2},{value:"Step 1. Run Redis Stack Docker container",id:"step-1-run-redis-stack-docker-container",level:3},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",level:3},{value:"Step 3. Loading the RedisGraph Module",id:"step-3-loading-the-redisgraph-module",level:3},{value:"Step 4. Clone the repository",id:"step-4-clone-the-repository",level:3},{value:"Step 5. Running the Test suite",id:"step-5-running-the-test-suite",level:3},{value:"Step 6. Running the Go Program",id:"step-6-running-the-go-program",level:3},{value:"Step 7. Monitor the Graph query",id:"step-7-monitor-the-graph-query",level:3},{value:"Step 8. Install RedisInsight",id:"step-8-install-redisinsight",level:3},{value:"Step 9. Accessing RedisInsight",id:"step-9-accessing-redisinsight",level:3},{value:"Step 10. Run the Graph Query",id:"step-10-run-the-graph-query",level:3},{value:"References",id:"references",level:3}],u={toc:d};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{frontMatter:s,mdxType:"Authors"}),(0,n.kt)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),(0,n.kt)("h2",{id:"redisgraph-go-client"},"RedisGraph Go Client"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"redisgraph-go")," is a Golang client for the RedisGraph module. It relies on redigo for Redis connection management and provides support for RedisGraph's QUERY, EXPLAIN, and DELETE commands."),(0,n.kt)("p",null,"Follow the steps below to get started with RedisGraph with Go:"),(0,n.kt)("h3",{id:"step-1-run-redis-stack-docker-container"},"Step 1. Run Redis Stack Docker container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 --name redis/redis-stack\n")),(0,n.kt)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),(0,n.kt)("h3",{id:"step-3-loading-the-redisgraph-module"},"Step 3. Loading the RedisGraph Module"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," go get github.com/redislabs/redisgraph-go\n")),(0,n.kt)("h3",{id:"step-4-clone-the-repository"},"Step 4. Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/RedisGraph/redisgraph-go\n")),(0,n.kt)("h3",{id:"step-5-running-the-test-suite"},"Step 5. Running the Test suite"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"}," go test\n found packages redisgraph (client_test.go) and main (main.go) in /Users/ajeetraina/projects/redisgraph-go\n")),(0,n.kt)("h3",{id:"step-6-running-the-go-program"},"Step 6. Running the Go Program"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," go run main.go\n +----------+-------+--------+\n |  p.name  | p.age | c.name |\n +----------+-------+--------+\n | John Doe |    33 | Japan  |\n +----------+-------+--------+\n\n Cached execution 0.000000\n Query internal execution time 3.031700\n Visited countries by person:\n\n Name: John Doe\n\n Age: 33\n Pathes of persons vi\n")),(0,n.kt)("h3",{id:"step-7-monitor-the-graph-query"},"Step 7. Monitor the Graph query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' redis-cli\n 127.0.0.1:6379> monitor\n OK\n 1633495122.588292 [0 172.17.0.1:58538] "GRAPH.DELETE" "social"\n 1633495122.589641 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "CREATE (UPoQSvSnBD:person{gender:\\"male\\",status:\\"single\\",name:\\"John Doe\\",age:33}),(ZNxbsnHGoO:country{name:\\"Japan\\"}),(UPoQSvSnBD)-[:visited]->(ZNxbsnHGoO)" "--compact"\n 1633495122.591407 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "MATCH (p:person)-[v:visited]->(c:country)\\n           RETURN p.name, p.age, c.name" "--compact"\n 1633495122.593040 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "MATCH p = (:person)-[:visited]->(:country) RETURN p" "--compact"\n 1633495122.594405 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "CALL db.labels()" "--compact"\n 1633495122.595552 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "CALL db.propertyKeys()" "--compact"\n 1633495122.596942 [0 172.17.0.1:58538] "GRAPH.QUERY" "social" "CALL db.relationshipTypes()" "--compact"\n')),(0,n.kt)("h3",{id:"step-8-install-redisinsight"},"Step 8. Install RedisInsight"),(0,n.kt)("p",null,"Run the RedisInsight container. The easiest way is to run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,n.kt)("h3",{id:"step-9-accessing-redisinsight"},"Step 9. Accessing RedisInsight"),(0,n.kt)("p",null,"Next, point your browser to http://localhost:8001."),(0,n.kt)("h3",{id:"step-10-run-the-graph-query"},"Step 10. Run the Graph Query"),(0,n.kt)("p",null,"You can use the limit clause to limit the number of records returned by a query:"),(0,n.kt)("p",null,'GRAPH.QUERY "social" "MATCH (n) RETURN n"'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Image",src:r(17688).Z,width:"3112",height:"1728"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/howtos/redisgraphmovies/"},"Building Movies database app using RedisGraph and NodeJS")),(0,n.kt)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",(0,n.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"Quickstart")," tutorial."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsight/redisgraph"},"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),(0,n.kt)("h2",{id:""}),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,n.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}h.isMDXComponent=!0},17688:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/redisgraph_redisinsight_go-aa2afd2b4aadf6cdbe5c2a03ca9579a7.png"}}]);