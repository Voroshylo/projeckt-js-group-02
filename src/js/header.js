

console.log("start js");

const storageTheme = "datThema";
const dataThema = {
colorThema: "",
};

const nowThema = document.querySelector("body");
const data = JSON.parse(localStorage.getItem(storageTheme));

console.log("first get", data || false);

if (!data) {
    console.log("localstorage is clear");
    dataThema.colorThema = "light";
     nowThema.classList.add('lightthema');
    localStorage.setItem(storageTheme, JSON.stringify(dataThema));
   // return;
}

const switchThema = document.querySelector("#sitetheme");
switchThema.addEventListener("click", changeThema);

export function changeThema(element) {
    const data = JSON.parse(localStorage.getItem(storageTheme));
    console.log("localStore Thema:", data.colorThema);
    if (data.colorThema == 'dark') {
        
        if (nowThema.classList.contains("darkthema")) {
            nowThema.classList.remove("darkthema");
       }
        dataThema.colorThema = "light";
        localStorage.setItem(storageTheme, JSON.stringify(dataThema));
        nowThema.classList.add('lightthema');
        return;      
    }
    else { 
         if (nowThema.classList.contains("lightthema")) {
            nowThema.classList.remove("lightthema");
       }
          dataThema.colorThema = "dark";
        localStorage.setItem(storageTheme, JSON.stringify(dataThema));
        nowThema.classList.add('darkthema');
        return;   
    }
}

//  function burger menu mob menu

(() => {
  const menuBtnRef = document.querySelector("[date-menu-button]");
  const mobileMenuRef = document.querySelector("[date-menu]");
 // const searchRef = document.querySelector(".form-search");
  menuBtnRef.addEventListener("click", () => {
      const expanded =
          menuBtnRef.getAttribute("aria-expanded") === 'true' || false;
      
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
      mobileMenuRef.classList.toggle("is-open");
     // searchRef.classList.toggle("is-open");
      document.body.classList.toggle("is-open");

  });
})();