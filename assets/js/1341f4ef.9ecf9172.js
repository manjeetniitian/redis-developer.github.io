"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5312],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,g=h["".concat(o,".").concat(u)]||h[u]||c[u]||s;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(52263);const s="authorByline_VoxI",i="authorLabel_a70t",l="authorProfileImage_URwT";const o=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,n.Z)(),o=a.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:s},r.createElement("img",{className:l,src:`/img/${o[e].image?o[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${o[e].name}`}),r.createElement("div",null,r.createElement("div",{className:i},"Author:"),r.createElement("div",null,r.createElement("a",{href:o[e].link,target:"_blank"},o[e].name),", ",o[e].title))))),r.createElement("hr",null)))}},20376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),s=a(50358);const i={id:"index-csvtograph",title:"How to build RedisGraph databases from CSV inputs in Easy Steps",sidebar_label:"Building RedisGraph databases from CSV inputs",slug:"/howtos/redisgraph/csvtograph",authors:["ajeet"]},l=void 0,o={unversionedId:"howtos/redisgraph/csvtograph/index-csvtograph",id:"howtos/redisgraph/csvtograph/index-csvtograph",title:"How to build RedisGraph databases from CSV inputs in Easy Steps",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. It shows how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon.",source:"@site/docs/howtos/redisgraph/csvtograph/index-csvtograph.mdx",sourceDirName:"howtos/redisgraph/csvtograph",slug:"/howtos/redisgraph/csvtograph",permalink:"/howtos/redisgraph/csvtograph",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/csvtograph/index-csvtograph.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-csvtograph",title:"How to build RedisGraph databases from CSV inputs in Easy Steps",sidebar_label:"Building RedisGraph databases from CSV inputs",slug:"/howtos/redisgraph/csvtograph",authors:["ajeet"]},sidebar:"docs",previous:{title:"Building Movies database app using RedisGraph & NodeJS",permalink:"/howtos/redisgraph/redisgraphmovies"},next:{title:"Probabilistic data structures using Redis Stack",permalink:"/howtos/redisbloom"}},p={},d=[{value:"RedisGraph Bulk Loader",id:"redisgraph-bulk-loader",level:2},{value:"Step 1. Run Redis Stack Docker container",id:"step-1-run-redis-stack-docker-container",level:3},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",level:3},{value:"Step 3. Clone the Bulk Loader Utility",id:"step-3-clone-the-bulk-loader-utility",level:3},{value:"Step 4. Installing the RedisGraph Bulk Loader tool",id:"step-4-installing-the-redisgraph-bulk-loader-tool",level:3},{value:"Step 5. Create a Python virtual env for this work",id:"step-5-create-a-python-virtual-env-for-this-work",level:3},{value:"Step 6. Step into the venv:",id:"step-6-step-into-the-venv",level:3},{value:"Step 7. Install the dependencies for the bulk loader:",id:"step-7-install-the-dependencies-for-the-bulk-loader",level:3},{value:"Step 8. Install groovy",id:"step-8-install-groovy",level:3},{value:"Step 9. Verify the .csv files created",id:"step-9-verify-the-csv-files-created",level:3},{value:"Step 10. Run the Bulk loader script",id:"step-10-run-the-bulk-loader-script",level:3},{value:"Step 10 . Install RedisInsight",id:"step-10--install-redisinsight",level:3},{value:"Step 11. Accessing RedisInsight",id:"step-11-accessing-redisinsight",level:3},{value:"Step 12. Run the Graph Query",id:"step-12-run-the-graph-query",level:3},{value:"References",id:"references",level:3}],c={toc:d};function h(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{frontMatter:i,mdxType:"Authors"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://redis.com/modules/redis-graph/"},"RedisGraph")," is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. It shows how your data is connected through multiple visualization integrations including ",(0,n.kt)("a",{parentName:"p",href:"/explore/redisinsight/getting-started"},"RedisInsight"),", Linkurious, and Graphileon.\nIt allows you to query graphs using the industry-standard Cypher query language and you can easily use graph capabilities from application code."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Image",src:a(48118).Z,width:"2300",height:"1572"})),(0,n.kt)("h2",{id:"redisgraph-bulk-loader"},"RedisGraph Bulk Loader"),(0,n.kt)("p",null,"If you have a bunch of CSV files that you want to load to RedisGraph database, you must try out ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/RedisGraph/redisgraph-bulk-loader"},"this Bulk Loader utility"),". Rightly called RedisGraph Bulk Loader, this tool is written in Python and helps you in building RedisGraph databases from CSV inputs. This utility requires a Python 3 interpreter."),(0,n.kt)("p",null,"Follow the steps below to load CSV data into RedisGraph database:"),(0,n.kt)("h3",{id:"step-1-run-redis-stack-docker-container"},"Step 1. Run Redis Stack Docker container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 --name redis/redis-stack\n")),(0,n.kt)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),(0,n.kt)("h3",{id:"step-3-clone-the-bulk-loader-utility"},"Step 3. Clone the Bulk Loader Utility"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," $ git clone https://github.com/RedisGraph/redisgraph-bulk-loader\n")),(0,n.kt)("h3",{id:"step-4-installing-the-redisgraph-bulk-loader-tool"},"Step 4. Installing the RedisGraph Bulk Loader tool"),(0,n.kt)("p",null,"The bulk loader can be installed using pip:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  pip3 install redisgraph-bulk-loader\n")),(0,n.kt)("p",null,"Or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," pip3 install git+https://github.com/RedisGraph/redisgraph-bulk-loader.git@master\n")),(0,n.kt)("h3",{id:"step-5-create-a-python-virtual-env-for-this-work"},"Step 5. Create a Python virtual env for this work"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"}," python3 -m venv redisgraphloader\n")),(0,n.kt)("h3",{id:"step-6-step-into-the-venv"},"Step 6. Step into the venv:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," source redisgraphloader/bin/activate\n")),(0,n.kt)("h3",{id:"step-7-install-the-dependencies-for-the-bulk-loader"},"Step 7. Install the dependencies for the bulk loader:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," pip3 install -r requirements.txt\n")),(0,n.kt)("p",null,"If the above command doesn\u2019t work, install the below modules:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," pip3 install pathos\n pip3 install redis\n pip3 install click\n")),(0,n.kt)("h3",{id:"step-8-install-groovy"},"Step 8. Install groovy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," groovy generateCommerceGraphCSVForImport.groovy\n")),(0,n.kt)("h3",{id:"step-9-verify-the-csv-files-created"},"Step 9. Verify the .csv files created"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," head -n2 *.csv\n ==> addtocart.csv <==\n src_person,dst_product,timestamp\n 0,1156,2010-07-20T16:11:20.551748\n\n ==> contain.csv <==\n src_person,dst_order\n 2000,1215\n\n ==> order.csv <==\n _internalid,id,subTotal,tax,shipping,total\n 2000,0,904.71,86.40,81.90,1073.01\n\n ==> person.csv <==\n _internalid,id,name,address,age,memberSince\n  0,0,Cherlyn Corkery,146 Kuphal Isle South Jarvis MS 74838-0662,16,2010-03-18T16:25:20.551748\n\n ==> product.csv <==\n _internalid,id,name,manufacturer,msrp\n 1000,0,Sleek Plastic Car,Thiel Hills and Leannon,385.62\n\n ==> transact.csv <==\n src_person,dst_order\n 2,2000\n\n ==> view.csv <==\n src_person,dst_product,timestamp\n 0,1152,2012-04-14T11:23:20.551748\n")),(0,n.kt)("h3",{id:"step-10-run-the-bulk-loader-script"},"Step 10. Run the Bulk loader script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  python3 bulk_insert.py prodrec-bulk -n person.csv -n product.csv -n order.csv -r view.csv -r addtocart.csv -r transact.csv -r contain.csv\n person  [####################################]  100%\n 1000 nodes created with label 'person'\n product  [####################################]  100%\n 1000 nodes created with label 'product'\n order  [####################################]  100%\n 811 nodes created with label 'order'\n view  [####################################]  100%\n 24370 relations created for type 'view'\n addtocart  [####################################]  100%\n 6458 relations created for type 'addtocart'\n transact  [####################################]  100%\n 811 relations created for type 'transact'\n contain  [####################################]  100%\n 1047 relations created for type 'contain'\n Construction of graph 'prodrec-bulk' complete: 2811 nodes created, 32686 relations created in 1.021761 seconds\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' graph.query prodrec "match (p:person) where p.id=200 return p.name"\n 1) 1) "p.name"\n 2) (empty array)\n 3) 1) "Cached execution: 0"\n    2) "Query internal execution time: 0.518300 milliseconds"\n')),(0,n.kt)("h3",{id:"step-10--install-redisinsight"},"Step 10 . Install RedisInsight"),(0,n.kt)("p",null,"To use RedisInsight on a local Mac, you can download from the RedisInsight page on the RedisLabs website:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link to access a form")," that allows you to select the operating system of your choice."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Image",src:a(14213).Z,width:"1526",height:"1344"})),(0,n.kt)("p",null,"If you have Docker Engine installed in your system, the quick way is to run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,n.kt)("h3",{id:"step-11-accessing-redisinsight"},"Step 11. Accessing RedisInsight"),(0,n.kt)("p",null,"Next, point your browser to http://localhost:8001."),(0,n.kt)("h3",{id:"step-12-run-the-graph-query"},"Step 12. Run the Graph Query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' GRAPH.QUERY "prodrec-bulk" "match (p:person) where p.id=199 return p"\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Image",src:a(52643).Z,width:"1032",height:"1076"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/howtos/redisgraphmovies/"},"Building Movies database app using RedisGraph and NodeJS")),(0,n.kt)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",(0,n.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"Quickstart")," tutorial."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsight/redisgraph"},"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),(0,n.kt)("h2",{id:""}),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,n.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}h.isMDXComponent=!0},48118:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redisgraph_preview-78bbe6e1d7a082f07afaf3188fb7b0de.png"},52643:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redisgraph_redisinsight_csvtograph-e5efef6ce85c0a5baa2f2d94c66ea711.png"},14213:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redisinsight-b769d3b36fb7cb59aced16fc89217e5a.png"}}]);