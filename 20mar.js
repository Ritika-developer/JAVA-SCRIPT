// let ob ={
//name : "ritika",
// city : "bpl"
//}

// object :- collection of different mutiple type of data 
// object :- unordered hota h
// object kai element ko excess karane kai liye dot [.]  ka use karte h , excess member oprator
// nested object :- object lai andAR object


// let emp = {
// //  key   : value
//     emp_name : "ritika",
//     emp_age : 20,
//     emp_contact : 8908,
//     emp_account:{
//         emp_balance:2000,
//         emp_address:"ashoka"
//     }
// }

// console.log(emp);
// console.log(emp.emp_name);
// console.log(emp.emp_account.emp_address);





// function savedata(){
//     let name = document.querySelector('#name').value
//     let age = document.querySelector('#age').value
//     let contact = document.querySelector('#contact').value
    
// let person = {
//     pr_name : name ,
//     pr_age :age ,
//     pr_contact :contact ,
// }

// console.log(person);

// return false
// }


//or 



function savedata(){
    
let person = {
    pr_name : document.querySelector('#name').value ,
    pr_age :document.querySelector('#age').value ,
    pr_contact :document.querySelector('#contact').value ,
}

console.log(person);

return false
}

