import{c as a,j as e,S as i,b as r}from"./index-dQt_reO8.js";import{m as c}from"./vendor-framer-_PrnXxUD.js";import"./vendor-three-DPZ3LNaY.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=a("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=a("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=a("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),u={code:k,database:p,layout:h,tool:m,ai:x,cicd:y},g=()=>e.jsx(i,{id:"skills",title:"Technical Proficiency",subtitle:"Tools and technologies I work with",className:"bg-slate-50",children:e.jsx("div",{className:"flex flex-wrap justify-center gap-6",children:r.map((s,o)=>{const l=u[s.icon]||d;return e.jsxs(c.div,{whileHover:{y:-5},className:"bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary-200 transition-all duration-300 shadow-sm hover:shadow-md w-full md:w-[calc(50%-12px)] lg:w-[30%]",children:[e.jsx("div",{className:"h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 text-primary-500 border border-slate-100",children:e.jsx(l,{size:24})}),e.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-4",children:s.title}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:s.skills.map((t,n)=>e.jsxs("div",{className:"relative flex flex-col items-center group",children:[e.jsxs("div",{className:"absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-lg z-20 whitespace-nowrap",children:[t.funTooltip||t.name,e.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"})]}),e.jsx("div",{className:"h-10 w-10 mb-2 transition-transform duration-300 group-hover:scale-110",children:e.jsx("img",{src:t.iconKey.startsWith("http")?t.iconKey:`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.iconKey}.svg`,alt:t.name,className:"w-full h-full object-contain",loading:"lazy"})}),e.jsx("span",{className:"text-xs text-slate-600 text-center font-medium opacity-80 group-hover:opacity-100",children:t.name})]},n))})]},o)})})});export{g as Skills};
