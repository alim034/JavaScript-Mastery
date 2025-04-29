// Immediately Invoked Function Expression (IIFE)
/* IIFE Used for the following resons
  1. to immediately call the function after its defination.
  2. to avoid the polution of the global scope.
*/

// 1. to immediately execute or call
(function one() {
  console.log(`Database Connected`);
})();

/* ()() --> syntax for immediately calling , first () used for the defination or inside this parenthesis complete function is return and the second () is used for the calling or execution. and after the second parenthesis we compulsary need to add the semicolone[;] to end the calling or the function */

(() => {
  console.log(`Database Connected two`)
})();


// the parameters and the argument for the IIFE.
((username) => {
  console.log(`Database Connected three ${username}`)
})("alim") 
/** parameter give in the call parenthesis. and the argument gives in the first or defination parenthesis. */

/* there are two IIFE
    1. Named IIFE
    2. UNnamed IIFE
*/

// EXAMPLE OF NAMED IIFE:
(function one() {
  console.log(`Database Connected`);
})();

// EXAMPLE OF UNnamed IIFE:
(() => {
  console.log(`Database Connected two`)
})();