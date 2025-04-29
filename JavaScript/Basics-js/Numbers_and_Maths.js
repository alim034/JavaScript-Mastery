// Numbers Stuff Here

let score = 400 // js compiler consider as the number..
console.log(score);

let balance = new Number(200); // when we strictly defined the number only then used the "new" keyword for declaration and the defination of the number..
// This type of the declaration or the defination of the number provide the some method of the number like..
/*
1. To exponential
2. To String
3. To localstring and the other Number function or the method.. 
*/ 
console.log(balance);

console.log(balance.toString()) // This function convert the Number into the string and then we also apply the methods of the string on it.. 
console.log(balance.toString().length)

console.log(balance.toFixed(2)); // This function is used to fixed the number of the zero or the value after the decimal 
// In this example the o/p is 200.00 ..

let sec_number = 23.7454;
console.log(sec_number.toPrecision(2)); // Number of significant digits. Must be in the range 1 - 21, inclusive.
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// This precision more focus on the left of the decimal number like the 23.546 on the 23..

let hund = 100000000000000000;
console.log(hund.toLocaleString()); // when the number is to large and at the time of reading it's difficult then used this function break into the proper format due to that the readability is easy.. 
/** 
    1. if we only write the toLocalString() --> then js compiler gives the output in the us standards.
    2. for the indian standards we required to write like the following:
    toLocalString('en-IN');
 */
console.log(hund.toLocaleString('en-IN'));


/** The Following are the other important function of the Numer:
    1. Max_value
    2. Min_value
    3. isSafeInteger
    4. isInteger
    5. isFinite
    6. MAX_SAFE_INTEGER
    7. MIN_SAFE_INTEGER
    8. NEGATIVE_INFINITY..
 */


   /* ************** MATHS ************ */

console.log(Math);
console.log(Math.abs(-4)); // This function or method give the absolute value of given number. just means --> it convert the negative number into the positive number but not vice versca.. 
console.log(Math.round(4.2)); // This function gives the rounded value of the Number.
console.log(Math.ceil(6.5)); // This function gives the ceiling value of the number or the higher value of the given number.. 
console.log(Math.floor(4.5)); // This function gives the floor value of the number or the lowest value related to those num.. 

console.log(Math.max(10,34,75,86,45)); // This function gives the maximum value among the all gives values.. 
console.log(Math.min(23,65,345,-89,66));  // This function gives the Minimum value among the all gives values.. 


console.log(Math.sqrt(49)); // This function gives the square root of the given number.. 
console.log(Math.pow(3,2)); // This function gives the power of the number or used to calculate the power of the number.. 


// Random in Math
console.log(Math.random()); // random() always give the value between the 0 and 1 , ex: 0.454 ,0,65657 etc.

console.log(Math.random()*10); // we multiply by the 10 , to shift the number in the decimal ex: if the random give the 0.545 then after multiplying by 10 it gives the 5.454.
console.log((Math.random()*10)+1); // when we multiply by 10 , then sometimes it gives the 0 , then to avoid the 0 we add the 1 into it

console.log(Math.floor((Math.random()*10)+1)); // we used the concept of the floor value for the value only in one digit.. 


// Certain Condition
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min); // this is the formula used for random to decide the min and the max value and to avoid the zero and to take only the values required
