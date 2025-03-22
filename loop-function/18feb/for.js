//for (Infinity;condition;inc/decrement)

// for(let a=1;a<=5 ; a++){
//     console.log(a);
// }


// type of for loop
//1. for,   for of ,    for in ,     for each ,   do while,   while


//wap to print only odd number beetween 1 to 20


//  for( let a=1;a<=20;a++){
//      if(a%2!=0){
//          document.write(a,"<br>");
//      }
//  }


 for (let b=20;b>=1;b--){
    document.write("<h1>"+ b +"</h1>")
    }




/* function is a block of code or set of instruction
type of function :- pre define and user defined */



function Sum (){
    let a=10;
    let b=20;
    console.log(a+b);
}
Sum()


function Table(){
    let t=parseInt(prompt("enter a number"))

    for( let i=1;i<=10;i++){
        console.log(i*t);
    }
}
Table()