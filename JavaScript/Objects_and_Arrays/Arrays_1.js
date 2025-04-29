let marvel_heros = ["Thor", "Iron Man", "Hulk"];
let dc_heros = ["Batman","Zatana","Robin"];


marvel_heros.push(dc_heros) // this method is not applicable or give the proper output it not merge the array properlyy...... 
// console.log(marvel_heros);
// console.log(dc_heros);

let n1 = marvel_heros.concat(dc_heros);
// console.log(n1);
// console.log(marvel_heros);
// console.log(dc_heros);

let n2 = [...marvel_heros , ...dc_heros]; /// spread operators.
//console.log(n2);

/* 
    the concat() method give the answer in the same array, but the spread operator method give the answer in the other varaible or array. 
*/



let another_arr = [1,2,3,[1,2,3,4,5,6,7,8],9,8,7,6,[9,6,5,7,4,5,3,5,7]]
let new_an_arr = another_arr.flat(Infinity); /// The maximum recursion depth
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(new_an_arr);



let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;
let str1 = "java";
let str2 = "python";
let str3 = "javascript";
let str4 = "typescript";
let str5 = "mongoDB";

console.log(Array.of(score1,score2,score3,score4,score5,str1,str2,str3,str4,str5));
