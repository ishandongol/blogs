(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[591],{5468:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[slug]",function(){return n(7252)}])},4344:function(e,t,n){"use strict";n.d(t,{q:function(){return c}});var r=n(5893),a=n(1664),s=n.n(a),l=n(4648);let i=e=>{let{pill:t,children:n,noMargin:a,color:s="pink"}=e;return t?(0,r.jsx)("div",{className:"inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300",children:n}):(0,r.jsx)("span",{className:"inline-block text-xs font-medium tracking-wider uppercase ".concat((0,l.K)({"mt-5":!a},{})," ").concat({green:"text-emerald-700",blue:"text-blue-600",orange:"text-orange-700",purple:"text-purple-600",pink:"text-pink-600"}[s]),children:n})},c=e=>{let{categories:t,noMargin:n=!1}=e;return(0,r.jsx)("div",{className:"flex gap-3",children:(null==t?void 0:t.length)&&t.slice(0).map((e,t)=>{let{slug:a,color:l,title:c}=e;return(0,r.jsx)(s(),{href:"/categories/".concat(a),children:(0,r.jsx)(i,{noMargin:n,color:l,children:c})},t)})})}},2300:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var r=n(5893),a=n(9008),s=n.n(a);let l=e=>{let{title:t,description:n="Personal Blog",ogImage:a="/images/og.png"}=e;return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),a&&(0,r.jsx)("meta",{property:"og:image",content:a})]})}},6615:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var r=n(5893),a=n(5675),s=n.n(a),l=n(1664),i=n.n(l),c=n(7294);let o=c.forwardRef(function({title:e,titleId:t,...n},r){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?c.createElement("title",{id:t},e):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))});var d=n(4344),x=n(4648),m=n(7819);let u=e=>{let{post:t,aspect:n="square",minimal:a,pathPrefix:l,preloadImage:c,fontSize:u,fontWeight:g}=e,{image:h,author:p,slug:f,categories:j,title:v,excerpt:b,publishedAt:k}=t,N=(0,m.p)(k);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"group cursor-pointer ".concat((0,x.K)({"grid gap-10 md:grid-cols-2":a})),children:[(0,r.jsx)("div",{className:"overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800",children:(0,r.jsx)(i(),{className:"relative block ".concat((0,x.K)({"aspect-video":"landscape"===n},{"aspect-[5/4]":"custom"===n},{"aspect-square":"square"===n})),href:"/posts/".concat(l?"".concat(l,"/"):"").concat(f),children:h?(0,r.jsx)(s(),{src:"/images/posts/".concat(h.src),alt:h.alt||"Thumbnail",priority:!!c,className:"object-cover transition-all",fill:!0,sizes:"(max-width: 768px) 30vw, 33vw"}):(0,r.jsx)("span",{className:"absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200",children:(0,r.jsx)(o,{})})})}),(0,r.jsx)("div",{className:(0,x.K)({"flex items-center":a}),children:(0,r.jsxs)("div",{children:[(0,r.jsx)(d.q,{categories:j,noMargin:a}),(0,r.jsx)("h2",{className:(0,x.K)("large"===u?"text-2xl":a?"text-3xl":"text-lg","normal"===g?"line-clamp-2 font-medium  tracking-normal text-black":"font-semibold leading-snug tracking-tight","mt-2    dark:text-white"),children:(0,r.jsx)(i(),{href:"/posts/".concat(l?"".concat(l,"/"):"").concat(f),children:(0,r.jsx)("span",{className:"bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900",children:v})})}),(0,r.jsx)("div",{className:"hidden",children:b&&(0,r.jsx)("p",{className:"mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400",children:(0,r.jsx)(i(),{href:"/posts/".concat(l?"".concat(l,"/"):"").concat(f),children:t.excerpt})})}),(0,r.jsxs)("div",{className:"mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400",children:[p&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("div",{className:"relative h-5 w-5 flex-shrink-0",children:(null==p?void 0:p.image)&&(0,r.jsx)(s(),{src:"/images/authors/".concat((null==p?void 0:p.image.src)||"/images/og.png"),alt:(null==p?void 0:p.name)||"Author",className:"rounded-full object-cover",fill:!0,sizes:"20px"})}),(0,r.jsx)("span",{className:"truncate text-sm",children:null==p?void 0:p.name})]}),(0,r.jsx)("span",{className:"text-xs text-gray-300 dark:text-gray-600",children:"•"})]}),(0,r.jsx)("time",{className:"truncate text-sm",dateTime:N,children:N})]})]})})]})})}},7252:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i},default:function(){return c}});var r=n(5893),a=n(3588),s=n(2300),l=n(6615),i=!0;function c(e){let{category:t,posts:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h,{title:t.title,description:t.title}),(0,r.jsx)(a.W,{className:"!pt-0",children:(0,r.jsxs)("div",{className:"mx-auto max-w-screen-md ",children:[(0,r.jsx)("h1",{className:"text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug",children:t.title}),(0,r.jsx)("div",{className:"mt-3 flex justify-center space-x-3 text-gray-500 ",children:(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[n.length," ",n.length>1?"Posts":"Post"]})})]})}),(0,r.jsx)(a.W,{children:(0,r.jsx)("div",{className:"mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ",children:n.map(e=>{let{data:t}=e;return(0,r.jsx)(l.S,{post:t,aspect:"square"},t.slug)})})})]})}},7819:function(e,t,n){"use strict";n.d(t,{p:function(){return a}});var r=n(8260);let a=e=>(0,r.Z)(1e3*e,"MMM dd, yyy")}},function(e){e.O(0,[268,774,888,179],function(){return e(e.s=5468)}),_N_E=e.O()}]);