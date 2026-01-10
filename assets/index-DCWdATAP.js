import{r as Q,g as U,j as x}from"./index-DG2NTfqa.js";var p={},A;function V(){if(A)return p;A=1;function w(r){if(typeof window>"u")return;const u=document.createElement("style");return u.setAttribute("type","text/css"),u.innerHTML=r,document.head.appendChild(u),r}Object.defineProperty(p,"__esModule",{value:!0});var e=Q();function D(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var a=D(e);w(`.rfm-marquee-container {
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
}`);const B=e.forwardRef(function({style:u={},className:I="",autoFill:l=!1,play:c=!0,pauseOnHover:b=!1,pauseOnClick:q=!1,direction:t="left",speed:d=50,delay:S=0,loop:E=0,gradient:L=!1,gradientColor:_="white",gradientWidth:h=200,onFinish:T,onCycleComplete:X,onMount:k,children:v},H){const[R,O]=e.useState(0),[y,P]=e.useState(0),[g,C]=e.useState(1),[M,Z]=e.useState(!1),G=e.useRef(null),i=H||G,f=e.useRef(null),m=e.useCallback(()=>{if(f.current&&i.current){const n=i.current.getBoundingClientRect(),N=f.current.getBoundingClientRect();let o=n.width,s=N.width;(t==="up"||t==="down")&&(o=n.height,s=N.height),C(l&&o&&s&&s<o?Math.ceil(o/s):1),O(o),P(s)}},[l,i,t]);e.useEffect(()=>{if(M&&(m(),f.current&&i.current)){const n=new ResizeObserver(()=>m());return n.observe(i.current),n.observe(f.current),()=>{n&&n.disconnect()}}},[m,i,M]),e.useEffect(()=>{m()},[m,v]),e.useEffect(()=>{Z(!0)},[]),e.useEffect(()=>{typeof k=="function"&&k()},[]);const W=e.useMemo(()=>l?y*g/d:y<R?R/d:y/d,[l,R,y,g,d]),J=e.useMemo(()=>Object.assign(Object.assign({},u),{"--pause-on-hover":!c||b?"paused":"running","--pause-on-click":!c||b&&!q||q?"paused":"running","--width":t==="up"||t==="down"?"100vh":"100%","--transform":t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[u,c,b,q,t]),K=e.useMemo(()=>({"--gradient-color":_,"--gradient-width":typeof h=="number"?`${h}px`:h}),[_,h]),$=e.useMemo(()=>({"--play":c?"running":"paused","--direction":t==="left"?"normal":"reverse","--duration":`${W}s`,"--delay":`${S}s`,"--iteration-count":E?`${E}`:"infinite","--min-width":l?"auto":"100%"}),[c,t,W,S,E,l]),j=e.useMemo(()=>({"--transform":t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),z=e.useCallback(n=>[...Array(Number.isFinite(n)&&n>=0?n:0)].map((N,o)=>a.default.createElement(e.Fragment,{key:o},e.Children.map(v,s=>a.default.createElement("div",{style:j,className:"rfm-child"},s)))),[j,v]);return M?a.default.createElement("div",{ref:i,style:J,className:"rfm-marquee-container "+I},L&&a.default.createElement("div",{style:K,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:$,onAnimationIteration:X,onAnimationEnd:T},a.default.createElement("div",{className:"rfm-initial-child-container",ref:f},e.Children.map(v,n=>a.default.createElement("div",{style:j,className:"rfm-child"},n))),z(g-1)),a.default.createElement("div",{className:"rfm-marquee",style:$},z(g))):null});return p.default=B,p}var Y=V();const F=U(Y),ee=({text:w})=>x.jsx("div",{className:"bg-amber-300 py-2",children:x.jsx(F,{className:"text-gray-700 text-xs sm:text-sm xl:text-base",children:w})});function ne(){return x.jsx("div",{className:"relative min-h-[calc(100dvh-150px)] h-auto",children:x.jsx(ee,{text:`Welcome to Haiwai news, looking for breaking news with variety of
        catgories, you come to the right place.`})})}export{ne as component};
