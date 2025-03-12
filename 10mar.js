//ONCLICK
let btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{alert("click")})

//ONDOUBLECLICK
let btn1 = document.querySelector('#btn1')
btn1.addEventListener('dblclick',()=>{alert("double click")})

//ONMOUSEENTER
let btn2 = document.querySelector('#btn2')
btn2.addEventListener('mouseenter',()=>{alert("mouse enter")})


//ONMOUSELEAVE
let btn3 = document.querySelector('#btn3')
btn3.addEventListener('mouseleave',()=>{alert("mouse leave")})


//ONCONTEXTMENU
let btn4 = document.querySelector('#btn4')
btn4.addEventListener('contextmenu',()=>{alert("context menu")})


//array => collection of different type of data
// [] , ordered
// index => start from 0 , position of element 


// let arr = [12,20.6,'ritika',true]
// console.log(arr);
// console.log(arr[2]);

// // for values
// for(let i of arr){
//     console.log(i);
// }

// //for index value
// for(let k in arr){
//     console.log(k);
// }



let arr = [a,b,c,d]
let a = parseInt(prompt('enter a number'))
let b = parseInt(prompt('enter a number'))
let c = parseInt(prompt('enter a number'))
let d = parseInt(prompt('enter a number'))

    console.log(arr[a,b,c,d]);

