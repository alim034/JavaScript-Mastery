// Map

/* map is the method used for work on the arrays. the map method also required the call back values and the call back values provided by the arro functions. the map method return the values.  */
/* filter is game just like work on when its true or false. but the map is different and work according to condition. */

const numbers = [1,2,3,4,5,5,6,7,7,8,9,5]

let res = numbers.map( (nums) => nums+20 )
// console.log(res);


/* Concept of chainning
  when we used the more than 1 method its called as the chaining concepts. 
  example: .map().map()
            .map().filter() 
            .map().map().map() etc..

  in the chaining concept the values comes as the output from first method willl be works as the input for the second method. 
*/

let nums = [1,2,3,4,5,6,7,8,9,10]
let res1 = nums
            .map( (items) => items*20)
            .map( (items) => items+89)
            .filter( (itmes) => itmes>=50)

console.log(res1);
            