//array and function in object
// let ob = {
//     name : "ritika",
//     contact : 7483,
//     obfun : function (){
//         alert("working")
//     },
// car : ["BMW","AUDI","MARUTI"]
// }
// ob.obfun()
// console.log(ob.car[1]);




// Merge

// let ob1 = {
//     name:"ritika",age:34,contact:432423
// }

// let ob2 = {
//     city:"bpl",state:"mp"
// }

// let ob3 = {
//     ...ob1,
//     ...ob2
// }

// console.log(ob3);



// //Inshort 
// let ob1 = {
//     name:"ritika",age:34,contact:432423
// }
// let ob2 = {
//     city:"bpl",state:"mp",...ob1
// }




let ob1 = [1,2,"ritika",4,5]
let ob2 = [...ob1,6,7,8,9,10]
ob2.email = "ritika@gmail.com"
ob2.email = "ritika1234@gmail.com"
delete ob2.email

let ob3 = {
    name : "ritika",
    age : 20,
    city : "bpl"
}
for(let k in ob3)
    console.log(ob3[k]);    
console.log(ob2);

let k = Object.keys(ob3)
console.log(k[2]);


// // add element 
// ob2.email = "ritika@gmail.com"

// //over write 
// ob2.city = "indore"

// //delete object
// delete ob2.state
// console.log(ob2);

// //key find karne kai liye
// let person = {
//     name : "ritika",
//     age:20,
//     contact:648732,
//     city:"bpl"
// }

// for(let k in person){
//     console.log(k);
// }

// //key ki value print hogi
// for(let k in person){
//     console.log(person[k]);
// }

// //VIP INTERVIEW QUESTION
// //Object ek key word h :- yeh ek array print kara kai daita ta 
// //single key print hogi 
// let k = Object.keys(person)
// console.log(k[0]);

// //yeh single value print karta h 
// let v = Object.values(person)
// console.log(v[0]);
