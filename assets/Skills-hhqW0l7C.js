import{c as t,j as e,S as r,b as n,m as c}from"./index-BB6234gx.js";import"./vendor-three-8McbOxuh.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),y={code:x,database:m,layout:p,tool:h},v=()=>e.jsx(r,{id:"skills",title:"Technical Proficiency",subtitle:"Tools and technologies I work with",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:n.map((a,o)=>{const l=y[a.icon]||d;return e.jsxs(c.div,{whileHover:{y:-5},className:"bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary-200 transition-all duration-300 shadow-sm hover:shadow-md",children:[e.jsx("div",{className:"h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 text-primary-500 border border-slate-100",children:e.jsx(l,{size:24})}),e.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-4",children:a.title}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:a.skills.map((s,i)=>e.jsxs("div",{className:"relative flex flex-col items-center group",children:[e.jsxs("div",{className:"absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-lg z-20 whitespace-nowrap",children:[s.name,e.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"})]}),e.jsx("div",{className:"h-10 w-10 mb-2 transition-transform duration-300 group-hover:scale-110",children:e.jsx("img",{src:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.iconKey}.svg`,alt:s.name,className:"w-full h-full object-contain",loading:"lazy"})}),e.jsx("span",{className:"text-xs text-slate-600 text-center font-medium opacity-80 group-hover:opacity-100",children:s.name})]},i))})]},o)})})});export{v as Skills};
