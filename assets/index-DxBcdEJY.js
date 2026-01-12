const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Xo-WmDiX.js","assets/index-B5IYdOs8.js","assets/index-PADedp-m.css","assets/index-CN3OoWN4.js","assets/index-Cvr-PdhS.css"])))=>i.map(i=>d[i]);
import{S as xt,p as fn,r as ae,s as Ge,a as xe,n as en,i as nn,b as mn,t as yt,c as _e,f as kt,d as wt,e as bn,g as rt,h as gn,j as _t,k as Ot,l as x,m as at,u as St,o as se,R as G,q as s,v as Pt,w as we,x as Mt,y as jt,z as Z,A as ot,B as Tt,C as Nt,D as Dt,E as Et,F as ce,G as vn,H as Oe,I as fe,J as it,_ as st,K as Rt,L as Ct,M as $t,N as xn}from"./index-B5IYdOs8.js";var qt=class extends xt{constructor(e,n){super(),this.options=n,this.#t=e,this.#a=null,this.#r=fn(),this.bindMethods(),this.setOptions(n)}#t;#e=void 0;#f=void 0;#n=void 0;#i;#u;#r;#a;#m;#d;#h;#s;#l;#o;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),yn(this.#e,this.options)?this.#c():this.updateResult(),this.#x())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return tn(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return tn(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#y(),this.#k(),this.#e.removeObserver(this)}setOptions(e){const n=this.options,t=this.#e;if(this.options=this.#t.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof ae(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#e.setOptions(this.options),n._defaulted&&!Ge(this.options,n)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const r=this.hasListeners();r&&kn(this.#e,t,this.options,n)&&this.#c(),this.updateResult(),r&&(this.#e!==t||ae(this.options.enabled,this.#e)!==ae(n.enabled,this.#e)||xe(this.options.staleTime,this.#e)!==xe(n.staleTime,this.#e))&&this.#b();const a=this.#g();r&&(this.#e!==t||ae(this.options.enabled,this.#e)!==ae(n.enabled,this.#e)||a!==this.#o)&&this.#v(a)}getOptimisticResult(e){const n=this.#t.getQueryCache().build(this.#t,e),t=this.createResult(n,e);return At(this,t)&&(this.#n=t,this.#u=this.options,this.#i=this.#e.state),t}getCurrentResult(){return this.#n}trackResult(e,n){return new Proxy(e,{get:(t,r)=>(this.trackProp(r),n?.(r),r==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#r.status==="pending"&&this.#r.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(t,r))})}trackProp(e){this.#p.add(e)}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=this.#t.defaultQueryOptions(e),t=this.#t.getQueryCache().build(this.#t,n);return t.fetch().then(()=>this.createResult(t,n))}fetch(e){return this.#c({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#n))}#c(e){this.#w();let n=this.#e.fetch(this.options,e);return e?.throwOnError||(n=n.catch(en)),n}#b(){this.#y();const e=xe(this.options.staleTime,this.#e);if(nn||this.#n.isStale||!mn(e))return;const t=yt(this.#n.dataUpdatedAt,e)+1;this.#s=_e.setTimeout(()=>{this.#n.isStale||this.updateResult()},t)}#g(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(e){this.#k(),this.#o=e,!(nn||ae(this.options.enabled,this.#e)===!1||!mn(this.#o)||this.#o===0)&&(this.#l=_e.setInterval(()=>{(this.options.refetchIntervalInBackground||kt.isFocused())&&this.#c()},this.#o))}#x(){this.#b(),this.#v(this.#g())}#y(){this.#s&&(_e.clearTimeout(this.#s),this.#s=void 0)}#k(){this.#l&&(_e.clearInterval(this.#l),this.#l=void 0)}createResult(e,n){const t=this.#e,r=this.options,a=this.#n,i=this.#i,o=this.#u,c=e!==t?e.state:this.#f,{state:l}=e;let h={...l},g=!1,p;if(n._optimisticResults){const k=this.hasListeners(),O=!k&&yn(e,n),M=k&&kn(e,t,n,r);(O||M)&&(h={...h,...wt(l.data,e.options)}),n._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:N,errorUpdatedAt:f,status:u}=h;p=h.data;let P=!1;if(n.placeholderData!==void 0&&p===void 0&&u==="pending"){let k;a?.isPlaceholderData&&n.placeholderData===o?.placeholderData?(k=a.data,P=!0):k=typeof n.placeholderData=="function"?n.placeholderData(this.#h?.state.data,this.#h):n.placeholderData,k!==void 0&&(u="success",p=bn(a?.data,k,n),g=!0)}if(n.select&&p!==void 0&&!P)if(a&&p===i?.data&&n.select===this.#m)p=this.#d;else try{this.#m=n.select,p=n.select(p),p=bn(a?.data,p,n),this.#d=p,this.#a=null}catch(k){this.#a=k}this.#a&&(N=this.#a,p=this.#d,f=Date.now(),u="error");const C=h.fetchStatus==="fetching",$=u==="pending",D=u==="error",A=$&&C,w=p!==void 0,L={status:u,fetchStatus:h.fetchStatus,isPending:$,isSuccess:u==="success",isError:D,isInitialLoading:A,isLoading:A,data:p,dataUpdatedAt:h.dataUpdatedAt,error:N,errorUpdatedAt:f,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>c.dataUpdateCount||h.errorUpdateCount>c.errorUpdateCount,isFetching:C,isRefetching:C&&!$,isLoadingError:D&&!w,isPaused:h.fetchStatus==="paused",isPlaceholderData:g,isRefetchError:D&&w,isStale:dn(e,n),refetch:this.refetch,promise:this.#r,isEnabled:ae(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const k=S=>{L.status==="error"?S.reject(L.error):L.data!==void 0&&S.resolve(L.data)},O=()=>{const S=this.#r=L.promise=fn();k(S)},M=this.#r;switch(M.status){case"pending":e.queryHash===t.queryHash&&k(M);break;case"fulfilled":(L.status==="error"||L.data!==M.value)&&O();break;case"rejected":(L.status!=="error"||L.error!==M.reason)&&O();break}}return L}updateResult(){const e=this.#n,n=this.createResult(this.#e,this.options);if(this.#i=this.#e.state,this.#u=this.options,this.#i.data!==void 0&&(this.#h=this.#e),Ge(n,e))return;this.#n=n;const t=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,a=typeof r=="function"?r():r;if(a==="all"||!a&&!this.#p.size)return!0;const i=new Set(a??this.#p);return this.options.throwOnError&&i.add("error"),Object.keys(this.#n).some(o=>{const d=o;return this.#n[d]!==e[d]&&i.has(d)})};this.#_({listeners:t()})}#w(){const e=this.#t.getQueryCache().build(this.#t,this.options);if(e===this.#e)return;const n=this.#e;this.#e=e,this.#f=e.state,this.hasListeners()&&(n?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#x()}#_(e){rt.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(this.#n)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function Lt(e,n){return ae(n.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&n.retryOnMount===!1)}function yn(e,n){return Lt(e,n)||e.state.data!==void 0&&tn(e,n,n.refetchOnMount)}function tn(e,n,t){if(ae(n.enabled,e)!==!1&&xe(n.staleTime,e)!=="static"){const r=typeof t=="function"?t(e):t;return r==="always"||r!==!1&&dn(e,n)}return!1}function kn(e,n,t,r){return(e!==n||ae(r.enabled,e)===!1)&&(!t.suspense||e.state.status!=="error")&&dn(e,t)}function dn(e,n){return ae(n.enabled,e)!==!1&&e.isStaleByTime(xe(n.staleTime,e))}function At(e,n){return!Ge(e.getCurrentResult(),n)}var Yt=class extends qt{constructor(e,n){super(e,n)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:gn()})}getOptimisticResult(e){return e.behavior=gn(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,n){const{state:t}=e,r=super.createResult(e,n),{isFetching:a,isRefetching:i,isError:o,isRefetchError:d}=r,c=t.fetchMeta?.fetchMore?.direction,l=o&&c==="forward",h=a&&c==="forward",g=o&&c==="backward",p=a&&c==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Ot(n,t.data),hasPreviousPage:_t(n,t.data),isFetchNextPageError:l,isFetchingNextPage:h,isFetchPreviousPageError:g,isFetchingPreviousPage:p,isRefetchError:d&&!l&&!g,isRefetching:i&&!h&&!p}}},lt=x.createContext(!1),zt=()=>x.useContext(lt);lt.Provider;function It(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Ht=x.createContext(It()),Ft=()=>x.useContext(Ht),Ut=(e,n,t)=>{const r=t?.state.error&&typeof e.throwOnError=="function"?at(e.throwOnError,[t.state.error,t]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&(n.isReset()||(e.retryOnMount=!1))},Qt=e=>{x.useEffect(()=>{e.clearReset()},[e])},Bt=({result:e,errorResetBoundary:n,throwOnError:t,query:r,suspense:a})=>e.isError&&!n.isReset()&&!e.isFetching&&r&&(a&&e.data===void 0||at(t,[e.error,r])),Vt=e=>{if(e.suspense){const t=a=>a==="static"?a:Math.max(a??1e3,1e3),r=e.staleTime;e.staleTime=typeof r=="function"?(...a)=>t(r(...a)):t(r),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},Wt=(e,n)=>e.isLoading&&e.isFetching&&!n,Xt=(e,n)=>e?.suspense&&n.isPending,wn=(e,n,t)=>n.fetchOptimistic(e).catch(()=>{t.clearReset()});function Zt(e,n,t){const r=zt(),a=Ft(),i=St(),o=i.defaultQueryOptions(e);i.getDefaultOptions().queries?._experimental_beforeQuery?.(o);const d=i.getQueryCache().get(o.queryHash);o._optimisticResults=r?"isRestoring":"optimistic",Vt(o),Ut(o,a,d),Qt(a);const c=!i.getQueryCache().get(o.queryHash),[l]=x.useState(()=>new n(i,o)),h=l.getOptimisticResult(o),g=!r&&e.subscribed!==!1;if(x.useSyncExternalStore(x.useCallback(p=>{const N=g?l.subscribe(rt.batchCalls(p)):en;return l.updateResult(),N},[l,g]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),x.useEffect(()=>{l.setOptions(o)},[o,l]),Xt(o,h))throw wn(o,l,a);if(Bt({result:h,errorResetBoundary:a,throwOnError:o.throwOnError,query:d,suspense:o.suspense}))throw h.error;return i.getDefaultOptions().queries?._experimental_afterQuery?.(o,h),o.experimental_prefetchInRender&&!nn&&Wt(h,r)&&(c?wn(o,l,a):d?.promise)?.catch(en).finally(()=>{l.updateResult()}),o.notifyOnChangeProps?h:l.trackResult(h)}function Jt(e,n){return Zt(e,Yt)}const Kt=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Gt=se("book-open",Kt);const er=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],_n=se("chevron-up",er);const nr=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],He=se("clock",nr);const tr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],rr=se("film",tr);const ar=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],On=se("image",ar);const or=[["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M9 19h6",key:"456am0"}]],ir=se("list-filter",or);const sr=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],lr=se("loader-circle",sr);const cr=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ur=se("search",cr);const dr=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 19H3",key:"108z41"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]],ct=se("text-search",dr);const hr=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],pr=se("video",hr);function K(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}K(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ie=function(){return ie=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},ie.apply(this,arguments)};function Le(e){return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Le(e)}var fr=/^\s+/,mr=/\s+$/;function E(e,n){if(n=n||{},(e=e||"")instanceof E)return e;if(!(this instanceof E))return new E(e,n);var t=(function(r){var a={r:0,g:0,b:0},i=1,o=null,d=null,c=null,l=!1,h=!1;typeof r=="string"&&(r=(function(f){f=f.replace(fr,"").replace(mr,"").toLowerCase();var u,P=!1;if(rn[f])f=rn[f],P=!0;else if(f=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(u=re.rgb.exec(f))?{r:u[1],g:u[2],b:u[3]}:(u=re.rgba.exec(f))?{r:u[1],g:u[2],b:u[3],a:u[4]}:(u=re.hsl.exec(f))?{h:u[1],s:u[2],l:u[3]}:(u=re.hsla.exec(f))?{h:u[1],s:u[2],l:u[3],a:u[4]}:(u=re.hsv.exec(f))?{h:u[1],s:u[2],v:u[3]}:(u=re.hsva.exec(f))?{h:u[1],s:u[2],v:u[3],a:u[4]}:(u=re.hex8.exec(f))?{r:ee(u[1]),g:ee(u[2]),b:ee(u[3]),a:Nn(u[4]),format:P?"name":"hex8"}:(u=re.hex6.exec(f))?{r:ee(u[1]),g:ee(u[2]),b:ee(u[3]),format:P?"name":"hex"}:(u=re.hex4.exec(f))?{r:ee(u[1]+""+u[1]),g:ee(u[2]+""+u[2]),b:ee(u[3]+""+u[3]),a:Nn(u[4]+""+u[4]),format:P?"name":"hex8"}:(u=re.hex3.exec(f))?{r:ee(u[1]+""+u[1]),g:ee(u[2]+""+u[2]),b:ee(u[3]+""+u[3]),format:P?"name":"hex"}:!1})(r)),Le(r)=="object"&&(le(r.r)&&le(r.g)&&le(r.b)?(g=r.r,p=r.g,N=r.b,a={r:255*X(g,255),g:255*X(p,255),b:255*X(N,255)},l=!0,h=String(r.r).substr(-1)==="%"?"prgb":"rgb"):le(r.h)&&le(r.s)&&le(r.v)?(o=ve(r.s),d=ve(r.v),a=(function(f,u,P){f=6*X(f,360),u=X(u,100),P=X(P,100);var C=Math.floor(f),$=f-C,D=P*(1-u),A=P*(1-$*u),w=P*(1-(1-$)*u),_=C%6,L=[P,A,D,D,w,P][_],k=[w,P,P,A,D,D][_],O=[D,D,w,P,P,A][_];return{r:255*L,g:255*k,b:255*O}})(r.h,o,d),l=!0,h="hsv"):le(r.h)&&le(r.s)&&le(r.l)&&(o=ve(r.s),c=ve(r.l),a=(function(f,u,P){var C,$,D;function A(L,k,O){return O<0&&(O+=1),O>1&&(O-=1),O<1/6?L+6*(k-L)*O:O<.5?k:O<2/3?L+(k-L)*(2/3-O)*6:L}if(f=X(f,360),u=X(u,100),P=X(P,100),u===0)C=$=D=P;else{var w=P<.5?P*(1+u):P+u-P*u,_=2*P-w;C=A(_,w,f+1/3),$=A(_,w,f),D=A(_,w,f-1/3)}return{r:255*C,g:255*$,b:255*D}})(r.h,o,c),l=!0,h="hsl"),r.hasOwnProperty("a")&&(i=r.a));var g,p,N;return i=ut(i),{ok:l,format:r.format||h,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:i}})(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function Sn(e,n,t){e=X(e,255),n=X(n,255),t=X(t,255);var r,a,i=Math.max(e,n,t),o=Math.min(e,n,t),d=(i+o)/2;if(i==o)r=a=0;else{var c=i-o;switch(a=d>.5?c/(2-i-o):c/(i+o),i){case e:r=(n-t)/c+(n<t?6:0);break;case n:r=(t-e)/c+2;break;case t:r=(e-n)/c+4}r/=6}return{h:r,s:a,l:d}}function Pn(e,n,t){e=X(e,255),n=X(n,255),t=X(t,255);var r,a,i=Math.max(e,n,t),o=Math.min(e,n,t),d=i,c=i-o;if(a=i===0?0:c/i,i==o)r=0;else{switch(i){case e:r=(n-t)/c+(n<t?6:0);break;case n:r=(t-e)/c+2;break;case t:r=(e-n)/c+4}r/=6}return{h:r,s:a,v:d}}function Mn(e,n,t,r){var a=[oe(Math.round(e).toString(16)),oe(Math.round(n).toString(16)),oe(Math.round(t).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function jn(e,n,t,r){return[oe(dt(r)),oe(Math.round(e).toString(16)),oe(Math.round(n).toString(16)),oe(Math.round(t).toString(16))].join("")}function br(e,n){n=n===0?0:n||10;var t=E(e).toHsl();return t.s-=n/100,t.s=ze(t.s),E(t)}function gr(e,n){n=n===0?0:n||10;var t=E(e).toHsl();return t.s+=n/100,t.s=ze(t.s),E(t)}function vr(e){return E(e).desaturate(100)}function xr(e,n){n=n===0?0:n||10;var t=E(e).toHsl();return t.l+=n/100,t.l=ze(t.l),E(t)}function yr(e,n){n=n===0?0:n||10;var t=E(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),E(t)}function kr(e,n){n=n===0?0:n||10;var t=E(e).toHsl();return t.l-=n/100,t.l=ze(t.l),E(t)}function wr(e,n){var t=E(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,E(t)}function _r(e){var n=E(e).toHsl();return n.h=(n.h+180)%360,E(n)}function Tn(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=E(e).toHsl(),r=[E(e)],a=360/n,i=1;i<n;i++)r.push(E({h:(t.h+i*a)%360,s:t.s,l:t.l}));return r}function Or(e){var n=E(e).toHsl(),t=n.h;return[E(e),E({h:(t+72)%360,s:n.s,l:n.l}),E({h:(t+216)%360,s:n.s,l:n.l})]}function Sr(e,n,t){n=n||6,t=t||30;var r=E(e).toHsl(),a=360/t,i=[E(e)];for(r.h=(r.h-(a*n>>1)+720)%360;--n;)r.h=(r.h+a)%360,i.push(E(r));return i}function Pr(e,n){n=n||6;for(var t=E(e).toHsv(),r=t.h,a=t.s,i=t.v,o=[],d=1/n;n--;)o.push(E({h:r,s:a,v:i})),i=(i+d)%1;return o}E.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=ut(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Pn(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Pn(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Sn(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Sn(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Mn(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return(function(n,t,r,a,i){var o=[oe(Math.round(n).toString(16)),oe(Math.round(t).toString(16)),oe(Math.round(r).toString(16)),oe(dt(a))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")})(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*X(this._r,255))+"%",g:Math.round(100*X(this._g,255))+"%",b:Math.round(100*X(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*X(this._r,255))+"%, "+Math.round(100*X(this._g,255))+"%, "+Math.round(100*X(this._b,255))+"%)":"rgba("+Math.round(100*X(this._r,255))+"%, "+Math.round(100*X(this._g,255))+"%, "+Math.round(100*X(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Mr[Mn(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+jn(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=E(e);t="#"+jn(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return E(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(xr,arguments)},brighten:function(){return this._applyModification(yr,arguments)},darken:function(){return this._applyModification(kr,arguments)},desaturate:function(){return this._applyModification(br,arguments)},saturate:function(){return this._applyModification(gr,arguments)},greyscale:function(){return this._applyModification(vr,arguments)},spin:function(){return this._applyModification(wr,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(Sr,arguments)},complement:function(){return this._applyCombination(_r,arguments)},monochromatic:function(){return this._applyCombination(Pr,arguments)},splitcomplement:function(){return this._applyCombination(Or,arguments)},triad:function(){return this._applyCombination(Tn,[3])},tetrad:function(){return this._applyCombination(Tn,[4])}},E.fromRatio=function(e,n){if(Le(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:ve(e[r]));e=t}return E(e,n)},E.equals=function(e,n){return!(!e||!n)&&E(e).toRgbString()==E(n).toRgbString()},E.random=function(){return E.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},E.mix=function(e,n,t){t=t===0?0:t||50;var r=E(e).toRgb(),a=E(n).toRgb(),i=t/100;return E({r:(a.r-r.r)*i+r.r,g:(a.g-r.g)*i+r.g,b:(a.b-r.b)*i+r.b,a:(a.a-r.a)*i+r.a})},E.readability=function(e,n){var t=E(e),r=E(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},E.isReadable=function(e,n,t){var r,a,i=E.readability(e,n);switch(a=!1,(r=(function(o){var d,c;return d=((o=o||{level:"AA",size:"small"}).level||"AA").toUpperCase(),c=(o.size||"small").toLowerCase(),d!=="AA"&&d!=="AAA"&&(d="AA"),c!=="small"&&c!=="large"&&(c="small"),{level:d,size:c}})(t)).level+r.size){case"AAsmall":case"AAAlarge":a=i>=4.5;break;case"AAlarge":a=i>=3;break;case"AAAsmall":a=i>=7}return a},E.mostReadable=function(e,n,t){var r,a,i,o,d=null,c=0;a=(t=t||{}).includeFallbackColors,i=t.level,o=t.size;for(var l=0;l<n.length;l++)(r=E.readability(e,n[l]))>c&&(c=r,d=E(n[l]));return E.isReadable(e,d,{level:i,size:o})||!a?d:(t.includeFallbackColors=!1,E.mostReadable(e,["#fff","#000"],t))};var rn=E.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Mr=E.hexNames=(function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n})(rn);function ut(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function X(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=(function(r){return typeof r=="string"&&r.indexOf("%")!=-1})(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function ze(e){return Math.min(1,Math.max(0,e))}function ee(e){return parseInt(e,16)}function oe(e){return e.length==1?"0"+e:""+e}function ve(e){return e<=1&&(e=100*e+"%"),e}function dt(e){return Math.round(255*parseFloat(e)).toString(16)}function Nn(e){return ee(e)/255}var de,Se,Pe,re=(Se="[\\s|\\(]+("+(de="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+de+")[,|\\s]+("+de+")\\s*\\)?",Pe="[\\s|\\(]+("+de+")[,|\\s]+("+de+")[,|\\s]+("+de+")[,|\\s]+("+de+")\\s*\\)?",{CSS_UNIT:new RegExp(de),rgb:new RegExp("rgb"+Se),rgba:new RegExp("rgba"+Pe),hsl:new RegExp("hsl"+Se),hsla:new RegExp("hsla"+Pe),hsv:new RegExp("hsv"+Se),hsva:new RegExp("hsva"+Pe),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function le(e){return!!re.CSS_UNIT.exec(e)}var jr=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,a=parseFloat(n),i=a+r*(a/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:n}},Tr=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var a={};if(t.fontSize){var i=t.fontSize;a=(function(o,d){var c={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&d.indexOf(l)<0&&(c[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function"){var h=0;for(l=Object.getOwnPropertySymbols(o);h<l.length;h++)d.indexOf(l[h])<0&&Object.prototype.propertyIsEnumerable.call(o,l[h])&&(c[l[h]]=o[l[h]])}return c})(t,["fontSize"]),r=i}return{fontSize:r,styles:a}},Nr={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Dr=function(e){var n=e.className,t=e.text,r=e.textColor,a=e.staticText,i=e.style;return t?G.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:ie(ie(ie({},a&&Nr),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof t=="string"&&t.length?t:"loading"):null},ht="rgb(50, 205, 50)";function Er(e,n){if(n===void 0&&(n=0),e.length===0)throw new Error("Input array cannot be empty!");var t=[];return(function r(a,i){return i===void 0&&(i=0),t.push.apply(t,a),t.length<i&&r(t,i),t.slice(0,i)})(e,n)}K(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);E(ht).toRgb();Array.from({length:4},(function(e,n){return"--atom-phase".concat(n+1,"-rgb")}));K(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--commet-phase".concat(n+1,"-color")}));K(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")}));function Fe(e){return e&&e.Math===Math&&e}K(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Fe(typeof window=="object"&&window)||Fe(typeof self=="object"&&self)||Fe(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")}));K(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")}));K(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")}));K(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]}));K(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--four-square-phase".concat(n+1,"-color")}));K(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--mosaic-phase".concat(n+1,"-color")}));K(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);var me=Array.from({length:4},(function(e,n){return"--riple-phase".concat(n+1,"-color")})),Rr=function(e){var n,t=Tr(e?.style,e?.size),r=t.styles,a=t.fontSize,i=e?.easing,o=jr(e?.speedPlus,"1s").animationPeriod,d=(function(c){var l={};if(c instanceof Array){for(var h=Er(c,me.length),g=0;g<h.length&&!(g>=4);g++)l[me[g]]=h[g];return l}try{if(typeof c!="string")throw new Error("Color String expected");for(var p=0;p<me.length;p++)l[me[p]]=c}catch(N){for(N instanceof Error?console.warn("[".concat(N.message,']: Received "').concat(typeof c,'" instead with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c)," received in <Riple /> indicator cannot be processed. Using default instead!")),p=0;p<me.length;p++)l[me[p]]=ht}return l})((n=e?.color)!==null&&n!==void 0?n:"");return G.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:ie(ie(ie(ie(ie({},a&&{fontSize:a}),o&&{"--rli-animation-duration":o}),i&&{"--rli-animation-function":i}),d),r),role:"status","aria-live":"polite","aria-label":"Loading"},G.createElement("span",{className:"rli-d-i-b riple-indicator"},G.createElement("span",{className:"rli-d-i-b riple"}),G.createElement("span",{className:"rli-d-i-b riple"}),G.createElement(Dr,{className:"riple-text",text:e?.text,textColor:e?.textColor})))};K(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")}));K(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")}));K(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--TD-bob-phase".concat(n+1,"-color")}));K(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")}));K(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--shape-phase".concat(n+1,"-color")}));K(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--trophySpin-phase".concat(n+1,"-color")}));K(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--slab-phase".concat(n+1,"-color")}));K(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(e,n){return"--life-line-phase".concat(n+1,"-color")}));const Dn=()=>s.jsx("div",{className:"flex items-center justify-center flex-col fixed bg-black/30 z-20 top-0 left-0 bottom right-0 w-screen h-screen",children:s.jsx(Rr,{color:"#f5cd25",size:"large"})});var Me={},En;function Cr(){if(En)return Me;En=1;function e(i){if(typeof window>"u")return;const o=document.createElement("style");return o.setAttribute("type","text/css"),o.innerHTML=i,document.head.appendChild(o),i}Object.defineProperty(Me,"__esModule",{value:!0});var n=Pt();function t(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var r=t(n);e(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const a=n.forwardRef(function({style:o={},className:d="",autoFill:c=!1,play:l=!0,pauseOnHover:h=!1,pauseOnClick:g=!1,direction:p="left",speed:N=50,delay:f=0,loop:u=0,gradient:P=!1,gradientColor:C="white",gradientWidth:$=200,onFinish:D,onCycleComplete:A,onMount:w,children:_},L){const[k,O]=n.useState(0),[M,S]=n.useState(0),[q,U]=n.useState(1),[j,v]=n.useState(!1),b=n.useRef(null),y=L||b,m=n.useRef(null),T=n.useCallback(()=>{if(m.current&&y.current){const B=y.current.getBoundingClientRect(),Y=m.current.getBoundingClientRect();let H=B.width,W=Y.width;(p==="up"||p==="down")&&(H=B.height,W=Y.height),U(c&&H&&W&&W<H?Math.ceil(H/W):1),O(H),S(W)}},[c,y,p]);n.useEffect(()=>{if(j&&(T(),m.current&&y.current)){const B=new ResizeObserver(()=>T());return B.observe(y.current),B.observe(m.current),()=>{B&&B.disconnect()}}},[T,y,j]),n.useEffect(()=>{T()},[T,_]),n.useEffect(()=>{v(!0)},[]),n.useEffect(()=>{typeof w=="function"&&w()},[]);const R=n.useMemo(()=>c?M*q/N:M<k?k/N:M/N,[c,k,M,q,N]),z=n.useMemo(()=>Object.assign(Object.assign({},o),{"--pause-on-hover":!l||h?"paused":"running","--pause-on-click":!l||h&&!g||g?"paused":"running","--width":p==="up"||p==="down"?"100vh":"100%","--transform":p==="up"?"rotate(-90deg)":p==="down"?"rotate(90deg)":"none"}),[o,l,h,g,p]),I=n.useMemo(()=>({"--gradient-color":C,"--gradient-width":typeof $=="number"?`${$}px`:$}),[C,$]),F=n.useMemo(()=>({"--play":l?"running":"paused","--direction":p==="left"?"normal":"reverse","--duration":`${R}s`,"--delay":`${f}s`,"--iteration-count":u?`${u}`:"infinite","--min-width":c?"auto":"100%"}),[l,p,R,f,u,c]),Q=n.useMemo(()=>({"--transform":p==="up"?"rotate(90deg)":p==="down"?"rotate(-90deg)":"none"}),[p]),V=n.useCallback(B=>[...Array(Number.isFinite(B)&&B>=0?B:0)].map((Y,H)=>r.default.createElement(n.Fragment,{key:H},n.Children.map(_,W=>r.default.createElement("div",{style:Q,className:"rfm-child"},W)))),[Q,_]);return j?r.default.createElement("div",{ref:y,style:z,className:"rfm-marquee-container "+d},P&&r.default.createElement("div",{style:I,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:F,onAnimationIteration:A,onAnimationEnd:D},r.default.createElement("div",{className:"rfm-initial-child-container",ref:m},n.Children.map(_,B=>r.default.createElement("div",{style:Q,className:"rfm-child"},B))),V(q-1)),r.default.createElement("div",{className:"rfm-marquee",style:F},V(q))):null});return Me.default=a,Me}var $r=Cr();const qr=we($r),Lr=({text:e})=>s.jsx("div",{className:"bg-amber-300 py-2",children:s.jsx(qr,{className:"text-gray-700 text-xs sm:text-sm xl:text-base",children:e})});var Ar=class extends Error{constructor(e){super(`react-collapsed: ${e}`)}},Ae=(...e)=>jt(e[0],`[react-collapsed] -- ${e[1]}`);function pt(e){const n=x.useRef(e);return x.useEffect(()=>{n.current=e}),x.useCallback((...t)=>n.current?.(...t),[])}function Yr(e,n,t){const[r,a]=x.useState(n),i=x.useRef(typeof e<"u"),o=i.current?e:r,d=pt(t),c=x.useCallback(l=>{const g=typeof l=="function"?l(o):l;i.current||a(g),d?.(g)},[d,o]);return x.useEffect(()=>{Ae(!(i.current&&e==null),"`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),Ae(!(!i.current&&e!=null),"`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")},[e]),[o,c]}var zr="(prefers-reduced-motion: reduce)";function Ir(){const[e,n]=x.useState(!1);return x.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const t=window.matchMedia(zr);n(t.matches);const r=a=>{n(a.matches)};if(t.addEventListener)return t.addEventListener("change",r),()=>{t.removeEventListener("change",r)};if(t.addListener)return t.addListener(r),()=>{t.removeListener(r)}},[]),e}var Hr=Mt.useId||(()=>{});function Fr(){return Hr()??""}var Ur=typeof window<"u"?x.useLayoutEffect:x.useEffect,Ue=!1,Qr=0,Rn=()=>++Qr;function Br(e){const n=e||(Ue?Rn():null),[t,r]=x.useState(n);return Ur(()=>{t===null&&r(Rn())},[]),x.useEffect(()=>{Ue===!1&&(Ue=!0)},[]),t!=null?String(t):void 0}function Vr(e){const n=Fr(),t=Br(e);return typeof e=="string"?e:typeof n=="string"?n:t}function Wr(e,n){const t=performance.now(),r={};function a(){r.id=requestAnimationFrame(i=>{i-t>n?e():a()})}return a(),r}function Cn(e){e.id&&cancelAnimationFrame(e.id)}function $n(e){return e?.current?e.current.scrollHeight:(Ae(!0,"Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"),0)}function Xr(e){if(!e||typeof e=="string")return 0;const n=e/36;return Math.round((4+15*n**.25+n/5)*10)}function Zr(e,n){if(e!=null)if(typeof e=="function")e(n);else try{e.current=n}catch{throw new Ar(`Cannot assign value "${n}" to ref "${e}"`)}}function qn(...e){return e.every(n=>n==null)?null:n=>{e.forEach(t=>{Zr(t,n)})}}function Jr(e){let n=t=>{};n=t=>{if(!t?.current)return;const{paddingTop:r,paddingBottom:a}=window.getComputedStyle(t.current);Ae(!(r&&r!=="0px"||a&&a!=="0px"),`Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`)},x.useEffect(()=>{n(e)},[e])}var Kr=typeof window>"u"?x.useEffect:x.useLayoutEffect;function Gr({duration:e,easing:n="cubic-bezier(0.4, 0, 0.2, 1)",onTransitionStateChange:t=()=>{},isExpanded:r,defaultExpanded:a=!1,hasDisabledAnimation:i,id:o,...d}={}){const c=pt(t),l=Vr(o?`${o}`:void 0),[h,g]=Yr(r,a),p=x.useRef(h),[N,f]=x.useState(!1),u=Ir(),P=i??u,C=x.useRef(),$=x.useRef(),D=x.useRef(null),[A,w]=x.useState(null);Jr(D);const _=`${d.collapsedHeight||0}px`;function L(k){if(!D.current)return;const O=D.current;for(const M in k){const S=k[M];S?O.style[M]=S:O.style.removeProperty(M)}}return Kr(()=>{if(!D.current||h===p.current)return;p.current=h;function O(q){return P?0:e??Xr(q)}const M=q=>`height ${O(q)}ms ${n}`,S=q=>{function U(){h?(L({height:"",overflow:"",transition:"",display:""}),c("expandEnd")):(L({transition:""}),c("collapseEnd")),f(!1)}$.current&&Cn($.current),$.current=Wr(U,q)};return f(!0),h?C.current=requestAnimationFrame(()=>{c("expandStart"),L({display:"block",overflow:"hidden",height:_}),C.current=requestAnimationFrame(()=>{c("expanding");const q=$n(D);S(O(q)),D.current&&(D.current.style.transition=M(q),D.current.style.height=`${q}px`)})}):C.current=requestAnimationFrame(()=>{c("collapseStart");const q=$n(D);S(O(q)),L({transition:M(q),height:`${q}px`}),C.current=requestAnimationFrame(()=>{c("collapsing"),L({height:_,overflow:"hidden"})})}),()=>{C.current&&cancelAnimationFrame(C.current),$.current&&Cn($.current)}},[h,_,P,e,n,c]),{isExpanded:h,setExpanded:g,getToggleProps(k){const{disabled:O,onClick:M,refKey:S,...q}={refKey:"ref",onClick(){},disabled:!1,...k},U=A?A.tagName==="BUTTON":void 0,j=k?.[S||"ref"],v={id:`react-collapsed-toggle-${l}`,"aria-controls":`react-collapsed-panel-${l}`,"aria-expanded":h,onClick(m){O||(M?.(m),g(T=>!T))},[S||"ref"]:qn(j,w)},b={type:"button",disabled:O?!0:void 0},y={"aria-disabled":O?!0:void 0,role:"button",tabIndex:O?-1:0};return U===!1?{...v,...y,...q}:U===!0?{...v,...b,...q}:{...v,...b,...y,...q}},getCollapseProps(k){const{style:O,refKey:M}={refKey:"ref",style:{},...k},S=k?.[M||"ref"];return{id:`react-collapsed-panel-${l}`,"aria-hidden":!h,"aria-labelledby":`react-collapsed-toggle-${l}`,role:"region",...k,[M||"ref"]:qn(D,S),style:{boxSizing:"border-box",...!N&&!h?{display:_==="0px"?"none":"block",height:_,overflow:"hidden"}:{},...O}}}}}function ea(e){const n=parseFloat(e);return!isNaN(n)&&isFinite(n)}function Ln(e){return typeof e=="string"&&e[e.length-1]==="%"&&ea(e.substring(0,e.length-1))}function Qe(e,n,t){n===0&&!t&&e?.style&&e?.children.length>0&&(e.style.display="none")}function na(e,n){n===0&&e?.style&&(e.style.display="")}const ta={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function An(e,n){return[e.static,n===0&&e.staticHeightZero,typeof n=="number"&&n>0?e.staticHeightSpecific:null,n==="auto"&&e.staticHeightAuto].filter(t=>t).join(" ")}const ra=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],aa=G.forwardRef((e,n)=>{const{animateOpacity:t=!1,animationStateClasses:r={},applyInlineTransitions:a=!0,children:i,className:o="",contentClassName:d,delay:c=0,disableDisplayNone:l=!1,duration:h=500,easing:g="ease",height:p,onHeightAnimationEnd:N,onHeightAnimationStart:f,style:u,contentRef:P}=e,C=Object.assign({},e);ra.forEach(V=>{delete C[V]});const $=x.useRef(p),D=x.useRef(null),A=x.useRef(),w=x.useRef(),_=x.useRef(Object.assign(Object.assign({},ta),r)),L=typeof window<"u",k=x.useRef(L&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),O=k.current?0:c,M=k.current?0:h;let S=p,q="visible";typeof p=="number"?(S=p<0?0:p,q="hidden"):Ln(S)&&(S=p==="0%"?0:p,q="hidden");const[U,j]=x.useState(S),[v,b]=x.useState(q),[y,m]=x.useState(!1),[T,R]=x.useState(An(_.current,p));x.useEffect(()=>{Qe(D.current,U,l)},[]),x.useEffect(()=>{if(p!==$.current&&D.current){na(D.current,$.current),D.current.style.overflow="hidden";const V=D.current.offsetHeight;D.current.style.overflow="";const B=M+O;let Y,H,W="hidden",J;const ne=$.current==="auto";typeof p=="number"?(Y=p<0?0:p,H=Y):Ln(p)?(Y=p==="0%"?0:p,H=Y):(Y=V,H="auto",W=void 0),ne&&(H=Y,Y=V);const he=[_.current.animating,($.current==="auto"||p<$.current)&&_.current.animatingUp,(p==="auto"||p>$.current)&&_.current.animatingDown,H===0&&_.current.animatingToHeightZero,H==="auto"&&_.current.animatingToHeightAuto,typeof H=="number"&&H>0?_.current.animatingToHeightSpecific:null].filter(vt=>vt).join(" "),pe=An(_.current,H);j(Y),b("hidden"),m(!ne),R(he),clearTimeout(w.current),clearTimeout(A.current),ne?(J=!0,w.current=setTimeout(()=>{j(H),b(W),m(J),f?.(H)},50),A.current=setTimeout(()=>{m(!1),R(pe),Qe(D.current,H,l),N?.(H)},B)):(f?.(Y),w.current=setTimeout(()=>{j(H),b(W),m(!1),R(pe),p!=="auto"&&Qe(D.current,Y,l),N?.(Y)},B))}return $.current=p,()=>{clearTimeout(w.current),clearTimeout(A.current)}},[p]);const z=Object.assign(Object.assign({},u),{height:U,overflow:v||u?.overflow});y&&a&&(z.transition=`height ${M}ms ${g} ${O}ms`,u?.transition&&(z.transition=`${u.transition}, ${z.transition}`),z.WebkitTransition=z.transition);const I={};t&&(I.transition=`opacity ${M}ms ${g} ${O}ms`,I.WebkitTransition=I.transition,U===0&&(I.opacity=0));const Q=typeof C["aria-hidden"]<"u"?C["aria-hidden"]:p===0;return G.createElement("div",Object.assign({},C,{"aria-hidden":Q,className:`${T} ${o}`,style:z,ref:n}),G.createElement("div",{className:d,style:I,ref:V=>{D.current=V,P&&(P.current=V)}},i))});function oa(){if(typeof window>"u"||!window.GestureEvent)return 50;try{const e=navigator.userAgent?.match(/version\/([\d\.]+) safari/i);return parseFloat(e[1])>=17?120:320}catch{return 320}}function ia(e){return{method:"throttle",timeMs:e}}const ye=ia(oa());function sa(e){return e===null||Array.isArray(e)&&e.length===0}function la(e,n,t){if(typeof e=="string")t.set(n,e);else{t.delete(n);for(const r of e)t.append(n,r);t.has(n)||t.set(n,"")}return t}function ft(){const e=new Map;return{on(n,t){const r=e.get(n)||[];return r.push(t),e.set(n,r),()=>this.off(n,t)},off(n,t){const r=e.get(n);r&&e.set(n,r.filter(a=>a!==t))},emit(n,t){e.get(n)?.forEach(r=>r(t))}}}function an(e,n,t){function r(){e(),t.removeEventListener("abort",i)}const a=setTimeout(r,n);function i(){clearTimeout(a),t.removeEventListener("abort",i)}t.addEventListener("abort",i)}function on(){const e=Promise;if(Promise.hasOwnProperty("withResolvers"))return Promise.withResolvers();let n=()=>{},t=()=>{};return{promise:new e((r,a)=>{n=r,t=a}),resolve:n,reject:t}}function ca(e,n){let t=n;for(let r=e.length-1;r>=0;r--){const a=e[r];if(!a)continue;const i=t;t=()=>a(i)}t()}function sn(){return new URLSearchParams(location.search)}var mt=class{updateMap=new Map;options={history:"replace",scroll:!1,shallow:!0};timeMs=ye.timeMs;transitions=new Set;resolvers=null;controller=null;lastFlushedAt=0;resetQueueOnNextPush=!1;push({key:e,query:n,options:t},r=ye.timeMs){this.resetQueueOnNextPush&&(this.reset(),this.resetQueueOnNextPush=!1),Z("[nuqs gtq] Enqueueing %s=%s %O",e,n,t),this.updateMap.set(e,n),t.history==="push"&&(this.options.history="push"),t.scroll&&(this.options.scroll=!0),t.shallow===!1&&(this.options.shallow=!1),t.startTransition&&this.transitions.add(t.startTransition),(!Number.isFinite(this.timeMs)||r>this.timeMs)&&(this.timeMs=r)}getQueuedQuery(e){return this.updateMap.get(e)}getPendingPromise({getSearchParamsSnapshot:e=sn}){return this.resolvers?.promise??Promise.resolve(e())}flush({getSearchParamsSnapshot:e=sn,rateLimitFactor:n=1,...t},r){if(this.controller??=new AbortController,!Number.isFinite(this.timeMs))return Z("[nuqs gtq] Skipping flush due to throttleMs=Infinity"),Promise.resolve(e());if(this.resolvers)return this.resolvers.promise;this.resolvers=on();const a=()=>{this.lastFlushedAt=performance.now();const[o,d]=this.applyPendingUpdates({...t,autoResetQueueOnUpdate:t.autoResetQueueOnUpdate??!0,getSearchParamsSnapshot:e},r);d===null?(this.resolvers.resolve(o),this.resetQueueOnNextPush=!0):this.resolvers.reject(o),this.resolvers=null};return an(()=>{const o=performance.now()-this.lastFlushedAt,d=this.timeMs,c=n*Math.max(0,d-o);Z("[nuqs gtq] Scheduling flush in %f ms. Throttled at %f ms (x%f)",c,d,n),c===0?a():an(a,c,this.controller.signal)},0,this.controller.signal),this.resolvers.promise}abort(){return this.controller?.abort(),this.controller=new AbortController,this.resolvers?.resolve(new URLSearchParams),this.resolvers=null,this.reset()}reset(){const e=Array.from(this.updateMap.keys());return Z("[nuqs gtq] Resetting queue %s",JSON.stringify(Object.fromEntries(this.updateMap))),this.updateMap.clear(),this.transitions.clear(),this.options={history:"replace",scroll:!1,shallow:!0},this.timeMs=ye.timeMs,e}applyPendingUpdates(e,n){const{updateUrl:t,getSearchParamsSnapshot:r}=e;let a=r();if(Z("[nuqs gtq] Applying %d pending update(s) on top of %s",this.updateMap.size,a.toString()),this.updateMap.size===0)return[a,null];const i=Array.from(this.updateMap.entries()),o={...this.options},d=Array.from(this.transitions);e.autoResetQueueOnUpdate&&this.reset(),Z("[nuqs gtq] Flushing queue %O with options %O",i,o);for(const[c,l]of i)l===null?a.delete(c):a=la(l,c,a);n&&(a=n(a));try{return ca(d,()=>{t(a,o)}),[a,null]}catch(c){return console.error(ot(429),i.map(([l])=>l).join(),c),[a,c]}}};const je=new mt;function ua(e,n,t){const r=x.useCallback(()=>{const i=Object.fromEntries(e.map(o=>[o,t(o)]));return[JSON.stringify(i),i]},[e.join(","),t]),a=x.useRef(null);return a.current===null&&(a.current=r()),x.useSyncExternalStore(x.useCallback(i=>{const o=e.map(d=>n(d,i));return()=>o.forEach(d=>d())},[e.join(","),n]),()=>{const[i,o]=r();return a.current[0]===i?a.current[1]:(a.current=[i,o],o)},()=>a.current[1])}var da=class{callback;resolvers=on();controller=new AbortController;queuedValue=void 0;constructor(e){this.callback=e}abort(){this.controller.abort(),this.queuedValue=void 0}push(e,n){return this.queuedValue=e,this.controller.abort(),this.controller=new AbortController,an(()=>{const t=this.resolvers;try{Z("[nuqs dq] Flushing debounce queue",e);const r=this.callback(e);Z("[nuqs dq] Reset debounce queue %O",this.queuedValue),this.queuedValue=void 0,this.resolvers=on(),r.then(a=>t.resolve(a)).catch(a=>t.reject(a))}catch(r){this.queuedValue=void 0,t.reject(r)}},n,this.controller.signal),this.resolvers.promise}},ha=class{throttleQueue;queues=new Map;queuedQuerySync=ft();constructor(e=new mt){this.throttleQueue=e}useQueuedQueries(e){return ua(e,(n,t)=>this.queuedQuerySync.on(n,t),n=>this.getQueuedQuery(n))}push(e,n,t,r){if(!Number.isFinite(n)){const o=t.getSearchParamsSnapshot??sn;return Promise.resolve(o())}const a=e.key;if(!this.queues.has(a)){Z("[nuqs dqc] Creating debounce queue for `%s`",a);const o=new da(d=>(this.throttleQueue.push(d),this.throttleQueue.flush(t,r).finally(()=>{this.queues.get(d.key)?.queuedValue===void 0&&(Z("[nuqs dqc] Cleaning up empty queue for `%s`",d.key),this.queues.delete(d.key)),this.queuedQuerySync.emit(d.key)})));this.queues.set(a,o)}Z("[nuqs dqc] Enqueueing debounce update %O",e);const i=this.queues.get(a).push(e,n);return this.queuedQuerySync.emit(a),i}abort(e){const n=this.queues.get(e);return n?(Z("[nuqs dqc] Aborting debounce queue %s=%s",e,n.queuedValue?.query),this.queues.delete(e),n.abort(),this.queuedQuerySync.emit(e),t=>(t.then(n.resolvers.resolve,n.resolvers.reject),t)):t=>t}abortAll(){for(const[e,n]of this.queues.entries())Z("[nuqs dqc] Aborting debounce queue %s=%s",e,n.queuedValue?.query),n.abort(),n.resolvers.resolve(new URLSearchParams),this.queuedQuerySync.emit(e);this.queues.clear()}getQueuedQuery(e){const n=this.queues.get(e)?.queuedValue?.query;return n!==void 0?n:this.throttleQueue.getQueuedQuery(e)}};const Be=new ha(je);function pa(e,n){return e===n?!0:e===null||n===null||typeof e=="string"||typeof n=="string"||e.length!==n.length?!1:e.every((t,r)=>t===n[r])}function bt(e,n,t){try{return e(n)}catch(r){return Et("[nuqs] Error while parsing value `%s`: %O"+(t?" (for key `%s`)":""),n,r,t),null}}function ue(e){function n(t){if(typeof t>"u")return null;let r="";if(Array.isArray(t)){if(t[0]===void 0)return null;r=t[0]}return typeof t=="string"&&(r=t),bt(e.parse,r)}return{type:"single",eq:(t,r)=>t===r,...e,parseServerSide:n,withDefault(t){return{...this,defaultValue:t,parseServerSide(r){return n(r)??t}}},withOptions(t){return{...this,...t}}}}const Ve=ue({parse:e=>e,serialize:String});ue({parse:e=>{const n=parseInt(e);return n==n?n:null},serialize:e=>""+Math.round(e)});ue({parse:e=>{const n=parseInt(e);return n==n?n-1:null},serialize:e=>""+Math.round(e+1)});ue({parse:e=>{const n=parseInt(e,16);return n==n?n:null},serialize:e=>{const n=Math.round(e).toString(16);return(n.length&1?"0":"")+n}});ue({parse:e=>{const n=parseFloat(e);return n==n?n:null},serialize:String});ue({parse:e=>e.toLowerCase()==="true",serialize:String});function hn(e,n){return e.valueOf()===n.valueOf()}ue({parse:e=>{const n=parseInt(e);return n==n?new Date(n):null},serialize:e=>""+e.valueOf(),eq:hn});ue({parse:e=>{const n=new Date(e);return n.valueOf()==n.valueOf()?n:null},serialize:e=>e.toISOString(),eq:hn});ue({parse:e=>{const n=new Date(e.slice(0,10));return n.valueOf()==n.valueOf()?n:null},serialize:e=>e.toISOString().slice(0,10),eq:hn});const We=ft(),fa={};function ma(e,n={}){const t=x.useId(),r=Tt(),a=Nt(),{history:i="replace",scroll:o=r?.scroll??!1,shallow:d=r?.shallow??!0,throttleMs:c=ye.timeMs,limitUrlUpdates:l=r?.limitUrlUpdates,clearOnDefault:h=r?.clearOnDefault??!0,startTransition:g,urlKeys:p=fa}=n,N=Object.keys(e).join(","),f=x.useMemo(()=>Object.fromEntries(Object.keys(e).map(k=>[k,p[k]??k])),[N,JSON.stringify(p)]),u=Dt(Object.values(f)),P=u.searchParams,C=x.useRef({}),$=x.useMemo(()=>Object.fromEntries(Object.keys(e).map(k=>[k,e[k].defaultValue??null])),[Object.values(e).map(({defaultValue:k})=>k).join(",")]),D=Be.useQueuedQueries(Object.values(f)),[A,w]=x.useState(()=>Xe(e,p,P??new URLSearchParams,D).state),_=x.useRef(A);if(Z("[nuq+ %s `%s`] render - state: %O, iSP: %s",t,N,A,P),Object.keys(C.current).join("&")!==Object.values(f).join("&")){const{state:k,hasChanged:O}=Xe(e,p,P,D,C.current,_.current);O&&(Z("[nuq+ %s `%s`] State changed: %O",t,N,{state:k,initialSearchParams:P,queuedQueries:D,queryRef:C.current,stateRef:_.current}),_.current=k,w(k)),C.current=Object.fromEntries(Object.entries(f).map(([M,S])=>[S,e[M]?.type==="multi"?P?.getAll(S):P?.get(S)??null]))}x.useEffect(()=>{const{state:k,hasChanged:O}=Xe(e,p,P,D,C.current,_.current);O&&(Z("[nuq+ %s `%s`] State changed: %O",t,N,{state:k,initialSearchParams:P,queuedQueries:D,queryRef:C.current,stateRef:_.current}),_.current=k,w(k))},[Object.values(f).map(k=>`${k}=${P?.getAll(k)}`).join("&"),JSON.stringify(D)]),x.useEffect(()=>{const k=Object.keys(e).reduce((O,M)=>(O[M]=({state:S,query:q})=>{w(U=>{const{defaultValue:j}=e[M],v=f[M],b=S??j??null,y=U[M]??j??null;return Object.is(y,b)?(Z("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). no change, skipping, resolved: %O",t,N,v,S,j,_.current),U):(_.current={..._.current,[M]:b},C.current[v]=q,Z("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). updateInternalState, resolved: %O",t,N,v,S,j,_.current),_.current)})},O),{});for(const O of Object.keys(e)){const M=f[O];Z("[nuq+ %s `%s`] Subscribing to sync for `%s`",t,M,N),We.on(M,k[O])}return()=>{for(const O of Object.keys(e)){const M=f[O];Z("[nuq+ %s `%s`] Unsubscribing to sync for `%s`",t,M,N),We.off(M,k[O])}}},[N,f]);const L=x.useCallback((k,O={})=>{const M=Object.fromEntries(Object.keys(e).map(y=>[y,null])),S=typeof k=="function"?k(Yn(_.current,$))??M:k??M;Z("[nuq+ %s `%s`] setState: %O",t,N,S);let q,U=0,j=!1;const v=[];for(let[y,m]of Object.entries(S)){const T=e[y],R=f[y];if(!T||m===void 0)continue;(O.clearOnDefault??T.clearOnDefault??h)&&m!==null&&T.defaultValue!==void 0&&(T.eq??((F,Q)=>F===Q))(m,T.defaultValue)&&(m=null);const z=m===null?null:(T.serialize??String)(m);We.emit(R,{state:m,query:z});const I={key:R,query:z,options:{history:O.history??T.history??i,shallow:O.shallow??T.shallow??d,scroll:O.scroll??T.scroll??o,startTransition:O.startTransition??T.startTransition??g}};if(O?.limitUrlUpdates?.method==="debounce"||l?.method==="debounce"||T.limitUrlUpdates?.method==="debounce"){I.options.shallow===!0&&console.warn(ot(422));const F=O?.limitUrlUpdates?.timeMs??l?.timeMs??T.limitUrlUpdates?.timeMs??ye.timeMs,Q=Be.push(I,F,u,a);U<F&&(q=Q,U=F)}else{const F=O?.limitUrlUpdates?.timeMs??T?.limitUrlUpdates?.timeMs??l?.timeMs??O.throttleMs??T.throttleMs??c;v.push(Be.abort(R)),je.push(I,F),j=!0}}const b=v.reduce((y,m)=>m(y),j?je.flush(u,a):je.getPendingPromise(u));return q??b},[N,i,d,o,c,l?.method,l?.timeMs,g,f,u.updateUrl,u.getSearchParamsSnapshot,u.rateLimitFactor,a,$]);return[x.useMemo(()=>Yn(A,$),[A,$]),L]}function Xe(e,n,t,r,a,i){let o=!1;const d=Object.entries(e).reduce((c,[l,h])=>{const g=n?.[l]??l,p=r[g],N=h.type==="multi"?[]:null,f=p===void 0?(h.type==="multi"?t?.getAll(g):t?.get(g))??N:p;return a&&i&&pa(a[g]??N,f)?(c[l]=i[l]??null,c):(o=!0,c[l]=(sa(f)?null:bt(h.parse,f,g))??null,a&&(a[g]=f),c)},{});if(!o){const c=Object.keys(e),l=Object.keys(i??{});o=c.length!==l.length||c.some(h=>!l.includes(h))}return{state:d,hasChanged:o}}function Yn(e,n){return Object.fromEntries(Object.keys(e).map(t=>[t,e[t]??n[t]??null]))}function Ze(e,n={}){const{parse:t,type:r,serialize:a,eq:i,defaultValue:o,...d}=n,[{[e]:c},l]=ma({[e]:{parse:t??(h=>h),type:r,serialize:a,eq:i,defaultValue:o}},d);return[c,x.useCallback((h,g={})=>l(p=>({[e]:typeof h=="function"?h(p[e]):h}),g),[e,l])]}const zn=e=>{let n;const t=new Set,r=(l,h)=>{const g=typeof l=="function"?l(n):l;if(!Object.is(g,n)){const p=n;n=h??(typeof g!="object"||g===null)?g:Object.assign({},n,g),t.forEach(N=>N(n,p))}},a=()=>n,d={setState:r,getState:a,getInitialState:()=>c,subscribe:l=>(t.add(l),()=>t.delete(l))},c=n=e(r,a,d);return d},ba=(e=>e?zn(e):zn),ga=e=>e;function va(e,n=ga){const t=G.useSyncExternalStore(e.subscribe,G.useCallback(()=>n(e.getState()),[e,n]),G.useCallback(()=>n(e.getInitialState()),[e,n]));return G.useDebugValue(t),t}const In=e=>{const n=ba(e),t=r=>va(n,r);return Object.assign(t,n),t},xa=(e=>e?In(e):In),pn=xa()(e=>({data:[],setData:n=>e({data:n})})),Ie=()=>{const{setData:e}=pn(),[n,t]=Ze("search",Ve.withDefault("")),[r,a]=Ze("parent_id",Ve.withDefault("")),[i,o]=Ze("id",Ve.withDefault(""));function d(g){t(g)}function c(g){a(`${g}`)}function l(g){o(`${g}`)}function h(){a(""),o(""),e([])}return{search:n,parentId:r,selfId:i,updateSearch:d,updateParentId:c,updateSelfId:l,clearAll:h}},ya=e=>{const{defaultHeight:n=0,dependency:t}=e||{},[r,a]=x.useState(n),[i,o]=x.useState(0),d=x.useRef(null);x.useEffect(()=>{if(d.current){const l=d.current.scrollHeight;a(l>n?n:l),o(l)}},[t]);function c(){a(r==n?"auto":n)}return{height:r,defaultHeight:n,contentRef:d,revealExceedMax:i>n,revealHiddenContent:c}},ka=e=>s.jsx("div",{className:"flex flex-col space-y-2 max-h-[55dvh] overflow-y-auto scrollbar-none! mt-3",children:(e?.items||[])?.map(n=>s.jsx("div",{id:`x-${n?.name}`,className:"px-2.5 py-2.5 bg-gray-50 rounded-xs",children:s.jsx(wa,{parentId:n?.id,parentName:n?.name,children:n?.children||[]})},`x-${n?.name}`))}),wa=e=>{const[n,t]=x.useState(!1),{height:r,defaultHeight:a,contentRef:i,revealExceedMax:o,revealHiddenContent:d}=ya({defaultHeight:115,dependency:n}),{parentId:c,selfId:l,updateParentId:h,updateSelfId:g}=Ie(),{setData:p}=pn(),{getCollapseProps:N,getToggleProps:f}=Gr({isExpanded:n,collapsedHeight:0,easing:"linear",duration:200});return x.useEffect(()=>{c&&+c==+e?.parentId&&t(!0)},[]),x.useEffect(()=>{(!c||+c!=+e?.parentId)&&t(!1)},[c,e?.parentId]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("button",{className:ce("hover:scale-105 bg-white md:px-2 lg:px-4 py-1 rounded-xs text-sm md:text-xs lg:text-sm max-w-5/6 text-start hover:text-amber-500 hover:bg-amber-50 duration-300 transition-all cursor-pointer",{"text-amber-500 font-bold":e?.parentId==+l||e?.parentId==+c}),onClick:()=>{h(""),g(e?.parentId);const u=document.getElementById(`x-${e?.parentName}`);u&&u.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),p([e?.parentName])},children:e?.parentName}),(e?.children?.length||0)>0&&s.jsx("span",{className:"cursor-pointer p-0.5 bg-amber-500/10 rounded-xs",role:"button",...f({onClick:()=>t(u=>!u)}),children:n?s.jsx(_n,{className:"size-4 text-amber-500"}):s.jsx(vn,{className:"size-4 text-amber-500"})})]}),s.jsxs("section",{...N(),className:"w-full! bg-white mt-3 rounded-xs border border-gray-100",children:[s.jsx(aa,{id:"example-panel z-20",className:"rounded-b-md",duration:150,easing:"linear",height:r||a,children:s.jsx("div",{ref:i,className:"grid grid-cols-2 gap-2 py-2 px-2 text-[13px] md:text-[10px] lg:text-xs",children:(e?.children||[])?.map(u=>s.jsx("button",{className:ce("bg-gray-50 py-1.5 rounded-xs hover:bg-amber-500/10 hover:text-amber-500 cursor-pointer duration-300 transition-colors",{"text-white bg-amber-500":u?.id==+l}),onClick:()=>{h(e?.parentId),g(u?.id),window?.scrollTo({top:0,behavior:"smooth"}),p([e?.parentName,u?.name])},children:u?.name},u?.id))})}),o&&s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("button",{className:"px-4 mt-1 mb-2 bg-white border border-gray-100 cursor-pointer rounded-xs","aria-expanded":r!==0,"aria-controls":"filter-type2",onClick:d,children:+r>=a?s.jsx(vn,{className:"size-4 text-amber-500"}):s.jsx(_n,{className:"size-4 text-amber-500"})})})]})]})};var Je,Hn;function _a(){if(Hn)return Je;Hn=1;var e="Expected a function",n=NaN,t="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,d=parseInt,c=typeof Oe=="object"&&Oe&&Oe.Object===Object&&Oe,l=typeof self=="object"&&self&&self.Object===Object&&self,h=c||l||Function("return this")(),g=Object.prototype,p=g.toString,N=Math.max,f=Math.min,u=function(){return h.Date.now()};function P(w,_,L){var k,O,M,S,q,U,j=0,v=!1,b=!1,y=!0;if(typeof w!="function")throw new TypeError(e);_=A(_)||0,C(L)&&(v=!!L.leading,b="maxWait"in L,M=b?N(A(L.maxWait)||0,_):M,y="trailing"in L?!!L.trailing:y);function m(Y){var H=k,W=O;return k=O=void 0,j=Y,S=w.apply(W,H),S}function T(Y){return j=Y,q=setTimeout(I,_),v?m(Y):S}function R(Y){var H=Y-U,W=Y-j,J=_-H;return b?f(J,M-W):J}function z(Y){var H=Y-U,W=Y-j;return U===void 0||H>=_||H<0||b&&W>=M}function I(){var Y=u();if(z(Y))return F(Y);q=setTimeout(I,R(Y))}function F(Y){return q=void 0,y&&k?m(Y):(k=O=void 0,S)}function Q(){q!==void 0&&clearTimeout(q),j=0,k=U=O=q=void 0}function V(){return q===void 0?S:F(u())}function B(){var Y=u(),H=z(Y);if(k=arguments,O=this,U=Y,H){if(q===void 0)return T(U);if(b)return q=setTimeout(I,_),m(U)}return q===void 0&&(q=setTimeout(I,_)),S}return B.cancel=Q,B.flush=V,B}function C(w){var _=typeof w;return!!w&&(_=="object"||_=="function")}function $(w){return!!w&&typeof w=="object"}function D(w){return typeof w=="symbol"||$(w)&&p.call(w)==t}function A(w){if(typeof w=="number")return w;if(D(w))return n;if(C(w)){var _=typeof w.valueOf=="function"?w.valueOf():w;w=C(_)?_+"":_}if(typeof w!="string")return w===0?w:+w;w=w.replace(r,"");var L=i.test(w);return L||o.test(w)?d(w.slice(2),L?2:8):a.test(w)?n:+w}return Je=P,Je}var Oa=_a();const Fn=we(Oa);function Sa(e){const n=x.useRef(e);n.current=e,x.useEffect(()=>()=>{n.current()},[])}function Pa(e,n=500,t){const r=x.useRef();Sa(()=>{r.current&&r.current.cancel()});const a=x.useMemo(()=>{const i=Fn(e,n,t),o=(...d)=>i(...d);return o.cancel=()=>{i.cancel()},o.isPending=()=>!!r.current,o.flush=()=>i.flush(),o},[e,n,t]);return x.useEffect(()=>{r.current=Fn(e,n,t)},[e,n,t]),a}function Ma(e,n,t){const r=((l,h)=>l===h),a=e instanceof Function?e():e,[i,o]=x.useState(a),d=x.useRef(a),c=Pa(o,n,t);return r(d.current,a)||(c(a),d.current=a),[i,c]}const ja=e=>new Promise(n=>setTimeout(n,e));function Ta({className:e,type:n,...t}){return s.jsx("input",{type:n,"data-slot":"input",className:ce("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...t})}const Na=({className:e})=>{const{search:n,updateSearch:t}=Ie(),[r,a]=x.useState(!1),[i,o]=Ma("",150),d=x.useRef(null),{t:c}=fe("translation");async function l(){i&&(a(!0),await ja(500),t(i),window?.scrollTo({top:0,behavior:"smooth"}),a(!1))}return x.useEffect(()=>{!n&&d.current&&(d.current.value="")},[n]),s.jsxs("div",{className:ce("relative grow overflow-hidden rounded-xs mt-2.5",e),children:[s.jsx(Ta,{maxLength:50,defaultValue:n,type:"search",ref:d,placeholder:c("common.search-placeholder"),className:ce("overflow-hidden focus-visible:ring-0 text-sm bg-white border border-gray-100/50 md:bg-gray-100/60 focus-visible:border-gray-100 placeholder:text-xs h-11 rounded-xs! pr-10 pl-5",{"animate-pulse":r}),onChange:h=>{h?.target?.value||t(h?.target?.value),o(h.target.value)},onKeyDown:h=>{h.key==="Enter"&&l()}}),s.jsx("button",{className:"hover:scale-105 duration-500 transition-all hover:bg-primary/90 absolute right-2 my-auto top-0 bottom-0 cursor-pointer bg-amber-500 size-7 rounded-xs flex justify-center items-center",onClick:async()=>l(),children:r?s.jsx(lr,{className:"size-4 text-white animate-spin"}):s.jsx(ur,{className:"size-4 text-white"})})]})},Da=({filterOptions:e})=>{const{t:n}=fe("translation"),{clearAll:t}=Ie();return s.jsxs("div",{className:"sticky top-24",children:[s.jsxs("div",{className:"bg-white rounded-xs p-3 h-fit",children:[s.jsx("p",{className:"text-sm font-bold px-1",children:n("common.search-label")}),s.jsx(Na,{})]}),s.jsxs("div",{className:"bg-white rounded-xs px-4 py-5 h-fit mt-2",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center space-x-2 text-sm font-bold px-1",children:[s.jsx(ir,{className:"size-5 text-amber-500"}),s.jsx("span",{className:"text-pretty/80",children:n("common.filter-label")})]}),s.jsx("button",{onClick:()=>{typeof window<"u"&&(t(),window?.scrollTo({top:0,behavior:"smooth"}))},className:"cursor-pointer text-sm text-gray-600 hover:text-amber-500 duration-300 transition-colors",children:n("common.clear-filter")})]}),s.jsx("div",{className:"w-full h-px bg-gray-100 mt-3"}),s.jsx(ka,{items:e})]})]})};var ln=function(e,n){return ln=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])},ln(e,n)};function Ea(e,n){ln(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var ke=function(){return ke=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ke.apply(this,arguments)};function Ra(e,n,t,r){var a,i=!1,o=0;function d(){a&&clearTimeout(a)}function c(){d(),i=!0}typeof n!="boolean"&&(r=t,t=n,n=void 0);function l(){var h=this,g=Date.now()-o,p=arguments;if(i)return;function N(){o=Date.now(),t.apply(h,p)}function f(){a=void 0}r&&!a&&N(),d(),r===void 0&&g>e?N():n!==!0&&(a=setTimeout(r?f:N,r===void 0?e-g:e))}return l.cancel=c,l}var be={Pixel:"Pixel",Percent:"Percent"},Un={unit:be.Percent,value:.8};function Qn(e){return typeof e=="number"?{unit:be.Percent,value:e*100}:typeof e=="string"?e.match(/^(\d*(\.\d+)?)px$/)?{unit:be.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:be.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),Un):(console.warn("scrollThreshold should be string or number"),Un)}var Ca=(function(e){Ea(n,e);function n(t){var r=e.call(this,t)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:typeof r.props.scrollableTarget=="string"?document.getElementById(r.props.scrollableTarget):(r.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},r.onStart=function(a){r.lastScrollTop||(r.dragging=!0,a instanceof MouseEvent?r.startY=a.pageY:a instanceof TouchEvent&&(r.startY=a.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(a){r.dragging&&(a instanceof MouseEvent?r.currentY=a.pageY:a instanceof TouchEvent&&(r.currentY=a.touches[0].pageY),!(r.currentY<r.startY)&&(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),!(r.currentY-r.startY>r.maxPullDownDistance*1.5)&&r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")})},r.onScrollListener=function(a){typeof r.props.onScroll=="function"&&setTimeout(function(){return r.props.onScroll&&r.props.onScroll(a)},0);var i=r.props.height||r._scrollableNode?a.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!r.actionTriggered){var o=r.props.inverse?r.isElementAtTop(i,r.props.scrollThreshold):r.isElementAtBottom(i,r.props.scrollThreshold);o&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=i.scrollTop}},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},r.throttledOnScrollListener=Ra(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return n.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},n.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},n.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},n.getDerivedStateFromProps=function(t,r){var a=t.dataLength!==r.prevDataLength;return a?ke(ke({},r),{prevDataLength:t.dataLength}):null},n.prototype.isElementAtTop=function(t,r){r===void 0&&(r=.8);var a=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,i=Qn(r);return i.unit===be.Pixel?t.scrollTop<=i.value+a-t.scrollHeight+1:t.scrollTop<=i.value/100+a-t.scrollHeight+1},n.prototype.isElementAtBottom=function(t,r){r===void 0&&(r=.8);var a=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,i=Qn(r);return i.unit===be.Pixel?t.scrollTop+a>=t.scrollHeight-i.value:t.scrollTop+a>=i.value/100*t.scrollHeight},n.prototype.render=function(){var t=this,r=ke({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),a=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),i=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return G.createElement("div",{style:i,className:"infinite-scroll-component__outerdiv"},G.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(o){return t._infScroll=o},style:r},this.props.pullDownToRefresh&&G.createElement("div",{style:{position:"relative"},ref:function(o){return t._pullDown=o}},G.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!a&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},n})(x.Component);const cn="/react-vite/assets/news-fallback-image-C7SvCdMy.webp";var Te={exports:{}},$a=Te.exports,Bn;function ge(){return Bn||(Bn=1,(function(e,n){(function(t,r){e.exports=r()})($a,(function(){var t=1e3,r=6e4,a=36e5,i="millisecond",o="second",d="minute",c="hour",l="day",h="week",g="month",p="quarter",N="year",f="date",u="Invalid Date",P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(j){var v=["th","st","nd","rd"],b=j%100;return"["+j+(v[(b-20)%10]||v[b]||v[0])+"]"}},D=function(j,v,b){var y=String(j);return!y||y.length>=v?j:""+Array(v+1-y.length).join(b)+j},A={s:D,z:function(j){var v=-j.utcOffset(),b=Math.abs(v),y=Math.floor(b/60),m=b%60;return(v<=0?"+":"-")+D(y,2,"0")+":"+D(m,2,"0")},m:function j(v,b){if(v.date()<b.date())return-j(b,v);var y=12*(b.year()-v.year())+(b.month()-v.month()),m=v.clone().add(y,g),T=b-m<0,R=v.clone().add(y+(T?-1:1),g);return+(-(y+(b-m)/(T?m-R:R-m))||0)},a:function(j){return j<0?Math.ceil(j)||0:Math.floor(j)},p:function(j){return{M:g,y:N,w:h,d:l,D:f,h:c,m:d,s:o,ms:i,Q:p}[j]||String(j||"").toLowerCase().replace(/s$/,"")},u:function(j){return j===void 0}},w="en",_={};_[w]=$;var L="$isDayjsObject",k=function(j){return j instanceof q||!(!j||!j[L])},O=function j(v,b,y){var m;if(!v)return w;if(typeof v=="string"){var T=v.toLowerCase();_[T]&&(m=T),b&&(_[T]=b,m=T);var R=v.split("-");if(!m&&R.length>1)return j(R[0])}else{var z=v.name;_[z]=v,m=z}return!y&&m&&(w=m),m||!y&&w},M=function(j,v){if(k(j))return j.clone();var b=typeof v=="object"?v:{};return b.date=j,b.args=arguments,new q(b)},S=A;S.l=O,S.i=k,S.w=function(j,v){return M(j,{locale:v.$L,utc:v.$u,x:v.$x,$offset:v.$offset})};var q=(function(){function j(b){this.$L=O(b.locale,null,!0),this.parse(b),this.$x=this.$x||b.x||{},this[L]=!0}var v=j.prototype;return v.parse=function(b){this.$d=(function(y){var m=y.date,T=y.utc;if(m===null)return new Date(NaN);if(S.u(m))return new Date;if(m instanceof Date)return new Date(m);if(typeof m=="string"&&!/Z$/i.test(m)){var R=m.match(P);if(R){var z=R[2]-1||0,I=(R[7]||"0").substring(0,3);return T?new Date(Date.UTC(R[1],z,R[3]||1,R[4]||0,R[5]||0,R[6]||0,I)):new Date(R[1],z,R[3]||1,R[4]||0,R[5]||0,R[6]||0,I)}}return new Date(m)})(b),this.init()},v.init=function(){var b=this.$d;this.$y=b.getFullYear(),this.$M=b.getMonth(),this.$D=b.getDate(),this.$W=b.getDay(),this.$H=b.getHours(),this.$m=b.getMinutes(),this.$s=b.getSeconds(),this.$ms=b.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return this.$d.toString()!==u},v.isSame=function(b,y){var m=M(b);return this.startOf(y)<=m&&m<=this.endOf(y)},v.isAfter=function(b,y){return M(b)<this.startOf(y)},v.isBefore=function(b,y){return this.endOf(y)<M(b)},v.$g=function(b,y,m){return S.u(b)?this[y]:this.set(m,b)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(b,y){var m=this,T=!!S.u(y)||y,R=S.p(b),z=function(W,J){var ne=S.w(m.$u?Date.UTC(m.$y,J,W):new Date(m.$y,J,W),m);return T?ne:ne.endOf(l)},I=function(W,J){return S.w(m.toDate()[W].apply(m.toDate("s"),(T?[0,0,0,0]:[23,59,59,999]).slice(J)),m)},F=this.$W,Q=this.$M,V=this.$D,B="set"+(this.$u?"UTC":"");switch(R){case N:return T?z(1,0):z(31,11);case g:return T?z(1,Q):z(0,Q+1);case h:var Y=this.$locale().weekStart||0,H=(F<Y?F+7:F)-Y;return z(T?V-H:V+(6-H),Q);case l:case f:return I(B+"Hours",0);case c:return I(B+"Minutes",1);case d:return I(B+"Seconds",2);case o:return I(B+"Milliseconds",3);default:return this.clone()}},v.endOf=function(b){return this.startOf(b,!1)},v.$set=function(b,y){var m,T=S.p(b),R="set"+(this.$u?"UTC":""),z=(m={},m[l]=R+"Date",m[f]=R+"Date",m[g]=R+"Month",m[N]=R+"FullYear",m[c]=R+"Hours",m[d]=R+"Minutes",m[o]=R+"Seconds",m[i]=R+"Milliseconds",m)[T],I=T===l?this.$D+(y-this.$W):y;if(T===g||T===N){var F=this.clone().set(f,1);F.$d[z](I),F.init(),this.$d=F.set(f,Math.min(this.$D,F.daysInMonth())).$d}else z&&this.$d[z](I);return this.init(),this},v.set=function(b,y){return this.clone().$set(b,y)},v.get=function(b){return this[S.p(b)]()},v.add=function(b,y){var m,T=this;b=Number(b);var R=S.p(y),z=function(Q){var V=M(T);return S.w(V.date(V.date()+Math.round(Q*b)),T)};if(R===g)return this.set(g,this.$M+b);if(R===N)return this.set(N,this.$y+b);if(R===l)return z(1);if(R===h)return z(7);var I=(m={},m[d]=r,m[c]=a,m[o]=t,m)[R]||1,F=this.$d.getTime()+b*I;return S.w(F,this)},v.subtract=function(b,y){return this.add(-1*b,y)},v.format=function(b){var y=this,m=this.$locale();if(!this.isValid())return m.invalidDate||u;var T=b||"YYYY-MM-DDTHH:mm:ssZ",R=S.z(this),z=this.$H,I=this.$m,F=this.$M,Q=m.weekdays,V=m.months,B=m.meridiem,Y=function(J,ne,he,pe){return J&&(J[ne]||J(y,T))||he[ne].slice(0,pe)},H=function(J){return S.s(z%12||12,J,"0")},W=B||function(J,ne,he){var pe=J<12?"AM":"PM";return he?pe.toLowerCase():pe};return T.replace(C,(function(J,ne){return ne||(function(he){switch(he){case"YY":return String(y.$y).slice(-2);case"YYYY":return S.s(y.$y,4,"0");case"M":return F+1;case"MM":return S.s(F+1,2,"0");case"MMM":return Y(m.monthsShort,F,V,3);case"MMMM":return Y(V,F);case"D":return y.$D;case"DD":return S.s(y.$D,2,"0");case"d":return String(y.$W);case"dd":return Y(m.weekdaysMin,y.$W,Q,2);case"ddd":return Y(m.weekdaysShort,y.$W,Q,3);case"dddd":return Q[y.$W];case"H":return String(z);case"HH":return S.s(z,2,"0");case"h":return H(1);case"hh":return H(2);case"a":return W(z,I,!0);case"A":return W(z,I,!1);case"m":return String(I);case"mm":return S.s(I,2,"0");case"s":return String(y.$s);case"ss":return S.s(y.$s,2,"0");case"SSS":return S.s(y.$ms,3,"0");case"Z":return R}return null})(J)||R.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(b,y,m){var T,R=this,z=S.p(y),I=M(b),F=(I.utcOffset()-this.utcOffset())*r,Q=this-I,V=function(){return S.m(R,I)};switch(z){case N:T=V()/12;break;case g:T=V();break;case p:T=V()/3;break;case h:T=(Q-F)/6048e5;break;case l:T=(Q-F)/864e5;break;case c:T=Q/a;break;case d:T=Q/r;break;case o:T=Q/t;break;default:T=Q}return m?T:S.a(T)},v.daysInMonth=function(){return this.endOf(g).$D},v.$locale=function(){return _[this.$L]},v.locale=function(b,y){if(!b)return this.$L;var m=this.clone(),T=O(b,y,!0);return T&&(m.$L=T),m},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},j})(),U=q.prototype;return M.prototype=U,[["$ms",i],["$s",o],["$m",d],["$H",c],["$W",l],["$M",g],["$y",N],["$D",f]].forEach((function(j){U[j[1]]=function(v){return this.$g(v,j[0],j[1])}})),M.extend=function(j,v){return j.$i||(j(v,q,M),j.$i=!0),M},M.locale=O,M.isDayjs=k,M.unix=function(j){return M(1e3*j)},M.en=_[w],M.Ls=_,M.p={},M}))})(Te)),Te.exports}var qa=ge();const Ye=we(qa);var Ne={exports:{}},La=Ne.exports,Vn;function Aa(){return Vn||(Vn=1,(function(e,n){(function(t,r){e.exports=r()})(La,(function(){return function(t,r,a){t=t||{};var i=r.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(l,h,g,p){return i.fromToBase(l,h,g,p)}a.en.relativeTime=o,i.fromToBase=function(l,h,g,p,N){for(var f,u,P,C=g.$locale().relativeTime||o,$=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],D=$.length,A=0;A<D;A+=1){var w=$[A];w.d&&(f=p?a(l).diff(g,w.d,!0):g.diff(l,w.d,!0));var _=(t.rounding||Math.round)(Math.abs(f));if(P=f>0,_<=w.r||!w.r){_<=1&&A>0&&(w=$[A-1]);var L=C[w.l];N&&(_=N(""+_)),u=typeof L=="string"?L.replace("%d",_):L(_,h,w.l,P);break}}if(h)return u;var k=P?C.future:C.past;return typeof k=="function"?k(u):k.replace("%s",u)},i.to=function(l,h){return d(l,h,this,!0)},i.from=function(l,h){return d(l,h,this)};var c=function(l){return l.$u?a.utc():a()};i.toNow=function(l){return this.to(c(this),l)},i.fromNow=function(l){return this.from(c(this),l)}}}))})(Ne)),Ne.exports}var Ya=Aa();const za=we(Ya);var De={exports:{}},Ia=De.exports,Wn;function Ha(){return Wn||(Wn=1,(function(e,n){(function(t,r){e.exports=r()})(Ia,(function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(r,a,i){var o=a.prototype,d=o.format;i.en.formats=t,o.format=function(c){c===void 0&&(c="YYYY-MM-DDTHH:mm:ssZ");var l=this.$locale().formats,h=(function(g,p){return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(N,f,u){var P=u&&u.toUpperCase();return f||p[u]||t[u]||p[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(C,$,D){return $||D.slice(1)}))}))})(c,l===void 0?{}:l);return d.call(this,h)}}}))})(De)),De.exports}var Fa=Ha();const Ua=we(Fa);var Ee={exports:{}},Qa=Ee.exports,Xn;function Ba(){return Xn||(Xn=1,(function(e,n){(function(t,r){e.exports=r(ge())})(Qa,(function(t){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(t),i={name:"km",weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekStart:1,weekdaysShort:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdaysMin:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),ordinal:function(o){return o},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"}};return a.default.locale(i,null,!0),i}))})(Ee)),Ee.exports}Ba();var Re={exports:{}},Va=Re.exports,Zn;function Wa(){return Zn||(Zn=1,(function(e,n){(function(t,r){e.exports=r(ge())})(Va,(function(t){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(t),i={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(o,d){return d==="W"?o+"周":o+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(o,d){var c=100*o+d;return c<600?"凌晨":c<900?"早上":c<1100?"上午":c<1300?"中午":c<1800?"下午":"晚上"}};return a.default.locale(i,null,!0),i}))})(Re)),Re.exports}Wa();var Ce={exports:{}},Xa=Ce.exports,Jn;function Za(){return Jn||(Jn=1,(function(e,n){(function(t,r){e.exports=r(ge())})(Xa,(function(t){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(t),i={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(o,d){return d==="W"?o+"週":o+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"},meridiem:function(o,d){var c=100*o+d;return c<600?"凌晨":c<900?"早上":c<1100?"上午":c<1300?"中午":c<1800?"下午":"晚上"}};return a.default.locale(i,null,!0),i}))})(Ce)),Ce.exports}Za();var $e={exports:{}},Ja=$e.exports,Kn;function Ka(){return Kn||(Kn=1,(function(e,n){(function(t,r){e.exports=r(ge())})(Ja,(function(t){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(t),i={name:"ms",weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH.mm",LLLL:"dddd, D MMMM YYYY HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(o){return o+"."}};return a.default.locale(i,null,!0),i}))})($e)),$e.exports}Ka();var qe={exports:{}},Ga=qe.exports,Gn;function eo(){return Gn||(Gn=1,(function(e,n){(function(t,r){e.exports=r(ge())})(Ga,(function(t){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(t),i={name:"th",weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"},ordinal:function(o){return o+"."}};return a.default.locale(i,null,!0),i}))})(qe)),qe.exports}eo();Ye.extend(za);Ye.extend(Ua);function Ke(e,n="en"){const t=Ye(),r=Ye(e),a=t.diff(r,"second"),{year:i,month:o,day:d,hour:c,minute:l,second:h,and:g,ago:p,justNow:N}=et[n]||et.en;if(a<5)return N;const f=t.diff(r,"year"),u=t.diff(r.add(f,"year"),"month"),P=t.diff(r.add(f,"year").add(u,"month"),"day"),C=t.diff(r.add(f,"year").add(u,"month").add(P,"day"),"hour"),$=t.diff(r.add(f,"year").add(u,"month").add(P,"day").add(C,"hour"),"minute"),D=a-(f*365*24*60*60+u*30*24*60*60+P*24*60*60+C*60*60+$*60),A=[];return f&&A.push(i(f)),u&&A.push(o(u)),!f&&!u&&P&&A.push(d(P)),!f&&!u&&!P&&C&&A.push(c(C)),!f&&!u&&!P&&!C&&$&&A.push(l($)),!f&&!u&&!P&&!C&&!$&&D&&A.push(h(D)),A.join(g)+p}const et={en:{year:e=>`${e} year${e!==1?"s":""}`,month:e=>`${e} month${e!==1?"s":""}`,day:e=>`${e} day${e!==1?"s":""}`,hour:e=>`${e} hour${e!==1?"s":""}`,minute:e=>`${e} minute${e!==1?"s":""}`,second:e=>`${e} second${e!==1?"s":""}`,and:" and ",ago:" ago",justNow:"just now"},"zh-cn":{year:e=>`${e}年`,month:e=>`${e}个月`,day:e=>`${e}天`,hour:e=>`${e}小时`,minute:e=>`${e}分钟`,second:e=>`${e}秒`,and:"",ago:"前",justNow:"刚刚"},"zh-tw":{year:e=>`${e}年`,month:e=>`${e}个月`,day:e=>`${e}天`,hour:e=>`${e}小时`,minute:e=>`${e}分钟`,second:e=>`${e}秒`,and:"",ago:"前",justNow:"刚刚"},km:{year:e=>`${e} ឆ្នាំ`,month:e=>`${e} ខែ`,day:e=>`${e} ថ្ងៃ`,hour:e=>`${e} ម៉ោង`,minute:e=>`${e} នាទី`,second:e=>`${e} វិនាទី`,and:" និង ",ago:"មុន",justNow:"ម្សិលមិញ"},th:{year:e=>`${e} ปี`,month:e=>`${e} เดือน`,day:e=>`${e} วัน`,hour:e=>`${e} ชั่วโมง`,minute:e=>`${e} นาที`,second:e=>`${e} วินาที`,and:" และ ",ago:"ที่แล้ว",justNow:"เมื่อครู่"},ms:{year:e=>`${e} tahun`,month:e=>`${e} bulan`,day:e=>`${e} hari`,hour:e=>`${e} jam`,minute:e=>`${e} minit`,second:e=>`${e} saat`,and:" dan ",ago:"yang lalu",justNow:"sebentar tadi"}};function un({src:e,alt:n="",...t}){return s.jsx("img",{src:e,alt:n,onError:r=>{r.currentTarget.onerror=null,r.currentTarget.src=cn},...t})}const no=x.lazy(()=>st(()=>import("./index-Xo-WmDiX.js"),__vite__mapDeps([0,1,2]))),to=e=>{const{convertedLocale:n}=it(),{t}=fe("translation");return!e?.title&&!e?.summary?null:e?.media?.length?e?.media?.length==1?s.jsx("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 bg-white p-3 sm:p-4 rounded-xs",children:s.jsxs("div",{className:"relative flex space-x-1 overflow-hidden",children:[s.jsxs("div",{className:"relative basis-2/5",children:[e?.media?.[0]?.type=="video"&&e?.media?.[0]?.url?s.jsx("div",{className:"relative rounded-xs min-h-30",children:s.jsx(nt,{src:e?.media?.[0]?.url})}):s.jsx("div",{className:"shrink-0 relative rounded-xs overflow-hidden min-h-20 lg:h-40 mr-2",children:s.jsx(un,{src:e?.media?.[0]?.url||cn,alt:e?.title,className:"object-contain border border-gray-50 rounded-xs"})}),e?.post_at&&s.jsxs("div",{className:"absolute top-0 left-0 right-0 bottom-0 max-sm:mt-1 px-2 ml-1 mt-2.5 flex items-center h-fit bg-black/20 py-1 backdrop-blur-xs w-fit space-x-1.5 text-[9px] lg:text-xs",children:[s.jsx(He,{className:"max-sm:size-3.5 size-5 text-amber-400"}),s.jsx("span",{className:"text-white mt-0.5",children:Ke(new Date(e?.post_at),n)})]})]}),s.jsx("div",{className:"basis-3/5 flex flex-col space-y-0.5 md:pl-1.5",children:s.jsxs("div",{className:"flex flex-col space-y-0.5",children:[s.jsxs("div",{className:"flex items-center justify-between sm:pb-2",children:[!!e?.is_recommended&&s.jsx("div",{className:"flex items-center space-x-1 bg-amber-400/5 px-1.5 py-0.5",children:s.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400",children:t("common.recommended-label")})}),e?.tags&&s.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm text-amber-500",children:(e?.tags||[]).map((r,a)=>s.jsxs("span",{children:["#",r]},a))})]}),s.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl leading-relaxed! text-gray-700 line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&s.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})})]})}):s.jsxs("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 flex flex-col space-y-3 bg-white p-3 sm:p-4 rounded-xs",children:[s.jsx("div",{children:s.jsxs("div",{className:"flex flex-col space-y-0.5",children:[s.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[e?.post_at&&s.jsxs("div",{className:"flex items-center space-x-1.5 text-[9px] text-black backdrop-blur-sm lg:text-xs w-fit",children:[s.jsx(He,{className:"max-sm:size-3.5 size-5 text-amber-400"}),s.jsx("span",{className:"text-gray-500",children:Ke(new Date(e?.post_at),n)})]}),!!e?.is_recommended&&s.jsx("div",{className:"size-2 bg-amber-400 rounded-full"}),!!e?.is_recommended&&s.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400 px-3 py-0.5 bg-amber-400/5",children:t("common.recommended-label")})]}),e?.tags&&s.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm text-amber-500",children:(e?.tags||[]).map((r,a)=>s.jsxs("span",{children:["#",r]},a))})]}),s.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl text-gray-700 leading-relaxed! line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&s.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})}),s.jsx("div",{className:ce("grid grid-cols-2 gap-2"),children:(e?.media||[])?.slice(0,2).map((r,a)=>r?.type=="video"&&r?.url?s.jsx(nt,{src:r?.url},a):s.jsx("div",{className:ce("relative w-full min-h-24 lg:h-49 h-full rounded-xs overflow-hidden"),children:s.jsx(un,{src:r?.url||cn,alt:e?.title,className:"border border-gray-50 object-contain rounded-xs overflow-hidden"})},a))})]}):s.jsx("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 bg-white p-3 sm:p-4 lg:p-5 mb-2 rounded-xs!",children:s.jsx("div",{className:"relative flex flex-col overflow-hidden",children:s.jsx("div",{className:"basis-3/5 flex flex-col space-y-1",children:s.jsxs("div",{className:"flex flex-col mt-2 space-y-0.5",children:[s.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[s.jsx("div",{className:"flex items-center justify-between w-full",children:s.jsxs("div",{className:"flex items-center space-x-2",children:[e?.post_at&&s.jsxs("div",{className:"flex items-center space-x-1.5 text-[9px] text-black backdrop-blur-sm lg:text-xs w-fit",children:[s.jsx(He,{className:"max-sm:size-3.5 size-5 text-amber-400"}),s.jsx("span",{className:"text-gray-500",children:Ke(new Date(e?.post_at),n)})]}),!!e?.is_recommended&&s.jsx("div",{className:"size-2 bg-amber-400 rounded-full"}),!!e?.is_recommended&&s.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400 px-3 py-0.5 bg-amber-400/5",children:t("common.recommended-label")})]})}),e?.tags&&s.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm mt-2 text-amber-500",children:(e?.tags||[]).map((r,a)=>s.jsxs("span",{children:["#",r]},a))})]}),s.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl leading-relaxed! text-gray-700 line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&s.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})})})})},nt=({src:e})=>s.jsxs("div",{className:"relative h-30 md:aspect-w-16! md:aspect-h-9! overflow-hidden rounded-xs",children:[s.jsx("div",{className:"absolute top-0 right-0 bottom-0 left-0 z-10 cursor-pointer"}),s.jsxs("div",{className:"size-full bg-gray-100/60 p-2 border border-gray-100",children:[s.jsx(x.Suspense,{fallback:s.jsx("div",{children:"..."}),children:s.jsx(no,{className:"size-full!",src:e,fallback:s.jsx("div",{className:"relative rounded-xs bg-gray-100! aspect-w-16! aspect-h-8! animate-pulse",children:s.jsx("div",{className:"size-full flex justify-center items-center",children:s.jsx(pr,{className:"size-10 text-gray-100"})})})})}),s.jsx("span",{className:"absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 size-fit! bg-black/10 backdrop-blur-sm p-2 rounded-full",children:s.jsx(rr,{className:"text-white"})})]})]});function ro(e){return s.jsxs("svg",{...e,className:`animate-spin h-8 w-8 text-amber-500 ${e.className??""}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[s.jsx("circle",{className:"opacity-25",cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),s.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]})}const tt=20,ao=e=>{const{keyword:n,type_id:t,type_pid:r}=e,[a,i]=x.useState(0),{convertedLocale:o}=it(),d=(n||"")?.length>50?n?.slice(0,50):n,{isFetching:c,isLoading:l,isFetchingNextPage:h,fetchNextPage:g,hasNextPage:p,data:N}=Jt({initialPageParam:1,queryKey:["news-search",o,t,r,d,a],queryFn:async({pageParam:f=1})=>{const u=await Rt({page:f,page_size:tt,keyword:n?d:void 0,type_id:t||void 0,type_pid:r||void 0},o);return i(u?.data?.total||0),u?.data?.list},getNextPageParam:(f,u,P)=>(f?.length||0)<tt?void 0:P+1});return{isFetching:c,isLoading:l,isFetchingNextPage:h,hasNextPage:p,fetchNextPage:g,data:N?.pages?.flatMap(f=>f),total:a}};function te({className:e,...n}){return s.jsx("div",{"data-slot":"skeleton",className:ce("bg-accent animate-pulse rounded-md",e),...n})}const oo="/react-vite/assets/empty-news-C68dbbMJ.webp",io="/react-vite/assets/empty-search-result-NkdVhJyE.webp",gt=({type:e="default",title:n,subtitle:t})=>{const r=so(e);return s.jsx("div",{className:ce("h-[calc(60dvh)] md:h-[calc(55dvh)] rounded-t-xl flex justify-center items-center",{"h-[calc(60dvh)] md:h-[calc(55dvh)]":e=="default"}),children:s.jsxs("div",{className:"size-fit flex flex-col justify-center items-center",children:[s.jsx(un,{src:r,alt:"empty-state",className:"object-cover",width:100,height:62}),s.jsxs("div",{className:"flex flex-col space-y-1 mt-4 justify-center items-center",children:[s.jsx("h2",{className:"text-xl font-bold text-primary text-center",children:n}),s.jsx("span",{className:"font-medium w-full px-10 text-gray-500 text-center text-sm",children:t})]})]})})};function so(e){switch(e){default:case"default":return oo;case"search":return io}}const lo=()=>{const e=Ct(),n=Ie(),{data:t}=pn(),{isLoading:r,hasNextPage:a,fetchNextPage:i,data:o,total:d}=ao({keyword:n?.search,type_id:+n?.selfId,type_pid:+n?.parentId}),{t:c}=fe();if(r&&!o?.length)return s.jsx(ho,{});if(!n?.search&&!r&&!o?.length)return s.jsx(co,{total:d});if(n?.search&&!r&&!o?.length)return s.jsx(uo,{total:d});const l=t?.length?t?.join(" / ").toString():c("common.news-label");return s.jsx("div",{className:"relative",children:s.jsxs("div",{className:"relative pb-4 overflow-y-auto scrollbar-none",children:[n?.search?s.jsxs("div",{className:"flex items-center space-x-2 text-primary rounded-2xl pb-4 pt-1 px-1 font-bold",children:[s.jsx("span",{children:c("common.search-result",{total:`${d}`||"0"})}),s.jsx("div",{className:"grow h-px bg-gray-300"})]}):s.jsxs("div",{className:"px-2 pb-3 md:mb-2 flex items-center space-x-4",children:[s.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[s.jsx("span",{children:s.jsx(Gt,{className:"size-5 md:size-6 lg:size-7"})}),s.jsx("span",{children:l})]}),s.jsx("div",{className:"grow h-px bg-gray-200"})]}),s.jsx(Ca,{scrollThreshold:.9,dataLength:(o||[])?.length,next:i,hasMore:a,className:"contents",loader:s.jsx("div",{className:"flex justify-center pb-3 pt-3.5 items-center",children:s.jsx(ro,{})}),children:s.jsx("div",{className:"flex flex-col space-y-2",children:(o||[])?.map((h,g)=>s.jsx("div",{children:s.jsx(to,{...h,onClick:()=>{e({to:"/detail/$newId",params:{newId:`${h?.id}`},search:{parentId:n?.parentId?+n?.parentId:void 0,id:n?.selfId?+n?.selfId:void 0}})}},g)},g))})})]})})},co=({total:e})=>{const{t:n}=fe();return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pl-2 py-2 mb-2 flex items-center space-x-4",children:[s.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[s.jsx("span",{children:s.jsx(ct,{className:"size-5 md:size-6 lg:size-7"})}),s.jsx("span",{children:n("common.search-result",{total:`${e||0}`})})]}),s.jsx("div",{className:"grow h-px bg-gray-200"})]}),s.jsx("div",{className:"bg-white rounded-xs max-md:my-4",children:s.jsx(gt,{type:"default",title:n("components.list-empty-state.title"),subtitle:n("components.list-empty-state.subtitle")})})]})},uo=({total:e})=>{const{t:n}=fe();return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pl-2 py-2 mb-2 flex items-center space-x-4",children:[s.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[s.jsx("span",{children:s.jsx(ct,{className:"size-5 md:size-6 lg:size-7"})}),s.jsx("span",{children:n("common.search-result",{total:`${e||0}`})})]}),s.jsx("div",{className:"grow h-px bg-gray-200"})]}),s.jsx("div",{className:"bg-white rounded-xl max-md:my-4",children:s.jsx(gt,{type:"search",title:n("components.search-empty-state.title"),subtitle:n("components.search-empty-state.subtitle")})})]})},ho=()=>s.jsxs("div",{className:"flex flex-col space-y-4",children:[s.jsxs(te,{className:"flex items-center space-x-2",children:[s.jsx(te,{className:"bg-gray-200/60 w-40 h-8 rounded-xs"}),s.jsx(te,{className:"grow bg-gray-200 h-[1.5px]"})]}),s.jsx("div",{className:"flex flex-col space-y-3 pb-4",children:Array.from({length:4}).map((e,n)=>s.jsxs(te,{className:"p-3 flex flex-col space-y-3 bg-gray-200/60 rounded-xs",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(te,{className:"w-20 h-4 rounded-xs"}),s.jsx(te,{className:"w-20 h-4 rounded-xs"})]}),s.jsx(te,{className:"w-72 h-4 rounded-xs"}),s.jsxs("div",{className:"flex flex-col space-y-2",children:[s.jsx(te,{className:"w-5/6 h-2 rounded-xs"}),s.jsx(te,{className:"w-full h-2 rounded-xs"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx(te,{className:"w-full h-24 rounded-xs flex justify-center items-center",children:s.jsx(On,{className:"size-9 text-gray-200"})}),s.jsx(te,{className:"w-full h-24 rounded-xs flex justify-center items-center",children:s.jsx(On,{className:"size-9 text-gray-200"})})]})]},n))})]}),po=e=>{const{filterOptions:n}=e;return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"max-md:hidden relative grid grid-cols-12 lg:gap-3 p-3 lg:max-w-5xl xl:max-w-6xl mx-auto mt-4",children:[s.jsx("div",{className:"col-span-4",children:s.jsx(Da,{filterOptions:n})}),s.jsx("div",{className:"col-span-8",children:s.jsx(lo,{})})]})})},fo=x.lazy(()=>st(()=>import("./index-CN3OoWN4.js"),__vite__mapDeps([3,1,2,4])).then(e=>({default:e.AdvertisementSlider})));function bo(){const e=$t.useLoaderData(),{t:n}=fe();return s.jsxs(s.Fragment,{children:[s.jsx(xn,{to:".",pending:!0,children:s.jsx(Dn,{})}),s.jsx(xn,{to:"/detail/$newId",pending:!0,children:s.jsx(Dn,{})}),s.jsxs("div",{className:"relative min-h-[calc(100dvh-150px)] h-auto",children:[s.jsx(Lr,{text:n("components.marquee.content")}),s.jsx("div",{className:"max-md:hidden",children:s.jsx(fo,{variant:"desktop"})}),s.jsx(po,{filterOptions:e?.data?.list||[]})]})]})}export{bo as component};
