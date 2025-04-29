# javascript and classes

Do javascript really have classes??????????
➡️ javascript does have classes. This features introduced with the ECMA-Script 2015 specification oftened refered as the ES6. However's its important to note date javascript is prototype-based language. and its classes are primary syntactic sugar over existing prototype-based inheritance based mechanisms. javascript provide a more familier syntax for developers coming from class-based languages such as java and c++, but under the wood , its work some what differently..

## OOP {Object Oriented Programming..}

 - OOP in JavaScript (Object-Oriented Programming) is used to organize your code better by grouping related data and actions together into objects.
 - OOP is a pradim, means the way of writing and the structural format of the langauges. 
 - js has objects..
 
# objects 
 - collection of properties and the methods or functions
 - ex: isLower() , setInterval etc

# why oops 
 - writing messy, scattered code
 - Easier to understand 
 - Easier to reuse 
 -  Easier to update 

# four piller of the oops
1. abstraction 
2. encapsulation
3. inheritance 
4. polymorphism

➡️ Abstraction
- Show only the important stuff, hide the unnecessary details.
- Example: You drive a car without knowing how the engine works.

➡️ Encapsulation
- Wrap data and methods together into one unit (like an object).
- Also protect data from direct access (use private variables).

➡️ Inheritance
- Reuse code from one class (parent) into another class (child).
- Child class inherits properties and methods from the parent class.

➡️ Polymorphism
- Same function name can behave differently for different objects.
- Example: speak() can make a dog bark and a cat meow.



### parts of oops

- object literals
- constructor function
- prototype
- classes
- Instances (new , this)

## object literals 
- basically the objects. 
- basic building blocks 
- contain the data , method , properties and the functions.

# constructor function
- constructor funcrtion always gives the new instance to each and everyone. 
- A special function used to create objects easily.
- Naming rule: Constructor function names start with a capital letter (e.g., Car(), Person()).
- Inside it, this keyword is used to set properties for the new object.


new Keyword 🆕
- new is used to create a new object from a constructor function.

It does 4 things automatically:

1. Creates an empty object {}.
2. Sets 'this' inside the constructor to point to that object.
3. Adds properties/methods to the object.
4. Returns the new object.

🔥🔥 ProtoType 
{prototype behaviour}
prototype provide the functionality of the new keyword  
prototype provide the functionality of the new keyword
prototype provide the inheritance , prottype inheritance 
prototype provide the functionality of the classes

⚒️ Facts
- prototype of array is object. 
- prototype of string is object.
-- the function is function but if we can required then , we can also acts as the function as object.
- hence prototype of the function is also the object.

### call() and this

call() is used to run a function, but set your own this (manually) for it.
In simple words:
- Take a function,
- Tell it which object to work on (this),
- Run it immediately.

## The call() method is a built-in function in JavaScript that allows you to invoke a function with a specified this context and arguments provided individually.
-- When you call a function normally, the value of this inside that function depends on how the function was called. However, with call(), you can explicitly set the value of this inside the function.
-- This is particularly useful when you want to borrow methods from one object and use them in the context of another object, without having to duplicate code.

Note: call() is similar to apply(). The main difference is in how arguments are passed:
call() accepts an argument list.
apply() accepts a single array of arguments.