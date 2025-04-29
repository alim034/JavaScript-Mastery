// for of loops

const arr = [1,3,4,56,456,4545,53454,4636]
for (const num of arr) {
      //console.log(`The Values is ${num}`);
}

const str = "Hello Coders"
for (const i of str) {
  //console.log(`The values is ${i}`);
}

// MAPS IN JS
/*
    Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).

    The specification requires maps to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N). 
*/

const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);


for (const [key, value] of map) {
   // console.log(key, ':-' ,value)
}

// for in looop


// forin loop --- for the objects
const my_obj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple"
}

for (const key in my_obj) {
  // console.log(key); // gives only keys
  // console.log(my_obj[key]) // gives only values
  //console.log(`${key} shorcut for the ${my_obj[key]}`);
  
}


/// forin loops --- for the array..
const programming = ["js","C","java","c++","python"]

for (const key in programming) {
    //console.log(key); // forin give the keys.
    //console.log(programming[key]) // this the way to find or print the values of the array using the forin loops.
}

/* the major difference between the forof loop and the forin loops are the following;
  the forof loops give the direct the values present in the array and object. but the forin loop not give the values present in the array and object , its give the key. 
*/

// forin loops on the map()
const map1 = new Map()

map1.set("js", "javascript")
map1.set("HTML","Hyper text markup language")
map1.set("CSS","Cascading Style sheet")

for (const [key,value] in map1) {
    console.log(key)
}

/* map() is not iterable hence it not give any output, or the not access the element of the map() using the forin loops.  but the forof loops working on the maps() */

/* for objects used forin loops
  for arrays used forof loops*/




// for-each loops
/* for each loops
  when we working on the array maximum time we used the for-each loops and the for-each loops is already built in the arrays.
*/

let coding = ["java","python","js","SQL"]

coding.forEach( function (item){
    //console.log(item)
} )

/* the for-each loops is the one of the method for the array. it take the call back is in the form function and working on the array.
  as we give the function as the call back in the for-each loops hence the function has no name.
*/

// arrow function also used as the call back in the for-each loops

coding.forEach( (item) => {
    //console.log(item); 
})


/* we can also give the some function as the call back in the for-each but only give the referance of the function..  */
function printme(i){
  console.log(i);
}

// coding.forEach(printme)

/*
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
*/

/* the come from the databes is in the form of the array , and the each values are the object in the javascripts. */



// {} , {} , {} 
/*
const myCoding = [
  {
      langName: "javascript",
      fileName: "js"
  },
  {
      langName: "java",
      fileName: "java"
  },
  {
      langName: "python",
      fileName: "py"
  },
  {
      langName: "C++",
      fileName: "cpp"
  }
]


myCoding.forEach( (item) => {
        console.log(item.langName);  
})

*/

const code = ["js", "java", "ptyhon"]

const values = code.forEach( (items) => {
    console.log(items)
    return
})

console.log(values); // give the answer as the undefined. the foreach loop not return the any thing.. 
