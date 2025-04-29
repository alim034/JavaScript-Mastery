function one(){
  const username = "alim";

  function two(){
    const website = "youtube"
    console.log(username); // here we can access the username because it present on the parent function hence access in the inner function beacse the global scope can access in the local scope or block.
  }
  console.log(website); // here we cannot access the website because the not the scope of website
  
  two(); // execution of two() function
}

//one(); // execution of one() function.


if(true){
  const username = "alim";
  if(username === "alim"){
    const usersur = " mohammad";
    //console.log(username + usersur); // here we can access the username because the username is in global scope or in parent.
  }
  //console.log(usersur) // here we can not access the usersur because the block scope and not allow to access out side the block.
}
// console.log(username); // here we can not access the username because the block scope , username not defined in the gloabal scope.



/* Hoisting in js */

// 1st method to defined or declared the func
console.log(addone(5)); // if we initialize the function or vairalbe before the defination of it , then it also allow or gives the output and its known as the hoisting in js. but it now always allow sometime it gives error due to the declaration format.. 
function addone(num){
  return num+1;
}
//addone(3);
//console.log(addone(5));

// 2nd method to declared the function and its also known as the expression 
const addTwo = function(num){
  return num+2;
}
addTwo(34);
console.log(addTwo(54));
