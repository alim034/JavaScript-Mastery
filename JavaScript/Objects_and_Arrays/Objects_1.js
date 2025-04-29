const tinderUser = new Object(); // This object is singleton object.
console.log(tinderUser);

const tinderUser1 = {} // this object is not singleton object.. 
console.log(tinderUser1);

/* in the above example the both object gives the same output ,but the first is singleton and the second is not singletone. */

// add data in the objects..
tinderUser1.name = "Samm";
tinderUser1.id = "123abc";
tinderUser1.isloggedin = false;
tinderUser1.balance = "1239999";
console.log(tinderUser1);


const regularUser = {
  email: "some@gamil.com",
  fullname: {
    userFullName:{
      firstName: "Mohammad",
      middleName: "Alim",
      lastName: "Mohammad Mobin"
    }
  }
}

console.log(regularUser.email);
console.log(regularUser.fullname.userFullName.firstName);


// Assigning the object through the assign() method. assign(target , source). assign({}, target, source)..
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj_result = (obj1,obj2) //this method not give the proper output and not merge the array in the proper format.. 
console.log(obj_result); 


const obj_result1 = Object.assign({},obj1,obj2);
console.log(obj_result1);

/* 
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
*/

const obj_res = {...obj1, ...obj2};
console.log(obj_res); // using the spread operator. simple way to merge the more than two objects.. 


// Arrays of objects
const arr_obj = [
  {
    id: 12,
    name: "alim",
    email: "some@gmail.com"
  },
  {
    id: 13,
    name: "samm",
    email: "sammm@gamil.vom"
  },
  {
    id:14,
    name: "boob",
    email: "boob@gmail.com"
  }
]

// accessing the element or data from the arrray objects
console.log(arr_obj[1].email);
console.log(arr_obj[2].name);
console.log(arr_obj[0].id);


/// Finding the key , values and the entries of the objects
const obj = {
  id: 12,
  name: "bob",
  email: "bob123@gmail.com",
  phoneNum: "123234434",
  address: "america"
}

console.log(Object.keys(obj)); // This method Object.keys(name_object) used for finding the all the keys of the object. and the output of this method in the form of the array..
console.log(Object.values(obj)); // This method Object.values(name_object) used for finding the all the values of the keys of object. and the output of this method in the form of the array..
console.log(Object.entries(obj)); // This method Object.entries(name_object) used for finding the all the entries available in the object. and the output of this method in the form of the array..
 
// to check the certain property or the values available in the object then used the following method
console.log(Object.hasOwnProperty('address')); // the output of this method is in the form of the boolean
