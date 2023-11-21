/*! For license information please see 684f0307c295c26a5d3d4eba4b7aed6a.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[25989],{25989:(e,t,i)=>{i.r(t),i.d(t,{arcgis_categories_picker:()=>v,arcgis_folder_picker:()=>m,arcgis_item_properties:()=>f,arcgis_summary_input:()=>b,arcgis_tags_picker:()=>y,arcgis_title_input:()=>x});var s=i(28384),a=i(76134),r=i(62727),o=i(65508),l=i(12357),n=i(96729),c=i(26426),d=i(86739),h=i(30063),u=i(41171),g=i(48333);i(27010),i(18869),i(81068),i(66716),i(62381),i(58892),i(54871),i(31546);const v=class{constructor(e){(0,s.r)(this,e),this.arcgisCategoriesPickerChange=(0,s.c)(this,"arcgisCategoriesPickerChange",7),this.api=void 0,this.portal=void 0,this.scale=void 0,this.label=void 0,this.categories=void 0,this.schema=[]}async componentWillLoad(){var e,t,i,s;const l=await(0,r.g)(this.el);this.i18n=l[0],null!==(e=this.portal)&&void 0!==e||(this.portal=a.c.portal),null!==(t=this.scale)&&void 0!==t||(this.scale=a.c.scale),null!==(i=this.api)&&void 0!==i||(this.api=a.c.api),null!==(s=this.categories)&&void 0!==s||(this.categories=o.i.categories),o.a.on("reset",(()=>{this.categories=o.i.categories}))}async componentDidLoad(){var e,t,i;const{portal:s,schema:a}=this;if(s&&!(null==a?void 0:a.length))if(s.categories)this.schema=null===(e=s.categories[0])||void 0===e?void 0:e.categories;else{const e=await(0,l.f)(s);this.schema=null===(i=null===(t=e.categorySchema)||void 0===t?void 0:t[0])||void 0===i?void 0:i.categories}}updateCategories(){this.arcgisCategoriesPickerChange.emit(this.categories)}categoriesPickerChangeHandler(e){var t;e.stopPropagation();const i=(null===(t=this.combobox)||void 0===t?void 0:t.value)||[];this.categories=Array.isArray(i)?i:[i]}renderNestedCategories(e,t){return e.map((e=>{const i=t?`${t}/${e.title}`:`/Categories/${e.title}`;return(0,s.h)("calcite-combobox-item",{value:i,textLabel:e.title,selected:this.categories.indexOf(i)>=0},e.categories&&this.renderNestedCategories(e.categories,i))}))}render(){var e;const{i18n:t,scale:i,schema:a}=this;return this.schema&&(0,s.h)("calcite-label",{scale:i},(0,s.h)("p",{class:"label"},null!==(e=this.label)&&void 0!==e?e:t.categories),(0,s.h)("calcite-combobox",{label:t.categories,maxItems:5,selectionMode:"ancestors",placeholder:t.assignCategories,scale:i,ref:e=>this.combobox=e},this.renderNestedCategories(a)))}get el(){return(0,s.d)(this)}static get watchers(){return{categories:["updateCategories"]}}};v.style=":host{--arcgis-label-font-weight:400}.label{margin-top:0;margin-bottom:0;font-weight:var(--arcgis-label-font-weight)}";const m=class{constructor(e){(0,s.r)(this,e),this.arcgisFolderPickerChange=(0,s.c)(this,"arcgisFolderPickerChange",7),this.arcgisFolderPickerLoad=(0,s.c)(this,"arcgisFolderPickerLoad",7),this.api=void 0,this.portal=void 0,this.user=void 0,this.scale=void 0,this.label=void 0,this.folder=void 0,this.folders=[],this.newFolderActive=!1,this.emptyFilterList=!1,this.filterText=void 0,this.newFolderInput=void 0,this.createFolderText=void 0,this.showError=!1,this.errorString=void 0,this.newFolderInputElement=void 0,this.comboboxElement=void 0,this.loading=!1}async componentWillLoad(){var e,t,i,s,l,n,c,d;const h=await(0,r.g)(this.el);this.i18n=h[0],null!==(e=this.portal)&&void 0!==e||(this.portal=a.c.portal),null!==(t=this.user)&&void 0!==t||(this.user=a.c.user),null!==(i=this.scale)&&void 0!==i||(this.scale=a.c.scale),null!==(s=this.api)&&void 0!==s||(this.api=a.c.api),null!==(l=this.folder)&&void 0!==l||(this.folder=null!==(c=null!==(n=o.i.folder)&&void 0!==n?n:a.c.initialFolder)&&void 0!==c?c:null===(d=this.folders)||void 0===d?void 0:d[0]),this.createFolderText=this.i18n.createNewFolder,o.a.on("reset",(()=>{var e,t,i;this.folder=null!==(t=null!==(e=o.i.folder)&&void 0!==e?e:a.c.initialFolder)&&void 0!==t?t:null===(i=this.folders)||void 0===i?void 0:i[0]}))}async componentDidLoad(){this.folders.length||await this.loadFolders(this.user)}async handleUserChange(e,t){t&&e.username!==t.username&&(await this.loadFolders(e),this.folder=this.getHomeFolder())}handleFolderChange(){this.arcgisFolderPickerChange.emit(this.folder)}async loadFolders(e){var t;this.loading=!0,this.folders=await(0,n.g)(e),this.arcgisFolderPickerLoad.emit([...this.folders]),(null===(t=this.folder)||void 0===t?void 0:t.id)||(this.folder=this.getHomeFolder()),this.loading=!1}getHomeFolder(){return this.folders.find((e=>e.title===e.id))}setNewFolderActive(){var e;null===(e=this.newFolderInputElement)||void 0===e||e.setFocus(),this.newFolderInputElement||(this.showError=!1,this.newFolderInput="")}checkForEmptySuggestions(e){var t;e.stopPropagation();const i=this.comboboxElement.shadowRoot.querySelector("input").value,{i18n:s}=this;this.emptyFilterList=(null===(t=this.comboboxElement.filteredItems)||void 0===t?void 0:t.length)<=1,this.createFolderText=this.emptyFilterList?s.noFoldersFoundCreate.replace("${folder}",i):s.createNewFolder,this.filterText=i}handleComboboxChange(e){var t,i,s;e.stopPropagation();const a=null===(t=this.comboboxElement)||void 0===t?void 0:t.value;if("create-folder"===a)return this.showError=!1,void(this.emptyFilterList?this.createNewFolder(this.filterText):this.newFolderActive=!0);this.folder=null!==(s=null!==(i=this.folders.find((e=>e.id===a)))&&void 0!==i?i:this.folder)&&void 0!==s?s:this.getHomeFolder()}closeNewFolderInput(e){e.stopPropagation(),this.newFolderActive=!1}async saveActiveFolder(){if(!this.newFolderActive)return!0;try{await this.createNewFolder(this.newFolderInput)}catch(e){return this.errorString}return!this.showError}async createNewFolder(e){var t;const i=e.trim(),{i18n:s,user:r}=this;try{const{folder:e}=await(0,n.c)(i,r);this.folder=e,this.folders=[this.folder,...this.folders],a.c.folders=this.folders,this.newFolderActive=!1,this.showError=!1,await(0,c.t)(100);const s=null===(t=this.el.shadowRoot)||void 0===t?void 0:t.querySelector(`calcite-combobox-item[data-id="${this.folder.id}"]`);s&&(s.selected=!0)}catch(e){throw!i||(null==i?void 0:i.length)<=0?this.errorString=s.error.noName:this.folders.map((e=>e.title)).includes(i)?this.errorString=s.error.folderAlreadyExists.replace("${folder}",i):i.indexOf(">")>=0||i.indexOf("<")>=0?this.errorString=s.error.invalidCharacters:(console.error(e),this.errorString=e.message),this.showError=!0,e}}render(){var e;const{i18n:t,scale:i}=this;return(0,s.h)("calcite-label",{scale:i,class:"input-height"},(0,s.h)("p",{class:"label"},null!==(e=this.label)&&void 0!==e?e:t.folder),(0,s.h)("div",null,this.newFolderActive?(0,s.h)("calcite-inline-editable",{controls:!0,"editing-enabled":!0,afterConfirm:async()=>{var e;try{await this.createNewFolder(this.newFolderInput),this.newFolderActive=!1}catch(t){throw null===(e=this.newFolderInputElement)||void 0===e||e.setFocus(),t}},scale:i},(0,s.h)("calcite-input",{placeholder:t.enterFolder,value:this.newFolderInput,maxLength:250,scale:i,onCalciteInputInput:e=>this.newFolderInput=e.target.value,onKeyDown:e=>{switch(e.stopPropagation(),this.showError=!1,e.key){case"Enter":this.createNewFolder(this.newFolderInput);break;case"Escape":this.newFolderActive=!1,this.showError=!1}},ref:e=>this.newFolderInputElement=e,status:this.showError?"invalid":"idle"})):(0,s.h)("div",{class:"combobox-wrapper"},this.loading&&(0,s.h)("calcite-progress",{type:"indeterminate",class:"progress"}),(0,s.h)("calcite-combobox",{label:t.folder,selectionMode:"single",maxItems:5,placeholder:this.loading?t.loading:t.searchFolders,scale:i,ref:e=>this.comboboxElement=e,disabled:this.loading,clearDisabled:!0,onCalciteComboboxChange:e=>this.handleComboboxChange(e),onCalciteComboboxBeforeClose:()=>{this.comboboxElement.selectedItems.length||(this.comboboxElement.value=this.folder.id)}},!this.loading&&(0,s.h)(s.F,null,this.user&&(0,s.h)("calcite-combobox-item",{class:"create-folder",value:"create-folder",textLabel:this.createFolderText,selected:!1,icon:"folder-plus",filterDisabled:!0}),this.folders.map((({id:e,username:t,title:i})=>{const a=this.folders.map((e=>e.id)).includes(this.folder.id)?this.folder:this.getHomeFolder();return(0,s.h)("calcite-combobox-item",{"data-id":e,value:e,textLabel:i,selected:"all"!==(null==a?void 0:a.id)?e===(null==a?void 0:a.id):e===t,icon:e===t?"home":"folder"})})))))),(0,s.h)("calcite-input-message",{status:"invalid",hidden:!this.showError,icon:this.showError,scale:i},this.errorString))}get el(){return(0,s.d)(this)}static get watchers(){return{user:["handleUserChange"],folder:["handleFolderChange"],newFolderInputElement:["setNewFolderActive"]}}};var p;m.style=":host{--arcgis-label-font-weight:400}.label{margin-top:0;margin-bottom:0;font-weight:var(--arcgis-label-font-weight)}.label--bold{--arcgis-label-font-weight:500}.create-folder{--calcite-ui-text-1:var(--calcite-ui-text-link);--calcite-ui-text-3:var(--calcite-ui-text-link)}.combobox-wrapper{position:relative}.progress{position:absolute;top:0;z-index:1}",function(e){e.arcgisTitleInputChange="title",e.arcgisFolderPickerChange="folder",e.arcgisSummaryInputChange="snippet",e.arcgisTagsPickerChange="tags",e.arcgisCategoriesPickerChange="categories"}(p||(p={}));const f=class{constructor(e){(0,s.r)(this,e),this.arcgisItemPropertiesChange=(0,s.c)(this,"arcgisItemPropertiesChange",7),this.portal=void 0,this.user=void 0,this.api=void 0,this.config=void 0,this.itemId=void 0,this.type=void 0,this.scale=void 0}async resetItemPropertiesStore(){o.a.reset()}handleItemPropertiesChange(e){const{detail:t,type:i}=e;o.i[p[i]]=t,this.arcgisItemPropertiesChange.emit(Object.assign({},o.i))}async componentWillLoad(){var e,t;this.portal&&(a.c.portal=this.portal),this.user&&(a.c.user=this.user),this.api&&(a.c.api=this.api),this.config&&(a.c.config=this.config),this.itemId&&({result:o.i.item}=await(0,d.a)(this.itemId,this.portal)),this.type&&(o.i.type=null!==(e=this.type)&&void 0!==e?e:null===(t=o.i.item)||void 0===t?void 0:t.type),this.scale&&(a.c.scale=this.scale)}render(){return(0,s.h)(s.H,null,(0,s.h)("slot",null))}disconnectedCallback(){o.a.reset()}get el(){return(0,s.d)(this)}},b=class{constructor(e){(0,s.r)(this,e),this.arcgisSummaryInputChange=(0,s.c)(this,"arcgisSummaryInputChange",7),this.updateLiveRegion=(0,c.d)((e=>{this.liveRegionText=this.getCharactersText(e)}),1500),this.scale=void 0,this.label=void 0,this.summary=void 0,this.liveRegionText=void 0,this.valid=!0}async getErrorMessage(){return this.valid?null:{code:"summaryInvalid",translatedMessage:this.i18n.invalid}}async componentWillLoad(){var e,t;const i=await(0,r.g)(this.el);this.i18n=i[0],null!==(e=this.scale)&&void 0!==e||(this.scale=a.c.scale),null!==(t=this.summary)&&void 0!==t||(this.summary=o.i.snippet),this.liveRegionText=this.getCharactersText(this.summary),o.a.on("reset",(()=>{this.summary=o.i.snippet}))}componentDidRender(){var e,t,i;const s=null===(i=null===(t=null===(e=this.el.shadowRoot)||void 0===e?void 0:e.querySelector("calcite-input"))||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector("textarea");s&&(s.style.resize="vertical")}getCharactersText(e){return this.i18n.charactersLeft.replace("${num}",""+(2048-e.length))}validate(){this.valid=!/>|</.test(this.summary)}render(){const{i18n:e,summary:t,label:i,scale:a,liveRegionText:r,valid:o}=this;return(0,s.h)("div",{class:`container-${a}`},(0,s.h)("calcite-label",{scale:a,class:"label"},(0,s.h)("p",{class:"label-text"},null!=i?i:e.summary),(0,s.h)("calcite-input",{type:"textarea",id:"summary-input",placeholder:e.addSummary,value:t,maxLength:2048,scale:a,status:o?"idle":"invalid",onCalciteInputInput:e=>{e.stopPropagation();const t=e.target;this.summary=t.value,this.arcgisSummaryInputChange.emit(this.summary),this.updateLiveRegion(t.value),this.validate()}}),(0,s.h)("calcite-input-message",{hidden:o,icon:!0,scale:a,status:o?"idle":"invalid"},e.invalid),(0,s.h)("span",{class:"screen-readers-only","aria-live":"polite"},r)),o&&(0,s.h)("span",{class:"count","aria-hidden":"true"},this.getCharactersText(t)))}get el(){return(0,s.d)(this)}};async function w(e){null!=e||(e=a.c.user);const t=e.url+"/tags";try{return(await(0,u.r)(t)).tags}catch(e){console.error(e)}}b.style=":host{--arcgis-label-font-weight:400;--arcgis-label-margin-bottom:1rem}.container-s{margin-bottom:0.5rem}.container-m{margin-bottom:0.75rem}.container-l{margin-bottom:1rem}.label{--calcite-label-margin-bottom:0}.label-text{margin-top:0;margin-bottom:0;font-weight:var(--arcgis-label-font-weight)}.label--bold{--arcgis-label-font-weight:500}calcite-input{--calcite-ui-border-1:var(--calcite-ui-border-input)}.count{font-size:0.75rem;color:var(--calcite-ui-text-1);opacity:0.75}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";const y=class{constructor(e){(0,s.r)(this,e),this.arcgisTagsPickerChange=(0,s.c)(this,"arcgisTagsPickerChange",7),this.isTag=e=>void 0!==e.tag&&void 0!==e.count,this.controlledTags=[],this.mapItemValue=e=>e.map((e=>e.value)),this.handleKeydown=e=>{var t;if(","===e.key){const i=e.target,s=null===(t=null==i?void 0:i.shadowRoot)||void 0===t?void 0:t.querySelector("input");if(null==s?void 0:s.value){e.preventDefault();const t=i.querySelector(`calcite-combobox-item[value="${s.value}"]`);if(t)t.selected=!0;else{const e=document.createElement("calcite-combobox-item");e.value=s.value,e.textLabel=s.value,e.selected=!0,null==i||i.appendChild(e)}s.value=""}}},this.api=void 0,this.user=void 0,this.scale=void 0,this.activeTags=void 0,this.knownTags=[],this.label=void 0,this.placeholder=void 0,this.hideLabel=void 0}async componentWillLoad(){var e,t,i,s,l,n;const c=await(0,r.g)(this.el);this.i18n=c[0],null!==(e=this.user)&&void 0!==e||(this.user=a.c.user),null!==(t=this.scale)&&void 0!==t||(this.scale=a.c.scale),null!==(i=this.api)&&void 0!==i||(this.api=a.c.api),null!==(s=this.activeTags)&&void 0!==s||(this.activeTags=o.i.tags),this.activeTags=(0,h.f)(this.activeTags),this.knownTags=(0,h.f)([...null!==(l=this.knownTags)&&void 0!==l?l:[],...null!==(n=this.activeTags)&&void 0!==n?n:[]]),o.a.on("reset",(()=>{this.activeTags=o.i.tags}))}async componentDidLoad(){var e,t,i;const{user:s}=this;if(s){const a=null!==(e=s.contentTags)&&void 0!==e?e:s.tags;!(null==a?void 0:a.length)||(null==a?void 0:a.length)>0&&!this.isTag(a[0])?this.knownTags=[...this.knownTags,...(await w(s)).map((e=>e.tag))]:this.knownTags=[...this.knownTags,...a.map((e=>e.tag))],this.knownTags=(0,h.f)([...null!==(t=this.activeTags)&&void 0!==t?t:[],...null!==(i=this.knownTags)&&void 0!==i?i:[]])}}itemPropertiesTagsChangeHandler(e){var t;e.stopPropagation();const i=(null===(t=this.combobox)||void 0===t?void 0:t.value)||[],s=Array.isArray(i)?i:[i];this.arcgisTagsPickerChange.emit((0,h.f)(s));const a=Array.from(this.combobox.children),r=this.combobox.selectedItems;a.forEach((e=>{this.controlledTags.includes(e.value)||e.remove()})),this.knownTags=this.mapItemValue(a),this.activeTags=this.mapItemValue(r)}renderFormattedTags(){const{i18n:e,scale:t,handleKeydown:i,placeholder:a}=this;this.knownTags.forEach((e=>{this.controlledTags.includes(e)||this.controlledTags.push(e)}));const r=this.knownTags.map((e=>{var t;return(0,s.h)("calcite-combobox-item",{key:e,value:e,textLabel:e.length>36?`${e.slice(0,36)}...`:e,selected:(null===(t=this.activeTags)||void 0===t?void 0:t.indexOf(e))>=0})}));return(0,s.h)("calcite-combobox",{label:e.tags,maxItems:5,"allow-custom-values":!0,placeholder:null!=a?a:e.addTags,scale:t,onKeyDown:i,ref:e=>this.combobox=e},r)}async setFocus(){var e;null===(e=this.combobox)||void 0===e||e.setFocus()}render(){const{i18n:e,scale:t,hideLabel:i,label:a}=this;return(0,s.h)("calcite-label",{scale:t},(0,s.h)("p",{class:{label:!0,"screen-reader-only":i}},null!=a?a:e.tags),this.renderFormattedTags())}get el(){return(0,s.d)(this)}};y.style=":host{--arcgis-label-font-weight:400}.label{margin-top:0;margin-bottom:0;font-weight:var(--arcgis-label-font-weight)}.label--bold{--arcgis-label-font-weight:500}.screen-reader-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";const x=class{constructor(e){(0,s.r)(this,e),this.arcgisTitleInputChange=(0,s.c)(this,"arcgisTitleInputChange",7),this.debouncedInput=(0,c.d)((()=>this.handleTitleValidation()),400),this.api=void 0,this.portal=void 0,this.user=void 0,this.scale=void 0,this.label=void 0,this.itemTitle=void 0,this.currentFolder=void 0,this.type=void 0,this.update=!1,this.enablePublishing=void 0,this.titleError=void 0}async focusMainInput(){var e,t;null===(t=(e=this.mainInputRef).setFocus)||void 0===t||t.call(e)}async validateTitle(){return this.debouncedInput.invoke()}async handleTitleValidation(){const{type:e,itemTitle:t,enablePublishing:i,portal:s,user:a,update:r}=this,{extension:o}=(0,g.a)(t);if(e)return this.titleError=await async function({portal:e,user:t,title:i,itemType:s,folder:a,extension:r,enablePublishing:o=!1,update:l=!1}){if(!t||!e)return{code:"missingUserOrPortal"};if(!i||i.length<=0)return{code:"titleRequired"};if("Data Store"===s&&(/[\s.@~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g.test(i)||i.length>90))return{code:"dataStoreTitleInvalid"};if(!o&&(/<|>/gi.test(i)||i.length>250))return{code:"titleInvalid"};if(o&&(/[.@~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g.test(i)||i.length>90))return{code:"serviceNameInvalid"};const n=o?function(e){switch(e){case"CSV":case"Microsoft Excel":case"GeoJson":case"Shapefile":case"File Geodatabase":case"Image Collection":case"GeoPackage":case"Service Definition":return"Feature Service";case"Tile Package":return"Map Service";case"Vector Tile Package":return"Vector Tile Service";case"Scene Package":return"Scene Service";case"3DTiles Package":return"3DTiles Service"}return e}(s):s,{itemURLList:c}=await(0,d.s)(i,n,a,r,t,e)||{};if(c&&!l)return{code:"itemExists",itemUrl:c[0]};if(o){const t=await(0,u.r)(`${(0,u.g)(e)}portals/${e.id}/isServiceNameAvailable`,{name:i.replace(/\s/g,"_"),type:n});if(!(null==t?void 0:t.available))return{code:"titleInUseService",layerName:i}}return null}({portal:s,user:a,title:t,itemType:e,folder:this.currentFolder,extension:o,enablePublishing:i,update:r}),this.getErrorMessage();console.error("No item type found. Skipping title validation")}getErrorMessage(){const{itemTitle:e,titleError:t,i18n:i}=this;return e||(this.titleError={code:"titleRequired",translatedMessage:this.i18n.validation.titleRequired}),t&&(t.translatedMessage=i.validation[this.titleError.code].replace("${name}",e)),t}async componentWillLoad(){var e,t,i,s,l,n,c;const d=await(0,r.g)(this.el);this.i18n=d[0],null!==(e=this.portal)&&void 0!==e||(this.portal=a.c.portal),null!==(t=this.user)&&void 0!==t||(this.user=a.c.user),null!==(i=this.scale)&&void 0!==i||(this.scale=a.c.scale),null!==(s=this.api)&&void 0!==s||(this.api=a.c.api),null!==(l=this.type)&&void 0!==l||(this.type=o.i.type),null!==(n=this.itemTitle)&&void 0!==n||(this.itemTitle=o.i.title),null!==(c=this.currentFolder)&&void 0!==c||(this.currentFolder=o.i.folder),this.itemTitle&&this.handleTitleValidation(),o.i.title=this.itemTitle,o.a.on("reset",(()=>{this.itemTitle=o.i.title}))}render(){var e;const{i18n:t,itemTitle:i,scale:a}=this,{translatedMessage:r,code:o}=this.titleError||{},l=!r;return(0,s.h)("calcite-label",{scale:a},(0,s.h)("p",{class:"label"},null!==(e=this.label)&&void 0!==e?e:t.title),(0,s.h)("calcite-input",{id:"item-properties-title",placeholder:t.addTitle,value:i,scale:a,onInput:this.debouncedInput,max:250,ref:e=>this.mainInputRef=e,status:l?"idle":"invalid",onCalciteInputInput:e=>{e.stopPropagation(),this.itemTitle=e.target.value,this.arcgisTitleInputChange.emit(this.itemTitle)}}),(0,s.h)("calcite-input-message",{icon:!0,hidden:l,status:l?"idle":"invalid"},r||t[o]||t.title))}get el(){return(0,s.d)(this)}static get watchers(){return{currentFolder:["handleTitleValidation"]}}};x.style=":host{--arcgis-label-font-weight:400}.label{margin-top:0;margin-bottom:0;font-weight:var(--arcgis-label-font-weight)}.label--bold{--arcgis-label-font-weight:500}calcite-input{--calcite-ui-border-1:var(--calcite-ui-border-input)}"},12357:(e,t,i)=>{i.d(t,{a:()=>n,b:()=>l,f:()=>o});var s=i(41171),a=i(76134),r=i(62381);async function o(e,t){return null!=e||(e=a.c.portal),null!=t||(t=a.c.user),!(null==e?void 0:e.id)||t&&(0,r.n)(t)?null:(0,s.f)((()=>(0,s.r)(`${(0,s.g)(e)}portals/${e.id}/categorySchema`)),"categorySchema",e.id)}async function l(e,t){return null!=t||(t=null===a.c||void 0===a.c?void 0:a.c.portal),e&&t?(0,s.f)((()=>(0,s.r)(`${(0,s.g)(t)}community/groups/${e}/categorySchema`)),"categorySchema",e):null}async function n(e){return(0,s.f)((()=>async function(e){var t;const i=(0,s.g)(e),a=await(0,s.r)(`${i}portals/self`),r=await(0,s.r)(`${i}community/groups?q=${a.contentCategorySetsGroupQuery}`),o=null===(t=null==r?void 0:r.results)||void 0===t?void 0:t[0],l=(await(0,s.r)(`${i}content/groups/${o.id}/search`,{q:"typekeywords: LivingAtlas"})).results[0];return(0,s.r)(`${i}content/items/${l.id}/data`)}(e)),"categorySchema","living-atlas")}},48333:(e,t,i)=>{i.d(t,{a:()=>r,f:()=>c,g:()=>n,s:()=>o,v:()=>l});var s=i(31546),a=i(48680);function r(e,t){const i=/(?:\.([^.]+))?$/;let s=e.replace(/^.*(\\|\/|:)/,""),r=s&&i.exec(s)[1]?i.exec(s)[1].toLowerCase():"",o="";if(s.indexOf(".rft.")>-1){const[e,t]=s.split(".rft.");r=`rft.${t}`,o=e}return s&&!o&&(o=-1===s.lastIndexOf(".")?s:s.substring(0,s.lastIndexOf("."))),o=o.replace(/\.|-/g,"_"),t&&(o=function(e){return`${e}_${(0,a.g)()}`}(o),s=`${o}.${r}`),{title:o,fileName:s,extension:r}}function o(e,t){return r(e.name,!!t)}function l(e,t){let i=e;const s=e.lastIndexOf("\\");return s>-1&&(i=i.substring(s+1,i.length)),i.replace(/\ /g,"_")===t.replace(/\ /g,"_")}function n(e){return s.a[e]?s.a[e]:s.a[Object.keys(s.a).find((t=>s.a[t].type===e))]}function c(e){if(!e)return"0 B";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Math.round(e/Math.pow(1024,t))} ${["B","KB","MB","GB","TB"][t]}`}},48680:(e,t,i)=>{i.d(t,{g:()=>s});const s=()=>[2,1,1,1,3].map((e=>{let t="";for(let i=0;i<e;i++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")},81068:(e,t,i)=>{i.d(t,{C:()=>l,a:()=>d,f:()=>n,g:()=>o,l:()=>r});var s=i(66716),a=i(18869);const r=new Map([["ar","ar"],["bg","bg"],["bs","bs"],["ca","ca"],["cs","cs"],["da","da"],["de","de"],["el","el"],["en","en"],["es","es"],["et","et"],["fi","fi"],["fr","fr"],["he","he"],["hr","hr"],["hu","hu"],["id","id"],["it","it"],["ja","ja"],["ko","ko"],["lt","lt"],["lv","lv"],["nb","nb"],["nl","nl"],["pl","pl"],["pt-br","pt-BR"],["pt-pt","pt-PT"],["ro","ro"],["ru","ru"],["sk","sk"],["sl","sl"],["sr","sr"],["sv","sv"],["th","th"],["tr","tr"],["uk","uk"],["vi","vi"],["zh-cn","zh-CN"],["zh-hk","zh-HK"],["zh-tw","zh-TW"]]);function o(e){return function(e,t,i){const s=(0,a.c)(e,"[dir]");return s?s.getAttribute("dir"):"ltr"}(e)}const l={rtl:"arcgis--rtl"};async function n(e,t){const{api:i,type:a,places:r}=t||{};if(4===i){const[t]=await(0,s.l)(["esri/intl"]),i=t.convertNumberFormatToIntlOptions({places:r,style:a,digitSeparator:!0});return t.formatNumber(e,Object.assign(Object.assign({},i),{style:a}))}const[o]=await(0,s.l)(["dojo/number"]);return o.format(e,{type:a,places:r,pattern:null==t?void 0:t.pattern})}const c={};function d(e){const t=document.documentElement.lang;return c[t]||(c[t]=new Intl.DateTimeFormat(document.documentElement.lang,{year:"numeric",month:"short",day:"numeric"})),c[t].format(e)}},62727:(e,t,i)=>{i.d(t,{a:()=>o,g:()=>c});var s=i(18869),a=i(81068),r=i(28384);function o(e){var t,i,r;const o=null!==(t=(0,s.c)(e,"[lang]"))&&void 0!==t?t:null===(r=null===(i=e.shadowRoot)||void 0===i?void 0:i.ownerDocument)||void 0===r?void 0:r.documentElement,l=((null==o?void 0:o.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return a.l.has(l)?a.l.get(l):a.l.has(l.slice(0,2))?a.l.get(l.slice(0,2)):"en"}const l={};function n(e,t){const i=`${e}${t}`;return l[i]||(l[i]=function(e,t){return new Promise(((i,s)=>{fetch((0,r.a)(`../arcgis-app-assets/i18n/${e}.i18n.${t}.json`)).then((e=>{e.ok?i(e.json()):s()}),(()=>s()))}))}(e,t)),l[i]}async function c(e,t){const i=t||e.tagName.toLowerCase(),r=o(e),l=function(e){var t,i,r;const o=null!==(t=(0,s.c)(e,"[lang]"))&&void 0!==t?t:null===(r=null===(i=e.shadowRoot)||void 0===i?void 0:i.ownerDocument)||void 0===r?void 0:r.documentElement,l=((null==o?void 0:o.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return a.l.has(l)?a.l.get(l):a.l.has(l.slice(0,2))?l:"en"}(e);let c;try{c=await n(i,r)}catch(e){console.warn(`no locale for ${i} (${r}) loading default locale en.`),c=await n(i,"en")}return[c,r,l]}},96729:(e,t,i)=>{i.d(t,{a:()=>l,b:()=>n,c:()=>u,d:()=>d,e:()=>h,f:()=>r,g:()=>c});var s=i(41171),a=i(76134);async function r(e,t){return(0,s.r)(`${(0,s.g)(t)}/community/users/${e}`)}async function o(){return(0,s.r)(`${(0,s.g)()}/community/self`)}async function l(){var e;const t=null===a.c||void 0===a.c?void 0:a.c.user;if(!t)return[];const i=await(0,s.f)((()=>o()),"communitySelf",t.username);return null!==(e=null==i?void 0:i.groups)&&void 0!==e?e:[]}async function n(){const e=null===a.c||void 0===a.c?void 0:a.c.user;return e?(await(0,s.f)((()=>o()),"communitySelf",e.username)).favGroupId:null}async function c(e){var t;const i=null!==(t=null!=e?e:a.c.user)&&void 0!==t?t:a.c.portal.user,{folders:r}=await async function(e){var t,i;const r=null!==(t=null!=e?e:a.c.user)&&void 0!==t?t:a.c.portal.user,o=a.c.portal;null!==(i=r.userContentUrl)&&void 0!==i||(r.userContentUrl=(null==o?void 0:o.restUrl)+"/content/users/"+e.username);const l=await(0,s.r)(r.userContentUrl,{num:1});return Promise.resolve(l)}(i),{username:o}=i;return[{username:o,id:o,title:o,created:"now"},...r]}async function d(e,t){var i;const s=null!==(i=null!=t?t:a.c.user)&&void 0!==i?i:a.c.portal.user;return(await c(s)).find((t=>t.id===e))}function h(e){return{username:e,id:e,title:e,created:"now"}}async function u(e,t){var i;const r=`${(null!==(i=null!=t?t:a.c.user)&&void 0!==i?i:a.c.portal.user).userContentUrl}/createFolder`;return await(0,s.r)(r,{title:e},{},"post")}}}]);