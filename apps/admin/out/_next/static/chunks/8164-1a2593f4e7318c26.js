"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8164],{26879:function(e,t,r){r.d(t,{XZ:function(){return A}});var o=r(62803),n=r(24703),i=r(95486),a=r(64611),s=r(14598),l=r(27175),d=r(34612),u=r(93559),c=r(81298),h=r(57846),f=r(80353),p=r(59240),m=r(28920),v=r(80939),x=r(50733),b=r(41439),y=r(29376),k=r(2784),g=r(52322);let w=(0,o.i)({size:"$true",scaleIcon:1});function $(e){return"indeterminate"===e}function z(e){return $(e)?"indeterminate":e?"checked":"unchecked"}let S=e=>{let{checked:t,bubbles:r=!0,control:o,isHidden:n,...i}=e,a=k.useRef(null),s=(0,y.D)(t);return k.useEffect(()=>{let e=a.current,o=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(o,"checked").set;if(s!==t&&n){let o=new Event("click",{bubbles:r});e.indeterminate=$(t),n.call(e,!$(t)&&t),e.dispatchEvent(o)}},[s,t,r]),(0,g.jsx)("input",{type:"checkbox",defaultChecked:!$(t)&&t,...i,tabIndex:-1,ref:a,"aria-hidden":n,style:{...n?{position:"absolute",pointerEvents:"none",opacity:0,margin:0}:{appearance:"auto",accentColor:"var(--color6)"},...e.style}})},j="CheckboxIndicator",E=(0,n.z)(x.K,{name:j,context:w}),L=E.extractable(k.forwardRef((e,t)=>{let{__scopeCheckbox:r,children:o,forceMount:n,disablePassStyles:a,...s}=e,l=D(j,r),d=k.useContext(w),u=("number"==typeof d.size?.65*d.size:(0,f.yv)(d.size))*d.scaleIcon,c=(0,i.Fg)(),h=(0,m.useGetThemedIcon)({size:u,color:c.color}),p=k.Children.toArray(o).map(e=>a||!k.isValidElement(e)?e:h(e));return n||$(l.state)||!0===l.state?(0,g.jsx)(E,{"data-state":z(l.state),"data-disabled":l.disabled?"":void 0,pointerEvents:"none",...s,ref:t,children:p}):null}));L.displayName=j;let C="Checkbox",R=(0,n.z)(x.K,{name:C,tag:"button",context:w,variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",alignItems:"center",justifyContent:"center",pressTheme:!0,focusable:!0,borderWidth:1,borderColor:"$borderColor",hoverStyle:{borderColor:"$borderColorHover"},focusStyle:{borderColor:"$borderColorFocus",outlineStyle:"solid",outlineWidth:2,outlineColor:"$borderColorFocus"}}},disabled:{true:{pointerEvents:"none",userSelect:"none",cursor:"not-allowed",hoverStyle:{borderColor:"$borderColor",backgroundColor:"$background"},pressStyle:{borderColor:"$borderColor",backgroundColor:"$backgroundColor"},focusStyle:{outlineWidth:0}}},size:{"...size":(e,{tokens:t})=>({borderRadius:(0,a.Ve)((0,p.ap)(e))/8})}},defaultVariants:{unstyled:!1}}),[M,T]=(0,h.b)(C),[H,D]=M(C),P=R.extractable(k.forwardRef(function(e,t){let{__scopeCheckbox:r,labelledBy:o,name:n,checked:i,defaultChecked:c,required:h,scaleSize:f=.45,sizeAdjust:m=0,disabled:x,value:y="on",onCheckedChange:j,native:E,scaleIcon:L,...C}=e,[M,T]=k.useState(null),D=(0,s.e)(t,e=>T(e)),P=k.useRef(!1),A=(0,l.wN)(e),I=!!d.$L&&(!M||!!M.closest("form")),[N=!1,K]=(0,b.T)({prop:i,defaultProp:c,onChange:j}),V=k.useContext(w),W=(0,a.Ve)((0,p.ap)(A.size??V?.size??"$true",{shift:m})),_=f?Math.round(W*f):W,F=(0,v.t0)(M);return(0,g.jsx)(H,{scope:r,state:N,disabled:x,children:d.$L&&E?(0,g.jsx)(S,{control:M,bubbles:!P.current,name:n,value:y,checked:N,required:h,disabled:x,id:e.id}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(R,{width:_,height:_,tag:"button",role:"checkbox","aria-labelledby":o||F,"aria-checked":$(N)?"mixed":N,"aria-required":h,"data-state":z(N),"data-disabled":x?"":void 0,disabled:x,...C,ref:D,...d.$L&&{type:"button",value:y,onKeyDown:(0,u.composeEventHandlers)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()})},onPress:(0,u.composeEventHandlers)(e.onPress,e=>{K(e=>!!$(e)||!e),I&&(P.current=e.isPropagationStopped(),P.current||e.stopPropagation())}),children:(0,g.jsx)(w.Provider,{size:A.size??V?.size??"$true",scaleIcon:L??V?.scaleIcon??1,children:A.children})}),d.$L&&I?(0,g.jsx)(S,{isHidden:!0,control:M,bubbles:!P.current,name:n,value:y,checked:N,required:h,disabled:x}):null]})})})),A=(0,c.$)(P,{Indicator:L,Props:w.Provider})},1963:function(e,t,r){r.d(t,{G:function(){return l}});var o=r(78161),n=r(2784),i=r(73675),a=r(52322);let s=e=>{let{color:t="black",size:r=24,...o}=e;return(0,a.jsxs)(i.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,a.jsx)(i.y$,{d:"M18 6 7 17l-5-5",stroke:`${t}`}),(0,a.jsx)(i.y$,{d:"m22 10-7.5 7.5L13 16",stroke:`${t}`})]})};s.displayName="CheckCheck";let l=(0,n.memo)((0,o.H)(s))},40641:function(e,t,r){r.d(t,{s:function(){return l}});var o=r(78161),n=r(2784),i=r(73675),a=r(52322);let s=e=>{let{color:t="black",size:r=24,...o}=e;return(0,a.jsx)(i.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,a.jsx)(i.aH,{points:"15 18 9 12 15 6",stroke:`${t}`})})};s.displayName="ChevronLeft";let l=(0,n.memo)((0,o.H)(s))},81815:function(e,t,r){r.d(t,{J:function(){return l}});var o=r(78161),n=r(2784),i=r(73675),a=r(52322);let s=e=>{let{color:t="black",size:r=24,...o}=e;return(0,a.jsxs)(i.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,a.jsx)(i.UL,{width:"7",height:"7",x:"3",y:"3",rx:"1",stroke:`${t}`}),(0,a.jsx)(i.UL,{width:"7",height:"7",x:"14",y:"3",rx:"1",stroke:`${t}`}),(0,a.jsx)(i.UL,{width:"7",height:"7",x:"14",y:"14",rx:"1",stroke:`${t}`}),(0,a.jsx)(i.UL,{width:"7",height:"7",x:"3",y:"14",rx:"1",stroke:`${t}`})]})};s.displayName="LayoutGrid";let l=(0,n.memo)((0,o.H)(s))},99062:function(e,t,r){r.d(t,{a:function(){return l}});var o=r(78161),n=r(2784),i=r(73675),a=r(52322);let s=e=>{let{color:t="black",size:r=24,...o}=e;return(0,a.jsxs)(i.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,a.jsx)(i.x1,{x1:"8",x2:"21",y1:"6",y2:"6",stroke:`${t}`}),(0,a.jsx)(i.x1,{x1:"8",x2:"21",y1:"12",y2:"12",stroke:`${t}`}),(0,a.jsx)(i.x1,{x1:"8",x2:"21",y1:"18",y2:"18",stroke:`${t}`}),(0,a.jsx)(i.x1,{x1:"3",x2:"3.01",y1:"6",y2:"6",stroke:`${t}`}),(0,a.jsx)(i.x1,{x1:"3",x2:"3.01",y1:"12",y2:"12",stroke:`${t}`}),(0,a.jsx)(i.x1,{x1:"3",x2:"3.01",y1:"18",y2:"18",stroke:`${t}`})]})};s.displayName="List";let l=(0,n.memo)((0,o.H)(s))},10281:function(e,t,r){r.d(t,{h:function(){return l}});var o=r(78161),n=r(2784),i=r(73675),a=r(52322);let s=e=>{let{color:t="black",size:r=24,...o}=e;return(0,a.jsxs)(i.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,a.jsx)(i.Cd,{cx:"12",cy:"12",r:"1",stroke:`${t}`}),(0,a.jsx)(i.Cd,{cx:"12",cy:"5",r:"1",stroke:`${t}`}),(0,a.jsx)(i.Cd,{cx:"12",cy:"19",r:"1",stroke:`${t}`})]})};s.displayName="MoreVertical";let l=(0,n.memo)((0,o.H)(s))},7324:function(e,t,r){r.d(t,{$:function(){return l}});var o=r(78161),n=r(2784),i=r(73675),a=r(52322);let s=e=>{let{color:t="black",size:r=24,...o}=e;return(0,a.jsxs)(i.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,a.jsx)(i.y$,{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",stroke:`${t}`}),(0,a.jsx)(i.y$,{d:"M6 9.01V9",stroke:`${t}`}),(0,a.jsx)(i.y$,{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",stroke:`${t}`})]})};s.displayName="Tags";let l=(0,n.memo)((0,o.H)(s))},4273:function(e,t,r){r.d(t,{iR:function(){return X}});var o=r(14598),n=r(61739),i=r(34612),a=r(24703),s=r(50327),l=r(64611),d=r(81298),u=r(59240),c=r(70396),h=r(50733),f=r(41439),p=r(51072),m=r(2784),v=r(57846);let x="Slider",[b,y]=(0,v.b)(x),[k,g]=b(x),[w,$]=b(x,{startEdge:"left",endEdge:"right",sizeProp:"width",size:0,direction:1}),z=["PageUp","PageDown"],S=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],j={ltr:["ArrowDown","Home","ArrowLeft","PageDown"],rtl:["ArrowDown","Home","ArrowRight","PageDown"]};function E(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let o=(t[1]-t[0])/(e[1]-e[0]);return t[0]+o*(r-e[0])}}var L=r(93559),C=r(8939),R=r(52322);let M=(0,a.z)(C.FA,{variants:{orientation:{horizontal:{},vertical:{}}}}),T=(0,a.z)(M,{position:"relative",variants:{size:(e,t)=>{if(!e)return;let r=t.props.orientation,o=Math.round((0,l.Ve)((0,u.ap)(e))/6);return"horizontal"===r?{height:o,borderRadius:o,justifyContent:"center"}:{width:o,borderRadius:o,alignItems:"center"}}}}),H=m.forwardRef((e,t)=>{let{__scopeSlider:r,onSlideStart:o,onSlideMove:n,onSlideEnd:a,onHomeKeyDown:s,onEndKeyDown:l,onStepKeyDown:d,...u}=e,c=g(x,r);return(0,R.jsx)(T,{size:"$4",...u,"data-orientation":u.orientation,ref:t,...i.$L&&{onKeyDown:e=>{"Home"===e.key?(s(e),e.preventDefault()):"End"===e.key?(l(e),e.preventDefault()):z.concat(S).includes(e.key)&&(d(e),e.preventDefault())}},onMoveShouldSetResponderCapture:()=>!0,onScrollShouldSetResponder:()=>!0,onScrollShouldSetResponderCapture:()=>!0,onMoveShouldSetResponder:()=>!0,onStartShouldSetResponder:()=>!0,onResponderTerminationRequest:()=>!1,onResponderGrant:(0,L.composeEventHandlers)(e.onResponderGrant,e=>{let t=e.target,r=c.thumbs.has(t);i.$L&&t instanceof HTMLElement&&c.thumbs.has(t)&&t.focus(),o(e,r?"thumb":"track")}),onResponderMove:(0,L.composeEventHandlers)(e.onResponderMove,e=>{e.stopPropagation(),n(e)}),onResponderRelease:(0,L.composeEventHandlers)(e.onResponderRelease,e=>{a(e)})})}),D=m.forwardRef((e,t)=>{let{min:r,max:a,dir:s,onSlideStart:l,onSlideMove:d,onStepKeyDown:u,onSlideEnd:c,...h}=e,f=(0,p.gm)(s),v="ltr"===f,x=m.useRef(null),[b,y]=m.useState(()=>({size:0,offset:0})),k=(0,n.J)(y);function g(e){let t=[0,b.size];return E(t,v?[r,a]:[a,r])(e)}let $=()=>{x.current?.measure((e,t,r,o,n,i)=>{k({size:r,offset:n})})};return i.C5&&P($),(0,R.jsx)(w,{scope:e.__scopeSlider,startEdge:v?"left":"right",endEdge:v?"right":"left",direction:v?1:-1,sizeProp:"width",size:b.size,children:(0,R.jsx)(H,{ref:(0,o.F)(t,x),dir:f,...h,orientation:"horizontal",onLayout:$,onSlideStart:(e,t)=>{let r=g(e.nativeEvent.locationX);r&&l?.(r,t,e)},onSlideMove:e=>{let t=g(e.nativeEvent.pageX-b.offset);t&&d?.(t,e)},onSlideEnd:e=>{let t=g(e.nativeEvent.pageX-b.offset);t&&c?.(e,t)},onStepKeyDown:e=>{let t=j[f].includes(e.key);u?.({event:e,direction:t?-1:1})}})})});function P(e,t=200){m.useEffect(()=>{let r;let o=()=>{clearTimeout(r),r=setTimeout(e,t)};return window.addEventListener("resize",o),()=>{clearTimeout(r),window.removeEventListener("resize",o)}},[])}let A=m.forwardRef((e,t)=>{let{min:r,max:a,onSlideStart:s,onSlideMove:l,onStepKeyDown:d,onSlideEnd:u,...c}=e,[h,f]=m.useState(()=>({size:0,offset:0})),p=(0,n.J)(f),v=m.useRef(null);function x(e){let t=[0,h.size];return E(t,[a,r])(e)}let b=()=>{v.current?.measure((e,t,r,o,n,i)=>{p({size:o,offset:i})})};return i.C5&&P(b),(0,R.jsx)(w,{scope:e.__scopeSlider,startEdge:"bottom",endEdge:"top",sizeProp:"height",size:h.size,direction:1,children:(0,R.jsx)(H,{ref:(0,o.F)(t,v),...c,orientation:"vertical",onLayout:b,onSlideStart:(e,t)=>{let r=x(e.nativeEvent.locationY);r&&s?.(r,t,e)},onSlideMove:e=>{let t=x(e.nativeEvent.pageY-h.offset);t&&l?.(t,e)},onSlideEnd:e=>{let t=x(e.nativeEvent.pageY-h.offset);u?.(e,t)},onStepKeyDown:e=>{let t=j.ltr.includes(e.key);d?.({event:e,direction:t?-1:1})}})})}),I="SliderTrack",N=(0,a.z)(T,{name:"SliderTrack",variants:{unstyled:{false:{height:"100%",width:"100%",backgroundColor:"$background",position:"relative",borderRadius:1e5,overflow:"hidden"}}},defaultVariants:{unstyled:!1}}),K=m.forwardRef((e,t)=>{let{__scopeSlider:r,...o}=e,n=g(I,r);return(0,R.jsx)(N,{"data-disabled":n.disabled?"":void 0,"data-orientation":n.orientation,orientation:n.orientation,size:n.size,...o,ref:t})});K.displayName=I;let V="SliderTrackActive",W=(0,a.z)(T,{name:"SliderTrackActive",backgroundColor:"$background",position:"absolute"}),_=m.forwardRef((e,t)=>{let{__scopeSlider:r,...n}=e,i=g(V,r),a=$(V,r),s=m.useRef(null),l=(0,o.e)(t,s),d=i.values.length,u=i.values.map(e=>{var t;return t=i.min,100/(i.max-t)*(e-t)});return(0,R.jsx)(W,{orientation:i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0,size:i.size,animateOnly:["left","top","right","bottom"],...n,ref:l,[a.startEdge]:`${d>1?Math.min(...u):0}%`,[a.endEdge]:`${100-Math.max(...u)}%`,..."width"===a.sizeProp?{height:"100%"}:{left:0,right:0}})});_.displayName=V;let F="SliderThumb",B=e=>{let t=(0,s.lz)(),r="number"==typeof e?e:(0,u.ap)(t.size[e],{shift:-1});return{width:r,height:r,minWidth:r,minHeight:r}},O=(0,a.z)(h.K,{name:"SliderThumb",variants:{size:{"...size":B},unstyled:{false:{position:"absolute",bordered:2,borderWidth:2,backgrounded:!0,pressTheme:i.$L,focusTheme:i.$L,hoverTheme:i.$L}}},defaultVariants:{unstyled:!1}}),U=O.styleable(function(e,t){var r,n;let{__scopeSlider:i,index:a,size:s,...d}=e,u=g(F,i),h=$(F,i),[f,p]=m.useState(null),v=(0,o.e)(t,e=>p(e)),x=u.values[a],b=void 0===x?0:(r=u.min,100/(u.max-r)*(x-r)),y=(n=u.values.length)>2?`Value ${a+1} of ${n}`:2===n?["Minimum","Maximum"][a]:void 0,k=s??u.size??"$true",[w,z]=m.useState(()=>(0,l.Ve)(B(k).width)),S=w?function(e,t,r){let o=e/2,n=E([0,50],[0,o]);return(o-n(t)*r)*r}(w,b,h.direction):0;m.useEffect(()=>{if(f)return u.thumbs.add(f),()=>{u.thumbs.delete(f)}},[f,u.thumbs]);let j="horizontal"===u.orientation?{x:S-w/2,y:-w/2,top:"50%",...0===w&&{top:"auto",bottom:"auto"}}:{x:-w/2,y:w/2,left:"50%",...0===w&&{left:"auto",right:"auto"}};return(0,R.jsx)(O,{ref:v,role:"slider","aria-label":e["aria-label"]||y,"aria-valuemin":u.min,"aria-valuenow":x,"aria-valuemax":u.max,"aria-orientation":u.orientation,"data-orientation":u.orientation,"data-disabled":u.disabled?"":void 0,tabIndex:u.disabled?void 0:0,animateOnly:["transform","left","top","right","bottom"],...j,[h.startEdge]:`${b}%`,size:k,...d,onLayout:e=>{z(e.nativeEvent.layout[h.sizeProp])},onFocus:(0,c.composeEventHandlers)(e.onFocus,()=>{u.valueIndexToChangeRef.current=a})})}),G=m.forwardRef((e,t)=>{let{name:r,min:n=0,max:a=100,step:s=1,orientation:l="horizontal",disabled:d=!1,minStepsBetweenThumbs:u=0,defaultValue:h=[n],value:p,onValueChange:v=()=>{},size:x,onSlideEnd:b,onSlideMove:y,onSlideStart:g,...w}=e,$=m.useRef(null),j=(0,o.e)($,t),E=m.useRef(new Set),L=m.useRef(0),C="horizontal"===l,[M=[],T]=(0,f.T)({prop:p,defaultProp:h,transition:!0,onChange:e=>{i.$L&&[...E.current][L.current]?.focus(),v(e)}});function H(e,t){let r=(String(s).split(".")[1]||"").length,o=function(e,t){let r=10**t;return Math.round(e*r)/r}(Math.round((e-n)/s)*s+n,r),i=(0,c.clamp)(o,[n,a]);T((e=[])=>{let r=function(e=[],t,r){let o=[...e];return o[r]=t,o.sort((e,t)=>e-t)}(e,i,t);return!function(e,t){if(t>0){let r=e.slice(0,-1).map((t,r)=>e[r+1]-t);return Math.min(...r)>=t}return!0}(r,u*s)?e:(L.current=r.indexOf(i),String(r)===String(e)?e:r)})}i.$L&&m.useEffect(()=>{let e=$.current;if(!e)return;let t=e=>{e.preventDefault()};return e.addEventListener("touchstart",t),()=>{e.removeEventListener("touchstart",t)}},[]);let P=C?D:A;return(0,R.jsx)(k,{scope:e.__scopeSlider,disabled:d,min:n,max:a,valueIndexToChangeRef:L,thumbs:E.current,values:M,orientation:l,size:x,children:(0,R.jsx)(P,{"aria-disabled":d,"data-disabled":d?"":void 0,...w,ref:j,min:n,max:a,onSlideEnd:b,onSlideStart:d?void 0:(e,t,r)=>{if("thumb"!==t){let o=function(e,t){if(1===e.length)return 0;let r=e.map(e=>Math.abs(e-t)),o=Math.min(...r);return r.indexOf(o)}(M,e);H(e,o),g?.(r,e,t)}},onSlideMove:d?void 0:function(e,t){H(e,L.current),y?.(t,e)},onHomeKeyDown:()=>!d&&H(n,0),onEndKeyDown:()=>!d&&H(a,M.length-1),onStepKeyDown:({event:e,direction:t})=>{if(!d){let r=z.includes(e.key)||e.shiftKey&&S.includes(e.key)?10:1,o=L.current,n=M[o],i=s*r*t;H(n+i,o)}}})})}),X=(0,d.$)(G,{Track:K,TrackActive:_,Thumb:U});X.displayName=x}}]);