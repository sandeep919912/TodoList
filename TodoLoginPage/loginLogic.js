let userMail = document.getElementById("userMail");
let userPassword = document.getElementById("userPassword");

function check(){

    const storePassword = localStorage.getItem(userMail.value);

    if(!userMail.value){
        alert("please enter usermail");
    }
    else if(!storePassword){
        alert("user not exist");
    }
    else if(storePassword === userPassword.value){
        window.location.href = "../todo.html"
    }
    else{
        alert("password is wrong");
    };
    userMail.value = "";
}

document.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        check()
    }
})

