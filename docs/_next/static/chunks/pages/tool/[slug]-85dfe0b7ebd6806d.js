(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{2219:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tool/[slug]",function(){return i(4829)}])},6541:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let n=i(8754),r=i(1757),o=i(5893),s=r._(i(7294)),l=n._(i(3935)),a=n._(i(7828)),c=i(7367),d=i(7903),u=i(4938);i(1997);let f=i(9953),p=n._(i(6663)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,i,n,r,o,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function _(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let h=(0,s.forwardRef)((e,t)=>{let{src:i,srcSet:n,sizes:r,height:l,width:a,decoding:c,className:d,style:u,fetchPriority:f,placeholder:p,loading:m,unoptimized:h,fill:w,onLoadRef:x,onLoadingCompleteRef:j,setBlurComplete:v,setShowAltText:b,sizesInput:y,onLoad:S,onError:E,...z}=e;return(0,o.jsx)("img",{...z,..._(f),loading:m,width:a,height:l,decoding:c,"data-nimg":w?"fill":"1",className:d,style:u,sizes:r,srcSet:n,src:i,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,p,x,j,v,h,y))},[i,p,x,j,v,E,h,y,t]),onLoad:e=>{g(e.currentTarget,p,x,j,v,h,y)},onError:e=>{b(!0),"empty"!==p&&v(!0),E&&E(e)}})});function w(e){let{isAppRouter:t,imgAttributes:i}=e,n={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,..._(i.fetchPriority)};return t&&l.default.preload?(l.default.preload(i.src,n),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...n},"__nimg-"+i.src+i.srcSet+i.sizes)})}let x=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(f.RouterContext),n=(0,s.useContext)(u.ImageConfigContext),r=(0,s.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[n]),{onLoad:l,onLoadingComplete:a}=e,g=(0,s.useRef)(l);(0,s.useEffect)(()=>{g.current=l},[l]);let _=(0,s.useRef)(a);(0,s.useEffect)(()=>{_.current=a},[a]);let[x,j]=(0,s.useState)(!1),[v,b]=(0,s.useState)(!1),{props:y,meta:S}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:r,blurComplete:x,showAltText:v});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{...y,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:b,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(w,{isAppRouter:!i,imgAttributes:y}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(1997);let n=i(9919),r=i(7903);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i;let l,a,c,{src:d,sizes:u,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:_,width:h,height:w,fill:x=!1,style:j,overrideSrc:v,onLoad:b,onLoadingComplete:y,placeholder:S="empty",blurDataURL:E,fetchPriority:z,layout:C,objectFit:P,objectPosition:I,lazyBoundary:N,lazyRoot:O,...k}=e,{imgConf:R,showAltText:M,blurComplete:L,defaultLoader:W}=t,D=R||r.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}if(void 0===W)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=k.loader||W;delete k.loader,delete k.srcSet;let B="__next_img_default"in F;if(B){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:i,...n}=t;return e(n)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let A="",G=s(h),T=s(w);if("object"==typeof(i=d)&&(o(i)||void 0!==i.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,A=e.src,!x){if(G||T){if(G&&!T){let t=G/e.width;T=Math.round(e.height*t)}else if(!G&&T){let t=T/e.height;G=Math.round(e.width*t)}}else G=e.width,T=e.height}}let H=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:A)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,H=!1),l.unoptimized&&(f=!0),B&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(z="high");let J=s(_),U=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:I}:{},M?{}:{color:"transparent"},j),X=L||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:T,blurWidth:a,blurHeight:c,blurDataURL:E||"",objectFit:U.objectFit})+'")':'url("'+S+'")',Y=X?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},V=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:o,sizes:s,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))],kind:"x"}}(t,r,s),d=a.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:a.map((e,n)=>l({config:t,src:i,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:l({config:t,src:i,quality:o,width:a[d]})}}({config:l,src:d,unoptimized:f,width:G,quality:J,sizes:u,loader:F});return{props:{...k,loading:H?"lazy":m,fetchPriority:z,width:G,height:T,decoding:"async",className:g,style:{...U,...Y},sizes:V.sizes,srcSet:V.srcSet,src:v||V.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:x}}}},9919:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:o,objectFit:s}=e,l=n?40*n:t,a=r?40*r:i,c=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},5666:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return a},getImageProps:function(){return l}});let n=i(8754),r=i(7367),o=i(6541),s=n._(i(6663));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let a=o.Image},6663:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),i.__next_img_default=!0;let n=i},4829:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return O},default:function(){return k}});var n=i(5893),r=i(9008),o=i.n(r);let s="http://localhost",l="".concat(s,"/img/ogp.png");var a=i(8806),c=i.n(a);function d(e){let{children:t,addClass:i}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"".concat(c().inner," ").concat(i),children:t})})}var u=i(7294),f=i(5675),p=i.n(f);let m=async e=>{let t=await fetch("http://localhost/wp-json/wp/v2/media/".concat(e,"/")),i=await t.json();return{file:i.media_details.file,width:i.media_details.width,height:i.media_details.height,alt:i.alt_text}};var g=i(4850),_=i.n(g);function h(e){let{imgID:t}=e,[i,r]=(0,u.useState)(null),[o,s]=(0,u.useState)(null),[l,a]=(0,u.useState)(null),[c,d]=(0,u.useState)("");return((0,u.useEffect)(()=>{(async()=>{let e=await m(t);r(e.file),s(e.file.split("/").pop()),a({width:e.width,height:e.height}),d(e.alt)})()},[t]),i&&l)?(0,n.jsx)("picture",{className:"".concat(_().wpImg),children:(0,n.jsx)(p(),{src:"/img/".concat(o),alt:c,width:l.width,height:l.height})}):null}var w=i(4744),x=i.n(w);function j(e){let{children:t,addClass:i}=e;return(0,n.jsx)("div",{className:"".concat(x().wpEditor," ").concat(i),dangerouslySetInnerHTML:{__html:"".concat(t)||""}})}var v=i(418),b=i.n(v);function y(e){let{post:t}=e;return(0,n.jsx)("ul",{className:b().list,children:t.acf.tool_feature.map((e,t)=>(0,n.jsxs)("li",{className:"".concat(b().list__item),children:[(0,n.jsx)("div",{className:b().list__block,children:(0,n.jsx)(h,{imgID:e.tool_feature_img})}),(0,n.jsxs)("dl",{className:b().list__dl,children:[(0,n.jsx)("dt",{className:b().list__term,children:e.tool_feature_title}),(0,n.jsx)("dd",{className:b().list__desc,children:(0,n.jsx)(j,{children:e.tool_feature_desc})})]})]},t))})}var S=i(5632),E=i.n(S);function z(e){let{children:t,addClass:i}=e;return(0,n.jsx)("section",{className:"".concat(E().wpSection," ").concat(i&&E()[i]),children:t})}var C=i(9446),P=i.n(C);function I(e){let{children:t,addClass:i}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"".concat(P().wrapper," ").concat(i),children:t})})}let N=e=>{let{noindex:t,nofollow:i}=e,n="index";return t&&i?n="none":t&&!i?n="noindex":!t&&i&&(n="nofollow"),n};var O=!0;function k(e){let{post:t,slug:i}=e,r=N({noindex:t.acf.noindex_field,nofollow:t.acf.nofollow_field}),a=t.acf.canonical_field||"".concat(s,"/tool/").concat(i,"/"),c=t.acf.og_url_field||"".concat(s,"/tool/").concat(i,"/"),u=t.acf.og_image_field||l;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:t.acf.meta_title_field}),(0,n.jsx)("meta",{name:"description",content:t.acf.meta_desc_field}),(0,n.jsx)("meta",{name:"robots",content:r}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:locale",content:"ja_JP"}),(0,n.jsx)("link",{rel:"canonical",href:a}),(0,n.jsx)("meta",{property:"og:url",content:c}),(0,n.jsx)("meta",{property:"og:site_name",content:t.acf.meta_title_field}),(0,n.jsx)("meta",{property:"og:image",content:u}),(0,n.jsx)("meta",{property:"og:title",content:t.acf.meta_title_field}),(0,n.jsx)("meta",{property:"og:description",content:t.acf.meta_desc_field})]}),(0,n.jsxs)(I,{children:[(0,n.jsx)(d,{children:(0,n.jsx)(h,{imgID:t.acf.tool_fv})}),(0,n.jsx)(z,{children:(0,n.jsx)(d,{children:(0,n.jsx)(y,{post:t})})})]})]})}},8806:function(e){e.exports={inner:"Inner_inner__kIjya"}},418:function(e){e.exports={list:"List_list__zLjGi",list__item:"List_list__item__w_BkU",list__block:"List_list__block__JMJo_",list__dl:"List_list__dl__HQ2XH",list__term:"List_list__term__r_ggT",list__desc:"List_list__desc__Hlj0Y"}},4744:function(e){e.exports={wpEditor:"WpEditor_wpEditor__42fRT"}},4850:function(e){e.exports={wpImg:"WpImg_wpImg__2hBhW"}},5632:function(e){e.exports={wpSection:"WpSection_wpSection__hITFj",WpSection:"WpSection_WpSection__peB1d"}},9446:function(e){e.exports={wrapper:"Wrapper_wrapper__YXa9O"}},9008:function(e,t,i){e.exports=i(7828)},5675:function(e,t,i){e.exports=i(5666)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=2219)}),_N_E=e.O()}]);