function validate(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let contact = document.querySelector('#contact').value

    if(name==""){
       
        alert('please enter name')
        document.querySelector('#name').focus()

        let errorname = document.querySelector('#errorname')
        errorname.innerHTML="enter your  name <br><br>"
        errorname.style.color="blue"
        return false
    }
    else if(age==""){
        alert('please enter age')
        document.querySelector('#age').focus()
        return false
    }

    else if (isNaN(age)){
        alert('please enter number')
        document.querySelector('#age').focus()
        return false
    }
    else if(email==""){
        alert('please enter email')
        document.querySelector('#email').focus()
        return false
    }
else if (!(email.includes('@'))){
    alert('you must have include @')
    document.querySelector('#email').focus()
    return false
}

    else if(password==""){
        alert('please enter password')
        document.querySelector('#password').focus()
        return false
    }

    else if (!(password.match(/[@!#$%^&*()_+]/))){
        alert('please enter special character')
        document.querySelector('#password').focus()
        return false
    }
    else if(contact==""){
        alert('please enter contact')
        document.querySelector('#contact').focus()
        return false
    }

    else if(isNaN(contact)){
        alert('please enter number')
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length<10 || contact.length>10){
        alert('please fill 10 digit number')
     document.querySelector('#contact').focus()
     return false
    }
}