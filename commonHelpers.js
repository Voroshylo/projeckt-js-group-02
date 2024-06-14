import{S as v,N as S,K as L,a as y,i as T,A as M}from"./assets/vendor-655b9ae0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const E=new v(".reviews-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},modules:[S,L,y],breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}});function m(e){T.error({title:"Error",message:e})}function F(e){return console.log(e),`<li class="swiper-slide review-list-item">
          <p class="review-section-text">${e.review}</p>
          <div class="review-avatar-text">
        <img
        srcset="${e.avatar_url}"
        class="review-section-img"
        src="${e.avatar_url}"
        alt="Avatar"/>
            <h3 class="review-section-title">${e.author}</h3>
          </div>
        </li>`}function I(e){return e.map(F).join("")}function b(e){const t=document.getElementById("reviews-list"),a=I(e);t.innerHTML=a,E.update()}async function R(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const t=await e.json();console.log(t),t&&t.length>0?b(t):(m("No reviews found"),document.getElementById("reviews-list").innerHTML="<p>Not found</p>")}catch{m("An error occurred while fetching reviews"),document.getElementById("reviews-list").innerHTML="<p>Not found</p>"}}document.addEventListener("DOMContentLoaded",R);const O="/projeckt-js-group-02/assets/sprite-2af47d92.svg",q=document.querySelector(".faq-list");new M(".accordion-container",{openOnInit:[0]});const N=e=>{const t=e.target.closest(".ac-trigger");if(!t)return;const l=t.closest(".ac").classList.contains("is-active"),s=t.querySelector(".faq-scroll-button-icon"),r=l?"#icon-Arrow-Up-Quetion":"#icon-Arrow-Down-Quetions";s.innerHTML=`<use href="${O}${r}"></use>`};q.addEventListener("click",N);const g=20,o={wtFillingForm:document.querySelector("#Work-Together-Form"),wtModal:document.querySelector(".Work-Together-ModalWrapper"),wtResultMsg:document.querySelector(".Filling-Result-Msg"),wtModalRespTitle:document.querySelector("#Work-Together-ModalRespTitle"),wtModalRespMessage:document.querySelector("#Work-Together-ModalRespMessage"),wtModalClose:document.querySelector(".Work-Together-ModalClose"),wtModalBox:document.querySelector(".Work-Together-Modal")};o.wtFillingForm.addEventListener("submit",A);o.wtFillingForm.elements.email.addEventListener("input",p);o.wtFillingForm.elements.email.addEventListener("blur",W);o.wtFillingForm.elements.email.addEventListener("blur",h);o.wtFillingForm.elements.email.addEventListener("focus",w);o.wtFillingForm.elements.comment.addEventListener("blur",h);o.wtFillingForm.elements.comment.addEventListener("focus",w);o.wtModal.addEventListener("click",f);window.addEventListener("keydown",f);async function A(e){e.preventDefault();const t=o.wtFillingForm.elements.email.value,a=o.wtFillingForm.elements.comment.value;try{const l=await k(t,a);x(l)}catch(l){C(l)}}async function k(e,t){const s="https://portfolio-js.b.goit.study/api"+"/requests",r={method:"POST",body:JSON.stringify({email:e,comment:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}};return await fetch(s,r).then(c=>{if(!c.ok)throw new Error(c.status);return c.json()})}function x(e){const{title:t,message:a}=e;P({title:t,message:a})}function C(e){console.error("Request failed:",e),o.wtResultMsg.textContent="Failed to send message. Please try again later."}function P({title:e,message:t}){o.wtModalRespTitle.textContent=e,o.wtModalRespMessage.textContent=t,o.wtModal.classList.add("IsOpen")}function f(e){(!o.wtModalBox.contains(e.target)||e.target===o.wtModalClose||e.code==="Escape")&&(o.wtModal.classList.remove("IsOpen"),o.wtResultMsg.textContent="")}function W(e){e.target.value=e.target.value.trim();const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e.target.value){p(e);return}e.target.value.match(t)?j():B()}function j(){const{email:e}=o.wtFillingForm.elements;e.classList.remove("Invalid"),e.classList.add("Success"),o.wtResultMsg.textContent="Success!",o.wtResultMsg.classList.add("Success")}function B(){const{email:e}=o.wtFillingForm.elements;e.classList.remove("Success"),e.classList.add("Invalid"),o.wtResultMsg.textContent="Invalid email, try again",o.wtResultMsg.classList.remove("Success")}function p(e){e.target.name==="email"&&(o.wtResultMsg.textContent="",o.wtResultMsg.classList.remove("Success"));const{email:t}=o.wtFillingForm.elements;t.classList.remove("Invalid"),t.classList.remove("Success")}function h(e){e.target.setAttribute("data-value",e.target.value.trim()),e.target.value.length>g&&(e.target.value=e.target.value.slice(0,g-3).concat("..."))}function w(e){e.target.value&&(e.target.value=e.target.getAttribute("data-value"))}console.log("start js");const i="datThema",d={colorThema:""},n=document.querySelector("body"),u=JSON.parse(localStorage.getItem(i));console.log("first get",u.colorThema||!1);if(!u)console.log("localstorage is clear"),d.colorThema="light",n.classList.add("lightthema"),localStorage.setItem(i,JSON.stringify(d));else if(u.colorThema==="dark"){n.classList.remove("darkthema"),n.classList.add("darkthema");const e=JSON.parse(localStorage.getItem(i));console.log("localStore Thema is LIGHT:",e.colorThema)}else{n.classList.add("lightthema");const e=JSON.parse(localStorage.getItem(i));console.log("localStore Thema is DARK:",e.colorThema)}const J=document.querySelector("#sitetheme");J.addEventListener("click",D);function D(e){const t=JSON.parse(localStorage.getItem(i));if(console.log("localStore Thema:",t.colorThema),t.colorThema==="dark"){n.classList.contains("darkthema")&&n.classList.remove("darkthema"),d.colorThema="light",localStorage.setItem(i,JSON.stringify(d)),n.classList.add("lightthema");const a=JSON.parse(localStorage.getItem(i));console.log("localStore Thema is LIGHT:",a.colorThema);return}else{n.classList.contains("lightthema")&&n.classList.remove("lightthema"),d.colorThema="dark",localStorage.setItem(i,JSON.stringify(d)),n.classList.add("darkthema");const a=JSON.parse(localStorage.getItem(i));console.log("localStore Thema is DARK:",a.colorThema);return}}(()=>{const e=document.querySelector("[date-menu-button]"),t=document.querySelector("[date-menu]");e.addEventListener("click",()=>{const a=e.getAttribute("aria-expanded")==="true"||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open"),document.body.classList.toggle("is-open")})})();
//# sourceMappingURL=commonHelpers.js.map
