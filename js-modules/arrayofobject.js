//array of object

let arr = [
    {
        name : "ritika",
        attendence : "puri",
        productivity : "accha",
        age : 23
    },
    {
        name : "saloni",
        attendence : "thodi",
        productivity : "nothing",
        age : 24
    },
     {
        name : "shivani",
        attendence : "thodi",
        productivity : "kuch bi nahi",
        age : 25
    },
]


console.log(arr);



// arr.shift (
//     {
//     name : "koshal",
//     attendence : "kam",
//     productivity : "khatam"
//     }
// )



// arr.unshift (
//     {
//     name : "koshal",
//     attendence : "kam",
//     productivity : "khatam"
//     }
// )


// arr.push (
//     {
//     name : "koshal",
//     attendence : "kam",
//     productivity : "khatam"
//     }
// )


// arr.pop (
//     {
//     name : "koshal",
//     attendence : "kam",
//     productivity : "khatam"
//     }
// )


// map method -> callback function ko accept karta  h , yeh new array return karta h 
//yeh shirf array pai kam karta h 
// event object
// data fetch 
 let arname = arr.map((e) => {return e.name})
 console.log(arname);
 
//filter
 let fl = arr.filter((e) => {return e.age>23})
 console.log(fl);
 