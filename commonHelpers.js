import{S as a,i as l}from"./assets/vendor-3b7ecfac.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const d=new a(".reviews-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".review-icon-next",prevEl:".review-icon-back"},keyboard:{enabled:!0,onlyInViewport:!0}});function c(r){l.error({title:"Error",message:r})}function u(r){const t=document.createElement("li");return t.classList.add("swiper-slide","review-list-item"),t.innerHTML=`
    <p class="review-section-text">${r.text}</p>
    <div class="review-avatar-text">
      <img
        srcset="${r.imgSrcSet}"
        class="review-section-img"
        src="${r.imgSrc}"
        alt="Avatar"
      />
      <h3 class="review-section-title">${r.name}</h3>
    </div>
  `,t}function f(r){const t=document.getElementById("reviews-list");t.innerHTML="",r.forEach(n=>{const o=u(n);t.appendChild(o)}),d.update()}async function p(){try{const r=await fetch("https://your-backend-api.com/reviews");if(!r.ok)throw new Error("Failed to fetch reviews");const t=await r.json();t.reviews&&t.reviews.length>0?f(t.reviews):(c("No reviews found"),document.getElementById("reviews-list").innerHTML="<p>Not found</p>")}catch{c("An error occurred while fetching reviews"),document.getElementById("reviews-list").innerHTML="<p>Not found</p>"}}document.addEventListener("DOMContentLoaded",p);
//# sourceMappingURL=commonHelpers.js.map
