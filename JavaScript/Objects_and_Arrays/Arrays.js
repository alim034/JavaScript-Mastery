// Arrays......

const arr = [1,2,3,4,5,5,6,7];
console.log(arr);

let arr1 = ["alim", "ujwal", "mahesh", "Akash", "David"]
console.log(arr1);

let arr2 = [12,34,54,656,"alim","bestie"]
console.log(arr2); 

// In the js the size of the array is changble or we can resize it, and in the js the array also content the elements of different type like num , string , boolean is allows is js.


// Arrays Method
const arrr = new Array(12,435,656,768,454,868);
console.log(arrr);

arrr.push(34); // the push() method is used to add the element in the array. and the element add at the last place of the array.
console.log(arrr);

arrr.pop(); // the pop() method is used to remove the element from the array. and pop() method remove the last element of the array. we don't neeed to give the any argument in the pop method  it bydefault remove last element.
console.log(arrr);

arrr.unshift(2343); // unshift method also used to add the element in the array but unshift add the element at the starting of the array or at the first index.
// not recommanded to used the unshift or the not best practice because it add the element at the first index due to that the sequecnce of th array completely changed and the problem on the optimization of the code.. 
console.log(arrr);

arrr.shift(); // shift() method is like the pop() mthod but it remove the first element or the element present at the first index. shift method don't need to give any argument.
console.log(arrr);

console.log(arrr.includes(2343)); // This method is used to check whether the given element present in the array or not
// The Answer of the includes() method is boolean or in true or false.. 
console.log(arrr.indexOf(12)); // This function is used to find out the index of the particular element.
// if the element is not present in the array then it gives -1 as the answer.



let myarr = new Array(1,2,3,4,5,6,7);
let newarr = myarr.join();

console.log(myarr);
console.log(newarr);
// The join() method give the same value but the format of the array or output is changed in the newarr. and the main point is that the type of the array is object but after using the join() method the newarr type is string.


// slice and splice

console.log("A ", myarr);

const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B ", myarr);


const myn2 = myarr.splice(1,3);
console.log(myn2);
console.log("C ", myarr);


// slice() and splice() both method are used to print the array element within the particular range.
// Following are the Difference between the slice and the splice methods
/**
 1. the slice() method not add the range element and the splice() method add the range element.
 for example: slice(1,3) and splice(1,3) then the slice method give only two value or element between range 1-3. the splice method give the three element between the range 1-3, that means add the range or not add the range.. 
 ***THE MAIN DIFFERENCE***
  2. when we used the slice() method the main array is not change slice give the element from the array. and when we used the splice() method the main array is changed , splice() method give the element between the range but remove those element from the main array........ 
 */