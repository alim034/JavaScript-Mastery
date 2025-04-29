/* there are two ways to declare the object in the java
    1. Literals
    2. constructors
*/
/* 
  when we create the object using the constructor then it make as the singletone object.
  when we declared the object as the literal then the sibgleton is not formed.
*/

const mySymb = Symbol("key1");

const user = {
  name: "Alim",
  [mySymb]: "mykey1",
  age: 20,
  eamil: "alimmohammmad034@gamil.com",
  address: "Paradise Colony Amravati",
  "Phone Number": 9370150313,
  Degree: "Bachlore of Engineering"
}

// Accessing the data or element of the Function..
// console.log(user.name);
// console.log(user["name"]);

// console.log(user["Phone Number"]);
// console.log(user[mySymb]);


// changing the value of the key or element in the function..
user.eamil = "asmask07@gmail.com";
// console.log(user["email"]);

// Object.freeze(user)
user.name = "Asma";
// console.log(user["name"]);


user.greeting = function(){
  console.log("Hello Coders");
}

user.greetingTwo = function(){
  console.log(`Hello Coder ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());

