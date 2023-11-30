/*! For license information please see 38b81374b53bc5520388017bfdc551eb.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[61213],{58892:(e,t,n)=>{n.d(t,{a:()=>a,b:()=>i,c:()=>o,d:()=>r});const r=(0,n(27010).c)({typeKeywords:[],customParameters:[],analyzedLocationTypes:[],allowStoredAuth:!0,isSecured:null,checkAuth:!1}),a=r.state,o=r.state,i=r.state},61213:(e,t,n)=>{n.r(t),n.d(t,{arcgis_new_item_pages_data_store_select_folder:()=>s});var r=n(28384),a=n(58892),o=n(16665),i=n(54871);n(27010),n(41171),n(66716),n(76134),n(62381);const s=class{constructor(e){(0,r.r)(this,e),this.newItemUpdatePage=(0,r.c)(this,"newItemUpdatePage",7),this.serverFolderPath=null,this.publisherFolderPath="",this.publisherFolderPathIsDriveLetterLocation=!1,this.publisherFolderPathHostname="",this.newServerFolderPath="",this.nfsHostName="",this.nfsSharePath="",this.error=null}async componentWillLoad(){this.i18n=i.u.i18n.dataStoreSelectFolder,this.checkIfDriveLetterLocation(a.a.publisherFolderPath||""),this.publisherFolderPathHostname=a.a.publisherFolderPathHostname,this.serverFolderPath=a.a.serverFolderPath||null,this.newServerFolderPath=a.a.newServerFolderPath,this.nfsHostName=a.a.nfsHostName,this.nfsSharePath=a.a.nfsSharePath}checkIfDriveLetterLocation(e){this.publisherFolderPath=e,this.publisherFolderPathIsDriveLetterLocation=1===e.split(":")[0].length}validateFolderInputs(){if(!this.publisherFolderPath)return this.error="invalidPublisherFolderPath",!1;if(this.publisherFolderPathIsDriveLetterLocation&&!this.publisherFolderPathHostname)return this.error="invalidPublisherHostName",!1;if("newPath"===this.serverFolderPath&&!this.newServerFolderPath)return this.error="invalidServerFolderPath",!1;if("nfsHostAndPath"===this.serverFolderPath){if(!this.nfsHostName&&!this.nfsSharePath)return this.error="invalidNfsHostAndPath",!1;if(!this.nfsHostName&&this.nfsSharePath)return this.error="invalidNfsHostName",!1;if(this.nfsHostName&&!this.nfsSharePath)return this.error="invalidNfsPath",!1}return!0}renderErrorItem(){var e,t;const{i18n:n,error:a}=this;return(0,r.h)("arcgis-new-item-alert",{heading:null===(e=n.errors[a])||void 0===e?void 0:e.heading,description:null===(t=n.errors[a])||void 0===t?void 0:t.description,active:null!==a,onAlertDismiss:()=>{this.error=null}})}handleNext(){this.validateFolderInputs()&&(a.a.publisherFolderPath=this.publisherFolderPath,a.a.serverFolderPath=this.serverFolderPath,this.publisherFolderPathIsDriveLetterLocation&&this.publisherFolderPathHostname?a.a.publisherFolderPathHostname=this.publisherFolderPathHostname:a.a.publisherFolderPathHostname=null,"newPath"===this.serverFolderPath&&this.newServerFolderPath?a.a.newServerFolderPath=this.newServerFolderPath:a.a.newServerFolderPath=null,"nfsHostAndPath"===this.serverFolderPath?(a.a.nfsHostName=this.nfsHostName,a.a.nfsSharePath=this.nfsSharePath):(a.a.nfsHostName=null,a.a.nfsSharePath=null),this.newItemUpdatePage.emit("dataStoreSelectServerList"))}render(){const{i18n:e,publisherFolderPathIsDriveLetterLocation:t}=this;return(0,r.h)("div",null,(0,r.h)("arcgis-new-item-description",{header:e.heading}),(0,r.h)("div",{class:"input-label"},(0,r.h)("calcite-label",null,e.publisherFolderPath.heading,(0,r.h)("calcite-input",{key:"publisher-folder-path",placeholder:e.publisherFolderPath.placeholder,value:this.publisherFolderPath,required:!0,onCalciteInputChange:e=>{const t=e.target.value;this.checkIfDriveLetterLocation(t)}}))),t&&(0,r.h)("div",{class:"input-label"},(0,r.h)("calcite-label",null,e.publisherFolderPath.hostname,(0,r.h)("calcite-input",{key:"publisher-folder-path-hostname",type:"textarea",value:this.publisherFolderPathHostname,onCalciteInputChange:e=>{const t=e.target.value;this.publisherFolderPathHostname=t}}),(0,r.h)("div",{class:"hostname-info"},e.publisherFolderPath.hostnameInfo))),(0,r.h)("div",{class:"input-label"},(0,r.h)("calcite-label",null,e.serverFolderPath.heading)),(0,r.h)("calcite-tile-select-group",{layout:"vertical",key:"server-folder-path-select"},(0,r.h)("calcite-tile-select",{class:"tile-select",key:"publisher-folder-path-select",checked:null===this.serverFolderPath,description:e.serverFolderPath.sameAsPublisher,name:"same-as-publisher-folder-path","input-enabled":!0,width:"full",type:"radio",value:null,onCalciteTileSelectChange:()=>{this.serverFolderPath=null}}),(0,r.h)("calcite-tile-select",{class:"tile-select",key:"new-server-folder-path-select",checked:"newPath"===this.serverFolderPath,description:e.serverFolderPath.newPath,name:"new-path","input-enabled":!0,width:"full",type:"radio",value:"newPath",onCalciteTileSelectChange:()=>{this.serverFolderPath="newPath"}}),(0,o.i)()&&(0,r.h)("calcite-tile-select",{key:"nfs-host-and-path-select",checked:"nfsHostAndPath"===this.serverFolderPath,description:e.serverFolderPath.nfsHostAndPath.description,name:"nfs-host-and-path","input-enabled":!0,width:"full",type:"radio",value:"nfsHostAndPath",onCalciteTileSelectChange:()=>{this.serverFolderPath="nfsHostAndPath"}})),"newPath"===this.serverFolderPath&&(0,r.h)("div",{class:"input-label"},(0,r.h)("calcite-input",{key:"new-server-folder-path",placeholder:e.serverFolderPath.placeholder,value:this.newServerFolderPath,onCalciteInputChange:e=>{const t=e.target.value;this.newServerFolderPath=t}})),"nfsHostAndPath"===this.serverFolderPath&&(0,r.h)("div",null,(0,r.h)("div",{class:"input-label"},(0,r.h)("calcite-label",null,e.serverFolderPath.nfsHostAndPath.hostname,(0,r.h)("calcite-input",{key:"nfs-hostname",type:"textarea",value:this.nfsHostName,onCalciteInputChange:e=>{const t=e.target.value;this.nfsHostName=t}}))),(0,r.h)("div",{class:"input-label"},(0,r.h)("calcite-label",null,e.serverFolderPath.nfsHostAndPath.sharePath,(0,r.h)("calcite-input",{key:"nfs-sharepath",type:"textarea",value:this.nfsSharePath,onCalciteInputChange:e=>{const t=e.target.value;this.nfsSharePath=t}})))),this.renderErrorItem())}};s.style=".input-label{margin-top:1.25rem}.tile-select{margin-bottom:0.125rem}.hostname-info{font-size:0.75rem}"},76134:(e,t,n)=>{n.d(t,{c:()=>a,o:()=>o});const r=(0,n(27010).c)({portal:null,user:null,api:4,scale:"m"}),a=r.state,o=r.onChange},16665:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>p,c:()=>h,d:()=>d,e:()=>o,f:()=>i,g:()=>g,h:()=>c,i:()=>m,j:()=>v,k:()=>S,l:()=>s,m:()=>l});var r=n(41171),a=n(76134);function o(e,t){const n={type:"folder",path:`/fileShares/${t}`,info:{datastoreConnectionType:"shared",path:e.publisherFolderPath,hostName:e.publisherFolderPathHostname}};return e.allowServicesRestart&&(n.allowServicesRestart=!0,n.options=JSON.stringify({allowServicesRestart:!0})),"newPath"===e.serverFolderPath?(n.clientPath=e.publisherFolderPath,n.info.path=e.newServerFolderPath,n.info.datastoreConnectionType="replicated"):"nfsHostAndPath"===e.serverFolderPath&&(n.clientPath=e.publisherFolderPath,n.provider="UserManaged",n.info.datastoreConnectionType="replicated",n.info.fileServerPath=e.nfsSharePath,n.info.fileServerHost=e.nfsHostName,n.info.fileServerType="nfs"),n}function i(e,t){const n={type:"egdb",path:"/enterpriseDatabases/"+t,info:{dataStoreConnectionType:"shared"}};return"newConnection"===e.serverDatabaseOption?(n.info.connectionString=e.serverConnectionString,n.info.clientConnectionString=e.publisherConnectionString,n.info.dataStoreConnectionType="replicated"):"bigQuery"===e.databaseProvider||"snowflake"===e.databaseProvider?n.info.JDBCConnection=e.jdbcConnection:n.info.connectionString=e.publisherConnectionString,n}const s=async(e,t,n,r)=>{let a,o;if((null==n?void 0:n.length)>0){try{o=JSON.parse(n)}catch(e){return{error:{code:"invalidJSON"}}}a=function(e,t){const{type:n,project_id:r,private_key_id:a,private_key:o,client_email:i,client_id:s,auth_uri:l,token_uri:c,auth_provider_x509_cert_url:d,client_x509_cert_url:h}=t;return{oAuthType:0,projectId:e,url:"jdbc:bigquery://https://www.googleapis.com/bigquery/v2:443",oAuthPvtKeyFile:{type:n,project_id:r,private_key_id:a,private_key:o,client_email:i,client_id:s,auth_uri:l,token_uri:c,auth_provider_x509_cert_url:d,client_x509_cert_url:h}}}(e,o)}else(null==r?void 0:r.length)>0&&(a=function(e,t,n){return{name:"BigqueryArcgisPlatform_RefreshToken",className:"com.esri.sds.bigquery.jdbc.GBQDataSource",oAuthType:2,projectId:e,defaultDataset:t,url:"jdbc:bigquery://https://www.googleapis.com/bigquery/v2:443",oAuthRefreshToken:n}}(e,t,r));return{result:{type:"egdb",path:"/enterpriseDatabases/bigQuerySvrDevDataJdbc",id:null,clientPath:null,info:{JDBCConnection:a}}}};function l(e){const{user:t,password:n,database:r,role:a,server:o,warehouse:i,schema:s}=e;return{path:"/enterpriseDatabases/snowflakeJdbc",type:"egdb",info:{JDBCConnection:{user:t,password:n,database:r,role:a,connectionUrl:`jdbc:snowflake://${o}`,warehouse:i,schema:s}}}}function c(e,t){if("Arango"===e.noSqlProvider){const t={type:"nosql",path:"/nosqlDatabases/Arango_enterprise",info:{systemManaged:!1,dsFeature:"graphStore",isManagedData:!1,category:"database",factory:"nosql",provider:"ArangoDB",implementation:"ArangoDB",purposes:["knowledge-graph"],connectionProperties:{hosts:[],useSsl:e.useSsl,username:e.username,password:e.password,database:e.database}}};return""!==e.hosts?t.info.connectionProperties.hosts=e.hosts.split(","):delete t.info.connectionProperties.hosts,t}const n={type:"nosql",path:`/nosqlDatabases/${t}`,info:{provider:"Neo4J",isManaged:!1,dsFeature:"graphStore",factory:"nosql",implementation:"Neo4j",category:"database",systemManaged:!1,isManagedData:!1,purposes:["knowledge-graph"],connectionProperties:{connectionUri:e.connectionUri,username:e.username,password:e.password,database:e.database,fallbackServerAddresses:[]}}};return""!==e.fallBackServers?n.info.connectionProperties.fallbackServerAddresses.push(e.fallBackServers.split(",")):delete n.info.connectionProperties.fallbackServerAddresses,n}function d(e,t){const n="bdfs"===e.addDataStoreType?e.bdfsCloudProvider:e.provider,r={info:{}},a={credentialType:"accesskey"};return"amazon"===n&&("accessKey"===e.credentialType?(a.accessKeyId=e.accessKey,a.secretAccessKey=e.secretKey):a.credentialType=e.credentialType,"custom"===e.selectedRegion.id?a.regionEndpointUrl=e.storageURL:(a.regionEndpointUrl=f(e.regions,e.selectedRegion),a.region=e.selectedRegion.id),r.info.objectStore=e.bucketName,r.provider="amazon"),"google"===n&&(a.accessKeyId=e.accessKey,a.secretAccessKey=e.secretKey,a.regionEndpointUrl="https://storage.googleapis.com",r.info.objectStore=e.bucketName,r.provider="Google"),"azure"===n&&("sharedKey"===e.azureAuthenticationType?(a.credentialType="accessKey",a.accountKey=e.accountKey):"activeDirectory"===e.azureAuthenticationType?(a.credentialType=e.azureIdentityType,"servicePrincipal"===e.azureIdentityType?(a.tenantId=e.tenantId,a.clientId=e.clientId,a.clientSecret=e.clientSecret):"userAssignedIdentity"===e.azureIdentityType&&(a.managedIdentityClientId=e.clientId)):"sasToken"===e.azureAuthenticationType?(a.credentialType=e.azureAuthenticationType,a.sasToken=e.token):"anonymous"===e.azureAuthenticationType&&(a.credentialType=e.azureAuthenticationType),"other"===e.environment.id||"anonymous"===e.azureAuthenticationType?a.regionEndpointURL=e.endpoint:a.accountEndpoint=f(e.regions,e.environment),a.accountName=e.accountName,r.info.objectStore=e.containerName,r.provider="azure"),"azuredatalakegen2store"===n&&("other"===e.environment.id?a.regionEndpointURL=e.endpoint:a.accountEndpoint=f(e.regions,e.environment),a.credentialType="accessKey",a.accountKey=e.accountKey,r.info.folder=e.cloudFolder?`${e.containerName}/${e.cloudFolder}`:e.containerName,a.accountName=e.accountName,r.provider="azureDataLakeStore"),"alibaba"===n&&(a.accessKeyId=e.accessKey,a.secretAccessKey=e.secretKey,r.info.objectStore=e.bucketName,r.provider="Alibaba",a.regionEndpointUrl="custom"===e.selectedRegion.id?e.storageURL:f(e.regions,e.selectedRegion)),a.defaultEndpointsProtocol="https",e.cloudFolder&&"azuredatalakegen2store"!==n&&(r.info.objectStore=r.info.objectStore+"/"+e.cloudFolder),r.type="cloudStore",r.path="/cloudStores/"+t,r.info.connectionString=JSON.stringify(a),r}function h(e,t){return{type:"bigDataFileShare",path:`/bigDataFileShares/${t}`,info:{connectionString:JSON.stringify({path:e.bdfsFilesharePath}),connectionType:"fileShare"}}}function u(e,t){return{type:"bigDataFileShare",path:`/bigDataFileShares/${t}`,info:{connectionString:JSON.stringify({path:e.bdfsHdfsPath,username:e.bdfsHdfsUsername}),connectionType:"hdfs"}}}function p(e,t){const n={type:"bigDataFileShare",path:"/bigDataFileShares/"+t,info:{connectionString:"",connectionType:"hive"}},r=e.useNonDefaultDatabase;return n.info.connectionString=JSON.stringify({metaStoreUris:e.metastoreUris,database:r&&e.nonDefaultDatabaseName||"default"}),n}function v(e,t){return JSON.stringify({info:{connectionString:JSON.stringify({path:t}),connectionType:"dataStore"},path:`/bigDataFileShares/${e}`,type:"bigDataFileShare"})}function f(e,t){let n;return e.forEach((function(e){e.id===t.id&&(n=e.blobStoreEndpoint||e.storageEndpointSuffix)})),n}const g=async(e,t)=>{const n=e.results.out_connectionString.paramUrl,a=`${t}/Get%20Database%20Connection%20String/jobs/${e.jobId}/${n}`,o=await(0,r.r)(a);return y(o)},y=e=>{const t=e.value;return{connectionStringProps:b(t),connectionString:t}},b=e=>{let t=[];return e&&e.split(";").forEach((e=>{const n=e.split("=");2!==n.length||P(t,n[0])||t.push({key:n[0],value:n[1]})})),t},P=(e,t)=>e.some((e=>e.key===t)),m=()=>{const e=a.c.portal;return e.isPortal&&"ArcGISEnterpriseOnKubernetes"===e.portalDeploymentType},S=e=>e?`${e}/rest/services/System/PublishingTools/GPServer`:""},41171:(e,t,n)=>{n.d(t,{a:()=>T,b:()=>A,c:()=>b,d:()=>S,e:()=>c,f:()=>g,g:()=>P,h:()=>s,i:()=>C,j:()=>y,k:()=>m,l:()=>k,p:()=>u,q:()=>w,r:()=>d});var r=n(66716),a=n(76134),o=n(62381),i=n(26426);function s(e){var t,n,r,o;return null!=e||(e=null===a.c||void 0===a.c?void 0:a.c.portal),(null===(t=null==e?void 0:e.credential)||void 0===t?void 0:t.token)||(null==e?void 0:e.token)||(null===(r=null===(n=null==e?void 0:e.user)||void 0===n?void 0:n.credential)||void 0===r?void 0:r.token)||(null===(o=null==e?void 0:e.portalUser)||void 0===o?void 0:o.token)||""}function l(e){var t;const{config:n}=a.c;return"https:"===window.location.protocol||!0===(null===(t=null==n?void 0:n.self)||void 0===t?void 0:t.allSSL)?e.replace("http:","https:"):e}async function c(e,t,n={},o){const[i]=await(0,r.l)(["esri/request"]),{api:c}=a.c;e.includes("f=")||t.append("f","json");const d=s();return d&&!t.has("token")&&t.append("token",d),new Promise(((r,a)=>{if(3===c){const s={url:!1===n.addSSL?e:l(e),form:t,timeout:n.timeout||0},c="post"===o?Object.assign({usePost:!0},n):n;i(s,c).then(r,a)}else i(e,Object.assign(Object.assign({body:t},n),{timeout:n.timeout||0,method:o||"auto"})).then((e=>{r(e.data)})).catch((e=>a(e)))}))}async function d(e,t={},n={},o,i){const[s]=await(0,r.l)(["esri/request"]),{api:c,portal:d}=a.c,h=Object.assign({},t);if(e.includes("f=")||!0===(null==i?void 0:i.excludeJson)||(h.f="json"),!1!==n.addTokenManually){const e=await S(d,c);h.token=e}const u=!1===n.addSSL?e:l(e);if(3===c)return s(Object.assign({url:u,content:h,timeout:n.timeout||0,withCredentials:n.withCredentials},null==i?void 0:i.v3Request),"post"===o?Object.assign({usePost:!0},n):n);{const e=Object.assign(Object.assign(Object.assign({query:h,method:o||"auto"},n),{timeout:n.timeout||0}),(null==n?void 0:n.disableIdentityLookup)?{authMode:"anonymous"}:{});return(await s(u,e)).data}}const h=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,15,15,30,30,30,30,30,30,30,30,30,30,120],u=async(e,t,n)=>{var r,a;const o=null!==(r=null==t?void 0:t.pendingStatuses)&&void 0!==r?r:["processing","partial","Pending","InProgress","EXECUTING"],s=null!==(a=null==t?void 0:t.successStatuses)&&void 0!==a?a:["completed","Completed","COMPLETED"];let l=0;const c=async()=>{const r=await d(e,null==t?void 0:t.requestParams,{},n),a=r.status||r.jobStatus;if(o.includes(a))return await(0,i.t)((u=l++,1e3*h[u>-1&&u<h.length-1?u:h.length-1])),c();if(s.includes(a))return r;throw r;var u};try{return c()}catch(e){throw console.error(e),e}},p={},v={},f={};async function g(e,t,n,r){var a,o,i,s;const l=null===(o=null===(a=f[t])||void 0===a?void 0:a[n])||void 0===o?void 0:o.expireAt,c=!!l&&(new Date).getTime()>l;if((null===(i=p[t])||void 0===i?void 0:i[n])&&!c)return p[t][n];v[t]||(v[t]={}),v[t][n]&&!c||(v[t][n]=e());const d=await v[t][n];if(p[t]||(p[t]={}),f[t]||(f[t]={}),p[t][n]=d,r){const{expireAfter:e,getExpireAfterFromResult:a}=r,o=a||e?(new Date).getTime()+(null!==(s=null==a?void 0:a(d))&&void 0!==s?s:e):null;f[t][n]=Object.assign(Object.assign({},f[t][n]),{expireAt:o})}return d}function y(e,t){var n;return null===(n=null==p?void 0:p[e])||void 0===n?void 0:n[t]}const b=(e,t)=>{var n,r;t?(null===(n=p[e])||void 0===n||delete n[t],null===(r=v[e])||void 0===r||delete r[t]):(delete p[e],delete v[e])};function P(e){var t;const{portal:n,config:r}=a.c||{};return null!==(t=(0,o.d)(null==r?void 0:r.restBaseUrl))&&void 0!==t?t:m(e||n)}function m(e){var t;return(0,o.d)(null!==(t=e.restUrl)&&void 0!==t?t:e.portalUrl)}const S=async(e,t)=>{var n,r;if(!(null==e?void 0:e.isPortal)||!e.isWebTierAuth)return s(e);const{token:o}=await g((()=>F(e,null!=t?t:null===a.c||void 0===a.c?void 0:a.c.api)),"platformSelf",null!==(r=null===(n=e.user)||void 0===n?void 0:n.id)&&void 0!==r?r:e.id,{getExpireAfterFromResult:e=>e.expires_in});return o},F=async(e,t)=>{const n=await(async(e,t)=>{var n,a,o,i;const s=3===t,[l]=await r.e.loadModules([s?"esri/IdentityManager":"esri/identity/IdentityManager"]),c=await g((()=>l.getCredential(P(e),{oAuthPopupConfirmation:!1})),"credential",null===(n=e.user)||void 0===n?void 0:n.id);return null!==(i=s?null===(a=c._oAuthCred)||void 0===a?void 0:a.appId:null===(o=c.oAuthState)||void 0===o?void 0:o.appId)&&void 0!==i?i:"arcgisonline"})(e,t),a={"X-Esri-Auth-Client-Id":n,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")};return d(`${P(e)}/oauth2/platformSelf`,{},{disableIdentityLookup:!0,headers:4===t?a:void 0,addTokenManually:!1,withCredentials:!0},"post",{v3Request:{headers:a}})};async function w(e={},t){return d(`${P(t)}/community/groups`,e)}const k=async(e,t)=>{var n;if(!e)return[];const r=`${(0,o.d)(null!==(n=t.restUrl)&&void 0!==n?n:t.portalUrl)}portals/self/servers`,a=await d(r);return null==a?void 0:a.servers},T=e=>A(m(e)),A=e=>{var t;const n=`${(0,o.d)(null!==(t=(0,o.l)(e))&&void 0!==t?t:e)}info`;return g((()=>d(n,{},{addTokenManually:!1})),"portalInfo",n)},C=async(e,t)=>{if(e.isBackedBySDS)return{result:!0};const n=(0,o.e)(t)||(0,o.f)(t)||(0,o.g)(t)||(0,o.h)(t)||(0,o.j)(t);if(e.isPortal&&t&&(n||(0,o.k)(t)))try{const n=await I(t,e);return{result:!!(null==n?void 0:n[0])}}catch(e){return console.error(e),{error:{code:"unhandledError",message:JSON.stringify(e)},result:!1}}return{result:!0}},I=async(e,t)=>{const n=await D(e,t);if(!n)return null;const r=`${n.adminUrl}/admin/data/findItems`;return(await d(r,{managed:!0})).items.filter((e=>{var t;return"arcgis data store"===(null===(t=e.provider)||void 0===t?void 0:t.toLowerCase())}))},D=async(e,t)=>{var n;return(null!==(n=await k(e,t))&&void 0!==n?n:[]).filter((e=>e.isHosted))[0]}},54871:(e,t,n)=>{n.d(t,{a:()=>r,u:()=>a});const r=(0,n(27010).c)({nextText:"next",workflow:"content",scale:"m",disableScroll:!1,featureFlags:{tileLayer3dTiles:!1}}),a=r.state}}]);