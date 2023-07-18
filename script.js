const formOpenBtn = document.querySelector('#form-open'),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector('.form-close'),
signupButton = document.querySelector("#signup"),
loginButton = document.querySelector("#login"),
pwShowHide = document.querySelectorAll('.pw-hide');

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () =>{
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }
        else{
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});