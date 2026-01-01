import{c as a,j as o}from"./index-dQt_reO8.js";import{r as t}from"./vendor-three-DPZ3LNaY.js";import{A as l,m as n}from"./vendor-framer-_PrnXxUD.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=a("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),f=()=>{const[s,e]=t.useState(!1);t.useEffect(()=>{const r=()=>{window.scrollY>500?e(!0):e(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsx(l,{children:s&&o.jsx(n.button,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},onClick:i,className:"fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500","aria-label":"Scroll to top",children:o.jsx(c,{size:24})})})};export{f as ScrollToTop};
