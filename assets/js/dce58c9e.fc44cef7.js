"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3575],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(a),c=s,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||i;return a?r.createElement(h,n(n({ref:t},m),{},{components:a})):r.createElement(h,n({ref:t},m))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,n=new Array(i);n[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,n[1]=o;for(var d=2;d<i;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),s=a(52263);const i="authorByline_VoxI",n="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,s.Z)(),l=a.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:i},r.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:n},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},5978:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=a(87462),s=(a(67294),a(3905)),i=a(50358);const n={id:"index-prometheus",title:"How to monitor Redis with Prometheus and Grafana for Real-Time Analytics",sidebar_label:"Using RedisTimeSeries with Prometheus and Grafana",slug:"/operate/observability/prometheus",authors:["ajeet"]},o=void 0,l={unversionedId:"operate/observability/prometheus/index-prometheus",id:"operate/observability/prometheus/index-prometheus",title:"How to monitor Redis with Prometheus and Grafana for Real-Time Analytics",description:"My Image",source:"@site/docs/operate/observability/prometheus/index-prometheus.mdx",sourceDirName:"operate/observability/prometheus",slug:"/operate/observability/prometheus",permalink:"/operate/observability/prometheus",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/observability/prometheus/index-prometheus.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-prometheus",title:"How to monitor Redis with Prometheus and Grafana for Real-Time Analytics",sidebar_label:"Using RedisTimeSeries with Prometheus and Grafana",slug:"/operate/observability/prometheus",authors:["ajeet"]},sidebar:"docs",previous:{title:"Redis Enterprise Observability with Datadog",permalink:"/operate/observability/datadog"},next:{title:"Overview",permalink:"/operate/provisioning"}},d={},m=[{value:"When do you use a time-series database?",id:"when-do-you-use-a-time-series-database",level:3},{value:"Challenges with the existing traditional databases",id:"challenges-with-the-existing-traditional-databases",level:3},{value:"What is RedisTimeSeries?",id:"what-is-redistimeseries",level:3},{value:"Notables features of RedisTimeseries includes:",id:"notables-features-of-redistimeseries-includes",level:3},{value:"Why Prometheus?",id:"why-prometheus",level:3},{value:"Prometheus remote storage adapter for RedisTimeSeries",id:"prometheus-remote-storage-adapter-for-redistimeseries",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Step 1. Clone the repository",id:"step-1-clone-the-repository",level:3},{value:"Step 2. Examining the Docker Compose File",id:"step-2-examining-the-docker-compose-file",level:3},{value:"Prometheus",id:"prometheus",level:4},{value:"Storage Adapter",id:"storage-adapter",level:4},{value:"Redis",id:"redis",level:4},{value:"Grafana",id:"grafana",level:4},{value:"Step 3. Run the Docker Compose",id:"step-3-run-the-docker-compose",level:3},{value:"Step 4. Accessing Grafana",id:"step-4-accessing-grafana",level:3},{value:"Step 5. Add Prometheus Data Source",id:"step-5-add-prometheus-data-source",level:3},{value:"Step 6. Importing Prometheus Data Source",id:"step-6-importing-prometheus-data-source",level:3},{value:"Step 7. Adding Redis Data Source",id:"step-7-adding-redis-data-source",level:3},{value:"Step 8. Running the Sensor Script",id:"step-8-running-the-sensor-script",level:3},{value:"Step 9. Accessing Prometheus Dashboard",id:"step-9-accessing-prometheus-dashboard",level:3},{value:"Further References:",id:"further-references",level:3}],u={toc:m};function p(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{frontMatter:n,mdxType:"Authors"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:a(58952).Z,width:"1246",height:"682"})),(0,s.kt)("p",null,"Time-series data is basically a series of data stored in time order and produced continuously over a long period of time. These measurements and events are tracked, monitored, downsampled, and aggregated over time. The events could be, for example, IoT sensor data. Every sensor is a source of time-series data. Each data point in the series stores the source information and other sensor measurements as labels. Data labels from every source may not conform to the same structure or order."),(0,s.kt)("p",null,"A time-series database is a database system designed to store and retrieve such data for each point in time. Timestamped data can include data generated at regular intervals as well as data generated at unpredictable intervals."),(0,s.kt)("h3",{id:"when-do-you-use-a-time-series-database"},"When do you use a time-series database?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"When your application needs data that accumulates quickly and your other databases aren\u2019t designed to handle that scale."),(0,s.kt)("li",{parentName:"ul"},"For financial or industrial applications."),(0,s.kt)("li",{parentName:"ul"},"When your application needs to perform real-time analysis of billions of records."),(0,s.kt)("li",{parentName:"ul"},"When your application needs to perform online queries at millisecond timescales, and support CPU-efficient ad-hoc queries.")),(0,s.kt)("h3",{id:"challenges-with-the-existing-traditional-databases"},"Challenges with the existing traditional databases"),(0,s.kt)("p",null,"You might find numerous solutions that still store time-series data in a relational database, but they\u2019re quite inefficient and come with their own set of drawbacks. A typical time-series database is usually built to only manage time-series data, hence one of the challenges it faces is with use cases that involve some sort of computation on top of time-series data. One good example could be capturing a live video feed in a time-series database. If you want to run an AI model for face recognition, you would have to extract the time-series data, apply some sort of data transformation and then do computation.\nRelational databases carry the overhead of locking and synchronization that aren\u2019t required for the immutable time-series data. This results in slower-than-required performance for both ingest and queries. When scaling out, it also means investing in additional compute resources. These databases enforce a rigid structure for labels and can\u2019t accommodate unstructured data. They also require scheduled jobs for cleaning up old data. Beyond the time-series use case, these databases are also used for other use cases, which means overuse of running time-series queries may affect other workloads."),(0,s.kt)("h3",{id:"what-is-redistimeseries"},"What is RedisTimeSeries?"),(0,s.kt)("p",null,"RedisTimeSeries is a purpose-built time-series database that addresses the needs of handling time-series data. It removes the limitations enforced by relational databases and enables you to collect, manage, and deliver time-series data at scale. As an in-memory database, RedisTimeSeries can ingest over 500,000 records per second on a standard node. Our benchmarks show that you can ingest over 11.5 million records per second with a cluster of 16 Redis shards."),(0,s.kt)("p",null,"RedisTimeSeries is resource-efficient. With RedisTimeSeries, you can add rules to compact data by downsampling. For example, if you\u2019ve collected more than one billion data points in a day, you could aggregate the data by every minute in order to downsample it, thereby reducing the dataset size to 1,440 data points (24 ","*"," 60 = 1,440). You can also set data retention policies and expire the data by time when you don\u2019t need them anymore. RedisTimeSeries allows you to aggregate data by average, minimum, maximum, sum, count, range, first, and last. You can run over 100,000 aggregation queries per second with sub-millisecond latency. You can also perform reverse lookups on the labels in a specific time range."),(0,s.kt)("h3",{id:"notables-features-of-redistimeseries-includes"},"Notables features of RedisTimeseries includes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"High volume inserts, low latency reads"),(0,s.kt)("li",{parentName:"ul"},"Query by start time and end-time"),(0,s.kt)("li",{parentName:"ul"},"Aggregated queries (Min, Max, Avg, Sum, Range, Count, First, Last, STD.P, STD.S, Var.P, Var.S) for any time bucket"),(0,s.kt)("li",{parentName:"ul"},"Configurable maximum retention period"),(0,s.kt)("li",{parentName:"ul"},"Downsampling/Compaction - automatically updated aggregate time series"),(0,s.kt)("li",{parentName:"ul"},"Secondary index - each time series has labels (field value pairs) which will allows to query by labels")),(0,s.kt)("h3",{id:"why-prometheus"},"Why Prometheus?"),(0,s.kt)("p",null,"Prometheus is an open-source systems monitoring and alerting toolkit. It collects and stores its metrics as time series data, i.e. metrics information. The metrics are numeric measurements in a time series, meaning changes recorded over time. These metrics are stored with the timestamp at which it was recorded, alongside optional key-value pairs called labels. Metrics play an important role in understanding why your application is working in a certain way."),(0,s.kt)("h3",{id:"prometheus-remote-storage-adapter-for-redistimeseries"},"Prometheus remote storage adapter for RedisTimeSeries"),(0,s.kt)("p",null,"In the RedisTimeSeries organization you can find projects that help you integrate RedisTimeSeries with other tools, including Prometheus and Grafana. The Prometheus remote storage adapter for RedisTimeSeries is available and the project is hosted ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/RedisTimeSeries/prometheus-redistimeseries-adapter."},"on GitHub here")," It\u2019s basically a read/write adapter to use RedisTimeSeries as a backend database. RedisTimeSeries Adapter receives Prometheus metrics via the remote write, and writes to Redis with the RedisTimeSeries module."),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install GIT"),(0,s.kt)("li",{parentName:"ul"},"Install Docker"),(0,s.kt)("li",{parentName:"ul"},"Install Docker Compose")),(0,s.kt)("h3",{id:"step-1-clone-the-repository"},"Step 1. Clone the repository"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," git clone https://github.com/RedisTimeSeries/prometheus-redistimeseries-adapter\n")),(0,s.kt)("h3",{id:"step-2-examining-the-docker-compose-file"},"Step 2. Examining the Docker Compose File"),(0,s.kt)("p",null,"This Docker compose defines 4 services -"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Prometheus"),(0,s.kt)("li",{parentName:"ol"},"Adapter"),(0,s.kt)("li",{parentName:"ol"},"Grafana"),(0,s.kt)("li",{parentName:"ol"},"Redis")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},' version: \'3\'\n services:\n   prometheus:\n     image: "prom/prometheus:v2.8.0"\n     command: ["--config.file=/prometheus.yml"]\n     volumes:\n       - ./prometheus.yaml:/prometheus.yml\n     ports:\n       - 9090:9090\n  adapter:\n    image: "redislabs/prometheus-redistimeseries-adapter:master"\n    command: ["-redis-address", "redis:6379", "-web.listen-address", "0.0.0.0:9201"]\n  redis:\n    image: "redislabs/redistimeseries:edge"\n    ports:\n      - "6379:6379"\n  grafana:\n    build: ./grafana/\n    ports:\n      - "3000:3000"\n')),(0,s.kt)("h4",{id:"prometheus"},"Prometheus"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus")," service directly uses an image \u201cprom/prometheus\u201d that\u2019s pulled from Docker Hub. It then binds the container and the host machine to the exposed port, 9090. The Prometheus configuration file is accessed by mounting the volume on the host and container."),(0,s.kt)("h4",{id:"storage-adapter"},"Storage Adapter"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"adapter")," service uses an image \u201c",(0,s.kt)("inlineCode",{parentName:"p"},"redislabs/prometheus-redistimeseries-adapter:master"),"\u201d that\u2019s pulled from Docker Hub. Sets the default command for the container: ",(0,s.kt)("inlineCode",{parentName:"p"},'-redis-address", "redis:6379 and listen to the address 0.0.0.0:9201. ')),(0,s.kt)("h4",{id:"redis"},"Redis"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Redis")," service directly uses an image \u201c",(0,s.kt)("inlineCode",{parentName:"p"},"redislabs/redistimeseries:edge"),"\u201d that\u2019s pulled from Docker Hub. It then binds the container and the host machine to the exposed port, ",(0,s.kt)("inlineCode",{parentName:"p"},"6379")),(0,s.kt)("h4",{id:"grafana"},"Grafana"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"grafana")," service uses an image that\u2019s built from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the current directory. It then binds the container and the host machine to the exposed port, ",(0,s.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,s.kt)("h3",{id:"step-3-run-the-docker-compose"},"Step 3. Run the Docker Compose"),(0,s.kt)("p",null,"Change directory to compose and execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," docker-compose up -d\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},' docker-compose ps\n NAME                   COMMAND                  SERVICE             STATUS              PORTS\n compose-adapter-1      "/adapter/redis-ts-a\u2026"   adapter             running\n compose-grafana-1      "/run.sh"                grafana             running             0.0.0.0:3000->3000/tcp\n compose-prometheus-1   "/bin/prometheus --c\u2026"   prometheus          running             0.0.0.0:9090->9090/tcp\n compose-redis-1        "docker-entrypoint.s\u2026"   redis               running             0.0.0.0:6379->6379/tcp\n')),(0,s.kt)("h3",{id:"step-4-accessing-grafana"},"Step 4. Accessing Grafana"),(0,s.kt)("p",null,"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"http://hostIP:3000")," to access the Grafana dashboard. The default username and password is admin/admin."),(0,s.kt)("h3",{id:"step-5-add-prometheus-data-source"},"Step 5. Add Prometheus Data Source"),(0,s.kt)("p",null,"In the left sidebar, you will see the \u201cConfiguration\u201d option. Select \u201cData Source\u201d and choose Prometheus."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Adding the Prometheus data source",src:a(83979).Z,width:"1234",height:"954"})),(0,s.kt)("p",null,"Click \u201cSave and Test\u201d."),(0,s.kt)("h3",{id:"step-6-importing-prometheus-data-source"},"Step 6. Importing Prometheus Data Source"),(0,s.kt)("p",null,"Click on \u201cImport\u201d for all the Prometheus dashboards."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Importing the Prometheus data source",src:a(47475).Z,width:"1238",height:"332"})),(0,s.kt)("h3",{id:"step-7-adding-redis-data-source"},"Step 7. Adding Redis Data Source"),(0,s.kt)("p",null,"Again, click on \u201cData Sources\u201d and add Redis."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Adding the Redis data source",src:a(83285).Z,width:"1228",height:"1468"})),(0,s.kt)("p",null,'Click "Import".'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Importing the Redis data source",src:a(76456).Z,width:"1248",height:"334"})),(0,s.kt)("h3",{id:"step-8-running-the-sensor-script"},"Step 8. Running the Sensor Script"),(0,s.kt)("p",null,"It\u2019s time to test drive a few demo scripts built by the Redis team. To start with, clone the following repository:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," git clone https://github.com/RedisTimeSeries/prometheus-demos\n")),(0,s.kt)("p",null,"This repo contains a set of basic demoes showcasing the integration of RedisTimeSeries with Prometheus and Grafana. Let\u2019s pick up a sensor script."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," python3 weather_station/sensors.py\n")),(0,s.kt)("p",null,"This script will add random measurements for temperature and humidity for a number of sensors."),(0,s.kt)("p",null,"Go to \u201cAdd Panel\u201d on the top right corner of the Grafana dashboard and start adding temperature and humidity values."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(507).Z,width:"1240",height:"914"})),(0,s.kt)("h3",{id:"step-9-accessing-prometheus-dashboard"},"Step 9. Accessing Prometheus Dashboard"),(0,s.kt)("p",null,"Open up ",(0,s.kt)("inlineCode",{parentName:"p"},"https://HOSTIP:9090")," to access the Prometheus dashboard for the sensor values without any further configuration."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Accessing the Prometheus dashboard",src:a(61257).Z,width:"1248",height:"478"})),(0,s.kt)("h3",{id:"further-references"},"Further References:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/RedisTimeSeries/prometheus-redistimeseries-adapter"},"Prometheus remote storage adapter for RedisTimeSeries")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/storage/#remote-storage-integrations"},"Remote Storage Integration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/RedisTimeSeries/prometheus-demos"},"RedisTimeSeries Demos"))),(0,s.kt)("h2",{id:""}),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,s.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}p.isMDXComponent=!0},83979:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image1-bab05659cae640beaeb6f604dabf4e44.png"},47475:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image2-10a9b72a6b3597691a220205dcf18595.png"},83285:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image_3-285fc4cfb3bfcccb558dc455c5850105.png"},76456:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image_4-60b4ccc9309bb344408ba935aa028d08.png"},507:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image_7-2e061ed4b7ecd857a48684b321033656.png"},61257:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image_8-50413c6d320fe3eca173d75db7c84e11.png"},58952:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prometheus-aa354720e8c5c1f6c3bf1efc0f66661f.png"}}]);