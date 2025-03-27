// let submit = document.getElementById('submit')

// submit.onclick=(e) => {
//     e.preventDefault();

//     let username = document.getElementById('name').value;
//     let userage = document.getElementById('age').value;
//     let usercity  = document.getElementById('city').value;

// let getname = localStorage.getItem("name")
// let getage = localStorage.getItem("age")
// let getcity = localStorage.getItem("city")
// if(username == "" && userage == "" && usercity == ""){
//     alert('invalid')
// }
// else if(username == getname && userage == getage && usercity == getcity){
// alert('successful')
// }
// }



function form(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let city = document.querySelector('#city').value
    
let person = {
    pr_name : name ,
    pr_age :age ,
    pr_city :city 
}
localStorage.setItem("userdata",JSON.stringify(person))

console.log(person);

return false

}
