"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),d=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t;const{lazy:n,block:o,defaultValue:u,values:m,groupId:g,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,R]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,d.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&v.some((t=>t.value===e))&&R(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==N&&(S(t),R(a),null!=g&&w(g,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:x,onClick:T},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},50358:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(52263);const i="authorByline_VoxI",o="authorLabel_a70t",l="authorProfileImage_URwT";const s=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,r.Z)(),s=n.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:i},a.createElement("img",{className:l,src:`/img/${s[e].image?s[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${s[e].name}`}),a.createElement("div",null,a.createElement("div",{className:o},"Author:"),a.createElement("div",null,a.createElement("a",{href:s[e].link,target:"_blank"},s[e].name),", ",s[e].title))))),a.createElement("hr",null)))}},38121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162),l=n(50358);const s={id:"index-golang",title:"Golang Redis Client",sidebar_label:"Go",slug:"/develop/golang/",authors:["ajeet"]},d=void 0,c={unversionedId:"develop/golang/index-golang",id:"develop/golang/index-golang",title:"Golang Redis Client",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Golang.",source:"@site/docs/develop/golang/index-golang.mdx",sourceDirName:"develop/golang",slug:"/develop/golang/",permalink:"/develop/golang/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/golang/index-golang.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-golang",title:"Golang Redis Client",sidebar_label:"Go",slug:"/develop/golang/",authors:["ajeet"]},sidebar:"docs",previous:{title:"Blocking Stream Reads with CSRedis",permalink:"/develop/dotnet/streams/blocking-reads/cs-redis"},next:{title:"Ruby",permalink:"/develop/ruby/"}},p={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1. Import the <code>redigo</code> module",id:"step-1-import-the-redigo-module",level:4},{value:"Step 2. Create a connection pool",id:"step-2-create-a-connection-pool",level:4},{value:"Step 3. Write your application code",id:"step-3-write-your-application-code",level:4},{value:"Step 1. Run a Redis server",id:"step-1-run-a-redis-server",level:4},{value:"Step 2. Initialise the Go Module",id:"step-2-initialise-the-go-module",level:4},{value:"Step 3. Install redis/v8",id:"step-3-install-redisv8",level:4},{value:"Step 4. Create a main.go file",id:"step-4-create-a-maingo-file",level:4},{value:"Step 5. Begin the compilation",id:"step-5-begin-the-compilation",level:4},{value:"Redis Launchpad",id:"redis-launchpad",level:3},{value:"Rate-Limiting app in Go",id:"rate-limiting-app-in-go",level:4},{value:"Leaderboard app in Go",id:"leaderboard-app-in-go",level:4},{value:"Technical Articles &amp; Whitepapers",id:"technical-articles--whitepapers",level:3}],m={toc:u};function g(e){let{components:t,...d}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{frontMatter:s,mdxType:"Authors"}),(0,r.kt)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Golang."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Golang community has built many client libraries that you can find ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/clients#go"},"here"),".\nFor your first steps with Golang and Redis, this article will show how to use the recommended library: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-redis/redis"},"go-redis"),"."),(0,r.kt)(i.Z,{defaultValue:"go-redis",values:[{label:"Redigo",value:"redigo"},{label:"Go-Redis",value:"go-redis"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"redigo",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redigo")," library is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/gomodule/redigo")," that you must import in your application."),(0,r.kt)("h4",{id:"step-1-import-the-redigo-module"},"Step 1. Import the ",(0,r.kt)("inlineCode",{parentName:"h4"},"redigo")," module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," go get github.com/gomodule/redigo/redis\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},' import (\n    "fmt"\n    "context"\n    "github.com/gomodule/redigo/redis"\n )\n')),(0,r.kt)("h4",{id:"step-2-create-a-connection-pool"},"Step 2. Create a connection pool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},' func newPool() *redis.Pool {\n     return &redis.Pool{\n        MaxIdle: 80,\n        MaxActive: 12000,\n        Dial: func() (redis.Conn, error) {\n              c, err := redis.Dial("tcp", ":6379")\n              if err != nil {\n                  panic(err.Error())\n              }\n              return c, err\n          },\n      }\n  }\n')),(0,r.kt)("h4",{id:"step-3-write-your-application-code"},"Step 3. Write your application code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},' package main\n\n import (\n     "fmt"\n\n     "github.com/gomodule/redigo/redis"\n )\n\n var pool = newPool()\n\n func main() {\n\n     client := pool.Get()\n     defer client.Close()\n\n     _, err := client.Do("SET", "mykey", "Hello from redigo!")\n     if err != nil {\n         panic(err)\n     }\n\n     value, err := client.Do("GET", "mykey")\n     if err != nil {\n         panic(err)\n     }\n\n     fmt.Printf("%s \\n", value)\n\n     _, err = client.Do("ZADD", "vehicles", 4, "car")\n     if err != nil {\n         panic(err)\n     }\n     _, err = client.Do("ZADD", "vehicles", 2, "bike")\n     if err != nil {\n         panic(err)\n     }\n\n     vehicles, err := client.Do("ZRANGE", "vehicles", 0, -1, "WITHSCORES")\n     if err != nil {\n         panic(err)\n     }\n     fmt.Printf("%s \\n", vehicles)\n\n\n }\n\n func newPool() *redis.Pool {\n     return &redis.Pool{\n         MaxIdle: 80,\n         MaxActive: 12000,\n         Dial: func() (redis.Conn, error) {\n             c, err := redis.Dial("tcp", ":6379")\n             if err != nil {\n                 panic(err.Error())\n             }\n             return c, err\n         },\n     }\n }\n')),(0,r.kt)("p",null,'Find more information about Golang & Redis connections in the "',(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-connect/tree/master/golang/redigo"},"Redis Connect"),'".')),(0,r.kt)(o.Z,{value:"go-redis",mdxType:"TabItem"},(0,r.kt)("p",null,"Go-redis is a type-safe, Redis client library for Go with support for features like Pub/Sub, sentinel, and pipelining.It is a Redis client able to support a Redis cluster and is designed to store and update slot info automatically with a cluster change. Below are the attractive features of Go-redis:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go-redis has pooling capabilities.(Pools allow you to safely handle go-routines, auto reconnect if any error occurs)"),(0,r.kt)("li",{parentName:"ul"},"It supports both standard, OSS cluster AIP, and Sentinel"),(0,r.kt)("li",{parentName:"ul"},"Comes with Auto reconnects / Auto-rediscovers cluster slots on error/migration"),(0,r.kt)("li",{parentName:"ul"},"Support instrumentations"),(0,r.kt)("li",{parentName:"ul"},"Allows for a custom dialer (this is useful for Enterprise)"),(0,r.kt)("li",{parentName:"ul"},"Support for Redis Sentinel")),(0,r.kt)("p",null,"The go-redis library is located in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-redis/redis"},"https://github.com/go-redis/redis")," that you must import in your application.\nDo check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-redis/cache"},"Redis Cache Library for Golang")),(0,r.kt)("h4",{id:"step-1-run-a-redis-server"},"Step 1. Run a Redis server"),(0,r.kt)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT. You can run a Redis database directly over your local mac os or in a container. If you have Docker installed in your sytem, type the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -p 6379:6379 redis/redis-stack\n")),(0,r.kt)("p",null,"You can connect to Redis server using the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli")," command like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," redis-cli\n")),(0,r.kt)("p",null,"The above command will make a connection to the Redis server. It will then present a prompt that allows you to run Redis commands."),(0,r.kt)("h4",{id:"step-2-initialise-the-go-module"},"Step 2. Initialise the Go Module"),(0,r.kt)("p",null,"In order to connect to the Redis instance and return some data value, first you need to initialize the Go module as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," go mod init github.com/my/repo\n")),(0,r.kt)("h4",{id:"step-3-install-redisv8"},"Step 3. Install redis/v8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," go get github.com/go-redis/redis/v8\n")),(0,r.kt)("h4",{id:"step-4-create-a-maingo-file"},"Step 4. Create a main.go file"),(0,r.kt)("p",null,"Let us create a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.go")," file and write the following code to check for your Redis instance connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' package main\n\nimport (\n    "fmt"\n    "github.com/go-redis/redis"\n)\n\nfunc main() {\n    fmt.Println("Testing Golang Redis")\n\n    client := redis.NewClient(&redis.Options{\n        Addr: "localhost:6379",\n        Password: "",\n        DB: 0,\n    })\n\n    pong, err := client.Ping(client.Context()).Result()\n    fmt.Println(pong, err)\n\n }\n')),(0,r.kt)("h4",{id:"step-5-begin-the-compilation"},"Step 5. Begin the compilation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," go run main.go\n")),(0,r.kt)("p",null,'By now, the Go application should successfully connect to the Redis instance and return data value (a successful "PONG" response).'))),(0,r.kt)("h3",{id:"redis-launchpad"},"Redis Launchpad"),(0,r.kt)("p",null,"Redis Launchpad is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nCheck out a few of these apps below, or ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com"},"click here to access the complete list"),"."),(0,r.kt)("div",{class:"row text--center"},(0,r.kt)("div",{class:"col "},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"rate-limiting-app-in-go"},"Rate-Limiting app in Go"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"launchpad",src:n(31278).Z,width:"1520",height:"1312"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://launchpad.redis.com/?id=project%3Abasic-redis-rate-limiting-demo-go-lang"},"Rate Limiting app")," built in Go"))),(0,r.kt)("div",{class:"col"},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"leaderboard-app-in-go"},"Leaderboard app in Go"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"launchpad",src:n(43654).Z,width:"1266",height:"1110"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com/?id=project%3Abasic-redis-leaderboard-demo-python"},"How to implement leaderboard app")," in Go")))),(0,r.kt)("h3",{id:"technical-articles--whitepapers"},"Technical Articles & Whitepapers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://redis.com/blog/redis-go-designed-improve-performance/"},"Redis and Golang: Designed to Improve Performance")),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://pkg.go.dev/github.com/robinjoseph08/redisqueue#section-readme"},"Redisqueue - A producer and consumer of a queue that uses Redis streams")),(0,r.kt)("a",{parentName:"p",href:"https://redis.com/docs/ultra-fast-recommendations-engine-using-redis-go/"},"A High Performance Recommendation Engine with Redis and Go"),"*","*"))}g.isMDXComponent=!0},43654:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/leaderboardgo-4445c751ad80e7882e6417caf8c101ee.png"},31278:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ratelimitinggo-5f3e156a643400c3124fdbf5309918ae.png"}}]);