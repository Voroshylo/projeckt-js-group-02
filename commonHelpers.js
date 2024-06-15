import{S as A,N as O,K as P,a as B,i as C,A as G}from"./assets/vendor-655b9ae0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const g=new A(".reviews-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},modules:[O,P,B],slidesPerView:2,spaceBetween:32,breakpoints:{320:{slidesPerView:1,spaceBetween:32},768:{slidesPerView:1,spaceBetween:32},1280:{slidesPerView:2,spaceBetween:32}},effect:"creative",creativeEffect:{prev:{translate:[0,0,-400]},next:{translate:["100%",0,0]}}});function h(e){C.error({title:"Error",message:e})}function V(e){return`<li class="swiper-slide review-list-item" id="list-item-id">
          <p class="review-section-text">${e.review}</p>
          <div class="review-avatar-text">
        <img
        srcset="${e.avatar_url}"
        class="review-section-img"
        src="${e.avatar_url}"
        alt="Avatar"
        width="40"
        height="40"/>
            <h3 class="review-section-title">${e.author}</h3>
          </div>
        </li>`}function D(e){return e.map(V).join("")}function H(e){const t=document.getElementById("reviews-list-id"),a=D(e);t.innerHTML=a,g.update()}async function _(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const t=await e.json();t&&t.length>0?H(t):(h("No reviews found"),document.getElementById("reviews-list-id").innerHTML="<p>Not found</p>")}catch{h("An error occurred while fetching reviews"),document.getElementById("reviews-list-id").innerHTML="<p>Not found</p>"}}function E(){const e=document.querySelector(".button-prev"),t=document.querySelector(".button-next");g.isBeginning?e.classList.add("disabled"):e.classList.remove("disabled"),g.isEnd?t.classList.add("disabled"):t.classList.remove("disabled")}g.on("slideChange",E);g.on("init",E);g.init();document.addEventListener("DOMContentLoaded",_);const f="/projeckt-js-group-02/assets/1-676ecb00.jpg",K="/projeckt-js-group-02/assets/1-2x-c9d1ecc4.jpg",w="/projeckt-js-group-02/assets/2-b8ef22f2.jpg",U="/projeckt-js-group-02/assets/2-2x-b7c901f2.jpg",S="/projeckt-js-group-02/assets/3-cadf2c0c.jpg",z="/projeckt-js-group-02/assets/3-2x-aff37560.jpg",v="/projeckt-js-group-02/assets/4-6eaa8875.jpg",W="/projeckt-js-group-02/assets/4-2x-bec27449.jpg",j="/projeckt-js-group-02/assets/5-5810cc52.jpg",Q="/projeckt-js-group-02/assets/5-2x-379d8de8.jpg",y="/projeckt-js-group-02/assets/6-21d18a69.jpg",Z="/projeckt-js-group-02/assets/6-2x-72392c33.jpg",L="/projeckt-js-group-02/assets/7-37e7b7ff.jpg",X="/projeckt-js-group-02/assets/7-2x-2485cf3c.jpg",b="/projeckt-js-group-02/assets/8-3c99fabe.jpg",Y="/projeckt-js-group-02/assets/8-2x-4ae4ee3e.jpg",k="/projeckt-js-group-02/assets/9-e0576bd7.jpg",ee="/projeckt-js-group-02/assets/9-2x-fb79b545.jpg",x="/projeckt-js-group-02/assets/10-1e5fb8ac.jpg",te="/projeckt-js-group-02/assets/10-2x-73d6d9f4.jpg",M="/projeckt-js-group-02/assets/sprite-1a10e59a.svg",R=[{imgSrc:f,imgSrcSet:`${f} 1x, ${K} 2x`,alt:"power-pulse-webservice",tech:"React, JavaScript, Node JS, Git",description:"power pulse webservice",link:"#"},{imgSrc:w,imgSrcSet:`${w} 1x, ${U} 2x`,alt:"mimino-website",tech:"React, JavaScript, Node JS, Git",description:"mimino website",link:"#"},{imgSrc:S,imgSrcSet:`${S} 1x, ${z} 2x`,alt:"vyshyvanka",tech:"React, JavaScript, Node JS, Git",description:"vyshyvanka vibes Landing Page",link:"#"},{imgSrc:v,imgSrcSet:`${v} 1x, ${W} 2x`,alt:"green-harvest-online-store",tech:"React, JavaScript, Node JS, Git",description:"green harvest online store",link:"https://voroshylo.github.io/project-group-3/"},{imgSrc:j,imgSrcSet:`${j} 1x, ${Q} 2x`,alt:"wallet-webservice",tech:"React, JavaScript, Node JS, Git",description:"wallet webservice",link:"#"},{imgSrc:y,imgSrcSet:`${y} 1x, ${Z} 2x`,alt:"chego-jewelry-website",tech:"React, JavaScript, Node JS, Git",description:"chego jewelry website",link:"#"},{imgSrc:L,imgSrcSet:`${L} 1x, ${X} 2x`,alt:"energy-flow-webservice",tech:"React, JavaScript, Node JS, Git",description:"energy flow webservice",link:"#"},{imgSrc:b,imgSrcSet:`${b} 1x, ${Y} 2x`,alt:"fruitbox-online-store",tech:"React, JavaScript, Node JS, Git",description:"fruitbox online store",link:"#"},{imgSrc:k,imgSrcSet:`${k} 1x, ${ee} 2x`,alt:"English-excellence-webservice",tech:"React, JavaScript, Node JS, Git",description:"English excellence webservice",link:"#"},{imgSrc:x,imgSrcSet:`${x} 1x, ${te} 2x`,alt:"starlight-studio-landing-page",tech:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",link:"#"}],u=3;let p=0;const se=document.querySelector(".projects-ul"),$=document.querySelector(".btn-load-more");function F(){const e=p*u,t=e+u;R.slice(e,t).forEach(r=>{const o=document.createElement("li");o.classList.add("projects-li"),o.innerHTML=`
    <div class="div-projects">
      <img
        class="projects-img"
        srcset="${r.imgSrcSet}"
        src="${r.imgSrc}"
        alt="${r.alt}"
        width="320"
      />
      </div>
        <h3 class="projects-h">${r.tech}</h3>
        <div class="div-p-a">
        <p class="projects-p">${r.description}</p>
        <a href="${r.link}" class="projects-btn">
          VISIT
          <svg class="btn-projects-icon" width="14" height="14">
            <use href="${M}#icon-Vector-Projects"></use>
          </svg>
        </a>
        </div>
      
    `,se.appendChild(o)}),p++,p*u>=R.length&&($.style.display="none")}$.addEventListener("click",F);F();const oe=document.querySelector(".faq-list");new G(".accordion-container",{openOnInit:[0]});const re=e=>{const t=e.target.closest(".ac-trigger");if(!t)return;const r=t.closest(".ac").classList.contains("is-active"),o=t.querySelector(".faq-scroll-button-icon"),i=r?"#icon-Arrow-Up-Quetions":"#icon-Arrow-Down-Quetions";o.innerHTML=`<use href="${M}${i}"></use>`};oe.addEventListener("click",re);const T=20,s={wtFillingForm:document.querySelector("#work-together-form"),wtModal:document.querySelector(".work-together-modal-wrapper"),wtResultMsg:document.querySelector(".filling-result-msg"),wtModalRespTitle:document.querySelector("#work-together-modal-resp-title"),wtModalRespMessage:document.querySelector("#work-together-modal-resp-message"),wtModalClose:document.querySelector(".work-together-modal-close"),wtModalBox:document.querySelector(".work-together-modal")};s.wtFillingForm.addEventListener("submit",ae);s.wtFillingForm.elements.email.addEventListener("input",I);s.wtFillingForm.elements.email.addEventListener("blur",de);s.wtFillingForm.elements.email.addEventListener("blur",J);s.wtFillingForm.elements.email.addEventListener("focus",q);s.wtFillingForm.elements.comment.addEventListener("blur",J);s.wtFillingForm.elements.comment.addEventListener("focus",q);s.wtModal.addEventListener("click",N);window.addEventListener("keydown",N);async function ae(e){e.preventDefault();const t=s.wtFillingForm.elements.email.value,a=s.wtFillingForm.elements.comment.value;try{const r=await ie(t,a);ce(r),s.wtFillingForm.reset()}catch(r){ne(r)}}async function ie(e,t){const o="https://portfolio-js.b.goit.study/api"+"/requests",i={method:"POST",body:JSON.stringify({email:e,comment:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}};return await fetch(o,i).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function ce(e){const{title:t,message:a}=e;le({title:t,message:a})}function ne(e){console.error("Request failed:",e),s.wtResultMsg.textContent="Failed to send message. Please try again later."}function le({title:e,message:t}){s.wtModalRespTitle.textContent=e,s.wtModalRespMessage.textContent=t,s.wtModal.classList.add("IsOpen")}function N(e){(!s.wtModalBox.contains(e.target)||e.target===s.wtModalClose||e.code==="Escape")&&(s.wtModal.classList.remove("IsOpen"),s.wtResultMsg.textContent="")}function de(e){e.target.value=e.target.value.trim();const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e.target.value){I(e);return}e.target.value.match(t)?ge():ue()}function ge(){const{email:e}=s.wtFillingForm.elements;e.classList.remove("Invalid"),e.classList.add("Success"),s.wtResultMsg.textContent="Success!",s.wtResultMsg.classList.add("Success")}function ue(){const{email:e}=s.wtFillingForm.elements;e.classList.remove("Success"),e.classList.add("Invalid"),s.wtResultMsg.textContent="Invalid email, try again",s.wtResultMsg.classList.remove("Success")}function I(e){e.target.name==="email"&&(s.wtResultMsg.textContent="",s.wtResultMsg.classList.remove("Success"));const{email:t}=s.wtFillingForm.elements;t.classList.remove("Invalid"),t.classList.remove("Success")}function J(e){e.target.setAttribute("data-value",e.target.value.trim()),e.target.value.length>T&&(e.target.value=e.target.value.slice(0,T-3).concat("..."))}function q(e){e.target.value&&(e.target.value=e.target.getAttribute("data-value"))}console.log("start js");const n="datThema",d={colorThema:""},c=document.querySelector("body"),m=JSON.parse(localStorage.getItem(n));console.log("first get",m.colorThema||!1);if(!m)console.log("localstorage is clear"),d.colorThema="light",c.classList.add("lightthema"),localStorage.setItem(n,JSON.stringify(d));else if(m.colorThema==="dark"){c.classList.remove("darkthema"),c.classList.add("darkthema");const e=JSON.parse(localStorage.getItem(n));console.log("localStore Thema is LIGHT:",e.colorThema)}else{c.classList.add("lightthema");const e=JSON.parse(localStorage.getItem(n));console.log("localStore Thema is DARK:",e.colorThema)}const pe=document.querySelector("#sitetheme");pe.addEventListener("click",me);function me(e){const t=JSON.parse(localStorage.getItem(n));if(console.log("localStore Thema:",t.colorThema),t.colorThema==="dark"){c.classList.contains("darkthema")&&c.classList.remove("darkthema"),d.colorThema="light",localStorage.setItem(n,JSON.stringify(d)),c.classList.add("lightthema");const a=JSON.parse(localStorage.getItem(n));console.log("localStore Thema is LIGHT:",a.colorThema);return}else{c.classList.contains("lightthema")&&c.classList.remove("lightthema"),d.colorThema="dark",localStorage.setItem(n,JSON.stringify(d)),c.classList.add("darkthema");const a=JSON.parse(localStorage.getItem(n));console.log("localStore Thema is DARK:",a.colorThema);return}}(()=>{const e=document.querySelector("[date-menu-button]"),t=document.querySelector("[date-menu]");e.addEventListener("click",()=>{const a=e.getAttribute("aria-expanded")==="true"||!1,r="background-image: url('../img/header/Group-64.png')";e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!a),t.hasAttribute("style")?t.removeAttribute("style"):t.setAttribute("style",r),t.classList.toggle("is-open"),document.body.classList.toggle("is-open")})})();
//# sourceMappingURL=commonHelpers.js.map
