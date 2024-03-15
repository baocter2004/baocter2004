var btnLogin = document.querySelector(".btn-login");
var wrapper = document.querySelector(".wrapper");
var btnClose = document.querySelector(".icon-close");
function Open(e){
    console.log(e.target);
    wrapper.classList.add("show");
    wrapper.classList.remove("hide");
}

function Close(e){
    console.log(e.target);
    wrapper.classList.remove("show");
    wrapper.classList.add("hide");
}
btnLogin.addEventListener("click",Open);
btnClose.addEventListener("click",Close);


// check form

function Emailcheck(){
    let email = document.getElementById("email").value;
    let texte = document.getElementById("texte");
    let emailTrue = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email == ""){
        wrapper.classList.remove("valid");
        wrapper.classList.remove("invalid");
        texte.innerHTML = "";
    }else{
        if(email.match(emailTrue)){
            wrapper.classList.add('valid');
            wrapper.classList.remove('invalid');
            texte.innerHTML = "Your Email Address in Valid";
            texte.style.color = "green";
        }else{
            wrapper.classList.remove('valid');
            wrapper.classList.add('invalid');
            texte.innerHTML = "Please Enter Valid Email";
            texte.style.color = "#ff0000";
        }
    }

}


function Passwordcheck(){
    let password = document.getElementById("password").value;
    let textp = document.getElementById("textp");
    // Tạo một biểu thức chính quy để kiểm tra ký tự hoa
    let upperCase = new RegExp("[A-Z]");
    if(password === ""){
        wrapper.classList.remove("valid");
        wrapper.classList.remove("invalid");
        textp.innerHTML = "";
    }else{
        if(password.length < 6 || password.length > 20){
            wrapper.classList.add("valid");
            wrapper.classList.remove("invalid");
            textp.innerHTML = "Please your pass in (6 - 20) words";
            textp.style.color = "#ff0000";
        }else{
            // Sử dụng phương thức test() để kiểm tra password có chứa ký tự hoa hay không
            if(upperCase.test(password)){
                wrapper.classList.remove("valid");
                wrapper.classList.add("invalid");
                textp.innerHTML = "Password is great";
                textp.style.color = "green";
            }else{
                wrapper.classList.add("valid");
                wrapper.classList.remove("invalid");
                textp.innerHTML = "Password requires 1 capital letter";
                textp.style.color = "#ff0000";
            }
        }
    }
}

let password = document.getElementById("password");
password.addEventListener("keydown",Passwordcheck);
