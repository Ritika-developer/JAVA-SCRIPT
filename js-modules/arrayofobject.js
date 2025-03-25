//array of object

let arr = [
    {
        name : "ritika",
        attendence : "puri",
        productivity : "accha"
    },
    {
        name : "saloni",
        attendence : "thodi",
        productivity : "nothing"
    },
     {
        name : "shivani",
        attendence : "thodi",
        productivity : "kuch bi nahi"
    },
]


console.log(arr);



arr.shift (
    {
    name : "koshal",
    attendence : "kam",
    productivity : "khatam"
    }
)



arr.unshift (
    {
    name : "koshal",
    attendence : "kam",
    productivity : "khatam"
    }
)


arr.push (
    {
    name : "koshal",
    attendence : "kam",
    productivity : "khatam"
    }
)


arr.pop (
    {
    name : "koshal",
    attendence : "kam",
    productivity : "khatam"
    }
)


// map method -> callback function ko accept karta  h , yeh new array return karta h 
// data fetch 

// event object
 let arname = arr.map((e) => {return e.name})
 console.log(arname);
 