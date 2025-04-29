/* this keyword */
/*
  1. this is used to refer the current context.
  2. this is the simple refernce used to refer the current data or element.
  3. badically refer for the object and its methods or data.. 
*/

const user = {
  username: "alim",
  email: "alimmohammad034@gmail.com",
  course: "js from strach",
  welcomeMess: function(){
    console.log(`${this.username} , Welcome to website..`)
    console.log(this)
  }
}

// user.welcomeMess();
// user.username = "Ujwal"
// user.welcomeMess();
// console.log(user.email)

// console.log(this);
/* Important note:
  when we run the console.log(this) in the browser then it gives the output as window , because their is the window are the global. 
  when we run the console.log(this) in the node environment it gives the output as {} because here the global contenxt is this. 

  before , when the js only run on the browser then this refer to the current context hence give the output as window . but now days js has own running environment like node ect hence js refer to the current context available and give output according to itt... 
*/

/* ++++ ARROW FUNCTION ++++ */
function one(){
  let username = "alim"
  //console.log(this.username); // the "this" not work on the function.
}
/* when we run console.log(this) inside the function in the node environment then it gives the values like global value , clearimmediate etc. */

const func = function(){
  let username = "alim";
  //console.log(this.username);
} // the "this" not work on the function or inside the function.


// Declarations of the Arrow Function

const one_f = () => {
  let username = "alim";
  console.log(this.username);
} 
// this is also not work on the arrow function 
// if we run the console.log(this) inside the arrow function then it gives the output as the {} .


// Basic syntax  of arrow function 
/* 1. () =>
  2. we can also hold the arrow function in the variables
      ex: const fun_name = () => 
  3. we can also provide the parameters to the arrow function
      ex: const func_name = (parameter1 , parameter2 , ---) =>
*/  


const add_num = (num1 , num2) => {
    return num1+num2
}      

// console.log(add_num(34,43));


// implicit return in the arrow function
const sub_num = (num1 , num2) => num1-num2 // 1st way for implicit return

console.log(sub_num(34,10));
/* in the implicit return , we not need to write the curly braces and the "return" , js compiler implicit consider and return the correct output.  */

const mul_num = (num1, num2) => (num1*num2) // 2nd way for implicit return
console.log(mul_num(45,8));

/* if we write the curly braces then compulsary write the "return" and its not consider as the implicit return. hence either used the parenthese or not . (like way1 and way2) */

// for object - implicit return 
const user_data = (username) => ({username:"alim"}) // first used the parenthesis inside this curly braces for object. 
console.log(user_data());
