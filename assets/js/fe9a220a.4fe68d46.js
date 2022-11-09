"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=s,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),s=n(52263);const i="authorByline_VoxI",a="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,s.Z)(),l=n.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:i},r.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:a},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},85144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),s=(n(67294),n(3905)),i=n(50358);const a={id:"index-openshift",title:"How to deploy Redis Enterprise on Red Hat OpenShift Container Platform via OperatorHub",sidebar_label:"Redis on Red Hat OpenShift Container Platform",slug:"/create/openshift",authors:["karan","sumit","ajeet"]},o=void 0,l={unversionedId:"create/openshift/index-openshift",id:"create/openshift/index-openshift",title:"How to deploy Redis Enterprise on Red Hat OpenShift Container Platform via OperatorHub",description:"Deploying and managing containerized applications is not easy. The rise of microservice architecture has made it cumbersome to deploy containers across multiple environments. Given that containers can be spun up in seconds and at a much higher volume compared to VMs, managing containers across multiple platforms can be extremely challenging.",source:"@site/docs/create/openshift/index-openshift.mdx",sourceDirName:"create/openshift",slug:"/create/openshift",permalink:"/create/openshift",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/openshift/index-openshift.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-openshift",title:"How to deploy Redis Enterprise on Red Hat OpenShift Container Platform via OperatorHub",sidebar_label:"Redis on Red Hat OpenShift Container Platform",slug:"/create/openshift",authors:["karan","sumit","ajeet"]},sidebar:"docs",previous:{title:"Redis using Jenkins",permalink:"/create/jenkins"},next:{title:"Getting Started with Netlify and Redis",permalink:"/create/netlify/getting-started-with-netlify"}},p={},c=[{value:"What is OpenShift?",id:"what-is-openshift",level:3},{value:"Supported Technologies",id:"supported-technologies",level:3},{value:"What is OperatorHub?",id:"what-is-operatorhub",level:3},{value:"Pre-requisites:",id:"pre-requisites",level:3},{value:"Step 1. Login to Red Hat Openshift Container Platform(OCP)",id:"step-1-login-to-red-hat-openshift-container-platformocp",level:3},{value:"Step 2. Verify the status of nodes",id:"step-2-verify-the-status-of-nodes",level:3},{value:"Step 3. Create a New Project",id:"step-3-create-a-new-project",level:3},{value:"Step 4. Clone the Redis Enterprise on Kubernetes Github repository",id:"step-4-clone-the-redis-enterprise-on-kubernetes-github-repository",level:3},{value:"Step 5. Apply the SCC configuration",id:"step-5-apply-the-scc-configuration",level:3},{value:"Step 6. Provide the operator permissions for Redis Enterprise Operator and Cluster pods",id:"step-6-provide-the-operator-permissions-for-redis-enterprise-operator-and-cluster-pods",level:3},{value:"Step 7. Deploy Redis Enterprise Operator",id:"step-7-deploy-redis-enterprise-operator",level:3},{value:"Step 8. Create Redis Enterprise Cluster",id:"step-8-create-redis-enterprise-cluster",level:3},{value:"Step 9. Access Redis Enterprise Cluster Admin Console",id:"step-9-access-redis-enterprise-cluster-admin-console",level:3},{value:"Step 11. Create Redis Enterprise Database",id:"step-11-create-redis-enterprise-database",level:3},{value:"References:",id:"references",level:3}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{frontMatter:a,mdxType:"Authors"}),(0,s.kt)("p",null,"Deploying and managing containerized applications is not easy. The rise of microservice architecture has made it cumbersome to deploy containers across multiple environments. Given that containers can be spun up in seconds and at a much higher volume compared to VMs, managing containers across multiple platforms can be extremely challenging."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/kubernetes-engine"},"Red Hat OpenShift")," to the rescue! OpenShift, the leading enterprise Kubernetes platform, enables a cloud-like experience wherever it\u2019s deployed\u2014in the cloud, on premises, or at the edge. OpenShift is built upon Kubernetes, which is designed and built from the ground up to deploy and manage containerized applications across hundreds of compute nodes."),(0,s.kt)("h3",{id:"what-is-openshift"},"What is OpenShift?"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift"},"Red Hat OpenShift")," gives you the ability to choose where you build, deploy, and run applications, providing a consistent experience every time. OpenShift\u2019s full-stack automated operations and self-service provisioning for developers lets teams work together more efficiently to move ideas from development to production."),(0,s.kt)("p",null,"OpenShift ",(0,s.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/developers"},"focuses on developer experience")," and application security that\u2019s platform agnostic. OpenShift helps you develop and deploy applications to one or more hosts, which can be public-facing web applications or backend applications, including microservices or databases. Applications can be implemented in any programming language you choose; the only requirement is that the application can run within a container."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/container-platform"},"OpenShift Container Platform (OCP)")," is a set of modular components and services built on top of Red Hat Enterprise Linux and Kubernetes. OpenShift supports remote management, multitenancy, increased security, application lifecycle management, and provides self-service interfaces for developers."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Image",src:n(69856).Z,width:"631",height:"377"})),(0,s.kt)("p",null,"While OpenShift is built on Kubernetes, it extends the open source platform in several ways to make it suitable for enterprise operations teams:\nAutomated installation and operations for platform updates on the container host, the Kubernetes cluster, and application services\nA consistent Kubernetes platform portable across different infrastructures and clouds\nBuilt-in cluster and application monitoring using Prometheus and Grafana dashboards\nCentralized policy management and enforcement across clusters\nBuilt-in security checks for the entire container stack throughout the application life cycle"),(0,s.kt)("h3",{id:"supported-technologies"},"Supported Technologies"),(0,s.kt)("p",null,"OpenShift is fully pluggable and works with a wide range of technologies, including languages such as .NET, Java, Node.js, PHP, Python, Ruby, GoLang, and Perl as well as databases such as MariaDB, MongoDB, MySQL, PostgreSQL, and Redis. In addition, OpenShift is certified with and supports 100+ independent software vendors, including Redis Enterprise."),(0,s.kt)("h3",{id:"what-is-operatorhub"},"What is OperatorHub?"),(0,s.kt)("p",null,"OperatorHub is the web console interface in OpenShift Container Platform that cluster administrators use to discover, install, and manage operators. In a few clicks, users can subscribe to the software they like via operators and make it available to software developers and platform administrators across clusters or isolated namespace environments using Operator Lifecycle Manager (OLM)."),(0,s.kt)("p",null,"In this tutorial, you will learn how to deploy Redis Enterprise Cluster and Database on OpenShift using Redis Enterprise Kubernetes Operator."),(0,s.kt)("h3",{id:"pre-requisites"},"Pre-requisites:"),(0,s.kt)("p",null,"To follow this guide, you should have an OpenShift cluster with 3 or more worker nodes. There are multiple ways to provision an OpenShift cluster, ",(0,s.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/installing/index.html"},"you can follow the installation guide")," based on your preferred infrastructure or cloud provider. Redis Enterprise Operator currently supports OpenShift 3.11 and OpenShift 4.x. ",(0,s.kt)("a",{parentName:"p",href:"https://docs.redis.com/latest/kubernetes/reference/supported_k8s_distributions/"},"Visit this page")," to find all the supported Kubernetes distributions."),(0,s.kt)("p",null,"In this guide we are using a self-managed OpenShift Cluster on Google Cloud Platform."),(0,s.kt)("h3",{id:"step-1-login-to-red-hat-openshift-container-platformocp"},"Step 1. Login to Red Hat Openshift Container Platform(OCP)"),(0,s.kt)("p",null,"You can login to OCP via CLI and user with cluster-admin role."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ oc login\nAuthentication required for https://api.sumit.openshift.demo.redislabs.com:6443 (openshift)\nUsername:\nPassword:\nLogin successful.\n")),(0,s.kt)("p",null,"You have access to 68 projects, the list has been suppressed. You can list all projects with 'oc projects'."),(0,s.kt)("h3",{id:"step-2-verify-the-status-of-nodes"},"Step 2. Verify the status of nodes"),(0,s.kt)("p",null,"Ensure that all the nodes should be in \u201cReady\u201d status."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ oc get nodes\nNAME                                 STATUS   ROLES          AGE    VERSION\ndemoopenshift-9x5xq-infra-b-h28tc    Ready    infra,worker   86m    v1.22.3+e790d7f\ndemoopenshift-9x5xq-infra-b-wrfgg    Ready    infra,worker   85m    v1.22.3+e790d7f\ndemoopenshift-9x5xq-master-0         Ready    master         103m   v1.22.3+e790d7f\ndemoopenshift-9x5xq-master-1         Ready    master         103m   v1.22.3+e790d7f\ndemoopenshift-9x5xq-master-2         Ready    master         103m   v1.22.3+e790d7f\ndemoopenshift-9x5xq-worker-b-6jwx2   Ready    worker         97m    v1.22.3+e790d7f\ndemoopenshift-9x5xq-worker-b-9pxhd   Ready    worker         95m    v1.22.3+e790d7f\n")),(0,s.kt)("h3",{id:"step-3-create-a-new-project"},"Step 3. Create a New Project"),(0,s.kt)("p",null,"Redis Enterprise can only be deployed in an user\u2019s custom project. Hence, let us create a new project."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'$ oc new-project myproject\nNow using project "myproject" on server "https://api.sumit.openshift.demo.redislabs.com:6443".\n\nYou can add applications to this project with the \'new-app\' command. For example, try:\n\n    oc new-app ruby~https://github.com/sclorg/ruby-ex.git\n\nto build a new example application in Ruby. Or use kubectl to deploy a simple Kubernetes application:\n\n    kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node\n')),(0,s.kt)("h3",{id:"step-4-clone-the-redis-enterprise-on-kubernetes-github-repository"},"Step 4. Clone the Redis Enterprise on Kubernetes Github repository"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ git clone https://github.com/RedisLabs/redis-enterprise-k8s-docs\n$ cd redis-enterprise-k8s-docs/\n")),(0,s.kt)("h3",{id:"step-5-apply-the-scc-configuration"},"Step 5. Apply the SCC configuration"),(0,s.kt)("p",null,"The SCC ",(0,s.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.8/authentication/managing-security-context-constraints.html"},"(security context constraint)")," YAML defines security context constraints for the cluster for our project. This is composed of custom security settings and strategies that will provide access to the Redis Enterprise Operator and Cluster Pods to run on OpenShift. We strongly recommend that you not change anything in this YAML file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kind: SecurityContextConstraints\napiVersion: security.openshift.io/v1\nmetadata:\n  name: redis-enterprise-scc\nallowPrivilegedContainer: false\nallowedCapabilities:\n  - SYS_RESOURCE\nrunAsUser:\n  type: MustRunAs\n  uid: 1001\nFSGroup:\n  type: MustRunAs\n  ranges: 1001,1001\nseLinuxContext:\n  type: RunAsAny\n")),(0,s.kt)("p",null,"Apply the configuration to a resource by filename \u201cscc.yaml\u201d which is available in \u201copenshift\u201d folder as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," $  oc apply -f scc.yaml\n securitycontextconstraints.security.openshift.io/redis-enterprise-scc configured\n")),(0,s.kt)("h3",{id:"step-6-provide-the-operator-permissions-for-redis-enterprise-operator-and-cluster-pods"},"Step 6. Provide the operator permissions for Redis Enterprise Operator and Cluster pods"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," $ oc adm policy add-scc-to-user redis-enterprise-scc system:serviceaccount:myproject:redis-enterprise-operator\n $ oc adm policy add-scc-to-user redis-enterprise-scc system:serviceaccount:myproject:rec\n")),(0,s.kt)("h3",{id:"step-7-deploy-redis-enterprise-operator"},"Step 7. Deploy Redis Enterprise Operator"),(0,s.kt)("p",null,"If you want to perform this operation via UI, follow the below steps:"),(0,s.kt)("p",null,"Login to OpenShift console with admin privileges."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(2265).Z,width:"1236",height:"712"})),(0,s.kt)("p",null,"Click on \u201cOperatorHub\u201d under Operators section."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(78003).Z,width:"990",height:"1252"})),(0,s.kt)("p",null,"This will open up a list of operators with various categories. Search for \u201cRedis\u201d and click \u201cRedis Enterprise\u201d (the one without the \u201cMarketplace\u201d tag) to proceed."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(64199).Z,width:"1272",height:"922"})),(0,s.kt)("p",null,"Click \u201cInstall\u201d to start the installation process and then select the required channel, namespace and approval strategy in the next screen."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(11643).Z,width:"1396",height:"794"})),(0,s.kt)("p",null,"Wait for the installation to be completed."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(62090).Z,width:"1430",height:"508"})),(0,s.kt)("p",null,"Click on \u201cEvents\u201d to see the streaming events in order to troubleshoot or check the progress of the installation."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(53797).Z,width:"1412",height:"902"})),(0,s.kt)("h3",{id:"step-8-create-redis-enterprise-cluster"},"Step 8. Create Redis Enterprise Cluster"),(0,s.kt)("p",null,"Once Redis Enterprise Operator is installed, create a Redis Enterprise Cluster instance using RedisEnterpriseCluster (REC) custom resource."),(0,s.kt)("p",null,"RedisEnterpriseCluster is the schema for the redisenterpriseclusters API. From the installed Redis Enterprise Operator, click on \u201cCreate RedisEnterpriseCluster'' and click on \u201cYAML\u201d section, then paste the sample YAML file below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(76772).Z,width:"1452",height:"416"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"apiVersion: app.redislabs.com/v1\nkind: RedisEnterpriseCluster\nmetadata:\n  name: rec\n  namespace: myproject\nspec:\n  redisEnterpriseNodeResources:\n    limits:\n      cpu: 4000m\n      memory: 4Gi\n    requests:\n      cpu: 4000m\n      memory: 4Gi\n  persistentSpec:\n    enabled: true\n    storageClassName: standard\n  redisEnterpriseImageSpec:\n    imagePullPolicy: IfNotPresent\n    repository: redislabs/redis\n    versionTag: 6.2.8-64.rhel7-openshift\n  servicesRiggerSpec:\n    databaseServiceType: load_balancer\n    serviceNaming: redis-port\n  nodes: 3\n  uiServiceType: LoadBalancer\n  username: demo@redis.com\n")),(0,s.kt)("p",null,"For configuring any additional parameters for the Redis Enterprise Cluster custom resource, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/RedisLabs/redis-enterprise-k8s-docs/blob/master/redis_enterprise_cluster_api.md"},"visit this page"),"."),(0,s.kt)("p",null,"Wait until the status shows \u201cSucceeded\u201d under Redis Enterprise Operator."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(89309).Z,width:"1410",height:"386"})),(0,s.kt)("h3",{id:"step-9-access-redis-enterprise-cluster-admin-console"},"Step 9. Access Redis Enterprise Cluster Admin Console"),(0,s.kt)("p",null,"To access the Redis Enterprise Cluster admin console, you will need credentials. Follow the steps below to get the credentials via \u201crec\u201d secret resource."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(46160).Z,width:"1254",height:"1360"})),(0,s.kt)("p",null,'Under the "Data" section, you can reveal username and password.'),(0,s.kt)("p",null,"Next, Click on \u201cServices\u201d and choose \u201crec-ui\u201d under the services list."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(23902).Z,width:"1254",height:"906"})),(0,s.kt)("p",null,'Click on "Services" and look for External Load-balancer IP.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(86071).Z,width:"1402",height:"926"})),(0,s.kt)("p",null,"Step 10. From the web browser, access the rec-ui external IP http://IP:8443 to access the Redis Enterprise Cluster Admin Console."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(81459).Z,width:"918",height:"962"})),(0,s.kt)("p",null,"To log into Redis Enterprise Cluster, use the credentials that you extracted above. By now, you should be able to see three nodes of the Redis Enterprise cluster."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(16938).Z,width:"1396",height:"752"})),(0,s.kt)("h3",{id:"step-11-create-redis-enterprise-database"},"Step 11. Create Redis Enterprise Database"),(0,s.kt)("p",null,"RedisEnterpriseDatabase is the schema for the redisenterprisedatabases API. To create REDB, navigate to Installed Operator > Redis Enterprise Operator > Redis Enterprise Database and click \u201cCreate RedisEnterpriseDatabase\u201d to start the creation process using REDB custom resource. You can click on \u201cYAML\u201d and paste the sample YAML file below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"apiVersion: app.redislabs.com/v1alpha1\nkind: RedisEnterpriseDatabase\nmetadata:\n  name: redb\n  namespace: myproject\nspec:\n  redisEnterpriseCluster:\n    name: rec\n  memorySize: 1GB\n  tlsMode: enabled\n")),(0,s.kt)("p",null,"For configuring any additional parameters for the Redis Enterprise Database custom resource, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/RedisLabs/redis-enterprise-k8s-docs/blob/master/redis_enterprise_database_api.md"},"visit this page"),"."),(0,s.kt)("p",null,"Once the REDB creation is done, you should see the status as \u201cactive\u201d."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Image",src:n(91922).Z,width:"1418",height:"628"})),(0,s.kt)("p",null,"Finally, navigate to Redis Enterprise Cluster admin console to verify if Redis Enterprise database is created or not."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Image",src:n(33361).Z,width:"702",height:"280"})),(0,s.kt)("p",null,"Click on the newly created database and then click on configuration option to see the overall details."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Image",src:n(29841).Z,width:"1294",height:"1180"})),(0,s.kt)("p",null,"Navigate back to the OpenShift console and verify the service object created for the Redis Database."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Image",src:n(22946).Z,width:"1374",height:"598"})),(0,s.kt)("p",null,"Select \u201cRoutes\u201d from the left-hand column and create a new route object for this database service with the sample YAML file below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kind: Route\napiVersion: route.openshift.io/v1\nmetadata:\n name: redb\n labels:\n   app: redis-enterprise\n   redis.io/cluster: rec\nspec:\n host: redb-re-test.apps.sumit.openshift.demo.redislabs.com\n to:\n   kind: Service\n   name: redis-12119-load-balancer\n   weight: 100\n port:\n   targetPort: redis\n tls:\n   termination: passthrough\n   insecureEdgeTerminationPolicy: None\n")),(0,s.kt)("p",null,"Note the Host name 'my-db-hostname' from the created route object."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(80209).Z,width:"1400",height:"604"})),(0,s.kt)("p",null,'Note the database password "my-db-password" from the database secret object with name \u201cdb-name-redb\u201d.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(94908).Z,width:"1332",height:"642"})),(0,s.kt)("p",null,"Get the default CA certificate from the redis-enterprise-node container on any of the Redis Enterprise pods and paste the output in a file called \u201cproxy_cert.pem\u201d."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ oc exec -it <pod-name> -c redis-enterprise-node -- cat \\ /etc/opt/redislabs/proxy_cert.pem\n")),(0,s.kt)("p",null,"Run the following openssl command, substituting your own values for 'my-db-hostname'."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$  openssl s_client -connect <my-db-hostname>:443 -crlf \\\n -CAfile ./proxy_cert.pem -servername <my-db-hostname>\n")),(0,s.kt)("p",null,"Authorize the database with the password and enter the ping command. If you are connected to the database, you will receive PONG back, as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"...\n...\n...\n    Verify return code: 0 (ok)\n ---\n auth 'my-db-password'\n +OK\n\n PING\n +PONG\n")),(0,s.kt)("p",null,"You can use the code below to test your access with Python, substituting your own values for 'my-db-hostname' and 'file-path'."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," import redis\n try:\n    r = redis.StrictRedis(\n    host='my-db-hostname',\n    port=443,\n    password='my-db-password',\n    ssl=True,\n    ssl_ca_certs='file-path')\n    print (r.info())\n #test the connection\n    print('Testing redis by setting a key and value..')\n    r.set('hello', 'world')\n    value = r.get('hello')\n    print(value)\n except Exception as e:\n    print (e)\n")),(0,s.kt)("p",null,"Your output should look something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{'redis_version': '6.0.13', 'redis_git_sha1': 0, 'redis_git_dirty': 0, 'redis_build_id': 0, 'redis_mode': 'standalone', 'os': 'Linux 4.18.0-305.30.1.el8_4.x86_64 x86_64'\n...\n...\n...\n\nTesting redis by setting a key and value..\nb'world'\n\n")),(0,s.kt)("p",null,"In our next tutorial, we will learn how to deploy a sample Real-time chat application powered by Go and Redis on OpenShift."),(0,s.kt)("h3",{id:"references"},"References:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/kubernetes/deployment/openshift/"},"Deploy Redis Enterprise Software on Kubernetes with OpenShift")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.openshift.com/"},"Official OpenShift Documentation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.7/installing/installing_gcp/installing-gcp-default.html"},"Install a Cluster quickly on GCP")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/RedisLabs/redis-enterprise-k8s-docs"},"Redis Enterprise on Kubernetes Github Repository"))))}u.isMDXComponent=!0},69856:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-5cf1737cb5c903144bc959bb9418c23f.png"},76772:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_rec-6dba2c57602ae13de821cc057e87f9e7.png"},78003:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image_03-56d3f8ad3be23376702d5f98463ead46.png"},64199:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image_04-b41cf514b3516ac74403520912c29f5a.png"},11643:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image_05-7ce589944397942b6c898595e18dc844.png"},2265:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image_login-b4a0ee93495e37c6287d6b9c5b2dab04.png"},62090:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/installed_operators-aad3bc68c1aa2c47896c395bc53e47cb.png"},86071:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/loadbalancer-f9689c003727dadde864a7b6d6f04cd0.png"},33361:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/navigate-6348ece0b0a70fae0ad1a2d81e6d942e.png"},46160:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ocp-cad019a1f147603df99802b100561159.png"},81459:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/re1-7e0fd1324f6d37b25347b6bba7f2cf49.png"},16938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/re2-2b68c422779c76ef2dd75c33325a9d71.png"},91922:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/re3-7567eb26b21e2c9d8f2d0493979a43be.png"},29841:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/re6-26d19677fdec5f640e1c7a48400d280c.png"},22946:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/re7-044f1f0670adc0c927e6c6884ea4d9c0.png"},94908:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/re9-e5a9d8e169609a7cf50eb58e0392edf2.png"},23902:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/recui-da0cb910d5f26298f52c62909c70134b.png"},80209:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reservices-09b020678b668e9ec6e570e32ccc820d.png"},53797:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/streaming_events-43510bdc97bf40d65edb6070359db0cd.png"},89309:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/succeeded-d8188451d46193eaae9291fe396c51da.png"}}]);