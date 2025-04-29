/*
    Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
*/

/*
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly braces, 
*/

function sayMyName(){
  console.log("A");
  console.log("l");
  console.log("i");
  console.log("m");
} // This is the function defination -- function func_name () and the scope of the func or {}..

// execution of the function
sayMyName // this is only referance of function
//sayMyName() // this is the , how the function is execute. 



function add(number1 , number2){
  console.log(number1+number2);
}

//add(123,454)

//let r = add(123,33);
//console.log("Result: " + r) // it gives the output as :
/*156
Result: undefined , because we only console hence it not provide the value. */


/* 
    1. when we give the value to function at the time of the function defnation it is called as the parameters. here-> number1 and number2 is parameter.
    2. when we give the value to function at the time of execution or at the time of calling then it is called as the arguments. here-> 123 and 454 is argument
*/

function add1(number1, number2){
    let result = number1+number2; // first method
   // return result

    return number1+number2 // sec method

    console.log("erete");
    /* if we write any thing after the return statement in the function the its not execute or not work */
}


// if we used the return statement in the function then only we can save the value in the other variables. if only console then not store the value in other variables.  
const res = add1(2343,34354);
//console.log("Result: " , res);


function UserLoggedMessage(usrname){
  return `${usrname} Just logged in`
}

// console.log(UserLoggedMessage("Alim")); // 1st method
let res1 = UserLoggedMessage("Asma"); // 2nd method
//console.log(res1);

console.log(UserLoggedMessage("")) // if we not give any vlaue just give the double-court then o/p is  Just logged in
console.log(UserLoggedMessage()) // if we not give any value give only empty then it give the o/p undefined Just logged in means it gives the undefined