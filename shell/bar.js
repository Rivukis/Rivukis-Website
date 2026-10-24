"use strict";(()=>{var c=[{id:"meanwhile",name:"Meanwhile",description:"A choose-your-own-adventure where choices take real time: wait an hour in the story, and the next part unlocks in an hour."},{id:"block-puzzles",name:"Block Puzzles",description:"Slide colored blocks out of a crowded board through the doors that match their color, before the clock runs out."},{id:"bus-traffic",name:"Bus Traffic",description:"Tap buses out of a jammed parking lot and into the bus stops, so every passenger in the line gets a bus of their color."}];function h(){return typeof c>"u"?[]:c}function g(e){return new URL("../",e).href}function b(e,n,r){let t=new URL(e),i=new URL(n);if(t.origin!==i.origin||!t.pathname.startsWith(i.pathname))return;let s=t.pathname.slice(i.pathname.length).split("/")[0];return r.find(a=>a.id===s)?.id}function x(e,n){return new URL(`${n}/`,e).href}var S="rivukis-site-bar",v=`
  :host {
    all: initial;
    display: block;
    background: #111318;
    color: #e8e8ec;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 14px;
    line-height: 1.4;
    border-bottom: 1px solid #2a2d36;
  }
  .bar {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 16px;
  }
  .home {
    flex: none;
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.02em;
  }
  .label {
    flex: none;
    color: #8b8f9c;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  nav {
    min-width: 0;
    overflow-x: auto;
  }
  ul {
    display: flex;
    gap: 4px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a.site {
    display: block;
    padding: 4px 12px;
    border-radius: 999px;
    color: #c9ccd6;
    text-decoration: none;
    white-space: nowrap;
  }
  a.site:hover,
  a.site:focus-visible {
    background: #262a34;
    color: #ffffff;
  }
  a.site[aria-current="page"] {
    background: #e8e8ec;
    color: #111318;
    font-weight: 600;
  }
  a:focus-visible {
    outline: 2px solid #7fb0e0;
    outline-offset: 2px;
  }
`;function o(e,n,r={},t){let i=e.createElement(n);for(let[s,a]of Object.entries(r))i.setAttribute(s,a);return t!==void 0&&(i.textContent=t),i}function I(e,n,r,t){let i=o(e,"div",{id:S}),s=i.attachShadow({mode:"open"}),a=o(e,"style",{},v),f=o(e,"ul");for(let l of n){let u=o(e,"a",{class:"site",href:x(r,l.id),title:l.description},l.name);l.id===t&&u.setAttribute("aria-current","page");let m=o(e,"li");m.append(u),f.append(m)}let p=o(e,"nav",{"aria-label":"Websites"});p.append(f);let d=o(e,"div",{class:"bar"});return d.append(o(e,"a",{class:"home",href:r},"Rivukis"),o(e,"span",{class:"label"},"Websites"),p),s.append(a,d),i}function y(e,n,r){if(e.getElementById(S))return;let t=g(r);e.body.prepend(I(e,n,t,b(e.location.href,t,n)))}var _=document.currentScript,w=_?.src??document.querySelector('script[src*="shell/bar.js"]')?.src;if(w){let e=()=>y(document,h(),w);document.body?e():document.addEventListener("DOMContentLoaded",e)}})();
