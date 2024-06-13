
const dataThema = {
colorThema: "",
};

const nowThema = document.querySelector("body");
const data = JSON.parse(localStorage.getItem("typeThema"));

if (!data) {
    console.log("localstorage is clear");
    dataThema.colorThema = "light";
     nowThema.classList.add('lightthema');
    localStorage.setItem('typeThema', JSON.stringify(dataThema));
   // return;
}

const switchThema = document.querySelector(".switchthema");
switchThema.addEventListener("click", changeThema);

export function changeThema(element) {
    const data = JSON.parse(localStorage.getItem("typeThema"));
    console.log("localStore Thema:", data.colorThema);
    if (data.colorThema == 'dark') {
        
        if (nowThema.classList.contains("darkthema")) {
            nowThema.classList.remove("darkthema");
       }
        dataThema.colorThema = "light";
        localStorage.setItem('typeThema', JSON.stringify(dataThema));
        nowThema.classList.add('lightthema');
        return;      
    }
    else { 
         if (nowThema.classList.contains("lightthema")) {
            nowThema.classList.remove("lightthema");
       }
          dataThema.colorThema = "dark";
        localStorage.setItem('typeThema', JSON.stringify(dataThema));
        nowThema.classList.add('darkthema');
        return;   
    }
}