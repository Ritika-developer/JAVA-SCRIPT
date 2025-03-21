
// array => collection of different type of data
// [] , ordered
// index => start from 0 , position of element 


let arry = [12,20.6,'ritika',true]
console.log(arr);
console.log(arr[2]);

// for values
for(let i of arr){
    console.log(i);
}

// //for index value
for(let k in arr){
    console.log(k);
}


let input = prompt('enter a list ');
let array = input.split(",");
console.log(array);



// let arr =[ 3,5,2,6,8,2,]
// //add last element
// arr.push("second last element")
// arr.push("last element")
// console.log(arr);

// //add element in first
// arr.unshift("first element" , "second element")
// console.log(arr);



// //remove last element in an array
// arr.pop()
// console.log(arr);




// //remove first element in an array
// arr.shift()
// console.log(arr);


// beetch kai koi bhi element 
let arr = ["ritika",20,6545,"bhopal","fsd"]
let part = arr.slice(1,4)
console.log(part);


let arr1 = [1,2,3,45,6,7,5,89,10,34,76,87]
let part1 =arr1.slice(2,11)
console.log(part1);

for(let i of part1){
if(part1%2==0){
    console.log(part1);
}
}

