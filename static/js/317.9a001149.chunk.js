"use strict";(self.webpackChunkstoredummy=self.webpackChunkstoredummy||[]).push([[317],{2597:function(e,t,l){l.r(t),l.d(t,{default:function(){return x}});var s=l(9439),r=l(2791),a=l(1243),c=l(1087),n=l(197),i=(l(8040),l(184)),o=function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.lr,{children:e.dp.map((function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:e.thumbnail,className:"",alt:e.title}),(0,i.jsx)(c.rU,{to:"/products/".concat(e.id),children:(0,i.jsx)("p",{className:"legend",children:e.title})})]},e.id)}))})})},d=l(9388),h=l(1683),x=function(){var e=(0,r.useState)([]),t=(0,s.Z)(e,2),l=t[0],n=t[1];(0,r.useEffect)((function(){a.Z.get("https://dummyjson.com/products?limit=8").then((function(e){console.log("res",e.data);var t=e.data.products;n(t)}))}),[]);var x=(0,r.useContext)(h.b),m=x.dispatch;return console.log(x),console.log(x.state.length),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{dp:l}),(0,i.jsx)("h1",{className:"text-slate-300 text-4xl font-sans  capitalize font-bold tracking-tight",children:"Featured Product"}),(0,i.jsx)(r.Suspense,{fallback:(0,i.jsx)(d.g,{}),children:(0,i.jsx)("div",{className:"grid mt-10 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center gap-4 mx-5",children:l.map((function(e,t){return(0,i.jsxs)("div",{className:"relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md",children:[(0,i.jsxs)("a",{className:"relative  justify-center h-52 overflow-hidden",href:"/products/".concat(e.id),children:[(0,i.jsx)("img",{className:"contain",src:e.thumbnail,alt:"product image"}),(0,i.jsxs)("span",{className:"absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white",children:[e.discountPercentage,"% OFF"]})]}),(0,i.jsxs)("div",{className:"mt-4 px-5 pb-2",children:[(0,i.jsx)(c.rU,{to:"/products/".concat(e.id),children:(0,i.jsxs)("h5",{className:"text-xl text-left tracking-tight text-slate-900",children:[e.title," "]})}),(0,i.jsx)("div",{className:"mt-2 mb-5 flex ",children:(0,i.jsxs)("p",{children:[(0,i.jsxs)("span",{className:"text-3xl font-bold text-slate-900",children:["\u20b9",e.price]}),(0,i.jsxs)("span",{className:"text-sm text-slate-900 line-through",children:["\u20b9",e.price,"+30"]})]})}),(0,i.jsxs)("div",{className:"flex items-center  mb-4",children:[(0,i.jsx)("svg",{"aria-hidden":"true",className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,i.jsx)("svg",{"aria-hidden":"true",className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,i.jsx)("svg",{"aria-hidden":"true",className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,i.jsx)("svg",{"aria-hidden":"true",className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,i.jsx)("svg",{"aria-hidden":"true",className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,i.jsx)("span",{className:"mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold",children:e.rating})]}),(0,i.jsxs)("button",{onClick:function(){m({type:"ADD",payload:e})},className:"flex w-full items-center justify-center rounded-md bg-indigo-800 px-5 py-2 text-center text-sm font-medium text-white hover:bg-white hover:text-indigo-800 border-2\t border-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-2 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),"Add to cart"]})]})]},e.id)}))})})]})}}}]);
//# sourceMappingURL=317.9a001149.chunk.js.map