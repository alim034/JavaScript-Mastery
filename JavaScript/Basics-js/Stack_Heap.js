// Example of Stack memory
let x = 10;
let y = x; 
y = 20;
console.log(x); // 10
console.log(y); // 20

/* 
    1. Fast & Organized:  LIFO (Last In, First Out).
    2. Stores Primitive Data: Numbers, Strings, Booleans, null, undefined, Symbol, BigInt.
    3. Stores Function Calls: Each function call gets added to the stack and removed after execution or execution contex .
    4. Stores copy of value
    5. Changes do not affect original
*/



// Example of Heap Memory
let obj1 = { name: "Alim" };
let obj2 = obj1;
obj2.name = "Asma";

console.log(obj1.name); // "Asma"
console.log(obj2.name); // "Asma"

/*
    1. Slower & Dynamic: Memory is allocated dynamically.
    2.Stores Objects & Functions: Objects, Arrays, Functions, Dates, etc.
    3. Uses References: Variables store a reference (memory address) pointing to the heap.
    4. Stores reference to object
    5. Changes reflect in all references
*/