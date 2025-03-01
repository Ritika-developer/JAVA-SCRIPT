//for (Infinity;condition;inc/decrement)

// for(let a=1;a<=5 ; a++){
//     console.log(a);
// }

//wap to print only odd number beetween 1 to 20


//  for( let a=1;a<=20;a++){
//      if(a%2!=0){
//          document.write(a,"<br>");
//      }
//  }


//  for (let b=20;b>=1;b--){
//     document.write("<h1>"+b+"</h1>")
//     }




/* function is a block of code or set of instruction
type of function :- pre define and user defined */



// function Sum (){
//     let a=10;
//     let b=20;
//     document.write(a+b);
// }

// Sum()


function Table(){
    let t=parseInt(prompt("enter a number"))

    for( i=1;i>=10;i++){
        document.write(i*t);
    }
}


Table()