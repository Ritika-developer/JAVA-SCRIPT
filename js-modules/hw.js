// ADD :- 
// NAME CHANGE = SUM 
// EXPORT DEFAULT 
import sum from "./hw1.js";
let add = sum(2,3)
console.log(add);

// SUB :- EXPORT DEFAULT
import sub from "./hw2.js";
let minus = sub(3,4)
console.log(minus);

// AREA OF CIRCLE :- 
//  EXPORT NAME
import {aoc} from "./hw3.js"
let A = aoc(4)
console.log(A);

// MULTIPLY :- 
// NAME CHANGE = MUL 
// EXPORT NAME
import {multi as mul} from "./hw4.js";
let multi = mul(2,3)
console.log(multi);
