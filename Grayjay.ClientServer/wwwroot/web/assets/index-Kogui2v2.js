import{u as j,e as k,f as D,c as A,g as N,A as J,h as V,i as s,a as r,N as W,F as Z,b as i,p as z,j as K,d as c,s as G,S as d,L as O,k as Q,l as X,I as Y,m as ee,n as te,C as ne,t as m,M as E}from"./index-Tg9vHuMa.js";const re="_container_1ca5y_1",ae="_topBar_1ca5y_8",se="_searchBar_1ca5y_14",oe="_grid_1ca5y_18",ce="_subBar_1ca5y_26",le="_channel_1ca5y_33",ie="_channelImg_1ca5y_45",ue="_channelText_1ca5y_50",he="_sourceIcon_1ca5y_70",de="_content_1ca5y_88",l={container:re,topBar:ae,searchBar:se,grid:oe,subBar:ce,channel:le,channelImg:ie,channelText:ue,sourceIcon:he,content:de},p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%20-960%20960%20960'%20fill='white'%20width='24'%3e%3cpath%20d='M480-160q-134%200-227-93t-93-227q0-134%2093-227t227-93q69%200%20132%2028.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100%200-170%2070t-70%20170q0%20100%2070%20170t170%2070q77%200%20139-44t87-116h84q-28%20106-114%20173t-196%2067Z'/%3e%3c/svg%3e";var y=m("<div>"),ge=m("<div><div style=position:absolute;top:-50px;right:10px;height:50px;width:50px;cursor:pointer;>"),_e=m("<div><div><img><div><img></div></div><div>");j();const fe=()=>{const[u,F]=k(0);D.registerHandlerNew("subProgress",e=>{F(e.payload.progress/e.payload.total)},"subsbar");let h=!1;const[b]=A(async()=>[],async()=>await N.subscriptions()),[g,w]=A(async()=>{const e=h;return h=!1,await N.subscriptionPager(e)}),[x,_]=k(!1),B=new J(null,x,V.BottomRight),H={title:"",items:[new E("Reload from Update",p,"Updates the subscriptions",()=>{h=!0,w.refetch(),_(!1)}),new E("Reload from Cache",p,"Just reloads the cached view",()=>{h=!1,w.refetch(),_(!1)})]};function I(e){B.setElement(e)}return(()=>{var e=y();return s(e,r(W,{isRoot:!0}),null),s(e,r(d,{get when(){return b()},get children(){var a=y();return s(a,r(Z,{get each(){return b()},children:(o,v)=>(()=>{var n=_e(),P=n.firstChild,f=P.firstChild,S=f.nextSibling,L=S.firstChild,$=P.nextSibling;return s($,()=>o.channel.name),i(t=>{var R=l.channel,C=z(o.channel.thumbnail),q=l.channelImg,M=l.sourceIcon,T=K.getSourceConfig(o.channel.id.pluginID)?.absoluteIconUrl,U=l.channelText;return R!==t.e&&c(n,t.e=R),C!==t.t&&G(f,"src",t.t=C),q!==t.a&&c(f,t.a=q),M!==t.o&&c(S,t.o=M),T!==t.i&&G(L,"src",t.i=T),U!==t.n&&c($,t.n=U),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),n})()})),i(()=>c(a,l.subBar)),a}}),null),s(e,r(d,{get when(){return!g()},get children(){return r(O,{itemCount:18})}}),null),s(e,r(d,{get when(){return g()},get children(){var a=ge(),o=a.firstChild;s(a,r(d,{get when(){return Q(()=>u()>0)()&&u()<1},get children(){var n=y();return n.style.setProperty("height","2px"),n.style.setProperty("position","absolute"),n.style.setProperty("top","-2px"),n.style.setProperty("background","red"),i(()=>u()*100+"%"!=null?n.style.setProperty("width",u()*100+"%"):n.style.removeProperty("width")),n}}),o);var v=I;return typeof v=="function"?X(v,o):I=o,s(o,r(Y,{icon:p,onClick:()=>{_(!0)}})),s(a,r(ee,{get children(){return r(te,{menu:H,get show(){return x()},anchor:B})}}),null),s(a,r(ne,{get pager(){return g()}}),null),i(()=>c(a,l.content)),a}}),null),i(()=>c(e,l.container)),e})()};export{fe as default};
