(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(205)),i={id:"index-azure-terraform-private-endpoint",title:"Azure Cache for Redis Enterprise using Terraform with Private Link",sidebar_label:"Private Link Terraform",slug:"/create/azure/terraform-private-endpoint"},c={unversionedId:"create/azure/terraform-private-endpoint/index-azure-terraform-private-endpoint",id:"create/azure/terraform-private-endpoint/index-azure-terraform-private-endpoint",isDocsHomePage:!1,title:"Azure Cache for Redis Enterprise using Terraform with Private Link",description:"Azure Resource Manager(a.k.a AzureRM) is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You use management features, like access control, locks, and tags, to secure and organize your resources after deployment.",source:"@site/docs/create/azure/terraform-private-endpoint/index-terraform-private-endpoint.mdx",slug:"/create/azure/terraform-private-endpoint",permalink:"/create/azure/terraform-private-endpoint",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/azure/terraform-private-endpoint/index-terraform-private-endpoint.mdx",version:"current",sidebar_label:"Private Link Terraform",sidebar:"docs",previous:{title:"Azure Cache for Redis Enterprise using Terraform",permalink:"/create/azure/terraform-simple"},next:{title:"Create Redis database using Google Cloud",permalink:"/create/gcp"}},p=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Step 1. Getting Started",id:"step-1-getting-started",children:[]},{value:"Step 2: Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3: Initialize the repository",id:"step-3-initialize-the-repository",children:[]},{value:"Step 4: Modify the variables(optional)",id:"step-4-modify-the-variablesoptional",children:[]},{value:"Step 5: Verify the plan",id:"step-5-verify-the-plan",children:[]},{value:"Step 6: Apply the plan",id:"step-6-apply-the-plan",children:[]},{value:"Step 7: Connect using generated output",id:"step-7-connect-using-generated-output",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Next Step",id:"next-step",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Azure Resource Manager(a.k.a AzureRM) is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You use management features, like access control, locks, and tags, to secure and organize your resources after deployment."),Object(o.b)("p",null,"The \"azurerm_redis_enterprise_cluster\" is a resource that manages a Redis Enterprise cluster. This is a template to get started with the 'azurerm_redis_enterprise_cluster' resource available in the 'azurerm' provider with Terraform."),Object(o.b)("h3",{id:"prerequisite"},"Prerequisite"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://terraform.io"}),"Terraform")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"}),"Azure CLI"))),Object(o.b)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),Object(o.b)("p",null,"Login in Azure using the Azure CLI"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"az login\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Login with a Service Principal will also work")),Object(o.b)("p",null,"Login using an Azure Service Principal"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"az login --service-principal --username APP_ID --tenant TENANT_ID --password [password || /path/to/cert]\n")),Object(o.b)("h3",{id:"step-2-clone-the-repository"},"Step 2: Clone the repository"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/redis-developer/acre-terraform\n")),Object(o.b)("h3",{id:"step-3-initialize-the-repository"},"Step 3: Initialize the repository"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd acre-terraform\nterraform init\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The output should include: ",Object(o.b)("inlineCode",{parentName:"p"},"Terraform has been successfully initialized"))),Object(o.b)("h3",{id:"step-4-modify-the-variablesoptional"},"Step 4: Modify the variables(optional)"),Object(o.b)("p",null,"The default variables are setup to deploy the smallest 'E10' instance into the 'East US' region.\nChanges can be made by updating the ",Object(o.b)("inlineCode",{parentName:"p"},"variables.tf")," file."),Object(o.b)("h3",{id:"step-5-verify-the-plan"},"Step 5: Verify the plan"),Object(o.b)("p",null,"The 'plan' output will show you everything being created by the template."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"terraform plan\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The output should include: ",Object(o.b)("inlineCode",{parentName:"p"},"Plan: 18 to add, 0 to change, 0 to destroy."))),Object(o.b)("h3",{id:"step-6-apply-the-plan"},"Step 6: Apply the plan"),Object(o.b)("p",null,"When the plan looks good, 'apply' the template."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"terraform apply\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The output should include: ",Object(o.b)("inlineCode",{parentName:"p"},"Apply complete! Resources: 18 added, 0 changed, 0 destroyed."))),Object(o.b)("h3",{id:"step-7-connect-using-generated-output"},"Step 7: Connect using generated output"),Object(o.b)("p",null,"The access key is sensitive, so viewing the outputs must be requested specifically.\nThe output is also in JSON format."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"terraform output redisgeek_config\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Example output:"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n"hostname" = "redisgeek-8jy4.eastus.redisenterprise.cache.azure.net"\n"access_key" = "DQYABC3uRMyDguE1236Xkvv3TprUcqBWTRkfgOPjs82Y="\n"port" = "10000"\n}\n'))),Object(o.b)("h3",{id:"resources"},"Resources"),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/eThj-jwViZw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h3",{id:"next-step"},"Next Step"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/develop/dotnet/"}),".Net and Redis")))}u.isMDXComponent=!0},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);