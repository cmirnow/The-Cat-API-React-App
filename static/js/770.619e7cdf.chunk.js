"use strict";(self.webpackChunkTheCatAPI_React_App=self.webpackChunkTheCatAPI_React_App||[]).push([[770],{72:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var i=r(791),a=(r(632),r(799)),n=(r(280),r(425),r(965)),l=r(184);const s=(0,i.memo)((()=>{const[e,t]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(0,n.c)(t).catch((e=>console.error("Error fetching breeds:",e.message)))}),[]),(0,l.jsx)("div",{className:"breeds",children:(0,l.jsxs)(a.Z,{className:"text-center align-middle md-no-table caption-top",bordered:!0,striped:!0,hover:!0,variant:"dark",size:"sm",children:[(0,l.jsx)("caption",{children:(0,l.jsxs)("button",{type:"button",className:"btn btn-info position-relative",children:["Cat Breeds",(0,l.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:e.length})]})}),(0,l.jsx)("thead",{className:"align-middle",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"Name"}),(0,l.jsx)("th",{scope:"col",children:"Temperament"}),(0,l.jsx)("th",{scope:"col",children:"Description"}),(0,l.jsx)("th",{scope:"col",children:"Life Span"}),(0,l.jsx)("th",{scope:"col",children:"Child Friendly"}),(0,l.jsx)("th",{scope:"col",children:"Dog Friendly"}),(0,l.jsx)("th",{scope:"col",children:"Stranger Friendly"}),(0,l.jsx)("th",{scope:"col",children:"Energy Level"}),(0,l.jsx)("th",{scope:"col",children:"Grooming"}),(0,l.jsx)("th",{scope:"col",children:"Origin"}),(0,l.jsx)("th",{scope:"col",children:"Image"})]})}),(0,l.jsx)("tbody",{children:e.map((e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{"data-title":"Name",children:(0,l.jsx)("a",{href:e.wikipedia_url,target:"_blank",rel:"noreferrer",children:e.name})}),(0,l.jsx)("td",{"data-title":"Temperament",children:e.temperament}),(0,l.jsx)("td",{"data-title":"Description",children:e.description}),(0,l.jsx)("td",{"data-title":"Life Span",children:e.life_span}),(0,l.jsx)("td",{"data-title":"Child Friendly",children:e.child_friendly}),(0,l.jsx)("td",{"data-title":"Dog Friendly",children:e.dog_friendly}),(0,l.jsx)("td",{"data-title":"Stranger Friendly",children:e.stranger_friendly}),(0,l.jsx)("td",{"data-title":"Energy Level",children:e.energy_level}),(0,l.jsx)("td",{"data-title":"Grooming",children:e.grooming}),(0,l.jsx)("td",{"data-title":"Origin",children:e.origin}),(0,l.jsx)("td",{"data-title":"Image",children:(0,l.jsx)("a",{href:e.image.url,"data-lightbox":"Cat Breeds","data-title":e.name,children:(0,l.jsx)("img",{src:e.image.url,alt:e.name,title:e.name,className:"image_cats_collection"})})})]},e.id)))})]})})}))},965:(e,t,r)=>{r.d(t,{T:()=>s,c:()=>o});const i={},a="https://api.thecatapi.com/v1",n="live_IuJyxbEXobhzEFpKv1qHbEx7KaXq8yQbUhtaXgbEiJMmOXq7EvZ4BhOLTNgjC5mX",l=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4;const i=new AbortController,a=setTimeout((()=>i.abort()),r),n=await fetch(e,{...t,signal:i.signal});return clearTimeout(a),n},s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;const r=`${a}/images/search?timestamp=${Date.now()}`;if(i[r])return e(i[r][0].url),!0;for(let a=0;a<t;a++)try{var s;const t=await l(r,{headers:{"Content-Type":"application/json","x-api-key":n}},1e4);if(!t.ok)throw new Error(`HTTP error ${t.status}`);const a=await t.json();if(null===(s=a[0])||void 0===s||!s.url)throw new Error("No image URL in response");return i[r]=a,e(a[0].url),!0}catch(o){if(a===t-1)throw console.error("Failed to fetch random cat after retries:",o.message),o;await new Promise((e=>setTimeout(e,1e3*(a+1))))}},o=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;const r=`${a}/breeds`;if(i[r])return e(i[r].filter((e=>{var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)}))),!0;for(let a=0;a<t;a++)try{const t=await l(r,{headers:{"Content-Type":"application/json","x-api-key":n}},1e4);if(!t.ok)throw new Error(`HTTP error ${t.status}`);const a=await t.json();return i[r]=a,e(a.filter((e=>{var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)}))),!0}catch(s){if(a===t-1)throw console.error("Failed to fetch cat breeds after retries:",s.message),s;await new Promise((e=>setTimeout(e,1e3*(a+1))))}}}}]);
//# sourceMappingURL=770.619e7cdf.chunk.js.map