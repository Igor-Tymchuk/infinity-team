(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=document.querySelectorAll('a[href^="#"]');for(let r of i)r.addEventListener("click",o=>{o.preventDefault();const n=r.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})});const l=document.querySelector(".mob-menu-container"),u=document.querySelector(".open-menu-btn"),d=document.querySelector(".close-menu-btn"),f=document.querySelectorAll(".mob-menu-list a");u.onclick=()=>{l.classList.add("is-open"),document.body.style.overflow="auto"};d.onclick=()=>{l.classList.remove("is-open"),document.body.style.overflow="hiden"};f.forEach(r=>{r.onclick=o=>{o.preventDefault();const n=r.getAttribute("href").slice(1),c=document.getElementById(n);l.classList.remove("is-open"),document.body.style.overflow="hidden",window.scrollTo({top:c.offsetTop,behavior:"smooth"})}});
//# sourceMappingURL=index.js.map
