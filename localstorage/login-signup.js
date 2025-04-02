
function signup(){
let s_username = document.getElementById('s_username').Value
let s_userpassword = document.getElementById('s_userpassword').Value

localStorage.setItem('username',s_username)
localStorage.setItem('userpassword',s_userpassword)

location.href="login.html"
return false

}


function login(){
let l_username = document.getElementById('l_username').Value
let l_userpassword = document.getElementById('l_userpassword').Value


let loginname = localStorage.getItem('username',l_username)
let loginpassword = localStorage.getItem('userpassword',l_userpassword)

if(loginname == l_username && loginpassword==l_userpassword){
    location.href="signup.html"
}
else {
    alert('invalid')
}
return false
}


