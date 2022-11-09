"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),a=n(52263);const r="authorByline_VoxI",o="authorLabel_a70t",l="authorProfileImage_URwT";const s=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,a.Z)(),s=n.customFields.authors;return i.createElement(i.Fragment,null,t.authors&&i.createElement("div",{className:"docAuthors"},i.createElement("hr",null),t.authors.map((e=>i.createElement("div",{key:e,className:r},i.createElement("img",{className:l,src:`/img/${s[e].image?s[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${s[e].name}`}),i.createElement("div",null,i.createElement("div",{className:o},"Author:"),i.createElement("div",null,i.createElement("a",{href:s[e].link,target:"_blank"},s[e].name),", ",s[e].title))))),i.createElement("hr",null)))}},54322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),r=n(50358);const o={id:"index-dotnet-rate-limiting",title:"How to implement a Fixed Window Rate Limiting app using ASP.NET Core & Redis",sidebar_label:"Fixed Window Rate Limiting app using ASP.NET",slug:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",authors:["steve"]},l=void 0,s={unversionedId:"develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-dotnet-rate-limiting",id:"develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-dotnet-rate-limiting",title:"How to implement a Fixed Window Rate Limiting app using ASP.NET Core & Redis",description:"In this tutorial, we will build an app that implements basic fixed-window rate limiting using Redis & ASP.NET Core.",source:"@site/docs/develop/dotnet/aspnetcore/rate-limiting/fixed-window/fixed-window.mdx",sourceDirName:"develop/dotnet/aspnetcore/rate-limiting/fixed-window",slug:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",permalink:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/aspnetcore/rate-limiting/fixed-window/fixed-window.mdx",tags:[],version:"current",lastUpdatedAt:1667838924,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"index-dotnet-rate-limiting",title:"How to implement a Fixed Window Rate Limiting app using ASP.NET Core & Redis",sidebar_label:"Fixed Window Rate Limiting app using ASP.NET",slug:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window",authors:["steve"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/develop/dotnet/"},next:{title:"Sliding Window Rate Limiting app  using ASP.NET",permalink:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Startup Redis",id:"startup-redis",level:2},{value:"Create Project",id:"create-project",level:2},{value:"Initialize The Multiplexer",id:"initialize-the-multiplexer",level:2},{value:"Inject the ConnectionMultiplexer",id:"inject-the-connectionmultiplexer",level:2},{value:"Add a Simple Route",id:"add-a-simple-route",level:2},{value:"Fixed Window Rate Limiting Lua Script",id:"fixed-window-rate-limiting-lua-script",level:2},{value:"Loading the Script",id:"loading-the-script",level:2},{value:"Executing the Script",id:"executing-the-script",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{frontMatter:o,mdxType:"Authors"}),(0,a.kt)("p",null,"In this tutorial, we will build an app that implements basic fixed-window rate limiting using Redis & ASP.NET Core."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Must have the ",(0,a.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet/5.0"},".NET 5+ SDK")," installed"),(0,a.kt)("li",{parentName:"ul"},"Some way of running Redis, for this tutorial we'll use ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop")),(0,a.kt)("li",{parentName:"ul"},"IDE for writing C# ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"VS Code"),", ",(0,a.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Visual Studio"),", or ",(0,a.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/rider/"},"Rider"))),(0,a.kt)("h2",{id:"startup-redis"},"Startup Redis"),(0,a.kt)("p",null,"Before we begin, startup Redis. For this example, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/redis"},"Redis docker image"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -dp 6379:6379 redis\n")),(0,a.kt)("h2",{id:"create-project"},"Create Project"),(0,a.kt)("p",null,"In your terminal, navigate to where you want the app to live and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," dotnet new webapi -n FixedRateLimiter --no-https\n")),(0,a.kt)("p",null,"Change directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"FixedRateLimiter")," and run the below command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dotnet add package StackExchange.Redis")),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"FixedRateLimiter.csproj")," file in Visual Studio or Rider (or open the folder in VS Code) and in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Controllers")," folder, add an API controller called ",(0,a.kt)("inlineCode",{parentName:"p"},"RateLimitedController"),", when all this is complete, ",(0,a.kt)("inlineCode",{parentName:"p"},"RateLimitedController.cs")," should look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'  namespace FixedRateLimiter.Controllers\n {\n    [ApiController]\n    [Route("api/[controller]")]\n    public class RateLimitedController : ControllerBase\n    {\n\n    }\n }\n')),(0,a.kt)("h2",{id:"initialize-the-multiplexer"},"Initialize The Multiplexer"),(0,a.kt)("p",null,"To use Redis, we're going to initialize an instance of the ConnectionMultiplexer from ",(0,a.kt)("inlineCode",{parentName:"p"},"StackExchange.Redis"),", to do so, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," method inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," and add the following line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},' services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect("localhost"));\n')),(0,a.kt)("h2",{id:"inject-the-connectionmultiplexer"},"Inject the ConnectionMultiplexer"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"RateLimitedController.cs")," inject the ConnectionMultiplexer into the controller and pull out an ",(0,a.kt)("inlineCode",{parentName:"p"},"IDatabase")," object from it with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"}," private readonly IDatabase _db;\n public RateLimitedController(IConnectionMultiplexer mux)\n {\n    _db = mux.GetDatabase();\n }\n")),(0,a.kt)("h2",{id:"add-a-simple-route"},"Add a Simple Route"),(0,a.kt)("p",null,"We will add a simple route that we will Rate Limit; it will be a POST request route on our controller. This POST request will use ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic auth")," - this means that each request is going to expect a header of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Basic <base64encoded>")," where the ",(0,a.kt)("inlineCode",{parentName:"p"},"base64encoded")," will be a string of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey:apiSecret")," base64 encoded, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="),". This route will parse the key out of the header and return an OK result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"}," [HttpPost(\"simple\")]\n public async Task<IActionResult> Simple([FromHeader]string authorization)\n {\n    var encoded = string.Empty;\n    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;\n    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();\n    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(':')[0];\n    return Ok();\n }\n")),(0,a.kt)("p",null,"With that setup, you should run the project with a ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet run"),", and if you issue a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:5001/api/RateLimited/simple")," - with apiKey ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar")," and password ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),", you will get a 200 OK response back."),(0,a.kt)("p",null,"You can use this cURL request to elicit that response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' curl -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/RateLimited/simple\n')),(0,a.kt)("h2",{id:"fixed-window-rate-limiting-lua-script"},"Fixed Window Rate Limiting Lua Script"),(0,a.kt)("p",null,"We are going to build a Fixed Window Rate limiting script. A fixed Window Rate Limiter will limit the number of requests in a particular window in time. In our example, we will limit the number of requests to a specific route for a specific API Key. So, for example, if we have the apiKey ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar")," hitting our route ",(0,a.kt)("inlineCode",{parentName:"p"},"api/ratelimited/simple")," at 12:00:05 and we have a 60-second window, in which you can send no more than ten requests, we need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Format a key from our info, e.g. Route:ApiKey:time-window - in our case, this would be ",(0,a.kt)("inlineCode",{parentName:"li"},"api/ratelimited/simple:foobar:12:00")),(0,a.kt)("li",{parentName:"ol"},"Increment the current value of that key"),(0,a.kt)("li",{parentName:"ol"},"Set the expiration for that key for 60 seconds"),(0,a.kt)("li",{parentName:"ol"},"If the current value of the key is less than or equal to the max requests allowed, increment the key and return false (not rate limited)"),(0,a.kt)("li",{parentName:"ol"},"If the current value of the key is greater than or equal to the max number of requests allowed, return true (rate limited)")),(0,a.kt)("p",null,"The issue we need to contend with here is that this rate-limiting requires atomicity for all our commands (e.g. between when we get and increment the key we don't want anyone coming in and hitting it). Because of this, we will run everything on the server through a ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/commands/eval"},"Lua script"),". Now there are two ways to write this Lua script. The traditional way, where you drive everything off of keys and arguments, the following"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," local key = KEYS[1]\n local max_requests = tonumber(ARGV[1])\n local expiry = tonumber(ARGV[2])\n local requests = redis.call('INCR',key)\n redis.call('EXPIRE', key, expiry)\n if requests < max_requests then\n     return 0\n else\n    return 1\n end\n")),(0,a.kt)("p",null,"Alternatively, StackExchange.Redis contains support for a ",(0,a.kt)("a",{parentName:"p",href:"https://stackexchange.github.io/StackExchange.Redis/Scripting.html"},"more readable mode of scripting")," they will let you name arguments to your script, and the library will take care of filling in the appropriate items at execution time. That mode of scripting, which we will use here, will produce this script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," local requests = redis.call('INCR',@key)\n redis.call('EXPIRE', @key, @expiry)\n if requests < tonumber(@maxRequests) then\n     return 0\n else\n     return 1\n end\n")),(0,a.kt)("h2",{id:"loading-the-script"},"Loading the Script"),(0,a.kt)("p",null,"To run a Lua script with StackExchange.Redis, you need to prepare a script and run it. So consequentially add a new file ",(0,a.kt)("inlineCode",{parentName:"p"},"Scripts.cs")," to the project, and in that file add a new static class called ",(0,a.kt)("inlineCode",{parentName:"p"},"Scripts"),"; this will contain a constant string containing our script and a getter property to prepare the script for execution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"}," using StackExchange.Redis;\n namespace FixedRateLimiter\n {\n     public static class Scripts\n     {\n         public static LuaScript RateLimitScript => LuaScript.Prepare(RATE_LIMITER);\n\n        private const string RATE_LIMITER = @\"\n            local requests = redis.call('INCR',@key)\n            redis.call('EXPIRE', @key, @expiry)\n            if requests < tonumber(@maxRequests) then\n                return 0\n            else\n                return 1\n            end\n            \";\n    }\n }\n")),(0,a.kt)("h2",{id:"executing-the-script"},"Executing the Script"),(0,a.kt)("p",null,"With the script setup, all that's left to do is build our key, run the script, and check the result. We already extracted the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey")," earlier, so; we will use that, the request path, and the current time to create our key. Then, we will run ",(0,a.kt)("inlineCode",{parentName:"p"},"ScriptEvaluateAsync")," to execute the script, and we will use the result of that to determine whether to return a 429 or our JSON result. Add the following just ahead of the return in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},' var script = Scripts.RateLimitScript;\n var key = $"{Request.Path.Value}:{apiKey}:{DateTime.Now:hh:mm}";\n var res = await _db.ScriptEvaluateAsync(script, new {key = new RedisKey(key), expiry = 60, maxRequests = 10});\n if ((int) res == 1)\n     return new StatusCodeResult(429);\n')),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple")," route's code should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},' [HttpPost("simple")]\n public async Task<IActionResult> Simple([FromHeader]string authorization)\n {\n     var encoded = string.Empty;\n    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;\n    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();\n    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(\':\')[0];\n    var script = Scripts.RateLimitScript;\n    var key = $"{Request.Path.Value}:{apiKey}:{DateTime.UtcNow:hh:mm}";\n    var res = await _db.ScriptEvaluateAsync(script, new {key = new RedisKey(key), expiry = 60, maxRequests = 10});\n    if ((int) res == 1)\n        return new StatusCodeResult(429);\n    return new JsonResult(new {key});\n }\n')),(0,a.kt)("p",null,"Now, if we start our server back up with ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet run")," and try running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' for n in {1..21}; do echo $(curl -s -w " HTTP %{http_code}, %{time_total} s" -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/ratelimited/simple); sleep 0.5; done\n')),(0,a.kt)("p",null,"You will see some of your requests return a ",(0,a.kt)("inlineCode",{parentName:"p"},"200"),", and at least one request return a ",(0,a.kt)("inlineCode",{parentName:"p"},"429"),". How many depends on the time at which you start sending the request. Recall, the requests are time-boxed on single-minute windows, so if you transition to the next minute in the middle of the 21 requests, the counter will reset. Hence, you should expect to receive somewhere between 10 and 20 OK results and between 1 and 11 ",(0,a.kt)("inlineCode",{parentName:"p"},"429")," results. The Response should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},' HTTP 200, 0.002680 s\n HTTP 200, 0.001535 s\n HTTP 200, 0.001653 s\n HTTP 200, 0.001449 s\n HTTP 200, 0.001604 s\n HTTP 200, 0.001423 s\n HTTP 200, 0.001492 s\n HTTP 200, 0.001449 s\n HTTP 200, 0.001551 s\n {"status":429,"traceId":"00-16e9da63f77c994db719acff5333c509-f79ac0c862c5a04c-00"} HTTP 429, 0.001803 s\n {"status":429,"traceId":"00-3d2e4e8af851024db121935705d5425f-0e23eb80eae0d549-00"} HTTP 429, 0.001521 s\n {"status":429,"traceId":"00-b5e824c9ebc4f94aa0bda2a414afa936-8020a7b8f2845544-00"} HTTP 429, 0.001475 s\n {"status":429,"traceId":"00-bd6237c5d0362a409c436dcffd0d4a7a-87b544534f397247-00"} HTTP 429, 0.001549 s\n {"status":429,"traceId":"00-532d64033c54a148a98d8efe1f9f53b2-b1dbdc7d8fbbf048-00"} HTTP 429, 0.001476 s\n {"status":429,"traceId":"00-8c210b1c1178554fb10aa6a7540d3488-0fedba48e38fdd4b-00"} HTTP 429, 0.001606 s\n {"status":429,"traceId":"00-633178f569dc8c46badb937c0363cda8-ab1d1214b791644d-00"} HTTP 429, 0.001661 s\n {"status":429,"traceId":"00-12f01e448216c64b8bfe674f242a226f-d90ff362926aa14e-00"} HTTP 429, 0.001858 s\n {"status":429,"traceId":"00-63ef51cee3bcb6488b04395f09d94def-be9e4d6d6057754a-00"} HTTP 429, 0.001622 s\n {"status":429,"traceId":"00-80a971db60fdf543941e2457e35ac2fe-3555f5cb9c907e4c-00"} HTTP 429, 0.001710 s\n {"status":429,"traceId":"00-f718734ae0285343ac927df617eeef92-91a49e127f2e4245-00"} HTTP 429, 0.001582 s\n {"status":429,"traceId":"00-9da2569cce4d714480dd4f0edc0506d2-8a1ce375b1a9504f-00"} HTTP 429, 0.001629 s\n')),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/fixed-rate-limiter-aspnet-core"},"Source Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window"},"How to Implement Sliding Window Rate Limiting with ASP.NET Core & Redis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/dotnet/aspnetcore/rate-limiting/middleware"},"Configurable Sliding Window Rate Limiting Middleware for Redis & ASP.NET Core")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/dotnet/"},"Getting Started with .NET and Redis"))),(0,a.kt)("h2",{id:""}),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,a.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0}}]);