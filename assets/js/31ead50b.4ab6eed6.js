"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[2295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(67294),a=n(52263);const s="authorByline_VoxI",o="authorLabel_a70t",r="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,a.Z)(),l=n.customFields.authors;return i.createElement(i.Fragment,null,t.authors&&i.createElement("div",{className:"docAuthors"},i.createElement("hr",null),t.authors.map((e=>i.createElement("div",{key:e,className:s},i.createElement("img",{className:r,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),i.createElement("div",null,i.createElement("div",{className:o},"Author:"),i.createElement("div",null,i.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),i.createElement("hr",null)))}},96766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),s=n(50358);const o={id:"index-jenkins",title:"How to Deploy a Redis Enterprise Database from a Jenkins Pipeline",sidebar_label:"Redis using Jenkins",slug:"/operate/continuous-integration-continuous-deployment/jenkins",authors:["ajeet","matthew"]},r=void 0,l={unversionedId:"operate/continuous-integration-continuous-deployment/jenkins/index-jenkins",id:"operate/continuous-integration-continuous-deployment/jenkins/index-jenkins",title:"How to Deploy a Redis Enterprise Database from a Jenkins Pipeline",description:"Jenkins is currently the most popular CI tool, with ~15M users. It is an open source automation server which enables developers to reliably build, test, and deploy their software. It was forked in 2011 from a project called Hudson after a dispute with Oracle, and is used for Continuous Integration and Continuous Delivery (CI/CD) and test automation. Jenkins is based on Java and provides over 1700 plugins to automate your developer workflow and save a lot of your time in executing your repetitive tasks.",source:"@site/docs/operate/continuous-integration-continuous-deployment/jenkins/index-jenkins.mdx",sourceDirName:"operate/continuous-integration-continuous-deployment/jenkins",slug:"/operate/continuous-integration-continuous-deployment/jenkins",permalink:"/operate/continuous-integration-continuous-deployment/jenkins",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/continuous-integration-continuous-deployment/jenkins/index-jenkins.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-jenkins",title:"How to Deploy a Redis Enterprise Database from a Jenkins Pipeline",sidebar_label:"Redis using Jenkins",slug:"/operate/continuous-integration-continuous-deployment/jenkins",authors:["ajeet","matthew"]},sidebar:"docs",previous:{title:"Overview",permalink:"/operate/continuous-integration-continuous-deployment"},next:{title:"Redis using CircleCI",permalink:"/operate/continuous-integration-continuous-deployment/circleci"}},p={},c=[{value:"Architecture",id:"architecture",level:3},{value:"Process",id:"process",level:3},{value:"List of Pipeline Code Files",id:"list-of-pipeline-code-files",level:3},{value:"Configuring Jenkins",id:"configuring-jenkins",level:2},{value:"Installing Jenkins",id:"installing-jenkins",level:3},{value:"Installing Python and custom libraries",id:"installing-python-and-custom-libraries",level:3},{value:"Add credentials to Secret Store",id:"add-credentials-to-secret-store",level:3},{value:"Create the Jenkins pipeline",id:"create-the-jenkins-pipeline",level:3},{value:"Connect GitHub repository",id:"connect-github-repository",level:2},{value:"Redis pipeline Jenkinsfile",id:"redis-pipeline-jenkinsfile",level:3},{value:"Run the Jenkins pipeline",id:"run-the-jenkins-pipeline",level:3},{value:"Further Reading",id:"further-reading",level:3}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{frontMatter:o,mdxType:"Authors"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/"},"Jenkins")," is currently ",(0,a.kt)("a",{parentName:"p",href:"https://cd.foundation/announcement/2019/08/14/jenkins-celebrates-15-years/"},"the most popular CI tool"),", with ~15M users. It is an open source automation server which enables developers to reliably build, test, and deploy their software. It was forked in 2011 from a project called Hudson after a ",(0,a.kt)("a",{parentName:"p",href:"https://www.infoq.com/news/2011/01/jenkins/"},"dispute with Oracle"),", and is used for ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/28608015/continuous-integration-vs-continuous-delivery-vs-continuous-deployment"},"Continuous Integration and Continuous Delivery (CI/CD)")," and test automation. Jenkins is based on Java and provides over ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/"},"1700 plugins")," to automate your developer workflow and save a lot of your time in executing your repetitive tasks."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(15542).Z,width:"1166",height:"958"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.datanyze.com/market-share/ci--319"},"Source:")," Datanyze market analysis"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/solutions/pipeline/"},"Jenkins Pipeline")," performs Continuous Delivery tasks declared in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkinsfile")," stored alongside your project's code. The ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/workflow-aggregator"},"Pipeline plugin")," has a fairly comprehensive ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/pipeline-plugin/blob/master/TUTORIAL.md"},"tutorial")," checked into its source tree. Using Pipeline, you can configure Jenkins to automatically deploy key pieces of infrastructure, such as a Redis database."),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Jenkins Pipelines are the Continuous Delivery (CD) side of Jenkins. They use a ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkinsfile")," declarative script to define the behavior of the pipeline. You can script actions in Groovy and run shell scripts from it, so you can make it do pretty much anything."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkinsfile")," instructs Jenkins to export some environment variables from the Credentials store in order to connect to the Redis server, then executes the Python pipeline script with the Deployment Configuration file given as a parameter. An example ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment-configuration-file.json")," looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "database": {\n    "name": "made-with-jenkins",\n    "port": 12345,\n    "size": "S",\n    "operation": "CREATE"\n  }\n}\n')),(0,a.kt)("p",null,"The Python script uses predefined JSON template files that create Redis databases of fixed t-shirt sizes (S, M, L, XL). The Deployment Config file tells the Python script what the desired database name, port, and size are. A sample template file looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "name": "{NAME}",\n    "type": "redis",\n    "memory_size": 343597383\n}\n')),(0,a.kt)("p",null,"The following is an architectural diagram of how a Jenkins pipeline adds a database to a Redis cluster."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture diagram",src:n(56926).Z,width:"1264",height:"1108"})),(0,a.kt)("h3",{id:"process"},"Process"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Jenkins pipeline clones a remote git repository, containing the application code and the pipeline code."),(0,a.kt)("li",{parentName:"ol"},"The Redis host, port, user, and password are decrypted from the credentials store and are exported as environment variables."),(0,a.kt)("li",{parentName:"ol"},"Jenkins runs the Python pipeline script, specifying the deployment configuration file in the git repo."),(0,a.kt)("li",{parentName:"ol"},"The Python script uses the deployment configuration file to choose and customize a pre-populated template to use as the body of the REST create database request to Redis.")),(0,a.kt)("h3",{id:"list-of-pipeline-code-files"},"List of Pipeline Code Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/masyukun/redis-jenkins-pipeline/blob/main/jenkins-re-pipeline.py"},"jenkins-re-pipeline.py"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The Python script that creates a Redis database through the Redis REST API."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/masyukun/redis-jenkins-pipeline/blob/main/deployment-configuration-file.json"},"deployment-configuration-file.json"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The user-specified configuration file for creating a database."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/masyukun/redis-jenkins-pipeline/blob/main/redis-standard-size-s.json.template"},"redis-standard-size-s.json.template")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/masyukun/redis-jenkins-pipeline/blob/main/redis-standard-size-xl.json.template"},"redis-standard-size-xl.json.template"))),(0,a.kt)("h2",{id:"configuring-jenkins"},"Configuring Jenkins"),(0,a.kt)("h3",{id:"installing-jenkins"},"Installing Jenkins"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop")," to quickly get a Jenkins instance up and running, exposing ports 8080 (web GUI) and 50000 (inbound agents)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --name jenk -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts-jdk11\n")),(0,a.kt)("p",null,"The installation will generate a first-run password in the docker-cli output."),(0,a.kt)("p",null,"Then open",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"}," http://localhost:8080/")," and enter the password to unlock your instance and begin installation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Beginning installation of Jenkins",src:n(72147).Z,width:"1232",height:"918"})),(0,a.kt)("p",null,'Choose "Install suggested plugins"'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Installing plugins",src:n(12971).Z,width:"1230",height:"698"})),(0,a.kt)("p",null,"Wait for the plugins to complete the installation process."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Plugin installation",src:n(37040).Z,width:"1174",height:"684"})),(0,a.kt)("p",null,"Next, you\u2019re prompted to create your admin user."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Creating an admin user",src:n(77001).Z,width:"1056",height:"568"})),(0,a.kt)("p",null,"Congratulations! Jenkins is ready!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Jenkins ready for use",src:n(14293).Z,width:"1128",height:"596"})),(0,a.kt)("h3",{id:"installing-python-and-custom-libraries"},"Installing Python and custom libraries"),(0,a.kt)("p",null,"If you use an existing instance of Jenkins, you can install Python and the custom libraries from the command line interface of that machine."),(0,a.kt)("p",null,"Docker instances of Jenkins can be accessed by shell using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker exec -it -u root jenk bash\n")),(0,a.kt)("p",null,"The Python pipeline script requires the libraries ",(0,a.kt)("inlineCode",{parentName:"p"},"click")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"requests"),". It also requires Python."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt-get update\napt-get install -y python3-pip\n\npip install --upgrade pip\npip install click\npip install requests\n")),(0,a.kt)("p",null,"Alternatively, if you are creating a new Jenkins from scratch, you can include these dependencies in a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," that builds off the base Jenkins image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FROM jenkins:latest\nUSER root\nRUN apt-get update\nRUN apt-get install -y python-pip\n\n# Install app dependencies\nRUN pip install --upgrade pip\nRUN pip3 install click\nRUN pip3 install requests\n")),(0,a.kt)("h3",{id:"add-credentials-to-secret-store"},"Add credentials to Secret Store"),(0,a.kt)("p",null,"Using the left-side menu, select ",(0,a.kt)("strong",{parentName:"p"},"Manage Jenkins"),", then select ",(0,a.kt)("strong",{parentName:"p"},"Manage Credentials"),", then click the link ",(0,a.kt)("strong",{parentName:"p"},"(global)"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding credentials",src:n(62221).Z,width:"1016",height:"1442"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding credentials",src:n(53527).Z,width:"1314",height:"984"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding credentials",src:n(15111).Z,width:"1220",height:"394"})),(0,a.kt)("p",null,"From here, you can specify Kind: ",(0,a.kt)("strong",{parentName:"p"},"Secret text")," for the 4 secrets required to connect with the Redis REST endpoint:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REDIS_SERVER_FQDN"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set to the 'https://server-address' of the target Redis instance."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REDIS_SERVER_PORT"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set to the Redis REST API port (default 9443)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REDIS_USER"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set to the Redis admin user allowed to create databases."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REDIS_PASS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set to the Redis admin user's password.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Managing secrets",src:n(22489).Z,width:"1312",height:"714"})),(0,a.kt)("p",null,"If you are using a private code repository, you may also wish to include a Personal Access Token here."),(0,a.kt)("h3",{id:"create-the-jenkins-pipeline"},"Create the Jenkins pipeline"),(0,a.kt)("p",null,"From the dashboard, click ",(0,a.kt)("strong",{parentName:"p"},"New Item"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Creating a new pipeline",src:n(23024).Z,width:"1072",height:"136"})),(0,a.kt)("p",null,"Enter in a name for the pipeline, and choose the ",(0,a.kt)("strong",{parentName:"p"},"Pipeline")," type."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Naming the pipeline",src:n(29916).Z,width:"1230",height:"852"})),(0,a.kt)("h2",{id:"connect-github-repository"},"Connect GitHub repository"),(0,a.kt)("p",null,"From the Pipeline configuration page that appears, check the ",(0,a.kt)("strong",{parentName:"p"},"GitHub")," box and enter the git clone URL, complete with any credentials needed to read the repository. For GitHub access, the password should be a Personal Access Token rather than the actual user password."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configuring GitHub access",src:n(15077).Z,width:"1260",height:"958"})),(0,a.kt)("h3",{id:"redis-pipeline-jenkinsfile"},"Redis pipeline Jenkinsfile"),(0,a.kt)("p",null,"Scrolling down on this page to the ",(0,a.kt)("strong",{parentName:"p"},"Advanced Project Options"),", you can either past in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkinsfile"),", or you can specify the filename if the file exists in the git repository."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Specifying your Jenkinsfile",src:n(49070).Z,width:"1254",height:"974"})),(0,a.kt)("p",null,"Here is an example ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkinsfile")," containing the mapping of Credentials to the environment variables, and 2 separate stages \u2013 a Hello World which always succeeds, and a build stage that invokes the Python script. Paste this into the pipeline script section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pipeline {\n    agent any\n\n    environment {\n        REDIS_SERVER_FQDN = credentials('REDIS_SERVER_FQDN')\n        REDIS_SERVER_PORT = credentials('REDIS_SERVER_PORT')\n        REDIS_USER =  credentials('REDIS_USER')\n        REDIS_PASS = credentials('REDIS_PASS')\n    }\n\n    stages {\n        stage('Hello') {\n            steps {\n                echo 'Hello World'\n            }\n        }\n\n        stage('build') {\n            steps {\n                git branch: 'main', url: 'https://github.com/masyukun/redis-jenkins-pipeline.git'\n                sh 'python3 jenkins-re-pipeline.py --deployfile deployment-configuration-file.json'\n            }\n        }\n    }\n}\n")),(0,a.kt)("p",null,'Click "Save" when the job spec is complete.'),(0,a.kt)("h3",{id:"run-the-jenkins-pipeline"},"Run the Jenkins pipeline"),(0,a.kt)("p",null,"Click on the pipeline you created:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting your pipeline",src:n(7850).Z,width:"1298",height:"350"})),(0,a.kt)("p",null,'Click the "Build Now" icon on the left side menu.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Building your pipeline",src:n(98695).Z,width:"1194",height:"146"})),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},"Status")," icon on the left side menu in order to see the results of all the output from each of the stages of your pipeline."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pipeline status",src:n(91255).Z,width:"588",height:"65"})),(0,a.kt)("p",null,"Hover over the ",(0,a.kt)("strong",{parentName:"p"},"build")," stage and click the ",(0,a.kt)("strong",{parentName:"p"},"Logs")," button of the most recent build in order to see the Python script\u2019s output."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Viewing the Python logs",src:n(23279).Z,width:"1178",height:"1256"})),(0,a.kt)("p",null,"Sample output: you should see a verbose response from Redis\u2019s REST service in the \u201cShell Script\u201d accordion pane."),(0,a.kt)("p",null,"There\u2019s also a \u201cGit\u201d output log, in case you need to debug something at that level. Any time you update the branch in the remote git repository, you should see evidence in that log that the latest changes have successfully checked out into the local Jenkins git repository."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Viewing the git log",src:n(28614).Z,width:"1280",height:"664"})),(0,a.kt)("p",null,"Open your Redis Enterprise Secure Management UI at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://servername:8443")," and click on the ",(0,a.kt)("strong",{parentName:"p"},"databases")," menu item to verify that your database was created with the name, port, and size specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment-configuration-file.json")," file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Verifying database creation",src:n(96950).Z,width:"1294",height:"514"})),(0,a.kt)("p",null,"Congratulations! You have deployed a Redis Enterprise database using a Jenkins Pipeline!"),(0,a.kt)("p",null,"The GitHub repository is currently: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/masyukun/redis-jenkins-pipeline"},"https://github.com/masyukun/redis-jenkins-pipeline")),(0,a.kt)("h3",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.com/blog/how-to-embed-redis-into-your-continuous-integration-and-continuous-deployment-ci-cd-process/"},"How to Embed Redis into Your CI-CD Process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.com/blog/top-redis-headaches-for-devops-replication-timeouts/"},"Top Redis Headaches for DevOps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.com/blog/why-devops-teams-love-redis-enterprise/"},"Top 5 Reasons why DevOps Love Redis Enterprise "))))}u.isMDXComponent=!0},15542:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image1-4e386043f7827b1bda8d7305cb3f7f80.png"},15111:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image10-337a7d618d4b3e2a68fe398ea0949f8c.png"},22489:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image11-6e9badbc39bb9afb3c356c473ad6d1d2.png"},23024:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image12-317412ca83ca76a48f843a10c34b8d60.png"},29916:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image13-03da47bcc5ff912e14e5b57dfac25691.png"},15077:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image14-4a445f149e3e0e3e10d851991019b98e.png"},49070:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image15-fb299c306a0fc0f746e0f895f33bd1fb.png"},7850:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image16-89223bac3b8a7bf1880a1bb6303c825d.png"},98695:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image17-7939c6d7b7c6ac7c6596e41004e22bca.png"},23279:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image18-5d79721432698a5513cd6e01ec77bede.png"},28614:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image19-47e4ee598665d37a8dc6f1391eba329e.png"},56926:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image2-9da933cf2801300653b9d75352556c7f.png"},96950:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image20-1feb77f8855252bdd6c20ddb7d370229.png"},72147:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image3-924e9232f908c25a531d841fbcb5c319.png"},12971:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image4-81b09ac89a9ee56e231a2fd498b8d9d7.png"},37040:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image5-9d6ea2f38b095695fd78888e02e00519.png"},77001:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image6-ee8ca594cb7de6f7364e45431e2eab8c.png"},14293:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image7-259db8acad6158405a6fba1bb86e5422.png"},62221:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image8-2edf57ed8b2f4ace164ddee77f3f6778.png"},53527:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image9-7d5801acf964fd1b5f45c595c7ccd212.png"},91255:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);