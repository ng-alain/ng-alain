import{I as jt,K as Bt,Xa as At,Ya as qt}from"./chunk-MXLRDN6Y.js";import{$a as H,D as ht,Db as W,Dc as bt,Ea as V,Eb as Q,Fb as X,Gd as J,Gg as Vt,H as ft,Ha as c,Hc as Lt,Ia as N,Ic as Nt,Jb as f,Kb as Z,Kc as It,Mb as Y,Mc as Dt,Nd as Ot,Oa as q,Ua as xt,Va as p,Vb as st,W as $,Wb as P,Wf as St,X as O,Xf as $t,Y as gt,Za as v,Zd as K,_a as s,a as B,ab as E,bb as yt,bc as U,bg as Et,cb as ot,cg as Pt,db as lt,dg as _t,eb as wt,eg as tt,fa as M,fg as ut,gc as pt,h as et,hb as u,hc as S,ic as ct,j as L,ja as it,jb as Tt,jg as kt,k as A,ka as y,kb as vt,la as w,lb as Ft,lg as Mt,mb as h,nb as g,ob as T,pc as dt,ra as nt,rb as Ut,sa as Ct,sb as b,u as R,va as zt,vb as F,vc as mt,vd as G,xb as a,y as k,yb as at,zb as rt,zd as Rt}from"./chunk-2NBHHZGH.js";var Qt=["file"],Xt=["nz-upload-btn",""],Wt=["*"],j=i=>({$implicit:i}),Zt=()=>({opacity:.5,"pointer-events":"none"});function Yt(i,l){}function Gt(i,l){if(i&1&&(h(0,"div",16),p(1,Yt,0,0,"ng-template",17),g()),i&2){let t=a(2).$implicit,e=f(5);E("ant-upload-list-item-file",!t.isUploading),c(),s("ngTemplateOutlet",e)("ngTemplateOutletContext",P(4,j,t))}}function Jt(i,l){if(i&1&&T(0,"img",19),i&2){let t=a(3).$implicit;s("src",t.thumbUrl||t.url,V),v("alt",t.name)}}function Kt(i,l){}function te(i,l){if(i&1&&p(0,Kt,0,0,"ng-template",17),i&2){let t=a(3).$implicit,e=f(5);s("ngTemplateOutlet",e)("ngTemplateOutletContext",P(2,j,t))}}function ee(i,l){if(i&1){let t=b();h(0,"a",18),F("click",function(o){y(t);let n=a(2).$implicit,r=a();return w(r.handlePreview(n,o))}),p(1,Jt,1,2,"img",19)(2,te,1,4,null,17),g()}if(i&2){let t=a(2).$implicit;E("ant-upload-list-item-file",!t.isImageUrl),s("href",t.url||t.thumbUrl,V),c(),u(t.isImageUrl?1:2)}}function ie(i,l){}function ne(i,l){if(i&1&&(h(0,"div",15),p(1,ie,0,0,"ng-template",17),g()),i&2){let t=a(2).$implicit,e=f(5);c(),s("ngTemplateOutlet",e)("ngTemplateOutletContext",P(2,j,t))}}function oe(i,l){if(i&1&&p(0,Gt,2,6,"div",13)(1,ee,3,4,"a",14)(2,ne,2,4,"div",15),i&2){let t,e=a().$implicit;u((t=e.iconType)==="uploading"?0:t==="thumbnail"?1:2)}}function le(i,l){i&1&&T(0,"nz-icon",21)}function ae(i,l){if(i&1&&T(0,"nz-icon",22),i&2){let t=a(3).$implicit;s("nzType",t.isImageUrl?"picture":"file")}}function re(i,l){if(i&1&&p(0,le,1,0,"nz-icon",21)(1,ae,1,1,"nz-icon",22),i&2){let t=a(2).$implicit;u(t.isUploading?0:1)}}function se(i,l){if(i&1&&Z(0),i&2){let t=a(5);Y(" ",t.locale.uploading," ")}}function pe(i,l){if(i&1&&T(0,"nz-icon",22),i&2){let t=a(3).$implicit;s("nzType",t.isImageUrl?"picture":"file")}}function ce(i,l){if(i&1&&p(0,se,1,1)(1,pe,1,1,"nz-icon",22),i&2){let t=a(2).$implicit;u(t.isUploading?0:1)}}function de(i,l){if(i&1&&T(0,"nz-icon",20),i&2){let t=a(2).$implicit;s("nzType",t.isUploading?"loading":"paper-clip")}}function me(i,l){if(i&1&&p(0,re,2,1)(1,ce,2,1)(2,de,1,1,"nz-icon",20),i&2){let t,e=a(3);u((t=e.listType)==="picture"?0:t==="picture-card"?1:2)}}function _e(i,l){}function ue(i,l){if(i&1&&p(0,_e,0,0,"ng-template",17),i&2){let t=a().$implicit,e=a(2);s("ngTemplateOutlet",e.iconRender)("ngTemplateOutletContext",P(2,j,t))}}function he(i,l){if(i&1&&p(0,me,3,1)(1,ue,1,4,null,17),i&2){let t=a(2);u(t.iconRender?1:0)}}function fe(i,l){if(i&1){let t=b();h(0,"button",24),F("click",function(o){y(t);let n=a(2).$implicit,r=a();return w(r.handleRemove(n,o))}),T(1,"nz-icon",25),g()}if(i&2){let t=a(3);v("title",t.locale.removeFile)}}function ge(i,l){if(i&1&&p(0,fe,2,1,"button",23),i&2){let t=a(2);u(t.icons.showRemoveIcon?0:-1)}}function Ce(i,l){if(i&1){let t=b();h(0,"button",24),F("click",function(){y(t);let o=a(2).$implicit,n=a();return w(n.handleDownload(o))}),T(1,"nz-icon",26),g()}if(i&2){let t=a(3);v("title",t.locale.downloadFile)}}function ze(i,l){if(i&1&&p(0,Ce,2,1,"button",23),i&2){let t=a().$implicit;u(t.showDownload?0:-1)}}function xe(i,l){}function ye(i,l){}function we(i,l){if(i&1&&(h(0,"span"),p(1,xe,0,0,"ng-template",10)(2,ye,0,0,"ng-template",10),g()),i&2){a(2);let t=f(7),e=f(9),o=a();lt("ant-upload-list-item-card-actions ",o.listType==="picture"?"picture":"",""),c(),s("ngTemplateOutlet",e),c(),s("ngTemplateOutlet",t)}}function Te(i,l){if(i&1&&p(0,we,3,5,"span",6),i&2){let t=a(2);u(t.listType!=="picture-card"?0:-1)}}function ve(i,l){if(i&1){let t=b();h(0,"a",29),F("click",function(o){y(t);let n=a(2).$implicit,r=a();return w(r.handlePreview(n,o))}),Z(1),g()}if(i&2){let t=a(2).$implicit;s("href",t.url,V),v("title",t.name)("download",t.linkProps&&t.linkProps.download),c(),Y(" ",t.name," ")}}function Fe(i,l){if(i&1){let t=b();h(0,"span",30),F("click",function(o){y(t);let n=a(2).$implicit,r=a();return w(r.handlePreview(n,o))}),Z(1),g()}if(i&2){let t=a(2).$implicit;v("title",t.name),c(),Y(" ",t.name," ")}}function Ue(i,l){}function be(i,l){if(i&1&&p(0,ve,2,4,"a",27)(1,Fe,2,2,"span",28)(2,Ue,0,0,"ng-template",10),i&2){let t=a().$implicit,e=f(11);u(t.url?0:1),c(2),s("ngTemplateOutlet",e)}}function Le(i,l){}function Ne(i,l){}function Ie(i,l){if(i&1){let t=b();h(0,"a",32),F("click",function(o){y(t);let n=a(2).$implicit,r=a();return w(r.handlePreview(n,o))}),T(1,"nz-icon",33),g()}if(i&2){let t=a(2).$implicit,e=a();yt(t.url||t.thumbUrl?null:st(4,Zt)),s("href",t.url||t.thumbUrl,V),v("title",e.locale.previewFile)}}function De(i,l){}function Re(i,l){if(i&1&&p(0,De,0,0,"ng-template",10),i&2){a(2);let t=f(9);s("ngTemplateOutlet",t)}}function Oe(i,l){}function Se(i,l){if(i&1&&(h(0,"span",11),p(1,Ie,2,5,"a",31)(2,Re,1,1,null,10)(3,Oe,0,0,"ng-template",10),g()),i&2){let t=a().$implicit,e=f(7),o=a();c(),u(o.icons.showPreviewIcon?1:-1),c(),u(t.status==="done"?2:-1),c(),s("ngTemplateOutlet",e)}}function $e(i,l){if(i&1&&(h(0,"div",12),T(1,"nz-progress",34),g()),i&2){let t=a().$implicit;c(),s("nzPercent",t.percent)("nzShowInfo",!1)("nzStrokeWidth",2)}}function Ee(i,l){if(i&1&&(h(0,"div")(1,"div",7),p(2,oe,3,1,"ng-template",null,0,U)(4,he,2,1,"ng-template",null,1,U)(6,ge,1,1,"ng-template",null,2,U)(8,ze,1,1,"ng-template",null,3,U)(10,Te,1,1,"ng-template",null,4,U)(12,be,3,2,"ng-template",null,5,U),h(14,"div",8)(15,"span",9),p(16,Le,0,0,"ng-template",10)(17,Ne,0,0,"ng-template",10),g()(),p(18,Se,4,3,"span",11)(19,$e,2,3,"div",12),g()()),i&2){let t=l.$implicit,e=f(3),o=f(13),n=a();lt("ant-upload-list-",n.listType,"-container"),c(),wt("ant-upload-list-item ant-upload-list-item-",t.status," ant-upload-list-item-list-type-",n.listType,""),s("@itemState",void 0)("nzTooltipTitle",t.status==="error"?t.message:null),v("data-key",t.key),c(15),s("ngTemplateOutlet",e),c(),s("ngTemplateOutlet",o),c(),u(n.listType==="picture-card"&&!t.isUploading?18:-1),c(),u(t.isUploading?19:-1)}}var Pe=["uploadComp"],ke=["listComp"],Me=()=>[];function Ve(i,l){if(i&1&&T(0,"nz-upload-list",6,3),i&2){let t=a(2);H("display",t.nzShowUploadList?"":"none"),s("locale",t.locale)("listType",t.nzListType)("items",t.nzFileList||st(13,Me))("icons",t.nzShowUploadList)("iconRender",t.nzIconRender)("previewFile",t.nzPreviewFile)("previewIsImage",t.nzPreviewIsImage)("onPreview",t.nzPreview)("onRemove",t.onRemove)("onDownload",t.nzDownload)("dir",t.dir)}}function je(i,l){i&1&&Ut(0)}function Be(i,l){if(i&1&&p(0,je,1,0,"ng-container",7),i&2){let t=a(2);s("ngTemplateOutlet",t.nzFileListRender)("ngTemplateOutletContext",P(2,j,t.nzFileList))}}function Ae(i,l){if(i&1&&p(0,Ve,2,14,"nz-upload-list",5)(1,Be,1,4,"ng-container"),i&2){let t=a();u(t.locale&&!t.nzFileListRender?0:-1),c(),u(t.nzFileListRender?1:-1)}}function qe(i,l){i&1&&rt(0)}function He(i,l){}function We(i,l){if(i&1&&(h(0,"div")(1,"div",8,4),p(3,He,0,0,"ng-template",9),g()()),i&2){let t=a(),e=f(3);ot(t.classList),H("display",t.nzShowButton?"":"none"),c(),s("options",t._btnOptions),c(2),s("ngTemplateOutlet",e)}}function Qe(i,l){}function Xe(i,l){}function Ze(i,l){if(i&1){let t=b();h(0,"div",10),F("drop",function(o){y(t);let n=a();return w(n.fileDrop(o))})("dragover",function(o){y(t);let n=a();return w(n.fileDrop(o))})("dragleave",function(o){y(t);let n=a();return w(n.fileDrop(o))}),h(1,"div",11,4)(3,"div",12),p(4,Qe,0,0,"ng-template",9),g()()(),p(5,Xe,0,0,"ng-template",9)}if(i&2){let t=a(),e=f(1),o=f(3);ot(t.classList),c(),s("options",t._btnOptions),c(3),s("ngTemplateOutlet",o),c(),s("ngTemplateOutlet",e)}}function Ye(i,l){}function Ge(i,l){}function Je(i,l){if(i&1&&p(0,Ye,0,0,"ng-template",9)(1,Ge,0,0,"ng-template",9),i&2){a(2);let t=f(1),e=f(5);s("ngTemplateOutlet",t),c(),s("ngTemplateOutlet",e)}}function Ke(i,l){}function ti(i,l){}function ei(i,l){if(i&1&&p(0,Ke,0,0,"ng-template",9)(1,ti,0,0,"ng-template",9),i&2){a(2);let t=f(1),e=f(5);s("ngTemplateOutlet",e),c(),s("ngTemplateOutlet",t)}}function ii(i,l){if(i&1&&p(0,Je,2,2)(1,ei,2,2),i&2){let t=a();u(t.nzListType==="picture-card"?0:1)}}var ni=(()=>{class i{onClick(){this.options.disabled||!this.options.openFileDialogOnClick||this.file.nativeElement.click()}onFileDrop(t){if(this.options.disabled||t.type==="dragover"){t.preventDefault();return}if(this.options.directory)this.traverseFileTree(t.dataTransfer.items);else{let e=Array.prototype.slice.call(t.dataTransfer.files).filter(o=>this.attrAccept(o,this.options.accept));e.length&&this.uploadFiles(e)}t.preventDefault()}onChange(t){if(this.options.disabled)return;let e=t.target;this.uploadFiles(e.files),e.value=""}traverseFileTree(t){let e=(o,n)=>{o.isFile?o.file(r=>{this.attrAccept(r,this.options.accept)&&this.uploadFiles([r])}):o.isDirectory&&o.createReader().readEntries(m=>{for(let _ of m)e(_,`${n}${o.name}/`)})};for(let o of t)e(o.webkitGetAsEntry(),"")}attrAccept(t,e){if(t&&e){let o=Array.isArray(e)?e:e.split(","),n=`${t.name}`,r=`${t.type}`,m=r.replace(/\/.*$/,"");return o.some(_=>{let C=_.trim();return C.charAt(0)==="."?n.toLowerCase().indexOf(C.toLowerCase(),n.toLowerCase().length-C.toLowerCase().length)!==-1:/\/\*$/.test(C)?m===C.replace(/\/.*$/,""):r===C})}return!0}attachUid(t){return t.uid||(t.uid=Math.random().toString(36).substring(2)),t}uploadFiles(t){let e=R(Array.prototype.slice.call(t));this.options.filters&&this.options.filters.forEach(o=>{e=e.pipe($(n=>{let r=o.fn(n);return r instanceof L?r:R(r)}))}),e.subscribe(o=>{o.forEach(n=>{this.attachUid(n),this.upload(n,o)})},o=>{J("Unhandled upload filter error",o)})}upload(t,e){if(!this.options.beforeUpload)return this.post(t);let o=this.options.beforeUpload(t,e);if(o instanceof L)o.subscribe(n=>{let r=Object.prototype.toString.call(n);r==="[object File]"||r==="[object Blob]"?(this.attachUid(n),this.post(n)):typeof n=="boolean"&&n!==!1&&this.post(t)},n=>{J("Unhandled upload beforeUpload error",n)});else if(o!==!1)return this.post(t)}post(t){if(this.destroy)return;let e=R(t),o,n=this.options,{uid:r}=t,{action:m,data:_,headers:C,transformFile:D}=n,x={action:typeof m=="string"?m:"",name:n.name,headers:C,file:t,postFile:t,data:_,withCredentials:n.withCredentials,onProgress:n.onProgress?d=>{n.onProgress(d,t)}:void 0,onSuccess:(d,z)=>{this.clean(r),n.onSuccess(d,t,z)},onError:d=>{this.clean(r),n.onError(d,t)}};if(typeof m=="function"){let d=m(t);d instanceof L?e=e.pipe($(()=>d),k(z=>(x.action=z,t))):x.action=d}if(typeof D=="function"){let d=D(t);e=e.pipe($(()=>d instanceof L?d:R(d)),gt(z=>o=z))}if(typeof _=="function"){let d=_(t);d instanceof L?e=e.pipe($(()=>d),k(z=>(x.data=z,o??t))):x.data=d}if(typeof C=="function"){let d=C(t);d instanceof L?e=e.pipe($(()=>d),k(z=>(x.headers=z,o??t))):x.headers=d}e.subscribe(d=>{x.postFile=d;let z=(n.customRequest||this.xhr).call(this,x);z instanceof et||J("Must return Subscription type in '[nzCustomRequest]' property"),this.reqs[r]=z,n.onStart(t)})}xhr(t){let e=new FormData;t.data&&Object.keys(t.data).map(n=>{e.append(n,t.data[n])}),e.append(t.name,t.postFile),t.headers||(t.headers={}),t.headers["X-Requested-With"]!==null?t.headers["X-Requested-With"]="XMLHttpRequest":delete t.headers["X-Requested-With"];let o=new Lt("POST",t.action,e,{reportProgress:!0,withCredentials:t.withCredentials,headers:new bt(t.headers)});return this.http.request(o).subscribe(n=>{n.type===Nt.UploadProgress?(n.total>0&&(n.percent=n.loaded/n.total*100),t.onProgress(n,t.file)):n instanceof It&&t.onSuccess(n.body,t.file,n)},n=>{this.abort(t.file),t.onError(n,t.file)})}clean(t){let e=this.reqs[t];e instanceof et&&e.unsubscribe(),delete this.reqs[t]}abort(t){t?this.clean(t&&t.uid):Object.keys(this.reqs).forEach(e=>this.clean(e))}constructor(t){if(this.elementRef=t,this.reqs={},this.destroy=!1,this.destroy$=new A,this.http=M(Dt,{optional:!0}),!this.http)throw new Error("Not found 'HttpClient', You can configure 'HttpClient' with 'provideHttpClient()' in your root module.")}ngOnInit(){K(this.elementRef.nativeElement,"click").pipe(O(this.destroy$)).subscribe(()=>this.onClick()),K(this.elementRef.nativeElement,"keydown").pipe(O(this.destroy$)).subscribe(t=>{this.options.disabled||(t.key==="Enter"||t.keyCode===13)&&this.onClick()})}ngOnDestroy(){this.destroy=!0,this.destroy$.next(),this.abort()}static{this.\u0275fac=function(e){return new(e||i)(N(zt))}}static{this.\u0275cmp=q({type:i,selectors:[["","nz-upload-btn",""]],viewQuery:function(e,o){if(e&1&&W(Qt,7),e&2){let n;Q(n=X())&&(o.file=n.first)}},hostAttrs:[1,"ant-upload"],hostVars:4,hostBindings:function(e,o){e&1&&F("drop",function(r){return o.onFileDrop(r)})("dragover",function(r){return o.onFileDrop(r)}),e&2&&(v("tabindex","0")("role","button"),E("ant-upload-disabled",o.options.disabled))},inputs:{options:"options"},exportAs:["nzUploadBtn"],attrs:Xt,ngContentSelectors:Wt,decls:3,vars:6,consts:[["file",""],["type","file",3,"change","multiple"]],template:function(e,o){if(e&1){let n=b();at(),h(0,"input",1,0),F("change",function(m){return y(n),w(o.onChange(m))}),g(),rt(2)}e&2&&(H("display","none"),s("multiple",o.options.multiple),v("accept",o.options.accept)("directory",o.options.directory?"directory":null)("webkitdirectory",o.options.directory?"webkitdirectory":null))},encapsulation:2})}}return i})(),Ht=i=>!!i&&i.indexOf("image/")===0,I=200,oi=(()=>{class i{get showPic(){return this.listType==="picture"||this.listType==="picture-card"}set items(t){this.list=t}genErr(t){return t.response&&typeof t.response=="string"?t.response:t.error&&t.error.statusText||this.locale.uploadError}extname(t){let e=t.split("/"),n=e[e.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(n)||[""])[0]}isImageUrl(t){if(Ht(t.type))return!0;let e=t.thumbUrl||t.url||"";if(!e)return!1;let o=this.extname(e);return/^data:image\//.test(e)||/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(o)?!0:/^data:/.test(e)?!1:!o}getIconType(t){return this.showPic?t.isUploading||!t.thumbUrl&&!t.url?"uploading":"thumbnail":""}previewImage(t){if(!Ht(t.type)||!this.platform.isBrowser)return R("");let e=this.document.createElement("canvas");e.width=I,e.height=I,e.style.cssText=`position: fixed; left: 0; top: 0; width: ${I}px; height: ${I}px; z-index: 9999; display: none;`,this.document.body.appendChild(e);let o=e.getContext("2d"),n=new Image,r=URL.createObjectURL(t);return n.src=r,ht(n,"load").pipe(k(()=>{let{width:m,height:_}=n,C=I,D=I,x=0,d=0;m<_?(D=_*(I/m),d=-(D-C)/2):(C=m*(I/_),x=-(C-D)/2);try{o.drawImage(n,x,d,C,D)}catch{}let z=e.toDataURL();return this.document.body.removeChild(e),URL.revokeObjectURL(r),z}))}genThumb(){if(!this.platform.isBrowser)return;let t=window;!this.showPic||typeof document>"u"||typeof t>"u"||!t.FileReader||!t.File||this.list.filter(e=>e.originFileObj instanceof File&&e.thumbUrl===void 0).forEach(e=>{e.thumbUrl="";let o=(this.previewFile?this.previewFile(e):this.previewImage(e.originFileObj)).pipe(O(this.destroy$));this.ngZone.runOutsideAngular(()=>{o.subscribe(n=>{this.ngZone.run(()=>{e.thumbUrl=n,this.detectChanges()})})})})}showDownload(t){return!!(this.icons.showDownloadIcon&&t.status==="done")}fixData(){this.list.forEach(t=>{t.isUploading=t.status==="uploading",t.message=this.genErr(t),t.linkProps=typeof t.linkProps=="string"?JSON.parse(t.linkProps):t.linkProps,t.isImageUrl=this.previewIsImage?this.previewIsImage(t):this.isImageUrl(t),t.iconType=this.getIconType(t),t.showDownload=this.showDownload(t)})}handlePreview(t,e){if(this.onPreview)return e.preventDefault(),this.onPreview(t)}handleRemove(t,e){e.preventDefault(),this.onRemove&&this.onRemove(t)}handleDownload(t){typeof this.onDownload=="function"?this.onDownload(t):t.url&&window.open(t.url)}constructor(t,e,o){this.cdr=t,this.ngZone=e,this.platform=o,this.list=[],this.locale={},this.iconRender=null,this.dir="ltr",this.document=M(dt),this.destroy$=new A}detectChanges(){this.fixData(),this.cdr.detectChanges()}ngOnChanges(){this.fixData(),this.genThumb()}ngOnDestroy(){this.destroy$.next()}static{this.\u0275fac=function(e){return new(e||i)(N(pt),N(Ct),N(G))}}static{this.\u0275cmp=q({type:i,selectors:[["nz-upload-list"]],hostAttrs:[1,"ant-upload-list"],hostVars:8,hostBindings:function(e,o){e&2&&E("ant-upload-list-rtl",o.dir==="rtl")("ant-upload-list-text",o.listType==="text")("ant-upload-list-picture",o.listType==="picture")("ant-upload-list-picture-card",o.listType==="picture-card")},inputs:{locale:"locale",listType:"listType",items:"items",icons:"icons",onPreview:"onPreview",onRemove:"onRemove",onDownload:"onDownload",previewFile:"previewFile",previewIsImage:"previewIsImage",iconRender:"iconRender",dir:"dir"},exportAs:["nzUploadList"],features:[it],decls:2,vars:0,consts:[["icon",""],["iconNode",""],["removeIcon",""],["downloadIcon",""],["downloadOrDelete",""],["preview",""],[3,"class"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"ant-upload-list-item-info"],[1,"ant-upload-span"],[3,"ngTemplateOutlet"],[1,"ant-upload-list-item-actions"],[1,"ant-upload-list-item-progress"],[1,"ant-upload-list-item-thumbnail",3,"ant-upload-list-item-file"],["target","_blank","rel","noopener noreferrer",1,"ant-upload-list-item-thumbnail",3,"ant-upload-list-item-file","href"],[1,"ant-upload-text-icon"],[1,"ant-upload-list-item-thumbnail"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["target","_blank","rel","noopener noreferrer",1,"ant-upload-list-item-thumbnail",3,"click","href"],[1,"ant-upload-list-item-image",3,"src"],[3,"nzType"],["nzType","loading"],["nzTheme","twotone",3,"nzType"],["type","button","nz-button","","nzType","text","nzSize","small",1,"ant-upload-list-item-card-actions-btn"],["type","button","nz-button","","nzType","text","nzSize","small",1,"ant-upload-list-item-card-actions-btn",3,"click"],["nzType","delete"],["nzType","download"],["target","_blank","rel","noopener noreferrer",1,"ant-upload-list-item-name",3,"href"],[1,"ant-upload-list-item-name"],["target","_blank","rel","noopener noreferrer",1,"ant-upload-list-item-name",3,"click","href"],[1,"ant-upload-list-item-name",3,"click"],["target","_blank","rel","noopener noreferrer",3,"href","style"],["target","_blank","rel","noopener noreferrer",3,"click","href"],["nzType","eye"],["nzType","line",3,"nzPercent","nzShowInfo","nzStrokeWidth"]],template:function(e,o){e&1&&vt(0,Ee,20,14,"div",6,Tt),e&2&&Ft(o.list)},dependencies:[Bt,jt,mt,$t,St,Mt,kt,Et,qt,At],encapsulation:2,data:{animation:[Pt("itemState",[ut(":enter",[tt({height:"0",width:"0",opacity:0}),_t(150,tt({height:"*",width:"*",opacity:1}))]),ut(":leave",[_t(150,tt({height:"0",width:"0",opacity:0}))])])]},changeDetection:0})}}return i})(),Pi=(()=>{class i{set nzShowUploadList(t){this._showUploadList=typeof t=="boolean"?Ot(t):t}get nzShowUploadList(){return this._showUploadList}zipOptions(){typeof this.nzShowUploadList=="boolean"&&this.nzShowUploadList&&(this.nzShowUploadList={showPreviewIcon:!0,showRemoveIcon:!0,showDownloadIcon:!0});let t=this.nzFilter.slice();if(this.nzMultiple&&this.nzLimit>0&&t.findIndex(e=>e.name==="limit")===-1&&t.push({name:"limit",fn:e=>e.slice(-this.nzLimit)}),this.nzSize>0&&t.findIndex(e=>e.name==="size")===-1&&t.push({name:"size",fn:e=>e.filter(o=>o.size/1024<=this.nzSize)}),this.nzFileType&&this.nzFileType.length>0&&t.findIndex(e=>e.name==="type")===-1){let e=this.nzFileType.split(",");t.push({name:"type",fn:o=>o.filter(n=>~e.indexOf(n.type))})}return this._btnOptions={disabled:this.nzDisabled,accept:this.nzAccept,action:this.nzAction,directory:this.nzDirectory,openFileDialogOnClick:this.nzOpenFileDialogOnClick,beforeUpload:this.nzBeforeUpload,customRequest:this.nzCustomRequest,data:this.nzData,headers:this.nzHeaders,name:this.nzName,multiple:this.nzMultiple,withCredentials:this.nzWithCredentials,filters:t,transformFile:this.nzTransformFile,onStart:this.onStart,onProgress:this.onProgress,onSuccess:this.onSuccess,onError:this.onError},this}constructor(t,e,o){this.cdr=t,this.i18n=e,this.directionality=o,this.destroy$=new A,this.dir="ltr",this.nzType="select",this.nzLimit=0,this.nzSize=0,this.nzDirectory=!1,this.nzOpenFileDialogOnClick=!0,this.nzFilter=[],this.nzFileList=[],this.nzDisabled=!1,this.nzListType="text",this.nzMultiple=!1,this.nzName="file",this._showUploadList=!0,this.document=M(dt),this.nzShowButton=!0,this.nzWithCredentials=!1,this.nzIconRender=null,this.nzFileListRender=null,this.nzChange=new nt,this.nzFileListChange=new nt,this.platform=M(G),this.onStart=n=>{this.nzFileList||(this.nzFileList=[]);let r=this.fileToObject(n);r.status="uploading",this.nzFileList=this.nzFileList.concat(r),this.nzFileListChange.emit(this.nzFileList),this.nzChange.emit({file:r,fileList:this.nzFileList,type:"start"}),this.detectChangesList()},this.onProgress=(n,r)=>{let m=this.nzFileList,_=this.getFileItem(r,m);_.percent=n.percent,this.nzChange.emit({event:n,file:B({},_),fileList:this.nzFileList,type:"progress"}),this.detectChangesList()},this.onSuccess=(n,r)=>{let m=this.nzFileList,_=this.getFileItem(r,m);_.status="done",_.response=n,this.nzChange.emit({file:B({},_),fileList:m,type:"success"}),this.detectChangesList()},this.onError=(n,r)=>{let m=this.nzFileList,_=this.getFileItem(r,m);_.error=n,_.status="error",this.nzChange.emit({file:B({},_),fileList:m,type:"error"}),this.detectChangesList()},this.onRemove=n=>{this.uploadComp.abort(n),n.status="removed";let r=typeof this.nzRemove=="function"?this.nzRemove(n):this.nzRemove==null?!0:this.nzRemove;(r instanceof L?r:R(r)).pipe(ft(m=>m)).subscribe(()=>{this.nzFileList=this.removeFileItem(n,this.nzFileList),this.nzChange.emit({file:n,fileList:this.nzFileList,type:"removed"}),this.nzFileListChange.emit(this.nzFileList),this.cdr.detectChanges()})},this.prefixCls="ant-upload",this.classList=[]}fileToObject(t){return{lastModified:t.lastModified,lastModifiedDate:t.lastModifiedDate,name:t.filename||t.name,size:t.size,type:t.type,uid:t.uid,response:t.response,error:t.error,percent:0,originFileObj:t}}getFileItem(t,e){return e.filter(o=>o.uid===t.uid)[0]}removeFileItem(t,e){return e.filter(o=>o.uid!==t.uid)}fileDrop(t){t.type!==this.dragState&&(this.dragState=t.type,this.setClassMap())}detectChangesList(){this.cdr.detectChanges(),this.listComp?.detectChanges()}setClassMap(){let t=[];this.nzType==="drag"?(this.nzFileList.some(e=>e.status==="uploading")&&t.push(`${this.prefixCls}-drag-uploading`),this.dragState==="dragover"&&t.push(`${this.prefixCls}-drag-hover`)):t=[`${this.prefixCls}-select-${this.nzListType}`],this.classList=[this.prefixCls,`${this.prefixCls}-${this.nzType}`,...t,this.nzDisabled&&`${this.prefixCls}-disabled`||"",this.dir==="rtl"&&`${this.prefixCls}-rtl`||""].filter(e=>!!e),this.cdr.detectChanges()}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(O(this.destroy$)).subscribe(t=>{this.dir=t,this.setClassMap(),this.cdr.detectChanges()}),this.i18n.localeChange.pipe(O(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getLocaleData("Upload"),this.detectChangesList()})}ngAfterViewInit(){this.platform.FIREFOX&&K(this.document.body,"drop").pipe(O(this.destroy$)).subscribe(t=>{t.preventDefault(),t.stopPropagation()})}ngOnChanges(){this.zipOptions().setClassMap()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(e){return new(e||i)(N(pt),N(Vt),N(Rt))}}static{this.\u0275cmp=q({type:i,selectors:[["nz-upload"]],viewQuery:function(e,o){if(e&1&&(W(Pe,5),W(ke,5)),e&2){let n;Q(n=X())&&(o.uploadComp=n.first),Q(n=X())&&(o.listComp=n.first)}},hostVars:2,hostBindings:function(e,o){e&2&&E("ant-upload-picture-card-wrapper",o.nzListType==="picture-card")},inputs:{nzType:"nzType",nzLimit:[2,"nzLimit","nzLimit",ct],nzSize:[2,"nzSize","nzSize",ct],nzFileType:"nzFileType",nzAccept:"nzAccept",nzAction:"nzAction",nzDirectory:[2,"nzDirectory","nzDirectory",S],nzOpenFileDialogOnClick:[2,"nzOpenFileDialogOnClick","nzOpenFileDialogOnClick",S],nzBeforeUpload:"nzBeforeUpload",nzCustomRequest:"nzCustomRequest",nzData:"nzData",nzFilter:"nzFilter",nzFileList:"nzFileList",nzDisabled:[2,"nzDisabled","nzDisabled",S],nzHeaders:"nzHeaders",nzListType:"nzListType",nzMultiple:[2,"nzMultiple","nzMultiple",S],nzName:"nzName",nzShowUploadList:"nzShowUploadList",nzShowButton:[2,"nzShowButton","nzShowButton",S],nzWithCredentials:[2,"nzWithCredentials","nzWithCredentials",S],nzRemove:"nzRemove",nzPreview:"nzPreview",nzPreviewFile:"nzPreviewFile",nzPreviewIsImage:"nzPreviewIsImage",nzTransformFile:"nzTransformFile",nzDownload:"nzDownload",nzIconRender:"nzIconRender",nzFileListRender:"nzFileListRender"},outputs:{nzChange:"nzChange",nzFileListChange:"nzFileListChange"},exportAs:["nzUpload"],features:[xt,it],ngContentSelectors:Wt,decls:8,vars:1,consts:[["list",""],["con",""],["btn",""],["listComp",""],["uploadComp",""],[3,"display","locale","listType","items","icons","iconRender","previewFile","previewIsImage","onPreview","onRemove","onDownload","dir"],[3,"locale","listType","items","icons","iconRender","previewFile","previewIsImage","onPreview","onRemove","onDownload","dir"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-upload-btn","",3,"options"],[3,"ngTemplateOutlet"],[3,"drop","dragover","dragleave"],["nz-upload-btn","",1,"ant-upload-btn",3,"options"],[1,"ant-upload-drag-container"]],template:function(e,o){e&1&&(at(),p(0,Ae,2,2,"ng-template",null,0,U)(2,qe,1,0,"ng-template",null,1,U)(4,We,4,6,"ng-template",null,2,U)(6,Ze,6,5)(7,ii,2,1)),e&2&&(c(6),u(o.nzType==="drag"?6:7))},dependencies:[oi,mt,ni],encapsulation:2,changeDetection:0})}}return i})();export{Pi as a};
