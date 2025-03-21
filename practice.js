// positive negative
// let num = parseInt(prompt("enter a number"))
// if (num>0){
//     console.log("positive");
// }
//  else{
//     console.log("negative");
    
//  }   



// even odd
// let num = parseInt(prompt("enter a number"))
// if (num%2==0){
//     console.log("even");
// }
//  else{
//     console.log("odd");
    
//  }   





//if even :-cube and odd :- area of circle
// let num = parseInt(prompt("enter a number"))
// if (num%2==0){
//     console.log(num*num*num);
// }
//  else{
//     console.log(3.14*num*num);
    
//  }   


//grade
// let a = parseInt(prompt("Enter first subject number"));
// let b = parseInt(prompt("Enter second subject number"));
// let c = parseInt(prompt("Enter third subject number"));

// // Correct the calculation by grouping (a + b + c) and then dividing by 300
// let mark = ((a + b + c) / 300) * 100;

// if (mark > 90) {
//     console.log("Grade A");
// } else if (mark >= 75 && mark < 90) {
//     console.log("Grade B");
// } else if (mark >= 60 && mark < 75) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }


// eligible for vote if you are  indian
// let age = parseInt(prompt("enter age"));
// if(age>=18){
// let a = parseInt(prompt("press 1 for indian"));
// if(a==1){
//     console.log("eligible");
// }
// else{
//     console.log("not eligible");
    
// }
// }
// else{
//     console.log("you are a child");
    
// }





//for loop
// for (let a=1;a<=5;a++){
//     console.log(a);
// }


//wap to print only odd number beetween 1 to 20
// for (let a=1;a<=20;a++){
//     if(a%2!=0){
//         console.log(a);
//     }
// }




// function 

// function sum(){
//     let a = 20;
//     let b = 10;
//     console.log(a+b);
// }

// sum()




// table
// function table(){
//     let num = parseInt(prompt("enter a number"))
// for(let a=1;a<=10;a++){
//     console.log(a*num);

// }
// }

// table()




// sum to number by function
// function sum(num){
//     console.log(num+num);
// }
// sum(20)


// function sum(num){
//     if(num%2==0){
//     console.log("even");
// }   
//     else{
//         console.log("odd");
        
//     }
// }
// sum(21)



// function sum(num){
//     return num*num
// }
// console.log(sum(20))



// area of circle 
// function demo(r){
//     return 2*3.14*r
// }
// console.log(demo(20))


// function google(){
//     return "company"
// }
// console.log(google());





// let image  = document.getElementById('image')
// image.src="22feb/kid2.jpg"

// let head=document.getElementById('head')
// head.style.backgroundColor="red"
// head.style.color="white"
// head.style.textAlign="center"


// let para=document.getElementById('para')
// para.innerHTML="hello"

// let btn = document.getElementById('btn')
// btn.style.backgroundColor="red"
// btn.style.color="white"




// let celement = document.createElement('h1')
// celement.textContent="HELLO FROM JS"
// let bd = document.body
// bd.append(celement)

// let elementh2 = document.createElement('h2')
// elementh2.textContent = "WELLDONE"
// bd.append(elementh2)

// bd.setAttribute('bgcolor','yellow')
// celement.setAttribute('align','center')

// celement.setAttribute('style','background-color:deeppink ; color:white')


// let a = document.getElementById('red')
// a.removeAttribute('style')




// function fun(){
//     alert('onclick')
// }
// function fun1(){
//     alert('ondblclick')
// }
// function fun2(){
//     alert('mouse hover')
// }
// function fun3(){
//     alert('mouse leave')
// }
// function fun4(){
//     let change = document.getElementById('head')
//     change.innerHTML='HERO'
// }
// function red(){
//     let bd = document.getElementById('body')
//     bd.style.backgroundColor="red"
// }
// function blue(){
//     let bd = document.getElementById('body')
//     bd.style.backgroundColor="blue"
// }
// function yellow(){
//     let bd = document.getElementById('body')
//     bd.style.backgroundColor="yellow"
// }




// function orange(){
//     let Image = document.getElementById('img1')
//     Image.src="26feb/download (1).jfif"
// }
// function pineapple(){
//     let Image = document.getElementById('img1')
//     Image.src="26feb/OIP.jfif"
// }
// function watermelon(){
//     let Image = document.getElementById('img1')
//     Image.src="26feb/Watermelon.webp"
// }
// function apple(){
//     let Image = document.getElementById('img1')
//     Image.src="26feb/download.jfif"
// }
// function sapodilla(){
//     let Image = document.getElementById('img1')
//     Image.src="26feb/download (2).jfif"
// }


// let vl=0
// function inc(){
//     let head = document.getElementById('head')
//     vl++
//     head.innerHTML=vl
// }

// function dec(){

//     if(vl!=0){
//         let head = document.getElementById('head')
//         vl--
//         head.innerHTML=vl
    
//     }
//     else{
// alert('not yet')
//     }
// }



// let head = document.querySelector('#head')
// head.innerHTML="RITIKA"

// let head1 = document.querySelector('.head1')
// head1.innerHTML="SALONI"

// let li = document.querySelectorAll('li')
// li[2].style.color='red'



//form
function validation(){
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