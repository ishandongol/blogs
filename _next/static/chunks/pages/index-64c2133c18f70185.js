(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(85)}])},4344:function(e,t,r){"use strict";r.d(t,{q:function(){return c}});var n=r(5893),a=r(1664),s=r.n(a),l=r(4648);let i=e=>{let{pill:t,children:r,noMargin:a,color:s="pink"}=e;return t?(0,n.jsx)("div",{className:"inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300",children:r}):(0,n.jsx)("span",{className:"inline-block text-xs font-medium tracking-wider uppercase ".concat((0,l.K)({"mt-5":!a},{})," ").concat({green:"text-emerald-700",blue:"text-blue-600",orange:"text-orange-700",purple:"text-purple-600",pink:"text-pink-600"}[s]),children:r})},c=e=>{let{categories:t,noMargin:r=!1}=e;return(0,n.jsx)("div",{className:"flex gap-3",children:(null==t?void 0:t.length)&&t.slice(0).map((e,t)=>{let{slug:a,color:l,title:c}=e;return(0,n.jsx)(s(),{href:"/category/".concat(a),children:(0,n.jsx)(i,{noMargin:r,color:l,children:c})},t)})})}},2300:function(e,t,r){"use strict";r.d(t,{h:function(){return l}});var n=r(5893),a=r(9008),s=r.n(a);let l=e=>{let{title:t,description:r="Personal Blog",ogImage:a="/images/og.png"}=e;return(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),a&&(0,n.jsx)("meta",{property:"og:image",content:a})]})}},6615:function(e,t,r){"use strict";r.d(t,{S:function(){return g}});var n=r(5893),a=r(5675),s=r.n(a),l=r(1664),i=r.n(l),c=r(7294);let o=c.forwardRef(function({title:e,titleId:t,...r},n){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))});var d=r(4344),x=r(4648),u=r(7819);let g=e=>{let{post:t,aspect:r="square",minimal:a,pathPrefix:l,preloadImage:c,fontSize:g,fontWeight:m}=e,{image:p,author:h,slug:f,categories:j,title:v,excerpt:b,publishedAt:k}=t,N=(0,u.p)(k);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"group cursor-pointer ".concat((0,x.K)({"grid gap-10 md:grid-cols-2":a})),children:[(0,n.jsx)("div",{className:"overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800",children:(0,n.jsx)(i(),{className:"relative block ".concat((0,x.K)({"aspect-video":"landscape"===r},{"aspect-[5/4]":"custom"===r},{"aspect-square":"square"===r})),href:"/posts/".concat(l?"".concat(l,"/"):"").concat(f),children:p?(0,n.jsx)(s(),{src:"/images/posts/".concat(p.src),alt:p.alt||"Thumbnail",priority:!!c,className:"object-cover transition-all",fill:!0,sizes:"(max-width: 768px) 30vw, 33vw"}):(0,n.jsx)("span",{className:"absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200",children:(0,n.jsx)(o,{})})})}),(0,n.jsx)("div",{className:(0,x.K)({"flex items-center":a}),children:(0,n.jsxs)("div",{children:[(0,n.jsx)(d.q,{categories:j,noMargin:a}),(0,n.jsx)("h2",{className:(0,x.K)("large"===g?"text-2xl":a?"text-3xl":"text-lg","normal"===m?"line-clamp-2 font-medium  tracking-normal text-black":"font-semibold leading-snug tracking-tight","mt-2    dark:text-white"),children:(0,n.jsx)(i(),{href:"/posts/".concat(l?"".concat(l,"/"):"").concat(f),children:(0,n.jsx)("span",{className:"bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900",children:v})})}),(0,n.jsx)("div",{className:"hidden",children:b&&(0,n.jsx)("p",{className:"mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400",children:(0,n.jsx)(i(),{href:"/posts/".concat(l?"".concat(l,"/"):"").concat(f),children:t.excerpt})})}),(0,n.jsxs)("div",{className:"mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400",children:[h&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(i(),{href:"/authors/".concat(null==h?void 0:h.slug),children:(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)("div",{className:"relative h-5 w-5 flex-shrink-0",children:(null==h?void 0:h.image)&&(0,n.jsx)(s(),{src:"/images/authors/".concat((null==h?void 0:h.image.src)||"default.png"),alt:(null==h?void 0:h.name)||"Author",className:"rounded-full object-cover",fill:!0,sizes:"20px"})}),(0,n.jsx)("span",{className:"truncate text-sm",children:null==h?void 0:h.name})]})}),(0,n.jsx)("span",{className:"text-xs text-gray-300 dark:text-gray-600",children:"•"})]}),(0,n.jsx)("time",{className:"truncate text-sm",dateTime:N,children:N})]})]})})]})})}},85:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return o},default:function(){return d}});var n=r(5893),a=r(1664),s=r.n(a),l=r(3588),i=r(6615),c=r(2300),o=!0;function d(e){let{posts:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.h,{title:"Blogs"}),t&&(0,n.jsxs)(l.W,{children:[(0,n.jsx)("div",{className:"grid gap-10 md:grid-cols-2 lg:gap-10 ",children:t.slice(0,2).map(e=>{let{data:t}=e;return(0,n.jsx)(i.S,{post:t,aspect:"landscape",preloadImage:!0},t.slug)})}),(0,n.jsx)("div",{className:"mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ",children:t.slice(2,14).map(e=>{let{data:t}=e;return(0,n.jsx)(i.S,{post:t,aspect:"square"},t.slug)})}),(0,n.jsx)("div",{className:"mt-10 flex justify-center",children:(0,n.jsx)(s(),{href:"/posts",className:"relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300",children:(0,n.jsx)("span",{children:"View all Posts"})})})]})]})}},7819:function(e,t,r){"use strict";r.d(t,{p:function(){return a}});var n=r(8260);let a=e=>(0,n.Z)(1e3*e,"MMM dd, yyy")}},function(e){e.O(0,[268,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);