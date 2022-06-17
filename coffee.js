
const hamburger  = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const body = document.querySelector("body");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");

    if(hamburger.classList.contains("active")){
        body.style.overflow = "hidden";
    }else{
        body.style.overflow = "auto";
    }
});

