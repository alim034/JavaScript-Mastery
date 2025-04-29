const email = [];

if(email){
  console.log("User Logged In");
}
else{
  console.log("user not logged in")
}

// Falsy Values
/*
    false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
*/

// Truthy Values
/*
    "0" , 'false' , " " , [] , {} , function(){}
*/

if(email.length === 0){
  console.log("Array is Empty");
}

const empty_obj = {}
if(Object.keys(empty_obj).length === 0){
  console.log("Object is Empty");

}

/*
    1. false == 0
      o/p -> true
    2. false == ''
      o/p -> true
    3. o == ''
      o/p -> true
*/

// Nullish Coalescing Operator (??) : only for the null and undefined.
let val1;
val1 = 5 ?? 10; // o/p -> 5
val1 = null ?? 90 // o/p -> 90
val1 = undefined ?? 45    // o/p -> 45
val1 = null ?? 10 ?? 30   // o/p -> 10

console.log(val1);

// Terniray Operators

// condition ? true : false

const IceTeaPrice = 100;
IceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")