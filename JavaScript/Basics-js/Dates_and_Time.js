//  Dates in Javascript..

let myDate = new Date(); // Referance of Date or the object of the Date
console.log(myDate);
console.log(typeof myDate); // the type of the date is == object.. 


// when we print the date using the cons........ then it give in the very complex way or complicated hence used the function 

console.log(myDate.toString()); // Thu Apr 24 2025 00:46:03 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2025-04-23T19:16:03.134Z
console.log(myDate.toJSON()); // 2025-04-23T19:16:03.134Z
console.log(myDate.toLocaleString()); // 24/4/2025, 12:46:03 am
console.log(myDate.toLocaleDateString()); //24/4/2025

// Declaration of Specific Dates
let myCreatingDates = new Date(2025, 0, 25);
console.log(myCreatingDates.toLocaleDateString());

let myCreatingDates_1 = new Date(2025, 0, 25, 5, 7);
console.log(myCreatingDates_1.toDateString());

let myCreatingDates_2 = new Date("2025-01-23"); // YY-MM-DD
console.log(myCreatingDates_2.toLocaleDateString());

let myCreatingDates_3 = new Date("02-30-2024"); // MM-DD-YY
console.log(myCreatingDates_3.toLocaleDateString());


// Times Stamp 
let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatingDates.getTime());
// getTime() is method for the time and it give the values in the miliseconds. and when we compare the date then compare in the miliseconds.. 

// for the convertion of the miliseconds into the seconds , divide it by the 1000.. 
console.log(Date.now()/1000); // for conversion into the seconds 
console.log(Math.floor(Date.now()/1000));

