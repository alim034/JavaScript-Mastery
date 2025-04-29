// reduce method

/*
    The reduce() method reduces an array to a single value by running a function on each element (from left to right).
    Basic Syntax: array.reduce(callback, initialValue)
    callback is a function that runs for each item.
    initialValue is optional — it's the starting value.
*/

// using normal function
let nums = [1,2,3,4,5,6];

const res = nums.reduce( function( acc , currval){
      //console.log(`Accumulator(acc) : ${acc} and CurrentValue(currval) : ${currval}`)
      //return acc+currval;
},0)

//console.log(res);


// using he arrow functions

let nums1 = [1,2,3,4,5];

const res1 = nums1.reduce( (acc,currval) => {
  //console.log(`Accumulator(acc) : ${acc} and CurrentValue(currval) : ${currval}`)
  //return acc+currval;
},9 )

//console.log(res1)

let shoppingcart = [
  {
    prodName: "face wash",
    price: 299
  },
  {
    prodName: "hand wash",
    price: 99
  },
  {
    prodName: "body wash",
    price: 599
  }
]

const priceToPay = shoppingcart.reduce( (acc, items) => acc+items.price ,  0 )

console.log(priceToPay)