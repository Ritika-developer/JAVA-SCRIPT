function validate(){
let name = document.querySelector("#name").value
let age = document.querySelector("#age").value
let email = document.querySelector("#email").value

if(name==""){
    alert("please input your name")
    document.querySelector('#name').focus()
    return false
}

else if(age==""){
    alert("please input your age")
    document.querySelector('#age').focus()

    return false
}

else if(email==""){
    alert("please input your email")
    document.querySelector('#email').focus()

    return false
}
}