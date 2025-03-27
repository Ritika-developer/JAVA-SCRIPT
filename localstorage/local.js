// localStorage.setItem("username","ritika")
// localStorage.setItem("userage",78)
// localStorage.setItem("usercontact",7837823)


// let name = localStorage.getItem("username")
// console.log(name);

// let ag = localStorage.getItem("userage")
// console.log(ag);


// localStorage.removeItem("usercontact")

// localStorage.clear()

let ob = {
    name :"ritika",
    contact :472847,
    age:20
}

localStorage.setItem("username",JSON.stringify(ob))
// let user =(localStorage.getItem('username'))

let user = JSON.parse(localStorage.getItem('username'))
console.log(user);
console.log(user.name);

// localStorage.setItem("username",JSON.parse(ob))