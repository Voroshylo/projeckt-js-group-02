// console.log("start js");

// const storageTheme = "datThema";
// const dataThema = {
// colorThema: "",
// };

// const nowThema = document.querySelector("body");
// const data = JSON.parse(localStorage.getItem(storageTheme));

// console.log("first get", data.colorThema || false);

// if (!data) {
//     console.log("localstorage is clear");
//     dataThema.colorThema = "light";
//      nowThema.classList.add('lightthema');
//     localStorage.setItem(storageTheme, JSON.stringify(dataThema));

// }
// else {

//      if (data.colorThema === 'dark') {

//             nowThema.classList.remove("darkthema");

//      nowThema.classList.add('darkthema');
// // nowThema.classList.add('themeDark');
//         const data = JSON.parse(localStorage.getItem(storageTheme));
//         console.log("localStore Thema is LIGHT:", data.colorThema);

//     }
//     else {

//         nowThema.classList.add('lightthema');

//         const data = JSON.parse(localStorage.getItem(storageTheme));
//     console.log("localStore Thema is DARK:", data.colorThema);

//     }
// }

// // first load thema color from localStorage +++++++===============

// const switchThema = document.querySelector("#sitetheme");
// switchThema.addEventListener("click", changeThema);

// export function changeThema(element) {
//     const data = JSON.parse(localStorage.getItem(storageTheme));
//     console.log("localStore Thema:", data.colorThema);
//     if (data.colorThema === 'dark') {

//         if (nowThema.classList.contains("darkthema")) {
//             nowThema.classList.remove("darkthema");
//        }
//         dataThema.colorThema = "light";
//         localStorage.setItem(storageTheme, JSON.stringify(dataThema));
//         nowThema.classList.add('lightthema');

//         const data = JSON.parse(localStorage.getItem(storageTheme));
//         console.log("localStore Thema is LIGHT:", data.colorThema);

//         return;
//     }
//     else {
//          if (nowThema.classList.contains("lightthema")) {
//             nowThema.classList.remove("lightthema");
//        }
//           dataThema.colorThema = "dark";
//         localStorage.setItem(storageTheme, JSON.stringify(dataThema));
//         nowThema.classList.add('darkthema');

//         const data = JSON.parse(localStorage.getItem(storageTheme));
//     console.log("localStore Thema is DARK:", data.colorThema);

//         return;
//     }
// }

// //  function burger menu mob menu ++++++++++++==================================

// (() => {
//   const menuBtnRef = document.querySelector("[date-menu-button]");
//   const mobileMenuRef = document.querySelector("[date-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//     menuBtnRef.getAttribute("aria-expanded") === 'true' || false;

//     const styleValue = "background-image: url('../img/header/Group-64.png')";

//       menuBtnRef.classList.toggle("is-open");
//      menuBtnRef.setAttribute("aria-expanded", !expanded);
//      if (mobileMenuRef.hasAttribute("style")) {
//        mobileMenuRef.removeAttribute("style");
//     }
//     else {
//       mobileMenuRef.setAttribute("style", styleValue);
//     }

//       mobileMenuRef.classList.toggle("is-open");
//       document.body.classList.toggle("is-open");

//   });
// })();

//++++++++++++++++=================================================

//=====MOBILE MODAL JS=====

document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.menu');

  function openMenu() {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  document.querySelectorAll('.nav-mob-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

// =====================================================================

//  Dark Thema switch

console.log("start js");

const storageTheme = "infoThema";
const dataThema = {
colorThema: "",
};



const nowThema = document.querySelector("body");

//localStorage.clear();

const data = JSON.parse(localStorage.getItem(storageTheme));

if (data === null) {
    console.log("localstorage is clear");
    dataThema.colorThema = "light";
     nowThema.classList.add('lightthema');
    localStorage.setItem(storageTheme, JSON.stringify(dataThema));
   
}
else {

     if (data.colorThema === 'dark') {
              
           
     nowThema.classList.add('darkthema');

        const data = JSON.parse(localStorage.getItem(storageTheme));
        console.log("localStore Thema is Dark:", data.colorThema);
        
            
    }
    else { 
      
        nowThema.classList.add('lightthema');
       
        const data = JSON.parse(localStorage.getItem(storageTheme));
    console.log("localStore Thema is Light:", data.colorThema);

      
    }
}


// first load thema color from localStorage +++++++===============





const switchThema = document.querySelector("#sitetheme");
switchThema.addEventListener("click", changeThema);

export function changeThema(element) {
    const data = JSON.parse(localStorage.getItem(storageTheme));
    console.log("localStore Thema:", data.colorThema);
    if (data.colorThema === 'dark') {
        
        if (nowThema.classList.contains("darkthema")) {
            nowThema.classList.remove("darkthema");
       }
        dataThema.colorThema = "light";
        localStorage.setItem(storageTheme, JSON.stringify(dataThema));
        nowThema.classList.add('lightthema');

        const data = JSON.parse(localStorage.getItem(storageTheme));
        console.log("localStore Thema is LIGHT:", data.colorThema);
        
        return;      
    }
    else { 
         if (nowThema.classList.contains("lightthema")) {
            nowThema.classList.remove("lightthema");
       }
          dataThema.colorThema = "dark";
        localStorage.setItem(storageTheme, JSON.stringify(dataThema));
        nowThema.classList.add('darkthema');
       
        const data = JSON.parse(localStorage.getItem(storageTheme));
    console.log("localStore Thema is DARK:", data.colorThema);

        return;   
    }
}
