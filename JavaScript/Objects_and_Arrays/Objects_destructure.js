const course = {
  courseName: "js in hindi",
  coursePrice: 999,
  courseInstructor: "Hitesh Choudary"
}

//console.log(course.courseInstructor); // normal method to access the object values , but some time in the large project its not the best method , hence we used the concept called as the objects destructuring.

const {courseInstructor} = course // this the object destrucure method
const {courseInstructor: Instructor} = course // we can also change the name of the key using this method when the name is to large.. 
const {coursePrice} = course
// console.log(courseInstructor);
// console.log(Instructor);
// console.log(coursePrice);

/**** API AND JSON */

// {
//   "name":"alim",
//   "email": "alim@gmial.com",
//   "phoneNumber": "895655652"
// }

// this is the structure of the JSON and is the like normal object but in this the key also in the double-corut.

[
  {},
  {},
  {}
] // this is the another way of Declaring the JSON 

// JSON -Javascript object notation