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


let ob1 = {
    name:"ritika",age:34,contact:432423
}

let ob2 = {
    city:"bpl",state:"mp"
}

let ob3 = {
    ...ob1,
    ...ob2
}

console.log(ob3);
