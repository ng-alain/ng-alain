import{a as A,b as M}from"./chunk-WIFJ53KW.js";import{Ac as y,Oa as m,Pa as u,Sa as g,_a as x,ba as p,gc as r,hc as d,na as h,qa as f}from"./chunk-AKRUOAUY.js";var V=(()=>{class i extends A{color="rgba(24, 144, 255, 0.2)";borderColor="#1890FF";borderWidth=2;height=56;fit=!0;line=!1;animate=!0;xAxis;yAxis;padding=[8,8,8,8];data=[];yTooltipSuffix="";tooltipType="default";clickItem=new f;install(){let{el:o,fit:e,height:n,padding:b,xAxis:s,yAxis:l,yTooltipSuffix:C,tooltipType:T,line:D,theme:v,animate:F,color:I,borderColor:S,borderWidth:G}=this,t=this._chart=new this.winG2.Chart({container:o.nativeElement,autoFit:e,height:n,padding:b,theme:v});t.animate(F),!s&&!l&&t.axis(!1),s?t.axis("x",s):t.axis("x",!1),l?t.axis("y",l):t.axis("y",!1),t.legend(!1),t.tooltip(M(T)),t.area().position("x*y").color(I).tooltip("x*y",(a,c)=>({name:a,value:c+C})).shape("smooth"),D&&t.line().position("x*y").shape("smooth").color(S).size(G).tooltip(!1),t.on("plot:click",a=>{let c=this._chart.getSnapRecords({x:a.x,y:a.y});this.ngZone.run(()=>this.clickItem.emit({item:c[0]._origin,ev:a}))}),this.ready.next(t),this.changeData(),t.render()}changeData(){let{_chart:o,data:e}=this;!o||!Array.isArray(e)||e.length<=0||o.changeData(e)}static \u0275fac=(()=>{let o;return function(n){return(o||(o=h(i)))(n||i)}})();static \u0275cmp=m({type:i,selectors:[["g2-mini-area"]],hostVars:2,hostBindings:function(e,n){e&2&&x("height",n.height,"px")},inputs:{color:"color",borderColor:"borderColor",borderWidth:[2,"borderWidth","borderWidth",d],height:[2,"height","height",d],fit:[2,"fit","fit",r],line:[2,"line","line",r],animate:[2,"animate","animate",r],xAxis:"xAxis",yAxis:"yAxis",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniArea"],features:[g],decls:0,vars:0,template:function(e,n){},encapsulation:2,changeDetection:0})}return i})();var z=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=u({type:i});static \u0275inj=p({imports:[y]})}return i})();export{V as a,z as b};
