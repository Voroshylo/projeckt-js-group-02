import{S as d,N as m,K as u,a as f,i as h,A as p}from"./assets/vendor-655b9ae0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const g=new d(".reviews-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},modules:[m,u,f],breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}});function l(e){h.error({title:"Error",message:e})}function v(e){return console.log(e),`<li class="swiper-slide review-list-item">
          <p class="review-section-text">${e.review}</p>
          <div class="review-avatar-text">
        <img
        srcset="${e.avatar_url}"
        class="review-section-img"
        src="${e.avatar_url}"
        alt="Avatar"/>
            <h3 class="review-section-title">${e.author}</h3>
          </div>
        </li>`}function w(e){return e.map(v).join("")}function y(e){const t=document.getElementById("reviews-list"),n=w(e);t.innerHTML=n,g.update()}async function L(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const t=await e.json();console.log(t),t&&t.length>0?y(t):(l("No reviews found"),document.getElementById("reviews-list").innerHTML="<p>Not found</p>")}catch{l("An error occurred while fetching reviews"),document.getElementById("reviews-list").innerHTML="<p>Not found</p>"}}document.addEventListener("DOMContentLoaded",L);const T="/projeckt-js-group-02/assets/sprite-65d876bd.svg",S=document.querySelector(".faq-list");new p(".accordion-container",{openOnInit:[0]});const E=e=>{const t=e.target.closest(".ac-trigger");if(!t)return;const a=t.closest(".ac").classList.contains("is-active"),r=t.querySelector(".faq-scroll-button-icon"),o=a?"#icon-Arrow-Up-Quetion":"#icon-Arrow-Down-Quetions";r.innerHTML=`<use href="${T}${o}"></use>`};S.addEventListener("click",E);const i={colorThema:""},s=document.querySelector("body"),b=JSON.parse(localStorage.getItem("typeThema"));b||(console.log("localstorage is clear"),i.colorThema="light",s.classList.add("lightthema"),localStorage.setItem("typeThema",JSON.stringify(i)));const I=document.querySelector(".switchthema");I.addEventListener("click",N);function N(e){const t=JSON.parse(localStorage.getItem("typeThema"));if(console.log("localStore Thema:",t.colorThema),t.colorThema=="dark"){s.classList.contains("darkthema")&&s.classList.remove("darkthema"),i.colorThema="light",localStorage.setItem("typeThema",JSON.stringify(i)),s.classList.add("lightthema");return}else{s.classList.contains("lightthema")&&s.classList.remove("lightthema"),i.colorThema="dark",localStorage.setItem("typeThema",JSON.stringify(i)),s.classList.add("darkthema");return}}
//# sourceMappingURL=commonHelpers.js.map
