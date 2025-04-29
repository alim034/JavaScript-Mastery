const myName = "Alim      ";

//console.log(myName.length); // for the above case this gives the wrong output , because its contain 4 letter and .length property also consider the white-spce or blank-spaces.
//console.log(myName.trim().length); // when we used the trim() method then it gives the correct output

// Task: all the string available in the code , contain the property names as truelength. and it give the correct length of the string. 

let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: 'sling',

    getPower: function(){
      console.log(`the power of spiderman is ${this.spiderman}`)
    }
}

Object.prototype.alim = function(){
  console.log(`alim is present in all objects`);
}


Array.prototype.alimsay = function(){
    console.log(`alim says Hello Coder👋`)
}

// heroPower.alim();
// myHeros.alim();
// heroPower.alimsay();
// myHeros.alimsay();

// inheritance

const user = {
      username: "chai",
      email: "chai@yaho.com"
}

const Teacher = {
      makeVideo: true
}

const TeachingSupport = {
      isAvailable: true
}

const TASupport = {
      makeAssignment: 'js assignment',
      fulltime: true,

      __proto__: TeachingSupport
}

__proto__.Teacher = user

/* __proto__ is used to access the another object properties in the current object , now day's is not used.. because we used the classes and its work on the objects  */


// mordern syntax

Object.setPrototypeOf(TeachingSupport , Teacher)


// Task Solution here

const anotherusername = "asma                ";

String.prototype.truelength= function(){
    console.log(`${this}`);
    console.log(`True Lenght is: ${this.trim().length}`)
}

anotherusername.truelength();

let w1 = "alim   ";
let w2 = "ayan                                       ";
let w3 = "daniyal  ";

w1.truelength();
w2.truelength();
w3.truelength();