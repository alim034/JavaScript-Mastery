/* there are two type of scope 
    1.Global scope
    2. Block scope or local scope.
*/

/* Important points
  1. values available in the gloabal scope can be used in the local or block scope and it is allows , each and every terms we can used in the block scope from the global scope.
  2. basically block scope represent by curly-brces{} , ex: if(){} this block scope of the if statement etc.
  3. the data or values available in the block scope which only accessable in the block or within the scope we can not access those values out side the block scope.
 */


let a = 200;
const d =90; // this is global scope.. 

if(true){
  let a = 20;
  const b = 20;
  //var c = 39;
  console.log(a)
  console.log(d) // allows becuase the d present in the global scope. 
} // this is the block scope and the values not accessable outside

console.log(a); // here js compiler gives the error as a is not defined because the block scope.
console.log(b); // here js compiler gives the error as a is not defined because the block scope.
console.log(c); // here gives the output as 39 . the var is not support to the bloack scope hence we generally avoid the used of the var. because it casuse the unnecassay error due to the not support of block scope. 
