"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(52263);const o="authorByline_VoxI",s="authorLabel_a70t",i="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,n.Z)(),l=a.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:o},r.createElement("img",{className:i,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:s},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},61458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),o=a(50358);const s={id:"index-herokugo",title:"Deploy a Go app on Heroku using Redis",sidebar_label:"How to deploy a Go based application on Heroku using Redis",slug:"/create/heroku/herokugo",authors:["ajeet"]},i=void 0,l={unversionedId:"create/heroku/herokugo/index-herokugo",id:"create/heroku/herokugo/index-herokugo",title:"Deploy a Go app on Heroku using Redis",description:"Heroku is a PaaS (platform as a service) for building and running software applications in the cloud. Heroku today supports programming languages such as Java, Python, Ruby, Node.js and Go. Heroku manages your app portfolio in a straightforward Dashboard or with a CLI. Heroku's horizontally scalable, share-nothing architecture is designed for building services in today's world of containerized applications.",source:"@site/docs/create/heroku/herokugo/index-herokugo.mdx",sourceDirName:"create/heroku/herokugo",slug:"/create/heroku/herokugo",permalink:"/create/heroku/herokugo",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/herokugo/index-herokugo.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-herokugo",title:"Deploy a Go app on Heroku using Redis",sidebar_label:"How to deploy a Go based application on Heroku using Redis",slug:"/create/heroku/herokugo",authors:["ajeet"]},sidebar:"docs",previous:{title:"How to deploy a Ruby based application on Heroku using Redis",permalink:"/create/heroku/herokuruby"},next:{title:"Overview",permalink:"/create/azure"}},p={},u=[{value:"Step 1. Create a Redis Enterprise Cloud Database",id:"step-1-create-a-redis-enterprise-cloud-database",level:3},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",level:3},{value:"Step 3. Install the Heroku CLI on your system",id:"step-3-install-the-heroku-cli-on-your-system",level:3},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",level:3},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",level:3},{value:"Clone the GitHub repository",id:"clone-the-github-repository",level:4},{value:"Step 6. Setting up Environment Variables",id:"step-6-setting-up-environment-variables",level:3},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",level:3},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Initialization",id:"initialization",level:4},{value:"Creating demo users",id:"creating-demo-users",level:4},{value:"Pub/sub",id:"pubsub",level:4},{value:"Real-time chat and session handling",id:"real-time-chat-and-session-handling",level:4},{value:"How is the data stored?",id:"how-is-the-data-stored",level:3},{value:"How is the data accessed?",id:"how-is-the-data-accessed",level:3},{value:"Next Steps",id:"next-steps",level:3}],d={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{frontMatter:s,mdxType:"Authors"}),(0,n.kt)("p",null,"Heroku is a PaaS (platform as a service) for building and running software applications in the cloud. Heroku today supports programming languages such as Java, Python, Ruby, Node.js and Go. Heroku manages your app portfolio in a straightforward Dashboard or with a CLI. Heroku's horizontally scalable, share-nothing architecture is designed for building services in today's world of containerized applications."),(0,n.kt)("p",null,"Here are few popular terminologies used in Heroku:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Dynos: The Heroku Platform uses the container model to run and scale all Heroku apps. The containers used at Heroku are called \u201cdynos". Dynos are isolated, virtualized Linux containers that are designed to execute code based on a user-specified command.'),(0,n.kt)("li",{parentName:"ul"},"Buildpack: This is a config script for the build automation process, describing how a container image should be created."),(0,n.kt)("li",{parentName:"ul"},"Add-ons: These are tools and services for extending a Heroku application's functionality, such as data storage and processing, monitoring, or analytics."),(0,n.kt)("li",{parentName:"ul"},"Heroku CLI: This is a tool for building and running Heroku apps from within the terminal. (Docker, too, uses its own CLI for working with the platform.) Learn about ",(0,n.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/"},"Heroku Dev Center")),(0,n.kt)("li",{parentName:"ul"},"Git: A popular version control system for tracking changes to a software's source code. Heroku makes it easy to manage your app deployments with git, and has built-in integrations with the GitHub hosting platform for git repositories.")),(0,n.kt)("p",null,"Heroku recognizes an app as being written in Go by the existence of a ",(0,n.kt)("inlineCode",{parentName:"p"},"go.mod")," file in the root directory. Heroku also supports govendor, godep & GB, but this tutorial focuses only on Go modules. Here's a quickstart guide to deploy Go apps on Heroku using Redis. We will be deploying a sample Chat application written in Go."),(0,n.kt)("h3",{id:"step-1-create-a-redis-enterprise-cloud-database"},"Step 1. Create a Redis Enterprise Cloud Database"),(0,n.kt)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"this link"),".\nCreating a Heroku account is free of charge."),(0,n.kt)("admonition",{title:"TIP",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,n.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,n.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,n.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"recloud",src:a(38626).Z,width:"2486",height:"1804"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Follow this link to create a Redis Enterprise Cloud")," subscription and database. Once you create the database, you will be provisioned with a unique database endpoint URL, port and password. Save these for future reference."),(0,n.kt)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),(0,n.kt)("p",null,"If you are using Heroku for the first time, visit the Heroku website and create your new Heroku account ",(0,n.kt)("a",{parentName:"p",href:"https://signup.heroku.com/login"},"through this link"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"heroku",src:a(66704).Z,width:"900",height:"1156"})),(0,n.kt)("h3",{id:"step-3-install-the-heroku-cli-on-your-system"},"Step 3. Install the Heroku CLI on your system"),(0,n.kt)("p",null,"The Heroku Command Line Interface (CLI) lets you create and manage Heroku apps directly from the terminal. It's an essential part of using Heroku. In order to install Heroku CLI, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-macos"}," brew install heroku\n")),(0,n.kt)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),(0,n.kt)("p",null,"Use the following Heroku Command Line commands to login to Heroku dashboard:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),(0,n.kt)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),(0,n.kt)("p",null,"For this demonstration, we will be using a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-redis-chat-demo-go"},"Sample Redis Chat app"),"."),(0,n.kt)("h4",{id:"clone-the-github-repository"},"Clone the GitHub repository"),(0,n.kt)("p",null,"First you will need to clone the GitHub repository to configure it as a local repository."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-redis-chat-demo-go\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"basic-redis-chat-demo-go")," is the name of the project directory.\nRun the commands below to get a functioning Git repository that contains a simple application as well as a ",(0,n.kt)("inlineCode",{parentName:"p"},"app.json")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"heroku create\nCreating app... done, \u2b22 stark-island-03510\nhttps://stark-island-03510.herokuapp.com/ | https://git.heroku.com/stark-island-03510.git\n")),(0,n.kt)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up Environment Variables"),(0,n.kt)("p",null,'Go to the Heroku dashboard, click "Settings" and set the following parameters under Config Vars:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SERVER_ADDRESS=:5555"),(0,n.kt)("li",{parentName:"ul"},"CLIENT_LOCATION=/api/public"),(0,n.kt)("li",{parentName:"ul"},"REDIS_HOST="),(0,n.kt)("li",{parentName:"ul"},"REDIS_PASSWORD=")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"heroku",src:a(65840).Z,width:"1368",height:"850"})),(0,n.kt)("p",null,"You now have a functioning Git repository that contains a simple application as well as a ",(0,n.kt)("inlineCode",{parentName:"p"},"app.json")," file."),(0,n.kt)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git push heroku\n")),(0,n.kt)("p",null,"Wait for few seconds and you will see the messages below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"remote:\nremote: Verifying deploy... done.\nTo https://git.heroku.com/stark-island-03510\n * [new branch]      master -> master\n")),(0,n.kt)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),(0,n.kt)("p",null,"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"https://stark-island-03510.herokuapp.com/")," to access your web application on the browser.\nPlease note that the Web URL is unique, hence it will be different in your case."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"heroku",src:a(48411).Z,width:"1078",height:"1108"})),(0,n.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,"The chat server works as a basic REST API which involves managing sessions and handling the user state in the chat rooms (besides the WebSocket/real-time part).\nWhen the server starts, the initialization step occurs. At first, a new Redis connection is established and the code checks whether or not to load the demo data."),(0,n.kt)("h4",{id:"initialization"},"Initialization"),(0,n.kt)("p",null,"For simplicity, a key named ",(0,n.kt)("inlineCode",{parentName:"p"},"total_users")," is checked: if it does not exist, we fill the Redis database with initial data. ",(0,n.kt)("inlineCode",{parentName:"p"},"EXISTS total_users")," (checks if the key exists).\nThe demo data initialization is handled in multiple steps:"),(0,n.kt)("h4",{id:"creating-demo-users"},"Creating demo users"),(0,n.kt)("p",null,"We create a new user id: ",(0,n.kt)("inlineCode",{parentName:"p"},"INCR total_users"),". Then we set a user ID lookup key by user name: e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SET username:nick user:1\n")),(0,n.kt)("p",null,"And finally, the rest of the data is written to a Redis hash:"),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  HSET user:1 username "nick" password "bcrypt_hashed_password".\n')),(0,n.kt)("p",null,'Additionally, each user is added to the default "General" room.\nFor handling rooms for each user, we have a set that holds the room ids. Here\'s an example command of how to add the room:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' SADD user:1:rooms "0"\n')),(0,n.kt)("p",null,"Next, we need to populate private messages between users. At first, private rooms are created: if a private room needs to be established, for each user a room id: ",(0,n.kt)("inlineCode",{parentName:"p"},"room:1:2")," is generated, where numbers correspond to the user ids in ascending order."),(0,n.kt)("p",null,"E.g. Create a private room between 2 users:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD user:1:rooms 1:2 and SADD user:2:rooms 1:2\n")),(0,n.kt)("p",null,"Then we add messages to this room by writing to a sorted set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," ZADD room:1:2 1615480369 \"{'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}\"\n")),(0,n.kt)("p",null,"We use a stringified JSON object for keeping the message structure and simplify the implementation details for this demo-app."),(0,n.kt)("p",null,'Populate the "General" room with messages. Messages are added to the sorted set with id of the "General" room: ',(0,n.kt)("inlineCode",{parentName:"p"},"room:0"),"."),(0,n.kt)("h4",{id:"pubsub"},"Pub/sub"),(0,n.kt)("p",null,"After initialization, a pub/sub subscription is created: ",(0,n.kt)("inlineCode",{parentName:"p"},"SUBSCRIBE MESSAGES"),". At the same time, each server instance will run a listener on a message on this channel to receive real-time updates."),(0,n.kt)("p",null,"Again, for simplicity, each message is serialized to JSON, which we parse and then handle in the same manner, as WebSocket messages."),(0,n.kt)("p",null,"Pub/sub allows us to connect multiple servers written in different languages without taking into consideration the implementation detail of each server."),(0,n.kt)("h4",{id:"real-time-chat-and-session-handling"},"Real-time chat and session handling"),(0,n.kt)("p",null,"A WebSocket/real-time server is instantiated, which then listens for the next events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connection. A new user is connected. At this point, a user ID is captured and saved to the session (which is cached in Redis). Note, that session caching is language/library-specific and it's used here purely for persistence and maintaining the state between server reloads.")),(0,n.kt)("p",null,"A global set with online_users key is used for keeping the online state for each user. So on a new connection, a user ID is written to that set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD online_users 1\n")),(0,n.kt)("p",null,"Here we have added a user with id 1 to the set ",(0,n.kt)("inlineCode",{parentName:"p"},"online_users")),(0,n.kt)("p",null,"After that, a message is broadcast to the clients to notify them that a new user is joined the chat."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disconnect. It works similarly to the connection event, except we need to remove the user for online_users set and notify the clients: ",(0,n.kt)("inlineCode",{parentName:"p"},"SREM online_users 1")," (makes user with id 1 offline).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Message. A user sends a message, and it needs to be broadcast to the other clients. The pub/sub also allows us to broadcast this message to all server instances which are connected to this Redis server:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," PUBLISH message \"{'serverId': 4132, 'type':'message', 'data': {'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}}\"\n")),(0,n.kt)("p",null,"Note we send additional data related to the type of the message and the server id. Server id is used to discard the messages by the server instance which sends them since it is connected to the same MESSAGES channel."),(0,n.kt)("p",null,"The type field of the serialized JSON corresponds to the real-time method we use for real-time communication (connect/disconnect/message)."),(0,n.kt)("p",null,"The data is method-specific information. In the example above it's related to the new message."),(0,n.kt)("h3",{id:"how-is-the-data-stored"},"How is the data stored?"),(0,n.kt)("p",null,"Redis is used mainly as a database to keep the user/messages data and for sending messages between connected servers."),(0,n.kt)("p",null,"The real-time functionality is handled by Socket.IO for server-client messaging. Additionally each server instance subscribes to the ",(0,n.kt)("inlineCode",{parentName:"p"},"MESSAGES")," pub/sub channel and dispatches messages once they arrive. Note that, the server transports pub/sub messages with a separate event stream (handled by Server Sent Events), this is due to the need to run the pub/sub message loop separately from socket.io signals."),(0,n.kt)("p",null,"The chat data is stored in various keys and various data types.\nUser data is stored in a hash where each user entry contains the next values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"username: unique user name;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"password: hashed password")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Additionally a set of rooms is associated with user")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rooms are sorted sets which contains messages where score is the timestamp for each message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each room has a name associated with it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'The "online" set is global for all users is used for keeping track on which user is online.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"User hashes are accessed by key ",(0,n.kt)("inlineCode",{parentName:"p"},"user:{userId}"),". The data for it stored with ",(0,n.kt)("inlineCode",{parentName:"p"},"HSET")," key field data. User id is calculated by incrementing the ",(0,n.kt)("inlineCode",{parentName:"p"},"total_users")," key (",(0,n.kt)("inlineCode",{parentName:"p"},"INCR total_users"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Usernames are stored as separate keys (",(0,n.kt)("inlineCode",{parentName:"p"},"username:{username}"),") which returns the userId for quicker access and stored with ",(0,n.kt)("inlineCode",{parentName:"p"},"SET username:{username} {userId}"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rooms that a user belongs to are stored at ",(0,n.kt)("inlineCode",{parentName:"p"},"user:{userId}:rooms")," as a set of room ids. A room is added by the ",(0,n.kt)("inlineCode",{parentName:"p"},"SADD user:{userId}:rooms {roomId}")," command.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Messages are stored at ",(0,n.kt)("inlineCode",{parentName:"p"},"room:{roomId}")," key in a sorted set (as mentioned above). They are added with the ",(0,n.kt)("inlineCode",{parentName:"p"},"ZADD room:{roomId} {timestamp} {message}")," command. The message is serialized to an app-specific JSON string."))),(0,n.kt)("h3",{id:"how-is-the-data-accessed"},"How is the data accessed?"),(0,n.kt)("p",null,"Get User ",(0,n.kt)("inlineCode",{parentName:"p"},"HGETALL user:{id}"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," HGETALL user:2\n")),(0,n.kt)("p",null,"which gets data for the user with id: 2."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Online users: ",(0,n.kt)("inlineCode",{parentName:"p"},"SMEMBERS online_users"),". This will return ids of users who are online")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get the ids of rooms that a user is in: ",(0,n.kt)("inlineCode",{parentName:"p"},"SMEMBERS user:{id}:rooms"),".\nExample:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," SMEMBERS user:2:rooms\n")),(0,n.kt)("p",null,"This will return IDs of rooms for the user whose ID is 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get a list of messages: ",(0,n.kt)("inlineCode",{parentName:"li"},"ZREVRANGE room:{roomId} {offset_start} {offset_end}"),".\nExample:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," ZREVRANGE room:1:2 0 50\n")),(0,n.kt)("p",null,"This returns 50 messages with 0 offsets for the private room between users with IDs 1 and 2."),(0,n.kt)("h3",{id:"next-steps"},"Next Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsight/"},"Connecting to the database using RedisInsight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://launchpad.redis.com/"},"Accessing Go-based apps over Redis LaunchPad")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create/heroku/herokujava"},"Deploy Java apps on Heroku using Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/create/heroku/herokujava"},"Deploy NodeJS apps on Heroku using Redis"))))}c.isMDXComponent=!0},66704:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},48411:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/heroku_chatapp_go-c5f1df97f3c706ed435200ae6643b82d.png"},65840:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/heroku_environment-3187ff80b22764869b3d1e2d011ced15.png"},38626:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"}}]);