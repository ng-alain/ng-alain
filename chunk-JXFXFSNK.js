import{a as T,b as D}from"./chunk-DDNN42OY.js";import{Db as C,Ka as x,La as y,Pa as b,Vb as s,Wb as p,aa as d,fa as f,ga as u,oc as A,qa as m,ua as g}from"./chunk-UCSAVZK6.js";var Z=(()=>{let t=class t extends T{constructor(){super(...arguments),this.color="rgba(24, 144, 255, 0.2)",this.borderColor="#1890FF",this.borderWidth=2,this.height=56,this.fit=!0,this.line=!1,this.animate=!0,this.padding=[8,8,8,8],this.data=[],this.yTooltipSuffix="",this.tooltipType="default",this.clickItem=new g}install(){let{el:o,fit:e,height:a,padding:F,xAxis:l,yAxis:h,yTooltipSuffix:I,tooltipType:v,line:M,theme:S,animate:k,color:w,borderColor:E,borderWidth:W}=this,i=this._chart=new this.winG2.Chart({container:o.nativeElement,autoFit:e,height:a,padding:F,theme:S});i.animate(k),!l&&!h&&i.axis(!1),l?i.axis("x",l):i.axis("x",!1),h?i.axis("y",h):i.axis("y",!1),i.legend(!1),i.tooltip(D(v)),i.area().position("x*y").color(w).tooltip("x*y",(r,c)=>({name:r,value:c+I})).shape("smooth"),M&&i.line().position("x*y").shape("smooth").color(E).size(W).tooltip(!1),i.on("plot:click",r=>{let c=this._chart.getSnapRecords({x:r.x,y:r.y});this.ngZone.run(()=>this.clickItem.emit({item:c[0]._origin,ev:r}))}),this.ready.next(i),this.changeData(),i.render()}changeData(){let{_chart:o,data:e}=this;!o||!Array.isArray(e)||e.length<=0||o.changeData(e)}};t.\u0275fac=(()=>{let o;return function(a){return(o||(o=m(t)))(a||t)}})(),t.\u0275cmp=f({type:t,selectors:[["g2-mini-area"]],hostVars:2,hostBindings:function(e,a){e&2&&b("height",a.height,"px")},inputs:{color:"color",borderColor:"borderColor",borderWidth:[2,"borderWidth","borderWidth",p],height:[2,"height","height",p],fit:[2,"fit","fit",s],line:[2,"line","line",s],animate:[2,"animate","animate",s],xAxis:"xAxis",yAxis:"yAxis",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniArea"],standalone:!0,features:[y,x,C],decls:0,vars:0,template:function(e,a){},encapsulation:2,changeDetection:0});let n=t;return n})();var q=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=d({imports:[A]});let n=t;return n})();export{Z as a,q as b};
