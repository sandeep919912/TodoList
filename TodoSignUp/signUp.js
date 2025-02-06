const submit = document.getElementById("submit")
const username = document.getElementById("username")
const password = document.getElementById("password")

function setuser(){
    if(username.value === ""){
        alert("you have to enter your name")
    }
    else{
        localStorage.setItem(username.value , password.value)
        window.location.href = "./TodoLoginPage/login.html"
        alert("signUp successful")
    }
    username.value = ""
}

function loginPage(){
    // let loginBtn = document.getElementById("btn")
    window.location.href = "./TodoLoginPage/login.html"
 
}
