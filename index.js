import{A as f}from"./assets/vendor-CTqzIL4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=document.querySelectorAll('a[href^="#"]');for(let r of h)r.addEventListener("click",o=>{o.preventDefault();const n=r.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})});const p=document.querySelector(".open-menu-btn"),i=document.querySelector(".mob-menu-container"),a=document.querySelector(".icon-open"),u=document.querySelector(".icon-close"),g=document.querySelectorAll(".mob-menu-item a");p.addEventListener("click",()=>{i.classList.contains("active")?(i.classList.remove("active"),a.classList.toggle("header-none"),u.classList.toggle("header-none"),document.body.classList.remove("scroll-lock")):i.classList.add("active"),a.classList.toggle("header-none"),u.classList.toggle("header-none"),document.body.classList.add("scroll-lock")});g.forEach(r=>{r.addEventListener("click",function(o){o.preventDefault();const n=this.getAttribute("href").substring(1);document.getElementById(n).scrollIntoView({behavior:"smooth"}),i.classList.remove("active")})});document.getElementById("projects-more-btn").addEventListener("click",y);let s=document.querySelectorAll(".projects-visually-hidden"),c=0;const m=3;function y(){let r=s.length-c,o=r<m?r:m;for(let n=c;n<c+o;n++)n<s.length&&s[n].classList.remove("projects-visually-hidden");c+=o,c>=s.length&&(document.getElementById("projects-more-btn").style.display="none")}new f(".accordion-container",{openOnInit:[0],collapse:!1});
//# sourceMappingURL=index.js.map
