var a;
console.log(a); // When the variable is declare but not assign any value and you will try to print or run these , then it will give the answer as the "Undefined"

/*
      1. Undefined is just like a place holder in the javascript and js complier give the undefined when the some variable is declare and not assign any value. 
      2. It give the undefined , when the variable is declare then in the js it try to allocate the memory to the varialbe and these is another reson to give as undefined.
      3. Undefined is totaly different thing from the not defined. The "Undefined" and "Not defined" are totaly different things.
      4. "Undefined is not an any error but the "not defined" is an error.
*/


a = 30;
console.log(a);
a = "Hello Javascript.."
console.log(a);
/* 
    1. Here the variable a before only declare and not assign any value, but after that it assign the value 30(number) and try to print then it give the proper o/p and after that the variable assign a Hello.. (the string) and try to print it then it give the proper o/p and it is only possible in the javascript because of the javascipt is the "Loosly type lang" or "Weekly type lang".
    2. in the other lang like c,c++ etc it is not possilbe.
    3. these is the property of js to store the different values in the variables like number , string , boolen.
*/


console.log(s);
/*
    1. when we try to print the 's' directly it show as "not defined" and it is an erorr because we try to print variable which not decrale.
    2. "not defined" is an one type of error in the javascript and these error called as "ReferenceError".
*/


var b = undefined;
console.log(b);
/* 
    1. here we try to give the "undefined" to variable 'b' it not show any error it is allow. but it is not an good practice or not an good way to write the variable.
    2. due to these the consistency of the code is not mainten and in the large project may chance to show an errors.
*/