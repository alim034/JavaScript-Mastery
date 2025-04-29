const name = "Alim"
const s_name = "Mohammad"
const repo_count = 10

console.log(name+ " " +s_name);  // Normal method of Concatenation

console.log(`My Name is ${name} and my github repo_count is ${repo_count}`); // in this the "${}" called as the string interpolation. and in this used the back tik not single or double court.

// String Declaration mehtods
const my_name = "Alim" // normal method in this the behind the scence it treat as the object in the javascript.. 
console.log(my_name);


const Name = new String('Mohammad Alim') // Here the it directly treat as the object 
console.log(Name);

console.log(Name.length); // This function give the length of the string.
console.log(Name.toUpperCase()); // This function convert the given string into uppercase letters. here o/p is ALIM
console.log(Name.toLowerCase()); // This function convert the given string into lower case letters. here o/p is alim
console.log(Name.charAt(5)); // This function is used to find out the character at those position aur at those index.
console.log(Name.indexOf('A')); // This function is used to find out the index of character in the given string.. 
console.log(Name.replace('A','S')); // This function replace the one character from another character.


const n = Name.substring(1,4); // It give the substring from the given string and when you give the negative value in range , ex: (-3,3) then in this method or function it ignore the negative valu of range , and consider the range from the o(Zero)... 
console.log(n);

const n1 = Name.slice(0,4); // Give the value between range , here we also give the value of range as the negative ex: (-7,4)
console.log(n1);


let n2 = "  ALIM  ";
console.log(n2);  // this give the output with the spaces and all.. 
console.log(n2.trim()); // this trim() method remove the all spaces and give the only name or the string. This Function work on the both 1.white space and 2.Line terminator

let n3 = "Black-White-Blue-Red-Pink-Green";
console.log(n3.split('-')); // This Function Split the String based on the give condition of split, here the split condition is '-'. 


const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`); 


var n4 = "Alim";
console.log(n4.big()); // it gives this o/p --> <big>Alim</big> maximum used in the HTml


var n5 = "The Boys are very smart!!";
console.log(n5.endsWith("smart!!")); // The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.


const sent = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(
    `The word "${word}" ${
      sentence.includes(word) ? 'is' : 'is not'
    } in the sentence`,
); // The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.


const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
];

for (const str of strings) 
{
    console.log(str.isWellFormed());
} // The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.


const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';
console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);  //The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.


const paragraph1 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph1.match(regex);
console.log(found); //The match() method of String values retrieves the result of matching this string against a regular expression.


const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0]);
console.log(array[1]); // The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.
