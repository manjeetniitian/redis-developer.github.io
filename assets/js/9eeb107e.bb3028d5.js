"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},50358:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(52263);const o="authorByline_VoxI",i="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:n}=e;const{siteConfig:t}=(0,r.Z)(),l=t.customFields.authors;return a.createElement(a.Fragment,null,n.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),n.authors.map((e=>a.createElement("div",{key:e,className:o},a.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:i},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},41404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),o=t(50358);const i={id:"index-lesson_3",title:"Object Mapping & Redis Repositories",sidebar_label:"Mapping & Repositories",slug:"/develop/java/redis-and-spring-course/lesson_3",authors:["bsb"]},s=void 0,l={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_3/index-lesson_3",id:"develop/java/spring/redis-and-spring-course/lesson_3/index-lesson_3",title:"Object Mapping & Redis Repositories",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_3/index-lesson_3.mdx",sourceDirName:"develop/java/spring/redis-and-spring-course/lesson_3",slug:"/develop/java/redis-and-spring-course/lesson_3",permalink:"/develop/java/redis-and-spring-course/lesson_3",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_3/index-lesson_3.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-lesson_3",title:"Object Mapping & Redis Repositories",sidebar_label:"Mapping & Repositories",slug:"/develop/java/redis-and-spring-course/lesson_3",authors:["bsb"]},sidebar:"docs",previous:{title:"Spring Data Redis",permalink:"/develop/java/redis-and-spring-course/lesson_2"},next:{title:"User Roles & Secondary Indexes",permalink:"/develop/java/redis-and-spring-course/lesson_4"}},d={},p=[{value:"Objectives",id:"objectives",level:3},{value:"Agenda",id:"agenda",level:3},{value:"Users and roles",id:"users-and-roles",level:3},{value:"Enter @RedisHash",id:"enter-redishash",level:3},{value:"Role Model",id:"role-model",level:5},{value:"User Model",id:"user-model",level:4},{value:"Spring Repositories",id:"spring-repositories",level:3},{value:"Role Repository",id:"role-repository",level:3},{value:"Testing the Role Repository",id:"testing-the-role-repository",level:3}],m={toc:p};function c(e){let{components:n,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{frontMatter:i,mdxType:"Authors"}),(0,r.kt)("h3",{id:"objectives"},"Objectives"),(0,r.kt)("p",null,"To configure a ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisTemplate "),"and learn how to access different operation bundles to read and write data to Redis from a Spring REST controller."),(0,r.kt)("h3",{id:"agenda"},"Agenda"),(0,r.kt)("p",null,"In this lesson, you will learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"@RedisHash")," annotation to map domain objects."),(0,r.kt)("li",{parentName:"ul"},"How to use ",(0,r.kt)("inlineCode",{parentName:"li"},"@Id")," to provide primary keys to your mapped objects."),(0,r.kt)("li",{parentName:"ul"},"How to use ",(0,r.kt)("inlineCode",{parentName:"li"},"@Reference")," to create referential associations between objects."),(0,r.kt)("li",{parentName:"ul"},"How to create and use Redis Repositories to store domain objects.")),(0,r.kt)("p",null,"If you get stuck:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redi2read/tree/course/milestone-3"},"https://github.com/redis-developer/redi2read/tree/course/milestone-3"))),(0,r.kt)("h3",{id:"users-and-roles"},"Users and roles"),(0,r.kt)("p",null,"In many applications, whether web applications or RESTful web services, one of the first parts of the domain to be implemented is the user/roles sub-domain.\nIn Redi2Read, Users have one or more Roles, a typical one-to-many association."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Users and Roles",src:t(54268).Z,width:"413",height:"94"})),(0,r.kt)("h3",{id:"enter-redishash"},"Enter @RedisHash"),(0,r.kt)("p",null,"In this section, we will embark on the creation of the Redi2Read domain models. We will use Lombok to simplify our POJOs,\nand using the Spring Data Redis ",(0,r.kt)("inlineCode",{parentName:"p"},"@RedisHash")," and other Spring Data annotations, we will configure our models to be persisted in Redis."),(0,r.kt)("h5",{id:"role-model"},"Role Model"),(0,r.kt)("p",null,"Let\u2019s start by creating the simplest of our domain\u2019s classes, the Role class under\nthe directory ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/models"),". Let\u2019s name the file ",(0,r.kt)("inlineCode",{parentName:"p"},"Role.java"),"\nwith the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.redislabs.edu.redi2read.models;\n\nimport lombok.Data;\n\n@Data\npublic class Role {\n  private String id;\n  private String name;\n}\n")),(0,r.kt)("p",null,"We are starting with a class annotated using Lombok\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"@Data "),"annotation, which adds ",(0,r.kt)("inlineCode",{parentName:"p"},"@ToString"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@EqualsAndHashCode"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@Getter"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"@Setter"),", and a ",(0,r.kt)("inlineCode",{parentName:"p"},"@RequiredArgsContructor"),", giving us a fully formed Java POJO.\nFor the Spring Data Repositories to know how to map an instance of Role to a Redis Hash, we need to annotate the class with the @RedisHash annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.redislabs.edu.redi2read.models;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.redis.core.RedisHash;\n\nimport lombok.Builder;\nimport lombok.Data;\n\n@Data\n@RedisHash\npublic class Role {\n  @Id\n  private String id;\n\n  private String name;\n}\n")),(0,r.kt)("p",null,"@RedisHash can take as parameters a timeToLive of type Long, and a String value, which will override the default Redis key prefix (by default, the key prefix is the fully qualified name of the class plus a colon)."),(0,r.kt)("p",null,"Within the class, most of the usual Spring Data annotations are supported. For Role, lets annotate the id field with the @Id annotation. Spring Data Redis will auto-generate and suitable id for the annotated type."),(0,r.kt)("h4",{id:"user-model"},"User Model"),(0,r.kt)("p",null,"The User model will be used in a registration/signup method. To allow for server-side validation to be performed, we need to add a dependency to the Maven POM for the spring-boot-starter-validation library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-validation</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,"Now we can create the User class with the following contents:\npackage com.redislabs.edu.redi2read.models;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.HashSet;\nimport java.util.Set;\n\nimport javax.validation.constraints.Email;\nimport javax.validation.constraints.NotNull;\nimport javax.validation.constraints.Size;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.annotation.Reference;\nimport org.springframework.data.annotation.Transient;\nimport org.springframework.data.redis.core.RedisHash;\nimport org.springframework.data.redis.core.index.Indexed;\n\nimport lombok.Data;\nimport lombok.EqualsAndHashCode;\nimport lombok.ToString;\n\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\n@ToString(onlyExplicitlyIncluded = true)\n@Data\n@RedisHash\npublic class User {\n  @Id\n  @ToString.Include\n  private String id;\n\n  @NotNull\n  @Size(min = 2, max = 48)\n  @ToString.Include\n  private String name;\n\n  @NotNull\n  @Email\n  @EqualsAndHashCode.Include\n  @ToString.Include\n  @Indexed\n  private String email;\n\n  @NotNull\n  private String password;\n\n  @Transient\n  private String passwordConfirm;\n\n  @Reference\n  private Set<Role> roles = new HashSet<Role>();\n\n  public void addRole(Role role) {\n    roles.add(role);\n  }\n}\n")),(0,r.kt)("p",null,"This class is a little more involved, so let\u2019s break it down:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We have another POJO (",(0,r.kt)("inlineCode",{parentName:"li"},"@Data"),") whose instances can be persisted as Redis Hashes (",(0,r.kt)("inlineCode",{parentName:"li"},"@RedisHash"),")"),(0,r.kt)("li",{parentName:"ol"},"The class is annotated to only add fields to equals/hashcode/toString that are explicitly annotations with ",(0,r.kt)("inlineCode",{parentName:"li"},"@EqualsHashCode.Include")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@ToString.Include")),(0,r.kt)("li",{parentName:"ol"},"Once again, we have an auto-generated String Redis Hash key using ",(0,r.kt)("inlineCode",{parentName:"li"},"@Id")),(0,r.kt)("li",{parentName:"ol"},"We create a (secondary) index on the email field by annotating the property with ",(0,r.kt)("inlineCode",{parentName:"li"},"@Indexed"),". We will learn more about secondary indexes in the next lesson."),(0,r.kt)("li",{parentName:"ol"},"Several ",(0,r.kt)("inlineCode",{parentName:"li"},"javax.validation.constraints "),"annotations are used to denote fields as being of type ",(0,r.kt)("inlineCode",{parentName:"li"},"@Email"),", being ",(0,r.kt)("inlineCode",{parentName:"li"},"@NotNull"),"-able, and restricting their ",(0,r.kt)("inlineCode",{parentName:"li"},"@Size")),(0,r.kt)("li",{parentName:"ol"},"The passwordConfirm field, which will hold the traditional \u201cpassword confirmation\u201d, is marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"@Transient")," so that ",(0,r.kt)("inlineCode",{parentName:"li"},"@RedisHash")," does not attempt to serialize it to the database"),(0,r.kt)("li",{parentName:"ol"},"For the ",(0,r.kt)("inlineCode",{parentName:"li"},"User"),"\u2019s roles, we have a ",(0,r.kt)("inlineCode",{parentName:"li"},"Set "),"of ",(0,r.kt)("inlineCode",{parentName:"li"},"Role")," objects marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"@References")," which will cause them to be stored as the id of a given role in the Redis Hash backing a ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," instance."),(0,r.kt)("li",{parentName:"ol"},"Finally at the bottom, we add a utility method to add ",(0,r.kt)("inlineCode",{parentName:"li"},"Role"),"s to the ",(0,r.kt)("inlineCode",{parentName:"li"},"User"),"\u2019s Role Set.")),(0,r.kt)("h3",{id:"spring-repositories"},"Spring Repositories"),(0,r.kt)("p",null,"Now that we have two models properly annotated, we need associated repositories to perform data operations on said models. A Spring Data Repository is similar to the DAO (Data Access Object) pattern\nin that they both abstract operations against the underlying data storage. The difference is that repositories\nfurther abstract the underlying storage mechanism by focusing on the management of a collection of objects,\nwhile DAOs are more SQL/Table centric."),(0,r.kt)("h3",{id:"role-repository"},"Role Repository"),(0,r.kt)("p",null,"Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/repositories")," let's create the RoleRepository interface as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.redislabs.edu.redi2read.repositories;\n\nimport com.redislabs.edu.redi2read.models.Role;\n\nimport org.springframework.data.repository.CrudRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface RoleRepository extends CrudRepository<Role, String> {\n}\n")),(0,r.kt)("p",null,"Our repository extends ",(0,r.kt)("inlineCode",{parentName:"p"},"CrudRepository")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Role")," class with key of type ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", it provides basic CRUD and finder operations.\nSpring Data Redis repositories are highly performant; they avoid using reflection and byte-code generation and instead use programmatic\nJDK proxies instances using Spring\u2019s ProxyFactory API. See ",(0,r.kt)("a",{parentName:"p",href:"https://bit.ly/2PshxEI"},"https://bit.ly/2PshxEI")),(0,r.kt)("h3",{id:"testing-the-role-repository"},"Testing the Role Repository"),(0,r.kt)("p",null,"Let\u2019s test the ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleRepository")," by using a ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandLineRunner "),"implementation. A Spring ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandLineRunner "),"is an interface that tells the Spring container\nthat the run method needs to be executed upon startup.\nA Spring Boot application can have many ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandLineRunner"),"s; to control the order of their execution, we can further annotate them with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Order")," annotation.\nCreate the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/boot")," and then add the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateRoles")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.redislabs.edu.redi2read.boot;\n\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.stereotype.Component;\n\n@Component\n@Order(1)\npublic class CreateRoles implements CommandLineRunner {\n\n @Override\n public void run(String... args) throws Exception {\n   System.out.println(">>> Hello from the CreateRoles CommandLineRunner...");\n }\n}\n')),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateRoles")," class will run on each server start-up or on each live reload (since we are using Spring DevTools).\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"@Order")," annotation takes a numeric value indicating the order of execution.\nTo test the command line runner we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"System.out.println "),"in the run method that we can watch fly by on the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2021-04-02 14:32:58.374  INFO 41500 --- [  restartedMain] c.r.edu.redi2read.Redi2readApplication   : Started Redi2readApplication in 0.474 seconds (JVM running for 74714.143)\n>>> Hello from the CreateRoles CommandLineRunner...\n2021-04-02 14:32:58.375  INFO 41500 --- [  restartedMain] .ConditionEvaluationDeltaLoggingListener : Condition evaluation unchanged\n")),(0,r.kt)("p",null,"Now that we know the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateRoles")," component runs, let's complete it to work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleRepository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.redislabs.edu.redi2read.boot;\n\nimport com.redislabs.edu.redi2read.models.Role;\nimport com.redislabs.edu.redi2read.repositories.RoleRepository;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.stereotype.Component;\n\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(1)\n@Slf4j\npublic class CreateRoles implements CommandLineRunner {\n\n  @Autowired\n  private RoleRepository roleRepository;\n\n  @Override\n  public void run(String... args) throws Exception {\n    if (roleRepository.count() == 0) {\n      Role adminRole = Role.builder().name("admin").build();\n      Role customerRole = Role.builder().name("customer").build();\n      roleRepository.save(adminRole);\n      roleRepository.save(customerRole);\n      log.info(">>>> Created admin and customer roles...");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"We begin by injecting an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleRepository")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired")," annotation. Since we don\u2019t want the roles to be created on each restart of the server,\nour logic will only execute when the ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleRepository")," has no ",(0,r.kt)("inlineCode",{parentName:"p"},"Role"),"s.\nIf there are no ",(0,r.kt)("inlineCode",{parentName:"p"},"Roles"),", then we create the \u201cadmin\u201d and \u201ccustomer\u201d roles using the Lombok builder. Then we save them to Redis using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleRepository")," save method.\nTo properly log a message we\u2019ll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Slf4j")," (Simple Logging Facade for Java) annotation provided by Lombok, which creates a logger instance called log,\nwith the customary log level logging methods.\nOn server start we should now see, once, the output of our database seeding."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2021-04-02 19:28:25.367  INFO 94971 --- [  restartedMain] c.r.edu.redi2read.Redi2readApplication   : Started Redi2readApplication in 2.146 seconds (JVM running for 2.544)\n2021-04-02 19:28:25.654  INFO 94971 --- [  restartedMain] c.r.edu.redi2read.boot.CreateRoles       : >>>> Created admin and customer roles...\n")),(0,r.kt)("p",null,"Let\u2019s use the Redis CLI to explore how the ",(0,r.kt)("inlineCode",{parentName:"p"},"Role"),"s were stored, let\u2019s use the KEYS command passing the Role fully qualified class name and a wildcard. Resulting in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> KEYS com.redislabs.edu.redi2read.models.Role*\n1) "com.redislabs.edu.redi2read.models.Role:c4219654-0b79-4ee6-b928-cb75909c4464"\n2) "com.redislabs.edu.redi2read.models.Role:9d383baf-35a0-4d20-8296-eedc4bea134a"\n3) "com.redislabs.edu.redi2read.models.Role"\n')),(0,r.kt)("p",null,"The first two values are ",(0,r.kt)("inlineCode",{parentName:"p"},"Hash"),"es, actual instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Role")," class. The string after the ",(0,r.kt)("inlineCode",{parentName:"p"},":")," is the primary key of the individual Role. Let\u2019s inspect one of those hashes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> TYPE "com.redislabs.edu.redi2read.models.Role:c4219654-0b79-4ee6-b928-cb75909c4464"\nhash\n127.0.0.1:6379> HGETALL "com.redislabs.edu.redi2read.models.Role:c4219654-0b79-4ee6-b928-cb75909c4464"\n1) "_class"\n2) "com.redislabs.edu.redi2read.models.Role"\n3) "id"\n4) "c4219654-0b79-4ee6-b928-cb75909c4464"\n5) "name"\n6) "admin"\n')),(0,r.kt)("p",null,"Using the TYPE command returns, as expected that the value under the key is a Redis Hash. We use the HGETALL to \u201cGet All\u201d values in the Hash. The ",(0,r.kt)("inlineCode",{parentName:"p"},"_class")," is a metadata field which demarks the class of the object stored in the Hash.\nNow let\u2019s inspect the third value in the KEYS list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> TYPE "com.redislabs.edu.redi2read.models.Role"\nset\n127.0.0.1:6379> SMEMBERS "com.redislabs.edu.redi2read.models.Role"\n1) "9d383baf-35a0-4d20-8296-eedc4bea134a"\n2) "c4219654-0b79-4ee6-b928-cb75909c4464"\n')),(0,r.kt)("p",null,"The Redis Set under the mapped class name is used to keep the primary keys maintained for a given class."))}c.isMDXComponent=!0},54268:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/user-role-uml-4d54d5a1f1b670f9a5d86d0873171bf6.png"}}]);