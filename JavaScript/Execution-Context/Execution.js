// javascript is the single threated languages
/* Javascript Execution Context
    there are the following execution context
      1. Global Execution context {this -- refer the global Execution context. for browser - window object and for node environment its curly braces{} }
      2. Funtion / Functional Execution context
      3. Eval Execution context. 
*/

/* Execution of the javascript program in two phases
      1. Memory / Memory Creation Phase
      2. Code execution phase. 
*/


let val1 = 10;
let val2 = 30;
function add(num1,num2){
  let total = num1+num2;
  return total;
}
let result1 =  add(val1,val2);
let result2 = add(49,38);


/* When Program execute then
    1. Global execution 
        and the global execution allocate to the "this"
    2. Memory Phase
        in the memory phase the memory allocate to each variabl and function and objects.
        in first cycle of the memory execution
        for variable its -- undefined
        for function its -- defination or write the whole code present in the function defination..
    3. Code Exeution phase 
        run code and complete the calculations.. 
    4. when the function occur during these , then it created new execution context , and the whole process of memory creation , code execution are performed for those function . and when the work of  the function is completed then the newly created execution context is delete.. 
    5.  When the program process is completed , and work is completed then the whole execution context is deleted.
*/


