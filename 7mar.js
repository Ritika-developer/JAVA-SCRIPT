function validate(){

    let contact = document.querySelector('#contact').value

if(contact==""){
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

}