


function signup(){

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    if (email==+"" || password===""){
        alert('please enter')
    }
    let userData = {
        p_email : email,
        p_password : password
    };
    
    localStorage.setItem("user",JSON.stringify(userData));
    alert('signup successful');
    console.log(ob);
    return false

    }
    
    


function login(){
   
    let email1 = document.getElementById('email1').value;
    let password1 = document.getElementById('password1').value;
   let storedUser = localStorage.getItem('user');

if(!storedUser){
    alert('no user found');
    return false;
}

let userData = JSON.parse(storedUser);


    if (email1 === userData.p_email && password1 === userData.p_password) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }

    
    return false;
    }
    