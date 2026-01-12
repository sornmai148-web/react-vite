const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CODnBxil.js","assets/index-D1dSsVDL.js","assets/index-DQhPSdnM.css"])))=>i.map(i=>d[i]);
import{S as Da,p as or,r as pe,s as Mn,a as nt,n as On,i as Cn,b as sr,t as Aa,c as pt,f as Ia,d as Ra,e as lr,g as bi,h as cr,j as za,k as Fa,l as v,m as vi,u as Ha,o as se,R,q as m,v as yi,w as ct,x as we,y as te,z as jt,A as qa,B as Z,C as xi,D as Ya,E as Va,F as Ba,G as Ga,H as _n,I as ht,J as wi,_ as Wa,K as Ua,L as Qa,M as Xa,N as Ka,O as Za,P as Si,Q as Ja,T as ur}from"./index-D1dSsVDL.js";var eo=class extends Da{constructor(e,t){super(),this.options=t,this.#n=e,this.#i=null,this.#r=or(),this.bindMethods(),this.setOptions(t)}#n;#e=void 0;#h=void 0;#t=void 0;#o;#u;#r;#i;#m;#d;#f;#s;#l;#a;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),dr(this.#e,this.options)?this.#c():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return $n(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return $n(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#x(),this.#w(),this.#e.removeObserver(this)}setOptions(e){const t=this.options,n=this.#e;if(this.options=this.#n.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof pe(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#S(),this.#e.setOptions(this.options),t._defaulted&&!Mn(this.options,t)&&this.#n.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const r=this.hasListeners();r&&fr(this.#e,n,this.options,t)&&this.#c(),this.updateResult(),r&&(this.#e!==n||pe(this.options.enabled,this.#e)!==pe(t.enabled,this.#e)||nt(this.options.staleTime,this.#e)!==nt(t.staleTime,this.#e))&&this.#g();const i=this.#b();r&&(this.#e!==n||pe(this.options.enabled,this.#e)!==pe(t.enabled,this.#e)||i!==this.#a)&&this.#v(i)}getOptimisticResult(e){const t=this.#n.getQueryCache().build(this.#n,e),n=this.createResult(t,e);return no(this,n)&&(this.#t=n,this.#u=this.options,this.#o=this.#e.state),n}getCurrentResult(){return this.#t}trackResult(e,t){return new Proxy(e,{get:(n,r)=>(this.trackProp(r),t?.(r),r==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#r.status==="pending"&&this.#r.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(n,r))})}trackProp(e){this.#p.add(e)}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#n.defaultQueryOptions(e),n=this.#n.getQueryCache().build(this.#n,t);return n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#c({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#c(e){this.#S();let t=this.#e.fetch(this.options,e);return e?.throwOnError||(t=t.catch(On)),t}#g(){this.#x();const e=nt(this.options.staleTime,this.#e);if(Cn||this.#t.isStale||!sr(e))return;const n=Aa(this.#t.dataUpdatedAt,e)+1;this.#s=pt.setTimeout(()=>{this.#t.isStale||this.updateResult()},n)}#b(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(e){this.#w(),this.#a=e,!(Cn||pe(this.options.enabled,this.#e)===!1||!sr(this.#a)||this.#a===0)&&(this.#l=pt.setInterval(()=>{(this.options.refetchIntervalInBackground||Ia.isFocused())&&this.#c()},this.#a))}#y(){this.#g(),this.#v(this.#b())}#x(){this.#s&&(pt.clearTimeout(this.#s),this.#s=void 0)}#w(){this.#l&&(pt.clearInterval(this.#l),this.#l=void 0)}createResult(e,t){const n=this.#e,r=this.options,i=this.#t,a=this.#o,s=this.#u,o=e!==n?e.state:this.#h,{state:l}=e;let u={...l},d=!1,f;if(t._optimisticResults){const w=this.hasListeners(),$=!w&&dr(e,t),E=w&&fr(e,n,t,r);($||E)&&(u={...u,...Ra(l.data,e.options)}),t._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:p,errorUpdatedAt:g,status:h}=u;f=u.data;let S=!1;if(t.placeholderData!==void 0&&f===void 0&&h==="pending"){let w;i?.isPlaceholderData&&t.placeholderData===s?.placeholderData?(w=i.data,S=!0):w=typeof t.placeholderData=="function"?t.placeholderData(this.#f?.state.data,this.#f):t.placeholderData,w!==void 0&&(h="success",f=lr(i?.data,w,t),d=!0)}if(t.select&&f!==void 0&&!S)if(i&&f===a?.data&&t.select===this.#m)f=this.#d;else try{this.#m=t.select,f=t.select(f),f=lr(i?.data,f,t),this.#d=f,this.#i=null}catch(w){this.#i=w}this.#i&&(p=this.#i,f=this.#d,g=Date.now(),h="error");const b=u.fetchStatus==="fetching",y=h==="pending",x=h==="error",P=y&&b,T=f!==void 0,_={status:h,fetchStatus:u.fetchStatus,isPending:y,isSuccess:h==="success",isError:x,isInitialLoading:P,isLoading:P,data:f,dataUpdatedAt:u.dataUpdatedAt,error:p,errorUpdatedAt:g,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>o.dataUpdateCount||u.errorUpdateCount>o.errorUpdateCount,isFetching:b,isRefetching:b&&!y,isLoadingError:x&&!T,isPaused:u.fetchStatus==="paused",isPlaceholderData:d,isRefetchError:x&&T,isStale:Xn(e,t),refetch:this.refetch,promise:this.#r,isEnabled:pe(t.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const w=M=>{_.status==="error"?M.reject(_.error):_.data!==void 0&&M.resolve(_.data)},$=()=>{const M=this.#r=_.promise=or();w(M)},E=this.#r;switch(E.status){case"pending":e.queryHash===n.queryHash&&w(E);break;case"fulfilled":(_.status==="error"||_.data!==E.value)&&$();break;case"rejected":(_.status!=="error"||_.error!==E.reason)&&$();break}}return _}updateResult(){const e=this.#t,t=this.createResult(this.#e,this.options);if(this.#o=this.#e.state,this.#u=this.options,this.#o.data!==void 0&&(this.#f=this.#e),Mn(t,e))return;this.#t=t;const n=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,i=typeof r=="function"?r():r;if(i==="all"||!i&&!this.#p.size)return!0;const a=new Set(i??this.#p);return this.options.throwOnError&&a.add("error"),Object.keys(this.#t).some(s=>{const c=s;return this.#t[c]!==e[c]&&a.has(c)})};this.#T({listeners:n()})}#S(){const e=this.#n.getQueryCache().build(this.#n,this.options);if(e===this.#e)return;const t=this.#e;this.#e=e,this.#h=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#T(e){bi.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#t)}),this.#n.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function to(e,t){return pe(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function dr(e,t){return to(e,t)||e.state.data!==void 0&&$n(e,t,t.refetchOnMount)}function $n(e,t,n){if(pe(t.enabled,e)!==!1&&nt(t.staleTime,e)!=="static"){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Xn(e,t)}return!1}function fr(e,t,n,r){return(e!==t||pe(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&Xn(e,n)}function Xn(e,t){return pe(t.enabled,e)!==!1&&e.isStaleByTime(nt(t.staleTime,e))}function no(e,t){return!Mn(e.getCurrentResult(),t)}var ro=class extends eo{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:cr()})}getOptimisticResult(e){return e.behavior=cr(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a,isError:s,isRefetchError:c}=r,o=n.fetchMeta?.fetchMore?.direction,l=s&&o==="forward",u=i&&o==="forward",d=s&&o==="backward",f=i&&o==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Fa(t,n.data),hasPreviousPage:za(t,n.data),isFetchNextPageError:l,isFetchingNextPage:u,isFetchPreviousPageError:d,isFetchingPreviousPage:f,isRefetchError:c&&!l&&!d,isRefetching:a&&!u&&!f}}},Ti=v.createContext(!1),io=()=>v.useContext(Ti);Ti.Provider;function ao(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var oo=v.createContext(ao()),so=()=>v.useContext(oo),lo=(e,t,n)=>{const r=n?.state.error&&typeof e.throwOnError=="function"?vi(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&(t.isReset()||(e.retryOnMount=!1))},co=e=>{v.useEffect(()=>{e.clearReset()},[e])},uo=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(i&&e.data===void 0||vi(n,[e.error,r])),fo=e=>{if(e.suspense){const n=i=>i==="static"?i:Math.max(i??1e3,1e3),r=e.staleTime;e.staleTime=typeof r=="function"?(...i)=>n(r(...i)):n(r),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},po=(e,t)=>e.isLoading&&e.isFetching&&!t,ho=(e,t)=>e?.suspense&&t.isPending,pr=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function mo(e,t,n){const r=io(),i=so(),a=Ha(),s=a.defaultQueryOptions(e);a.getDefaultOptions().queries?._experimental_beforeQuery?.(s);const c=a.getQueryCache().get(s.queryHash);s._optimisticResults=r?"isRestoring":"optimistic",fo(s),lo(s,i,c),co(i);const o=!a.getQueryCache().get(s.queryHash),[l]=v.useState(()=>new t(a,s)),u=l.getOptimisticResult(s),d=!r&&e.subscribed!==!1;if(v.useSyncExternalStore(v.useCallback(f=>{const p=d?l.subscribe(bi.batchCalls(f)):On;return l.updateResult(),p},[l,d]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),v.useEffect(()=>{l.setOptions(s)},[s,l]),ho(s,u))throw pr(s,l,i);if(uo({result:u,errorResetBoundary:i,throwOnError:s.throwOnError,query:c,suspense:s.suspense}))throw u.error;return a.getDefaultOptions().queries?._experimental_afterQuery?.(s,u),s.experimental_prefetchInRender&&!Cn&&po(u,r)&&(o?pr(s,l,i):c?.promise)?.catch(On).finally(()=>{l.updateResult()}),s.notifyOnChangeProps?u:l.trackResult(u)}function go(e,t){return mo(e,ro)}const bo=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],vo=se("arrow-up-right",bo);const yo=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xo=se("book-open",yo);const wo=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],jn=se("chevron-up",wo);const So=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],nn=se("clock",So);const To=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],ko=se("film",To);const Eo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],hr=se("image",Eo);const Po=[["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M9 19h6",key:"456am0"}]],Mo=se("list-filter",Po);const Oo=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Co=se("loader-circle",Oo);const _o=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$o=se("search",_o);const jo=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],No=se("sliders-horizontal",jo);const Lo=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 19H3",key:"108z41"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]],ki=se("text-search",Lo);const Do=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Ao=se("video",Do);const Io=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ro=se("x",Io);function ee(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}ee(`.react-loading-indicator-normalize,
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
}`);var be=function(){return be=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},be.apply(this,arguments)};function Nt(e){return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nt(e)}var zo=/^\s+/,Fo=/\s+$/;function q(e,t){if(t=t||{},(e=e||"")instanceof q)return e;if(!(this instanceof q))return new q(e,t);var n=(function(r){var i={r:0,g:0,b:0},a=1,s=null,c=null,o=null,l=!1,u=!1;typeof r=="string"&&(r=(function(g){g=g.replace(zo,"").replace(Fo,"").toLowerCase();var h,S=!1;if(Nn[g])g=Nn[g],S=!0;else if(g=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(h=fe.rgb.exec(g))?{r:h[1],g:h[2],b:h[3]}:(h=fe.rgba.exec(g))?{r:h[1],g:h[2],b:h[3],a:h[4]}:(h=fe.hsl.exec(g))?{h:h[1],s:h[2],l:h[3]}:(h=fe.hsla.exec(g))?{h:h[1],s:h[2],l:h[3],a:h[4]}:(h=fe.hsv.exec(g))?{h:h[1],s:h[2],v:h[3]}:(h=fe.hsva.exec(g))?{h:h[1],s:h[2],v:h[3],a:h[4]}:(h=fe.hex8.exec(g))?{r:ae(h[1]),g:ae(h[2]),b:ae(h[3]),a:xr(h[4]),format:S?"name":"hex8"}:(h=fe.hex6.exec(g))?{r:ae(h[1]),g:ae(h[2]),b:ae(h[3]),format:S?"name":"hex"}:(h=fe.hex4.exec(g))?{r:ae(h[1]+""+h[1]),g:ae(h[2]+""+h[2]),b:ae(h[3]+""+h[3]),a:xr(h[4]+""+h[4]),format:S?"name":"hex8"}:(h=fe.hex3.exec(g))?{r:ae(h[1]+""+h[1]),g:ae(h[2]+""+h[2]),b:ae(h[3]+""+h[3]),format:S?"name":"hex"}:!1})(r)),Nt(r)=="object"&&(Te(r.r)&&Te(r.g)&&Te(r.b)?(d=r.r,f=r.g,p=r.b,i={r:255*K(d,255),g:255*K(f,255),b:255*K(p,255)},l=!0,u=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Te(r.h)&&Te(r.s)&&Te(r.v)?(s=Ze(r.s),c=Ze(r.v),i=(function(g,h,S){g=6*K(g,360),h=K(h,100),S=K(S,100);var b=Math.floor(g),y=g-b,x=S*(1-h),P=S*(1-y*h),T=S*(1-(1-y)*h),O=b%6,_=[S,P,x,x,T,S][O],w=[T,S,S,P,x,x][O],$=[x,x,T,S,S,P][O];return{r:255*_,g:255*w,b:255*$}})(r.h,s,c),l=!0,u="hsv"):Te(r.h)&&Te(r.s)&&Te(r.l)&&(s=Ze(r.s),o=Ze(r.l),i=(function(g,h,S){var b,y,x;function P(_,w,$){return $<0&&($+=1),$>1&&($-=1),$<1/6?_+6*(w-_)*$:$<.5?w:$<2/3?_+(w-_)*(2/3-$)*6:_}if(g=K(g,360),h=K(h,100),S=K(S,100),h===0)b=y=x=S;else{var T=S<.5?S*(1+h):S+h-S*h,O=2*S-T;b=P(O,T,g+1/3),y=P(O,T,g),x=P(O,T,g-1/3)}return{r:255*b,g:255*y,b:255*x}})(r.h,s,o),l=!0,u="hsl"),r.hasOwnProperty("a")&&(a=r.a));var d,f,p;return a=Ei(a),{ok:l,format:r.format||u,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a}})(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function mr(e,t,n){e=K(e,255),t=K(t,255),n=K(n,255);var r,i,a=Math.max(e,t,n),s=Math.min(e,t,n),c=(a+s)/2;if(a==s)r=i=0;else{var o=a-s;switch(i=c>.5?o/(2-a-s):o/(a+s),a){case e:r=(t-n)/o+(t<n?6:0);break;case t:r=(n-e)/o+2;break;case n:r=(e-t)/o+4}r/=6}return{h:r,s:i,l:c}}function gr(e,t,n){e=K(e,255),t=K(t,255),n=K(n,255);var r,i,a=Math.max(e,t,n),s=Math.min(e,t,n),c=a,o=a-s;if(i=a===0?0:o/a,a==s)r=0;else{switch(a){case e:r=(t-n)/o+(t<n?6:0);break;case t:r=(n-e)/o+2;break;case n:r=(e-t)/o+4}r/=6}return{h:r,s:i,v:c}}function br(e,t,n,r){var i=[he(Math.round(e).toString(16)),he(Math.round(t).toString(16)),he(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function vr(e,t,n,r){return[he(Pi(r)),he(Math.round(e).toString(16)),he(Math.round(t).toString(16)),he(Math.round(n).toString(16))].join("")}function Ho(e,t){t=t===0?0:t||10;var n=q(e).toHsl();return n.s-=t/100,n.s=Gt(n.s),q(n)}function qo(e,t){t=t===0?0:t||10;var n=q(e).toHsl();return n.s+=t/100,n.s=Gt(n.s),q(n)}function Yo(e){return q(e).desaturate(100)}function Vo(e,t){t=t===0?0:t||10;var n=q(e).toHsl();return n.l+=t/100,n.l=Gt(n.l),q(n)}function Bo(e,t){t=t===0?0:t||10;var n=q(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),q(n)}function Go(e,t){t=t===0?0:t||10;var n=q(e).toHsl();return n.l-=t/100,n.l=Gt(n.l),q(n)}function Wo(e,t){var n=q(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,q(n)}function Uo(e){var t=q(e).toHsl();return t.h=(t.h+180)%360,q(t)}function yr(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=q(e).toHsl(),r=[q(e)],i=360/t,a=1;a<t;a++)r.push(q({h:(n.h+a*i)%360,s:n.s,l:n.l}));return r}function Qo(e){var t=q(e).toHsl(),n=t.h;return[q(e),q({h:(n+72)%360,s:t.s,l:t.l}),q({h:(n+216)%360,s:t.s,l:t.l})]}function Xo(e,t,n){t=t||6,n=n||30;var r=q(e).toHsl(),i=360/n,a=[q(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(q(r));return a}function Ko(e,t){t=t||6;for(var n=q(e).toHsv(),r=n.h,i=n.s,a=n.v,s=[],c=1/t;t--;)s.push(q({h:r,s:i,v:a})),a=(a+c)%1;return s}q.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Ei(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=gr(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=gr(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=mr(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=mr(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return br(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return(function(t,n,r,i,a){var s=[he(Math.round(t).toString(16)),he(Math.round(n).toString(16)),he(Math.round(r).toString(16)),he(Pi(i))];return a&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")})(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*K(this._r,255))+"%",g:Math.round(100*K(this._g,255))+"%",b:Math.round(100*K(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*K(this._r,255))+"%, "+Math.round(100*K(this._g,255))+"%, "+Math.round(100*K(this._b,255))+"%)":"rgba("+Math.round(100*K(this._r,255))+"%, "+Math.round(100*K(this._g,255))+"%, "+Math.round(100*K(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Zo[br(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+vr(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=q(e);n="#"+vr(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return q(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Vo,arguments)},brighten:function(){return this._applyModification(Bo,arguments)},darken:function(){return this._applyModification(Go,arguments)},desaturate:function(){return this._applyModification(Ho,arguments)},saturate:function(){return this._applyModification(qo,arguments)},greyscale:function(){return this._applyModification(Yo,arguments)},spin:function(){return this._applyModification(Wo,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Xo,arguments)},complement:function(){return this._applyCombination(Uo,arguments)},monochromatic:function(){return this._applyCombination(Ko,arguments)},splitcomplement:function(){return this._applyCombination(Qo,arguments)},triad:function(){return this._applyCombination(yr,[3])},tetrad:function(){return this._applyCombination(yr,[4])}},q.fromRatio=function(e,t){if(Nt(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:Ze(e[r]));e=n}return q(e,t)},q.equals=function(e,t){return!(!e||!t)&&q(e).toRgbString()==q(t).toRgbString()},q.random=function(){return q.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},q.mix=function(e,t,n){n=n===0?0:n||50;var r=q(e).toRgb(),i=q(t).toRgb(),a=n/100;return q({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})},q.readability=function(e,t){var n=q(e),r=q(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},q.isReadable=function(e,t,n){var r,i,a=q.readability(e,t);switch(i=!1,(r=(function(s){var c,o;return c=((s=s||{level:"AA",size:"small"}).level||"AA").toUpperCase(),o=(s.size||"small").toLowerCase(),c!=="AA"&&c!=="AAA"&&(c="AA"),o!=="small"&&o!=="large"&&(o="small"),{level:c,size:o}})(n)).level+r.size){case"AAsmall":case"AAAlarge":i=a>=4.5;break;case"AAlarge":i=a>=3;break;case"AAAsmall":i=a>=7}return i},q.mostReadable=function(e,t,n){var r,i,a,s,c=null,o=0;i=(n=n||{}).includeFallbackColors,a=n.level,s=n.size;for(var l=0;l<t.length;l++)(r=q.readability(e,t[l]))>o&&(o=r,c=q(t[l]));return q.isReadable(e,c,{level:a,size:s})||!i?c:(n.includeFallbackColors=!1,q.mostReadable(e,["#fff","#000"],n))};var Nn=q.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Zo=q.hexNames=(function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t})(Nn);function Ei(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function K(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=(function(r){return typeof r=="string"&&r.indexOf("%")!=-1})(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Gt(e){return Math.min(1,Math.max(0,e))}function ae(e){return parseInt(e,16)}function he(e){return e.length==1?"0"+e:""+e}function Ze(e){return e<=1&&(e=100*e+"%"),e}function Pi(e){return Math.round(255*parseFloat(e)).toString(16)}function xr(e){return ae(e)/255}var $e,mt,gt,fe=(mt="[\\s|\\(]+("+($e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+$e+")[,|\\s]+("+$e+")\\s*\\)?",gt="[\\s|\\(]+("+$e+")[,|\\s]+("+$e+")[,|\\s]+("+$e+")[,|\\s]+("+$e+")\\s*\\)?",{CSS_UNIT:new RegExp($e),rgb:new RegExp("rgb"+mt),rgba:new RegExp("rgba"+gt),hsl:new RegExp("hsl"+mt),hsla:new RegExp("hsla"+gt),hsv:new RegExp("hsv"+mt),hsva:new RegExp("hsva"+gt),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Te(e){return!!fe.CSS_UNIT.exec(e)}var Jo=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(t),a=i+r*(i/5)*-1;return(a==0||a<=Number.EPSILON)&&(a=.1),{animationPeriod:a+"s"}}return{animationPeriod:t}},es=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var i={};if(n.fontSize){var a=n.fontSize;i=(function(s,c){var o={};for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&c.indexOf(l)<0&&(o[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var u=0;for(l=Object.getOwnPropertySymbols(s);u<l.length;u++)c.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(s,l[u])&&(o[l[u]]=s[l[u]])}return o})(n,["fontSize"]),r=a}return{fontSize:r,styles:i}},ts={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},ns=function(e){var t=e.className,n=e.text,r=e.textColor,i=e.staticText,a=e.style;return n?R.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:be(be(be({},i&&ts),r&&{color:r,mixBlendMode:"unset"}),a&&a)},typeof n=="string"&&n.length?n:"loading"):null},Mi="rgb(50, 205, 50)";function rs(e,t){if(t===void 0&&(t=0),e.length===0)throw new Error("Input array cannot be empty!");var n=[];return(function r(i,a){return a===void 0&&(a=0),n.push.apply(n,i),n.length<a&&r(n,a),n.slice(0,a)})(e,t)}ee(`.atom-rli-bounding-box {
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
}`);q(Mi).toRgb();Array.from({length:4},(function(e,t){return"--atom-phase".concat(t+1,"-rgb")}));ee(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--commet-phase".concat(t+1,"-color")}));ee(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}));function rn(e){return e&&e.Math===Math&&e}ee(`.OP-dotted-rli-bounding-box {
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
}`);rn(typeof window=="object"&&window)||rn(typeof self=="object"&&self)||rn(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}));ee(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}));ee(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}));ee(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}));ee(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--four-square-phase".concat(t+1,"-color")}));ee(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--mosaic-phase".concat(t+1,"-color")}));ee(`.riple-rli-bounding-box {
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
}`);var Ge=Array.from({length:4},(function(e,t){return"--riple-phase".concat(t+1,"-color")})),is=function(e){var t,n=es(e?.style,e?.size),r=n.styles,i=n.fontSize,a=e?.easing,s=Jo(e?.speedPlus,"1s").animationPeriod,c=(function(o){var l={};if(o instanceof Array){for(var u=rs(o,Ge.length),d=0;d<u.length&&!(d>=4);d++)l[Ge[d]]=u[d];return l}try{if(typeof o!="string")throw new Error("Color String expected");for(var f=0;f<Ge.length;f++)l[Ge[f]]=o}catch(p){for(p instanceof Error?console.warn("[".concat(p.message,']: Received "').concat(typeof o,'" instead with value, ').concat(JSON.stringify(o))):console.warn("".concat(JSON.stringify(o)," received in <Riple /> indicator cannot be processed. Using default instead!")),f=0;f<Ge.length;f++)l[Ge[f]]=Mi}return l})((t=e?.color)!==null&&t!==void 0?t:"");return R.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:be(be(be(be(be({},i&&{fontSize:i}),s&&{"--rli-animation-duration":s}),a&&{"--rli-animation-function":a}),c),r),role:"status","aria-live":"polite","aria-label":"Loading"},R.createElement("span",{className:"rli-d-i-b riple-indicator"},R.createElement("span",{className:"rli-d-i-b riple"}),R.createElement("span",{className:"rli-d-i-b riple"}),R.createElement(ns,{className:"riple-text",text:e?.text,textColor:e?.textColor})))};ee(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")}));ee(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")}));ee(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--TD-bob-phase".concat(t+1,"-color")}));ee(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")}));ee(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--shape-phase".concat(t+1,"-color")}));ee(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--trophySpin-phase".concat(t+1,"-color")}));ee(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--slab-phase".concat(t+1,"-color")}));ee(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,t){return"--life-line-phase".concat(t+1,"-color")}));const wr=()=>m.jsx("div",{className:"flex items-center justify-center flex-col fixed bg-black/30 z-20 top-0 left-0 bottom right-0 w-screen h-screen",children:m.jsx(is,{color:"#f5cd25",size:"large"})});var bt={},Sr;function as(){if(Sr)return bt;Sr=1;function e(a){if(typeof window>"u")return;const s=document.createElement("style");return s.setAttribute("type","text/css"),s.innerHTML=a,document.head.appendChild(s),a}Object.defineProperty(bt,"__esModule",{value:!0});var t=yi();function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var r=n(t);e(`.rfm-marquee-container {
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
}`);const i=t.forwardRef(function({style:s={},className:c="",autoFill:o=!1,play:l=!0,pauseOnHover:u=!1,pauseOnClick:d=!1,direction:f="left",speed:p=50,delay:g=0,loop:h=0,gradient:S=!1,gradientColor:b="white",gradientWidth:y=200,onFinish:x,onCycleComplete:P,onMount:T,children:O},_){const[w,$]=t.useState(0),[E,M]=t.useState(0),[j,z]=t.useState(1),[L,D]=t.useState(!1),A=t.useRef(null),C=_||A,k=t.useRef(null),N=t.useCallback(()=>{if(k.current&&C.current){const Q=C.current.getBoundingClientRect(),Y=k.current.getBoundingClientRect();let B=Q.width,U=Y.width;(f==="up"||f==="down")&&(B=Q.height,U=Y.height),z(o&&B&&U&&U<B?Math.ceil(B/U):1),$(B),M(U)}},[o,C,f]);t.useEffect(()=>{if(L&&(N(),k.current&&C.current)){const Q=new ResizeObserver(()=>N());return Q.observe(C.current),Q.observe(k.current),()=>{Q&&Q.disconnect()}}},[N,C,L]),t.useEffect(()=>{N()},[N,O]),t.useEffect(()=>{D(!0)},[]),t.useEffect(()=>{typeof T=="function"&&T()},[]);const I=t.useMemo(()=>o?E*j/p:E<w?w/p:E/p,[o,w,E,j,p]),H=t.useMemo(()=>Object.assign(Object.assign({},s),{"--pause-on-hover":!l||u?"paused":"running","--pause-on-click":!l||u&&!d||d?"paused":"running","--width":f==="up"||f==="down"?"100vh":"100%","--transform":f==="up"?"rotate(-90deg)":f==="down"?"rotate(90deg)":"none"}),[s,l,u,d,f]),V=t.useMemo(()=>({"--gradient-color":b,"--gradient-width":typeof y=="number"?`${y}px`:y}),[b,y]),F=t.useMemo(()=>({"--play":l?"running":"paused","--direction":f==="left"?"normal":"reverse","--duration":`${I}s`,"--delay":`${g}s`,"--iteration-count":h?`${h}`:"infinite","--min-width":o?"auto":"100%"}),[l,f,I,g,h,o]),G=t.useMemo(()=>({"--transform":f==="up"?"rotate(90deg)":f==="down"?"rotate(-90deg)":"none"}),[f]),W=t.useCallback(Q=>[...Array(Number.isFinite(Q)&&Q>=0?Q:0)].map((Y,B)=>r.default.createElement(t.Fragment,{key:B},t.Children.map(O,U=>r.default.createElement("div",{style:G,className:"rfm-child"},U)))),[G,O]);return L?r.default.createElement("div",{ref:C,style:H,className:"rfm-marquee-container "+c},S&&r.default.createElement("div",{style:V,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:F,onAnimationIteration:P,onAnimationEnd:x},r.default.createElement("div",{className:"rfm-initial-child-container",ref:k},t.Children.map(O,Q=>r.default.createElement("div",{style:G,className:"rfm-child"},Q))),W(j-1)),r.default.createElement("div",{className:"rfm-marquee",style:F},W(j))):null});return bt.default=i,bt}var os=as();const ss=ct(os),ls=({text:e})=>m.jsx("div",{className:"bg-amber-300 py-2",children:m.jsx(ss,{className:"text-gray-700 text-xs sm:text-sm xl:text-base",children:e})}),cs="/react-vite/assets/advert-2-CZybCODW.webp",us="/react-vite/assets/advert-5-C7-ZetRW.webp",ds="/react-vite/assets/advert-6-BMaHT4VC.webp",fs="/react-vite/assets/advert-7-BowxEz35.webp";function Tr(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Kn(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Tr(t[r])&&Tr(e[r])&&Object.keys(t[r]).length>0&&Kn(e[r],t[r])})}const Oi={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ye(){const e=typeof document<"u"?document:{};return Kn(e,Oi),e}const ps={document:Oi,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ne(){const e=typeof window<"u"?window:{};return Kn(e,ps),e}function hs(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function ms(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Ci(e,t=0){return setTimeout(e,t)}function Lt(){return Date.now()}function gs(e){const t=ne();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function bs(e,t="x"){const n=ne();let r,i,a;const s=gs(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(c=>c.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(i==="none"?"":i)):(a=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=a.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=a.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function vt(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function vs(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function oe(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const i=e[r];if(i!=null&&!vs(i)){const a=Object.keys(Object(i)).filter(s=>n.indexOf(s)<0);for(let s=0,c=a.length;s<c;s+=1){const o=a[s],l=Object.getOwnPropertyDescriptor(i,o);l!==void 0&&l.enumerable&&(vt(t[o])&&vt(i[o])?i[o].__swiper__?t[o]=i[o]:oe(t[o],i[o]):!vt(t[o])&&vt(i[o])?(t[o]={},i[o].__swiper__?t[o]=i[o]:oe(t[o],i[o])):t[o]=i[o])}}}return t}function yt(e,t,n){e.style.setProperty(t,n)}function _i({swiper:e,targetPosition:t,side:n}){const r=ne(),i=-e.translate;let a=null,s;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const o=t>i?"next":"prev",l=(d,f)=>o==="next"&&d>=f||o==="prev"&&d<=f,u=()=>{s=new Date().getTime(),a===null&&(a=s);const d=Math.max(Math.min((s-a)/c,1),0),f=.5-Math.cos(d*Math.PI)/2;let p=i+f*(t-i);if(l(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),l(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function $i(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function ve(e,t=""){const n=ne(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function ys(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function xs(e,t){const n=ne();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=ys(e,t))),r}function Dt(e){try{console.warn(e);return}catch{}}function At(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:hs(t)),n}function ws(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Ss(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Ne(e,t){return ne().getComputedStyle(e,null).getPropertyValue(t)}function It(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function ji(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ts(e,t){function n(r){r.target===e&&(t.call(e,r),e.removeEventListener("transitionend",n))}t&&e.addEventListener("transitionend",n)}function Ln(e,t,n){const r=ne();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function ke(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Rt(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}let an;function ks(){const e=ne(),t=ye();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Ni(){return an||(an=ks()),an}let on;function Es({userAgent:e}={}){const t=Ni(),n=ne(),r=n.navigator.platform,i=e||n.navigator.userAgent,a={ios:!1,android:!1},s=n.screen.width,c=n.screen.height,o=i.match(/(Android);?[\s\/]+([\d.]+)?/);let l=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!l&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r==="Win32";let p=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!l&&p&&t.touch&&g.indexOf(`${s}x${c}`)>=0&&(l=i.match(/(Version)\/([\d.]+)/),l||(l=[0,1,"13_0_0"]),p=!1),o&&!f&&(a.os="android",a.android=!0),(l||d||u)&&(a.os="ios",a.ios=!0),a}function Li(e={}){return on||(on=Es(e)),on}let sn;function Ps(){const e=ne(),t=Li();let n=!1;function r(){const c=e.navigator.userAgent.toLowerCase();return c.indexOf("safari")>=0&&c.indexOf("chrome")<0&&c.indexOf("android")<0}if(r()){const c=String(e.navigator.userAgent);if(c.includes("Version/")){const[o,l]=c.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=o<16||o===16&&l<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),s=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:s,isWebView:i}}function Di(){return sn||(sn=Ps()),sn}function Ms({swiper:e,on:t,emit:n}){const r=ne();let i=null,a=null;const s=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(u=>{a=r.requestAnimationFrame(()=>{const{width:d,height:f}=e;let p=d,g=f;u.forEach(({contentBoxSize:h,contentRect:S,target:b})=>{b&&b!==e.el||(p=S?S.width:(h[0]||h).inlineSize,g=S?S.height:(h[0]||h).blockSize)}),(p!==d||g!==f)&&s()})}),i.observe(e.el))},o=()=>{a&&r.cancelAnimationFrame(a),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},l=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){c();return}r.addEventListener("resize",s),r.addEventListener("orientationchange",l)}),t("destroy",()=>{o(),r.removeEventListener("resize",s),r.removeEventListener("orientationchange",l)})}function Os({swiper:e,extendParams:t,on:n,emit:r}){const i=[],a=ne(),s=(l,u={})=>{const d=a.MutationObserver||a.WebkitMutationObserver,f=new d(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const g=function(){r("observerUpdate",p[0])};a.requestAnimationFrame?a.requestAnimationFrame(g):a.setTimeout(g,0)});f.observe(l,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(f)},c=()=>{if(e.params.observer){if(e.params.observeParents){const l=ji(e.hostEl);for(let u=0;u<l.length;u+=1)s(l[u])}s(e.hostEl,{childList:e.params.observeSlideChildren}),s(e.wrapperEl,{attributes:!1})}},o=()=>{i.forEach(l=>{l.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",c),n("destroy",o)}var Cs={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...a){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,a)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(a,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(s=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(c=>{c.apply(i,[s,...r])}),t.eventsListeners&&t.eventsListeners[s]&&t.eventsListeners[s].forEach(c=>{c.apply(i,r)})}),t}};function _s(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Ne(r,"padding-left")||0,10)-parseInt(Ne(r,"padding-right")||0,10),n=n-parseInt(Ne(r,"padding-top")||0,10)-parseInt(Ne(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function $s(){const e=this;function t(E,M){return parseFloat(E.getPropertyValue(e.getDirectionLabel(M))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:s}=e,c=e.virtual&&n.virtual.enabled,o=c?e.virtual.slides.length:e.slides.length,l=ve(i,`.${e.params.slideClass}, swiper-slide`),u=c?e.virtual.slides.length:l.length;let d=[];const f=[],p=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let h=n.slidesOffsetAfter;typeof h=="function"&&(h=n.slidesOffsetAfter.call(e));const S=e.snapGrid.length,b=e.slidesGrid.length,y=e.size-g-h;let x=n.spaceBetween,P=-g,T=0,O=0;if(typeof y>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*y:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-g-h,l.forEach(E=>{a?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(yt(r,"--swiper-centered-offset-before",""),yt(r,"--swiper-centered-offset-after",""));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let w;const $=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<u;E+=1){w=0;const M=l[E];if(!(M&&(_&&e.grid.updateSlide(E,M,l),Ne(M,"display")==="none"))){if(c&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(w=n.virtual.slidesPerViewAutoSlideSize),w&&M&&(n.roundLengths&&(w=Math.floor(w)),M.style[e.getDirectionLabel("width")]=`${w}px`);else if(n.slidesPerView==="auto"){$&&(M.style[e.getDirectionLabel("width")]="");const j=getComputedStyle(M),z=M.style.transform,L=M.style.webkitTransform;if(z&&(M.style.transform="none"),L&&(M.style.webkitTransform="none"),n.roundLengths)w=e.isHorizontal()?Ln(M,"width"):Ln(M,"height");else{const D=t(j,"width"),A=t(j,"padding-left"),C=t(j,"padding-right"),k=t(j,"margin-left"),N=t(j,"margin-right"),I=j.getPropertyValue("box-sizing");if(I&&I==="border-box")w=D+k+N;else{const{clientWidth:H,offsetWidth:V}=M;w=D+A+C+k+N+(V-H)}}z&&(M.style.transform=z),L&&(M.style.webkitTransform=L),n.roundLengths&&(w=Math.floor(w))}else w=(y-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),M&&(M.style[e.getDirectionLabel("width")]=`${w}px`);M&&(M.swiperSlideSize=w),p.push(w),n.centeredSlides?(P=P+w/2+T/2+x,T===0&&E!==0&&(P=P-y/2-x),E===0&&(P=P-y/2-x),Math.abs(P)<1/1e3&&(P=0),n.roundLengths&&(P=Math.floor(P)),O%n.slidesPerGroup===0&&d.push(P),f.push(P)):(n.roundLengths&&(P=Math.floor(P)),(O-Math.min(e.params.slidesPerGroupSkip,O))%e.params.slidesPerGroup===0&&d.push(P),f.push(P),P=P+w+x),e.virtualSize+=w+x,T=w,O+=1}}if(e.virtualSize=Math.max(e.virtualSize,y)+h,a&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(w,d),!n.centeredSlides){const E=[];for(let M=0;M<d.length;M+=1){let j=d[M];n.roundLengths&&(j=Math.floor(j)),d[M]<=e.virtualSize-y&&E.push(j)}d=E,Math.floor(e.virtualSize-y)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-y)}if(c&&n.loop){const E=p[0]+x;if(n.slidesPerGroup>1){const M=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),j=E*n.slidesPerGroup;for(let z=0;z<M;z+=1)d.push(d[d.length-1]+j)}for(let M=0;M<e.virtual.slidesBefore+e.virtual.slidesAfter;M+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+E),f.push(f[f.length-1]+E),e.virtualSize+=E}if(d.length===0&&(d=[0]),x!==0){const E=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");l.filter((M,j)=>!n.cssMode||n.loop?!0:j!==l.length-1).forEach(M=>{M.style[E]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;p.forEach(j=>{E+=j+(x||0)}),E-=x;const M=E>y?E-y:0;d=d.map(j=>j<=0?-g:j>M?M+h:j)}if(n.centerInsufficientSlides){let E=0;p.forEach(j=>{E+=j+(x||0)}),E-=x;const M=(g||0)+(h||0);if(E+M<y){const j=(y-E-M)/2;d.forEach((z,L)=>{d[L]=z-j}),f.forEach((z,L)=>{f[L]=z+j})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){yt(r,"--swiper-centered-offset-before",`${-d[0]}px`),yt(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const E=-e.snapGrid[0],M=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(j=>j+E),e.slidesGrid=e.slidesGrid.map(j=>j+M)}if(u!==o&&e.emit("slidesLengthChange"),d.length!==S&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==b&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!c&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,M=e.el.classList.contains(E);u<=n.maxBackfaceHiddenSlides?M||e.el.classList.add(E):M&&e.el.classList.remove(E)}}function js(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=c=>r?t.slides[t.getSlideIndexByData(c)]:t.slides[c];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(c=>{n.push(c)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const c=t.activeIndex+a;if(c>t.slides.length&&!r)break;n.push(s(c))}else n.push(s(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const c=n[a].offsetHeight;i=c>i?c:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Ns(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const kr=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Ls(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let c=n.spaceBetween;typeof c=="string"&&c.indexOf("%")>=0?c=parseFloat(c.replace("%",""))/100*t.size:typeof c=="string"&&(c=parseFloat(c));for(let o=0;o<r.length;o+=1){const l=r[o];let u=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const d=(s+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+c),f=(s-a[0]+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+c),p=-(s-u),g=p+t.slidesSizesGrid[o],h=p>=0&&p<=t.size-t.slidesSizesGrid[o],S=p>=0&&p<t.size-1||g>1&&g<=t.size||p<=0&&g>=t.size;S&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(o)),kr(l,S,n.slideVisibleClass),kr(l,h,n.slideFullyVisibleClass),l.progress=i?-d:d,l.originalProgress=i?-f:f}}function Ds(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:s,progressLoop:c}=t;const o=a,l=s;if(r===0)i=0,a=!0,s=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;a=u||i<=0,s=d||i>=1,u&&(i=0),d&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),f=t.slidesGrid[u],p=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],h=Math.abs(e);h>=f?c=(h-f)/g:c=(h+g-p)/g,c>1&&(c-=1)}Object.assign(t,{progress:i,progressLoop:c,isBeginning:a,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!o&&t.emit("reachBeginning toEdge"),s&&!l&&t.emit("reachEnd toEdge"),(o&&!a||l&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}const ln=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function As(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,c=d=>ve(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let o,l,u;if(a)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),o=c(`[data-swiper-slide-index="${d}"]`)}else o=c(`[data-swiper-slide-index="${i}"]`);else s?(o=t.find(d=>d.column===i),u=t.find(d=>d.column===i+1),l=t.find(d=>d.column===i-1)):o=t[i];o&&(s||(u=Ss(o,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=ws(o,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!l===0&&(l=t[t.length-1]))),t.forEach(d=>{ln(d,d===o,n.slideActiveClass),ln(d,d===u,n.slideNextClass),ln(d,d===l,n.slidePrevClass)}),e.emitSlidesClasses()}const St=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},cn=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Dn=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,c=[s-t];c.push(...Array.from({length:t}).map((o,l)=>s+r+l)),e.slides.forEach((o,l)=>{c.includes(o.column)&&cn(e,l)});return}const a=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=a+t;s+=1){const c=(s%n+n)%n;(c<i||c>a)&&cn(e,c)}else for(let s=Math.max(i-t,0);s<=Math.min(a+t,n-1);s+=1)s!==i&&(s>a||s<i)&&cn(e,s)};function Is(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?r>=t[a]&&r<t[a+1]-(t[a+1]-t[a])/2?i=a:r>=t[a]&&r<t[a+1]&&(i=a+1):r>=t[a]&&(i=a);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Rs(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:s,snapIndex:c}=t;let o=e,l;const u=p=>{let g=p-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof o>"u"&&(o=Is(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,o);l=p+Math.floor((o-p)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),o===a&&!t.params.loop){l!==c&&(t.snapIndex=l,t.emit("snapIndexChange"));return}if(o===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(o);return}const d=t.grid&&i.grid&&i.grid.rows>1;let f;if(t.virtual&&i.virtual.enabled&&i.loop)f=u(o);else if(d){const p=t.slides.find(h=>h.column===o);let g=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(p),0)),f=Math.floor(g/i.grid.rows)}else if(t.slides[o]){const p=t.slides[o].getAttribute("data-swiper-slide-index");p?f=parseInt(p,10):f=o}else f=o;Object.assign(t,{previousSnapIndex:c,snapIndex:l,previousRealIndex:s,realIndex:f,previousIndex:a,activeIndex:o}),t.initialized&&Dn(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==f&&t.emit("realIndexChange"),t.emit("slideChange"))}function zs(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(c=>{!i&&c.matches&&c.matches(`.${r.slideClass}, swiper-slide`)&&(i=c)});let a=!1,s;if(i){for(let c=0;c<n.slides.length;c+=1)if(n.slides[c]===i){a=!0,s=c;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Fs={updateSize:_s,updateSlides:$s,updateAutoHeight:js,updateSlidesOffset:Ns,updateSlidesProgress:Ls,updateProgress:Ds,updateSlidesClasses:As,updateActiveIndex:Rs,updateClickedSlide:zs};function Hs(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=bs(a,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function qs(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:s}=n;let c=0,o=0;const l=0;n.isHorizontal()?c=r?-e:e:o=e,i.roundLengths&&(c=Math.floor(c),o=Math.floor(o)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?c:o,i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-c:-o:i.virtualTranslate||(n.isHorizontal()?c-=n.cssOverflowAdjustment():o-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${c}px, ${o}px, ${l}px)`);let u;const d=n.maxTranslate()-n.minTranslate();d===0?u=0:u=(e-n.minTranslate())/d,u!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function Ys(){return-this.snapGrid[0]}function Vs(){return-this.snapGrid[this.snapGrid.length-1]}function Bs(e=0,t=this.params.speed,n=!0,r=!0,i){const a=this,{params:s,wrapperEl:c}=a;if(a.animating&&s.preventInteractionOnTransition)return!1;const o=a.minTranslate(),l=a.maxTranslate();let u;if(r&&e>o?u=o:r&&e<l?u=l:u=e,a.updateProgress(u),s.cssMode){const d=a.isHorizontal();if(t===0)c[d?"scrollLeft":"scrollTop"]=-u;else{if(!a.support.smoothScroll)return _i({swiper:a,targetPosition:-u,side:d?"left":"top"}),!0;c.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(f){!a||a.destroyed||f.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var Gs={getTranslate:Hs,setTranslate:qs,minTranslate:Ys,maxTranslate:Vs,translateTo:Bs};function Ws(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Ai({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:a}=e;let s=n;s||(i>a?s="next":i<a?s="prev":s="reset"),e.emit(`transition${r}`),t&&s==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),s==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function Us(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ai({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function Qs(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ai({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var Xs={setTransition:Ws,transitionStart:Us,transitionEnd:Qs};function Ks(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const a=this;let s=e;s<0&&(s=0);const{params:c,snapGrid:o,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:g}=a;if(!g&&!r&&!i||a.destroyed||a.animating&&c.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=a.params.speed);const h=Math.min(a.params.slidesPerGroupSkip,s);let S=h+Math.floor((s-h)/a.params.slidesPerGroup);S>=o.length&&(S=o.length-1);const b=-o[S];if(c.normalizeSlideIndex)for(let _=0;_<l.length;_+=1){const w=-Math.floor(b*100),$=Math.floor(l[_]*100),E=Math.floor(l[_+1]*100);typeof l[_+1]<"u"?w>=$&&w<E-(E-$)/2?s=_:w>=$&&w<E&&(s=_+1):w>=$&&(s=_)}if(a.initialized&&s!==d&&(!a.allowSlideNext&&(f?b>a.translate&&b>a.minTranslate():b<a.translate&&b<a.minTranslate())||!a.allowSlidePrev&&b>a.translate&&b>a.maxTranslate()&&(d||0)!==s))return!1;s!==(u||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(b);let y;s>d?y="next":s<d?y="prev":y="reset";const x=a.virtual&&a.params.virtual.enabled;if(!(x&&i)&&(f&&-b===a.translate||!f&&b===a.translate))return a.updateActiveIndex(s),c.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),c.effect!=="slide"&&a.setTranslate(b),y!=="reset"&&(a.transitionStart(n,y),a.transitionEnd(n,y)),!1;if(c.cssMode){const _=a.isHorizontal(),w=f?b:-b;if(t===0)x&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),x&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[_?"scrollLeft":"scrollTop"]=w})):p[_?"scrollLeft":"scrollTop"]=w,x&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return _i({swiper:a,targetPosition:w,side:_?"left":"top"}),!0;p.scrollTo({[_?"left":"top"]:w,behavior:"smooth"})}return!0}const O=Di().isSafari;return x&&!i&&O&&a.isElement&&a.virtual.update(!1,!1,s),a.setTransition(t),a.setTranslate(b),a.updateActiveIndex(s),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,y),t===0?a.transitionEnd(n,y):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(w){!a||a.destroyed||w.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,y))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function Zs(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const a=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let c;if(a){const h=s*i.params.grid.rows;c=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===h).column}else c=i.getSlideIndexByData(s);const o=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:l,slidesOffsetBefore:u,slidesOffsetAfter:d}=i.params,f=l||!!u||!!d;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),f&&p%2===0&&(p=p+1));let g=o-c<p;if(f&&(g=g||c<Math.ceil(p/2)),r&&f&&i.params.slidesPerView!=="auto"&&!a&&(g=!1),g){const h=f?c<i.activeIndex?"prev":"next":c-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?c+1:c-o+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(a){const h=s*i.params.grid.rows;s=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===h).column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function Js(e,t=!0,n){const r=this,{enabled:i,params:a,animating:s}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let c=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(c=Math.max(r.slidesPerViewDynamic("current",!0),1));const o=r.activeIndex<a.slidesPerGroupSkip?1:c,l=r.virtual&&a.virtual.enabled;if(a.loop){if(s&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+o,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+o,e,t,n)}function el(e,t=!0,n){const r=this,{params:i,snapGrid:a,slidesGrid:s,rtlTranslate:c,enabled:o,animating:l}=r;if(!o||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=c?r.translate:-r.translate;function f(y){return y<0?-Math.floor(Math.abs(y)):Math.floor(y)}const p=f(d),g=a.map(y=>f(y)),h=i.freeMode&&i.freeMode.enabled;let S=a[g.indexOf(p)-1];if(typeof S>"u"&&(i.cssMode||h)){let y;a.forEach((x,P)=>{p>=x&&(y=P)}),typeof y<"u"&&(S=h?a[y]:a[y>0?y-1:y])}let b=0;if(typeof S<"u"&&(b=s.indexOf(S),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const y=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(y,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function tl(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function nl(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let a=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,a),c=s+Math.floor((a-s)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[c]){const l=i.snapGrid[c],u=i.snapGrid[c+1];o-l>(u-l)*r&&(a+=i.params.slidesPerGroup)}else{const l=i.snapGrid[c-1],u=i.snapGrid[c];o-l<=(u-l)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function rl(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),a;const s=e.isElement?"swiper-slide":`.${t.slideClass}`,c=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(a):i>(c?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(ve(n,`${s}[data-swiper-slide-index="${a}"]`)[0]),Ci(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var il={slideTo:Ks,slideToLoop:Zs,slideNext:Js,slidePrev:el,slideReset:tl,slideToClosest:nl,slideToClickedSlide:rl};function al(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const a=()=>{ve(i,`.${r.slideClass}, swiper-slide`).forEach((g,h)=>{g.setAttribute("data-swiper-slide-index",h)})},s=()=>{const p=ve(i,`.${r.slideBlankClass}`);p.forEach(g=>{g.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},c=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||c)&&s();const o=r.slidesPerGroup*(c?r.grid.rows:1),l=n.slides.length%o!==0,u=c&&n.slides.length%r.grid.rows!==0,d=p=>{for(let g=0;g<p;g+=1){const h=n.isElement?At("swiper-slide",[r.slideBlankClass]):At("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(h)}};if(l){if(r.loopAddBlankSlides){const p=o-n.slides.length%o;d(p),n.recalcSlides(),n.updateSlides()}else Dt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else if(u){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;d(p),n.recalcSlides(),n.updateSlides()}else Dt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else a();const f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:"next",initial:t})}function ol({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:a,byController:s,byMousewheel:c}={}){const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:l,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:p}=o,{centeredSlides:g,slidesOffsetBefore:h,slidesOffsetAfter:S,initialSlide:b}=p,y=g||!!h||!!S;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&p.virtual.enabled){t&&(!y&&o.snapIndex===0?o.slideTo(o.virtual.slides.length,0,!1,!0):y&&o.snapIndex<p.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0)),o.allowSlidePrev=u,o.allowSlideNext=d,o.emit("loopFix");return}let x=p.slidesPerView;x==="auto"?x=o.slidesPerViewDynamic():(x=Math.ceil(parseFloat(p.slidesPerView,10)),y&&x%2===0&&(x=x+1));const P=p.slidesPerGroupAuto?x:p.slidesPerGroup;let T=y?Math.max(P,Math.ceil(x/2)):P;T%P!==0&&(T+=P-T%P),T+=p.loopAdditionalSlides,o.loopedSlides=T;const O=o.grid&&p.grid&&p.grid.rows>1;l.length<x+T||o.params.effect==="cards"&&l.length<x+T*2?Dt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):O&&p.grid.fill==="row"&&Dt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],w=[],$=O?Math.ceil(l.length/p.grid.rows):l.length,E=a&&$-b<x&&!y;let M=E?b:o.activeIndex;typeof i>"u"?i=o.getSlideIndex(l.find(k=>k.classList.contains(p.slideActiveClass))):M=i;const j=n==="next"||!n,z=n==="prev"||!n;let L=0,D=0;const C=(O?l[i].column:i)+(y&&typeof r>"u"?-x/2+.5:0);if(C<T){L=Math.max(T-C,P);for(let k=0;k<T-C;k+=1){const N=k-Math.floor(k/$)*$;if(O){const I=$-N-1;for(let H=l.length-1;H>=0;H-=1)l[H].column===I&&_.push(H)}else _.push($-N-1)}}else if(C+x>$-T){D=Math.max(C-($-T*2),P),E&&(D=Math.max(D,x-$+b+1));for(let k=0;k<D;k+=1){const N=k-Math.floor(k/$)*$;O?l.forEach((I,H)=>{I.column===N&&w.push(H)}):w.push(N)}}if(o.__preventObserver__=!0,requestAnimationFrame(()=>{o.__preventObserver__=!1}),o.params.effect==="cards"&&l.length<x+T*2&&(w.includes(i)&&w.splice(w.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),z&&_.forEach(k=>{l[k].swiperLoopMoveDOM=!0,f.prepend(l[k]),l[k].swiperLoopMoveDOM=!1}),j&&w.forEach(k=>{l[k].swiperLoopMoveDOM=!0,f.append(l[k]),l[k].swiperLoopMoveDOM=!1}),o.recalcSlides(),p.slidesPerView==="auto"?o.updateSlides():O&&(_.length>0&&z||w.length>0&&j)&&o.slides.forEach((k,N)=>{o.grid.updateSlide(N,k,o.slides)}),p.watchSlidesProgress&&o.updateSlidesOffset(),t){if(_.length>0&&z){if(typeof e>"u"){const k=o.slidesGrid[M],I=o.slidesGrid[M+L]-k;c?o.setTranslate(o.translate-I):(o.slideTo(M+Math.ceil(L),0,!1,!0),r&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-I,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-I))}else if(r){const k=O?_.length/p.grid.rows:_.length;o.slideTo(o.activeIndex+k,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(w.length>0&&j)if(typeof e>"u"){const k=o.slidesGrid[M],I=o.slidesGrid[M-D]-k;c?o.setTranslate(o.translate-I):(o.slideTo(M-D,0,!1,!0),r&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-I,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-I))}else{const k=O?w.length/p.grid.rows:w.length;o.slideTo(o.activeIndex-k,0,!1,!0)}}if(o.allowSlidePrev=u,o.allowSlideNext=d,o.controller&&o.controller.control&&!s){const k={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach(N=>{!N.destroyed&&N.params.loop&&N.loopFix({...k,slideTo:N.params.slidesPerView===p.slidesPerView?t:!1})}):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...k,slideTo:o.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}o.emit("loopFix")}function sl(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const a=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[a]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var ll={loopCreate:al,loopFix:ol,loopDestroy:sl};function cl(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ul(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var dl={setGrabCursor:cl,unsetGrabCursor:ul};function fl(e,t=this){function n(r){if(!r||r===ye()||r===ne())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Er(e,t,n){const r=ne(),{params:i}=e,a=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return a&&(n<=s||n>=r.innerWidth-s)?a==="prevent"?(t.preventDefault(),!0):!1:!0}function pl(e){const t=this,n=ye();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Er(t,r,r.targetTouches[0].pageX);return}const{params:a,touches:s,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let o=r.target;if(a.touchEventsTarget==="wrapper"&&!xs(o,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const l=!!a.noSwipingClass&&a.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;l&&r.target&&r.target.shadowRoot&&u&&(o=u[0]);const d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(f?fl(d,o):o.closest(d))){t.allowClick=!0;return}if(a.swipeHandler&&!o.closest(a.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const p=s.currentX,g=s.currentY;if(!Er(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=p,s.startY=g,i.touchStartTime=Lt(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let h=!0;o.matches(i.focusableElements)&&(h=!1,o.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==o&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!o.matches(i.focusableElements))&&n.activeElement.blur();const S=h&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||S)&&!o.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function hl(e){const t=ye(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:s,enabled:c}=n;if(!c||!i.simulateTouch&&e.pointerType==="mouse")return;let o=e;if(o.originalEvent&&(o=o.originalEvent),o.type==="pointermove"&&(r.touchId!==null||o.pointerId!==r.pointerId))return;let l;if(o.type==="touchmove"){if(l=[...o.changedTouches].find(T=>T.identifier===r.touchId),!l||l.identifier!==r.touchId)return}else l=o;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",o);return}const u=l.pageX,d=l.pageY;if(o.preventedByNestedSwiper){a.startX=u,a.startY=d;return}if(!n.allowTouchMove){o.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=Lt());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(s&&(u>a.startX&&-n.translate<=n.maxTranslate()||u<a.startX&&-n.translate>=n.minTranslate()))return;if(!s&&(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==o.target&&o.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&o.target===t.activeElement&&o.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",o),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;const f=a.currentX-a.startX,p=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+p*p>=25&&(T=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",o),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||o.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&o.cancelable&&o.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&o.stopPropagation();let g=n.isHorizontal()?f:p,h=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(g=Math.abs(g)*(s?1:-1),h=Math.abs(h)*(s?1:-1)),a.diff=g,g*=i.touchRatio,s&&(g=-g,h=-h);const S=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=h>0?"prev":"next";const b=n.params.loop&&!i.cssMode,y=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(b&&y&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",o)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&b&&y&&Math.abs(g)>=1){Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",o),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let x=!0,P=i.resistanceRatio;if(i.touchReleaseOnEdges&&(P=0),g>0?(b&&y&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**P))):g<0&&(b&&y&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**P))),x&&(o.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function ml(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(T=>T.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:c,rtlTranslate:o,slidesGrid:l,enabled:u}=t;if(!u||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Lt(),f=d-n.touchStartTime;if(t.allowClick){const T=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(T&&T[0]||r.target,T),t.emit("tap click",r),f<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Lt(),Ci(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||c.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(s.followFinger?p=o?t.translate:-t.translate:p=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const g=p>=-t.maxTranslate()&&!t.params.loop;let h=0,S=t.slidesSizesGrid[0];for(let T=0;T<l.length;T+=T<s.slidesPerGroupSkip?1:s.slidesPerGroup){const O=T<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof l[T+O]<"u"?(g||p>=l[T]&&p<l[T+O])&&(h=T,S=l[T+O]-l[T]):(g||p>=l[T])&&(h=T,S=l[l.length-1]-l[l.length-2])}let b=null,y=null;s.rewind&&(t.isBeginning?y=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(b=0));const x=(p-l[h])/S,P=h<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(f>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?b:h+P):t.slideTo(h)),t.swipeDirection==="prev"&&(x>1-s.longSwipesRatio?t.slideTo(h+P):y!==null&&x<0&&Math.abs(x)>s.longSwipesRatio?t.slideTo(y):t.slideTo(h))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(h+P):t.slideTo(h):(t.swipeDirection==="next"&&t.slideTo(b!==null?b:h+P),t.swipeDirection==="prev"&&t.slideTo(y!==null?y:h))}}function Pr(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const c=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!c?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function gl(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function bl(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const a=e.maxTranslate()-e.minTranslate();a===0?i=0:i=(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function vl(e){const t=this;St(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function yl(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Ii=(e,t)=>{const n=ye(),{params:r,el:i,wrapperEl:a,device:s}=e,c=!!r.nested,o=t==="on"?"addEventListener":"removeEventListener",l=t;!i||typeof i=="string"||(n[o]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:c}),i[o]("touchstart",e.onTouchStart,{passive:!1}),i[o]("pointerdown",e.onTouchStart,{passive:!1}),n[o]("touchmove",e.onTouchMove,{passive:!1,capture:c}),n[o]("pointermove",e.onTouchMove,{passive:!1,capture:c}),n[o]("touchend",e.onTouchEnd,{passive:!0}),n[o]("pointerup",e.onTouchEnd,{passive:!0}),n[o]("pointercancel",e.onTouchEnd,{passive:!0}),n[o]("touchcancel",e.onTouchEnd,{passive:!0}),n[o]("pointerout",e.onTouchEnd,{passive:!0}),n[o]("pointerleave",e.onTouchEnd,{passive:!0}),n[o]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[o]("click",e.onClick,!0),r.cssMode&&a[o]("scroll",e.onScroll),r.updateOnWindowResize?e[l](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Pr,!0):e[l]("observerUpdate",Pr,!0),i[o]("load",e.onLoad,{capture:!0}))};function xl(){const e=this,{params:t}=e;e.onTouchStart=pl.bind(e),e.onTouchMove=hl.bind(e),e.onTouchEnd=ml.bind(e),e.onDocumentTouchStart=yl.bind(e),t.cssMode&&(e.onScroll=bl.bind(e)),e.onClick=gl.bind(e),e.onLoad=vl.bind(e),Ii(e,"on")}function wl(){Ii(this,"off")}var Sl={attachEvents:xl,detachEvents:wl};const Mr=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Tl(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const s=ye(),c=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",o=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:s.querySelector(r.breakpointsBase),l=e.getBreakpoint(a,c,o);if(!l||e.currentBreakpoint===l)return;const d=(l in a?a[l]:void 0)||e.originalParams,f=Mr(e,r),p=Mr(e,d),g=e.params.grabCursor,h=d.grabCursor,S=r.enabled;f&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!f&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!h?e.unsetGrabCursor():!g&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(O=>{if(typeof d[O]>"u")return;const _=r[O]&&r[O].enabled,w=d[O]&&d[O].enabled;_&&!w&&e[O].disable(),!_&&w&&e[O].enable()});const b=d.direction&&d.direction!==r.direction,y=r.loop&&(d.slidesPerView!==r.slidesPerView||b),x=r.loop;b&&n&&e.changeDirection(),oe(e.params,d);const P=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),S&&!P?e.disable():!S&&P&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",d),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&T?(e.loopCreate(t),e.updateSlides()):x&&!T&&e.loopDestroy()),e.emit("breakpoint",d)}function kl(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=ne(),a=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(c=>{if(typeof c=="string"&&c.indexOf("@")===0){const o=parseFloat(c.substr(1));return{value:a*o,point:c}}return{value:c,point:c}});s.sort((c,o)=>parseInt(c.value,10)-parseInt(o.value,10));for(let c=0;c<s.length;c+=1){const{point:o,value:l}=s[c];t==="window"?i.matchMedia(`(min-width: ${l}px)`).matches&&(r=o):l<=n.clientWidth&&(r=o)}return r||"max"}var El={setBreakpoint:Tl,getBreakpoint:kl};function Pl(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function Ml(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,s=Pl(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function Ol(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var Cl={addClasses:Ml,removeClasses:Ol};function _l(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,a=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var $l={checkOverflow:_l},An={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function jl(e,t){return function(r={}){const i=Object.keys(r)[0],a=r[i];if(typeof a!="object"||a===null){oe(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in a)){oe(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),oe(t,r)}}const un={eventsEmitter:Cs,update:Fs,translate:Gs,transition:Xs,slide:il,loop:ll,grabCursor:dl,events:Sl,breakpoints:El,checkOverflow:$l,classes:Cl},dn={};let Zn=class Ee{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=oe({},r),n&&!r.el&&(r.el=n);const i=ye();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const o=[];return i.querySelectorAll(r.el).forEach(l=>{const u=oe({},r,{el:l});o.push(new Ee(u))}),o}const a=this;a.__swiper__=!0,a.support=Ni(),a.device=Li({userAgent:r.userAgent}),a.browser=Di(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],r.modules&&Array.isArray(r.modules)&&a.modules.push(...r.modules);const s={};a.modules.forEach(o=>{o({params:r,swiper:a,extendParams:jl(r,s),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=oe({},An,s);return a.params=oe({},c,dn,r),a.originalParams=oe({},a.params),a.passedParams=oe({},r),a.params&&a.params.on&&Object.keys(a.params.on).forEach(o=>{a.on(o,a.params.on[o])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=ve(n,`.${r.slideClass}, swiper-slide`),a=It(i[0]);return It(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=ve(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:a,slidesGrid:s,slidesSizesGrid:c,size:o,activeIndex:l}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=a[l]?Math.ceil(a[l].swiperSlideSize):0,f;for(let p=l+1;p<a.length;p+=1)a[p]&&!f&&(d+=Math.ceil(a[p].swiperSlideSize),u+=1,d>o&&(f=!0));for(let p=l-1;p>=0;p-=1)a[p]&&!f&&(d+=a[p].swiperSlideSize,u+=1,d>o&&(f=!0))}else if(t==="current")for(let d=l+1;d<a.length;d+=1)(n?s[d]+c[d]-s[l]<o:s[d]-s[l]<o)&&(u+=1);else for(let d=l-1;d>=0;d-=1)s[l]-s[d]<o&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&St(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,c=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(c),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(s.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ve(r,i())[0];return!s&&n.params.createElements&&(s=At("div",n.params.wrapperClass),r.append(s),ve(r,`.${n.params.slideClass}`).forEach(c=>{s.append(c)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Ne(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Ne(r,"direction")==="rtl"),wrongRTL:Ne(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(a=>{a.complete?St(n,a):a.addEventListener("load",s=>{St(n,s.target)})}),Dn(n),n.initialized=!0,Dn(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:a,wrapperEl:s,slides:c}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),s&&s.removeAttribute("style"),c&&c.length&&c.forEach(o=>{o.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),o.removeAttribute("style"),o.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(o=>{r.off(o)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),ms(r)),r.destroyed=!0),null}static extendDefaults(t){oe(dn,t)}static get extendedDefaults(){return dn}static get defaults(){return An}static installModule(t){Ee.prototype.__modules__||(Ee.prototype.__modules__=[]);const n=Ee.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Ee.installModule(n)),Ee):(Ee.installModule(t),Ee)}};Object.keys(un).forEach(e=>{Object.keys(un[e]).forEach(t=>{Zn.prototype[t]=un[e][t]})});Zn.use([Ms,Os]);const Ri=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function qe(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function We(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:qe(t[r])&&qe(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:We(e[r],t[r]):e[r]=t[r]})}function zi(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Fi(e={}){return e.pagination&&typeof e.pagination.el>"u"}function Hi(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function qi(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function Nl(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function Ll({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:a,scrollbarEl:s,paginationEl:c}){const o=r.filter(w=>w!=="children"&&w!=="direction"&&w!=="wrapperClass"),{params:l,pagination:u,navigation:d,scrollbar:f,virtual:p,thumbs:g}=e;let h,S,b,y,x,P,T,O;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&l.thumbs&&(!l.thumbs.swiper||l.thumbs.swiper.destroyed)&&(h=!0),r.includes("controller")&&n.controller&&n.controller.control&&l.controller&&!l.controller.control&&(S=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||c)&&(l.pagination||l.pagination===!1)&&u&&!u.el&&(b=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||s)&&(l.scrollbar||l.scrollbar===!1)&&f&&!f.el&&(y=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||a)&&(n.navigation.nextEl||i)&&(l.navigation||l.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=w=>{e[w]&&(e[w].destroy(),w==="navigation"?(e.isElement&&(e[w].prevEl.remove(),e[w].nextEl.remove()),l[w].prevEl=void 0,l[w].nextEl=void 0,e[w].prevEl=void 0,e[w].nextEl=void 0):(e.isElement&&e[w].el.remove(),l[w].el=void 0,e[w].el=void 0))};r.includes("loop")&&e.isElement&&(l.loop&&!n.loop?P=!0:!l.loop&&n.loop?T=!0:O=!0),o.forEach(w=>{if(qe(l[w])&&qe(n[w]))Object.assign(l[w],n[w]),(w==="navigation"||w==="pagination"||w==="scrollbar")&&"enabled"in n[w]&&!n[w].enabled&&_(w);else{const $=n[w];($===!0||$===!1)&&(w==="navigation"||w==="pagination"||w==="scrollbar")?$===!1&&_(w):l[w]=n[w]}}),o.includes("controller")&&!S&&e.controller&&e.controller.control&&l.controller&&l.controller.control&&(e.controller.control=l.controller.control),r.includes("children")&&t&&p&&l.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&l.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&l.loop&&(O=!0),h&&g.init()&&g.update(!0),S&&(e.controller.control=l.controller.control),b&&(e.isElement&&(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-pagination"),c.part.add("pagination"),e.el.appendChild(c)),c&&(l.pagination.el=c),u.init(),u.render(),u.update()),y&&(e.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),e.el.appendChild(s)),s&&(l.scrollbar.el=s),f.init(),f.updateSize(),f.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Rt(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),Rt(a,e.navigation.arrowSvg),a.part.add("button-prev"),e.el.appendChild(a))),i&&(l.navigation.nextEl=i),a&&(l.navigation.prevEl=a),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(P||O)&&e.loopDestroy(),(T||O)&&e.loopCreate(),e.update()}function Dl(e={},t=!0){const n={on:{}},r={},i={};We(n,An),n._emitClasses=!0,n.init=!1;const a={},s=Ri.map(o=>o.replace(/_/,"")),c=Object.assign({},e);return Object.keys(c).forEach(o=>{typeof e[o]>"u"||(s.indexOf(o)>=0?qe(e[o])?(n[o]={},i[o]={},We(n[o],e[o]),We(i[o],e[o])):(n[o]=e[o],i[o]=e[o]):o.search(/on[A-Z]/)===0&&typeof e[o]=="function"?t?r[`${o[2].toLowerCase()}${o.substr(3)}`]=e[o]:n.on[`${o[2].toLowerCase()}${o.substr(3)}`]=e[o]:a[o]=e[o])}),["navigation","pagination","scrollbar"].forEach(o=>{n[o]===!0&&(n[o]={}),n[o]===!1&&delete n[o]}),{params:n,passedParams:i,rest:a,events:r}}function Al({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:a},s){zi(s)&&t&&n&&(a.params.navigation.nextEl=t,a.originalParams.navigation.nextEl=t,a.params.navigation.prevEl=n,a.originalParams.navigation.prevEl=n),Fi(s)&&r&&(a.params.pagination.el=r,a.originalParams.pagination.el=r),Hi(s)&&i&&(a.params.scrollbar.el=i,a.originalParams.scrollbar.el=i),a.init(e)}function Il(e,t,n,r,i){const a=[];if(!t)return a;const s=o=>{a.indexOf(o)<0&&a.push(o)};if(n&&r){const o=r.map(i),l=n.map(i);o.join("")!==l.join("")&&s("children"),r.length!==n.length&&s("children")}return Ri.filter(o=>o[0]==="_").map(o=>o.replace(/_/,"")).forEach(o=>{if(o in e&&o in t)if(qe(e[o])&&qe(t[o])){const l=Object.keys(e[o]),u=Object.keys(t[o]);l.length!==u.length?s(o):(l.forEach(d=>{e[o][d]!==t[o][d]&&s(o)}),u.forEach(d=>{e[o][d]!==t[o][d]&&s(o)}))}else e[o]!==t[o]&&s(o)}),a}const Rl=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function zt(){return zt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zt.apply(this,arguments)}function Yi(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Vi(e){const t=[];return R.Children.toArray(e).forEach(n=>{Yi(n)?t.push(n):n.props&&n.props.children&&Vi(n.props.children).forEach(r=>t.push(r))}),t}function zl(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return R.Children.toArray(e).forEach(r=>{if(Yi(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Vi(r.props.children);i.length>0?i.forEach(a=>t.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Fl(e,t,n){if(!n)return null;const r=u=>{let d=u;return u<0?d=t.length+u:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:s}=n,c=e.params.loop?-t.length:0,o=e.params.loop?t.length*2:t.length,l=[];for(let u=c;u<o;u+=1)u>=a&&u<=s&&l.push(t[r(u)]);return l.map((u,d)=>R.cloneElement(u,{swiper:e,style:i,key:u.props.virtualIndex||u.key||`slide-${d}`}))}function rt(e,t){return typeof window>"u"?v.useEffect(e,t):v.useLayoutEffect(e,t)}const Or=v.createContext(null),Hl=v.createContext(null),Bi=v.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...a}={},s)=>{let c=!1;const[o,l]=v.useState("swiper"),[u,d]=v.useState(null),[f,p]=v.useState(!1),g=v.useRef(!1),h=v.useRef(null),S=v.useRef(null),b=v.useRef(null),y=v.useRef(null),x=v.useRef(null),P=v.useRef(null),T=v.useRef(null),O=v.useRef(null),{params:_,passedParams:w,rest:$,events:E}=Dl(a),{slides:M,slots:j}=zl(r),z=()=>{p(!f)};Object.assign(_.on,{_containerClasses(k,N){l(N)}});const L=()=>{Object.assign(_.on,E),c=!0;const k={..._};if(delete k.wrapperClass,S.current=new Zn(k),S.current.virtual&&S.current.params.virtual.enabled){S.current.virtual.slides=M;const N={cache:!1,slides:M,renderExternal:d,renderExternalUpdate:!1};We(S.current.params.virtual,N),We(S.current.originalParams.virtual,N)}};h.current||L(),S.current&&S.current.on("_beforeBreakpoint",z);const D=()=>{c||!E||!S.current||Object.keys(E).forEach(k=>{S.current.on(k,E[k])})},A=()=>{!E||!S.current||Object.keys(E).forEach(k=>{S.current.off(k,E[k])})};v.useEffect(()=>()=>{S.current&&S.current.off("_beforeBreakpoint",z)}),v.useEffect(()=>{!g.current&&S.current&&(S.current.emitSlidesClasses(),g.current=!0)}),rt(()=>{if(s&&(s.current=h.current),!!h.current)return S.current.destroyed&&L(),Al({el:h.current,nextEl:x.current,prevEl:P.current,paginationEl:T.current,scrollbarEl:O.current,swiper:S.current},_),i&&!S.current.destroyed&&i(S.current),()=>{S.current&&!S.current.destroyed&&S.current.destroy(!0,!1)}},[]),rt(()=>{D();const k=Il(w,b.current,M,y.current,N=>N.key);return b.current=w,y.current=M,k.length&&S.current&&!S.current.destroyed&&Ll({swiper:S.current,slides:M,passedParams:w,changedParams:k,nextEl:x.current,prevEl:P.current,scrollbarEl:O.current,paginationEl:T.current}),()=>{A()}}),rt(()=>{Rl(S.current)},[u]);function C(){return _.virtual?Fl(S.current,M,u):M.map((k,N)=>R.cloneElement(k,{swiper:S.current,swiperSlideIndex:N}))}return R.createElement(t,zt({ref:h,className:qi(`${o}${e?` ${e}`:""}`)},$),R.createElement(Hl.Provider,{value:S.current},j["container-start"],R.createElement(n,{className:Nl(_.wrapperClass)},j["wrapper-start"],C(),j["wrapper-end"]),zi(_)&&R.createElement(R.Fragment,null,R.createElement("div",{ref:P,className:"swiper-button-prev"}),R.createElement("div",{ref:x,className:"swiper-button-next"})),Hi(_)&&R.createElement("div",{ref:O,className:"swiper-scrollbar"}),Fi(_)&&R.createElement("div",{ref:T,className:"swiper-pagination"}),j["container-end"]))});Bi.displayName="Swiper";const Gi=v.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:a,virtualIndex:s,swiperSlideIndex:c,...o}={},l)=>{const u=v.useRef(null),[d,f]=v.useState("swiper-slide"),[p,g]=v.useState(!1);function h(x,P,T){P===u.current&&f(T)}rt(()=>{if(typeof c<"u"&&(u.current.swiperSlideIndex=c),l&&(l.current=u.current),!(!u.current||!r)){if(r.destroyed){d!=="swiper-slide"&&f("swiper-slide");return}return r.on("_slideClass",h),()=>{r&&r.off("_slideClass",h)}}}),rt(()=>{r&&u.current&&!r.destroyed&&f(r.getSlideClasses(u.current))},[r]);const S={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},b=()=>typeof t=="function"?t(S):t,y=()=>{g(!0)};return R.createElement(e,zt({ref:u,className:qi(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":s,onLoad:y},o),i&&R.createElement(Or.Provider,{value:S},R.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},b(),a&&!p&&R.createElement("div",{className:"swiper-lazy-preloader"}))),!i&&R.createElement(Or.Provider,{value:S},b(),a&&!p&&R.createElement("div",{className:"swiper-lazy-preloader"})))});Gi.displayName="SwiperSlide";function ql(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=ve(e.el,`.${r[i]}`)[0];a||(a=At("div",r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function Ke(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function Yl({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:b=>b,formatFractionTotal:b=>b,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let a,s=0;function c(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function o(b,y){const{bulletActiveClass:x}=e.params.pagination;b&&(b=b[`${y==="prev"?"previous":"next"}ElementSibling`],b&&(b.classList.add(`${x}-${y}`),b=b[`${y==="prev"?"previous":"next"}ElementSibling`],b&&b.classList.add(`${x}-${y}-${y}`)))}function l(b,y,x){if(b=b%x,y=y%x,y===b+1)return"next";if(y===b-1)return"previous"}function u(b){const y=b.target.closest(Ke(e.params.pagination.bulletClass));if(!y)return;b.preventDefault();const x=It(y)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const P=l(e.realIndex,x,e.slides.length);P==="next"?e.slideNext():P==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const b=e.rtl,y=e.params.pagination;if(c())return;let x=e.pagination.el;x=ke(x);let P,T;const O=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(O/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,P=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(P=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,P=e.activeIndex||0),y.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const w=e.pagination.bullets;let $,E,M;if(y.dynamicBullets&&(a=Ln(w[0],e.isHorizontal()?"width":"height"),x.forEach(j=>{j.style[e.isHorizontal()?"width":"height"]=`${a*(y.dynamicMainBullets+4)}px`}),y.dynamicMainBullets>1&&T!==void 0&&(s+=P-(T||0),s>y.dynamicMainBullets-1?s=y.dynamicMainBullets-1:s<0&&(s=0)),$=Math.max(P-s,0),E=$+(Math.min(w.length,y.dynamicMainBullets)-1),M=(E+$)/2),w.forEach(j=>{const z=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${y.bulletActiveClass}${L}`)].map(L=>typeof L=="string"&&L.includes(" ")?L.split(" "):L).flat();j.classList.remove(...z)}),x.length>1)w.forEach(j=>{const z=It(j);z===P?j.classList.add(...y.bulletActiveClass.split(" ")):e.isElement&&j.setAttribute("part","bullet"),y.dynamicBullets&&(z>=$&&z<=E&&j.classList.add(...`${y.bulletActiveClass}-main`.split(" ")),z===$&&o(j,"prev"),z===E&&o(j,"next"))});else{const j=w[P];if(j&&j.classList.add(...y.bulletActiveClass.split(" ")),e.isElement&&w.forEach((z,L)=>{z.setAttribute("part",L===P?"bullet-active":"bullet")}),y.dynamicBullets){const z=w[$],L=w[E];for(let D=$;D<=E;D+=1)w[D]&&w[D].classList.add(...`${y.bulletActiveClass}-main`.split(" "));o(z,"prev"),o(L,"next")}}if(y.dynamicBullets){const j=Math.min(w.length,y.dynamicMainBullets+4),z=(a*j-a)/2-M*a,L=b?"right":"left";w.forEach(D=>{D.style[e.isHorizontal()?L:"top"]=`${z}px`})}}x.forEach((w,$)=>{if(y.type==="fraction"&&(w.querySelectorAll(Ke(y.currentClass)).forEach(E=>{E.textContent=y.formatFractionCurrent(P+1)}),w.querySelectorAll(Ke(y.totalClass)).forEach(E=>{E.textContent=y.formatFractionTotal(_)})),y.type==="progressbar"){let E;y.progressbarOpposite?E=e.isHorizontal()?"vertical":"horizontal":E=e.isHorizontal()?"horizontal":"vertical";const M=(P+1)/_;let j=1,z=1;E==="horizontal"?j=M:z=M,w.querySelectorAll(Ke(y.progressbarFillClass)).forEach(L=>{L.style.transform=`translate3d(0,0,0) scaleX(${j}) scaleY(${z})`,L.style.transitionDuration=`${e.params.speed}ms`})}y.type==="custom"&&y.renderCustom?(Rt(w,y.renderCustom(e,P+1,_)),$===0&&r("paginationRender",w)):($===0&&r("paginationRender",w),r("paginationUpdate",w)),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass)})}function f(){const b=e.params.pagination;if(c())return;const y=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=ke(x);let P="";if(b.type==="bullets"){let T=e.params.loop?Math.ceil(y/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>y&&(T=y);for(let O=0;O<T;O+=1)b.renderBullet?P+=b.renderBullet.call(e,O,b.bulletClass):P+=`<${b.bulletElement} ${e.isElement?'part="bullet"':""} class="${b.bulletClass}"></${b.bulletElement}>`}b.type==="fraction"&&(b.renderFraction?P=b.renderFraction.call(e,b.currentClass,b.totalClass):P=`<span class="${b.currentClass}"></span> / <span class="${b.totalClass}"></span>`),b.type==="progressbar"&&(b.renderProgressbar?P=b.renderProgressbar.call(e,b.progressbarFillClass):P=`<span class="${b.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(T=>{b.type!=="custom"&&Rt(T,P||""),b.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(Ke(b.bulletClass)))}),b.type!=="custom"&&r("paginationRender",x[0])}function p(){e.params.pagination=ql(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const b=e.params.pagination;if(!b.el)return;let y;typeof b.el=="string"&&e.isElement&&(y=e.el.querySelector(b.el)),!y&&typeof b.el=="string"&&(y=[...document.querySelectorAll(b.el)]),y||(y=b.el),!(!y||y.length===0)&&(e.params.uniqueNavElements&&typeof b.el=="string"&&Array.isArray(y)&&y.length>1&&(y=[...e.el.querySelectorAll(b.el)],y.length>1&&(y=y.find(x=>ji(x,".swiper")[0]===e.el))),Array.isArray(y)&&y.length===1&&(y=y[0]),Object.assign(e.pagination,{el:y}),y=ke(y),y.forEach(x=>{b.type==="bullets"&&b.clickable&&x.classList.add(...(b.clickableClass||"").split(" ")),x.classList.add(b.modifierClass+b.type),x.classList.add(e.isHorizontal()?b.horizontalClass:b.verticalClass),b.type==="bullets"&&b.dynamicBullets&&(x.classList.add(`${b.modifierClass}${b.type}-dynamic`),s=0,b.dynamicMainBullets<1&&(b.dynamicMainBullets=1)),b.type==="progressbar"&&b.progressbarOpposite&&x.classList.add(b.progressbarOppositeClass),b.clickable&&x.addEventListener("click",u),e.enabled||x.classList.add(b.lockClass)}))}function g(){const b=e.params.pagination;if(c())return;let y=e.pagination.el;y&&(y=ke(y),y.forEach(x=>{x.classList.remove(b.hiddenClass),x.classList.remove(b.modifierClass+b.type),x.classList.remove(e.isHorizontal()?b.horizontalClass:b.verticalClass),b.clickable&&(x.classList.remove(...(b.clickableClass||"").split(" ")),x.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...b.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const b=e.params.pagination;let{el:y}=e.pagination;y=ke(y),y.forEach(x=>{x.classList.remove(b.horizontalClass,b.verticalClass),x.classList.add(e.isHorizontal()?b.horizontalClass:b.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?S():(p(),f(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{f(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:b}=e.pagination;b&&(b=ke(b),b.forEach(y=>y.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(b,y)=>{const x=y.target,P=ke(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&P&&P.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const T=P[0].classList.contains(e.params.pagination.hiddenClass);r(T===!0?"paginationShow":"paginationHide"),P.forEach(O=>O.classList.toggle(e.params.pagination.hiddenClass))}});const h=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:b}=e.pagination;b&&(b=ke(b),b.forEach(y=>y.classList.remove(e.params.pagination.paginationDisabledClass))),p(),f(),d()},S=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:b}=e.pagination;b&&(b=ke(b),b.forEach(y=>y.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:h,disable:S,render:f,update:d,init:p,destroy:g})}function Vl({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,s,c=i&&i.autoplay?i.autoplay.delay:3e3,o=i&&i.autoplay?i.autoplay.delay:3e3,l,u=new Date().getTime(),d,f,p,g,h,S,b;function y(C){!e||e.destroyed||!e.wrapperEl||C.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",y),!(b||C.detail&&C.detail.bySwiperTouchMove)&&$())}const x=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(o=l,d=!1);const C=e.autoplay.paused?l:u+o-new Date().getTime();e.autoplay.timeLeft=C,r("autoplayTimeLeft",C,C/c),s=requestAnimationFrame(()=>{x()})},P=()=>{let C;return e.virtual&&e.params.virtual.enabled?C=e.slides.find(N=>N.classList.contains("swiper-slide-active")):C=e.slides[e.activeIndex],C?parseInt(C.getAttribute("data-swiper-autoplay"),10):void 0},T=C=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(s),x();let k=typeof C>"u"?e.params.autoplay.delay:C;c=e.params.autoplay.delay,o=e.params.autoplay.delay;const N=P();!Number.isNaN(N)&&N>0&&typeof C>"u"&&(k=N,c=N,o=N),l=k;const I=e.params.speed,H=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),r("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return k>0?(clearTimeout(a),a=setTimeout(()=>{H()},k)):requestAnimationFrame(()=>{H()}),k},O=()=>{u=new Date().getTime(),e.autoplay.running=!0,T(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(s),r("autoplayStop")},w=(C,k)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),C||(S=!0);const N=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",y):$()};if(e.autoplay.paused=!0,k){h&&(l=e.params.autoplay.delay),h=!1,N();return}l=(l||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&l<0&&!e.params.loop)&&(l<0&&(l=0),N())},$=()=>{e.isEnd&&l<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),S?(S=!1,T(l)):T(),e.autoplay.paused=!1,r("autoplayResume"))},E=()=>{if(e.destroyed||!e.autoplay.running)return;const C=ye();C.visibilityState==="hidden"&&(S=!0,w(!0)),C.visibilityState==="visible"&&$()},M=C=>{C.pointerType==="mouse"&&(S=!0,b=!0,!(e.animating||e.autoplay.paused)&&w(!0))},j=C=>{C.pointerType==="mouse"&&(b=!1,e.autoplay.paused&&$())},z=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",M),e.el.addEventListener("pointerleave",j))},L=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",M),e.el.removeEventListener("pointerleave",j))},D=()=>{ye().addEventListener("visibilitychange",E)},A=()=>{ye().removeEventListener("visibilitychange",E)};n("init",()=>{e.params.autoplay.enabled&&(z(),D(),O())}),n("destroy",()=>{L(),A(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(p||S)&&$()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():w(!0,!0)}),n("beforeTransitionStart",(C,k,N)=>{e.destroyed||!e.autoplay.running||(N||!e.params.autoplay.disableOnInteraction?w(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}f=!0,p=!1,S=!1,g=setTimeout(()=>{S=!0,p=!0,w(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(g),clearTimeout(a),e.params.autoplay.disableOnInteraction){p=!1,f=!1;return}p&&e.params.cssMode&&$(),p=!1,f=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||(h=!0)}),Object.assign(e.autoplay,{start:O,stop:_,pause:w,resume:$})}function Bl(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:s,perspective:c,recreateShadows:o,getEffectParams:l}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),c&&c()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const d=s?s():{};Object.assign(n.params,d),Object.assign(n.originalParams,d)}),r("setTranslate _virtualUpdated",()=>{n.params.effect===t&&i()}),r("setTransition",(d,f)=>{n.params.effect===t&&a(f)}),r("transitionEnd",()=>{if(n.params.effect===t&&o){if(!l||!l().slideShadows)return;n.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),o()}});let u;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)}))})}function Gl(e,t){const n=$i(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Wl({swiper:e,duration:t,transformElements:n,allSlides:r}){const{activeIndex:i}=e;if(e.params.virtualTranslate&&t!==0){let a=!1,s;s=n,s.forEach(c=>{Ts(c,()=>{if(a||!e||e.destroyed)return;a=!0,e.animating=!1;const o=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(o)})})}}function Ul({swiper:e,extendParams:t,on:n}){t({fadeEffect:{crossFade:!1}}),Bl({effect:"fade",swiper:e,on:n,setTranslate:()=>{const{slides:a}=e,s=e.params.fadeEffect;for(let c=0;c<a.length;c+=1){const o=e.slides[c];let u=-o.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let d=0;e.isHorizontal()||(d=u,u=0);const f=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(o.progress),0):1+Math.min(Math.max(o.progress,-1),0),p=Gl(s,o);p.style.opacity=f,p.style.transform=`translate3d(${u}px, ${d}px, 0px)`}},setTransition:a=>{const s=e.slides.map(c=>$i(c));s.forEach(c=>{c.style.transitionDuration=`${a}ms`}),Wl({swiper:e,duration:a,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const Ql=({items:e,hideAds:t=!1,isPartialShow:n=!1,hideHighlight:r=!1})=>m.jsxs("div",{className:"relative",children:[m.jsx(Bi,{effect:"fade",speed:2e3,fadeEffect:{crossFade:!0},autoplay:{delay:3500,disableOnInteraction:!1},pagination:{clickable:!0,el:".custom-pagination",bulletClass:"size-2! bg-gray-100 rounded-sm! mr-1! px-0! flex items-center space-x-1!",bulletActiveClass:"w-5! h-2 rounded-md! bg-amber-300!"},modules:[Vl,Ul,Yl],className:"advertisement-slider relative",children:(e||[])?.map(i=>m.jsx(Gi,{children:m.jsx(Xl,{...i,hideAds:t,isPartialShow:n,hideHighlight:r})},i.id))}),m.jsx("div",{className:"custom-pagination z-20! absolute -bottom-4! w-full flex justify-center"})]}),Xl=({src:e,alt:t,isPartialShow:n=!1})=>{const{t:r}=we("translation");return m.jsxs("div",{className:"relative",children:[m.jsx("div",{className:te("group relative overflow-hidden",n?"aspect-16/7":"aspect-[4/1.2] md:aspect-[4/1.15]"),children:m.jsx("img",{src:e,alt:t,sizes:"(min-width: 1024px) 50vw, 100vw",className:"absolute inset-0 h-full w-full object-cover object-[15%_0%] group-hover:scale-105 duration-200",loading:"lazy"})}),m.jsx("div",{className:"absolute size-full top-0 left-0 bg-linear-to-r from-black/60 via-black/20 group-hover:from-black/60 duration-500 transition-colors to-transparent rounded-xs z-20",children:m.jsx("div",{id:"2",className:"absolute left-0 bottom-0 w-full bg-linear-to-r from-transparent via-amber-400/65 to-transparent py-1.5",children:m.jsx("p",{className:te("text-xs md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center text-white",{"text-sm!":n}),children:r("common.advert")})})})]})},Wi=e=>{const{variant:t="mobile"}=e;return t=="desktop"?m.jsx(Cr,{isPartialShow:!1}):m.jsx(Cr,{})},Cr=({isPartialShow:e=!1,hideHighlight:t=!1})=>m.jsx(Ql,{items:[{id:6,alt:"advert_6",src:ds},{id:5,alt:"advert_5",src:us},{id:7,alt:"advert_7",src:fs},{id:2,alt:"advert_2",src:cs}],isPartialShow:e,hideHighlight:t});var Kl=class extends Error{constructor(e){super(`react-collapsed: ${e}`)}},Ft=(...e)=>qa(e[0],`[react-collapsed] -- ${e[1]}`);function Ui(e){const t=v.useRef(e);return v.useEffect(()=>{t.current=e}),v.useCallback((...n)=>t.current?.(...n),[])}function Zl(e,t,n){const[r,i]=v.useState(t),a=v.useRef(typeof e<"u"),s=a.current?e:r,c=Ui(n),o=v.useCallback(l=>{const d=typeof l=="function"?l(s):l;a.current||i(d),c?.(d)},[c,s]);return v.useEffect(()=>{Ft(!(a.current&&e==null),"`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),Ft(!(!a.current&&e!=null),"`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")},[e]),[s,o]}var Jl="(prefers-reduced-motion: reduce)";function ec(){const[e,t]=v.useState(!1);return v.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const n=window.matchMedia(Jl);t(n.matches);const r=i=>{t(i.matches)};if(n.addEventListener)return n.addEventListener("change",r),()=>{n.removeEventListener("change",r)};if(n.addListener)return n.addListener(r),()=>{n.removeListener(r)}},[]),e}var tc=jt.useId||(()=>{});function nc(){return tc()??""}var rc=typeof window<"u"?v.useLayoutEffect:v.useEffect,fn=!1,ic=0,_r=()=>++ic;function ac(e){const t=e||(fn?_r():null),[n,r]=v.useState(t);return rc(()=>{n===null&&r(_r())},[]),v.useEffect(()=>{fn===!1&&(fn=!0)},[]),n!=null?String(n):void 0}function oc(e){const t=nc(),n=ac(e);return typeof e=="string"?e:typeof t=="string"?t:n}function sc(e,t){const n=performance.now(),r={};function i(){r.id=requestAnimationFrame(a=>{a-n>t?e():i()})}return i(),r}function $r(e){e.id&&cancelAnimationFrame(e.id)}function jr(e){return e?.current?e.current.scrollHeight:(Ft(!0,"Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"),0)}function lc(e){if(!e||typeof e=="string")return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function cc(e,t){if(e!=null)if(typeof e=="function")e(t);else try{e.current=t}catch{throw new Kl(`Cannot assign value "${t}" to ref "${e}"`)}}function Nr(...e){return e.every(t=>t==null)?null:t=>{e.forEach(n=>{cc(n,t)})}}function uc(e){let t=n=>{};t=n=>{if(!n?.current)return;const{paddingTop:r,paddingBottom:i}=window.getComputedStyle(n.current);Ft(!(r&&r!=="0px"||i&&i!=="0px"),`Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`)},v.useEffect(()=>{t(e)},[e])}var dc=typeof window>"u"?v.useEffect:v.useLayoutEffect;function fc({duration:e,easing:t="cubic-bezier(0.4, 0, 0.2, 1)",onTransitionStateChange:n=()=>{},isExpanded:r,defaultExpanded:i=!1,hasDisabledAnimation:a,id:s,...c}={}){const o=Ui(n),l=oc(s?`${s}`:void 0),[u,d]=Zl(r,i),f=v.useRef(u),[p,g]=v.useState(!1),h=ec(),S=a??h,b=v.useRef(),y=v.useRef(),x=v.useRef(null),[P,T]=v.useState(null);uc(x);const O=`${c.collapsedHeight||0}px`;function _(w){if(!x.current)return;const $=x.current;for(const E in w){const M=w[E];M?$.style[E]=M:$.style.removeProperty(E)}}return dc(()=>{if(!x.current||u===f.current)return;f.current=u;function $(j){return S?0:e??lc(j)}const E=j=>`height ${$(j)}ms ${t}`,M=j=>{function z(){u?(_({height:"",overflow:"",transition:"",display:""}),o("expandEnd")):(_({transition:""}),o("collapseEnd")),g(!1)}y.current&&$r(y.current),y.current=sc(z,j)};return g(!0),u?b.current=requestAnimationFrame(()=>{o("expandStart"),_({display:"block",overflow:"hidden",height:O}),b.current=requestAnimationFrame(()=>{o("expanding");const j=jr(x);M($(j)),x.current&&(x.current.style.transition=E(j),x.current.style.height=`${j}px`)})}):b.current=requestAnimationFrame(()=>{o("collapseStart");const j=jr(x);M($(j)),_({transition:E(j),height:`${j}px`}),b.current=requestAnimationFrame(()=>{o("collapsing"),_({height:O,overflow:"hidden"})})}),()=>{b.current&&cancelAnimationFrame(b.current),y.current&&$r(y.current)}},[u,O,S,e,t,o]),{isExpanded:u,setExpanded:d,getToggleProps(w){const{disabled:$,onClick:E,refKey:M,...j}={refKey:"ref",onClick(){},disabled:!1,...w},z=P?P.tagName==="BUTTON":void 0,L=w?.[M||"ref"],D={id:`react-collapsed-toggle-${l}`,"aria-controls":`react-collapsed-panel-${l}`,"aria-expanded":u,onClick(k){$||(E?.(k),d(N=>!N))},[M||"ref"]:Nr(L,T)},A={type:"button",disabled:$?!0:void 0},C={"aria-disabled":$?!0:void 0,role:"button",tabIndex:$?-1:0};return z===!1?{...D,...C,...j}:z===!0?{...D,...A,...j}:{...D,...A,...C,...j}},getCollapseProps(w){const{style:$,refKey:E}={refKey:"ref",style:{},...w},M=w?.[E||"ref"];return{id:`react-collapsed-panel-${l}`,"aria-hidden":!u,"aria-labelledby":`react-collapsed-toggle-${l}`,role:"region",...w,[E||"ref"]:Nr(x,M),style:{boxSizing:"border-box",...!p&&!u?{display:O==="0px"?"none":"block",height:O,overflow:"hidden"}:{},...$}}}}}function pc(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function Lr(e){return typeof e=="string"&&e[e.length-1]==="%"&&pc(e.substring(0,e.length-1))}function pn(e,t,n){t===0&&!n&&e?.style&&e?.children.length>0&&(e.style.display="none")}function hc(e,t){t===0&&e?.style&&(e.style.display="")}const mc={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Dr(e,t){return[e.static,t===0&&e.staticHeightZero,typeof t=="number"&&t>0?e.staticHeightSpecific:null,t==="auto"&&e.staticHeightAuto].filter(n=>n).join(" ")}const gc=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],Qi=R.forwardRef((e,t)=>{const{animateOpacity:n=!1,animationStateClasses:r={},applyInlineTransitions:i=!0,children:a,className:s="",contentClassName:c,delay:o=0,disableDisplayNone:l=!1,duration:u=500,easing:d="ease",height:f,onHeightAnimationEnd:p,onHeightAnimationStart:g,style:h,contentRef:S}=e,b=Object.assign({},e);gc.forEach(W=>{delete b[W]});const y=v.useRef(f),x=v.useRef(null),P=v.useRef(),T=v.useRef(),O=v.useRef(Object.assign(Object.assign({},mc),r)),_=typeof window<"u",w=v.useRef(_&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),$=w.current?0:o,E=w.current?0:u;let M=f,j="visible";typeof f=="number"?(M=f<0?0:f,j="hidden"):Lr(M)&&(M=f==="0%"?0:f,j="hidden");const[z,L]=v.useState(M),[D,A]=v.useState(j),[C,k]=v.useState(!1),[N,I]=v.useState(Dr(O.current,f));v.useEffect(()=>{pn(x.current,z,l)},[]),v.useEffect(()=>{if(f!==y.current&&x.current){hc(x.current,y.current),x.current.style.overflow="hidden";const W=x.current.offsetHeight;x.current.style.overflow="";const Q=E+$;let Y,B,U="hidden",J;const le=y.current==="auto";typeof f=="number"?(Y=f<0?0:f,B=Y):Lr(f)?(Y=f==="0%"?0:f,B=Y):(Y=W,B="auto",U=void 0),le&&(B=Y,Y=W);const Ie=[O.current.animating,(y.current==="auto"||f<y.current)&&O.current.animatingUp,(f==="auto"||f>y.current)&&O.current.animatingDown,B===0&&O.current.animatingToHeightZero,B==="auto"&&O.current.animatingToHeightAuto,typeof B=="number"&&B>0?O.current.animatingToHeightSpecific:null].filter(La=>La).join(" "),Re=Dr(O.current,B);L(Y),A("hidden"),k(!le),I(Ie),clearTimeout(T.current),clearTimeout(P.current),le?(J=!0,T.current=setTimeout(()=>{L(B),A(U),k(J),g?.(B)},50),P.current=setTimeout(()=>{k(!1),I(Re),pn(x.current,B,l),p?.(B)},Q)):(g?.(Y),T.current=setTimeout(()=>{L(B),A(U),k(!1),I(Re),f!=="auto"&&pn(x.current,Y,l),p?.(Y)},Q))}return y.current=f,()=>{clearTimeout(T.current),clearTimeout(P.current)}},[f]);const H=Object.assign(Object.assign({},h),{height:z,overflow:D||h?.overflow});C&&i&&(H.transition=`height ${E}ms ${d} ${$}ms`,h?.transition&&(H.transition=`${h.transition}, ${H.transition}`),H.WebkitTransition=H.transition);const V={};n&&(V.transition=`opacity ${E}ms ${d} ${$}ms`,V.WebkitTransition=V.transition,z===0&&(V.opacity=0));const G=typeof b["aria-hidden"]<"u"?b["aria-hidden"]:f===0;return R.createElement("div",Object.assign({},b,{"aria-hidden":G,className:`${N} ${s}`,style:H,ref:t}),R.createElement("div",{className:c,style:V,ref:W=>{x.current=W,S&&(S.current=W)}},a))});function bc(){if(typeof window>"u"||!window.GestureEvent)return 50;try{const e=navigator.userAgent?.match(/version\/([\d\.]+) safari/i);return parseFloat(e[1])>=17?120:320}catch{return 320}}function vc(e){return{method:"throttle",timeMs:e}}const it=vc(bc());function yc(e){return e===null||Array.isArray(e)&&e.length===0}function xc(e,t,n){if(typeof e=="string")n.set(t,e);else{n.delete(t);for(const r of e)n.append(t,r);n.has(t)||n.set(t,"")}return n}function Xi(){const e=new Map;return{on(t,n){const r=e.get(t)||[];return r.push(n),e.set(t,r),()=>this.off(t,n)},off(t,n){const r=e.get(t);r&&e.set(t,r.filter(i=>i!==n))},emit(t,n){e.get(t)?.forEach(r=>r(n))}}}function In(e,t,n){function r(){e(),n.removeEventListener("abort",a)}const i=setTimeout(r,t);function a(){clearTimeout(i),n.removeEventListener("abort",a)}n.addEventListener("abort",a)}function Rn(){const e=Promise;if(Promise.hasOwnProperty("withResolvers"))return Promise.withResolvers();let t=()=>{},n=()=>{};return{promise:new e((r,i)=>{t=r,n=i}),resolve:t,reject:n}}function wc(e,t){let n=t;for(let r=e.length-1;r>=0;r--){const i=e[r];if(!i)continue;const a=n;n=()=>i(a)}n()}function zn(){return new URLSearchParams(location.search)}var Ki=class{updateMap=new Map;options={history:"replace",scroll:!1,shallow:!0};timeMs=it.timeMs;transitions=new Set;resolvers=null;controller=null;lastFlushedAt=0;resetQueueOnNextPush=!1;push({key:e,query:t,options:n},r=it.timeMs){this.resetQueueOnNextPush&&(this.reset(),this.resetQueueOnNextPush=!1),Z("[nuqs gtq] Enqueueing %s=%s %O",e,t,n),this.updateMap.set(e,t),n.history==="push"&&(this.options.history="push"),n.scroll&&(this.options.scroll=!0),n.shallow===!1&&(this.options.shallow=!1),n.startTransition&&this.transitions.add(n.startTransition),(!Number.isFinite(this.timeMs)||r>this.timeMs)&&(this.timeMs=r)}getQueuedQuery(e){return this.updateMap.get(e)}getPendingPromise({getSearchParamsSnapshot:e=zn}){return this.resolvers?.promise??Promise.resolve(e())}flush({getSearchParamsSnapshot:e=zn,rateLimitFactor:t=1,...n},r){if(this.controller??=new AbortController,!Number.isFinite(this.timeMs))return Z("[nuqs gtq] Skipping flush due to throttleMs=Infinity"),Promise.resolve(e());if(this.resolvers)return this.resolvers.promise;this.resolvers=Rn();const i=()=>{this.lastFlushedAt=performance.now();const[s,c]=this.applyPendingUpdates({...n,autoResetQueueOnUpdate:n.autoResetQueueOnUpdate??!0,getSearchParamsSnapshot:e},r);c===null?(this.resolvers.resolve(s),this.resetQueueOnNextPush=!0):this.resolvers.reject(s),this.resolvers=null};return In(()=>{const s=performance.now()-this.lastFlushedAt,c=this.timeMs,o=t*Math.max(0,c-s);Z("[nuqs gtq] Scheduling flush in %f ms. Throttled at %f ms (x%f)",o,c,t),o===0?i():In(i,o,this.controller.signal)},0,this.controller.signal),this.resolvers.promise}abort(){return this.controller?.abort(),this.controller=new AbortController,this.resolvers?.resolve(new URLSearchParams),this.resolvers=null,this.reset()}reset(){const e=Array.from(this.updateMap.keys());return Z("[nuqs gtq] Resetting queue %s",JSON.stringify(Object.fromEntries(this.updateMap))),this.updateMap.clear(),this.transitions.clear(),this.options={history:"replace",scroll:!1,shallow:!0},this.timeMs=it.timeMs,e}applyPendingUpdates(e,t){const{updateUrl:n,getSearchParamsSnapshot:r}=e;let i=r();if(Z("[nuqs gtq] Applying %d pending update(s) on top of %s",this.updateMap.size,i.toString()),this.updateMap.size===0)return[i,null];const a=Array.from(this.updateMap.entries()),s={...this.options},c=Array.from(this.transitions);e.autoResetQueueOnUpdate&&this.reset(),Z("[nuqs gtq] Flushing queue %O with options %O",a,s);for(const[o,l]of a)l===null?i.delete(o):i=xc(l,o,i);t&&(i=t(i));try{return wc(c,()=>{n(i,s)}),[i,null]}catch(o){return console.error(xi(429),a.map(([l])=>l).join(),o),[i,o]}}};const Tt=new Ki;function Sc(e,t,n){const r=v.useCallback(()=>{const a=Object.fromEntries(e.map(s=>[s,n(s)]));return[JSON.stringify(a),a]},[e.join(","),n]),i=v.useRef(null);return i.current===null&&(i.current=r()),v.useSyncExternalStore(v.useCallback(a=>{const s=e.map(c=>t(c,a));return()=>s.forEach(c=>c())},[e.join(","),t]),()=>{const[a,s]=r();return i.current[0]===a?i.current[1]:(i.current=[a,s],s)},()=>i.current[1])}var Tc=class{callback;resolvers=Rn();controller=new AbortController;queuedValue=void 0;constructor(e){this.callback=e}abort(){this.controller.abort(),this.queuedValue=void 0}push(e,t){return this.queuedValue=e,this.controller.abort(),this.controller=new AbortController,In(()=>{const n=this.resolvers;try{Z("[nuqs dq] Flushing debounce queue",e);const r=this.callback(e);Z("[nuqs dq] Reset debounce queue %O",this.queuedValue),this.queuedValue=void 0,this.resolvers=Rn(),r.then(i=>n.resolve(i)).catch(i=>n.reject(i))}catch(r){this.queuedValue=void 0,n.reject(r)}},t,this.controller.signal),this.resolvers.promise}},kc=class{throttleQueue;queues=new Map;queuedQuerySync=Xi();constructor(e=new Ki){this.throttleQueue=e}useQueuedQueries(e){return Sc(e,(t,n)=>this.queuedQuerySync.on(t,n),t=>this.getQueuedQuery(t))}push(e,t,n,r){if(!Number.isFinite(t)){const s=n.getSearchParamsSnapshot??zn;return Promise.resolve(s())}const i=e.key;if(!this.queues.has(i)){Z("[nuqs dqc] Creating debounce queue for `%s`",i);const s=new Tc(c=>(this.throttleQueue.push(c),this.throttleQueue.flush(n,r).finally(()=>{this.queues.get(c.key)?.queuedValue===void 0&&(Z("[nuqs dqc] Cleaning up empty queue for `%s`",c.key),this.queues.delete(c.key)),this.queuedQuerySync.emit(c.key)})));this.queues.set(i,s)}Z("[nuqs dqc] Enqueueing debounce update %O",e);const a=this.queues.get(i).push(e,t);return this.queuedQuerySync.emit(i),a}abort(e){const t=this.queues.get(e);return t?(Z("[nuqs dqc] Aborting debounce queue %s=%s",e,t.queuedValue?.query),this.queues.delete(e),t.abort(),this.queuedQuerySync.emit(e),n=>(n.then(t.resolvers.resolve,t.resolvers.reject),n)):n=>n}abortAll(){for(const[e,t]of this.queues.entries())Z("[nuqs dqc] Aborting debounce queue %s=%s",e,t.queuedValue?.query),t.abort(),t.resolvers.resolve(new URLSearchParams),this.queuedQuerySync.emit(e);this.queues.clear()}getQueuedQuery(e){const t=this.queues.get(e)?.queuedValue?.query;return t!==void 0?t:this.throttleQueue.getQueuedQuery(e)}};const hn=new kc(Tt);function Ec(e,t){return e===t?!0:e===null||t===null||typeof e=="string"||typeof t=="string"||e.length!==t.length?!1:e.every((n,r)=>n===t[r])}function Zi(e,t,n){try{return e(t)}catch(r){return Ga("[nuqs] Error while parsing value `%s`: %O"+(n?" (for key `%s`)":""),t,r,n),null}}function Ce(e){function t(n){if(typeof n>"u")return null;let r="";if(Array.isArray(n)){if(n[0]===void 0)return null;r=n[0]}return typeof n=="string"&&(r=n),Zi(e.parse,r)}return{type:"single",eq:(n,r)=>n===r,...e,parseServerSide:t,withDefault(n){return{...this,defaultValue:n,parseServerSide(r){return t(r)??n}}},withOptions(n){return{...this,...n}}}}const mn=Ce({parse:e=>e,serialize:String});Ce({parse:e=>{const t=parseInt(e);return t==t?t:null},serialize:e=>""+Math.round(e)});Ce({parse:e=>{const t=parseInt(e);return t==t?t-1:null},serialize:e=>""+Math.round(e+1)});Ce({parse:e=>{const t=parseInt(e,16);return t==t?t:null},serialize:e=>{const t=Math.round(e).toString(16);return(t.length&1?"0":"")+t}});Ce({parse:e=>{const t=parseFloat(e);return t==t?t:null},serialize:String});Ce({parse:e=>e.toLowerCase()==="true",serialize:String});function Jn(e,t){return e.valueOf()===t.valueOf()}Ce({parse:e=>{const t=parseInt(e);return t==t?new Date(t):null},serialize:e=>""+e.valueOf(),eq:Jn});Ce({parse:e=>{const t=new Date(e);return t.valueOf()==t.valueOf()?t:null},serialize:e=>e.toISOString(),eq:Jn});Ce({parse:e=>{const t=new Date(e.slice(0,10));return t.valueOf()==t.valueOf()?t:null},serialize:e=>e.toISOString().slice(0,10),eq:Jn});const gn=Xi(),Pc={};function Mc(e,t={}){const n=v.useId(),r=Ya(),i=Va(),{history:a="replace",scroll:s=r?.scroll??!1,shallow:c=r?.shallow??!0,throttleMs:o=it.timeMs,limitUrlUpdates:l=r?.limitUrlUpdates,clearOnDefault:u=r?.clearOnDefault??!0,startTransition:d,urlKeys:f=Pc}=t,p=Object.keys(e).join(","),g=v.useMemo(()=>Object.fromEntries(Object.keys(e).map(w=>[w,f[w]??w])),[p,JSON.stringify(f)]),h=Ba(Object.values(g)),S=h.searchParams,b=v.useRef({}),y=v.useMemo(()=>Object.fromEntries(Object.keys(e).map(w=>[w,e[w].defaultValue??null])),[Object.values(e).map(({defaultValue:w})=>w).join(",")]),x=hn.useQueuedQueries(Object.values(g)),[P,T]=v.useState(()=>bn(e,f,S??new URLSearchParams,x).state),O=v.useRef(P);if(Z("[nuq+ %s `%s`] render - state: %O, iSP: %s",n,p,P,S),Object.keys(b.current).join("&")!==Object.values(g).join("&")){const{state:w,hasChanged:$}=bn(e,f,S,x,b.current,O.current);$&&(Z("[nuq+ %s `%s`] State changed: %O",n,p,{state:w,initialSearchParams:S,queuedQueries:x,queryRef:b.current,stateRef:O.current}),O.current=w,T(w)),b.current=Object.fromEntries(Object.entries(g).map(([E,M])=>[M,e[E]?.type==="multi"?S?.getAll(M):S?.get(M)??null]))}v.useEffect(()=>{const{state:w,hasChanged:$}=bn(e,f,S,x,b.current,O.current);$&&(Z("[nuq+ %s `%s`] State changed: %O",n,p,{state:w,initialSearchParams:S,queuedQueries:x,queryRef:b.current,stateRef:O.current}),O.current=w,T(w))},[Object.values(g).map(w=>`${w}=${S?.getAll(w)}`).join("&"),JSON.stringify(x)]),v.useEffect(()=>{const w=Object.keys(e).reduce(($,E)=>($[E]=({state:M,query:j})=>{T(z=>{const{defaultValue:L}=e[E],D=g[E],A=M??L??null,C=z[E]??L??null;return Object.is(C,A)?(Z("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). no change, skipping, resolved: %O",n,p,D,M,L,O.current),z):(O.current={...O.current,[E]:A},b.current[D]=j,Z("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). updateInternalState, resolved: %O",n,p,D,M,L,O.current),O.current)})},$),{});for(const $ of Object.keys(e)){const E=g[$];Z("[nuq+ %s `%s`] Subscribing to sync for `%s`",n,E,p),gn.on(E,w[$])}return()=>{for(const $ of Object.keys(e)){const E=g[$];Z("[nuq+ %s `%s`] Unsubscribing to sync for `%s`",n,E,p),gn.off(E,w[$])}}},[p,g]);const _=v.useCallback((w,$={})=>{const E=Object.fromEntries(Object.keys(e).map(C=>[C,null])),M=typeof w=="function"?w(Ar(O.current,y))??E:w??E;Z("[nuq+ %s `%s`] setState: %O",n,p,M);let j,z=0,L=!1;const D=[];for(let[C,k]of Object.entries(M)){const N=e[C],I=g[C];if(!N||k===void 0)continue;($.clearOnDefault??N.clearOnDefault??u)&&k!==null&&N.defaultValue!==void 0&&(N.eq??((F,G)=>F===G))(k,N.defaultValue)&&(k=null);const H=k===null?null:(N.serialize??String)(k);gn.emit(I,{state:k,query:H});const V={key:I,query:H,options:{history:$.history??N.history??a,shallow:$.shallow??N.shallow??c,scroll:$.scroll??N.scroll??s,startTransition:$.startTransition??N.startTransition??d}};if($?.limitUrlUpdates?.method==="debounce"||l?.method==="debounce"||N.limitUrlUpdates?.method==="debounce"){V.options.shallow===!0&&console.warn(xi(422));const F=$?.limitUrlUpdates?.timeMs??l?.timeMs??N.limitUrlUpdates?.timeMs??it.timeMs,G=hn.push(V,F,h,i);z<F&&(j=G,z=F)}else{const F=$?.limitUrlUpdates?.timeMs??N?.limitUrlUpdates?.timeMs??l?.timeMs??$.throttleMs??N.throttleMs??o;D.push(hn.abort(I)),Tt.push(V,F),L=!0}}const A=D.reduce((C,k)=>k(C),L?Tt.flush(h,i):Tt.getPendingPromise(h));return j??A},[p,a,c,s,o,l?.method,l?.timeMs,d,g,h.updateUrl,h.getSearchParamsSnapshot,h.rateLimitFactor,i,y]);return[v.useMemo(()=>Ar(P,y),[P,y]),_]}function bn(e,t,n,r,i,a){let s=!1;const c=Object.entries(e).reduce((o,[l,u])=>{const d=t?.[l]??l,f=r[d],p=u.type==="multi"?[]:null,g=f===void 0?(u.type==="multi"?n?.getAll(d):n?.get(d))??p:f;return i&&a&&Ec(i[d]??p,g)?(o[l]=a[l]??null,o):(s=!0,o[l]=(yc(g)?null:Zi(u.parse,g,d))??null,i&&(i[d]=g),o)},{});if(!s){const o=Object.keys(e),l=Object.keys(a??{});s=o.length!==l.length||o.some(u=>!l.includes(u))}return{state:c,hasChanged:s}}function Ar(e,t){return Object.fromEntries(Object.keys(e).map(n=>[n,e[n]??t[n]??null]))}function vn(e,t={}){const{parse:n,type:r,serialize:i,eq:a,defaultValue:s,...c}=t,[{[e]:o},l]=Mc({[e]:{parse:n??(u=>u),type:r,serialize:i,eq:a,defaultValue:s}},c);return[o,v.useCallback((u,d={})=>l(f=>({[e]:typeof u=="function"?u(f[e]):u}),d),[e,l])]}const Ir=e=>{let t;const n=new Set,r=(l,u)=>{const d=typeof l=="function"?l(t):l;if(!Object.is(d,t)){const f=t;t=u??(typeof d!="object"||d===null)?d:Object.assign({},t,d),n.forEach(p=>p(t,f))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>o,subscribe:l=>(n.add(l),()=>n.delete(l))},o=t=e(r,i,c);return c},Oc=(e=>e?Ir(e):Ir),Cc=e=>e;function _c(e,t=Cc){const n=R.useSyncExternalStore(e.subscribe,R.useCallback(()=>t(e.getState()),[e,t]),R.useCallback(()=>t(e.getInitialState()),[e,t]));return R.useDebugValue(n),n}const Rr=e=>{const t=Oc(e),n=r=>_c(t,r);return Object.assign(n,t),n},$c=(e=>e?Rr(e):Rr),Qe=$c()(e=>({data:[],setData:t=>e({data:t})})),Ve=()=>{const{setData:e}=Qe(),[t,n]=vn("search",mn.withDefault("")),[r,i]=vn("parent_id",mn.withDefault("")),[a,s]=vn("id",mn.withDefault(""));function c(d){n(d)}function o(d){i(`${d}`)}function l(d){s(`${d}`)}function u(){i(""),s(""),e([])}return{search:t,parentId:r,selfId:a,updateSearch:c,updateParentId:o,updateSelfId:l,clearAll:u}},Ji=e=>{const{defaultHeight:t=0,dependency:n}=e||{},[r,i]=v.useState(t),[a,s]=v.useState(0),c=v.useRef(null);v.useEffect(()=>{if(c.current){const l=c.current.scrollHeight;i(l>t?t:l),s(l)}},[n]);function o(){i(r==t?"auto":t)}return{height:r,defaultHeight:t,contentRef:c,revealExceedMax:a>t,revealHiddenContent:o}},jc=e=>m.jsx("div",{className:"flex flex-col space-y-2 max-h-[55dvh] overflow-y-auto scrollbar-none! mt-3",children:(e?.items||[])?.map(t=>m.jsx("div",{id:`x-${t?.name}`,className:"px-2.5 py-2.5 bg-gray-50 rounded-xs",children:m.jsx(Nc,{parentId:t?.id,parentName:t?.name,children:t?.children||[]})},`x-${t?.name}`))}),Nc=e=>{const[t,n]=v.useState(!1),{height:r,defaultHeight:i,contentRef:a,revealExceedMax:s,revealHiddenContent:c}=Ji({defaultHeight:115,dependency:t}),{parentId:o,selfId:l,updateParentId:u,updateSelfId:d}=Ve(),{setData:f}=Qe(),{getCollapseProps:p,getToggleProps:g}=fc({isExpanded:t,collapsedHeight:0,easing:"linear",duration:200});return v.useEffect(()=>{o&&+o==+e?.parentId&&n(!0)},[]),v.useEffect(()=>{(!o||+o!=+e?.parentId)&&n(!1)},[o,e?.parentId]),m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("button",{className:te("hover:scale-105 bg-white md:px-2 lg:px-4 py-1 rounded-xs text-sm md:text-xs lg:text-sm max-w-5/6 text-start hover:text-amber-500 hover:bg-amber-50 duration-300 transition-all cursor-pointer",{"text-amber-500 font-bold":e?.parentId==+l||e?.parentId==+o}),onClick:()=>{u(""),d(e?.parentId);const h=document.getElementById(`x-${e?.parentName}`);h&&h.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),f([e?.parentName])},children:e?.parentName}),(e?.children?.length||0)>0&&m.jsx("span",{className:"cursor-pointer p-0.5 bg-amber-500/10 rounded-xs",role:"button",...g({onClick:()=>n(h=>!h)}),children:t?m.jsx(jn,{className:"size-4 text-amber-500"}):m.jsx(_n,{className:"size-4 text-amber-500"})})]}),m.jsxs("section",{...p(),className:"w-full! bg-white mt-3 rounded-xs border border-gray-100",children:[m.jsx(Qi,{id:"example-panel z-20",className:"rounded-b-md",duration:150,easing:"linear",height:r||i,children:m.jsx("div",{ref:a,className:"grid grid-cols-2 gap-2 py-2 px-2 text-[13px] md:text-[10px] lg:text-xs",children:(e?.children||[])?.map(h=>m.jsx("button",{className:te("bg-gray-50 py-1.5 rounded-xs hover:bg-amber-500/10 hover:text-amber-500 cursor-pointer duration-300 transition-colors",{"text-white bg-amber-500":h?.id==+l}),onClick:()=>{u(e?.parentId),d(h?.id),window?.scrollTo({top:0,behavior:"smooth"}),f([e?.parentName,h?.name])},children:h?.name},h?.id))})}),s&&m.jsx("div",{className:"flex justify-center items-center",children:m.jsx("button",{className:"px-4 mt-1 mb-2 bg-white border border-gray-100 cursor-pointer rounded-xs","aria-expanded":r!==0,"aria-controls":"filter-type2",onClick:c,children:+r>=i?m.jsx(_n,{className:"size-4 text-amber-500"}):m.jsx(jn,{className:"size-4 text-amber-500"})})})]})]})};var yn,zr;function Lc(){if(zr)return yn;zr=1;var e="Expected a function",t=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,o=typeof ht=="object"&&ht&&ht.Object===Object&&ht,l=typeof self=="object"&&self&&self.Object===Object&&self,u=o||l||Function("return this")(),d=Object.prototype,f=d.toString,p=Math.max,g=Math.min,h=function(){return u.Date.now()};function S(T,O,_){var w,$,E,M,j,z,L=0,D=!1,A=!1,C=!0;if(typeof T!="function")throw new TypeError(e);O=P(O)||0,b(_)&&(D=!!_.leading,A="maxWait"in _,E=A?p(P(_.maxWait)||0,O):E,C="trailing"in _?!!_.trailing:C);function k(Y){var B=w,U=$;return w=$=void 0,L=Y,M=T.apply(U,B),M}function N(Y){return L=Y,j=setTimeout(V,O),D?k(Y):M}function I(Y){var B=Y-z,U=Y-L,J=O-B;return A?g(J,E-U):J}function H(Y){var B=Y-z,U=Y-L;return z===void 0||B>=O||B<0||A&&U>=E}function V(){var Y=h();if(H(Y))return F(Y);j=setTimeout(V,I(Y))}function F(Y){return j=void 0,C&&w?k(Y):(w=$=void 0,M)}function G(){j!==void 0&&clearTimeout(j),L=0,w=z=$=j=void 0}function W(){return j===void 0?M:F(h())}function Q(){var Y=h(),B=H(Y);if(w=arguments,$=this,z=Y,B){if(j===void 0)return N(z);if(A)return j=setTimeout(V,O),k(z)}return j===void 0&&(j=setTimeout(V,O)),M}return Q.cancel=G,Q.flush=W,Q}function b(T){var O=typeof T;return!!T&&(O=="object"||O=="function")}function y(T){return!!T&&typeof T=="object"}function x(T){return typeof T=="symbol"||y(T)&&f.call(T)==n}function P(T){if(typeof T=="number")return T;if(x(T))return t;if(b(T)){var O=typeof T.valueOf=="function"?T.valueOf():T;T=b(O)?O+"":O}if(typeof T!="string")return T===0?T:+T;T=T.replace(r,"");var _=a.test(T);return _||s.test(T)?c(T.slice(2),_?2:8):i.test(T)?t:+T}return yn=S,yn}var Dc=Lc();const Fr=ct(Dc);function Ac(e){const t=v.useRef(e);t.current=e,v.useEffect(()=>()=>{t.current()},[])}function Ic(e,t=500,n){const r=v.useRef();Ac(()=>{r.current&&r.current.cancel()});const i=v.useMemo(()=>{const a=Fr(e,t,n),s=(...c)=>a(...c);return s.cancel=()=>{a.cancel()},s.isPending=()=>!!r.current,s.flush=()=>a.flush(),s},[e,t,n]);return v.useEffect(()=>{r.current=Fr(e,t,n)},[e,t,n]),i}function Rc(e,t,n){const r=((l,u)=>l===u),i=e instanceof Function?e():e,[a,s]=v.useState(i),c=v.useRef(i),o=Ic(s,t,n);return r(c.current,i)||(o(i),c.current=i),[a,o]}const zc=e=>new Promise(t=>setTimeout(t,e));function Fc({className:e,type:t,...n}){return m.jsx("input",{type:t,"data-slot":"input",className:te("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...n})}const ea=({className:e})=>{const{search:t,updateSearch:n}=Ve(),[r,i]=v.useState(!1),[a,s]=Rc("",150),c=v.useRef(null),{t:o}=we("translation");async function l(){a&&(i(!0),await zc(500),n(a),window?.scrollTo({top:0,behavior:"smooth"}),i(!1))}return v.useEffect(()=>{!t&&c.current&&(c.current.value="")},[t]),m.jsxs("div",{className:te("relative grow overflow-hidden rounded-xs mt-2.5",e),children:[m.jsx(Fc,{maxLength:50,defaultValue:t,type:"search",ref:c,placeholder:o("common.search-placeholder"),className:te("overflow-hidden focus-visible:ring-0 text-sm bg-white border border-gray-100/50 md:bg-gray-100/60 focus-visible:border-gray-100 placeholder:text-xs h-11 rounded-xs! pr-10 pl-5",{"animate-pulse":r}),onChange:u=>{u?.target?.value||n(u?.target?.value),s(u.target.value)},onKeyDown:u=>{u.key==="Enter"&&l()}}),m.jsx("button",{className:"hover:scale-105 duration-500 transition-all hover:bg-primary/90 absolute right-2 my-auto top-0 bottom-0 cursor-pointer bg-amber-500 size-7 rounded-xs flex justify-center items-center",onClick:async()=>l(),children:r?m.jsx(Co,{className:"size-4 text-white animate-spin"}):m.jsx($o,{className:"size-4 text-white"})})]})},Hc=({filterOptions:e})=>{const{t}=we("translation"),{clearAll:n}=Ve();return m.jsxs("div",{className:"sticky top-24",children:[m.jsxs("div",{className:"bg-white rounded-xs p-3 h-fit",children:[m.jsx("p",{className:"text-sm font-bold px-1",children:t("common.search-label")}),m.jsx(ea,{})]}),m.jsxs("div",{className:"bg-white rounded-xs px-4 py-5 h-fit mt-2",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center space-x-2 text-sm font-bold px-1",children:[m.jsx(Mo,{className:"size-5 text-amber-500"}),m.jsx("span",{className:"text-pretty/80",children:t("common.filter-label")})]}),m.jsx("button",{onClick:()=>{typeof window<"u"&&(n(),window?.scrollTo({top:0,behavior:"smooth"}))},className:"cursor-pointer text-sm text-gray-600 hover:text-amber-500 duration-300 transition-colors",children:t("common.clear-filter")})]}),m.jsx("div",{className:"w-full h-px bg-gray-100 mt-3"}),m.jsx(jc,{items:e})]})]})};var Fn=function(e,t){return Fn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Fn(e,t)};function qc(e,t){Fn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var at=function(){return at=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},at.apply(this,arguments)};function Yc(e,t,n,r){var i,a=!1,s=0;function c(){i&&clearTimeout(i)}function o(){c(),a=!0}typeof t!="boolean"&&(r=n,n=t,t=void 0);function l(){var u=this,d=Date.now()-s,f=arguments;if(a)return;function p(){s=Date.now(),n.apply(u,f)}function g(){i=void 0}r&&!i&&p(),c(),r===void 0&&d>e?p():t!==!0&&(i=setTimeout(r?g:p,r===void 0?e-d:e))}return l.cancel=o,l}var Ue={Pixel:"Pixel",Percent:"Percent"},Hr={unit:Ue.Percent,value:.8};function qr(e){return typeof e=="number"?{unit:Ue.Percent,value:e*100}:typeof e=="string"?e.match(/^(\d*(\.\d+)?)px$/)?{unit:Ue.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:Ue.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),Hr):(console.warn("scrollThreshold should be string or number"),Hr)}var Vc=(function(e){qc(t,e);function t(n){var r=e.call(this,n)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:typeof r.props.scrollableTarget=="string"?document.getElementById(r.props.scrollableTarget):(r.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},r.onStart=function(i){r.lastScrollTop||(r.dragging=!0,i instanceof MouseEvent?r.startY=i.pageY:i instanceof TouchEvent&&(r.startY=i.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(i){r.dragging&&(i instanceof MouseEvent?r.currentY=i.pageY:i instanceof TouchEvent&&(r.currentY=i.touches[0].pageY),!(r.currentY<r.startY)&&(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),!(r.currentY-r.startY>r.maxPullDownDistance*1.5)&&r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")})},r.onScrollListener=function(i){typeof r.props.onScroll=="function"&&setTimeout(function(){return r.props.onScroll&&r.props.onScroll(i)},0);var a=r.props.height||r._scrollableNode?i.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!r.actionTriggered){var s=r.props.inverse?r.isElementAtTop(a,r.props.scrollThreshold):r.isElementAtBottom(a,r.props.scrollThreshold);s&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=a.scrollTop}},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:n.dataLength},r.throttledOnScrollListener=Yc(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return t.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(n){this.props.dataLength!==n.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(n,r){var i=n.dataLength!==r.prevDataLength;return i?at(at({},r),{prevDataLength:n.dataLength}):null},t.prototype.isElementAtTop=function(n,r){r===void 0&&(r=.8);var i=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,a=qr(r);return a.unit===Ue.Pixel?n.scrollTop<=a.value+i-n.scrollHeight+1:n.scrollTop<=a.value/100+i-n.scrollHeight+1},t.prototype.isElementAtBottom=function(n,r){r===void 0&&(r=.8);var i=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,a=qr(r);return a.unit===Ue.Pixel?n.scrollTop+i>=n.scrollHeight-a.value:n.scrollTop+i>=a.value/100*n.scrollHeight},t.prototype.render=function(){var n=this,r=at({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),i=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),a=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return R.createElement("div",{style:a,className:"infinite-scroll-component__outerdiv"},R.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(s){return n._infScroll=s},style:r},this.props.pullDownToRefresh&&R.createElement("div",{style:{position:"relative"},ref:function(s){return n._pullDown=s}},R.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!i&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t})(v.Component);const Hn="/react-vite/assets/news-fallback-image-C7SvCdMy.webp";var kt={exports:{}},Bc=kt.exports,Yr;function Xe(){return Yr||(Yr=1,(function(e,t){(function(n,r){e.exports=r()})(Bc,(function(){var n=1e3,r=6e4,i=36e5,a="millisecond",s="second",c="minute",o="hour",l="day",u="week",d="month",f="quarter",p="year",g="date",h="Invalid Date",S=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(L){var D=["th","st","nd","rd"],A=L%100;return"["+L+(D[(A-20)%10]||D[A]||D[0])+"]"}},x=function(L,D,A){var C=String(L);return!C||C.length>=D?L:""+Array(D+1-C.length).join(A)+L},P={s:x,z:function(L){var D=-L.utcOffset(),A=Math.abs(D),C=Math.floor(A/60),k=A%60;return(D<=0?"+":"-")+x(C,2,"0")+":"+x(k,2,"0")},m:function L(D,A){if(D.date()<A.date())return-L(A,D);var C=12*(A.year()-D.year())+(A.month()-D.month()),k=D.clone().add(C,d),N=A-k<0,I=D.clone().add(C+(N?-1:1),d);return+(-(C+(A-k)/(N?k-I:I-k))||0)},a:function(L){return L<0?Math.ceil(L)||0:Math.floor(L)},p:function(L){return{M:d,y:p,w:u,d:l,D:g,h:o,m:c,s,ms:a,Q:f}[L]||String(L||"").toLowerCase().replace(/s$/,"")},u:function(L){return L===void 0}},T="en",O={};O[T]=y;var _="$isDayjsObject",w=function(L){return L instanceof j||!(!L||!L[_])},$=function L(D,A,C){var k;if(!D)return T;if(typeof D=="string"){var N=D.toLowerCase();O[N]&&(k=N),A&&(O[N]=A,k=N);var I=D.split("-");if(!k&&I.length>1)return L(I[0])}else{var H=D.name;O[H]=D,k=H}return!C&&k&&(T=k),k||!C&&T},E=function(L,D){if(w(L))return L.clone();var A=typeof D=="object"?D:{};return A.date=L,A.args=arguments,new j(A)},M=P;M.l=$,M.i=w,M.w=function(L,D){return E(L,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var j=(function(){function L(A){this.$L=$(A.locale,null,!0),this.parse(A),this.$x=this.$x||A.x||{},this[_]=!0}var D=L.prototype;return D.parse=function(A){this.$d=(function(C){var k=C.date,N=C.utc;if(k===null)return new Date(NaN);if(M.u(k))return new Date;if(k instanceof Date)return new Date(k);if(typeof k=="string"&&!/Z$/i.test(k)){var I=k.match(S);if(I){var H=I[2]-1||0,V=(I[7]||"0").substring(0,3);return N?new Date(Date.UTC(I[1],H,I[3]||1,I[4]||0,I[5]||0,I[6]||0,V)):new Date(I[1],H,I[3]||1,I[4]||0,I[5]||0,I[6]||0,V)}}return new Date(k)})(A),this.init()},D.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},D.$utils=function(){return M},D.isValid=function(){return this.$d.toString()!==h},D.isSame=function(A,C){var k=E(A);return this.startOf(C)<=k&&k<=this.endOf(C)},D.isAfter=function(A,C){return E(A)<this.startOf(C)},D.isBefore=function(A,C){return this.endOf(C)<E(A)},D.$g=function(A,C,k){return M.u(A)?this[C]:this.set(k,A)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(A,C){var k=this,N=!!M.u(C)||C,I=M.p(A),H=function(U,J){var le=M.w(k.$u?Date.UTC(k.$y,J,U):new Date(k.$y,J,U),k);return N?le:le.endOf(l)},V=function(U,J){return M.w(k.toDate()[U].apply(k.toDate("s"),(N?[0,0,0,0]:[23,59,59,999]).slice(J)),k)},F=this.$W,G=this.$M,W=this.$D,Q="set"+(this.$u?"UTC":"");switch(I){case p:return N?H(1,0):H(31,11);case d:return N?H(1,G):H(0,G+1);case u:var Y=this.$locale().weekStart||0,B=(F<Y?F+7:F)-Y;return H(N?W-B:W+(6-B),G);case l:case g:return V(Q+"Hours",0);case o:return V(Q+"Minutes",1);case c:return V(Q+"Seconds",2);case s:return V(Q+"Milliseconds",3);default:return this.clone()}},D.endOf=function(A){return this.startOf(A,!1)},D.$set=function(A,C){var k,N=M.p(A),I="set"+(this.$u?"UTC":""),H=(k={},k[l]=I+"Date",k[g]=I+"Date",k[d]=I+"Month",k[p]=I+"FullYear",k[o]=I+"Hours",k[c]=I+"Minutes",k[s]=I+"Seconds",k[a]=I+"Milliseconds",k)[N],V=N===l?this.$D+(C-this.$W):C;if(N===d||N===p){var F=this.clone().set(g,1);F.$d[H](V),F.init(),this.$d=F.set(g,Math.min(this.$D,F.daysInMonth())).$d}else H&&this.$d[H](V);return this.init(),this},D.set=function(A,C){return this.clone().$set(A,C)},D.get=function(A){return this[M.p(A)]()},D.add=function(A,C){var k,N=this;A=Number(A);var I=M.p(C),H=function(G){var W=E(N);return M.w(W.date(W.date()+Math.round(G*A)),N)};if(I===d)return this.set(d,this.$M+A);if(I===p)return this.set(p,this.$y+A);if(I===l)return H(1);if(I===u)return H(7);var V=(k={},k[c]=r,k[o]=i,k[s]=n,k)[I]||1,F=this.$d.getTime()+A*V;return M.w(F,this)},D.subtract=function(A,C){return this.add(-1*A,C)},D.format=function(A){var C=this,k=this.$locale();if(!this.isValid())return k.invalidDate||h;var N=A||"YYYY-MM-DDTHH:mm:ssZ",I=M.z(this),H=this.$H,V=this.$m,F=this.$M,G=k.weekdays,W=k.months,Q=k.meridiem,Y=function(J,le,Ie,Re){return J&&(J[le]||J(C,N))||Ie[le].slice(0,Re)},B=function(J){return M.s(H%12||12,J,"0")},U=Q||function(J,le,Ie){var Re=J<12?"AM":"PM";return Ie?Re.toLowerCase():Re};return N.replace(b,(function(J,le){return le||(function(Ie){switch(Ie){case"YY":return String(C.$y).slice(-2);case"YYYY":return M.s(C.$y,4,"0");case"M":return F+1;case"MM":return M.s(F+1,2,"0");case"MMM":return Y(k.monthsShort,F,W,3);case"MMMM":return Y(W,F);case"D":return C.$D;case"DD":return M.s(C.$D,2,"0");case"d":return String(C.$W);case"dd":return Y(k.weekdaysMin,C.$W,G,2);case"ddd":return Y(k.weekdaysShort,C.$W,G,3);case"dddd":return G[C.$W];case"H":return String(H);case"HH":return M.s(H,2,"0");case"h":return B(1);case"hh":return B(2);case"a":return U(H,V,!0);case"A":return U(H,V,!1);case"m":return String(V);case"mm":return M.s(V,2,"0");case"s":return String(C.$s);case"ss":return M.s(C.$s,2,"0");case"SSS":return M.s(C.$ms,3,"0");case"Z":return I}return null})(J)||I.replace(":","")}))},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(A,C,k){var N,I=this,H=M.p(C),V=E(A),F=(V.utcOffset()-this.utcOffset())*r,G=this-V,W=function(){return M.m(I,V)};switch(H){case p:N=W()/12;break;case d:N=W();break;case f:N=W()/3;break;case u:N=(G-F)/6048e5;break;case l:N=(G-F)/864e5;break;case o:N=G/i;break;case c:N=G/r;break;case s:N=G/n;break;default:N=G}return k?N:M.a(N)},D.daysInMonth=function(){return this.endOf(d).$D},D.$locale=function(){return O[this.$L]},D.locale=function(A,C){if(!A)return this.$L;var k=this.clone(),N=$(A,C,!0);return N&&(k.$L=N),k},D.clone=function(){return M.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},L})(),z=j.prototype;return E.prototype=z,[["$ms",a],["$s",s],["$m",c],["$H",o],["$W",l],["$M",d],["$y",p],["$D",g]].forEach((function(L){z[L[1]]=function(D){return this.$g(D,L[0],L[1])}})),E.extend=function(L,D){return L.$i||(L(D,j,E),L.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(L){return E(1e3*L)},E.en=O[T],E.Ls=O,E.p={},E}))})(kt)),kt.exports}var Gc=Xe();const Ht=ct(Gc);var Et={exports:{}},Wc=Et.exports,Vr;function Uc(){return Vr||(Vr=1,(function(e,t){(function(n,r){e.exports=r()})(Wc,(function(){return function(n,r,i){n=n||{};var a=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function c(l,u,d,f){return a.fromToBase(l,u,d,f)}i.en.relativeTime=s,a.fromToBase=function(l,u,d,f,p){for(var g,h,S,b=d.$locale().relativeTime||s,y=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],x=y.length,P=0;P<x;P+=1){var T=y[P];T.d&&(g=f?i(l).diff(d,T.d,!0):d.diff(l,T.d,!0));var O=(n.rounding||Math.round)(Math.abs(g));if(S=g>0,O<=T.r||!T.r){O<=1&&P>0&&(T=y[P-1]);var _=b[T.l];p&&(O=p(""+O)),h=typeof _=="string"?_.replace("%d",O):_(O,u,T.l,S);break}}if(u)return h;var w=S?b.future:b.past;return typeof w=="function"?w(h):w.replace("%s",h)},a.to=function(l,u){return c(l,u,this,!0)},a.from=function(l,u){return c(l,u,this)};var o=function(l){return l.$u?i.utc():i()};a.toNow=function(l){return this.to(o(this),l)},a.fromNow=function(l){return this.from(o(this),l)}}}))})(Et)),Et.exports}var Qc=Uc();const Xc=ct(Qc);var Pt={exports:{}},Kc=Pt.exports,Br;function Zc(){return Br||(Br=1,(function(e,t){(function(n,r){e.exports=r()})(Kc,(function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(r,i,a){var s=i.prototype,c=s.format;a.en.formats=n,s.format=function(o){o===void 0&&(o="YYYY-MM-DDTHH:mm:ssZ");var l=this.$locale().formats,u=(function(d,f){return d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(p,g,h){var S=h&&h.toUpperCase();return g||f[h]||n[h]||f[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(b,y,x){return y||x.slice(1)}))}))})(o,l===void 0?{}:l);return c.call(this,u)}}}))})(Pt)),Pt.exports}var Jc=Zc();const eu=ct(Jc);var Mt={exports:{}},tu=Mt.exports,Gr;function nu(){return Gr||(Gr=1,(function(e,t){(function(n,r){e.exports=r(Xe())})(tu,(function(n){function r(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var i=r(n),a={name:"km",weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekStart:1,weekdaysShort:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdaysMin:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),ordinal:function(s){return s},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"}};return i.default.locale(a,null,!0),a}))})(Mt)),Mt.exports}nu();var Ot={exports:{}},ru=Ot.exports,Wr;function iu(){return Wr||(Wr=1,(function(e,t){(function(n,r){e.exports=r(Xe())})(ru,(function(n){function r(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var i=r(n),a={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(s,c){return c==="W"?s+"周":s+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(s,c){var o=100*s+c;return o<600?"凌晨":o<900?"早上":o<1100?"上午":o<1300?"中午":o<1800?"下午":"晚上"}};return i.default.locale(a,null,!0),a}))})(Ot)),Ot.exports}iu();var Ct={exports:{}},au=Ct.exports,Ur;function ou(){return Ur||(Ur=1,(function(e,t){(function(n,r){e.exports=r(Xe())})(au,(function(n){function r(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var i=r(n),a={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(s,c){return c==="W"?s+"週":s+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"},meridiem:function(s,c){var o=100*s+c;return o<600?"凌晨":o<900?"早上":o<1100?"上午":o<1300?"中午":o<1800?"下午":"晚上"}};return i.default.locale(a,null,!0),a}))})(Ct)),Ct.exports}ou();var _t={exports:{}},su=_t.exports,Qr;function lu(){return Qr||(Qr=1,(function(e,t){(function(n,r){e.exports=r(Xe())})(su,(function(n){function r(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var i=r(n),a={name:"ms",weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH.mm",LLLL:"dddd, D MMMM YYYY HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(s){return s+"."}};return i.default.locale(a,null,!0),a}))})(_t)),_t.exports}lu();var $t={exports:{}},cu=$t.exports,Xr;function uu(){return Xr||(Xr=1,(function(e,t){(function(n,r){e.exports=r(Xe())})(cu,(function(n){function r(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var i=r(n),a={name:"th",weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"},ordinal:function(s){return s+"."}};return i.default.locale(a,null,!0),a}))})($t)),$t.exports}uu();Ht.extend(Xc);Ht.extend(eu);function xn(e,t="en"){const n=Ht(),r=Ht(e),i=n.diff(r,"second"),{year:a,month:s,day:c,hour:o,minute:l,second:u,and:d,ago:f,justNow:p}=Kr[t]||Kr.en;if(i<5)return p;const g=n.diff(r,"year"),h=n.diff(r.add(g,"year"),"month"),S=n.diff(r.add(g,"year").add(h,"month"),"day"),b=n.diff(r.add(g,"year").add(h,"month").add(S,"day"),"hour"),y=n.diff(r.add(g,"year").add(h,"month").add(S,"day").add(b,"hour"),"minute"),x=i-(g*365*24*60*60+h*30*24*60*60+S*24*60*60+b*60*60+y*60),P=[];return g&&P.push(a(g)),h&&P.push(s(h)),!g&&!h&&S&&P.push(c(S)),!g&&!h&&!S&&b&&P.push(o(b)),!g&&!h&&!S&&!b&&y&&P.push(l(y)),!g&&!h&&!S&&!b&&!y&&x&&P.push(u(x)),P.join(d)+f}const Kr={en:{year:e=>`${e} year${e!==1?"s":""}`,month:e=>`${e} month${e!==1?"s":""}`,day:e=>`${e} day${e!==1?"s":""}`,hour:e=>`${e} hour${e!==1?"s":""}`,minute:e=>`${e} minute${e!==1?"s":""}`,second:e=>`${e} second${e!==1?"s":""}`,and:" and ",ago:" ago",justNow:"just now"},"zh-cn":{year:e=>`${e}年`,month:e=>`${e}个月`,day:e=>`${e}天`,hour:e=>`${e}小时`,minute:e=>`${e}分钟`,second:e=>`${e}秒`,and:"",ago:"前",justNow:"刚刚"},"zh-tw":{year:e=>`${e}年`,month:e=>`${e}个月`,day:e=>`${e}天`,hour:e=>`${e}小时`,minute:e=>`${e}分钟`,second:e=>`${e}秒`,and:"",ago:"前",justNow:"刚刚"},km:{year:e=>`${e} ឆ្នាំ`,month:e=>`${e} ខែ`,day:e=>`${e} ថ្ងៃ`,hour:e=>`${e} ម៉ោង`,minute:e=>`${e} នាទី`,second:e=>`${e} វិនាទី`,and:" និង ",ago:"មុន",justNow:"ម្សិលមិញ"},th:{year:e=>`${e} ปี`,month:e=>`${e} เดือน`,day:e=>`${e} วัน`,hour:e=>`${e} ชั่วโมง`,minute:e=>`${e} นาที`,second:e=>`${e} วินาที`,and:" และ ",ago:"ที่แล้ว",justNow:"เมื่อครู่"},ms:{year:e=>`${e} tahun`,month:e=>`${e} bulan`,day:e=>`${e} hari`,hour:e=>`${e} jam`,minute:e=>`${e} minit`,second:e=>`${e} saat`,and:" dan ",ago:"yang lalu",justNow:"sebentar tadi"}};function qn({src:e,alt:t="",...n}){return m.jsx("img",{src:e,alt:t,onError:r=>{r.currentTarget.onerror=null,r.currentTarget.src=Hn},...n})}const du=v.lazy(()=>Wa(()=>import("./index-CODnBxil.js"),__vite__mapDeps([0,1,2]))),fu=e=>{const{convertedLocale:t}=wi(),{t:n}=we("translation");return!e?.title&&!e?.summary?null:e?.media?.length?e?.media?.length==1?m.jsx("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 bg-white p-3 sm:p-4 rounded-xs",children:m.jsxs("div",{className:"relative flex space-x-1 overflow-hidden",children:[m.jsxs("div",{className:"relative basis-2/5",children:[e?.media?.[0]?.type=="video"&&e?.media?.[0]?.url?m.jsx("div",{className:"relative rounded-xs min-h-30",children:m.jsx(Zr,{src:e?.media?.[0]?.url})}):m.jsx("div",{className:"shrink-0 relative rounded-xs overflow-hidden min-h-20 lg:h-40 mr-2",children:m.jsx(qn,{src:e?.media?.[0]?.url||Hn,alt:e?.title,className:"object-contain border border-gray-50 rounded-xs"})}),e?.post_at&&m.jsxs("div",{className:"absolute top-0 left-0 right-0 bottom-0 max-sm:mt-1 px-2 ml-1 mt-2.5 flex items-center h-fit bg-black/20 py-1 backdrop-blur-xs w-fit space-x-1.5 text-[9px] lg:text-xs",children:[m.jsx(nn,{className:"max-sm:size-3.5 size-5 text-amber-400"}),m.jsx("span",{className:"text-white mt-0.5",children:xn(new Date(e?.post_at),t)})]})]}),m.jsx("div",{className:"basis-3/5 flex flex-col space-y-0.5 md:pl-1.5",children:m.jsxs("div",{className:"flex flex-col space-y-0.5",children:[m.jsxs("div",{className:"flex items-center justify-between sm:pb-2",children:[!!e?.is_recommended&&m.jsx("div",{className:"flex items-center space-x-1 bg-amber-400/5 px-1.5 py-0.5",children:m.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400",children:n("common.recommended-label")})}),e?.tags&&m.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm text-amber-500",children:(e?.tags||[]).map((r,i)=>m.jsxs("span",{children:["#",r]},i))})]}),m.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl leading-relaxed! text-gray-700 line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&m.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})})]})}):m.jsxs("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 flex flex-col space-y-3 bg-white p-3 sm:p-4 rounded-xs",children:[m.jsx("div",{children:m.jsxs("div",{className:"flex flex-col space-y-0.5",children:[m.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[m.jsxs("div",{className:"flex items-center space-x-2",children:[e?.post_at&&m.jsxs("div",{className:"flex items-center space-x-1.5 text-[9px] text-black backdrop-blur-sm lg:text-xs w-fit",children:[m.jsx(nn,{className:"max-sm:size-3.5 size-5 text-amber-400"}),m.jsx("span",{className:"text-gray-500",children:xn(new Date(e?.post_at),t)})]}),!!e?.is_recommended&&m.jsx("div",{className:"size-2 bg-amber-400 rounded-full"}),!!e?.is_recommended&&m.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400 px-3 py-0.5 bg-amber-400/5",children:n("common.recommended-label")})]}),e?.tags&&m.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm text-amber-500",children:(e?.tags||[]).map((r,i)=>m.jsxs("span",{children:["#",r]},i))})]}),m.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl text-gray-700 leading-relaxed! line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&m.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})}),m.jsx("div",{className:te("grid grid-cols-2 gap-2"),children:(e?.media||[])?.slice(0,2).map((r,i)=>r?.type=="video"&&r?.url?m.jsx(Zr,{src:r?.url},i):m.jsx("div",{className:te("relative w-full min-h-24 lg:h-49 h-full rounded-xs overflow-hidden"),children:m.jsx(qn,{src:r?.url||Hn,alt:e?.title,className:"border border-gray-50 object-contain rounded-xs overflow-hidden"})},i))})]}):m.jsx("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 bg-white p-3 sm:p-4 lg:p-5 mb-2 rounded-xs!",children:m.jsx("div",{className:"relative flex flex-col overflow-hidden",children:m.jsx("div",{className:"basis-3/5 flex flex-col space-y-1",children:m.jsxs("div",{className:"flex flex-col mt-2 space-y-0.5",children:[m.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[m.jsx("div",{className:"flex items-center justify-between w-full",children:m.jsxs("div",{className:"flex items-center space-x-2",children:[e?.post_at&&m.jsxs("div",{className:"flex items-center space-x-1.5 text-[9px] text-black backdrop-blur-sm lg:text-xs w-fit",children:[m.jsx(nn,{className:"max-sm:size-3.5 size-5 text-amber-400"}),m.jsx("span",{className:"text-gray-500",children:xn(new Date(e?.post_at),t)})]}),!!e?.is_recommended&&m.jsx("div",{className:"size-2 bg-amber-400 rounded-full"}),!!e?.is_recommended&&m.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400 px-3 py-0.5 bg-amber-400/5",children:n("common.recommended-label")})]})}),e?.tags&&m.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm mt-2 text-amber-500",children:(e?.tags||[]).map((r,i)=>m.jsxs("span",{children:["#",r]},i))})]}),m.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl leading-relaxed! text-gray-700 line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&m.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})})})})},Zr=({src:e})=>m.jsxs("div",{className:"relative h-30 md:aspect-w-16! md:aspect-h-9! overflow-hidden rounded-xs",children:[m.jsx("div",{className:"absolute top-0 right-0 bottom-0 left-0 z-10 cursor-pointer"}),m.jsxs("div",{className:"size-full bg-gray-100/60 p-2 border border-gray-100",children:[m.jsx(v.Suspense,{fallback:m.jsx("div",{children:"..."}),children:m.jsx(du,{className:"size-full!",src:e,fallback:m.jsx("div",{className:"relative rounded-xs bg-gray-100! aspect-w-16! aspect-h-8! animate-pulse",children:m.jsx("div",{className:"size-full flex justify-center items-center",children:m.jsx(Ao,{className:"size-10 text-gray-100"})})})})}),m.jsx("span",{className:"absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 size-fit! bg-black/10 backdrop-blur-sm p-2 rounded-full",children:m.jsx(ko,{className:"text-white"})})]})]});function pu(e){return m.jsxs("svg",{...e,className:`animate-spin h-8 w-8 text-amber-500 ${e.className??""}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[m.jsx("circle",{className:"opacity-25",cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),m.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]})}const Jr=20,hu=e=>{const{keyword:t,type_id:n,type_pid:r}=e,[i,a]=v.useState(0),{convertedLocale:s}=wi(),c=(t||"")?.length>50?t?.slice(0,50):t,{isFetching:o,isLoading:l,isFetchingNextPage:u,fetchNextPage:d,hasNextPage:f,data:p}=go({initialPageParam:1,queryKey:["news-search",s,n,r,c,i],queryFn:async({pageParam:g=1})=>{const h=await Ua({page:g,page_size:Jr,keyword:t?c:void 0,type_id:n||void 0,type_pid:r||void 0},s);return a(h?.data?.total||0),h?.data?.list},getNextPageParam:(g,h,S)=>(g?.length||0)<Jr?void 0:S+1});return{isFetching:o,isLoading:l,isFetchingNextPage:u,hasNextPage:f,fetchNextPage:d,data:p?.pages?.flatMap(g=>g),total:i}};function de({className:e,...t}){return m.jsx("div",{"data-slot":"skeleton",className:te("bg-accent animate-pulse rounded-md",e),...t})}const mu="/react-vite/assets/empty-news-C68dbbMJ.webp",gu="/react-vite/assets/empty-search-result-NkdVhJyE.webp",ta=({type:e="default",title:t,subtitle:n})=>{const r=bu(e);return m.jsx("div",{className:te("h-[calc(60dvh)] md:h-[calc(55dvh)] rounded-t-xl flex justify-center items-center",{"h-[calc(60dvh)] md:h-[calc(55dvh)]":e=="default"}),children:m.jsxs("div",{className:"size-fit flex flex-col justify-center items-center",children:[m.jsx(qn,{src:r,alt:"empty-state",className:"object-cover",width:100,height:62}),m.jsxs("div",{className:"flex flex-col space-y-1 mt-4 justify-center items-center",children:[m.jsx("h2",{className:"text-xl font-bold text-primary text-center",children:t}),m.jsx("span",{className:"font-medium w-full px-10 text-gray-500 text-center text-sm",children:n})]})]})})};function bu(e){switch(e){default:case"default":return mu;case"search":return gu}}const na=()=>{const e=Qa(),t=Ve(),{data:n}=Qe(),{isLoading:r,hasNextPage:i,fetchNextPage:a,data:s,total:c}=hu({keyword:t?.search,type_id:+t?.selfId,type_pid:+t?.parentId}),{t:o}=we();if(r&&!s?.length)return m.jsx(xu,{});if(!t?.search&&!r&&!s?.length)return m.jsx(vu,{total:c});if(t?.search&&!r&&!s?.length)return m.jsx(yu,{total:c});const l=n?.length?n?.join(" / ").toString():o("common.news-label");return m.jsx("div",{className:"relative",children:m.jsxs("div",{className:"relative pb-4 overflow-y-auto scrollbar-none",children:[t?.search?m.jsxs("div",{className:"flex items-center space-x-2 text-primary rounded-2xl pb-4 pt-1 px-1 font-bold",children:[m.jsx("span",{children:o("common.search-result",{total:`${c}`||"0"})}),m.jsx("div",{className:"grow h-px bg-gray-300"})]}):m.jsxs("div",{className:"px-2 pb-3 md:mb-2 flex items-center space-x-4",children:[m.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[m.jsx("span",{children:m.jsx(xo,{className:"size-5 md:size-6 lg:size-7"})}),m.jsx("span",{children:l})]}),m.jsx("div",{className:"grow h-px bg-gray-200"})]}),m.jsx(Vc,{scrollThreshold:.9,dataLength:(s||[])?.length,next:a,hasMore:i,className:"contents",loader:m.jsx("div",{className:"flex justify-center pb-3 pt-3.5 items-center",children:m.jsx(pu,{})}),children:m.jsx("div",{className:"flex flex-col space-y-2",children:(s||[])?.map((u,d)=>m.jsx("div",{children:m.jsx(fu,{...u,onClick:()=>{e({to:"/detail/$newId",params:{newId:`${u?.id}`},search:{parentId:t?.parentId?+t?.parentId:void 0,id:t?.selfId?+t?.selfId:void 0}})}},d)},d))})})]})})},vu=({total:e})=>{const{t}=we();return m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"pl-2 py-2 mb-2 flex items-center space-x-4",children:[m.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[m.jsx("span",{children:m.jsx(ki,{className:"size-5 md:size-6 lg:size-7"})}),m.jsx("span",{children:t("common.search-result",{total:`${e||0}`})})]}),m.jsx("div",{className:"grow h-px bg-gray-200"})]}),m.jsx("div",{className:"bg-white rounded-xs max-md:my-4",children:m.jsx(ta,{type:"default",title:t("components.list-empty-state.title"),subtitle:t("components.list-empty-state.subtitle")})})]})},yu=({total:e})=>{const{t}=we();return m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"pl-2 py-2 mb-2 flex items-center space-x-4",children:[m.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[m.jsx("span",{children:m.jsx(ki,{className:"size-5 md:size-6 lg:size-7"})}),m.jsx("span",{children:t("common.search-result",{total:`${e||0}`})})]}),m.jsx("div",{className:"grow h-px bg-gray-200"})]}),m.jsx("div",{className:"bg-white rounded-xl max-md:my-4",children:m.jsx(ta,{type:"search",title:t("components.search-empty-state.title"),subtitle:t("components.search-empty-state.subtitle")})})]})},xu=()=>m.jsxs("div",{className:"flex flex-col space-y-4",children:[m.jsxs(de,{className:"flex items-center space-x-2",children:[m.jsx(de,{className:"bg-gray-200/60 w-40 h-8 rounded-xs"}),m.jsx(de,{className:"grow bg-gray-200 h-[1.5px]"})]}),m.jsx("div",{className:"flex flex-col space-y-3 pb-4",children:Array.from({length:4}).map((e,t)=>m.jsxs(de,{className:"p-3 flex flex-col space-y-3 bg-gray-200/60 rounded-xs",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx(de,{className:"w-20 h-4 rounded-xs"}),m.jsx(de,{className:"w-20 h-4 rounded-xs"})]}),m.jsx(de,{className:"w-72 h-4 rounded-xs"}),m.jsxs("div",{className:"flex flex-col space-y-2",children:[m.jsx(de,{className:"w-5/6 h-2 rounded-xs"}),m.jsx(de,{className:"w-full h-2 rounded-xs"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[m.jsx(de,{className:"w-full h-24 rounded-xs flex justify-center items-center",children:m.jsx(hr,{className:"size-9 text-gray-200"})}),m.jsx(de,{className:"w-full h-24 rounded-xs flex justify-center items-center",children:m.jsx(hr,{className:"size-9 text-gray-200"})})]})]},t))})]}),wu=e=>{const{filterOptions:t}=e;return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"max-md:hidden",children:m.jsx(Wi,{variant:"desktop"})}),m.jsxs("div",{className:"max-md:hidden relative grid grid-cols-12 lg:gap-3 p-3 lg:max-w-5xl xl:max-w-6xl mx-auto mt-4",children:[m.jsx("div",{className:"col-span-4",children:m.jsx(Hc,{filterOptions:t})}),m.jsx("div",{className:"col-span-8",children:m.jsx(na,{})})]})]})},Su="shrink-0 px-3.5 bg-gray-100 cursor-pointer font-medium py-1.5 rounded-xs text-sm",Tu=({filterOptions:e})=>{const{parentId:t,selfId:n,updateParentId:r,updateSelfId:i,clearAll:a}=Ve(),{setData:s}=Qe(),{t:c}=we("translation"),o=[{id:-1,label:c("common.news-label"),value:c("common.news-label")},...(e||[])?.map(l=>({id:l?.id,label:l?.name,value:l?.id}))];return m.jsx("div",{className:"flex space-x-1.5 items-center",children:(o||[])?.map((l,u)=>m.jsx("button",{id:`${l?.id}-${l?.label}`,className:te(Su,{"bg-amber-500 text-white":l?.id==+n||+t==l?.id||l?.id==-1&&!n&&!t}),onClick:()=>{if(l?.id==-1){a();const f=document.getElementById(`${l?.id}-${l?.label}`);f&&f.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),s([]);return}r(""),i(l?.id);const d=document.getElementById(`${l?.id}-${l?.label}`);d&&d.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),s([l?.label])},children:l.label},u))})};var ku=Object.defineProperty,Eu=(e,t,n)=>t in e?ku(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wn=(e,t,n)=>(Eu(e,typeof t!="symbol"?t+"":t,n),n);let Pu=class{constructor(){wn(this,"current",this.detect()),wn(this,"handoffState","pending"),wn(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},xe=new Pu;function ut(e){var t;return xe.isServer?null:e==null?document:(t=e?.ownerDocument)!=null?t:document}function Yn(e){var t,n;return xe.isServer?null:e==null?document:(n=(t=e?.getRootNode)==null?void 0:t.call(e))!=null?n:document}function ra(e){var t,n;return(n=(t=Yn(e))==null?void 0:t.activeElement)!=null?n:null}function Mu(e){return ra(e)===e}function Wt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function _e(){let e=[],t={addEventListener(n,r,i,a){return n.addEventListener(r,i,a),t.add(()=>n.removeEventListener(r,i,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Wt(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=_e();return n(r),this.add(()=>r.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function Ut(){let[e]=v.useState(_e);return v.useEffect(()=>()=>e.dispose(),[e]),e}let re=(e,t)=>{xe.isServer?v.useEffect(e,t):v.useLayoutEffect(e,t)};function Be(e){let t=v.useRef(e);return re(()=>{t.current=e},[e]),t}let X=function(e){let t=Be(e);return R.useCallback((...n)=>t.current(...n),[t])};function dt(e){return v.useMemo(()=>e,Object.values(e))}let Ou=v.createContext(void 0);function Cu(){return v.useContext(Ou)}function Vn(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}function Oe(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Oe),r}var qt=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(qt||{}),Le=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Le||{});function ue(){let e=$u();return v.useCallback(t=>_u({mergeRefs:e,...t}),[e])}function _u({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:a=!0,name:s,mergeRefs:c}){c=c??ju;let o=ia(t,e);if(a)return xt(o,n,r,s,c);let l=i??0;if(l&2){let{static:u=!1,...d}=o;if(u)return xt(d,n,r,s,c)}if(l&1){let{unmount:u=!0,...d}=o;return Oe(u?0:1,{0(){return null},1(){return xt({...d,hidden:!0,style:{display:"none"}},n,r,s,c)}})}return xt(o,n,r,s,c)}function xt(e,t={},n,r,i){let{as:a=n,children:s,refName:c="ref",...o}=Sn(e,["unmount","static"]),l=e.ref!==void 0?{[c]:e.ref}:{},u=typeof s=="function"?s(t):s;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t)),o["aria-labelledby"]&&o["aria-labelledby"]===o.id&&(o["aria-labelledby"]=void 0);let d={};if(t){let f=!1,p=[];for(let[g,h]of Object.entries(t))typeof h=="boolean"&&(f=!0),h===!0&&p.push(g.replace(/([A-Z])/g,S=>`-${S.toLowerCase()}`));if(f){d["data-headlessui-state"]=p.join(" ");for(let g of p)d[`data-${g}`]=""}}if(ot(a)&&(Object.keys(ze(o)).length>0||Object.keys(ze(d)).length>0))if(!v.isValidElement(u)||Array.isArray(u)&&u.length>1||Lu(u)){if(Object.keys(ze(o)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(ze(o)).concat(Object.keys(ze(d))).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`))}else{let f=u.props,p=f?.className,g=typeof p=="function"?(...b)=>Vn(p(...b),o.className):Vn(p,o.className),h=g?{className:g}:{},S=ia(u.props,ze(Sn(o,["ref"])));for(let b in d)b in S&&delete d[b];return v.cloneElement(u,Object.assign({},S,d,l,{ref:i(Nu(u),l.ref)},h))}return v.createElement(a,Object.assign({},Sn(o,["ref"]),!ot(a)&&l,!ot(a)&&d),u)}function $u(){let e=v.useRef([]),t=v.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function ju(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function ia(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[i=>{var a;return(a=i?.preventDefault)==null?void 0:a.call(i)}]);for(let r in n)Object.assign(t,{[r](i,...a){let s=n[r];for(let c of s){if((i instanceof Event||i?.nativeEvent instanceof Event)&&i.defaultPrevented)return;c(i,...a)}}});return t}function ie(e){var t;return Object.assign(v.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ze(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Sn(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Nu(e){return R.version.split(".")[0]>="19"?e.props.ref:e.ref}function ot(e){return e===v.Fragment||e===Symbol.for("react.fragment")}function Lu(e){return ot(e.type)}let Du="span";var Yt=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Yt||{});function Au(e,t){var n;let{features:r=1,...i}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=i["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return ue()({ourProps:a,theirProps:i,slot:{},defaultTag:Du,name:"Hidden"})}let Bn=ie(Au);function Iu(e){return typeof e!="object"||e===null?!1:"nodeType"in e}function Ae(e){return Iu(e)&&"tagName"in e}function Ye(e){return Ae(e)&&"accessKey"in e}function De(e){return Ae(e)&&"tabIndex"in e}function Ru(e){return Ae(e)&&"style"in e}function zu(e){return Ye(e)&&e.nodeName==="IFRAME"}function Fu(e){return Ye(e)&&e.nodeName==="INPUT"}let aa=Symbol();function Hu(e,t=!0){return Object.assign(e,{[aa]:t})}function Se(...e){let t=v.useRef(e);v.useEffect(()=>{t.current=e},[e]);let n=X(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||r?.[aa])?void 0:n}let er=v.createContext(null);er.displayName="DescriptionContext";function oa(){let e=v.useContext(er);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,oa),t}return e}function qu(){let[e,t]=v.useState([]);return[e.length>0?e.join(" "):void 0,v.useMemo(()=>function(n){let r=X(a=>(t(s=>[...s,a]),()=>t(s=>{let c=s.slice(),o=c.indexOf(a);return o!==-1&&c.splice(o,1),c}))),i=v.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return R.createElement(er.Provider,{value:i},n.children)},[t])]}let Yu="p";function Vu(e,t){let n=v.useId(),r=Cu(),{id:i=`headlessui-description-${n}`,...a}=e,s=oa(),c=Se(t);re(()=>s.register(i),[i,s.register]);let o=dt({...s.slot,disabled:r||!1}),l={ref:c,...s.props,id:i};return ue()({ourProps:l,theirProps:a,slot:o,defaultTag:Yu,name:s.name||"Description"})}let Bu=ie(Vu),Gu=Object.assign(Bu,{});var sa=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(sa||{});let Wu=v.createContext(()=>{});function Uu({value:e,children:t}){return R.createElement(Wu.Provider,{value:e},t)}let la=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};var Qu=Object.defineProperty,Xu=(e,t,n)=>t in e?Qu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ku=(e,t,n)=>(Xu(e,t+"",n),n),ca=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},ce=(e,t,n)=>(ca(e,t,"read from private field"),n?n.call(e):t.get(e)),Tn=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},ei=(e,t,n,r)=>(ca(e,t,"write to private field"),t.set(e,n),n),ge,Je,et;let Zu=class{constructor(t){Tn(this,ge,{}),Tn(this,Je,new la(()=>new Set)),Tn(this,et,new Set),Ku(this,"disposables",_e()),ei(this,ge,t),xe.isServer&&this.disposables.microTask(()=>{this.dispose()})}dispose(){this.disposables.dispose()}get state(){return ce(this,ge)}subscribe(t,n){if(xe.isServer)return()=>{};let r={selector:t,callback:n,current:t(ce(this,ge))};return ce(this,et).add(r),this.disposables.add(()=>{ce(this,et).delete(r)})}on(t,n){return xe.isServer?()=>{}:(ce(this,Je).get(t).add(n),this.disposables.add(()=>{ce(this,Je).get(t).delete(n)}))}send(t){let n=this.reduce(ce(this,ge),t);if(n!==ce(this,ge)){ei(this,ge,n);for(let r of ce(this,et)){let i=r.selector(ce(this,ge));ua(r.current,i)||(r.current=i,r.callback(i))}for(let r of ce(this,Je).get(t.type))r(ce(this,ge),t)}}};ge=new WeakMap,Je=new WeakMap,et=new WeakMap;function ua(e,t){return Object.is(e,t)?!0:typeof e!="object"||e===null||typeof t!="object"||t===null?!1:Array.isArray(e)&&Array.isArray(t)?e.length!==t.length?!1:kn(e[Symbol.iterator](),t[Symbol.iterator]()):e instanceof Map&&t instanceof Map||e instanceof Set&&t instanceof Set?e.size!==t.size?!1:kn(e.entries(),t.entries()):ti(e)&&ti(t)?kn(Object.entries(e)[Symbol.iterator](),Object.entries(t)[Symbol.iterator]()):!1}function kn(e,t){do{let n=e.next(),r=t.next();if(n.done&&r.done)return!0;if(n.done||r.done||!Object.is(n.value,r.value))return!1}while(!0)}function ti(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let t=Object.getPrototypeOf(e);return t===null||Object.getPrototypeOf(t)===null}var Ju=Object.defineProperty,ed=(e,t,n)=>t in e?Ju(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ni=(e,t,n)=>(ed(e,typeof t!="symbol"?t+"":t,n),n),td=(e=>(e[e.Push=0]="Push",e[e.Pop=1]="Pop",e))(td||{});let nd={0(e,t){let n=t.id,r=e.stack,i=e.stack.indexOf(n);if(i!==-1){let a=e.stack.slice();return a.splice(i,1),a.push(n),r=a,{...e,stack:r}}return{...e,stack:[...e.stack,n]}},1(e,t){let n=t.id,r=e.stack.indexOf(n);if(r===-1)return e;let i=e.stack.slice();return i.splice(r,1),{...e,stack:i}}},rd=class da extends Zu{constructor(){super(...arguments),ni(this,"actions",{push:t=>this.send({type:0,id:t}),pop:t=>this.send({type:1,id:t})}),ni(this,"selectors",{isTop:(t,n)=>t.stack[t.stack.length-1]===n,inStack:(t,n)=>t.stack.includes(n)})}static new(){return new da({stack:[]})}reduce(t,n){return Oe(n.type,nd,t,n)}};const fa=new la(()=>rd.new());var En={exports:{}},Pn={};var ri;function id(){if(ri)return Pn;ri=1;var e=yi();function t(o,l){return o===l&&(o!==0||1/o===1/l)||o!==o&&l!==l}var n=typeof Object.is=="function"?Object.is:t,r=e.useSyncExternalStore,i=e.useRef,a=e.useEffect,s=e.useMemo,c=e.useDebugValue;return Pn.useSyncExternalStoreWithSelector=function(o,l,u,d,f){var p=i(null);if(p.current===null){var g={hasValue:!1,value:null};p.current=g}else g=p.current;p=s(function(){function S(T){if(!b){if(b=!0,y=T,T=d(T),f!==void 0&&g.hasValue){var O=g.value;if(f(O,T))return x=O}return x=T}if(O=x,n(y,T))return O;var _=d(T);return f!==void 0&&f(O,_)?(y=T,O):(y=T,x=_)}var b=!1,y,x,P=u===void 0?null:u;return[function(){return S(l())},P===null?void 0:function(){return S(P())}]},[l,u,d,f]);var h=r(o,p[0],p[1]);return a(function(){g.hasValue=!0,g.value=h},[h]),c(h),h},Pn}var ii;function ad(){return ii||(ii=1,En.exports=id()),En.exports}var od=ad();function pa(e,t,n=ua){return od.useSyncExternalStoreWithSelector(X(r=>e.subscribe(sd,r)),X(()=>e.state),X(()=>e.state),X(t),n)}function sd(e){return e}function ft(e,t){let n=v.useId(),r=fa.get(t),[i,a]=pa(r,v.useCallback(s=>[r.selectors.isTop(s,n),r.selectors.inStack(s,n)],[r,n]));return re(()=>{if(e)return r.actions.push(n),()=>r.actions.pop(n)},[r,e,n]),e?a?i:!0:!1}let Gn=new Map,st=new Map;function ai(e){var t;let n=(t=st.get(e))!=null?t:0;return st.set(e,n+1),n!==0?()=>oi(e):(Gn.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>oi(e))}function oi(e){var t;let n=(t=st.get(e))!=null?t:1;if(n===1?st.delete(e):st.set(e,n-1),n!==1)return;let r=Gn.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,Gn.delete(e))}function ld(e,{allowed:t,disallowed:n}={}){let r=ft(e,"inert-others");re(()=>{var i,a;if(!r)return;let s=_e();for(let o of(i=n?.())!=null?i:[])o&&s.add(ai(o));let c=(a=t?.())!=null?a:[];for(let o of c){if(!o)continue;let l=ut(o);if(!l)continue;let u=o.parentElement;for(;u&&u!==l.body;){for(let d of u.children)c.some(f=>d.contains(f))||s.add(ai(d));u=u.parentElement}}return s.dispose},[r,t,n])}function cd(e,t,n){let r=Be(i=>{let a=i.getBoundingClientRect();a.x===0&&a.y===0&&a.width===0&&a.height===0&&n()});v.useEffect(()=>{if(!e)return;let i=t===null?null:Ye(t)?t:t.current;if(!i)return;let a=_e();if(typeof ResizeObserver<"u"){let s=new ResizeObserver(()=>r.current(i));s.observe(i),a.add(()=>s.disconnect())}if(typeof IntersectionObserver<"u"){let s=new IntersectionObserver(()=>r.current(i));s.observe(i),a.add(()=>s.disconnect())}return()=>a.dispose()},[t,r,e])}let Vt=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","details>summary","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),ud=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Pe=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(Pe||{}),Wn=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Wn||{}),dd=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(dd||{});function fd(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Vt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function pd(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ud)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var ha=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ha||{});function hd(e,t=0){var n;return e===((n=ut(e))==null?void 0:n.body)?!1:Oe(t,{0(){return e.matches(Vt)},1(){let r=e;for(;r!==null;){if(r.matches(Vt))return!0;r=r.parentElement}return!1}})}var md=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(md||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Me(e){e?.focus({preventScroll:!0})}let gd=["textarea","input"].join(",");function bd(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,gd))!=null?n:!1}function vd(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),a=t(r);if(i===null||a===null)return 0;let s=i.compareDocumentPosition(a);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function lt(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let a=Array.isArray(e)?e.length>0?Yn(e[0]):document:Yn(e),s=Array.isArray(e)?n?vd(e):e:t&64?pd(e):fd(e);i.length>0&&s.length>1&&(s=s.filter(p=>!i.some(g=>g!=null&&"current"in g?g?.current===p:g===p))),r=r??a?.activeElement;let c=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(r))-1;if(t&4)return Math.max(0,s.indexOf(r))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=t&32?{preventScroll:!0}:{},u=0,d=s.length,f;do{if(u>=d||u+d<=0)return 0;let p=o+u;if(t&16)p=(p+d)%d;else{if(p<0)return 3;if(p>=d)return 1}f=s[p],f?.focus(l),u+=c}while(f!==ra(f));return t&6&&bd(f)&&f.select(),2}function ma(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function yd(){return/Android/gi.test(window.navigator.userAgent)}function si(){return ma()||yd()}function wt(e,t,n,r){let i=Be(n);v.useEffect(()=>{if(!e)return;function a(s){i.current(s)}return document.addEventListener(t,a,r),()=>document.removeEventListener(t,a,r)},[e,t,r])}function ga(e,t,n,r){let i=Be(n);v.useEffect(()=>{if(!e)return;function a(s){i.current(s)}return window.addEventListener(t,a,r),()=>window.removeEventListener(t,a,r)},[e,t,r])}const li=30;function xd(e,t,n){let r=Be(n),i=v.useCallback(function(c,o){if(c.defaultPrevented)return;let l=o(c);if(l===null||!l.getRootNode().contains(l)||!l.isConnected)return;let u=(function d(f){return typeof f=="function"?d(f()):Array.isArray(f)||f instanceof Set?f:[f]})(t);for(let d of u)if(d!==null&&(d.contains(l)||c.composed&&c.composedPath().includes(d)))return;return!hd(l,ha.Loose)&&l.tabIndex!==-1&&c.preventDefault(),r.current(c,l)},[r,t]),a=v.useRef(null);wt(e,"pointerdown",c=>{var o,l;si()||(a.current=((l=(o=c.composedPath)==null?void 0:o.call(c))==null?void 0:l[0])||c.target)},!0),wt(e,"pointerup",c=>{if(si()||!a.current)return;let o=a.current;return a.current=null,i(c,()=>o)},!0);let s=v.useRef({x:0,y:0});wt(e,"touchstart",c=>{s.current.x=c.touches[0].clientX,s.current.y=c.touches[0].clientY},!0),wt(e,"touchend",c=>{let o={x:c.changedTouches[0].clientX,y:c.changedTouches[0].clientY};if(!(Math.abs(o.x-s.current.x)>=li||Math.abs(o.y-s.current.y)>=li))return i(c,()=>De(c.target)?c.target:null)},!0),ga(e,"blur",c=>i(c,()=>zu(window.document.activeElement)?window.document.activeElement:null),!0)}function tr(...e){return v.useMemo(()=>ut(...e),[...e])}function ba(e,t,n,r){let i=Be(n);v.useEffect(()=>{e=e??window;function a(s){i.current(s)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function wd(e){return v.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}function Sd(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...a){let s=t[i].call(n,...a);s&&(n=s,r.forEach(c=>c()))}}}function Td(){let e;return{before({doc:t}){var n;let r=t.documentElement,i=(n=t.defaultView)!=null?n:window;e=Math.max(0,i.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,i=Math.max(0,r.clientWidth-r.offsetWidth),a=Math.max(0,e-i);n.style(r,"paddingRight",`${a}px`)}}}function kd(){return ma()?{before({doc:e,d:t,meta:n}){function r(i){for(let a of n().containers)for(let s of a())if(s.contains(i))return!0;return!1}t.microTask(()=>{var i;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let c=_e();c.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>c.dispose()))}let a=(i=window.scrollY)!=null?i:window.pageYOffset,s=null;t.addEventListener(e,"click",c=>{if(De(c.target))try{let o=c.target.closest("a");if(!o)return;let{hash:l}=new URL(o.href),u=e.querySelector(l);De(u)&&!r(u)&&(s=u)}catch{}},!0),t.group(c=>{t.addEventListener(e,"touchstart",o=>{if(c.dispose(),De(o.target)&&Ru(o.target))if(r(o.target)){let l=o.target;for(;l.parentElement&&r(l.parentElement);)l=l.parentElement;c.style(l,"overscrollBehavior","contain")}else c.style(o.target,"touchAction","none")})}),t.addEventListener(e,"touchmove",c=>{if(De(c.target)){if(Fu(c.target))return;if(r(c.target)){let o=c.target;for(;o.parentElement&&o.dataset.headlessuiPortal!==""&&!(o.scrollHeight>o.clientHeight||o.scrollWidth>o.clientWidth);)o=o.parentElement;o.dataset.headlessuiPortal===""&&c.preventDefault()}else c.preventDefault()}},{passive:!1}),t.add(()=>{var c;let o=(c=window.scrollY)!=null?c:window.pageYOffset;a!==o&&window.scrollTo(0,a),s&&s.isConnected&&(s.scrollIntoView({block:"nearest"}),s=null)})})}}:{}}function Ed(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function ci(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let He=Sd(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:_e(),meta:new Set,computedMeta:{}};return r.count++,r.meta.add(t),r.computedMeta=ci(r.meta),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t),n.computedMeta=ci(n.meta)),this},SCROLL_PREVENT(e){let t={doc:e.doc,d:e.d,meta(){return e.computedMeta}},n=[kd(),Td(),Ed()];n.forEach(({before:r})=>r?.(t)),n.forEach(({after:r})=>r?.(t))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});He.subscribe(()=>{let e=He.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",i=n.count!==0;(i&&!r||!i&&r)&&He.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&He.dispatch("TEARDOWN",n)}});function Pd(e,t,n=()=>({containers:[]})){let r=wd(He),i=t?r.get(t):void 0,a=i?i.count>0:!1;return re(()=>{if(!(!t||!e))return He.dispatch("PUSH",t,n),()=>He.dispatch("POP",t,n)},[e,t]),a}function Md(e,t,n=()=>[document.body]){let r=ft(e,"scroll-lock");Pd(r,t,i=>{var a;return{containers:[...(a=i.containers)!=null?a:[],n]}})}function Od(e=0){let[t,n]=v.useState(e),r=v.useCallback(o=>n(o),[]),i=v.useCallback(o=>n(l=>l|o),[]),a=v.useCallback(o=>(t&o)===o,[t]),s=v.useCallback(o=>n(l=>l&~o),[]),c=v.useCallback(o=>n(l=>l^o),[]);return{flags:t,setFlag:r,addFlag:i,hasFlag:a,removeFlag:s,toggleFlag:c}}var Cd={},ui,di;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((ui=process==null?void 0:Cd)==null?void 0:ui.NODE_ENV)==="test"&&typeof((di=Element?.prototype)==null?void 0:di.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var _d=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(_d||{});function $d(e){let t={};for(let n in e)e[n]===!0&&(t[`data-${n}`]="");return t}function jd(e,t,n,r){let[i,a]=v.useState(n),{hasFlag:s,addFlag:c,removeFlag:o}=Od(e&&i?3:0),l=v.useRef(!1),u=v.useRef(!1),d=Ut();return re(()=>{var f;if(e){if(n&&a(!0),!t){n&&c(3);return}return(f=r?.start)==null||f.call(r,n),Nd(t,{inFlight:l,prepare(){u.current?u.current=!1:u.current=l.current,l.current=!0,!u.current&&(n?(c(3),o(4)):(c(4),o(2)))},run(){u.current?n?(o(3),c(4)):(o(4),c(3)):n?o(1):c(1)},done(){var p;u.current&&Ad(t)||(l.current=!1,o(7),n||a(!1),(p=r?.end)==null||p.call(r,n))}})}},[e,n,t,d]),e?[i,{closed:s(1),enter:s(2),leave:s(4),transition:s(2)||s(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Nd(e,{prepare:t,run:n,done:r,inFlight:i}){let a=_e();return Dd(e,{prepare:t,inFlight:i}),a.nextFrame(()=>{n(),a.requestAnimationFrame(()=>{a.add(Ld(e,r))})}),a.dispose}function Ld(e,t){var n,r;let i=_e();if(!e)return i.dispose;let a=!1;i.add(()=>{a=!0});let s=(r=(n=e.getAnimations)==null?void 0:n.call(e).filter(c=>c instanceof CSSTransition))!=null?r:[];return s.length===0?(t(),i.dispose):(Promise.allSettled(s.map(c=>c.finished)).then(()=>{a||t()}),i.dispose)}function Dd(e,{inFlight:t,prepare:n}){if(t!=null&&t.current){n();return}let r=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=r}function Ad(e){var t,n;return((n=(t=e.getAnimations)==null?void 0:t.call(e))!=null?n:[]).some(r=>r instanceof CSSTransition&&r.playState!=="finished")}function nr(e,t){let n=v.useRef([]),r=X(e);v.useEffect(()=>{let i=[...n.current];for(let[a,s]of t.entries())if(n.current[a]!==s){let c=r(t,i);return n.current=t,c}},[r,...t])}let Qt=v.createContext(null);Qt.displayName="OpenClosedContext";var me=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(me||{});function Xt(){return v.useContext(Qt)}function Id({value:e,children:t}){return R.createElement(Qt.Provider,{value:e},t)}function Rd({children:e}){return R.createElement(Qt.Provider,{value:null},e)}function zd(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let je=[];zd(()=>{function e(t){if(!De(t.target)||t.target===document.body||je[0]===t.target)return;let n=t.target;n=n.closest(Vt),je.unshift(n??t.target),je=je.filter(r=>r!=null&&r.isConnected),je.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function va(e){let t=X(e),n=v.useRef(!1);v.useEffect(()=>(n.current=!1,()=>{n.current=!0,Wt(()=>{n.current&&t()})}),[t])}let ya=v.createContext(!1);function Fd(){return v.useContext(ya)}function fi(e){return R.createElement(ya.Provider,{value:e.force},e.children)}function Hd(e){let t=Fd(),n=v.useContext(wa),[r,i]=v.useState(()=>{var a;if(!t&&n!==null)return(a=n.current)!=null?a:null;if(xe.isServer)return null;let s=e?.getElementById("headlessui-portal-root");if(s)return s;if(e===null)return null;let c=e.createElement("div");return c.setAttribute("id","headlessui-portal-root"),e.body.appendChild(c)});return v.useEffect(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r))},[r,e]),v.useEffect(()=>{t||n!==null&&i(n.current)},[n,i,t]),r}let xa=v.Fragment,qd=ie(function(e,t){let{ownerDocument:n=null,...r}=e,i=v.useRef(null),a=Se(Hu(f=>{i.current=f}),t),s=tr(i.current),c=n??s,o=Hd(c),l=v.useContext(Un),u=Ut(),d=ue();return va(()=>{var f;o&&o.childNodes.length<=0&&((f=o.parentElement)==null||f.removeChild(o))}),o?Xa.createPortal(R.createElement("div",{"data-headlessui-portal":"",ref:f=>{u.dispose(),l&&f&&u.add(l.register(f))}},d({ourProps:{ref:a},theirProps:r,slot:{},defaultTag:xa,name:"Portal"})),o):null});function Yd(e,t){let n=Se(t),{enabled:r=!0,ownerDocument:i,...a}=e,s=ue();return r?R.createElement(qd,{...a,ownerDocument:i,ref:n}):s({ourProps:{ref:n},theirProps:a,slot:{},defaultTag:xa,name:"Portal"})}let Vd=v.Fragment,wa=v.createContext(null);function Bd(e,t){let{target:n,...r}=e,i={ref:Se(t)},a=ue();return R.createElement(wa.Provider,{value:n},a({ourProps:i,theirProps:r,defaultTag:Vd,name:"Popover.Group"}))}let Un=v.createContext(null);function Gd(){let e=v.useContext(Un),t=v.useRef([]),n=X(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=X(a=>{let s=t.current.indexOf(a);s!==-1&&t.current.splice(s,1),e&&e.unregister(a)}),i=v.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,v.useMemo(()=>function({children:a}){return R.createElement(Un.Provider,{value:i},a)},[i])]}let Wd=ie(Yd),Sa=ie(Bd),Ud=Object.assign(Wd,{Group:Sa});function Qd(e,t=typeof document<"u"?document.defaultView:null,n){let r=ft(e,"escape");ba(t,"keydown",i=>{r&&(i.defaultPrevented||i.key===sa.Escape&&n(i))})}function Xd(){var e;let[t]=v.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=v.useState((e=t?.matches)!=null?e:!1);return re(()=>{if(!t)return;function i(a){r(a.matches)}return t.addEventListener("change",i),()=>t.removeEventListener("change",i)},[t]),n}function Kd({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=X(()=>{var i,a;let s=ut(n),c=[];for(let o of e)o!==null&&(Ae(o)?c.push(o):"current"in o&&Ae(o.current)&&c.push(o.current));if(t!=null&&t.current)for(let o of t.current)c.push(o);for(let o of(i=s?.querySelectorAll("html > *, body > *"))!=null?i:[])o!==document.body&&o!==document.head&&Ae(o)&&o.id!=="headlessui-portal-root"&&(n&&(o.contains(n)||o.contains((a=n?.getRootNode())==null?void 0:a.host))||c.some(l=>o.contains(l))||c.push(o));return c});return{resolveContainers:r,contains:X(i=>r().some(a=>a.contains(i)))}}let Ta=v.createContext(null);function pi({children:e,node:t}){let[n,r]=v.useState(null),i=ka(t??n);return R.createElement(Ta.Provider,{value:i},e,i===null&&R.createElement(Bn,{features:Yt.Hidden,ref:a=>{var s,c;if(a){for(let o of(c=(s=ut(a))==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?c:[])if(o!==document.body&&o!==document.head&&Ae(o)&&o!=null&&o.contains(a)){r(o);break}}}}))}function ka(e=null){var t;return(t=v.useContext(Ta))!=null?t:e}function Zd(){let e=typeof document>"u";return"useSyncExternalStore"in jt?(t=>t.useSyncExternalStore)(jt)(()=>()=>{},()=>!1,()=>!e):!1}function Kt(){let e=Zd(),[t,n]=v.useState(xe.isHandoffComplete);return t&&xe.isHandoffComplete===!1&&n(!1),v.useEffect(()=>{t!==!0&&n(!0)},[t]),v.useEffect(()=>xe.handoff(),[]),e?!1:t}function rr(){let e=v.useRef(!1);return re(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var tt=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(tt||{});function Jd(){let e=v.useRef(0);return ga(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ea(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)Ae(n.current)&&t.add(n.current);return t}let ef="div";var Fe=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(Fe||{});function tf(e,t){let n=v.useRef(null),r=Se(n,t),{initialFocus:i,initialFocusFallback:a,containers:s,features:c=15,...o}=e;Kt()||(c=0);let l=tr(n.current);of(c,{ownerDocument:l});let u=sf(c,{ownerDocument:l,container:n,initialFocus:i,initialFocusFallback:a});lf(c,{ownerDocument:l,container:n,containers:s,previousActiveElement:u});let d=Jd(),f=X(y=>{if(!Ye(n.current))return;let x=n.current;(P=>P())(()=>{Oe(d.current,{[tt.Forwards]:()=>{lt(x,Pe.First,{skipElements:[y.relatedTarget,a]})},[tt.Backwards]:()=>{lt(x,Pe.Last,{skipElements:[y.relatedTarget,a]})}})})}),p=ft(!!(c&2),"focus-trap#tab-lock"),g=Ut(),h=v.useRef(!1),S={ref:r,onKeyDown(y){y.key=="Tab"&&(h.current=!0,g.requestAnimationFrame(()=>{h.current=!1}))},onBlur(y){if(!(c&4))return;let x=Ea(s);Ye(n.current)&&x.add(n.current);let P=y.relatedTarget;De(P)&&P.dataset.headlessuiFocusGuard!=="true"&&(Pa(x,P)||(h.current?lt(n.current,Oe(d.current,{[tt.Forwards]:()=>Pe.Next,[tt.Backwards]:()=>Pe.Previous})|Pe.WrapAround,{relativeTo:y.target}):De(y.target)&&Me(y.target)))}},b=ue();return R.createElement(R.Fragment,null,p&&R.createElement(Bn,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Yt.Focusable}),b({ourProps:S,theirProps:o,defaultTag:ef,name:"FocusTrap"}),p&&R.createElement(Bn,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Yt.Focusable}))}let nf=ie(tf),rf=Object.assign(nf,{features:Fe});function af(e=!0){let t=v.useRef(je.slice());return nr(([n],[r])=>{r===!0&&n===!1&&Wt(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=je.slice())},[e,je,t]),X(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function of(e,{ownerDocument:t}){let n=!!(e&8),r=af(n);nr(()=>{n||Mu(t?.body)&&Me(r())},[n]),va(()=>{n&&Me(r())})}function sf(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:i}){let a=v.useRef(null),s=ft(!!(e&1),"focus-trap#initial-focus"),c=rr();return nr(()=>{if(e===0)return;if(!s){i!=null&&i.current&&Me(i.current);return}let o=n.current;o&&Wt(()=>{if(!c.current)return;let l=t?.activeElement;if(r!=null&&r.current){if(r?.current===l){a.current=l;return}}else if(o.contains(l)){a.current=l;return}if(r!=null&&r.current)Me(r.current);else{if(e&16){if(lt(o,Pe.First|Pe.AutoFocus)!==Wn.Error)return}else if(lt(o,Pe.First)!==Wn.Error)return;if(i!=null&&i.current&&(Me(i.current),t?.activeElement===i.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}a.current=t?.activeElement})},[i,s,e]),a}function lf(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:i}){let a=rr(),s=!!(e&4);ba(t?.defaultView,"focus",c=>{if(!s||!a.current)return;let o=Ea(r);Ye(n.current)&&o.add(n.current);let l=i.current;if(!l)return;let u=c.target;Ye(u)?Pa(o,u)?(i.current=u,Me(u)):(c.preventDefault(),c.stopPropagation(),Me(l)):Me(i.current)},!0)}function Pa(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function Ma(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||!ot((t=e.as)!=null?t:Ca)||R.Children.count(e.children)===1}let Zt=v.createContext(null);Zt.displayName="TransitionContext";var cf=(e=>(e.Visible="visible",e.Hidden="hidden",e))(cf||{});function uf(){let e=v.useContext(Zt);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function df(){let e=v.useContext(Jt);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let Jt=v.createContext(null);Jt.displayName="NestingContext";function en(e){return"children"in e?en(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Oa(e,t){let n=Be(e),r=v.useRef([]),i=rr(),a=Ut(),s=X((p,g=Le.Hidden)=>{let h=r.current.findIndex(({el:S})=>S===p);h!==-1&&(Oe(g,{[Le.Unmount](){r.current.splice(h,1)},[Le.Hidden](){r.current[h].state="hidden"}}),a.microTask(()=>{var S;!en(r)&&i.current&&((S=n.current)==null||S.call(n))}))}),c=X(p=>{let g=r.current.find(({el:h})=>h===p);return g?g.state!=="visible"&&(g.state="visible"):r.current.push({el:p,state:"visible"}),()=>s(p,Le.Unmount)}),o=v.useRef([]),l=v.useRef(Promise.resolve()),u=v.useRef({enter:[],leave:[]}),d=X((p,g,h)=>{o.current.splice(0),t&&(t.chains.current[g]=t.chains.current[g].filter(([S])=>S!==p)),t?.chains.current[g].push([p,new Promise(S=>{o.current.push(S)})]),t?.chains.current[g].push([p,new Promise(S=>{Promise.all(u.current[g].map(([b,y])=>y)).then(()=>S())})]),g==="enter"?l.current=l.current.then(()=>t?.wait.current).then(()=>h(g)):h(g)}),f=X((p,g,h)=>{Promise.all(u.current[g].splice(0).map(([S,b])=>b)).then(()=>{var S;(S=o.current.shift())==null||S()}).then(()=>h(g))});return v.useMemo(()=>({children:r,register:c,unregister:s,onStart:d,onStop:f,wait:l,chains:u}),[c,s,r,d,f,u,l])}let Ca=v.Fragment,_a=qt.RenderStrategy;function ff(e,t){var n,r;let{transition:i=!0,beforeEnter:a,afterEnter:s,beforeLeave:c,afterLeave:o,enter:l,enterFrom:u,enterTo:d,entered:f,leave:p,leaveFrom:g,leaveTo:h,...S}=e,[b,y]=v.useState(null),x=v.useRef(null),P=Ma(e),T=Se(...P?[x,t,y]:t===null?[]:[t]),O=(n=S.unmount)==null||n?Le.Unmount:Le.Hidden,{show:_,appear:w,initial:$}=uf(),[E,M]=v.useState(_?"visible":"hidden"),j=df(),{register:z,unregister:L}=j;re(()=>z(x),[z,x]),re(()=>{if(O===Le.Hidden&&x.current){if(_&&E!=="visible"){M("visible");return}return Oe(E,{hidden:()=>L(x),visible:()=>z(x)})}},[E,x,z,L,_,O]);let D=Kt();re(()=>{if(P&&D&&E==="visible"&&x.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[x,E,D,P]);let A=$&&!w,C=w&&_&&$,k=v.useRef(!1),N=Oa(()=>{k.current||(M("hidden"),L(x))},j),I=X(Y=>{k.current=!0;let B=Y?"enter":"leave";N.onStart(x,B,U=>{U==="enter"?a?.():U==="leave"&&c?.()})}),H=X(Y=>{let B=Y?"enter":"leave";k.current=!1,N.onStop(x,B,U=>{U==="enter"?s?.():U==="leave"&&o?.()}),B==="leave"&&!en(N)&&(M("hidden"),L(x))});v.useEffect(()=>{P&&i||(I(_),H(_))},[_,P,i]);let V=!(!i||!P||!D||A),[,F]=jd(V,b,_,{start:I,end:H}),G=ze({ref:T,className:((r=Vn(S.className,C&&l,C&&u,F.enter&&l,F.enter&&F.closed&&u,F.enter&&!F.closed&&d,F.leave&&p,F.leave&&!F.closed&&g,F.leave&&F.closed&&h,!F.transition&&_&&f))==null?void 0:r.trim())||void 0,...$d(F)}),W=0;E==="visible"&&(W|=me.Open),E==="hidden"&&(W|=me.Closed),_&&E==="hidden"&&(W|=me.Opening),!_&&E==="visible"&&(W|=me.Closing);let Q=ue();return R.createElement(Jt.Provider,{value:N},R.createElement(Id,{value:W},Q({ourProps:G,theirProps:S,defaultTag:Ca,features:_a,visible:E==="visible",name:"Transition.Child"})))}function pf(e,t){let{show:n,appear:r=!1,unmount:i=!0,...a}=e,s=v.useRef(null),c=Ma(e),o=Se(...c?[s,t]:t===null?[]:[t]);Kt();let l=Xt();if(n===void 0&&l!==null&&(n=(l&me.Open)===me.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,d]=v.useState(n?"visible":"hidden"),f=Oa(()=>{n||d("hidden")}),[p,g]=v.useState(!0),h=v.useRef([n]);re(()=>{p!==!1&&h.current[h.current.length-1]!==n&&(h.current.push(n),g(!1))},[h,n]);let S=v.useMemo(()=>({show:n,appear:r,initial:p}),[n,r,p]);re(()=>{n?d("visible"):!en(f)&&s.current!==null&&d("hidden")},[n,f]);let b={unmount:i},y=X(()=>{var T;p&&g(!1),(T=e.beforeEnter)==null||T.call(e)}),x=X(()=>{var T;p&&g(!1),(T=e.beforeLeave)==null||T.call(e)}),P=ue();return R.createElement(Jt.Provider,{value:f},R.createElement(Zt.Provider,{value:S},P({ourProps:{...b,as:v.Fragment,children:R.createElement($a,{ref:o,...b,...a,beforeEnter:y,beforeLeave:x})},theirProps:{},defaultTag:v.Fragment,features:_a,visible:u==="visible",name:"Transition"})))}function hf(e,t){let n=v.useContext(Zt)!==null,r=Xt()!==null;return R.createElement(R.Fragment,null,!n&&r?R.createElement(Qn,{ref:t,...e}):R.createElement($a,{ref:t,...e}))}let Qn=ie(pf),$a=ie(ff),ir=ie(hf),mf=Object.assign(Qn,{Child:ir,Root:Qn});var gf=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(gf||{}),bf=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(bf||{});let vf={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},ar=v.createContext(null);ar.displayName="DialogContext";function tn(e){let t=v.useContext(ar);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,tn),n}return t}function yf(e,t){return Oe(t.type,vf,e,t)}let hi=ie(function(e,t){let n=v.useId(),{id:r=`headlessui-dialog-${n}`,open:i,onClose:a,initialFocus:s,role:c="dialog",autoFocus:o=!0,__demoMode:l=!1,unmount:u=!1,...d}=e,f=v.useRef(!1);c=(function(){return c==="dialog"||c==="alertdialog"?c:(f.current||(f.current=!0,console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")})();let p=Xt();i===void 0&&p!==null&&(i=(p&me.Open)===me.Open);let g=v.useRef(null),h=Se(g,t),S=tr(g.current),b=i?0:1,[y,x]=v.useReducer(yf,{titleId:null,descriptionId:null,panelRef:v.createRef()}),P=X(()=>a(!1)),T=X(F=>x({type:0,id:F})),O=Kt()?b===0:!1,[_,w]=Gd(),$={get current(){var F;return(F=y.panelRef.current)!=null?F:g.current}},E=ka(),{resolveContainers:M}=Kd({mainTreeNode:E,portals:_,defaultContainers:[$]}),j=p!==null?(p&me.Closing)===me.Closing:!1;ld(l||j?!1:O,{allowed:X(()=>{var F,G;return[(G=(F=g.current)==null?void 0:F.closest("[data-headlessui-portal]"))!=null?G:null]}),disallowed:X(()=>{var F;return[(F=E?.closest("body > *:not(#headlessui-portal-root)"))!=null?F:null]})});let z=fa.get(null);re(()=>{if(O)return z.actions.push(r),()=>z.actions.pop(r)},[z,r,O]);let L=pa(z,v.useCallback(F=>z.selectors.isTop(F,r),[z,r]));xd(L,M,F=>{F.preventDefault(),P()}),Qd(L,S?.defaultView,F=>{F.preventDefault(),F.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),P()}),Md(l||j?!1:O,S,M),cd(O,g,P);let[D,A]=qu(),C=v.useMemo(()=>[{dialogState:b,close:P,setTitleId:T,unmount:u},y],[b,P,T,u,y]),k=dt({open:b===0}),N={ref:h,id:r,role:c,tabIndex:-1,"aria-modal":l?void 0:b===0?!0:void 0,"aria-labelledby":y.titleId,"aria-describedby":D,unmount:u},I=!Xd(),H=Fe.None;O&&!l&&(H|=Fe.RestoreFocus,H|=Fe.TabLock,o&&(H|=Fe.AutoFocus),I&&(H|=Fe.InitialFocus));let V=ue();return R.createElement(Rd,null,R.createElement(fi,{force:!0},R.createElement(Ud,null,R.createElement(ar.Provider,{value:C},R.createElement(Sa,{target:g},R.createElement(fi,{force:!1},R.createElement(A,{slot:k},R.createElement(w,null,R.createElement(rf,{initialFocus:s,initialFocusFallback:g,containers:M,features:H},R.createElement(Uu,{value:P},V({ourProps:N,theirProps:d,slot:k,defaultTag:xf,features:wf,visible:b===0,name:"Dialog"})))))))))))}),xf="div",wf=qt.RenderStrategy|qt.Static;function Sf(e,t){let{transition:n=!1,open:r,...i}=e,a=Xt(),s=e.hasOwnProperty("open")||a!==null,c=e.hasOwnProperty("onClose");if(!s&&!c)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!s)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!c)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!a&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!i.static?R.createElement(pi,null,R.createElement(mf,{show:r,transition:n,unmount:i.unmount},R.createElement(hi,{ref:t,...i}))):R.createElement(pi,null,R.createElement(hi,{ref:t,open:r,...i}))}let Tf="div";function kf(e,t){let n=v.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:i=!1,...a}=e,[{dialogState:s,unmount:c},o]=tn("Dialog.Panel"),l=Se(t,o.panelRef),u=dt({open:s===0}),d=X(S=>{S.stopPropagation()}),f={ref:l,id:r,onClick:d},p=i?ir:v.Fragment,g=i?{unmount:c}:{},h=ue();return R.createElement(p,{...g},h({ourProps:f,theirProps:a,slot:u,defaultTag:Tf,name:"Dialog.Panel"}))}let Ef="div";function Pf(e,t){let{transition:n=!1,...r}=e,[{dialogState:i,unmount:a}]=tn("Dialog.Backdrop"),s=dt({open:i===0}),c={ref:t,"aria-hidden":!0},o=n?ir:v.Fragment,l=n?{unmount:a}:{},u=ue();return R.createElement(o,{...l},u({ourProps:c,theirProps:r,slot:s,defaultTag:Ef,name:"Dialog.Backdrop"}))}let Mf="h2";function Of(e,t){let n=v.useId(),{id:r=`headlessui-dialog-title-${n}`,...i}=e,[{dialogState:a,setTitleId:s}]=tn("Dialog.Title"),c=Se(t);v.useEffect(()=>(s(r),()=>s(null)),[r,s]);let o=dt({open:a===0}),l={ref:c,id:r};return ue()({ourProps:l,theirProps:i,slot:o,defaultTag:Mf,name:"Dialog.Title"})}let Cf=ie(Sf),ja=ie(kf);ie(Pf);let _f=ie(Of),$f=Object.assign(Cf,{Panel:ja,Title:_f,Description:Gu});var jf=Symbol.for("react.lazy"),Bt=jt[" use ".trim().toString()];function Nf(e){return typeof e=="object"&&e!==null&&"then"in e}function Na(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===jf&&"_payload"in e&&Nf(e._payload)}function Lf(e){const t=Af(e),n=v.forwardRef((r,i)=>{let{children:a,...s}=r;Na(a)&&typeof Bt=="function"&&(a=Bt(a._payload));const c=v.Children.toArray(a),o=c.find(Rf);if(o){const l=o.props.children,u=c.map(d=>d===o?v.Children.count(l)>1?v.Children.only(null):v.isValidElement(l)?l.props.children:null:d);return m.jsx(t,{...s,ref:i,children:v.isValidElement(l)?v.cloneElement(l,void 0,u):null})}return m.jsx(t,{...s,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}var Df=Lf("Slot");function Af(e){const t=v.forwardRef((n,r)=>{let{children:i,...a}=n;if(Na(i)&&typeof Bt=="function"&&(i=Bt(i._payload)),v.isValidElement(i)){const s=Ff(i),c=zf(a,i.props);return i.type!==v.Fragment&&(c.ref=r?Ka(r,s):s),v.cloneElement(i,c)}return v.Children.count(i)>1?v.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var If=Symbol("radix.slottable");function Rf(e){return v.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===If}function zf(e,t){const n={...t};for(const r in t){const i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...c)=>{const o=a(...c);return i(...c),o}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function Ff(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const mi=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,gi=Za,Hf=(e,t)=>n=>{var r;if(t?.variants==null)return gi(e,n?.class,n?.className);const{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(l=>{const u=n?.[l],d=a?.[l];if(u===null)return null;const f=mi(u)||mi(d);return i[l][f]}),c=n&&Object.entries(n).reduce((l,u)=>{let[d,f]=u;return f===void 0||(l[d]=f),l},{}),o=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((l,u)=>{let{class:d,className:f,...p}=u;return Object.entries(p).every(g=>{let[h,S]=g;return Array.isArray(S)?S.includes({...a,...c}[h]):{...a,...c}[h]===S})?[...l,d,f]:l},[]);return gi(e,s,o,n?.class,n?.className)},qf=Hf("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function Yf({className:e,variant:t="default",size:n="default",asChild:r=!1,...i}){const a=r?Df:"button";return m.jsx(a,{"data-slot":"button","data-variant":t,"data-size":n,className:te(qf({variant:t,size:n,className:e})),...i})}const Vf=({filterOptions:e})=>{const[t,n]=v.useState(!1),{parentId:r,selfId:i,updateSelfId:a,updateParentId:s,clearAll:c}=Ve(),{setData:o}=Qe(),{t:l}=we("translation");return m.jsxs(m.Fragment,{children:[m.jsx(Yf,{className:"cursor-pointer",onClick:()=>n(!0),variant:"link",size:"icon",children:m.jsx(No,{})}),m.jsx($f,{open:t,as:"div",className:"relative z-50 focus:outline-none md:hidden",onClose:()=>n(!1),__demoMode:!0,children:m.jsx("div",{className:"fixed w-screen inset-0 z-50! overflow-y-auto",children:m.jsx("div",{className:"flex items-center justify-center",children:m.jsxs(ja,{transition:!0,className:"w-full relative pt-16 h-dvh bg-gray-100 px-6 pb-8 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0",children:[m.jsxs("div",{className:"flex flex-col space-y-2",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("p",{className:"text-xl font-bold text-amber-500",children:l("common.filter-label")}),m.jsx("div",{className:"grow h-px bg-white"})]}),m.jsx("div",{className:"flex flex-col space-y-3 h-[calc(100dvh-150px)] overflow-y-auto scrollbar-none",children:(e||[])?.map(u=>m.jsxs("div",{className:te("cursor-pointer px-4 py-2.5 bg-white rounded-xs"),onClick:()=>{if((u?.children||[])?.length)return null;s(""),a(u?.id),o([u?.name]);const f=document.getElementById(`${u?.id}-${u?.name}`);f&&f.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),n(!1)},children:[m.jsxs("button",{className:te("hover:text-amber-500 hover:scale-105 duration-500 transition-all cursor-pointer flex items-center space-x-2",{"text-amber-500":u?.id==-1&&!i&&!r||u?.id==+i||u?.id==+r}),onClick:()=>{n(!1),s(""),a(u?.id),o([u?.name]);const d=document.getElementById(`${u?.id}-${u?.name}`);d&&d.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"})},children:[m.jsx("div",{role:"button",className:"bg-amber-400 p-0.5 rounded-xs",children:m.jsx(vo,{className:"size-3 text-white"})}),m.jsx("span",{className:"text-sm",children:u?.name})]}),m.jsx(Bf,{parentId:u?.id,parentName:u?.name,filterOptions:u?.children||[],onClick:()=>{n(!1);const d=document.getElementById(`${u?.id}-${u?.name}`);d&&d.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"})}})]},`${u?.id}-${u?.name}`))})]}),m.jsx("button",{onClick:()=>{n(!1),c(),o([]);const u=document.getElementById(`-1-${l("common.news-label")}`);u&&u.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"})},className:"w-full bg-amber-500 text-sm py-1.5 mt-2 font-medium text-white",children:l("common.clear-filter")}),m.jsx("button",{className:"cursor-pointer absolute top-8 right-6 p-1 bg-orange-400/10 rounded-md",onClick:()=>n(!1),children:m.jsx(Ro,{className:"text-amber-500 size-5"})})]})})})})]})},Bf=e=>{const{parentId:t,parentName:n,filterOptions:r,onClick:i}=e,{selfId:a,updateSelfId:s,updateParentId:c}=Ve(),{setData:o}=Qe(),{contentRef:l,height:u,defaultHeight:d,revealExceedMax:f,revealHiddenContent:p}=Ji({defaultHeight:80,dependency:r?.length});return r?.length?m.jsxs("div",{className:"relative",children:[m.jsx(Qi,{id:"example-panel z-20",className:"rounded-b-md",duration:150,easing:"linear",height:u||d,children:m.jsx("div",{ref:l,className:"flex flex-wrap gap-2 py-2",children:(r||[])?.map(g=>m.jsx("button",{className:te("cursor-pointer bg-primary/5 hover:bg-amber-500 hover:text-white duration-500 transition-colors text-center py-1.5 px-1.5 grow rounded-xs text-xs",{"text-white bg-amber-500":g?.id==+a}),onClick:()=>{c(t),s(g?.id),o([n,g?.name]),i()},children:g?.name},`${g?.id}-${g?.name}`))})}),f&&m.jsx("div",{className:"flex justify-center items-center",children:m.jsx("button",{className:"px-4 mt-1 bg-white border border-gray-100 cursor-pointer rounded-2xl","aria-expanded":u!==0,"aria-controls":"filter-type2",onClick:p,children:+u>=d?m.jsx(_n,{className:"size-4 text-amber-500"}):m.jsx(jn,{className:"size-4 text-amber-500"})})})]}):null},Gf=({filterOptions:e})=>{const t=!!e?.length;return m.jsx("div",{className:"md:hidden",children:m.jsx("div",{className:"sticky top-14 z-20!",children:m.jsxs(Si,{className:"flex flex-col space-y-2 px-1!",children:[m.jsx(ea,{className:"mt-1.5!"}),t&&m.jsxs("div",{className:"flex items-center space-x-2 pl-2 pr-1 py-1 rounded-xs bg-white",children:[m.jsx("div",{className:"relative grow",children:m.jsx("div",{className:"col-span-10 grow grid gap-2 grid-cols-2 rounded-xs overflow-x-auto scrollbar-none",children:m.jsx(Tu,{filterOptions:e})})}),m.jsx("div",{className:"flex mb-auto md:hidden",children:m.jsx(Vf,{filterOptions:e})})]})]})})})},Wf=e=>{const{filterOptions:t}=e;return m.jsxs("section",{className:"lg:max-w-5xl xl:max-w-6xl mx-auto",children:[m.jsx(Gf,{filterOptions:t}),m.jsx("div",{className:"md:hidden px-1 mt-2",children:m.jsx(Wi,{variant:"mobile"})}),m.jsx(Si,{className:"md:hidden pt-3 mt-3 py-0 px-1!",children:m.jsx(na,{})})]})};function Zf(){const e=Ja.useLoaderData(),{t}=we();return m.jsxs(m.Fragment,{children:[m.jsx(ur,{to:".",pending:!0,children:m.jsx(wr,{})}),m.jsx(ur,{to:"/detail/$newId",pending:!0,children:m.jsx(wr,{})}),m.jsxs("div",{className:"relative min-h-[calc(100dvh-150px)] h-auto",children:[m.jsx(ls,{text:t("components.marquee.content")}),m.jsx(Wf,{filterOptions:e?.data?.list||[]}),m.jsx(wu,{filterOptions:e?.data?.list||[]})]})]})}export{Zf as component};
