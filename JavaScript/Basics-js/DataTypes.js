"use strict" // Treat all js code as the newer version of javascript.. 

var a = 123  // Directly Treat as Integer Type no Need to defined as other lang.
var a = "Alim"  // Directly Treat as String Type.
var a = 3.23  // Directly Treat as Float Value.
var a = true // Directly Treat as Boolean Type.


/*
            "Primative Data Types"

    1. Number --> Range- 2 to power 53
    2. bigint --> one type of data type in js , when the Integer Value not stored or out of  range of int , then it is used..
    3. String --> " " <-- all thing in the double cort treat as string.
    4. boolean --> true/false 
    5. null --> standalone value 
    6. undefined --> varaible declare but not assign any value then it show it 
    7. symbol --> unique "Mostly used in the react compotent"
      "To find the uniqueness of the component symbol is used."
      " Example: mostly used in the figma like tools."
*/

/*
        "Non-Premative Data Type"

    1. object --> object is a collection of properties.
             The Property is an associated between name (key) and a value..
*/


console.log(typeof "alim")  // 'typeof' used to find out the type of the variables


console.log(typeof null) // type of the null is ***object***
console.log(typeof undefined) // it show only undefined.

/* Primitive DataTypes
Total - 7
        1. String
        2. Number
        3. Boolean
        4. null
        5. Undefined
        6. Symbol
        7. BigInt
*/

/* Non-Primitive DataTypes
        1. Arrays
        2. Object
        3. Functions
*/

let str = "Alim"; // String Example
let num = 123; // Number Example
let isLog = true; // Boolean Example
let ac_balance = null; // Null Example
let ch; // Undefined
console.table([str,num,isLog,ac_balance,ch]);


// symbol Example
let s1 = Symbol('Alim');
let s2 = Symbol('Alim');
console.log(s1==s2);


// Arrays Example
let arr = [1,2,3,4,5,3,4,3,64,6];
console.log(arr);


// Object Example
let my_obj = {
        name: "Alim",
        age: 20,
        gender: 'Male',
        contact: 9370150313
}
console.log(my_obj);


// Function Example 
let my_func = function(){
        console.log("Mohammad Alim");
        console.log("CSE Student at PRPCEM");
        console.log("Pre-Final Year Student");
}
console.log(my_func);

let func = function(){
        console.log("Hello Coders 👋");
        console.log("It's Javascript..");
        // console.log("Pre-Final Year Student");
}
console.log(func);
