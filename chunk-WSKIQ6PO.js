import{T as Wt,V as Zt,eb as Qt,fb as Xt}from"./chunk-G47KU2AF.js";import{$ as ot,Ac as Ot,B,Ba as A,Bd as Pt,Ea as p,Eb as tt,F as zt,Fa as v,Fb as ct,Fd as k,Gb as j,Gd as ft,He as Mt,Ie as ht,Ja as Q,Je as nt,Le as gt,Na as c,Nb as y,Oa as L,Of as jt,Pa as s,Pf as Vt,Qa as at,Qf as Bt,Ra as M,Tf as At,Ua as st,V as P,Va as wt,Vb as dt,Vf as qt,W as $,X as Ct,_b as mt,a as H,ba as Z,bb as z,ca as yt,cb as C,cc as bt,db as F,dc as Ut,eb as T,ec as _t,fa as U,fb as b,fc as It,ga as I,gb as Tt,gc as Lt,h as it,hb as D,hc as Ft,ic as Nt,id as $t,j as R,ja as xt,jc as ut,k as W,kb as N,ld as kt,ma as vt,mb as l,nb as lt,ob as pt,pg as Ht,q as S,rc as St,s as O,sb as X,sd as et,tb as Y,ub as G,vb as h,vc as Rt,w as V,wa as rt,wb as J,wc as Dt,yb as K,yc as Et}from"./chunk-CKY6JSTV.js";var Kt=["file"],te=["nz-upload-btn",""],Gt=["*"];function ee(e,r){}var q=e=>({$implicit:e});function ne(e,r){if(e&1&&(z(0,"div",18),c(1,ee,0,0,"ng-template",19),C()),e&2){let i=l(2).$implicit,t=h(5);M("ant-upload-list-item-file",!i.isUploading),p(),s("ngTemplateOutlet",t)("ngTemplateOutletContext",j(4,q,i))}}function ie(e,r){if(e&1&&F(0,"img",22),e&2){let i=l(3).$implicit;s("src",i.thumbUrl||i.url,A),L("alt",i.name)}}function oe(e,r){if(e&1){let i=D();z(0,"a",20),N("click",function(n){U(i);let o=l(2).$implicit,a=l();return I(a.handlePreview(o,n))}),c(1,ie,1,2,"img",21),C()}if(e&2){l();let i=h(5),t=l().$implicit;M("ant-upload-list-item-file",!t.isImageUrl),s("href",t.url||t.thumbUrl,A),p(),s("ngIf",t.isImageUrl)("ngIfElse",i)}}function re(e,r){}function ae(e,r){if(e&1&&(z(0,"div",23),c(1,re,0,0,"ng-template",19),C()),e&2){let i=l(2).$implicit,t=h(5);p(),s("ngTemplateOutlet",t)("ngTemplateOutletContext",j(2,q,i))}}function se(e,r){}function le(e,r){if(e&1&&c(0,se,0,0,"ng-template",19),e&2){let i=l(2).$implicit,t=h(5);s("ngTemplateOutlet",t)("ngTemplateOutletContext",j(2,q,i))}}function pe(e,r){if(e&1&&(T(0,13),c(1,ne,2,6,"div",14)(2,oe,2,5,"a",15)(3,ae,2,4,"div",16),b(),c(4,le,1,4,"ng-template",null,17,y)),e&2){let i=l().$implicit;s("ngSwitch",i.iconType),p(),s("ngSwitchCase","uploading"),p(),s("ngSwitchCase","thumbnail")}}function ce(e,r){e&1&&(T(0),F(1,"span",29),b())}function de(e,r){if(e&1&&(T(0),c(1,ce,2,0,"ng-container",24),b()),e&2){let i=l(2).$implicit,t=h(4);p(),s("ngIf",i.isUploading)("ngIfElse",t)}}function me(e,r){if(e&1&&(T(0),J(1),b()),e&2){let i=l(5);p(),K(" ",i.locale.uploading," ")}}function _e(e,r){if(e&1&&(T(0),c(1,me,2,1,"ng-container",24),b()),e&2){let i=l(2).$implicit,t=h(4);p(),s("ngIf",i.isUploading)("ngIfElse",t)}}function ue(e,r){if(e&1&&F(0,"span",30),e&2){let i=l(2).$implicit;s("nzType",i.isUploading?"loading":"paper-clip")}}function fe(e,r){if(e&1&&(T(0)(1,13),c(2,de,2,2,"ng-container",27)(3,_e,2,2,"ng-container",27)(4,ue,1,1,"span",28),b()()),e&2){let i=l(3);p(),s("ngSwitch",i.listType),p(),s("ngSwitchCase","picture"),p(),s("ngSwitchCase","picture-card")}}function he(e,r){}function ge(e,r){if(e&1&&F(0,"span",31),e&2){let i=l().$implicit;s("nzType",i.isImageUrl?"picture":"file")}}function ze(e,r){if(e&1&&c(0,fe,5,3,"ng-container",24)(1,he,0,0,"ng-template",19,25,y)(3,ge,1,1,"ng-template",null,26,y),e&2){let i=r.$implicit,t=h(2),n=l(2);s("ngIf",!n.iconRender)("ngIfElse",t),p(),s("ngTemplateOutlet",n.iconRender)("ngTemplateOutletContext",j(4,q,i))}}function Ce(e,r){if(e&1){let i=D();z(0,"button",33),N("click",function(n){U(i);let o=l(2).$implicit,a=l();return I(a.handleRemove(o,n))}),F(1,"span",34),C()}if(e&2){let i=l(3);L("title",i.locale.removeFile)}}function ye(e,r){if(e&1&&c(0,Ce,2,1,"button",32),e&2){let i=l(2);s("ngIf",i.icons.showRemoveIcon)}}function xe(e,r){if(e&1){let i=D();z(0,"button",33),N("click",function(){U(i);let n=l(2).$implicit,o=l();return I(o.handleDownload(n))}),F(1,"span",35),C()}if(e&2){let i=l(3);L("title",i.locale.downloadFile)}}function ve(e,r){if(e&1&&c(0,xe,2,1,"button",32),e&2){let i=l().$implicit;s("ngIf",i.showDownload)}}function we(e,r){}function Te(e,r){}function be(e,r){if(e&1&&(z(0,"span"),c(1,we,0,0,"ng-template",10)(2,Te,0,0,"ng-template",10),C()),e&2){l(2);let i=h(9),t=h(7),n=l();st("ant-upload-list-item-card-actions ",n.listType==="picture"?"picture":"",""),p(),s("ngTemplateOutlet",i),p(),s("ngTemplateOutlet",t)}}function Ue(e,r){if(e&1&&c(0,be,3,5,"span",36),e&2){let i=l(2);s("ngIf",i.listType!=="picture-card")}}function Ie(e,r){if(e&1){let i=D();z(0,"a",39),N("click",function(n){U(i);let o=l(2).$implicit,a=l();return I(a.handlePreview(o,n))}),J(1),C()}if(e&2){let i=l(2).$implicit;s("href",i.url,A),L("title",i.name)("download",i.linkProps&&i.linkProps.download),p(),K(" ",i.name," ")}}function Le(e,r){if(e&1){let i=D();z(0,"span",40),N("click",function(n){U(i);let o=l(2).$implicit,a=l();return I(a.handlePreview(o,n))}),J(1),C()}if(e&2){let i=l(2).$implicit;L("title",i.name),p(),K(" ",i.name," ")}}function Fe(e,r){}function Ne(e,r){if(e&1&&c(0,Ie,2,4,"a",37)(1,Le,2,2,"span",38)(2,Fe,0,0,"ng-template",10),e&2){let i=l().$implicit,t=h(11);s("ngIf",i.url),p(),s("ngIf",!i.url),p(),s("ngTemplateOutlet",t)}}function Se(e,r){}function Re(e,r){}var De=()=>({opacity:.5,"pointer-events":"none"});function Ee(e,r){if(e&1){let i=D();z(0,"a",44),N("click",function(n){U(i);let o=l(2).$implicit,a=l();return I(a.handlePreview(o,n))}),F(1,"span",45),C()}if(e&2){let i=l(2).$implicit,t=l();s("href",i.url||i.thumbUrl,A)("ngStyle",i.url||i.thumbUrl?null:ct(3,De)),L("title",t.locale.previewFile)}}function Oe(e,r){}function $e(e,r){if(e&1&&(T(0),c(1,Oe,0,0,"ng-template",10),b()),e&2){l(2);let i=h(9);p(),s("ngTemplateOutlet",i)}}function ke(e,r){}function Pe(e,r){if(e&1&&(z(0,"span",41),c(1,Ee,2,4,"a",42)(2,$e,2,1,"ng-container",43)(3,ke,0,0,"ng-template",10),C()),e&2){let i=l().$implicit,t=h(7),n=l();p(),s("ngIf",n.icons.showPreviewIcon),p(),s("ngIf",i.status==="done"),p(),s("ngTemplateOutlet",t)}}function Me(e,r){if(e&1&&(z(0,"div",46),F(1,"nz-progress",47),C()),e&2){let i=l().$implicit;p(),s("nzPercent",i.percent)("nzShowInfo",!1)("nzStrokeWidth",2)}}function je(e,r){if(e&1&&(z(0,"div")(1,"div",1),c(2,pe,6,3,"ng-template",null,2,y)(4,ze,5,6,"ng-template",null,3,y)(6,ye,1,1,"ng-template",null,4,y)(8,ve,1,1,"ng-template",null,5,y)(10,Ue,1,1,"ng-template",null,6,y)(12,Ne,3,3,"ng-template",null,7,y),z(14,"div",8)(15,"span",9),c(16,Se,0,0,"ng-template",10)(17,Re,0,0,"ng-template",10),C()(),c(18,Pe,4,3,"span",11)(19,Me,2,3,"div",12),C()()),e&2){let i=r.$implicit,t=h(3),n=h(13),o=l();st("ant-upload-list-",o.listType,"-container"),p(),wt("ant-upload-list-item ant-upload-list-item-",i.status," ant-upload-list-item-list-type-",o.listType,""),s("@itemState",void 0)("nzTooltipTitle",i.status==="error"?i.message:null),L("data-key",i.key),p(15),s("ngTemplateOutlet",t),p(),s("ngTemplateOutlet",n),p(),s("ngIf",o.listType==="picture-card"&&!i.isUploading),p(),s("ngIf",i.isUploading)}}var Ve=["uploadComp"],Be=["listComp"],Ae=()=>[];function qe(e,r){if(e&1&&F(0,"nz-upload-list",8,9),e&2){let i=l(2);at("display",i.nzShowUploadList?"":"none"),s("locale",i.locale)("listType",i.nzListType)("items",i.nzFileList||ct(13,Ae))("icons",i.nzShowUploadList)("iconRender",i.nzIconRender)("previewFile",i.nzPreviewFile)("previewIsImage",i.nzPreviewIsImage)("onPreview",i.nzPreview)("onRemove",i.onRemove)("onDownload",i.nzDownload)("dir",i.dir)}}function He(e,r){e&1&&Tt(0)}function We(e,r){if(e&1&&(T(0),c(1,He,1,0,"ng-container",10),b()),e&2){let i=l(2);p(),s("ngTemplateOutlet",i.nzFileListRender)("ngTemplateOutletContext",j(2,q,i.nzFileList))}}function Ze(e,r){if(e&1&&c(0,qe,2,14,"nz-upload-list",6)(1,We,2,4,"ng-container",7),e&2){let i=l();s("ngIf",i.locale&&!i.nzFileListRender),p(),s("ngIf",i.nzFileListRender)}}function Qe(e,r){e&1&&pt(0)}function Xe(e,r){}function Ye(e,r){if(e&1&&(z(0,"div",11)(1,"div",12,13),c(3,Xe,0,0,"ng-template",14),C()()),e&2){let i=l(),t=h(3);at("display",i.nzShowButton?"":"none"),s("ngClass",i.classList),p(),s("options",i._btnOptions),p(2),s("ngTemplateOutlet",t)}}function Ge(e,r){}function Je(e,r){}function Ke(e,r){if(e&1){let i=D();T(0),z(1,"div",15),N("drop",function(n){U(i);let o=l();return I(o.fileDrop(n))})("dragover",function(n){U(i);let o=l();return I(o.fileDrop(n))})("dragleave",function(n){U(i);let o=l();return I(o.fileDrop(n))}),z(2,"div",16,13)(4,"div",17),c(5,Ge,0,0,"ng-template",14),C()()(),c(6,Je,0,0,"ng-template",14),b()}if(e&2){let i=l(),t=h(3),n=h(1);p(),s("ngClass",i.classList),p(),s("options",i._btnOptions),p(3),s("ngTemplateOutlet",t),p(),s("ngTemplateOutlet",n)}}function tn(e,r){}function en(e,r){}function nn(e,r){if(e&1&&(T(0),c(1,tn,0,0,"ng-template",14)(2,en,0,0,"ng-template",14),b()),e&2){l(2);let i=h(1),t=h(5);p(),s("ngTemplateOutlet",i),p(),s("ngTemplateOutlet",t)}}function on(e,r){if(e&1&&c(0,nn,3,2,"ng-container",3),e&2){let i=l(),t=h(10);s("ngIf",i.nzListType==="picture-card")("ngIfElse",t)}}function rn(e,r){}function an(e,r){}function sn(e,r){if(e&1&&c(0,rn,0,0,"ng-template",14)(1,an,0,0,"ng-template",14),e&2){l();let i=h(5),t=h(1);s("ngTemplateOutlet",i),p(),s("ngTemplateOutlet",t)}}var ln=(()=>{let r=class r{onClick(){this.options.disabled||!this.options.openFileDialogOnClick||this.file.nativeElement.click()}onFileDrop(t){if(this.options.disabled||t.type==="dragover"){t.preventDefault();return}if(this.options.directory)this.traverseFileTree(t.dataTransfer.items);else{let n=Array.prototype.slice.call(t.dataTransfer.files).filter(o=>this.attrAccept(o,this.options.accept));n.length&&this.uploadFiles(n)}t.preventDefault()}onChange(t){if(this.options.disabled)return;let n=t.target;this.uploadFiles(n.files),n.value=""}traverseFileTree(t){let n=(o,a)=>{o.isFile?o.file(d=>{this.attrAccept(d,this.options.accept)&&this.uploadFiles([d])}):o.isDirectory&&o.createReader().readEntries(m=>{for(let u of m)n(u,`${a}${o.name}/`)})};for(let o of t)n(o.webkitGetAsEntry(),"")}attrAccept(t,n){if(t&&n){let o=Array.isArray(n)?n:n.split(","),a=`${t.name}`,d=`${t.type}`,m=d.replace(/\/.*$/,"");return o.some(u=>{let f=u.trim();return f.charAt(0)==="."?a.toLowerCase().indexOf(f.toLowerCase(),a.toLowerCase().length-f.toLowerCase().length)!==-1:/\/\*$/.test(f)?m===f.replace(/\/.*$/,""):d===f})}return!0}attachUid(t){return t.uid||(t.uid=Math.random().toString(36).substring(2)),t}uploadFiles(t){let n=O(Array.prototype.slice.call(t));this.options.filters&&this.options.filters.forEach(o=>{n=n.pipe(P(a=>{let d=o.fn(a);return d instanceof R?d:O(d)}))}),n.subscribe(o=>{o.forEach(a=>{this.attachUid(a),this.upload(a,o)})},o=>{et("Unhandled upload filter error",o)})}upload(t,n){if(!this.options.beforeUpload)return this.post(t);let o=this.options.beforeUpload(t,n);if(o instanceof R)o.subscribe(a=>{let d=Object.prototype.toString.call(a);d==="[object File]"||d==="[object Blob]"?(this.attachUid(a),this.post(a)):typeof a=="boolean"&&a!==!1&&this.post(t)},a=>{et("Unhandled upload beforeUpload error",a)});else if(o!==!1)return this.post(t)}post(t){if(this.destroy)return;let n=O(t),o,a=this.options,{uid:d}=t,{action:m,data:u,headers:f,transformFile:g}=a,w={action:typeof m=="string"?m:"",name:a.name,headers:f,file:t,postFile:t,data:u,withCredentials:a.withCredentials,onProgress:a.onProgress?_=>{a.onProgress(_,t)}:void 0,onSuccess:(_,x)=>{this.clean(d),a.onSuccess(_,t,x)},onError:_=>{this.clean(d),a.onError(_,t)}};if(typeof m=="function"){let _=m(t);_ instanceof R?n=n.pipe(P(()=>_),V(x=>(w.action=x,t))):w.action=_}if(typeof g=="function"){let _=g(t);n=n.pipe(P(()=>_ instanceof R?_:O(_)),Ct(x=>o=x))}if(typeof u=="function"){let _=u(t);_ instanceof R?n=n.pipe(P(()=>_),V(x=>(w.data=x,o??t))):w.data=_}if(typeof f=="function"){let _=f(t);_ instanceof R?n=n.pipe(P(()=>_),V(x=>(w.headers=x,o??t))):w.headers=_}n.subscribe(_=>{w.postFile=_;let x=(a.customRequest||this.xhr).call(this,w);x instanceof it||et("Must return Subscription type in '[nzCustomRequest]' property"),this.reqs[d]=x,a.onStart(t)})}xhr(t){let n=new FormData;t.data&&Object.keys(t.data).map(a=>{n.append(a,t.data[a])}),n.append(t.name,t.postFile),t.headers||(t.headers={}),t.headers["X-Requested-With"]!==null?t.headers["X-Requested-With"]="XMLHttpRequest":delete t.headers["X-Requested-With"];let o=new Rt("POST",t.action,n,{reportProgress:!0,withCredentials:t.withCredentials,headers:new St(t.headers)});return this.http.request(o).subscribe(a=>{a.type===Dt.UploadProgress?(a.total>0&&(a.percent=a.loaded/a.total*100),t.onProgress(a,t.file)):a instanceof Et&&t.onSuccess(a.body,t.file,a)},a=>{this.abort(t.file),t.onError(a,t.file)})}clean(t){let n=this.reqs[t];n instanceof it&&n.unsubscribe(),delete this.reqs[t]}abort(t){t?this.clean(t&&t.uid):Object.keys(this.reqs).forEach(n=>this.clean(n))}constructor(t,n,o){if(this.ngZone=t,this.http=n,this.elementRef=o,this.reqs={},this.destroy=!1,this.destroy$=new W,!n)throw new Error("Not found 'HttpClient', You can import 'HttpClientModule' in your root module.")}ngOnInit(){this.ngZone.runOutsideAngular(()=>{B(this.elementRef.nativeElement,"click").pipe($(this.destroy$)).subscribe(()=>this.onClick()),B(this.elementRef.nativeElement,"keydown").pipe($(this.destroy$)).subscribe(t=>{this.options.disabled||(t.key==="Enter"||t.keyCode===13)&&this.onClick()})})}ngOnDestroy(){this.destroy=!0,this.destroy$.next(),this.abort()}};r.\u0275fac=function(n){return new(n||r)(v(Q),v(Ot,8),v(xt))},r.\u0275cmp=Z({type:r,selectors:[["","nz-upload-btn",""]],viewQuery:function(n,o){if(n&1&&X(Kt,7),n&2){let a;Y(a=G())&&(o.file=a.first)}},hostAttrs:[1,"ant-upload"],hostVars:4,hostBindings:function(n,o){n&1&&N("drop",function(d){return o.onFileDrop(d)})("dragover",function(d){return o.onFileDrop(d)}),n&2&&(L("tabindex","0")("role","button"),M("ant-upload-disabled",o.options.disabled))},inputs:{options:"options"},exportAs:["nzUploadBtn"],standalone:!0,features:[tt],attrs:te,ngContentSelectors:Gt,decls:3,vars:4,consts:[["type","file",2,"display","none",3,"multiple","change"],["file",""]],template:function(n,o){n&1&&(lt(),z(0,"input",0,1),N("change",function(d){return o.onChange(d)}),C(),pt(2)),n&2&&(s("multiple",o.options.multiple),L("accept",o.options.accept)("directory",o.options.directory?"directory":null)("webkitdirectory",o.options.directory?"webkitdirectory":null))},encapsulation:2});let e=r;return e})(),Yt=e=>!!e&&e.indexOf("image/")===0,E=200,Jt=(()=>{let r=class r{get showPic(){return this.listType==="picture"||this.listType==="picture-card"}set items(t){this.list=t}genErr(t){return t.response&&typeof t.response=="string"?t.response:t.error&&t.error.statusText||this.locale.uploadError}extname(t){let n=t.split("/"),a=n[n.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(a)||[""])[0]}isImageUrl(t){if(Yt(t.type))return!0;let n=t.thumbUrl||t.url||"";if(!n)return!1;let o=this.extname(n);return/^data:image\//.test(n)||/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(o)?!0:/^data:/.test(n)?!1:!o}getIconType(t){return this.showPic?t.isUploading||!t.thumbUrl&&!t.url?"uploading":"thumbnail":""}previewImage(t){if(!Yt(t.type)||!this.platform.isBrowser)return O("");let n=this.doc.createElement("canvas");n.width=E,n.height=E,n.style.cssText=`position: fixed; left: 0; top: 0; width: ${E}px; height: ${E}px; z-index: 9999; display: none;`,this.doc.body.appendChild(n);let o=n.getContext("2d"),a=new Image,d=URL.createObjectURL(t);return a.src=d,B(a,"load").pipe(V(()=>{let{width:m,height:u}=a,f=E,g=E,w=0,_=0;m<u?(g=u*(E/m),_=-(g-f)/2):(f=m*(E/u),w=-(f-g)/2);try{o.drawImage(a,w,_,f,g)}catch{}let x=n.toDataURL();return this.doc.body.removeChild(n),URL.revokeObjectURL(d),x}))}genThumb(){if(!this.platform.isBrowser)return;let t=window;!this.showPic||typeof document>"u"||typeof t>"u"||!t.FileReader||!t.File||this.list.filter(n=>n.originFileObj instanceof File&&n.thumbUrl===void 0).forEach(n=>{n.thumbUrl="";let o=(this.previewFile?this.previewFile(n):this.previewImage(n.originFileObj)).pipe($(this.destroy$));this.ngZone.runOutsideAngular(()=>{o.subscribe(a=>{this.ngZone.run(()=>{n.thumbUrl=a,this.detectChanges()})})})})}showDownload(t){return!!(this.icons.showDownloadIcon&&t.status==="done")}fixData(){this.list.forEach(t=>{t.isUploading=t.status==="uploading",t.message=this.genErr(t),t.linkProps=typeof t.linkProps=="string"?JSON.parse(t.linkProps):t.linkProps,t.isImageUrl=this.previewIsImage?this.previewIsImage(t):this.isImageUrl(t),t.iconType=this.getIconType(t),t.showDownload=this.showDownload(t)})}handlePreview(t,n){if(this.onPreview)return n.preventDefault(),this.onPreview(t)}handleRemove(t,n){n.preventDefault(),this.onRemove&&this.onRemove(t)}handleDownload(t){typeof this.onDownload=="function"?this.onDownload(t):t.url&&window.open(t.url)}constructor(t,n,o,a){this.cdr=t,this.doc=n,this.ngZone=o,this.platform=a,this.list=[],this.locale={},this.iconRender=null,this.dir="ltr",this.destroy$=new W}detectChanges(){this.fixData(),this.cdr.detectChanges()}ngOnChanges(){this.fixData(),this.genThumb()}ngOnDestroy(){this.destroy$.next()}};r.\u0275fac=function(n){return new(n||r)(v(dt),v(mt),v(Q),v($t))},r.\u0275cmp=Z({type:r,selectors:[["nz-upload-list"]],hostAttrs:[1,"ant-upload-list"],hostVars:8,hostBindings:function(n,o){n&2&&M("ant-upload-list-rtl",o.dir==="rtl")("ant-upload-list-text",o.listType==="text")("ant-upload-list-picture",o.listType==="picture")("ant-upload-list-picture-card",o.listType==="picture-card")},inputs:{locale:"locale",listType:"listType",items:"items",icons:"icons",onPreview:"onPreview",onRemove:"onRemove",onDownload:"onDownload",previewFile:"previewFile",previewIsImage:"previewIsImage",iconRender:"iconRender",dir:"dir"},exportAs:["nzUploadList"],standalone:!0,features:[rt,tt],decls:1,vars:1,consts:[[3,"class",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"],["icon",""],["iconNode",""],["removeIcon",""],["downloadIcon",""],["downloadOrDelete",""],["preview",""],[1,"ant-upload-list-item-info"],[1,"ant-upload-span"],[3,"ngTemplateOutlet"],["class","ant-upload-list-item-actions",4,"ngIf"],["class","ant-upload-list-item-progress",4,"ngIf"],[3,"ngSwitch"],["class","ant-upload-list-item-thumbnail",3,"ant-upload-list-item-file",4,"ngSwitchCase"],["class","ant-upload-list-item-thumbnail","target","_blank","rel","noopener noreferrer",3,"ant-upload-list-item-file","href","click",4,"ngSwitchCase"],["class","ant-upload-text-icon",4,"ngSwitchDefault"],["noImageThumbTpl",""],[1,"ant-upload-list-item-thumbnail"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["target","_blank","rel","noopener noreferrer",1,"ant-upload-list-item-thumbnail",3,"href","click"],["class","ant-upload-list-item-image",3,"src",4,"ngIf","ngIfElse"],[1,"ant-upload-list-item-image",3,"src"],[1,"ant-upload-text-icon"],[4,"ngIf","ngIfElse"],["customIconRender",""],["iconNodeFileIcon",""],[4,"ngSwitchCase"],["nz-icon","",3,"nzType",4,"ngSwitchDefault"],["nz-icon","","nzType","loading"],["nz-icon","",3,"nzType"],["nz-icon","","nzTheme","twotone",3,"nzType"],["type","button","nz-button","","nzType","text","nzSize","small","class","ant-upload-list-item-card-actions-btn",3,"click",4,"ngIf"],["type","button","nz-button","","nzType","text","nzSize","small",1,"ant-upload-list-item-card-actions-btn",3,"click"],["nz-icon","","nzType","delete"],["nz-icon","","nzType","download"],[3,"class",4,"ngIf"],["target","_blank","rel","noopener noreferrer","class","ant-upload-list-item-name",3,"href","click",4,"ngIf"],["class","ant-upload-list-item-name",3,"click",4,"ngIf"],["target","_blank","rel","noopener noreferrer",1,"ant-upload-list-item-name",3,"href","click"],[1,"ant-upload-list-item-name",3,"click"],[1,"ant-upload-list-item-actions"],["target","_blank","rel","noopener noreferrer",3,"href","ngStyle","click",4,"ngIf"],[4,"ngIf"],["target","_blank","rel","noopener noreferrer",3,"href","ngStyle","click"],["nz-icon","","nzType","eye"],[1,"ant-upload-list-item-progress"],["nzType","line",3,"nzPercent","nzShowInfo","nzStrokeWidth"]],template:function(n,o){n&1&&c(0,je,20,14,"div",0),n&2&&s("ngForOf",o.list)},dependencies:[Ut,Zt,Wt,It,ut,_t,Ft,Lt,Vt,jt,qt,At,Bt,Nt,Xt,Qt],encapsulation:2,data:{animation:[Mt("itemState",[gt(":enter",[nt({height:"0",width:"0",opacity:0}),ht(150,nt({height:"*",width:"*",opacity:1}))]),gt(":leave",[ht(150,nt({height:"0",width:"0",opacity:0}))])])]},changeDetection:0});let e=r;return e})(),pn=(()=>{let r=class r{set nzShowUploadList(t){this._showUploadList=typeof t=="boolean"?Pt(t):t}get nzShowUploadList(){return this._showUploadList}zipOptions(){typeof this.nzShowUploadList=="boolean"&&this.nzShowUploadList&&(this.nzShowUploadList={showPreviewIcon:!0,showRemoveIcon:!0,showDownloadIcon:!0});let t=this.nzFilter.slice();if(this.nzMultiple&&this.nzLimit>0&&t.findIndex(n=>n.name==="limit")===-1&&t.push({name:"limit",fn:n=>n.slice(-this.nzLimit)}),this.nzSize>0&&t.findIndex(n=>n.name==="size")===-1&&t.push({name:"size",fn:n=>n.filter(o=>o.size/1024<=this.nzSize)}),this.nzFileType&&this.nzFileType.length>0&&t.findIndex(n=>n.name==="type")===-1){let n=this.nzFileType.split(",");t.push({name:"type",fn:o=>o.filter(a=>~n.indexOf(a.type))})}return this._btnOptions={disabled:this.nzDisabled,accept:this.nzAccept,action:this.nzAction,directory:this.nzDirectory,openFileDialogOnClick:this.nzOpenFileDialogOnClick,beforeUpload:this.nzBeforeUpload,customRequest:this.nzCustomRequest,data:this.nzData,headers:this.nzHeaders,name:this.nzName,multiple:this.nzMultiple,withCredentials:this.nzWithCredentials,filters:t,transformFile:this.nzTransformFile,onStart:this.onStart,onProgress:this.onProgress,onSuccess:this.onSuccess,onError:this.onError},this}constructor(t,n,o,a,d){this.ngZone=t,this.document=n,this.cdr=o,this.i18n=a,this.directionality=d,this.destroy$=new W,this.dir="ltr",this.nzType="select",this.nzLimit=0,this.nzSize=0,this.nzDirectory=!1,this.nzOpenFileDialogOnClick=!0,this.nzFilter=[],this.nzFileList=[],this.nzDisabled=!1,this.nzListType="text",this.nzMultiple=!1,this.nzName="file",this._showUploadList=!0,this.nzShowButton=!0,this.nzWithCredentials=!1,this.nzIconRender=null,this.nzFileListRender=null,this.nzChange=new ot,this.nzFileListChange=new ot,this.onStart=m=>{this.nzFileList||(this.nzFileList=[]);let u=this.fileToObject(m);u.status="uploading",this.nzFileList=this.nzFileList.concat(u),this.nzFileListChange.emit(this.nzFileList),this.nzChange.emit({file:u,fileList:this.nzFileList,type:"start"}),this.detectChangesList()},this.onProgress=(m,u)=>{let f=this.nzFileList,g=this.getFileItem(u,f);g.percent=m.percent,this.nzChange.emit({event:m,file:H({},g),fileList:this.nzFileList,type:"progress"}),this.detectChangesList()},this.onSuccess=(m,u)=>{let f=this.nzFileList,g=this.getFileItem(u,f);g.status="done",g.response=m,this.nzChange.emit({file:H({},g),fileList:f,type:"success"}),this.detectChangesList()},this.onError=(m,u)=>{let f=this.nzFileList,g=this.getFileItem(u,f);g.error=m,g.status="error",this.nzChange.emit({file:H({},g),fileList:f,type:"error"}),this.detectChangesList()},this.onRemove=m=>{this.uploadComp.abort(m),m.status="removed";let u=typeof this.nzRemove=="function"?this.nzRemove(m):this.nzRemove==null?!0:this.nzRemove;(u instanceof R?u:O(u)).pipe(zt(f=>f)).subscribe(()=>{this.nzFileList=this.removeFileItem(m,this.nzFileList),this.nzChange.emit({file:m,fileList:this.nzFileList,type:"removed"}),this.nzFileListChange.emit(this.nzFileList),this.cdr.detectChanges()})},this.prefixCls="ant-upload",this.classList=[]}fileToObject(t){return{lastModified:t.lastModified,lastModifiedDate:t.lastModifiedDate,name:t.filename||t.name,size:t.size,type:t.type,uid:t.uid,response:t.response,error:t.error,percent:0,originFileObj:t}}getFileItem(t,n){return n.filter(o=>o.uid===t.uid)[0]}removeFileItem(t,n){return n.filter(o=>o.uid!==t.uid)}fileDrop(t){t.type!==this.dragState&&(this.dragState=t.type,this.setClassMap())}detectChangesList(){this.cdr.detectChanges(),this.listComp?.detectChanges()}setClassMap(){let t=[];this.nzType==="drag"?(this.nzFileList.some(n=>n.status==="uploading")&&t.push(`${this.prefixCls}-drag-uploading`),this.dragState==="dragover"&&t.push(`${this.prefixCls}-drag-hover`)):t=[`${this.prefixCls}-select-${this.nzListType}`],this.classList=[this.prefixCls,`${this.prefixCls}-${this.nzType}`,...t,this.nzDisabled&&`${this.prefixCls}-disabled`||"",this.dir==="rtl"&&`${this.prefixCls}-rtl`||""].filter(n=>!!n),this.cdr.detectChanges()}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe($(this.destroy$)).subscribe(t=>{this.dir=t,this.setClassMap(),this.cdr.detectChanges()}),this.i18n.localeChange.pipe($(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getLocaleData("Upload"),this.detectChangesList()})}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>B(this.document.body,"drop").pipe($(this.destroy$)).subscribe(t=>{t.preventDefault(),t.stopPropagation()}))}ngOnChanges(){this.zipOptions().setClassMap()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};r.\u0275fac=function(n){return new(n||r)(v(Q),v(mt),v(dt),v(Ht),v(kt,8))},r.\u0275cmp=Z({type:r,selectors:[["nz-upload"]],viewQuery:function(n,o){if(n&1&&(X(Ve,5),X(Be,5)),n&2){let a;Y(a=G())&&(o.uploadComp=a.first),Y(a=G())&&(o.listComp=a.first)}},hostVars:2,hostBindings:function(n,o){n&2&&M("ant-upload-picture-card-wrapper",o.nzListType==="picture-card")},inputs:{nzType:"nzType",nzLimit:"nzLimit",nzSize:"nzSize",nzFileType:"nzFileType",nzAccept:"nzAccept",nzAction:"nzAction",nzDirectory:"nzDirectory",nzOpenFileDialogOnClick:"nzOpenFileDialogOnClick",nzBeforeUpload:"nzBeforeUpload",nzCustomRequest:"nzCustomRequest",nzData:"nzData",nzFilter:"nzFilter",nzFileList:"nzFileList",nzDisabled:"nzDisabled",nzHeaders:"nzHeaders",nzListType:"nzListType",nzMultiple:"nzMultiple",nzName:"nzName",nzShowUploadList:"nzShowUploadList",nzShowButton:"nzShowButton",nzWithCredentials:"nzWithCredentials",nzRemove:"nzRemove",nzPreview:"nzPreview",nzPreviewFile:"nzPreviewFile",nzPreviewIsImage:"nzPreviewIsImage",nzTransformFile:"nzTransformFile",nzDownload:"nzDownload",nzIconRender:"nzIconRender",nzFileListRender:"nzFileListRender"},outputs:{nzChange:"nzChange",nzFileListChange:"nzFileListChange"},exportAs:["nzUpload"],standalone:!0,features:[rt,tt],ngContentSelectors:Gt,decls:11,vars:2,consts:[["list",""],["con",""],["btn",""],[4,"ngIf","ngIfElse"],["select",""],["pic",""],[3,"display","locale","listType","items","icons","iconRender","previewFile","previewIsImage","onPreview","onRemove","onDownload","dir",4,"ngIf"],[4,"ngIf"],[3,"locale","listType","items","icons","iconRender","previewFile","previewIsImage","onPreview","onRemove","onDownload","dir"],["listComp",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],["nz-upload-btn","",3,"options"],["uploadComp",""],[3,"ngTemplateOutlet"],[3,"ngClass","drop","dragover","dragleave"],["nz-upload-btn","",1,"ant-upload-btn",3,"options"],[1,"ant-upload-drag-container"]],template:function(n,o){if(n&1&&(lt(),c(0,Ze,2,2,"ng-template",null,0,y)(2,Qe,1,0,"ng-template",null,1,y)(4,Ye,4,5,"ng-template",null,2,y)(6,Ke,7,4,"ng-container",3)(7,on,1,2,"ng-template",null,4,y)(9,sn,2,2,"ng-template",null,5,y)),n&2){let a=h(8);p(6),s("ngIf",o.nzType==="drag")("ngIfElse",a)}},dependencies:[Jt,_t,ut,bt,ln],encapsulation:2,changeDetection:0});let e=r;return S([ft()],e.prototype,"nzLimit",void 0),S([ft()],e.prototype,"nzSize",void 0),S([k()],e.prototype,"nzDirectory",void 0),S([k()],e.prototype,"nzOpenFileDialogOnClick",void 0),S([k()],e.prototype,"nzDisabled",void 0),S([k()],e.prototype,"nzMultiple",void 0),S([k()],e.prototype,"nzShowButton",void 0),S([k()],e.prototype,"nzWithCredentials",void 0),e})(),An=(()=>{let r=class r{};r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=yt({type:r}),r.\u0275inj=vt({imports:[pn,Jt]});let e=r;return e})();export{pn as a,An as b};
