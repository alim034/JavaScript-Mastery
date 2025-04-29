// rest operator in js
// the spread operator also called as the rest operator and its depand on the use case , which called as the rest or spread operator.

function calculateCardPrice(...num1){
  return num1
}
//console.log(calculateCardPrice(434)); // for this it give the correct output but when we gives the multiple values then it print only the first value. for this we used the rest operator.
/* syntax is :
    calculateCardPrice(...num1)
*/
// rest operator gives the output in the array format.. 
//console.log(calculateCardPrice(23,65,45,899,666,45454,34376,56567));


// Passing the object in the function

const user = {
  name: "alim",
  price: 1999
}

function objectHandle(anyobject){
  console.log(`The username is ${user.name} and the price is ${user.price}`);
}

//objectHandle(user); 
// direct object passing in the function
/* console.log(objectHandle({
  name: "alim",
  price: 200
}));
*/


// Passing Array to the Function

const mynewarr = [233,3343,5353];

function printSecondElement(getArray){
  console.log("Second Element of the Array is: ");
  return getArray[1];
}

console.log(printSecondElement(mynewarr)); // passing the alrady created array.
console.log(printSecondElement([122,34343,23224,343434])); // direct passing the array.
