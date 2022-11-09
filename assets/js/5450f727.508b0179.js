"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=s.createContext({}),p=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(a),c=n,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||i;return a?s.createElement(m,r(r({ref:t},d),{},{components:a})):s.createElement(m,r({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(67294),n=a(52263);const i="authorByline_VoxI",r="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,n.Z)(),l=a.customFields.authors;return s.createElement(s.Fragment,null,t.authors&&s.createElement("div",{className:"docAuthors"},s.createElement("hr",null),t.authors.map((e=>s.createElement("div",{key:e,className:i},s.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),s.createElement("div",null,s.createElement("div",{className:r},"Author:"),s.createElement("div",null,s.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),s.createElement("hr",null)))}},23515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=a(87462),n=(a(67294),a(3905)),i=a(50358);const r={id:"index-chatapp",title:"How to build a Chat application using Redis",sidebar_label:"How to build a Chat application using Redis",slug:"/howtos/chatapp",authors:["ajeet"]},o=void 0,l={unversionedId:"howtos/chatapp/index-chatapp",id:"howtos/chatapp/index-chatapp",title:"How to build a Chat application using Redis",description:"Real-time chat app is an online communication channel that allows you to conduct real-time conversations. More and more developers are tapping into the power of Redis as it is extremely fast & due to its support for variety of rich data structure such as Lists, Sets, Sorted Sets, Hashes etc. Redis comes along with a Pub/Sub messaging feature functionality that allows developers to scale the backend by spawning multiple server instances.",source:"@site/docs/howtos/chatapp/index-chatapp.mdx",sourceDirName:"howtos/chatapp",slug:"/howtos/chatapp",permalink:"/howtos/chatapp",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/chatapp/index-chatapp.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-chatapp",title:"How to build a Chat application using Redis",sidebar_label:"How to build a Chat application using Redis",slug:"/howtos/chatapp",authors:["ajeet"]},sidebar:"docs",previous:{title:"10. Sample Application",permalink:"/howtos/moviesdatabase/sampleapp"},next:{title:"How to build a Fraud Detection System using Redis",permalink:"/howtos/frauddetection"}},p={},d=[{value:"Step 1. Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3. Installing the requred packages",id:"step-3-installing-the-requred-packages",level:3},{value:"Step 4. Starting the frontend",id:"step-4-starting-the-frontend",level:3},{value:"Step 4. Installing the required Python modules",id:"step-4-installing-the-required-python-modules",level:3},{value:"Step 5: Running the Backend",id:"step-5-running-the-backend",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Initialization",id:"initialization",level:4},{value:"Creating of demo users",id:"creating-of-demo-users",level:4},{value:"Pub/sub",id:"pubsub",level:4},{value:"Real-time chat and session handling",id:"real-time-chat-and-session-handling",level:4},{value:"How the data is stored?",id:"how-the-data-is-stored",level:3},{value:"How the data is accessed?",id:"how-the-data-is-accessed",level:3},{value:"Related Posts",id:"related-posts",level:2}],u={toc:d};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{frontMatter:r,mdxType:"Authors"}),(0,n.kt)("p",null,"Real-time chat app is an online communication channel that allows you to conduct real-time conversations. More and more developers are tapping into the power of Redis as it is extremely fast & due to its support for variety of rich data structure such as Lists, Sets, Sorted Sets, Hashes etc. Redis comes along with a Pub/Sub messaging feature functionality that allows developers to scale the backend by spawning multiple server instances.\nPlease note that this code is open source. You can find the link at the end of this tutorial."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/miK7xDkDXF0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,"In this tutorial, we will see how to develop real time messaging apps with Flask, Socket.IO and Redis. This example uses Redis Pub/sub feature combined with websockets for implementing the real time chat app communication between client and server."),(0,n.kt)("p",null,"Please note that this code is open source and implements the basic features of a live chat app. You can find the link at the end of this tutorial."),(0,n.kt)("h3",{id:"step-1-prerequisites"},"Step 1. Prerequisites"),(0,n.kt)("p",null,"In order to perform this instant messaging app development, you will need the following software:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Python 3.6+")),(0,n.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),(0,n.kt)("p",null,"First of all, we will clone the project that implements basic chat functionality."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/basic-redis-chat-app-demo-python\n")),(0,n.kt)("h3",{id:"step-3-installing-the-requred-packages"},"Step 3. Installing the requred packages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd client\nyarn install\n")),(0,n.kt)("h3",{id:"step-4-starting-the-frontend"},"Step 4. Starting the frontend"),(0,n.kt)("p",null,"To run the frontend of the chat app, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"yarn start\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"You can now access a chat window in the browser.\n\n  Local:            http://localhost:3000\n  On Your Network:  http://192.168.1.9:3000\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"chatapp",src:a(50330).Z,width:"1044",height:"1116"})),(0,n.kt)("h3",{id:"step-4-installing-the-required-python-modules"},"Step 4. Installing the required Python modules"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ..\npip3 install -r requirements.txt\n")),(0,n.kt)("h3",{id:"step-5-running-the-backend"},"Step 5: Running the Backend"),(0,n.kt)("p",null,"To start the fully chat app, run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 -m venv venv/\nsource venv/bin/activate\npython3 app.py\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 app.py\n * Restarting with stat\n * Debugger is active!\n * Debugger PIN: 220-696-610\n(8122) wsgi starting up on http://127.0.0.1:5000\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chatapp",src:a(26230).Z,width:"2434",height:"1730"})),(0,n.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,"This instant messaging app server works as a basic REST API which involves keeping the session and handling the user state in the chat room (besides the WebSocket/real-time part). When the server starts, the initialization step occurs. At first, a new Redis connection is established and it's checked whether it's needed to load the demo data."),(0,n.kt)("h4",{id:"initialization"},"Initialization"),(0,n.kt)("p",null,"For simplicity, a key with total_users value is checked: if it does not exist, we fill the Redis database with initial data. EXISTS total_users (checks if the key exists)\nThe demo data initialization is handled in multiple steps:"),(0,n.kt)("h4",{id:"creating-of-demo-users"},"Creating of demo users"),(0,n.kt)("p",null,"We create a new user id: INCR total_users. Then we set a user ID lookup key by user name: e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SET username:nick user:1\n")),(0,n.kt)("p",null,"And finally, the rest of the data is written to the hash set:"),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  HSET user:1 username "nick" password "bcrypt_hashed_password".\n')),(0,n.kt)("p",null,'Additionally, each user is added to the default "General" room.\nFor handling chat rooms for each user, we have a set that holds the chat room ids. Here\'s an example command of how to add the room:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' SADD user:1:rooms "0"\n')),(0,n.kt)("p",null,"Populate private messages between users. At first, private rooms are created: if a private room needs to be established, for each user a room id: room:1:2 is generated, where numbers correspond to the user ids in ascending order."),(0,n.kt)("p",null,"E.g. Create a private room between 2 users:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD user:1:rooms 1:2 and SADD user:2:rooms 1:2\n")),(0,n.kt)("p",null,"Then we add messages to this room by writing to a sorted set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," ZADD room:1:2 1615480369 \"{'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}\"\n")),(0,n.kt)("p",null,"We use a stringified JSON for keeping the message structure and simplify the implementation details for this demo-app."),(0,n.kt)("p",null,'Populate the "General" room with messages. Messages are added to the sorted set with id of the "General" room: room:0'),(0,n.kt)("h4",{id:"pubsub"},"Pub/sub"),(0,n.kt)("p",null,"After initialization, a pub/sub subscription is created: SUBSCRIBE MESSAGES. At the same time, each server instance will run a listener on a message on this channel to receive real-time updates."),(0,n.kt)("p",null,"Again, for simplicity, each message is serialized to JSON, which we parse and then handle in the same manner, as WebSocket messages."),(0,n.kt)("p",null,"Pub/sub allows connecting multiple servers written in different platforms without taking into consideration the implementation detail of each server."),(0,n.kt)("h4",{id:"real-time-chat-and-session-handling"},"Real-time chat and session handling"),(0,n.kt)("p",null,"When a WebSocket/real-time server is instantiated, which listens for the next events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connection. A new user is connected. At this point, a user ID is captured and saved to the session (which is cached in Redis). Note, that session caching is language/library-specific and it's used here purely for persistence and maintaining the state between server reloads.")),(0,n.kt)("p",null,"A global set with online_users key is used for keeping the online state for each user. So on a new connection, a user ID is written to that set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," SADD online_users 1\n")),(0,n.kt)("p",null,"Here we have added user with id 1 to the set online_users"),(0,n.kt)("p",null,"After that, a message is broadcasted to the clients to notify them that a new user is joined the chat."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disconnect. It works similarly to the connection event, except we need to remove the user for online_users set and notify the clients: SREM online_users 1 (makes user with id 1 offline).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Message. A user sends a message, and it needs to be broadcasted to the other clients. The pub/sub allows us also to broadcast this message to all server instances which are connected to this Redis:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," PUBLISH message \"{'serverId': 4132, 'type':'message', 'data': {'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}}\"\n")),(0,n.kt)("p",null,"Note we send additional data related to the type of the message and the server id. Server id is used to discard the messages by the server instance which sends them since it is connected to the same MESSAGES channel."),(0,n.kt)("p",null,"The type field of the serialized JSON corresponds to the real-time method we use for real-time communication (connect/disconnect/message)."),(0,n.kt)("p",null,"The data is method-specific information. In the example above it's related to the new message."),(0,n.kt)("h3",{id:"how-the-data-is-stored"},"How the data is stored?"),(0,n.kt)("p",null,"Redis is used mainly as a database to keep the user/messages data and for sending messages between connected servers."),(0,n.kt)("p",null,"The real-time functionality is handled by Socket.IO for server-client messaging. Additionally each server instance subscribes to the MESSAGES channel of pub/sub and dispatches messages once they arrive. Note that, the server transports pub/sub messages with a separate event stream (handled by Server Sent Events), this is due to the need of running pub/sub message loop apart from socket.io signals."),(0,n.kt)("p",null,"The chat data is stored in various keys and various data types.\nUser data is stored in a hash set where each user entry contains the next values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"username: unique user name;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"password: hashed password")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Additionally a set of chat rooms is associated with user")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rooms are sorted sets which contains messages where score is the timestamp for each message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each chat room has a name associated with it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'The "online" set is global for all users is used for keeping track on which user is online.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each user hash's set is accessed by key user:{userId}. The data for it stored with ",(0,n.kt)("inlineCode",{parentName:"p"},"HSET key field data"),". User ID is calculated by incrementing the ",(0,n.kt)("inlineCode",{parentName:"p"},"total_users")," key (",(0,n.kt)("inlineCode",{parentName:"p"},"INCR total_users"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Usernames are stored as separate keys (",(0,n.kt)("inlineCode",{parentName:"p"},"username:{username}"),") which returns the userId for quicker access and stored with ",(0,n.kt)("inlineCode",{parentName:"p"},"SET username:{username} {userId}"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rooms which a user belongs to are stored at ",(0,n.kt)("inlineCode",{parentName:"p"},"user:{userId}:rooms")," as a set of chat room ids. A room is added by ",(0,n.kt)("inlineCode",{parentName:"p"},"SADD user:{userId}:rooms {roomId}")," command.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Messages are stored at ",(0,n.kt)("inlineCode",{parentName:"p"},"room:{roomId}")," key in a sorted set (as mentioned above). They are added with the ",(0,n.kt)("inlineCode",{parentName:"p"},"ZADD room:{roomId} {timestamp} {message}")," command. Messages are serialized to an app-specific JSON string."))),(0,n.kt)("h3",{id:"how-the-data-is-accessed"},"How the data is accessed?"),(0,n.kt)("p",null,"Get User HGETALL user:{id}."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," HGETALL user:2\n")),(0,n.kt)("p",null,"where we get data for the user with id: 2."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Online users: SMEMBERS online_users. This will return ids of users which are online")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get room ids of a user: SMEMBERS user:{id}:rooms.\nExample:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," SMEMBERS user:2:rooms\n")),(0,n.kt)("p",null,"This will return IDs of chat rooms for user with ID: 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get list of messages ",(0,n.kt)("inlineCode",{parentName:"li"},"ZREVRANGE room:{roomId} {offset_start} {offset_end}"),".\nExample:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," ZREVRANGE room:1:2 0 50\n")),(0,n.kt)("p",null,"It will return 50 messages with 0 offsets for the private room between users with IDs 1 and 2."),(0,n.kt)("h2",{id:"related-posts"},"Related Posts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-dotnet"},"Building a Chat application demo in .Net")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-java"},"Building a Chat application demo in Java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-app-demo-nodejs"},"Building a Chat application demo in NodeJS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-demo-go"},"Building a Chat application demo in Go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-chat-demo-ruby"},"Building a Chat application demo in Ruby"))))}h.isMDXComponent=!0},26230:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/chatapp_homepage-e18893a7fe583a1dbda4c15347ee9d52.png"},50330:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/chatapp_server-5bee233da218811142ccb0a536639640.png"}}]);