import{S as N,N as J,K as q,a as A,i as O,A as P}from"./assets/vendor-655b9ae0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();const C=new N(".reviews-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},modules:[J,q,A],breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}});function m(e){O.error({title:"Error",message:e})}function G(e){return`<li class="swiper-slide review-list-item" id="list-item-id">
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
        </li>`}function B(e){return e.map(G).join("")}function V(e){const t=document.getElementById("reviews-list-id"),a=B(e);t.innerHTML=a,C.update()}async function W(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const t=await e.json();t&&t.length>0?V(t):(m("No reviews found"),document.getElementById("reviews-list-id").innerHTML="<p>Not found</p>")}catch{m("An error occurred while fetching reviews"),document.getElementById("reviews-list-id").innerHTML="<p>Not found</p>"}}document.addEventListener("DOMContentLoaded",W);const h="/projeckt-js-group-02/assets/1-676ecb00.jpg",D="/projeckt-js-group-02/assets/1-2x-c9d1ecc4.jpg",S="/projeckt-js-group-02/assets/2-b8ef22f2.jpg",H="/projeckt-js-group-02/assets/2-2x-b7c901f2.jpg",f="/projeckt-js-group-02/assets/3-cadf2c0c.jpg",_="/projeckt-js-group-02/assets/3-2x-aff37560.jpg",w="/projeckt-js-group-02/assets/4-6eaa8875.jpg",K="/projeckt-js-group-02/assets/4-2x-bec27449.jpg",j="/projeckt-js-group-02/assets/5-5810cc52.jpg",U="/projeckt-js-group-02/assets/5-2x-379d8de8.jpg",v="/projeckt-js-group-02/assets/6-21d18a69.jpg",z="/projeckt-js-group-02/assets/6-2x-72392c33.jpg",y="/projeckt-js-group-02/assets/7-37e7b7ff.jpg",Q="/projeckt-js-group-02/assets/7-2x-2485cf3c.jpg",L="/projeckt-js-group-02/assets/8-3c99fabe.jpg",Z="/projeckt-js-group-02/assets/8-2x-4ae4ee3e.jpg",b="/projeckt-js-group-02/assets/9-e0576bd7.jpg",X="/projeckt-js-group-02/assets/9-2x-fb79b545.jpg",k="/projeckt-js-group-02/assets/10-1e5fb8ac.jpg",Y="/projeckt-js-group-02/assets/10-2x-73d6d9f4.jpg",x=[{imgSrc:h,imgSrcSet:`${h} 1x, ${D} 2x`,alt:"power-pulse-webservice",tech:"React, JavaScript, Node JS, Git",description:"power pulse webservice",link:"#"},{imgSrc:S,imgSrcSet:`${S} 1x, ${H} 2x`,alt:"mimino-website",tech:"React, JavaScript, Node JS, Git",description:"mimino website",link:"#"},{imgSrc:f,imgSrcSet:`${f} 1x, ${_} 2x`,alt:"vyshyvanka",tech:"React, JavaScript, Node JS, Git",description:"vyshyvanka vibes Landing Page",link:"#"},{imgSrc:w,imgSrcSet:`${w} 1x, ${K} 2x`,alt:"green-harvest-online-store",tech:"React, JavaScript, Node JS, Git",description:"green harvest online store",link:"https://voroshylo.github.io/project-group-3/"},{imgSrc:j,imgSrcSet:`${j} 1x, ${U} 2x`,alt:"wallet-webservice",tech:"React, JavaScript, Node JS, Git",description:"wallet webservice",link:"#"},{imgSrc:v,imgSrcSet:`${v} 1x, ${z} 2x`,alt:"chego-jewelry-website",tech:"React, JavaScript, Node JS, Git",description:"chego jewelry website",link:"#"},{imgSrc:y,imgSrcSet:`${y} 1x, ${Q} 2x`,alt:"energy-flow-webservice",tech:"React, JavaScript, Node JS, Git",description:"energy flow webservice",link:"#"},{imgSrc:L,imgSrcSet:`${L} 1x, ${Z} 2x`,alt:"fruitbox-online-store",tech:"React, JavaScript, Node JS, Git",description:"fruitbox online store",link:"#"},{imgSrc:b,imgSrcSet:`${b} 1x, ${X} 2x`,alt:"English-excellence-webservice",tech:"React, JavaScript, Node JS, Git",description:"English excellence webservice",link:"#"},{imgSrc:k,imgSrcSet:`${k} 1x, ${Y} 2x`,alt:"starlight-studio-landing-page",tech:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",link:"#"}],g=3;let p=0;const ee=document.querySelector(".projects-ul"),R=document.querySelector(".btn-load-more");function M(){const e=p*g,t=e+g;x.slice(e,t).forEach(r=>{const o=document.createElement("li");o.classList.add("projects-li"),o.innerHTML=`
      <img
        class="projects-img"
        srcset="${r.imgSrcSet}"
        src="${r.imgSrc}"
        alt="${r.alt}"
        width="320"
      />
      <div class="div-projects-h-p">
        <h3 class="projects-h">${r.tech}</h3>
        <p class="projects-p">${r.description}</p>
        <a href="${r.link}" class="projects-btn">
          VISIT
          <svg class="btn-projects-icon" width="14" height="14">
            <use href="./img/sprite.svg#icon-Vector-Projects"></use>
          </svg>
        </a>
      </div>
    `,ee.appendChild(o)}),p++,p*g>=x.length&&(R.style.display="none")}R.addEventListener("click",M);M();const te="/projeckt-js-group-02/assets/sprite-40049016.svg",se=document.querySelector(".faq-list");new P(".accordion-container",{openOnInit:[0]});const oe=e=>{const t=e.target.closest(".ac-trigger");if(!t)return;const r=t.closest(".ac").classList.contains("is-active"),o=t.querySelector(".faq-scroll-button-icon"),c=r?"#icon-Arrow-Up-Quetions":"#icon-Arrow-Down-Quetions";o.innerHTML=`<use href="${te}${c}"></use>`};se.addEventListener("click",oe);const T=20,s={wtFillingForm:document.querySelector("#Work-Together-Form"),wtModal:document.querySelector(".Work-Together-ModalWrapper"),wtResultMsg:document.querySelector(".Filling-Result-Msg"),wtModalRespTitle:document.querySelector("#Work-Together-ModalRespTitle"),wtModalRespMessage:document.querySelector("#Work-Together-ModalRespMessage"),wtModalClose:document.querySelector(".Work-Together-ModalClose"),wtModalBox:document.querySelector(".Work-Together-Modal")};s.wtFillingForm.addEventListener("submit",re);s.wtFillingForm.elements.email.addEventListener("input",F);s.wtFillingForm.elements.email.addEventListener("blur",le);s.wtFillingForm.elements.email.addEventListener("blur",$);s.wtFillingForm.elements.email.addEventListener("focus",I);s.wtFillingForm.elements.comment.addEventListener("blur",$);s.wtFillingForm.elements.comment.addEventListener("focus",I);s.wtModal.addEventListener("click",E);window.addEventListener("keydown",E);async function re(e){e.preventDefault();const t=s.wtFillingForm.elements.email.value,a=s.wtFillingForm.elements.comment.value;try{const r=await ae(t,a);ce(r)}catch(r){ie(r)}}async function ae(e,t){const o="https://portfolio-js.b.goit.study/api"+"/requests",c={method:"POST",body:JSON.stringify({email:e,comment:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}};return await fetch(o,c).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function ce(e){const{title:t,message:a}=e;ne({title:t,message:a})}function ie(e){console.error("Request failed:",e),s.wtResultMsg.textContent="Failed to send message. Please try again later."}function ne({title:e,message:t}){s.wtModalRespTitle.textContent=e,s.wtModalRespMessage.textContent=t,s.wtModal.classList.add("IsOpen")}function E(e){(!s.wtModalBox.contains(e.target)||e.target===s.wtModalClose||e.code==="Escape")&&(s.wtModal.classList.remove("IsOpen"),s.wtResultMsg.textContent="")}function le(e){e.target.value=e.target.value.trim();const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e.target.value){F(e);return}e.target.value.match(t)?de():ge()}function de(){const{email:e}=s.wtFillingForm.elements;e.classList.remove("Invalid"),e.classList.add("Success"),s.wtResultMsg.textContent="Success!",s.wtResultMsg.classList.add("Success")}function ge(){const{email:e}=s.wtFillingForm.elements;e.classList.remove("Success"),e.classList.add("Invalid"),s.wtResultMsg.textContent="Invalid email, try again",s.wtResultMsg.classList.remove("Success")}function F(e){e.target.name==="email"&&(s.wtResultMsg.textContent="",s.wtResultMsg.classList.remove("Success"));const{email:t}=s.wtFillingForm.elements;t.classList.remove("Invalid"),t.classList.remove("Success")}function $(e){e.target.setAttribute("data-value",e.target.value.trim()),e.target.value.length>T&&(e.target.value=e.target.value.slice(0,T-3).concat("..."))}function I(e){e.target.value&&(e.target.value=e.target.getAttribute("data-value"))}console.log("start js");const n="datThema",d={colorThema:""},i=document.querySelector("body"),u=JSON.parse(localStorage.getItem(n));console.log("first get",u.colorThema||!1);if(!u)console.log("localstorage is clear"),d.colorThema="light",i.classList.add("lightthema"),localStorage.setItem(n,JSON.stringify(d));else if(u.colorThema==="dark"){i.classList.remove("darkthema"),i.classList.add("darkthema");const e=JSON.parse(localStorage.getItem(n));console.log("localStore Thema is LIGHT:",e.colorThema)}else{i.classList.add("lightthema");const e=JSON.parse(localStorage.getItem(n));console.log("localStore Thema is DARK:",e.colorThema)}const pe=document.querySelector("#sitetheme");pe.addEventListener("click",ue);function ue(e){const t=JSON.parse(localStorage.getItem(n));if(console.log("localStore Thema:",t.colorThema),t.colorThema==="dark"){i.classList.contains("darkthema")&&i.classList.remove("darkthema"),d.colorThema="light",localStorage.setItem(n,JSON.stringify(d)),i.classList.add("lightthema");const a=JSON.parse(localStorage.getItem(n));console.log("localStore Thema is LIGHT:",a.colorThema);return}else{i.classList.contains("lightthema")&&i.classList.remove("lightthema"),d.colorThema="dark",localStorage.setItem(n,JSON.stringify(d)),i.classList.add("darkthema");const a=JSON.parse(localStorage.getItem(n));console.log("localStore Thema is DARK:",a.colorThema);return}}(()=>{const e=document.querySelector("[date-menu-button]"),t=document.querySelector("[date-menu]");e.addEventListener("click",()=>{const a=e.getAttribute("aria-expanded")==="true"||!1,r="background-image: url('../img/header/Group-64.png')";e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!a),t.hasAttribute("style")?t.removeAttribute("style"):t.setAttribute("style",r),t.classList.toggle("is-open"),document.body.classList.toggle("is-open")})})();
//# sourceMappingURL=commonHelpers.js.map
