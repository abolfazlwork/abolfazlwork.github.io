(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5628:function(e,s,n){Promise.resolve().then(n.bind(n,1969))},1969:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var r=n(7437),t=n(2265);function l(){let[e,s]=(0,t.useState)("");return(0,t.useEffect)(()=>{fetch("http://localhost:5000/getData?id=1").then(e=>{if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return e.json()}).then(e=>fetch(e.link)).then(e=>{if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return e.json()}).then(e=>{s(e.name)}).catch(e=>{console.error("Error fetching data:",e)})},[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"navbar bg-base-100",children:[(0,r.jsxs)("div",{className:"navbar-start",children:[(0,r.jsxs)("div",{className:"dropdown",children:[(0,r.jsx)("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),(0,r.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:"Item 1"})}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{children:"Parent"}),(0,r.jsxs)("ul",{className:"p-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:"Submenu 1"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:"Submenu 2"})})]})]}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:"Item 3"})})]})]}),(0,r.jsx)("a",{className:"btn btn-ghost text-xl",children:"daisyUI"})]}),(0,r.jsx)("div",{className:"navbar-center hidden lg:flex",children:(0,r.jsxs)("ul",{className:"menu menu-horizontal px-1",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:"Item 1"})}),(0,r.jsx)("li",{children:(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"Parent"}),(0,r.jsxs)("ul",{className:"p-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:"Submenu 1"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:"Submenu 2"})})]})]})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:"Item 3"})})]})}),(0,r.jsx)("div",{className:"navbar-end",children:(0,r.jsx)("a",{className:"btn",children:"Button"})})]}),(0,r.jsx)("h1",{className:"bg-slate-700 text-white text-4xl hover:bg-red-500/50 transition-all",children:e?"Hello, ".concat(e,"!"):"Loading..."}),(0,r.jsx)("button",{type:"button",className:"text-sky-100 bg-sky-700 py-2 shadow-lg px-4 m-4 rounded-lg",children:"Edit"})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=5628)}),_N_E=e.O()}]);