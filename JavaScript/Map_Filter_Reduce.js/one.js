// filter 

const nums = [1,2,3,4,5,6,7,8,9,10]

/* filter is one of the method to work on the array. it also required the call back. and the call back is given through the function or arrow functions. in this filter we can used both the implicit and explicit return concepts */
/* filter return the values. this is the difference between the filter and foreach */
let fil = nums.filter( (items) => items > 4) // implicit return
// console.log(fil);

let fil1 = nums.filter( (items) => {
    return items > 4 // explicit return.. 
})

//console.log(fil1);

const books = [
  {
    bookName: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    publishYear: 1960,
    editionYear: 2015
  },
  {
    bookName: "1984",
    authorName: "George Orwell",
    publishYear: 1949,
    editionYear: 2021
  },
  {
    bookName: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    publishYear: 1925,
    editionYear: 2020
  },
  {
    bookName: "The Catcher in the Rye",
    authorName: "J.D. Salinger",
    publishYear: 1951,
    editionYear: 2019
  },
  {
    bookName: "Pride and Prejudice",
    authorName: "Jane Austen",
    publishYear: 1813,
    editionYear: 2018
  },
  {
    bookName: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    publishYear: 1937,
    editionYear: 2022
  },
  {
    bookName: "Fahrenheit 451",
    authorName: "Ray Bradbury",
    publishYear: 1953,
    editionYear: 2020
  },
  {
    bookName: "Brave New World",
    authorName: "Aldous Huxley",
    publishYear: 1932,
    editionYear: 2021
  },
  {
    bookName: "Moby-Dick",
    authorName: "Herman Melville",
    publishYear: 1851,
    editionYear: 2017
  },
  {
    bookName: "The Alchemist",
    authorName: "Paulo Coelho",
    publishYear: 1988,
    editionYear: 2023
  }
];

let userBook = books.filter( (items) => items.publishYear === 1951);
// console.log(userBook)

const userBook1 = books.filter( (items) => {
      return items.authorName === "Paulo Coelho" && items.editionYear === 2023
})
console.log(userBook1);

