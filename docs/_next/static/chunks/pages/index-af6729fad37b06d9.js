(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1364)}])},6691:function(e,t){"use strict";var n,r,o,u;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return f},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let l="refresh",f="navigate",i="restore",c="server-patch",a="prefetch",s="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(u=r||(r={})).fresh="fresh",u.reusable="reusable",u.expired="expired",u.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let r=n(8754),o=n(5893),u=r._(n(7294)),l=n(1401),f=n(2045),i=n(7420),c=n(7201),a=n(1443),s=n(9953),d=n(5320),p=n(2905),h=n(4318),y=n(953),b=n(6691),_=new Set;function v(e,t,n,r,o,u){if(u||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(_.has(o))return;_.add(o)}(async()=>u?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let O=u.default.forwardRef(function(e,t){let n,r;let{href:i,as:_,children:O,prefetch:C=null,passHref:g,replace:E,shallow:m,scroll:P,locale:x,onClick:T,onMouseEnter:M,onTouchStart:R,legacyBehavior:A=!1,...k}=e;n=O,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let I=u.default.useContext(s.RouterContext),N=u.default.useContext(d.AppRouterContext),w=null!=I?I:N,L=!I,S=!1!==C,U=null===C?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:F,as:K}=u.default.useMemo(()=>{if(!I){let e=j(i);return{href:e,as:_?j(_):e}}let[e,t]=(0,l.resolveHref)(I,i,!0);return{href:e,as:_?(0,l.resolveHref)(I,_):t||e}},[I,i,_]),H=u.default.useRef(F),D=u.default.useRef(K);A&&(r=u.default.Children.only(n));let V=A?r&&"object"==typeof r&&r.ref:t,[G,X,q]=(0,p.useIntersection)({rootMargin:"200px"}),z=u.default.useCallback(e=>{(D.current!==K||H.current!==F)&&(q(),D.current=K,H.current=F),G(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[K,V,F,q,G]);u.default.useEffect(()=>{w&&X&&S&&v(w,F,K,{locale:x},{kind:U},L)},[K,F,X,x,S,null==I?void 0:I.locale,w,L,U]);let B={ref:z,onClick(e){A||"function"!=typeof T||T(e),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,n,r,o,l,i,c,a){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};a?u.default.startTransition(d):d()}(e,w,F,K,E,m,P,x,L)},onMouseEnter(e){A||"function"!=typeof M||M(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),w&&(S||!L)&&v(w,F,K,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart:function(e){A||"function"!=typeof R||R(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),w&&(S||!L)&&v(w,F,K,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,c.isAbsoluteUrl)(K))B.href=K;else if(!A||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==x?x:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);B.href=t||(0,y.addBasePath)((0,a.addLocale)(K,e,null==I?void 0:I.defaultLocale))}return A?u.default.cloneElement(r,B):(0,o.jsx)("a",{...k,...B,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(3815),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!u,[a,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(c||a)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!a){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,a,d.current]),[p,a,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1364:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),o=n(9008),u=n.n(o),l=n(1664),f=n.n(l);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:(0,r.jsx)(f(),{href:"/tool/mamp/",children:"MAMP"})})]})}},9008:function(e,t,n){e.exports=n(7828)},1664:function(e,t,n){e.exports=n(9577)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);