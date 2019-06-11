let login = document.querySelector(".main-login-list__login");
let register = document.querySelector(".main-login-list__register");
let registerCard = document.querySelector(".header__container-registration");
let loginCard = document.querySelector(".header__container-signin");

login.onclick = function(){
    loginCard.style.display = "block";
    registerCard.style.display = "none";
}

register.onclick = function(){
    registerCard.style.display = "block";
    loginCard.style.display = "none";
}
