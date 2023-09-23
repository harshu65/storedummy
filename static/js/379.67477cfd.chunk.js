"use strict";(self.webpackChunkstoredummy=self.webpackChunkstoredummy||[]).push([[379],{2379:function(e,l,t){t.r(l),t.d(l,{Products:function(){return d}});var s=t(3433),r=t(9439),n=t(2791),c=t(1243),i=t(1087),a=t(1683),o=t(184),d=function(){var e=(0,n.useState)([]),l=(0,r.Z)(e,2),t=l[0],d=l[1];(0,n.useEffect)((function(){c.Z.get("https://dummyjson.com/products").then((function(e){console.log("res",e.data);var l=e.data.products;d(l)}))}),[]);var h=(0,n.useContext)(a.b),x=h.dispatch;console.log(h.state.length);var u=(0,n.useState)(1),g=(0,r.Z)(u,2),m=g[0],w=g[1],p=8*m,f=p-8,v=t.slice(f,p),j=Math.ceil(t.length/8),b=(0,s.Z)(Array(j+1).keys()).slice(1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"my-4  mt-12 capitalize text-center  text-slate-300\r text-7xl capitalize font-bold tracking-tight",children:"All products"}),(0,o.jsx)("div",{class:"catscroll text-white  overflow-scroll flex-nowrap md:space-x-4 sm:space-x-4 hidden sm:flex pt-4 my-8 mx-8 ",children:["smartphones","laptops","fragrances","skincare","groceries","furniture","tops","sunglasses","automotive","motorcycle","lighting","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","home-decoration"].map((function(e,l){return(0,o.jsx)(i.rU,{to:"/products/category/".concat(e),className:"catbtn px-6 py-1  capitalize border rounded-full\r hover:bg-indigo-600 self-baseline",children:e})}))}),(0,o.jsx)("div",{className:"grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center gap-4 mx-5 ",children:v.map((function(e,l){return e.quantity=1,(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{class:"relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md",children:[(0,o.jsxs)("a",{class:"relative flex h-52 overflow-hidden justify-center",href:"/products/".concat(e.id),children:[(0,o.jsx)("img",{class:"contain",src:e.thumbnail,alt:"product image"}),(0,o.jsxs)("span",{class:"absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white",children:[e.discountPercentage,"% OFF"]})]}),(0,o.jsxs)("div",{class:"mt-4 px-5 pb-2",children:[(0,o.jsx)(i.rU,{to:"/products/".concat(e.id),children:(0,o.jsxs)("h5",{class:" text-xl heading ptitle text-left tracking-tight text-slate-900",children:[e.title," "]})}),(0,o.jsx)("div",{class:"mt-2 mb-5 flex ",children:(0,o.jsxs)("p",{children:[(0,o.jsxs)("span",{class:"text-3xl font-bold text-slate-900",children:["\u20b9",e.price]}),(0,o.jsxs)("span",{class:"text-sm text-slate-900 line-through",children:["\u20b9",e.price,"+30"]})]})}),(0,o.jsxs)("div",{class:"flex items-center  mb-4",children:[(0,o.jsx)("svg",{"aria-hidden":"true",class:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,o.jsx)("svg",{"aria-hidden":"true",class:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,o.jsx)("svg",{"aria-hidden":"true",class:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,o.jsx)("svg",{"aria-hidden":"true",class:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,o.jsx)("svg",{"aria-hidden":"true",class:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,o.jsx)("span",{class:"mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold",children:e.rating})]}),(0,o.jsxs)("button",{onClick:function(){x({type:"ADD",payload:e})},class:"flex w-full items-center justify-center rounded-md bg-indigo-800 px-5 py-2 text-center text-sm font-medium text-white hover:bg-white hover:text-indigo-800 border-2\t border-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg shadow-indigo-500/50",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mr-2 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:(0,o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),"Add to Cart"]})]})]},l)})}))}),(0,o.jsx)("nav",{className:"text-white py-8",children:(0,o.jsxs)("ul",{className:"pagination inline-flex",children:[(0,o.jsx)("li",{className:"page-item px-6 ",children:(0,o.jsx)("button",{className:"page-link hover:text-black hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 border-0 rounded-full px-4 ",onClick:function(){m!==f&&(w(m-1),window.scroll(0,0))},children:"Prev"})}),b.map((function(e,l){return(0,o.jsx)("li",{className:"page-item hover:bg-white hover:text-black border-1 rounded-full px-4 ".concat(m===e?"active":""),children:(0,o.jsx)("button",{className:"page-link",onClick:function(){return w(e),void window.scroll(0,0)},children:e})},l)})),(0,o.jsx)("li",{className:"page-item px-6",children:(0,o.jsx)("button",{className:"page-link hover:text-black hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 border-0 rounded-full px-4",onClick:function(){if(m===p)return m;w(m+1),window.scroll(0,0)},children:"Next"})})]})})]})};l.default=d}}]);
//# sourceMappingURL=379.67477cfd.chunk.js.map