function validate(){
let name = document.querySelector("#name").value
let age = document.querySelector("#age").value
let email = document.querySelector("#email").value
let pass = document.querySelector('#pass').value
let contact = document.querySelector('#contact').value


if(name==""){
    // alert("please input your name")
    let error = document.querySelector('#errorname')
    error.innerHTML="enter your name"
    error.style.color="red"
    document.querySelector('#name').focus()
    return false
}


else if(age==""){
    alert("please input your age")
    document.querySelector('#age').focus()
    return false
}
else if(isNaN(age)){
    alert("please enter a number")
    document.querySelector('#age').focus()
    return false
}
 


else if(email==""){
    alert("please input your email")
    document.querySelector('#email').focus()
    return false
}

else if(!(email.includes('@'))){
    alert('please enter valid email must have @')
    document.querySelector('#email').focus()
    return false
}



else if(pass==""){
    alert('please fill password')
    document.querySelector('#pass').focus()
    return false
}

else if(!(pass.match(/[~!@#$%^&*_=-/?+]/))){
    alert('please enter special character')
    document.querySelector('#pass').focus()
    return false
}



else if(contact==""){
    alert('please enten number')
        document.querySelector('#contact').focus()
        return false  
}

else if(isNaN(contact)){
    alert('please fil contact number')
    document.querySelector('#contact').focus()
    return false
}

else if(contact.length>10 || contact.length<10){
    alert('please fill 10 digit number')
     document.querySelector('#contact').focus()
     return false
}
