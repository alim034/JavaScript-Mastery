// if and else statement.. 
/* Following are the comparision operators
  < , > , <= , >= , != , == , === , !==
  here === means the strict equal checking , this also check the datatype of the values. 
  !== , same as the above but used to check not equal.
*/

/*
let isLoggedIn = false;

if(isLoggedIn){
  console.log("code Executed..")
}
*/

/*
let temparature = 40;
if (temparature === 50) {
    console.log("Temparature is equal to 50")
} else {
    console.log("Temparature not equal to 50")
}
*/

// let score = 200;
// if(score > 100){
//   let power = "fly";
//   console.log(`User Power ${power}`);
// }
// console.log(`User Power ${power}`); // give error , due to block scope

// short cut notation
const balance = 1000;
// if(balance>100) console.log("excuted.."); // also called implict scope

// multiple conditions
/*
if(balance<500){
  console.log("Less than 500");
}
else if(balance<750){
  console.log("Less than 750");
}
else if(balance<800){
  console.log("Less than 800");
}
else if(balance<1000){
  console.log("Less than 1000");
}
else{
  console.log("Less than 1200");
}
*/

const UserLoggedIn = true;
const creditCard = true;
const UserLoggedInGoogle = false;
const UserLoggedInEmail = true;

if(UserLoggedIn && creditCard){
  console.log("Allow for Shopping..");
}

if(UserLoggedInEmail || UserLoggedInGoogle){
  console.log("User Logged In.. ");
}