const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-fSb2Ucam.js","assets/index-Bwbmv_Qf.js","assets/index-Cv4nBfyp.css"])))=>i.map(i=>d[i]);
import{i as lt,h as Xr,a as Kr,c as ue,R as O,j as c,r as Gt,g as Zt,b as d,d as tn,w as Gr,e as Q,f as Jt,u as Zr,k as Jr,l as eo,m as no,n as re,C as In,o as Xe,p as xe,q as er,_ as to,s as ro,t as oo,v as ao,x as io,y as so,z as nr,A as lo,M as ct}from"./index-Bwbmv_Qf.js";import{Q as co,u as uo,f as Fn,C as wn,g as kn,V as ho,S as ie,A as tr}from"./skeleton-BFQ03FQN.js";var fo=class extends co{constructor(e,n){super(e,n)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:lt()})}getOptimisticResult(e){return e.behavior=lt(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,n){const{state:t}=e,r=super.createResult(e,n),{isFetching:o,isRefetching:a,isError:i,isRefetchError:l}=r,s=t.fetchMeta?.fetchMore?.direction,u=i&&s==="forward",h=o&&s==="forward",m=i&&s==="backward",f=o&&s==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Kr(n,t.data),hasPreviousPage:Xr(n,t.data),isFetchNextPageError:u,isFetchingNextPage:h,isFetchPreviousPageError:m,isFetchingPreviousPage:f,isRefetchError:l&&!u&&!m,isRefetching:a&&!h&&!f}}};function po(e,n){return uo(e,fo)}const mo=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],bo=ue("arrow-up-right",mo);const go=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],vo=ue("book-open",go);const xo=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],zn=ue("chevron-up",xo);const yo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],wo=ue("film",yo);const ko=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ut=ue("image",ko);const Po=[["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M9 19h6",key:"456am0"}]],Oo=ue("list-filter",Po);const So=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],jo=ue("loader-circle",So);const Eo=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],No=ue("search",Eo);const To=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Co=ue("sliders-horizontal",To);const $o=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 19H3",key:"108z41"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]],rr=ue("text-search",$o);const Mo=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ao=ue("x",Mo);function K(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}K(`.react-loading-indicator-normalize,
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
}`);var he=function(){return he=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},he.apply(this,arguments)};function rn(e){return rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rn(e)}var _o=/^\s+/,Do=/\s+$/;function N(e,n){if(n=n||{},(e=e||"")instanceof N)return e;if(!(this instanceof N))return new N(e,n);var t=(function(r){var o={r:0,g:0,b:0},a=1,i=null,l=null,s=null,u=!1,h=!1;typeof r=="string"&&(r=(function(b){b=b.replace(_o,"").replace(Do,"").toLowerCase();var p,v=!1;if(Ln[b])b=Ln[b],v=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(p=se.rgb.exec(b))?{r:p[1],g:p[2],b:p[3]}:(p=se.rgba.exec(b))?{r:p[1],g:p[2],b:p[3],a:p[4]}:(p=se.hsl.exec(b))?{h:p[1],s:p[2],l:p[3]}:(p=se.hsla.exec(b))?{h:p[1],s:p[2],l:p[3],a:p[4]}:(p=se.hsv.exec(b))?{h:p[1],s:p[2],v:p[3]}:(p=se.hsva.exec(b))?{h:p[1],s:p[2],v:p[3],a:p[4]}:(p=se.hex8.exec(b))?{r:te(p[1]),g:te(p[2]),b:te(p[3]),a:bt(p[4]),format:v?"name":"hex8"}:(p=se.hex6.exec(b))?{r:te(p[1]),g:te(p[2]),b:te(p[3]),format:v?"name":"hex"}:(p=se.hex4.exec(b))?{r:te(p[1]+""+p[1]),g:te(p[2]+""+p[2]),b:te(p[3]+""+p[3]),a:bt(p[4]+""+p[4]),format:v?"name":"hex8"}:(p=se.hex3.exec(b))?{r:te(p[1]+""+p[1]),g:te(p[2]+""+p[2]),b:te(p[3]+""+p[3]),format:v?"name":"hex"}:!1})(r)),rn(r)=="object"&&(me(r.r)&&me(r.g)&&me(r.b)?(m=r.r,f=r.g,g=r.b,o={r:255*H(m,255),g:255*H(f,255),b:255*H(g,255)},u=!0,h=String(r.r).substr(-1)==="%"?"prgb":"rgb"):me(r.h)&&me(r.s)&&me(r.v)?(i=qe(r.s),l=qe(r.v),o=(function(b,p,v){b=6*H(b,360),p=H(p,100),v=H(v,100);var S=Math.floor(b),j=b-S,w=v*(1-p),T=v*(1-j*p),x=v*(1-(1-j)*p),y=S%6,$=[v,T,w,w,x,v][y],P=[x,v,v,T,w,w][y],k=[w,w,x,v,v,T][y];return{r:255*$,g:255*P,b:255*k}})(r.h,i,l),u=!0,h="hsv"):me(r.h)&&me(r.s)&&me(r.l)&&(i=qe(r.s),s=qe(r.l),o=(function(b,p,v){var S,j,w;function T($,P,k){return k<0&&(k+=1),k>1&&(k-=1),k<1/6?$+6*(P-$)*k:k<.5?P:k<2/3?$+(P-$)*(2/3-k)*6:$}if(b=H(b,360),p=H(p,100),v=H(v,100),p===0)S=j=w=v;else{var x=v<.5?v*(1+p):v+p-v*p,y=2*v-x;S=T(y,x,b+1/3),j=T(y,x,b),w=T(y,x,b-1/3)}return{r:255*S,g:255*j,b:255*w}})(r.h,i,s),u=!0,h="hsl"),r.hasOwnProperty("a")&&(a=r.a));var m,f,g;return a=or(a),{ok:u,format:r.format||h,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a}})(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function dt(e,n,t){e=H(e,255),n=H(n,255),t=H(t,255);var r,o,a=Math.max(e,n,t),i=Math.min(e,n,t),l=(a+i)/2;if(a==i)r=o=0;else{var s=a-i;switch(o=l>.5?s/(2-a-i):s/(a+i),a){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,l}}function ht(e,n,t){e=H(e,255),n=H(n,255),t=H(t,255);var r,o,a=Math.max(e,n,t),i=Math.min(e,n,t),l=a,s=a-i;if(o=a===0?0:s/a,a==i)r=0;else{switch(a){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,v:l}}function ft(e,n,t,r){var o=[le(Math.round(e).toString(16)),le(Math.round(n).toString(16)),le(Math.round(t).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function pt(e,n,t,r){return[le(ar(r)),le(Math.round(e).toString(16)),le(Math.round(n).toString(16)),le(Math.round(t).toString(16))].join("")}function Ro(e,n){n=n===0?0:n||10;var t=N(e).toHsl();return t.s-=n/100,t.s=un(t.s),N(t)}function qo(e,n){n=n===0?0:n||10;var t=N(e).toHsl();return t.s+=n/100,t.s=un(t.s),N(t)}function Io(e){return N(e).desaturate(100)}function Fo(e,n){n=n===0?0:n||10;var t=N(e).toHsl();return t.l+=n/100,t.l=un(t.l),N(t)}function zo(e,n){n=n===0?0:n||10;var t=N(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),N(t)}function Lo(e,n){n=n===0?0:n||10;var t=N(e).toHsl();return t.l-=n/100,t.l=un(t.l),N(t)}function Ho(e,n){var t=N(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,N(t)}function Vo(e){var n=N(e).toHsl();return n.h=(n.h+180)%360,N(n)}function mt(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=N(e).toHsl(),r=[N(e)],o=360/n,a=1;a<n;a++)r.push(N({h:(t.h+a*o)%360,s:t.s,l:t.l}));return r}function Uo(e){var n=N(e).toHsl(),t=n.h;return[N(e),N({h:(t+72)%360,s:n.s,l:n.l}),N({h:(t+216)%360,s:n.s,l:n.l})]}function Bo(e,n,t){n=n||6,t=t||30;var r=N(e).toHsl(),o=360/t,a=[N(e)];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,a.push(N(r));return a}function Yo(e,n){n=n||6;for(var t=N(e).toHsv(),r=t.h,o=t.s,a=t.v,i=[],l=1/n;n--;)i.push(N({h:r,s:o,v:a})),a=(a+l)%1;return i}N.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=or(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=ht(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=ht(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=dt(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=dt(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return ft(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return(function(n,t,r,o,a){var i=[le(Math.round(n).toString(16)),le(Math.round(t).toString(16)),le(Math.round(r).toString(16)),le(ar(o))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")})(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*H(this._r,255))+"%",g:Math.round(100*H(this._g,255))+"%",b:Math.round(100*H(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*H(this._r,255))+"%, "+Math.round(100*H(this._g,255))+"%, "+Math.round(100*H(this._b,255))+"%)":"rgba("+Math.round(100*H(this._r,255))+"%, "+Math.round(100*H(this._g,255))+"%, "+Math.round(100*H(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Wo[ft(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+pt(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=N(e);t="#"+pt(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return N(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(Fo,arguments)},brighten:function(){return this._applyModification(zo,arguments)},darken:function(){return this._applyModification(Lo,arguments)},desaturate:function(){return this._applyModification(Ro,arguments)},saturate:function(){return this._applyModification(qo,arguments)},greyscale:function(){return this._applyModification(Io,arguments)},spin:function(){return this._applyModification(Ho,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(Bo,arguments)},complement:function(){return this._applyCombination(Vo,arguments)},monochromatic:function(){return this._applyCombination(Yo,arguments)},splitcomplement:function(){return this._applyCombination(Uo,arguments)},triad:function(){return this._applyCombination(mt,[3])},tetrad:function(){return this._applyCombination(mt,[4])}},N.fromRatio=function(e,n){if(rn(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:qe(e[r]));e=t}return N(e,n)},N.equals=function(e,n){return!(!e||!n)&&N(e).toRgbString()==N(n).toRgbString()},N.random=function(){return N.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},N.mix=function(e,n,t){t=t===0?0:t||50;var r=N(e).toRgb(),o=N(n).toRgb(),a=t/100;return N({r:(o.r-r.r)*a+r.r,g:(o.g-r.g)*a+r.g,b:(o.b-r.b)*a+r.b,a:(o.a-r.a)*a+r.a})},N.readability=function(e,n){var t=N(e),r=N(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},N.isReadable=function(e,n,t){var r,o,a=N.readability(e,n);switch(o=!1,(r=(function(i){var l,s;return l=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(i.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}})(t)).level+r.size){case"AAsmall":case"AAAlarge":o=a>=4.5;break;case"AAlarge":o=a>=3;break;case"AAAsmall":o=a>=7}return o},N.mostReadable=function(e,n,t){var r,o,a,i,l=null,s=0;o=(t=t||{}).includeFallbackColors,a=t.level,i=t.size;for(var u=0;u<n.length;u++)(r=N.readability(e,n[u]))>s&&(s=r,l=N(n[u]));return N.isReadable(e,l,{level:a,size:i})||!o?l:(t.includeFallbackColors=!1,N.mostReadable(e,["#fff","#000"],t))};var Ln=N.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Wo=N.hexNames=(function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n})(Ln);function or(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function H(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=(function(r){return typeof r=="string"&&r.indexOf("%")!=-1})(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function un(e){return Math.min(1,Math.max(0,e))}function te(e){return parseInt(e,16)}function le(e){return e.length==1?"0"+e:""+e}function qe(e){return e<=1&&(e=100*e+"%"),e}function ar(e){return Math.round(255*parseFloat(e)).toString(16)}function bt(e){return te(e)/255}var ke,Ke,Ge,se=(Ke="[\\s|\\(]+("+(ke="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ke+")[,|\\s]+("+ke+")\\s*\\)?",Ge="[\\s|\\(]+("+ke+")[,|\\s]+("+ke+")[,|\\s]+("+ke+")[,|\\s]+("+ke+")\\s*\\)?",{CSS_UNIT:new RegExp(ke),rgb:new RegExp("rgb"+Ke),rgba:new RegExp("rgba"+Ge),hsl:new RegExp("hsl"+Ke),hsla:new RegExp("hsla"+Ge),hsv:new RegExp("hsv"+Ke),hsva:new RegExp("hsva"+Ge),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function me(e){return!!se.CSS_UNIT.exec(e)}var Qo=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,o=parseFloat(n),a=o+r*(o/5)*-1;return(a==0||a<=Number.EPSILON)&&(a=.1),{animationPeriod:a+"s"}}return{animationPeriod:n}},Xo=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(t.fontSize){var a=t.fontSize;o=(function(i,l){var s={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&l.indexOf(u)<0&&(s[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var h=0;for(u=Object.getOwnPropertySymbols(i);h<u.length;h++)l.indexOf(u[h])<0&&Object.prototype.propertyIsEnumerable.call(i,u[h])&&(s[u[h]]=i[u[h]])}return s})(t,["fontSize"]),r=a}return{fontSize:r,styles:o}},Ko={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Go=function(e){var n=e.className,t=e.text,r=e.textColor,o=e.staticText,a=e.style;return t?O.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:he(he(he({},o&&Ko),r&&{color:r,mixBlendMode:"unset"}),a&&a)},typeof t=="string"&&t.length?t:"loading"):null},ir="rgb(50, 205, 50)";function Zo(e,n){if(n===void 0&&(n=0),e.length===0)throw new Error("Input array cannot be empty!");var t=[];return(function r(o,a){return a===void 0&&(a=0),t.push.apply(t,o),t.length<a&&r(t,a),t.slice(0,a)})(e,n)}K(`.atom-rli-bounding-box {
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
}`);N(ir).toRgb();Array.from({length:4},(function(e,n){return"--atom-phase".concat(n+1,"-rgb")}));K(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")}));function Pn(e){return e&&e.Math===Math&&e}K(`.OP-dotted-rli-bounding-box {
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
}`);Pn(typeof window=="object"&&window)||Pn(typeof self=="object"&&self)||Pn(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")}));K(`.OP-spokes-rli-bounding-box {
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
}`);var Ae=Array.from({length:4},(function(e,n){return"--riple-phase".concat(n+1,"-color")})),Jo=function(e){var n,t=Xo(e?.style,e?.size),r=t.styles,o=t.fontSize,a=e?.easing,i=Qo(e?.speedPlus,"1s").animationPeriod,l=(function(s){var u={};if(s instanceof Array){for(var h=Zo(s,Ae.length),m=0;m<h.length&&!(m>=4);m++)u[Ae[m]]=h[m];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var f=0;f<Ae.length;f++)u[Ae[f]]=s}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <Riple /> indicator cannot be processed. Using default instead!")),f=0;f<Ae.length;f++)u[Ae[f]]=ir}return u})((n=e?.color)!==null&&n!==void 0?n:"");return O.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:he(he(he(he(he({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),a&&{"--rli-animation-function":a}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},O.createElement("span",{className:"rli-d-i-b riple-indicator"},O.createElement("span",{className:"rli-d-i-b riple"}),O.createElement("span",{className:"rli-d-i-b riple"}),O.createElement(Go,{className:"riple-text",text:e?.text,textColor:e?.textColor})))};K(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},(function(e,n){return"--life-line-phase".concat(n+1,"-color")}));const gt=()=>c.jsx("div",{className:"flex items-center justify-center flex-col fixed bg-black/30 z-20 top-0 left-0 bottom right-0 w-screen h-screen",children:c.jsx(Jo,{color:"#f5cd25",size:"large"})});var Ze={},vt;function ea(){if(vt)return Ze;vt=1;function e(a){if(typeof window>"u")return;const i=document.createElement("style");return i.setAttribute("type","text/css"),i.innerHTML=a,document.head.appendChild(i),a}Object.defineProperty(Ze,"__esModule",{value:!0});var n=Gt();function t(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var r=t(n);e(`.rfm-marquee-container {
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
}`);const o=n.forwardRef(function({style:i={},className:l="",autoFill:s=!1,play:u=!0,pauseOnHover:h=!1,pauseOnClick:m=!1,direction:f="left",speed:g=50,delay:b=0,loop:p=0,gradient:v=!1,gradientColor:S="white",gradientWidth:j=200,onFinish:w,onCycleComplete:T,onMount:x,children:y},$){const[P,k]=n.useState(0),[E,A]=n.useState(0),[C,D]=n.useState(1),[F,V]=n.useState(!1),U=n.useRef(null),z=$||U,q=n.useRef(null),I=n.useCallback(()=>{if(q.current&&z.current){const W=z.current.getBoundingClientRect(),_=q.current.getBoundingClientRect();let R=W.width,Y=_.width;(f==="up"||f==="down")&&(R=W.height,Y=_.height),D(s&&R&&Y&&Y<R?Math.ceil(R/Y):1),k(R),A(Y)}},[s,z,f]);n.useEffect(()=>{if(F&&(I(),q.current&&z.current)){const W=new ResizeObserver(()=>I());return W.observe(z.current),W.observe(q.current),()=>{W&&W.disconnect()}}},[I,z,F]),n.useEffect(()=>{I()},[I,y]),n.useEffect(()=>{V(!0)},[]),n.useEffect(()=>{typeof x=="function"&&x()},[]);const Z=n.useMemo(()=>s?E*C/g:E<P?P/g:E/g,[s,P,E,C,g]),B=n.useMemo(()=>Object.assign(Object.assign({},i),{"--pause-on-hover":!u||h?"paused":"running","--pause-on-click":!u||h&&!m||m?"paused":"running","--width":f==="up"||f==="down"?"100vh":"100%","--transform":f==="up"?"rotate(-90deg)":f==="down"?"rotate(90deg)":"none"}),[i,u,h,m,f]),X=n.useMemo(()=>({"--gradient-color":S,"--gradient-width":typeof j=="number"?`${j}px`:j}),[S,j]),M=n.useMemo(()=>({"--play":u?"running":"paused","--direction":f==="left"?"normal":"reverse","--duration":`${Z}s`,"--delay":`${b}s`,"--iteration-count":p?`${p}`:"infinite","--min-width":s?"auto":"100%"}),[u,f,Z,b,p,s]),J=n.useMemo(()=>({"--transform":f==="up"?"rotate(90deg)":f==="down"?"rotate(-90deg)":"none"}),[f]),G=n.useCallback(W=>[...Array(Number.isFinite(W)&&W>=0?W:0)].map((_,R)=>r.default.createElement(n.Fragment,{key:R},n.Children.map(y,Y=>r.default.createElement("div",{style:J,className:"rfm-child"},Y)))),[J,y]);return F?r.default.createElement("div",{ref:z,style:B,className:"rfm-marquee-container "+l},v&&r.default.createElement("div",{style:X,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:M,onAnimationIteration:T,onAnimationEnd:w},r.default.createElement("div",{className:"rfm-initial-child-container",ref:q},n.Children.map(y,W=>r.default.createElement("div",{style:J,className:"rfm-child"},W))),G(C-1)),r.default.createElement("div",{className:"rfm-marquee",style:M},G(C))):null});return Ze.default=o,Ze}var na=ea();const ta=Zt(na),ra=({text:e})=>c.jsx("div",{className:"bg-amber-300 py-2",children:c.jsx(ta,{className:"text-gray-700 text-xs sm:text-sm xl:text-base",children:e})});var oa=class extends Error{constructor(e){super(`react-collapsed: ${e}`)}},on=(...e)=>Gr(e[0],`[react-collapsed] -- ${e[1]}`);function sr(e){const n=d.useRef(e);return d.useEffect(()=>{n.current=e}),d.useCallback((...t)=>n.current?.(...t),[])}function aa(e,n,t){const[r,o]=d.useState(n),a=d.useRef(typeof e<"u"),i=a.current?e:r,l=sr(t),s=d.useCallback(u=>{const m=typeof u=="function"?u(i):u;a.current||o(m),l?.(m)},[l,i]);return d.useEffect(()=>{on(!(a.current&&e==null),"`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),on(!(!a.current&&e!=null),"`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")},[e]),[i,s]}var ia="(prefers-reduced-motion: reduce)";function sa(){const[e,n]=d.useState(!1);return d.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const t=window.matchMedia(ia);n(t.matches);const r=o=>{n(o.matches)};if(t.addEventListener)return t.addEventListener("change",r),()=>{t.removeEventListener("change",r)};if(t.addListener)return t.addListener(r),()=>{t.removeListener(r)}},[]),e}var la=tn.useId||(()=>{});function ca(){return la()??""}var ua=typeof window<"u"?d.useLayoutEffect:d.useEffect,On=!1,da=0,xt=()=>++da;function ha(e){const n=e||(On?xt():null),[t,r]=d.useState(n);return ua(()=>{t===null&&r(xt())},[]),d.useEffect(()=>{On===!1&&(On=!0)},[]),t!=null?String(t):void 0}function fa(e){const n=ca(),t=ha(e);return typeof e=="string"?e:typeof n=="string"?n:t}function pa(e,n){const t=performance.now(),r={};function o(){r.id=requestAnimationFrame(a=>{a-t>n?e():o()})}return o(),r}function yt(e){e.id&&cancelAnimationFrame(e.id)}function wt(e){return e?.current?e.current.scrollHeight:(on(!0,"Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"),0)}function ma(e){if(!e||typeof e=="string")return 0;const n=e/36;return Math.round((4+15*n**.25+n/5)*10)}function ba(e,n){if(e!=null)if(typeof e=="function")e(n);else try{e.current=n}catch{throw new oa(`Cannot assign value "${n}" to ref "${e}"`)}}function kt(...e){return e.every(n=>n==null)?null:n=>{e.forEach(t=>{ba(t,n)})}}function ga(e){let n=t=>{};n=t=>{if(!t?.current)return;const{paddingTop:r,paddingBottom:o}=window.getComputedStyle(t.current);on(!(r&&r!=="0px"||o&&o!=="0px"),`Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`)},d.useEffect(()=>{n(e)},[e])}var va=typeof window>"u"?d.useEffect:d.useLayoutEffect;function xa({duration:e,easing:n="cubic-bezier(0.4, 0, 0.2, 1)",onTransitionStateChange:t=()=>{},isExpanded:r,defaultExpanded:o=!1,hasDisabledAnimation:a,id:i,...l}={}){const s=sr(t),u=fa(i?`${i}`:void 0),[h,m]=aa(r,o),f=d.useRef(h),[g,b]=d.useState(!1),p=sa(),v=a??p,S=d.useRef(),j=d.useRef(),w=d.useRef(null),[T,x]=d.useState(null);ga(w);const y=`${l.collapsedHeight||0}px`;function $(P){if(!w.current)return;const k=w.current;for(const E in P){const A=P[E];A?k.style[E]=A:k.style.removeProperty(E)}}return va(()=>{if(!w.current||h===f.current)return;f.current=h;function k(C){return v?0:e??ma(C)}const E=C=>`height ${k(C)}ms ${n}`,A=C=>{function D(){h?($({height:"",overflow:"",transition:"",display:""}),s("expandEnd")):($({transition:""}),s("collapseEnd")),b(!1)}j.current&&yt(j.current),j.current=pa(D,C)};return b(!0),h?S.current=requestAnimationFrame(()=>{s("expandStart"),$({display:"block",overflow:"hidden",height:y}),S.current=requestAnimationFrame(()=>{s("expanding");const C=wt(w);A(k(C)),w.current&&(w.current.style.transition=E(C),w.current.style.height=`${C}px`)})}):S.current=requestAnimationFrame(()=>{s("collapseStart");const C=wt(w);A(k(C)),$({transition:E(C),height:`${C}px`}),S.current=requestAnimationFrame(()=>{s("collapsing"),$({height:y,overflow:"hidden"})})}),()=>{S.current&&cancelAnimationFrame(S.current),j.current&&yt(j.current)}},[h,y,v,e,n,s]),{isExpanded:h,setExpanded:m,getToggleProps(P){const{disabled:k,onClick:E,refKey:A,...C}={refKey:"ref",onClick(){},disabled:!1,...P},D=T?T.tagName==="BUTTON":void 0,F=P?.[A||"ref"],V={id:`react-collapsed-toggle-${u}`,"aria-controls":`react-collapsed-panel-${u}`,"aria-expanded":h,onClick(q){k||(E?.(q),m(I=>!I))},[A||"ref"]:kt(F,x)},U={type:"button",disabled:k?!0:void 0},z={"aria-disabled":k?!0:void 0,role:"button",tabIndex:k?-1:0};return D===!1?{...V,...z,...C}:D===!0?{...V,...U,...C}:{...V,...U,...z,...C}},getCollapseProps(P){const{style:k,refKey:E}={refKey:"ref",style:{},...P},A=P?.[E||"ref"];return{id:`react-collapsed-panel-${u}`,"aria-hidden":!h,"aria-labelledby":`react-collapsed-toggle-${u}`,role:"region",...P,[E||"ref"]:kt(w,A),style:{boxSizing:"border-box",...!g&&!h?{display:y==="0px"?"none":"block",height:y,overflow:"hidden"}:{},...k}}}}}function ya(e){const n=parseFloat(e);return!isNaN(n)&&isFinite(n)}function Pt(e){return typeof e=="string"&&e[e.length-1]==="%"&&ya(e.substring(0,e.length-1))}function Sn(e,n,t){n===0&&!t&&e?.style&&e?.children.length>0&&(e.style.display="none")}function wa(e,n){n===0&&e?.style&&(e.style.display="")}const ka={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Ot(e,n){return[e.static,n===0&&e.staticHeightZero,typeof n=="number"&&n>0?e.staticHeightSpecific:null,n==="auto"&&e.staticHeightAuto].filter(t=>t).join(" ")}const Pa=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],lr=O.forwardRef((e,n)=>{const{animateOpacity:t=!1,animationStateClasses:r={},applyInlineTransitions:o=!0,children:a,className:i="",contentClassName:l,delay:s=0,disableDisplayNone:u=!1,duration:h=500,easing:m="ease",height:f,onHeightAnimationEnd:g,onHeightAnimationStart:b,style:p,contentRef:v}=e,S=Object.assign({},e);Pa.forEach(G=>{delete S[G]});const j=d.useRef(f),w=d.useRef(null),T=d.useRef(),x=d.useRef(),y=d.useRef(Object.assign(Object.assign({},ka),r)),$=typeof window<"u",P=d.useRef($&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),k=P.current?0:s,E=P.current?0:h;let A=f,C="visible";typeof f=="number"?(A=f<0?0:f,C="hidden"):Pt(A)&&(A=f==="0%"?0:f,C="hidden");const[D,F]=d.useState(A),[V,U]=d.useState(C),[z,q]=d.useState(!1),[I,Z]=d.useState(Ot(y.current,f));d.useEffect(()=>{Sn(w.current,D,u)},[]),d.useEffect(()=>{if(f!==j.current&&w.current){wa(w.current,j.current),w.current.style.overflow="hidden";const G=w.current.offsetHeight;w.current.style.overflow="";const W=E+k;let _,R,Y="hidden",Re;const yn=j.current==="auto";typeof f=="number"?(_=f<0?0:f,R=_):Pt(f)?(_=f==="0%"?0:f,R=_):(_=G,R="auto",Y=void 0),yn&&(R=_,_=G);const Wr=[y.current.animating,(j.current==="auto"||f<j.current)&&y.current.animatingUp,(f==="auto"||f>j.current)&&y.current.animatingDown,R===0&&y.current.animatingToHeightZero,R==="auto"&&y.current.animatingToHeightAuto,typeof R=="number"&&R>0?y.current.animatingToHeightSpecific:null].filter(Qr=>Qr).join(" "),st=Ot(y.current,R);F(_),U("hidden"),q(!yn),Z(Wr),clearTimeout(x.current),clearTimeout(T.current),yn?(Re=!0,x.current=setTimeout(()=>{F(R),U(Y),q(Re),b?.(R)},50),T.current=setTimeout(()=>{q(!1),Z(st),Sn(w.current,R,u),g?.(R)},W)):(b?.(_),x.current=setTimeout(()=>{F(R),U(Y),q(!1),Z(st),f!=="auto"&&Sn(w.current,_,u),g?.(_)},W))}return j.current=f,()=>{clearTimeout(x.current),clearTimeout(T.current)}},[f]);const B=Object.assign(Object.assign({},p),{height:D,overflow:V||p?.overflow});z&&o&&(B.transition=`height ${E}ms ${m} ${k}ms`,p?.transition&&(B.transition=`${p.transition}, ${B.transition}`),B.WebkitTransition=B.transition);const X={};t&&(X.transition=`opacity ${E}ms ${m} ${k}ms`,X.WebkitTransition=X.transition,D===0&&(X.opacity=0));const J=typeof S["aria-hidden"]<"u"?S["aria-hidden"]:f===0;return O.createElement("div",Object.assign({},S,{"aria-hidden":J,className:`${I} ${i}`,style:B,ref:n}),O.createElement("div",{className:l,style:X,ref:G=>{w.current=G,v&&(v.current=G)}},a))});function Oa(){if(typeof window>"u"||!window.GestureEvent)return 50;try{const e=navigator.userAgent?.match(/version\/([\d\.]+) safari/i);return parseFloat(e[1])>=17?120:320}catch{return 320}}function Sa(e){return{method:"throttle",timeMs:e}}const Le=Sa(Oa());function ja(e){return e===null||Array.isArray(e)&&e.length===0}function Ea(e,n,t){if(typeof e=="string")t.set(n,e);else{t.delete(n);for(const r of e)t.append(n,r);t.has(n)||t.set(n,"")}return t}function cr(){const e=new Map;return{on(n,t){const r=e.get(n)||[];return r.push(t),e.set(n,r),()=>this.off(n,t)},off(n,t){const r=e.get(n);r&&e.set(n,r.filter(o=>o!==t))},emit(n,t){e.get(n)?.forEach(r=>r(t))}}}function Hn(e,n,t){function r(){e(),t.removeEventListener("abort",a)}const o=setTimeout(r,n);function a(){clearTimeout(o),t.removeEventListener("abort",a)}t.addEventListener("abort",a)}function Vn(){const e=Promise;if(Promise.hasOwnProperty("withResolvers"))return Promise.withResolvers();let n=()=>{},t=()=>{};return{promise:new e((r,o)=>{n=r,t=o}),resolve:n,reject:t}}function Na(e,n){let t=n;for(let r=e.length-1;r>=0;r--){const o=e[r];if(!o)continue;const a=t;t=()=>o(a)}t()}function Un(){return new URLSearchParams(location.search)}var ur=class{updateMap=new Map;options={history:"replace",scroll:!1,shallow:!0};timeMs=Le.timeMs;transitions=new Set;resolvers=null;controller=null;lastFlushedAt=0;resetQueueOnNextPush=!1;push({key:e,query:n,options:t},r=Le.timeMs){this.resetQueueOnNextPush&&(this.reset(),this.resetQueueOnNextPush=!1),Q("[nuqs gtq] Enqueueing %s=%s %O",e,n,t),this.updateMap.set(e,n),t.history==="push"&&(this.options.history="push"),t.scroll&&(this.options.scroll=!0),t.shallow===!1&&(this.options.shallow=!1),t.startTransition&&this.transitions.add(t.startTransition),(!Number.isFinite(this.timeMs)||r>this.timeMs)&&(this.timeMs=r)}getQueuedQuery(e){return this.updateMap.get(e)}getPendingPromise({getSearchParamsSnapshot:e=Un}){return this.resolvers?.promise??Promise.resolve(e())}flush({getSearchParamsSnapshot:e=Un,rateLimitFactor:n=1,...t},r){if(this.controller??=new AbortController,!Number.isFinite(this.timeMs))return Q("[nuqs gtq] Skipping flush due to throttleMs=Infinity"),Promise.resolve(e());if(this.resolvers)return this.resolvers.promise;this.resolvers=Vn();const o=()=>{this.lastFlushedAt=performance.now();const[i,l]=this.applyPendingUpdates({...t,autoResetQueueOnUpdate:t.autoResetQueueOnUpdate??!0,getSearchParamsSnapshot:e},r);l===null?(this.resolvers.resolve(i),this.resetQueueOnNextPush=!0):this.resolvers.reject(i),this.resolvers=null};return Hn(()=>{const i=performance.now()-this.lastFlushedAt,l=this.timeMs,s=n*Math.max(0,l-i);Q("[nuqs gtq] Scheduling flush in %f ms. Throttled at %f ms (x%f)",s,l,n),s===0?o():Hn(o,s,this.controller.signal)},0,this.controller.signal),this.resolvers.promise}abort(){return this.controller?.abort(),this.controller=new AbortController,this.resolvers?.resolve(new URLSearchParams),this.resolvers=null,this.reset()}reset(){const e=Array.from(this.updateMap.keys());return Q("[nuqs gtq] Resetting queue %s",JSON.stringify(Object.fromEntries(this.updateMap))),this.updateMap.clear(),this.transitions.clear(),this.options={history:"replace",scroll:!1,shallow:!0},this.timeMs=Le.timeMs,e}applyPendingUpdates(e,n){const{updateUrl:t,getSearchParamsSnapshot:r}=e;let o=r();if(Q("[nuqs gtq] Applying %d pending update(s) on top of %s",this.updateMap.size,o.toString()),this.updateMap.size===0)return[o,null];const a=Array.from(this.updateMap.entries()),i={...this.options},l=Array.from(this.transitions);e.autoResetQueueOnUpdate&&this.reset(),Q("[nuqs gtq] Flushing queue %O with options %O",a,i);for(const[s,u]of a)u===null?o.delete(s):o=Ea(u,s,o);n&&(o=n(o));try{return Na(l,()=>{t(o,i)}),[o,null]}catch(s){return console.error(Jt(429),a.map(([u])=>u).join(),s),[o,s]}}};const nn=new ur;function Ta(e,n,t){const r=d.useCallback(()=>{const a=Object.fromEntries(e.map(i=>[i,t(i)]));return[JSON.stringify(a),a]},[e.join(","),t]),o=d.useRef(null);return o.current===null&&(o.current=r()),d.useSyncExternalStore(d.useCallback(a=>{const i=e.map(l=>n(l,a));return()=>i.forEach(l=>l())},[e.join(","),n]),()=>{const[a,i]=r();return o.current[0]===a?o.current[1]:(o.current=[a,i],i)},()=>o.current[1])}var Ca=class{callback;resolvers=Vn();controller=new AbortController;queuedValue=void 0;constructor(e){this.callback=e}abort(){this.controller.abort(),this.queuedValue=void 0}push(e,n){return this.queuedValue=e,this.controller.abort(),this.controller=new AbortController,Hn(()=>{const t=this.resolvers;try{Q("[nuqs dq] Flushing debounce queue",e);const r=this.callback(e);Q("[nuqs dq] Reset debounce queue %O",this.queuedValue),this.queuedValue=void 0,this.resolvers=Vn(),r.then(o=>t.resolve(o)).catch(o=>t.reject(o))}catch(r){this.queuedValue=void 0,t.reject(r)}},n,this.controller.signal),this.resolvers.promise}},$a=class{throttleQueue;queues=new Map;queuedQuerySync=cr();constructor(e=new ur){this.throttleQueue=e}useQueuedQueries(e){return Ta(e,(n,t)=>this.queuedQuerySync.on(n,t),n=>this.getQueuedQuery(n))}push(e,n,t,r){if(!Number.isFinite(n)){const i=t.getSearchParamsSnapshot??Un;return Promise.resolve(i())}const o=e.key;if(!this.queues.has(o)){Q("[nuqs dqc] Creating debounce queue for `%s`",o);const i=new Ca(l=>(this.throttleQueue.push(l),this.throttleQueue.flush(t,r).finally(()=>{this.queues.get(l.key)?.queuedValue===void 0&&(Q("[nuqs dqc] Cleaning up empty queue for `%s`",l.key),this.queues.delete(l.key)),this.queuedQuerySync.emit(l.key)})));this.queues.set(o,i)}Q("[nuqs dqc] Enqueueing debounce update %O",e);const a=this.queues.get(o).push(e,n);return this.queuedQuerySync.emit(o),a}abort(e){const n=this.queues.get(e);return n?(Q("[nuqs dqc] Aborting debounce queue %s=%s",e,n.queuedValue?.query),this.queues.delete(e),n.abort(),this.queuedQuerySync.emit(e),t=>(t.then(n.resolvers.resolve,n.resolvers.reject),t)):t=>t}abortAll(){for(const[e,n]of this.queues.entries())Q("[nuqs dqc] Aborting debounce queue %s=%s",e,n.queuedValue?.query),n.abort(),n.resolvers.resolve(new URLSearchParams),this.queuedQuerySync.emit(e);this.queues.clear()}getQueuedQuery(e){const n=this.queues.get(e)?.queuedValue?.query;return n!==void 0?n:this.throttleQueue.getQueuedQuery(e)}};const jn=new $a(nn);function Ma(e,n){return e===n?!0:e===null||n===null||typeof e=="string"||typeof n=="string"||e.length!==n.length?!1:e.every((t,r)=>t===n[r])}function dr(e,n,t){try{return e(n)}catch(r){return no("[nuqs] Error while parsing value `%s`: %O"+(t?" (for key `%s`)":""),n,r,t),null}}function ye(e){function n(t){if(typeof t>"u")return null;let r="";if(Array.isArray(t)){if(t[0]===void 0)return null;r=t[0]}return typeof t=="string"&&(r=t),dr(e.parse,r)}return{type:"single",eq:(t,r)=>t===r,...e,parseServerSide:n,withDefault(t){return{...this,defaultValue:t,parseServerSide(r){return n(r)??t}}},withOptions(t){return{...this,...t}}}}const En=ye({parse:e=>e,serialize:String});ye({parse:e=>{const n=parseInt(e);return n==n?n:null},serialize:e=>""+Math.round(e)});ye({parse:e=>{const n=parseInt(e);return n==n?n-1:null},serialize:e=>""+Math.round(e+1)});ye({parse:e=>{const n=parseInt(e,16);return n==n?n:null},serialize:e=>{const n=Math.round(e).toString(16);return(n.length&1?"0":"")+n}});ye({parse:e=>{const n=parseFloat(e);return n==n?n:null},serialize:String});ye({parse:e=>e.toLowerCase()==="true",serialize:String});function et(e,n){return e.valueOf()===n.valueOf()}ye({parse:e=>{const n=parseInt(e);return n==n?new Date(n):null},serialize:e=>""+e.valueOf(),eq:et});ye({parse:e=>{const n=new Date(e);return n.valueOf()==n.valueOf()?n:null},serialize:e=>e.toISOString(),eq:et});ye({parse:e=>{const n=new Date(e.slice(0,10));return n.valueOf()==n.valueOf()?n:null},serialize:e=>e.toISOString().slice(0,10),eq:et});const Nn=cr(),Aa={};function _a(e,n={}){const t=d.useId(),r=Zr(),o=Jr(),{history:a="replace",scroll:i=r?.scroll??!1,shallow:l=r?.shallow??!0,throttleMs:s=Le.timeMs,limitUrlUpdates:u=r?.limitUrlUpdates,clearOnDefault:h=r?.clearOnDefault??!0,startTransition:m,urlKeys:f=Aa}=n,g=Object.keys(e).join(","),b=d.useMemo(()=>Object.fromEntries(Object.keys(e).map(P=>[P,f[P]??P])),[g,JSON.stringify(f)]),p=eo(Object.values(b)),v=p.searchParams,S=d.useRef({}),j=d.useMemo(()=>Object.fromEntries(Object.keys(e).map(P=>[P,e[P].defaultValue??null])),[Object.values(e).map(({defaultValue:P})=>P).join(",")]),w=jn.useQueuedQueries(Object.values(b)),[T,x]=d.useState(()=>Tn(e,f,v??new URLSearchParams,w).state),y=d.useRef(T);if(Q("[nuq+ %s `%s`] render - state: %O, iSP: %s",t,g,T,v),Object.keys(S.current).join("&")!==Object.values(b).join("&")){const{state:P,hasChanged:k}=Tn(e,f,v,w,S.current,y.current);k&&(Q("[nuq+ %s `%s`] State changed: %O",t,g,{state:P,initialSearchParams:v,queuedQueries:w,queryRef:S.current,stateRef:y.current}),y.current=P,x(P)),S.current=Object.fromEntries(Object.entries(b).map(([E,A])=>[A,e[E]?.type==="multi"?v?.getAll(A):v?.get(A)??null]))}d.useEffect(()=>{const{state:P,hasChanged:k}=Tn(e,f,v,w,S.current,y.current);k&&(Q("[nuq+ %s `%s`] State changed: %O",t,g,{state:P,initialSearchParams:v,queuedQueries:w,queryRef:S.current,stateRef:y.current}),y.current=P,x(P))},[Object.values(b).map(P=>`${P}=${v?.getAll(P)}`).join("&"),JSON.stringify(w)]),d.useEffect(()=>{const P=Object.keys(e).reduce((k,E)=>(k[E]=({state:A,query:C})=>{x(D=>{const{defaultValue:F}=e[E],V=b[E],U=A??F??null,z=D[E]??F??null;return Object.is(z,U)?(Q("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). no change, skipping, resolved: %O",t,g,V,A,F,y.current),D):(y.current={...y.current,[E]:U},S.current[V]=C,Q("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). updateInternalState, resolved: %O",t,g,V,A,F,y.current),y.current)})},k),{});for(const k of Object.keys(e)){const E=b[k];Q("[nuq+ %s `%s`] Subscribing to sync for `%s`",t,E,g),Nn.on(E,P[k])}return()=>{for(const k of Object.keys(e)){const E=b[k];Q("[nuq+ %s `%s`] Unsubscribing to sync for `%s`",t,E,g),Nn.off(E,P[k])}}},[g,b]);const $=d.useCallback((P,k={})=>{const E=Object.fromEntries(Object.keys(e).map(z=>[z,null])),A=typeof P=="function"?P(St(y.current,j))??E:P??E;Q("[nuq+ %s `%s`] setState: %O",t,g,A);let C,D=0,F=!1;const V=[];for(let[z,q]of Object.entries(A)){const I=e[z],Z=b[z];if(!I||q===void 0)continue;(k.clearOnDefault??I.clearOnDefault??h)&&q!==null&&I.defaultValue!==void 0&&(I.eq??((M,J)=>M===J))(q,I.defaultValue)&&(q=null);const B=q===null?null:(I.serialize??String)(q);Nn.emit(Z,{state:q,query:B});const X={key:Z,query:B,options:{history:k.history??I.history??a,shallow:k.shallow??I.shallow??l,scroll:k.scroll??I.scroll??i,startTransition:k.startTransition??I.startTransition??m}};if(k?.limitUrlUpdates?.method==="debounce"||u?.method==="debounce"||I.limitUrlUpdates?.method==="debounce"){X.options.shallow===!0&&console.warn(Jt(422));const M=k?.limitUrlUpdates?.timeMs??u?.timeMs??I.limitUrlUpdates?.timeMs??Le.timeMs,J=jn.push(X,M,p,o);D<M&&(C=J,D=M)}else{const M=k?.limitUrlUpdates?.timeMs??I?.limitUrlUpdates?.timeMs??u?.timeMs??k.throttleMs??I.throttleMs??s;V.push(jn.abort(Z)),nn.push(X,M),F=!0}}const U=V.reduce((z,q)=>q(z),F?nn.flush(p,o):nn.getPendingPromise(p));return C??U},[g,a,l,i,s,u?.method,u?.timeMs,m,b,p.updateUrl,p.getSearchParamsSnapshot,p.rateLimitFactor,o,j]);return[d.useMemo(()=>St(T,j),[T,j]),$]}function Tn(e,n,t,r,o,a){let i=!1;const l=Object.entries(e).reduce((s,[u,h])=>{const m=n?.[u]??u,f=r[m],g=h.type==="multi"?[]:null,b=f===void 0?(h.type==="multi"?t?.getAll(m):t?.get(m))??g:f;return o&&a&&Ma(o[m]??g,b)?(s[u]=a[u]??null,s):(i=!0,s[u]=(ja(b)?null:dr(h.parse,b,m))??null,o&&(o[m]=b),s)},{});if(!i){const s=Object.keys(e),u=Object.keys(a??{});i=s.length!==u.length||s.some(h=>!u.includes(h))}return{state:l,hasChanged:i}}function St(e,n){return Object.fromEntries(Object.keys(e).map(t=>[t,e[t]??n[t]??null]))}function Cn(e,n={}){const{parse:t,type:r,serialize:o,eq:a,defaultValue:i,...l}=n,[{[e]:s},u]=_a({[e]:{parse:t??(h=>h),type:r,serialize:o,eq:a,defaultValue:i}},l);return[s,d.useCallback((h,m={})=>u(f=>({[e]:typeof h=="function"?h(f[e]):h}),m),[e,u])]}const jt=e=>{let n;const t=new Set,r=(u,h)=>{const m=typeof u=="function"?u(n):u;if(!Object.is(m,n)){const f=n;n=h??(typeof m!="object"||m===null)?m:Object.assign({},n,m),t.forEach(g=>g(n,f))}},o=()=>n,l={setState:r,getState:o,getInitialState:()=>s,subscribe:u=>(t.add(u),()=>t.delete(u))},s=n=e(r,o,l);return l},Da=(e=>e?jt(e):jt),Ra=e=>e;function qa(e,n=Ra){const t=O.useSyncExternalStore(e.subscribe,O.useCallback(()=>n(e.getState()),[e,n]),O.useCallback(()=>n(e.getInitialState()),[e,n]));return O.useDebugValue(t),t}const Et=e=>{const n=Da(e),t=r=>qa(n,r);return Object.assign(t,n),t},Ia=(e=>e?Et(e):Et),De=Ia()(e=>({data:[],setData:n=>e({data:n})})),$e=()=>{const{setData:e}=De(),[n,t]=Cn("search",En.withDefault("")),[r,o]=Cn("parent_id",En.withDefault("")),[a,i]=Cn("id",En.withDefault(""));function l(m){t(m)}function s(m){o(`${m}`)}function u(m){i(`${m}`)}function h(){o(""),i(""),e([])}return{search:n,parentId:r,selfId:a,updateSearch:l,updateParentId:s,updateSelfId:u,clearAll:h}},hr=e=>{const{defaultHeight:n=0,dependency:t}=e||{},[r,o]=d.useState(n),[a,i]=d.useState(0),l=d.useRef(null);d.useEffect(()=>{if(l.current){const u=l.current.scrollHeight;o(u>n?n:u),i(u)}},[t]);function s(){o(r==n?"auto":n)}return{height:r,defaultHeight:n,contentRef:l,revealExceedMax:a>n,revealHiddenContent:s}},Fa=e=>c.jsx("div",{className:"flex flex-col space-y-2 max-h-[55dvh] overflow-y-auto scrollbar-none! mt-3",children:(e?.items||[])?.map(n=>c.jsx("div",{id:`x-${n?.name}`,className:"px-2.5 py-2.5 bg-gray-50 rounded-xs",children:c.jsx(za,{parentId:n?.id,parentName:n?.name,children:n?.children||[]})},`x-${n?.name}`))}),za=e=>{const[n,t]=d.useState(!1),{height:r,defaultHeight:o,contentRef:a,revealExceedMax:i,revealHiddenContent:l}=hr({defaultHeight:115,dependency:n}),{parentId:s,selfId:u,updateParentId:h,updateSelfId:m}=$e(),{setData:f}=De(),{getCollapseProps:g,getToggleProps:b}=xa({isExpanded:n,collapsedHeight:0,easing:"linear",duration:200});return d.useEffect(()=>{s&&+s==+e?.parentId&&t(!0)},[]),d.useEffect(()=>{(!s||+s!=+e?.parentId)&&t(!1)},[s,e?.parentId]),c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("button",{className:re("hover:scale-105 bg-white md:px-2 lg:px-4 py-1 rounded-xs text-sm md:text-xs lg:text-sm max-w-5/6 text-start hover:text-amber-500 hover:bg-amber-50 duration-300 transition-all cursor-pointer",{"text-amber-500 font-bold":e?.parentId==+u||e?.parentId==+s}),onClick:()=>{h(""),m(e?.parentId);const p=document.getElementById(`x-${e?.parentName}`);p&&p.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),f([e?.parentName])},children:e?.parentName}),(e?.children?.length||0)>0&&c.jsx("span",{className:"cursor-pointer p-0.5 bg-amber-500/10 rounded-xs",role:"button",...b({onClick:()=>t(p=>!p)}),children:n?c.jsx(zn,{className:"size-4 text-amber-500"}):c.jsx(In,{className:"size-4 text-amber-500"})})]}),c.jsxs("section",{...g(),className:"w-full! bg-white mt-3 rounded-xs border border-gray-100",children:[c.jsx(lr,{id:"example-panel z-20",className:"rounded-b-md",duration:150,easing:"linear",height:r||o,children:c.jsx("div",{ref:a,className:"grid grid-cols-2 gap-2 py-2 px-2 text-[13px] md:text-[10px] lg:text-xs",children:(e?.children||[])?.map(p=>c.jsx("button",{className:re("bg-gray-50 py-1.5 rounded-xs hover:bg-amber-500/10 hover:text-amber-500 cursor-pointer duration-300 transition-colors",{"text-white bg-amber-500":p?.id==+u}),onClick:()=>{h(e?.parentId),m(p?.id),window?.scrollTo({top:0,behavior:"smooth"}),f([e?.parentName,p?.name])},children:p?.name},p?.id))})}),i&&c.jsx("div",{className:"flex justify-center items-center",children:c.jsx("button",{className:"px-4 mt-1 mb-2 bg-white border border-gray-100 cursor-pointer rounded-xs","aria-expanded":r!==0,"aria-controls":"filter-type2",onClick:l,children:+r>=o?c.jsx(In,{className:"size-4 text-amber-500"}):c.jsx(zn,{className:"size-4 text-amber-500"})})})]})]})};var $n,Nt;function La(){if(Nt)return $n;Nt=1;var e="Expected a function",n=NaN,t="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,s=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,u=typeof self=="object"&&self&&self.Object===Object&&self,h=s||u||Function("return this")(),m=Object.prototype,f=m.toString,g=Math.max,b=Math.min,p=function(){return h.Date.now()};function v(x,y,$){var P,k,E,A,C,D,F=0,V=!1,U=!1,z=!0;if(typeof x!="function")throw new TypeError(e);y=T(y)||0,S($)&&(V=!!$.leading,U="maxWait"in $,E=U?g(T($.maxWait)||0,y):E,z="trailing"in $?!!$.trailing:z);function q(_){var R=P,Y=k;return P=k=void 0,F=_,A=x.apply(Y,R),A}function I(_){return F=_,C=setTimeout(X,y),V?q(_):A}function Z(_){var R=_-D,Y=_-F,Re=y-R;return U?b(Re,E-Y):Re}function B(_){var R=_-D,Y=_-F;return D===void 0||R>=y||R<0||U&&Y>=E}function X(){var _=p();if(B(_))return M(_);C=setTimeout(X,Z(_))}function M(_){return C=void 0,z&&P?q(_):(P=k=void 0,A)}function J(){C!==void 0&&clearTimeout(C),F=0,P=D=k=C=void 0}function G(){return C===void 0?A:M(p())}function W(){var _=p(),R=B(_);if(P=arguments,k=this,D=_,R){if(C===void 0)return I(D);if(U)return C=setTimeout(X,y),q(D)}return C===void 0&&(C=setTimeout(X,y)),A}return W.cancel=J,W.flush=G,W}function S(x){var y=typeof x;return!!x&&(y=="object"||y=="function")}function j(x){return!!x&&typeof x=="object"}function w(x){return typeof x=="symbol"||j(x)&&f.call(x)==t}function T(x){if(typeof x=="number")return x;if(w(x))return n;if(S(x)){var y=typeof x.valueOf=="function"?x.valueOf():x;x=S(y)?y+"":y}if(typeof x!="string")return x===0?x:+x;x=x.replace(r,"");var $=a.test(x);return $||i.test(x)?l(x.slice(2),$?2:8):o.test(x)?n:+x}return $n=v,$n}var Ha=La();const Tt=Zt(Ha);function Va(e){const n=d.useRef(e);n.current=e,d.useEffect(()=>()=>{n.current()},[])}function Ua(e,n=500,t){const r=d.useRef();Va(()=>{r.current&&r.current.cancel()});const o=d.useMemo(()=>{const a=Tt(e,n,t),i=(...l)=>a(...l);return i.cancel=()=>{a.cancel()},i.isPending=()=>!!r.current,i.flush=()=>a.flush(),i},[e,n,t]);return d.useEffect(()=>{r.current=Tt(e,n,t)},[e,n,t]),o}function Ba(e,n,t){const r=((u,h)=>u===h),o=e instanceof Function?e():e,[a,i]=d.useState(o),l=d.useRef(o),s=Ua(i,n,t);return r(l.current,o)||(s(o),l.current=o),[a,s]}const Ya=e=>new Promise(n=>setTimeout(n,e));function Wa({className:e,type:n,...t}){return c.jsx("input",{type:n,"data-slot":"input",className:re("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...t})}const fr=({className:e})=>{const{search:n,updateSearch:t}=$e(),[r,o]=d.useState(!1),[a,i]=Ba("",150),l=d.useRef(null),{t:s}=xe("translation");async function u(){a&&(o(!0),await Ya(500),t(a),window?.scrollTo({top:0,behavior:"smooth"}),o(!1))}return d.useEffect(()=>{!n&&l.current&&(l.current.value="")},[n]),c.jsxs("div",{className:re("relative grow overflow-hidden rounded-xs mt-2.5",e),children:[c.jsx(Wa,{maxLength:50,defaultValue:n,type:"search",ref:l,placeholder:s("common.search-placeholder"),className:re("overflow-hidden focus-visible:ring-0 text-sm bg-white border border-gray-100/50 md:bg-gray-100/60 focus-visible:border-gray-100 placeholder:text-xs h-11 rounded-xs! pr-10 pl-5",{"animate-pulse":r}),onChange:h=>{h?.target?.value||t(h?.target?.value),i(h.target.value)},onKeyDown:h=>{h.key==="Enter"&&u()}}),c.jsx("button",{className:"hover:scale-105 duration-500 transition-all hover:bg-primary/90 absolute right-2 my-auto top-0 bottom-0 cursor-pointer bg-amber-500 size-7 rounded-xs flex justify-center items-center",onClick:async()=>u(),children:r?c.jsx(jo,{className:"size-4 text-white animate-spin"}):c.jsx(No,{className:"size-4 text-white"})})]})},Qa=({filterOptions:e})=>{const{t:n}=xe("translation"),{clearAll:t}=$e();return c.jsxs("div",{className:"sticky top-24",children:[c.jsxs("div",{className:"bg-white rounded-xs p-3 h-fit",children:[c.jsx("p",{className:"text-sm font-bold px-1",children:n("common.search-label")}),c.jsx(fr,{})]}),c.jsxs("div",{className:"bg-white rounded-xs px-4 py-5 h-fit mt-2",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-sm font-bold px-1",children:[c.jsx(Oo,{className:"size-5 text-amber-500"}),c.jsx("span",{className:"text-pretty/80",children:n("common.filter-label")})]}),c.jsx("button",{onClick:()=>{typeof window<"u"&&(t(),window?.scrollTo({top:0,behavior:"smooth"}))},className:"cursor-pointer text-sm text-gray-600 hover:text-amber-500 duration-300 transition-colors",children:n("common.clear-filter")})]}),c.jsx("div",{className:"w-full h-px bg-gray-100 mt-3"}),c.jsx(Fa,{items:e})]})]})};var Bn=function(e,n){return Bn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])},Bn(e,n)};function Xa(e,n){Bn(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var He=function(){return He=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},He.apply(this,arguments)};function Ka(e,n,t,r){var o,a=!1,i=0;function l(){o&&clearTimeout(o)}function s(){l(),a=!0}typeof n!="boolean"&&(r=t,t=n,n=void 0);function u(){var h=this,m=Date.now()-i,f=arguments;if(a)return;function g(){i=Date.now(),t.apply(h,f)}function b(){o=void 0}r&&!o&&g(),l(),r===void 0&&m>e?g():n!==!0&&(o=setTimeout(r?b:g,r===void 0?e-m:e))}return u.cancel=s,u}var _e={Pixel:"Pixel",Percent:"Percent"},Ct={unit:_e.Percent,value:.8};function $t(e){return typeof e=="number"?{unit:_e.Percent,value:e*100}:typeof e=="string"?e.match(/^(\d*(\.\d+)?)px$/)?{unit:_e.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:_e.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),Ct):(console.warn("scrollThreshold should be string or number"),Ct)}var Ga=(function(e){Xa(n,e);function n(t){var r=e.call(this,t)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:typeof r.props.scrollableTarget=="string"?document.getElementById(r.props.scrollableTarget):(r.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},r.onStart=function(o){r.lastScrollTop||(r.dragging=!0,o instanceof MouseEvent?r.startY=o.pageY:o instanceof TouchEvent&&(r.startY=o.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(o){r.dragging&&(o instanceof MouseEvent?r.currentY=o.pageY:o instanceof TouchEvent&&(r.currentY=o.touches[0].pageY),!(r.currentY<r.startY)&&(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),!(r.currentY-r.startY>r.maxPullDownDistance*1.5)&&r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")})},r.onScrollListener=function(o){typeof r.props.onScroll=="function"&&setTimeout(function(){return r.props.onScroll&&r.props.onScroll(o)},0);var a=r.props.height||r._scrollableNode?o.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!r.actionTriggered){var i=r.props.inverse?r.isElementAtTop(a,r.props.scrollThreshold):r.isElementAtBottom(a,r.props.scrollThreshold);i&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=a.scrollTop}},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},r.throttledOnScrollListener=Ka(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return n.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},n.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},n.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},n.getDerivedStateFromProps=function(t,r){var o=t.dataLength!==r.prevDataLength;return o?He(He({},r),{prevDataLength:t.dataLength}):null},n.prototype.isElementAtTop=function(t,r){r===void 0&&(r=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,a=$t(r);return a.unit===_e.Pixel?t.scrollTop<=a.value+o-t.scrollHeight+1:t.scrollTop<=a.value/100+o-t.scrollHeight+1},n.prototype.isElementAtBottom=function(t,r){r===void 0&&(r=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,a=$t(r);return a.unit===_e.Pixel?t.scrollTop+o>=t.scrollHeight-a.value:t.scrollTop+o>=a.value/100*t.scrollHeight},n.prototype.render=function(){var t=this,r=He({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),a=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return O.createElement("div",{style:a,className:"infinite-scroll-component__outerdiv"},O.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(i){return t._infScroll=i},style:r},this.props.pullDownToRefresh&&O.createElement("div",{style:{position:"relative"},ref:function(i){return t._pullDown=i}},O.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},n})(d.Component);function Yn({src:e,alt:n="",...t}){return c.jsx("img",{src:e,alt:n,onError:r=>{r.currentTarget.onerror=null,r.currentTarget.src=Fn},...t})}const Za=d.lazy(()=>to(()=>import("./index-fSb2Ucam.js"),__vite__mapDeps([0,1,2]))),Ja=e=>{const{convertedLocale:n}=er(),{t}=xe("translation");return!e.title&&!e.summary?null:e?.media?.length?e?.media?.length==1?c.jsx("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 bg-white p-3 sm:p-4 rounded-xs",children:c.jsxs("div",{className:"relative flex space-x-1 overflow-hidden",children:[c.jsxs("div",{className:"relative basis-2/5",children:[e?.media?.[0]?.type=="video"&&e?.media?.[0]?.url?c.jsx("div",{className:"relative rounded-xs min-h-30",children:c.jsx(Mt,{src:e?.media?.[0]?.url})}):c.jsx("div",{className:"shrink-0 relative rounded-xs overflow-hidden min-h-20 lg:h-40 mr-2",children:c.jsx(Yn,{src:e?.media?.[0]?.url||Fn,alt:e?.title,className:"object-contain border border-gray-50 rounded-xs"})}),e?.post_at&&c.jsxs("div",{className:"absolute top-0 left-0 right-0 bottom-0 max-sm:mt-1 px-2 ml-1 mt-2.5 flex items-center h-fit bg-black/20 py-1 backdrop-blur-xs w-fit space-x-1.5 text-[9px] lg:text-xs",children:[c.jsx(wn,{className:"max-sm:size-3.5 size-5 text-amber-400"}),c.jsx("span",{className:"text-white mt-0.5",children:kn(new Date(e?.post_at),n)})]})]}),c.jsx("div",{className:"basis-3/5 flex flex-col space-y-0.5 md:pl-1.5",children:c.jsxs("div",{className:"flex flex-col space-y-0.5",children:[c.jsxs("div",{className:"flex items-center justify-between sm:pb-2",children:[!!e?.is_recommended&&c.jsx("div",{className:"flex items-center space-x-1 bg-amber-400/5 px-1.5 py-0.5",children:c.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400",children:t("common.recommended-label")})}),e?.tags&&c.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm text-amber-500",children:(e?.tags||[]).map((r,o)=>c.jsxs("span",{children:["#",r]},o))})]}),c.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl leading-relaxed! text-gray-700 line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&c.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})})]})}):c.jsxs("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 flex flex-col space-y-3 bg-white p-3 sm:p-4 rounded-xs",children:[c.jsx("div",{children:c.jsxs("div",{className:"flex flex-col space-y-0.5",children:[c.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[e?.post_at&&c.jsxs("div",{className:"flex items-center space-x-1.5 text-[9px] text-black backdrop-blur-sm lg:text-xs w-fit",children:[c.jsx(wn,{className:"max-sm:size-3.5 size-5 text-amber-400"}),c.jsx("span",{className:"text-gray-500",children:kn(new Date(e?.post_at),n)})]}),!!e?.is_recommended&&c.jsx("div",{className:"size-2 bg-amber-400 rounded-full"}),!!e?.is_recommended&&c.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400 px-3 py-0.5 bg-amber-400/5",children:t("common.recommended-label")})]}),e?.tags&&c.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm text-amber-500",children:(e?.tags||[]).map((r,o)=>c.jsxs("span",{children:["#",r]},o))})]}),c.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl text-gray-700 leading-relaxed! line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&c.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})}),c.jsx("div",{className:re("grid grid-cols-2 gap-2"),children:(e?.media||[])?.slice(0,2).map((r,o)=>r?.type=="video"&&r?.url?c.jsx(Mt,{src:r?.url},o):c.jsx("div",{className:re("relative w-full min-h-24 lg:h-49 h-full rounded-xs overflow-hidden"),children:c.jsx(Yn,{src:r?.url||Fn,alt:e?.title,className:"border border-gray-50 object-contain rounded-xs overflow-hidden"})},o))})]}):c.jsx("div",{onClick:e?.onClick,className:"cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 bg-white p-3 sm:p-4 lg:p-5 mb-2 rounded-xs!",children:c.jsx("div",{className:"relative flex flex-col overflow-hidden",children:c.jsx("div",{className:"basis-3/5 flex flex-col space-y-1",children:c.jsxs("div",{className:"flex flex-col mt-2 space-y-0.5",children:[c.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[c.jsx("div",{className:"flex items-center justify-between w-full",children:c.jsxs("div",{className:"flex items-center space-x-2",children:[e?.post_at&&c.jsxs("div",{className:"flex items-center space-x-1.5 text-[9px] text-black backdrop-blur-sm lg:text-xs w-fit",children:[c.jsx(wn,{className:"max-sm:size-3.5 size-5 text-amber-400"}),c.jsx("span",{className:"text-gray-500",children:kn(new Date(e?.post_at),n)})]}),!!e?.is_recommended&&c.jsx("div",{className:"size-2 bg-amber-400 rounded-full"}),!!e?.is_recommended&&c.jsx("span",{className:"max-sm:text-[11px] text-sm text-amber-400 px-3 py-0.5 bg-amber-400/5",children:t("common.recommended-label")})]})}),e?.tags&&c.jsx("p",{className:"flex items-center space-x-1 text-xs lg:text-sm mt-2 text-amber-500",children:(e?.tags||[]).map((r,o)=>c.jsxs("span",{children:["#",r]},o))})]}),c.jsx("h4",{className:"font-bold md:text-xl lg:text-2xl leading-relaxed! text-gray-700 line-clamp-1 wrap-break-word",children:e?.title}),e?.summary&&c.jsx("p",{className:"text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word",children:e?.summary})]})})})})},Mt=({src:e})=>c.jsxs("div",{className:"relative h-30 md:aspect-w-16! md:aspect-h-9! overflow-hidden rounded-xs",children:[c.jsx("div",{className:"absolute top-0 right-0 bottom-0 left-0 z-10 cursor-pointer"}),c.jsxs("div",{className:"size-full bg-gray-100/60 p-2 border border-gray-100",children:[c.jsx(d.Suspense,{fallback:c.jsx("div",{children:"..."}),children:c.jsx(Za,{className:"size-full!",src:e,fallback:c.jsx("div",{className:"relative rounded-xs bg-gray-100! aspect-w-16! aspect-h-8! animate-pulse",children:c.jsx("div",{className:"size-full flex justify-center items-center",children:c.jsx(ho,{className:"size-10 text-gray-100"})})})})}),c.jsx("span",{className:"absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 size-fit! bg-black/10 backdrop-blur-sm p-2 rounded-full",children:c.jsx(wo,{className:"text-white"})})]})]});function ei(e){return c.jsxs("svg",{...e,className:`animate-spin h-8 w-8 text-amber-500 ${e.className??""}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]})}const At=20,ni=e=>{const{keyword:n,type_id:t,type_pid:r}=e,[o,a]=d.useState(0),{convertedLocale:i}=er(),l=(n||"")?.length>50?n?.slice(0,50):n,{isFetching:s,isLoading:u,isFetchingNextPage:h,fetchNextPage:m,hasNextPage:f,data:g}=po({initialPageParam:1,queryKey:["news-search",i,t,r,l,o],queryFn:async({pageParam:b=1})=>{const p=await ro({page:b,page_size:At,keyword:n?l:void 0,type_id:t||void 0,type_pid:r||void 0},i);return a(p?.data?.total||0),p?.data?.list},getNextPageParam:(b,p,v)=>(b?.length||0)<At?void 0:v+1});return{isFetching:s,isLoading:u,isFetchingNextPage:h,hasNextPage:f,fetchNextPage:m,data:g?.pages?.flatMap(b=>b),total:o}},ti="/react-vite/assets/empty-news-C68dbbMJ.webp",ri="/react-vite/assets/empty-search-result-NkdVhJyE.webp",pr=({type:e="default",title:n,subtitle:t})=>{const r=oi(e);return c.jsx("div",{className:re("h-[calc(60dvh)] md:h-[calc(55dvh)] rounded-t-xl flex justify-center items-center",{"h-[calc(60dvh)] md:h-[calc(55dvh)]":e=="default"}),children:c.jsxs("div",{className:"size-fit flex flex-col justify-center items-center",children:[c.jsx(Yn,{src:r,alt:"empty-state",className:"object-cover",width:100,height:62}),c.jsxs("div",{className:"flex flex-col space-y-1 mt-4 justify-center items-center",children:[c.jsx("h2",{className:"text-xl font-bold text-primary text-center",children:n}),c.jsx("span",{className:"font-medium w-full px-10 text-gray-500 text-center text-sm",children:t})]})]})})};function oi(e){switch(e){default:case"default":return ti;case"search":return ri}}const mr=()=>{const e=oo(),n=$e(),{data:t}=De(),{isLoading:r,hasNextPage:o,fetchNextPage:a,data:i,total:l}=ni({keyword:n?.search,type_id:+n?.selfId,type_pid:+n?.parentId}),{t:s}=xe();if(r&&!i?.length)return c.jsx(si,{});if(!n?.search&&!r&&!i?.length)return c.jsx(ai,{total:l});if(n?.search&&!r&&!i?.length)return c.jsx(ii,{total:l});const u=t?.length?t?.join(" / ").toString():s("common.news-label");return c.jsx("div",{className:"relative",children:c.jsxs("div",{className:"relative pb-4 overflow-y-auto scrollbar-none",children:[n?.search?c.jsxs("div",{className:"flex items-center space-x-2 text-primary rounded-2xl pb-4 pt-1 px-1 font-bold",children:[c.jsx("span",{children:s("common.search-result",{total:`${l}`||"0"})}),c.jsx("div",{className:"grow h-px bg-gray-300"})]}):c.jsxs("div",{className:"px-2 pb-3 md:mb-2 flex items-center space-x-4",children:[c.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[c.jsx("span",{children:c.jsx(vo,{className:"size-5 md:size-6 lg:size-7"})}),c.jsx("span",{children:u})]}),c.jsx("div",{className:"grow h-px bg-gray-200"})]}),c.jsx(Ga,{scrollThreshold:.9,dataLength:(i||[])?.length,next:a,hasMore:o,className:"contents",loader:c.jsx("div",{className:"flex justify-center pb-3 pt-3.5 items-center",children:c.jsx(ei,{})}),children:c.jsx("div",{className:"flex flex-col space-y-2",children:(i||[])?.map((h,m)=>c.jsx("div",{children:c.jsx(Ja,{...h,onClick:()=>{e({to:"/detail/$newId",params:{newId:`${h?.id}`},search:{parentId:n?.parentId?+n?.parentId:void 0,id:n?.selfId?+n?.selfId:void 0}})}},m)},m))})})]})})},ai=({total:e})=>{const{t:n}=xe();return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"pl-2 py-2 mb-2 flex items-center space-x-4",children:[c.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[c.jsx("span",{children:c.jsx(rr,{className:"size-5 md:size-6 lg:size-7"})}),c.jsx("span",{children:n("common.search-result",{total:`${e||0}`})})]}),c.jsx("div",{className:"grow h-px bg-gray-200"})]}),c.jsx("div",{className:"bg-white rounded-xs max-md:my-4",children:c.jsx(pr,{type:"default",title:n("components.list-empty-state.title"),subtitle:n("components.list-empty-state.subtitle")})})]})},ii=({total:e})=>{const{t:n}=xe();return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"pl-2 py-2 mb-2 flex items-center space-x-4",children:[c.jsxs("div",{className:"flex items-center space-x-3 font-bold sm:text-xl text-amber-500",children:[c.jsx("span",{children:c.jsx(rr,{className:"size-5 md:size-6 lg:size-7"})}),c.jsx("span",{children:n("common.search-result",{total:`${e||0}`})})]}),c.jsx("div",{className:"grow h-px bg-gray-200"})]}),c.jsx("div",{className:"bg-white rounded-xl max-md:my-4",children:c.jsx(pr,{type:"search",title:n("components.search-empty-state.title"),subtitle:n("components.search-empty-state.subtitle")})})]})},si=()=>c.jsxs("div",{className:"flex flex-col space-y-4",children:[c.jsxs(ie,{className:"flex items-center space-x-2",children:[c.jsx(ie,{className:"bg-gray-200/60 w-40 h-8 rounded-xs"}),c.jsx(ie,{className:"grow bg-gray-200 h-[1.5px]"})]}),c.jsx("div",{className:"flex flex-col space-y-3 pb-4",children:Array.from({length:4}).map((e,n)=>c.jsxs(ie,{className:"p-3 flex flex-col space-y-3 bg-gray-200/60 rounded-xs",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx(ie,{className:"w-20 h-4 rounded-xs"}),c.jsx(ie,{className:"w-20 h-4 rounded-xs"})]}),c.jsx(ie,{className:"w-72 h-4 rounded-xs"}),c.jsxs("div",{className:"flex flex-col space-y-2",children:[c.jsx(ie,{className:"w-5/6 h-2 rounded-xs"}),c.jsx(ie,{className:"w-full h-2 rounded-xs"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsx(ie,{className:"w-full h-24 rounded-xs flex justify-center items-center",children:c.jsx(ut,{className:"size-9 text-gray-200"})}),c.jsx(ie,{className:"w-full h-24 rounded-xs flex justify-center items-center",children:c.jsx(ut,{className:"size-9 text-gray-200"})})]})]},n))})]}),li=e=>{const{filterOptions:n}=e;return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"max-md:hidden",children:c.jsx(tr,{variant:"desktop"})}),c.jsxs("div",{className:"max-md:hidden relative grid grid-cols-12 lg:gap-3 p-3 lg:max-w-5xl xl:max-w-6xl mx-auto mt-4",children:[c.jsx("div",{className:"col-span-4",children:c.jsx(Qa,{filterOptions:n})}),c.jsx("div",{className:"col-span-8",children:c.jsx(mr,{})})]})]})},ci="shrink-0 px-3.5 bg-gray-100 cursor-pointer font-medium py-1.5 rounded-xs text-sm",ui=({filterOptions:e})=>{const{parentId:n,selfId:t,updateParentId:r,updateSelfId:o,clearAll:a}=$e(),{setData:i}=De(),{t:l}=xe("translation"),s=[{id:-1,label:l("common.news-label"),value:l("common.news-label")},...(e||[])?.map(u=>({id:u?.id,label:u?.name,value:u?.id}))];return c.jsx("div",{className:"flex space-x-1.5 items-center",children:(s||[])?.map((u,h)=>c.jsx("button",{id:`${u?.id}-${u?.label}`,className:re(ci,{"bg-amber-500 text-white":u?.id==+t||+n==u?.id||u?.id==-1&&!t&&!n}),onClick:()=>{if(u?.id==-1){a();const f=document.getElementById(`${u?.id}-${u?.label}`);f&&f.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),i([]);return}r(""),o(u?.id);const m=document.getElementById(`${u?.id}-${u?.label}`);m&&m.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),i([u?.label])},children:u.label},h))})};var di=Object.defineProperty,hi=(e,n,t)=>n in e?di(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Mn=(e,n,t)=>(hi(e,typeof n!="symbol"?n+"":n,t),t);let fi=class{constructor(){Mn(this,"current",this.detect()),Mn(this,"handoffState","pending"),Mn(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},fe=new fi;function Ye(e){var n;return fe.isServer?null:e==null?document:(n=e?.ownerDocument)!=null?n:document}function Wn(e){var n,t;return fe.isServer?null:e==null?document:(t=(n=e?.getRootNode)==null?void 0:n.call(e))!=null?t:document}function br(e){var n,t;return(t=(n=Wn(e))==null?void 0:n.activeElement)!=null?t:null}function pi(e){return br(e)===e}function dn(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function we(){let e=[],n={addEventListener(t,r,o,a){return t.addEventListener(r,o,a),n.add(()=>t.removeEventListener(r,o,a))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return dn(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,o){let a=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:o}),this.add(()=>{Object.assign(t.style,{[r]:a})})},group(t){let r=we();return t(r),this.add(()=>r.dispose())},add(t){return e.includes(t)||e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let t of e.splice(0))t()}};return n}function hn(){let[e]=d.useState(we);return d.useEffect(()=>()=>e.dispose(),[e]),e}let ee=(e,n)=>{fe.isServer?d.useEffect(e,n):d.useLayoutEffect(e,n)};function Me(e){let n=d.useRef(e);return ee(()=>{n.current=e},[e]),n}let L=function(e){let n=Me(e);return O.useCallback((...t)=>n.current(...t),[n])};function We(e){return d.useMemo(()=>e,Object.values(e))}let mi=d.createContext(void 0);function bi(){return d.useContext(mi)}function Qn(...e){return Array.from(new Set(e.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}function ve(e,n,...t){if(e in n){let o=n[e];return typeof o=="function"?o(...t):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ve),r}var an=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(an||{}),Oe=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Oe||{});function ae(){let e=vi();return d.useCallback(n=>gi({mergeRefs:e,...n}),[e])}function gi({ourProps:e,theirProps:n,slot:t,defaultTag:r,features:o,visible:a=!0,name:i,mergeRefs:l}){l=l??xi;let s=gr(n,e);if(a)return Je(s,t,r,i,l);let u=o??0;if(u&2){let{static:h=!1,...m}=s;if(h)return Je(m,t,r,i,l)}if(u&1){let{unmount:h=!0,...m}=s;return ve(h?0:1,{0(){return null},1(){return Je({...m,hidden:!0,style:{display:"none"}},t,r,i,l)}})}return Je(s,t,r,i,l)}function Je(e,n={},t,r,o){let{as:a=t,children:i,refName:l="ref",...s}=An(e,["unmount","static"]),u=e.ref!==void 0?{[l]:e.ref}:{},h=typeof i=="function"?i(n):i;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(n)),s["aria-labelledby"]&&s["aria-labelledby"]===s.id&&(s["aria-labelledby"]=void 0);let m={};if(n){let f=!1,g=[];for(let[b,p]of Object.entries(n))typeof p=="boolean"&&(f=!0),p===!0&&g.push(b.replace(/([A-Z])/g,v=>`-${v.toLowerCase()}`));if(f){m["data-headlessui-state"]=g.join(" ");for(let b of g)m[`data-${b}`]=""}}if(Ve(a)&&(Object.keys(Ee(s)).length>0||Object.keys(Ee(m)).length>0))if(!d.isValidElement(h)||Array.isArray(h)&&h.length>1||wi(h)){if(Object.keys(Ee(s)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(Ee(s)).concat(Object.keys(Ee(m))).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`))}else{let f=h.props,g=f?.className,b=typeof g=="function"?(...S)=>Qn(g(...S),s.className):Qn(g,s.className),p=b?{className:b}:{},v=gr(h.props,Ee(An(s,["ref"])));for(let S in m)S in v&&delete m[S];return d.cloneElement(h,Object.assign({},v,m,u,{ref:o(yi(h),u.ref)},p))}return d.createElement(a,Object.assign({},An(s,["ref"]),!Ve(a)&&u,!Ve(a)&&m),h)}function vi(){let e=d.useRef([]),n=d.useCallback(t=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(t):r.current=t)},[]);return(...t)=>{if(!t.every(r=>r==null))return e.current=t,n}}function xi(...e){return e.every(n=>n==null)?void 0:n=>{for(let t of e)t!=null&&(typeof t=="function"?t(n):t.current=n)}}function gr(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];if(n.disabled||n["aria-disabled"])for(let r in t)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(t[r]=[o=>{var a;return(a=o?.preventDefault)==null?void 0:a.call(o)}]);for(let r in t)Object.assign(n,{[r](o,...a){let i=t[r];for(let l of i){if((o instanceof Event||o?.nativeEvent instanceof Event)&&o.defaultPrevented)return;l(o,...a)}}});return n}function ne(e){var n;return Object.assign(d.forwardRef(e),{displayName:(n=e.displayName)!=null?n:e.name})}function Ee(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function An(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function yi(e){return O.version.split(".")[0]>="19"?e.props.ref:e.ref}function Ve(e){return e===d.Fragment||e===Symbol.for("react.fragment")}function wi(e){return Ve(e.type)}let ki="span";var sn=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(sn||{});function Pi(e,n){var t;let{features:r=1,...o}=e,a={ref:n,"aria-hidden":(r&2)===2?!0:(t=o["aria-hidden"])!=null?t:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return ae()({ourProps:a,theirProps:o,slot:{},defaultTag:ki,name:"Hidden"})}let Xn=ne(Pi);function Oi(e){return typeof e!="object"||e===null?!1:"nodeType"in e}function je(e){return Oi(e)&&"tagName"in e}function Ce(e){return je(e)&&"accessKey"in e}function Se(e){return je(e)&&"tabIndex"in e}function Si(e){return je(e)&&"style"in e}function ji(e){return Ce(e)&&e.nodeName==="IFRAME"}function Ei(e){return Ce(e)&&e.nodeName==="INPUT"}let vr=Symbol();function Ni(e,n=!0){return Object.assign(e,{[vr]:n})}function pe(...e){let n=d.useRef(e);d.useEffect(()=>{n.current=e},[e]);let t=L(r=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||r?.[vr])?void 0:t}let nt=d.createContext(null);nt.displayName="DescriptionContext";function xr(){let e=d.useContext(nt);if(e===null){let n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,xr),n}return e}function Ti(){let[e,n]=d.useState([]);return[e.length>0?e.join(" "):void 0,d.useMemo(()=>function(t){let r=L(a=>(n(i=>[...i,a]),()=>n(i=>{let l=i.slice(),s=l.indexOf(a);return s!==-1&&l.splice(s,1),l}))),o=d.useMemo(()=>({register:r,slot:t.slot,name:t.name,props:t.props,value:t.value}),[r,t.slot,t.name,t.props,t.value]);return O.createElement(nt.Provider,{value:o},t.children)},[n])]}let Ci="p";function $i(e,n){let t=d.useId(),r=bi(),{id:o=`headlessui-description-${t}`,...a}=e,i=xr(),l=pe(n);ee(()=>i.register(o),[o,i.register]);let s=We({...i.slot,disabled:r||!1}),u={ref:l,...i.props,id:o};return ae()({ourProps:u,theirProps:a,slot:s,defaultTag:Ci,name:i.name||"Description"})}let Mi=ne($i),Ai=Object.assign(Mi,{});var yr=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(yr||{});let _i=d.createContext(()=>{});function Di({value:e,children:n}){return O.createElement(_i.Provider,{value:e},n)}let wr=class extends Map{constructor(n){super(),this.factory=n}get(n){let t=super.get(n);return t===void 0&&(t=this.factory(n),this.set(n,t)),t}};var Ri=Object.defineProperty,qi=(e,n,t)=>n in e?Ri(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ii=(e,n,t)=>(qi(e,n+"",t),t),kr=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)},oe=(e,n,t)=>(kr(e,n,"read from private field"),t?t.call(e):n.get(e)),_n=(e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)},_t=(e,n,t,r)=>(kr(e,n,"write to private field"),n.set(e,t),t),de,Ie,Fe;let Fi=class{constructor(n){_n(this,de,{}),_n(this,Ie,new wr(()=>new Set)),_n(this,Fe,new Set),Ii(this,"disposables",we()),_t(this,de,n),fe.isServer&&this.disposables.microTask(()=>{this.dispose()})}dispose(){this.disposables.dispose()}get state(){return oe(this,de)}subscribe(n,t){if(fe.isServer)return()=>{};let r={selector:n,callback:t,current:n(oe(this,de))};return oe(this,Fe).add(r),this.disposables.add(()=>{oe(this,Fe).delete(r)})}on(n,t){return fe.isServer?()=>{}:(oe(this,Ie).get(n).add(t),this.disposables.add(()=>{oe(this,Ie).get(n).delete(t)}))}send(n){let t=this.reduce(oe(this,de),n);if(t!==oe(this,de)){_t(this,de,t);for(let r of oe(this,Fe)){let o=r.selector(oe(this,de));Pr(r.current,o)||(r.current=o,r.callback(o))}for(let r of oe(this,Ie).get(n.type))r(oe(this,de),n)}}};de=new WeakMap,Ie=new WeakMap,Fe=new WeakMap;function Pr(e,n){return Object.is(e,n)?!0:typeof e!="object"||e===null||typeof n!="object"||n===null?!1:Array.isArray(e)&&Array.isArray(n)?e.length!==n.length?!1:Dn(e[Symbol.iterator](),n[Symbol.iterator]()):e instanceof Map&&n instanceof Map||e instanceof Set&&n instanceof Set?e.size!==n.size?!1:Dn(e.entries(),n.entries()):Dt(e)&&Dt(n)?Dn(Object.entries(e)[Symbol.iterator](),Object.entries(n)[Symbol.iterator]()):!1}function Dn(e,n){do{let t=e.next(),r=n.next();if(t.done&&r.done)return!0;if(t.done||r.done||!Object.is(t.value,r.value))return!1}while(!0)}function Dt(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let n=Object.getPrototypeOf(e);return n===null||Object.getPrototypeOf(n)===null}var zi=Object.defineProperty,Li=(e,n,t)=>n in e?zi(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Rt=(e,n,t)=>(Li(e,typeof n!="symbol"?n+"":n,t),t),Hi=(e=>(e[e.Push=0]="Push",e[e.Pop=1]="Pop",e))(Hi||{});let Vi={0(e,n){let t=n.id,r=e.stack,o=e.stack.indexOf(t);if(o!==-1){let a=e.stack.slice();return a.splice(o,1),a.push(t),r=a,{...e,stack:r}}return{...e,stack:[...e.stack,t]}},1(e,n){let t=n.id,r=e.stack.indexOf(t);if(r===-1)return e;let o=e.stack.slice();return o.splice(r,1),{...e,stack:o}}},Ui=class Or extends Fi{constructor(){super(...arguments),Rt(this,"actions",{push:n=>this.send({type:0,id:n}),pop:n=>this.send({type:1,id:n})}),Rt(this,"selectors",{isTop:(n,t)=>n.stack[n.stack.length-1]===t,inStack:(n,t)=>n.stack.includes(t)})}static new(){return new Or({stack:[]})}reduce(n,t){return ve(t.type,Vi,n,t)}};const Sr=new wr(()=>Ui.new());var Rn={exports:{}},qn={};var qt;function Bi(){if(qt)return qn;qt=1;var e=Gt();function n(s,u){return s===u&&(s!==0||1/s===1/u)||s!==s&&u!==u}var t=typeof Object.is=="function"?Object.is:n,r=e.useSyncExternalStore,o=e.useRef,a=e.useEffect,i=e.useMemo,l=e.useDebugValue;return qn.useSyncExternalStoreWithSelector=function(s,u,h,m,f){var g=o(null);if(g.current===null){var b={hasValue:!1,value:null};g.current=b}else b=g.current;g=i(function(){function v(x){if(!S){if(S=!0,j=x,x=m(x),f!==void 0&&b.hasValue){var y=b.value;if(f(y,x))return w=y}return w=x}if(y=w,t(j,x))return y;var $=m(x);return f!==void 0&&f(y,$)?(j=x,y):(j=x,w=$)}var S=!1,j,w,T=h===void 0?null:h;return[function(){return v(u())},T===null?void 0:function(){return v(T())}]},[u,h,m,f]);var p=r(s,g[0],g[1]);return a(function(){b.hasValue=!0,b.value=p},[p]),l(p),p},qn}var It;function Yi(){return It||(It=1,Rn.exports=Bi()),Rn.exports}var Wi=Yi();function jr(e,n,t=Pr){return Wi.useSyncExternalStoreWithSelector(L(r=>e.subscribe(Qi,r)),L(()=>e.state),L(()=>e.state),L(n),t)}function Qi(e){return e}function Qe(e,n){let t=d.useId(),r=Sr.get(n),[o,a]=jr(r,d.useCallback(i=>[r.selectors.isTop(i,t),r.selectors.inStack(i,t)],[r,t]));return ee(()=>{if(e)return r.actions.push(t),()=>r.actions.pop(t)},[r,e,t]),e?a?o:!0:!1}let Kn=new Map,Ue=new Map;function Ft(e){var n;let t=(n=Ue.get(e))!=null?n:0;return Ue.set(e,t+1),t!==0?()=>zt(e):(Kn.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>zt(e))}function zt(e){var n;let t=(n=Ue.get(e))!=null?n:1;if(t===1?Ue.delete(e):Ue.set(e,t-1),t!==1)return;let r=Kn.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,Kn.delete(e))}function Xi(e,{allowed:n,disallowed:t}={}){let r=Qe(e,"inert-others");ee(()=>{var o,a;if(!r)return;let i=we();for(let s of(o=t?.())!=null?o:[])s&&i.add(Ft(s));let l=(a=n?.())!=null?a:[];for(let s of l){if(!s)continue;let u=Ye(s);if(!u)continue;let h=s.parentElement;for(;h&&h!==u.body;){for(let m of h.children)l.some(f=>m.contains(f))||i.add(Ft(m));h=h.parentElement}}return i.dispose},[r,n,t])}function Ki(e,n,t){let r=Me(o=>{let a=o.getBoundingClientRect();a.x===0&&a.y===0&&a.width===0&&a.height===0&&t()});d.useEffect(()=>{if(!e)return;let o=n===null?null:Ce(n)?n:n.current;if(!o)return;let a=we();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>r.current(o));i.observe(o),a.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>r.current(o));i.observe(o),a.add(()=>i.disconnect())}return()=>a.dispose()},[n,r,e])}let ln=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","details>summary","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),Gi=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var be=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(be||{}),Gn=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Gn||{}),Zi=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Zi||{});function Ji(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ln)).sort((n,t)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}function es(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Gi)).sort((n,t)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var Er=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Er||{});function ns(e,n=0){var t;return e===((t=Ye(e))==null?void 0:t.body)?!1:ve(n,{0(){return e.matches(ln)},1(){let r=e;for(;r!==null;){if(r.matches(ln))return!0;r=r.parentElement}return!1}})}var ts=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ts||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ge(e){e?.focus({preventScroll:!0})}let rs=["textarea","input"].join(",");function os(e){var n,t;return(t=(n=e?.matches)==null?void 0:n.call(e,rs))!=null?t:!1}function as(e,n=t=>t){return e.slice().sort((t,r)=>{let o=n(t),a=n(r);if(o===null||a===null)return 0;let i=o.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Be(e,n,{sorted:t=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?Wn(e[0]):document:Wn(e),i=Array.isArray(e)?t?as(e):e:n&64?es(e):Ji(e);o.length>0&&i.length>1&&(i=i.filter(g=>!o.some(b=>b!=null&&"current"in b?b?.current===g:b===g))),r=r??a?.activeElement;let l=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,i.indexOf(r))-1;if(n&4)return Math.max(0,i.indexOf(r))+1;if(n&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=n&32?{preventScroll:!0}:{},h=0,m=i.length,f;do{if(h>=m||h+m<=0)return 0;let g=s+h;if(n&16)g=(g+m)%m;else{if(g<0)return 3;if(g>=m)return 1}f=i[g],f?.focus(u),h+=l}while(f!==br(f));return n&6&&os(f)&&f.select(),2}function Nr(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function is(){return/Android/gi.test(window.navigator.userAgent)}function Lt(){return Nr()||is()}function en(e,n,t,r){let o=Me(t);d.useEffect(()=>{if(!e)return;function a(i){o.current(i)}return document.addEventListener(n,a,r),()=>document.removeEventListener(n,a,r)},[e,n,r])}function Tr(e,n,t,r){let o=Me(t);d.useEffect(()=>{if(!e)return;function a(i){o.current(i)}return window.addEventListener(n,a,r),()=>window.removeEventListener(n,a,r)},[e,n,r])}const Ht=30;function ss(e,n,t){let r=Me(t),o=d.useCallback(function(l,s){if(l.defaultPrevented)return;let u=s(l);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let h=(function m(f){return typeof f=="function"?m(f()):Array.isArray(f)||f instanceof Set?f:[f]})(n);for(let m of h)if(m!==null&&(m.contains(u)||l.composed&&l.composedPath().includes(m)))return;return!ns(u,Er.Loose)&&u.tabIndex!==-1&&l.preventDefault(),r.current(l,u)},[r,n]),a=d.useRef(null);en(e,"pointerdown",l=>{var s,u;Lt()||(a.current=((u=(s=l.composedPath)==null?void 0:s.call(l))==null?void 0:u[0])||l.target)},!0),en(e,"pointerup",l=>{if(Lt()||!a.current)return;let s=a.current;return a.current=null,o(l,()=>s)},!0);let i=d.useRef({x:0,y:0});en(e,"touchstart",l=>{i.current.x=l.touches[0].clientX,i.current.y=l.touches[0].clientY},!0),en(e,"touchend",l=>{let s={x:l.changedTouches[0].clientX,y:l.changedTouches[0].clientY};if(!(Math.abs(s.x-i.current.x)>=Ht||Math.abs(s.y-i.current.y)>=Ht))return o(l,()=>Se(l.target)?l.target:null)},!0),Tr(e,"blur",l=>o(l,()=>ji(window.document.activeElement)?window.document.activeElement:null),!0)}function tt(...e){return d.useMemo(()=>Ye(...e),[...e])}function Cr(e,n,t,r){let o=Me(t);d.useEffect(()=>{e=e??window;function a(i){o.current(i)}return e.addEventListener(n,a,r),()=>e.removeEventListener(n,a,r)},[e,n,r])}function ls(e){return d.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}function cs(e,n){let t=e(),r=new Set;return{getSnapshot(){return t},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let i=n[o].call(t,...a);i&&(t=i,r.forEach(l=>l()))}}}function us(){let e;return{before({doc:n}){var t;let r=n.documentElement,o=(t=n.defaultView)!=null?t:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:n,d:t}){let r=n.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),a=Math.max(0,e-o);t.style(r,"paddingRight",`${a}px`)}}}function ds(){return Nr()?{before({doc:e,d:n,meta:t}){function r(o){for(let a of t().containers)for(let i of a())if(i.contains(o))return!0;return!1}n.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let l=we();l.style(e.documentElement,"scrollBehavior","auto"),n.add(()=>n.microTask(()=>l.dispose()))}let a=(o=window.scrollY)!=null?o:window.pageYOffset,i=null;n.addEventListener(e,"click",l=>{if(Se(l.target))try{let s=l.target.closest("a");if(!s)return;let{hash:u}=new URL(s.href),h=e.querySelector(u);Se(h)&&!r(h)&&(i=h)}catch{}},!0),n.group(l=>{n.addEventListener(e,"touchstart",s=>{if(l.dispose(),Se(s.target)&&Si(s.target))if(r(s.target)){let u=s.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;l.style(u,"overscrollBehavior","contain")}else l.style(s.target,"touchAction","none")})}),n.addEventListener(e,"touchmove",l=>{if(Se(l.target)){if(Ei(l.target))return;if(r(l.target)){let s=l.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&l.preventDefault()}else l.preventDefault()}},{passive:!1}),n.add(()=>{var l;let s=(l=window.scrollY)!=null?l:window.pageYOffset;a!==s&&window.scrollTo(0,a),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function hs(){return{before({doc:e,d:n}){n.style(e.documentElement,"overflow","hidden")}}}function Vt(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let Te=cs(()=>new Map,{PUSH(e,n){var t;let r=(t=this.get(e))!=null?t:{doc:e,count:0,d:we(),meta:new Set,computedMeta:{}};return r.count++,r.meta.add(n),r.computedMeta=Vt(r.meta),this.set(e,r),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n),t.computedMeta=Vt(t.meta)),this},SCROLL_PREVENT(e){let n={doc:e.doc,d:e.d,meta(){return e.computedMeta}},t=[ds(),us(),hs()];t.forEach(({before:r})=>r?.(n)),t.forEach(({after:r})=>r?.(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});Te.subscribe(()=>{let e=Te.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let r=n.get(t.doc)==="hidden",o=t.count!==0;(o&&!r||!o&&r)&&Te.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&Te.dispatch("TEARDOWN",t)}});function fs(e,n,t=()=>({containers:[]})){let r=ls(Te),o=n?r.get(n):void 0,a=o?o.count>0:!1;return ee(()=>{if(!(!n||!e))return Te.dispatch("PUSH",n,t),()=>Te.dispatch("POP",n,t)},[e,n]),a}function ps(e,n,t=()=>[document.body]){let r=Qe(e,"scroll-lock");fs(r,n,o=>{var a;return{containers:[...(a=o.containers)!=null?a:[],t]}})}function ms(e=0){let[n,t]=d.useState(e),r=d.useCallback(s=>t(s),[]),o=d.useCallback(s=>t(u=>u|s),[]),a=d.useCallback(s=>(n&s)===s,[n]),i=d.useCallback(s=>t(u=>u&~s),[]),l=d.useCallback(s=>t(u=>u^s),[]);return{flags:n,setFlag:r,addFlag:o,hasFlag:a,removeFlag:i,toggleFlag:l}}var bs={},Ut,Bt;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((Ut=process==null?void 0:bs)==null?void 0:Ut.NODE_ENV)==="test"&&typeof((Bt=Element?.prototype)==null?void 0:Bt.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var gs=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(gs||{});function vs(e){let n={};for(let t in e)e[t]===!0&&(n[`data-${t}`]="");return n}function xs(e,n,t,r){let[o,a]=d.useState(t),{hasFlag:i,addFlag:l,removeFlag:s}=ms(e&&o?3:0),u=d.useRef(!1),h=d.useRef(!1),m=hn();return ee(()=>{var f;if(e){if(t&&a(!0),!n){t&&l(3);return}return(f=r?.start)==null||f.call(r,t),ys(n,{inFlight:u,prepare(){h.current?h.current=!1:h.current=u.current,u.current=!0,!h.current&&(t?(l(3),s(4)):(l(4),s(2)))},run(){h.current?t?(s(3),l(4)):(s(4),l(3)):t?s(1):l(1)},done(){var g;h.current&&Ps(n)||(u.current=!1,s(7),t||a(!1),(g=r?.end)==null||g.call(r,t))}})}},[e,t,n,m]),e?[o,{closed:i(1),enter:i(2),leave:i(4),transition:i(2)||i(4)}]:[t,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function ys(e,{prepare:n,run:t,done:r,inFlight:o}){let a=we();return ks(e,{prepare:n,inFlight:o}),a.nextFrame(()=>{t(),a.requestAnimationFrame(()=>{a.add(ws(e,r))})}),a.dispose}function ws(e,n){var t,r;let o=we();if(!e)return o.dispose;let a=!1;o.add(()=>{a=!0});let i=(r=(t=e.getAnimations)==null?void 0:t.call(e).filter(l=>l instanceof CSSTransition))!=null?r:[];return i.length===0?(n(),o.dispose):(Promise.allSettled(i.map(l=>l.finished)).then(()=>{a||n()}),o.dispose)}function ks(e,{inFlight:n,prepare:t}){if(n!=null&&n.current){t();return}let r=e.style.transition;e.style.transition="none",t(),e.offsetHeight,e.style.transition=r}function Ps(e){var n,t;return((t=(n=e.getAnimations)==null?void 0:n.call(e))!=null?t:[]).some(r=>r instanceof CSSTransition&&r.playState!=="finished")}function rt(e,n){let t=d.useRef([]),r=L(e);d.useEffect(()=>{let o=[...t.current];for(let[a,i]of n.entries())if(t.current[a]!==i){let l=r(n,o);return t.current=n,l}},[r,...n])}let fn=d.createContext(null);fn.displayName="OpenClosedContext";var ce=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ce||{});function pn(){return d.useContext(fn)}function Os({value:e,children:n}){return O.createElement(fn.Provider,{value:e},n)}function Ss({children:e}){return O.createElement(fn.Provider,{value:null},e)}function js(e){function n(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",n))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",n),n())}let Pe=[];js(()=>{function e(n){if(!Se(n.target)||n.target===document.body||Pe[0]===n.target)return;let t=n.target;t=t.closest(ln),Pe.unshift(t??n.target),Pe=Pe.filter(r=>r!=null&&r.isConnected),Pe.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function $r(e){let n=L(e),t=d.useRef(!1);d.useEffect(()=>(t.current=!1,()=>{t.current=!0,dn(()=>{t.current&&n()})}),[n])}let Mr=d.createContext(!1);function Es(){return d.useContext(Mr)}function Yt(e){return O.createElement(Mr.Provider,{value:e.force},e.children)}function Ns(e){let n=Es(),t=d.useContext(_r),[r,o]=d.useState(()=>{var a;if(!n&&t!==null)return(a=t.current)!=null?a:null;if(fe.isServer)return null;let i=e?.getElementById("headlessui-portal-root");if(i)return i;if(e===null)return null;let l=e.createElement("div");return l.setAttribute("id","headlessui-portal-root"),e.body.appendChild(l)});return d.useEffect(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r))},[r,e]),d.useEffect(()=>{n||t!==null&&o(t.current)},[t,o,n]),r}let Ar=d.Fragment,Ts=ne(function(e,n){let{ownerDocument:t=null,...r}=e,o=d.useRef(null),a=pe(Ni(f=>{o.current=f}),n),i=tt(o.current),l=t??i,s=Ns(l),u=d.useContext(Zn),h=hn(),m=ae();return $r(()=>{var f;s&&s.childNodes.length<=0&&((f=s.parentElement)==null||f.removeChild(s))}),s?ao.createPortal(O.createElement("div",{"data-headlessui-portal":"",ref:f=>{h.dispose(),u&&f&&h.add(u.register(f))}},m({ourProps:{ref:a},theirProps:r,slot:{},defaultTag:Ar,name:"Portal"})),s):null});function Cs(e,n){let t=pe(n),{enabled:r=!0,ownerDocument:o,...a}=e,i=ae();return r?O.createElement(Ts,{...a,ownerDocument:o,ref:t}):i({ourProps:{ref:t},theirProps:a,slot:{},defaultTag:Ar,name:"Portal"})}let $s=d.Fragment,_r=d.createContext(null);function Ms(e,n){let{target:t,...r}=e,o={ref:pe(n)},a=ae();return O.createElement(_r.Provider,{value:t},a({ourProps:o,theirProps:r,defaultTag:$s,name:"Popover.Group"}))}let Zn=d.createContext(null);function As(){let e=d.useContext(Zn),n=d.useRef([]),t=L(a=>(n.current.push(a),e&&e.register(a),()=>r(a))),r=L(a=>{let i=n.current.indexOf(a);i!==-1&&n.current.splice(i,1),e&&e.unregister(a)}),o=d.useMemo(()=>({register:t,unregister:r,portals:n}),[t,r,n]);return[n,d.useMemo(()=>function({children:a}){return O.createElement(Zn.Provider,{value:o},a)},[o])]}let _s=ne(Cs),Dr=ne(Ms),Ds=Object.assign(_s,{Group:Dr});function Rs(e,n=typeof document<"u"?document.defaultView:null,t){let r=Qe(e,"escape");Cr(n,"keydown",o=>{r&&(o.defaultPrevented||o.key===yr.Escape&&t(o))})}function qs(){var e;let[n]=d.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[t,r]=d.useState((e=n?.matches)!=null?e:!1);return ee(()=>{if(!n)return;function o(a){r(a.matches)}return n.addEventListener("change",o),()=>n.removeEventListener("change",o)},[n]),t}function Is({defaultContainers:e=[],portals:n,mainTreeNode:t}={}){let r=L(()=>{var o,a;let i=Ye(t),l=[];for(let s of e)s!==null&&(je(s)?l.push(s):"current"in s&&je(s.current)&&l.push(s.current));if(n!=null&&n.current)for(let s of n.current)l.push(s);for(let s of(o=i?.querySelectorAll("html > *, body > *"))!=null?o:[])s!==document.body&&s!==document.head&&je(s)&&s.id!=="headlessui-portal-root"&&(t&&(s.contains(t)||s.contains((a=t?.getRootNode())==null?void 0:a.host))||l.some(u=>s.contains(u))||l.push(s));return l});return{resolveContainers:r,contains:L(o=>r().some(a=>a.contains(o)))}}let Rr=d.createContext(null);function Wt({children:e,node:n}){let[t,r]=d.useState(null),o=qr(n??t);return O.createElement(Rr.Provider,{value:o},e,o===null&&O.createElement(Xn,{features:sn.Hidden,ref:a=>{var i,l;if(a){for(let s of(l=(i=Ye(a))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?l:[])if(s!==document.body&&s!==document.head&&je(s)&&s!=null&&s.contains(a)){r(s);break}}}}))}function qr(e=null){var n;return(n=d.useContext(Rr))!=null?n:e}function Fs(){let e=typeof document>"u";return"useSyncExternalStore"in tn?(n=>n.useSyncExternalStore)(tn)(()=>()=>{},()=>!1,()=>!e):!1}function mn(){let e=Fs(),[n,t]=d.useState(fe.isHandoffComplete);return n&&fe.isHandoffComplete===!1&&t(!1),d.useEffect(()=>{n!==!0&&t(!0)},[n]),d.useEffect(()=>fe.handoff(),[]),e?!1:n}function ot(){let e=d.useRef(!1);return ee(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var ze=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ze||{});function zs(){let e=d.useRef(0);return Tr(!0,"keydown",n=>{n.key==="Tab"&&(e.current=n.shiftKey?1:0)},!0),e}function Ir(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let n=new Set;for(let t of e.current)je(t.current)&&n.add(t.current);return n}let Ls="div";var Ne=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(Ne||{});function Hs(e,n){let t=d.useRef(null),r=pe(t,n),{initialFocus:o,initialFocusFallback:a,containers:i,features:l=15,...s}=e;mn()||(l=0);let u=tt(t.current);Ys(l,{ownerDocument:u});let h=Ws(l,{ownerDocument:u,container:t,initialFocus:o,initialFocusFallback:a});Qs(l,{ownerDocument:u,container:t,containers:i,previousActiveElement:h});let m=zs(),f=L(j=>{if(!Ce(t.current))return;let w=t.current;(T=>T())(()=>{ve(m.current,{[ze.Forwards]:()=>{Be(w,be.First,{skipElements:[j.relatedTarget,a]})},[ze.Backwards]:()=>{Be(w,be.Last,{skipElements:[j.relatedTarget,a]})}})})}),g=Qe(!!(l&2),"focus-trap#tab-lock"),b=hn(),p=d.useRef(!1),v={ref:r,onKeyDown(j){j.key=="Tab"&&(p.current=!0,b.requestAnimationFrame(()=>{p.current=!1}))},onBlur(j){if(!(l&4))return;let w=Ir(i);Ce(t.current)&&w.add(t.current);let T=j.relatedTarget;Se(T)&&T.dataset.headlessuiFocusGuard!=="true"&&(Fr(w,T)||(p.current?Be(t.current,ve(m.current,{[ze.Forwards]:()=>be.Next,[ze.Backwards]:()=>be.Previous})|be.WrapAround,{relativeTo:j.target}):Se(j.target)&&ge(j.target)))}},S=ae();return O.createElement(O.Fragment,null,g&&O.createElement(Xn,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:sn.Focusable}),S({ourProps:v,theirProps:s,defaultTag:Ls,name:"FocusTrap"}),g&&O.createElement(Xn,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:sn.Focusable}))}let Vs=ne(Hs),Us=Object.assign(Vs,{features:Ne});function Bs(e=!0){let n=d.useRef(Pe.slice());return rt(([t],[r])=>{r===!0&&t===!1&&dn(()=>{n.current.splice(0)}),r===!1&&t===!0&&(n.current=Pe.slice())},[e,Pe,n]),L(()=>{var t;return(t=n.current.find(r=>r!=null&&r.isConnected))!=null?t:null})}function Ys(e,{ownerDocument:n}){let t=!!(e&8),r=Bs(t);rt(()=>{t||pi(n?.body)&&ge(r())},[t]),$r(()=>{t&&ge(r())})}function Ws(e,{ownerDocument:n,container:t,initialFocus:r,initialFocusFallback:o}){let a=d.useRef(null),i=Qe(!!(e&1),"focus-trap#initial-focus"),l=ot();return rt(()=>{if(e===0)return;if(!i){o!=null&&o.current&&ge(o.current);return}let s=t.current;s&&dn(()=>{if(!l.current)return;let u=n?.activeElement;if(r!=null&&r.current){if(r?.current===u){a.current=u;return}}else if(s.contains(u)){a.current=u;return}if(r!=null&&r.current)ge(r.current);else{if(e&16){if(Be(s,be.First|be.AutoFocus)!==Gn.Error)return}else if(Be(s,be.First)!==Gn.Error)return;if(o!=null&&o.current&&(ge(o.current),n?.activeElement===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}a.current=n?.activeElement})},[o,i,e]),a}function Qs(e,{ownerDocument:n,container:t,containers:r,previousActiveElement:o}){let a=ot(),i=!!(e&4);Cr(n?.defaultView,"focus",l=>{if(!i||!a.current)return;let s=Ir(r);Ce(t.current)&&s.add(t.current);let u=o.current;if(!u)return;let h=l.target;Ce(h)?Fr(s,h)?(o.current=h,ge(h)):(l.preventDefault(),l.stopPropagation(),ge(u)):ge(o.current)},!0)}function Fr(e,n){for(let t of e)if(t.contains(n))return!0;return!1}function zr(e){var n;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||!Ve((n=e.as)!=null?n:Hr)||O.Children.count(e.children)===1}let bn=d.createContext(null);bn.displayName="TransitionContext";var Xs=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Xs||{});function Ks(){let e=d.useContext(bn);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Gs(){let e=d.useContext(gn);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let gn=d.createContext(null);gn.displayName="NestingContext";function vn(e){return"children"in e?vn(e.children):e.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function Lr(e,n){let t=Me(e),r=d.useRef([]),o=ot(),a=hn(),i=L((g,b=Oe.Hidden)=>{let p=r.current.findIndex(({el:v})=>v===g);p!==-1&&(ve(b,{[Oe.Unmount](){r.current.splice(p,1)},[Oe.Hidden](){r.current[p].state="hidden"}}),a.microTask(()=>{var v;!vn(r)&&o.current&&((v=t.current)==null||v.call(t))}))}),l=L(g=>{let b=r.current.find(({el:p})=>p===g);return b?b.state!=="visible"&&(b.state="visible"):r.current.push({el:g,state:"visible"}),()=>i(g,Oe.Unmount)}),s=d.useRef([]),u=d.useRef(Promise.resolve()),h=d.useRef({enter:[],leave:[]}),m=L((g,b,p)=>{s.current.splice(0),n&&(n.chains.current[b]=n.chains.current[b].filter(([v])=>v!==g)),n?.chains.current[b].push([g,new Promise(v=>{s.current.push(v)})]),n?.chains.current[b].push([g,new Promise(v=>{Promise.all(h.current[b].map(([S,j])=>j)).then(()=>v())})]),b==="enter"?u.current=u.current.then(()=>n?.wait.current).then(()=>p(b)):p(b)}),f=L((g,b,p)=>{Promise.all(h.current[b].splice(0).map(([v,S])=>S)).then(()=>{var v;(v=s.current.shift())==null||v()}).then(()=>p(b))});return d.useMemo(()=>({children:r,register:l,unregister:i,onStart:m,onStop:f,wait:u,chains:h}),[l,i,r,m,f,h,u])}let Hr=d.Fragment,Vr=an.RenderStrategy;function Zs(e,n){var t,r;let{transition:o=!0,beforeEnter:a,afterEnter:i,beforeLeave:l,afterLeave:s,enter:u,enterFrom:h,enterTo:m,entered:f,leave:g,leaveFrom:b,leaveTo:p,...v}=e,[S,j]=d.useState(null),w=d.useRef(null),T=zr(e),x=pe(...T?[w,n,j]:n===null?[]:[n]),y=(t=v.unmount)==null||t?Oe.Unmount:Oe.Hidden,{show:$,appear:P,initial:k}=Ks(),[E,A]=d.useState($?"visible":"hidden"),C=Gs(),{register:D,unregister:F}=C;ee(()=>D(w),[D,w]),ee(()=>{if(y===Oe.Hidden&&w.current){if($&&E!=="visible"){A("visible");return}return ve(E,{hidden:()=>F(w),visible:()=>D(w)})}},[E,w,D,F,$,y]);let V=mn();ee(()=>{if(T&&V&&E==="visible"&&w.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[w,E,V,T]);let U=k&&!P,z=P&&$&&k,q=d.useRef(!1),I=Lr(()=>{q.current||(A("hidden"),F(w))},C),Z=L(_=>{q.current=!0;let R=_?"enter":"leave";I.onStart(w,R,Y=>{Y==="enter"?a?.():Y==="leave"&&l?.()})}),B=L(_=>{let R=_?"enter":"leave";q.current=!1,I.onStop(w,R,Y=>{Y==="enter"?i?.():Y==="leave"&&s?.()}),R==="leave"&&!vn(I)&&(A("hidden"),F(w))});d.useEffect(()=>{T&&o||(Z($),B($))},[$,T,o]);let X=!(!o||!T||!V||U),[,M]=xs(X,S,$,{start:Z,end:B}),J=Ee({ref:x,className:((r=Qn(v.className,z&&u,z&&h,M.enter&&u,M.enter&&M.closed&&h,M.enter&&!M.closed&&m,M.leave&&g,M.leave&&!M.closed&&b,M.leave&&M.closed&&p,!M.transition&&$&&f))==null?void 0:r.trim())||void 0,...vs(M)}),G=0;E==="visible"&&(G|=ce.Open),E==="hidden"&&(G|=ce.Closed),$&&E==="hidden"&&(G|=ce.Opening),!$&&E==="visible"&&(G|=ce.Closing);let W=ae();return O.createElement(gn.Provider,{value:I},O.createElement(Os,{value:G},W({ourProps:J,theirProps:v,defaultTag:Hr,features:Vr,visible:E==="visible",name:"Transition.Child"})))}function Js(e,n){let{show:t,appear:r=!1,unmount:o=!0,...a}=e,i=d.useRef(null),l=zr(e),s=pe(...l?[i,n]:n===null?[]:[n]);mn();let u=pn();if(t===void 0&&u!==null&&(t=(u&ce.Open)===ce.Open),t===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,m]=d.useState(t?"visible":"hidden"),f=Lr(()=>{t||m("hidden")}),[g,b]=d.useState(!0),p=d.useRef([t]);ee(()=>{g!==!1&&p.current[p.current.length-1]!==t&&(p.current.push(t),b(!1))},[p,t]);let v=d.useMemo(()=>({show:t,appear:r,initial:g}),[t,r,g]);ee(()=>{t?m("visible"):!vn(f)&&i.current!==null&&m("hidden")},[t,f]);let S={unmount:o},j=L(()=>{var x;g&&b(!1),(x=e.beforeEnter)==null||x.call(e)}),w=L(()=>{var x;g&&b(!1),(x=e.beforeLeave)==null||x.call(e)}),T=ae();return O.createElement(gn.Provider,{value:f},O.createElement(bn.Provider,{value:v},T({ourProps:{...S,as:d.Fragment,children:O.createElement(Ur,{ref:s,...S,...a,beforeEnter:j,beforeLeave:w})},theirProps:{},defaultTag:d.Fragment,features:Vr,visible:h==="visible",name:"Transition"})))}function el(e,n){let t=d.useContext(bn)!==null,r=pn()!==null;return O.createElement(O.Fragment,null,!t&&r?O.createElement(Jn,{ref:n,...e}):O.createElement(Ur,{ref:n,...e}))}let Jn=ne(Js),Ur=ne(Zs),at=ne(el),nl=Object.assign(Jn,{Child:at,Root:Jn});var tl=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(tl||{}),rl=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(rl||{});let ol={0(e,n){return e.titleId===n.id?e:{...e,titleId:n.id}}},it=d.createContext(null);it.displayName="DialogContext";function xn(e){let n=d.useContext(it);if(n===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,xn),t}return n}function al(e,n){return ve(n.type,ol,e,n)}let Qt=ne(function(e,n){let t=d.useId(),{id:r=`headlessui-dialog-${t}`,open:o,onClose:a,initialFocus:i,role:l="dialog",autoFocus:s=!0,__demoMode:u=!1,unmount:h=!1,...m}=e,f=d.useRef(!1);l=(function(){return l==="dialog"||l==="alertdialog"?l:(f.current||(f.current=!0,console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")})();let g=pn();o===void 0&&g!==null&&(o=(g&ce.Open)===ce.Open);let b=d.useRef(null),p=pe(b,n),v=tt(b.current),S=o?0:1,[j,w]=d.useReducer(al,{titleId:null,descriptionId:null,panelRef:d.createRef()}),T=L(()=>a(!1)),x=L(M=>w({type:0,id:M})),y=mn()?S===0:!1,[$,P]=As(),k={get current(){var M;return(M=j.panelRef.current)!=null?M:b.current}},E=qr(),{resolveContainers:A}=Is({mainTreeNode:E,portals:$,defaultContainers:[k]}),C=g!==null?(g&ce.Closing)===ce.Closing:!1;Xi(u||C?!1:y,{allowed:L(()=>{var M,J;return[(J=(M=b.current)==null?void 0:M.closest("[data-headlessui-portal]"))!=null?J:null]}),disallowed:L(()=>{var M;return[(M=E?.closest("body > *:not(#headlessui-portal-root)"))!=null?M:null]})});let D=Sr.get(null);ee(()=>{if(y)return D.actions.push(r),()=>D.actions.pop(r)},[D,r,y]);let F=jr(D,d.useCallback(M=>D.selectors.isTop(M,r),[D,r]));ss(F,A,M=>{M.preventDefault(),T()}),Rs(F,v?.defaultView,M=>{M.preventDefault(),M.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),T()}),ps(u||C?!1:y,v,A),Ki(y,b,T);let[V,U]=Ti(),z=d.useMemo(()=>[{dialogState:S,close:T,setTitleId:x,unmount:h},j],[S,T,x,h,j]),q=We({open:S===0}),I={ref:p,id:r,role:l,tabIndex:-1,"aria-modal":u?void 0:S===0?!0:void 0,"aria-labelledby":j.titleId,"aria-describedby":V,unmount:h},Z=!qs(),B=Ne.None;y&&!u&&(B|=Ne.RestoreFocus,B|=Ne.TabLock,s&&(B|=Ne.AutoFocus),Z&&(B|=Ne.InitialFocus));let X=ae();return O.createElement(Ss,null,O.createElement(Yt,{force:!0},O.createElement(Ds,null,O.createElement(it.Provider,{value:z},O.createElement(Dr,{target:b},O.createElement(Yt,{force:!1},O.createElement(U,{slot:q},O.createElement(P,null,O.createElement(Us,{initialFocus:i,initialFocusFallback:b,containers:A,features:B},O.createElement(Di,{value:T},X({ourProps:I,theirProps:m,slot:q,defaultTag:il,features:sl,visible:S===0,name:"Dialog"})))))))))))}),il="div",sl=an.RenderStrategy|an.Static;function ll(e,n){let{transition:t=!1,open:r,...o}=e,a=pn(),i=e.hasOwnProperty("open")||a!==null,l=e.hasOwnProperty("onClose");if(!i&&!l)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!l)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!a&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||t)&&!o.static?O.createElement(Wt,null,O.createElement(nl,{show:r,transition:t,unmount:o.unmount},O.createElement(Qt,{ref:n,...o}))):O.createElement(Wt,null,O.createElement(Qt,{ref:n,open:r,...o}))}let cl="div";function ul(e,n){let t=d.useId(),{id:r=`headlessui-dialog-panel-${t}`,transition:o=!1,...a}=e,[{dialogState:i,unmount:l},s]=xn("Dialog.Panel"),u=pe(n,s.panelRef),h=We({open:i===0}),m=L(v=>{v.stopPropagation()}),f={ref:u,id:r,onClick:m},g=o?at:d.Fragment,b=o?{unmount:l}:{},p=ae();return O.createElement(g,{...b},p({ourProps:f,theirProps:a,slot:h,defaultTag:cl,name:"Dialog.Panel"}))}let dl="div";function hl(e,n){let{transition:t=!1,...r}=e,[{dialogState:o,unmount:a}]=xn("Dialog.Backdrop"),i=We({open:o===0}),l={ref:n,"aria-hidden":!0},s=t?at:d.Fragment,u=t?{unmount:a}:{},h=ae();return O.createElement(s,{...u},h({ourProps:l,theirProps:r,slot:i,defaultTag:dl,name:"Dialog.Backdrop"}))}let fl="h2";function pl(e,n){let t=d.useId(),{id:r=`headlessui-dialog-title-${t}`,...o}=e,[{dialogState:a,setTitleId:i}]=xn("Dialog.Title"),l=pe(n);d.useEffect(()=>(i(r),()=>i(null)),[r,i]);let s=We({open:a===0}),u={ref:l,id:r};return ae()({ourProps:u,theirProps:o,slot:s,defaultTag:fl,name:"Dialog.Title"})}let ml=ne(ll),Br=ne(ul);ne(hl);let bl=ne(pl),gl=Object.assign(ml,{Panel:Br,Title:bl,Description:Ai});var vl=Symbol.for("react.lazy"),cn=tn[" use ".trim().toString()];function xl(e){return typeof e=="object"&&e!==null&&"then"in e}function Yr(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===vl&&"_payload"in e&&xl(e._payload)}function yl(e){const n=kl(e),t=d.forwardRef((r,o)=>{let{children:a,...i}=r;Yr(a)&&typeof cn=="function"&&(a=cn(a._payload));const l=d.Children.toArray(a),s=l.find(Ol);if(s){const u=s.props.children,h=l.map(m=>m===s?d.Children.count(u)>1?d.Children.only(null):d.isValidElement(u)?u.props.children:null:m);return c.jsx(n,{...i,ref:o,children:d.isValidElement(u)?d.cloneElement(u,void 0,h):null})}return c.jsx(n,{...i,ref:o,children:a})});return t.displayName=`${e}.Slot`,t}var wl=yl("Slot");function kl(e){const n=d.forwardRef((t,r)=>{let{children:o,...a}=t;if(Yr(o)&&typeof cn=="function"&&(o=cn(o._payload)),d.isValidElement(o)){const i=jl(o),l=Sl(a,o.props);return o.type!==d.Fragment&&(l.ref=r?io(r,i):i),d.cloneElement(o,l)}return d.Children.count(o)>1?d.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var Pl=Symbol("radix.slottable");function Ol(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Pl}function Sl(e,n){const t={...n};for(const r in n){const o=e[r],a=n[r];/^on[A-Z]/.test(r)?o&&a?t[r]=(...l)=>{const s=a(...l);return o(...l),s}:o&&(t[r]=o):r==="style"?t[r]={...o,...a}:r==="className"&&(t[r]=[o,a].filter(Boolean).join(" "))}return{...e,...t}}function jl(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}const Xt=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Kt=so,El=(e,n)=>t=>{var r;if(n?.variants==null)return Kt(e,t?.class,t?.className);const{variants:o,defaultVariants:a}=n,i=Object.keys(o).map(u=>{const h=t?.[u],m=a?.[u];if(h===null)return null;const f=Xt(h)||Xt(m);return o[u][f]}),l=t&&Object.entries(t).reduce((u,h)=>{let[m,f]=h;return f===void 0||(u[m]=f),u},{}),s=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((u,h)=>{let{class:m,className:f,...g}=h;return Object.entries(g).every(b=>{let[p,v]=b;return Array.isArray(v)?v.includes({...a,...l}[p]):{...a,...l}[p]===v})?[...u,m,f]:u},[]);return Kt(e,i,s,t?.class,t?.className)},Nl=El("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function Tl({className:e,variant:n="default",size:t="default",asChild:r=!1,...o}){const a=r?wl:"button";return c.jsx(a,{"data-slot":"button","data-variant":n,"data-size":t,className:re(Nl({variant:n,size:t,className:e})),...o})}const Cl=({filterOptions:e})=>{const[n,t]=d.useState(!1),{parentId:r,selfId:o,updateSelfId:a,updateParentId:i,clearAll:l}=$e(),{setData:s}=De(),{t:u}=xe("translation");return c.jsxs(c.Fragment,{children:[c.jsx(Tl,{className:"cursor-pointer",onClick:()=>t(!0),variant:"link",size:"icon",children:c.jsx(Co,{})}),c.jsx(gl,{open:n,as:"div",className:"relative z-50 focus:outline-none md:hidden",onClose:()=>t(!1),__demoMode:!0,children:c.jsx("div",{className:"fixed w-screen inset-0 z-50! overflow-y-auto",children:c.jsx("div",{className:"flex items-center justify-center",children:c.jsxs(Br,{transition:!0,className:"w-full relative pt-16 h-dvh bg-gray-100 px-6 pb-8 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0",children:[c.jsxs("div",{className:"flex flex-col space-y-2",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("p",{className:"text-xl font-bold text-amber-500",children:u("common.filter-label")}),c.jsx("div",{className:"grow h-px bg-white"})]}),c.jsx("div",{className:"flex flex-col space-y-3 h-[calc(100dvh-150px)] overflow-y-auto scrollbar-none",children:(e||[])?.map(h=>c.jsxs("div",{className:re("cursor-pointer px-4 py-2.5 bg-white rounded-xs"),onClick:()=>{if((h?.children||[])?.length)return null;i(""),a(h?.id),s([h?.name]);const f=document.getElementById(`${h?.id}-${h?.name}`);f&&f.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"}),t(!1)},children:[c.jsxs("button",{className:re("hover:text-amber-500 hover:scale-105 duration-500 transition-all cursor-pointer flex items-center space-x-2",{"text-amber-500":h?.id==-1&&!o&&!r||h?.id==+o||h?.id==+r}),onClick:()=>{t(!1),i(""),a(h?.id),s([h?.name]);const m=document.getElementById(`${h?.id}-${h?.name}`);m&&m.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"})},children:[c.jsx("div",{role:"button",className:"bg-amber-400 p-0.5 rounded-xs",children:c.jsx(bo,{className:"size-3 text-white"})}),c.jsx("span",{className:"text-sm",children:h?.name})]}),c.jsx($l,{parentId:h?.id,parentName:h?.name,filterOptions:h?.children||[],onClick:()=>{t(!1);const m=document.getElementById(`${h?.id}-${h?.name}`);m&&m.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"})}})]},`${h?.id}-${h?.name}`))})]}),c.jsx("button",{onClick:()=>{t(!1),l(),s([]);const h=document.getElementById(`-1-${u("common.news-label")}`);h&&h.scrollIntoView({behavior:"smooth"}),window?.scrollTo({top:0,behavior:"smooth"})},className:"w-full bg-amber-500 text-sm py-1.5 mt-2 font-medium text-white",children:u("common.clear-filter")}),c.jsx("button",{className:"cursor-pointer absolute top-8 right-6 p-1 bg-orange-400/10 rounded-md",onClick:()=>t(!1),children:c.jsx(Ao,{className:"text-amber-500 size-5"})})]})})})})]})},$l=e=>{const{parentId:n,parentName:t,filterOptions:r,onClick:o}=e,{selfId:a,updateSelfId:i,updateParentId:l}=$e(),{setData:s}=De(),{contentRef:u,height:h,defaultHeight:m,revealExceedMax:f,revealHiddenContent:g}=hr({defaultHeight:80,dependency:r?.length});return r?.length?c.jsxs("div",{className:"relative",children:[c.jsx(lr,{id:"example-panel z-20",className:"rounded-b-md",duration:150,easing:"linear",height:h||m,children:c.jsx("div",{ref:u,className:"flex flex-wrap gap-2 py-2",children:(r||[])?.map(b=>c.jsx("button",{className:re("cursor-pointer bg-primary/5 hover:bg-amber-500 hover:text-white duration-500 transition-colors text-center py-1.5 px-1.5 grow rounded-xs text-xs",{"text-white bg-amber-500":b?.id==+a}),onClick:()=>{l(n),i(b?.id),s([t,b?.name]),o()},children:b?.name},`${b?.id}-${b?.name}`))})}),f&&c.jsx("div",{className:"flex justify-center items-center",children:c.jsx("button",{className:"px-4 mt-1 bg-white border border-gray-100 cursor-pointer rounded-2xl","aria-expanded":h!==0,"aria-controls":"filter-type2",onClick:g,children:+h>=m?c.jsx(In,{className:"size-4 text-amber-500"}):c.jsx(zn,{className:"size-4 text-amber-500"})})})]}):null},Ml=({filterOptions:e})=>{const n=!!e?.length;return c.jsx("div",{className:"md:hidden",children:c.jsx("div",{className:"sticky top-14 z-20!",children:c.jsxs(nr,{className:"flex flex-col space-y-2 px-1!",children:[c.jsx(fr,{className:"mt-1.5!"}),n&&c.jsxs("div",{className:"flex items-center space-x-2 pl-2 pr-1 py-1 rounded-xs bg-white",children:[c.jsx("div",{className:"relative grow",children:c.jsx("div",{className:"col-span-10 grow grid gap-2 grid-cols-2 rounded-xs overflow-x-auto scrollbar-none",children:c.jsx(ui,{filterOptions:e})})}),c.jsx("div",{className:"flex mb-auto md:hidden",children:c.jsx(Cl,{filterOptions:e})})]})]})})})},Al=e=>{const{filterOptions:n}=e;return c.jsxs("section",{className:"lg:max-w-5xl xl:max-w-6xl mx-auto",children:[c.jsx(Ml,{filterOptions:n}),c.jsx("div",{className:"md:hidden px-1 mt-2",children:c.jsx(tr,{variant:"mobile"})}),c.jsx(nr,{className:"md:hidden pt-3 mt-3 py-0 px-1!",children:c.jsx(mr,{})})]})};function Fl(){const e=lo.useLoaderData(),{t:n}=xe();return c.jsxs(c.Fragment,{children:[c.jsx(ct,{to:".",pending:!0,children:c.jsx(gt,{})}),c.jsx(ct,{to:"/detail/$newId",pending:!0,children:c.jsx(gt,{})}),c.jsxs("div",{className:"relative min-h-[calc(100dvh-150px)] h-auto",children:[c.jsx(ra,{text:n("components.marquee.content")}),c.jsx(Al,{filterOptions:e?.data?.list||[]}),c.jsx(li,{filterOptions:e?.data?.list||[]})]})]})}export{Fl as component};
